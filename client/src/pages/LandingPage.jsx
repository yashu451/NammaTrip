import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext.jsx';
import {
  Compass,
  Sparkles,
  ShieldCheck,
  TrendingUp,
  MapPin,
  Calendar,
  IndianRupee,
  ArrowRight,
  Award,
  ChevronRight,
  Heart
} from 'lucide-react';
import { GandaberundaEmblem, StoneChariotIcon, HeritageDivider } from '../components/HeritageMotifs.jsx';
import DestinationCard from '../components/DestinationCard.jsx';
import DestinationModal from '../components/DestinationModal.jsx';

export default function LandingPage() {
  const { language, t } = useLanguage();
  const navigate = useNavigate();
  const [featuredDestinations, setFeaturedDestinations] = useState([]);
  const [selectedDestination, setSelectedDestination] = useState(null);

  useEffect(() => {
    fetch('/api/destinations')
      .then(r => r.json())
      .then(data => {
        if (data.destinations) {
          setFeaturedDestinations(data.destinations.slice(0, 4));
        }
      })
      .catch(console.error);
  }, []);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '64px', paddingBottom: '64px' }}>
      {/* Hero Section */}
      <section style={{
        position: 'relative',
        backgroundColor: 'var(--primary-900)',
        color: '#FAF7F2',
        overflow: 'hidden',
        padding: '80px 0 96px',
        borderBottom: '4px solid var(--accent-gold)'
      }}>
        {/* Subtle Background Pattern */}
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'radial-gradient(circle at 80% 20%, rgba(217, 119, 6, 0.15) 0%, transparent 50%), radial-gradient(circle at 20% 80%, rgba(45, 106, 79, 0.25) 0%, transparent 50%)',
          pointerEvents: 'none'
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            alignItems: 'center',
            gap: '48px'
          }}>
            {/* Left Column: Headline & CTAs */}
            <div>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '6px 14px',
                borderRadius: '24px',
                backgroundColor: 'rgba(217, 119, 6, 0.2)',
                border: '1px solid rgba(217, 119, 6, 0.4)',
                color: '#FDE68A',
                fontSize: '0.85rem',
                fontWeight: 700,
                marginBottom: '20px'
              }}>
                <Sparkles size={16} color="#FDE68A" />
                <span>{t('heroBadge')}</span>
              </div>

              <h1 style={{
                fontSize: 'clamp(2rem, 4vw, 3.2rem)',
                fontFamily: language === 'kn' ? 'var(--font-kannada)' : 'var(--font-serif)',
                fontWeight: 800,
                lineHeight: language === 'kn' ? 1.35 : 1.15,
                color: '#FFFFFF',
                marginBottom: '20px',
                wordBreak: 'normal',
                overflowWrap: 'break-word'
              }}>
                {t('heroTitle')}
              </h1>

              <p style={{
                fontSize: '1.1rem',
                color: '#D8F3DC',
                lineHeight: 1.65,
                marginBottom: '32px',
                maxWidth: '560px'
              }}>
                {t('heroDescription')}
              </p>

              {/* CTAs */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px' }}>
                <Link to="/planner" className="btn btn-gold btn-lg">
                  <Sparkles size={18} />
                  <span>{t('heroStartPlanning')}</span>
                </Link>
                <Link to="/explore" className="btn btn-secondary btn-lg" style={{ backgroundColor: 'rgba(255,255,255,0.1)', color: '#FFFFFF', borderColor: 'rgba(255,255,255,0.25)' }}>
                  <Compass size={18} />
                  <span>{t('heroExploreHeritage')}</span>
                </Link>
              </div>

              {/* Trust Badges */}
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                gap: '20px',
                marginTop: '40px',
                paddingTop: '24px',
                borderTop: '1px solid rgba(255, 255, 255, 0.12)',
                fontSize: '0.82rem',
                color: '#B7E4C7'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <ShieldCheck size={16} color="#D97706" />
                  <span>{t('heroFeatureBudget')}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Award size={16} color="#D97706" />
                  <span>{t('heroFeatureHeritage')}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Heart size={16} color="#D97706" />
                  <span>{t('heroFeatureBilingual')}</span>
                </div>
              </div>
            </div>

            {/* Right Column: Visual Heritage Showcase Card */}
            <div style={{
              position: 'relative',
              borderRadius: 'var(--radius-lg)',
              overflow: 'hidden',
              boxShadow: 'var(--shadow-xl)',
              border: '2px solid rgba(253, 230, 138, 0.3)'
            }}>
              <img
                src="/images/destinations/hampi.jpg"
                alt="Hampi Stone Chariot Karnataka"
                style={{ width: '100%', height: '440px', objectFit: 'cover' }}
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = '/images/destinations/fallback.jpg';
                }}
              />
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(180deg, transparent 40%, rgba(12, 36, 27, 0.95) 100%)'
              }} />

              {/* Floating Pill on image */}
              <div style={{
                position: 'absolute',
                bottom: '24px',
                left: '24px',
                right: '24px',
                backgroundColor: 'rgba(15, 46, 35, 0.9)',
                backdropFilter: 'blur(8px)',
                borderRadius: '14px',
                padding: '16px 20px',
                border: '1px solid rgba(217, 119, 6, 0.4)'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '10px' }}>
                  <div>
                    <span className="badge badge-unesco" style={{ marginBottom: '6px' }}>
                      UNESCO World Heritage
                    </span>
                    <h3 style={{ fontSize: '1.25rem', color: '#FFFFFF', margin: 0, fontFamily: 'var(--font-serif)' }}>
                      Vijaya Vittala Chariot, Hampi
                    </h3>
                    <p style={{ fontSize: '0.8rem', color: '#FDE68A', margin: '2px 0 0', fontFamily: 'var(--font-kannada)' }}>
                      ವಿಜಯ ವಿಠ್ಠಲ ದೇಗುಲದ ಕಲ್ಲಿನ ರಥ • ೧೬ನೇ ಶತಮಾನ
                    </p>
                  </div>
                  <Link
                    to="/explore"
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                      backgroundColor: 'var(--accent-gold)',
                      color: '#FFFFFF',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    <ArrowRight size={18} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Destinations Preview */}
      <section className="container">
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'flex-end',
          justifyContent: 'space-between',
          gap: '16px',
          marginBottom: '32px'
        }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--accent-gold-hover)', fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase' }}>
              <StoneChariotIcon size={18} />
              <span>{language === 'kn' ? 'ಕರ್ನಾಟಕದ ಪ್ರಮುಖ ತಾಣಗಳು' : 'Curated Karnataka Jewels'}</span>
            </div>
            <h2 style={{ fontSize: '2rem', color: 'var(--primary-900)', marginTop: '4px' }}>
              {t('exploreTitle')}
            </h2>
          </div>

          <Link to="/explore" className="btn btn-outline" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span>{language === 'kn' ? 'ಎಲ್ಲಾ ತಾಣಗಳನ್ನು ನೋಡಿ' : 'View All Destinations'}</span>
            <ChevronRight size={16} />
          </Link>
        </div>

        {/* 4 Featured Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))',
          gap: '24px'
        }}>
          {featuredDestinations.map(dest => (
            <DestinationCard
              key={dest.id}
              destination={dest}
              onOpenDetails={setSelectedDestination}
            />
          ))}
        </div>
      </section>

      {/* How NammaTrip Works & Budget Feasibility Highlight */}
      <section style={{ backgroundColor: 'var(--bg-surface-warm)', padding: '64px 0', borderTop: '1px solid var(--border-warm)', borderBottom: '1px solid var(--border-warm)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto 48px' }}>
            <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--accent-gold-hover)', textTransform: 'uppercase' }}>
              {language === 'kn' ? 'ನಮ್ಮ ವೈಶಿಷ್ಟ್ಯಗಳು' : 'The NammaTrip AI Advantage'}
            </span>
            <h2 style={{ fontSize: '2.1rem', color: 'var(--primary-900)', marginTop: '6px' }}>
              {language === 'kn' ? 'ಏಕೆ ನಮ್ಮಟ್ರಿಪ್ AI ಭಿನ್ನವಾಗಿದೆ?' : 'Travel Karnataka with Cultural Depth & Realistic Budgets'}
            </h2>
            <p style={{ color: 'var(--text-body)', marginTop: '10px' }}>
              {language === 'kn'
                ? 'ಸಾಮಾನ್ಯ ಪ್ರವಾಸ ಆಪ್‌ಗಳಿಗಿಂತ ಭಿನ್ನವಾಗಿ, ನಮ್ಮಟ್ರಿಪ್ ಕರ್ನಾಟಕದ ಇತಿಹಾಸವನ್ನು ಗೌರವಿಸಿ ನೈಜ ವೆಚ್ಚದ ವಿಶ್ಲೇಷಣೆ ನೀಡುತ್ತದೆ.'
                : 'Generic travel planners suggest generic tourist traps. NammaTrip AI is deeply rooted in Karnataka’s authentic dynastic lore, regional food, and programmatic cost feasibility.'}
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px'
          }}>
            {/* Feature 1 */}
            <div style={{
              backgroundColor: '#FFFFFF',
              borderRadius: 'var(--radius-md)',
              padding: '28px',
              border: '1px solid var(--border-light)',
              boxShadow: 'var(--shadow-sm)'
            }}>
              <div style={{
                width: '44px',
                height: '44px',
                borderRadius: '12px',
                backgroundColor: 'var(--primary-100)',
                color: 'var(--primary-900)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '16px'
              }}>
                <IndianRupee size={22} color="#1B4332" />
              </div>
              <h3 style={{ fontSize: '1.2rem', color: 'var(--primary-900)', marginBottom: '8px' }}>
                {language === 'kn' ? 'ನಿಖರ ಪ್ರೋಗ್ರಾಮ್ಯಾಟಿಕ್ ಬಜೆಟ್' : 'Programmatic Feasibility Engine'}
              </h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-body)', lineHeight: 1.6 }}>
                {language === 'kn'
                  ? 'ಕೆ.ಎಸ್.ಆರ್.ಟಿ.ಸಿ ಬಸ್, ರೈಲ್ವೆ ದರಗಳು, ವಸತಿ ಮತ್ತು ಪುರಾತತ್ವ ಇಲಾಖೆಯ ಪ್ರವೇಶ ಶುಲ್ಕಗಳನ್ನು ಒಳಗೊಂಡ ನೈಜ ಲೆಕ್ಕಾಚಾರ.'
                  : 'Calculates true travel expenses based on real distances, SWR train/KSRTC bus tariffs, verified hotel tiers, and ASI entry fees.'}
              </p>
            </div>

            {/* Feature 2 */}
            <div style={{
              backgroundColor: '#FFFFFF',
              borderRadius: 'var(--radius-md)',
              padding: '28px',
              border: '1px solid var(--border-light)',
              boxShadow: 'var(--shadow-sm)'
            }}>
              <div style={{
                width: '44px',
                height: '44px',
                borderRadius: '12px',
                backgroundColor: 'var(--accent-gold-light)',
                color: 'var(--accent-gold-hover)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '16px'
              }}>
                <Sparkles size={22} color="#D97706" />
              </div>
              <h3 style={{ fontSize: '1.2rem', color: 'var(--primary-900)', marginBottom: '8px' }}>
                {language === 'kn' ? 'ಬುದ್ಧಿವಂತ Fix My Trip ಸೌಲಭ್ಯ' : 'Interactive Fix My Trip'}
              </h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-body)', lineHeight: 1.6 }}>
                {language === 'kn'
                  ? 'ಬಜೆಟ್ ಅಥವಾ ದಿನಗಳನ್ನು ಬದಲಾಯಿಸಿದಾಗ ಸ್ಮಾರಕಗಳನ್ನು ಕಾಯ್ದಿರಿಸಿ ವೆಚ್ಚವನ್ನು ಸ್ವಯಂಚಾಲಿತವಾಗಿ ಆಪ್ಟಿಮೈಸ್ ಮಾಡುತ್ತದೆ.'
                  : 'If budget shrinks or time is limited, our algorithm automatically reschedules transit and accommodation while preserving core UNESCO heritage sights.'}
              </p>
            </div>

            {/* Feature 3 */}
            <div style={{
              backgroundColor: '#FFFFFF',
              borderRadius: 'var(--radius-md)',
              padding: '28px',
              border: '1px solid var(--border-light)',
              boxShadow: 'var(--shadow-sm)'
            }}>
              <div style={{
                width: '44px',
                height: '44px',
                borderRadius: '12px',
                backgroundColor: 'var(--primary-50)',
                color: 'var(--primary-800)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '16px'
              }}>
                <GandaberundaEmblem size={24} />
              </div>
              <h3 style={{ fontSize: '1.2rem', color: 'var(--primary-900)', marginBottom: '8px' }}>
                {language === 'kn' ? 'ಸಂಪೂರ್ಣ ದ್ವಿಭಾಷಾ ಕನ್ನಡ & ಇಂಗ್ಲಿಷ್' : '100% Bilingual in Kannada & English'}
              </h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-body)', lineHeight: 1.6 }}>
                {language === 'kn'
                  ? 'ಪ್ರತಿಯೊಂದು ಸ್ಮಾರಕದ ಇತಿಹಾಸ, ಸಲಹೆಗಳು ಹಾಗೂ ಲೆಕ್ಕಾಚಾರಗಳು ಸ್ಪಷ್ಟ ಕನ್ನಡದಲ್ಲಿ ಲಭ್ಯ.'
                  : 'Every single heritage narrative, cultural tip, budget warning, and itinerary is carefully translated and formatted for native Kannada readability.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Heritage Quote Tribute Banner */}
      <section className="container">
        <div style={{
          backgroundColor: 'var(--primary-900)',
          borderRadius: 'var(--radius-lg)',
          padding: '48px 36px',
          color: '#FAF7F2',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
          border: '2px solid rgba(217, 119, 6, 0.4)'
        }}>
          <div style={{ maxWidth: '720px', margin: '0 auto' }}>
            <GandaberundaEmblem size={48} className="text-gold" />
            <blockquote style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '1.45rem',
              color: '#FDE68A',
              margin: '20px 0 14px',
              lineHeight: 1.4
            }}>
              "ಹೆಸರಾಯಿತು ಕರ್ನಾಟಕ, ಉಸಿರಾಗಲಿ ಕನ್ನಡ"
            </blockquote>
            <p style={{ fontSize: '0.95rem', color: '#D8F3DC', fontStyle: 'italic', margin: 0 }}>
              "Let Karnataka be named, and let Kannada be the breath of life."
            </p>
            <div style={{ marginTop: '28px' }}>
              <Link to="/planner" className="btn btn-gold btn-lg">
                <Sparkles size={18} />
                <span>{t('heroStartPlanning')}</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Selected Destination Detail Modal */}
      {selectedDestination && (
        <DestinationModal
          destination={selectedDestination}
          onClose={() => setSelectedDestination(null)}
        />
      )}
    </div>
  );
}
