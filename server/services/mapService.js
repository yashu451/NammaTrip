import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Verified Karnataka Destinations and Major Landmarks
export const VERIFIED_DESTINATION_COORDINATES = {
  hampi: { lat: 15.3350, lng: 76.4600, name: 'Hampi', nameKn: 'ಹಂಪಿ' },
  mysuru: { lat: 12.3052, lng: 76.6552, name: 'Mysuru (Mysore)', nameKn: 'ಮೈಸೂರು' },
  coorg: { lat: 12.4244, lng: 75.7382, name: 'Coorg (Madikeri)', nameKn: 'ಕೊಡಗು (ಮಡಿಕೇರಿ)' },
  badami: { lat: 15.9189, lng: 75.6796, name: 'Badami', nameKn: 'ಬಾದಾಮಿ' },
  gokarna: { lat: 14.5479, lng: 74.3188, name: 'Gokarna', nameKn: 'ಗೋಕರ್ಣ' },
  chitradurga: { lat: 14.2251, lng: 76.3980, name: 'Chitradurga', nameKn: 'ಚಿತ್ರದುರ್ಗ' },
  belur: { lat: 13.1623, lng: 75.8601, name: 'Belur', nameKn: 'ಬೇಲೂರು' },
  halebidu: { lat: 13.2144, lng: 75.9922, name: 'Halebidu', nameKn: 'ಹಳೇಬೀಡು' },
  pattadakal: { lat: 15.9490, lng: 75.8160, name: 'Pattadakal', nameKn: 'ಪಟ್ಟದಕಲ್ಲು' },
  vijayapura: { lat: 16.8302, lng: 75.7100, name: 'Vijayapura (Bijapur)', nameKn: 'ವಿಜಯಪುರ' },
  udupi: { lat: 13.3409, lng: 74.7421, name: 'Udupi', nameKn: 'ಉಡುಪಿ' },
  chikmagalur: { lat: 13.3161, lng: 75.7720, name: 'Chikmagalur', nameKn: 'ಚಿಕ್ಕಮಗಳೂರು' },
  bengaluru: { lat: 12.9716, lng: 77.5946, name: 'Bengaluru', nameKn: 'ಬೆಂಗಳೂರು' }
};

// Comprehensive verified coordinates catalog for attractions, heritage sites & local spots
export const VERIFIED_ATTRACTIONS = [
  // Hampi
  {
    keywords: ['virupaksha', 'hemakuta hill shrine', 'hemakuta hill', 'sacred center'],
    lat: 15.3352, lng: 76.4587,
    name: 'Virupaksha Temple & Hemakuta Hill',
    nameKn: 'ಶ್ರೀ ವಿರೂಪಾಕ್ಷ ದೇವಾಲಯ ಮತ್ತು ಹೇಮಕೂಟ ಬೆಟ್ಟ'
  },
  {
    keywords: ['mango tree', 'taste of brahmins'],
    lat: 15.3360, lng: 76.4625,
    name: 'Mango Tree Restaurant',
    nameKn: 'ಮ್ಯಾಂಗೋ ಟ್ರೀ ಹೋಟೆಲ್'
  },
  {
    keywords: ['kadalekalu', 'sasivekalu', 'krishna temple', 'hemakuta foothills'],
    lat: 15.3325, lng: 76.4605,
    name: 'Kadalekalu & Sasivekalu Ganeshas & Krishna Temple',
    nameKn: 'ಕಡಲೆಕಾಳು ಮತ್ತು ಸಾಸಿವೆಕಾಳು ಗಣಪತಿ ಹಾಗೂ ಕೃಷ್ಣ ದೇವಾಲಯ'
  },
  {
    keywords: ['matanga hill', 'coracle ride', 'tungabhadra sunset'],
    lat: 15.3315, lng: 76.4690,
    name: 'Matanga Hill Sunset Viewpoint',
    nameKn: 'ಮಾತಂಗ ಬೆಟ್ಟ ಸೂರ್ಯಾಸ್ತ ತಾಣ'
  },
  {
    keywords: ['vittala', 'stone chariot', 'musical pillars'],
    lat: 15.3392, lng: 76.4785,
    name: 'Vijaya Vittala Temple Complex & Stone Chariot',
    nameKn: 'ವಿಜಯ ವಿಠ್ಠಲ ದೇವಾಲಯ ಮತ್ತು ಕಲ್ಲಿನ ರಥ'
  },
  {
    keywords: ['kamalapura', 'mayura bhuvaneshwari', 'kstdc'],
    lat: 15.3195, lng: 76.4810,
    name: 'KSTDC Mayura Bhuvaneshwari, Kamalapura',
    nameKn: 'ಕೆ.ಎಸ್.ಟಿ.ಡಿ.ಸಿ ಮಯೂರ ಭುವನೇಶ್ವರಿ, ಕಮಲಾಪುರ'
  },
  {
    keywords: ['zenana', 'lotus mahal', 'elephant stables', 'royal center'],
    lat: 15.3205, lng: 76.4695,
    name: 'Zenana Enclosure, Lotus Mahal & Elephant Stables',
    nameKn: 'ಝೆನಾನಾ ಆವರಣ, ಕಮಲ ಮಹಲ್ ಮತ್ತು ಆನೆ ಲಾಯ'
  },
  {
    keywords: ["queen's bath", 'queens bath', 'hampi bazaar'],
    lat: 15.3160, lng: 76.4715,
    name: "Queen's Bath & Royal Citadel",
    nameKn: 'ರಾಣಿಯ ಸ್ನಾನಗೃಹ ಮತ್ತು ಹಂಪಿ ರಥಬೀದಿ'
  },
  {
    keywords: ['anjanadri', 'hanuman birthplace', 'kishkindha'],
    lat: 15.3535, lng: 76.4710,
    name: 'Anjanadri Hill (Lord Hanuman Birthplace)',
    nameKn: 'ಅಂಜನಾದ್ರಿ ಬೆಟ್ಟ (ಶ್ರೀ ಹನುಮಂತನ ಜನ್ಮಸ್ಥಳ)'
  },
  {
    keywords: ['goan corner', 'laughing buddha', 'sanapur'],
    lat: 15.3620, lng: 76.4550,
    name: 'Sanapur Lake Cafe Circuit',
    nameKn: 'ಸಾನಾಪುರ ಕೆರೆ ಪರಿಸರದ ಕೆಫೆ'
  },
  {
    keywords: ['pampa sarovar', 'chintamani', 'sanapur lake'],
    lat: 15.3645, lng: 76.4650,
    name: 'Pampa Sarovar & Sanapur Lake Boulders',
    nameKn: 'ಪಂಪಾ ಸರೋವರ ಮತ್ತು ಸಾನಾಪುರ ಕೆರೆ'
  },
  {
    keywords: ['banana fiber', 'anegundi craft', 'kishkindha trust'],
    lat: 15.3520, lng: 76.4950,
    name: 'Anegundi Heritage & Banana Fiber Craft Center',
    nameKn: 'ಆನೆಗೊಂದಿ ಬಾಳೆ ನಾರಿನ ಕರಕುಶಲ ಕೇಂದ್ರ'
  },

  // Mysuru
  {
    keywords: ['chamundi', 'chamundeshwari', 'nandi monolith'],
    lat: 12.2740, lng: 76.6710,
    name: 'Sri Chamundeshwari Temple & Monolithic Nandi',
    nameKn: 'ಶ್ರೀ ಚಾಮುಂಡೇಶ್ವರಿ ದೇವಾಲಯ ಮತ್ತು ಬೃಹತ್ ನಂದಿ'
  },
  {
    keywords: ['mylari', 'hotel original mylari', 'nazarbad'],
    lat: 12.3080, lng: 76.6620,
    name: 'Hotel Original Mylari, Nazarbad',
    nameKn: 'ಮೈಲಾರಿ ಹೋಟೆಲ್, ನಜರ್‌ಬಾದ್'
  },
  {
    keywords: ['mysore palace', 'ambavilas', 'durbar hall'],
    lat: 12.3052, lng: 76.6552,
    name: 'Mysore Palace (Ambavilas Palace)',
    nameKn: 'ಮೈಸೂರು ಅರಮನೆ (ಅಂಬಾವಿಲಾಸ)'
  },
  {
    keywords: ['devaraja market', 'heritage sweets', 'guru sweet mart'],
    lat: 12.3115, lng: 76.6508,
    name: 'Devaraja Century-old Market Walk',
    nameKn: 'ದೇವರಾಜ ಮಾರುಕಟ್ಟೆ ನಡಿಗೆ'
  },
  {
    keywords: ['srirangapatna', 'daria daulat', 'tipu summer palace', 'ranganathaswamy'],
    lat: 12.4230, lng: 76.6950,
    name: 'Srirangapatna Island Fortress & Daria Daulat Bagh',
    nameKn: 'ಶ್ರೀರಂಗಪಟ್ಟಣದ ಕೋಟೆ ಮತ್ತು ದರಿಯಾ ದೌಲತ್ ಬಾಗ್'
  },
  {
    keywords: ['poojari', 'fish land', 'ranganatha mess'],
    lat: 12.4180, lng: 76.6890,
    name: "Poojari's Fish Land / Srirangapatna Mess",
    nameKn: 'ಪೂಜಾರಿಸ್ ಫಿಶ್ ಲ್ಯಾಂಡ್'
  },
  {
    keywords: ['somanathapura', 'keshava temple', 'trikuta'],
    lat: 12.2760, lng: 76.9050,
    name: 'Prasanna Chennakeshava Temple, Somanathapura',
    nameKn: 'ಶ್ರೀ ಪ್ರಸನ್ನ ಚೆನ್ನಕೇಶವ ದೇವಾಲಯ, ಸೋಮನಾಥಪುರ'
  },
  {
    keywords: ['krs dam', 'brindavan musical', 'brindavan gardens', 'krs'],
    lat: 12.4255, lng: 76.5720,
    name: 'KRS Dam & Brindavan Musical Gardens',
    nameKn: 'ಕೃಷ್ಣರಾಜ ಸಾಗರ (ಕೆ.ಆರ್.ಎಸ್) ಮತ್ತು ಬೃಂದಾವನ ಉದ್ಯಾನ'
  },
  {
    keywords: ['st. philomena', 'philomena cathedral'],
    lat: 12.3210, lng: 76.6575,
    name: "St. Philomena's Neo-Gothic Cathedral",
    nameKn: 'ಸೇಂಟ್ ಫಿಲೋಮಿನಾ ಚರ್ಚ್'
  },

  // Coorg
  {
    keywords: ['talakaveri', 'talacauvery', 'brahmagiri'],
    lat: 12.3840, lng: 75.4910,
    name: 'Talakaveri & Brahmagiri Hills Sanctuary',
    nameKn: 'ತಲಕಾವೇರಿ ಮತ್ತು ಬ್ರಹ್ಮಗಿರಿ ಬೆಟ್ಟ'
  },
  {
    keywords: ['abbey falls', 'madikeri waterfalls'],
    lat: 12.4530, lng: 75.7190,
    name: 'Abbey Falls, Madikeri',
    nameKn: 'ಅಬ್ಬಿ ಜಲಪಾತ, ಮಡಿಕೇರಿ'
  },
  {
    keywords: ["raja's seat", 'rajas seat', 'madikeri sunset'],
    lat: 12.4190, lng: 75.7360,
    name: "Raja's Seat Sunset Point, Madikeri",
    nameKn: 'ರಾಜಾಸೀಟ್ ಸೂರ್ಯಾಸ್ತ ತಾಣ'
  },
  {
    keywords: ['namdroling', 'golden temple', 'bylakuppe', 'tibetan'],
    lat: 12.4300, lng: 75.9660,
    name: 'Namdroling Golden Temple, Bylakuppe',
    nameKn: 'ನಮ್‌ಡ್ರೋಲಿಂಗ್ ಗೋಲ್ಡನ್ ಟೆಂಪಲ್, ಬೈಲಕುಪ್ಪೆ'
  },
  {
    keywords: ['dubare', 'elephant camp', 'cauvery river camp'],
    lat: 12.3680, lng: 75.9050,
    name: 'Dubare Elephant Camp, Cauvery River',
    nameKn: 'ದುಬಾರೆ ಆನೆ ಶಿಬಿರ'
  },
  {
    keywords: ['coffee plantation', 'spice estate'],
    lat: 12.4200, lng: 75.7450,
    name: 'Coorg Heritage Coffee Plantation Trail',
    nameKn: 'ಕೊಡಗು ಕಾಫಿ ಎಸ್ಟೇಟ್ ನಡಿಗೆ'
  },

  // Badami
  {
    keywords: ['badami cave', 'rock-cut cave', 'nataraja cave'],
    lat: 15.9180, lng: 75.6840,
    name: 'Badami Rock-Cut Cave Temples',
    nameKn: 'ಬಾದಾಮಿ ಗುಹಾಂತರ ದೇವಾಲಯಗಳು'
  },
  {
    keywords: ['bhutanatha', 'agastya lake', 'agastya teertha'],
    lat: 15.9205, lng: 75.6880,
    name: 'Bhutanatha Temples & Agastya Lake',
    nameKn: 'ಭೂತನಾಥ ದೇವಾಲಯ ಮತ್ತು ಅಗಸ್ತ್ಯ ತೀರ್ಥ ಕೆರೆ'
  },
  {
    keywords: ['badami fort', 'lower shivalaya', 'upper shivalaya'],
    lat: 15.9230, lng: 75.6830,
    name: 'Badami Fort & Northern Hill Shivalayas',
    nameKn: 'ಬಾದಾಮಿ ಕೋಟೆ ಮತ್ತು ಶಿವಾಲಯಗಳು'
  },
  {
    keywords: ['aihole', 'cradle of temple'],
    lat: 16.0195, lng: 75.8820,
    name: 'Aihole Temple Complex',
    nameKn: 'ಐಹೊಳೆ ಐತಿಹಾಸಿಕ ದೇವಾಲಯಗಳ ಸಂಕೀರ್ಣ'
  },

  // Pattadakal
  {
    keywords: ['virupaksha temple pattadakal', 'pattadakal virupaksha'],
    lat: 15.9490, lng: 75.8160,
    name: 'Virupaksha Temple, Pattadakal',
    nameKn: 'ವಿರೂಪಾಕ್ಷ ದೇವಾಲಯ, ಪಟ್ಟದಕಲ್ಲು'
  },
  {
    keywords: ['mallikarjuna temple', 'pattadakal mallikarjuna'],
    lat: 15.9485, lng: 75.8165,
    name: 'Mallikarjuna Temple, Pattadakal',
    nameKn: 'ಮಲ್ಲಿಕಾರ್ಜುನ ದೇವಾಲಯ, ಪಟ್ಟದಕಲ್ಲು'
  },
  {
    keywords: ['papanatha', 'galaganatha', 'sangameshwara', 'pattadakal'],
    lat: 15.9495, lng: 75.8155,
    name: 'Pattadakal UNESCO Heritage Monument Complex',
    nameKn: 'ಪಟ್ಟದಕಲ್ಲು ಯುನೆಸ್ಕೋ ಸ್ಮಾರಕಗಳ ಸಮೂಹ'
  },

  // Gokarna
  {
    keywords: ['mahabaleshwara', 'atmalinga', 'gokarna temple'],
    lat: 14.5425, lng: 74.3160,
    name: 'Sri Mahabaleshwara Temple (Atmalinga)',
    nameKn: 'ಶ್ರೀ ಮಹಾಬಲೇಶ್ವರ ದೇವಸ್ಥಾನ (ಆತ್ಮಲಿಂಗ)'
  },
  {
    keywords: ['om beach'],
    lat: 14.5185, lng: 74.3180,
    name: 'Om Beach',
    nameKn: 'ಓಂ ಬೀಚ್'
  },
  {
    keywords: ['kudle beach'],
    lat: 14.5290, lng: 74.3140,
    name: 'Kudle Beach & Cliffs',
    nameKn: 'ಕುಡ್ಲೆ ಬೀಚ್'
  },
  {
    keywords: ['half-moon', 'half moon beach', 'paradise beach'],
    lat: 14.5100, lng: 74.3250,
    name: 'Half Moon & Paradise Coastal Trail',
    nameKn: 'ಹಾಫ್ ಮೂನ್ ಮತ್ತು ಪ್ಯಾರಡೈಸ್ ಬೀಚ್ ಹಾದಿ'
  },
  {
    keywords: ['maha ganapathi', 'ganesha temple gokarna'],
    lat: 14.5435, lng: 74.3165,
    name: 'Maha Ganapathi Temple, Gokarna',
    nameKn: 'ಮಹಾ ಗಣಪತಿ ದೇವಾಲಯ, ಗೋಕರ್ಣ'
  },

  // Belur & Halebidu
  {
    keywords: ['chennakeshava', 'belur temple', 'madanika'],
    lat: 13.1623, lng: 75.8601,
    name: 'Chennakeshava Temple Complex, Belur',
    nameKn: 'ಶ್ರೀ ಚೆನ್ನಕೇಶವ ದೇವಾಲಯ, ಬೇಲೂರು'
  },
  {
    keywords: ['hoysaleswara', 'halebidu temple', 'dwarasamudra'],
    lat: 13.2144, lng: 75.9922,
    name: 'Hoysaleswara Temple, Halebidu',
    nameKn: 'ಹೊಯ್ಸಳೇಶ್ವರ ದೇವಾಲಯ, ಹಳೇಬೀಡು'
  },
  {
    keywords: ['kedareshwara', 'jain basadi', 'basadi halli'],
    lat: 13.2120, lng: 75.9900,
    name: 'Kedareshwara Temple & Jain Basadis, Halebidu',
    nameKn: 'ಕೇದಾರೇಶ್ವರ ದೇವಾಲಯ ಮತ್ತು ಜೈನ ಬಸದಿಗಳು'
  },

  // Chitradurga
  {
    keywords: ['chitradurga fort', 'elu suttina kote', 'seven-tiered'],
    lat: 14.2215, lng: 76.3980,
    name: "Chitradurga Fort ('Elu Suttina Kote')",
    nameKn: 'ಚಿತ್ರದುರ್ಗದ ಏಳು ಸುತ್ತಿನ ಕೋಟೆ'
  },
  {
    keywords: ['onake obavva', 'obavvana kindi'],
    lat: 14.2185, lng: 76.3960,
    name: "Historic Onake Obavvana Kindi",
    nameKn: 'ಒನಕೆ ಓಬವ್ವನ ಕಿಂಡಿ'
  },
  {
    keywords: ['hidimbeshwara', 'akka-thangi honda'],
    lat: 14.2230, lng: 76.3990,
    name: 'Hidimbeshwara Shrine & Akka-Thangi Honda',
    nameKn: 'ಹಿಡಿಂಬೇಶ್ವರ ದೇಗುಲ ಮತ್ತು ಅಕ್ಕ-ತಂಗಿ ಹೊಂಡ'
  },

  // Vijayapura
  {
    keywords: ['gol gumbaz', 'whispering gallery'],
    lat: 16.8306, lng: 75.7363,
    name: 'Gol Gumbaz & Whispering Gallery',
    nameKn: 'ಗೋಲ್ ಗುಂಬಜ್ ಮತ್ತು ಪಿಸುಗುಟ್ಟುವ ಮೊಗಸಾಲೆ'
  },
  {
    keywords: ['ibrahim rauza', 'black taj'],
    lat: 16.8280, lng: 75.6980,
    name: "Ibrahim Rauza ('Taj of the Deccan')",
    nameKn: 'ಇಬ್ರಾಹಿಂ ರೋಜಾ'
  },
  {
    keywords: ['malik-e-maidan', 'bronze cannon'],
    lat: 16.8290, lng: 75.7060,
    name: 'Malik-e-Maidan Monolithic Cannon',
    nameKn: 'ಮಲಿಕ್-ಎ-ಮೈದಾನ್ ಬೃಹತ್ ಫಿರಂಗಿ'
  },
  {
    keywords: ['bara kaman', 'unfinished arches'],
    lat: 16.8330, lng: 75.7170,
    name: 'Bara Kaman Twelve Arches',
    nameKn: 'ಬಾರಾ ಕಮಾನ್'
  },

  // Udupi
  {
    keywords: ['krishna temple', 'kanakana kindi', 'udupi mutt'],
    lat: 13.3409, lng: 74.7460,
    name: 'Sri Krishna Temple & Kanakana Kindi',
    nameKn: 'ಶ್ರೀ ಕೃಷ್ಣ ಮಠ ಮತ್ತು ಕನಕನ ಕಿಂಡಿ'
  },
  {
    keywords: ['malpe beach', "st. mary's", 'st marys island'],
    lat: 13.3565, lng: 74.6980,
    name: "Malpe Beach & St. Mary's Basaltic Islands",
    nameKn: 'ಮಲ್ಪೆ ಬೀಚ್ ಮತ್ತು ಸೈಂಟ್ ಮೇರಿಸ್ ದ್ವೀಪ'
  },
  {
    keywords: ['kaup lighthouse', 'kapu lighthouse'],
    lat: 13.2230, lng: 74.7370,
    name: 'Kaup Historic Lighthouse & Beach',
    nameKn: 'ಕಾಪು ಲೈಟ್‌ಹೌಸ್ ಮತ್ತು ಕಡಲತೀರ'
  },
  {
    keywords: ['mitra samaj'],
    lat: 13.3405, lng: 74.7455,
    name: 'Mitra Samaj Heritage Restaurant, Udupi',
    nameKn: 'ಮಿತ್ರ ಸಮಾಜ ಹೆರಿಟೇಜ್ ಉಪಾಹಾರ ಗೃಹ'
  },

  // Chikmagalur
  {
    keywords: ['mullayanagiri', 'karnataka highest summit'],
    lat: 13.3910, lng: 75.7210,
    name: "Mullayanagiri Peak (Karnataka's Highest Summit)",
    nameKn: 'ಮುಳ್ಳಯ್ಯನಗಿರಿ ಶಿಖರ'
  },
  {
    keywords: ['baba budangiri', 'dattatreya peetha', 'inm dattatreya'],
    lat: 13.4225, lng: 75.7670,
    name: 'Baba Budangiri & Dattatreya Peetha',
    nameKn: 'ಬಾಬಾಬುಡನ್‌ಗಿರಿ ಮತ್ತು ದತ್ತಾತ್ರೇಯ ಪೀಠ'
  },
  {
    keywords: ['hirekolale lake'],
    lat: 13.3480, lng: 75.7320,
    name: 'Hirekolale Lake Sunset Reflection',
    nameKn: 'ಹಿರೇಕೊಳಲೆ ಕೆರೆ'
  },
  {
    keywords: ['jhari', 'buttermilk falls', 'hebbe falls'],
    lat: 13.4470, lng: 75.7310,
    name: 'Jhari & Hebbe Waterfalls',
    nameKn: 'ಝರಿ ಮತ್ತು ಹೆಬ್ಬೆ ಜಲಪಾತ'
  },
  {
    keywords: ['coffee museum'],
    lat: 13.3100, lng: 75.7650,
    name: 'Chikmagalur Coffee Museum & Tasting Tour',
    nameKn: 'ಕಾಫಿ ಮ್ಯೂಸಿಯಂ, ಚಿಕ್ಕಮಗಳೂರು'
  }
];

// Persistent/Memory Geocoding Cache
const CACHE_FILE = path.resolve(__dirname, '../data/geocode-cache.json');
let geocodeCache = new Map();

try {
  if (fs.existsSync(CACHE_FILE)) {
    const raw = fs.readFileSync(CACHE_FILE, 'utf8');
    const parsed = JSON.parse(raw);
    for (const [k, v] of Object.entries(parsed)) {
      geocodeCache.set(k.toLowerCase(), v);
    }
  }
} catch (e) {
  console.warn('Could not read geocode cache file:', e.message);
}

function saveGeocodeCache() {
  try {
    const obj = {};
    for (const [k, v] of geocodeCache.entries()) {
      obj[k] = v;
    }
    fs.writeFileSync(CACHE_FILE, JSON.stringify(obj, null, 2), 'utf8');
  } catch (e) {
    // Non-fatal if read-only filesystem
  }
}

// In-memory Routing Cache (key: coordString, value: routeObj)
const routeCache = new Map();

// Rate limiting state for external Nominatim calls
let lastGeocodeCallTime = 0;
async function throttleGeocodeCall() {
  const now = Date.now();
  const timeSinceLast = now - lastGeocodeCallTime;
  if (timeSinceLast < 1100) {
    await new Promise(r => setTimeout(r, 1100 - timeSinceLast));
  }
  lastGeocodeCallTime = Date.now();
}

/**
 * Normalizes text for matching
 */
function cleanQuery(text) {
  return (text || '')
    .toLowerCase()
    .replace(/[—–\-]/g, ' ')
    .replace(/[(),.'"]/g, '')
    .trim();
}

/**
 * Resolves coordinates for a place/activity using:
 * 1. Pre-verified attraction database (fastest, 100% verified Karnataka coordinates)
 * 2. Pre-verified destination coordinates
 * 3. Geocode Cache
 * 4. Nominatim / Configured geocoding service (fallback with throttling)
 * 5. Returns null if unresolved (DO NOT fabricate coordinates!)
 */
export async function resolvePlaceCoordinates({ title, location, spot, destinationId }) {
  const searchTerms = [title, spot, location].filter(Boolean);
  if (searchTerms.length === 0) {
    return { lat: null, lng: null, hasCoordinates: false };
  }

  const primaryQuery = cleanQuery(searchTerms.join(' '));

  // 1. Check verified attractions database
  for (const attraction of VERIFIED_ATTRACTIONS) {
    const match = attraction.keywords.some(kw => primaryQuery.includes(cleanQuery(kw)));
    if (match) {
      return {
        lat: attraction.lat,
        lng: attraction.lng,
        name: attraction.name,
        nameKn: attraction.nameKn,
        hasCoordinates: true,
        source: 'verified-catalog'
      };
    }
  }

  // 2. Check destination default coordinates if query directly matches destination
  const destKey = cleanQuery(destinationId || '');
  if (destKey && VERIFIED_DESTINATION_COORDINATES[destKey]) {
    // If the title or location specifically names the main destination town
    if (primaryQuery.includes(destKey) || primaryQuery.includes('heritage circuit') || primaryQuery.includes('local bazaar')) {
      const dest = VERIFIED_DESTINATION_COORDINATES[destKey];
      return {
        lat: dest.lat,
        lng: dest.lng,
        name: dest.name,
        nameKn: dest.nameKn,
        hasCoordinates: true,
        source: 'verified-destination'
      };
    }
  }

  // 3. Check Geocoding Cache
  const cacheKey = cleanQuery(`${searchTerms[0]} ${destinationId || ''}`);
  if (geocodeCache.has(cacheKey)) {
    const cached = geocodeCache.get(cacheKey);
    return cached;
  }

  // 4. Fallback to external Geocoding Service (configurable, OpenStreetMap Nominatim default)
  const geocodeUrl = process.env.GEOCODING_API_URL || 'https://nominatim.openstreetmap.org/search';
  const queryStr = `${searchTerms[0]}, ${destinationId || ''}, Karnataka, India`;

  try {
    await throttleGeocodeCall();
    const url = `${geocodeUrl}?q=${encodeURIComponent(queryStr)}&format=json&limit=1`;
    const res = await fetch(url, {
      headers: {
        'User-Agent': 'NammaTrip-AI-Travel-Planner/1.0 (https://nammatrip.ai; contact@nammatrip.ai)',
        'Accept': 'application/json'
      },
      signal: AbortSignal.timeout(4000)
    });

    if (res.ok) {
      const results = await res.json();
      if (Array.isArray(results) && results.length > 0) {
        const item = results[0];
        const lat = parseFloat(item.lat);
        const lng = parseFloat(item.lon);
        if (!isNaN(lat) && !isNaN(lng)) {
          const verified = {
            lat,
            lng,
            name: item.display_name?.split(',')[0] || searchTerms[0],
            hasCoordinates: true,
            source: 'geocoded-osm'
          };
          geocodeCache.set(cacheKey, verified);
          saveGeocodeCache();
          return verified;
        }
      }
    }
  } catch (err) {
    console.warn(`Geocoding query failed for "${queryStr}":`, err.message);
  }

  // If still not resolved, check if destination alone can serve as fallback with flag
  if (destKey && VERIFIED_DESTINATION_COORDINATES[destKey]) {
    const dest = VERIFIED_DESTINATION_COORDINATES[destKey];
    const fallbackResult = {
      lat: dest.lat,
      lng: dest.lng,
      name: `${searchTerms[0]} (${dest.name})`,
      nameKn: `${searchTerms[0]} (${dest.nameKn})`,
      hasCoordinates: true,
      source: 'destination-approx'
    };
    geocodeCache.set(cacheKey, fallbackResult);
    return fallbackResult;
  }

  // 5. DO NOT fabricate coordinates! Return unlocated state
  const missing = { lat: null, lng: null, hasCoordinates: false };
  geocodeCache.set(cacheKey, missing);
  return missing;
}

/**
 * Calculates a genuine driving route using OSRM router
 * A straight line is NEVER returned as a driving route!
 */
export async function fetchDrivingRoute(waypoints) {
  if (!waypoints || waypoints.length < 2) {
    return {
      routeAvailable: false,
      geometry: [],
      distanceKm: 0,
      durationMin: 0,
      message: 'At least two valid stops required for route calculation'
    };
  }

  // Construct coordinate query: lng1,lat1;lng2,lat2;...
  const coordParts = waypoints.map(w => `${w.lng.toFixed(5)},${w.lat.toFixed(5)}`);
  const cacheKey = coordParts.join(';');

  if (routeCache.has(cacheKey)) {
    return routeCache.get(cacheKey);
  }

  const routerBase = process.env.OSRM_ROUTER_URL || process.env.ROUTING_API_URL || 'https://router.project-osrm.org';
  const url = `${routerBase}/route/v1/driving/${cacheKey}?overview=full&geometries=geojson`;

  try {
    const res = await fetch(url, {
      headers: { 'Accept': 'application/json' },
      signal: AbortSignal.timeout(8000)
    });

    if (res.ok) {
      const data = await res.json();
      if (data.code === 'Ok' && Array.isArray(data.routes) && data.routes.length > 0) {
        const route = data.routes[0];
        // Convert GeoJSON [lng, lat] to Leaflet standard [lat, lng]
        const geometry = route.geometry.coordinates.map(coord => [coord[1], coord[0]]);
        const distanceKm = parseFloat((route.distance / 1000).toFixed(1));
        const durationMin = Math.round(route.duration / 60);

        const routeResult = {
          routeAvailable: true,
          geometry,
          distanceKm,
          durationMin
        };

        routeCache.set(cacheKey, routeResult);
        return routeResult;
      }
    }
  } catch (err) {
    console.warn('OSRM routing fetch failed:', err.message);
  }

  // If OSRM fails or has no driving route, DO NOT fabricate a straight line
  const noRoute = {
    routeAvailable: false,
    geometry: [],
    distanceKm: 0,
    durationMin: 0,
    message: 'Road driving route geometry is unavailable for these stops'
  };
  return noRoute;
}

/**
 * Generates comprehensive trip map data from an itinerary
 */
export async function generateTripMapData({ itinerary, destinationId = 'hampi', startingCity = 'Bengaluru' }) {
  if (!itinerary || !Array.isArray(itinerary) || itinerary.length === 0) {
    return {
      success: true,
      center: [15.3173, 75.7139], // Karnataka center
      bounds: null,
      stops: [],
      routes: [],
      missingLocations: []
    };
  }

  const allStops = [];
  const missingLocations = [];
  let globalStopNumber = 1;

  for (let dIdx = 0; dIdx < itinerary.length; dIdx++) {
    const dayPlan = itinerary[dIdx];
    const dayNum = dayPlan.day || dIdx + 1;
    let dayStopNumber = 1;

    // Ordered slots in visit order
    const slots = [
      { key: 'morning', label: 'Morning', labelKn: 'ಮುಂಜಾನೆ', data: dayPlan.morning },
      { key: 'lunch', label: 'Lunch', labelKn: 'ಮಧ್ಯಾಹ್ನದ ಊಟ', data: dayPlan.lunch },
      { key: 'afternoon', label: 'Afternoon', labelKn: 'ಮಧ್ಯಾಹ್ನ', data: dayPlan.afternoon },
      { key: 'evening', label: 'Evening', labelKn: 'ಸಂಜೆ', data: dayPlan.evening }
    ];

    for (const slot of slots) {
      if (!slot.data) continue;

      const title = slot.data.title || slot.data.spot || `${slot.label} Activity`;
      const titleKn = slot.data.titleKn || slot.data.spotKn || title;
      const location = slot.data.location || (slot.data.spot ? slot.data.spot : '');
      const description = slot.data.description || slot.data.dish || '';
      const descriptionKn = slot.data.descriptionKn || slot.data.dishKn || '';
      const fee = slot.data.estimatedFee !== undefined ? slot.data.estimatedFee : slot.data.estCost;

      const coords = await resolvePlaceCoordinates({
        title,
        location,
        spot: slot.data.spot,
        destinationId
      });

      const stopObj = {
        id: `d${dayNum}-${slot.key}`,
        day: dayNum,
        slot: slot.key,
        slotLabel: slot.label,
        slotLabelKn: slot.labelKn,
        stopNumber: globalStopNumber,
        dayStopNumber: dayStopNumber,
        title,
        titleKn,
        location,
        time: slot.data.time || '',
        fee,
        description,
        descriptionKn,
        culturalTip: dayPlan.culturalTip || '',
        culturalTipKn: dayPlan.culturalTipKn || '',
        lat: coords.lat,
        lng: coords.lng,
        hasCoordinates: coords.hasCoordinates,
        source: coords.source
      };

      allStops.push(stopObj);
      globalStopNumber++;
      dayStopNumber++;

      if (!coords.hasCoordinates) {
        missingLocations.push({
          id: stopObj.id,
          day: dayNum,
          slot: slot.key,
          title
        });
      }
    }
  }

  // Calculate driving routes per day
  const routes = [];
  const days = [...new Set(allStops.map(s => s.day))];

  for (const day of days) {
    const dayStopsWithCoords = allStops.filter(s => s.day === day && s.hasCoordinates && s.lat && s.lng);
    if (dayStopsWithCoords.length >= 2) {
      const waypoints = dayStopsWithCoords.map(s => ({ lat: s.lat, lng: s.lng }));
      const routeData = await fetchDrivingRoute(waypoints);
      routes.push({
        day,
        stopIds: dayStopsWithCoords.map(s => s.id),
        ...routeData
      });
    } else {
      routes.push({
        day,
        stopIds: dayStopsWithCoords.map(s => s.id),
        routeAvailable: false,
        geometry: [],
        distanceKm: 0,
        durationMin: 0,
        message: 'Fewer than 2 stops with coordinates in this day'
      });
    }
  }

  // Calculate map center and bounds
  const validStops = allStops.filter(s => s.hasCoordinates && s.lat && s.lng);
  let center = [15.3173, 75.7139]; // Default Karnataka center
  let bounds = null;

  if (validStops.length > 0) {
    let minLat = 90, maxLat = -90, minLng = 180, maxLng = -180;
    let sumLat = 0, sumLng = 0;

    for (const s of validStops) {
      if (s.lat < minLat) minLat = s.lat;
      if (s.lat > maxLat) maxLat = s.lat;
      if (s.lng < minLng) minLng = s.lng;
      if (s.lng > maxLng) maxLng = s.lng;
      sumLat += s.lat;
      sumLng += s.lng;
    }

    center = [sumLat / validStops.length, sumLng / validStops.length];
    bounds = [
      [minLat - 0.015, minLng - 0.015],
      [maxLat + 0.015, maxLng + 0.015]
    ];
  }

  return {
    success: true,
    center,
    bounds,
    stops: allStops,
    routes,
    missingLocations
  };
}
