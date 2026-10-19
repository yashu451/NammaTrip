// Approximate one-way road distances in km from Karnataka hubs
const DISTANCES_KM = {
  bengaluru: {
    hampi: 345,
    mysuru: 145,
    coorg: 250,
    badami: 450,
    gokarna: 490,
    chitradurga: 200,
    belur: 220,
    halebidu: 215,
    pattadakal: 460,
    vijayapura: 525,
    udupi: 400,
    chikmagalur: 245
  },
  mysuru: {
    hampi: 410,
    mysuru: 0,
    coorg: 120,
    badami: 530,
    gokarna: 490,
    chitradurga: 260,
    belur: 140,
    halebidu: 145,
    pattadakal: 540,
    vijayapura: 620,
    udupi: 300,
    chikmagalur: 175
  },
  hubballi: {
    hampi: 145,
    mysuru: 450,
    coorg: 380,
    badami: 105,
    gokarna: 150,
    chitradurga: 200,
    belur: 270,
    halebidu: 280,
    pattadakal: 125,
    vijayapura: 195,
    udupi: 240,
    chikmagalur: 280
  },
  mangaluru: {
    hampi: 380,
    mysuru: 250,
    coorg: 140,
    badami: 420,
    gokarna: 230,
    chitradurga: 280,
    belur: 155,
    halebidu: 165,
    pattadakal: 435,
    vijayapura: 510,
    udupi: 55,
    chikmagalur: 150
  }
};

const DEFAULT_DISTANCE = 300;

export function calculateBudget({
  startingCity = 'bengaluru',
  destinationId = 'hampi',
  durationDays = 3,
  travelers = 2,
  budgetPerPerson = 6000,
  transportMode = 'ksrtc', // ksrtc, train, car, cab
  stayTier = 'moderate',   // budget, moderate, luxury
  foodTier = 'moderate'    // budget, moderate, luxury
}) {
  const normCity = (startingCity || 'bengaluru').toLowerCase().trim();
  const normDest = (destinationId || 'hampi').toLowerCase().trim();
  const numTravelers = Math.max(1, parseInt(travelers, 10) || 1);
  const numDays = Math.max(1, parseInt(durationDays, 10) || 1);
  const nights = Math.max(1, numDays - 1);
  const roomsNeeded = Math.ceil(numTravelers / 2);

  // Distance lookup
  const originDistances = DISTANCES_KM[normCity] || DISTANCES_KM.bengaluru;
  const distanceKm = originDistances[normDest] || DEFAULT_DISTANCE;
  const roundTripKm = distanceKm * 2;

  // 1. Transport Calculation
  let transportTotal = 0;
  let transportPerPerson = 0;
  let transportNotes = '';
  let transportNotesKn = '';

  switch (transportMode) {
    case 'train':
      // SWR Sleeper / 3AC / Chair Car avg ₹1.2 - ₹1.8 / km round trip per person
      transportPerPerson = Math.max(400, Math.round(roundTripKm * 1.3));
      transportTotal = transportPerPerson * numTravelers;
      transportNotes = `SWR Train round-trip ticket (~₹${transportPerPerson}/person) + local station transfers`;
      transportNotesKn = `ದಕ್ಷಿಣ ಪಶ್ಚಿಮ ರೈಲ್ವೆ ದ್ವಿಮುಖ ಟಿಕೆಟ್ (~₹${transportPerPerson}/ವ್ಯಕ್ತಿಗೆ) + ಸ್ಥಳೀಯ ನಿಲ್ದಾಣ ಆಟೋ`;
      break;

    case 'ksrtc':
      // KSRTC Rajahamsa / Airavat Club Class ~₹1.6 / km round trip per person
      transportPerPerson = Math.max(500, Math.round(roundTripKm * 1.6));
      transportTotal = transportPerPerson * numTravelers;
      transportNotes = `KSRTC Airavat / Rajahamsa express bus (~₹${transportPerPerson}/person round-trip)`;
      transportNotesKn = `ಕೆ.ಎಸ್.ಆರ್.ಟಿ.ಸಿ ಐರಾವತ / ರಾಜಹಂಸ ಬಸ್ ದ್ವಿಮುಖ ಪ್ರಯಾಣ (~₹${transportPerPerson}/ವ್ಯಕ್ತಿಗೆ)`;
      break;

    case 'car':
      // Self-drive rental or personal car: fuel + tolls + local driving (~₹9/km split across group)
      const fuelCost = Math.round(roundTripKm * 7.5);
      const tollsTaxes = Math.round(roundTripKm * 1.2);
      transportTotal = fuelCost + tollsTaxes + (numDays * 600); // 600/day maintenance/parking
      transportPerPerson = Math.round(transportTotal / numTravelers);
      transportNotes = `Car fuel (₹${fuelCost}) + National Highway tolls (₹${tollsTaxes}) + parking fees`;
      transportNotesKn = `ಕಾರು ಇಂಧನ ವೆಚ್ಚ (₹${fuelCost}) + ರಾಷ್ಟ್ರೀಯ ಹೆದ್ದಾರಿ ಟೋಲ್ (₹${tollsTaxes}) + ಪಾರ್ಕಿಂಗ್`;
      break;

    case 'cab':
    default:
      // Private Chauffeur Cab: ₹14/km (min 300km/day) + driver bata ₹500/day
      const billedKm = Math.max(roundTripKm, numDays * 300);
      const cabBase = billedKm * 14;
      const driverBata = numDays * 500;
      const cabTolls = Math.round(roundTripKm * 1.2);
      transportTotal = cabBase + driverBata + cabTolls;
      transportPerPerson = Math.round(transportTotal / numTravelers);
      transportNotes = `Private Chauffeur Cab (${billedKm} km @ ₹14/km) + Driver Bata + Tolls`;
      transportNotesKn = `ಖಾಸಗಿ ಕಾರು ಬಾಡಿಗೆ (${billedKm} ಕಿ.ಮೀ @ ₹೧೪/ಕಿ.ಮೀ) + ಚಾಲಕನ ಭತ್ಯೆ + ಟೋಲ್`;
      break;
  }

  // 2. Accommodation Calculation
  let roomRatePerNight = 1400; // budget default
  if (stayTier === 'luxury') roomRatePerNight = 5500;
  else if (stayTier === 'moderate') roomRatePerNight = 2600;

  const stayTotal = roomRatePerNight * roomsNeeded * nights;
  const stayPerPerson = Math.round(stayTotal / numTravelers);

  // 3. Food & Dining Calculation
  let dailyFoodPerPerson = 400; // budget: Khanavali / Darshini
  if (foodTier === 'luxury') dailyFoodPerPerson = 1200;
  else if (foodTier === 'moderate') dailyFoodPerPerson = 700;

  const foodTotal = dailyFoodPerPerson * numTravelers * numDays;
  const foodPerPerson = dailyFoodPerPerson * numDays;

  // 4. Sightseeing, Monument Entry & Activities
  // ASI ticket: ₹40/monument in Karnataka, guides: ₹400-800, coracle: ₹200-400
  const dailySightseeingPerPerson = 250;
  const activityTotal = dailySightseeingPerPerson * numTravelers * numDays;
  const activityPerPerson = dailySightseeingPerPerson * numDays;

  // 5. Local Auto & Miscellaneous
  const dailyMiscPerPerson = 150;
  const miscTotal = dailyMiscPerPerson * numTravelers * numDays;
  const miscPerPerson = dailyMiscPerPerson * numDays;

  // Summary Totals
  const estimatedTotalCost = transportTotal + stayTotal + foodTotal + activityTotal + miscTotal;
  const estimatedCostPerPerson = Math.round(estimatedTotalCost / numTravelers);

  const totalUserBudget = budgetPerPerson * numTravelers;
  const budgetDifference = totalUserBudget - estimatedTotalCost;
  const differencePerPerson = Math.round(budgetDifference / numTravelers);

  // Feasibility status evaluation
  let feasibilityStatus = 'balanced'; // surplus, balanced, tight, exceeded
  let statusBadge = 'Well Balanced';
  let statusBadgeKn = 'ಸಮತೋಲಿತ ಬಜೆಟ್';
  let statusColor = '#2D6A4F'; // green

  const percentDiff = (budgetDifference / totalUserBudget) * 100;

  if (percentDiff >= 15) {
    feasibilityStatus = 'surplus';
    statusBadge = 'Comfortably Feasible';
    statusBadgeKn = 'ಅನುಕೂಲಕರ ಬಜೆಟ್';
    statusColor = '#1B4332';
  } else if (percentDiff >= 0) {
    feasibilityStatus = 'balanced';
    statusBadge = 'Well Balanced';
    statusBadgeKn = 'ಸಮತೋಲಿತ ಯೋಜನೆ';
    statusColor = '#2D6A4F';
  } else if (percentDiff >= -20) {
    feasibilityStatus = 'tight';
    statusBadge = 'Tight Budget';
    statusBadgeKn = 'ಸ್ವಲ್ಪ ಕೊರತೆ (ಹೊಂದಾಣಿಕೆ ಸಾಧ್ಯ)';
    statusColor = '#D97706';
  } else {
    feasibilityStatus = 'exceeded';
    statusBadge = 'Exceeds Budget';
    statusBadgeKn = 'ಬಜೆಟ್ ಮೀರಿದೆ (ಬದಲಾವಣೆ ಅಗತ್ಯ)';
    statusColor = '#DC2626';
  }

  // Generate actionable warnings & recommendations
  const warnings = [];
  const warningsKn = [];

  if (feasibilityStatus === 'tight' || feasibilityStatus === 'exceeded') {
    if (transportMode === 'cab') {
      warnings.push(`Private Cab costs ₹${transportTotal}. Switching to KSRTC bus or Train could save up to ₹${Math.round(transportTotal * 0.6)}.`);
      warningsKn.push(`ಖಾಸಗಿ ಕಾರು ಬಾಡಿಗೆ ₹${transportTotal} ಆಗಿದೆ. ಕೆ.ಎಸ್.ಆರ್.ಟಿ.ಸಿ ಅಥವಾ ರೈಲಿನಲ್ಲಿ ಪ್ರಯಾಣಿಸಿದರೆ ಸುಮಾರು ₹${Math.round(transportTotal * 0.6)} ಉಳಿಸಬಹುದು.`);
    }
    if (stayTier === 'luxury') {
      warnings.push(`Luxury accommodation is ₹${stayTotal}. Opting for KSTDC Mayura or heritage homestays saves ~₹${Math.round(stayTotal * 0.5)}.`);
      warningsKn.push(`ಐಷಾರಾಮಿ ವಾಸ್ತವ್ಯಕ್ಕೆ ₹${stayTotal} ತಗಲುತ್ತದೆ. ಕೆ.ಎಸ್.ಟಿ.ಡಿ.ಸಿ ಮಯೂರ ಅಥವಾ ಹೋಮ್‌ಸ್ಟೇ ಆರಿಸಿಕೊಂಡರೆ ~₹${Math.round(stayTotal * 0.5)} ಉಳಿತಾಯವಾಗುತ್ತದೆ.`);
    }
    if (numDays > 4 && feasibilityStatus === 'exceeded') {
      warnings.push(`A ${numDays}-day trip exceeds your allocated budget. Consider a ${numDays - 1}-day itinerary to fit within budget.`);
      warningsKn.push(`${numDays} ದಿನಗಳ ಪ್ರಯಾಣ ನಿಮ್ಮ ಬಜೆಟ್ ಮೀರಿದೆ. ದಿನಗಳನ್ನು ${numDays - 1} ಕ್ಕೆ ಇಳಿಸಿದರೆ ಬಜೆಟ್‌ನಲ್ಲಿ ಪೂರ್ಣಗೊಳಿಸಬಹುದು.`);
    }
  } else {
    warnings.push(`Your budget provides a healthy buffer of ₹${Math.abs(budgetDifference)} for local artisan crafts and heritage souvenirs.`);
    warningsKn.push(`ಸ್ಥಳೀಯ ಕರಕುಶಲ ವಸ್ತುಗಳು ಮತ್ತು ನೆನಪಿನ ಕಾಣಿಕೆಗಳನ್ನು ಖರೀದಿಸಲು ನಿಮ್ಮ ಬಳಿ ₹${Math.abs(budgetDifference)} ನಷ್ಟು ಅನುಕೂಲಕರ ಉಳಿತಾಯವಿದೆ.`);
  }

  return {
    travelers: numTravelers,
    durationDays: numDays,
    nights,
    roomsNeeded,
    distanceKm,
    roundTripKm,
    budgetPerPerson,
    totalUserBudget,
    estimatedTotalCost,
    estimatedCostPerPerson,
    budgetDifference,
    differencePerPerson,
    percentDiff: Math.round(percentDiff),
    feasibilityStatus,
    statusBadge,
    statusBadgeKn,
    statusColor,
    breakdown: {
      transport: {
        total: transportTotal,
        perPerson: transportPerPerson,
        mode: transportMode,
        notes: transportNotes,
        notesKn: transportNotesKn
      },
      accommodation: {
        total: stayTotal,
        perPerson: stayPerPerson,
        tier: stayTier,
        rooms: roomsNeeded,
        nights,
        ratePerNight: roomRatePerNight
      },
      food: {
        total: foodTotal,
        perPerson: foodPerPerson,
        dailyPerPerson: dailyFoodPerPerson,
        tier: foodTier
      },
      activities: {
        total: activityTotal,
        perPerson: activityPerPerson,
        dailyPerPerson: dailySightseeingPerPerson
      },
      miscellaneous: {
        total: miscTotal,
        perPerson: miscPerPerson,
        dailyPerPerson: dailyMiscPerPerson
      }
    },
    warnings,
    warningsKn
  };
}
