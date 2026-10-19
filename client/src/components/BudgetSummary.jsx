import React from 'react';
import { useLanguage } from '../context/LanguageContext.jsx';
import {
  IndianRupee,
  Bus,
  Train,
  Car,
  Home,
  Utensils,
  Ticket,
  AlertTriangle,
  CheckCircle2,
  Sliders,
  TrendingDown,
  Info
} from 'lucide-react';

export default function BudgetSummary({ budget, onOpenFixModal }) {
  const { language, t } = useLanguage();

  if (!budget) return null;

  const isExceeded = budget.feasibilityStatus === 'exceeded';
  const isTight = budget.feasibilityStatus === 'tight';
  const isSurplus = budget.feasibilityStatus === 'surplus';

  const getStatusBadge = () => {
    switch (budget.feasibilityStatus) {
      case 'surplus':
        return {
          label: language === 'kn' ? 'ಅನುಕೂಲಕರ ಬಜೆಟ್' : 'Comfortably Feasible',
          bg: '#D8F3DC',
          color: '#1B4332',
          border: 'rgba(27, 67, 50, 0.3)'
        };
      case 'tight':
        return {
          label: language === 'kn' ? 'ಸ್ವಲ್ಪ ಕೊರತೆ (ಹೊಂದಾಣಿಕೆ ಸಾಧ್ಯ)' : 'Tight Budget',
          bg: '#FEF3C7',
          color: '#B45309',
          border: 'rgba(217, 119, 6, 0.3)'
        };
      case 'exceeded':
        return {
          label: language === 'kn' ? 'ಬಜೆಟ್ ಮೀರಿದೆ (ಬದಲಾವಣೆ ಅಗತ್ಯ)' : 'Exceeds Budget',
          bg: '#FEE2E2',
          color: '#B91C1C',
          border: 'rgba(220, 38, 38, 0.3)'
        };
      default:
        return {
          label: language === 'kn' ? 'ಸಮತೋಲಿತ ಯೋಜನೆ' : 'Well Balanced',
          bg: '#E0F2FE',
          color: '#0369A1',
          border: 'rgba(3, 105, 161, 0.3)'
        };
    }
  };

  const status = getStatusBadge();

  return (
    <div style={{
      backgroundColor: '#FFFFFF',
      borderRadius: 'var(--radius-lg)',
      border: '1px solid var(--border-light)',
      boxShadow: 'var(--shadow-md)',
      padding: '26px',
      display: 'flex',
      flexDirection: 'column',
      gap: '22px'
    }}>
      {/* Header with Feasibility Status */}
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '12px',
        borderBottom: '1px solid var(--border-light)',
        paddingBottom: '16px'
      }}>
        <div>
          <h3 style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '1.25rem',
            color: 'var(--primary-900)',
            margin: 0
          }}>
            {t('budgetSummaryTitle')}
          </h3>
          <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', margin: '2px 0 0' }}>
            Programmatic cost engine based on {budget.distanceKm} km Karnataka transit & verified tariffs
          </p>
        </div>

        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '6px',
          padding: '6px 14px',
          borderRadius: '24px',
          backgroundColor: status.bg,
          color: status.color,
          border: `1px solid ${status.border}`,
          fontWeight: 700,
          fontSize: '0.85rem',
          lineHeight: 1.35,
          whiteSpace: 'normal',
          textAlign: 'center'
        }}>
          {isExceeded || isTight ? <AlertTriangle size={16} style={{ flexShrink: 0 }} /> : <CheckCircle2 size={16} style={{ flexShrink: 0 }} />}
          <span>{status.label}</span>
        </div>
      </div>

      {/* Main Numbers Comparison Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '16px'
      }}>
        {/* Allocated Budget */}
        <div style={{
          padding: '16px',
          borderRadius: '12px',
          backgroundColor: 'var(--bg-surface-warm)',
          border: '1px solid var(--border-warm)',
          minWidth: 0,
          wordBreak: 'normal',
          overflowWrap: 'break-word'
        }}>
          <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 600, textTransform: 'uppercase' }}>
            {t('budgetTotalAllocated')}
          </div>
          <div style={{ display: 'flex', alignItems: 'center', fontSize: '1.45rem', fontWeight: 800, color: 'var(--primary-900)', marginTop: '4px' }}>
            <IndianRupee size={20} />
            <span>{budget.totalUserBudget?.toLocaleString('en-IN')}</span>
          </div>
          <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: '2px' }}>
            (₹{budget.budgetPerPerson} × {budget.travelers} travelers)
          </div>
        </div>

        {/* Estimated Total Cost */}
        <div style={{
          padding: '16px',
          borderRadius: '12px',
          backgroundColor: '#FFFFFF',
          border: isExceeded ? '2px solid #EF4444' : '1px solid var(--border-light)',
          boxShadow: 'var(--shadow-sm)',
          minWidth: 0,
          wordBreak: 'normal',
          overflowWrap: 'break-word'
        }}>
          <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 600, textTransform: 'uppercase' }}>
            {t('budgetEstimatedCost')}
          </div>
          <div style={{ display: 'flex', alignItems: 'center', fontSize: '1.45rem', fontWeight: 800, color: isExceeded ? '#DC2626' : 'var(--primary-800)', marginTop: '4px' }}>
            <IndianRupee size={20} />
            <span>{budget.estimatedTotalCost?.toLocaleString('en-IN')}</span>
          </div>
          <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: '2px' }}>
            (~₹{budget.estimatedCostPerPerson} per person for {budget.durationDays} days)
          </div>
        </div>

        {/* Surplus or Deficit */}
        <div style={{
          padding: '16px',
          borderRadius: '12px',
          backgroundColor: budget.budgetDifference >= 0 ? 'rgba(45, 106, 79, 0.08)' : 'rgba(239, 68, 68, 0.08)',
          border: budget.budgetDifference >= 0 ? '1px solid rgba(45, 106, 79, 0.25)' : '1px solid rgba(239, 68, 68, 0.25)',
          minWidth: 0,
          wordBreak: 'normal',
          overflowWrap: 'break-word'
        }}>
          <div style={{ fontSize: '0.8rem', color: budget.budgetDifference >= 0 ? 'var(--primary-800)' : '#B91C1C', fontWeight: 600, textTransform: 'uppercase' }}>
            {budget.budgetDifference >= 0 ? t('budgetSurplus') : t('budgetExceeded')}
          </div>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            fontSize: '1.45rem',
            fontWeight: 800,
            color: budget.budgetDifference >= 0 ? 'var(--primary-800)' : '#DC2626',
            marginTop: '4px'
          }}>
            <span>{budget.budgetDifference >= 0 ? '+' : '-'}</span>
            <IndianRupee size={20} />
            <span>{Math.abs(budget.budgetDifference).toLocaleString('en-IN')}</span>
          </div>
          <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: '2px' }}>
            {budget.budgetDifference >= 0 ? 'Safe financial buffer' : 'Actionable adjustments available'}
          </div>
        </div>
      </div>

      {/* Itemized Cost Breakdown Cards */}
      <div>
        <h4 style={{ fontSize: '0.95rem', color: 'var(--primary-900)', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '6px' }}>
          <Info size={16} color="#D97706" />
          <span>Itemized Expenditure Breakdown</span>
        </h4>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))',
          gap: '12px'
        }}>
          {/* Transport */}
          <div style={{ padding: '12px 14px', borderRadius: '10px', backgroundColor: '#FAF9F6', border: '1px solid var(--border-light)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.82rem', color: 'var(--primary-800)', fontWeight: 600 }}>
              <Bus size={15} color="#D97706" />
              <span>{t('breakdownTransport')}</span>
            </div>
            <div style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--primary-900)', marginTop: '4px' }}>
              ₹{budget.breakdown?.transport?.total?.toLocaleString('en-IN')}
            </div>
            <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', marginTop: '2px' }}>
              {language === 'kn' ? budget.breakdown?.transport?.notesKn : budget.breakdown?.transport?.notes}
            </div>
          </div>

          {/* Accommodation */}
          <div style={{ padding: '12px 14px', borderRadius: '10px', backgroundColor: '#FAF9F6', border: '1px solid var(--border-light)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.82rem', color: 'var(--primary-800)', fontWeight: 600 }}>
              <Home size={15} color="#2D6A4F" />
              <span>{t('breakdownStay')}</span>
            </div>
            <div style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--primary-900)', marginTop: '4px' }}>
              ₹{budget.breakdown?.accommodation?.total?.toLocaleString('en-IN')}
            </div>
            <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', marginTop: '2px' }}>
              {budget.breakdown?.accommodation?.rooms} room(s) × {budget.breakdown?.accommodation?.nights} night(s) @ ₹{budget.breakdown?.accommodation?.ratePerNight}/nt
            </div>
          </div>

          {/* Food */}
          <div style={{ padding: '12px 14px', borderRadius: '10px', backgroundColor: '#FAF9F6', border: '1px solid var(--border-light)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.82rem', color: 'var(--primary-800)', fontWeight: 600 }}>
              <Utensils size={15} color="#B45309" />
              <span>{t('breakdownFood')}</span>
            </div>
            <div style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--primary-900)', marginTop: '4px' }}>
              ₹{budget.breakdown?.food?.total?.toLocaleString('en-IN')}
            </div>
            <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', marginTop: '2px' }}>
              ₹{budget.breakdown?.food?.dailyPerPerson}/person/day
            </div>
          </div>

          {/* Activities & Entry */}
          <div style={{ padding: '12px 14px', borderRadius: '10px', backgroundColor: '#FAF9F6', border: '1px solid var(--border-light)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.82rem', color: 'var(--primary-800)', fontWeight: 600 }}>
              <Ticket size={15} color="#2D6A4F" />
              <span>{t('breakdownActivities')}</span>
            </div>
            <div style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--primary-900)', marginTop: '4px' }}>
              ₹{budget.breakdown?.activities?.total?.toLocaleString('en-IN')}
            </div>
            <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', marginTop: '2px' }}>
              ASI monument fees, guides & coracles
            </div>
          </div>
        </div>
      </div>

      {/* Warnings & Actionable Insights */}
      {budget.warnings && budget.warnings.length > 0 && (
        <div style={{
          padding: '14px 18px',
          borderRadius: '12px',
          backgroundColor: isExceeded ? '#FEF2F2' : 'var(--bg-surface-warm)',
          border: isExceeded ? '1px solid rgba(239, 68, 68, 0.3)' : '1px solid var(--border-warm)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: isExceeded ? '#B91C1C' : 'var(--accent-gold-hover)', fontWeight: 700, fontSize: '0.9rem', marginBottom: '6px' }}>
            <AlertTriangle size={17} />
            <span>{isExceeded ? 'Feasibility Warning' : 'Financial Recommendation'}</span>
          </div>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '4px', fontSize: '0.88rem', color: 'var(--text-body)' }}>
            {(language === 'kn' ? budget.warningsKn : budget.warnings)?.map((w, idx) => (
              <li key={idx}>• {w}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Fix My Trip Action Button */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '12px',
        borderTop: '1px solid var(--border-light)',
        paddingTop: '16px'
      }}>
        <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
          Need to optimize expenses or shorten duration?
        </div>
        <button
          onClick={onOpenFixModal}
          className="btn btn-gold"
          style={{ padding: '10px 20px' }}
        >
          <Sliders size={17} />
          <span>{t('btnFixMyTrip')}</span>
        </button>
      </div>
    </div>
  );
}
