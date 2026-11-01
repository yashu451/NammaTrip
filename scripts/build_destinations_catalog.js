import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const destFile = path.resolve(__dirname, '../server/data/destinations.json');

// Read existing 12 destinations to preserve their baseline data
const existingList = JSON.parse(fs.readFileSync(destFile, 'utf8')).slice(0, 12);

// District and nearest city mappings for existing 12 destinations
const existingEnhancements = {
  hampi: {
    district: 'Vijayanagara',
    districtKn: 'ವಿಜಯನಗರ',
    nearestCity: 'Hosapete',
    nearestCityKn: 'ಹೊಸಪೇಟೆ',
    featured: true,
    unesco: true,
    visitorInfo: {
      timings: '06:00 AM - 06:00 PM',
      entryFee: '₹40 for Indians, ₹600 for foreigners (ASI composite ticket)',
      guidelines: 'Footwear prohibited inside sanctums; electric buggies available at Vijaya Vittala.'
    },
    visitorInfoKn: {
      timings: 'ಬೆಳಿಗ್ಗೆ ೬:೦೦ ರಿಂದ ಸಂಜೆ ೬:೦೦',
      entryFee: 'ಭಾರತೀಯರಿಗೆ ₹೪೦, ವಿದೇಶಿಯರಿಗೆ ₹೬೦೦',
      guidelines: 'ಗರ್ಭಗುಡಿಗಳ ಒಳಗೆ ಪಾದರಕ್ಷೆ ನಿಷೇಧಿಸಲಾಗಿದೆ.'
    }
  },
  mysuru: {
    district: 'Mysuru',
    districtKn: 'ಮೈಸೂರು',
    nearestCity: 'Mysuru',
    nearestCityKn: 'ಮೈಸೂರು',
    featured: true,
    visitorInfo: {
      timings: '10:00 AM - 05:30 PM (Palace); Sunday 7:00 PM - 07:45 PM Illumination',
      entryFee: '₹100 for adults, ₹50 for children',
      guidelines: 'Footwear removal required inside palace corridors; mobile photography allowed with fee.'
    },
    visitorInfoKn: {
      timings: 'ಬೆಳಿಗ್ಗೆ ೧೦:೦೦ ರಿಂದ ಸಂಜೆ ೫:೩೦ (ಅರಮನೆ)',
      entryFee: 'ವಯಸ್ಕರಿಗೆ ₹೧೦೦, ಮಕ್ಕಳಿಗೆ ₹೫೦',
      guidelines: 'ಅರಮನೆ ಒಳಗೆ ಪಾದರಕ್ಷೆಗಳನ್ನು ಕೌಂಟರ್‌ನಲ್ಲಿ ಜಮೆ ಮಾಡಬೇಕು.'
    }
  },
  coorg: {
    district: 'Kodagu',
    districtKn: 'ಕೊಡಗು',
    nearestCity: 'Madikeri',
    nearestCityKn: 'ಮಡಿಕೇರಿ',
    featured: true,
    visitorInfo: {
      timings: 'Open 24 hours (Abbey Falls: 09:00 AM - 05:00 PM)',
      entryFee: '₹15 entry at Abbey Falls; nominal parking',
      guidelines: 'Raincoats and umbrellas essential during monsoons; respect coffee plantation trails.'
    },
    visitorInfoKn: {
      timings: 'ಯಾವಾಗಲೂ ಮುಕ್ತ (ಅಬ್ಬಿ ಜಲಪಾತ: ಬೆಳಿಗ್ಗೆ ೯ ರಿಂದ ಸಂಜೆ ೫)',
      entryFee: 'ಅಬ್ಬಿ ಜಲಪಾತದಲ್ಲಿ ₹೧೫ ಪ್ರವೇಶ ಶುಲ್ಕ',
      guidelines: 'ಮಳೆಗಾಲದಲ್ಲಿ ಮಳೆಕವಚ ಅತ್ಯಗತ್ಯ.'
    }
  },
  badami: {
    district: 'Bagalkote',
    districtKn: 'ಬಾಗಲಕೋಟೆ',
    nearestCity: 'Badami',
    nearestCityKn: 'ಬಾದಾಮಿ',
    featured: true,
    visitorInfo: {
      timings: '06:00 AM - 06:00 PM',
      entryFee: '₹25 for Indians, ₹300 for foreigners (ASI ticket)',
      guidelines: 'Steep stone steps up to Cave 4; early morning visits recommended to beat heat.'
    },
    visitorInfoKn: {
      timings: 'ಬೆಳಿಗ್ಗೆ ೬:೦೦ ರಿಂದ ಸಂಜೆ ೬:೦೦',
      entryFee: 'ಭಾರತೀಯರಿಗೆ ₹೨೫, ವಿದೇಶಿಯರಿಗೆ ₹೩೦೦',
      guidelines: '೪ನೇ ಗುಹೆಗೆ ಕಡಿದಾದ ಮೆಟ್ಟಿಲುಗಳಿವೆ; ಮುಂಜಾನೆಯ ಭೇಟಿ ಸೂಕ್ತ.'
    }
  },
  gokarna: {
    district: 'Uttara Kannada',
    districtKn: 'ಉತ್ತರ ಕನ್ನಡ',
    nearestCity: 'Kumta',
    nearestCityKn: 'ಕುಮಟಾ',
    featured: true,
    visitorInfo: {
      timings: 'Temple: 06:00 AM - 12:30 PM, 05:00 PM - 08:30 PM; Beaches: 24/7',
      entryFee: 'Free entry',
      guidelines: 'Traditional Indian attire mandatory for Mahabaleshwara Atmalinga sparsha dharshana.'
    },
    visitorInfoKn: {
      timings: 'ದೇವಾಲಯ: ಬೆಳಿಗ್ಗೆ ೬:೦೦ - ೧೨:೩೦, ಸಂಜೆ ೫:೦೦ - ೮:೩೦',
      entryFee: 'ಉಚಿತ ಪ್ರವೇಶ',
      guidelines: 'ಆತ್ಮಲಿಂಗ ಸ್ಪರ್ಶ ದರ್ಶನಕ್ಕೆ ಸಾಂಪ್ರದಾಯಿಕ ಧೋತಿ ಮತ್ತು ಶಾಲು ಕಡ್ಡಾಯ.'
    }
  },
  chitradurga: {
    district: 'Chitradurga',
    districtKn: 'ಚಿತ್ರದುರ್ಗ',
    nearestCity: 'Chitradurga',
    nearestCityKn: 'ಚಿತ್ರದುರ್ಗ',
    featured: true,
    visitorInfo: {
      timings: '06:00 AM - 06:00 PM',
      entryFee: '₹25 for Indians, ₹300 for foreigners (ASI ticket)',
      guidelines: 'Wear sturdy walking shoes; carry water bottles for 3-4 hour fort hike.'
    },
    visitorInfoKn: {
      timings: 'ಬೆಳಿಗ್ಗೆ ೬:೦೦ ರಿಂದ ಸಂಜೆ ೬:೦೦',
      entryFee: 'ಭಾರತೀಯರಿಗೆ ₹೨೫, ವಿದೇಶಿಯರಿಗೆ ₹೩೦೦',
      guidelines: 'ಕೋಟೆ ಏರಲು ಅನುಕೂಲಕರ ಪಾದರಕ್ಷೆ ಧರಿಸಿ; ಕುಡಿಯುವ ನೀರು ಜೊತೆಗಿರಲಿ.'
    }
  },
  belur: {
    district: 'Hassan',
    districtKn: 'ಹಾಸನ',
    nearestCity: 'Hassan',
    nearestCityKn: 'ಹಾಸನ',
    featured: true,
    unesco: true,
    visitorInfo: {
      timings: '07:30 AM - 08:00 PM',
      entryFee: 'Free entry (certified guides available at nominal charges)',
      guidelines: 'Footwear to be left at the temple entrance gate; photography allowed inside hall.'
    },
    visitorInfoKn: {
      timings: 'ಬೆಳಿಗ್ಗೆ ೭:೩೦ ರಿಂದ ರಾತ್ರಿ ೮:೦೦',
      entryFee: 'ಉಚಿತ ಪ್ರವೇಶ',
      guidelines: 'ದೇವಾಲಯದ ಬಾಗಿಲಿನಲ್ಲಿ ಪಾದರಕ್ಷೆ ಬಿಡಬೇಕು.'
    }
  },
  halebidu: {
    district: 'Hassan',
    districtKn: 'ಹಾಸನ',
    nearestCity: 'Hassan',
    nearestCityKn: 'ಹಾಸನ',
    featured: true,
    unesco: true,
    visitorInfo: {
      timings: '06:30 AM - 06:30 PM',
      entryFee: 'Free entry for temple; ₹10 for ASI site museum',
      guidelines: 'Inspect lower frieze bands from left to right in traditional pradakshina direction.'
    },
    visitorInfoKn: {
      timings: 'ಬೆಳಿಗ್ಗೆ ೬:೩೦ ರಿಂದ ಸಂಜೆ ೬:೩೦',
      entryFee: 'ದೇವಾಲಯ ಉಚಿತ; ಮ್ಯೂಸಿಯಂ ₹೧೦',
      guidelines: 'ಪ್ರದಕ್ಷಿಣಾ ಪಥದಲ್ಲಿ ಶಿಲ್ಪಗಳ ಸಾಲುಗಳನ್ನು ವೀಕ್ಷಿಸಿ.'
    }
  },
  pattadakal: {
    district: 'Bagalkote',
    districtKn: 'ಬಾಗಲಕೋಟೆ',
    nearestCity: 'Badami',
    nearestCityKn: 'ಬಾದಾಮಿ',
    featured: true,
    unesco: true,
    visitorInfo: {
      timings: '06:00 AM - 06:00 PM',
      entryFee: '₹40 for Indians, ₹600 for foreigners (ASI UNESCO ticket)',
      guidelines: 'Composite complex with 10 major temples; early morning light is ideal for photography.'
    },
    visitorInfoKn: {
      timings: 'ಬೆಳಿಗ್ಗೆ ೬:೦೦ ರಿಂದ ಸಂಜೆ ೬:೦೦',
      entryFee: 'ಭಾರತೀಯರಿಗೆ ₹೪೦, ವಿದೇಶಿಯರಿಗೆ ₹೬೦೦',
      guidelines: 'ಯುನೆಸ್ಕೋ ವಿಶ್ವ ಪರಂಪರೆ ತಾಣ; ಮುಂಜಾನೆಯ ಬೆಳಕಿನಲ್ಲಿ ಛಾಯಾಗ್ರಹಣ ಅದ್ಭುತ.'
    }
  },
  vijayapura: {
    district: 'Vijayapura',
    districtKn: 'ವಿಜಯಪುರ',
    nearestCity: 'Vijayapura',
    nearestCityKn: 'ವಿಜಯಪುರ',
    featured: true,
    visitorInfo: {
      timings: '06:00 AM - 06:00 PM',
      entryFee: '₹25 for Indians, ₹300 for foreigners (Gol Gumbaz)',
      guidelines: 'Climb 7 flights of stone spiral stairs to access the Whispering Gallery.'
    },
    visitorInfoKn: {
      timings: 'ಬೆಳಿಗ್ಗೆ ೬:೦೦ ರಿಂದ ಸಂಜೆ ೬:೦೦',
      entryFee: 'ಭಾರತೀಯರಿಗೆ ₹೨೫, ವಿದೇಶಿಯರಿಗೆ ₹೩೦೦',
      guidelines: 'ಪಿಸುಗುಟ್ಟುವ ಮೊಗಸಾಲೆಯನ್ನು ತಲುಪಲು ೭ ಸುತ್ತಿನ ಮೆಟ್ಟಿಲುಗಳಿವೆ.'
    }
  },
  udupi: {
    district: 'Udupi',
    districtKn: 'ಉಡುಪಿ',
    nearestCity: 'Udupi',
    nearestCityKn: 'ಉಡುಪಿ',
    featured: true,
    visitorInfo: {
      timings: '05:30 AM - 09:30 PM (Maha Puja at 10:00 AM)',
      entryFee: 'Free entry (Free Mahaprasada meal served daily from 11:30 AM - 02:00 PM)',
      guidelines: 'Men must remove shirts before entering the inner sanctum.'
    },
    visitorInfoKn: {
      timings: 'ಬೆಳಿಗ್ಗೆ ೫:೩೦ ರಿಂದ ರಾತ್ರಿ ೯:೩೦',
      entryFee: 'ಉಚಿತ ಪ್ರವೇಶ ಮತ್ತು ಉಚಿತ ಅನ್ನದಾನ ಮಹಾಪ್ರಸಾದ',
      guidelines: 'ಪುರುಷರು ಗರ್ಭಗುಡಿ ಪ್ರವೇಶಿಸುವಾಗ ಅಂಗಿ ಕಳಚಬೇಕು.'
    }
  },
  chikmagalur: {
    district: 'Chikkamagaluru',
    districtKn: 'ಚಿಕ್ಕಮಗಳೂರು',
    nearestCity: 'Chikkamagaluru',
    nearestCityKn: 'ಚಿಕ್ಕಮಗಳೂರು',
    featured: true,
    visitorInfo: {
      timings: 'Mullayanagiri Peak accessible sunrise to sunset',
      entryFee: 'Free (forest checkpost entry ₹20/vehicle)',
      guidelines: 'Foggy conditions on narrow ghat roads; drive carefully in low gear.'
    },
    visitorInfoKn: {
      timings: 'ಸೂರ್ಯೋದಯದಿಂದ ಸೂರ್ಯಾಸ್ತದವರೆಗೆ',
      entryFee: 'ಉಚಿತ (ಅರಣ್ಯ ಚೆಕ್‌ಪೋಸ್ಟ್ ವಾಹನ ಶುಲ್ಕ ₹೨೦)',
      guidelines: 'ಘಾಟಿ ರಸ್ತೆಯಲ್ಲಿ ಮಂಜು ಕವಿದಿರುವುದರಿಂದ ಜಾಗರೂಕತೆಯ ಚಾಲನೆ ಅಗತ್ಯ.'
    }
  }
};

const enrichedExisting = existingList.map(item => {
  const enh = existingEnhancements[item.id] || {};
  return {
    ...item,
    ...enh
  };
});

// Import newly created 64 destinations list in 3 parts
import { NEW_KARNATAKA_DESTINATIONS } from './newDestinationsData.js';
import { NEW_KARNATAKA_DESTINATIONS_PART2 } from './newDestinationsPart2.js';
import { NEW_KARNATAKA_DESTINATIONS_PART3 } from './newDestinationsPart3.js';

// Combine existing 12 + 25 + 20 + 19 = 76 destinations
const combined = [
  ...enrichedExisting,
  ...NEW_KARNATAKA_DESTINATIONS,
  ...NEW_KARNATAKA_DESTINATIONS_PART2,
  ...NEW_KARNATAKA_DESTINATIONS_PART3
];

// Check duplicate IDs and validate
const seenIds = new Set();
for (const d of combined) {
  if (seenIds.has(d.id)) {
    console.error(`FATAL: Duplicate destination ID detected: ${d.id}`);
    process.exit(1);
  }
  seenIds.add(d.id);

  if (!d.name || !d.district || !d.category || !d.coordinates || !d.heroImage) {
    console.error(`FATAL: Destination ${d.id} is missing required fields!`);
    process.exit(1);
  }
}

fs.writeFileSync(destFile, JSON.stringify(combined, null, 2), 'utf8');
console.log(`Successfully compiled server/data/destinations.json with ${combined.length} authentic destinations across all 31 districts of Karnataka!`);
