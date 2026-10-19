import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext.jsx';
import { useAuth } from '../context/AuthContext.jsx';
import {
  Compass,
  Search,
  Filter,
  MapPin,
  Bookmark,
  Sparkles,
  SlidersHorizontal
} from 'lucide-react';
import DestinationCard from '../components/DestinationCard.jsx';
import DestinationModal from '../components/DestinationModal.jsx';

export default function ExplorePage() {
  const { language, t } = useLanguage();
  const { isAuthenticated, getAuthHeaders } = useAuth();

  const [destinations, setDestinations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedRegion, setSelectedRegion] = useState('All');
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
      // Revert if error
      fetchFavorites();
    }
  };

  // Filter logic
  const filtered = destinations.filter(d => {
    const matchesSearch =
      d.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      d.nameKn.toLowerCase().includes(searchQuery.toLowerCase()) ||
      d.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      d.descriptionKn.toLowerCase().includes(searchQuery.toLowerCase()) ||
      d.region.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory =
      selectedCategory === 'All' ||
      d.category.some(c => c.toLowerCase() === selectedCategory.toLowerCase());

    const matchesRegion =
      selectedRegion === 'All' ||
      d.region.toLowerCase().includes(selectedRegion.toLowerCase());

    return matchesSearch && matchesCategory && matchesRegion;
  });

  const categories = [
    { key: 'All', labelEn: 'All Highlights', labelKn: 'ಎಲ್ಲಾ ವರ್ಗಗಳು' },
    { key: 'Heritage', labelEn: 'Heritage & UNESCO', labelKn: 'ಪರಂಪರೆ & ಸ್ಮಾರಕಗಳು' },
    { key: 'Nature', labelEn: 'Nature & Ghats', labelKn: 'ನಿಸರ್ಗ & ಗಿರಿಧಾಮ' },
    { key: 'Culture', labelEn: 'Folk & Living Culture', labelKn: 'ಜಾನಪದ & ಸಂಸ್ಕೃತಿ' },
    { key: 'Food', labelEn: 'Culinary Traditions', labelKn: 'ಸ್ಥಳೀಯ ರುಚಿಗಳು' }
  ];

  return (
    <div className="container" style={{ padding: '40px 20px 80px' }}>
      {/* Page Header */}
      <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 40px' }}>
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '6px',
          padding: '6px 14px',
          borderRadius: '20px',
          backgroundColor: 'rgba(45, 106, 79, 0.1)',
          color: 'var(--primary-800)',
          fontWeight: 700,
          fontSize: '0.85rem',
          marginBottom: '14px'
        }}>
          <Compass size={16} color="#2D6A4F" />
          <span>{language === 'kn' ? 'ಕರ್ನಾಟಕ ಪರಂಪರೆಯ ಅನ್ವೇಷಣೆ' : 'Explore Karnataka Heritage'}</span>
        </div>

        <h1 style={{
          fontSize: 'clamp(2rem, 3.5vw, 2.8rem)',
          color: 'var(--primary-900)',
          fontFamily: 'var(--font-serif)',
          lineHeight: 1.2,
          margin: 0
        }}>
          {t('exploreTitle')}
        </h1>

        <p style={{ fontSize: '1.05rem', color: 'var(--text-body)', marginTop: '12px' }}>
          {t('exploreSubtitle')}
        </p>
      </div>

      {/* Search and Filters Bar */}
      <div style={{
        backgroundColor: '#FFFFFF',
        borderRadius: 'var(--radius-md)',
        padding: '20px',
        boxShadow: 'var(--shadow-md)',
        border: '1px solid var(--border-light)',
        marginBottom: '36px',
        display: 'flex',
        flexDirection: 'column',
        gap: '16px'
      }}>
        {/* Search Input */}
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
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={t('searchPlaceholder')}
            style={{ paddingLeft: '48px', fontSize: '1rem' }}
          />
        </div>

        {/* Categories Chips */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '12px'
        }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {categories.map(cat => {
              const active = selectedCategory === cat.key;
              return (
                <button
                  key={cat.key}
                  onClick={() => setSelectedCategory(cat.key)}
                  style={{
                    padding: '8px 16px',
                    borderRadius: '24px',
                    border: active ? '1px solid var(--primary-800)' : '1px solid var(--border-light)',
                    backgroundColor: active ? 'var(--primary-800)' : 'transparent',
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

          {/* Region Select */}
          <div style={{ minWidth: '180px', flex: '1 1 200px', maxWidth: '320px' }}>
            <select
              className="form-select"
              value={selectedRegion}
              onChange={(e) => setSelectedRegion(e.target.value)}
              style={{ padding: '8px 12px', fontSize: '0.85rem' }}
            >
              <option value="All">{t('allRegions')}</option>
              <option value="Kalyana">Kalyana Karnataka (ಹಂಪಿ/ವಿಜಯಪುರ)</option>
              <option value="Kittur">Kittur Karnataka (ಬಾದಾಮಿ/ಪಟ್ಟದಕಲ್ಲು)</option>
              <option value="Karavali">Karavali Coastal (ಗೋಕರ್ಣ/ಉಡುಪಿ)</option>
              <option value="Malenadu">Malenadu & Ghats (ಕೂರ್ಗ್/ಬೇಲೂರು/ಚಿಕ್ಕಮಗಳೂರು)</option>
              <option value="South">Old Mysore (ಮೈಸೂರು)</option>
            </select>
          </div>
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
      ) : filtered.length === 0 ? (
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
            onClick={() => { setSearchQuery(''); setSelectedCategory('All'); setSelectedRegion('All'); }}
            className="btn btn-secondary btn-sm"
            style={{ marginTop: '16px' }}
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '24px'
        }}>
          {filtered.map(dest => (
            <DestinationCard
              key={dest.id}
              destination={dest}
              isFavorite={favoriteIds.includes(dest.id)}
              onToggleFavorite={handleToggleFavorite}
              onOpenDetails={setSelectedDestination}
            />
          ))}
        </div>
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
