-- NammaTrip AI Database Schema (SQLite 3 / node:sqlite)

PRAGMA journal_mode = WAL;
PRAGMA foreign_keys = ON;

-- Users Table
CREATE TABLE IF NOT EXISTS users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  email TEXT UNIQUE NOT NULL COLLATE NOCASE,
  password_hash TEXT NOT NULL,
  language_pref TEXT DEFAULT 'en',
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- User Profiles Table
CREATE TABLE IF NOT EXISTS user_profiles (
  user_id INTEGER PRIMARY KEY,
  phone TEXT,
  home_city TEXT DEFAULT 'Bengaluru',
  travel_style TEXT DEFAULT 'moderate',
  dietary_pref TEXT DEFAULT 'all',
  interests TEXT DEFAULT '["Heritage", "Culture", "Food"]',
  FOREIGN KEY(user_id) REFERENCES users(id) ON DELETE CASCADE
);

-- Password Resets Table
CREATE TABLE IF NOT EXISTS password_resets (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  user_id INTEGER NOT NULL,
  token TEXT UNIQUE NOT NULL,
  expires_at INTEGER NOT NULL,
  used INTEGER DEFAULT 0,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY(user_id) REFERENCES users(id) ON DELETE CASCADE
);

-- Saved Trips & Generated Itineraries Table
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

-- Bookmarked Favorite Destinations Table
CREATE TABLE IF NOT EXISTS favorites (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  user_id INTEGER NOT NULL,
  destination_id TEXT NOT NULL,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  UNIQUE(user_id, destination_id),
  FOREIGN KEY(user_id) REFERENCES users(id) ON DELETE CASCADE
);
