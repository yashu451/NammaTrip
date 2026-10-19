import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.jsx';
import { useLanguage } from '../context/LanguageContext.jsx';
import { GandaberundaEmblem } from './HeritageMotifs.jsx';
import { Compass, Calendar, Bookmark, User, LogOut, Menu, X, Sparkles } from 'lucide-react';

export default function Navbar() {
  const { user, isAuthenticated, logout } = useAuth();
  const { language, setLanguage, t } = useLanguage();
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);

  const handleLogout = async () => {
    await logout();
    setUserDropdownOpen(false);
    navigate('/');
  };

  const isActive = (path) => location.pathname === path;

  return (
    <header style={{
      position: 'sticky',
      top: 0,
      zIndex: 100,
      backgroundColor: 'rgba(250, 247, 242, 0.95)',
      backdropFilter: 'blur(10px)',
      borderBottom: '1px solid rgba(45, 106, 79, 0.14)',
      boxShadow: '0 4px 16px -2px rgba(27, 67, 50, 0.04)'
    }}>
      <div className="container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        minHeight: '74px',
        paddingTop: '8px',
        paddingBottom: '8px',
        flexWrap: 'wrap',
        gap: '12px'
      }}>
        {/* Brand Logo */}
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none', flexShrink: 0 }}>
          <div style={{
            width: '44px',
            height: '44px',
            borderRadius: '12px',
            background: 'linear-gradient(135deg, #1B4332 0%, #0F2E23 100%)',
            color: '#FDE68A',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 4px 12px rgba(27, 67, 50, 0.25)',
            border: '1px solid rgba(253, 230, 138, 0.3)'
          }}>
            <GandaberundaEmblem size={28} />
          </div>
          <div>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px'
            }}>
              <span style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.35rem',
                fontWeight: 800,
                color: 'var(--primary-900)',
                letterSpacing: '-0.02em',
                lineHeight: 1.1
              }}>
                NammaTrip
              </span>
              <span style={{
                fontSize: '0.7rem',
                fontWeight: 800,
                padding: '2px 6px',
                borderRadius: '6px',
                background: 'linear-gradient(135deg, #D97706, #B45309)',
                color: '#FFFFFF',
                letterSpacing: '0.05em'
              }}>
                AI
              </span>
            </div>
            <div style={{
              fontSize: '0.75rem',
              fontWeight: 600,
              color: 'var(--accent-gold-hover)',
              fontFamily: 'var(--font-kannada)',
              letterSpacing: '0.02em'
            }}>
              ನಮ್ಮಟ್ರಿಪ್ AI • ಕರ್ನಾಟಕ
            </div>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hide-on-mobile nav-desktop-links" style={{ display: 'flex', alignItems: 'center', gap: '6px', flexWrap: 'wrap' }}>
          <Link
            to="/explore"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              padding: '8px 14px',
              borderRadius: '8px',
              fontSize: '0.92rem',
              fontWeight: 600,
              color: isActive('/explore') ? 'var(--primary-800)' : 'var(--text-body)',
              backgroundColor: isActive('/explore') ? 'rgba(45, 106, 79, 0.08)' : 'transparent',
              textDecoration: 'none',
              transition: 'all 0.15s ease'
            }}
          >
            <Compass size={17} color={isActive('/explore') ? '#2D6A4F' : 'currentColor'} />
            <span>{t('navExplore')}</span>
          </Link>

          <Link
            to="/planner"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              padding: '8px 14px',
              borderRadius: '8px',
              fontSize: '0.92rem',
              fontWeight: 600,
              color: isActive('/planner') ? 'var(--primary-800)' : 'var(--text-body)',
              backgroundColor: isActive('/planner') ? 'rgba(45, 106, 79, 0.08)' : 'transparent',
              textDecoration: 'none',
              transition: 'all 0.15s ease'
            }}
          >
            <Sparkles size={17} color={isActive('/planner') ? '#D97706' : 'currentColor'} />
            <span>{t('navPlanTrip')}</span>
          </Link>

          {isAuthenticated && (
            <>
              <Link
                to="/dashboard"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '8px 14px',
                  borderRadius: '8px',
                  fontSize: '0.92rem',
                  fontWeight: 600,
                  color: isActive('/dashboard') ? 'var(--primary-800)' : 'var(--text-body)',
                  backgroundColor: isActive('/dashboard') ? 'rgba(45, 106, 79, 0.08)' : 'transparent',
                  textDecoration: 'none',
                  transition: 'all 0.15s ease'
                }}
              >
                <Calendar size={17} color={isActive('/dashboard') ? '#2D6A4F' : 'currentColor'} />
                <span>{t('navDashboard')}</span>
              </Link>

              <Link
                to="/saved-trips"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '8px 14px',
                  borderRadius: '8px',
                  fontSize: '0.92rem',
                  fontWeight: 600,
                  color: isActive('/saved-trips') ? 'var(--primary-800)' : 'var(--text-body)',
                  backgroundColor: isActive('/saved-trips') ? 'rgba(45, 106, 79, 0.08)' : 'transparent',
                  textDecoration: 'none',
                  transition: 'all 0.15s ease'
                }}
              >
                <Bookmark size={17} color={isActive('/saved-trips') ? '#2D6A4F' : 'currentColor'} />
                <span>{t('navSavedTrips')}</span>
              </Link>
            </>
          )}
        </nav>

        {/* Right Section: Language Toggle & Auth Controls */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexShrink: 0 }}>
          {/* Visible English | ಕನ್ನಡ Toggle */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              backgroundColor: 'rgba(45, 106, 79, 0.08)',
              padding: '3px',
              borderRadius: '24px',
              border: '1px solid rgba(45, 106, 79, 0.18)'
            }}
          >
            <button
              onClick={() => setLanguage('en')}
              style={{
                padding: '4px 10px',
                borderRadius: '20px',
                border: 'none',
                background: language === 'en' ? 'var(--primary-800)' : 'transparent',
                color: language === 'en' ? '#FFFFFF' : 'var(--text-body)',
                fontWeight: 600,
                fontSize: '0.8rem',
                cursor: 'pointer',
                transition: 'all 0.15s ease'
              }}
              title="Switch to English"
            >
              English
            </button>
            <button
              onClick={() => setLanguage('kn')}
              style={{
                padding: '4px 10px',
                borderRadius: '20px',
                border: 'none',
                background: language === 'kn' ? 'var(--primary-800)' : 'transparent',
                color: language === 'kn' ? '#FFFFFF' : 'var(--text-body)',
                fontWeight: 600,
                fontSize: '0.82rem',
                fontFamily: 'var(--font-kannada)',
                cursor: 'pointer',
                transition: 'all 0.15s ease'
              }}
              title="ಕನ್ನಡಕ್ಕೆ ಬದಲಾಯಿಸಿ"
            >
              ಕನ್ನಡ
            </button>
          </div>

          {/* Auth Controls */}
          {isAuthenticated ? (
            <div style={{ position: 'relative' }} className="hide-on-mobile">
              <button
                onClick={() => setUserDropdownOpen(!userDropdownOpen)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '6px 14px',
                  borderRadius: '24px',
                  backgroundColor: '#FFFFFF',
                  border: '1px solid rgba(45, 106, 79, 0.2)',
                  cursor: 'pointer',
                  boxShadow: 'var(--shadow-sm)'
                }}
              >
                <div style={{
                  width: '28px',
                  height: '28px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--primary-100)',
                  color: 'var(--primary-900)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '0.8rem',
                  fontWeight: 700
                }}>
                  {user?.name?.charAt(0) || 'U'}
                </div>
                <span style={{ fontSize: '0.88rem', fontWeight: 600, color: 'var(--primary-900)' }}>
                  {user?.name?.split(' ')[0] || 'User'}
                </span>
              </button>

              {userDropdownOpen && (
                <div
                  style={{
                    position: 'absolute',
                    right: 0,
                    top: '46px',
                    width: '210px',
                    backgroundColor: '#FFFFFF',
                    borderRadius: '12px',
                    border: '1px solid rgba(45, 106, 79, 0.15)',
                    boxShadow: 'var(--shadow-lg)',
                    padding: '8px 0',
                    zIndex: 200,
                    animation: 'slideUp 0.15s ease'
                  }}
                  onMouseLeave={() => setUserDropdownOpen(false)}
                >
                  <div style={{ padding: '8px 16px', borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
                    <div style={{ fontWeight: 700, fontSize: '0.9rem', color: 'var(--primary-900)' }}>{user?.name}</div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{user?.email}</div>
                  </div>

                  <Link
                    to="/dashboard"
                    onClick={() => setUserDropdownOpen(false)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      padding: '10px 16px',
                      fontSize: '0.88rem',
                      color: 'var(--text-main)',
                      textDecoration: 'none'
                    }}
                  >
                    <Calendar size={16} />
                    <span>{t('navDashboard')}</span>
                  </Link>

                  <Link
                    to="/saved-trips"
                    onClick={() => setUserDropdownOpen(false)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      padding: '10px 16px',
                      fontSize: '0.88rem',
                      color: 'var(--text-main)',
                      textDecoration: 'none'
                    }}
                  >
                    <Bookmark size={16} />
                    <span>{t('navSavedTrips')}</span>
                  </Link>

                  <Link
                    to="/profile"
                    onClick={() => setUserDropdownOpen(false)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      padding: '10px 16px',
                      fontSize: '0.88rem',
                      color: 'var(--text-main)',
                      textDecoration: 'none'
                    }}
                  >
                    <User size={16} />
                    <span>{t('navProfile')}</span>
                  </Link>

                  <div style={{ height: '1px', backgroundColor: 'rgba(0,0,0,0.06)', margin: '4px 0' }} />

                  <button
                    onClick={handleLogout}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      width: '100%',
                      padding: '10px 16px',
                      fontSize: '0.88rem',
                      color: '#DC2626',
                      border: 'none',
                      backgroundColor: 'transparent',
                      textAlign: 'left',
                      cursor: 'pointer'
                    }}
                  >
                    <LogOut size={16} />
                    <span>{t('navLogout')}</span>
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div className="hide-on-mobile" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Link to="/login" className="btn btn-secondary btn-sm">
                {t('navLogin')}
              </Link>
              <Link to="/register" className="btn btn-gold btn-sm">
                {t('navRegister')}
              </Link>
            </div>
          )}

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              display: 'none',
              padding: '8px',
              borderRadius: '8px',
              border: '1px solid rgba(45, 106, 79, 0.2)',
              backgroundColor: '#FFFFFF',
              color: 'var(--primary-800)',
              cursor: 'pointer'
            }}
            className="mobile-toggle"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div style={{
          padding: '16px 20px 24px',
          backgroundColor: '#FFFFFF',
          borderBottom: '1px solid rgba(45, 106, 79, 0.15)',
          boxShadow: 'var(--shadow-lg)',
          display: 'flex',
          flexDirection: 'column',
          gap: '12px'
        }}>
          <Link
            to="/explore"
            onClick={() => setMobileMenuOpen(false)}
            style={{ padding: '10px 0', fontSize: '1rem', fontWeight: 600, color: 'var(--primary-900)' }}
          >
            {t('navExplore')}
          </Link>
          <Link
            to="/planner"
            onClick={() => setMobileMenuOpen(false)}
            style={{ padding: '10px 0', fontSize: '1rem', fontWeight: 600, color: 'var(--primary-900)' }}
          >
            {t('navPlanTrip')}
          </Link>

          {isAuthenticated ? (
            <>
              <Link
                to="/dashboard"
                onClick={() => setMobileMenuOpen(false)}
                style={{ padding: '10px 0', fontSize: '1rem', fontWeight: 600, color: 'var(--primary-900)' }}
              >
                {t('navDashboard')}
              </Link>
              <Link
                to="/saved-trips"
                onClick={() => setMobileMenuOpen(false)}
                style={{ padding: '10px 0', fontSize: '1rem', fontWeight: 600, color: 'var(--primary-900)' }}
              >
                {t('navSavedTrips')}
              </Link>
              <Link
                to="/profile"
                onClick={() => setMobileMenuOpen(false)}
                style={{ padding: '10px 0', fontSize: '1rem', fontWeight: 600, color: 'var(--primary-900)' }}
              >
                {t('navProfile')}
              </Link>
              <button
                onClick={handleLogout}
                style={{
                  padding: '10px 0',
                  fontSize: '1rem',
                  fontWeight: 600,
                  color: '#DC2626',
                  background: 'none',
                  border: 'none',
                  textAlign: 'left',
                  cursor: 'pointer'
                }}
              >
                {t('navLogout')}
              </button>
            </>
          ) : (
            <div style={{ display: 'flex', gap: '10px', marginTop: '8px' }}>
              <Link
                to="/login"
                onClick={() => setMobileMenuOpen(false)}
                className="btn btn-secondary"
                style={{ flex: 1 }}
              >
                {t('navLogin')}
              </Link>
              <Link
                to="/register"
                onClick={() => setMobileMenuOpen(false)}
                className="btn btn-gold"
                style={{ flex: 1 }}
              >
                {t('navRegister')}
              </Link>
            </div>
          )}
        </div>
      )}

      {/* Embedded Mobile CSS */}
      <style>{`
        @media (max-width: 1024px) {
          .mobile-toggle {
            display: flex !important;
          }
          .nav-desktop-links {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
}
