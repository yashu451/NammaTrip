import { DatabaseSync } from 'node:sqlite';
import path from 'node:path';
import fs from 'node:fs';
import { fileURLToPath } from 'node:url';
import bcrypt from 'bcryptjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dataDir = path.resolve(__dirname, '../../data');
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

const dbPath = path.join(dataDir, 'nammatrip.db');
const db = new DatabaseSync(dbPath);

// Enable WAL mode and foreign keys
db.exec('PRAGMA journal_mode = WAL;');
db.exec('PRAGMA foreign_keys = ON;');

// Initialize schema
db.exec(`
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
`);

// Seed default demo user if not exists
try {
  const checkUser = db.prepare('SELECT id FROM users WHERE email = ?').get('demo@nammatrip.ai');
  if (!checkUser) {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync('NammaTrip2026!', salt);
    const insertUser = db.prepare(`
      INSERT INTO users (name, email, password_hash, language_pref)
      VALUES (?, ?, ?, ?)
    `);
    const result = insertUser.run('Kavitha Hegde', 'demo@nammatrip.ai', hash, 'en');
    const userId = Number(result.lastInsertRowid);

    db.prepare(`
      INSERT INTO user_profiles (user_id, home_city, travel_style, dietary_pref, interests)
      VALUES (?, ?, ?, ?, ?)
    `).run(userId, 'Bengaluru', 'heritage', 'vegetarian', JSON.stringify(['Heritage', 'Culture', 'Food']));

    // Add initial favorite
    db.prepare(`
      INSERT OR IGNORE INTO favorites (user_id, destination_id)
      VALUES (?, ?)
    `).run(userId, 'hampi');
    db.prepare(`
      INSERT OR IGNORE INTO favorites (user_id, destination_id)
      VALUES (?, ?)
    `).run(userId, 'badami');

    console.log('✅ Default demo user seeded (demo@nammatrip.ai / NammaTrip2026!)');
  }
} catch (err) {
  console.warn('Note on seeding:', err.message);
}

export default db;
