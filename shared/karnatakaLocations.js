/**
 * NammaTrip AI — Shared Karnataka Starting Locations
 * Single Source of Truth for all 31 Karnataka District Headquarters
 * and major commercial, cultural, and transport hubs across the state.
 */

export const KARNATAKA_STARTING_LOCATIONS = [
  // ==========================================
  // EXISTING 6 CITIES (Strictly Preserved)
  // ==========================================
  {
    id: 'bengaluru',
    name: 'Bengaluru',
    nameKn: 'ಬೆಂಗಳೂರು',
    district: 'Bengaluru Urban',
    districtKn: 'ಬೆಂಗಳೂರು ನಗರ',
    region: 'Southern',
    regionKn: 'ದಕ್ಷಿಣ ಕರ್ನಾಟಕ',
    lat: 12.9716,
    lng: 77.5946,
    isDistrictHQ: true,
    isExisting: true,
    aliases: ['bangalore', 'bengaluru urban', 'bengaluru city']
  },
  {
    id: 'mysuru',
    name: 'Mysuru',
    nameKn: 'ಮೈಸೂರು',
    district: 'Mysuru',
    districtKn: 'ಮೈಸೂರು',
    region: 'Southern',
    regionKn: 'ದಕ್ಷಿಣ ಕರ್ನಾಟಕ',
    lat: 12.3052,
    lng: 76.6552,
    isDistrictHQ: true,
    isExisting: true,
    aliases: ['mysore']
  },
  {
    id: 'hubballi',
    name: 'Hubballi-Dharwad',
    nameKn: 'ಹುಬ್ಬಳ್ಳಿ-ಧಾರವಾಡ',
    district: 'Dharwad',
    districtKn: 'ಧಾರವಾಡ',
    region: 'Northern',
    regionKn: 'ಉತ್ತರ ಕರ್ನಾಟಕ',
    lat: 15.3647,
    lng: 75.1240,
    isDistrictHQ: true,
    isExisting: true,
    aliases: ['hubli', 'hubballi', 'dharwad', 'hubli-dharwad']
  },
  {
    id: 'mangaluru',
    name: 'Mangaluru',
    nameKn: 'ಮಂಗಳೂರು',
    district: 'Dakshina Kannada',
    districtKn: 'ದಕ್ಷಿಣ ಕನ್ನಡ',
    region: 'Coastal',
    regionKn: 'ಕರಾವಳಿ',
    lat: 12.9141,
    lng: 74.8560,
    isDistrictHQ: true,
    isExisting: true,
    aliases: ['mangalore', 'dakshina kannada']
  },
  {
    id: 'belagavi',
    name: 'Belagavi',
    nameKn: 'ಬೆಳಗಾವಿ',
    district: 'Belagavi',
    districtKn: 'ಬೆಳಗಾವಿ',
    region: 'Northern',
    regionKn: 'ಉತ್ತರ ಕರ್ನಾಟಕ',
    lat: 15.8497,
    lng: 74.4977,
    isDistrictHQ: true,
    isExisting: true,
    aliases: ['belgaum']
  },
  {
    id: 'kalaburagi',
    name: 'Kalaburagi',
    nameKn: 'ಕಲಬುರಗಿ',
    district: 'Kalaburagi',
    districtKn: 'ಕಲಬುರಗಿ',
    region: 'Northern',
    regionKn: 'ಕಲ್ಯಾಣ ಕರ್ನಾಟಕ',
    lat: 17.3297,
    lng: 76.8343,
    isDistrictHQ: true,
    isExisting: true,
    aliases: ['gulbarga']
  },

  // ==========================================
  // REMAINING 25 DISTRICT HEADQUARTERS
  // ==========================================
  {
    id: 'bagalkote',
    name: 'Bagalkote',
    nameKn: 'ಬಾಗಲಕೋಟೆ',
    district: 'Bagalkote',
    districtKn: 'ಬಾಗಲಕೋಟೆ',
    region: 'Northern',
    regionKn: 'ಉತ್ತರ ಕರ್ನಾಟಕ',
    lat: 16.1817,
    lng: 75.6958,
    isDistrictHQ: true,
    aliases: ['bagalkot']
  },
  {
    id: 'ballari',
    name: 'Ballari',
    nameKn: 'ಬಳ್ಳಾರಿ',
    district: 'Ballari',
    districtKn: 'ಬಳ್ಳಾರಿ',
    region: 'Central',
    regionKn: 'ಮಧ್ಯ ಕರ್ನಾಟಕ',
    lat: 15.1394,
    lng: 76.9214,
    isDistrictHQ: true,
    aliases: ['bellary']
  },
  {
    id: 'doddaballapura',
    name: 'Bengaluru Rural (Doddaballapura)',
    nameKn: 'ಬೆಂಗಳೂರು ಗ್ರಾಮಾಂತರ (ದೊಡ್ಡಬಳ್ಳಾಪುರ)',
    district: 'Bengaluru Rural',
    districtKn: 'ಬೆಂಗಳೂರು ಗ್ರಾಮಾಂತರ',
    region: 'Southern',
    regionKn: 'ದಕ್ಷಿಣ ಕರ್ನಾಟಕ',
    lat: 13.2929,
    lng: 77.5428,
    isDistrictHQ: true,
    aliases: ['bengaluru rural', 'doddaballapur', 'devanahalli']
  },
  {
    id: 'bidar',
    name: 'Bidar',
    nameKn: 'ಬೀದರ್',
    district: 'Bidar',
    districtKn: 'ಬೀದರ್',
    region: 'Northern',
    regionKn: 'ಕಲ್ಯಾಣ ಕರ್ನಾಟಕ',
    lat: 17.9104,
    lng: 77.5199,
    isDistrictHQ: true,
    aliases: []
  },
  {
    id: 'chamarajanagara',
    name: 'Chamarajanagara',
    nameKn: 'ಚಾಮರಾಜನಗರ',
    district: 'Chamarajanagara',
    districtKn: 'ಚಾಮರಾಜನಗರ',
    region: 'Southern',
    regionKn: 'ದಕ್ಷಿಣ ಕರ್ನಾಟಕ',
    lat: 11.9261,
    lng: 76.9437,
    isDistrictHQ: true,
    aliases: ['chamarajanagar', 'chamarajnagar']
  },
  {
    id: 'chikkaballapura',
    name: 'Chikkaballapura',
    nameKn: 'ಚಿಕ್ಕಬಳ್ಳಾಪುರ',
    district: 'Chikkaballapura',
    districtKn: 'ಚಿಕ್ಕಬಳ್ಳಾಪುರ',
    region: 'Southern',
    regionKn: 'ದಕ್ಷಿಣ ಕರ್ನಾಟಕ',
    lat: 13.4355,
    lng: 77.7315,
    isDistrictHQ: true,
    aliases: ['chikkaballapur', 'chikballapur']
  },
  {
    id: 'chikkamagaluru',
    name: 'Chikkamagaluru',
    nameKn: 'ಚಿಕ್ಕಮಗಳೂರು',
    district: 'Chikkamagaluru',
    districtKn: 'ಚಿಕ್ಕಮಗಳೂರು',
    region: 'Central',
    regionKn: 'ಮಲೆನಾಡು',
    lat: 13.3161,
    lng: 75.7720,
    isDistrictHQ: true,
    aliases: ['chikmagalur', 'chikmagaluru']
  },
  {
    id: 'chitradurga',
    name: 'Chitradurga',
    nameKn: 'ಚಿತ್ರದುರ್ಗ',
    district: 'Chitradurga',
    districtKn: 'ಚಿತ್ರದುರ್ಗ',
    region: 'Central',
    regionKn: 'ಮಧ್ಯ ಕರ್ನಾಟಕ',
    lat: 14.2251,
    lng: 76.3980,
    isDistrictHQ: true,
    aliases: []
  },
  {
    id: 'davanagere',
    name: 'Davanagere',
    nameKn: 'ದಾವಣಗೆರೆ',
    district: 'Davanagere',
    districtKn: 'ದಾವಣಗೆರೆ',
    region: 'Central',
    regionKn: 'ಮಧ್ಯ ಕರ್ನಾಟಕ',
    lat: 14.4644,
    lng: 75.9218,
    isDistrictHQ: true,
    aliases: ['davangere']
  },
  {
    id: 'gadag',
    name: 'Gadag',
    nameKn: 'ಗದಗ',
    district: 'Gadag',
    districtKn: 'ಗದಗ',
    region: 'Northern',
    regionKn: 'ಉತ್ತರ ಕರ್ನಾಟಕ',
    lat: 15.4313,
    lng: 75.6355,
    isDistrictHQ: true,
    aliases: ['gadag-betageri']
  },
  {
    id: 'hassan',
    name: 'Hassan',
    nameKn: 'ಹಾಸನ',
    district: 'Hassan',
    districtKn: 'ಹಾಸನ',
    region: 'Southern',
    regionKn: 'ದಕ್ಷಿಣ ಕರ್ನಾಟಕ',
    lat: 13.0033,
    lng: 76.1004,
    isDistrictHQ: true,
    aliases: []
  },
  {
    id: 'haveri',
    name: 'Haveri',
    nameKn: 'ಹಾವೇರಿ',
    district: 'Haveri',
    districtKn: 'ಹಾವೇರಿ',
    region: 'Central',
    regionKn: 'ಮಧ್ಯ ಕರ್ನಾಟಕ',
    lat: 14.7951,
    lng: 75.4019,
    isDistrictHQ: true,
    aliases: []
  },
  {
    id: 'madikeri',
    name: 'Madikeri (Kodagu)',
    nameKn: 'ಮಡಿಕೇರಿ (ಕೊಡಗು)',
    district: 'Kodagu',
    districtKn: 'ಕೊಡಗು',
    region: 'Southern',
    regionKn: 'ಮಲೆನಾಡು',
    lat: 12.4244,
    lng: 75.7382,
    isDistrictHQ: true,
    aliases: ['coorg', 'kodagu', 'mercara']
  },
  {
    id: 'kolar',
    name: 'Kolar',
    nameKn: 'ಕೋಲಾರ',
    district: 'Kolar',
    districtKn: 'ಕೋಲಾರ',
    region: 'Southern',
    regionKn: 'ದಕ್ಷಿಣ ಕರ್ನಾಟಕ',
    lat: 13.1367,
    lng: 78.1291,
    isDistrictHQ: true,
    aliases: []
  },
  {
    id: 'koppal',
    name: 'Koppal',
    nameKn: 'ಕೊಪ್ಪಳ',
    district: 'Koppal',
    districtKn: 'ಕೊಪ್ಪಳ',
    region: 'Northern',
    regionKn: 'ಕಲ್ಯಾಣ ಕರ್ನಾಟಕ',
    lat: 15.3456,
    lng: 76.1554,
    isDistrictHQ: true,
    aliases: []
  },
  {
    id: 'mandya',
    name: 'Mandya',
    nameKn: 'ಮಂಡ್ಯ',
    district: 'Mandya',
    districtKn: 'ಮಂಡ್ಯ',
    region: 'Southern',
    regionKn: 'ದಕ್ಷಿಣ ಕರ್ನಾಟಕ',
    lat: 12.5218,
    lng: 76.8951,
    isDistrictHQ: true,
    aliases: []
  },
  {
    id: 'raichur',
    name: 'Raichur',
    nameKn: 'ರಾಯಚೂರು',
    district: 'Raichur',
    districtKn: 'ರಾಯಚೂರು',
    region: 'Northern',
    regionKn: 'ಕಲ್ಯಾಣ ಕರ್ನಾಟಕ',
    lat: 16.2120,
    lng: 77.3439,
    isDistrictHQ: true,
    aliases: []
  },
  {
    id: 'ramanagara',
    name: 'Ramanagara',
    nameKn: 'ರಾಮನಗರ',
    district: 'Ramanagara',
    districtKn: 'ರಾಮನಗರ',
    region: 'Southern',
    regionKn: 'ದಕ್ಷಿಣ ಕರ್ನಾಟಕ',
    lat: 12.7209,
    lng: 77.2799,
    isDistrictHQ: true,
    aliases: ['ramanagar', 'ramnagara']
  },
  {
    id: 'shivamogga',
    name: 'Shivamogga',
    nameKn: 'ಶಿವಮೊಗ್ಗ',
    district: 'Shivamogga',
    districtKn: 'ಶಿವಮೊಗ್ಗ',
    region: 'Central',
    regionKn: 'ಮಲೆನಾಡು',
    lat: 13.9299,
    lng: 75.5681,
    isDistrictHQ: true,
    aliases: ['shimoga']
  },
  {
    id: 'tumakuru',
    name: 'Tumakuru',
    nameKn: 'ತುಮಕೂರು',
    district: 'Tumakuru',
    districtKn: 'ತುಮಕೂರು',
    region: 'Southern',
    regionKn: 'ದಕ್ಷಿಣ ಕರ್ನಾಟಕ',
    lat: 13.3392,
    lng: 77.1017,
    isDistrictHQ: true,
    aliases: ['tumkur']
  },
  {
    id: 'udupi',
    name: 'Udupi',
    nameKn: 'ಉಡುಪಿ',
    district: 'Udupi',
    districtKn: 'ಉಡುಪಿ',
    region: 'Coastal',
    regionKn: 'ಕರಾವಳಿ',
    lat: 13.3409,
    lng: 74.7421,
    isDistrictHQ: true,
    aliases: ['odipu']
  },
  {
    id: 'karwar',
    name: 'Karwar (Uttara Kannada)',
    nameKn: 'ಕಾರವಾರ (ಉತ್ತರ ಕನ್ನಡ)',
    district: 'Uttara Kannada',
    districtKn: 'ಉತ್ತರ ಕನ್ನಡ',
    region: 'Coastal',
    regionKn: 'ಕರಾವಳಿ',
    lat: 14.8135,
    lng: 74.1297,
    isDistrictHQ: true,
    aliases: ['uttara kannada', 'canara']
  },
  {
    id: 'hosapete',
    name: 'Hosapete (Vijayanagara)',
    nameKn: 'ಹೊಸಪೇಟೆ (ವಿಜಯನಗರ)',
    district: 'Vijayanagara',
    districtKn: 'ವಿಜಯನಗರ',
    region: 'Central',
    regionKn: 'ಕಲ್ಯಾಣ ಕರ್ನಾಟಕ',
    lat: 15.2689,
    lng: 76.3909,
    isDistrictHQ: true,
    aliases: ['hospet', 'vijayanagara']
  },
  {
    id: 'vijayapura',
    name: 'Vijayapura',
    nameKn: 'ವಿಜಯಪುರ',
    district: 'Vijayapura',
    districtKn: 'ವಿಜಯಪುರ',
    region: 'Northern',
    regionKn: 'ಉತ್ತರ ಕರ್ನಾಟಕ',
    lat: 16.8302,
    lng: 75.7100,
    isDistrictHQ: true,
    aliases: ['bijapur']
  },
  {
    id: 'yadgir',
    name: 'Yadgir',
    nameKn: 'ಯಾದಗಿರಿ',
    district: 'Yadgir',
    districtKn: 'ಯಾದಗಿರಿ',
    region: 'Northern',
    regionKn: 'ಕಲ್ಯಾಣ ಕರ್ನಾಟಕ',
    lat: 16.7628,
    lng: 77.1378,
    isDistrictHQ: true,
    aliases: ['yadgiri']
  },

  // ==========================================
  // MAJOR COMMERCIAL, TRAVEL & TRANSIT HUBS
  // ==========================================
  {
    id: 'sirsi',
    name: 'Sirsi',
    nameKn: 'ಶಿರಸಿ',
    district: 'Uttara Kannada',
    districtKn: 'ಉತ್ತರ ಕನ್ನಡ',
    region: 'Coastal',
    regionKn: 'ಮಲೆನಾಡು',
    lat: 14.6195,
    lng: 74.8354,
    isDistrictHQ: false,
    aliases: []
  },
  {
    id: 'gokarna',
    name: 'Gokarna',
    nameKn: 'ಗೋಕರ್ಣ',
    district: 'Uttara Kannada',
    districtKn: 'ಉತ್ತರ ಕನ್ನಡ',
    region: 'Coastal',
    regionKn: 'ಕರಾವಳಿ',
    lat: 14.5479,
    lng: 74.3188,
    isDistrictHQ: false,
    aliases: []
  },
  {
    id: 'bhatkal',
    name: 'Bhatkal',
    nameKn: 'ಭಟ್ಕಳ',
    district: 'Uttara Kannada',
    districtKn: 'ಉತ್ತರ ಕನ್ನಡ',
    region: 'Coastal',
    regionKn: 'ಕರಾವಳಿ',
    lat: 13.9774,
    lng: 74.5534,
    isDistrictHQ: false,
    aliases: []
  },
  {
    id: 'dandeli',
    name: 'Dandeli',
    nameKn: 'ದಾಂಡೇಲಿ',
    district: 'Uttara Kannada',
    districtKn: 'ಉತ್ತರ ಕನ್ನಡ',
    region: 'Northern',
    regionKn: 'ಮಲೆನಾಡು',
    lat: 15.2415,
    lng: 74.6186,
    isDistrictHQ: false,
    aliases: []
  },
  {
    id: 'kundapura',
    name: 'Kundapura',
    nameKn: 'ಕುಂದಾಪುರ',
    district: 'Udupi',
    districtKn: 'ಉಡುಪಿ',
    region: 'Coastal',
    regionKn: 'ಕರಾವಳಿ',
    lat: 13.6277,
    lng: 74.6931,
    isDistrictHQ: false,
    aliases: ['kundapur']
  },
  {
    id: 'karkala',
    name: 'Karkala',
    nameKn: 'ಕಾರ್ಕಳ',
    district: 'Udupi',
    districtKn: 'ಉಡುಪಿ',
    region: 'Coastal',
    regionKn: 'ಕರಾವಳಿ',
    lat: 13.2144,
    lng: 74.9982,
    isDistrictHQ: false,
    aliases: []
  },
  {
    id: 'moodabidri',
    name: 'Moodabidri',
    nameKn: 'ಮೂಡುಬಿದಿರೆ',
    district: 'Dakshina Kannada',
    districtKn: 'ದಕ್ಷಿಣ ಕನ್ನಡ',
    region: 'Coastal',
    regionKn: 'ಕರಾವಳಿ',
    lat: 13.0725,
    lng: 74.9961,
    isDistrictHQ: false,
    aliases: ['moodbidri', 'mudbidri']
  },
  {
    id: 'puttur',
    name: 'Puttur',
    nameKn: 'ಪುತ್ತೂರು',
    district: 'Dakshina Kannada',
    districtKn: 'ದಕ್ಷಿಣ ಕನ್ನಡ',
    region: 'Coastal',
    regionKn: 'ಕರಾವಳಿ',
    lat: 12.7667,
    lng: 75.2000,
    isDistrictHQ: false,
    aliases: []
  },
  {
    id: 'sakleshpur',
    name: 'Sakleshpur',
    nameKn: 'ಸಕಲೇಶಪುರ',
    district: 'Hassan',
    districtKn: 'ಹಾಸನ',
    region: 'Southern',
    regionKn: 'ಮಲೆನಾಡು',
    lat: 12.9719,
    lng: 75.7820,
    isDistrictHQ: false,
    aliases: ['sakleshpura']
  },
  {
    id: 'arsikere',
    name: 'Arsikere',
    nameKn: 'ಅರಸೀಕೆರೆ',
    district: 'Hassan',
    districtKn: 'ಹಾಸನ',
    region: 'Central',
    regionKn: 'ಮಧ್ಯ ಕರ್ನಾಟಕ',
    lat: 13.3130,
    lng: 76.2575,
    isDistrictHQ: false,
    aliases: ['arasikere']
  },
  {
    id: 'sagara',
    name: 'Sagara',
    nameKn: 'ಸಾಗರ',
    district: 'Shivamogga',
    districtKn: 'ಶಿವಮೊಗ್ಗ',
    region: 'Central',
    regionKn: 'ಮಲೆನಾಡು',
    lat: 14.1670,
    lng: 75.0298,
    isDistrictHQ: false,
    aliases: ['sagar']
  },
  {
    id: 'bhadravathi',
    name: 'Bhadravathi',
    nameKn: 'ಭದ್ರಾವತಿ',
    district: 'Shivamogga',
    districtKn: 'ಶಿವಮೊಗ್ಗ',
    region: 'Central',
    regionKn: 'ಮಧ್ಯ ಕರ್ನಾಟಕ',
    lat: 13.8436,
    lng: 75.7037,
    isDistrictHQ: false,
    aliases: ['bhadravati']
  },
  {
    id: 'tiptur',
    name: 'Tiptur',
    nameKn: 'ತಿಪಟೂರು',
    district: 'Tumakuru',
    districtKn: 'ತುಮಕೂರು',
    region: 'Central',
    regionKn: 'ಮಧ್ಯ ಕರ್ನಾಟಕ',
    lat: 13.2575,
    lng: 76.4789,
    isDistrictHQ: false,
    aliases: []
  },
  {
    id: 'channapatna',
    name: 'Channapatna',
    nameKn: 'ಚನ್ನಪಟ್ಟಣ',
    district: 'Ramanagara',
    districtKn: 'ರಾಮನಗರ',
    region: 'Southern',
    regionKn: 'ದಕ್ಷಿಣ ಕರ್ನಾಟಕ',
    lat: 12.6518,
    lng: 77.2089,
    isDistrictHQ: false,
    aliases: []
  },
  {
    id: 'nanjangud',
    name: 'Nanjangud',
    nameKn: 'ನಂಜನಗೂಡು',
    district: 'Mysuru',
    districtKn: 'ಮೈಸೂರು',
    region: 'Southern',
    regionKn: 'ದಕ್ಷಿಣ ಕರ್ನಾಟಕ',
    lat: 12.1190,
    lng: 76.6806,
    isDistrictHQ: false,
    aliases: ['nanjangudu']
  },
  {
    id: 'kollegal',
    name: 'Kollegal',
    nameKn: 'ಕೊಳ್ಳೇಗಾಲ',
    district: 'Chamarajanagara',
    districtKn: 'ಚಾಮರಾಜನಗರ',
    region: 'Southern',
    regionKn: 'ದಕ್ಷಿಣ ಕರ್ನಾಟಕ',
    lat: 12.1558,
    lng: 77.1128,
    isDistrictHQ: false,
    aliases: ['kollegala']
  },
  {
    id: 'virajpet',
    name: 'Virajpet',
    nameKn: 'ವಿರಾಜಪೇಟೆ',
    district: 'Kodagu',
    districtKn: 'ಕೊಡಗು',
    region: 'Southern',
    regionKn: 'ಮಲೆನಾಡು',
    lat: 12.2008,
    lng: 75.8032,
    isDistrictHQ: false,
    aliases: ['virajpetta']
  },
  {
    id: 'gokak',
    name: 'Gokak',
    nameKn: 'ಗೋಕಾಕ್',
    district: 'Belagavi',
    districtKn: 'ಬೆಳಗಾವಿ',
    region: 'Northern',
    regionKn: 'ಉತ್ತರ ಕರ್ನಾಟಕ',
    lat: 16.1667,
    lng: 74.8333,
    isDistrictHQ: false,
    aliases: []
  },
  {
    id: 'nippani',
    name: 'Nippani',
    nameKn: 'ನಿಪ್ಪಾಣಿ',
    district: 'Belagavi',
    districtKn: 'ಬೆಳಗಾವಿ',
    region: 'Northern',
    regionKn: 'ಉತ್ತರ ಕರ್ನಾಟಕ',
    lat: 16.4000,
    lng: 74.3833,
    isDistrictHQ: false,
    aliases: ['nipani']
  },
  {
    id: 'jamkhandi',
    name: 'Jamkhandi',
    nameKn: 'ಜಮಖಂಡಿ',
    district: 'Bagalkote',
    districtKn: 'ಬಾಗಲಕೋಟೆ',
    region: 'Northern',
    regionKn: 'ಉತ್ತರ ಕರ್ನಾಟಕ',
    lat: 16.5050,
    lng: 75.2950,
    isDistrictHQ: false,
    aliases: []
  },
  {
    id: 'gangavathi',
    name: 'Gangavathi',
    nameKn: 'ಗಂಗಾವತಿ',
    district: 'Koppal',
    districtKn: 'ಕೊಪ್ಪಳ',
    region: 'Northern',
    regionKn: 'ಕಲ್ಯಾಣ ಕರ್ನಾಟಕ',
    lat: 15.4300,
    lng: 76.5300,
    isDistrictHQ: false,
    aliases: ['gangawati']
  },
  {
    id: 'sindhanur',
    name: 'Sindhanur',
    nameKn: 'ಸಿಂಧನೂರು',
    district: 'Raichur',
    districtKn: 'ರಾಯಚೂರು',
    region: 'Northern',
    regionKn: 'ಕಲ್ಯಾಣ ಕರ್ನಾಟಕ',
    lat: 15.7725,
    lng: 76.7644,
    isDistrictHQ: false,
    aliases: ['sindhnur']
  },
  {
    id: 'basavakalyan',
    name: 'Basavakalyan',
    nameKn: 'ಬಸವಕಲ್ಯಾಣ',
    district: 'Bidar',
    districtKn: 'ಬೀದರ್',
    region: 'Northern',
    regionKn: 'ಕಲ್ಯಾಣ ಕರ್ನಾಟಕ',
    lat: 17.8734,
    lng: 76.9532,
    isDistrictHQ: false,
    aliases: ['kalyan', 'basavakalyana']
  },
  {
    id: 'humnabad',
    name: 'Humnabad',
    nameKn: 'ಹುಮ್ನಾಬಾದ್',
    district: 'Bidar',
    districtKn: 'ಬೀದರ್',
    region: 'Northern',
    regionKn: 'ಕಲ್ಯಾಣ ಕರ್ನಾಟಕ',
    lat: 17.7667,
    lng: 77.1333,
    isDistrictHQ: false,
    aliases: ['homnabad']
  },
  {
    id: 'sedam',
    name: 'Sedam',
    nameKn: 'ಸೇಡಂ',
    district: 'Kalaburagi',
    districtKn: 'ಕಲಬುರಗಿ',
    region: 'Northern',
    regionKn: 'ಕಲ್ಯಾಣ ಕರ್ನಾಟಕ',
    lat: 17.1783,
    lng: 77.2882,
    isDistrictHQ: false,
    aliases: ['seram']
  }
];

/**
 * Normalized lookup map for ultra-fast matching
 */
const LOCATION_LOOKUP = new Map();

for (const loc of KARNATAKA_STARTING_LOCATIONS) {
  LOCATION_LOOKUP.set(loc.id.toLowerCase(), loc);
  LOCATION_LOOKUP.set(loc.name.toLowerCase(), loc);
  LOCATION_LOOKUP.set(loc.nameKn, loc);
  if (loc.aliases) {
    for (const alias of loc.aliases) {
      LOCATION_LOOKUP.set(alias.toLowerCase(), loc);
    }
  }
}

/**
 * Resolves any city name, alias, or ID to a verified Karnataka Starting Location.
 * Never substitutes an unrelated city. Returns null if not found.
 */
export function findStartingLocation(query) {
  if (!query || typeof query !== 'string') return null;
  const clean = query.trim().toLowerCase();
  
  if (LOCATION_LOOKUP.has(clean)) {
    return LOCATION_LOOKUP.get(clean);
  }

  // Partial or normalized search
  const normalized = clean.replace(/[^a-z0-9]/g, '');
  for (const loc of KARNATAKA_STARTING_LOCATIONS) {
    if (loc.id.replace(/[^a-z0-9]/g, '') === normalized) return loc;
    if (loc.name.toLowerCase().replace(/[^a-z0-9]/g, '') === normalized) return loc;
    if (loc.aliases && loc.aliases.some(a => a.toLowerCase().replace(/[^a-z0-9]/g, '') === normalized)) {
      return loc;
    }
  }

  return null;
}

/**
 * Calculates Great-Circle (Haversine) distance between two GPS coordinates in kilometers.
 */
export function calculateHaversineDistanceKm(lat1, lon1, lat2, lon2) {
  const R = 6371; // Earth radius in km
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

/**
 * Estimates realistic road driving distance between origin and destination coordinates in Karnataka.
 * Applies a regional highway winding (circuity) factor.
 */
export function estimateKarnatakaRoadDistanceKm(originCoords, destCoords) {
  if (!originCoords || !destCoords) return 250;
  if (!originCoords.lat || !originCoords.lng || !destCoords.lat || !destCoords.lng) return 250;

  const straightLineKm = calculateHaversineDistanceKm(
    originCoords.lat, originCoords.lng,
    destCoords.lat, destCoords.lng
  );

  // If origin and destination are virtually identical (< 5 km crow-flight)
  if (straightLineKm < 5) return 15; // Local intra-city distance

  // Karnataka road winding factor: Western Ghats / Coastal has higher curvature (~1.34), Deccan plateau ~1.24
  const isGhatOrCoast = (originCoords.lng < 75.5 || destCoords.lng < 75.5);
  const circuityFactor = isGhatOrCoast ? 1.32 : 1.24;

  return Math.max(15, Math.round(straightLineKm * circuityFactor));
}

/**
 * Groups starting locations by region for clean UI display.
 */
export function getStartingLocationsByRegion() {
  const regions = {
    Southern: { title: 'Southern Karnataka (ದಕ್ಷಿಣ ಕರ್ನಾಟಕ)', locations: [] },
    Coastal: { title: 'Coastal & Malenadu (ಕರಾವಳಿ & ಮಲೆನಾಡು)', locations: [] },
    Central: { title: 'Central Karnataka (ಮಧ್ಯ ಕರ್ನಾಟಕ)', locations: [] },
    Northern: { title: 'Northern & Kalyana Karnataka (ಉತ್ತರ & ಕಲ್ಯಾಣ ಕರ್ನಾಟಕ)', locations: [] }
  };

  for (const loc of KARNATAKA_STARTING_LOCATIONS) {
    if (loc.region === 'Coastal' || loc.regionKn.includes('ಮಲೆನಾಡು')) {
      regions.Coastal.locations.push(loc);
    } else if (loc.region === 'Southern') {
      regions.Southern.locations.push(loc);
    } else if (loc.region === 'Central') {
      regions.Central.locations.push(loc);
    } else {
      regions.Northern.locations.push(loc);
    }
  }

  return regions;
}
