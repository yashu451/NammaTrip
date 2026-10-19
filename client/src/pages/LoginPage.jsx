import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.jsx';
import { useLanguage } from '../context/LanguageContext.jsx';
import {
  Lock,
  Mail,
  AlertCircle,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  UserCheck
} from 'lucide-react';
import { GandaberundaEmblem } from '../components/HeritageMotifs.jsx';

export default function LoginPage() {
  const { login } = useAuth();
  const { language, t } = useLanguage();
  const navigate = useNavigate();
  const location = useLocation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const from = location.state?.from?.pathname || '/dashboard';

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      await login(email, password);
      navigate(from, { replace: true });
    } catch (err) {
      setError(err.message || 'Login failed. Please check your credentials.');
    } finally {
      setLoading(false);
    }
  };

  const handleDemoLogin = async () => {
    setEmail('demo@nammatrip.ai');
    setPassword('NammaTrip2026!');
    setError(null);
    setLoading(true);

    try {
      await login('demo@nammatrip.ai', 'NammaTrip2026!');
      navigate(from, { replace: true });
    } catch (err) {
      setError(err.message || 'Demo login failed.');
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
        maxWidth: '480px',
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
            {t('loginTitle')}
          </h1>
          <p style={{ fontSize: '0.9rem', color: 'var(--text-body)', marginTop: '6px' }}>
            {t('loginSubtitle')}
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

        {/* Real Login Form */}
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
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

          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <label className="form-label" style={{ marginBottom: 0 }}>
                <Lock size={15} color="var(--primary-800)" />
                <span>{t('labelPassword')}</span>
              </label>
              <Link to="/forgot-password" style={{ fontSize: '0.8rem', color: 'var(--accent-gold-hover)', fontWeight: 600 }}>
                {t('forgotPasswordLink')}
              </Link>
            </div>
            <input
              type="password"
              required
              className="form-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              style={{ marginTop: '6px' }}
              autoComplete="current-password"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="btn btn-primary btn-lg"
            style={{ width: '100%', marginTop: '8px' }}
          >
            <span>{loading ? t('btnLoginning') : t('btnLogin')}</span>
            <ArrowRight size={18} />
          </button>
        </form>

        {/* Demo Login Quick CTA */}
        <div style={{
          marginTop: '20px',
          padding: '14px',
          borderRadius: '10px',
          backgroundColor: 'var(--bg-surface-warm)',
          border: '1px dashed var(--border-warm)',
          textAlign: 'center'
        }}>
          <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginBottom: '8px' }}>
            Instant Reviewer Access:
          </div>
          <button
            type="button"
            onClick={handleDemoLogin}
            disabled={loading}
            className="btn btn-gold btn-sm"
            style={{ width: '100%' }}
          >
            <UserCheck size={16} />
            <span>{t('demoLoginBtn')}</span>
          </button>
        </div>

        {/* Footer Link */}
        <div style={{ textAlign: 'center', marginTop: '24px', fontSize: '0.9rem', color: 'var(--text-body)' }}>
          <span>{t('noAccountText')} </span>
          <Link to="/register" style={{ color: 'var(--accent-gold-hover)', fontWeight: 700 }}>
            {t('registerLink')}
          </Link>
        </div>
      </div>
    </div>
  );
}
