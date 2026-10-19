import React, { useState } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext.jsx';
import {
  Lock,
  Key,
  CheckCircle2,
  AlertCircle,
  ArrowRight
} from 'lucide-react';

export default function ResetPasswordPage() {
  const { language, t } = useLanguage();
  const location = useLocation();
  const navigate = useNavigate();

  const searchParams = new URLSearchParams(location.search);
  const initialToken = searchParams.get('token') || '';

  const [token, setToken] = useState(initialToken);
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    if (newPassword.length < 6) {
      setError(language === 'kn' ? 'ಪಾಸ್‌ವರ್ಡ್ ಕನಿಷ್ಠ ೬ ಅಕ್ಷರಗಳಾಗಿರಬೇಕು.' : 'Password must be at least 6 characters long.');
      return;
    }

    if (newPassword !== confirmPassword) {
      setError(language === 'kn' ? 'ಪಾಸ್‌ವರ್ಡ್‌ಗಳು ಹೊಂದಿಕೆಯಾಗುತ್ತಿಲ್ಲ.' : 'Passwords do not match.');
      return;
    }

    setLoading(true);

    try {
      const res = await fetch('/api/auth/reset-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token, newPassword, confirmPassword })
      });

      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.message || 'Failed to reset password.');
      }

      setSuccess(true);
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
            backgroundColor: 'var(--primary-800)',
            color: '#FDE68A',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 16px'
          }}>
            <Lock size={26} />
          </div>
          <h1 style={{
            fontSize: '1.65rem',
            color: 'var(--primary-900)',
            fontFamily: 'var(--font-serif)',
            margin: 0
          }}>
            {t('resetTitle')}
          </h1>
          <p style={{ fontSize: '0.9rem', color: 'var(--text-body)', marginTop: '6px' }}>
            {t('resetSubtitle')}
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

        {success ? (
          <div style={{
            padding: '24px',
            borderRadius: '12px',
            backgroundColor: '#D8F3DC',
            border: '1px solid rgba(45, 106, 79, 0.3)',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px'
          }}>
            <CheckCircle2 size={40} color="#2D6A4F" style={{ margin: '0 auto' }} />
            <h3 style={{ fontSize: '1.2rem', color: '#1B4332', margin: 0 }}>
              Password Reset Successfully!
            </h3>
            <p style={{ fontSize: '0.88rem', color: '#1B4332', margin: 0 }}>
              Your account password has been updated. You can now sign in with your new credentials.
            </p>
            <Link to="/login" className="btn btn-primary" style={{ marginTop: '8px' }}>
              <span>Proceed to Log In</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
            <div>
              <label className="form-label">
                <Key size={15} color="var(--primary-800)" />
                <span>Reset Token</span>
              </label>
              <input
                type="text"
                required
                className="form-input"
                value={token}
                onChange={(e) => setToken(e.target.value)}
                placeholder="Paste token or use link from email"
              />
            </div>

            <div>
              <label className="form-label">
                <Lock size={15} color="var(--primary-800)" />
                <span>{t('labelNewPassword')}</span>
              </label>
              <input
                type="password"
                required
                className="form-input"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
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
                placeholder="Repeat new password"
                autoComplete="new-password"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="btn btn-gold btn-lg"
              style={{ width: '100%', marginTop: '8px' }}
            >
              <span>{loading ? t('btnResetting') : t('btnResetPassword')}</span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
