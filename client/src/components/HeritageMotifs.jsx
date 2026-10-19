import React from 'react';

// Gandaberunda emblem motif (Karnataka royal state emblem)
export function GandaberundaEmblem({ size = 32, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle cx="50" cy="50" r="46" fill="none" stroke="currentColor" strokeWidth="2.5" strokeDasharray="3 3" />
      <circle cx="50" cy="50" r="41" fill="none" stroke="currentColor" strokeWidth="1.5" />
      {/* Crown */}
      <path d="M42 22 L50 14 L58 22 L54 26 L46 26 Z" fill="currentColor" />
      <circle cx="50" cy="14" r="2.5" fill="#D97706" />
      {/* Dual Heads */}
      <path d="M42 26 C36 24 30 28 32 35 C34 38 40 40 46 39 Z" fill="currentColor" />
      <path d="M58 26 C64 24 70 28 68 35 C66 38 60 40 54 39 Z" fill="currentColor" />
      {/* Beaks */}
      <path d="M29 32 L22 34 L30 36 Z" fill="#D97706" />
      <path d="M71 32 L78 34 L70 36 Z" fill="#D97706" />
      {/* Main Body */}
      <path d="M45 38 C43 45 42 55 50 64 C58 55 57 45 55 38 Z" fill="currentColor" />
      {/* Wings */}
      <path d="M35 38 C22 42 16 54 22 66 C26 62 34 56 40 52 C36 50 34 44 35 38 Z" fill="currentColor" />
      <path d="M65 38 C78 42 84 54 78 66 C74 62 66 56 60 52 C64 50 66 44 65 38 Z" fill="currentColor" />
      {/* Talons & Pedestal */}
      <path d="M44 64 L40 76 L48 72 L50 66 L52 72 L60 76 L56 64 Z" fill="currentColor" />
      <rect x="36" y="78" width="28" height="4" rx="2" fill="currentColor" />
    </svg>
  );
}

// Stone Chariot (Hampi Vijaya Vittala) Icon
export function StoneChariotIcon({ size = 28, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {/* Gopura / Shikhara roof */}
      <path d="M32 6 L44 24 L20 24 Z" fill="rgba(217, 119, 6, 0.2)" stroke="#D97706" />
      <line x1="32" y1="2" x2="32" y2="6" stroke="#D97706" strokeWidth="2.5" />
      {/* Chariot Body Sanctum */}
      <rect x="18" y="24" width="28" height="18" rx="2" fill="currentColor" fillOpacity="0.1" />
      <rect x="26" y="28" width="12" height="14" rx="1" fill="#D97706" fillOpacity="0.3" stroke="#D97706" />
      {/* Wheels */}
      <circle cx="20" cy="48" r="8" fill="rgba(217, 119, 6, 0.15)" stroke="#D97706" strokeWidth="2.5" />
      <circle cx="20" cy="48" r="2" fill="#D97706" />
      <line x1="20" y1="40" x2="20" y2="56" stroke="#D97706" />
      <line x1="12" y1="48" x2="28" y2="48" stroke="#D97706" />

      <circle cx="44" cy="48" r="8" fill="rgba(217, 119, 6, 0.15)" stroke="#D97706" strokeWidth="2.5" />
      <circle cx="44" cy="48" r="2" fill="#D97706" />
      <line x1="44" y1="40" x2="44" y2="56" stroke="#D97706" />
      <line x1="36" y1="48" x2="52" y2="48" stroke="#D97706" />

      {/* Base platform */}
      <line x1="10" y1="58" x2="54" y2="58" stroke="currentColor" strokeWidth="3" />
    </svg>
  );
}

// Hoysala Star Platform Motif
export function HoysalaStarMotif({ size = 24, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="currentColor"
      className={className}
    >
      <path d="M20 0 L24 14 L38 14 L27 22 L31 36 L20 28 L9 36 L13 22 L2 14 L16 14 Z" opacity="0.85" />
      <circle cx="20" cy="20" r="4" fill="#D97706" />
    </svg>
  );
}

// Decorative divider line with center motif
export function HeritageDivider({ text, textKn, className = '' }) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '16px',
        margin: '28px 0',
        width: '100%'
      }}
      className={className}
    >
      <div style={{ flex: 1, height: '1px', background: 'linear-gradient(90deg, transparent, rgba(217, 119, 6, 0.4))' }} />
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--accent-gold)' }}>
        <HoysalaStarMotif size={16} />
        {text && (
          <span style={{ fontSize: '0.85rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--primary-800)' }}>
            {text} {textKn && `• ${textKn}`}
          </span>
        )}
        <HoysalaStarMotif size={16} />
      </div>
      <div style={{ flex: 1, height: '1px', background: 'linear-gradient(90deg, rgba(217, 119, 6, 0.4), transparent)' }} />
    </div>
  );
}
