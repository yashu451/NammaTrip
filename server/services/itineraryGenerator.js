import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load curated destinations data
let destinationsList = [];
try {
  const destPath = path.resolve(__dirname, '../data/destinations.json');
  destinationsList = JSON.parse(fs.readFileSync(destPath, 'utf8'));
} catch (e) {
  console.warn('Could not load destinations.json in generator:', e.message);
}

// Destination-specific curated daily templates
const CURATED_ITINERARIES = {
  hampi: [
    {
      day: 1,
      title: "Sacred Center & Hemakuta Sunset",
      titleKn: "ಪವಿತ್ರ ಕ್ಷೇತ್ರ ದರ್ಶನ ಮತ್ತು ಹೇಮಕೂಟ ಸೂರ್ಯಾಸ್ತ",
      focus: "Ancient Temples, Tungabhadra Banks & Boulders",
      focusKn: "ಪ್ರಾಚೀನ ದೇವಾಲಯಗಳು, ತುಂಗಭದ್ರಾ ತೀರ ಮತ್ತು ಬಂಡೆಗಲ್ಲುಗಳು",
      morning: {
        time: "06:30 AM - 10:30 AM",
        title: "Virupaksha Temple & Hemakuta Hill Shrine Trail",
        titleKn: "ಶ್ರೀ ವಿರೂಪಾಕ್ಷ ದೇವಾಲಯ ಮತ್ತು ಹೇಮಕೂಟ ಬೆಟ್ಟದ ತಾಣಗಳು",
        location: "Hampi Sacred Center",
        description: "Begin with morning Aarti at the 7th-century Virupaksha Temple, the only continuously active shrine in Hampi. Marvel at the inverted pinhole camera shadow of the Rajagopura. Walk up Hemakuta Hill dotted with pre-Vijayanagara trikuta shrines.",
        descriptionKn: "೭ನೇ ಶತಮಾನದ ಶ್ರೀ ವಿರೂಪಾಕ್ಷ ಸ್ವಾಮಿಯ ಮುಂಜಾನೆಯ ಮಂಗಳಾರತಿಯೊಂದಿಗೆ ಆರಂಭಿಸಿ. ರಾಜಗೋಪುರದ ತಲೆಕೆಳಗಾದ ನೆರಳಿನ ಅಚ್ಚರಿಯನ್ನು ಕಣ್ತುಂಬಿಕೊಳ್ಳಿ. ನಂತರ ಪ್ರಾಚೀನ ತ್ರಿಕೂಟ ದೇಗುಲಗಳಿರುವ ಹೇಮಕೂಟ ಬೆಟ್ಟಕ್ಕೆ ಭೇಟಿ ನೀಡಿ.",
        estimatedFee: 50
      },
      lunch: {
        spot: "Mango Tree Restaurant / Taste of Brahmins",
        spotKn: "ಮ್ಯಾಂಗೋ ಟ್ರೀ / ಬ್ರಾಹ್ಮಿನ್ಸ್ ಮೆಸ್",
        dish: "Traditional Karnataka South Indian Banana Leaf Thali with freshly churned buttermilk",
        dishKn: "ಬಾಳೆ ಎಲೆ ಊಟ, ಸಾಂಬಾರ್, ಪಲ್ಯ, ರಸಂ ಮತ್ತು ತಾಜಾ ಮಜ್ಜಿಗೆ",
        estCost: 250
      },
      afternoon: {
        time: "02:30 PM - 05:00 PM",
        title: "Monolithic Kadalekalu & Sasivekalu Ganeshas & Krishna Temple",
        titleKn: "ಕಡಲೆಕಾಳು ಮತ್ತು ಸಾಸಿವೆಕಾಳು ಗಣಪತಿ ಹಾಗೂ ಕೃಷ್ಣ ದೇವಾಲಯ",
        location: "Hemakuta Foothills",
        description: "Inspect the colossal 18-foot Kadalekalu Ganesha carved from a single boulder, alongside the delicate Sasivekalu Ganesha with snake belly cord. Explore King Krishnadevaraya's celebration Krishna Temple plinth carvings.",
        descriptionKn: "ಒಂದೇ ಬಂಡೆಯಲ್ಲಿ ಕೆತ್ತಲಾದ ೧೮ ಅಡಿ ಎತ್ತರದ ಕಡಲೆಕಾಳು ಗಣಪತಿ ಮತ್ತು ಸಾಸಿವೆಕಾಳು ಗಣಪತಿಯನ್ನು ವೀಕ್ಷಿಸಿ. ಶ್ರೀಕೃಷ್ಣದೇವರಾಯನು ಒಡಿಶಾ ವಿಜಯದ ನೆನಪಿನಲ್ಲಿ ಕಟ್ಟಿಸಿದ ಕೃಷ್ಣ ದೇಗುಲವನ್ನು ನೋಡಿ.",
        estimatedFee: 40
      },
      evening: {
        time: "05:30 PM - 07:00 PM",
        title: "Matanga Hill or Hemakuta Sunset & Coracle Ride",
        titleKn: "ಮಾತಂಗ ಬೆಟ್ಟ ಅಥವಾ ಹೇಮಕೂಟ ಸೂರ್ಯಾಸ್ತ ಮತ್ತು ತೆಪ್ಪದ ಸವಾರಿ",
        description: "Watch the golden dusk wash over endless boulder fields and Tungabhadra bends. Option for an evening coracle boat float on the river.",
        descriptionKn: "ಬಂಡೆಗಲ್ಲುಗಳ ನಡುವೆ ಸೂರ್ಯ ಮುಳುಗುವ ಸುವರ್ಣ ದೃಶ್ಯ. ತುಂಗಭದ್ರಾ ನದಿಯಲ್ಲಿ ಸಾಂಪ್ರದಾಯಿಕ ಬುಟ್ಟಿ ದೋಣಿ (ತೆಪ್ಪ) ಸವಾರಿಯ ಅನುಭವ ಪಡೆಯಿರಿ.",
        estimatedFee: 200
      },
      culturalTip: "Remove footwear outside temple courtyards. Photography is permitted inside outer courtyards, but avoid flash in inner sanctums.",
      culturalTipKn: "ದೇವಾಲಯದ ಆವರಣದ ಹೊರಗೆ ಪಾದರಕ್ಷೆ ಬಿಡಿ. ಗರ್ಭಗುಡಿಯ ಒಳಗೆ ಫೋಟೋ ತೆಗೆಯುವುದನ್ನು ನಿಷೇಧಿಸಲಾಗಿದೆ."
    },
    {
      day: 2,
      title: "Royal Citadel & The Stone Chariot of Vittala",
      titleKn: "ವಿಜಯ ವಿಠ್ಠಲ ಕಲ್ಲಿನ ರಥ ಮತ್ತು ರಾಜ ಸೌಧಗಳ ವೈಭವ",
      focus: "Imperial Palaces, Musical Pillars & Architectural Zenith",
      focusKn: "ರಾಜಮಹಲ್, ಸಂಗೀತ ಸ್ತಂಭಗಳು ಮತ್ತು ವಾಸ್ತುಶಿಲ್ಪದ ಉತ್ತುಂಗ",
      morning: {
        time: "07:30 AM - 11:30 AM",
        title: "Vijaya Vittala Temple Complex & Iconic Stone Chariot",
        titleKn: "ವಿಜಯ ವಿಠ್ಠಲ ದೇವಾಲಯ ಮತ್ತು ಜಗತ್ಪ್ರಸಿದ್ಧ ಕಲ್ಲಿನ ರಥ",
        location: "North-Eastern Hampi Banks",
        description: "Explore the pinnacle of Vijayanagara art: the Garuda Stone Chariot (featured on India's ₹50 note) and the Ranga Mandapa with 56 musical granite pillars that resonate with musical notes when gently tapped.",
        descriptionKn: "ವಿಜಯನಗರ ವಾಸ್ತುಶಿಲ್ಪದ ಪರಮೋಚ್ಛ ಶಿಖರ: ಭಾರತೀಯ ₹೫೦ ನೋಟಿನಲ್ಲಿರುವ ಗರುಡ ಕಲ್ಲಿನ ರಥ ಹಾಗೂ ಮೆಲ್ಲಗೆ ನುಡಿಸಿದರೆ ಸಪ್ತಸ್ವರ ಹೊರಹೊಮ್ಮುವ ೫೬ ಸಂಗೀತ ಸ್ತಂಭಗಳ ರಂಗಮಂಟಪ.",
        estimatedFee: 40
      },
      lunch: {
        spot: "Kamalapura KSTDC Mayura Bhuvaneshwari",
        spotKn: "ಕಮಲಾಪುರದ ಕೆ.ಎಸ್.ಟಿ.ಡಿ.ಸಿ ಮಯೂರ ಭುವನೇಶ್ವರಿ",
        dish: "North Karnataka Jolada Rotti Oota with stuffed brinjal (Yennegai) and Shenga Chutney",
        dishKn: "ಉತ್ತರ ಕರ್ನಾಟಕದ ಜೋಳದ ರೊಟ್ಟಿ, ಎಣ್ಣೆಗಾಯಿ ಬದನೆಕಾಯಿ ಪಲ್ಯ ಮತ್ತು ಶೇಂಗಾ ಚಟ್ನಿ ಪುಡಿ",
        estCost: 280
      },
      afternoon: {
        time: "02:00 PM - 05:00 PM",
        title: "Zenana Enclosure, Lotus Mahal & Elephant Stables",
        titleKn: "ಝೆನಾನಾ ಆವರಣ, ಕಮಲ ಮಹಲ್ ಮತ್ತು ಆನೆ ಲಾಯ",
        location: "Royal Center",
        description: "Walk inside the fortified royal queens' quarters. Admire the Indo-Islamic fusion Lotus Mahal with terracotta cooling conduits and the grand eleven domed Elephant Stables designed to house royal tusker mounts.",
        descriptionKn: "ರಾಣಿಯರ ಅಂತಃಪುರ, ಕಮಲದ ಹೂವಿನ ಆಕಾರದ ಸುಂದರ ಕಮಲ ಮಹಲ್ ಹಾಗೂ ವಿಜಯನಗರದ ರಾಜ ಗಜಪಡೆಗಳಿಗಾಗಿ ನಿರ್ಮಿಸಲಾದ ೧೧ ಗುಮ್ಮಟಗಳ ಭವ್ಯ ಆನೆ ಲಾಯ.",
        estimatedFee: 40
      },
      evening: {
        time: "05:30 PM - 07:30 PM",
        title: "Queen's Bath & Hampi Bazaar Heritage Stroll",
        titleKn: "ರಾಣಿಯ ಸ್ನಾನಗೃಹ ಮತ್ತು ಹಂಪಿ ಬಜಾರ್ ನಡಿಗೆ",
        description: "Visit the ornate Queen's Bath with Indo-Saracenic vaulted corridors, followed by a walk through the historical bazaar street where rubies and diamonds were once traded by the kilogram.",
        descriptionKn: "ಸುಂದರ ವಾಸ್ತುಶಿಲ್ಪದ ರಾಣಿಯ ಸ್ನಾನಗೃಹ ಮತ್ತು ಹಿಂದೆ ರತ್ನ-ವಜ್ರಗಳನ್ನು ಸೇರಿನಲ್ಲಿ ಅಳೆದು ಮಾರುತ್ತಿದ್ದ ಐತಿಹಾಸಿಕ ಹಂಪಿ ರಥಬೀದಿಯ ನಡಿಗೆ.",
        estimatedFee: 0
      },
      culturalTip: "Hire a certified ASI guide (with badge) at the Vittala entrance to truly appreciate the subtle acoustics and symbolism.",
      culturalTipKn: "ವಿಠ್ಠಲ ದೇಗುಲದ ಪ್ರವೇಶದ್ವಾರದಲ್ಲಿ ಪುರಾತತ್ವ ಇಲಾಖೆಯ ಪ್ರಮಾಣೀಕೃತ ಗೈಡ್ ಪಡೆದರೆ ವಾಸ್ತುಶಿಲ್ಪದ ಸೂಕ್ಷ್ಮಗಳನ್ನು ಚೆನ್ನಾಗಿ ಅರಿಯಬಹುದು."
    },
    {
      day: 3,
      title: "Across the River to Anegundi — Kishkindha Realm",
      titleKn: "ತುಂಗಭದ್ರಾ ದಾಟಿ ಆನೆಗೊಂದಿ — ಪುರಾಣ ಪ್ರಸಿದ್ಧ ಕಿಷ್ಕಿಂಧೆ",
      focus: "Mythology, Sanapur Lake & Rural Heritage",
      focusKn: "ರಾಮಾಯಣದ ಇತಿಹಾಸ, ಸಾನಾಪುರ ಸರೋವರ ಮತ್ತು ಗ್ರಾಮೀಣ ಬದುಕು",
      morning: {
        time: "08:00 AM - 11:30 AM",
        title: "Anjanadri Hill (Birthplace of Lord Hanuman)",
        titleKn: "ಅಂಜನಾದ್ರಿ ಬೆಟ್ಟ (ಶ್ರೀ ಹನುಮಂತನ ಜನ್ಮಸ್ಥಳ)",
        location: "Anegundi, Gangavathi",
        description: "Climb the 575 steps of Anjanadri Hill in Kishkindha kingdom. Experience breathtaking 360-degree vistas over the emerald Tungabhadra valley, paddy terraces, and boulder mountains.",
        descriptionKn: "ರಾಮಾಯಣದ ಕಿಷ್ಕಿಂಧೆಯ ೫೭೫ ಮೆಟ್ಟಿಲುಗಳನ್ನು ಹತ್ತಿ ಅಂಜನಾದ್ರಿ ಬೆಟ್ಟದ ಶಿಖರ ತಲುಪಿ. ಹಚ್ಚಹಸಿರಿನ ಗದ್ದೆಗಳು ಮತ್ತು ಬಂಡೆಗಲ್ಲುಗಳ ಸುಂದರ ಪಕ್ಷಿನೋಟವನ್ನು ಆನಂದಿಸಿ.",
        estimatedFee: 0
      },
      lunch: {
        spot: "The Goan Corner / Laughing Buddha Cafe, Sanapur",
        spotKn: "ಸಾನಾಪುರದ ಗ್ರಾಮೀಣ ಕೆಫೆ",
        dish: "Fresh Woodfired Roti & Coconut Curry with seasonal local greens",
        dishKn: "ತಾಜಾ ರೊಟ್ಟಿ, ತರಕಾರಿ ಪಲ್ಯ ಮತ್ತು ಎಳನೀರು",
        estCost: 220
      },
      afternoon: {
        time: "02:00 PM - 05:00 PM",
        title: "Pampa Sarovar, Chintamani Temple & Sanapur Lake Boulders",
        titleKn: "ಪಂಪಾ ಸರೋವರ, ಚಿಂತಾಮಣಿ ದೇವಾಲಯ ಮತ್ತು ಸಾನಾಪುರ ಕೆರೆ",
        location: "Anegundi Rural Circuit",
        description: "Visit Pampa Sarovar, one of Hinduism's five sacred lakes mentioned in Ramayana. Explore the Chintamani complex where Rama met Sugriva, and relax beside the tranquil Sanapur reservoir.",
        descriptionKn: "ರಾಮಾಯಣದಲ್ಲಿ ಉಲ್ಲೇಖಿತವಾದ ಪವಿತ್ರ ಪಂಪಾ ಸರೋವರ, ಶ್ರೀರಾಮ-ಸುಗ್ರೀವರ ಭೇಟಿಯ ಸ್ಥಳವಾದ ಚಿಂತಾಮಣಿ ಆವರಣ ಮತ್ತು ಸಾನಾಪುರ ಜಲಾಶಯದ ಬಂಡೆಗಳ ರಮಣೀಯ ದೃಶ್ಯ.",
        estimatedFee: 50
      },
      evening: {
        time: "05:30 PM - 07:30 PM",
        title: "Anegundi Banana Fiber Craft Workshop & Sunset",
        titleKn: "ಆನೆಗೊಂದಿ ಬಾಳೆ ನಾರಿನ ಕರಕುಶಲ ಕೇಂದ್ರ ಮತ್ತು ಸೂರ್ಯಾಸ್ತ",
        description: "Support local women artisans producing eco-friendly mats and bags from discarded banana trunks at the Kishkindha Trust. Enjoy quiet countryside sunset.",
        descriptionKn: "ಕಿಷ್ಕಿಂಧಾ ಟ್ರಸ್ಟ್‌ನಲ್ಲಿ ಗ್ರಾಮೀಣ ಮಹಿಳೆಯರು ಬಾಳೆ ನಾರಿನಿಂದ ಪರಿಸರಸ್ನೇಹಿ ಚೀಲ, ಮ್ಯಾಟ್ ತಯಾರಿಸುವ ಕಲೆಯ ವೀಕ್ಷಣೆ ಮತ್ತು ಗ್ರಾಮೀಣ ಸೂರ್ಯಾಸ್ತ.",
        estimatedFee: 0
      },
      culturalTip: "Keep all bags zipped on Anjanadri Hill as friendly resident monkeys are curious about loose food.",
      culturalTipKn: "ಅಂಜನಾದ್ರಿ ಬೆಟ್ಟದಲ್ಲಿ ಕಪಿಗಳು ಇರುವುದರಿಂದ ಹಣ್ಣು-ಆಹಾರವನ್ನು ಚೀಲದ ಒಳಗೆ ಜೋಪಾನವಾಗಿ ಇರಿಸಿಕೊಳ್ಳಿ."
    }
  ],
  mysuru: [
    {
      day: 1,
      title: "Royal Grandeur of Ambavilas & Chamundi Foothills",
      titleKn: "ಅಂಬಾವಿಲಾಸ ಅರಮನೆ ವೈಭವ ಮತ್ತು ಚಾಮುಂಡಿ ಬೆಟ್ಟ",
      focus: "Wadiyar Dynasty Palaces, Gilt Murals & Panoramic City",
      focusKn: "ಒಡೆಯರ್ ರಾಜವಂಶದ ಅರಮನೆ, ಚಿನ್ನದ ಲೇಪನದ ವರ್ಣಚಿತ್ರಗಳು",
      morning: {
        time: "07:30 AM - 10:30 AM",
        title: "Chamundi Hill & Monolithic Nandi",
        titleKn: "ಚಾಮುಂಡಿ ಬೆಟ್ಟದ ತಾಯಿ ಚಾಮುಂಡೇಶ್ವರಿ ಸನ್ನಿಧಿ ಮತ್ತು ಬೃಹತ್ ನಂದಿ",
        location: "Chamundi Hills",
        description: "Seek blessings at the Dravidian-styled Sri Chamundeshwari Temple atop the 1,000-meter hill. Descend to the 350-year-old monolithic bull Nandi carved out of a single black basalt outcrop.",
        descriptionKn: "೧,೦೦೦ ಮೀಟರ್ ಎತ್ತರದ ಚಾಮುಂಡಿ ಬೆಟ್ಟದ ಮೇಲಿರುವ ನಾಡದೇವತೆ ಚಾಮುಂಡೇಶ್ವರಿಯ ದರ್ಶನ ಪಡೆಯಿರಿ. ನಂತರ ದಾರಿಯಲ್ಲಿರುವ ೧೬ ಅಡಿ ಎತ್ತರದ ಕಪ್ಪುಶಿಲೆಯ ಬೃಹತ್ ನಂದಿ ವಿಗ್ರಹವನ್ನು ವೀಕ್ಷಿಸಿ.",
        estimatedFee: 100
      },
      lunch: {
        spot: "Hotel Original Mylari, Nazarbad",
        spotKn: "ಮೈಲಾರಿ ಹೋಟೆಲ್, ನಜರ್‌ಬಾದ್",
        dish: "Legendary melt-in-mouth Mylari Butter Masale Dose with coconut-coriander chutney",
        dishKn: "ಪ್ರಸಿದ್ಧ ಮೈಲಾರಿ ಬೆಣ್ಣೆ ಮಸಾಲೆ ದೋಸೆ ಮತ್ತು ಸಾಗು-ತೆಂಗಿನಕಾಯಿ ಚಟ್ನಿ",
        estCost: 150
      },
      afternoon: {
        time: "01:30 PM - 04:30 PM",
        title: "Mysore Palace (Ambavilas) Audio Tour & Durbar Halls",
        titleKn: "ಮೈಸೂರು ಅರಮನೆ (ಅಂಬಾವಿಲಾಸ) ಒಳಾಂಗಣ ದರ್ಶನ",
        location: "Mysuru Heart",
        description: "Walk barefoot through the stained glass ceilings, Belgian mirrors, carved rosewood doorways, and solid silver doors of the Diwan-i-Khas and the Golden Throne chamber.",
        descriptionKn: "ಬೆಲ್ಜಿಯಂ ಕನ್ನಡಿಗಳು, ಬಣ್ಣದ ಗಾಜಿನ ಸೀಲಿಂಗ್, ನವಿಲು ಮಂಟಪ ಮತ್ತು ನವರಾತ್ರಿಯ ಚಿನ್ನದ ಸಿಂಹಾಸನದ ಕೊಠಡಿ ಹೊಂದಿರುವ ಭವ್ಯ ಅರಮನೆಯ ಒಳಾಂಗಣ ವೀಕ್ಷಣೆ.",
        estimatedFee: 100
      },
      evening: {
        time: "05:00 PM - 07:30 PM",
        title: "Devaraja Century-old Market Walk & Heritage Sweets",
        titleKn: "ದೇವರಾಜ ಮಾರುಕಟ್ಟೆ ನಡಿಗೆ ಮತ್ತು ಮೈಸೂರು ಪಾಕ್ ರುಚಿ",
        description: "Stroll through the 130-year-old colonial arches filled with Mysore Mallige jasmine cones, kumkum towers, and sandalwood essences. Taste warm Mysore Pak at Guru Sweet Mart.",
        descriptionKn: "ಮೈಸೂರು ಮಲ್ಲಿಗೆ, ಕುಂಕುಮದ ರಾಶಿಗಳು ಮತ್ತು ಶ್ರೀಗಂಧದ ಪರಿಮಳ ತುಂಬಿರುವ ದೇವರಾಜ ಮಾರುಕಟ್ಟೆಯ ನಡಿಗೆ. ಗುರು ಸ್ವೀಟ್ ಮಾರ್ಟ್‌ನಲ್ಲಿ ಬಿಸಿಬಿಸಿ ಮೈಸೂರು ಪಾಕ್ ಸವಿಯಿರಿ.",
        estimatedFee: 150
      },
      culturalTip: "On Sundays and public holidays, the entire exterior of Mysore Palace is illuminated with nearly 100,000 electric bulbs from 7:00 PM to 7:45 PM—do not miss it!",
      culturalTipKn: "ಭಾನುವಾರ ಮತ್ತು ಸರ್ಕಾರಿ ರಜಾದಿನಗಳಲ್ಲಿ ಸಂಜೆ ೭:೦೦ ರಿಂದ ೭:೪೫ ರವರೆಗೆ ಅರಮನೆಯು ಒಂದು ಲಕ್ಷ ವಿದ್ಯುದ್ದೀಪಗಳಿಂದ ಕಂಗೊಳಿಸುತ್ತದೆ."
    },
    {
      day: 2,
      title: "Artisans of Srirangapatna & Hoysala Somanathapura",
      titleKn: "ಶ್ರೀರಂಗಪಟ್ಟಣದ ಐತಿಹಾಸಿಕ ತಾಣಗಳು ಮತ್ತು ಸೋಮನಾಥಪುರ ದೇಗುಲ",
      focus: "Island Fortress of Tipu, Cauvery Waters & Soapstone Filigree",
      focusKn: "ಟಿಪ್ಪು ಸುಲ್ತಾನರ ಕೋಟೆ, ಕಾವೇರಿ ತೀರ ಮತ್ತು ಹೊಯ್ಸಳ ಶಿಲ್ಪಕಲೆ",
      morning: {
        time: "08:00 AM - 11:30 AM",
        title: "Srirangapatna Island Fortress & Daria Daulat Bagh",
        titleKn: "ಶ್ರೀರಂಗಪಟ್ಟಣದ ಕೋಟೆ ಮತ್ತು ದರಿಯಾ ದೌಲತ್ ಬಾಗ್",
        location: "Srirangapatna (15 km from Mysuru)",
        description: "Explore the oval river-island fortress: Ranganathaswamy Temple, Tipu Sultan's teakwood summer palace with vibrant war murals, and the historic dungeon.",
        descriptionKn: "ಕಾವೇರಿ ನದಿಯ ದ್ವೀಪ ಕೋಟೆ: ಶ್ರೀ ರಂಗನಾಥಸ್ವಾಮಿ ದೇವಸ್ಥಾನ, ಟಿಪ್ಪು ಸುಲ್ತಾನರ ಬೇಸಿಗೆ ಅರಮನೆ (ದರಿಯಾ ದೌಲತ್) ಮತ್ತು ಕದನ ವರ್ಣಚಿತ್ರಗಳು.",
        estimatedFee: 50
      },
      lunch: {
        spot: "Poojari's Fish Land / Ranganatha Mess",
        spotKn: "ಪೂಜಾರಿಸ್ / ರಂಗನಾಥ ಮೆಸ್",
        dish: "Cauvery freshwater fish fry or traditional South Indian Veg meals",
        dishKn: "ಕಾವೇರಿ ಮೀನು ಫ್ರೈ ಅಥವಾ ಸಾಂಪ್ರದಾಯಿಕ ದಕ್ಷಿಣ ಭಾರತೀಯ ಸಸ್ಯಾಹಾರಿ ಊಟ",
        estCost: 300
      },
      afternoon: {
        time: "02:00 PM - 05:00 PM",
        title: "Keshava Temple at Somanathapura (UNESCO World Heritage)",
        titleKn: "ಸೋಮನಾಥಪುರದ ಪ್ರಸನ್ನ ಚೆನ್ನಕೇಶವ ದೇವಾಲಯ (ಯುನೆಸ್ಕೋ ತಾಣ)",
        location: "Somanathapura (35 km east of Mysuru)",
        description: "Admire the 1268 CE trikuta Hoysala temple, an impeccably preserved star-shaped marvel showcasing 16-point plinths covered in epic soapstone reliefs.",
        descriptionKn: "ಕ್ರಿ.ಶ. ೧೨೬೮ರ ಹೊಯ್ಸಳ ತ್ರಿಕೂಟ ನಕ್ಷತ್ರಾಕಾರದ ದೇವಾಲಯ. ರಾಮಾಯಣ, ಭಾಗವತಗಳ ಕಥೆಗಳನ್ನು ಬಳಪದ ಕಲ್ಲಿನಲ್ಲಿ ಬಿಂಬಿಸಿರುವ ಅತ್ಯದ್ಭುತ ಶಿಲ್ಪಕಲೆ.",
        estimatedFee: 40
      },
      evening: {
        time: "06:00 PM - 08:00 PM",
        title: "KRS Dam & Brindavan Musical Fountain",
        titleKn: "ಕೃಷ್ಣರಾಜ ಸಾಗರ (ಕೆ.ಆರ್.ಎಸ್) ಮತ್ತು ಬೃಂದಾವನ ನೃತ್ಯ ಕಾರಂಜಿ",
        description: "Wander across the terraced illuminated gardens built below Sir M. Visvesvaraya's engineering feat across the Cauvery River.",
        descriptionKn: "ಸರ್ ಎಂ. ವಿಶ್ವೇಶ್ವರಯ್ಯನವರ ತಾಂತ್ರಿಕ ಸಾಧನೆಯಾದ ಕೆ.ಆರ್.ಎಸ್ ಅಣೆಕಟ್ಟಿನ ಕೆಳಭಾಗದಲ್ಲಿರುವ ಬೃಂದಾವನ ಉದ್ಯಾನವನದ ಬಣ್ಣದ ಕಾರಂಜಿಗಳ ಪ್ರದರ್ಶನ.",
        estimatedFee: 100
      },
      culturalTip: "Silk shopping is safest at KSIC Government Silk Factory showrooms to ensure authentic pure gold zari.",
      culturalTipKn: "ಅಸಲಿ ಮೈಸೂರು ಸಿಲ್ಕ್ ಸೀರೆಗಳಿಗಾಗಿ ಸರ್ಕಾರಿ ಕೆ.ಎಸ್.ಐ.ಸಿ (KSIC) ಮಳಿಗೆಗಳನ್ನು ಮಾತ್ರ ಆರಿಸಿಕೊಳ್ಳಿ."
    }
  ]
};

// Generic day fallback for any Karnataka circuit
function createGenericDay(dest, dayNum) {
  const nameEn = dest ? dest.name : 'Karnataka Heritage';
  const nameKn = dest ? dest.nameKn : 'ಕರ್ನಾಟಕ ಪರಂಪರೆ';
  const highlights = dest?.keyHighlights || ["Explore historic temple complex", "Stroll through local bazaar", "Sunset view point"];
  const highlightsKn = dest?.keyHighlightsKn || ["ಐತಿಹಾಸಿಕ ದೇಗುಲದ ವೀಕ್ಷಣೆ", "ಸ್ಥಳೀಯ ಮಾರುಕಟ್ಟೆಯ ನಡಿಗೆ", "ಸೂರ್ಯಾಸ್ತ ತಾಣ"];

  const h1 = highlights[(dayNum - 1) % highlights.length];
  const h1Kn = highlightsKn[(dayNum - 1) % highlightsKn.length];
  const h2 = highlights[(dayNum) % highlights.length];
  const h2Kn = highlightsKn[(dayNum) % highlightsKn.length];

  return {
    day: dayNum,
    title: `Exploring ${nameEn} — Heritage Circuit ${dayNum}`,
    titleKn: `${nameKn} ದರ್ಶನ — ಪಾರಂಪರಿಕ ಹಾದಿ ${dayNum}`,
    focus: `Architecture, Local Culture & Traditional Crafts`,
    focusKn: `ವಾಸ್ತುಶಿಲ್ಪ, ಸ್ಥಳೀಯ ಸಂಸ್ಕೃತಿ ಮತ್ತು ಕರಕುಶಲ ಕಲೆ`,
    morning: {
      time: "08:00 AM - 11:30 AM",
      title: h1,
      titleKn: h1Kn,
      location: nameEn,
      description: `Guided exploration of ${nameEn}'s primary monument and historical heritage sites. Discover the architectural genius of ancient dynasties.`,
      descriptionKn: `${nameKn}ದ ಪ್ರಮುಖ ಸ್ಮಾರಕ ಮತ್ತು ಐತಿಹಾಸಿಕ ತಾಣಗಳ ಮಾರ್ಗದರ್ಶಿ ಪ್ರವಾಸ. ಪ್ರಾಚೀನ ರಾಜವಂಶಗಳ ವಾಸ್ತುಶಿಲ್ಪ ವೈಭವವನ್ನು ಕಣ್ತುಂಬಿಕೊಳ್ಳಿ.`,
      estimatedFee: 40
    },
    lunch: {
      spot: `Authentic Local ${nameEn} Mess`,
      spotKn: `ಸಾಂಪ್ರದಾಯಿಕ ಸ್ಥಳೀಯ ಹೋಟೆಲ್`,
      dish: dest?.localFood || "Traditional Karnataka Thali with local specialty dishes",
      dishKn: dest?.localFoodKn || "ಸಾಂಪ್ರದಾಯಿಕ ಕರ್ನಾಟಕದ ಊಟ ಮತ್ತು ಸ್ಥಳೀಯ ತಿನಿಸುಗಳು",
      estCost: 200
    },
    afternoon: {
      time: "02:00 PM - 05:00 PM",
      title: h2,
      titleKn: h2Kn,
      location: nameEn,
      description: `Visit nearby architectural wonders, tranquil lakes, and museum collections displaying ancient stone epigraphs.`,
      descriptionKn: `ಸನಿಹದ ವಾಸ್ತುಶಿಲ್ಪದ ಅದ್ಭುತಗಳು, ಪ್ರಶಾಂತ ಜಲಾಶಯಗಳು ಹಾಗೂ ಪುರಾತನ ಶಾಸನಗಳ ಸಂಗ್ರಹಾಲಯಕ್ಕೆ ಭೇಟಿ ನೀಡಿ.`,
      estimatedFee: 50
    },
    evening: {
      time: "05:30 PM - 07:30 PM",
      title: "Local Bazaar Walk & Sunset View",
      titleKn: "ಸ್ಥಳೀಯ ರಥಬೀದಿ ನಡಿಗೆ ಮತ್ತು ಸೂರ್ಯಾಸ್ತ ದರ್ಶನ",
      description: `Browse traditional handlooms, fragrant spice stalls, and unwind with fresh filter coffee as the sun dips below the horizon.`,
      descriptionKn: `ಸ್ಥಳೀಯ ಕೈಮಗ್ಗದ ಬಟ್ಟೆಗಳು, ನೈಸರ್ಗಿಕ ಸಂಬಾರ ಪದಾರ್ಥಗಳ ಅಂಗಡಿಗಳನ್ನು ವೀಕ್ಷಿಸಿ ಮತ್ತು ಬಿಸಿಬಿಸಿ ಫಿಲ್ಟರ್ ಕಾಫಿಯೊಂದಿಗೆ ಸಂಜೆಯ ಸೂರ್ಯಾಸ್ತವನ್ನು ಆನಂದಿಸಿ.`,
      estimatedFee: 0
    },
    culturalTip: "Gently greet locals with 'Namaskara' (ನಮಸ್ಕಾರ) and ask before photographing portrait subjects.",
    culturalTipKn: "ಸ್ಥಳೀಯರನ್ನು ಗೌರವದಿಂದ 'ನಮಸ್ಕಾರ' ಎಂದು ವಂದಿಸಿ. ಯಾರನ್ನಾದರೂ ಛಾಯಾಚಿತ್ರ ತೆಗೆಯುವ ಮುನ್ನ ಅನುಮತಿ ಪಡೆಯಿರಿ."
  };
}

export function generateCuratedItinerary({
  destinationId = 'hampi',
  durationDays = 3,
  interests = ['Heritage', 'Culture', 'Food'],
  travelers = 2,
  budgetTier = 'moderate'
}) {
  const normDest = (destinationId || 'hampi').toLowerCase();
  const destInfo = destinationsList.find(d => d.id === normDest) || destinationsList[0];
  const numDays = Math.max(1, parseInt(durationDays, 10) || 3);

  const days = [];
  const preset = CURATED_ITINERARIES[normDest] || [];

  for (let i = 1; i <= numDays; i++) {
    if (preset[i - 1]) {
      days.push(preset[i - 1]);
    } else {
      days.push(createGenericDay(destInfo, i));
    }
  }

  return days;
}

export async function generateItineraryPlan({
  startingCity = 'Bengaluru',
  destinationId = 'hampi',
  durationDays = 3,
  interests = ['Heritage', 'Culture', 'Food'],
  travelers = 2,
  budgetPerPerson = 5000,
  transportMode = 'ksrtc',
  stayTier = 'moderate',
  foodTier = 'moderate',
  language = 'en'
}) {
  const destInfo = destinationsList.find(d => d.id === destinationId.toLowerCase()) || destinationsList[0];

  // Check if GEMINI_API_KEY is configured
  const apiKey = process.env.GEMINI_API_KEY;
  const budgetTier = stayTier;

  if (apiKey && apiKey.trim() !== '') {
    try {
      const { GoogleGenAI } = await import('@google/genai');
      const ai = new GoogleGenAI({ apiKey });

      const prompt = `
You are the master travel planner for 'NammaTrip AI', the premier Karnataka heritage and cultural travel platform.
Generate a structured, authentic ${durationDays}-day day-wise travel itinerary from ${startingCity} to ${destInfo.name} (${destInfo.nameKn}), Karnataka.

Key Constraints:
- Starting location: ${startingCity}, Karnataka
- Number of travelers: ${travelers}
- Budget per person: ₹${budgetPerPerson} (${budgetTier} tier)
- Transport mode: ${transportMode}
- Interests: ${interests.join(', ')}
- Output MUST be clean JSON with no extra commentary or markdown formatting.

Format the response strictly as a JSON array of days:
[
  {
    "day": 1,
    "title": "Title in English",
    "titleKn": "ಕನ್ನಡದಲ್ಲಿ ಶೀರ್ಷಿಕೆ",
    "focus": "Theme in English",
    "focusKn": "ಕನ್ನಡದಲ್ಲಿ ವಿಷಯ",
    "morning": {
      "time": "08:00 AM - 11:30 AM",
      "title": "Morning Activity",
      "titleKn": "ಮುಂಜಾನೆಯ ಚಟುವಟಿಕೆ",
      "location": "Specific place name",
      "description": "Historical/cultural context",
      "descriptionKn": "ಐತಿಹಾಸಿಕ ಮಾಹಿತಿ",
      "estimatedFee": 50
    },
    "lunch": {
      "spot": "Authentic restaurant name",
      "spotKn": "ಹೋಟೆಲ್ ಹೆಸರು",
      "dish": "Specific Karnataka dish",
      "dishKn": "ನಿರ್ದಿಷ್ಟ ಕನ್ನಡ ತಿನಿಸು",
      "estCost": 200
    },
    "afternoon": {
      "time": "02:00 PM - 05:00 PM",
      "title": "Afternoon Activity",
      "titleKn": "ಮಧ್ಯಾಹ್ನದ ಚಟುವಟಿಕೆ",
      "location": "Specific place name",
      "description": "Details",
      "descriptionKn": "ವಿವರ",
      "estimatedFee": 40
    },
    "evening": {
      "time": "05:30 PM - 07:30 PM",
      "title": "Evening Activity & Sunset",
      "titleKn": "ಸಂಜೆಯ ಚಟುವಟಿಕೆ",
      "description": "Details",
      "descriptionKn": "ವಿವರ",
      "estimatedFee": 0
    },
    "culturalTip": "A genuine tip on local etiquette, language or temple guidelines",
    "culturalTipKn": "ಸ್ಥಳೀಯ ಸಂಪ್ರದಾಯದ ಉಪಯುಕ್ತ ಸಲಹೆ"
  }
]
`;

      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: prompt,
        config: {
          responseMimeType: 'application/json'
        }
      });

      if (response && response.text) {
        const parsed = JSON.parse(response.text);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return {
            mode: 'gemini-ai',
            engineName: 'Gemini AI + NammaTrip Knowledge',
            itinerary: parsed
          };
        }
      }
    } catch (err) {
      console.warn('Gemini API call failed or timed out, seamlessly falling back to Curated Engine:', err.message);
    }
  }

  // Fallback to high-quality deterministic Curated Karnataka Engine
  const curated = generateCuratedItinerary({
    destinationId,
    durationDays,
    interests,
    travelers,
    budgetTier: stayTier
  });

  return {
    mode: 'curated-engine',
    engineName: 'NammaTrip Curated Karnataka Heritage Engine',
    itinerary: curated
  };
}
