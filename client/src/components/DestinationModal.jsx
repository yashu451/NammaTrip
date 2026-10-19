import React from 'react';
import { useLanguage } from '../context/LanguageContext.jsx';
import { useNavigate } from 'react-router-dom';
import {
  X,
  MapPin,
  Calendar,
  IndianRupee,
  Sparkles,
  BookOpen,
  Award,
  Utensils,
  Palette,
  ExternalLink
} from 'lucide-react';
import { HeritageDivider } from './HeritageMotifs.jsx';

export default function DestinationModal({ destination, onClose }) {
  const { language, t } = useLanguage();
  const navigate = useNavigate();

  if (!destination) return null;

  const isUnesco = destination.id === 'hampi' || destination.id === 'pattadakal' || destination.id === 'belur' || destination.id === 'halebidu';

  const handlePlanTrip = () => {
    onClose();
    navigate(`/planner?dest=${destination.id}`);
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div
        className="modal-dialog"
        onClick={(e) => e.stopPropagation()}
        style={{ maxWidth: '780px' }}
      >
        {/* Header Hero Image */}
        <div style={{ position: 'relative', height: '280px', width: '100%' }}>
          <img
            src={destination.heroImage || `/images/destinations/${destination.id}.jpg`}
            alt={destination.name}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src = '/images/destinations/fallback.jpg';
            }}
          />
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(180deg, rgba(0,0,0,0.3) 0%, rgba(12, 36, 27, 0.85) 100%)'
          }} />

          {/* Close Button */}
          <button
            onClick={onClose}
            style={{
              position: 'absolute',
              top: '16px',
              right: '16px',
              width: '38px',
              height: '38px',
              borderRadius: '50%',
              backgroundColor: 'rgba(255,255,255,0.25)',
              backdropFilter: 'blur(4px)',
              border: 'none',
              color: '#FFFFFF',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer'
            }}
            aria-label="Close modal"
          >
            <X size={20} />
          </button>

          {/* Overlay Titles */}
          <div style={{
            position: 'absolute',
            bottom: '20px',
            left: '24px',
            right: '24px'
          }}>
            <div style={{ display: 'flex', gap: '8px', marginBottom: '8px', flexWrap: 'wrap' }}>
              {isUnesco && (
                <span className="badge badge-unesco">
                  ★ UNESCO World Heritage Site
                </span>
              )}
              <span className="badge badge-gold">
                {language === 'kn' ? destination.regionKn : destination.region}
              </span>
            </div>

            <div style={{ display: 'flex', alignItems: 'baseline', flexWrap: 'wrap', gap: '10px' }}>
              <h2 style={{
                fontSize: '1.9rem',
                color: '#FFFFFF',
                fontFamily: 'var(--font-serif)',
                margin: 0,
                lineHeight: 1.25
              }}>
                {destination.name}
              </h2>
              <span style={{
                fontSize: '1.35rem',
                color: '#FDE68A',
                fontFamily: 'var(--font-kannada)',
                fontWeight: 600,
                lineHeight: 1.35
              }}>
                {destination.nameKn}
              </span>
            </div>

            <p style={{
              fontSize: '0.95rem',
              color: '#D8F3DC',
              margin: '4px 0 0 0',
              fontStyle: 'italic',
              lineHeight: 1.5,
              wordBreak: 'normal',
              overflowWrap: 'break-word'
            }}>
              "{language === 'kn' ? destination.taglineKn : destination.tagline}"
            </p>
          </div>
        </div>

        {/* Modal Body Content */}
        <div style={{ padding: '28px 26px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {/* Quick Metrics Bar */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '12px',
            padding: '14px 18px',
            borderRadius: '12px',
            backgroundColor: 'var(--bg-surface-warm)',
            border: '1px solid var(--border-warm)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <IndianRupee size={20} color="#D97706" />
              <div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{t('dailyAvgBudget')}</div>
                <div style={{ fontWeight: 700, color: 'var(--primary-900)' }}>₹{destination.avgDailyBudgetINR} / person</div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Calendar size={20} color="#2D6A4F" />
              <div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{t('bestSeason')}</div>
                <div style={{ fontWeight: 600, color: 'var(--primary-900)', fontSize: '0.88rem' }}>
                  {language === 'kn' ? destination.bestTimeToVisitKn : destination.bestTimeToVisit}
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <MapPin size={20} color="#2D6A4F" />
              <div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Nearest Transit</div>
                <div style={{ fontWeight: 600, color: 'var(--primary-900)', fontSize: '0.85rem' }}>
                  {language === 'kn' ? destination.nearestTransitKn : destination.nearestTransit}
                </div>
              </div>
            </div>
          </div>

          {/* Heritage Story Section */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
              <BookOpen size={20} color="#D97706" />
              <h3 style={{ fontSize: '1.2rem', color: 'var(--primary-900)', margin: 0 }}>
                {t('heritageStoryTitle')}
              </h3>
            </div>
            <p style={{
              fontSize: '0.96rem',
              color: 'var(--text-body)',
              lineHeight: 1.7,
              backgroundColor: 'rgba(255,255,255,0.7)',
              padding: '16px',
              borderRadius: '10px',
              borderLeft: '4px solid var(--accent-gold)'
            }}>
              {language === 'kn' ? destination.heritageStoryKn : destination.heritageStory}
            </p>
          </div>

          <HeritageDivider text={language === 'kn' ? 'ಐತಿಹಾಸಿಕ ವಿವರ' : 'Heritage Highlights'} />

          {/* Significance & Key Highlights Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                <Award size={18} color="#2D6A4F" />
                <h4 style={{ fontSize: '1rem', color: 'var(--primary-800)', margin: 0 }}>
                  {t('significanceTitle')}
                </h4>
              </div>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-body)', lineHeight: 1.6 }}>
                {language === 'kn' ? destination.significanceKn : destination.significance}
              </p>
            </div>

            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                <Sparkles size={18} color="#D97706" />
                <h4 style={{ fontSize: '1rem', color: 'var(--primary-800)', margin: 0 }}>
                  {t('keyHighlightsTitle')}
                </h4>
              </div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                {(language === 'kn' ? destination.keyHighlightsKn : destination.keyHighlights)?.map((item, idx) => (
                  <li key={idx} style={{ fontSize: '0.88rem', color: 'var(--text-body)', display: 'flex', alignItems: 'baseline', gap: '6px' }}>
                    <span style={{ color: 'var(--accent-gold)', fontWeight: 'bold' }}>•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Traditions & Local Food Cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
            <div style={{
              padding: '16px',
              borderRadius: '12px',
              backgroundColor: 'rgba(45, 106, 79, 0.05)',
              border: '1px solid rgba(45, 106, 79, 0.15)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                <Palette size={18} color="#2D6A4F" />
                <h4 style={{ fontSize: '0.95rem', color: 'var(--primary-900)', margin: 0 }}>
                  {t('traditionsTitle')}
                </h4>
              </div>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-body)', lineHeight: 1.5, margin: 0 }}>
                {language === 'kn' ? destination.traditionsAndCraftsKn : destination.traditionsAndCrafts}
              </p>
            </div>

            <div style={{
              padding: '16px',
              borderRadius: '12px',
              backgroundColor: 'rgba(217, 119, 6, 0.08)',
              border: '1px solid rgba(217, 119, 6, 0.2)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                <Utensils size={18} color="#B45309" />
                <h4 style={{ fontSize: '0.95rem', color: 'var(--accent-gold-hover)', margin: 0 }}>
                  {t('localCuisineTitle')}
                </h4>
              </div>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-body)', lineHeight: 1.5, margin: 0 }}>
                {language === 'kn' ? destination.localFoodKn : destination.localFood}
              </p>
            </div>
          </div>

          {/* Verified Historical Sources */}
          <div style={{
            padding: '12px 16px',
            borderRadius: '8px',
            backgroundColor: '#F7F5F0',
            border: '1px dashed rgba(45, 106, 79, 0.2)',
            fontSize: '0.82rem',
            color: 'var(--text-muted)'
          }}>
            <strong style={{ color: 'var(--primary-900)' }}>{t('historicalSourcesTitle')}: </strong>
            <span>{language === 'kn' ? destination.historicalSourcesKn : destination.historicalSources}</span>
          </div>

          {/* Action Footer */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            gap: '12px',
            paddingTop: '12px',
            borderTop: '1px solid var(--border-light)'
          }}>
            <button onClick={onClose} className="btn btn-secondary">
              Close
            </button>
            <button onClick={handlePlanTrip} className="btn btn-gold btn-lg">
              <Sparkles size={18} />
              <span>{t('planTripHere')}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
