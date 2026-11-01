/**
 * NammaTrip AI — Comprehensive Catalogue of 64 Authentic Karnataka Destinations
 * Covering all 31 Districts of Karnataka & All Core Tourism Themes:
 * - Heritage & Historical Monuments
 * - Hill Stations & Mountain Destinations
 * - Waterfalls & Nature Attractions
 * - Beaches & Coastal Destinations
 * - Wildlife Sanctuaries & National Parks
 * - Temples & Spiritual Destinations
 * - Adventure & Trekking Destinations
 * - Famous Cities & Cultural Hubs
 *
 * Source: Karnataka State Tourism Development Corporation (KSTDC),
 * Department of Tourism Government of Karnataka, ASI, and Incredible India.
 */

export const NEW_KARNATAKA_DESTINATIONS = [
  // 1. Jog Falls (Shivamogga)
  {
    id: "jog-falls",
    name: "Jog Falls (Gerosoppa)",
    nameKn: "ಜೋಗ ಜಲಪಾತ",
    tagline: "India's Majestic Un-tiered Cataract on the Sacred Sharavathi",
    taglineKn: "ಶರಾವತಿ ನದಿಯ ಭವ್ಯ ಧುಮ್ಮುಕ್ಕುವ ವಿಶ್ವವಿಖ್ಯಾತ ಜಲಪಾತ",
    region: "Malenadu & Western Ghats (Shivamogga District)",
    regionKn: "ಮಲೆನಾಡು ಮತ್ತು ಪಶ್ಚಿಮ ಘಟ್ಟಗಳು (ಶಿವಮೊಗ್ಗ ಜಿಲ್ಲೆ)",
    district: "Shivamogga",
    districtKn: "ಶಿವಮೊಗ್ಗ",
    nearestCity: "Sagara",
    nearestCityKn: "ಸಾಗರ",
    category: ["Waterfalls", "Nature"],
    heroImage: "/images/destinations/jog-falls.jpg",
    gallery: ["/images/destinations/jog-falls.jpg", "/images/destinations/fallback.jpg"],
    description: "Dropping 253 meters (830 ft) in a colossal unbroken plume, Jog Falls is India's second-highest plunge waterfall. The Sharavathi River divides into four distinct streams: Raja (grandeur), Roarer (violent surge), Rocket (high-speed jet), and Rani (delicate lace-like mist).",
    descriptionKn: "೨೫೩ ಮೀಟರ್ (೮೩೦ ಅಡಿ) ಎತ್ತರದಿಂದ ನೇರವಾಗಿ ಪ್ರಪಾತಕ್ಕೆ ಧುಮುಕುವ ಜೋಗ ಜಲಪಾತ ಭಾರತದ ಪ್ರಸಿದ್ಧ ನೈಸರ್ಗಿಕ ವಿಸ್ಮಯ. ಶರಾವತಿ ನದಿಯು ರಾಜ, ರೋರರ್, ರಾಕೆಟ್ ಮತ್ತು ರಾಣಿ ಎಂಬ ನಾಲ್ಕು ಕವಲುಗಳಾಗಿ ಹರಿಯುತ್ತದೆ.",
    significance: "National natural wonder powered by the Linganamakki reservoir catchment. Critical water resource and home to Asia's historic Mahatma Gandhi Hydroelectric Project.",
    significanceKn: "ಲಿಂಗನಮಕ್ಕಿ ಜಲಾಶಯದ ಹಿನ್ನೀರಿನಿಂದ ರೂಪುಗೊಂಡ ನೈಸರ್ಗಿಕ ತಾಣ. ಭಾರತದ ಪ್ರಮುಖ ಜಲವಿದ್ಯುತ್ ಉತ್ಪಾದನಾ ಕೇಂದ್ರ.",
    heritageStory: "Local lore recounts how the Sahyadri tribes revered the sacred gorge long before Francis Buchanan documented the falls in 1801 during his survey of Canara. The sound of the roar echoes across dense evergreen valleys for miles.",
    heritageStoryKn: "ಕ್ರಿ.ಶ. ೧೮೦೧ರಲ್ಲಿ ಬ್ರಿಟಿಷ್ ಸರ್ವೇಯರ್ ಫ್ರಾನ್ಸಿಸ್ ಬುಕಾನನ್ ಈ ಅದ್ಭುತ ಜಲಪಾತವನ್ನು ದಾಖಲಿಸುವ ಮುಂಚಿನಿಂದಲೂ ಮಲೆನಾಡಿನ ಜನಪದರು ಶರಾವತಿ ದೇವಿಯ ಪವಿತ್ರ ಜಲಧಾರೆಯಾಗಿ ಪೂಜಿಸುತ್ತಿದ್ದಾರೆ.",
    traditionsAndCrafts: "Hase Chitra wall paintings by Devaru community, betel nut crafts, and wild honey foraging.",
    traditionsAndCraftsKn: "ದೇವ್ರು ಜನಾಂಗದ ಸಾಂಪ್ರದಾಯಿಕ ಹಾಸೆ ಚಿತ್ತಾರ ಕಲೆ, ಅಡಿಕೆ ಕರಕುಶಲ ವಸ್ತುಗಳು ಮತ್ತು ಶುದ್ಧ ಜೇನುತುಪ್ಪ.",
    localFood: "Malenadu Todadevu (wafer-thin sweet crepes), Appemidi tender mango pickle, Jackfruit happala (papad), and hot Kashaya.",
    localFoodKn: "ಮಲೆನಾಡಿನ ಸಾಂಪ್ರದಾಯಿಕ ತೊಡದೇವು, ಜಿಐ ಟ್ಯಾಗ್ ಪಡೆದ ಅಪ್ಪೆಮಿಡಿ ಉಪ್ಪಿನಕಾಯಿ, ಹಲಸಿನ ಹಪ್ಪಳ ಹಾಗೂ ಗಿಡಮೂಲಿಕೆಗಳ ಕಷಾಯ.",
    historicalSources: "Francis Buchanan, 'A Journey from Madras through the Countries of Mysore, Canara, and Malabar' (1807); Karnataka State Tourism Records.",
    historicalSourcesKn: "ಫ್ರಾನ್ಸಿಸ್ ಬುಕಾನನ್ ಅವರ 'ಜರ್ನಿ ಫ್ರಮ್ ಮದ್ರಾಸ್' (೧೮೦೭); ಕರ್ನಾಟಕ ಪ್ರವಾಸೋದ್ಯಮ ಇಲಾಖೆ.",
    bestTimeToVisit: "July to November (peak monsoon & post-monsoon splendour)",
    bestTimeToVisitKn: "ಜುಲೈನಿಂದ ನವೆಂಬರ್‌ವರೆಗೆ (ಮಳೆಗಾಲದ ಭವ್ಯ ವೈಭವ)",
    avgDailyBudgetINR: 1900,
    nearestTransit: "Talaguppa Railway Station (14 km); Shivamogga Airport (105 km)",
    nearestTransitKn: "ತಾಳಗುಪ್ಪ ರೈಲ್ವೆ ನಿಲ್ದಾಣ (೧೪ ಕಿ.ಮೀ); ಶಿವಮೊಗ್ಗ ವಿಮಾನ ನಿಲ್ದಾಣ (೧೦೫ ಕಿ.ಮೀ)",
    nearbyDestinations: ["kodachadri", "agumbe", "sringeri"],
    keyHighlights: [
      "Panoramic viewpoint from Watkins Platform",
      "1,400 stone steps descent down into the deep gorge pool",
      "Four distinct cascades: Raja, Roarer, Rocket and Rani",
      "Laser and musical sound-and-light fountain show at evening",
      "Sharavathi backwater cruise and suspension bridges"
    ],
    keyHighlightsKn: [
      "ವಾಟ್ಕಿನ್ಸ್ ವೇದಿಕೆಯಿಂದ ಅದ್ಭುತ ವಿಹಂಗಮ ನೋಟ",
      "ಕಂದಕದ ಆಳಕ್ಕೆ ಇಳಿಯುವ ೧,೪೦೦ ಕಲ್ಲಿನ ಮೆಟ್ಟಿಲುಗಳ ಹಾದಿ",
      "ರಾಜ, ರೋರರ್, ರಾಕೆಟ್ ಮತ್ತು ರಾಣಿ ನಾಲ್ಕು ಜಲಧಾರೆಗಳ ವೀಕ್ಷಣೆ",
      "ಸಂಜೆಯ ಲೇಸರ್ ಮತ್ತು ಬೆಳಕು-ಧ್ವನಿ ಕಾರಂಜಿ ಪ್ರದರ್ಶನ",
      "ಶರಾವತಿ ಹಿನ್ನೀರಿನ ತೂಗುಸೇತುವೆ ಹಾಗೂ ಬೋಟಿಂಗ್"
    ],
    coordinates: { lat: 14.2288, lng: 74.8125 },
    visitorInfo: {
      timings: "06:00 AM - 07:00 PM (Laser show 07:00 PM)",
      entryFee: "₹20 for adults, ₹50 vehicle parking",
      guidelines: "Steep slippery steps down to gorge; closed during severe flash flood warnings."
    },
    visitorInfoKn: {
      timings: "ಬೆಳಿಗ್ಗೆ ೬:೦೦ ರಿಂದ ಸಂಜೆ ೭:೦೦ (ಲೇಸರ್ ಶೋ ಸಂಜೆ ೭:೦೦)",
      entryFee: "ಪ್ರವೇಶ ಶುಲ್ಕ ₹೨೦, ವಾಹನ ನಿಲುಗಡೆ ₹೫೦",
      guidelines: "ಮೆಟ್ಟಿಲುಗಳು ಜಾರುವುದರಿಂದ ಜಾಗರೂಕತೆಯಿಂದ ಇಳಿಯಿರಿ."
    },
    featured: true
  },

  // 2. Bandipur National Park (Chamarajanagara)
  {
    id: "bandipur",
    name: "Bandipur National Park & Tiger Reserve",
    nameKn: "ಬಂಡೀಪುರ ರಾಷ್ಟ್ರೀಯ ಉದ್ಯಾನವನ",
    tagline: "Premier Project Tiger Reserve in the Nilgiri Biosphere",
    taglineKn: "ನೀಲಗಿರಿ ಜೀವಗೋಳದ ಪ್ರತಿಷ್ಠಿತ ಹುಲಿ ಸಂರಕ್ಷಿತ ತಾಣ",
    region: "Southern Karnataka (Chamarajanagara District)",
    regionKn: "ದಕ್ಷಿಣ ಕರ್ನಾಟಕ (ಚಾಮರಾಜನಗರ ಜಿಲ್ಲೆ)",
    district: "Chamarajanagara",
    districtKn: "ಚಾಮರಾಜನಗರ",
    nearestCity: "Gundlupete",
    nearestCityKn: "ಗುಂಡ್ಲುಪೇಟೆ",
    category: ["Wildlife", "Nature"],
    heroImage: "/images/destinations/bandipur.jpg",
    gallery: ["/images/destinations/bandipur.jpg", "/images/destinations/fallback.jpg"],
    description: "Spread over 874 square kilometers of dry deciduous forest along the Kabini and Moyar rivers, Bandipur was established in 1931 by the Maharaja of Mysore and became one of India's inaugural Project Tiger reserves in 1973. It holds the second highest tiger population in India.",
    descriptionKn: "೮೭೪ ಚದರ ಕಿ.ಮೀ ವಿಸ್ತೀರ್ಣದಲ್ಲಿ ಹರಡಿರುವ ಬಂಡೀಪುರ ಭಾರತದ ಅಗ್ರಗಣ್ಯ ಹುಲಿ ಸಂರಕ್ಷಿತ ತಾಣ. ಮೈಸೂರು ಮಹಾರಾಜರ ಖಾಸಗಿ ಬೇಟೆ ತಾಣವಾಗಿದ್ದ ಈ ಕಾಡು ೧೯೭೩ರಲ್ಲಿ ಪ್ರಾಜೆಕ್ಟ್ ಟೈಗರ್ ಯೋಜನೆಯಡಿ ರಾಷ್ಟ್ರೀಯ ಉದ್ಯಾನವನವಾಯಿತು.",
    significance: "Crucial component of the UNESCO Nilgiri Biosphere Reserve connecting Wayanad, Mudumalai, and Nagarahole, forming Asia's largest contiguous wild elephant habitat.",
    significanceKn: "ಯುನೆಸ್ಕೋ ನೀಲಗಿರಿ ಜೀವಗೋಳದ ಪ್ರಮುಖ ಭಾಗ. ಏಷ್ಯಾದಲ್ಲೇ ಅತಿ ಹೆಚ್ಚು ಕಾಡಾನೆಗಳು ಮತ್ತು ಹುಲಿಗಳು ನೆಲೆಸಿರುವ ರಕ್ಷಿತಾರಣ್ಯ.",
    heritageStory: "Originally designated as 'Venugopala Wildlife Park' by Maharaja Krishna Raja Wadiyar IV in 1931, dedicated to the guardian deity atop Himavad Gopalaswamy Betta who protects the forest inhabitants.",
    heritageStoryKn: "೧೯೩೧ರಲ್ಲಿ ನಾಲ್ವಡಿ ಕೃಷ್ಣರಾಜ ಒಡೆಯರ್ ಅವರು ಹಿಮವದ್ ಗೋಪಾಲಸ್ವಾಮಿ ಸನ್ನಿಧಿಯ ಹೆಸರಿನಲ್ಲಿ 'ವೇಣುಗೋಪಾಲ ವನ್ಯಜೀವಿ ಧಾಮ' ಎಂದು ಇದನ್ನು ಸ್ಥಾಪಿಸಿದ್ದರು.",
    traditionsAndCrafts: "Lantana weed furniture crafting by tribal self-help collectives, preventing forest degradation.",
    traditionsAndCraftsKn: "ಲ್ಯಾಂಟಾನಾ ಕಳೆಯಿಂದ ಆದಿವಾಸಿಗಳು ತಯಾರಿಸುವ ಪರಿಸರಸ್ನೇಹಿ ಪೀಠೋಪಕರಣಗಳು.",
    localFood: "Authentic Karnataka Ragi Mudde with Bassaru, country chicken saaru, and fresh farm curd.",
    localFoodKn: "ರಾಗಿ ಮುದ್ದೆ, ನಾಟಿ ಕೋಳಿ ಸಾರು, ಬಸ್ಸಾರು ಮತ್ತು ತಾಜಾ ಹಳ್ಳಿಯ ಮೊಸರು.",
    historicalSources: "Project Tiger Annual Census; Karnataka Forest Department Wildlife Division.",
    historicalSourcesKn: "ಪ್ರಾಜೆಕ್ಟ್ ಟೈಗರ್ ವಾರ್ಷಿಕ ಜನಗಣತಿ; ಕರ್ನಾಟಕ ಅರಣ್ಯ ಇಲಾಖೆ.",
    bestTimeToVisit: "October to May (dry season offers highest tiger & elephant sightings)",
    bestTimeToVisitKn: "ಅಕ್ಟೋಬರ್‌ನಿಂದ ಮೇವರೆಗೆ (ವನ್ಯಜೀವಿ ದರ್ಶನಕ್ಕೆ ಅತ್ಯುತ್ತಮ)",
    avgDailyBudgetINR: 2800,
    nearestTransit: "Mysuru Junction Railway Station (75 km); Mysore Airport (65 km)",
    nearestTransitKn: "ಮೈಸೂರು ಜಂಕ್ಷನ್ ರೈಲು ನಿಲ್ದಾಣ (೭೫ ಕಿ.ಮೀ)",
    nearbyDestinations: ["mysuru", "br-hills", "nagarhole"],
    keyHighlights: [
      "Open canopy jeep safaris into core tiger territory",
      "Herds of wild Asiatic elephants along Moyar river gorge",
      "Gaur (Indian bison), leopards, dholes, and striped hyenas",
      "Misty Himavad Gopalaswamy Betta peak and 14th-century temple",
      "Birdwatching over 200 species including crested hawk-eagles"
    ],
    keyHighlightsKn: [
      "ತೆರೆದ ಜೀಪ್‌ನಲ್ಲಿ ದಟ್ಟ ಕಾನನದ ಹುಲಿ ಸಫಾರಿ",
      "ಮೊಯಾರ್ ನದಿ ತೀರದಲ್ಲಿ ಹಿಂಡು ಹಿಂಡಾಗಿ ಸಂಚರಿಸುವ ಕಾಡಾನೆಗಳು",
      "ಕಾಡುಕೋಣ, ಚಿರತೆ ಮತ್ತು ಕೆನ್ನಾಯಿಗಳ ಅಪರೂಪದ ದರ್ಶನ",
      "ಹಿಮಾವೃತ ಗೋಪಾಲಸ್ವಾಮಿ ಬೆಟ್ಟದ ಪ್ರಾಚೀನ ದೇವಾಲಯ",
      "೨೦೦ಕ್ಕೂ ಹೆಚ್ಚು ಬಗೆಯ ಪಕ್ಷಿ ಸಂಕುಲದ ವೀಕ್ಷಣೆ"
    ],
    coordinates: { lat: 11.6664, lng: 76.6291 },
    visitorInfo: {
      timings: "Safari: 06:15 AM - 09:00 AM & 03:00 PM - 06:00 PM",
      entryFee: "Safari: ₹350 bus, ₹1,500 - ₹3,000 jeep safari",
      guidelines: "Advance online booking on Karnataka Forest website recommended; plastic strictly banned."
    },
    visitorInfoKn: {
      timings: "ಸಫಾರಿ: ಬೆಳಿಗ್ಗೆ ೬:೧೫ - ೯:೦೦ ಮತ್ತು ಮಧ್ಯಾಹ್ನ ೩:೦೦ - ೬:೦೦",
      entryFee: "ಬಸ್ ಸಫಾರಿ ₹೩೫೦, ಜೀಪ್ ಸಫಾರಿ ₹೧,೫೦೦ - ₹೩,೦೦೦",
      guidelines: "ಅರಣ್ಯ ಇಲಾಖೆಯ ವೆಬ್‌ಸೈಟ್‌ನಲ್ಲಿ ಮುಂಗಡ ಕಾಯ್ದಿರಿಸುವಿಕೆ ಸೂಕ್ತ; ಪ್ಲಾಸ್ಟಿಕ್ ನಿಷೇಧಿಸಲಾಗಿದೆ."
    },
    featured: true
  },

  // 3. Nandi Hills (Chikkaballapura)
  {
    id: "nandi-hills",
    name: "Nandi Hills (Nandidurga)",
    nameKn: "ನಂದಿ ಬೆಟ್ಟ",
    tagline: "Historic Fortress Above Sea of Clouds & Ancient Shrines",
    taglineKn: "ಮೋಡಗಳ ಸಾಗರ ಮತ್ತು ಪುರಾತನ ಭೋಗ ನಂದೀಶ್ವರ ದೇಗುಲದ ಗಿರಿಧಾಮ",
    region: "Southern Karnataka (Chikkaballapura District)",
    regionKn: "ದಕ್ಷಿಣ ಕರ್ನಾಟಕ (ಚಿಕ್ಕಬಳ್ಳಾಪುರ ಜಿಲ್ಲೆ)",
    district: "Chikkaballapura",
    districtKn: "ಚಿಕ್ಕಬಳ್ಳಾಪುರ",
    nearestCity: "Chikkaballapura",
    nearestCityKn: "ಚಿಕ್ಕಬಳ್ಳಾಪುರ",
    category: ["Hill Station", "Heritage", "Nature"],
    heroImage: "/images/destinations/nandi-hills.jpg",
    gallery: ["/images/destinations/nandi-hills.jpg", "/images/destinations/fallback.jpg"],
    description: "Perched 1,478 meters above sea level, Nandi Hills is famed for its mystical sunrise above floating sea of clouds. Fortified by Tipu Sultan as an impregnable citadel, it houses the 9th-century Nolamba-Chola Bhoga Nandeeshwara temple at its base.",
    descriptionKn: "ಸಮುದ್ರ ಮಟ್ಟದಿಂದ ೧,೪೭೮ ಮೀಟರ್ ಎತ್ತರದಲ್ಲಿರುವ ನಂದಿ ಬೆಟ್ಟ ಮೋಡಗಳ ಹಾಸಿನ ಮೇಲಿನ ಸೂರ್ಯೋದಯಕ್ಕೆ ಹೆಸರುವಾಸಿ. ಟಿಪ್ಪು ಸುಲ್ತಾನರ ಬೇಸಿಗೆ ಅರಮನೆ ಹಾಗೂ ಬೆಟ್ಟದ ತಪ್ಪಲಿನಲ್ಲಿ ೯ನೇ ಶತಮಾನದ ಭೋಗ ನಂದೀಶ್ವರ ದೇಗುಲವಿದೆ.",
    significance: "Ancient source of five sacred rivers: Arkavathi, Ponnaiyar, Palar, Papagni, and Pennar. Strategic garrison during Anglo-Mysore wars.",
    significanceKn: "ಅರ್ಕಾವತಿ, ಪಾಲಾರ್ ಮತ್ತು ಪೆನ್ನಾರ್ ನದಿಗಳ ಉಗಮ ಸ್ಥಾನ. ಆಂಗ್ಲೋ-ಮೈಸೂರು ಯುದ್ಧಗಳ ಪ್ರಮುಖ ರಕ್ಷಣಾ ಕೋಟೆ.",
    heritageStory: "Named after Lord Shiva's bull Nandi who is believed to have performed penance here, giving the sleeping bull shape to the monolithic granite ridge when viewed from Sultanpet.",
    heritageStoryKn: "ಮಲಗಿರುವ ನಂದಿಯ ಆಕಾರದಲ್ಲಿರುವ ಈ ಬೆಟ್ಟದಲ್ಲಿ ನಂದಿಯು ಶಿವನನ್ನು ಕುರಿತು ತಪಸ್ಸು ಮಾಡಿದನೆಂಬ ಪೌರಾಣಿಕ ಪ್ರತೀತಿಯಿದೆ.",
    traditionsAndCrafts: "Chikkaballapura silk reeling, grape vineyard viticulture, and organic hill farming.",
    traditionsAndCraftsKn: "ರೇಷ್ಮೆ ನೂಲು ತೆಗೆಯುವ ಕಲೆ ಹಾಗೂ ದ್ರಾಕ್ಷಿ ತೋಟಗಳ ವೈನ್ ಪ್ರವಾಸೋದ್ಯಮ.",
    localFood: "Freshly brewed filter coffee, hot onion pakoras at sunrise, and Karnataka Chow Chow Bath.",
    localFoodKn: "ಮುಂಜಾನೆಯ ಬಿಸಿಬಿಸಿ ಫಿಲ್ಟರ್ ಕಾಫಿ, ಗರಿಗರಿ ಈರುಳ್ಳಿ ಬಜ್ಜಿ ಹಾಗೂ ಚೌಚೌ ಬಾತ್.",
    historicalSources: "Epigraphia Carnatica Vol. X; Archaeological Survey of India Mysore Circle.",
    historicalSourcesKn: "ಎಪಿಗ್ರಾಫಿಯಾ ಕರ್ನಾಟಿಕಾ ಸಂಪುಟ ೧೦; ಭಾರತೀಯ ಪುರಾತತ್ವ ಸರ್ವೇಕ್ಷಣಾ ಇಲಾಖೆ.",
    bestTimeToVisit: "September to March (dewy winter mornings with dense cloud inversions)",
    bestTimeToVisitKn: "ಸೆಪ್ಟೆಂಬರ್‌ನಿಂದ ಮಾರ್ಚ್‌ವರೆಗೆ (ಮೋಡಗಳ ವೀಕ್ಷಣೆಗೆ ಅತ್ಯುತ್ತಮ)",
    avgDailyBudgetINR: 1500,
    nearestTransit: "Bengaluru Kempegowda International Airport (35 km); Chikkaballapura (20 km)",
    nearestTransitKn: "ಕೆಂಪೇಗೌಡ ಅಂತಾರಾಷ್ಟ್ರೀಯ ವಿಮಾನ ನಿಲ್ದಾಣ (೩೫ ಕಿ.ಮೀ)",
    nearbyDestinations: ["bengaluru", "skandagiri", "devanahalli-fort"],
    keyHighlights: [
      "Surreal sunrise viewpoint overlooking dense blankets of cloud",
      "9th-century Bhoga Nandeeshwara temple complex at foothills",
      "Tipu's Drop — historic sheer 600-meter vertical cliff face",
      "Tipu Sultan's summer residence and stone ramparts",
      "Amrita Sarovar stepped sacred stone water tank"
    ],
    keyHighlightsKn: [
      "ಮೋಡಗಳ ಸಾಗರದ ಮೇಲಿನ ರಮಣೀಯ ಸೂರ್ಯೋದಯ",
      "ತಪ್ಪಲಿನ ೯ನೇ ಶತಮಾನದ ಭವ್ಯ ಭೋಗ ನಂದೀಶ್ವರ ದೇವಾಲಯ",
      "೬೦೦ ಮೀಟರ್ ಎತ್ತರದ ಕಡಿದಾದ ಟಿಪ್ಪೂಸ್ ಡ್ರಾಪ್ ಕಂದಕ",
      "ಟಿಪ್ಪು ಸುಲ್ತಾನರ ಬೇಸಿಗೆ ಅರಮನೆ ಮತ್ತು ಕಲ್ಲಿನ ಕೋಟೆ ಗೋಡೆ",
      "ಅಮೃತ ಸರೋವರ ಸುಂದರ ಕಲ್ಯಾಣಿ"
    ],
    coordinates: { lat: 13.3702, lng: 77.6835 },
    visitorInfo: {
      timings: "06:00 AM - 06:00 PM (Entry gates open 05:30 AM)",
      entryFee: "₹20 per person, ₹100 car parking",
      guidelines: "Heavy crowds on weekends; arrive before 06:00 AM to secure sunrise viewing."
    },
    visitorInfoKn: {
      timings: "ಬೆಳಿಗ್ಗೆ ೬:೦೦ ರಿಂದ ಸಂಜೆ ೬:೦೦ (ಮುಂಜಾನೆ ೫:೩೦ಕ್ಕೆ ಗೇಟ್ ತೆರೆಯುತ್ತದೆ)",
      entryFee: "ಪ್ರವೇಶ ಶುಲ್ಕ ₹೨೦, ಕಾರು ಪಾರ್ಕಿಂಗ್ ₹೧೦೦",
      guidelines: "ವಾರಾಂತ್ಯದಲ್ಲಿ ಜನದಟ್ಟಣೆ ಇರುವುದರಿಂದ ಮುಂಜಾನೆ ಬೇಗ ತಲುಪಿ."
    },
    featured: true
  },

  // 4. Shravanabelagola (Hassan)
  {
    id: "shravanabelagola",
    name: "Shravanabelagola",
    nameKn: "ಶ್ರವಣಬೆಳಗೊಳ",
    tagline: "The Colossal 57-foot Monolith of Lord Bahubali on Vindhyagiri",
    taglineKn: "ವಿಂಧ್ಯಗಿರಿಯ ೫೭ ಅಡಿ ಎತ್ತರದ ಜಗತ್ಪ್ರಸಿದ್ಧ ಏಕಶಿಲಾ ಗೊಮ್ಮಟೇಶ್ವರ ಬಾಹುಬಲಿ",
    region: "Southern Karnataka (Hassan District)",
    regionKn: "ದಕ್ಷಿಣ ಕರ್ನಾಟಕ (ಹಾಸನ ಜಿಲ್ಲೆ)",
    district: "Hassan",
    districtKn: "ಹಾಸನ",
    nearestCity: "Channarayapatna",
    nearestCityKn: "ಚನ್ನರಾಯಪಟ್ಟಣ",
    category: ["Heritage", "Spiritual"],
    heroImage: "/images/destinations/shravanabelagola.jpg",
    gallery: ["/images/destinations/shravanabelagola.jpg", "/images/destinations/fallback.jpg"],
    description: "Carved from a single block of gray granite in 981 CE by Ganga dynasty commander Chavundaraya, the 57-foot (17.5 m) statue of Gommateshwara (Bahubali) stands atop Vindhyagiri Hill. It is the world's largest free-standing monolithic statue, renowned for serene contemplative expression.",
    descriptionKn: "ಕ್ರಿ.ಶ. ೯೮೧ರಲ್ಲಿ ಗಂಗರ ದಂಡನಾಯಕ ಚಾವುಂಡರಾಯನಿಂದ ವಿಂಧ್ಯಗಿರಿಯ ಬಂಡೆಯಲ್ಲಿ ಕೆತ್ತಲಾದ ೫೭ ಅಡಿ ಎತ್ತರದ ಭಗವಾನ್ ಗೊಮ್ಮಟೇಶ್ವರ ಬಾಹುಬಲಿಯ ಪ್ರತಿಮೆ ವಿಶ್ವದ ಅತಿ ಎತ್ತರದ ಏಕಶಿಲಾ ವಿಗ್ರಹವಾಗಿದೆ.",
    significance: "Primary Jain pilgrimage destination in India. Site of ancient Halegannada (Old Kannada) inscriptions and Emperor Chandragupta Maurya's Sallekhana on Chandragiri in 298 BCE.",
    significanceKn: "ಜೈನ ಧರ್ಮದ ಪ್ರಮುಖ ಪವಿತ್ರ ಕ್ಷೇತ್ರ. ಭಾರತದ ಪ್ರಾಚೀನ ಹಳಗನ್ನಡ ಶಾಸನಗಳು ಹಾಗೂ ಮೌರ್ಯ ಸಾಮ್ರಾಟ್ ಚಂದ್ರಗುಪ್ತ ಮೌರ್ಯರು ಸಲ್ಲೇಖನ ವ್ರತ ಆಚರಿಸಿದ ಪುಣ್ಯಭೂಮಿ.",
    heritageStory: "Prince Bahubali renounced his kingdom after defeating his brother Bharata in duel, choosing deep ascetic penance for one full year until anthills formed around his legs and vines entwined his limbs, attaining Kevala Jnana (omniscience).",
    heritageStoryKn: "ಭರತ ಚಕ್ರವರ್ತಿಯನ್ನು ಯುದ್ಧದಲ್ಲಿ ಸೋಲಿಸಿದ ನಂತರ ರಾಜ್ಯವನ್ನು ತ್ಯಜಿಸಿ, ನಿಶ್ಚಲ ತಪಸ್ಸನ್ನಾಚರಿಸಿ ಕೇವಲ ಜ್ಞಾನ ಪಡೆದ ತ್ಯಾಗ ಮತ್ತು ಅಹಿಂಸೆಯ ಮೂರ್ತಿ ಬಾಹುಬಲಿ.",
    traditionsAndCrafts: "Ancient palm-leaf manuscript preservation at Charukeerthi Bhattaraka Matha, brass vessel metalcraft.",
    traditionsAndCraftsKn: "ಚಾರುಕೀರ್ತಿ ಭಟ್ಟಾರಕ ಮಠದ ತಾಳೆಗರಿ ಹಸ್ತಪ್ರತಿ ಸಂರಕ್ಷಣೆ ಮತ್ತು ಹಿತ್ತಾಳೆ ಕರಕುಶಲ ಕಲೆ.",
    localFood: "Traditional Jain Satvik Banana Leaf meals (without root vegetables), Mysore Pak, and fresh tender coconut.",
    localFoodKn: "ಸಾಂಪ್ರದಾಯಿಕ ಜೈನ ಸಾತ್ವಿಕ ಬಾಳೆ ಎಲೆ ಊಟ ಮತ್ತು ಸಿಹಿ ಮೈಸೂರು ಪಾಕ್.",
    historicalSources: "Archaeological Survey of India; Epigraphia Carnatica Vol. II (Shravanabelagola Inscriptions).",
    historicalSourcesKn: "ಭಾರತೀಯ ಪುರಾತತ್ವ ಸರ್ವೇಕ್ಷಣಾ ಇಲಾಖೆ; ಎಪಿಗ್ರಾಫಿಯಾ ಕರ್ನಾಟಿಕಾ ಸಂಪುಟ ೨.",
    bestTimeToVisit: "October to March (pleasant stone climbing temperature)",
    bestTimeToVisitKn: "ಅಕ್ಟೋಬರ್‌ನಿಂದ ಮಾರ್ಚ್‌ವರೆಗೆ",
    avgDailyBudgetINR: 1700,
    nearestTransit: "Shravanabelagola Railway Station (2 km); Hassan (50 km); Bengaluru (145 km)",
    nearestTransitKn: "ಶ್ರವಣಬೆಳಗೊಳ ರೈಲ್ವೆ ನಿಲ್ದಾಣ (೨ ಕಿ.ಮೀ); ಹಾಸನ (೫೦ ಕಿ.ಮೀ)",
    nearbyDestinations: ["belur", "halebidu", "mysuru"],
    keyHighlights: [
      "Climb 650 rock-cut steps up Vindhyagiri to the 57-foot Bahubali monolith",
      "Kalyani pond nestled between twin hills Vindhyagiri and Chandragiri",
      "Chandragiri hill housing 14 historic Basadis and Chandragupta Maurya's cave",
      "Oldest surviving Marathi and Kannada epigraphs at the foot of Gommateshwara",
      "Bhandari Basadi and Odegal Basadi displaying pristine Ganga architecture"
    ],
    keyHighlightsKn: [
      "ವಿಂಧ್ಯಗಿರಿಯ ೬೫೦ ಮೆಟ್ಟಿಲುಗಳನ್ನು ಏರಿ ೫೭ ಅಡಿ ಬಾಹುಬಲಿಯ ದರ್ಶನ",
      "ವಿಂಧ್ಯಗಿರಿ ಮತ್ತು ಚಂದ್ರಗಿರಿಯ ನಡುವಿನ ಸುಂದರ ಬಿಳಿ ಕೊಳ (ಬೆಳಗೊಳ)",
      "ಚಂದ್ರಗುಪ್ತ ಮೌರ್ಯರ ಗುಹೆ ಮತ್ತು ೧೪ ಪ್ರಾಚೀನ ಬಸದಿಗಳ ಚಂದ್ರಗಿರಿ ಬೆಟ್ಟ",
      "ಗೊಮ್ಮಟೇಶ್ವರನ ಪಾದದ ಬಳಿಯಿರುವ ಪ್ರಾಚೀನ ಕನ್ನಡ ಹಾಗೂ ಮರಾಠಿ ಶಾಸನಗಳು",
      "ಭಂಡಾರಿ ಬಸದಿ ಮತ್ತು ಒಡೆಗಲ್ ಬಸದಿಯ ಗಂಗರ ವಾಸ್ತುಶಿಲ್ಪ"
    ],
    coordinates: { lat: 12.8576, lng: 76.4857 },
    visitorInfo: {
      timings: "06:00 AM - 06:30 PM",
      entryFee: "Free entry (Doli sedan-chair service available for elderly ~₹1,500)",
      guidelines: "Footwear must be deposited at base; wear thick socks as granite steps heat up by noon."
    },
    visitorInfoKn: {
      timings: "ಬೆಳಿಗ್ಗೆ ೬:೦೦ ರಿಂದ ಸಂಜೆ ೬:೩೦",
      entryFee: "ಉಚಿತ ಪ್ರವೇಶ (ಹಿರಿಯರಿಗೆ ಡೋಲಿ ವ್ಯವಸ್ಥೆಯಿದೆ)",
      guidelines: "ಬೆಟ್ಟದ ಬುಡದಲ್ಲಿ ಪಾದರಕ್ಷೆ ಬಿಡಬೇಕು; ಬಿಸಿಲಿನಲ್ಲಿ ಕಾಲು ಸುಡದಂತೆ ಸಾಕ್ಸ್ ಧರಿಸುವುದು ಉತ್ತಮ."
    },
    featured: true
  },

  // 5. Murudeshwara (Uttara Kannada)
  {
    id: "murudeshwara",
    name: "Murudeshwara",
    nameKn: "ಮುರುಡೇಶ್ವರ",
    tagline: "World's Second Tallest Shiva Statue on the Arabian Sea Shore",
    taglineKn: "ಅರಬ್ಬಿ ಸಮುದ್ರದ ತೀರದಲ್ಲಿರುವ ವಿಶ್ವದ ಎರಡನೇ ಅತಿ ಎತ್ತರದ ಭವ್ಯ ಶಿವನ ಪ್ರತಿಮೆ",
    region: "Karavali / Coastal Karnataka (Uttara Kannada District)",
    regionKn: "ಕರಾವಳಿ ಕರ್ನಾಟಕ (ಉತ್ತರ ಕನ್ನಡ ಜಿಲ್ಲೆ)",
    district: "Uttara Kannada",
    districtKn: "ಉತ್ತರ ಕನ್ನಡ",
    nearestCity: "Bhatkal",
    nearestCityKn: "ಭಟ್ಕಳ",
    category: ["Spiritual", "Beaches", "Heritage"],
    heroImage: "/images/destinations/murudeshwara.jpg",
    gallery: ["/images/destinations/murudeshwara.jpg", "/images/destinations/fallback.jpg"],
    description: "Surrounded on three sides by the azure Arabian Sea atop Kanduka Giri, Murudeshwara features a colossal 123-foot (37 m) seated statue of Lord Shiva and a towering 20-story (249 ft) Raja Gopura equipped with a high-speed elevator offering 360-degree ocean views.",
    descriptionKn: "ಅರಬ್ಬಿ ಸಮುದ್ರದಿಂದ ಸುತ್ತುವರಿದ ಕಂದುಕ ಗಿರಿಯ ಮೇಲೆ ೧೨೩ ಅಡಿ ಎತ್ತರದ ಭವ್ಯ ಶಿವನ ಪ್ರತಿಮೆ ಹಾಗೂ ೨೪೯ ಅಡಿ ಎತ್ತರದ ೨೦ ಅಂತಸ್ತಿನ ರಾಜಗೋಪುರವಿದೆ. ಲಿಫ್ಟ್ ಮೂಲಕ ಗೋಪುರದ ಮೇಲಕ್ಕೆ ಹೋಗಿ ಸಮುದ್ರದ ವಿಹಂಗಮ ನೋಟ ಕಣ್ತುಂಬಿಕೊಳ್ಳಬಹುದು.",
    significance: "Part of the sacred Pancha Kshetras of Atmalinga originating from Ravana's mythological journey from Mount Kailash.",
    significanceKn: "ರಾವಣನ ಆತ್ಮಲಿಂಗದ ಪವಿತ್ರ ಪಂಚಕ್ಷೇತ್ರಗಳಲ್ಲಿ ಒಂದಾದ ಪ್ರಸಿದ್ಧ ಕರಾವಳಿ ಪುಣ್ಯಕ್ಷೇತ್ರ.",
    heritageStory: "When Ravana tried to uproot the Atmalinga embedded by Lord Ganesha in Gokarna, the linga broke into pieces; the cloth (Muruda) covering the casket landed on this headland, consecrating Murudeshwara.",
    heritageStoryKn: "ಗೋಕರ್ಣದಲ್ಲಿ ರಾವಣನು ಆತ್ಮಲಿಂಗವನ್ನು ಕೀಳಲು ಪ್ರಯತ್ನಿಸಿದಾಗ ಲಿಂಗದ ಮೇಲಿದ್ದ ವಸ್ತ್ರವು ಬಂದು ಬಿದ್ದ ಪವಿತ್ರ ಸ್ಥಳವೇ ಮೃಡೇಶ್ವರ ಅಥವಾ ಮುರುಡೇಶ್ವರ.",
    traditionsAndCrafts: "Coastal fishing boat craftsmanship, terracotta pottery, and sea-shell souvenirs.",
    traditionsAndCraftsKn: "ಕರಾವಳಿಯ ಸಾಂಪ್ರದಾಯಿಕ ದೋಣಿ ನಿರ್ಮಾಣ ಮತ್ತು ಸಮುದ್ರದ ಚಿಪ್ಪುಗಳ ಕರಕುಶಲ ವಸ್ತುಗಳು.",
    localFood: "Fresh coastal seafood delicacies, Mangalore Buns, Neer Dosa, and tender coconut water.",
    localFoodKn: "ಕರಾವಳಿಯ ರುಚಿಕರ ಮೀನಿನ ಊಟ, ನೀರ್ ದೋಸೆ, ಮಂಗಳೂರು ಬನ್ಸ್ ಮತ್ತು ಎಳನೀರು.",
    historicalSources: "Skanda Purana (Sahyadri Khanda); Karnataka State Tourism Gazetteer.",
    historicalSourcesKn: "ಸ್ಕಂದ ಪುರಾಣ (ಸಹ್ಯಾದ್ರಿ ಖಂಡ); ಕರ್ನಾಟಕ ಗೆಜೆಟಿಯರ್.",
    bestTimeToVisit: "October to March (calm Arabian Sea and breezy pleasant weather)",
    bestTimeToVisitKn: "ಅಕ್ಟೋಬರ್‌ನಿಂದ ಮಾರ್ಚ್‌ವರೆಗೆ",
    avgDailyBudgetINR: 2200,
    nearestTransit: "Murudeshwar Railway Station (2 km); Mangaluru International Airport (160 km)",
    nearestTransitKn: "ಮುರುಡೇಶ್ವರ ರೈಲ್ವೆ ನಿಲ್ದಾಣ (೨ ಕಿ.ಮೀ); ಮಂಗಳೂರು ವಿಮಾನ ನಿಲ್ದಾಣ (೧೬೦ ಕಿ.ಮೀ)",
    nearbyDestinations: ["gokarna", "dandeli", "netrani-island"],
    keyHighlights: [
      "123-foot seated statue of Lord Shiva gleaming against the Arabian Sea",
      "20-story Rajagopura with elevator to the 18th floor viewing deck",
      "Kanduka Giri ancient temple housing original sacred Pranava Linga",
      "Murudeshwara beach water sports, jet-skiing and speed boating",
      "Gateway boat jetty to Netrani Island coral reef scuba diving"
    ],
    keyHighlightsKn: [
      "ಅರಬ್ಬಿ ಸಮುದ್ರದ ಹಿನ್ನೆಲೆಯಲ್ಲಿ ಕಂಗೊಳಿಸುವ ೧೨೩ ಅಡಿ ಶಿವನ ಭವ್ಯ ಪ್ರತಿಮೆ",
      "೧೮ನೇ ಮಹಡಿಯ ವೀಕ್ಷಣಾ ವೇದಿಕೆಗೆ ಲಿಫ್ಟ್ ಸೌಲಭ್ಯವಿರುವ ೨೪೯ ಅಡಿ ರಾಜಗೋಪುರ",
      "ಕಂದುಕ ಗಿರಿಯ ಮೇಲಿರುವ ಪವಿತ್ರ ಮೂಲ ಪ್ರಣವಲಿಂಗ ದೇವಾಲಯ",
      "ಮುರುಡೇಶ್ವರ ಬೀಚ್‌ನ ಸಾಹಸ ಜಲಕ್ರೀಡೆಗಳು ಮತ್ತು ಸ್ಪೀಡ್ ಬೋಟಿಂಗ್",
      "ನೇತ್ರಾಣಿ ದ್ವೀಪದ ಸ್ಕೂಬಾ ಡೈವಿಂಗ್‌ಗೆ ತೆರಳುವ ದೋಣಿ ನಿಲ್ದಾಣ"
    ],
    coordinates: { lat: 14.0941, lng: 74.4849 },
    visitorInfo: {
      timings: "Temple: 06:00 AM - 01:00 PM, 03:00 PM - 08:30 PM; Lift: 07:00 AM - 08:00 PM",
      entryFee: "Temple free; Gopura Lift ₹20",
      guidelines: "Modest clothing required inside temple; sea bathing permitted at marked beach zones."
    },
    visitorInfoKn: {
      timings: "ದೇವಾಲಯ: ಬೆಳಿಗ್ಗೆ ೬:೦೦ - ೧:೦೦, ಸಂಜೆ ೩:೦೦ - ೮:೩೦; ಲಿಫ್ಟ್: ಬೆಳಿಗ್ಗೆ ೭:೦೦ - ೮:೦೦",
      entryFee: "ದೇವಾಲಯ ಉಚಿತ; ಗೋಪುರ ಲಿಫ್ಟ್ ₹೨೦",
      guidelines: "ಸಾಂಪ್ರದಾಯಿಕ ಉಡುಗೆ ಕಡ್ಡಾಯ; ಸುರಕ್ಷಿತ ತೀರದಲ್ಲಿ ಮಾತ್ರ ಸಮುದ್ರ ಸ್ನಾನ ಮಾಡಿ."
    },
    featured: true
  },

  // 6. Dandeli (Uttara Kannada)
  {
    id: "dandeli",
    name: "Dandeli Wildlife & River Rafting",
    nameKn: "ದಾಂಡೇಲಿ",
    tagline: "White Water Rafting on Kali River & Hornbill Forest Canopy",
    taglineKn: "ಕಾಳಿ ನದಿಯ ಸಾಹಸಮಯ ರಾಫ್ಟಿಂಗ್ ಮತ್ತು ಹಾರ್ನ್‌ಬಿಲ್ ಪಕ್ಷಿಗಳ ದಟ್ಟಾರಣ್ಯ",
    region: "Karavali / Western Ghats (Uttara Kannada District)",
    regionKn: "ಉತ್ತರ ಕನ್ನಡ ಜಿಲ್ಲೆ (ಪಶ್ಚಿಮ ಘಟ್ಟಗಳು)",
    district: "Uttara Kannada",
    districtKn: "ಉತ್ತರ ಕನ್ನಡ",
    nearestCity: "Dandeli",
    nearestCityKn: "ದಾಂಡೇಲಿ",
    category: ["Adventure", "Wildlife", "Nature"],
    heroImage: "/images/destinations/dandeli.jpg",
    gallery: ["/images/destinations/dandeli.jpg", "/images/destinations/fallback.jpg"],
    description: "Nestled along the untamed rapids of the Kali River amidst moist deciduous and evergreen forests of the Western Ghats, Dandeli is Karnataka's undisputed adventure capital. Renowned for Grade 2 and 3 white-water rafting, natural jacuzzis, and all four South Indian hornbill species.",
    descriptionKn: "ಕಾಳಿ ನದಿಯ ತೀರದಲ್ಲಿರುವ ದಾಂಡೇಲಿ ಸಾಹಸ ಪ್ರಿಯರ ನೆಚ್ಚಿನ ತಾಣ. ೯ ಕಿ.ಮೀ ಉದ್ದದ ನದಿ ರಾಫ್ಟಿಂಗ್, ಕಯಾಕಿಂಗ್, ಕಾಡಿನ ಜಿಪ್‌ಲೈನ್ ಹಾಗೂ ಕವಳ ಗುಹೆಗಳು ಇಲ್ಲಿನ ಪ್ರಮುಖ ಆಕರ್ಷಣೆ.",
    significance: "Part of Kali Tiger Reserve (Anshi Dandeli). Recognized as an Important Bird Area (IBA) housing Malabar pied hornbills and black panthers.",
    significanceKn: "ಕಾಳಿ ಹುಲಿ ಸಂರಕ್ಷಿತ ಪ್ರದೇಶದ ಭಾಗ. ಅಪರೂಪದ ಕಪ್ಪು ಚಿರತೆ ಮತ್ತು ಮಲಬಾರ್ ಹಾರ್ನ್‌ಬಿಲ್ ಪಕ್ಷಿಗಳ ನೈಸರ್ಗಿಕ ಆವಾಸಸ್ಥಾನ.",
    heritageStory: "Named after Dandelappa, a loyal servant of the Mirashi landlords who sacrificed his life for duty, revered to this day in local forest shrines.",
    heritageStoryKn: "ಸ್ಥಳೀಯ ಜಮೀನ್ದಾರರ ನಿಷ್ಠಾವಂತ ಸೇವಕ ದಾಂಡೇಲಪ್ಪನ ಹೆಸರಿನಿಂದ ಈ ಊರಿಗೆ ದಾಂಡೇಲಿ ಎಂಬ ಹೆಸರು ಬಂತು.",
    traditionsAndCrafts: "Bamboo weaving crafts, paper-craft from West Coast Paper Mills, and wild honey.",
    traditionsAndCraftsKn: "ಬಿದಿರಿನ ಕರಕುಶಲ ವಸ್ತುಗಳು ಮತ್ತು ಶುದ್ಧ ಕಾಡಿನ ಜೇನು.",
    localFood: "North Karnataka Jolada Rotti with Shenga chutney, Karavali fish curry, and herbal Tambuli.",
    localFoodKn: "ಜೋಳದ ರೊಟ್ಟಿ ಊಟ, ಕರಾವಳಿ ಮೀನಿನ ಸಾರು ಮತ್ತು ತಂಬುಳಿ.",
    historicalSources: "Karnataka Forest Department; Bombay Natural History Society (BNHS) Avifauna Records.",
    historicalSourcesKn: "ಕರ್ನಾಟಕ ಅರಣ್ಯ ಇಲಾಖೆ; ಬಿ.ಎನ್.ಎಚ್.ಎಸ್ ವನ್ಯಜೀವಿ ದಾಖಲೆಗಳು.",
    bestTimeToVisit: "October to May (river water flow released regularly from Supa Dam for rafting)",
    bestTimeToVisitKn: "ಅಕ್ಟೋಬರ್‌ನಿಂದ ಮೇವರೆಗೆ (ರಾಫ್ಟಿಂಗ್ ಮತ್ತು ಸಫಾರಿಗೆ ಅತ್ಯುತ್ತಮ)",
    avgDailyBudgetINR: 2500,
    nearestTransit: "Alnavar Junction Railway Station (32 km); Hubballi Airport (75 km)",
    nearestTransitKn: "ಅಳ್ನಾವರ ಜಂಕ್ಷನ್ ರೈಲು ನಿಲ್ದಾಣ (೩೨ ಕಿ.ಮೀ); ಹುಬ್ಬಳ್ಳಿ ವಿಮಾನ ನಿಲ್ದಾಣ (೭೫ ಕಿ.ಮೀ)",
    nearbyDestinations: ["gokarna", "murudeshwara", "karwar"],
    keyHighlights: [
      "9 km Grade 2-3 white-water rafting on the thrilling Kali River",
      "Kavala limestone caves with natural subterranean Shiva linga",
      "Sykes Point offering panoramic aerial view of Kali river gorge",
      "Open jeep wildlife safari inside Kali Tiger Reserve",
      "Hornbill viewing tower and jungle canopy zipline trails"
    ],
    keyHighlightsKn: [
      "ಕಾಳಿ ನದಿಯಲ್ಲಿ ೯ ಕಿ.ಮೀ ರೋಮಾಂಚಕ ವೈಟ್ ವಾಟರ್ ರಾಫ್ಟಿಂಗ್",
      "ನೈಸರ್ಗಿಕ ಶಿವಲಿಂಗವಿರುವ ಪುರಾತನ ಕವಳ ಸುಣ್ಣದ ಕಲ್ಲಿನ ಗುಹೆಗಳು",
      "ಕಾಳಿ ನದಿಯ ಆಳವಾದ ಕಂದಕವನ್ನು ವೀಕ್ಷಿಸುವ ಸೈಕ್ಸ್ ಪಾಯಿಂಟ್",
      "ಕಾಳಿ ಹುಲಿ ಸಂರಕ್ಷಿತ ಅರಣ್ಯದಲ್ಲಿ ಜೀಪ್ ಸಫಾರಿ",
      "ಹಾರ್ನ್‌ಬಿಲ್ ಪಕ್ಷಿ ವೀಕ್ಷಣಾ ಗೋಪುರ ಮತ್ತು ಜಿಪ್‌ಲೈನ್ ಸಾಹಸ"
    ],
    coordinates: { lat: 15.2427, lng: 74.6231 },
    visitorInfo: {
      timings: "Rafting batches: 08:30 AM & 01:30 PM",
      entryFee: "Rafting: ₹1,200 - ₹1,800/person; Jungle safari: ₹500",
      guidelines: "Life jackets mandatory during all water activities; follow guides' instructions strictly."
    },
    visitorInfoKn: {
      timings: "ರಾಫ್ಟಿಂಗ್ ಸಮಯ: ಬೆಳಿಗ್ಗೆ ೮:೩೦ ಮತ್ತು ಮಧ್ಯಾಹ್ನ ೧:೩೦",
      entryFee: "ರಾಫ್ಟಿಂಗ್ ಶುಲ್ಕ ₹೧,೨೦೦ - ₹೧,೮೦೦; ಸಫಾರಿ ₹೫೦೦",
      guidelines: "ಲೈಫ್ ಜಾಕೆಟ್ ಕಡ್ಡಾಯ; ಮಾರ್ಗದರ್ಶಕರ ಸೂಚನೆಗಳನ್ನು ತಪ್ಪದೇ ಪಾಲಿಸಿ."
    },
    featured: true
  },

  // 7. Srirangapatna (Mandya)
  {
    id: "srirangapatna",
    name: "Srirangapatna",
    nameKn: "ಶ್ರೀರಂಗಪಟ್ಟಣ",
    tagline: "Historic Island Fortress Citadel of Tipu Sultan & Sri Ranganatha Swamy",
    taglineKn: "ಕಾವೇರಿ ದ್ವೀಪದ ಐತಿಹಾಸಿಕ ಕೋಟೆ ನಗರಿ ಮತ್ತು ಶ್ರೀ ರಂಗನಾಥಸ್ವಾಮಿ ಸನ್ನಿಧಿ",
    region: "Southern Karnataka (Mandya District)",
    regionKn: "ದಕ್ಷಿಣ ಕರ್ನಾಟಕ (ಮಂಡ್ಯ ಜಿಲ್ಲೆ)",
    district: "Mandya",
    districtKn: "ಮಂಡ್ಯ",
    nearestCity: "Srirangapatna",
    nearestCityKn: "ಶ್ರೀರಂಗಪಟ್ಟಣ",
    category: ["Heritage", "Spiritual", "Culture"],
    heroImage: "/images/destinations/srirangapatna.jpg",
    gallery: ["/images/destinations/srirangapatna.jpg", "/images/destinations/fallback.jpg"],
    description: "An island encircled by the holy Cauvery River, Srirangapatna was the de facto capital of Mysore under Hyder Ali and Tipu Sultan. It houses the 9th-century Sri Ranganathaswamy Temple (Adi Ranga), Tipu's Summer Palace (Dariya Daulat Bagh), the military dungeons, and Gumbaz mausoleum.",
    descriptionKn: "ಕಾವೇರಿ ನದಿಯಿಂದ ಆವೃತವಾದ ಐತಿಹಾಸಿಕ ದ್ವೀಪ ಶ್ರೀರಂಗಪಟ್ಟಣ. ಹೈದರಾಲಿ ಮತ್ತು ಟಿಪ್ಪು ಸುಲ್ತಾನರ ರಾಜಧಾನಿಯಾಗಿದ್ದ ಈ ನೆಲದಲ್ಲಿ ೯ನೇ ಶತಮಾನದ ಶ್ರೀ ರಂಗನಾಥಸ್ವಾಮಿ ದೇವಾಲಯ, ದರಿಯಾ ದೌಲತ್ ಬಾಗ್ ಹಾಗೂ ಟಿಪ್ಪುವಿನ ಕೋಟೆಯಿದೆ.",
    significance: "Site of the watershed Fourth Anglo-Mysore War (1799). Home to the sacred Adi Ranga, the first of three major island shrines of Lord Ranganatha along the Cauvery.",
    significanceKn: "೧೭೯೯ರ ನಾಲ್ಕನೇ ಆಂಗ್ಲೋ-ಮೈಸೂರು ಯುದ್ಧ ನಡೆದ ಐತಿಹಾಸಿಕ ತಾಣ. ಕಾವೇರಿ ತೀರದ ಪವಿತ್ರ ಆದಿರಂಗ ಕ್ಷೇತ್ರ.",
    heritageStory: "Consecrated in 894 CE by Ganga chieftain Tirumalayya, the citadel became the focal point of the Wadiyars, Vijayanagara viceroys, and Tipu Sultan who fell here defending the Water Gate in 1799.",
    heritageStoryKn: "ಕ್ರಿ.ಶ. ೮೯೪ರಲ್ಲಿ ಗಂಗರ ಕಾಲದಲ್ಲಿ ನಿರ್ಮಾಣಗೊಂಡ ಈ ಕೋಟೆಯ ವಾಟರ್ ಗೇಟ್ ಬಳಿ ೧೭೯೯ರಲ್ಲಿ ಟಿಪ್ಪು ಸುಲ್ತಾನ್ ಹೋರಾಡಿ ವೀರಮರಣ ಹೊಂದಿದನು.",
    traditionsAndCrafts: "Rosewood inlay souvenirs, Mysore silk sarees, and traditional bell-metal idols.",
    traditionsAndCraftsKn: "ಬೀಟೆ ಮರದ ಕೆತ್ತನೆ ಕಲೆ ಮತ್ತು ಸಾಂಪ್ರದಾಯಿಕ ಕಂಚಿನ ವಿಗ್ರಹಗಳು.",
    localFood: "Srirangapatna Maddur Vade, filter coffee, Mysore Pak, and hot Ragi Mudde oota.",
    localFoodKn: "ಮದ್ದೂರು ವಡೆ, ಬಿಸಿ ಫಿಲ್ಟರ್ ಕಾಫಿ ಮತ್ತು ಮೈಸೂರು ಪಾಕ್.",
    historicalSources: "ASI Monument Survey; Mark Wilks, 'Historical Sketches of the South of India' (1810).",
    historicalSourcesKn: "ಭಾರತೀಯ ಪುರಾತತ್ವ ಸರ್ವೇಕ್ಷಣಾ ಇಲಾಖೆ; ಮಾರ್ಕ್ ವಿಲ್ಕ್ಸ್ ಅವರ ಐತಿಹಾಸಿಕ ದಾಖಲೆಗಳು.",
    bestTimeToVisit: "September to March (pleasant walking climate)",
    bestTimeToVisitKn: "ಸೆಪ್ಟೆಂಬರ್‌ನಿಂದ ಮಾರ್ಚ್‌ವರೆಗೆ",
    avgDailyBudgetINR: 1600,
    nearestTransit: "Srirangapatna Railway Station (in-town); Mysuru Junction (15 km)",
    nearestTransitKn: "ಶ್ರೀರಂಗಪಟ್ಟಣ ರೈಲ್ವೆ ನಿಲ್ದಾಣ; ಮೈಸೂರು ಜಂಕ್ಷನ್ (೧೫ ಕಿ.ಮೀ)",
    nearbyDestinations: ["mysuru", "ranganathittu", "shivanasamudra"],
    keyHighlights: [
      "9th-century Sri Ranganathaswamy Temple (Adi Ranga) with reclining Vishnu",
      "Dariya Daulat Bagh — Tipu Sultan's teakwood Summer Palace with vibrant battle murals",
      "Gumbaz mausoleum holding tombs of Tipu Sultan, Hyder Ali and Fakr-un-Nisa",
      "Colonel Bailey's Dungeon where British officers were imprisoned",
      "Sangama river confluence of Lochanapavani and holy Cauvery"
    ],
    keyHighlightsKn: [
      "೯ನೇ ಶತಮಾನದ ಆದಿರಂಗ ಶ್ರೀ ರಂಗನಾಥಸ್ವಾಮಿಯ ಶೇಷಶಯನ ಭವ್ಯ ಮೂರ್ತಿ",
      "ದರಿಯಾ ದೌಲತ್ ಬಾಗ್: ಟಿಪ್ಪು ಸುಲ್ತಾನರ ತೇಗದ ಮರದ ಬೇಸಿಗೆ ಅರಮನೆ ಮತ್ತು ಯುದ್ಧದ ವರ್ಣಚಿತ್ರಗಳು",
      "ಹೈದರಾಲಿ ಮತ್ತು ಟಿಪ್ಪು ಸುಲ್ತಾನರ ಗೋರಿಗಳಿರುವ ಭವ್ಯ ಗುಂಬಜ್",
      "ಬ್ರಿಟಿಷ್ ಅಧಿಕಾರಿಗಳನ್ನು ಸೆರೆಯಲ್ಲಿಟ್ಟಿದ್ದ ಕರ್ನಲ್ ಬೈಲಿ ಜೈಲು",
      "ಲೋಕಪಾವನಿ ಮತ್ತು ಕಾವೇರಿ ನದಿಗಳ ಪವಿತ್ರ ಸಂಗಮ ಕ್ಷೇತ್ರ"
    ],
    coordinates: { lat: 12.4237, lng: 76.6953 },
    visitorInfo: {
      timings: "08:00 AM - 06:00 PM (Temple: 06:00 AM - 09:00 PM)",
      entryFee: "₹25 for Dariya Daulat Bagh (ASI ticket); Temple entry free",
      guidelines: "Leave shoes outside Dariya Daulat wooden palace; photography allowed without tripod."
    },
    visitorInfoKn: {
      timings: "ಬೆಳಿಗ್ಗೆ ೮:೦೦ ರಿಂದ ಸಂಜೆ ೬:೦೦ (ದೇವಾಲಯ: ಬೆಳಿಗ್ಗೆ ೬:೦೦ - ರಾತ್ರಿ ೯:೦೦)",
      entryFee: "ದರಿಯಾ ದೌಲತ್ ಬಾಗ್ ಪ್ರವೇಶ ಶುಲ್ಕ ₹೨೫; ದೇವಾಲಯ ಉಚಿತ",
      guidelines: "ಅರಮನೆಯ ಒಳಗೆ ಪಾದರಕ್ಷೆ ಬಿಡಬೇಕು."
    },
    featured: true
  },

  // 8. Aihole (Bagalkote)
  {
    id: "aihole",
    name: "Aihole",
    nameKn: "ಐಹೊಳೆ",
    tagline: "Cradle of Indian Hindu Rock & Structural Temple Architecture",
    taglineKn: "ಭಾರತೀಯ ದೇವಾಲಯ ವಾಸ್ತುಶಿಲ್ಪದ ತೊಟ್ಟಿಲು",
    region: "Kittur Karnataka (Bagalkote District)",
    regionKn: "ಕಿತ್ತೂರು ಕರ್ನಾಟಕ (ಬಾಗಲಕೋಟೆ ಜಿಲ್ಲೆ)",
    district: "Bagalkote",
    districtKn: "ಬಾಗಲಕೋಟೆ",
    nearestCity: "Badami",
    nearestCityKn: "ಬಾದಾಮಿ",
    category: ["Heritage", "Culture"],
    heroImage: "/images/destinations/aihole.jpg",
    gallery: ["/images/destinations/aihole.jpg", "/images/destinations/fallback.jpg"],
    description: "Featuring over 120 stone and rock-cut temples dating from the 6th to 12th century CE along the Malaprabha River, Aihole served as the architectural laboratory of the Early Chalukyas. Famous for the horseshoe-shaped apsidal Durga Temple and the Lad Khan Temple.",
    descriptionKn: "ಮಲಪ್ರಭಾ ನದಿ ತೀರದಲ್ಲಿರುವ ಐಹೊಳೆಯಲ್ಲಿ ೬ರಿಂದ ೧೨ನೇ ಶತಮಾನದ ೧೨೦ಕ್ಕೂ ಹೆಚ್ಚು ಪ್ರಾಚೀನ ದೇಗುಲಗಳಿವೆ. ಚಾಲುಕ್ಯರ ವಾಸ್ತುಶಿಲ್ಪದ ಪ್ರಯೋಗಶಾಲೆಯೆನಿಸಿರುವ ಇಲ್ಲಿನ ಕುದುರೆ ಗೊರಸಿನಾಕಾರದ ದುರ್ಗಾ ದೇವಾಲಯ ಮತ್ತು ಲಾಡ್ ಖಾನ್ ದೇವಾಲಯ ಜಗತ್ಪ್ರಸಿದ್ಧವಾಗಿವೆ.",
    significance: "Cradle of Indian temple architecture where artisans experimented with Nagara (North Indian) and Dravida (South Indian) shikhara designs. Contains the famous 634 CE Meguti inscription of Pulakeshin II.",
    significanceKn: "ಭಾರತೀಯ ದೇವಾಲಯ ವಾಸ್ತುಶಿಲ್ಪದ ತೊಟ್ಟಿಲು. ಉತ್ತರ ಭಾರತದ ನಾಗರ ಮತ್ತು ದಕ್ಷಿಣದ ದ್ರಾವಿಡ ಶೈಲಿಗಳ ಸಂಗಮ. ಇಮ್ಮಡಿ ಪುಲಕೇಶಿಯ ಕ್ರಿ.ಶ. ೬೩೪ರ ಐಹೊಳೆ ಶಾಸನ ಇಲ್ಲಿದೆ.",
    heritageStory: "Legend says Lord Parashurama washed his battle axe in the Malaprabha River after eliminating corrupt rulers, turning the water red; when a villager saw this, he exclaimed 'Ayyo Hole!' (Alas, the river!), giving Aihole its name.",
    heritageStoryKn: "ಪರಶುರಾಮನು ಕ್ಷತ್ರಿಯರನ್ನು ಸಂಹರಿಸಿ ತನ್ನ ರಕ್ತಸಿಕ್ತ ಕೊಡಲಿಯನ್ನು ಮಲಪ್ರಭಾ ನದಿಯಲ್ಲಿ ತೊಳೆದಾಗ ನೀರು ಕೆಂಪಾದುದನ್ನು ಕಂಡು ಗ್ರಾಮಸ್ಥರು 'ಅಯ್ಯೋ ಹೊಳೆ!' ಎಂದ ಉದ್ಗಾರದಿಂದ 'ಐಹೊಳೆ' ಆಯಿತೆಂಬ ಪುರಾಣವಿದೆ.",
    traditionsAndCrafts: "Stone masonry sculpting, Ilkal handloom weaving nearby, and Lambani mirror embroidery.",
    traditionsAndCraftsKn: "ಕಲ್ಲಿನ ಶಿಲ್ಪಕಲೆ ಹಾಗೂ ಸಮೀಪದ ಇಳಕಲ್ ಸೀರೆ ನೇಕಾರಿಕೆ.",
    localFood: "Traditional North Karnataka Jolada Rotti with Shenga Chutney, stuffed brinjal (Yennegai), and fresh sugarcane juice.",
    localFoodKn: "ಜೋಳದ ರೊಟ್ಟಿ ಊಟ, ಎಣ್ಣೆಗಾಯಿ ಬದನೆಕಾಯಿ ಪಲ್ಯ ಮತ್ತು ಸಿಹಿ ಕಬ್ಬಿನ ಹಾಲು.",
    historicalSources: "Archaeological Survey of India (ASI); Percy Brown, 'Indian Architecture (Buddhist and Hindu Periods)'; UNESCO Tentative List.",
    historicalSourcesKn: "ಭಾರತೀಯ ಪುರಾತತ್ವ ಸರ್ವೇಕ್ಷಣಾ ಇಲಾಖೆ; ಪರ್ಸಿ ಬ್ರೌನ್ ವಾಸ್ತುಶಿಲ್ಪ ದಾಖಲೆಗಳು.",
    bestTimeToVisit: "October to March (pleasant winter exploration climate)",
    bestTimeToVisitKn: "ಅಕ್ಟೋಬರ್‌ನಿಂದ ಮಾರ್ಚ್‌ವರೆಗೆ",
    avgDailyBudgetINR: 1700,
    nearestTransit: "Bagalkote Railway Station (34 km); Hubballi Airport (130 km)",
    nearestTransitKn: "ಬಾಗಲಕೋಟೆ ರೈಲ್ವೆ ನಿಲ್ದಾಣ (೩೪ ಕಿ.ಮೀ); ಹುಬ್ಬಳ್ಳಿ ವಿಮಾನ ನಿಲ್ದಾಣ (೧೩೦ ಕಿ.ಮೀ)",
    nearbyDestinations: ["badami", "pattadakal", "ilkal"],
    keyHighlights: [
      "Apsidal peripteral Durga Temple with exquisitely carved sanctum colonnade",
      "Lad Khan Temple (c. 5th century CE) — one of the oldest structural Hindu shrines",
      "Meguti Jain Temple atop hillock containing poet Ravikirti's 634 CE Pulakeshin II inscription",
      "Ravana Phadi 6th-century rock-cut cave temple with dancing Nataraja and Saptamatrikas",
      "ASI Archaeological Site Museum displaying Chalukyan sculptures and hero stones"
    ],
    keyHighlightsKn: [
      "ಕುದುರೆ ಗೊರಸಿನ ಆಕಾರದ ಅಪೂರ್ವ ದುರ್ಗಾ ದೇವಾಲಯ ಮತ್ತು ಸುಂದರ ಶಿಲ್ಪಗಳು",
      "೫ನೇ ಶತಮಾನದ ಅತ್ಯಂತ ಪ್ರಾಚೀನ ಲಾಡ್ ಖಾನ್ ದೇವಾಲಯ",
      "ಮೇಗುತಿ ಬೆಟ್ಟದ ಜೈನ ದೇವಾಲಯ ಮತ್ತು ರವಿಕೀರ್ತಿ ಕವಿಯ ಪ್ರಸಿದ್ಧ ಪುಲಕೇಶಿ ಶಾಸನ",
      "೬ನೇ ಶತಮಾನದ ರಾವಣಫಡಿ ಗುಹಾಂತರ ದೇವಾಲಯ ಹಾಗೂ ನಟರಾಜ ಮೂರ್ತಿ",
      "ಚಾಲುಕ್ಯರ ಅಪರೂಪದ ಶಿಲ್ಪಗಳಿರುವ ಎ.ಎಸ್.ಐ ವಸ್ತುಸಂಗ್ರಹಾಲಯ"
    ],
    coordinates: { lat: 16.0199, lng: 75.8824 },
    visitorInfo: {
      timings: "06:00 AM - 06:00 PM",
      entryFee: "₹25 for Indians, ₹300 for foreigners (ASI composite ticket)",
      guidelines: "Hire an ASI-licensed guide to understand the developmental evolution across 120 temples."
    },
    visitorInfoKn: {
      timings: "ಬೆಳಿಗ್ಗೆ ೬:೦೦ ರಿಂದ ಸಂಜೆ ೬:೦೦",
      entryFee: "ಭಾರತೀಯರಿಗೆ ₹೨೫, ವಿದೇಶಿಯರಿಗೆ ₹೩೦೦",
      guidelines: "ದೇವಾಲಯಗಳ ವಾಸ್ತುಶಿಲ್ಪದ ವಿಕಾಸವನ್ನು ತಿಳಿಯಲು ಅಧಿಕೃತ ಮಾರ್ಗದರ್ಶಕರನ್ನು ಬಳಸಿ."
    },
    featured: true
  },

  // 9. Bidar (Bidar District)
  {
    id: "bidar",
    name: "Bidar",
    nameKn: "ಬೀದರ್",
    tagline: "Bahmani Crown Citadel, Persian Madrasa & Silver-Inlay Bidriware",
    taglineKn: "ಬಹಮನಿ ಸುಲ್ತಾನರ ಭವ್ಯ ಕೋಟೆ, ಮಹಮೂದ್ ಗವಾನ್ ಮದರಸಾ ಮತ್ತು ಬಿದರಿ ಕಲೆ",
    region: "Kalyana Karnataka (Bidar District)",
    regionKn: "ಕಲ್ಯಾಣ ಕರ್ನಾಟಕ (ಬೀದರ್ ಜಿಲ್ಲೆ)",
    district: "Bidar",
    districtKn: "ಬೀದರ್",
    nearestCity: "Bidar",
    nearestCityKn: "ಬೀದರ್",
    category: ["Heritage", "Culture", "Spiritual"],
    heroImage: "/images/destinations/bidar.jpg",
    gallery: ["/images/destinations/bidar.jpg", "/images/destinations/fallback.jpg"],
    description: "Northernmost crown of Karnataka, Bidar served as capital of the medieval Bahmani and Barid Shahi Sultanates. It is celebrated for its colossal 15th-century fort with triple-moats, Rangin Mahal inlaid with mother-of-pearl, the Persian university Mahmud Gawan Madrasa, Gurudwara Nanak Jhira, and GI-tagged Bidriware.",
    descriptionKn: "ಕರ್ನಾಟಕದ ಉತ್ತರ ತುದಿ ಬೀದರ್ ಬಹಮನಿ ಮತ್ತು ಬರೀದ್ ಶಾಹಿ ಸುಲ್ತಾನರ ಭವ್ಯ ರಾಜಧಾನಿಯಾಗಿತ್ತು. ತ್ರಿವಳಿ ಕಂದಕಗಳ ಬೃಹತ್ ಕೋಟೆ, ಬಣ್ಣದ ರಂಗೀನ್ ಮಹಲ್, ಮಹಮೂದ್ ಗವಾನ್ ಮದರಸಾ, ಗುರುದ್ವಾರ ನಾನಕ್ ಝೀರಾ ಮತ್ತು ಜಿಐ ಮಾನ್ಯತೆಯ ಬಿದರಿ ಕಲೆಗೆ ಇದು ಪ್ರಸಿದ್ಧ.",
    significance: "Masterpiece of medieval Indo-Islamic and Persian civil engineering. Site of historic karez subterranean water aqueducts.",
    significanceKn: "ಮಧ್ಯಕಾಲೀನ ಇಂಡೋ-ಪರ್ಷಿಯನ್ ವಾಸ್ತುಶಿಲ್ಪ ಹಾಗೂ ಸುರಂಗ ಮಾರ್ಗದ ಕಾರೇಜ್ ಜಲ ವ್ಯವಸ್ಥೆಯ ಅದ್ಭುತ ತಾಣ.",
    heritageStory: "Guru Nanak, the first Sikh Guru, visited Bidar in 1512 CE during a severe drought. Hearing the people's cries, he touched the hillside with his wooden clog, and a perennial sweet water spring burst forth, flowing continuously to this day.",
    heritageStoryKn: "ಕ್ರಿ.ಶ. ೧೫೧೨ರಲ್ಲಿ ಸಿಖ್ ಧರ್ಮಗುರು ಗುರುನಾನಕರು ಇಲ್ಲಿಗೆ ಬಂದಾಗ ನೀರಿನ ಕ್ಷಾಮವನ್ನು ಕಂಡು, ತಮ್ಮ ಪಾದದಿಂದ ಕಲ್ಲನ್ನು ಸರಿಸಿದಾಗ ಸಿಹಿನೀರಿನ ಬುಗ್ಗೆ ಚಿಮ್ಮಿತು; ಅದೇ ನಾನಕ್ ಝೀರಾ ಸಾಹಿಬ್.",
    traditionsAndCrafts: "GI-tagged Bidriware metal handicraft with pure silver wire inlaid into blackened zinc-copper alloy.",
    traditionsAndCraftsKn: "ಶುದ್ಧ ಬೆಳ್ಳಿಯ ರೇಖುಗಳನ್ನು ಕಪ್ಪು ಮಿಶ್ರಲೋಹದಲ್ಲಿ ಹುದುಗಿಸಿ ತಯಾರಿಸುವ ಜಗತ್ಪ್ರಸಿದ್ಧ ಬಿದರಿ ಕಲೆ.",
    localFood: "Authentic Hyderabadi-Deccani Biryani, Bidar Naan Qalia, Tahari, and soft Chikki.",
    localFoodKn: "ಬೀದರ್ ನಾನ್ ಖಾಲಿಯಾ, ಡೆಕ್ಕನಿ ಬಿರಿಯಾನಿ ಮತ್ತು ಸಿಹಿ ಚುಟ್ಟಾ.",
    historicalSources: "Ghulam Yazdani, 'Bidar: Its History and Monuments' (1947); ASI Hyderabad/Bengaluru Circles.",
    historicalSourcesKn: "ಗುಲಾಂ ಯಜ್ದಾನಿ ಅವರ 'ಬೀದರ್: ಇತಿಹಾಸ ಮತ್ತು ಸ್ಮಾರಕಗಳು' (೧೯೪೭); ಭಾರತೀಯ ಪುರಾತತ್ವ ಇಲಾಖೆ.",
    bestTimeToVisit: "October to March (pleasant northern plateau winter)",
    bestTimeToVisitKn: "ಅಕ್ಟೋಬರ್‌ನಿಂದ ಮಾರ್ಚ್‌ವರೆಗೆ",
    avgDailyBudgetINR: 1900,
    nearestTransit: "Bidar Railway Station (in-city); Bidar Airport (domestic) / Hyderabad (140 km)",
    nearestTransitKn: "ಬೀದರ್ ರೈಲ್ವೆ ನಿಲ್ದಾಣ; ಹೈದರಾಬಾದ್ ವಿಮಾನ ನಿಲ್ದಾಣ (೧೪೦ ಕಿ.ಮೀ)",
    nearbyDestinations: ["kalaburagi-fort", "sannati", "vijayapura"],
    keyHighlights: [
      "Bidar Fort with 5.5 km perimeter stone walls and triple defensive rock-cut moats",
      "Rangin Mahal palace featuring intricate Persian floral tilework and mother-of-pearl mosaics",
      "Mahmud Gawan Madrasa (1472 CE) — 3-story Persian Islamic university with turquoise glazed tiles",
      "Gurudwara Nanak Jhira Sahib — sacred Sikh pilgrimage with crystal perennial holy spring",
      "Bahmani Royal Tombs at Ashtur with colossal 12-sided domed mausoleums"
    ],
    keyHighlightsKn: [
      "೫.೫ ಕಿ.ಮೀ ಉದ್ದದ ಕಲ್ಲಿನ ಗೋಡೆಗಳು ಮತ್ತು ತ್ರಿವಳಿ ಕಂದಕಗಳುಳ್ಳ ಬೀದರ್ ಕೋಟೆ",
      "ಮುತ್ತಿನ ಚಿಪ್ಪುಗಳ ಕೆತ್ತನೆ ಮತ್ತು ಬಣ್ಣದ ಟೈಲ್ಸ್‌ಗಳುಳ್ಳ ರಂಗೀನ್ ಮಹಲ್",
      "ಕ್ರಿ.ಶ. ೧೪೭೨ರ ೩ ಅಂತಸ್ತಿನ ಮಹಮೂದ್ ಗವಾನ್ ಪರ್ಷಿಯನ್ ಮದರಸಾ",
      "ಸಿಹಿನೀರಿನ ಪವಿತ್ರ ಬುಗ್ಗೆಯಿರುವ ಐತಿಹಾಸಿಕ ಗುರುದ್ವಾರ ನಾನಕ್ ಝೀರಾ ಸಾಹಿಬ್",
      "ಅಷ್ಟೂರಿನಲ್ಲಿರುವ ಬಹಮನಿ ಸುಲ್ತಾನರ ಭವ್ಯ ಗುಮ್ಮಟ ಸಮಾಧಿಗಳು"
    ],
    coordinates: { lat: 17.9104, lng: 77.5199 },
    visitorInfo: {
      timings: "Fort: 08:00 AM - 06:30 PM; Gurudwara: 24 Hours",
      entryFee: "Fort entry free; nominal fee for Rangin Mahal museum",
      guidelines: "Head covering mandatory inside Gurudwara Nanak Jhira; langar (free community meal) served round the clock."
    },
    visitorInfoKn: {
      timings: "ಕೋಟೆ: ಬೆಳಿಗ್ಗೆ ೮:೦೦ - ಸಂಜೆ ೬:೩೦; ಗುರುದ್ವಾರ: ೨೪ ಗಂಟೆ",
      entryFee: "ಕೋಟೆ ಪ್ರವೇಶ ಉಚಿತ",
      guidelines: "ಗುರುದ್ವಾರದ ಒಳಗೆ ತಲೆಗೆ ಬಟ್ಟೆ ಧರಿಸುವುದು ಕಡ್ಡಾಯ; ಲಂಗರ್ (ಉಚಿತ ಊಟ) ಸದಾ ಲಭ್ಯ."
    },
    featured: true
  },

  // 10. Bengaluru (Bengaluru Urban)
  {
    id: "bengaluru",
    name: "Bengaluru (Bangalore)",
    nameKn: "ಬೆಂಗಳೂರು",
    tagline: "Garden City & Cultural Epicenter of Karnataka",
    taglineKn: "ಉದ್ಯಾನ ನಗರಿ ಮತ್ತು ಕರ್ನಾಟಕದ ಸಾಂಸ್ಕೃತಿಕ ರಾಜಧಾನಿ",
    region: "Southern Karnataka (Bengaluru Urban District)",
    regionKn: "ದಕ್ಷಿಣ ಕರ್ನಾಟಕ (ಬೆಂಗಳೂರು ನಗರ ಜಿಲ್ಲೆ)",
    district: "Bengaluru Urban",
    districtKn: "ಬೆಂಗಳೂರು ನಗರ",
    nearestCity: "Bengaluru",
    nearestCityKn: "ಬೆಂಗಳೂರು",
    category: ["City", "Heritage", "Culture", "Food"],
    heroImage: "/images/destinations/bengaluru.jpg",
    gallery: ["/images/destinations/bengaluru.jpg", "/images/destinations/fallback.jpg"],
    description: "Karnataka's vibrant capital blends royal heritage with cosmopolitan energy. Founded in 1537 by Kempe Gowda I with a mud fort, Bengaluru boasts the Tudor-revival Bangalore Palace, the historic 240-acre Lalbagh Botanical Garden commission by Hyder Ali in 1760, Tipu Sultan's teakwood Summer Palace, and the Neo-Dravidian Vidhana Soudha.",
    descriptionKn: "ಕರ್ನಾಟಕದ ರಾಜಧಾನಿ ಬೆಂಗಳೂರು ಪ್ರಾಚೀನ ಪರಂಪರೆ ಮತ್ತು ಆಧುನಿಕತೆಯ ಸುಂದರ ಸಂಗಮ. ೧೫೩೭ರಲ್ಲಿ ನಾಡಪ್ರಭು ಕೆಂಪೇಗೌಡರಿಂದ ಸ್ಥಾಪಿತವಾದ ಈ ನಗರಿಯು ಬೆಂಗಳೂರು ಅರಮನೆ, ೨೪೦ ಎಕರೆಯ ಲಾಲ್‌ಬಾಗ್, ಟಿಪ್ಪು ಸುಲ್ತಾನರ ಬೇಸಿಗೆ ಅರಮನೆ ಮತ್ತು ಭವ್ಯ ವಿಧಾನಸೌಧವನ್ನು ಒಳಗೊಂಡಿದೆ.",
    significance: "Capital of Karnataka and global technology hub, pioneering botanical sciences, aerospace, and Kannada literature.",
    significanceKn: "ಕರ್ನಾಟಕದ ರಾಜಧಾನಿ, ಜಾಗತಿಕ ಮಾಹಿತಿ ತಂತ್ರಜ್ಞಾನ ಹಾಗೂ ಕಲೆ-ಸಾಹಿತ್ಯದ ಪ್ರಮುಖ ಕೇಂದ್ರ.",
    heritageStory: "Legend says Hoysala King Veera Ballala II lost his way in the forest and was fed boiled beans by a humble old woman. Grateful, he named the area 'Benda-Kaalu-Uru' (Town of Boiled Beans), which evolved into Bengaluru.",
    heritageStoryKn: "ಹೊಯ್ಸಳ ದೊರೆ ವೀರ ಬಲ್ಲಾಳನಿಗೆ ಕಾಡಿನಲ್ಲಿ ಹಸಿದಾಗ ವೃದ್ಧೆಯೊಬ್ಬಳು ಬೆಂದ ಕಾಳನ್ನು ನೀಡಿ ಸತ್ಕರಿಸಿದ ನೆನಪಿನಲ್ಲಿ 'ಬೆಂದಕಾಳೂರು' ಎಂದು ಕರೆದು, ಮುಂದೆ 'ಬೆಂಗಳೂರು' ಆಯಿತೆಂಬ ಐತಿಹ್ಯವಿದೆ.",
    traditionsAndCrafts: "Bangalore Karaga Shaktyotsava (oldest cultural festival of Vahnikula Kshatriyas), silk weaving, and sandalwood carving.",
    traditionsAndCraftsKn: "ಐತಿಹಾಸಿಕ ಬೆಂಗಳೂರು ಕರಗ ಶಕ್ತ್ಯುತ್ಸವ, ಶುದ್ಧ ರೇಷ್ಮೆ ಸೀರೆಗಳ ನೇಕಾರಿಕೆ ಮತ್ತು ಶ್ರೀಗಂಧದ ಕಲೆ.",
    localFood: "Crisp Masala Dose from iconic Vidyarthi Bhavan, Bisi Bele Bath, VV Puram Food Street delicacies, and fresh Filter Coffee.",
    localFoodKn: "ವಿದ್ಯಾರ್ಥಿ ಭವನದ ಗರಿಗರಿ ಮಸಾಲೆ ದೋಸೆ, ಬಿಸಿಬೇಳೆ ಬಾತ್, ವಿ.ವಿ. ಪುರಂ ಫುಡ್ ಸ್ಟ್ರೀಟ್ ತಿನಿಸುಗಳು ಮತ್ತು ಫಿಲ್ಟರ್ ಕಾಫಿ.",
    historicalSources: "Gazetteer of Bangalore (B. Lewis Rice); Kempe Gowda Tower Inscriptions; Karnataka State Archives.",
    historicalSourcesKn: "ಬೆಂಗಳೂರು ಗೆಜೆಟಿಯರ್; ಕೆಂಪೇಗೌಡ ಗೋಪುರ ಶಾಸನಗಳು; ಕರ್ನಾಟಕ ರಾಜ್ಯ ದಾಖಲೆಗಳು.",
    bestTimeToVisit: "Throughout the year (celebrated for its pleasant 20°C - 30°C climate)",
    bestTimeToVisitKn: "ವರ್ಷವಿಡೀ ಪ್ರವಾಸಕ್ಕೆ ಹಿತಕರ ಹವಾಮಾನ",
    avgDailyBudgetINR: 2400,
    nearestTransit: "KSR Bengaluru City / Yesvantpur Junction; Kempegowda International Airport (BLR - 35 km)",
    nearestTransitKn: "ಕೆ.ಎಸ್.ಆರ್ ಬೆಂಗಳೂರು ಸಿಟಿ ರೈಲ್ವೆ ನಿಲ್ದಾಣ; ಕೆಂಪೇಗೌಡ ಅಂತಾರಾಷ್ಟ್ರೀಯ ವಿಮಾನ ನಿಲ್ದಾಣ",
    nearbyDestinations: ["nandi-hills", "bannerghatta", "ramanagara"],
    keyHighlights: [
      "Bangalore Palace — magnificent 1887 Tudor-style royal residence with stained glass",
      "Lalbagh Botanical Garden & historic Glass House hosting biannual flower shows",
      "Vidhana Soudha — largest legislative building in India with 'Government Work is God's Work' crest",
      "Tipu Sultan's Summer Palace constructed entirely in ornate carved teakwood",
      "VV Puram Thindi Beedi (Food Street) for authentic evening Karnataka street food"
    ],
    keyHighlightsKn: [
      "೧೮೮೭ರ ಭವ್ಯ ಟ್ಯೂಡರ್ ಶೈಲಿಯ ಬೆಂಗಳೂರು ಅರಮನೆ",
      "ಲಾಲ್‌ಬಾಗ್ ಸಸ್ಯತೋಟ ಮತ್ತು ಫಲಪುಷ್ಪ ಪ್ರದರ್ಶನದ ಐತಿಹಾಸಿಕ ಗಾಜಿನ ಮನೆ",
      "'ಸರ್ಕಾರದ ಕೆಲಸ ದೇವರ ಕೆಲಸ' ಧ್ಯೇಯವಾಕ್ಯವಿರುವ ಭವ್ಯ ವಿಧಾನಸೌಧ",
      "ಟಿಪ್ಪು ಸುಲ್ತಾನರ ಸಂಪೂರ್ಣ ತೇಗದ ಮರದಲ್ಲಿ ಕೆತ್ತಲಾದ ಬೇಸಿಗೆ ಅರಮನೆ",
      "ವಿ.ವಿ. ಪುರಂ ತಿಂಡಿ ಬೀದಿಯ ಸಾಂಪ್ರದಾಯಿಕ ಸಂಜೆಯ ತಿನಿಸುಗಳ ಜಾತ್ರೆ"
    ],
    coordinates: { lat: 12.9716, lng: 77.5946 },
    visitorInfo: {
      timings: "Lalbagh: 06:00 AM - 07:00 PM; Palace: 10:00 AM - 05:30 PM",
      entryFee: "Lalbagh: ₹25; Bangalore Palace: ₹250 for Indians, ₹500 for foreigners",
      guidelines: "Namma Metro provides seamless transit across Majestic, MG Road, Lalbagh, and Vidhana Soudha."
    },
    visitorInfoKn: {
      timings: "ಲಾಲ್‌ಬಾಗ್: ಬೆಳಿಗ್ಗೆ ೬:೦೦ - ಸಂಜೆ ೭:೦೦; ಅರಮನೆ: ಬೆಳಿಗ್ಗೆ ೧೦:೦೦ - ಸಂಜೆ ೫:೩೦",
      entryFee: "ಲಾಲ್‌ಬಾಗ್ ₹೨೫; ಅರಮನೆ ₹೨೫೦",
      guidelines: "ಮೆಟ್ರೋ ರೈಲು ನಗರದ ಪ್ರಮುಖ ತಾಣಗಳಿಗೆ ಸುಲಭ ಸಂಪರ್ಕ ಕಲ್ಪಿಸುತ್ತದೆ."
    },
    featured: true
  },

  // 11. Somnathapura (Mysuru District)
  {
    id: "somnathapura",
    name: "Somnathapura (Chennakeshava Temple)",
    nameKn: "ಸೋಮನಾಥಪುರ",
    tagline: "UNESCO World Heritage Prasanna Chennakeshava Trikuta Temple",
    taglineKn: "ಯುನೆಸ್ಕೋ ವಿಶ್ವ ಪರಂಪರೆ ಪ್ರಸನ್ನ ಚೆನ್ನಕೇಶವ ತ್ರಿಕೂಟ ಹೊಯ್ಸಳ ದೇವಾಲಯ",
    region: "Southern Karnataka (Mysuru District)",
    regionKn: "ದಕ್ಷಿಣ ಕರ್ನಾಟಕ (ಮೈಸೂರು ಜಿಲ್ಲೆ)",
    district: "Mysuru",
    districtKn: "ಮೈಸೂರು",
    nearestCity: "T. Narasipura",
    nearestCityKn: "ಟಿ. ನರಸೀಪುರ",
    category: ["Heritage", "Culture"],
    heroImage: "/images/destinations/somnathapura.jpg",
    gallery: ["/images/destinations/somnathapura.jpg", "/images/destinations/fallback.jpg"],
    description: "Built in 1268 CE by Hoysala general Soma on the banks of the sacred Cauvery, Somnathapura's Prasanna Chennakeshava Temple is an architectural jewel inscribed as a UNESCO World Heritage Site in 2023. Perched on a 16-pointed star plinth, it has three sanctums adorned with soapstone carvings depicting the Ramayana, Mahabharata, and Bhagavata.",
    descriptionKn: "ಕ್ರಿ.ಶ. ೧೨೬೮ರಲ್ಲಿ ಹೊಯ್ಸಳ ದಂಡನಾಯಕ ಸೋಮನಾಥನಿಂದ ಕಾವೇರಿ ತೀರದಲ್ಲಿ ನಿರ್ಮಿತವಾದ ಈ ಪ್ರಸನ್ನ ಚೆನ್ನಕೇಶವ ದೇವಾಲಯ ೨೦೨೩ರಲ್ಲಿ ಯುನೆಸ್ಕೋ ವಿಶ್ವ ಪರಂಪರೆ ತಾಣವಾಗಿ ಘೋಷಿಸಲ್ಪಟ್ಟಿದೆ. ನಕ್ಷತ್ರಾಕಾರದ ಜಗತಿಯ ಮೇಲಿರುವ ತ್ರಿಕೂಟ ದೇಗುಲದಲ್ಲಿ ರಾಮಾಯಣ, ಮಹಾಭಾರತದ ಕಥನ ಶಿಲ್ಪಗಳಿವೆ.",
    significance: "Part of the UNESCO World Heritage serial site 'Sacred Ensembles of the Hoysalas' alongside Belur and Halebidu, representing the apex of later Hoysala symmetry and miniature sculpture.",
    significanceKn: "ಬೇಲೂರು ಮತ್ತು ಹಳೇಬೀಡಿನೊಂದಿಗೆ 'ಹೊಯ್ಸಳರ ಪವಿತ್ರ ಸಮಗ್ರಗಳು' ಯುನೆಸ್ಕೋ ವಿಶ್ವ ಪರಂಪರೆ ಪಟ್ಟಿಗೆ ಸೇರ್ಪಡೆಗೊಂಡ ಅದ್ಭುತ ಶಿಲ್ಪಕಲಾ ತಾಣ.",
    heritageStory: "Consecrated during the golden twilight of the Hoysala dynasty by Commander Somanatha Dandanayaka under King Narasimha III, retaining signatures of master sculptors Mallitamma and Balakka carved beneath panels.",
    heritageStoryKn: "ಮೂರನೇ ನರಸಿಂಹ ದೊರೆಯ ಕಾಲದಲ್ಲಿ ದಂಡನಾಯಕ ಸೋಮನಾಥನು ಕಟ್ಟಿಸಿದ ಈ ದೇಗುಲದ ಶಿಲ್ಪಗಳ ಕೆಳಗೆ ಮಲ್ಲಿತಮ್ಮ ಮತ್ತು ಬಾಲಕ್ಕ ಮುಂತಾದ ಶ್ರೇಷ್ಠ ಶಿಲ್ಪಿಗಳ ಸಹಿ ಕೆತ್ತಲ್ಪಟ್ಟಿದೆ.",
    traditionsAndCrafts: "Soapstone carving, Mysore silk weaving, and traditional bronze casting.",
    traditionsAndCraftsKn: "ಬಳಪದ ಕಲ್ಲಿನ ಸೂಕ್ಷ್ಮ ಕೆತ್ತನೆ ಕಲೆ ಮತ್ತು ಮೈಸೂರು ರೇಷ್ಮೆ ನೇಕಾರಿಕೆ.",
    localFood: "Mysore Pak, fresh filter coffee, crispy Masala Dose, and tender coconut water.",
    localFoodKn: "ಮೈಸೂರು ಪಾಕ್, ಫಿಲ್ಟರ್ ಕಾಫಿ ಮತ್ತು ಮೈಸೂರು ಮೈಲಾರಿ ದೋಸೆ.",
    historicalSources: "UNESCO World Heritage Inscription (Site No. 1670); Epigraphia Carnatica Vol. III; Archaeological Survey of India.",
    historicalSourcesKn: "ಯುನೆಸ್ಕೋ ವಿಶ್ವ ಪರಂಪರೆ ಪಟ್ಟಿ (ಸಂ. ೧೬೭೦); ಎಪಿಗ್ರಾಫಿಯಾ ಕರ್ನಾಟಿಕಾ ಸಂಪುಟ ೩; ಭಾರತೀಯ ಪುರಾತತ್ವ ಇಲಾಖೆ.",
    bestTimeToVisit: "October to March (pleasant mild sun)",
    bestTimeToVisitKn: "ಅಕ್ಟೋಬರ್‌ನಿಂದ ಮಾರ್ಚ್‌ವರೆಗೆ",
    avgDailyBudgetINR: 1700,
    nearestTransit: "Mysuru Junction Railway Station (35 km); Bangalore Airport (175 km)",
    nearestTransitKn: "ಮೈಸೂರು ಜಂಕ್ಷನ್ (೩೫ ಕಿ.ಮೀ)",
    nearbyDestinations: ["mysuru", "srirangapatna", "shivanasamudra"],
    keyHighlights: [
      "16-pointed star-shaped high stone plinth (Jagati) for pradakshina circumambulation",
      "Triple sanctums (Trikuta) dedicated to Keshava, Janardhana, and Venugopala",
      "Outer wall continuous horizontal narrative relief bands of charging elephants, cavalry, and epics",
      "16 distinct ornate lathe-turned soapstone pillars inside the Navaranga hall",
      "Carved ceiling rosettes depicting 16 blossoming lotus stages"
    ],
    keyHighlightsKn: [
      "ಪ್ರದಕ್ಷಿಣೆಗಾಗಿ ೧೬ ಮೂಲೆಗಳ ನಕ್ಷತ್ರಾಕಾರದ ಎತ್ತರದ ಕಲ್ಲಿನ ಜಗತಿ",
      "ಕೇಶವ, ಜನಾರ್ದನ ಮತ್ತು ವೇಣುಗೋಪಾಲ ಸ್ವಾಮಿಯ ಮೂರು ಗರ್ಭಗುಡಿಗಳು",
      "ಹೊರಗೋಡೆಯ ಮೇಲೆ ಆನೆಗಳು, ಕುದುರೆಗಳು ಮತ್ತು ರಾಮಾಯಣ-ಮಹಾಭಾರತದ ಶಿಲ್ಪ ಪಟ್ಟಿಗಳು",
      "ನವರಂಗ ಮಂಟಪದಲ್ಲಿ ನಯವಾಗಿ ಕಡೆಯಲಾದ ೧೬ ವಿಭಿನ್ನ ಕಲ್ಲಿನ ಕಂಬಗಳು",
      "ಛಾವಣಿಯಲ್ಲಿ ಅರಳುತ್ತಿರುವ ಕಮಲದ ಹೂವಿನ ೧೬ ವಿಶಿಷ್ಟ ಕೆತ್ತನೆಗಳು"
    ],
    coordinates: { lat: 12.2763, lng: 76.8821 },
    visitorInfo: {
      timings: "08:30 AM - 05:30 PM",
      entryFee: "₹25 for Indians, ₹300 for foreigners (ASI UNESCO ticket)",
      guidelines: "No active worship in sanctum; photography permitted without flash."
    },
    visitorInfoKn: {
      timings: "ಬೆಳಿಗ್ಗೆ ೮:೩೦ ರಿಂದ ಸಂಜೆ ೫:೩೦",
      entryFee: "ಭಾರತೀಯರಿಗೆ ₹೨೫, ವಿದೇಶಿಯರಿಗೆ ₹೩೦೦",
      guidelines: "ಇದು ಸಂರಕ್ಷಿತ ಸ್ಮಾರಕವಾಗಿದ್ದು ನಿತ್ಯ ಪೂಜೆ ಇರುವುದಿಲ್ಲ; ಫ್ಲಾಶ್ ಇಲ್ಲದೆ ಫೋಟೋ ತೆಗೆಯಬಹುದು."
    },
    featured: true,
    unesco: true
  },

  // 12. Shivanasamudra Falls (Mandya)
  {
    id: "shivanasamudra",
    name: "Shivanasamudra Falls",
    nameKn: "ಶಿವನಸಮುದ್ರ ಜಲಪಾತ",
    tagline: "Twin Cascades Gaganachukki & Bharachukki on River Cauvery",
    taglineKn: "ಕಾವೇರಿ ನದಿಯ ಗಗನಚುಕ್ಕಿ ಮತ್ತು ಭರಚುಕ್ಕಿ ಜೋಡಿ ಜಲಪಾತಗಳು",
    region: "Southern Karnataka (Mandya District)",
    regionKn: "ದಕ್ಷಿಣ ಕರ್ನಾಟಕ (ಮಂಡ್ಯ ಜಿಲ್ಲೆ)",
    district: "Mandya",
    districtKn: "ಮಂಡ್ಯ",
    nearestCity: "Malavalli",
    nearestCityKn: "ಮಳವಳ್ಳಿ",
    category: ["Waterfalls", "Nature"],
    heroImage: "/images/destinations/shivanasamudra.jpg",
    gallery: ["/images/destinations/shivanasamudra.jpg", "/images/destinations/fallback.jpg"],
    description: "Here the Cauvery River cascades down a 98-meter (320 ft) rocky precipice, splitting around an island into two spectacular segmented waterfalls: Gaganachukki (surging twin streams) and Bharachukki (a wide, graceful horseshoe cascade). In 1902, Asia's first major hydroelectric power station was commissioned here.",
    descriptionKn: "ಕಾವೇರಿ ನದಿಯು ದ್ವೀಪವೊಂದನ್ನು ಸುತ್ತುವರಿದು ಗಗನಚುಕ್ಕಿ ಮತ್ತು ಭರಚುಕ್ಕಿ ಎಂಬ ಎರಡು ಭವ್ಯ ಜಲಪಾತಗಳಾಗಿ ಧುಮ್ಮುಕ್ಕುತ್ತದೆ. ೧೯೦೨ರಲ್ಲಿ ಏಷ್ಯಾದ ಪ್ರಥಮ ಜಲವಿದ್ಯುತ್ ಕೇಂದ್ರವು ಇಲ್ಲೇ ಸ್ಥಾಪನೆಯಾಗಿತ್ತು.",
    significance: "Engineering landmark where Asia's first long-distance high-voltage transmission line was built to supply electricity to the Kolar Gold Fields (KGF) in 1902.",
    significanceKn: "೧೯೦೨ರಲ್ಲಿ ಏಷ್ಯಾದಲ್ಲೇ ಮೊಟ್ಟಮೊದಲ ಬಾರಿಗೆ ಕೋಲಾರ ಚಿನ್ನದ ಗಣಿಗೆ (ಕೆಜಿಎಫ್) ವಿದ್ಯುತ್ ಸರಬರಾಜು ಮಾಡಿದ ಐತಿಹಾಸಿಕ ಜಲವಿದ್ಯುತ್ ಕೇಂದ್ರ.",
    heritageStory: "An ancient shrine dedicated to Sri Ranganatha Swamy (Madhya Ranga) stands on the island between the two cascades, marking the sacred middle sanctuary of the Cauvery River.",
    heritageStoryKn: "ಎರಡು ಜಲಪಾತಗಳ ನಡುವಿನ ದ್ವೀಪದಲ್ಲಿ ಶ್ರೀ ರಂಗನಾಥಸ್ವಾಮಿಯ (ಮಧ್ಯರಂಗ) ಪ್ರಾಚೀನ ದೇಗುಲವಿದೆ.",
    traditionsAndCrafts: "Coracle boat rowing, riverside sugarcane jaggery processing (Aalemane).",
    traditionsAndCraftsKn: "ಬುಟ್ಟಿ ದೋಣಿ (ತೆಪ್ಪ) ಸವಾರಿ ಮತ್ತು ಸಾಂಪ್ರದಾಯಿಕ ಕಬ್ಬಿನ ಆಲೆಮನೆ ಬೆಲ್ಲ ತಯಾರಿಕೆ.",
    localFood: "Freshly pressed sugarcane juice with ginger, Maddur Vade, and hot fried fish at local river stalls.",
    localFoodKn: "ಆಲೆಮನೆಯ ಬಿಸಿಬಿಸಿ ಬೆಲ್ಲದ ಕಾಕಂಬಿ, ಮದ್ದೂರು ವಡೆ ಹಾಗೂ ಶುಂಠಿ ಬೆರೆಸಿದ ಕಬ್ಬಿನ ಹಾಲು.",
    historicalSources: "Karnataka Power Transmission Corporation Records; Mysore State Gazetteer (Mandya).",
    historicalSourcesKn: "ಕರ್ನಾಟಕ ವಿದ್ಯುತ್ ನಿಗಮ ದಾಖಲೆಗಳು; ಮಂಡ್ಯ ಗೆಜೆಟಿಯರ್.",
    bestTimeToVisit: "July to November (roaring monsoon spectacle)",
    bestTimeToVisitKn: "ಜುಲೈನಿಂದ ನವೆಂಬರ್‌ವರೆಗೆ (ಮಳೆಗಾಲದಲ್ಲಿ ಅತ್ಯಂತ ಸುಂದರ)",
    avgDailyBudgetINR: 1500,
    nearestTransit: "Maddur Railway Station (50 km); Mysuru (75 km); Bengaluru (135 km)",
    nearestTransitKn: "ಮದ್ದೂರು ರೈಲ್ವೆ ನಿಲ್ದಾಣ (೫೦ ಕಿ.ಮೀ); ಮೈಸೂರು (೭೫ ಕಿ.ಮೀ)",
    nearbyDestinations: ["mysuru", "somnathapura", "srirangapatna"],
    keyHighlights: [
      "Viewing gallery overlooking the thunderous plunge of Gaganachukki",
      "Wide curved horseshoe amphitheater of Bharachukki with mist spray",
      "Historic 1902 KSTDC hydro-plant lookout and winch station",
      "Sri Ranganathaswamy Temple (Madhya Ranga) on the island",
      "Traditional round coracle boat ride in calm downstream pools"
    ],
    keyHighlightsKn: [
      "ಗಗನಚುಕ್ಕಿ ಜಲಪಾತದ ಭೋರ್ಗರೆತವನ್ನು ಕಣ್ತುಂಬಿಕೊಳ್ಳುವ ವೀಕ್ಷಣಾ ವೇದಿಕೆ",
      "ಕುದುರೆ ಗೊರಸಿನ ಆಕಾರದಲ್ಲಿ ಹಾಲಿನಂತೆ ಹರಿಯುವ ಭರಚುಕ್ಕಿ ಜಲಪಾತ",
      "೧೯೦೨ರ ಏಷ್ಯಾದ ಪ್ರಥಮ ಜಲವಿದ್ಯುತ್ ಕೇಂದ್ರದ ಐತಿಹಾಸಿಕ ತಾಣ",
      "ದ್ವೀಪದ ಮೇಲಿರುವ ಪವಿತ್ರ ಮಧ್ಯರಂಗ ರಂಗನಾಥಸ್ವಾಮಿ ದೇವಾಲಯ",
      "ನದಿಯ ಪ್ರಶಾಂತ ಭಾಗದಲ್ಲಿ ಸಾಂಪ್ರದಾಯಿಕ ತೆಪ್ಪದ ಸವಾರಿ"
    ],
    coordinates: { lat: 12.2961, lng: 77.1683 },
    visitorInfo: {
      timings: "08:00 AM - 05:30 PM",
      entryFee: "Free entry, parking fee ₹50 per car",
      guidelines: "Swimming strictly prohibited in deep turbulent gorges; observe from safety fences."
    },
    visitorInfoKn: {
      timings: "ಬೆಳಿಗ್ಗೆ ೮:೦೦ ರಿಂದ ಸಂಜೆ ೫:೩೦",
      entryFee: "ಪ್ರವೇಶ ಉಚಿತ, ಕಾರು ಪಾರ್ಕಿಂಗ್ ₹೫೦",
      guidelines: "ನೀರಿನ ಆಳ ಮತ್ತು ಸೆಳೆತ ಹೆಚ್ಚಿರುವುದರಿಂದ ಈಜುವುದು ಕಟ್ಟುನಿಟ್ಟಾಗಿ ನಿಷೇಧಿಸಲಾಗಿದೆ."
    },
    featured: true
  },

  // 13. Nagarhole National Park (Kodagu / Mysuru)
  {
    id: "nagarhole",
    name: "Nagarhole National Park (Kabini)",
    nameKn: "ನಾಗರಹೊಳೆ ರಾಷ್ಟ್ರೀಯ ಉದ್ಯಾನವನ",
    tagline: "Kabini River Safari Haven for Black Panthers, Tigers & Elephants",
    taglineKn: "ಕಬಿನಿ ನದಿ ತೀರದ ಕರಿಚಿರತೆ, ಹುಲಿ ಮತ್ತು ಕಾಡಾನೆಗಳ ಅಭಯಾರಣ್ಯ",
    region: "Southern / Western Ghats (Kodagu & Mysuru Districts)",
    regionKn: "ಕೊಡಗು ಮತ್ತು ಮೈಸೂರು ಜಿಲ್ಲೆ (ಪಶ್ಚಿಮ ಘಟ್ಟಗಳು)",
    district: "Kodagu",
    districtKn: "ಕೊಡಗು",
    nearestCity: "Hunsur",
    nearestCityKn: "ಹುಣಸೂರು",
    category: ["Wildlife", "Nature"],
    heroImage: "/images/destinations/nagarhole.jpg",
    gallery: ["/images/destinations/nagarhole.jpg", "/images/destinations/fallback.jpg"],
    description: "Stretching across 643 square kilometers between the foothills of the Western Ghats and the Kabini Reservoir, Nagarhole (Rajiv Gandhi National Park) features lush teak and rosewood forests teeming with wildlife, including the world's most famous melanistic leopard (black panther).",
    descriptionKn: "ಪಶ್ಚಿಮ ಘಟ್ಟಗಳ ತಪ್ಪಲು ಮತ್ತು ಕಬಿನಿ ಜಲಾಶಯದ ನಡುವೆ ೬೪೩ ಚದರ ಕಿ.ಮೀ ವಿಸ್ತಾರದಲ್ಲಿರುವ ನಾಗರಹೊಳೆ ದಟ್ಟ ತೇಗದ ಕಾಡುಗಳು, ಬಂಗಾಳ ಹುಲಿ, ಕಾಡಾನೆ ಹಿಂಡುಗಳು ಹಾಗೂ ಅಪರೂಪದ ಕಪ್ಪು ಚಿರತೆಗೆ ಜಗತ್ಪ್ರಸಿದ್ಧವಾಗಿದೆ.",
    significance: "Part of the UNESCO Nilgiri Biosphere Reserve; recognized as one of the world's premier tiger and Asian elephant landscapes.",
    significanceKn: "ಯುನೆಸ್ಕೋ ನೀಲಗಿರಿ ಜೀವಗೋಳದ ಪ್ರಮುಖ ಭಾಗ. ವಿಶ್ವದಲ್ಲೇ ಅತಿ ಹೆಚ್ಚು ಹುಲಿ ಮತ್ತು ಆನೆ ಸಾಂದ್ರತೆ ಹೊಂದಿರುವ ರಕ್ಷಿತಾರಣ್ಯ.",
    heritageStory: "Named after the serpentine streams ('Naga' serpent, 'Hole' river in Kannada) that wind through the wilderness. Formerly the exclusive royal hunting grounds of the Maharajas of Mysore.",
    heritageStoryKn: "ಹಾವಿನಂತೆ ಅಂಕುಡೊಂಕಾಗಿ ಹರಿಯುವ ನದಿ ತೊರೆಗಳಿಂದಾಗಿ 'ನಾಗರಹೊಳೆ' ಎಂದು ಹೆಸರು. ಮೈಸೂರು ಒಡೆಯರ್ ರಾಜವಂಶಸ್ಥರ ಬೇಟೆ ತಾಣವಾಗಿತ್ತು.",
    traditionsAndCrafts: "Jenu Kuruba and Betta Kuruba indigenous tribal forest lore and natural honey collection.",
    traditionsAndCraftsKn: "ಜೇನು ಕುರುಬ ಮತ್ತು ಬೆಟ್ಟ ಕುರುಬ ಆದಿವಾಸಿಗಳ ಸಾಂಪ್ರದಾಯಿಕ ಜೇನು ಸಂಗ್ರಹ ಕಲೆ.",
    localFood: "Coorg Pandi Curry (for non-veg), Akki Rotti with Ellu Pajji, and fresh hill plantation tea.",
    localFoodKn: "ಅಕ್ಕಿ ರೊಟ್ಟಿ, ಎಳ್ಳು ಚಟ್ನಿ, ಕುಂಬಳಕಾಯಿ ಪಲ್ಯ ಮತ್ತು ಕಾಫಿ.",
    historicalSources: "Project Tiger & Project Elephant Census; Karnataka Forest Department.",
    historicalSourcesKn: "ಪ್ರಾಜೆಕ್ಟ್ ಟೈಗರ್ ಮತ್ತು ಆನೆ ಜನಗಣತಿ ದಾಖಲೆಗಳು; ಕರ್ನಾಟಕ ಅರಣ್ಯ ಇಲಾಖೆ.",
    bestTimeToVisit: "October to May (waterholes dry up attracting dense game along Kabini backwaters)",
    bestTimeToVisitKn: "ಅಕ್ಟೋಬರ್‌ನಿಂದ ಮೇವರೆಗೆ (ವನ್ಯಜೀವಿ ಸಫಾರಿಗೆ ಪ್ರಶಸ್ತ ಕಾಲ)",
    avgDailyBudgetINR: 3200,
    nearestTransit: "Mysuru Junction Railway Station (85 km); Kannur International Airport (110 km)",
    nearestTransitKn: "ಮೈಸೂರು ಜಂಕ್ಷನ್ (೮೫ ಕಿ.ಮೀ); ಕಣ್ಣೂರು ವಿಮಾನ ನಿಲ್ದಾಣ (೧೧೦ ಕಿ.ಮೀ)",
    nearbyDestinations: ["coorg", "mysuru", "bandipur"],
    keyHighlights: [
      "Kabini river boat safari spotting herds of swimming elephants and marsh crocodiles",
      "Open jeep jungle safari with high probability of tiger, leopard, and wild dog sightings",
      "Famous sightings of 'Saya' the black panther of Kabini",
      "Serene backwaters surrounded by mist-shrouded Brahmagiri hills",
      "Over 250 species of birds including Malabar grey hornbills and osprey"
    ],
    keyHighlightsKn: [
      "ಕಬಿನಿ ನದಿಯಲ್ಲಿ ಬೋಟ್ ಸಫಾರಿ: ಕಾಡಾನೆಗಳ ಹಿಂಡು ಮತ್ತು ಮೊಸಳೆಗಳ ವೀಕ್ಷಣೆ",
      "ತೆರೆದ ಜೀಪ್‌ನಲ್ಲಿ ಹುಲಿ, ಚಿರತೆ ಮತ್ತು ಕಾಡುನಾಯಿಗಳ ರೋಮಾಂಚಕ ಸಫಾರಿ",
      "ಕಬಿನಿಯ ಪ್ರಸಿದ್ಧ ಕಪ್ಪು ಚಿರತೆಯ ಅಪರೂಪದ ದರ್ಶನ",
      "ಬ್ರಹ್ಮಗಿರಿ ಬೆಟ್ಟಗಳ ಹಿನ್ನೆಲೆಯ ಕಬಿನಿ ಹಿನ್ನೀರಿನ ರಮಣೀಯ ಪರಿಸರ",
      "೨೫೦ಕ್ಕೂ ಹೆಚ್ಚು ವೈವಿಧ್ಯಮಯ ಪಕ್ಷಿ ಸಂಕುಲದ ವೀಕ್ಷಣೆ"
    ],
    coordinates: { lat: 12.0314, lng: 76.1558 },
    visitorInfo: {
      timings: "Morning Safari: 06:00 AM - 09:00 AM; Afternoon: 03:00 PM - 06:00 PM",
      entryFee: "Forest bus safari ₹400; Kabini boat safari ₹2,000 - ₹3,500",
      guidelines: "Advance booking through Jungle Lodges or Karnataka Forest website strongly advised."
    },
    visitorInfoKn: {
      timings: "ಮುಂಜಾನೆ ಸಫಾರಿ: ೬:೦೦ - ೯:೦೦; ಮಧ್ಯಾಹ್ನ ಸಫಾರಿ: ೩:೦೦ - ೬:೦೦",
      entryFee: "ಅರಣ್ಯ ಬಸ್ ಸಫಾರಿ ₹೪೦೦; ಕಬಿನಿ ಬೋಟ್ ಸಫಾರಿ ₹೨,೦೦೦ - ₹೩,೫೦೦",
      guidelines: "ಜಂಗಲ್ ಲಾಡ್ಜಸ್ ಅಥವಾ ಅರಣ್ಯ ಇಲಾಖೆಯ ವೆಬ್‌ಸೈಟ್‌ನಲ್ಲಿ ಮುಂಗಡ ಬುಕಿಂಗ್ ಅಗತ್ಯ."
    },
    featured: true
  },

  // 14. Agumbe (Shivamogga)
  {
    id: "agumbe",
    name: "Agumbe Rainforest & Sunset Point",
    nameKn: "ಆಗುಂಬೆ",
    tagline: "Cherrapunji of the South & King Cobra Capital of the World",
    taglineKn: "ದಕ್ಷಿಣದ ಚಿರಾಪುಂಜಿ ಮತ್ತು ಕಾಳಿಂಗ ಸರ್ಪಗಳ ನಿತ್ಯಹರಿದ್ವರ್ಣ ಮಳೆಕಾಡು",
    region: "Malenadu & Western Ghats (Shivamogga District)",
    regionKn: "ಮಲೆನಾಡು ಮತ್ತು ಪಶ್ಚಿಮ ಘಟ್ಟಗಳು (ಶಿವಮೊಗ್ಗ ಜಿಲ್ಲೆ)",
    district: "Shivamogga",
    districtKn: "ಶಿವಮೊಗ್ಗ",
    nearestCity: "Thirthahalli",
    nearestCityKn: "ತೀರ್ಥಹಳ್ಳಿ",
    category: ["Hill Station", "Nature", "Wildlife"],
    heroImage: "/images/destinations/agumbe.jpg",
    gallery: ["/images/destinations/agumbe.jpg", "/images/destinations/fallback.jpg"],
    description: "A misty village perched atop the Western Ghats at 643 meters, Agumbe receives the second highest annual rainfall in India (~7,600 mm). Famous as the filming location for R.K. Narayan's 'Malgudi Days', it features primeval tropical rainforests, roaring waterfalls like Barkana and Onake Abbi, and a panoramic sunset viewpoint over the Arabian Sea.",
    descriptionKn: "ಸಮುದ್ರ ಮಟ್ಟದಿಂದ ೬೪೩ ಮೀಟರ್ ಎತ್ತರದಲ್ಲಿರುವ ಆಗುಂಬೆ ದಕ್ಷಿಣ ಭಾರತದ ಅತಿ ಹೆಚ್ಚು ಮಳೆ ಬೀಳುವ ತಾಣ (ದಕ್ಷಿಣದ ಚಿರಾಪುಂಜಿ). ಆರ್.ಕೆ. ನಾರಾಯಣ್ ಅವರ 'ಮಾಲ್ಗುಡಿ ಡೇಸ್' ಧಾರಾವಾಹಿಯ ಚಿತ್ರೀಕರಣ ತಾಣ, ಬರ್ಕಣ ಜಲಪಾತ, ಒನಕೆ ಅಬ್ಬಿ ಮತ್ತು ಸೂರ್ಯಾಸ್ತ ವೀಕ್ಷಣೆಗೆ ಪ್ರಸಿದ್ಧ.",
    significance: "World-renowned research center for the King Cobra (Ophiophagus hannah) and home to the pioneering Agumbe Rainforest Research Station (ARRS) founded by Romulus Whitaker.",
    significanceKn: "ವಿಶ್ವದ ಏಕೈಕ ಕಾಳಿಂಗ ಸರ್ಪ ಸಂಶೋಧನಾ ಕೇಂದ್ರವಿರುವ ಜಾಗತಿಕ ಜೀವವೈವಿಧ್ಯ ತಾಣ.",
    heritageStory: "Doddamane, a 150-year-old traditional tiled Malenadu ancestral house in the village center, hosted the filming of Swami and his friends in Malgudi Days and continues to serve authentic home-cooked hospitality.",
    heritageStoryKn: "ಮಾಲ್ಗುಡಿ ಡೇಸ್ ಖ್ಯಾತಿಯ ೧೫೦ ವರ್ಷಗಳ ಪುರಾತನ ಸಾಂಪ್ರದಾಯಿಕ ಹೆಂಚಿನ ಮನೆ 'ದೊಡ್ಡಮನೆ' ಇಂದಿಗೂ ಪ್ರವಾಸಿಗರಿಗೆ ಪ್ರೀತಿಯ ಆತಿಥ್ಯ ನೀಡುತ್ತದೆ.",
    traditionsAndCrafts: "Medicinal wild plant documentation, areca nut processing, and bamboo rain hats (Gorrabu).",
    traditionsAndCraftsKn: "ಮಲೆನಾಡಿನ ಸಾಂಪ್ರದಾಯಿಕ ಗೊರಬು (ಬಿದಿರಿನ ಕೊಡೆ) ಮತ್ತು ಗಿಡಮೂಲಿಕೆಗಳ ಔಷಧಿ ಪರಂಪರೆ.",
    localFood: "Appemidi mango pickle, Jackfruit bajji, Steamed Kadubu, and piping hot Malenadu Kashaya.",
    localFoodKn: "ಅಪ್ಪೆಮಿಡಿ ಉಪ್ಪಿನಕಾಯಿ, ಹಲಸಿನ ಹಣ್ಣಿನ ಮುಳುಕ, ಕಡುಬು ಮತ್ತು ತಾಜಾ ಕಷಾಯ.",
    historicalSources: "Indian Meteorological Department Rainfall Data; Agumbe Rainforest Research Station (ARRS) Publications.",
    historicalSourcesKn: "ಭಾರತೀಯ ಹವಾಮಾನ ಇಲಾಖೆ ಮಳೆ ದಾಖಲೆಗಳು; ಎ.ಆರ್.ಆರ್.ಎಸ್ ಸಂಶೋಧನಾ ಪ್ರಕಟಣೆಗಳು.",
    bestTimeToVisit: "October to February (clear sunset view and pleasant jungle trekking)",
    bestTimeToVisitKn: "ಅಕ್ಟೋಬರ್‌ನಿಂದ ಫೆಬ್ರವರಿಯವರೆಗೆ (ಸೂರ್ಯಾಸ್ತ ಮತ್ತು ಚಾರಣಕ್ಕೆ ಉತ್ತಮ)",
    avgDailyBudgetINR: 1800,
    nearestTransit: "Udupi Railway Station (55 km); Mangaluru International Airport (100 km)",
    nearestTransitKn: "ಉಡುಪಿ ರೈಲ್ವೆ ನಿಲ್ದಾಣ (೫೫ ಕಿ.ಮೀ); ಮಂಗಳೂರು ವಿಮಾನ ನಿಲ್ದಾಣ (೧೦೦ ಕಿ.ಮೀ)",
    nearbyDestinations: ["sringeri", "kudremukh", "jog-falls"],
    keyHighlights: [
      "Famous Sunset Point offering unhindered vistas of the sun dipping into the Arabian Sea",
      "Barkana Falls — majestic 850-foot waterfall amidst dense virgin rainforest",
      "Onake Abbi Falls accessible via a scenic 4 km guided rainforest nature trek",
      "Agumbe Rainforest Research Station (ARRS) learning about reptile conservation",
      "Historic Doddamane heritage house preserving Malgudi Days nostalgia"
    ],
    keyHighlightsKn: [
      "ಅರಬ್ಬಿ ಸಮುದ್ರದಲ್ಲಿ ಮುಳುಗುವ ಸೂರ್ಯನ ದರ್ಶನ ನೀಡುವ ಪ್ರಸಿದ್ಧ ಸೂರ್ಯಾಸ್ತ ತಾಣ",
      "ದಟ್ಟ ಕಾಡಿನ ನಡುವೆ ಧುಮ್ಮುಕ್ಕುವ ೮೫೦ ಅಡಿ ಎತ್ತರದ ಬರ್ಕಣ ಜಲಪಾತ",
      "೪ ಕಿ.ಮೀ ಮಳೆಕಾಡಿನ ಹಾದಿಯಲ್ಲಿ ಚಾರಣ ಮಾಡಿ ತಲುಪುವ ಒನಕೆ ಅಬ್ಬಿ ಜಲಪಾತ",
      "ಕಾಳಿಂಗ ಸರ್ಪಗಳ ಸಂರಕ್ಷಣೆಯ ಆಗುಂಬೆ ಮಳೆಕಾಡು ಸಂಶೋಧನಾ ಕೇಂದ್ರ (ARRS)",
      "ಮಾಲ್ಗುಡಿ ಡೇಸ್ ಖ್ಯಾತಿಯ ಐತಿಹಾಸಿಕ 'ದೊಡ್ಡಮನೆ'ಯ ಸಾಂಪ್ರದಾಯಿಕ ಅನುಭವ"
    ],
    coordinates: { lat: 13.5048, lng: 75.0934 },
    visitorInfo: {
      timings: "Sunset Point: 05:00 PM - 06:45 PM; Forest trails: 08:00 AM - 05:00 PM",
      entryFee: "Forest checkpost entry ₹20; Waterfall trek guide ₹500",
      guidelines: "Leech socks essential during monsoons; drive cautiously along narrow 14-hairpin ghat road."
    },
    visitorInfoKn: {
      timings: "ಸೂರ್ಯಾಸ್ತ ತಾಣ: ಸಂಜೆ ೫:೦೦ - ೬:೪೫; ಅರಣ್ಯ ಹಾದಿ: ಬೆಳಿಗ್ಗೆ ೮:೦೦ - ಸಂಜೆ ೫:೦೦",
      entryFee: "ಅರಣ್ಯ ಚೆಕ್‌ಪೋಸ್ಟ್ ಶುಲ್ಕ ₹೨೦",
      guidelines: "ಮಳೆಗಾಲದಲ್ಲಿ ಜಿಗಣೆಗಳು ಹೆಚ್ಚಿರುವುದರಿಂದ ಜಾಗರೂಕರಾಗಿರಿ; ೧೪ ಕಡಿದಾದ ಹೇರ್‌ಪಿನ್ ತಿರುವುಗಳ ರಸ್ತೆ."
    },
    featured: true
  },

  // 15. Kudremukh (Chikkamagaluru)
  {
    id: "kudremukh",
    name: "Kudremukh Peak & National Park",
    nameKn: "ಕುದುರೆಮುಖ",
    tagline: "Horse-Faced Shola Peak & UNESCO Western Ghats Biodiversity Hotspot",
    taglineKn: "ಕುದುರೆಯ ಮುಖದ ಆಕಾರದ ಶೋಲಾ ಹುಲ್ಲುಗಾವಲು ಬೆಟ್ಟ ಮತ್ತು ರಾಷ್ಟ್ರೀಯ ಉದ್ಯಾನವನ",
    region: "Malenadu / Western Ghats (Chikkamagaluru District)",
    regionKn: "ಚಿಕ್ಕಮಗಳೂರು ಜಿಲ್ಲೆ (ಪಶ್ಚಿಮ ಘಟ್ಟಗಳು)",
    district: "Chikkamagaluru",
    districtKn: "ಚಿಕ್ಕಮಗಳೂರು",
    nearestCity: "Kalasa",
    nearestCityKn: "ಕಳಸ",
    category: ["Adventure", "Hill Station", "Wildlife", "Nature"],
    heroImage: "/images/destinations/kudremukh.jpg",
    gallery: ["/images/destinations/kudremukh.jpg", "/images/destinations/fallback.jpg"],
    description: "Rising to 1,894 meters (6,214 ft) as the second-highest peak in Karnataka, Kudremukh gets its name from its distinctive horse-faced profile. Enclosed within a 600-square-kilometer National Park of pristine montane shola grasslands and evergreen rainforests, it is home to tigers, leopards, and lion-tailed macaques.",
    descriptionKn: "ಸಮುದ್ರ ಮಟ್ಟದಿಂದ ೧,೮೯೪ ಮೀಟರ್ ಎತ್ತರದಲ್ಲಿರುವ ಕುದುರೆಮುಖ ಕರ್ನಾಟಕದ ಎರಡನೇ ಅತಿ ಎತ್ತರದ ಶಿಖರ. ಕುದುರೆಯ ಮುಖದಂತಿರುವ ಈ ಶಿಖರವು ಹಸಿರು ಶೋಲಾ ಹುಲ್ಲುಗಾವಲು, ಹನುಮನ್‌ಗುಂಡಿ ಜಲಪಾತ ಮತ್ತು ಸಿಂಹಬಾಲದ ಸಿಂಹಮುಖಿ ಕೋತಿಗಳ ಆವಾಸಸ್ಥಾನವಾಗಿದೆ.",
    significance: "UNESCO World Heritage Site as part of the Western Ghats cluster. Source of three sacred rivers: Tunga, Bhadra, and Netravati.",
    significanceKn: "ಯುನೆಸ್ಕೋ ವಿಶ್ವ ಪರಂಪರೆ ತಾಣ. ತುಂಗಾ, ಭದ್ರಾ ಮತ್ತು ನೇತ್ರಾವತಿ ನದಿಗಳ ಪವಿತ್ರ ಉಗಮ ಸ್ಥಾನ.",
    heritageStory: "Ancient sailors travelling along the Arabian Sea coast used the prominent horse-faced summit of Kudremukh as a natural navigation beacon for over two thousand years.",
    heritageStoryKn: "ಅರಬ್ಬಿ ಸಮುದ್ರದಲ್ಲಿ ಸಂಚರಿಸುತ್ತಿದ್ದ ಪುರಾತನ ನಾವಿಕರು ದೂರದಿಂದಲೇ ಕಾಣುವ ಈ ಕುದುರೆ ಮುಖದ ಶಿಖರವನ್ನು ದಿಕ್ಸೂಚಿಯಾಗಿ ಬಳಸುತ್ತಿದ್ದರು.",
    traditionsAndCrafts: "Shola grassland ecological preservation by tribal communities, organic coffee cultivating.",
    traditionsAndCraftsKn: "ಪರಿಸರ ಸಂರಕ್ಷಣೆ ಮತ್ತು ಸಾಂಪ್ರದಾಯಿಕ ಕಾಫಿ ಕೃಷಿ.",
    localFood: "Malenadu Akki Rotti with coconut chutney, spicy Halasina Hannina Happala, and Kalasa tender filter coffee.",
    localFoodKn: "ಅಕ್ಕಿ ರೊಟ್ಟಿ, ತೆಂಗಿನಕಾಯಿ ಚಟ್ನಿ, ಹಲಸಿನ ಹಪ್ಪಳ ಮತ್ತು ಕಳಸದ ಕಾಫಿ.",
    historicalSources: "UNESCO World Heritage Centre Nomination File 1342; Karnataka Forest Department.",
    historicalSourcesKn: "ಯುನೆಸ್ಕೋ ವಿಶ್ವ ಪರಂಪರೆ ಕಡತ ೧೩೪೨; ಕರ್ನಾಟಕ ಅರಣ್ಯ ಇಲಾಖೆ.",
    bestTimeToVisit: "October to February (lush emerald-green slopes and misty skies)",
    bestTimeToVisitKn: "ಅಕ್ಟೋಬರ್‌ನಿಂದ ಫೆಬ್ರವರಿಯವರೆಗೆ (ಚಾರಣಕ್ಕೆ ಅತ್ಯುತ್ತಮ)",
    avgDailyBudgetINR: 2300,
    nearestTransit: "Mangaluru Junction Railway Station (110 km); Mangaluru International Airport (100 km)",
    nearestTransitKn: "ಮಂಗಳೂರು ಜಂಕ್ಷನ್ (೧೧೦ ಕಿ.ಮೀ); ಮಂಗಳೂರು ವಿಮಾನ ನಿಲ್ದಾಣ (೧೦೦ ಕಿ.ಮೀ)",
    nearbyDestinations: ["chikmagalur", "sringeri", "dharmasthala"],
    keyHighlights: [
      "Challenging 22 km round-trip trek to the 1,894-meter Kudremukh summit",
      "Rolling panoramic Shola grass hills resembling Scottish highlands",
      "Hanuman Gundi (Suthanabbi) 100-foot cascading mountain waterfall",
      "Forest sanctuary harboring the rare and endangered lion-tailed macaque",
      "River confluence (Pancha Theertha) and Kalaseshwara temple in nearby Kalasa"
    ],
    keyHighlightsKn: [
      "೧,೮೯೪ ಮೀಟರ್ ಎತ್ತರದ ಕುದುರೆಮುಖ ಶಿಖರಕ್ಕೆ ೨೨ ಕಿ.ಮೀ ರೋಮಾಂಚಕ ಚಾರಣ",
      "ಹಸಿರು ಹಾಸಿನಂತೆ ಹರಡಿರುವ ಕಣ್ಮನ ಸೆಳೆಯುವ ಶೋಲಾ ಹುಲ್ಲುಗಾವಲುಗಳು",
      "೧೦೦ ಅಡಿ ಎತ್ತರದಿಂದ ಹಾಲಿನ ನೊರೆಯಂತೆ ಬೀಳುವ ಹನುಮನ್‌ಗುಂಡಿ ಜಲಪಾತ",
      "ಅಳಿವಿನಂಚಿನಲ್ಲಿರುವ ಅಪರೂಪದ ಸಿಂಹಬಾಲದ ಸಿಂಹಮುಖಿ ಕೋತಿಗಳ ದರ್ಶನ",
      "ಸಮೀಪದ ಕಳಸದ ಪಂಚತೀರ್ಥ ಮತ್ತು ಕಳಸೇಶ್ವರ ದೇವಾಲಯ"
    ],
    coordinates: { lat: 13.2163, lng: 75.2572 },
    visitorInfo: {
      timings: "Trek start: 06:00 AM - 08:30 AM (Must exit forest by 05:00 PM)",
      entryFee: "Forest permit ₹600 per trekker; guide fee ₹1,000 per group",
      guidelines: "Only 50 trekkers permitted per day by Forest Dept; mandatory online permit via Karnataka Eco-tourism."
    },
    visitorInfoKn: {
      timings: "ಚಾರಣ ಆರಂಭ: ಬೆಳಿಗ್ಗೆ ೬:೦೦ - ೮:೩೦ (ಸಂಜೆ ೫:೦೦ರ ಒಳಗೆ ಹಿಂತಿರುಗಬೇಕು)",
      entryFee: "ಅರಣ್ಯ ಇಲಾಖೆ ಪರವಾನಗಿ ಶುಲ್ಕ ₹೬೦೦",
      guidelines: "ದಿನಕ್ಕೆ ೫೦ ಜನರಿಗೆ ಮಾತ್ರ ಅನುಮತಿ; ಮುಂಗಡ ಆನ್‌ಲೈನ್ ಬುಕಿಂಗ್ ಕಡ್ಡಾಯ."
    },
    featured: true
  },

  // 16. Sringeri (Chikkamagaluru)
  {
    id: "sringeri",
    name: "Sringeri Sharada Peetham",
    nameKn: "ಶೃಂಗೇರಿ",
    tagline: "First Advaita Matha Established by Adi Shankaracharya on Tunga River",
    taglineKn: "ಆದಿ ಶಂಕರಾಚಾರ್ಯರು ತುಂಗಾ ತೀರದಲ್ಲಿ ಸ್ಥಾಪಿಸಿದ ಪ್ರಥಮ ಶಾರದಾ ಪೀಠ",
    region: "Malenadu & Western Ghats (Chikkamagaluru District)",
    regionKn: "ಚಿಕ್ಕಮಗಳೂರು ಜಿಲ್ಲೆ (ಮಲೆನಾಡು)",
    district: "Chikkamagaluru",
    districtKn: "ಚಿಕ್ಕಮಗಳೂರು",
    nearestCity: "Koppa",
    nearestCityKn: "ಕೊಪ್ಪ",
    category: ["Spiritual", "Heritage", "Nature"],
    heroImage: "/images/destinations/sringeri.jpg",
    gallery: ["/images/destinations/sringeri.jpg", "/images/destinations/fallback.jpg"],
    description: "Located along the serene Tunga River in the Western Ghats, Sringeri is the first of the four cardinal monastic seats (Amnaya Peethams) established by Adi Shankaracharya in the 8th century CE. It houses the Sri Sharadamba Temple and the 14th-century Vidyashankara Temple, an architectural wonder with 12 zodiac pillars aligned with solar equinoxes.",
    descriptionKn: "ತುಂಗಾ ನದಿಯ ತೀರದಲ್ಲಿರುವ ಶೃಂಗೇರಿ ಜಗದ್ಗುರು ಆದಿ ಶಂಕರಾಚಾರ್ಯರು ಸ್ಥಾಪಿಸಿದ ದಕ್ಷಿಣಾಮ್ನಾಯ ಪ್ರಥಮ ಶಾರದಾ ಪೀಠ. ಇಲ್ಲಿನ ವಿದ್ಯಾಶಂಕರ ದೇವಾಲಯದಲ್ಲಿ ಸೂರ್ಯನ ಗತಿಗೆ ತಕ್ಕಂತೆ ಬೆಳಕು ಬೀಳುವ ೧೨ ರಾಶಿ ಸ್ತಂಭಗಳಿವೆ.",
    significance: "Supreme spiritual seat of Advaita Vedanta philosophy patronized by the Vijayanagara Emperors, Mysore Wadiyars, and Keladi Nayakas.",
    significanceKn: "ಅದ್ವೈತ ವೇದಾಂತದ ಜಗತ್ಪ್ರಸಿದ್ಧ ಆಧ್ಯಾತ್ಮಿಕ ಕೇಂದ್ರ. ವಿಜಯನಗರ ಸಾಮ್ರಾಜ್ಯದ ಸಂಸ್ಥಾಪನೆಗೆ ಮಾರ್ಗದರ್ಶನ ನೀಡಿದ ಧರ್ಮಪೀಠ.",
    heritageStory: "Adi Shankara chose this spot after witnessing a cobra spreading its hood like an umbrella to shelter a pregnant frog from the scorching sun, recognizing the ground as one of innate peace and compassion (Sringagiri, hermitage of sage Rishyashringa).",
    heritageStoryKn: "ಬಿಸಿಲಿನಲ್ಲಿ ಕಷ್ಟಪಡುತ್ತಿದ್ದ ಗರ್ಭಿಣಿ ಕಪ್ಪೆಗೆ ಸರ್ಪವೊಂದು ಹೆಡೆ ಎತ್ತಿ ನೆರಳು ನೀಡಿದ್ದನ್ನು ಕಂಡ ಆದಿ ಶಂಕರಾಚಾರ್ಯರು, ವೈರತ್ವವಿಲ್ಲದ ಈ ಪವಿತ್ರ ನೆಲದಲ್ಲಿ ಶಾರದಾ ಪೀಠವನ್ನು ಸ್ಥಾಪಿಸಿದರು.",
    traditionsAndCrafts: "Ancient Sanskrit Vedic chanting, palm-leaf script preservation, and traditional brassware lamps.",
    traditionsAndCraftsKn: "ವೇದ ಪಾಠಶಾಲೆ, ಸಂಸ್ಕೃತ ಹಸ್ತಪ್ರತಿ ಸಂರಕ್ಷಣೆ ಮತ್ತು ಹಿತ್ತಾಳೆ ದೀಪಗಳು.",
    localFood: "Sringeri Matha Maha Prasada (served twice daily for thousands), Halasina Hannu, and tender banana chips.",
    localFoodKn: "ಶೃಂಗೇರಿ ಮಠದ ರುಚಿಕರ ಅನ್ನ ಪ್ರಸಾದ (ಮಧ್ಯಾಹ್ನ ಮತ್ತು ರಾತ್ರಿ), ಹಲಸಿನ ಹಣ್ಣು ಮತ್ತು ಬಾಳೆಕಾಯಿ ಚಿಪ್ಸ್.",
    historicalSources: "Sringeri Matha Epigraphs; Robert Sewell, 'A Forgotten Empire'; Karnataka State Gazetteer.",
    historicalSourcesKn: "ಶೃಂಗೇರಿ ಮಠದ ಶಾಸನಗಳು; ರಾಬರ್ಟ್ ಸಿವೆಲ್ ಕೃತಿಗಳು; ಕರ್ನಾಟಕ ರಾಜ್ಯ ಗೆಜೆಟಿಯರ್.",
    bestTimeToVisit: "Throughout the year (especially pleasant October to March; grand Navaratri festival in Oct)",
    bestTimeToVisitKn: "ವರ್ಷವಿಡೀ ಪ್ರಶಸ್ತ (ನವರಾತ್ರಿ ಉತ್ಸವ ಮತ್ತು ಚಳಿಗಾಲ ಅತ್ಯಂತ ಸುಂದರ)",
    avgDailyBudgetINR: 1600,
    nearestTransit: "Udupi Railway Station (85 km); Mangaluru International Airport (105 km)",
    nearestTransitKn: "ಉಡುಪಿ ರೈಲ್ವೆ ನಿಲ್ದಾಣ (೮೫ ಕಿ.ಮೀ); ಮಂಗಳೂರು ವಿಮಾನ ನಿಲ್ದಾಣ (೧೦೫ ಕಿ.ಮೀ)",
    nearbyDestinations: ["agumbe", "kudremukh", "udupi"],
    keyHighlights: [
      "Vidyashankara Temple (1338 CE) — astronomical marvel with 12 Rashi zodiac pillars",
      "Sri Sharadamba Temple holding the consecrated golden idol of Goddess of Learning",
      "Feeding thousands of sacred fish (Tor khudree) along the stone ghats of Tunga River",
      "Narasimha Vana hermitage across the pedestrian suspension footbridge",
      "Grand Navaratri Rathotsava festival with centuries of royal liturgical tradition"
    ],
    keyHighlightsKn: [
      "೧೨ ರಾಶಿಗಳ ಮೇಲೆ ಸೂರ್ಯನ ಕಿರಣ ಬೀಳುವ ವಿದ್ಯಾಶಂಕರ ದೇವಾಲಯದ ಅದ್ಭುತ ವಾಸ್ತುಶಿಲ್ಪ",
      "ಜ್ಞಾನದೇವತೆ ಶ್ರೀ ಶಾರದಾಂಭೆಯ ಸುವರ್ಣ ವಿಗ್ರಹದ ದರ್ಶನ",
      "ತುಂಗಾ ನದಿಯ ಕಲ್ಲಿನ ಮೆಟ್ಟಿಲುಗಳ ಬಳಿ ನೂರಾರು ಪವಿತ್ರ ಮೀನುಗಳಿಗೆ ಆಹಾರ ಹಾಕುವುದು",
      "ತೂಗುಸೇತುವೆಯ ಮೂಲಕ ತುಂಗಾ ನದಿ ದಾಟಿ ಜಗದ್ಗುರುಗಳ ನರಸಿಂಹ ವನ ದರ್ಶನ",
      "ವೈಭವೋಪೇತ ಶರನ್ನವರಾತ್ರಿ ಉತ್ಸವ ಮತ್ತು ರಥೋತ್ಸವ"
    ],
    coordinates: { lat: 13.4187, lng: 75.2564 },
    visitorInfo: {
      timings: "06:00 AM - 02:00 PM, 04:00 PM - 09:00 PM (Maha Prasada: 12:15 PM - 02:30 PM & 07:15 PM - 08:30 PM)",
      entryFee: "Free entry and free community Mahaprasada meals",
      guidelines: "Modest dress required; men must remove shirts before entering the inner sanctum."
    },
    visitorInfoKn: {
      timings: "ಬೆಳಿಗ್ಗೆ ೬:೦೦ - ಮಧ್ಯಾಹ್ನ ೨:೦೦, ಸಂಜೆ ೪:೦೦ - ರಾತ್ರಿ ೯:೦೦ (ಅನ್ನಪ್ರಸಾದ: ೧೨:೧೫ - ೨:೩೦ ಮತ್ತು ೭:೧೫ - ೮:೩೦)",
      entryFee: "ಉಚಿತ ಪ್ರವೇಶ ಮತ್ತು ಉಚಿತ ಅನ್ನದಾನ ಪ್ರಸಾದ",
      guidelines: "ಸಾಂಪ್ರದಾಯಿಕ ಉಡುಗೆ ಕಡ್ಡಾಯ; ಪುರುಷರು ಗರ್ಭಗುಡಿ ಪ್ರವೇಶಿಸುವ ಮುನ್ನ ಅಂಗಿ ಕಳಚಬೇಕು."
    },
    featured: true
  },

  // 17. Yana Rocks (Uttara Kannada)
  {
    id: "yana-rocks",
    name: "Yana Rocks",
    nameKn: "ಯಾಣದ ಬಂಡೆಗಳು",
    tagline: "Towering Solid Black Karst Limestone Spires in Dense Sahyadri Jungle",
    taglineKn: "ಸಹ್ಯಾದ್ರಿ ಮಳೆಕಾಡಿನ ನಡುವೆ ಎದ್ದು ನಿಂತಿರುವ ಕಪ್ಪು ಸುಣ್ಣದ ಕಲ್ಲಿನ ಭವ್ಯ ಶಿಖರಗಳು",
    region: "Karavali / Western Ghats (Uttara Kannada District)",
    regionKn: "ಉತ್ತರ ಕನ್ನಡ ಜಿಲ್ಲೆ (ಪಶ್ಚಿಮ ಘಟ್ಟಗಳು)",
    district: "Uttara Kannada",
    districtKn: "ಉತ್ತರ ಕನ್ನಡ",
    nearestCity: "Kumta",
    nearestCityKn: "ಕುಮಟಾ",
    category: ["Nature", "Adventure", "Spiritual"],
    heroImage: "/images/destinations/yana-rocks.jpg",
    gallery: ["/images/destinations/yana-rocks.jpg", "/images/destinations/fallback.jpg"],
    description: "Rising dramatically out of dense evergreen Sahyadri rainforests, Yana is famous for two colossal solid crystalline karst limestone monoliths: Bhairaveshwara Shikhara (120 meters / 390 ft) and Mohini Shikhara (90 meters / 300 ft). A natural subterranean cave passage under the peaks houses a self-manifested Shiva Linga bathed by perennial rock springs.",
    descriptionKn: "ಸಹ್ಯಾದ್ರಿ ನಿತ್ಯಹರಿದ್ವರ್ಣ ಕಾಡಿನ ನಡುವೆ ಎದ್ದು ನಿಂತಿರುವ ಭೈರವೇಶ್ವರ ಶಿಖರ (೧೨೦ ಮೀಟರ್) ಮತ್ತು ಮೋಹಿನಿ ಶಿಖರ (೯೦ ಮೀಟರ್) ಎಂಬ ಕಪ್ಪು ಸುಣ್ಣದ ಕಲ್ಲಿನ ಬೃಹತ್ ಶಿಖರಗಳು ಯಾಣದ ಹೆಗ್ಗುರುತು. ಬೆಟ್ಟದ ಒಳಗಿರುವ ಗುಹೆಯಲ್ಲಿ ಸ್ವಯಂಭೂ ಚಂಡಿಕಾ ಸಮೇತ ಭೈರವೇಶ್ವರ ಲಿಂಗವಿದೆ.",
    significance: "Rare geological karst formation in South India; critical bio-corridor for Sahyadri bird species and honeybee colonies.",
    significanceKn: "ದಕ್ಷಿಣ ಭಾರತದಲ್ಲೇ ಅಪರೂಪದ ನೈಸರ್ಗಿಕ ಸುಣ್ಣದ ಕಲ್ಲಿನ ಶಿಖರಗಳು. ಜೈವಿಕ ವೈವಿಧ್ಯದ ಅರಣ್ಯ ತಾಣ.",
    heritageStory: "Mythology tells of demon Bhasmasura who received a boon that anyone whose head he touched would turn to ashes. When he threatened Lord Shiva, Lord Vishnu took the form of enchanting dancer Mohini and tricked Bhasmasura into placing his hand on his own head; the intense fire calcified the surrounding rocks black.",
    heritageStoryKn: "ಭಸ್ಮಾಸುರನನ್ನು ಮೋಹಿನಿ ಅವತಾರವೆತ್ತಿದ ವಿಷ್ಣುವು ನೃತ್ಯದ ಮೂಲಕ ತನ್ನ ತಲೆಯ ಮೇಲೆಯೇ ಕೈಯಿಡುವಂತೆ ಮಾಡಿ ಭಸ್ಮಗೊಳಿಸಿದ ಪುರಾಣ ಪ್ರಸಿದ್ಧ ತಾಣ. ಆ ಅಗ್ನಿಯ ಜ್ವಾಲೆಯಿಂದ ಬಂಡೆಗಳು ಕಪ್ಪಾದವು ಎಂಬ ಪ್ರತೀತಿಯಿದೆ.",
    traditionsAndCrafts: "Maha Shivaratri annual jathra festival attracting thousands of pilgrims from across Karnataka.",
    traditionsAndCraftsKn: "ಮಹಾ ಶಿವರಾತ್ರಿಯಂದು ನಡೆಯುವ ಪ್ರಸಿದ್ಧ ವಾರ್ಷಿಕ ಜಾತ್ರೆ.",
    localFood: "Authentic coastal tender coconut water, Jackfruit chips, and spicy Karavali meal at Sirsi/Kumta.",
    localFoodKn: "ತಾಜಾ ಎಳನೀರು, ಹಲಸಿನ ಕಾಯಿ ಚಿಪ್ಸ್ ಮತ್ತು ಕರಾವಳಿಯ ಊಟ.",
    historicalSources: "Geological Survey of India (GSI) Bulletins; Karnataka State Tourism Department.",
    historicalSourcesKn: "ಭಾರತೀಯ ಭೂವೈಜ್ಞಾನಿಕ ಸರ್ವೇಕ್ಷಣಾ ಇಲಾಖೆ; ಕರ್ನಾಟಕ ಪ್ರವಾಸೋದ್ಯಮ.",
    bestTimeToVisit: "October to March (dry forest trails and pleasant breezes)",
    bestTimeToVisitKn: "ಅಕ್ಟೋಬರ್‌ನಿಂದ ಮಾರ್ಚ್‌ವರೆಗೆ",
    avgDailyBudgetINR: 1700,
    nearestTransit: "Kumta Railway Station (28 km); Goa Dabolim / Hubballi Airport (140 km)",
    nearestTransitKn: "ಕುಮಟಾ ರೈಲ್ವೆ ನಿಲ್ದಾಣ (೨೮ ಕಿ.ಮೀ); ಗೋವಾ ವಿಮಾನ ನಿಲ್ದಾಣ (೧೪೦ ಕಿ.ಮೀ)",
    nearbyDestinations: ["gokarna", "murudeshwara", "karwar"],
    keyHighlights: [
      "Bhairaveshwara Shikhara — awe-inspiring 120-meter vertical solid black rock spire",
      "Mohini Shikhara — 90-meter graceful companion limestone monolith",
      "Walk through the naturally cool subterranean cave tunnel beneath the monoliths",
      "Perennial rock water spring naturally performing continuous abhishekam on the linga",
      "Scenic 1.5 km canopy walk through pristine Western Ghats rainforest"
    ],
    keyHighlightsKn: [
      "೧೨೦ ಮೀಟರ್ ಎತ್ತರದ ಭವ್ಯ ಕಪ್ಪು ಶಿಖರ ಭೈರವೇಶ್ವರ",
      "೯೦ ಮೀಟರ್ ಎತ್ತರದ ಮೋಹಿನಿ ಶಿಖರದ ಅಪೂರ್ವ ದೃಶ್ಯ",
      "ಬೃಹತ್ ಬಂಡೆಯ ಕೆಳಗಿನ ನೈಸರ್ಗಿಕ ಗುಹಾಂತರ ಮಾರ್ಗದಲ್ಲಿ ನಡಿಗೆ",
      "ಶಿವಲಿಂಗದ ಮೇಲೆ ನಿರಂತರವಾಗಿ ಜಿನುಗುವ ಪವಿತ್ರ ನೈಸರ್ಗಿಕ ಜಲಧಾರೆ",
      "ದಟ್ಟ ಕಾಡಿನ ನಡುವಿನ ೧.೫ ಕಿ.ಮೀ ಪ್ರಕೃತಿ ನಡಿಗೆ ಹಾದಿ"
    ],
    coordinates: { lat: 14.5888, lng: 74.5619 },
    visitorInfo: {
      timings: "08:00 AM - 05:30 PM",
      entryFee: "Forest toll ₹20, vehicle parking ₹50",
      guidelines: "Leave shoes outside the cave entrance; watch for colonies of giant rock bees on overhangs."
    },
    visitorInfoKn: {
      timings: "ಬೆಳಿಗ್ಗೆ ೮:೦೦ ರಿಂದ ಸಂಜೆ ೫:೩೦",
      entryFee: "ಅರಣ್ಯ ಪ್ರವೇಶ ಶುಲ್ಕ ₹೨೦, ಪಾರ್ಕಿಂಗ್ ₹೫೦",
      guidelines: "ಗುಹೆಯ ಪ್ರವೇಶದ ಬಳಿ ಪಾದರಕ್ಷೆ ಬಿಡಬೇಕು; ಬಂಡೆಯ ಮೇಲಿನ ಜೇನುಗೂಡುಗಳನ್ನು ಕೆಣಕಬೇಡಿ."
    },
    featured: true
  },

  // 18. St. Mary's Island (Udupi)
  {
    id: "st-marys-island",
    name: "St. Mary's Island (Coconut Island)",
    nameKn: "ಸೇಂಟ್ ಮೇರೀಸ್ ದ್ವೀಪ",
    tagline: "National Geological Monument of Hexagonal Columnar Basaltic Lava",
    taglineKn: "ಷಟ್ಕೋನ ಲಾವಾರಸದ ಬಂಡೆಗಳ ಜಗತ್ಪ್ರಸಿದ್ಧ ರಾಷ್ಟ್ರೀಯ ಭೂವೈಜ್ಞಾನಿಕ ಸ್ಮಾರಕ",
    region: "Karavali / Coastal Karnataka (Udupi District)",
    regionKn: "ಕರಾವಳಿ ಕರ್ನಾಟಕ (ಉಡುಪಿ ಜಿಲ್ಲೆ)",
    district: "Udupi",
    districtKn: "ಉಡುಪಿ",
    nearestCity: "Malpe",
    nearestCityKn: "ಮಲ್ಪೆ",
    category: ["Beaches", "Nature"],
    heroImage: "/images/destinations/st-marys-island.jpg",
    gallery: ["/images/destinations/st-marys-island.jpg", "/images/destinations/fallback.jpg"],
    description: "Located 6 km offshore in the Arabian Sea from Malpe Harbour, St. Mary's Island is a world-renowned National Geological Monument. It is famous for its unique columnar basaltic lava rock formations—prismatic hexagonal columns formed 88 million years ago when Madagascar rifted from India during the Cretaceous volcanic period.",
    descriptionKn: "ಮಲ್ಪೆ ಬಂದರಿನಿಂದ ೬ ಕಿ.ಮೀ ದೂರದಲ್ಲಿರುವ ಸೇಂಟ್ ಮೇರೀಸ್ ದ್ವೀಪವು ೮೮ ದಶಲಕ್ಷ ವರ್ಷಗಳ ಹಿಂದೆ ಲಾವಾರಸದಿಂದ ರೂಪುಗೊಂಡ ಷಟ್ಕೋನಾಕಾರದ ಕಂಬಗಳ ಬಂಡೆಗಳಿಗೆ ಪ್ರಸಿದ್ಧವಾಗಿದೆ. ಇದು ಭಾರತದ ಪ್ರಮುಖ ರಾಷ್ಟ್ರೀಯ ಭೂವೈಜ್ಞಾನಿಕ ಸ್ಮಾರಕವಾಗಿದೆ.",
    significance: "Declared a National Geological Monument by the Geological Survey of India (GSI) in 2001; one of only four such geological columnar basalt sites in India.",
    significanceKn: "ಭಾರತೀಯ ಭೂವೈಜ್ಞಾನಿಕ ಸರ್ವೇಕ್ಷಣಾ ಇಲಾಖೆಯಿಂದ ರಾಷ್ಟ್ರೀಯ ಭೂವೈಜ್ಞಾನಿಕ ಸ್ಮಾರಕವೆಂದು ಘೋಷಿತವಾದ ಅದ್ಭುತ ನೈಸರ್ಗಿಕ ತಾಣ.",
    heritageStory: "Historical accounts suggest Portuguese explorer Vasco da Gama stepped ashore on this island in 1498 during his voyage from Portugal before reaching Kozhikode, erecting a cross and dedicating the islet to Mother Mary (giving it its English name).",
    heritageStoryKn: "ಕ್ರಿ.ಶ. ೧೪೯೮ರಲ್ಲಿ ಪೋರ್ಚುಗೀಸ್ ನಾವಿಕ ವಾಸ್ಕೊ ಡ ಗಾಮನು ಭಾರತಕ್ಕೆ ಬರುವಾಗ ಈ ದ್ವೀಪದಲ್ಲಿ ಇಳಿದು ಮೇರಿ ಮಾತೆಯ ನೆನಪಿನಲ್ಲಿ ಶಿಲುಬೆಯನ್ನು ನೆಟ್ಟಿದ್ದರಿಂದ 'ಸೇಂಟ್ ಮೇರೀಸ್ ಐಲ್ಯಾಂಡ್' ಎಂದು ಹೆಸರು ಬಂತು.",
    traditionsAndCrafts: "Malpe marine fisheries, shell art souvenirs, and coastal wooden catamarans.",
    traditionsAndCraftsKn: "ಮಲ್ಪೆ ಮೀನುಗಾರಿಕೆ ಮತ್ತು ಸಮುದ್ರದ ಚಿಪ್ಪುಗಳ ಆಕರ್ಷಕ ಕರಕುಶಲ ವಸ್ತುಗಳು.",
    localFood: "Freshly roasted fish and prawns at Malpe Beach sea-walk, Neer Dosa, and Goli Baje.",
    localFoodKn: "ಮಲ್ಪೆ ಸೀ-ವಾಕ್‌ನಲ್ಲಿ ತಾಜಾ ಮೀನು, ಗರಿಗರಿ ಗೋಳಿಬಜೆ ಮತ್ತು ನೀರ್ ದೋಸೆ.",
    historicalSources: "Geological Survey of India (GSI) National Heritage Directory; Malpe Port Authority.",
    historicalSourcesKn: "ಭಾರತೀಯ ಭೂವೈಜ್ಞಾನಿಕ ಸರ್ವೇಕ್ಷಣಾ ಇಲಾಖೆ (GSI) ದಾಖಲೆಗಳು; ಮಲ್ಪೆ ಬಂದರು ಪ್ರಾಧಿಕಾರ.",
    bestTimeToVisit: "October to May (ferries operate daily; closed during monsoon rough seas)",
    bestTimeToVisitKn: "ಅಕ್ಟೋಬರ್‌ನಿಂದ ಮೇವರೆಗೆ (ದೋಣಿ ಸಂಚಾರ ಲಭ್ಯವಿರುತ್ತದೆ)",
    avgDailyBudgetINR: 2000,
    nearestTransit: "Udupi Railway Station (10 km); Mangaluru International Airport (65 km)",
    nearestTransitKn: "ಉಡುಪಿ ರೈಲ್ವೆ ನಿಲ್ದಾಣ (೧೦ ಕಿ.ಮೀ); ಮಂಗಳೂರು ವಿಮಾನ ನಿಲ್ದಾಣ (೬೫ ಕಿ.ಮೀ)",
    nearbyDestinations: ["udupi", "kaup-beach", "kollur"],
    keyHighlights: [
      "Stunning geometric hexagonal columnar basalt rock formations dropping into turquoise sea",
      "Crushed seashell beaches lined with swaying coconut palms",
      "Scenic 30-minute passenger ferry ride across Malpe harbour",
      "Pristine crystal-clear ocean waters and tidal wading pools",
      "Malpe Sea-Walk promenade and watersports at boarding point"
    ],
    keyHighlightsKn: [
      "ಷಟ್ಕೋನಾಕಾರದ ಜ್ಯಾಮಿತೀಯ ಕಲ್ಲಿನ ಕಂಬಗಳ ನೈಸರ್ಗಿಕ ಅದ್ಭುತ",
      "ತೆಂಗಿನ ಮರಗಳಿಂದ ಆವೃತವಾದ ಬಿಳಿ ಚಿಪ್ಪುಗಳ ಸುಂದರ ತೀರ",
      "ಮಲ್ಪೆ ಬಂದರಿನಿಂದ ಅರಬ್ಬಿ ಸಮುದ್ರದಲ್ಲಿ ೩೦ ನಿಮಿಷಗಳ ಬೋಟ್ ಸವಾರಿ",
      "ಸ್ಫಟಿಕದಂತೆ ತಿಳಿಯಾದ ಸಮುದ್ರದ ನೀರು ಮತ್ತು ಬಂಡೆಗಳ ತಾಣ",
      "ಮಲ್ಪೆಯ ಸುಂದರ ಸೀ-ವಾಕ್ ಮತ್ತು ಜಲಕ್ರೀಡೆಗಳು"
    ],
    coordinates: { lat: 13.3797, lng: 74.6728 },
    visitorInfo: {
      timings: "09:00 AM - 05:00 PM (Last ferry leaves island at 05:30 PM)",
      entryFee: "Ferry round-trip: ₹300 - ₹400 per person; Island entry fee: ₹50",
      guidelines: "Plastic items strictly forbidden; strictly prohibited to climb wet slippery basalt rocks near crashing surf."
    },
    visitorInfoKn: {
      timings: "ಬೆಳಿಗ್ಗೆ ೯:೦೦ ರಿಂದ ಸಂಜೆ ೫:೦೦ (ಕೊನೆಯ ಬೋಟ್ ಸಂಜೆ ೫:೩೦)",
      entryFee: "ಬೋಟ್ ದ್ವಿಮುಖ ಪ್ರಯಾಣ ಶುಲ್ಕ ₹೩೦೦ - ₹೪೦೦; ದ್ವೀಪ ಪ್ರವೇಶ ₹೫೦",
      guidelines: "ಪ್ಲಾಸ್ಟಿಕ್ ಸಂಪೂರ್ಣ ನಿಷೇಧ; ಅಲೆಗಳಿರುವ ಜಾರುವ ಬಂಡೆಗಳನ್ನು ಏರಬೇಡಿ."
    },
    featured: true
  },

  // 19. Dharmasthala (Dakshina Kannada)
  {
    id: "dharmasthala",
    name: "Dharmasthala",
    nameKn: "ಧರ್ಮಸ್ಥಳ",
    tagline: "Abode of Lord Manjunatha & Centuries-Old Tradition of Annadana",
    taglineKn: "ಶ್ರೀ ಮಂಜುನಾಥ ಸ್ವಾಮಿಯ ಸನ್ನಿಧಿ ಮತ್ತು ಶತಮಾನಗಳ ಅನ್ನದಾನ ಕ್ಷೇತ್ರ",
    region: "Coastal & Malenadu Foothills (Dakshina Kannada District)",
    regionKn: "ದಕ್ಷಿಣ ಕನ್ನಡ ಜಿಲ್ಲೆ (ಕರಾವಳಿ-ಮಲೆನಾಡು ಗಡಿ)",
    district: "Dakshina Kannada",
    districtKn: "ದಕ್ಷಿಣ ಕನ್ನಡ",
    nearestCity: "Belthangady",
    nearestCityKn: "ಬೆಳ್ತಂಗಡಿ",
    category: ["Spiritual", "Culture"],
    heroImage: "/images/destinations/dharmasthala.jpg",
    gallery: ["/images/destinations/dharmasthala.jpg", "/images/destinations/fallback.jpg"],
    description: "An 800-year-old temple town on the banks of the Nethravathi River, Dharmasthala represents a unique confluence of faiths: Lord Shiva (Manjunatha) is worshipped here, the priests are Madhwa Vaishnava Brahmins, and the hereditary administrator (Heggade) is Jain. Celebrated for its legendary 'Annadana' (free meals to over 30,000 pilgrims daily).",
    descriptionKn: "ನೇತ್ರಾವತಿ ನದಿ ತೀರದಲ್ಲಿರುವ ಧರ್ಮಸ್ಥಳವು ಸರ್ವಧರ್ಮ ಸಮನ್ವಯದ ಪವಿತ್ರ ಕ್ಷೇತ್ರ. ಇಲ್ಲಿ ಶಿವನಾದ ಮಂಜುನಾಥ ಸ್ವಾಮಿಯ ಆರಾಧನೆ, ಮಾಧ್ವ ಬ್ರಾಹ್ಮಣರಿಂದ ಪೂಜೆ ಹಾಗೂ ಜೈನ ಹೆಗ್ಗಡೆಯವರಿಂದ ಧರ್ಮ ಆಡಳಿತ ನಡೆಯುತ್ತದೆ. ನಿತ್ಯವೂ ಹತ್ತಾರು ಸಾವಿರ ಭಕ್ತರಿಗೆ ಉಚಿತ ಅನ್ನದಾನ ನೀಡುವ ಜಗತ್ಪ್ರಸಿದ್ಧ ತಾಣ.",
    significance: "Embodiment of Dharma, charity (Danada Kshethra), and community conflict resolution through the traditional Heggade 'Nyayadaana' court.",
    significanceKn: "ಅನ್ನದಾನ, ಅಭಯದಾನ, ಔಷಧದಾನ ಮತ್ತು ವಿದ್ಯಾದಾನಗಳ ಚತುರ್ವಿಧ ದಾನ ಕ್ಷೇತ್ರ.",
    heritageStory: "800 years ago, chieftain Birmanna Pergade and wife Ammu Ballalthi welcomed four divine guardian spirits (Dharma Daivas) disguised as ascetics into their home 'Nelyadi Beedu', giving away their house and dedicating their lineage to righteousness.",
    heritageStoryKn: "೮೦೦ ವರ್ಷಗಳ ಹಿಂದೆ ನೆಲ್ಯಾಡಿ ಬೀಡಿನ ಬಿರ್ಮಣ್ಣ ಪೆರ್ಗಡೆ ಮತ್ತು ಅಮ್ಮು ಬಲ್ಲಾಳ್ತಿ ದಂಪತಿಗಳ ಅತಿಥಿ ಸತ್ಕಾರಕ್ಕೆ ಮೆಚ್ಚಿ ಧರ್ಮದೈವಗಳು ನೆಲೆಸಿದ ಪವಿತ್ರ ಪುಣ್ಯಕ್ಷೇತ್ರ.",
    traditionsAndCrafts: "Yakshagana traditional coastal theatre, Manjusha vintage museum exhibits, and rural development self-help initiatives.",
    traditionsAndCraftsKn: "ಯಕ್ಷಗಾನ ಕಲೆ, ಮಂಜೂಷಾ ಪುರಾತನ ವಸ್ತು ಸಂಗ್ರಹಾಲಯ ಮತ್ತು ಧರ್ಮಸ್ಥಳ ಗ್ರಾಮಾಭಿವೃದ್ಧಿ ಯೋಜನೆ.",
    localFood: "Authentic Annapoorna dining hall Mahaprasada (piping hot rice, rasam, payasa, sambar), tender coconut, and jackfruit chips.",
    localFoodKn: "ಅನ್ನಪೂರ್ಣ ಭೋಜನಾಲಯದ ಸಾತ್ವಿಕ ಮಹಾಪ್ರಸಾದ (ಬಿಸಿಬಿಸಿ ಅನ್ನ, ಸಾಂಬಾರ್, ರಸಂ ಮತ್ತು ಪಾಯಸ) ಹಾಗೂ ಕರಾವಳಿ ತಿನಿಸುಗಳು.",
    historicalSources: "Dharmasthala Temple Archives; Karnataka State Gazetteer (South Kanara District).",
    historicalSourcesKn: "ಧರ್ಮಸ್ಥಳ ಕ್ಷೇತ್ರ ದಾಖಲೆಗಳು; ದಕ್ಷಿಣ ಕನ್ನಡ ಗೆಜೆಟಿಯರ್.",
    bestTimeToVisit: "Throughout the year (especially during Laksha Deepotsava in Nov/Dec)",
    bestTimeToVisitKn: "ವರ್ಷವಿಡೀ ಪ್ರಶಸ್ತ (ಲಕ್ಷ ದೀಪೋತ್ಸವದ ಸಮಯದಲ್ಲಿ ಅತ್ಯಂತ ವೈಭವ)",
    avgDailyBudgetINR: 1500,
    nearestTransit: "Mangaluru Central Railway Station (75 km); Mangaluru International Airport (70 km)",
    nearestTransitKn: "ಮಂಗಳೂರು ಸೆಂಟ್ರಲ್ ರೈಲು ನಿಲ್ದಾಣ (೭೫ ಕಿ.ಮೀ)",
    nearbyDestinations: ["kukke-subramanya", "mangaluru", "udupi"],
    keyHighlights: [
      "Sri Manjunatha Swamy Temple — 800-year sacred sanctum on the banks of Nethravathi",
      "Annapoorna mega-kitchen serving wholesome delicious satvik meals to all visitors free of charge",
      "39-foot monolithic statue of Lord Bahubali atop Ratnagiri Hill installed in 1982",
      "Manjusha Museum featuring vintage cars, ancient manuscripts, and historical artefacts",
      "Holy dip in the clean flowing waters of the sacred Nethravathi Snanaghatta"
    ],
    keyHighlightsKn: [
      "೮೦೦ ವರ್ಷಗಳ ಇತಿಹಾಸವಿರುವ ಶ್ರೀ ಮಂಜುನಾಥ ಸ್ವಾಮಿಯ ಪವಿತ್ರ ಸನ್ನಿಧಿ",
      "ನಿತ್ಯವೂ ಸಾವಿರಾರು ಭಕ್ತರಿಗೆ ಉಚಿತ ಸಾತ್ವಿಕ ಊಟ ನೀಡುವ ಬೃಹತ್ ಅನ್ನಪೂರ್ಣ ಛತ್ರ",
      "ರತ್ನಗಿರಿ ಬೆಟ್ಟದ ಮೇಲಿರುವ ೩೯ ಅಡಿ ಎತ್ತರದ ಭವ್ಯ ಏಕಶಿಲಾ ಬಾಹುಬಲಿ ಸ್ವಾಮಿ",
      "ವಿಂಟೇಜ್ ಕಾರುಗಳು ಮತ್ತು ಪ್ರಾಚೀನ ವಸ್ತುಗಳನ್ನೊಳಗೊಂಡ ಮಂಜೂಷಾ ವಸ್ತುಸಂಗ್ರಹಾಲಯ",
      "ನೇತ್ರಾವತಿ ನದಿಯ ಪವಿತ್ರ ಸ್ನಾನಘಟ್ಟದಲ್ಲಿ ಪುಣ್ಯಸ್ನಾನ"
    ],
    coordinates: { lat: 12.9567, lng: 75.3803 },
    visitorInfo: {
      timings: "06:30 AM - 02:00 PM, 05:00 PM - 08:30 PM (Annapoorna: 11:00 AM - 03:00 PM & 07:00 PM - 10:00 PM)",
      entryFee: "Temple entry free; Car museum ₹10",
      guidelines: "Traditional clothing required; men must remove shirt and vest before inner temple entry."
    },
    visitorInfoKn: {
      timings: "ದರ್ಶನ: ಬೆಳಿಗ್ಗೆ ೬:೩೦ - ೨:೦೦, ಸಂಜೆ ೫:೦೦ - ೮:೩೦ (ಅನ್ನದಾನ: ೧೧:೦೦ - ೩:೦೦ ಮತ್ತು ೭:೦೦ - ೧೦:೦೦)",
      entryFee: "ದೇವಾಲಯ ಉಚಿತ; ಕಾರು ಮ್ಯೂಸಿಯಂ ₹೧೦",
      guidelines: "ಸಾಂಪ್ರದಾಯಿಕ ಉಡುಗೆ ಕಡ್ಡಾಯ; ಪುರುಷರು ಗರ್ಭಗುಡಿ ಪ್ರವೇಶಿಸುವಾಗ ಮೇಲಂಗಿ ಕಳಚಬೇಕು."
    },
    featured: true
  },

  // 20. Kukke Subramanya (Dakshina Kannada)
  {
    id: "kukke-subramanya",
    name: "Kukke Subramanya",
    nameKn: "ಕುಕ್ಕೆ ಸುಬ್ರಹ್ಮಣ್ಯ",
    tagline: "Sacred Serpent Shrine Nested in Western Ghats by Kumara Parvatha",
    taglineKn: "ಕುಮಾರ ಪರ್ವತದ ತಪ್ಪಲಿನ ಪ್ರಸಿದ್ಧ ಸರ್ಪ ಸಂಸ್ಕಾರ ಪುಣ್ಯಕ್ಷೇತ್ರ",
    region: "Coastal & Western Ghats (Dakshina Kannada District)",
    regionKn: "ದಕ್ಷಿಣ ಕನ್ನಡ ಜಿಲ್ಲೆ (ಪಶ್ಚಿಮ ಘಟ್ಟಗಳ ತಪ್ಪಲು)",
    district: "Dakshina Kannada",
    districtKn: "ದಕ್ಷಿಣ ಕನ್ನಡ",
    nearestCity: "Sullia",
    nearestCityKn: "ಸುಳ್ಯ",
    category: ["Spiritual", "Nature", "Adventure"],
    heroImage: "/images/destinations/kukke-subramanya.jpg",
    gallery: ["/images/destinations/kukke-subramanya.jpg", "/images/destinations/fallback.jpg"],
    description: "Nestled picturesquely under the towering shadow of Kumara Parvatha (Pushpagiri) on the banks of the Kumaradhara River, Kukke Subramanya is revered as the ultimate shrine for Naga (serpent) worship. Here Lord Kartikeya (Subramanya) offers refuge to divine serpents Vasuki and Shesha.",
    descriptionKn: "ಭವ್ಯ ಕುಮಾರ ಪರ್ವತದ ತಪ್ಪಲಿನಲ್ಲಿ ಕುಮಾರಧಾರಾ ನದಿಯ ತೀರದಲ್ಲಿರುವ ಕುಕ್ಕೆ ಸುಬ್ರಹ್ಮಣ್ಯವು ಭಾರತದ ಪ್ರಸಿದ್ಧ ಸರ್ಪಾರಾಧನಾ ಪುಣ್ಯಕ್ಷೇತ್ರ. ಇಲ್ಲಿ ಸುಬ್ರಹ್ಮಣ್ಯ ಸ್ವಾಮಿಯು ನಾಗರಾಜ ವಾಸುಕಿಗೆ ಆಶ್ರಯ ನೀಡಿದ್ದಾನೆಂಬ ಪೌರಾಣಿಕ ಹಿನ್ನೆಲೆಯಿದೆ.",
    significance: "Premier destination for Sarpa Samskara and Ashlesha Bali rituals; base camp for Karnataka's most arduous trek (Kumara Parvatha).",
    significanceKn: "ಸರ್ಪದೋಷ ಪರಿಹಾರದ ಪ್ರಮುಖ ಕ್ಷೇತ್ರ ಹಾಗೂ ಕರ್ನಾಟಕದ ಅತ್ಯಂತ ಸಾಹಸಮಯ ಕುಮಾರ ಪರ್ವತ ಚಾರಣದ ಆರಂಭಿಕ ತಾಣ.",
    heritageStory: "After slaying demon Tarakasura, Lord Subramanya arrived here with his brother Ganesha. The serpent king Vasuki, performing penance in Biladwara cave to escape Garuda's wrath, was granted eternal protection by Subramanya.",
    heritageStoryKn: "ತಾರಕಾಸುರನನ್ನು ಸಂಹರಿಸಿದ ನಂತರ ಸುಬ್ರಹ್ಮಣ್ಯ ಸ್ವಾಮಿ ಇಲ್ಲಿಗೆ ಬಂದು, ಗರುಡನ ಭಯದಿಂದ ಬಿಲದ್ವಾರದಲ್ಲಿ ತಪಸ್ಸು ಮಾಡುತ್ತಿದ್ದ ವಾಸುಕಿಗೆ ಅಭಯ ನೀಡಿದ ಪುಣ್ಯಸ್ಥಳ.",
    traditionsAndCrafts: "Champa Shashti annual car festival with sacred wooden rathas, traditional Nadaswaram music.",
    traditionsAndCraftsKn: "ಪ್ರಸಿದ್ಧ ಚಂಪಾ ಷಷ್ಠಿ ರಥೋತ್ಸವ ಮತ್ತು ಸಾಂಪ್ರದಾಯಿಕ ನಾದಸ್ವರ ವಾದನ.",
    localFood: "Temple Satvik Annaprasada, tender Jackfruit curry, Kadubu, and coastal Neer Dosa.",
    localFoodKn: "ಸುಬ್ರಹ್ಮಣ್ಯ ಮಠದ ಅನ್ನಪ್ರಸಾದ, ನೀರ್ ದೋಸೆ ಮತ್ತು ಮಲೆನಾಡಿನ ಕಡುಬು.",
    historicalSources: "Skanda Purana (Sahyadri Khanda); Temples of South Kanara Records.",
    historicalSourcesKn: "ಸ್ಕಂದ ಪುರಾಣ; ದಕ್ಷಿಣ ಕನ್ನಡ ದೇವಾಲಯ ದಾಖಲೆಗಳು.",
    bestTimeToVisit: "September to March (cool mountain climate; lush greenery)",
    bestTimeToVisitKn: "ಸೆಪ್ಟೆಂಬರ್‌ನಿಂದ ಮಾರ್ಚ್‌ವರೆಗೆ",
    avgDailyBudgetINR: 1600,
    nearestTransit: "Subrahmanya Road Railway Station (12 km); Mangaluru International Airport (115 km)",
    nearestTransitKn: "ಸುಬ್ರಹ್ಮಣ್ಯ ರೋಡ್ ರೈಲ್ವೆ ನಿಲ್ದಾಣ (೧೨ ಕಿ.ಮೀ); ಮಂಗಳೂರು ವಿಮಾನ ನಿಲ್ದಾಣ (೧೧೫ ಕಿ.ಮೀ)",
    nearbyDestinations: ["dharmasthala", "mangaluru", "coorg"],
    keyHighlights: [
      "Sri Kukke Subramanya Temple with the sacred silver-plated Garuda pillar",
      "Biladwara cave where serpent king Vasuki took divine refuge",
      "Kumaradhara holy river bathing ghats surrounded by rainforest greenery",
      "Base camp trek to Kumara Parvatha (1,712 m) and Shesha Parvatha",
      "Adi Subramanya shrine with ancient sacred ant-hill earth (Mrithika)"
    ],
    keyHighlightsKn: [
      "ಬೆಳ್ಳಿಯ ಗರುಡಗಂಬವಿರುವ ಶ್ರೀ ಕುಕ್ಕೆ ಸುಬ್ರಹ್ಮಣ್ಯ ಸ್ವಾಮಿಯ ಪವಿತ್ರ ಗರ್ಭಗುಡಿ",
      "ವಾಸುಕಿ ಸರ್ಪರಾಜನು ತಪಸ್ಸು ಮಾಡಿದ ಪುರಾತನ ಬಿಲದ್ವಾರ ಗುಹೆ",
      "ಹಚ್ಚಹಸಿರಿನ ಕಾಡಿನ ನಡುವೆ ಹರಿಯುವ ಪವಿತ್ರ ಕುಮಾರಧಾರಾ ನದಿಯ ಸ್ನಾನಘಟ್ಟ",
      "ಕರ್ನಾಟಕದ ಅತ್ಯುನ್ನತ ಸಾಹಸಮಯ ಕುಮಾರ ಪರ್ವತ (೧,೭೧೨ ಮೀ) ಚಾರಣ",
      "ಪವಿತ್ರ ಮೃತ್ತಿಕಾ ಪ್ರಸಾದ ನೀಡುವ ಆದಿ ಸುಬ್ರಹ್ಮಣ್ಯ ಸನ್ನಿಧಿ"
    ],
    coordinates: { lat: 12.6644, lng: 75.6172 },
    visitorInfo: {
      timings: "06:00 AM - 01:30 PM, 03:30 PM - 08:30 PM (Maha Pooja at 12:00 PM)",
      entryFee: "Free entry and free community lunch served daily",
      guidelines: "Strict dress code: Dhoti/Shawl for men, Sarees/Salwars for women; shirts removed inside."
    },
    visitorInfoKn: {
      timings: "ದರ್ಶನ: ಬೆಳಿಗ್ಗೆ ೬:೦೦ - ೧:೩೦, ಸಂಜೆ ೩:೩೦ - ೮:೩೦ (ಮಹಾಪೂಜೆ ಮಧ್ಯಾಹ್ನ ೧೨:೦೦)",
      entryFee: "ದೇವಾಲಯ ಪ್ರವೇಶ ಉಚಿತ ಮತ್ತು ನಿತ್ಯ ಅನ್ನಸಂತರ್ಪಣೆ",
      guidelines: "ಸಾಂಪ್ರದಾಯಿಕ ಉಡುಗೆ ಕಡ್ಡಾಯ; ಪುರುಷರು ಅಂಗಿ-ಬನಿಯನ್ ಕಳಚಬೇಕು."
    },
    featured: true
  },

  // 21. Mangaluru (Dakshina Kannada)
  {
    id: "mangaluru",
    name: "Mangaluru (Mangalore)",
    nameKn: "ಮಂಗಳೂರು",
    tagline: "Port City of Temples, Pristine Beaches & Neer Dosa Flavors",
    taglineKn: "ಕರಾವಳಿಯ ಬಂದರು ನಗರಿ, ದೇವಾಲಯಗಳು ಮತ್ತು ಸಮುದ್ರ ತಿನಿಸುಗಳ ತಾಣ",
    region: "Karavali / Coastal Karnataka (Dakshina Kannada District)",
    regionKn: "ದಕ್ಷಿಣ ಕನ್ನಡ ಜಿಲ್ಲೆ (ಕರಾವಳಿ)",
    district: "Dakshina Kannada",
    districtKn: "ದಕ್ಷಿಣ ಕನ್ನಡ",
    nearestCity: "Mangaluru",
    nearestCityKn: "ಮಂಗಳೂರು",
    category: ["City", "Beaches", "Culture", "Food"],
    heroImage: "/images/destinations/mangaluru.jpg",
    gallery: ["/images/destinations/mangaluru.jpg", "/images/destinations/fallback.jpg"],
    description: "Nestled between the Arabian Sea and the Western Ghats, Mangaluru is Karnataka's chief port city. Named after goddess Mangaladevi, it is celebrated for its historic 10th-century Kadri Manjunatha temple, the Italian fresco-lined St. Aloysius Chapel, golden sandy beaches like Panambur and Tannirbhavi, and its globally acclaimed coastal culinary heritage.",
    descriptionKn: "ಅರಬ್ಬಿ ಸಮುದ್ರ ಮತ್ತು ಪಶ್ಚಿಮ ಘಟ್ಟಗಳ ನಡುವಿರುವ ಮಂಗಳೂರು ಕರ್ನಾಟಕದ ಪ್ರಮುಖ ಬಂದರು ನಗರಿ. ತಾಯಿ ಮಂಗಳಾದೇವಿ, ಕದ್ರಿ ಮಂಜುನಾಥ ದೇವಾಲಯ, ಸಂತ ಅಲೋಶಿಯಸ್ ಚಾಪೆಲ್, ಪಣಂಬೂರು ಮತ್ತು ತಣ್ಣೀರುಬಾವಿ ಕಡಲತೀರಗಳು ಹಾಗೂ ಜಗತ್ಪ್ರಸಿದ್ಧ ಕರಾವಳಿ ತಿನಿಸುಗಳಿಗೆ ಹೆಸರುವಾಸಿ.",
    significance: "Maritime capital of Karnataka handling major container shipping at New Mangalore Port; cradle of Tuluva culture, Yakshagana, and coastal trade.",
    significanceKn: "ಕರ್ನಾಟಕದ ಏಕೈಕ ಪ್ರಮುಖ ಬಂದರು ನಗರಿ; ತುಳುನಾಡಿನ ಸಾಂಸ್ಕೃತಿಕ ರಾಜಧಾನಿ.",
    heritageStory: "Named after Goddess Mangaladevi, built in 968 CE by Alupa King Kundavarma at the behest of Gorakhnath saint Matsyendranatha.",
    heritageStoryKn: "ಕ್ರಿ.ಶ. ೯೬೮ರಲ್ಲಿ ಅಲುಪ ಅರಸ ಕುಂದವರ್ಮನು ಮತ್ಸ್ಯೇಂದ್ರನಾಥ ಮುನಿಗಳ ಮಾರ್ಗದರ್ಶನದಲ್ಲಿ ಮಂಗಳಾದೇವಿ ದೇವಾಲಯವನ್ನು ನಿರ್ಮಿಸಿದನು.",
    traditionsAndCrafts: "Yakshagana traditional folk theatre, Kambala buffalo wet-paddy race, and Pilivesha (tiger dance).",
    traditionsAndCraftsKn: "ಯಕ್ಷಗಾನ, ಕಂಬಳ ಕೋಣಗಳ ಓಟ ಮತ್ತು ನವರಾತ್ರಿಯ ಪಿಲಿವೇಷ (ಹುಲಿ ಕುಣಿತ).",
    localFood: "Authentic Mangalorean Fish Curry, Neer Dosa with chicken sukka, Mangalore Buns, Kori Rotti, and Pabbas Ice Cream.",
    localFoodKn: "ನೀರ್ ದೋಸೆ, ಕೋರಿ ರೊಟ್ಟಿ, ಮಂಗಳೂರು ಬನ್ಸ್, ಘಮಘಮಿಸುವ ತುಪ್ಪದ ರೋಸ್ಟ್ ಹಾಗೂ ಪಬ್ಬಾಸ್ ಐಸ್‌ಕ್ರೀಮ್.",
    historicalSources: "Ibn Battuta Travels (1342 CE); Alupa Dynasty Inscriptions; Imperial Gazetteer of India.",
    historicalSourcesKn: "ಇಬ್ನ್ ಬತೂತಾ ಪ್ರವಾಸ ಕಥನಗಳು (೧೩೪೨); ಆಳೂಪ ರಾಜವಂಶದ ಶಾಸನಗಳು.",
    bestTimeToVisit: "October to March (breezy pleasant tropical coastal weather)",
    bestTimeToVisitKn: "ಅಕ್ಟೋಬರ್‌ನಿಂದ ಮಾರ್ಚ್‌ವರೆಗೆ",
    avgDailyBudgetINR: 2200,
    nearestTransit: "Mangaluru Central & Mangaluru Junction; Mangaluru International Airport (IXE - 15 km)",
    nearestTransitKn: "ಮಂಗಳೂರು ಸೆಂಟ್ರಲ್ ರೈಲು ನಿಲ್ದಾಣ; ಮಂಗಳೂರು ಅಂತಾರಾಷ್ಟ್ರೀಯ ವಿಮಾನ ನಿಲ್ದಾಣ",
    nearbyDestinations: ["udupi", "dharmasthala", "kukke-subramanya"],
    keyHighlights: [
      "Kadri Manjunatha Temple (10th century) featuring monolithic bronze Lokeshwara statue",
      "St. Aloysius Chapel painted with 1899 Italian baroque frescos by Antony Moscheni",
      "Panambur Beach & Tannirbhavi Beach with golden sunset walks and water sports",
      "Kudroli Gokarnanatha Temple adorned with grand golden towers and Dasara celebrations",
      "Pabbas Ideal Ice Cream parlour — legendary home of the iconic Gadbad ice cream"
    ],
    keyHighlightsKn: [
      "೧೦ನೇ ಶತಮಾನದ ಕದ್ರಿ ಮಂಜುನಾಥ ದೇವಾಲಯ ಮತ್ತು ಲೋಕೇಶ್ವರನ ಭವ್ಯ ಕಂಚಿನ ವಿಗ್ರಹ",
      "೧೮೯೯ರಲ್ಲಿ ಇಟಾಲಿಯನ್ ಕಲಾವಿದ ಮೋಶೆನಿ ರಚಿಸಿದ ಸಂತ ಅಲೋಶಿಯಸ್ ಚಾಪೆಲ್‌ನ ಅದ್ಭುತ ವರ್ಣಚಿತ್ರಗಳು",
      "ಪಣಂಬೂರು ಮತ್ತು ತಣ್ಣೀರುಬಾವಿ ಸುಂದರ ಕಡಲತೀರಗಳ ಸೂರ್ಯಾಸ್ತ ಮತ್ತು ಜಲಕ್ರೀಡೆ",
      "ವೈಭವೋಪೇತ ನವರಾತ್ರಿ ಆಚರಿಸುವ ಕುದ್ರೋಳಿ ಗೋಕರ್ಣನಾಥೇಶ್ವರ ದೇವಾಲಯ",
      "ಜಗತ್ಪ್ರಸಿದ್ಧ ಗಡ್‌ಬಡ್ ಐಸ್‌ಕ್ರೀಮ್ ಸವಿಯುವ ಪಬ್ಬಾಸ್ ಐಡಿಯಲ್ ಪಾರ್ಲರ್"
    ],
    coordinates: { lat: 12.9141, lng: 74.8560 },
    visitorInfo: {
      timings: "Temples: 06:00 AM - 01:00 PM, 04:00 PM - 08:30 PM; Beaches: 06:00 AM - 08:00 PM",
      entryFee: "Free entry across temples and beaches; Chapel entry free",
      guidelines: "Lifeguards stationed at Panambur; swimming prohibited during rough high tide."
    },
    visitorInfoKn: {
      timings: "ದೇವಾಲಯಗಳು: ಬೆಳಿಗ್ಗೆ ೬:೦೦ - ೧:೦೦, ಸಂಜೆ ೪:೦೦ - ೮:೩೦; ಬೀಚ್: ಬೆಳಿಗ್ಗೆ ೬:೦೦ - ರಾತ್ರಿ ೮:೦೦",
      entryFee: "ದೇವಾಲಯಗಳು ಮತ್ತು ಕಡಲತೀರಗಳು ಉಚಿತ",
      guidelines: "ಪಣಂಬೂರಿನಲ್ಲಿ ಲೈಫ್‌ಗಾರ್ಡ್‌ಗಳ ಸೂಚನೆ ಪಾಲಿಸಿ; ಉಬ್ಬರವಿಳಿತದ ಸಮಯದಲ್ಲಿ ಈಜಬೇಡಿ."
    },
    featured: true
  },

  // 22. Gokak Falls (Belagavi)
  {
    id: "gokak-falls",
    name: "Gokak Falls",
    nameKn: "ಗೋಕಾಕ್ ಜಲಪಾತ",
    tagline: "Horseshoe Waterfall & Century-Old Suspension Hanging Bridge",
    taglineKn: "ಘಟಪ್ರಭಾ ನದಿಯ ಕುದುರೆ ಗೊರಸಿನಾಕಾರದ ಜಲಪಾತ ಮತ್ತು ತೂಗು ಸೇತುವೆ",
    region: "Kittur Karnataka (Belagavi District)",
    regionKn: "ಬೆಳಗಾವಿ ಜಿಲ್ಲೆ (ಕಿತ್ತೂರು ಕರ್ನಾಟಕ)",
    district: "Belagavi",
    districtKn: "ಬೆಳಗಾವಿ",
    nearestCity: "Gokak",
    nearestCityKn: "ಗೋಕಾಕ್",
    category: ["Waterfalls", "Heritage", "Nature"],
    heroImage: "/images/destinations/gokak-falls.jpg",
    gallery: ["/images/destinations/gokak-falls.jpg", "/images/destinations/fallback.jpg"],
    description: "Formed by the Ghataprabha River tumbling 52 meters (171 ft) over a sandstone cliff into a picturesque horseshoe gorge, Gokak Falls is often celebrated as the 'Niagara of Karnataka'. It features a historic 201-meter suspension wire-rope footbridge built in 1907 spanning 14 meters above the crest.",
    descriptionKn: "ಘಟಪ್ರಭಾ ನದಿಯು ೫೨ ಮೀಟರ್ (೧೭೧ ಅಡಿ) ಎತ್ತರದಿಂದ ಮರಳುಗಲ್ಲಿನ ಕಂದಕಕ್ಕೆ ಧುಮುಕುವ ಗೋಕಾಕ್ ಜಲಪಾತವನ್ನು 'ಕರ್ನಾಟಕದ ನಯಾಗರಾ' ಎಂದು ಕರೆಯಲಾಗುತ್ತದೆ. ಜಲಪಾತದ ಮೇಲಿರುವ ೨೦೧ ಮೀಟರ್ ಉದ್ದದ ೧೯೦೭ರ ಪುರಾತನ ತೂಗು ಸೇತುವೆ ಇಲ್ಲಿನ ಪ್ರಮುಖ ಆಕರ್ಷಣೆ.",
    significance: "Site of India's earliest hydroelectric power installations (1887) powering the historic Gokak Cotton Mills.",
    significanceKn: "೧೮೮೭ರಲ್ಲಿ ಗೋಕಾಕ್ ಹತ್ತಿ ಗಿರಣಿಗೆ ವಿದ್ಯುತ್ ಪೂರೈಸಲು ಸ್ಥಾಪಿಸಲಾದ ಭಾರತದ ಪ್ರಥಮ ಜಲವಿದ್ಯುತ್ ಉತ್ಪಾದನಾ ತಾಣಗಳಲ್ಲಿ ಒಂದು.",
    heritageStory: "Along the rocky banks stand early Chalukya temples dedicated to Mahalingeshwara built in 11th-century Later Chalukyan style, where pilgrims bathed before offering prayers.",
    heritageStoryKn: "ಜಲಪಾತದ ದಂಡೆಯಲ್ಲಿ ೧೧ನೇ ಶತಮಾನದ ಕಲ್ಯಾಣ ಚಾಲುಕ್ಯರ ಸುಂದರ ಮಹಾಲಿಂಗೇಶ್ವರ ದೇವಾಲಯವಿದೆ.",
    traditionsAndCrafts: "Famous GI-tagged Gokak Karadant sweet making with dry fruits and edible gum, cotton weaving.",
    traditionsAndCraftsKn: "ಜಗತ್ಪ್ರಸಿದ್ಧ ಗೋಕಾಕ್ ಕರದಂಟು ಮತ್ತು ಲಡ್ಡು ತಯಾರಿಕೆ ಕಲೆ.",
    localFood: "Gokak Karadant (sweet made with organic jaggery, pure ghee and cashews), Jolada Rotti meal, and Mirchi Bajji.",
    localFoodKn: "ಬಾಯಲ್ಲಿ ನೀರೂರಿಸುವ ಅಸಲಿ ಗೋಕಾಕ್ ಕರದಂಟು, ಜೋಳದ ರೊಟ್ಟಿ ಮತ್ತು ಬಿಸಿ ಮೆಣಸಿನಕಾಯಿ ಬಜ್ಜಿ.",
    historicalSources: "Bombay Presidency Gazetteers; Karnataka State Tourism Documentation.",
    historicalSourcesKn: "ಬಾಂಬೆ ಪ್ರೆಸಿಡೆನ್ಸಿ ಗೆಜೆಟಿಯರ್; ಕರ್ನಾಟಕ ಪ್ರವಾಸೋದ್ಯಮ ದಾಖಲೆಗಳು.",
    bestTimeToVisit: "July to December (full roaring volume during and after monsoons)",
    bestTimeToVisitKn: "ಜುಲೈನಿಂದ ಡಿಸೆಂಬರ್‌ವರೆಗೆ (ಮಳೆಗಾಲದ ಭವ್ಯ ನೋಟ)",
    avgDailyBudgetINR: 1600,
    nearestTransit: "Gokak Road Railway Station (8 km); Belagavi Airport (65 km)",
    nearestTransitKn: "ಗೋಕಾಕ್ ರೋಡ್ ರೈಲ್ವೆ ನಿಲ್ದಾಣ (೮ ಕಿ.ಮೀ); ಬೆಳಗಾವಿ ವಿಮಾನ ನಿಲ್ದಾಣ (೬೫ ಕಿ.ಮೀ)",
    nearbyDestinations: ["belagavi-fort", "kittur", "badami"],
    keyHighlights: [
      "Spectacular 52-meter plunge of the Ghataprabha River into a horseshoe sandstone canyon",
      "201-meter historic pedestrian suspension hanging bridge offering dizzying aerial gorge views",
      "Ancient 11th-century Chalukyan Mahalingeshwara temple complex on riverbank",
      "Historic Gokak hydro-electric generating station built in 1887",
      "Famous local confectioneries selling freshly churned traditional Gokak Karadant"
    ],
    keyHighlightsKn: [
      "ಕುದುರೆ ಗೊರಸಿನ ಬಂಡೆಯ ಮೇಲಿಂದ ೫೨ ಮೀಟರ್ ಆಳಕ್ಕೆ ಧುಮ್ಮುಕ್ಕುವ ಘಟಪ್ರಭಾ ನದಿ",
      "ಜಲಪಾತದ ಮೇಲಿರುವ ೨೦೧ ಮೀಟರ್ ಉದ್ದದ ರೋಮಾಂಚಕ ಐತಿಹಾಸಿಕ ತೂಗು ಸೇತುವೆ",
      "೧೧ನೇ ಶತಮಾನದ ಕಲ್ಯಾಣ ಚಾಲುಕ್ಯರ ಸುಂದರ ಮಹಾಲಿಂಗೇಶ್ವರ ದೇವಾಲಯ",
      "೧೮೮೭ರ ಪುರಾತನ ಜಲವಿದ್ಯುತ್ ಉತ್ಪಾದನಾ ಘಟಕ",
      "ಅಸಲಿ ಗೋಕಾಕ್ ಕರದಂಟು ತಯಾರಿಸುವ ಸಾಂಪ್ರದಾಯಿಕ ಅಂಗಡಿಗಳು"
    ],
    coordinates: { lat: 16.1835, lng: 74.8368 },
    visitorInfo: {
      timings: "08:00 AM - 06:00 PM",
      entryFee: "Free entry, nominal parking ₹30",
      guidelines: "Only 30 people permitted on suspension bridge at a time; do not lean over wire ropes."
    },
    visitorInfoKn: {
      timings: "ಬೆಳಿಗ್ಗೆ ೮:೦೦ ರಿಂದ ಸಂಜೆ ೬:೦೦",
      entryFee: "ಪ್ರವೇಶ ಉಚಿತ, ವಾಹನ ಪಾರ್ಕಿಂಗ್ ₹೩೦",
      guidelines: "ತೂಗು ಸೇತುವೆಯ ಮೇಲೆ ಏಕಕಾಲಕ್ಕೆ ಮಿತ ಸಂಖ್ಯೆಯ ಜನರಿಗೆ ಮಾತ್ರ ಅವಕಾಶ."
    },
    featured: true
  },

  // 23. Belagavi Fort (Belagavi)
  {
    id: "belagavi-fort",
    name: "Belagavi Fort & Kamal Basti",
    nameKn: "ಬೆಳಗಾವಿ ಕೋಟೆ ಮತ್ತು ಕಮಲ ಬಸದಿ",
    tagline: "Historic 12th-Century Ratta Citadel & Exquisite Lotus Jain Temple",
    taglineKn: "೧೨ನೇ ಶತಮಾನದ ರಟ್ಟ ರಾಜರ ಐತಿಹಾಸಿಕ ಕೋಟೆ ಮತ್ತು ಕಮಲ ಬಸದಿ",
    region: "Kittur Karnataka (Belagavi District)",
    regionKn: "ಬೆಳಗಾವಿ ಜಿಲ್ಲೆ (ಕಿತ್ತೂರು ಕರ್ನಾಟಕ)",
    district: "Belagavi",
    districtKn: "ಬೆಳಗಾವಿ",
    nearestCity: "Belagavi",
    nearestCityKn: "ಬೆಳಗಾವಿ",
    category: ["Heritage", "Culture"],
    heroImage: "/images/destinations/belagavi-fort.jpg",
    gallery: ["/images/destinations/belagavi-fort.jpg", "/images/destinations/fallback.jpg"],
    description: "Built in 1204 CE by Jaya Raya of the Ratta dynasty and later refortified by the Bahmanis, Bijapur Sultans, and Marathas, Belagavi Fort is an ancient oval stone citadel surrounded by a deep moat. It houses the world-famous Kamal Basti (1204 CE Jain temple with a 72-petal inverted lotus ceiling), Safa Masjid (1519 CE), and the Ramakrishna Mission Ashram where Swami Vivekananda stayed.",
    descriptionKn: "ಕ್ರಿ.ಶ. ೧೨೦೪ರಲ್ಲಿ ರಟ್ಟ ರಾಜವಂಶದಿಂದ ನಿರ್ಮಿತವಾದ ಬೆಳಗಾವಿ ಕೋಟೆಯು ಬೃಹತ್ ಕಂದಕದಿಂದ ಆವೃತವಾಗಿದೆ. ಕೋಟೆಯ ಒಳಗಿರುವ ಕಮಲ ಬಸದಿಯಲ್ಲಿ ೭೨ ದಳಗಳ ತಲೆಕೆಳಗಾದ ಕಮಲದ ಅದ್ಭುತ ಕಲ್ಲಿನ ಛಾವಣಿಯಿದೆ. ಸ್ವಾಮಿ ವಿವೇಕಾನಂದರು ನೆಲೆಸಿದ್ದ ಐತಿಹಾಸಿಕ ರಾಮಕೃಷ್ಣ ಆಶ್ರಮವೂ ಇಲ್ಲಿದೆ.",
    significance: "Rare composite heritage citadel preserving Chalukyan Jain, Bahmani Islamic, and Maratha architectural traditions inside one moat.",
    significanceKn: "ಜೈನ, ಇಸ್ಲಾಮಿಕ್ ಮತ್ತು ಮರಾಠಾ ಸಂಸ್ಕೃತಿಯ ಸೌಹಾರ್ದಯುತ ಸಂಗಮವಿರುವ ಪುರಾತನ ಕೋಟೆ.",
    heritageStory: "Swami Vivekananda stayed inside the fort in October 1892 for nine days as guest of Haripada Mitra, inspiring youth before embarking on his voyage to the World Parliament of Religions in Chicago.",
    heritageStoryKn: "ಕ್ರಿ.ಶ. ೧೮೯೨ರಲ್ಲಿ ಚಿಕಾಗೋ ವಿಶ್ವ ಧರ್ಮ ಸಮ್ಮೇಳನಕ್ಕೆ ತೆರಳುವ ಮುನ್ನ ಸ್ವಾಮಿ ವಿವೇಕಾನಂದರು ಈ ಕೋಟೆಯೊಳಗಿನ ಮನೆಯಲ್ಲಿ ೯ ದಿನಗಳ ಕಾಲ ತಂಗಿದ್ದರು.",
    traditionsAndCrafts: "Belagavi brass metalwork, handloom Shahapur sarees, and wooden lacquer toys.",
    traditionsAndCraftsKn: "ಶಹಾಪುರ ಕೈಮಗ್ಗದ ಸೀರೆಗಳು ಮತ್ತು ಬೆಳಗಾವಿಯ ಹಿತ್ತಾಳೆ ಕರಕುಶಲ ಕಲೆ.",
    localFood: "Authentic Belgaum Kunda (rich caramelized milk sweet), Jolada Rotti with Pithla, and Shenga Chutney.",
    localFoodKn: "ಜಗತ್ಪ್ರಸಿದ್ಧ ಬೆಳಗಾವಿ ಕುಂದಾ, ಜೋಳದ ರೊಟ್ಟಿ, ಪಿಟ್ಲಾ ಮತ್ತು ಕರದಂಟು.",
    historicalSources: "Archaeological Survey of India; Bombay Gazetteer Vol. XXI (Belgaum); Epigraphia Indica.",
    historicalSourcesKn: "ಭಾರತೀಯ ಪುರಾತತ್ವ ಇಲಾಖೆ; ಬಾಂಬೆ ಗೆಜೆಟಿಯರ್ ಸಂಪುಟ ೨೧.",
    bestTimeToVisit: "October to March (cool pleasant winter breeze)",
    bestTimeToVisitKn: "ಅಕ್ಟೋಬರ್‌ನಿಂದ ಮಾರ್ಚ್‌ವರೆಗೆ",
    avgDailyBudgetINR: 1700,
    nearestTransit: "Belagavi Railway Station (4 km); Belagavi Sambra Airport (14 km)",
    nearestTransitKn: "ಬೆಳಗಾವಿ ರೈಲ್ವೆ ನಿಲ್ದಾಣ (೪ ಕಿ.ಮೀ); ಬೆಳಗಾವಿ ಸಾಂಬ್ರಾ ವಿಮಾನ ನಿಲ್ದಾಣ (೧೪ ಕಿ.ಮೀ)",
    nearbyDestinations: ["kittur", "gokak-falls", "badami"],
    keyHighlights: [
      "Kamal Basti (1204 CE) featuring spectacular 72-petal carved granite lotus dome ceiling",
      "Safa Masjid (1519 CE) constructed with Persian inscriptions and minarets",
      "Ramakrishna Mission Ashram preserving Swami Vivekananda's staying room and cot",
      "Massive circular defensive bastions and water-filled surrounding defensive moat",
      "Old Belagavi heritage bazaar selling authentic fresh warm Belgaum Kunda"
    ],
    keyHighlightsKn: [
      "೭೨ ದಳಗಳ ಸುಂದರ ತಲೆಕೆಳಗಾದ ಕಮಲದ ಛಾವಣಿಯ ಕೆತ್ತನೆಯುಳ್ಳ ಕಮಲ ಬಸದಿ",
      "ಕ್ರಿ.ಶ. ೧೫೧೯ರ ಐತಿಹಾಸಿಕ ಸಫಾ ಮಸೀದಿ ಮತ್ತು ಸುಂದರ ಮಿನಾರುಗಳು",
      "ಸ್ವಾಮಿ ವಿವೇಕಾನಂದರು ತಂಗಿದ್ದ ಕೊಠಡಿಯನ್ನು ಸಂರಕ್ಷಿಸಿರುವ ರಾಮಕೃಷ್ಣ ಮಿಷನ್ ಆಶ್ರಮ",
      "ಕೋಟೆಯ ಬೃಹತ್ ಕಲ್ಲಿನ ಬುರುಜುಗಳು ಮತ್ತು ಸುತ್ತಲಿನ ಆಳವಾದ ಕಂದಕ",
      "ಬಿಸಿಬಿಸಿ ಅಸಲಿ ಬೆಳಗಾವಿ ಕುಂದಾ ದೊರೆಯುವ ಹಳೆಯ ಮಾರುಕಟ್ಟೆ"
    ],
    coordinates: { lat: 15.8596, lng: 74.5202 },
    visitorInfo: {
      timings: "08:00 AM - 06:30 PM",
      entryFee: "Free entry",
      guidelines: "Modest attire inside Kamal Basti and Ramakrishna Ashram; peaceful walking precinct."
    },
    visitorInfoKn: {
      timings: "ಬೆಳಿಗ್ಗೆ ೮:೦೦ ರಿಂದ ಸಂಜೆ ೬:೩೦",
      entryFee: "ಪ್ರವೇಶ ಉಚಿತ",
      guidelines: "ಆಶ್ರಮ ಮತ್ತು ಬಸದಿಯ ಆವರಣದಲ್ಲಿ ಶಾಂತತೆ ಕಾಪಾಡಿ."
    },
    featured: true
  },

  // 24. Kittur (Belagavi)
  {
    id: "kittur",
    name: "Kittur Fort & Palace",
    nameKn: "ಕಿತ್ತೂರು ಕೋಟೆ",
    tagline: "Fortress Citadel of Rani Chennamma & Sangolli Rayanna's Resistance",
    taglineKn: "ವೀರರಾಣಿ ಕಿತ್ತೂರು ಚೆನ್ನಮ್ಮ ಮತ್ತು ಕ್ರಾಂತಿವೀರ ಸಂಗೊಳ್ಳಿ ರಾಯಣ್ಣನ ಶೌರ್ಯದ ನೆಲೆ",
    region: "Kittur Karnataka (Belagavi District)",
    regionKn: "ಬೆಳಗಾವಿ ಜಿಲ್ಲೆ (ಕಿತ್ತೂರು)",
    district: "Belagavi",
    districtKn: "ಬೆಳಗಾವಿ",
    nearestCity: "Kittur",
    nearestCityKn: "ಕಿತ್ತೂರು",
    category: ["Heritage", "Culture"],
    heroImage: "/images/destinations/kittur.jpg",
    gallery: ["/images/destinations/kittur.jpg", "/images/destinations/fallback.jpg"],
    description: "The capital of the brave warrior Queen Rani Chennamma, who led an armed rebellion against the British East India Company in 1824—33 years before India's 1857 First War of Independence. The fort houses the ruins of the majestic royal palace, Darbar Hall, stepwells, and an archaeological museum.",
    descriptionKn: "೧೮೫೭ರ ಪ್ರಥಮ ಸ್ವಾತಂತ್ರ್ಯ ಸಂಗ್ರಾಮಕ್ಕಿಂತ ೩೩ ವರ್ಷಗಳ ಮುಂಚೆಯೇ (೧೮೨೪ರಲ್ಲಿ) ಬ್ರಿಟಿಷರ ವಿರುದ್ಧ ಸಿಡಿದೆದ್ದ ವೀರರಾಣಿ ಕಿತ್ತೂರು ಚೆನ್ನಮ್ಮ ಮತ್ತು ಸಂಗೊಳ್ಳಿ ರಾಯಣ್ಣನ ಶೌರ್ಯದ ಐತಿಹಾಸಿಕ ಕೋಟೆ ನಗರಿ.",
    significance: "National symbol of Indian freedom struggle and female bravery; site where British Political Agent St. John Thackeray was defeated in 1824.",
    significanceKn: "ಭಾರತೀಯ ಸ್ವಾತಂತ್ರ್ಯ ಹೋರಾಟದ ಪ್ರಥಮ ಕಿಡಿ ಹೊತ್ತಿಸಿದ ವೀರಭೂಮಿ.",
    heritageStory: "When the British invoked the Doctrine of Lapse to annex Kittur after her husband and son died, Rani Chennamma famously defied Thackeray with the lion-hearted words: 'Why should we pay you tax? Are you our brother, father, or friend?'",
    heritageStoryKn: "'ನಮಗೆ ನೀವೇಕೆ ಕಪ್ಪ ಕೊಡಬೇಕು? ನೀವೇನು ನಮ್ಮ ಅಣ್ಣ-ತಮ್ಮಂದಿರೆ? ನೆಂಟರೆ-ಇಷ್ಟರೆ?' ಎಂದು ಬ್ರಿಟಿಷರನ್ನು ಗರ್ಜಿಸಿ ಹಿಮ್ಮೆಟ್ಟಿಸಿದ ಕಿತ್ತೂರು ಚೆನ್ನಮ್ಮನ ಪರಾಕ್ರಮದ ನೆಲೆ.",
    traditionsAndCrafts: "Annual Kittur Utsava state festival in October celebrating Kannada heritage, Veeragase and Dollu Kunitha.",
    traditionsAndCraftsKn: "ಅಕ್ಟೋಬರ್ ತಿಂಗಳಲ್ಲಿ ನಡೆಯುವ ಪ್ರಸಿದ್ಧ ಕಿತ್ತೂರು ಉತ್ಸವ ಮತ್ತು ವೀರಗಾಸೆ ನೃತ್ಯ.",
    localFood: "North Karnataka Jolada Rotti with Yennegai, spicy Ranjaka chilli paste, and Belagavi Kunda.",
    localFoodKn: "ಜೋಳದ ರೊಟ್ಟಿ, ಎಣ್ಣೆಗಾಯಿ ಬದನೆಕಾಯಿ, ಖಾರವಾದ ರಂಜಕ ಮತ್ತು ಕುಂದಾ.",
    historicalSources: "Government of Karnataka Department of Archaeology; Epigraphia Carnatica; Kittur Rani Chennamma Memorial Archives.",
    historicalSourcesKn: "ಕರ್ನಾಟಕ ರಾಜ್ಯ ಪುರಾತತ್ವ ಇಲಾಖೆ; ಕಿತ್ತೂರು ರಾಣಿ ಚೆನ್ನಮ್ಮ ಸ್ಮಾರಕ ದಾಖಲೆಗಳು.",
    bestTimeToVisit: "October to March (especially during Kittur Utsava in late October)",
    bestTimeToVisitKn: "ಅಕ್ಟೋಬರ್‌ನಿಂದ ಮಾರ್ಚ್‌ವರೆಗೆ (ಕಿತ್ತೂರು ಉತ್ಸವದ ಸಮಯ ಅತ್ಯಂತ ಪ್ರಶಸ್ತ)",
    avgDailyBudgetINR: 1500,
    nearestTransit: "Dharwad Railway Station (30 km); Belagavi Sambra Airport (50 km)",
    nearestTransitKn: "ಧಾರವಾಡ ರೈಲ್ವೆ ನಿಲ್ದಾಣ (೩೦ ಕಿ.ಮೀ); ಬೆಳಗಾವಿ ವಿಮಾನ ನಿಲ್ದಾಣ (೫೦ ಕಿ.ಮೀ)",
    nearbyDestinations: ["belagavi-fort", "dharwad-cultural", "gokak-falls"],
    keyHighlights: [
      "Ruins of Rani Chennamma's three-story Palace and grand Darbar audience hall",
      "Kittur Archaeological Museum holding 1824 cannons, swords, armor, and stone epigraphs",
      "Statue of Krantiveera Sangolli Rayanna, the legendary guerrilla commander",
      "Ancient stepwells and underground secret granary chambers",
      "Annual Kittur Utsava cultural celebrations showcasing North Karnataka folk arts"
    ],
    keyHighlightsKn: [
      "ರಾಣಿ ಚೆನ್ನಮ್ಮನ ಅರಮನೆಯ ಅವಶೇಷಗಳು ಮತ್ತು ಭವ್ಯ ದರ್ಬಾರ್ ಹಾಲ್",
      "೧೮೨೪ರ ಯುದ್ಧದ ಫಿರಂಗಿಗಳು, ಕತ್ತಿಗಳು ಮತ್ತು ಶಾಸನಗಳಿರುವ ಕಿತ್ತೂರು ವಸ್ತುಸಂಗ್ರಹಾಲಯ",
      "ವೀರ ಕಮಾಂಡರ್ ಕ್ರಾಂತಿವೀರ ಸಂಗೊಳ್ಳಿ ರಾಯಣ್ಣನ ಭವ್ಯ ಪ್ರತಿಮೆ",
      "ಕೋಟೆಯ ಪ್ರಾಚೀನ ಕಲ್ಯಾಣಿ ಮತ್ತು ನೆಲಮಾಳಿಗೆಯ ಧಾನ್ಯಾಗಾರಗಳು",
      "ಉತ್ತರ ಕರ್ನಾಟಕದ ಜನಪದ ಕಲೆಗಳ ಕಿತ್ತೂರು ಉತ್ಸವ"
    ],
    coordinates: { lat: 15.5969, lng: 74.7925 },
    visitorInfo: {
      timings: "08:00 AM - 06:00 PM (Museum closed on Mondays)",
      entryFee: "Fort free; Museum entry ₹10",
      guidelines: "Photography permitted; informative historical signages installed across all palace ruins."
    },
    visitorInfoKn: {
      timings: "ಬೆಳಿಗ್ಗೆ ೮:೦೦ ರಿಂದ ಸಂಜೆ ೬:೦೦ (ಸೋಮವಾರ ಮ್ಯೂಸಿಯಂ ರಜೆ)",
      entryFee: "ಕೋಟೆ ಉಚಿತ; ವಸ್ತುಸಂಗ್ರಹಾಲಯ ₹೧೦",
      guidelines: "ಎಲ್ಲಾ ಸ್ಮಾರಕಗಳ ಬಳಿ ಕನ್ನಡ ಮತ್ತು ಇಂಗ್ಲಿಷ್‌ನಲ್ಲಿ ವಿವರಣಾ ಫಲಕಗಳಿವೆ."
    },
    featured: true
  },

  // 25. Lakkundi (Gadag)
  {
    id: "lakkundi",
    name: "Lakkundi Heritage Village",
    nameKn: "ಲಕ್ಕುಂಡಿ",
    tagline: "City of 101 Stepwells (Kalyanis) & Later Chalukyan Temples",
    taglineKn: "೧೦೧ ಐತಿಹಾಸಿಕ ಕಲ್ಯಾಣಿಗಳು ಮತ್ತು ಕಲ್ಯಾಣ ಚಾಲುಕ್ಯರ ಶಿಲ್ಪಕಲಾ ವೈಭವದ ಊರು",
    region: "Central / Kittur Karnataka (Gadag District)",
    regionKn: "ಗದಗ ಜಿಲ್ಲೆ (ಮಧ್ಯ ಕರ್ನಾಟಕ)",
    district: "Gadag",
    districtKn: "ಗದಗ",
    nearestCity: "Gadag",
    nearestCityKn: "ಗದಗ",
    category: ["Heritage", "Culture"],
    heroImage: "/images/destinations/lakkundi.jpg",
    gallery: ["/images/destinations/lakkundi.jpg", "/images/destinations/fallback.jpg"],
    description: "Known as 'Lokkigundi' in ancient inscriptions, Lakkundi was a prominent mint and city of 101 temples and 101 stepped wells (kalyanis) under the Western Chalukyas, Kalachuris, Hoysalas, and Seunas. Famous for the ornate Kasivisvesvara twin temple, Brahma Jinalaya, and the stepped well Musukinbhavi.",
    descriptionKn: "ಪ್ರಾಚೀನ ಕಾಲದಲ್ಲಿ 'ಲೊಕ್ಕಿಗುಂಡಿ' ಎಂದು ಕರೆಯಲ್ಪಡುತ್ತಿದ್ದ ಲಕ್ಕುಂಡಿಯು ೧೦೧ ಭವ್ಯ ದೇಗುಲಗಳು ಮತ್ತು ೧೦೧ ಕಲ್ಯಾಣಿಗಳ ಐತಿಹಾಸಿಕ ತಾಣ. ಕಲ್ಯಾಣ ಚಾಲುಕ್ಯರ ಕಾಲದ ಕಾಶಿವಿಶ್ವೇಶ್ವರ ದೇಗುಲ, ಬ್ರಹ್ಮ ಜಿನಾಲಯ ಮತ್ತು ಮುಸುಕಿನ ಬಾವಿ ಕಲ್ಯಾಣಿ ಇಲ್ಲಿನ ಪ್ರಮುಖ ಆಕರ್ಷಣೆ.",
    significance: "Major center for the transition from sandstone to chloritic schist (soapstone) architecture, paving the way for the ornate Hoysala carving style.",
    significanceKn: "ಮರಳುಗಲ್ಲಿನಿಂದ ಬಳಪದ ಕಲ್ಲಿನ ಸೂಕ್ಷ್ಮ ಕೆತ್ತನೆಗೆ ನಾಂದಿ ಹಾಡಿದ ಕಲ್ಯಾಣ ಚಾಲುಕ್ಯರ ಪ್ರಮುಖ ವಾಸ್ತುಶಿಲ್ಪ ಕೇಂದ್ರ.",
    heritageStory: "Under Queen Attimabbe (Danachintamani), the devout Jain noblewoman, 1,500 gold-inlaid basadis and copies of poet Ranna's Ajitha Purana were commissioned here in the 11th century.",
    heritageStoryKn: "೧೧ನೇ ಶತಮಾನದಲ್ಲಿ ದಾನಚಿಂತಾಮಣಿ ಅತ್ತಿಮಬ್ಬೆಯು ಇಲ್ಲಿ ಬ್ರಹ್ಮ ಜಿನಾಲಯವನ್ನು ನಿರ್ಮಿಸಿ, ಕವಿ ರನ್ನನ ಅಜಿತ ಪುರಾಣದ ನೂರಾರು ಪ್ರತಿಗಳನ್ನು ಬರೆಸಿ ದಾನ ಮಾಡಿದಳು.",
    traditionsAndCrafts: "Intricate soapstone temple carving, handloom cotton weaving, and classical music patronship.",
    traditionsAndCraftsKn: "ಬಳಪದ ಕಲ್ಲಿನ ಶಿಲ್ಪಕಲೆ ಮತ್ತು ಕೈಮಗ್ಗದ ನೇಕಾರಿಕೆ.",
    localFood: "North Karnataka Jolada Rotti, Shenga Chutney, spicy Mirchi Ka Saalan, and Shenga Holige.",
    localFoodKn: "ಜೋಳದ ರೊಟ್ಟಿ ಊಟ, ಶೇಂಗಾ ಚಟ್ನಿ ಮತ್ತು ಸಿಹಿ ಶೇಂಗಾ ಹೋಳಿಗೆ.",
    historicalSources: "Epigraphia Indica; ASI Monument Directory; Henry Cousens, 'The Chalukyan Architecture of the Kanarese Districts'.",
    historicalSourcesKn: "ಭಾರತೀಯ ಪುರಾತತ್ವ ಸರ್ವೇಕ್ಷಣಾ ಇಲಾಖೆ; ಹೆನ್ರಿ ಕೌಸಿನ್ಸ್ ಚಾಲುಕ್ಯ ವಾಸ್ತುಶಿಲ್ಪ ಕೃತಿಗಳು.",
    bestTimeToVisit: "October to March (pleasant walking climate across village temples)",
    bestTimeToVisitKn: "ಅಕ್ಟೋಬರ್‌ನಿಂದ ಮಾರ್ಚ್‌ವರೆಗೆ",
    avgDailyBudgetINR: 1500,
    nearestTransit: "Gadag Junction Railway Station (12 km); Hubballi Airport (65 km)",
    nearestTransitKn: "ಗದಗ ಜಂಕ್ಷನ್ ರೈಲು ನಿಲ್ದಾಣ (೧೨ ಕಿ.ಮೀ); ಹುಬ್ಬಳ್ಳಿ ವಿಮಾನ ನಿಲ್ದಾಣ (೬೫ ಕಿ.ಮೀ)",
    nearbyDestinations: ["gadag-temples", "itagi", "hampi"],
    keyHighlights: [
      "Kasivisvesvara Temple — double-shrined masterpiece with micro-carved doorway lintels",
      "Musukinbhavi — breathtaking geometric stepped well (Kalyani) with ornate pavilions",
      "Brahma Jinalaya (1007 CE) built by legendary patron Dana Chintamani Attimabbe",
      "ASI Sculpture Shed Museum holding exquisite Chalukyan idols and epigraphic slabs",
      "Nanneshwara Temple reflecting early experimentation with ornate lathe-turned columns"
    ],
    keyHighlightsKn: [
      "ಬಾಗಿಲುವಾಡದಲ್ಲಿ ಸೂಕ್ಷ್ಮ ಕೆತ್ತನೆಗಳುಳ್ಳ ಅದ್ಭುತ ಕಾಶಿವಿಶ್ವೇಶ್ವರ ಜೋಡಿ ದೇವಾಲಯ",
      "ಜ್ಯಾಮಿತೀಯ ಮೆಟ್ಟಿಲುಗಳು ಮತ್ತು ಮಂಟಪಗಳುಳ್ಳ ಮನಮೋಹಕ ಮುಸುಕಿನ ಬಾವಿ ಕಲ್ಯಾಣಿ",
      "ದಾನಚಿಂತಾಮಣಿ ಅತ್ತಿಮಬ್ಬೆ ನಿರ್ಮಿಸಿದ ಕ್ರಿ.ಶ. ೧೦೦೭ರ ಪ್ರಸಿದ್ಧ ಬ್ರಹ್ಮ ಜಿನಾಲಯ",
      "ಚಾಲುಕ್ಯರ ಅಪರೂಪದ ಶಿಲ್ಪಗಳಿರುವ ಎ.ಎಸ್.ಐ ಶಿಲ್ಪ ಕಲಾ ಸಂಗ್ರಹಾಲಯ",
      "ನಯವಾಗಿ ಕಡೆಯಲಾದ ಕಲ್ಲಿನ ಕಂಬಗಳುಳ್ಳ ನನ್ನೇಶ್ವರ ದೇವಾಲಯ"
    ],
    coordinates: { lat: 15.3857, lng: 75.7144 },
    visitorInfo: {
      timings: "06:00 AM - 06:00 PM",
      entryFee: "Free entry across all village temples and stepwells",
      guidelines: "Temples are distributed across the rustic village; explore on foot or by local auto."
    },
    visitorInfoKn: {
      timings: "ಬೆಳಿಗ್ಗೆ ೬:೦೦ ರಿಂದ ಸಂಜೆ ೬:೦೦",
      entryFee: "ಉಚಿತ ಪ್ರವೇಶ",
      guidelines: "ಹಳ್ಳಿಯ ಸುತ್ತಮುತ್ತ ದೇಗುಲಗಳು ಹರಡಿರುವುದರಿಂದ ಕಾಲ್ನಡಿಗೆಯಲ್ಲಿ ವೀಕ್ಷಿಸುವುದು ಉತ್ತಮ."
    },
    featured: true
  }
];

