import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext.jsx';
import {
  Sun,
  Utensils,
  Moon,
  Clock,
  MapPin,
  IndianRupee,
  Sparkles,
  Printer,
  ChevronDown,
  ChevronUp,
  Info
} from 'lucide-react';

export default function ItineraryViewer({ itinerary, engineName }) {
  const { language, t } = useLanguage();
  const [expandedDay, setExpandedDay] = useState(1);

  if (!itinerary || !Array.isArray(itinerary) || itinerary.length === 0) {
    return (
      <div style={{
        padding: '36px',
        textAlign: 'center',
        backgroundColor: '#FFFFFF',
        borderRadius: 'var(--radius-md)',
        border: '1px solid var(--border-light)'
      }}>
        <p style={{ color: 'var(--text-muted)' }}>No itinerary generated yet.</p>
      </div>
    );
  }

  const handlePrint = () => {
    window.print();
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      {/* Header with Print action & Engine badge */}
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '12px'
      }}>
        <div>
          <h3 style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '1.4rem',
            color: 'var(--primary-900)',
            margin: 0
          }}>
            {t('itineraryHeader')}
          </h3>
          {engineName && (
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              fontSize: '0.78rem',
              color: 'var(--primary-700)',
              fontWeight: 600,
              marginTop: '4px'
            }}>
              <Sparkles size={14} color="#D97706" />
              <span>{engineName}</span>
            </div>
          )}
        </div>

        <button
          onClick={handlePrint}
          className="btn btn-secondary btn-sm"
          style={{ display: 'flex', alignItems: 'center', gap: '6px' }}
        >
          <Printer size={15} />
          <span>{t('btnExportPrint')}</span>
        </button>
      </div>

      {/* Days List */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {itinerary.map((dayPlan, idx) => {
          const dayNumber = dayPlan.day || idx + 1;
          const isExpanded = expandedDay === dayNumber;

          return (
            <div
              key={dayNumber}
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: 'var(--radius-md)',
                border: isExpanded ? '2px solid rgba(45, 106, 79, 0.4)' : '1px solid var(--border-light)',
                boxShadow: isExpanded ? 'var(--shadow-md)' : 'var(--shadow-sm)',
                overflow: 'hidden',
                transition: 'all 0.2s ease'
              }}
            >
              {/* Day Header Accordion Toggle */}
              <div
                onClick={() => setExpandedDay(isExpanded ? null : dayNumber)}
                style={{
                  padding: '16px 20px',
                  backgroundColor: isExpanded ? 'var(--bg-surface-warm)' : '#FFFFFF',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '12px',
                  userSelect: 'none'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                  <div style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '10px',
                    backgroundColor: 'var(--primary-800)',
                    color: '#FDE68A',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 800,
                    fontSize: '0.95rem'
                  }}>
                    D{dayNumber}
                  </div>

                  <div>
                    <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px' }}>
                      <h4 style={{
                        fontSize: '1.05rem',
                        color: 'var(--primary-900)',
                        margin: 0,
                        fontFamily: 'var(--font-serif)'
                      }}>
                        {language === 'kn' ? (dayPlan.titleKn || dayPlan.title) : dayPlan.title}
                      </h4>
                      {language !== 'kn' && dayPlan.titleKn && (
                        <span style={{ fontSize: '0.85rem', color: 'var(--accent-gold-hover)', fontFamily: 'var(--font-kannada)' }}>
                          • {dayPlan.titleKn}
                        </span>
                      )}
                    </div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '2px' }}>
                      {language === 'kn' ? (dayPlan.focusKn || dayPlan.focus) : dayPlan.focus}
                    </div>
                  </div>
                </div>

                <div style={{ color: 'var(--primary-800)' }}>
                  {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </div>
              </div>

              {/* Day Activities Expansion Body */}
              {isExpanded && (
                <div style={{ padding: '22px 20px', display: 'flex', flexDirection: 'column', gap: '18px' }}>
                  {/* Morning Block */}
                  {dayPlan.morning && (
                    <div style={{
                      display: 'flex',
                      gap: '14px',
                      padding: '14px',
                      borderRadius: '10px',
                      backgroundColor: 'rgba(217, 119, 6, 0.05)',
                      borderLeft: '4px solid #D97706'
                    }}>
                      <div style={{ color: '#D97706', marginTop: '2px' }}>
                        <Sun size={20} />
                      </div>
                      <div style={{ flex: 1 }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '8px' }}>
                          <span style={{ fontSize: '0.78rem', fontWeight: 700, color: '#B45309', textTransform: 'uppercase' }}>
                            {t('morningLabel')} • {dayPlan.morning.time}
                          </span>
                          {dayPlan.morning.estimatedFee !== undefined && (
                            <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center' }}>
                              Entry: ₹{dayPlan.morning.estimatedFee}
                            </span>
                          )}
                        </div>
                        <h5 style={{ fontSize: '0.98rem', color: 'var(--primary-900)', margin: '4px 0 6px' }}>
                          {language === 'kn' ? (dayPlan.morning.titleKn || dayPlan.morning.title) : dayPlan.morning.title}
                        </h5>
                        <p style={{ fontSize: '0.88rem', color: 'var(--text-body)', lineHeight: 1.5, margin: 0 }}>
                          {language === 'kn' ? (dayPlan.morning.descriptionKn || dayPlan.morning.description) : dayPlan.morning.description}
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Lunch Block */}
                  {dayPlan.lunch && (
                    <div style={{
                      display: 'flex',
                      gap: '14px',
                      padding: '14px',
                      borderRadius: '10px',
                      backgroundColor: 'rgba(45, 106, 79, 0.05)',
                      borderLeft: '4px solid #2D6A4F'
                    }}>
                      <div style={{ color: '#2D6A4F', marginTop: '2px' }}>
                        <Utensils size={20} />
                      </div>
                      <div style={{ flex: 1 }}>
                        <div style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--primary-800)', textTransform: 'uppercase' }}>
                          {t('lunchLabel')}
                        </div>
                        <h5 style={{ fontSize: '0.98rem', color: 'var(--primary-900)', margin: '4px 0 4px' }}>
                          {language === 'kn' ? (dayPlan.lunch.spotKn || dayPlan.lunch.spot) : dayPlan.lunch.spot}
                        </h5>
                        <p style={{ fontSize: '0.88rem', color: 'var(--text-body)', lineHeight: 1.5, margin: 0 }}>
                          <strong>Must Try: </strong>
                          {language === 'kn' ? (dayPlan.lunch.dishKn || dayPlan.lunch.dish) : dayPlan.lunch.dish}
                          {dayPlan.lunch.estCost && ` (~₹${dayPlan.lunch.estCost})`}
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Afternoon Block */}
                  {dayPlan.afternoon && (
                    <div style={{
                      display: 'flex',
                      gap: '14px',
                      padding: '14px',
                      borderRadius: '10px',
                      backgroundColor: 'rgba(217, 119, 6, 0.05)',
                      borderLeft: '4px solid #D97706'
                    }}>
                      <div style={{ color: '#D97706', marginTop: '2px' }}>
                        <Clock size={20} />
                      </div>
                      <div style={{ flex: 1 }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '8px' }}>
                          <span style={{ fontSize: '0.78rem', fontWeight: 700, color: '#B45309', textTransform: 'uppercase' }}>
                            {t('afternoonLabel')} • {dayPlan.afternoon.time}
                          </span>
                          {dayPlan.afternoon.estimatedFee !== undefined && (
                            <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                              Entry: ₹{dayPlan.afternoon.estimatedFee}
                            </span>
                          )}
                        </div>
                        <h5 style={{ fontSize: '0.98rem', color: 'var(--primary-900)', margin: '4px 0 6px' }}>
                          {language === 'kn' ? (dayPlan.afternoon.titleKn || dayPlan.afternoon.title) : dayPlan.afternoon.title}
                        </h5>
                        <p style={{ fontSize: '0.88rem', color: 'var(--text-body)', lineHeight: 1.5, margin: 0 }}>
                          {language === 'kn' ? (dayPlan.afternoon.descriptionKn || dayPlan.afternoon.description) : dayPlan.afternoon.description}
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Evening Block */}
                  {dayPlan.evening && (
                    <div style={{
                      display: 'flex',
                      gap: '14px',
                      padding: '14px',
                      borderRadius: '10px',
                      backgroundColor: 'rgba(15, 46, 35, 0.05)',
                      borderLeft: '4px solid #1B4332'
                    }}>
                      <div style={{ color: '#1B4332', marginTop: '2px' }}>
                        <Moon size={20} />
                      </div>
                      <div style={{ flex: 1 }}>
                        <span style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--primary-900)', textTransform: 'uppercase' }}>
                          {t('eveningLabel')} • {dayPlan.evening.time}
                        </span>
                        <h5 style={{ fontSize: '0.98rem', color: 'var(--primary-900)', margin: '4px 0 6px' }}>
                          {language === 'kn' ? (dayPlan.evening.titleKn || dayPlan.evening.title) : dayPlan.evening.title}
                        </h5>
                        <p style={{ fontSize: '0.88rem', color: 'var(--text-body)', lineHeight: 1.5, margin: 0 }}>
                          {language === 'kn' ? (dayPlan.evening.descriptionKn || dayPlan.evening.description) : dayPlan.evening.description}
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Cultural Tip Badge */}
                  {dayPlan.culturalTip && (
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      padding: '10px 14px',
                      borderRadius: '8px',
                      backgroundColor: 'var(--bg-surface-warm)',
                      border: '1px dashed var(--border-warm)',
                      fontSize: '0.82rem',
                      color: 'var(--primary-900)'
                    }}>
                      <Info size={16} color="#D97706" style={{ flexShrink: 0 }} />
                      <div>
                        <strong>{t('culturalTipLabel')}: </strong>
                        <span>{language === 'kn' ? (dayPlan.culturalTipKn || dayPlan.culturalTip) : dayPlan.culturalTip}</span>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
