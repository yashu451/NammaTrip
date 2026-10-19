import { calculateBudget } from './budgetEngine.js';
import { generateCuratedItinerary } from './itineraryGenerator.js';

export function fixMyTrip({
  currentPlan,
  newBudgetPerPerson,
  newDurationDays,
  newTransportMode,
  newStayTier,
  newFoodTier
}) {
  const currentInputs = currentPlan.inputs || {};
  const currentBudget = currentPlan.budget || {};
  const currentItinerary = currentPlan.itinerary || [];

  const targetBudgetPerPerson = Number(newBudgetPerPerson ?? currentInputs.budgetPerPerson ?? 5000);
  const targetDurationDays = Number(newDurationDays ?? currentInputs.durationDays ?? 3);
  const targetTravelers = Number(currentInputs.travelers ?? 2);
  const targetStartingCity = currentInputs.startingCity || 'bengaluru';
  const targetDestination = currentInputs.destinationId || 'hampi';

  let targetTransport = newTransportMode || currentInputs.transportMode || 'ksrtc';
  let targetStay = newStayTier || currentInputs.stayTier || 'moderate';
  let targetFood = newFoodTier || currentInputs.foodTier || 'moderate';

  const explanations = [];
  const explanationsKn = [];
  const appliedFixes = [];

  // Check 1: Did duration change?
  const originalDays = Number(currentInputs.durationDays || currentItinerary.length || 3);
  const daysDiff = targetDurationDays - originalDays;

  if (daysDiff < 0) {
    const trimmedDays = Math.abs(daysDiff);
    explanations.push(`Reduced trip duration by ${trimmedDays} day(s) to match your updated time schedule. Preserved all core UNESCO heritage monuments while consolidating secondary activities.`);
    explanationsKn.push(`ನಿಮ್ಮ ಹೊಸ ಸಮಯಕ್ಕೆ ಸರಿಹೊಂದುವಂತೆ ಪ್ರವಾಸದ ಅವಧಿಯನ್ನು ${trimmedDays} ದಿನಗಳಷ್ಟು ಕಡಿಮೆ ಮಾಡಲಾಗಿದೆ. ಎಲ್ಲಾ ಪ್ರಮುಖ ಯುನೆಸ್ಕೋ ಪಾರಂಪರಿಕ ತಾಣಗಳನ್ನು ಸಂರಕ್ಷಿಸಲಾಗಿದೆ.`);
    appliedFixes.push('duration_reduced');
  } else if (daysDiff > 0) {
    explanations.push(`Extended itinerary by ${daysDiff} day(s), adding deeper immersion into local crafts, temple trails, and scenic sunset lookouts.`);
    explanationsKn.push(`ಪ್ರವಾಸವನ್ನು ${daysDiff} ದಿನಗಳಷ್ಟು ವಿಸ್ತರಿಸಿ, ಸ್ಥಳೀಯ ಕರಕುಶಲ ಕಲೆಗಳು ಮತ್ತು ನಿಸರ್ಗ ತಾಣಗಳ ಸೌಂದರ್ಯವನ್ನು ಸೇರಿಸಲಾಗಿದೆ.`);
    appliedFixes.push('duration_extended');
  }

  // Initial recalculation with requested inputs
  let recalculatedBudget = calculateBudget({
    startingCity: targetStartingCity,
    destinationId: targetDestination,
    durationDays: targetDurationDays,
    travelers: targetTravelers,
    budgetPerPerson: targetBudgetPerPerson,
    transportMode: targetTransport,
    stayTier: targetStay,
    foodTier: targetFood
  });

  // Check 2: If budget is still exceeded, automatically optimize transport & stay
  if (recalculatedBudget.feasibilityStatus === 'exceeded' || recalculatedBudget.feasibilityStatus === 'tight') {
    // Strategy A: Optimize transport if cab or car was used
    if (targetTransport === 'cab') {
      targetTransport = 'ksrtc';
      explanations.push(`Optimized transit: Switched from Private Chauffeur Cab to KSRTC Airavat / Rajahamsa express bus. This preserves your budget while offering comfortable, reliable state highway travel.`);
      explanationsKn.push(`ಪ್ರಯಾಣ ಹೊಂದಾಣಿಕೆ: ದುಬಾರಿ ಖಾಸಗಿ ಕಾರಿನ ಬದಲು ಕೆ.ಎಸ್.ಆರ್.ಟಿ.ಸಿ ಐರಾವತ / ರಾಜಹಂಸ ಬಸ್ ಆರಿಸಿಕೊಳ್ಳಲಾಗಿದೆ. ಇದರಿಂದ ಸುರಕ್ಷಿತ ಪ್ರಯಾಣದೊಂದಿಗೆ ಹಣ ಉಳಿತಾಯವಾಗುತ್ತದೆ.`);
      appliedFixes.push('transport_optimized');
    } else if (targetTransport === 'car' && targetTravelers <= 2) {
      targetTransport = 'train';
      explanations.push(`Optimized transit: Switched to South Western Railway (SWR) express train, reducing fuel and toll overheads for small traveler groups.`);
      explanationsKn.push(`ಪ್ರಯಾಣ ಹೊಂದಾಣಿಕೆ: ಕಡಿಮೆ ಸಂಖ್ಯೆಯ ಪ್ರಯಾಣಿಕರಿಗೆ ರೈಲ್ವೆ ಪ್ರಯಾಣವನ್ನು ಶಿಫಾರಸು ಮಾಡಿ ಇಂಧನ ಮತ್ತು ಟೋಲ್ ವೆಚ್ಚವನ್ನು ಕಡಿತಗೊಳಿಸಲಾಗಿದೆ.`);
      appliedFixes.push('transport_to_train');
    }

    // Re-evaluate
    recalculatedBudget = calculateBudget({
      startingCity: targetStartingCity,
      destinationId: targetDestination,
      durationDays: targetDurationDays,
      travelers: targetTravelers,
      budgetPerPerson: targetBudgetPerPerson,
      transportMode: targetTransport,
      stayTier: targetStay,
      foodTier: targetFood
    });

    // Strategy B: Optimize accommodation if still tight
    if ((recalculatedBudget.feasibilityStatus === 'exceeded' || recalculatedBudget.feasibilityStatus === 'tight') && targetStay === 'luxury') {
      targetStay = 'moderate';
      explanations.push(`Optimized stay: Switched from luxury resort to charming KSTDC Mayura heritage hotel / certified homestay, saving over 40% on room rates.`);
      explanationsKn.push(`ವಾಸ್ತವ್ಯ ಹೊಂದಾಣಿಕೆ: ಐಷಾರಾಮಿ ರೆಸಾರ್ಟ್ ಬದಲಿಗೆ ಕೆ.ಎಸ್.ಟಿ.ಡಿ.ಸಿ ಮಯೂರ ಅಥವಾ ಪಾರಂಪರಿಕ ಹೋಮ್‌ಸ್ಟೇಗೆ ಬದಲಾಯಿಸಿ ಕೊಠಡಿ ವೆಚ್ಚವನ್ನು ೪೦% ಉಳಿಸಲಾಗಿದೆ.`);
      appliedFixes.push('stay_to_moderate');
    } else if (recalculatedBudget.feasibilityStatus === 'exceeded' && targetStay === 'moderate') {
      targetStay = 'budget';
      explanations.push(`Optimized stay: Switched to verified budget heritage lodges and government tourist guest houses.`);
      explanationsKn.push(`ವಾಸ್ತವ್ಯ ಹೊಂದಾಣಿಕೆ: ನಂಬಿಕಸ್ಥ ಬಜೆಟ್ ವಸತಿಗೃಹಗಳು ಮತ್ತು ಪ್ರವಾಸಿ ಇಲಾಖೆಯ ಅತಿಥಿಗೃಹಗಳನ್ನು ಆಯ್ಕೆ ಮಾಡಲಾಗಿದೆ.`);
      appliedFixes.push('stay_to_budget');
    }

    // Final budget calculation after all smart optimizations
    recalculatedBudget = calculateBudget({
      startingCity: targetStartingCity,
      destinationId: targetDestination,
      durationDays: targetDurationDays,
      travelers: targetTravelers,
      budgetPerPerson: targetBudgetPerPerson,
      transportMode: targetTransport,
      stayTier: targetStay,
      foodTier: targetFood
    });
  }

  // Generate the revised day-by-day itinerary
  const revisedItinerary = generateCuratedItinerary({
    startingCity: targetStartingCity,
    destinationId: targetDestination,
    durationDays: targetDurationDays,
    interests: currentInputs.interests || ['Heritage', 'Culture', 'Food'],
    travelers: targetTravelers,
    budgetTier: targetStay
  });

  if (explanations.length === 0) {
    explanations.push('Budget and itinerary adjusted successfully to match your updated preferences with balanced expenditure.');
    explanationsKn.push('ನಿಮ್ಮ ಹೊಸ ಆದ್ಯತೆಗಳಿಗೆ ತಕ್ಕಂತೆ ಬಜೆಟ್ ಮತ್ತು ದಿನಚರಿಯನ್ನು ಯಶಸ್ವಿಯಾಗಿ ಸರಿಹೊಂದಿಸಲಾಗಿದೆ.');
  }

  const revisedPlan = {
    inputs: {
      ...currentInputs,
      budgetPerPerson: targetBudgetPerPerson,
      durationDays: targetDurationDays,
      transportMode: targetTransport,
      stayTier: targetStay,
      foodTier: targetFood
    },
    itinerary: revisedItinerary,
    budget: recalculatedBudget,
    fixSummary: {
      explanations,
      explanationsKn,
      appliedFixes,
      costBefore: currentBudget.estimatedTotalCost || 0,
      costAfter: recalculatedBudget.estimatedTotalCost,
      savings: Math.max(0, (currentBudget.estimatedTotalCost || 0) - recalculatedBudget.estimatedTotalCost),
      budgetDifference: recalculatedBudget.budgetDifference,
      feasibilityStatus: recalculatedBudget.feasibilityStatus
    }
  };

  return revisedPlan;
}
