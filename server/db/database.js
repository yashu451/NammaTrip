import { DatabaseSync } from 'node:sqlite';
import path from 'node:path';
import fs from 'node:fs';
import os from 'node:os';
import { fileURLToPath } from 'node:url';
import dotenv from 'dotenv';

// Ensure environment variables are loaded in standalone execution or ESM hoist
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * Resolves the SQLite database file path based on configuration.
 * Supports configurable DATABASE_PATH (e.g. ./data/nammatrip.db, /tmp/nammatrip.db,
 * or /var/data/nammatrip.db for Render persistent disks).
 * Defaults to ./data/nammatrip.db relative to the project root.
 */
export function resolveDatabasePath() {
  const configured = process.env.DATABASE_PATH;
  if (!configured || configured.trim() === '') {
    return path.resolve(__dirname, '../../data/nammatrip.db');
  }

  const trimmed = configured.trim();
  const resolved = path.resolve(trimmed);

  // If path already exists and is a directory
  try {
    if (fs.existsSync(resolved) && fs.statSync(resolved).isDirectory()) {
      return path.join(resolved, 'nammatrip.db');
    }
  } catch (err) {
    // Ignore stat error and proceed
  }

  // If the path ends with a separator or does not have an extension, treat as directory
  if (trimmed.endsWith('/') || trimmed.endsWith('\\') || !path.extname(resolved)) {
    return path.join(resolved, 'nammatrip.db');
  }

  return resolved;
}

/**
 * Ensures the target directory exists and is writable.
 * If the configured path cannot be used (e.g. /var/data on Render Free where no persistent disk is mounted),
 * safely falls back to a guaranteed writable location (local ./data or system tmpdir)
 * so the process never crashes on startup.
 */
export function getSafeDatabasePath() {
  const targetPath = resolveDatabasePath();
  const targetDir = path.dirname(targetPath);

  try {
    if (!fs.existsSync(targetDir)) {
      fs.mkdirSync(targetDir, { recursive: true });
    }
    fs.accessSync(targetDir, fs.constants.W_OK);
    return targetPath;
  } catch (err) {
    console.warn(`[SQLite] Warning: Configured database directory "${targetDir}" is not writable (${err.message}).`);

    // On Render Free (ephemeral container), fall back to ./data or system temp directory
    const defaultDir = path.resolve(__dirname, '../../data');
    try {
      if (!fs.existsSync(defaultDir)) {
        fs.mkdirSync(defaultDir, { recursive: true });
      }
      fs.accessSync(defaultDir, fs.constants.W_OK);
      const fallbackPath = path.join(defaultDir, 'nammatrip.db');
      console.warn(`[SQLite] Falling back to local writable path: ${fallbackPath}`);
      return fallbackPath;
    } catch {
      const tmpPath = path.join(os.tmpdir(), 'nammatrip.db');
      console.warn(`[SQLite] Falling back to system temp path: ${tmpPath}`);
      return tmpPath;
    }
  }
}

/**
 * Applies the complete SQLite table and index schema.
 * Safe to execute repeatedly (uses CREATE TABLE IF NOT EXISTS and CREATE INDEX IF NOT EXISTS).
 */
export function initializeSchema(database) {
  // Enable WAL mode and foreign keys
  try {
    database.exec('PRAGMA journal_mode = WAL;');
  } catch (walErr) {
    console.warn('[SQLite] Notice: WAL mode fallback:', walErr.message);
  }
  database.exec('PRAGMA foreign_keys = ON;');

  database.exec(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      email TEXT UNIQUE NOT NULL COLLATE NOCASE,
      password_hash TEXT NOT NULL,
      language_pref TEXT DEFAULT 'en',
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );

    CREATE TABLE IF NOT EXISTS user_profiles (
      user_id INTEGER PRIMARY KEY,
      phone TEXT,
      home_city TEXT DEFAULT 'Bengaluru',
      travel_style TEXT DEFAULT 'moderate',
      dietary_pref TEXT DEFAULT 'all',
      interests TEXT DEFAULT '["Heritage", "Culture", "Food"]',
      FOREIGN KEY(user_id) REFERENCES users(id) ON DELETE CASCADE
    );

    CREATE TABLE IF NOT EXISTS password_resets (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      user_id INTEGER NOT NULL,
      token TEXT UNIQUE NOT NULL,
      expires_at INTEGER NOT NULL,
      used INTEGER DEFAULT 0,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY(user_id) REFERENCES users(id) ON DELETE CASCADE
    );

    CREATE TABLE IF NOT EXISTS trips (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      user_id INTEGER NOT NULL,
      title TEXT NOT NULL,
      destination TEXT NOT NULL,
      starting_city TEXT NOT NULL,
      duration_days INTEGER NOT NULL,
      travelers_count INTEGER NOT NULL,
      budget_per_person REAL NOT NULL,
      total_budget REAL NOT NULL,
      estimated_total_cost REAL NOT NULL,
      feasibility_status TEXT NOT NULL,
      preferences_json TEXT NOT NULL,
      transport_mode TEXT NOT NULL,
      itinerary_json TEXT NOT NULL,
      budget_breakdown_json TEXT NOT NULL,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY(user_id) REFERENCES users(id) ON DELETE CASCADE
    );

    CREATE TABLE IF NOT EXISTS favorites (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      user_id INTEGER NOT NULL,
      destination_id TEXT NOT NULL,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      UNIQUE(user_id, destination_id),
      FOREIGN KEY(user_id) REFERENCES users(id) ON DELETE CASCADE
    );

    CREATE INDEX IF NOT EXISTS idx_trips_user_id ON trips(user_id);
    CREATE INDEX IF NOT EXISTS idx_favorites_user_id ON favorites(user_id);
    CREATE INDEX IF NOT EXISTS idx_password_resets_token ON password_resets(token);
  `);
}

/**
 * Creates and initializes a DatabaseSync instance with safe path resolution and schema creation.
 */
export function createDatabaseConnection(customPath) {
  let dbPath = customPath || getSafeDatabasePath();
  let database;

  try {
    database = new DatabaseSync(dbPath);
  } catch (err) {
    console.warn(`[SQLite] Failed to open database at "${dbPath}": ${err.message}. Retrying at system temp directory.`);
    dbPath = path.join(os.tmpdir(), 'nammatrip.db');
    database = new DatabaseSync(dbPath);
  }

  initializeSchema(database);
  return { db: database, path: dbPath };
}

const { db, path: activeDbPath } = createDatabaseConnection();

export function getActualDatabasePath() {
  return activeDbPath;
}

export default db;
