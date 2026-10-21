import express from 'express';
import { calculateBudget } from '../services/budgetEngine.js';
import { generateItineraryPlan } from '../services/itineraryGenerator.js';
import { fixMyTrip } from '../services/fixMyTripEngine.js';
import { optionalAuth } from '../middleware/auth.js';
import { KARNATAKA_STARTING_LOCATIONS, getStartingLocationsByRegion } from '../../shared/karnatakaLocations.js';

const router = express.Router();

// GET /api/planner/starting-locations - List all verified starting locations across Karnataka
router.get('/starting-locations', (req, res) => {
  return res.json({
    success: true,
    total: KARNATAKA_STARTING_LOCATIONS.length,
    locations: KARNATAKA_STARTING_LOCATIONS,
    regions: getStartingLocationsByRegion()
  });
});

// POST /api/planner/calculate-budget - Quick live calculation
router.post('/calculate-budget', (req, res) => {
  try {
    const {
      startingCity = 'Bengaluru',
      destinationId = 'hampi',
      durationDays = 3,
      travelers = 2,
      budgetPerPerson = 5000,
      transportMode = 'ksrtc',
      stayTier = 'moderate',
      foodTier = 'moderate'
    } = req.body;

    const budget = calculateBudget({
      startingCity,
      destinationId,
      durationDays: Number(durationDays),
      travelers: Number(travelers),
      budgetPerPerson: Number(budgetPerPerson),
      transportMode,
      stayTier,
      foodTier
    });

    return res.json({
      success: true,
      budget
    });
  } catch (err) {
    console.error('Budget calculation error:', err);
    return res.status(500).json({
      success: false,
      message: 'Failed to calculate budget feasibility.',
      messageKn: 'ಬಜೆಟ್ ಲೆಕ್ಕಾಚಾರ ವಿಫಲವಾಗಿದೆ.'
    });
  }
});

// POST /api/planner/generate - Full itinerary and budget generation
router.post('/generate', optionalAuth, async (req, res) => {
  try {
    const {
      startingCity = 'Bengaluru',
      destinationId = 'hampi',
      durationDays = 3,
      travelers = 2,
      budgetPerPerson = 5000,
      transportMode = 'ksrtc',
      stayTier = 'moderate',
      foodTier = 'moderate',
      interests = ['Heritage', 'Culture', 'Food'],
      language = 'en'
    } = req.body;

    const numDays = Math.min(10, Math.max(1, parseInt(durationDays, 10) || 3));
    const numTravelers = Math.min(30, Math.max(1, parseInt(travelers, 10) || 2));
    const budgetNum = Math.max(500, parseInt(budgetPerPerson, 10) || 5000);

    // 1. Programmatic Budget Calculation
    const budget = calculateBudget({
      startingCity,
      destinationId,
      durationDays: numDays,
      travelers: numTravelers,
      budgetPerPerson: budgetNum,
      transportMode,
      stayTier,
      foodTier
    });

    // 2. Generate Itinerary (Gemini AI or Curated Karnataka Engine)
    const itineraryResult = await generateItineraryPlan({
      startingCity,
      destinationId,
      durationDays: numDays,
      interests,
      travelers: numTravelers,
      budgetPerPerson: budgetNum,
      transportMode,
      stayTier,
      foodTier,
      language
    });

    const inputs = {
      startingCity,
      destinationId,
      durationDays: numDays,
      travelers: numTravelers,
      budgetPerPerson: budgetNum,
      transportMode,
      stayTier,
      foodTier,
      interests
    };

    return res.json({
      success: true,
      mode: itineraryResult.mode,
      engineName: itineraryResult.engineName,
      inputs,
      budget,
      itinerary: itineraryResult.itinerary,
      userAuthenticated: !!req.user
    });
  } catch (err) {
    console.error('Itinerary generation error:', err);
    return res.status(500).json({
      success: false,
      message: 'Failed to generate itinerary. Please try again.',
      messageKn: 'ಪ್ರವಾಸ ಯೋಜನೆ ರೂಪಿಸಲು ವಿಫಲವಾಗಿದೆ. ದಯವಿಟ್ಟು ಮತ್ತೆ ಪ್ರಯತ್ನಿಸಿ.'
    });
  }
});

// POST /api/planner/fix-trip - Programmatic "Fix My Trip" feature
router.post('/fix-trip', (req, res) => {
  try {
    const {
      currentPlan,
      newBudgetPerPerson,
      newDurationDays,
      newTransportMode,
      newStayTier,
      newFoodTier
    } = req.body;

    if (!currentPlan) {
      return res.status(400).json({
        success: false,
        message: 'Current trip plan is required for Fix My Trip.',
        messageKn: 'ಹೊಂದಾಣಿಕೆಗಾಗಿ ಪ್ರಸ್ತುತ ಪ್ರವಾಸ ಯೋಜನೆ ಅಗತ್ಯವಿದೆ.'
      });
    }

    const revisedPlan = fixMyTrip({
      currentPlan,
      newBudgetPerPerson,
      newDurationDays,
      newTransportMode,
      newStayTier,
      newFoodTier
    });

    return res.json({
      success: true,
      message: 'Trip adjusted and optimized successfully.',
      messageKn: 'ಪ್ರವಾಸದ ಯೋಜನೆಯನ್ನು ಯಶಸ್ವಿಯಾಗಿ ಸರಿಹೊಂದಿಸಲಾಗಿದೆ.',
      revisedPlan
    });
  } catch (err) {
    console.error('Fix My Trip error:', err);
    return res.status(500).json({
      success: false,
      message: 'Could not adapt trip itinerary.',
      messageKn: 'ಪ್ರವಾಸದ ಹೊಂದಾಣಿಕೆ ವಿಫಲವಾಗಿದೆ.'
    });
  }
});

export default router;
