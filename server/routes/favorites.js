import express from 'express';
import db from '../db/database.js';
import { requireAuth } from '../middleware/auth.js';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router = express.Router();

let destinations = [];
try {
  const destPath = path.resolve(__dirname, '../data/destinations.json');
  destinations = JSON.parse(fs.readFileSync(destPath, 'utf8'));
} catch (e) {
  console.error('Error loading destinations:', e);
}

// GET /api/favorites - Get user's bookmarked destinations
router.get('/', requireAuth, (req, res) => {
  try {
    const rows = db.prepare('SELECT destination_id, created_at FROM favorites WHERE user_id = ? ORDER BY created_at DESC').all(req.user.id);
    const favoriteIds = rows.map(r => r.destination_id);

    const fullDestinations = favoriteIds.map(id => destinations.find(d => d.id === id)).filter(Boolean);

    return res.json({
      success: true,
      favoriteIds,
      destinations: fullDestinations
    });
  } catch (err) {
    console.error('Get favorites error:', err);
    return res.status(500).json({
      success: false,
      message: 'Failed to fetch favorites.',
      messageKn: 'ಮೆಚ್ಚಿನ ತಾಣಗಳನ್ನು ಪಡೆಯಲು ಸಾಧ್ಯವಾಗಿಲ್ಲ.'
    });
  }
});

// POST /api/favorites/:destinationId - Toggle favorite
router.post('/:destinationId', requireAuth, (req, res) => {
  try {
    const destId = req.params.destinationId.toLowerCase();
    const existing = db.prepare('SELECT id FROM favorites WHERE user_id = ? AND destination_id = ?').get(req.user.id, destId);

    if (existing) {
      // Remove
      db.prepare('DELETE FROM favorites WHERE id = ?').run(existing.id);
      return res.json({
        success: true,
        action: 'removed',
        destinationId: destId,
        message: 'Removed from favorites.',
        messageKn: 'ಮೆಚ್ಚಿನ ಪಟ್ಟಿಯಿಂದ ತೆಗೆದುಹಾಕಲಾಗಿದೆ.'
      });
    } else {
      // Add
      db.prepare('INSERT INTO favorites (user_id, destination_id) VALUES (?, ?)').run(req.user.id, destId);
      return res.json({
        success: true,
        action: 'added',
        destinationId: destId,
        message: 'Saved to favorites.',
        messageKn: 'ಮೆಚ್ಚಿನ ಪಟ್ಟಿಗೆ ಸೇರಿಸಲಾಗಿದೆ.'
      });
    }
  } catch (err) {
    console.error('Toggle favorite error:', err);
    return res.status(500).json({
      success: false,
      message: 'Failed to update favorite.',
      messageKn: 'ಮೆಚ್ಚಿನ ಪಟ್ಟಿಯನ್ನು ನವೀಕರಿಸಲು ಸಾಧ್ಯವಾಗಿಲ್ಲ.'
    });
  }
});

// DELETE /api/favorites/:destinationId - Remove favorite explicitly
router.delete('/:destinationId', requireAuth, (req, res) => {
  try {
    const destId = req.params.destinationId.toLowerCase();
    db.prepare('DELETE FROM favorites WHERE user_id = ? AND destination_id = ?').run(req.user.id, destId);
    return res.json({
      success: true,
      message: 'Favorite removed successfully.',
      messageKn: 'ಮೆಚ್ಚಿನ ತಾಣವನ್ನು ತೆಗೆದುಹಾಕಲಾಗಿದೆ.'
    });
  } catch (err) {
    console.error('Delete favorite error:', err);
    return res.status(500).json({
      success: false,
      message: 'Failed to remove favorite.',
      messageKn: 'ತೆಗೆದುಹಾಕಲು ಸಾಧ್ಯವಾಗಿಲ್ಲ.'
    });
  }
});

export default router;
