import React, { useState, useEffect, useMemo } from 'react';
import { useLanguage } from '../context/LanguageContext.jsx';
import { useAuth } from '../context/AuthContext.jsx';
import {
  Compass,
  Search,
  Filter,
  MapPin,
  Bookmark,
  Sparkles,
  SlidersHorizontal,
  X,
  RotateCcw,
  Award,
  Layers
} from 'lucide-react';
import DestinationCard from '../components/DestinationCard.jsx';
import DestinationModal from '../components/DestinationModal.jsx';

const CATEGORIES = [
  { key: 'All', labelEn: 'All Destinations', labelKn: 'ಎಲ್ಲಾ ತಾಣಗಳು' },
  { key: 'Heritage', labelEn: 'Heritage & Monuments', labelKn: 'ಪರಂಪರೆ & ಸ್ಮಾರಕಗಳು' },
  { key: 'Hill Station', labelEn: 'Hill Stations & Ghats', labelKn: 'ಗಿರಿಧಾಮಗಳು & ಘಟ್ಟಗಳು' },
  { key: 'Waterfalls', labelEn: 'Waterfalls & Nature', labelKn: 'ಜಲಪಾತ & ನಿಸರ್ಗ' },
  { key: 'Beaches', labelEn: 'Beaches & Coastal', labelKn: 'ಕಡಲತೀರಗಳು & ಕರಾವಳಿ' },
  { key: 'Wildlife', labelEn: 'Wildlife & Sanctuaries', labelKn: 'ವನ್ಯಜೀವಿ ಧಾಮಗಳು' },
  { key: 'Spiritual', labelEn: 'Temples & Spiritual', labelKn: 'ದೇವಾಲಯಗಳು & ಆಧ್ಯಾತ್ಮಿಕ' },
  { key: 'Adventure', labelEn: 'Adventure & Trekking', labelKn: 'ಸಾಹಸ & ಚಾರಣ' },
  { key: 'Culture', labelEn: 'Cities & Culture', labelKn: 'ನಗರಗಳು & ಸಂಸ್ಕೃತಿ' }
];

const REGIONS = [
  { key: 'All', labelEn: 'All Karnataka Regions', labelKn: 'ಕರ್ನಾಟಕದ ಎಲ್ಲಾ ಭಾಗಗಳು' },
  { key: 'South', labelEn: 'Southern Karnataka / Old Mysuru', labelKn: 'ಹಳೆ ಮೈಸೂರು / ದಕ್ಷಿಣ ಕರ್ನಾಟಕ' },
  { key: 'Karavali', labelEn: 'Karavali Coastal Karnataka', labelKn: 'ಕರಾವಳಿ ಕರ್ನಾಟಕ' },
  { key: 'Malenadu', labelEn: 'Malenadu & Western Ghats', labelKn: 'ಮಲೆನಾಡು ಮತ್ತು ಪಶ್ಚಿಮ ಘಟ್ಟಗಳು' },
  { key: 'Central', labelEn: 'Central Karnataka', labelKn: 'ಮಧ್ಯ ಕರ್ನಾಟಕ' },
  { key: 'Kittur', labelEn: 'Kittur Karnataka (North-West)', labelKn: 'ಕಿತ್ತೂರು ಕರ್ನಾಟಕ' },
  { key: 'Kalyana', labelEn: 'Kalyana Karnataka (North-East)', labelKn: 'ಕಲ್ಯಾಣ ಕರ್ನಾಟಕ' }
];

const REGION_DISTRICT_MAP = {
  Kalyana: ['Vijayanagara', 'Ballari', 'Bidar', 'Kalaburagi', 'Raichur', 'Koppal', 'Yadgir'],
  Kittur: ['Belagavi', 'Dharwad', 'Gadag', 'Haveri', 'Bagalkote', 'Vijayapura'],
  Karavali: ['Uttara Kannada', 'Udupi', 'Dakshina Kannada'],
  Malenadu: ['Shivamogga', 'Chikkamagaluru', 'Kodagu', 'Hassan'],
  Central: ['Chitradurga', 'Davanagere', 'Tumakuru'],
  South: ['Mysuru', 'Mandya', 'Chamarajanagara', 'Ramanagara', 'Bengaluru Urban', 'Bengaluru Rural', 'Kolar', 'Chikkaballapura']
};

const DISTRICTS = [
  { key: 'All', labelEn: 'All 31 Districts', labelKn: 'ಎಲ್ಲಾ ೩೧ ಜಿಲ್ಲೆಗಳು' },
  { key: 'Bagalkote', labelEn: 'Bagalkote', labelKn: 'ಬಾಗಲಕೋಟೆ' },
  { key: 'Ballari', labelEn: 'Ballari', labelKn: 'ಬಳ್ಳಾರಿ' },
  { key: 'Belagavi', labelEn: 'Belagavi', labelKn: 'ಬೆಳಗಾವಿ' },
  { key: 'Bengaluru Rural', labelEn: 'Bengaluru Rural', labelKn: 'ಬೆಂಗಳೂರು ಗ್ರಾಮಾಂತರ' },
  { key: 'Bengaluru Urban', labelEn: 'Bengaluru Urban', labelKn: 'ಬೆಂಗಳೂರು ನಗರ' },
  { key: 'Bidar', labelEn: 'Bidar', labelKn: 'ಬೀದರ್' },
  { key: 'Chamarajanagara', labelEn: 'Chamarajanagara', labelKn: 'ಚಾಮರಾಜನಗರ' },
  { key: 'Chikkaballapura', labelEn: 'Chikkaballapura', labelKn: 'ಚಿಕ್ಕಬಳ್ಳಾಪುರ' },
  { key: 'Chikkamagaluru', labelEn: 'Chikkamagaluru', labelKn: 'ಚಿಕ್ಕಮಗಳೂರು' },
  { key: 'Chitradurga', labelEn: 'Chitradurga', labelKn: 'ಚಿತ್ರದುರ್ಗ' },
  { key: 'Dakshina Kannada', labelEn: 'Dakshina Kannada', labelKn: 'ದಕ್ಷಿಣ ಕನ್ನಡ' },
  { key: 'Davanagere', labelEn: 'Davanagere', labelKn: 'ದಾವಣಗೆರೆ' },
  { key: 'Dharwad', labelEn: 'Dharwad', labelKn: 'ಧಾರವಾಡ' },
  { key: 'Gadag', labelEn: 'Gadag', labelKn: 'ಗದಗ' },
  { key: 'Hassan', labelEn: 'Hassan', labelKn: 'ಹಾಸನ' },
  { key: 'Haveri', labelEn: 'Haveri', labelKn: 'ಹಾವೇರಿ' },
  { key: 'Kalaburagi', labelEn: 'Kalaburagi', labelKn: 'ಕಲಬುರಗಿ' },
  { key: 'Kodagu', labelEn: 'Kodagu (Coorg)', labelKn: 'ಕೊಡಗು (ಕೂರ್ಗ್)' },
  { key: 'Kolar', labelEn: 'Kolar', labelKn: 'ಕೋಲಾರ' },
  { key: 'Koppal', labelEn: 'Koppal', labelKn: 'ಕೊಪ್ಪಳ' },
  { key: 'Mandya', labelEn: 'Mandya', labelKn: 'ಮಂಡ್ಯ' },
  { key: 'Mysuru', labelEn: 'Mysuru', labelKn: 'ಮೈಸೂರು' },
  { key: 'Raichur', labelEn: 'Raichur', labelKn: 'ರಾಯಚೂರು' },
  { key: 'Ramanagara', labelEn: 'Ramanagara', labelKn: 'ರಾಮನಗರ' },
  { key: 'Shivamogga', labelEn: 'Shivamogga (Shimoga)', labelKn: 'ಶಿವಮೊಗ್ಗ' },
  { key: 'Tumakuru', labelEn: 'Tumakuru', labelKn: 'ತುಮಕೂರು' },
  { key: 'Udupi', labelEn: 'Udupi', labelKn: 'ಉಡುಪಿ' },
  { key: 'Uttara Kannada', labelEn: 'Uttara Kannada (Gokarna/Karwar)', labelKn: 'ಉತ್ತರ ಕನ್ನಡ' },
  { key: 'Vijayanagara', labelEn: 'Vijayanagara (Hampi)', labelKn: 'ವಿಜಯನಗರ (ಹಂಪಿ)' },
  { key: 'Vijayapura', labelEn: 'Vijayapura (Bijapur)', labelKn: 'ವಿಜಯಪುರ (ಬಿಜಾಪುರ)' },
  { key: 'Yadgir', labelEn: 'Yadgir', labelKn: 'ಯಾದಗಿರಿ' }
];

const INITIAL_BATCH_SIZE = 18;

export default function ExplorePage() {
  const { language, t } = useLanguage();
  const { isAuthenticated, getAuthHeaders } = useAuth();

  const [destinations, setDestinations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedDistrict, setSelectedDistrict] = useState('All');
  const [selectedRegion, setSelectedRegion] = useState('All');
  const [popularOnly, setPopularOnly] = useState(false);
  const [featuredOnly, setFeaturedOnly] = useState(false);
  const [unescoOnly, setUnescoOnly] = useState(false);
  const [sortBy, setSortBy] = useState('popular');
  const [visibleCount, setVisibleCount] = useState(INITIAL_BATCH_SIZE);
  const [favoriteIds, setFavoriteIds] = useState([]);
  const [selectedDestination, setSelectedDestination] = useState(null);

  useEffect(() => {
    fetchDestinations();
    if (isAuthenticated) {
      fetchFavorites();
    }
  }, [isAuthenticated]);

  const fetchDestinations = async () => {
    try {
      setLoading(true);
      const res = await fetch('/api/destinations');
      const data = await res.json();
      if (data.destinations) {
        setDestinations(data.destinations);
      }
    } catch (err) {
      console.error('Fetch destinations failed:', err);
    } finally {
      setLoading(false);
    }
  };

  const fetchFavorites = async () => {
    try {
      const res = await fetch('/api/favorites', {
        headers: getAuthHeaders()
      });
      const data = await res.json();
      if (data.favoriteIds) {
        setFavoriteIds(data.favoriteIds);
      }
    } catch (err) {
      console.error('Fetch favorites failed:', err);
    }
  };

  const handleToggleFavorite = async (destinationId) => {
    if (!isAuthenticated) {
      alert(language === 'kn' ? 'ಮೆಚ್ಚಿನ ತಾಣಗಳನ್ನು ಉಳಿಸಲು ದಯವಿಟ್ಟು ಲಾಗ್ ಇನ್ ಮಾಡಿ.' : 'Please log in to bookmark favorite destinations.');
      return;
    }

    // Optimistic UI update
    setFavoriteIds(prev =>
      prev.includes(destinationId)
        ? prev.filter(id => id !== destinationId)
        : [...prev, destinationId]
    );

    try {
      await fetch(`/api/favorites/${destinationId}`, {
        method: 'POST',
        headers: getAuthHeaders()
      });
    } catch (err) {
      console.error('Toggle favorite failed:', err);
      fetchFavorites();
    }
  };

  const hasActiveFilters =
    searchQuery.trim() !== '' ||
    selectedCategory !== 'All' ||
    selectedDistrict !== 'All' ||
    selectedRegion !== 'All' ||
    popularOnly ||
    featuredOnly ||
    unescoOnly;

  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedCategory('All');
    setSelectedDistrict('All');
    setSelectedRegion('All');
    setPopularOnly(false);
    setFeaturedOnly(false);
    setUnescoOnly(false);
    setVisibleCount(INITIAL_BATCH_SIZE);
  };

  // Filtered & Sorted destinations memoized
  const filteredDestinations = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();

    const matches = destinations.filter(d => {
      // Search matching
      if (q) {
        const matchName = d.name.toLowerCase().includes(q) || (d.nameKn && d.nameKn.toLowerCase().includes(q));
        const matchDist = (d.district && d.district.toLowerCase().includes(q)) || (d.districtKn && d.districtKn.toLowerCase().includes(q));
        const matchCity = (d.nearestCity && d.nearestCity.toLowerCase().includes(q)) || (d.nearestCityKn && d.nearestCityKn.toLowerCase().includes(q));
        const matchDesc = d.description.toLowerCase().includes(q) || (d.descriptionKn && d.descriptionKn.toLowerCase().includes(q));
        const matchTagline = (d.tagline && d.tagline.toLowerCase().includes(q)) || (d.taglineKn && d.taglineKn.toLowerCase().includes(q));
        const matchCat = d.category && d.category.some(c => c.toLowerCase().includes(q));
        if (!matchName && !matchDist && !matchCity && !matchDesc && !matchTagline && !matchCat) {
          return false;
        }
      }

      // Category matching
      if (selectedCategory !== 'All') {
        const catLow = selectedCategory.toLowerCase();
        let match = false;
        if (catLow === 'waterfalls') {
          match = d.category.some(c => c.toLowerCase() === 'waterfalls') ||
            (d.category.some(c => c.toLowerCase() === 'nature') && d.name.toLowerCase().includes('falls'));
        } else if (catLow === 'culture') {
          match = d.category.some(c => c.toLowerCase() === 'culture' || c.toLowerCase() === 'city');
        } else {
          match = d.category.some(c => c.toLowerCase() === catLow);
        }
        if (!match) return false;
      }

      // District matching
      if (selectedDistrict !== 'All') {
        if (!d.district || d.district.toLowerCase() !== selectedDistrict.toLowerCase()) {
          return false;
        }
      }

      // Region matching
      if (selectedRegion !== 'All') {
        const allowedDistricts = REGION_DISTRICT_MAP[selectedRegion] || [];
        const matchDistrict = d.district && allowedDistricts.includes(d.district);
        const matchRegionText = d.region && d.region.toLowerCase().includes(selectedRegion.toLowerCase());
        if (!matchDistrict && !matchRegionText) {
          return false;
        }
      }

      // Popular toggle
      if (popularOnly && !d.popular) {
        return false;
      }

      // Featured toggle
      if (featuredOnly && !d.featured && !d.unesco) {
        return false;
      }

      // UNESCO toggle
      if (unescoOnly) {
        const isUnesco = d.unesco === true || d.id === 'hampi' || d.id === 'pattadakal' || d.id === 'belur' || d.id === 'halebidu';
        if (!isUnesco) return false;
      }

      return true;
    });

    // Sorting
    return matches.sort((a, b) => {
      if (sortBy === 'popular') {
        const aPop = (a.unesco ? 2 : 0) + (a.popular ? 1 : 0);
        const bPop = (b.unesco ? 2 : 0) + (b.popular ? 1 : 0);
        if (bPop !== aPop) return bPop - aPop;
        return a.name.localeCompare(b.name);
      }
      if (sortBy === 'name') {
        return language === 'kn' ? (a.nameKn || a.name).localeCompare(b.nameKn || b.name) : a.name.localeCompare(b.name);
      }
      if (sortBy === 'budgetAsc') {
        return (a.avgDailyBudgetINR || 0) - (b.avgDailyBudgetINR || 0);
      }
      if (sortBy === 'budgetDesc') {
        return (b.avgDailyBudgetINR || 0) - (a.avgDailyBudgetINR || 0);
      }
      return 0;
    });
  }, [destinations, searchQuery, selectedCategory, selectedDistrict, selectedRegion, popularOnly, featuredOnly, unescoOnly, sortBy, language]);

  const visibleDestinations = useMemo(() => {
    return filteredDestinations.slice(0, visibleCount);
  }, [filteredDestinations, visibleCount]);

  return (
    <div className="container" style={{ padding: '36px 20px 80px' }}>
      {/* Page Header */}
      <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 32px' }}>
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          padding: '6px 16px',
          borderRadius: '24px',
          backgroundColor: 'rgba(45, 106, 79, 0.1)',
          color: 'var(--primary-800)',
          fontWeight: 700,
          fontSize: '0.86rem',
          marginBottom: '14px'
        }}>
          <Compass size={17} color="#2D6A4F" />
          <span>{language === 'kn' ? 'ಕರ್ನಾಟಕ ಪರಂಪರೆಯ ಸಮಗ್ರ ಅನ್ವೇಷಣೆ' : 'Comprehensive Karnataka Tourism Discovery'}</span>
        </div>

        <h1 style={{
          fontSize: 'clamp(2rem, 3.5vw, 2.75rem)',
          color: 'var(--primary-900)',
          fontFamily: 'var(--font-serif)',
          lineHeight: 1.22,
          margin: 0
        }}>
          {t('exploreTitle')}
        </h1>

        <p style={{ fontSize: '1.05rem', color: 'var(--text-body)', marginTop: '12px', lineHeight: 1.6 }}>
          {t('exploreSubtitle')}
        </p>

        {/* Quick Highlights Counter Pills */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: '10px',
          marginTop: '16px'
        }}>
          <span style={{
            fontSize: '0.82rem',
            fontWeight: 600,
            color: 'var(--primary-900)',
            backgroundColor: '#FFFFFF',
            border: '1px solid var(--border-light)',
            padding: '4px 12px',
            borderRadius: '20px',
            boxShadow: 'var(--shadow-sm)'
          }}>
            🏛️ 76 {language === 'kn' ? 'ಪ್ರಸಿದ್ಧ ತಾಣಗಳು' : 'Iconic Destinations'}
          </span>
          <span style={{
            fontSize: '0.82rem',
            fontWeight: 600,
            color: 'var(--primary-900)',
            backgroundColor: '#FFFFFF',
            border: '1px solid var(--border-light)',
            padding: '4px 12px',
            borderRadius: '20px',
            boxShadow: 'var(--shadow-sm)'
          }}>
            📍 31 {language === 'kn' ? 'ಜಿಲ್ಲೆಗಳ ವ್ಯಾಪ್ತಿ' : 'Districts Covered'}
          </span>
          <span style={{
            fontSize: '0.82rem',
            fontWeight: 600,
            color: '#B45309',
            backgroundColor: '#FEF3C7',
            border: '1px solid #FCD34D',
            padding: '4px 12px',
            borderRadius: '20px',
            boxShadow: 'var(--shadow-sm)'
          }}>
            ★ 4 {language === 'kn' ? 'ಯುನೆಸ್ಕೋ ವಿಶ್ವ ಪರಂಪರೆ ತಾಣಗಳು' : 'UNESCO World Heritage Sites'}
          </span>
          <span style={{
            fontSize: '0.82rem',
            fontWeight: 600,
            color: 'var(--primary-900)',
            backgroundColor: '#FFFFFF',
            border: '1px solid var(--border-light)',
            padding: '4px 12px',
            borderRadius: '20px',
            boxShadow: 'var(--shadow-sm)'
          }}>
            🏞️ 8 {language === 'kn' ? 'ಪ್ರವಾಸ ವಿಭಾಗಗಳು' : 'Thematic Circuits'}
          </span>
        </div>
      </div>

      {/* Main Search and Multi-Filter Card */}
      <div style={{
        backgroundColor: '#FFFFFF',
        borderRadius: 'var(--radius-md)',
        padding: '22px 24px',
        boxShadow: 'var(--shadow-md)',
        border: '1px solid var(--border-light)',
        marginBottom: '28px',
        display: 'flex',
        flexDirection: 'column',
        gap: '18px'
      }}>
        {/* Search Input Bar */}
        <div style={{ position: 'relative' }}>
          <Search
            size={20}
            color="var(--text-muted)"
            style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)' }}
          />
          <input
            type="text"
            className="form-input"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setVisibleCount(INITIAL_BATCH_SIZE);
            }}
            placeholder={t('searchPlaceholder')}
            style={{
              paddingLeft: '48px',
              paddingRight: searchQuery ? '42px' : '16px',
              fontSize: '1rem',
              height: '48px'
            }}
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              style={{
                position: 'absolute',
                right: '12px',
                top: '50%',
                transform: 'translateY(-50%)',
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
                color: 'var(--text-muted)',
                padding: '4px',
                display: 'flex',
                alignItems: 'center'
              }}
              aria-label="Clear search"
            >
              <X size={18} />
            </button>
          )}
        </div>

        {/* Categories Chips Row */}
        <div>
          <div style={{
            fontSize: '0.78rem',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.04em',
            color: 'var(--text-muted)',
            marginBottom: '8px'
          }}>
            {language === 'kn' ? 'ವಿಭಾಗವಾರು ಆಯ್ಕೆ' : 'Travel Themes'}
          </div>
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '8px',
            alignItems: 'center'
          }}>
            {CATEGORIES.map(cat => {
              const active = selectedCategory === cat.key;
              return (
                <button
                  key={cat.key}
                  onClick={() => {
                    setSelectedCategory(cat.key);
                    setVisibleCount(INITIAL_BATCH_SIZE);
                  }}
                  style={{
                    padding: '8px 16px',
                    borderRadius: '24px',
                    border: active ? '1px solid var(--primary-800)' : '1px solid var(--border-light)',
                    backgroundColor: active ? 'var(--primary-800)' : '#FAF7F2',
                    color: active ? '#FFFFFF' : 'var(--text-body)',
                    fontSize: '0.86rem',
                    fontWeight: 600,
                    lineHeight: 1.35,
                    cursor: 'pointer',
                    transition: 'all 0.15s ease'
                  }}
                >
                  {language === 'kn' ? cat.labelKn : cat.labelEn}
                </button>
              );
            })}
          </div>
        </div>

        {/* Secondary Filter Controls: District, Region, Quick Toggles, and Sort */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))',
          gap: '14px',
          paddingTop: '12px',
          borderTop: '1px solid var(--border-light)',
          alignItems: 'center'
        }}>
          {/* District Selector */}
          <div>
            <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)', marginBottom: '4px', textTransform: 'uppercase' }}>
              📍 {t('filterDistrict')}
            </label>
            <select
              className="form-select"
              value={selectedDistrict}
              onChange={(e) => {
                setSelectedDistrict(e.target.value);
                setVisibleCount(INITIAL_BATCH_SIZE);
              }}
              style={{ padding: '8px 12px', fontSize: '0.86rem' }}
            >
              {DISTRICTS.map(dist => (
                <option key={dist.key} value={dist.key}>
                  {language === 'kn' ? dist.labelKn : dist.labelEn}
                </option>
              ))}
            </select>
          </div>

          {/* Region Selector */}
          <div>
            <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)', marginBottom: '4px', textTransform: 'uppercase' }}>
              🗺️ {t('filterRegion')}
            </label>
            <select
              className="form-select"
              value={selectedRegion}
              onChange={(e) => {
                setSelectedRegion(e.target.value);
                setVisibleCount(INITIAL_BATCH_SIZE);
              }}
              style={{ padding: '8px 12px', fontSize: '0.86rem' }}
            >
              {REGIONS.map(reg => (
                <option key={reg.key} value={reg.key}>
                  {language === 'kn' ? reg.labelKn : reg.labelEn}
                </option>
              ))}
            </select>
          </div>

          {/* Sort Selector */}
          <div>
            <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)', marginBottom: '4px', textTransform: 'uppercase' }}>
              ⚡ {t('sortLabel')}
            </label>
            <select
              className="form-select"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              style={{ padding: '8px 12px', fontSize: '0.86rem' }}
            >
              <option value="popular">{t('sortPopular')}</option>
              <option value="name">{t('sortNameAsc')}</option>
              <option value="budgetAsc">{t('sortBudgetAsc')}</option>
              <option value="budgetDesc">{t('sortBudgetDesc')}</option>
            </select>
          </div>

          {/* Quick Filter Badges & Reset Button */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase' }}>
              ✨ {language === 'kn' ? 'ಮುಖ್ಯಾಂಶಗಳು' : 'Highlights'}
            </span>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
              <button
                onClick={() => {
                  setPopularOnly(prev => !prev);
                  setVisibleCount(INITIAL_BATCH_SIZE);
                }}
                style={{
                  padding: '6px 12px',
                  borderRadius: '16px',
                  border: popularOnly ? '1px solid #D97706' : '1px solid var(--border-light)',
                  backgroundColor: popularOnly ? '#FEF3C7' : '#FFFFFF',
                  color: popularOnly ? '#B45309' : 'var(--text-body)',
                  fontWeight: popularOnly ? 700 : 500,
                  fontSize: '0.8rem',
                  cursor: 'pointer'
                }}
              >
                ⭐ {t('filterPopular')}
              </button>

              <button
                onClick={() => {
                  setUnescoOnly(prev => !prev);
                  setVisibleCount(INITIAL_BATCH_SIZE);
                }}
                style={{
                  padding: '6px 12px',
                  borderRadius: '16px',
                  border: unescoOnly ? '1px solid var(--primary-800)' : '1px solid var(--border-light)',
                  backgroundColor: unescoOnly ? 'rgba(45, 106, 79, 0.12)' : '#FFFFFF',
                  color: unescoOnly ? 'var(--primary-800)' : 'var(--text-body)',
                  fontWeight: unescoOnly ? 700 : 500,
                  fontSize: '0.8rem',
                  cursor: 'pointer'
                }}
              >
                ★ UNESCO
              </button>

              {hasActiveFilters && (
                <button
                  onClick={handleResetFilters}
                  style={{
                    padding: '6px 10px',
                    borderRadius: '16px',
                    border: '1px dashed var(--border-light)',
                    backgroundColor: 'transparent',
                    color: 'var(--text-muted)',
                    fontSize: '0.8rem',
                    cursor: 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '4px'
                  }}
                  title="Reset all active filters"
                >
                  <RotateCcw size={12} />
                  <span>Reset</span>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Results Header: Count & Active Filter indicator */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: '20px',
        flexWrap: 'wrap',
        gap: '12px'
      }}>
        <div style={{ fontSize: '0.94rem', color: 'var(--text-body)' }}>
          <strong style={{ color: 'var(--primary-900)' }}>
            {t('showingCount')} {visibleDestinations.length}
          </strong>{' '}
          {t('ofDestinations')} {filteredDestinations.length} {t('destinationsLabel')}
          {selectedDistrict !== 'All' && (
            <span style={{ marginLeft: '8px', color: 'var(--primary-800)', fontWeight: 600 }}>
              • {selectedDistrict} {language === 'kn' ? 'ಜಿಲ್ಲೆ' : 'District'}
            </span>
          )}
          {selectedCategory !== 'All' && (
            <span style={{ marginLeft: '6px', color: 'var(--accent-gold-hover)', fontWeight: 600 }}>
              • {selectedCategory}
            </span>
          )}
        </div>
      </div>

      {/* Grid of Destination Cards */}
      {loading ? (
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '24px'
        }}>
          {[1, 2, 3, 4, 5, 6].map(i => (
            <div key={i} className="card-heritage" style={{ height: '380px' }}>
              <div className="skeleton" style={{ height: '220px' }} />
              <div style={{ padding: '16px' }}>
                <div className="skeleton" style={{ height: '20px', width: '60%', marginBottom: '10px' }} />
                <div className="skeleton" style={{ height: '14px', width: '90%', marginBottom: '6px' }} />
                <div className="skeleton" style={{ height: '14px', width: '75%' }} />
              </div>
            </div>
          ))}
        </div>
      ) : filteredDestinations.length === 0 ? (
        <div style={{
          textAlign: 'center',
          padding: '64px 20px',
          backgroundColor: '#FFFFFF',
          borderRadius: 'var(--radius-md)',
          border: '1px solid var(--border-light)'
        }}>
          <Compass size={40} color="var(--accent-gold)" style={{ marginBottom: '12px' }} />
          <h3 style={{ fontSize: '1.25rem', color: 'var(--primary-900)' }}>
            {language === 'kn' ? 'ಯಾವುದೇ ತಾಣಗಳು ಕಂಡುಬಂದಿಲ್ಲ' : 'No destinations match your filters'}
          </h3>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginTop: '4px' }}>
            {language === 'kn' ? 'ಹುಡುಕು ಪದವನ್ನು ಅಥವಾ ಫಿಲ್ಟರ್‌ಗಳನ್ನು ಬದಲಾಯಿಸಿ ನೋಡಿ.' : 'Try adjusting your search query or reset category filters.'}
          </p>
          <button
            onClick={handleResetFilters}
            className="btn btn-secondary btn-sm"
            style={{ marginTop: '16px' }}
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px'
          }}>
            {visibleDestinations.map(dest => (
              <DestinationCard
                key={dest.id}
                destination={dest}
                isFavorite={favoriteIds.includes(dest.id)}
                onToggleFavorite={handleToggleFavorite}
                onOpenDetails={setSelectedDestination}
              />
            ))}
          </div>

          {/* Load More Button */}
          {visibleCount < filteredDestinations.length && (
            <div style={{ textAlign: 'center', marginTop: '40px' }}>
              <button
                onClick={() => setVisibleCount(prev => prev + INITIAL_BATCH_SIZE)}
                className="btn btn-secondary"
                style={{
                  padding: '12px 28px',
                  fontSize: '0.95rem',
                  fontWeight: 600
                }}
              >
                {t('loadMoreDestinations')} ({filteredDestinations.length - visibleCount} {language === 'kn' ? 'ಉಳಿದಿದೆ' : 'remaining'})
              </button>
            </div>
          )}
        </>
      )}

      {/* Destination Detail Modal */}
      {selectedDestination && (
        <DestinationModal
          destination={selectedDestination}
          onClose={() => setSelectedDestination(null)}
        />
      )}
    </div>
  );
}
