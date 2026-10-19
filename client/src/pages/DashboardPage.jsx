import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.jsx';
import { useLanguage } from '../context/LanguageContext.jsx';
import {
  Calendar,
  Bookmark,
  Sparkles,
  IndianRupee,
  MapPin,
  Trash2,
  Eye,
  Plus,
  Compass,
  ArrowRight,
  ShieldCheck
} from 'lucide-react';
import { GandaberundaEmblem } from '../components/HeritageMotifs.jsx';
import DestinationCard from '../components/DestinationCard.jsx';
import DestinationModal from '../components/DestinationModal.jsx';

export default function DashboardPage() {
  const { user, getAuthHeaders } = useAuth();
  const { language, t } = useLanguage();
  const navigate = useNavigate();

  const [savedTrips, setSavedTrips] = useState([]);
  const [favoriteDestinations, setFavoriteDestinations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedDestination, setSelectedDestination] = useState(null);

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      setLoading(true);
      const [tripsRes, favsRes] = await Promise.all([
        fetch('/api/trips', { headers: getAuthHeaders() }),
        fetch('/api/favorites', { headers: getAuthHeaders() })
      ]);

      const tripsData = await tripsRes.json();
      const favsData = await favsRes.json();

      if (tripsData.trips) setSavedTrips(tripsData.trips);
      if (favsData.destinations) setFavoriteDestinations(favsData.destinations);
    } catch (err) {
      console.error('Fetch dashboard data failed:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteTrip = async (tripId) => {
    if (!window.confirm(t('confirmDeleteTrip'))) return;

    try {
      const res = await fetch(`/api/trips/${tripId}`, {
        method: 'DELETE',
        headers: getAuthHeaders()
      });
      const data = await res.json();
      if (data.success) {
        setSavedTrips(prev => prev.filter(t => t.id !== tripId));
      }
    } catch (err) {
      console.error('Delete trip failed:', err);
    }
  };

  const totalTrackedBudget = savedTrips.reduce((acc, trip) => acc + (trip.estimatedTotalCost || 0), 0);

  return (
    <div className="container" style={{ padding: '40px 20px 80px', display: 'flex', flexDirection: 'column', gap: '40px' }}>
      {/* Welcome Banner */}
      <div style={{
        backgroundColor: 'var(--primary-900)',
        borderRadius: 'var(--radius-lg)',
        padding: '36px 32px',
        color: '#FAF7F2',
        position: 'relative',
        overflow: 'hidden',
        border: '2px solid rgba(217, 119, 6, 0.35)',
        boxShadow: 'var(--shadow-lg)'
      }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '20px' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#FDE68A', fontSize: '0.88rem', fontWeight: 700, marginBottom: '6px' }}>
              <GandaberundaEmblem size={22} />
              <span>{language === 'kn' ? 'ನಮಸ್ಕಾರ' : 'Namaskara'}</span>
            </div>
            <h1 style={{
              fontSize: 'clamp(1.8rem, 3.2vw, 2.4rem)',
              fontFamily: 'var(--font-serif)',
              color: '#FFFFFF',
              margin: 0
            }}>
              {t('dashWelcome')}, {user?.name || 'Traveler'}!
            </h1>
            <p style={{ color: '#D8F3DC', marginTop: '6px', fontSize: '1rem', maxWidth: '580px' }}>
              {t('dashSubtitle')}
            </p>
          </div>

          <div>
            <Link to="/planner" className="btn btn-gold btn-lg">
              <Plus size={18} />
              <span>{t('dashNewTripCta')}</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Stats Counter Bar */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
        gap: '20px'
      }}>
        <div style={{
          backgroundColor: '#FFFFFF',
          borderRadius: 'var(--radius-md)',
          padding: '20px 24px',
          border: '1px solid var(--border-light)',
          boxShadow: 'var(--shadow-sm)',
          display: 'flex',
          alignItems: 'center',
          gap: '16px'
        }}>
          <div style={{
            width: '48px',
            height: '48px',
            borderRadius: '12px',
            backgroundColor: 'var(--primary-100)',
            color: 'var(--primary-800)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <Calendar size={24} />
          </div>
          <div>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 600 }}>{t('dashStatTrips')}</div>
            <div style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--primary-900)' }}>{savedTrips.length}</div>
          </div>
        </div>

        <div style={{
          backgroundColor: '#FFFFFF',
          borderRadius: 'var(--radius-md)',
          padding: '20px 24px',
          border: '1px solid var(--border-light)',
          boxShadow: 'var(--shadow-sm)',
          display: 'flex',
          alignItems: 'center',
          gap: '16px'
        }}>
          <div style={{
            width: '48px',
            height: '48px',
            borderRadius: '12px',
            backgroundColor: 'var(--accent-gold-light)',
            color: 'var(--accent-gold-hover)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <Bookmark size={24} />
          </div>
          <div>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 600 }}>{t('dashStatFavorites')}</div>
            <div style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--primary-900)' }}>{favoriteDestinations.length}</div>
          </div>
        </div>

        <div style={{
          backgroundColor: '#FFFFFF',
          borderRadius: 'var(--radius-md)',
          padding: '20px 24px',
          border: '1px solid var(--border-light)',
          boxShadow: 'var(--shadow-sm)',
          display: 'flex',
          alignItems: 'center',
          gap: '16px'
        }}>
          <div style={{
            width: '48px',
            height: '48px',
            borderRadius: '12px',
            backgroundColor: 'rgba(45, 106, 79, 0.08)',
            color: 'var(--primary-800)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <IndianRupee size={24} />
          </div>
          <div>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 600 }}>{t('dashStatBudget')}</div>
            <div style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--primary-900)' }}>
              ₹{totalTrackedBudget.toLocaleString('en-IN')}
            </div>
          </div>
        </div>
      </div>

      {/* Saved Itineraries Section */}
      <div>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '20px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Calendar size={22} color="var(--primary-800)" />
            <h2 style={{ fontSize: '1.5rem', color: 'var(--primary-900)', margin: 0, fontFamily: 'var(--font-serif)' }}>
              {t('dashMyTripsTitle')}
            </h2>
          </div>
          {savedTrips.length > 0 && (
            <Link to="/saved-trips" className="btn btn-outline btn-sm">
              View All ({savedTrips.length})
            </Link>
          )}
        </div>

        {savedTrips.length === 0 ? (
          <div style={{
            textAlign: 'center',
            padding: '48px 24px',
            backgroundColor: '#FFFFFF',
            borderRadius: 'var(--radius-md)',
            border: '1px solid var(--border-light)',
            boxShadow: 'var(--shadow-sm)'
          }}>
            <Calendar size={44} color="var(--accent-gold)" style={{ marginBottom: '12px' }} />
            <h3 style={{ fontSize: '1.25rem', color: 'var(--primary-900)', margin: '0 0 6px' }}>
              {t('dashEmptyTripsTitle')}
            </h3>
            <p style={{ color: 'var(--text-body)', maxWidth: '480px', margin: '0 auto 20px', fontSize: '0.9rem' }}>
              {t('dashEmptyTripsDesc')}
            </p>
            <Link to="/planner" className="btn btn-gold">
              <Sparkles size={16} />
              <span>{t('dashNewTripCta')}</span>
            </Link>
          </div>
        ) : (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '20px'
          }}>
            {savedTrips.slice(0, 4).map(trip => (
              <div
                key={trip.id}
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--border-light)',
                  boxShadow: 'var(--shadow-sm)',
                  padding: '20px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  gap: '16px'
                }}
              >
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '8px', marginBottom: '8px' }}>
                    <span className="badge badge-green">
                      {trip.destination?.toUpperCase()}
                    </span>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                      {new Date(trip.createdAt).toLocaleDateString()}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.15rem', color: 'var(--primary-900)', margin: '0 0 8px' }}>
                    {trip.title}
                  </h3>

                  <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '12px',
                    fontSize: '0.85rem',
                    color: 'var(--text-body)',
                    marginBottom: '12px'
                  }}>
                    <div><strong>Duration:</strong> {trip.durationDays} Days</div>
                    <div><strong>Travelers:</strong> {trip.travelersCount}</div>
                    <div><strong>Est:</strong> ₹{trip.estimatedTotalCost?.toLocaleString('en-IN')}</div>
                  </div>
                </div>

                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  borderTop: '1px solid var(--border-light)',
                  paddingTop: '12px'
                }}>
                  <Link
                    to={`/saved-trips?tripId=${trip.id}`}
                    className="btn btn-secondary btn-sm"
                  >
                    <Eye size={15} />
                    <span>{t('btnViewTrip')}</span>
                  </Link>

                  <button
                    onClick={() => handleDeleteTrip(trip.id)}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: '#DC2626',
                      cursor: 'pointer',
                      padding: '6px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px',
                      fontSize: '0.85rem'
                    }}
                  >
                    <Trash2 size={15} />
                    <span>{t('btnDeleteTrip')}</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Bookmarked Destinations Section */}
      <div>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '20px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Bookmark size={22} color="var(--accent-gold-hover)" />
            <h2 style={{ fontSize: '1.5rem', color: 'var(--primary-900)', margin: 0, fontFamily: 'var(--font-serif)' }}>
              {t('dashFavoritesTitle')}
            </h2>
          </div>
          <Link to="/explore" className="btn btn-outline btn-sm">
            {language === 'kn' ? 'ಹೆಚ್ಚು ತಾಣಗಳನ್ನು ನೋಡಿ' : 'Browse Destinations'}
          </Link>
        </div>

        {favoriteDestinations.length === 0 ? (
          <div style={{
            textAlign: 'center',
            padding: '48px 24px',
            backgroundColor: '#FFFFFF',
            borderRadius: 'var(--radius-md)',
            border: '1px solid var(--border-light)'
          }}>
            <Bookmark size={44} color="var(--text-muted)" style={{ marginBottom: '12px' }} />
            <h3 style={{ fontSize: '1.25rem', color: 'var(--primary-900)', margin: '0 0 6px' }}>
              {t('dashEmptyFavsTitle')}
            </h3>
            <p style={{ color: 'var(--text-body)', maxWidth: '480px', margin: '0 auto 20px', fontSize: '0.9rem' }}>
              {t('dashEmptyFavsDesc')}
            </p>
            <Link to="/explore" className="btn btn-primary">
              <Compass size={16} />
              <span>{t('navExplore')}</span>
            </Link>
          </div>
        ) : (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))',
            gap: '20px'
          }}>
            {favoriteDestinations.map(dest => (
              <DestinationCard
                key={dest.id}
                destination={dest}
                isFavorite={true}
                onOpenDetails={setSelectedDestination}
              />
            ))}
          </div>
        )}
      </div>

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
