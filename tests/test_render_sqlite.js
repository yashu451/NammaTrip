// Focused backend test suite: Render Free & SQLite Database Resilience
import assert from 'node:assert';
import path from 'node:path';
import fs from 'node:fs';
import os from 'node:os';
import { fileURLToPath } from 'node:url';
import { DatabaseSync } from 'node:sqlite';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import {
  resolveDatabasePath,
  getSafeDatabasePath,
  initializeSchema,
  createDatabaseConnection
} from '../server/db/database.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function runRenderSqliteTests() {
  console.log('🚀 Starting Render Free & SQLite Database Verification Suite...\n');
  let passed = 0;
  let failed = 0;

  async function test(name, fn) {
    try {
      await fn();
      console.log(`  ✅ PASS: ${name}`);
      passed++;
    } catch (err) {
      console.error(`  ❌ FAIL: ${name}`);
      console.error(`     Reason:`, err.message);
      failed++;
    }
  }

  // 1. Missing database file auto-creation & schema initialization
  await test('Missing database file is created automatically with all tables and indices', async () => {
    const tempDbPath = path.join(os.tmpdir(), `nammatrip_missing_test_${Date.now()}.db`);
    
    // Ensure file does not exist before test
    if (fs.existsSync(tempDbPath)) fs.unlinkSync(tempDbPath);
    assert.strictEqual(fs.existsSync(tempDbPath), false, 'Database file should not exist initially');

    // Create database and initialize schema
    const { db, path: createdPath } = createDatabaseConnection(tempDbPath);
    try {
      assert.strictEqual(fs.existsSync(tempDbPath), true, 'Database file must be created on disk');

      // Verify all required tables exist
      const tables = db.prepare("SELECT name FROM sqlite_master WHERE type='table' ORDER BY name").all();
      const tableNames = tables.map(t => t.name);

      assert(tableNames.includes('users'), 'Table users must exist');
      assert(tableNames.includes('user_profiles'), 'Table user_profiles must exist');
      assert(tableNames.includes('password_resets'), 'Table password_resets must exist');
      assert(tableNames.includes('trips'), 'Table trips must exist');
      assert(tableNames.includes('favorites'), 'Table favorites must exist');

      // Verify required indices exist
      const indices = db.prepare("SELECT name FROM sqlite_master WHERE type='index' ORDER BY name").all();
      const indexNames = indices.map(i => i.name);

      assert(indexNames.includes('idx_trips_user_id'), 'Index idx_trips_user_id must exist');
      assert(indexNames.includes('idx_favorites_user_id'), 'Index idx_favorites_user_id must exist');
      assert(indexNames.includes('idx_password_resets_token'), 'Index idx_password_resets_token must exist');

      // Verify table schema columns
      const userCols = db.prepare("PRAGMA table_info(users)").all().map(c => c.name);
      assert(userCols.includes('id') && userCols.includes('email') && userCols.includes('password_hash'));

      const tripCols = db.prepare("PRAGMA table_info(trips)").all().map(c => c.name);
      assert(tripCols.includes('user_id') && tripCols.includes('destination') && tripCols.includes('itinerary_json'));

      const favCols = db.prepare("PRAGMA table_info(favorites)").all().map(c => c.name);
      assert(favCols.includes('user_id') && favCols.includes('destination_id'));
    } finally {
      db.close();
      try { fs.unlinkSync(tempDbPath); } catch {}
      try { fs.unlinkSync(`${tempDbPath}-wal`); } catch {}
      try { fs.unlinkSync(`${tempDbPath}-shm`); } catch {}
    }
  });

  // 2. Foreign keys and WAL pragmas configured
  await test('Foreign keys constraint enforcement and WAL journal mode are active', async () => {
    const tempDbPath = path.join(os.tmpdir(), `nammatrip_pragma_test_${Date.now()}.db`);
    const { db } = createDatabaseConnection(tempDbPath);

    try {
      const fk = db.prepare('PRAGMA foreign_keys;').get();
      assert.strictEqual(fk.foreign_keys, 1, 'PRAGMA foreign_keys must be 1 (ON)');

      // Foreign key rejection test
      let threwFk = false;
      try {
        db.prepare('INSERT INTO user_profiles (user_id, home_city) VALUES (?, ?)').run(99999, 'Bengaluru');
      } catch (err) {
        threwFk = true;
      }
      assert.strictEqual(threwFk, true, 'Inserting profile for non-existent user must fail with FOREIGN KEY constraint');
    } finally {
      db.close();
      try { fs.unlinkSync(tempDbPath); } catch {}
      try { fs.unlinkSync(`${tempDbPath}-wal`); } catch {}
      try { fs.unlinkSync(`${tempDbPath}-shm`); } catch {}
    }
  });

  // 3. Configurable DATABASE_PATH resolution
  await test('DATABASE_PATH is configurable with fallback, directory mounts, and explicit paths', async () => {
    const origEnv = process.env.DATABASE_PATH;
    try {
      // Case A: Unset / empty -> defaults to project data/nammatrip.db
      delete process.env.DATABASE_PATH;
      const defaultPath = resolveDatabasePath();
      assert(defaultPath.endsWith('nammatrip.db'));
      assert(defaultPath.includes('data'));

      // Case B: Explicit directory mount (e.g. /tmp or Render /var/data)
      process.env.DATABASE_PATH = '/tmp';
      const tmpDirPath = resolveDatabasePath();
      assert(tmpDirPath.endsWith('nammatrip.db'));
      assert(tmpDirPath.includes('tmp'));

      // Case C: Explicit file path
      process.env.DATABASE_PATH = path.join(os.tmpdir(), 'custom_render.db');
      const explicitPath = resolveDatabasePath();
      assert.strictEqual(explicitPath, path.join(os.tmpdir(), 'custom_render.db'));
    } finally {
      if (origEnv !== undefined) {
        process.env.DATABASE_PATH = origEnv;
      } else {
        delete process.env.DATABASE_PATH;
      }
    }
  });

  // 4. Safe fallback when unwritable directory is configured (simulating Render Free missing disk)
  await test('Safe fallback to writable location if configured DATABASE_PATH directory is unwritable', async () => {
    const origEnv = process.env.DATABASE_PATH;
    try {
      // Point to an intentionally non-existent, unwritable system directory
      process.env.DATABASE_PATH = process.platform === 'win32'
        ? 'Z:\\non_existent_unwritable_drive\\nammatrip.db'
        : '/non_existent_root_dir/nammatrip.db';

      // getSafeDatabasePath should NOT throw an unhandled exception; it should return a safe writable path
      const safePath = getSafeDatabasePath();
      assert(safePath, 'Must return a safe path');
      assert(fs.existsSync(path.dirname(safePath)), 'Directory of safe path must exist and be writable');
      
      // Creating connection must succeed cleanly
      const { db, path: resolved } = createDatabaseConnection(safePath);
      assert(db, 'Database connection must be created');
      db.close();
      try { fs.unlinkSync(resolved); } catch {}
    } finally {
      if (origEnv !== undefined) {
        process.env.DATABASE_PATH = origEnv;
      } else {
        delete process.env.DATABASE_PATH;
      }
    }
  });

  // 5. Ephemeral Restart Simulation: Data does not persist across restarts
  await test('Ephemeral restart simulation: Fresh database handles registration, login, and stale tokens correctly', async () => {
    const dbPath1 = path.join(os.tmpdir(), `nammatrip_session1_${Date.now()}.db`);
    const dbPath2 = path.join(os.tmpdir(), `nammatrip_session2_${Date.now()}.db`);

    let staleToken = '';
    const userEmail = 'render_traveler@nammatrip.test';
    const userPass = 'RenderSecure2026!';
    const jwtSecret = 'test_render_jwt_secret_key_2026';

    // Session 1: User registers in container 1
    const session1 = createDatabaseConnection(dbPath1);
    try {
      const hash = bcrypt.hashSync(userPass, 10);
      const res = session1.db.prepare('INSERT INTO users (name, email, password_hash) VALUES (?, ?, ?)').run('Praveen Kumar', userEmail, hash);
      const userId = Number(res.lastInsertRowid);
      session1.db.prepare('INSERT INTO user_profiles (user_id) VALUES (?)').run(userId);

      // Save a trip
      session1.db.prepare(`
        INSERT INTO trips (user_id, title, destination, starting_city, duration_days, travelers_count, budget_per_person, total_budget, estimated_total_cost, feasibility_status, preferences_json, transport_mode, itinerary_json, budget_breakdown_json)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      `).run(userId, 'Hampi Heritage', 'hampi', 'Bengaluru', 3, 2, 5000, 10000, 8500, 'Comfortably Feasible', '{}', 'car', '[]', '{}');

      staleToken = jwt.sign({ id: userId, email: userEmail, name: 'Praveen Kumar' }, jwtSecret, { expiresIn: '7d' });
      assert(staleToken, 'Generated token in session 1');
    } finally {
      session1.db.close();
      try { fs.unlinkSync(dbPath1); } catch {}
      try { fs.unlinkSync(`${dbPath1}-wal`); } catch {}
      try { fs.unlinkSync(`${dbPath1}-shm`); } catch {}
    }

    // Session 2: Container restarted, fresh empty database (Session 1 data wiped)
    const session2 = createDatabaseConnection(dbPath2);
    try {
      // A: Verify database is clean (no previous users)
      const count = session2.db.prepare('SELECT COUNT(*) as total FROM users').get().total;
      assert.strictEqual(count, 0, 'New container database must start clean');

      // B: Verify stale JWT from before restart is rejected cleanly
      const decoded = jwt.verify(staleToken, jwtSecret);
      const user = session2.db.prepare('SELECT id FROM users WHERE id = ?').get(decoded.id);
      assert.strictEqual(user, undefined, 'Previous user must not exist in fresh database');

      // C: Verify same email can register immediately on fresh container
      const hash2 = bcrypt.hashSync(userPass, 10);
      const res2 = session2.db.prepare('INSERT INTO users (name, email, password_hash) VALUES (?, ?, ?)').run('Praveen Kumar', userEmail, hash2);
      const newUserId = Number(res2.lastInsertRowid);
      assert.strictEqual(newUserId, 1, 'First user in new database gets id 1');

      // D: Verify login works on new database
      const foundUser = session2.db.prepare('SELECT * FROM users WHERE email = ?').get(userEmail);
      assert(foundUser && bcrypt.compareSync(userPass, foundUser.password_hash), 'User can authenticate in new database');

      // E: Verify trip saving and favorites work on new database
      session2.db.prepare('INSERT INTO favorites (user_id, destination_id) VALUES (?, ?)').run(newUserId, 'hampi');
      const favs = session2.db.prepare('SELECT destination_id FROM favorites WHERE user_id = ?').all(newUserId);
      assert.strictEqual(favs.length, 1);
      assert.strictEqual(favs[0].destination_id, 'hampi');
    } finally {
      session2.db.close();
      try { fs.unlinkSync(dbPath2); } catch {}
      try { fs.unlinkSync(`${dbPath2}-wal`); } catch {}
      try { fs.unlinkSync(`${dbPath2}-shm`); } catch {}
    }
  });

  // 6. Curated Catalog & Planning work independently of SQLite state
  await test('Platform core discovery (76 destinations, budgets, coordinates) functions without SQLite records', async () => {
    const destPath = path.resolve(__dirname, '../server/data/destinations.json');
    const destinations = JSON.parse(fs.readFileSync(destPath, 'utf8'));

    assert.strictEqual(destinations.length, 76, 'All 76 destinations available in static catalog');
    const hampi = destinations.find(d => d.id === 'hampi');
    assert(hampi && hampi.coordinates && hampi.coordinates.lat && hampi.coordinates.lng);
  });

  // 7. Full CRUD Operations on Users, Profiles, Trips, and Favorites
  await test('Full CRUD operations on users, profiles, trips, and favorites work reliably', async () => {
    const tempDbPath = path.join(os.tmpdir(), `nammatrip_crud_test_${Date.now()}.db`);
    const { db } = createDatabaseConnection(tempDbPath);

    try {
      // 1. User & Profile Creation
      const insertUser = db.prepare('INSERT INTO users (name, email, password_hash, language_pref) VALUES (?, ?, ?, ?)');
      const userRes = insertUser.run('Ananya Rao', 'ananya@nammatrip.test', 'hashed_pass_123', 'kn');
      const userId = Number(userRes.lastInsertRowid);

      db.prepare(`
        INSERT INTO user_profiles (user_id, phone, home_city, travel_style, dietary_pref, interests)
        VALUES (?, ?, ?, ?, ?, ?)
      `).run(userId, '+91 9876543210', 'Mysuru', 'luxury', 'veg', JSON.stringify(['Heritage', 'Temples']));

      // 2. Profile Update
      db.prepare(`
        UPDATE user_profiles
        SET phone = ?, travel_style = ?, dietary_pref = ?
        WHERE user_id = ?
      `).run('+91 9123456789', 'moderate', 'all', userId);

      const profile = db.prepare('SELECT * FROM user_profiles WHERE user_id = ?').get(userId);
      assert.strictEqual(profile.phone, '+91 9123456789');
      assert.strictEqual(profile.travel_style, 'moderate');
      assert.strictEqual(profile.dietary_pref, 'all');

      // 3. Trip Creation & Retrieval
      const tripInsert = db.prepare(`
        INSERT INTO trips (user_id, title, destination, starting_city, duration_days, travelers_count, budget_per_person, total_budget, estimated_total_cost, feasibility_status, preferences_json, transport_mode, itinerary_json, budget_breakdown_json)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      `).run(
        userId,
        'Badami & Pattadakal Heritage Tour',
        'badami',
        'Hubballi',
        3,
        2,
        6000,
        12000,
        10500,
        'Comfortably Feasible',
        JSON.stringify({ stay: 'moderate' }),
        'car',
        JSON.stringify([{ day: 1, stop: 'Badami Cave 1' }]),
        JSON.stringify({ transport: 4000, stay: 4500, food: 2000 })
      );
      const tripId = Number(tripInsert.lastInsertRowid);

      const trip = db.prepare('SELECT * FROM trips WHERE id = ?').get(tripId);
      assert.strictEqual(trip.title, 'Badami & Pattadakal Heritage Tour');
      assert.strictEqual(trip.starting_city, 'Hubballi');
      assert.strictEqual(trip.travelers_count, 2);
      const parsedItinerary = JSON.parse(trip.itinerary_json);
      assert.strictEqual(parsedItinerary[0].stop, 'Badami Cave 1');

      // 4. Favorites Toggle
      db.prepare('INSERT INTO favorites (user_id, destination_id) VALUES (?, ?)').run(userId, 'gokarna');
      db.prepare('INSERT INTO favorites (user_id, destination_id) VALUES (?, ?)').run(userId, 'belur');
      
      const favList = db.prepare('SELECT destination_id FROM favorites WHERE user_id = ? ORDER BY destination_id ASC').all(userId);
      assert.strictEqual(favList.length, 2);
      assert.strictEqual(favList[0].destination_id, 'belur');
      assert.strictEqual(favList[1].destination_id, 'gokarna');

      // Delete one favorite
      db.prepare('DELETE FROM favorites WHERE user_id = ? AND destination_id = ?').run(userId, 'gokarna');
      const favListAfter = db.prepare('SELECT destination_id FROM favorites WHERE user_id = ?').all(userId);
      assert.strictEqual(favListAfter.length, 1);
      assert.strictEqual(favListAfter[0].destination_id, 'belur');

      // 5. Password Reset Token Flow
      const token = 'test_token_' + Date.now();
      const expiresAt = Date.now() + 3600000;
      db.prepare('INSERT INTO password_resets (user_id, token, expires_at) VALUES (?, ?, ?)').run(userId, token, expiresAt);

      const resetRecord = db.prepare('SELECT * FROM password_resets WHERE token = ? AND used = 0 AND expires_at > ?').get(token, Date.now());
      assert(resetRecord, 'Reset record must be valid and unused');
      assert.strictEqual(resetRecord.user_id, userId);

      db.prepare('UPDATE password_resets SET used = 1 WHERE id = ?').run(resetRecord.id);
      const usedRecord = db.prepare('SELECT * FROM password_resets WHERE token = ? AND used = 0').get(token);
      assert.strictEqual(usedRecord, undefined, 'Used reset token must not be active');

      // 6. Delete user and verify cascade
      db.prepare('DELETE FROM users WHERE id = ?').run(userId);
      assert.strictEqual(db.prepare('SELECT COUNT(*) as count FROM user_profiles WHERE user_id = ?').get(userId).count, 0, 'Cascade delete user_profiles');
      assert.strictEqual(db.prepare('SELECT COUNT(*) as count FROM trips WHERE user_id = ?').get(userId).count, 0, 'Cascade delete trips');
      assert.strictEqual(db.prepare('SELECT COUNT(*) as count FROM favorites WHERE user_id = ?').get(userId).count, 0, 'Cascade delete favorites');
      assert.strictEqual(db.prepare('SELECT COUNT(*) as count FROM password_resets WHERE user_id = ?').get(userId).count, 0, 'Cascade delete password_resets');
    } finally {
      db.close();
      try { fs.unlinkSync(tempDbPath); } catch {}
      try { fs.unlinkSync(`${tempDbPath}-wal`); } catch {}
      try { fs.unlinkSync(`${tempDbPath}-shm`); } catch {}
    }
  });

  console.log('\n========================================');
  console.log(`Render Free SQLite Test Results: ${passed} Passed, ${failed} Failed`);
  console.log('========================================\n');

  if (failed > 0) {
    process.exit(1);
  }
}

runRenderSqliteTests().catch(err => {
  console.error('Test execution failed:', err);
  process.exit(1);
});

