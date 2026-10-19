import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext.jsx';
import {
  X,
  Sliders,
  Sparkles,
  ArrowRight,
  TrendingDown,
  CheckCircle2,
  IndianRupee,
  Clock,
  ShieldCheck,
  AlertCircle
} from 'lucide-react';

export default function FixMyTripModal({
  currentPlan,
  onApplyRevisedPlan,
  onClose
}) {
  const { language, t } = useLanguage();

  const initialBudget = currentPlan?.inputs?.budgetPerPerson || 5000;
  const initialDays = currentPlan?.inputs?.durationDays || 3;
  const initialTransport = currentPlan?.inputs?.transportMode || 'ksrtc';
  const initialStay = currentPlan?.inputs?.stayTier || 'moderate';

  const [newBudget, setNewBudget] = useState(initialBudget);
  const [newDays, setNewDays] = useState(initialDays);
  const [newTransport, setNewTransport] = useState(initialTransport);
  const [newStay, setNewStay] = useState(initialStay);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [revisedResult, setRevisedResult] = useState(null);

  const handleRunOptimization = async () => {
    setLoading(true);
    setError(null);

    try {
      const res = await fetch('/api/planner/fix-trip', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          currentPlan,
          newBudgetPerPerson: Number(newBudget),
          newDurationDays: Number(newDays),
          newTransportMode: newTransport,
          newStayTier: newStay
        })
      });

      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.message || 'Failed to adapt trip plan.');
      }

      setRevisedResult(data.revisedPlan);
    } catch (err) {
      console.error('Optimization error:', err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleApply = () => {
    if (revisedResult) {
      onApplyRevisedPlan(revisedResult);
      onClose();
    }
  };

  const currentCost = currentPlan?.budget?.estimatedTotalCost || 0;
  const revisedCost = revisedResult?.budget?.estimatedTotalCost;
  const savings = revisedResult ? Math.max(0, currentCost - revisedCost) : 0;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div
        className="modal-dialog"
        onClick={(e) => e.stopPropagation()}
        style={{ maxWidth: '680px' }}
      >
        {/* Header */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '20px 24px',
          borderBottom: '1px solid var(--border-light)',
          backgroundColor: 'var(--bg-surface-warm)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{
              width: '38px',
              height: '38px',
              borderRadius: '10px',
              backgroundColor: 'var(--accent-gold-light)',
              color: 'var(--accent-gold-hover)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <Sliders size={20} />
            </div>
            <div>
              <h3 style={{ fontSize: '1.2rem', color: 'var(--primary-900)', margin: 0 }}>
                {t('fixModalTitle')}
              </h3>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', margin: 0 }}>
                {language === 'kn' ? 'ಬಜೆಟ್ ಅಥವಾ ದಿನಗಳನ್ನು ಬದಲಾಯಿಸಿ, ಹೊಸ ಯೋಜನೆಯನ್ನು ಸರಿಹೊಂದಿಸಿ' : 'Programmatic constraints comparator & optimizer'}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--text-muted)',
              cursor: 'pointer',
              padding: '6px'
            }}
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal Body */}
        <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {error && (
            <div style={{
              padding: '12px 16px',
              borderRadius: '8px',
              backgroundColor: '#FEE2E2',
              color: '#B91C1C',
              fontSize: '0.88rem',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}>
              <AlertCircle size={18} />
              <span>{error}</span>
            </div>
          )}

          {/* Sliders and Controls */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '16px',
            backgroundColor: '#FFFFFF',
            padding: '18px',
            borderRadius: '12px',
            border: '1px solid var(--border-light)'
          }}>
            {/* New Budget Per Person */}
            <div>
              <label className="form-label">
                <IndianRupee size={15} color="#D97706" />
                <span>{t('fixLabelNewBudget')}</span>
              </label>
              <input
                type="number"
                min="1000"
                max="50000"
                step="500"
                className="form-input"
                value={newBudget}
                onChange={(e) => setNewBudget(e.target.value)}
              />
              <div style={{ display: 'flex', gap: '6px', marginTop: '6px' }}>
                {[3000, 5000, 8000, 12000].map((preset) => (
                  <button
                    key={preset}
                    type="button"
                    onClick={() => setNewBudget(preset)}
                    style={{
                      padding: '2px 8px',
                      fontSize: '0.75rem',
                      borderRadius: '4px',
                      border: '1px solid var(--border-light)',
                      backgroundColor: newBudget === preset ? 'var(--primary-800)' : 'transparent',
                      color: newBudget === preset ? '#FFFFFF' : 'var(--text-muted)',
                      cursor: 'pointer'
                    }}
                  >
                    ₹{preset}
                  </button>
                ))}
              </div>
            </div>

            {/* New Duration (Days) */}
            <div>
              <label className="form-label">
                <Clock size={15} color="#2D6A4F" />
                <span>{t('fixLabelNewDuration')}</span>
              </label>
              <select
                className="form-select"
                value={newDays}
                onChange={(e) => setNewDays(Number(e.target.value))}
              >
                {[1, 2, 3, 4, 5, 6, 7].map((d) => (
                  <option key={d} value={d}>
                    {d} {d === 1 ? 'Day' : 'Days'} ({d === 1 ? 'ಏಕದಿನ ಪ್ರವಾಸ' : `${d} ದಿನಗಳು`})
                  </option>
                ))}
              </select>
            </div>

            {/* Transport Option */}
            <div>
              <label className="form-label">
                <span>{t('labelTransport')}</span>
              </label>
              <select
                className="form-select"
                value={newTransport}
                onChange={(e) => setNewTransport(e.target.value)}
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
                <span>{t('labelStayTier')}</span>
              </label>
              <select
                className="form-select"
                value={newStay}
                onChange={(e) => setNewStay(e.target.value)}
              >
                <option value="budget">{t('stayBudget')}</option>
                <option value="moderate">{t('stayModerate')}</option>
                <option value="luxury">{t('stayLuxury')}</option>
              </select>
            </div>
          </div>

          {/* Trigger Optimization Button */}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <button
              onClick={handleRunOptimization}
              disabled={loading}
              className="btn btn-primary"
              style={{ padding: '12px 28px', width: '100%' }}
            >
              <Sparkles size={18} />
              <span>{loading ? t('btnApplying') : 'Recalculate & Generate Fixes'}</span>
            </button>
          </div>

          {/* Optimization Results Comparison */}
          {revisedResult && (
            <div style={{
              backgroundColor: 'var(--bg-surface-warm)',
              borderRadius: '12px',
              border: '1px solid var(--border-warm)',
              padding: '18px',
              display: 'flex',
              flexDirection: 'column',
              gap: '16px'
            }}>
              {/* Cost Difference Header */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
                gap: '12px'
              }}>
                <div style={{ padding: '10px 14px', borderRadius: '8px', backgroundColor: '#FFFFFF', border: '1px solid var(--border-light)' }}>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{t('fixCostBefore')}</div>
                  <div style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--text-body)' }}>
                    ₹{currentCost.toLocaleString('en-IN')}
                  </div>
                </div>

                <div style={{ padding: '10px 14px', borderRadius: '8px', backgroundColor: '#FFFFFF', border: '2px solid #2D6A4F' }}>
                  <div style={{ fontSize: '0.75rem', color: 'var(--primary-800)', fontWeight: 600 }}>{t('fixCostAfter')}</div>
                  <div style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--primary-800)' }}>
                    ₹{revisedCost?.toLocaleString('en-IN')}
                  </div>
                </div>

                <div style={{ padding: '10px 14px', borderRadius: '8px', backgroundColor: '#D8F3DC', border: '1px solid rgba(45, 106, 79, 0.3)' }}>
                  <div style={{ fontSize: '0.75rem', color: 'var(--primary-900)', fontWeight: 600 }}>{t('fixSavings')}</div>
                  <div style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--primary-900)' }}>
                    ₹{savings.toLocaleString('en-IN')}
                  </div>
                </div>
              </div>

              {/* Explanations List */}
              <div>
                <h4 style={{ fontSize: '0.9rem', color: 'var(--primary-900)', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <CheckCircle2 size={16} color="#2D6A4F" />
                  <span>{t('fixExplanationsTitle')}</span>
                </h4>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '0.85rem', color: 'var(--text-body)' }}>
                  {(language === 'kn' ? revisedResult.fixSummary?.explanationsKn : revisedResult.fixSummary?.explanations)?.map((exp, idx) => (
                    <li key={idx} style={{ display: 'flex', alignItems: 'baseline', gap: '6px' }}>
                      <span style={{ color: 'var(--accent-gold)', fontWeight: 'bold' }}>✓</span>
                      <span>{exp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Apply Button */}
              <button
                onClick={handleApply}
                className="btn btn-gold btn-lg"
                style={{ width: '100%', marginTop: '6px' }}
              >
                <CheckCircle2 size={18} />
                <span>{t('btnApplyFixes')}</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
