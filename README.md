# 🛕 NammaTrip AI — ನಮ್ಮಟ್ರಿಪ್ AI

> **AI-Powered Karnataka Heritage & Affordable Travel Planner**  
> *ಹೆಸರಾಯಿತು ಕರ್ನಾಟಕ, ಉಸಿರಾಗಲಿ ಕನ್ನಡ • Plan authentic, budget-conscious journeys across Karnataka's royal dynasties, sacred landscapes, and living cultural traditions.*

---

## 🌟 Overview

**NammaTrip AI** is a full-stack, production-ready travel platform dedicated to Karnataka tourism. It blends cultural storytelling with programmatic cost calculations and adaptive AI trip planning.

Unlike generic travel platforms that provide generic tourist spots and arbitrary prices, NammaTrip AI:
1. **Focuses 100% on Karnataka's Heritage**: Curated content for Hampi, Mysuru, Badami, Belur, Halebidu, Pattadakal, Coorg, Gokarna, Chitradurga, Vijayapura, Udupi, and Chikmagalur with citations from the Archaeological Survey of India (ASI) and UNESCO.
2. **Speaks Fluent Kannada & English**: Complete, seamless bilingual localization switchable via a header toggle (`English | ಕನ್ನಡ`), persisting across visits and throughout user accounts.
3. **Calculates Real Programmatic Budgets**: Evaluates travel feasibility using real Karnataka transit distances, SWR train / KSRTC Airavat tariffs, verified room tiers, and ASI entry fees.
4. **Features "Fix My Trip"**: Programmatically adapts itineraries when constraints change (e.g. budget trimmed from ₹15,000 to ₹9,000, or duration reduced from 4 to 3 days), optimizing transport and stay while preserving core UNESCO heritage sights.
5. **Provides Real Authentication & Persistent Database Storage**: Secure salted bcrypt password hashing, JWT sessions, SQLite with WAL mode, profile settings, and private user itineraries.

---

## 🎨 Visual Design System

The application strictly implements the visual reference design rules:
- **Forest-Green Primary Palette**: `#0F2E23`, `#1B4332`, `#2D6A4F` representing the lush Western Ghats and royal Hoysala crests.
- **Warm Cream & Ivory Backgrounds**: `#FAF7F2`, `#F4EFE6` reflecting Mysore sandalwood and historic temple courtyards.
- **Turmeric-Orange & Marigold Accents**: `#D97706`, `#B45309`, `#FDE68A` representing Karnataka festive traditions and silk zari.
- **Authentic Motifs**: Custom SVG components for the **Gandaberunda** (Karnataka royal state emblem), **Hampi Stone Chariot**, and **Hoysala Star Platforms**.
- **Refined Typography**: `Cinzel` for royal heritage headings, `Plus Jakarta Sans` for clean modern body text, and `Noto Sans Kannada` for authentic Kannada rendering.

---

## 🏗️ Architecture & Technology Stack

```
NammaTrip AI Architecture:
┌────────────────────────────────────────────────────────┐
│               Frontend (React 19 + Vite)               │
│  - Vanilla CSS Design System with CSS Tokens           │
│  - Lucide React Heritage Icons & Google Fonts          │
│  - Full Bilingual Localization (English & Kannada)     │
│  - Protected & PublicOnly Route Wrappers               │
└───────────────────────────┬────────────────────────────┘
                            │ REST API (JSON / Bearer JWT)
┌───────────────────────────▼────────────────────────────┐
│              Backend (Express.js on Node 22)           │
│  - RESTful Controllers & Input Validation              │
│  - JWT Authentication Middleware + Password Resets     │
│  - Programmatic Budget Feasibility Engine              │
│  - Adaptive "Fix My Trip" Optimizer                    │
│  - Hybrid Itinerary Generator (Gemini AI + Curated)    │
└───────────────────────────┬────────────────────────────┘
                            │ SQL Queries (WAL mode)
┌───────────────────────────▼────────────────────────────┐
│            Database (SQLite 3 via node:sqlite)         │
│  - Users, User Profiles, Password Resets               │
│  - Saved Trips & Day-wise Itineraries                  │
│  - Bookmarked Favorite Destinations                    │
└────────────────────────────────────────────────────────┘
```

---

## 🚀 Quick Start & Local Development

### Prerequisites
- **Node.js**: v20+ or v22+ (`node:sqlite` built-in support)
- **NPM**: v9+

### 1. Clone & Install Dependencies
```bash
git clone https://github.com/yashu451/NammaTrip.git
cd NammaTrip
npm install
```

### 2. Configure Environment Variables
Copy `.env.example` to `.env`:
```bash
cp .env.example .env
```
*(Optional) If you have a Google Gemini API Key, set `GEMINI_API_KEY=your_key_here` in `.env`. If left empty, the application will automatically run in its built-in **Curated Karnataka Heritage Engine** mode without any degradation in quality or reliability.*

### 3. Build Client & Run in Development
```bash
# Build the production client bundle
npm run build

# Start the unified backend server & API (serves on http://localhost:5000)
npm start
```
Or run full live-reloading dev mode:
```bash
npm run dev
```

Visit **http://localhost:5000** in your web browser.

---

## 🧪 Automated Testing

NammaTrip AI includes an end-to-end test suite verifying all 18 critical functional acceptance criteria:
- Health check endpoint `/api/health`
- Explore destinations & Kannada historical narratives
- Category and region filtering
- User registration, password hashing & duplicate email rejection
- Login authentication & JWT verification
- Session restoration (`/api/auth/me`)
- Protected route 401 rejection
- Password reset token generation & password updating
- Programmatic budget calculations & itemized expenditure
- Day-wise itinerary generation with cultural tips
- "Fix My Trip" constraint adaptation & savings calculations
- Saving itineraries to SQLite database
- Private trip ownership & cross-user privacy enforcement (403 Forbidden)
- Deleting trips
- Bookmarking / favorites toggling

Run the test suite anytime:
```bash
npm test
```

---

## 🔑 Demo Account for Quick Review

A pre-seeded demo user is available in the database for instant testing:
- **Email**: `demo@nammatrip.ai`
- **Password**: `NammaTrip2026!`
- *Or click the **"Quick Demo Login (Kavitha Hegde)"** button on the `/login` page.*

---

## 🗺️ Curated Karnataka Destinations

| Destination | Region | Historical / Cultural Highlights | UNESCO Status |
|:---|:---|:---|:---:|
| **Hampi** | Kalyana Karnataka | Vijayanagara Empire, Stone Chariot, Virupaksha, Vitthala Musical Pillars | ★ World Heritage |
| **Mysuru** | Old Mysore | Ambavilas Palace, Chamundi Hills, Mysore Painting, Devaraja Market | Cultural Hub |
| **Coorg (Kodagu)** | Malenadu / Ghats | Talakaveri, Abbey Falls, Kodava martial culture, Arabica coffee estates | Ghats Biodiversity |
| **Badami** | Kittur Karnataka | Chalukya rock-cut cave temples, Agastya Lake, red sandstone cliffs | Architectural Cradle |
| **Gokarna** | Karavali / Coast | Sacred Atmalinga Mahabaleshwara, Om Beach, Western Ghats coastline | Coastal Muktistala |
| **Chitradurga** | Central Karnataka | Kallina Kote (7-tiered stone fortress), Onake Obavva cleft of bravery | Fort Architecture |
| **Belur** | Malenadu | Chennakeshava Temple, 42 Madanika bracket figures, star platform | ★ World Heritage (2023) |
| **Halebidu** | Malenadu | Hoysaleswara twin temples, 1,248 distinct relief elephants | ★ World Heritage (2023) |
| **Pattadakal** | Kittur Karnataka | Chalukya royal coronation site, fusion of Dravidian & Nagara styles | ★ World Heritage |
| **Vijayapura** | Kalyana Karnataka | Gol Gumbaz whispering acoustic dome, Ibrahim Rauza, Adil Shahi monuments | Deccan Heritage |
| **Udupi** | Karavali / Coast | Sri Krishna Matha, Kanakana Kindi, Udupi temple cuisine, Yakshagana | Cultural Landmark |
| **Chikmagalur** | Malenadu | Mullayanagiri peak (highest in Karnataka), Baba Budangiri coffee origin | Coffee Heritage |

---

## 📦 Deployment Instructions

NammaTrip AI is structured for single-command production deployment on modern cloud platforms (Render, Railway, Fly.io, or VPS).

### Deploying to Render / Railway
1. **Repository**: Connect your GitHub repository.
2. **Build Command**: `npm install && npm run build`
3. **Start Command**: `npm start`
4. **Environment Variables**:
   - `NODE_ENV`: `production`
   - `JWT_SECRET`: (Set a cryptographically secure 64-char string)
   - `PORT`: `5000` (or provided dynamically by host)
   - `GEMINI_API_KEY`: (Optional)

---

## 📜 Historical Citations & Credits
- Archaeological Survey of India (ASI) Southern Circle monographs
- UNESCO World Heritage Centre Inscriptions (Nos. 241, 239, 1670)
- Epigraphia Carnatica (Dr. B. Lewis Rice)
- Karnataka State Gazeteers (Mysore, Bagalkot, Bellary, Hassan, Uttara Kannada)

---

*© 2026 NammaTrip AI. Built with pride for Karnataka Tourism.*