import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext.jsx';
import { useLanguage } from '../context/LanguageContext.jsx';
import {
  User,
  Mail,
  MapPin,
  Globe,
  CheckCircle2,
  AlertCircle,
  Save,
  LogOut,
  Sliders,
  Utensils,
  Compass
} from 'lucide-react';
import { GandaberundaEmblem } from '../components/HeritageMotifs.jsx';

export default function ProfilePage() {
  const { user, profile, updateProfile, logout } = useAuth();
  const { language, setLanguage, t } = useLanguage();

  const [name, setName] = useState(user?.name || '');
  const [prefLanguage, setPrefLanguage] = useState(user?.language_pref || language || 'en');
  const [homeCity, setHomeCity] = useState(profile?.home_city || 'Bengaluru');
  const [travelStyle, setTravelStyle] = useState(profile?.travel_style || 'moderate');
  const [dietaryPref, setDietaryPref] = useState(profile?.dietary_pref || 'all');
  const [interests, setInterests] = useState(profile?.interests || ['Heritage', 'Culture', 'Food']);

  const [saving, setSaving] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  const interestOptions = [
    'Heritage',
    'Culture',
    'Food',
    'Nature',
    'Spiritual'
  ];

  const handleInterestToggle = (item) => {
    setInterests(prev =>
      prev.includes(item) ? prev.filter(i => i !== item) : [...prev, item]
    );
  };

  const handleSave = async (e) => {
    e.preventDefault();
    setSaving(true);
    setError(null);
    setSuccess(false);

    try {
      await updateProfile({
        name,
        language_pref: prefLanguage,
        home_city: homeCity,
        travel_style: travelStyle,
        dietary_pref: dietaryPref,
        interests
      });

      setLanguage(prefLanguage);
      setSuccess(true);
      setTimeout(() => setSuccess(false), 4000);
    } catch (err) {
      setError(err.message || 'Failed to update profile.');
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="container-narrow" style={{ padding: '40px 20px 80px' }}>
      <div style={{
        backgroundColor: '#FFFFFF',
        borderRadius: 'var(--radius-lg)',
        border: '1px solid var(--border-light)',
        boxShadow: 'var(--shadow-md)',
        padding: '36px',
        display: 'flex',
        flexDirection: 'column',
        gap: '28px'
      }}>
        {/* Header */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderBottom: '1px solid var(--border-light)',
          paddingBottom: '20px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <div style={{
              width: '54px',
              height: '54px',
              borderRadius: '50%',
              backgroundColor: 'var(--primary-100)',
              color: 'var(--primary-800)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 800,
              fontSize: '1.4rem'
            }}>
              {user?.name?.charAt(0) || 'U'}
            </div>
            <div>
              <h1 style={{ fontSize: '1.5rem', color: 'var(--primary-900)', fontFamily: 'var(--font-serif)', margin: 0 }}>
                {t('profileTitle')}
              </h1>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: '2px 0 0' }}>
                {user?.email}
              </p>
            </div>
          </div>

          <button
            onClick={logout}
            className="btn btn-outline btn-sm"
            style={{ color: '#DC2626', borderColor: 'rgba(220, 38, 38, 0.3)' }}
          >
            <LogOut size={16} />
            <span>{t('navLogout')}</span>
          </button>
        </div>

        {success && (
          <div style={{
            padding: '12px 16px',
            borderRadius: '8px',
            backgroundColor: '#D8F3DC',
            color: '#1B4332',
            fontSize: '0.9rem',
            fontWeight: 600,
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}>
            <CheckCircle2 size={18} color="#2D6A4F" />
            <span>{t('profileSavedSuccess')}</span>
          </div>
        )}

        {error && (
          <div style={{
            padding: '12px 16px',
            borderRadius: '8px',
            backgroundColor: '#FEE2E2',
            color: '#B91C1C',
            fontSize: '0.9rem',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}>
            <AlertCircle size={18} />
            <span>{error}</span>
          </div>
        )}

        {/* Profile Settings Form */}
        <form onSubmit={handleSave} style={{ display: 'flex', flexDirection: 'column', gap: '22px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '18px' }}>
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
              />
            </div>

            <div>
              <label className="form-label">
                <Mail size={15} color="var(--text-muted)" />
                <span>Email Address (Read-only)</span>
              </label>
              <input
                type="email"
                disabled
                className="form-input"
                value={user?.email || ''}
                style={{ backgroundColor: '#F9F9F9', color: 'var(--text-muted)' }}
              />
            </div>

            <div>
              <label className="form-label">
                <Globe size={15} color="var(--primary-800)" />
                <span>{t('labelPreferredLanguage')}</span>
              </label>
              <select
                className="form-select"
                value={prefLanguage}
                onChange={(e) => setPrefLanguage(e.target.value)}
              >
                <option value="en">English (ಆಂಗ್ಲ)</option>
                <option value="kn">ಕನ್ನಡ (Kannada)</option>
              </select>
            </div>

            <div>
              <label className="form-label">
                <MapPin size={15} color="var(--primary-800)" />
                <span>{t('labelHomeCity')}</span>
              </label>
              <select
                className="form-select"
                value={homeCity}
                onChange={(e) => setHomeCity(e.target.value)}
              >
                <option value="Bengaluru">Bengaluru</option>
                <option value="Mysuru">Mysuru</option>
                <option value="Hubballi">Hubballi-Dharwad</option>
                <option value="Mangaluru">Mangaluru</option>
                <option value="Belagavi">Belagavi</option>
              </select>
            </div>

            <div>
              <label className="form-label">
                <Sliders size={15} color="var(--primary-800)" />
                <span>{t('labelTravelStyle')}</span>
              </label>
              <select
                className="form-select"
                value={travelStyle}
                onChange={(e) => setTravelStyle(e.target.value)}
              >
                <option value="budget">Budget Traveler (ಕೈಗೆಟುಕುವ ವೆಚ್ಚ)</option>
                <option value="moderate">Moderate Heritage Seeker (ಸಮತೋಲಿತ)</option>
                <option value="luxury">Luxury / Royal Comfort (ಐಷಾರಾಮಿ)</option>
              </select>
            </div>

            <div>
              <label className="form-label">
                <Utensils size={15} color="var(--primary-800)" />
                <span>{t('labelDietary')}</span>
              </label>
              <select
                className="form-select"
                value={dietaryPref}
                onChange={(e) => setDietaryPref(e.target.value)}
              >
                <option value="all">All Karnataka Cuisines (ಎಲ್ಲಾ ತಿನಿಸುಗಳು)</option>
                <option value="vegetarian">Pure Vegetarian / Sattvik (ಶುದ್ಧ ಸಸ್ಯಾಹಾರಿ)</option>
                <option value="nonveg">Coastal & Regional Specialty (ಕರಾವಳಿ/ನಾಟಿ)</option>
              </select>
            </div>
          </div>

          {/* Interests */}
          <div>
            <label className="form-label" style={{ marginBottom: '10px' }}>
              <Compass size={15} color="var(--primary-800)" />
              <span>Heritage & Travel Interests</span>
            </label>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {interestOptions.map(opt => {
                const active = interests.includes(opt);
                return (
                  <button
                    key={opt}
                    type="button"
                    onClick={() => handleInterestToggle(opt)}
                    style={{
                      padding: '8px 16px',
                      borderRadius: '20px',
                      border: active ? '1px solid var(--primary-800)' : '1px solid var(--border-light)',
                      backgroundColor: active ? 'var(--primary-800)' : '#FFFFFF',
                      color: active ? '#FFFFFF' : 'var(--text-body)',
                      fontWeight: 600,
                      fontSize: '0.85rem',
                      cursor: 'pointer'
                    }}
                  >
                    {active ? '✓ ' : '+ '}{opt}
                  </button>
                );
              })}
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '12px' }}>
            <button
              type="submit"
              disabled={saving}
              className="btn btn-gold btn-lg"
              style={{ minWidth: '180px' }}
            >
              <Save size={18} />
              <span>{saving ? 'Saving...' : t('btnSaveProfile')}</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
