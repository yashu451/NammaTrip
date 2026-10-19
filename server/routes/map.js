import express from 'express';
import { generateTripMapData, resolvePlaceCoordinates, fetchDrivingRoute } from '../services/mapService.js';

const router = express.Router();

/**
 * POST /api/map/trip-map
 * Body: { itinerary, destinationId, startingCity }
 * Returns structured stops with coordinates and real OSRM driving routes
 */
router.post('/trip-map', async (req, res) => {
  try {
    const { itinerary, destinationId = 'hampi', startingCity = 'Bengaluru' } = req.body;

    if (!itinerary || !Array.isArray(itinerary)) {
      return res.status(400).json({
        success: false,
        message: 'A valid itinerary array is required.',
        messageKn: 'ಮಾನ್ಯವಾದ ಪ್ರವಾಸದ ದಿನಚರಿಯ ಪಟ್ಟಿ ಅಗತ್ಯವಿದೆ.'
      });
    }

    const mapData = await generateTripMapData({
      itinerary,
      destinationId,
      startingCity
    });

    return res.json(mapData);
  } catch (err) {
    console.error('Trip map generation failed:', err);
    return res.status(500).json({
      success: false,
      message: 'Failed to process trip map and routing data.',
      messageKn: 'ನಕ್ಷೆ ಮತ್ತು ಮಾರ್ಗದ ವಿವರಗಳನ್ನು ಪ್ರಕ್ರಿಯೆಗೊಳಿಸಲು ಸಾಧ್ಯವಾಗಿಲ್ಲ.'
    });
  }
});

/**
 * POST /api/map/geocode
 * Body: { title, location, destinationId }
 * Returns verified or geocoded coordinates
 */
router.post('/geocode', async (req, res) => {
  try {
    const { title, location, spot, destinationId } = req.body;
    const coords = await resolvePlaceCoordinates({ title, location, spot, destinationId });
    return res.json({
      success: true,
      ...coords
    });
  } catch (err) {
    console.error('Geocode failed:', err);
    return res.status(500).json({
      success: false,
      message: 'Geocoding failed.'
    });
  }
});

/**
 * POST /api/map/route
 * Body: { waypoints: [{ lat, lng }, ...] }
 * Returns driving route geometry via OSRM
 */
router.post('/route', async (req, res) => {
  try {
    const { waypoints } = req.body;
    const route = await fetchDrivingRoute(waypoints);
    return res.json({
      success: true,
      ...route
    });
  } catch (err) {
    console.error('Route calculation failed:', err);
    return res.status(500).json({
      success: false,
      routeAvailable: false,
      geometry: [],
      message: 'Failed to compute driving route'
    });
  }
});

export default router;
