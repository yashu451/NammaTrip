import express from 'express';
import db from '../db/database.js';
import { requireAuth } from '../middleware/auth.js';

const router = express.Router();

// Helper to parse stored JSON fields safely
function formatTripRow(row) {
  if (!row) return null;
  let preferences = {};
  let itinerary = [];
  let budgetBreakdown = {};

  try { preferences = JSON.parse(row.preferences_json); } catch {}
  try { itinerary = JSON.parse(row.itinerary_json); } catch {}
  try { budgetBreakdown = JSON.parse(row.budget_breakdown_json); } catch {}

  return {
    id: row.id,
    userId: row.user_id,
    title: row.title,
    destination: row.destination,
    startingCity: row.starting_city,
    durationDays: row.duration_days,
    travelersCount: row.travelers_count,
    budgetPerPerson: row.budget_per_person,
    totalBudget: row.total_budget,
    estimatedTotalCost: row.estimated_total_cost,
    feasibilityStatus: row.feasibility_status,
    transportMode: row.transport_mode,
    preferences,
    itinerary,
    budgetBreakdown,
    createdAt: row.created_at,
    updatedAt: row.updated_at
  };
}

// GET /api/trips - List user's saved trips
router.get('/', requireAuth, (req, res) => {
  try {
    const rows = db.prepare(`
      SELECT * FROM trips
      WHERE user_id = ?
      ORDER BY created_at DESC
    `).all(req.user.id);

    const formatted = rows.map(formatTripRow);

    return res.json({
      success: true,
      count: formatted.length,
      trips: formatted
    });
  } catch (err) {
    console.error('List trips error:', err);
    return res.status(500).json({
      success: false,
      message: 'Failed to fetch saved trips.',
      messageKn: 'ಉಳಿಸಿದ ಪ್ರವಾಸಗಳನ್ನು ಪಡೆಯಲು ಸಾಧ್ಯವಾಗಿಲ್ಲ.'
    });
  }
});

// GET /api/trips/:id - Get a specific trip (enforcing ownership)
router.get('/:id', requireAuth, (req, res) => {
  try {
    const tripId = parseInt(req.params.id, 10);
    const row = db.prepare('SELECT * FROM trips WHERE id = ?').get(tripId);

    if (!row) {
      return res.status(404).json({
        success: false,
        message: 'Trip not found.',
        messageKn: 'ಪ್ರವಾಸದ ಮಾಹಿತಿ ಕಂಡುಬಂದಿಲ್ಲ.'
      });
    }

    // Enforce private ownership
    if (row.user_id !== req.user.id) {
      return res.status(403).json({
        success: false,
        message: 'Unauthorized: You do not have permission to view this private trip.',
        messageKn: 'ಅನಧಿಕೃತ: ಈ ಖಾಸಗಿ ಪ್ರವಾಸವನ್ನು ವೀಕ್ಷಿಸಲು ನಿಮಗೆ ಅನುಮತಿಯಿಲ್ಲ.'
      });
    }

    return res.json({
      success: true,
      trip: formatTripRow(row)
    });
  } catch (err) {
    console.error('Get trip error:', err);
    return res.status(500).json({
      success: false,
      message: 'Failed to retrieve trip details.',
      messageKn: 'ಪ್ರವಾಸದ ವಿವರಗಳನ್ನು ಪಡೆಯಲು ಸಾಧ್ಯವಾಗಿಲ್ಲ.'
    });
  }
});

// POST /api/trips - Save a generated or customized itinerary
router.post('/', requireAuth, (req, res) => {
  try {
    const {
      title,
      destination,
      startingCity,
      durationDays,
      travelersCount,
      budgetPerPerson,
      totalBudget,
      estimatedTotalCost,
      feasibilityStatus,
      preferences,
      transportMode,
      itinerary,
      budgetBreakdown
    } = req.body;

    if (!destination || !durationDays || !itinerary) {
      return res.status(400).json({
        success: false,
        message: 'Destination, duration, and itinerary data are required.',
        messageKn: 'ಗಮ್ಯಸ್ಥಾನ, ದಿನಗಳ ಸಂಖ್ಯೆ ಮತ್ತು ಪ್ರವಾಸ ಪಟ್ಟಿ ಕಡ್ಡಾಯ.'
      });
    }

    const defaultTitle = title || `${destination.toUpperCase()} Heritage Journey (${durationDays} Days)`;

    const insert = db.prepare(`
      INSERT INTO trips (
        user_id, title, destination, starting_city, duration_days,
        travelers_count, budget_per_person, total_budget, estimated_total_cost,
        feasibility_status, preferences_json, transport_mode, itinerary_json,
        budget_breakdown_json
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `);

    const result = insert.run(
      req.user.id,
      defaultTitle,
      destination,
      startingCity || 'Bengaluru',
      Number(durationDays) || 3,
      Number(travelersCount) || 2,
      Number(budgetPerPerson) || 5000,
      Number(totalBudget) || ((Number(budgetPerPerson) || 5000) * (Number(travelersCount) || 2)),
      Number(estimatedTotalCost) || 0,
      feasibilityStatus || 'balanced',
      JSON.stringify(preferences || {}),
      transportMode || 'ksrtc',
      JSON.stringify(itinerary || []),
      JSON.stringify(budgetBreakdown || {})
    );

    const newTripId = Number(result.lastInsertRowid);
    const createdTrip = db.prepare('SELECT * FROM trips WHERE id = ?').get(newTripId);

    return res.status(201).json({
      success: true,
      message: 'Trip itinerary saved successfully to your dashboard!',
      messageKn: 'ಪ್ರವಾಸದ ಯೋಜನೆಯನ್ನು ನಿಮ್ಮ ಡ್ಯಾಶ್‌ಬೋರ್ಡ್‌ನಲ್ಲಿ ಯಶಸ್ವಿಯಾಗಿ ಉಳಿಸಲಾಗಿದೆ!',
      trip: formatTripRow(createdTrip)
    });
  } catch (err) {
    console.error('Save trip error:', err);
    return res.status(500).json({
      success: false,
      message: 'Failed to save trip itinerary.',
      messageKn: 'ಪ್ರವಾಸದ ವಿವರಗಳನ್ನು ಉಳಿಸಲು ಸಾಧ್ಯವಾಗಿಲ್ಲ.'
    });
  }
});

// PUT /api/trips/:id - Update an existing saved trip
router.put('/:id', requireAuth, (req, res) => {
  try {
    const tripId = parseInt(req.params.id, 10);
    const existing = db.prepare('SELECT id, user_id FROM trips WHERE id = ?').get(tripId);

    if (!existing) {
      return res.status(404).json({
        success: false,
        message: 'Trip not found.',
        messageKn: 'ಪ್ರವಾಸ ಕಂಡುಬಂದಿಲ್ಲ.'
      });
    }

    if (existing.user_id !== req.user.id) {
      return res.status(403).json({
        success: false,
        message: 'Unauthorized: You cannot modify another user\'s trip.',
        messageKn: 'ಅನಧಿಕೃತ: ಬೇರೆಯವರ ಪ್ರವಾಸವನ್ನು ಬದಲಾಯಿಸಲು ಸಾಧ್ಯವಿಲ್ಲ.'
      });
    }

    const {
      title,
      durationDays,
      travelersCount,
      budgetPerPerson,
      totalBudget,
      estimatedTotalCost,
      feasibilityStatus,
      preferences,
      transportMode,
      itinerary,
      budgetBreakdown
    } = req.body;

    db.prepare(`
      UPDATE trips SET
        title = COALESCE(?, title),
        duration_days = COALESCE(?, duration_days),
        travelers_count = COALESCE(?, travelers_count),
        budget_per_person = COALESCE(?, budget_per_person),
        total_budget = COALESCE(?, total_budget),
        estimated_total_cost = COALESCE(?, estimated_total_cost),
        feasibility_status = COALESCE(?, feasibility_status),
        preferences_json = COALESCE(?, preferences_json),
        transport_mode = COALESCE(?, transport_mode),
        itinerary_json = COALESCE(?, itinerary_json),
        budget_breakdown_json = COALESCE(?, budget_breakdown_json),
        updated_at = CURRENT_TIMESTAMP
      WHERE id = ?
    `).run(
      title,
      durationDays ? Number(durationDays) : null,
      travelersCount ? Number(travelersCount) : null,
      budgetPerPerson ? Number(budgetPerPerson) : null,
      totalBudget ? Number(totalBudget) : null,
      estimatedTotalCost ? Number(estimatedTotalCost) : null,
      feasibilityStatus,
      preferences ? JSON.stringify(preferences) : null,
      transportMode,
      itinerary ? JSON.stringify(itinerary) : null,
      budgetBreakdown ? JSON.stringify(budgetBreakdown) : null,
      tripId
    );

    const updated = db.prepare('SELECT * FROM trips WHERE id = ?').get(tripId);

    return res.json({
      success: true,
      message: 'Trip itinerary updated successfully.',
      messageKn: 'ಪ್ರವಾಸದ ವಿವರಗಳು ಯಶಸ್ವಿಯಾಗಿ ಅಪ್‌ಡೇಟ್ ಆಗಿವೆ.',
      trip: formatTripRow(updated)
    });
  } catch (err) {
    console.error('Update trip error:', err);
    return res.status(500).json({
      success: false,
      message: 'Failed to update trip.',
      messageKn: 'ಪ್ರವಾಸ ನವೀಕರಣ ವಿಫಲವಾಗಿದೆ.'
    });
  }
});

// DELETE /api/trips/:id - Delete a trip with authorization check
router.delete('/:id', requireAuth, (req, res) => {
  try {
    const tripId = parseInt(req.params.id, 10);
    const existing = db.prepare('SELECT id, user_id FROM trips WHERE id = ?').get(tripId);

    if (!existing) {
      return res.status(404).json({
        success: false,
        message: 'Trip not found.',
        messageKn: 'ಪ್ರವಾಸ ಕಂಡುಬಂದಿಲ್ಲ.'
      });
    }

    if (existing.user_id !== req.user.id) {
      return res.status(403).json({
        success: false,
        message: 'Unauthorized: You do not have permission to delete this trip.',
        messageKn: 'ಅನಧಿಕೃತ: ಈ ಪ್ರವಾಸವನ್ನು ಅಳಿಸಲು ನಿಮಗೆ ಅನುಮತಿಯಿಲ್ಲ.'
      });
    }

    db.prepare('DELETE FROM trips WHERE id = ?').run(tripId);

    return res.json({
      success: true,
      message: 'Trip deleted successfully.',
      messageKn: 'ಪ್ರವಾಸವನ್ನು ಯಶಸ್ವಿಯಾಗಿ ಅಳಿಸಲಾಗಿದೆ.'
    });
  } catch (err) {
    console.error('Delete trip error:', err);
    return res.status(500).json({
      success: false,
      message: 'Failed to delete trip.',
      messageKn: 'ಪ್ರವಾಸ ಅಳಿಸಲು ಸಾಧ್ಯವಾಗಿಲ್ಲ.'
    });
  }
});

export default router;
