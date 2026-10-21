import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext.jsx';
import { useAuth } from '../context/AuthContext.jsx';
import {
  Sparkles,
  MapPin,
  Calendar,
  Users,
  IndianRupee,
  Bus,
  Train,
  Car,
  Home,
  Bookmark,
  CheckCircle2,
  AlertCircle,
  Sliders,
  ChevronRight,
  Info
} from 'lucide-react';
import BudgetSummary from '../components/BudgetSummary.jsx';
import FixMyTripModal from '../components/FixMyTripModal.jsx';
import ItineraryViewer from '../components/ItineraryViewer.jsx';
import { HeritageDivider } from '../components/HeritageMotifs.jsx';
import { KARNATAKA_STARTING_LOCATIONS } from '../../../shared/karnatakaLocations.js';

export default function PlannerPage() {
  const { language, t } = useLanguage();
  const { isAuthenticated, getAuthHeaders } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  // Read URL search params
  const searchParams = new URLSearchParams(location.search);
  const initialDest = searchParams.get('dest') || 'hampi';

  // Planner Form Inputs
  const [startingCity, setStartingCity] = useState('Bengaluru');
  const [destinationId, setDestinationId] = useState(initialDest);
  const [durationDays, setDurationDays] = useState(3);
  const [travelers, setTravelers] = useState(2);
  const [budgetPerPerson, setBudgetPerPerson] = useState(5000);
  const [transportMode, setTransportMode] = useState('ksrtc');
  const [stayTier, setStayTier] = useState('moderate');
  const [foodTier, setFoodTier] = useState('moderate');
  const [interests, setInterests] = useState(['Heritage', 'Culture', 'Food']);

  // Generation & Results State
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedPlan, setGeneratedPlan] = useState(null);
  const [error, setError] = useState(null);

  // Fix My Trip Modal State
  const [isFixModalOpen, setIsFixModalOpen] = useState(false);

  // Save Trip State
  const [isSaving, setIsSaving] = useState(false);
  const [saveSuccessMessage, setSaveSuccessMessage] = useState(null);

  // Available Karnataka Destinations
  const destinationOptions = [
    { id: 'hampi', name: 'Hampi (ವಿಜಯನಗರ ಸಾಮ್ರಾಜ್ಯ)', unesco: true },
    { id: 'mysuru', name: 'Mysuru (ಅರಮನೆಗಳ ನಗರಿ)' },
    { id: 'coorg', name: 'Coorg / Kodagu (ಕಾಫಿ ತೋಟಗಳು & ಮಂಜಿನ ನಗರಿ)' },
    { id: 'badami', name: 'Badami (ಕೆಂಪು ಮರಳುಗಲ್ಲಿನ ಗುಹಾಂತರ ದೇಗುಲಗಳು)' },
    { id: 'gokarna', name: 'Gokarna (ಆತ್ಮಲಿಂಗ & ಓಂ ಬೀಚ್)' },
    { id: 'chitradurga', name: 'Chitradurga (ಏಳು ಸುತ್ತಿನ ಕಲ್ಲಿನ ಕೋಟೆ)' },
    { id: 'belur', name: 'Belur (ಚೆನ್ನಕೇಶವ ದೇಗುಲ & ಹೊಯ್ಸಳ ಕಲೆ)', unesco: true },
    { id: 'halebidu', name: 'Halebidu (ಹೊಯ್ಸಳೇಶ್ವರ ದೇವಾಲಯ)', unesco: true },
    { id: 'pattadakal', name: 'Pattadakal (ಚಾಲುಕ್ಯ ಪಟ್ಟಾಭಿಷೇಕ ಕ್ಷೇತ್ರ)', unesco: true },
    { id: 'vijayapura', name: 'Vijayapura / Bijapur (ಗೋಲ್ ಗುಂಬಜ್)' },
    { id: 'udupi', name: 'Udupi (ಶ್ರೀಕೃಷ್ಣ ಮಠ & ಕರಾವಳಿ ತಿನಿಸುಗಳು)' },
    { id: 'chikmagalur', name: 'Chikmagalur (ಮುಳ್ಳಯ್ಯನಗಿರಿ & ಭಾರತದ ಕಾಫಿ)' }
  ];

  const availableInterests = [
    { key: 'Heritage', label: 'Heritage & UNESCO (ಇತಿಹಾಸ)' },
    { key: 'Nature', label: 'Nature & Hills (ನಿಸರ್ಗ & ಗಿರಿಧಾಮ)' },
    { key: 'Culture', label: 'Culture & Folk Arts (ಜಾನಪದ ಕಲೆಗಳು)' },
    { key: 'Food', label: 'Local Food & Flavors (ಸ್ಥಳೀಯ ತಿನಿಸು)' },
    { key: 'Spiritual', label: 'Spiritual & Temples (ಪುಣ್ಯಕ್ಷೇತ್ರಗಳು)' }
  ];

  const handleInterestToggle = (key) => {
    setInterests(prev =>
      prev.includes(key) ? prev.filter(k => k !== key) : [...prev, key]
    );
  };

  const handleGenerateItinerary = async (e) => {
    if (e) e.preventDefault();
    setIsGenerating(true);
    setError(null);
    setSaveSuccessMessage(null);

    try {
      const res = await fetch('/api/planner/generate', {
        method: 'POST',
        headers: getAuthHeaders(),
        body: JSON.stringify({
          startingCity,
          destinationId,
          durationDays: Number(durationDays),
          travelers: Number(travelers),
          budgetPerPerson: Number(budgetPerPerson),
          transportMode,
          stayTier,
          foodTier,
          interests,
          language
        })
      });

      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.message || 'Failed to generate itinerary.');
      }

      setGeneratedPlan(data);

      // Smooth scroll to results
      setTimeout(() => {
        const resultsEl = document.getElementById('planner-results');
        if (resultsEl) {
          resultsEl.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } catch (err) {
      console.error('Plan generation error:', err);
      setError(err.message);
    } finally {
      setIsGenerating(false);
    }
  };

  // Fix My Trip callback
  const handleApplyRevisedPlan = (revisedPlan) => {
    setGeneratedPlan({
      ...generatedPlan,
      inputs: revisedPlan.inputs,
      itinerary: revisedPlan.itinerary,
      budget: revisedPlan.budget
    });

    // Sync input fields
    if (revisedPlan.inputs?.budgetPerPerson) setBudgetPerPerson(revisedPlan.inputs.budgetPerPerson);
    if (revisedPlan.inputs?.durationDays) setDurationDays(revisedPlan.inputs.durationDays);
    if (revisedPlan.inputs?.transportMode) setTransportMode(revisedPlan.inputs.transportMode);
    if (revisedPlan.inputs?.stayTier) setStayTier(revisedPlan.inputs.stayTier);

    setSaveSuccessMessage(language === 'kn' ? 'ಪ್ರವಾಸದ ಯೋಜನೆಯನ್ನು ಯಶಸ್ವಿಯಾಗಿ ಸರಿಹೊಂದಿಸಲಾಗಿದೆ!' : 'Itinerary adapted and optimized with new constraints!');
  };

  // Save to Database
  const handleSaveTrip = async () => {
    if (!isAuthenticated) {
      alert(language === 'kn' ? 'ಪ್ರವಾಸವನ್ನು ಉಳಿಸಲು ದಯವಿಟ್ಟು ಲಾಗ್ ಇನ್ ಮಾಡಿ.' : 'Please log in or create an account to save this trip to your dashboard.');
      navigate('/login', { state: { from: location } });
      return;
    }

    if (!generatedPlan) return;

    setIsSaving(true);
    setSaveSuccessMessage(null);

    try {
      const destName = destinationOptions.find(d => d.id === destinationId)?.name?.split(' ')[0] || destinationId;
      const title = `${destName} Heritage Journey (${durationDays} Days)`;

      const res = await fetch('/api/trips', {
        method: 'POST',
        headers: getAuthHeaders(),
        body: JSON.stringify({
          title,
          destination: destinationId,
          startingCity,
          durationDays: Number(durationDays),
          travelersCount: Number(travelers),
          budgetPerPerson: Number(budgetPerPerson),
          totalBudget: Number(budgetPerPerson) * Number(travelers),
          estimatedTotalCost: generatedPlan.budget?.estimatedTotalCost || 0,
          feasibilityStatus: generatedPlan.budget?.feasibilityStatus || 'balanced',
          preferences: {
            interests,
            stayTier,
            foodTier
          },
          transportMode,
          itinerary: generatedPlan.itinerary,
          budgetBreakdown: generatedPlan.budget
        })
      });

      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.message || 'Failed to save trip.');
      }

      setSaveSuccessMessage(language === 'kn' ? 'ಪ್ರವಾಸ ಯಶಸ್ವಿಯಾಗಿ ನಿಮ್ಮ ಡ್ಯಾಶ್‌ಬೋರ್ಡ್‌ನಲ್ಲಿ ಉಳಿದಿದೆ!' : 'Trip saved to your dashboard successfully!');
    } catch (err) {
      console.error('Save trip failed:', err);
      setError(err.message);
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="container" style={{ padding: '40px 20px 80px' }}>
      {/* Page Title */}
      <div style={{ textAlign: 'center', maxWidth: '760px', margin: '0 auto 36px' }}>
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '6px',
          padding: '6px 14px',
          borderRadius: '20px',
          backgroundColor: 'var(--accent-gold-light)',
          color: 'var(--accent-gold-hover)',
          fontWeight: 700,
          fontSize: '0.85rem',
          marginBottom: '14px'
        }}>
          <Sparkles size={16} />
          <span>{language === 'kn' ? 'AI ಚಾಲಿತ ಪ್ರವಾಸ ಯೋಜಕ' : 'AI Karnataka Travel Planner'}</span>
        </div>

        <h1 style={{
          fontSize: 'clamp(2rem, 3.5vw, 2.8rem)',
          color: 'var(--primary-900)',
          fontFamily: 'var(--font-serif)',
          lineHeight: 1.2,
          margin: 0
        }}>
          {t('plannerTitle')}
        </h1>

        <p style={{ fontSize: '1.05rem', color: 'var(--text-body)', marginTop: '10px' }}>
          {t('plannerSubtitle')}
        </p>
      </div>

      {error && (
        <div style={{
          padding: '14px 18px',
          borderRadius: '10px',
          backgroundColor: '#FEE2E2',
          color: '#B91C1C',
          marginBottom: '24px',
          display: 'flex',
          alignItems: 'center',
          gap: '10px'
        }}>
          <AlertCircle size={20} />
          <span>{error}</span>
        </div>
      )}

      {/* Main Form Card */}
      <form
        onSubmit={handleGenerateItinerary}
        style={{
          backgroundColor: '#FFFFFF',
          borderRadius: 'var(--radius-lg)',
          border: '1px solid var(--border-light)',
          boxShadow: 'var(--shadow-md)',
          padding: '32px',
          marginBottom: '48px'
        }}
      >
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '20px'
        }}>
          {/* Starting City */}
          <div>
            <label className="form-label">
              <MapPin size={16} color="#D97706" />
              <span>{t('labelStartingCity')}</span>
            </label>
            <select
              className="form-select"
              value={startingCity}
              onChange={(e) => setStartingCity(e.target.value)}
            >
              <optgroup label={language === 'kn' ? 'ಪ್ರಮುಖ ಕೇಂದ್ರಗಳು (Major Hubs)' : 'Major Travel Hubs'}>
                {KARNATAKA_STARTING_LOCATIONS.filter(l => l.isExisting).map(loc => (
                  <option key={loc.id} value={loc.id === 'hubballi' ? 'Hubballi' : loc.name}>
                    {loc.name} ({loc.nameKn})
                  </option>
                ))}
              </optgroup>
              <optgroup label={language === 'kn' ? 'ದಕ್ಷಿಣ ಕರ್ನಾಟಕ (Southern Karnataka)' : 'Southern Karnataka'}>
                {KARNATAKA_STARTING_LOCATIONS.filter(l => !l.isExisting && l.region === 'Southern').map(loc => (
                  <option key={loc.id} value={loc.name}>
                    {loc.name} ({loc.nameKn}){loc.isDistrictHQ ? ' • HQ' : ''}
                  </option>
                ))}
              </optgroup>
              <optgroup label={language === 'kn' ? 'ಕರಾವಳಿ & ಮಲೆನಾಡು (Coastal & Malenadu)' : 'Coastal & Malenadu'}>
                {KARNATAKA_STARTING_LOCATIONS.filter(l => !l.isExisting && (l.region === 'Coastal' || l.regionKn.includes('ಮಲೆನಾಡು'))).map(loc => (
                  <option key={loc.id} value={loc.name}>
                    {loc.name} ({loc.nameKn}){loc.isDistrictHQ ? ' • HQ' : ''}
                  </option>
                ))}
              </optgroup>
              <optgroup label={language === 'kn' ? 'ಮಧ್ಯ ಕರ್ನಾಟಕ (Central Karnataka)' : 'Central Karnataka'}>
                {KARNATAKA_STARTING_LOCATIONS.filter(l => !l.isExisting && l.region === 'Central').map(loc => (
                  <option key={loc.id} value={loc.name}>
                    {loc.name} ({loc.nameKn}){loc.isDistrictHQ ? ' • HQ' : ''}
                  </option>
                ))}
              </optgroup>
              <optgroup label={language === 'kn' ? 'ಉತ್ತರ & ಕಲ್ಯಾಣ ಕರ್ನಾಟಕ (Northern & Kalyana Karnataka)' : 'Northern & Kalyana Karnataka'}>
                {KARNATAKA_STARTING_LOCATIONS.filter(l => !l.isExisting && l.region === 'Northern' && !l.regionKn.includes('ಮಲೆನಾಡು')).map(loc => (
                  <option key={loc.id} value={loc.name}>
                    {loc.name} ({loc.nameKn}){loc.isDistrictHQ ? ' • HQ' : ''}
                  </option>
                ))}
              </optgroup>
            </select>
          </div>

          {/* Destination Circuit */}
          <div>
            <label className="form-label">
              <Sparkles size={16} color="#2D6A4F" />
              <span>{t('labelDestination')}</span>
            </label>
            <select
              className="form-select"
              value={destinationId}
              onChange={(e) => setDestinationId(e.target.value)}
            >
              {destinationOptions.map(opt => (
                <option key={opt.id} value={opt.id}>
                  {opt.name} {opt.unesco ? '★ UNESCO' : ''}
                </option>
              ))}
            </select>
          </div>

          {/* Duration Days */}
          <div>
            <label className="form-label">
              <Calendar size={16} color="#2D6A4F" />
              <span>{t('labelDuration')}</span>
            </label>
            <select
              className="form-select"
              value={durationDays}
              onChange={(e) => setDurationDays(Number(e.target.value))}
            >
              {[1, 2, 3, 4, 5, 6, 7].map(d => (
                <option key={d} value={d}>
                  {d} {d === 1 ? 'Day' : 'Days'} ({d === 1 ? 'ಏಕದಿನ ಪ್ರವಾಸ' : `${d} ದಿನಗಳು`})
                </option>
              ))}
            </select>
          </div>

          {/* Travelers Count */}
          <div>
            <label className="form-label">
              <Users size={16} color="#2D6A4F" />
              <span>{t('labelTravelers')}</span>
            </label>
            <select
              className="form-select"
              value={travelers}
              onChange={(e) => setTravelers(Number(e.target.value))}
            >
              {[1, 2, 3, 4, 5, 6, 8, 10, 15].map(num => (
                <option key={num} value={num}>
                  {num} {num === 1 ? 'Traveler (Solo)' : `${num} Travelers (${num === 2 ? 'Couple' : 'Group'})`}
                </option>
              ))}
            </select>
          </div>

          {/* Budget per Person */}
          <div>
            <label className="form-label">
              <IndianRupee size={16} color="#D97706" />
              <span>{t('labelBudgetPerPerson')}</span>
            </label>
            <input
              type="number"
              min="1000"
              max="100000"
              step="500"
              className="form-input"
              value={budgetPerPerson}
              onChange={(e) => setBudgetPerPerson(Number(e.target.value))}
            />
            <div style={{ display: 'flex', gap: '6px', marginTop: '6px' }}>
              {[2500, 5000, 8000, 15000].map(amt => (
                <button
                  key={amt}
                  type="button"
                  onClick={() => setBudgetPerPerson(amt)}
                  style={{
                    padding: '2px 8px',
                    fontSize: '0.75rem',
                    borderRadius: '4px',
                    border: '1px solid var(--border-light)',
                    backgroundColor: budgetPerPerson === amt ? 'var(--primary-800)' : 'transparent',
                    color: budgetPerPerson === amt ? '#FFFFFF' : 'var(--text-muted)',
                    cursor: 'pointer'
                  }}
                >
                  ₹{amt}
                </button>
              ))}
            </div>
          </div>

          {/* Transport Mode */}
          <div>
            <label className="form-label">
              <Bus size={16} color="#2D6A4F" />
              <span>{t('labelTransport')}</span>
            </label>
            <select
              className="form-select"
              value={transportMode}
              onChange={(e) => setTransportMode(e.target.value)}
            >
              <option value="ksrtc">{t('transportKsrtc')}</option>
              <option value="train">{t('transportTrain')}</option>
              <option value="car">{t('transportCar')}</option>
              <option value="cab">{t('transportCab')}</option>
            </select>
          </div>

          {/* Stay Tier */}
          <div>
            <label className="form-label">
              <Home size={16} color="#2D6A4F" />
              <span>{t('labelStayTier')}</span>
            </label>
            <select
              className="form-select"
              value={stayTier}
              onChange={(e) => setStayTier(e.target.value)}
            >
              <option value="budget">{t('stayBudget')}</option>
              <option value="moderate">{t('stayModerate')}</option>
              <option value="luxury">{t('stayLuxury')}</option>
            </select>
          </div>

          {/* Food Tier */}
          <div>
            <label className="form-label">
              <span>{t('labelFoodTier')}</span>
            </label>
            <select
              className="form-select"
              value={foodTier}
              onChange={(e) => setFoodTier(e.target.value)}
            >
              <option value="budget">{t('foodBudget')}</option>
              <option value="moderate">{t('foodModerate')}</option>
              <option value="luxury">{t('foodLuxury')}</option>
            </select>
          </div>
        </div>

        {/* Interests Checkboxes */}
        <div style={{ marginTop: '24px' }}>
          <label className="form-label" style={{ marginBottom: '10px' }}>
            <span>{t('labelInterests')}</span>
          </label>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
            {availableInterests.map(item => {
              const active = interests.includes(item.key);
              return (
                <button
                  key={item.key}
                  type="button"
                  onClick={() => handleInterestToggle(item.key)}
                  style={{
                    padding: '8px 16px',
                    borderRadius: '20px',
                    border: active ? '1px solid var(--accent-gold-hover)' : '1px solid var(--border-light)',
                    backgroundColor: active ? 'var(--accent-gold-light)' : '#FFFFFF',
                    color: active ? 'var(--accent-gold-hover)' : 'var(--text-body)',
                    fontWeight: 600,
                    fontSize: '0.88rem',
                    cursor: 'pointer',
                    transition: 'all 0.15s ease'
                  }}
                >
                  {active ? '✓ ' : '+ '}{item.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Submit Button */}
        <div style={{ marginTop: '32px', display: 'flex', justifyContent: 'center' }}>
          <button
            type="submit"
            disabled={isGenerating}
            className="btn btn-gold btn-lg"
            style={{ minWidth: '280px', padding: '16px 36px', fontSize: '1.1rem' }}
          >
            <Sparkles size={20} />
            <span>{isGenerating ? t('btnGenerating') : t('btnGenerateItinerary')}</span>
          </button>
        </div>
      </form>

      {/* Generated Results Section */}
      {generatedPlan && (
        <div id="planner-results" style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
          {saveSuccessMessage && (
            <div style={{
              padding: '14px 18px',
              borderRadius: '10px',
              backgroundColor: '#D8F3DC',
              color: '#1B4332',
              fontWeight: 600,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '12px'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <CheckCircle2 size={20} color="#2D6A4F" />
                <span>{saveSuccessMessage}</span>
              </div>
              <Link to="/saved-trips" className="btn btn-primary btn-sm">
                View in Saved Trips
              </Link>
            </div>
          )}

          {/* Budget Feasibility Summary */}
          <BudgetSummary
            budget={generatedPlan.budget}
            onOpenFixModal={() => setIsFixModalOpen(true)}
          />

          {/* Action Row: Save Trip & Fix Trip */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '16px',
            backgroundColor: 'var(--bg-surface-warm)',
            padding: '18px 24px',
            borderRadius: 'var(--radius-md)',
            border: '1px solid var(--border-warm)'
          }}>
            <div>
              <div style={{ fontWeight: 700, color: 'var(--primary-900)' }}>
                {destinationOptions.find(d => d.id === destinationId)?.name}
              </div>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                {durationDays} Days • {travelers} Travelers • Est. ₹{generatedPlan.budget?.estimatedTotalCost?.toLocaleString('en-IN')}
              </div>
            </div>

            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <button
                onClick={() => setIsFixModalOpen(true)}
                className="btn btn-secondary"
              >
                <Sliders size={17} />
                <span>{t('btnFixMyTrip')}</span>
              </button>

              <button
                onClick={handleSaveTrip}
                disabled={isSaving}
                className="btn btn-gold"
              >
                <Bookmark size={17} />
                <span>{isSaving ? t('btnSaving') : t('btnSaveTrip')}</span>
              </button>
            </div>
          </div>

          {/* Detailed Day-by-Day Itinerary with Interactive Trip Map */}
          <ItineraryViewer
            itinerary={generatedPlan.itinerary}
            engineName={generatedPlan.engineName}
            destinationId={destinationId}
            startingCity={startingCity}
          />
        </div>
      )}

      {/* Fix My Trip Modal */}
      {isFixModalOpen && generatedPlan && (
        <FixMyTripModal
          currentPlan={generatedPlan}
          onApplyRevisedPlan={handleApplyRevisedPlan}
          onClose={() => setIsFixModalOpen(false)}
        />
      )}
    </div>
  );
}
