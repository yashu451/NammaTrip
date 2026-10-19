import React, { useState, useEffect } from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.jsx';
import { useLanguage } from '../context/LanguageContext.jsx';
import {
  Calendar,
  IndianRupee,
  MapPin,
  Trash2,
  Eye,
  Sliders,
  Printer,
  X,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import ItineraryViewer from '../components/ItineraryViewer.jsx';
import BudgetSummary from '../components/BudgetSummary.jsx';

export default function SavedTripsPage() {
  const { getAuthHeaders } = useAuth();
  const { language, t } = useLanguage();
  const location = useLocation();
  const navigate = useNavigate();

  const [trips, setTrips] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedTrip, setSelectedTrip] = useState(null);

  // Parse query param if any (?tripId=1)
  const searchParams = new URLSearchParams(location.search);
  const queryTripId = searchParams.get('tripId');

  useEffect(() => {
    fetchTrips();
  }, []);

  const fetchTrips = async () => {
    try {
      setLoading(true);
      const res = await fetch('/api/trips', {
        headers: getAuthHeaders()
      });
      const data = await res.json();
      if (data.trips) {
        setTrips(data.trips);
        if (queryTripId) {
          const match = data.trips.find(t => t.id === Number(queryTripId));
          if (match) setSelectedTrip(match);
        }
      }
    } catch (err) {
      console.error('Fetch trips failed:', err);
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
        setTrips(prev => prev.filter(t => t.id !== tripId));
        if (selectedTrip?.id === tripId) {
          setSelectedTrip(null);
        }
      }
    } catch (err) {
      console.error('Delete trip error:', err);
    }
  };

  return (
    <div className="container" style={{ padding: '40px 20px 80px' }}>
      {/* Page Title */}
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '16px',
        marginBottom: '36px'
      }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--accent-gold-hover)', fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase' }}>
            <Calendar size={18} />
            <span>{language === 'kn' ? 'ಉಳಿಸಿದ ಪ್ರವಾಸಗಳು' : 'Your Saved Heritage Journeys'}</span>
          </div>
          <h1 style={{
            fontSize: '2.2rem',
            color: 'var(--primary-900)',
            fontFamily: 'var(--font-serif)',
            margin: '4px 0 0'
          }}>
            {t('navSavedTrips')}
          </h1>
        </div>

        <Link to="/planner" className="btn btn-gold">
          <Sparkles size={16} />
          <span>{t('dashNewTripCta')}</span>
        </Link>
      </div>

      {/* Trips Grid */}
      {loading ? (
        <div style={{ padding: '48px', textAlign: 'center', color: 'var(--text-muted)' }}>
          Loading saved itineraries...
        </div>
      ) : trips.length === 0 ? (
        <div style={{
          textAlign: 'center',
          padding: '64px 20px',
          backgroundColor: '#FFFFFF',
          borderRadius: 'var(--radius-md)',
          border: '1px solid var(--border-light)',
          boxShadow: 'var(--shadow-sm)'
        }}>
          <Calendar size={48} color="var(--accent-gold)" style={{ marginBottom: '16px' }} />
          <h3 style={{ fontSize: '1.3rem', color: 'var(--primary-900)' }}>
            {t('dashEmptyTripsTitle')}
          </h3>
          <p style={{ color: 'var(--text-body)', maxWidth: '480px', margin: '8px auto 24px', fontSize: '0.95rem' }}>
            {t('dashEmptyTripsDesc')}
          </p>
          <Link to="/planner" className="btn btn-gold btn-lg">
            <Sparkles size={18} />
            <span>{t('heroStartPlanning')}</span>
          </Link>
        </div>
      ) : (
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '24px'
        }}>
          {trips.map(trip => (
            <div
              key={trip.id}
              className="card-heritage"
              style={{
                padding: '24px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                gap: '18px'
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '8px', marginBottom: '10px' }}>
                  <span className="badge badge-green">
                    {trip.destination?.toUpperCase()}
                  </span>
                  <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                    {new Date(trip.createdAt).toLocaleDateString()}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.25rem', color: 'var(--primary-900)', margin: '0 0 10px', fontFamily: 'var(--font-serif)' }}>
                  {trip.title}
                </h3>

                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(2, 1fr)',
                  gap: '10px',
                  backgroundColor: 'var(--bg-surface-warm)',
                  padding: '12px 14px',
                  borderRadius: '8px',
                  fontSize: '0.85rem',
                  color: 'var(--text-body)'
                }}>
                  <div>
                    <span style={{ color: 'var(--text-muted)', fontSize: '0.75rem', display: 'block' }}>Starting City</span>
                    <strong>{trip.startingCity}</strong>
                  </div>
                  <div>
                    <span style={{ color: 'var(--text-muted)', fontSize: '0.75rem', display: 'block' }}>Duration</span>
                    <strong>{trip.durationDays} Days</strong>
                  </div>
                  <div>
                    <span style={{ color: 'var(--text-muted)', fontSize: '0.75rem', display: 'block' }}>Travelers</span>
                    <strong>{trip.travelersCount} Person(s)</strong>
                  </div>
                  <div>
                    <span style={{ color: 'var(--text-muted)', fontSize: '0.75rem', display: 'block' }}>Est. Cost</span>
                    <strong style={{ color: 'var(--primary-800)' }}>₹{trip.estimatedTotalCost?.toLocaleString('en-IN')}</strong>
                  </div>
                </div>
              </div>

              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                borderTop: '1px solid var(--border-light)',
                paddingTop: '14px',
                gap: '10px'
              }}>
                <button
                  onClick={() => setSelectedTrip(trip)}
                  className="btn btn-secondary btn-sm"
                >
                  <Eye size={15} />
                  <span>{t('btnViewTrip')}</span>
                </button>

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

      {/* Selected Trip Details Modal */}
      {selectedTrip && (
        <div className="modal-backdrop" onClick={() => setSelectedTrip(null)}>
          <div
            className="modal-dialog"
            onClick={(e) => e.stopPropagation()}
            style={{ maxWidth: '840px', padding: '28px' }}
          >
            <div style={{
              display: 'flex',
              alignItems: 'flex-start',
              justifyContent: 'space-between',
              gap: '16px',
              borderBottom: '1px solid var(--border-light)',
              paddingBottom: '16px',
              marginBottom: '24px'
            }}>
              <div>
                <span className="badge badge-green" style={{ marginBottom: '6px' }}>
                  {selectedTrip.destination?.toUpperCase()} • {selectedTrip.durationDays} DAYS
                </span>
                <h2 style={{ fontSize: '1.6rem', color: 'var(--primary-900)', fontFamily: 'var(--font-serif)', margin: 0 }}>
                  {selectedTrip.title}
                </h2>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '4px' }}>
                  Saved on {new Date(selectedTrip.createdAt).toLocaleDateString()}
                </div>
              </div>

              <button
                onClick={() => setSelectedTrip(null)}
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'var(--text-muted)',
                  cursor: 'pointer',
                  padding: '6px'
                }}
              >
                <X size={22} />
              </button>
            </div>

            {/* Budget Summary for this trip */}
            <div style={{ marginBottom: '24px' }}>
              <BudgetSummary budget={selectedTrip.budgetBreakdown} onOpenFixModal={() => {
                setSelectedTrip(null);
                navigate(`/planner?dest=${selectedTrip.destination}`);
              }} />
            </div>

            {/* Day wise Itinerary */}
            <ItineraryViewer itinerary={selectedTrip.itinerary} />
          </div>
        </div>
      )}
    </div>
  );
}
