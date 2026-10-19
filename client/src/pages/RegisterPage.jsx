import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.jsx';
import { useLanguage } from '../context/LanguageContext.jsx';
import {
  User,
  Mail,
  Lock,
  Globe,
  AlertCircle,
  ArrowRight,
  ShieldCheck
} from 'lucide-react';
import { GandaberundaEmblem } from '../components/HeritageMotifs.jsx';

export default function RegisterPage() {
  const { register } = useAuth();
  const { language, setLanguage, t } = useLanguage();
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [prefLanguage, setPrefLanguage] = useState(language || 'en');

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    if (password.length < 6) {
      setError(language === 'kn' ? 'ಪಾಸ್‌ವರ್ಡ್ ಕನಿಷ್ಠ ೬ ಅಕ್ಷರಗಳಾಗಿರಬೇಕು.' : 'Password must be at least 6 characters long.');
      return;
    }

    if (password !== confirmPassword) {
      setError(language === 'kn' ? 'ಪಾಸ್‌ವರ್ಡ್‌ಗಳು ಹೊಂದಿಕೆಯಾಗುತ್ತಿಲ್ಲ.' : 'Passwords do not match.');
      return;
    }

    setLoading(true);

    try {
      await register(name, email, password, confirmPassword, prefLanguage);
      navigate('/dashboard');
    } catch (err) {
      setError(err.message || 'Registration failed. Please check your inputs.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container-narrow" style={{ padding: '60px 20px 80px' }}>
      <div style={{
        backgroundColor: '#FFFFFF',
        borderRadius: 'var(--radius-lg)',
        border: '1px solid var(--border-light)',
        boxShadow: 'var(--shadow-xl)',
        padding: '40px 36px',
        maxWidth: '520px',
        margin: '0 auto'
      }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '28px' }}>
          <div style={{
            width: '52px',
            height: '52px',
            borderRadius: '14px',
            backgroundColor: 'var(--primary-800)',
            color: '#FDE68A',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 16px',
            boxShadow: '0 4px 14px rgba(27, 67, 50, 0.25)'
          }}>
            <GandaberundaEmblem size={32} />
          </div>
          <h1 style={{
            fontSize: '1.75rem',
            color: 'var(--primary-900)',
            fontFamily: 'var(--font-serif)',
            margin: 0
          }}>
            {t('registerTitle')}
          </h1>
          <p style={{ fontSize: '0.9rem', color: 'var(--text-body)', marginTop: '6px' }}>
            {t('registerSubtitle')}
          </p>
        </div>

        {error && (
          <div style={{
            padding: '12px 14px',
            borderRadius: '8px',
            backgroundColor: '#FEE2E2',
            color: '#B91C1C',
            fontSize: '0.88rem',
            marginBottom: '20px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}>
            <AlertCircle size={18} />
            <span>{error}</span>
          </div>
        )}

        {/* Real Registration Form */}
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
          <div>
            <label className="form-label">
              <User size={15} color="var(--primary-800)" />
              <span>{t('labelFullName')}</span>
            </label>
            <input
              type="text"
              required
              className="form-input"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. Yashwanth Kumar"
              autoComplete="name"
            />
          </div>

          <div>
            <label className="form-label">
              <Mail size={15} color="var(--primary-800)" />
              <span>{t('labelEmail')}</span>
            </label>
            <input
              type="email"
              required
              className="form-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              autoComplete="email"
            />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '14px' }}>
            <div>
              <label className="form-label">
                <Lock size={15} color="var(--primary-800)" />
                <span>{t('labelPassword')}</span>
              </label>
              <input
                type="password"
                required
                className="form-input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Min 6 characters"
                autoComplete="new-password"
              />
            </div>

            <div>
              <label className="form-label">
                <Lock size={15} color="var(--primary-800)" />
                <span>{t('labelConfirmPassword')}</span>
              </label>
              <input
                type="password"
                required
                className="form-input"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm password"
                autoComplete="new-password"
              />
            </div>
          </div>

          <div>
            <label className="form-label">
              <Globe size={15} color="var(--primary-800)" />
              <span>{t('labelPreferredLanguage')}</span>
            </label>
            <div style={{ display: 'flex', gap: '10px' }}>
              <button
                type="button"
                onClick={() => setPrefLanguage('en')}
                style={{
                  flex: 1,
                  padding: '10px',
                  borderRadius: '8px',
                  border: prefLanguage === 'en' ? '2px solid var(--primary-800)' : '1px solid var(--border-light)',
                  backgroundColor: prefLanguage === 'en' ? 'var(--primary-50)' : '#FFFFFF',
                  color: 'var(--primary-900)',
                  fontWeight: 600,
                  fontSize: '0.9rem',
                  cursor: 'pointer'
                }}
              >
                English
              </button>
              <button
                type="button"
                onClick={() => setPrefLanguage('kn')}
                style={{
                  flex: 1,
                  padding: '10px',
                  borderRadius: '8px',
                  border: prefLanguage === 'kn' ? '2px solid var(--primary-800)' : '1px solid var(--border-light)',
                  backgroundColor: prefLanguage === 'kn' ? 'var(--primary-50)' : '#FFFFFF',
                  color: 'var(--primary-900)',
                  fontFamily: 'var(--font-kannada)',
                  fontWeight: 600,
                  fontSize: '0.9rem',
                  cursor: 'pointer'
                }}
              >
                ಕನ್ನಡ (Kannada)
              </button>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="btn btn-gold btn-lg"
            style={{ width: '100%', marginTop: '10px' }}
          >
            <span>{loading ? t('btnRegistering') : t('btnRegister')}</span>
            <ArrowRight size={18} />
          </button>
        </form>

        {/* Footer Link */}
        <div style={{ textAlign: 'center', marginTop: '24px', fontSize: '0.9rem', color: 'var(--text-body)' }}>
          <span>{t('hasAccountText')} </span>
          <Link to="/login" style={{ color: 'var(--accent-gold-hover)', fontWeight: 700 }}>
            {t('loginLink')}
          </Link>
        </div>
      </div>
    </div>
  );
}
