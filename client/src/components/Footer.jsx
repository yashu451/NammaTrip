import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext.jsx';
import { GandaberundaEmblem, HoysalaStarMotif } from './HeritageMotifs.jsx';
import { Heart, Compass, Sparkles, BookOpen, ShieldCheck } from 'lucide-react';

export default function Footer() {
  const { language, setLanguage, t } = useLanguage();

  return (
    <footer style={{
      backgroundColor: 'var(--primary-900)',
      color: '#FAF7F2',
      borderTop: '3px solid var(--accent-gold)',
      marginTop: 'auto',
      paddingTop: '56px',
      paddingBottom: '32px'
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '36px',
          marginBottom: '48px'
        }}>
          {/* Brand & Culture Statement */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
              <div style={{
                width: '40px',
                height: '40px',
                borderRadius: '10px',
                background: 'linear-gradient(135deg, #2D6A4F 0%, #1B4332 100%)',
                color: '#FDE68A',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '1px solid rgba(253, 230, 138, 0.4)'
              }}>
                <GandaberundaEmblem size={24} />
              </div>
              <div>
                <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', fontWeight: 800, color: '#FFFFFF' }}>
                  NammaTrip AI
                </div>
                <div style={{ fontSize: '0.78rem', color: '#FDE68A', fontFamily: 'var(--font-kannada)' }}>
                  ನಮ್ಮ ಕರ್ನಾಟಕ, ನಮ್ಮ ಹೆಮ್ಮೆ
                </div>
              </div>
            </div>

            <p style={{ fontSize: '0.88rem', color: '#D8F3DC', lineHeight: 1.6, marginBottom: '18px' }}>
              {language === 'kn'
                ? 'ಕರ್ನಾಟಕದ ಭವ್ಯ ಇತಿಹಾಸ, ಶಿಲ್ಪಕಲೆ ಹಾಗೂ ಕನ್ನಡ ಸಂಸ್ಕೃತಿಯನ್ನು ಪ್ರತಿಯೊಬ್ಬ ಪ್ರವಾಸಿಗರಿಗೂ ಕೈಗೆಟುಕುವ ವೆಚ್ಚದಲ್ಲಿ ತಲುಪಿಸುವ ನವೀನ AI ವೇದಿಕೆ.'
                : 'Dedicated to illuminating Karnataka\'s imperial dynasties, UNESCO monuments, and sacred landscapes through budget-conscious, authentic AI itinerary planning.'}
            </p>

            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '6px 12px',
              borderRadius: '20px',
              backgroundColor: 'rgba(217, 119, 6, 0.2)',
              border: '1px solid rgba(217, 119, 6, 0.4)',
              fontSize: '0.78rem',
              color: '#FDE68A'
            }}>
              <ShieldCheck size={14} color="#FDE68A" />
              <span>ASI & UNESCO Verified Sourcing</span>
            </div>
          </div>

          {/* Heritage Circuits */}
          <div>
            <h4 style={{
              color: '#FDE68A',
              fontFamily: 'var(--font-serif)',
              fontSize: '1rem',
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
              marginBottom: '16px'
            }}>
              {language === 'kn' ? 'ಪ್ರಸಿದ್ಧ ಪಾರಂಪರಿಕ ಹಾದಿಗಳು' : 'Curated Heritage Trails'}
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.88rem' }}>
              <li>
                <Link to="/explore?category=Heritage" style={{ color: '#D8F3DC' }}>
                  {language === 'kn' ? 'ವಿಜಯನಗರ ಸಾಮ್ರಾಜ್ಯ ಹಾದಿ (ಹಂಪಿ-ಆನೆಗೊಂದಿ)' : 'Vijayanagara Empire Trail (Hampi)'}
                </Link>
              </li>
              <li>
                <Link to="/explore?category=Heritage" style={{ color: '#D8F3DC' }}>
                  {language === 'kn' ? 'ಚಾಲುಕ್ಯ ಗುಹಾಂತರ ದೇಗುಲಗಳು (ಬಾದಾಮಿ-ಪಟ್ಟದಕಲ್ಲು)' : 'Chalukya Rock-Cut Circuit (Badami-Pattadakal)'}
                </Link>
              </li>
              <li>
                <Link to="/explore?category=Heritage" style={{ color: '#D8F3DC' }}>
                  {language === 'kn' ? 'ಹೊಯ್ಸಳ ಪವಿತ್ರ ದೇಗುಲಗಳು (ಬೇಲೂರು-ಹಳೇಬೀಡು)' : 'Hoysala Sacred Ensembles (Belur-Halebidu)'}
                </Link>
              </li>
              <li>
                <Link to="/explore?category=Nature" style={{ color: '#D8F3DC' }}>
                  {language === 'kn' ? 'ಮಲೆನಾಡು ಕಾಫಿ ಎಸ್ಟೇಟ್ (ಕೂರ್ಗ್-ಚಿಕ್ಕಮಗಳೂರು)' : 'Malenadu Coffee Highlands (Coorg-Chikmagalur)'}
                </Link>
              </li>
              <li>
                <Link to="/explore?category=Culture" style={{ color: '#D8F3DC' }}>
                  {language === 'kn' ? 'ಕರಾವಳಿ ಮತ್ತು ಯಕ್ಷಗಾನ ತೀರ (ಗೋಕರ್ಣ-ಉಡುಪಿ)' : 'Karavali Coastal & Yakshagana Shore (Gokarna-Udupi)'}
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{
              color: '#FDE68A',
              fontFamily: 'var(--font-serif)',
              fontSize: '1rem',
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
              marginBottom: '16px'
            }}>
              {language === 'kn' ? 'ತ್ವರಿತ ಸಂಪರ್ಕಗಳು' : 'Quick Navigation'}
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.88rem' }}>
              <li><Link to="/explore" style={{ color: '#D8F3DC' }}>{t('navExplore')}</Link></li>
              <li><Link to="/planner" style={{ color: '#D8F3DC' }}>{t('navPlanTrip')}</Link></li>
              <li><Link to="/dashboard" style={{ color: '#D8F3DC' }}>{t('navDashboard')}</Link></li>
              <li><Link to="/saved-trips" style={{ color: '#D8F3DC' }}>{t('navSavedTrips')}</Link></li>
              <li><Link to="/login" style={{ color: '#D8F3DC' }}>{t('navLogin')}</Link></li>
              <li><Link to="/register" style={{ color: '#D8F3DC' }}>{t('navRegister')}</Link></li>
            </ul>
          </div>

          {/* Language and Historical Attribution */}
          <div>
            <h4 style={{
              color: '#FDE68A',
              fontFamily: 'var(--font-serif)',
              fontSize: '1rem',
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
              marginBottom: '16px'
            }}>
              {language === 'kn' ? 'ಭಾಷೆ ಮತ್ತು ಪರಂಪರೆ' : 'Language & Heritage'}
            </h4>
            <div style={{ display: 'flex', gap: '8px', marginBottom: '16px' }}>
              <button
                onClick={() => setLanguage('en')}
                style={{
                  padding: '6px 14px',
                  borderRadius: '16px',
                  border: language === 'en' ? '1px solid #FDE68A' : '1px solid rgba(255,255,255,0.2)',
                  background: language === 'en' ? '#2D6A4F' : 'transparent',
                  color: '#FFFFFF',
                  fontSize: '0.82rem',
                  fontWeight: 600,
                  cursor: 'pointer'
                }}
              >
                English
              </button>
              <button
                onClick={() => setLanguage('kn')}
                style={{
                  padding: '6px 14px',
                  borderRadius: '16px',
                  border: language === 'kn' ? '1px solid #FDE68A' : '1px solid rgba(255,255,255,0.2)',
                  background: language === 'kn' ? '#2D6A4F' : 'transparent',
                  color: '#FFFFFF',
                  fontSize: '0.85rem',
                  fontFamily: 'var(--font-kannada)',
                  fontWeight: 600,
                  cursor: 'pointer'
                }}
              >
                ಕನ್ನಡ
              </button>
            </div>
            <p style={{ fontSize: '0.78rem', color: '#B7E4C7', lineHeight: 1.5 }}>
              Historical narratives curated with reference to Archaeological Survey of India (ASI), Epigraphia Carnatica, and UNESCO World Heritage documentation.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.1)',
          paddingTop: '24px',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '16px',
          fontSize: '0.82rem',
          color: '#B7E4C7'
        }}>
          <div>
            © 2026 NammaTrip AI. All rights reserved. Built with pride for Karnataka Tourism.
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span>Made with</span>
            <Heart size={14} color="#D97706" fill="#D97706" />
            <span>for Kannada culture and travelers across the world.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
