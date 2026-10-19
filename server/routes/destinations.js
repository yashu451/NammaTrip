import express from 'express';
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

// GET /api/destinations
router.get('/', (req, res) => {
  const { category, region, q } = req.query;
  let results = [...destinations];

  if (category && category !== 'All') {
    results = results.filter(d =>
      d.category.some(c => c.toLowerCase() === category.toLowerCase())
    );
  }

  if (region && region !== 'All') {
    results = results.filter(d =>
      d.region.toLowerCase().includes(region.toLowerCase()) ||
      (d.regionKn && d.regionKn.toLowerCase().includes(region.toLowerCase()))
    );
  }

  if (q && q.trim()) {
    const query = q.trim().toLowerCase();
    results = results.filter(d =>
      d.name.toLowerCase().includes(query) ||
      d.nameKn.toLowerCase().includes(query) ||
      d.description.toLowerCase().includes(query) ||
      d.descriptionKn.toLowerCase().includes(query) ||
      d.tagline.toLowerCase().includes(query) ||
      d.significance.toLowerCase().includes(query)
    );
  }

  return res.json({
    success: true,
    total: results.length,
    destinations: results
  });
});

// GET /api/destinations/:id
router.get('/:id', (req, res) => {
  const destId = req.params.id.toLowerCase();
  const dest = destinations.find(d => d.id === destId);

  if (!dest) {
    return res.status(404).json({
      success: false,
      message: 'Destination not found in Karnataka registry.',
      messageKn: 'ಗಮ್ಯಸ್ಥಾನವು ಕರ್ನಾಟಕ ದಾಖಲೆಯಲ್ಲಿ ಕಂಡುಬಂದಿಲ್ಲ.'
    });
  }

  // Populate nearby destinations
  const nearby = (dest.nearbyDestinations || []).map(id => {
    const found = destinations.find(d => d.id === id);
    if (!found) return null;
    return {
      id: found.id,
      name: found.name,
      nameKn: found.nameKn,
      tagline: found.tagline,
      taglineKn: found.taglineKn,
      heroImage: found.heroImage,
      region: found.region
    };
  }).filter(Boolean);

  return res.json({
    success: true,
    destination: {
      ...dest,
      nearbyDetails: nearby
    }
  });
});

export default router;
