import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext.jsx';
import {
  Mail,
  ArrowLeft,
  CheckCircle2,
  AlertCircle,
  ExternalLink,
  Key
} from 'lucide-react';
import { GandaberundaEmblem } from '../components/HeritageMotifs.jsx';

export default function ForgotPasswordPage() {
  const { language, t } = useLanguage();

  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [resetData, setResetData] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const res = await fetch('/api/auth/forgot-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      });

      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.message || 'Failed to process request.');
      }

      setResetData(data);
    } catch (err) {
      setError(err.message);
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
            backgroundColor: 'var(--accent-gold-light)',
            color: 'var(--accent-gold-hover)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 16px'
          }}>
            <Key size={26} />
          </div>
          <h1 style={{
            fontSize: '1.65rem',
            color: 'var(--primary-900)',
            fontFamily: 'var(--font-serif)',
            margin: 0
          }}>
            {t('forgotTitle')}
          </h1>
          <p style={{ fontSize: '0.9rem', color: 'var(--text-body)', marginTop: '6px' }}>
            {t('forgotSubtitle')}
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

        {resetData ? (
          <div style={{
            padding: '20px',
            borderRadius: '12px',
            backgroundColor: '#D8F3DC',
            border: '1px solid rgba(45, 106, 79, 0.3)',
            display: 'flex',
            flexDirection: 'column',
            gap: '14px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#1B4332', fontWeight: 700 }}>
              <CheckCircle2 size={20} color="#2D6A4F" />
              <span>Password Reset Link Ready</span>
            </div>
            <p style={{ fontSize: '0.88rem', color: '#1B4332', margin: 0 }}>
              {resetData.message}
            </p>

            {resetData.resetUrl && (
              <div style={{
                backgroundColor: '#FFFFFF',
                padding: '14px',
                borderRadius: '8px',
                border: '1px dashed var(--border-light)',
                marginTop: '6px'
              }}>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '6px' }}>
                  Testing Link (Click to proceed to Reset page):
                </div>
                <Link
                  to={resetData.resetUrl}
                  className="btn btn-gold btn-sm"
                  style={{ width: '100%', display: 'flex', justifyContent: 'center' }}
                >
                  <span>Proceed to Reset Password</span>
                  <ExternalLink size={14} />
                </Link>
              </div>
            )}
          </div>
        ) : (
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

            <button
              type="submit"
              disabled={loading}
              className="btn btn-primary btn-lg"
              style={{ width: '100%', marginTop: '8px' }}
            >
              <span>{loading ? t('btnSending') : t('btnSendReset')}</span>
            </button>
          </form>
        )}

        {/* Back to Login */}
        <div style={{ textAlign: 'center', marginTop: '24px' }}>
          <Link
            to="/login"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              fontSize: '0.88rem',
              color: 'var(--text-body)',
              fontWeight: 600
            }}
          >
            <ArrowLeft size={16} />
            <span>{t('backToLogin')}</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
