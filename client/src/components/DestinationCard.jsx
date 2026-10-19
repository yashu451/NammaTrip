import React from 'react';
import { useLanguage } from '../context/LanguageContext.jsx';
import { Bookmark, Compass, Sparkles, MapPin, IndianRupee } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function DestinationCard({
  destination,
  isFavorite = false,
  onToggleFavorite,
  onOpenDetails
}) {
  const { language, t } = useLanguage();
  const navigate = useNavigate();

  const isUnesco = destination.id === 'hampi' || destination.id === 'pattadakal' || destination.id === 'belur' || destination.id === 'halebidu';

  const handlePlanClick = (e) => {
    e.stopPropagation();
    navigate(`/planner?dest=${destination.id}`);
  };

  return (
    <div
      className="card-heritage"
      onClick={() => onOpenDetails(destination)}
      style={{
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
        height: '100%'
      }}
    >
      {/* Destination Image & Badges */}
      <div style={{ position: 'relative', height: '220px', overflow: 'hidden' }}>
        <img
          src={destination.heroImage || `/images/destinations/${destination.id}.jpg`}
          alt={destination.name}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'transform 0.4s ease'
          }}
          loading="lazy"
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src = '/images/destinations/fallback.jpg';
          }}
        />
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.65) 100%)'
        }} />

        {/* Top Badges */}
        <div style={{
          position: 'absolute',
          top: '12px',
          left: '12px',
          right: '12px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          {isUnesco ? (
            <span className="badge badge-unesco">
              ★ UNESCO Site
            </span>
          ) : (
            <span className="badge badge-green">
              {destination.category?.[0] || 'Heritage'}
            </span>
          )}

          {/* Favorite Toggle Button */}
          {onToggleFavorite && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                onToggleFavorite(destination.id);
              }}
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                border: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                boxShadow: 'var(--shadow-sm)',
                transition: 'transform 0.2s ease'
              }}
              aria-label={isFavorite ? "Remove favorite" : "Save to favorites"}
            >
              <Bookmark
                size={18}
                color={isFavorite ? '#D97706' : '#78716C'}
                fill={isFavorite ? '#D97706' : 'none'}
              />
            </button>
          )}
        </div>

        {/* Image Bottom Overlay */}
        <div style={{
          position: 'absolute',
          bottom: '12px',
          left: '14px',
          right: '14px'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
            fontSize: '0.78rem',
            color: '#FDE68A',
            fontWeight: 600,
            marginBottom: '2px'
          }}>
            <MapPin size={13} />
            <span>{language === 'kn' ? destination.regionKn : destination.region}</span>
          </div>
          <div style={{
            display: 'flex',
            alignItems: 'baseline',
            flexWrap: 'wrap',
            gap: '6px'
          }}>
            <h3 style={{
              fontSize: '1.25rem',
              color: '#FFFFFF',
              fontFamily: 'var(--font-serif)',
              margin: 0,
              lineHeight: 1.25
            }}>
              {destination.name}
            </h3>
            <span style={{
              fontSize: '0.95rem',
              color: '#FDE68A',
              fontFamily: 'var(--font-kannada)',
              fontWeight: 600,
              lineHeight: 1.35
            }}>
              {destination.nameKn}
            </span>
          </div>
        </div>
      </div>

      {/* Card Content Body */}
      <div style={{
        padding: '16px 18px',
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        justifyContent: 'space-between',
        gap: '14px',
        minWidth: 0
      }}>
        <div>
          <p style={{
            fontSize: '0.88rem',
            color: 'var(--text-body)',
            lineHeight: language === 'kn' ? 1.65 : 1.5,
            display: '-webkit-box',
            WebkitLineClamp: 3,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            wordBreak: 'normal',
            overflowWrap: 'break-word'
          }}>
            {language === 'kn' ? destination.descriptionKn : destination.description}
          </p>
        </div>

        {/* Highlights Chips */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
          {(language === 'kn' ? destination.keyHighlightsKn : destination.keyHighlights)?.slice(0, 2).map((h, idx) => (
            <span
              key={idx}
              style={{
                fontSize: '0.75rem',
                padding: '3px 8px',
                borderRadius: '6px',
                backgroundColor: 'rgba(45, 106, 79, 0.08)',
                color: 'var(--primary-800)',
                fontWeight: 500,
                lineHeight: 1.4
              }}
            >
              • {h}
            </span>
          ))}
        </div>

        {/* Footer with Budget & Action */}
        <div style={{
          borderTop: '1px solid var(--border-light)',
          paddingTop: '12px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '10px'
        }}>
          <div>
            <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
              {t('dailyAvgBudget')}
            </div>
            <div style={{ display: 'flex', alignItems: 'center', fontSize: '0.95rem', fontWeight: 700, color: 'var(--primary-900)' }}>
              <IndianRupee size={14} />
              <span>{destination.avgDailyBudgetINR}</span>
              <span style={{ fontSize: '0.75rem', fontWeight: 500, color: 'var(--text-muted)', marginLeft: '2px' }}>/day</span>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '8px' }}>
            <button
              onClick={handlePlanClick}
              className="btn btn-gold btn-sm"
              title="Plan itinerary for this destination"
            >
              <Sparkles size={14} />
              <span>{t('planTripHere')}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
