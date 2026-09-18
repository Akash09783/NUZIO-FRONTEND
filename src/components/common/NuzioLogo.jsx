import React from 'react';

export const NuzioLogo = ({ size = 'medium', showText = true }) => {
  const iconWidth = size === 'large' ? 28 : size === 'small' ? 16 : 20;
  const iconHeight = size === 'large' ? 28 : size === 'small' ? 16 : 20;
  const fontSize = size === 'large' ? '1.45rem' : size === 'small' ? '0.95rem' : '1.15rem';

  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', userSelect: 'none' }}>
      {/* Exact soundwave brandmark: two curved brackets and vertical bar */}
      <svg width={iconWidth} height={iconHeight} viewBox="0 0 24 24" fill="none">
        {/* Outer left arc */}
        <path d="M4 6.5C2.8 8.1 2 10 2 12C2 14 2.8 15.9 4 17.5" stroke="#9079ff" strokeWidth="2" strokeLinecap="round" />
        {/* Inner left arc */}
        <path d="M7.5 8.5C6.8 9.5 6.4 10.7 6.4 12C6.4 13.3 6.8 14.5 7.5 15.5" stroke="#7255ff" strokeWidth="2.2" strokeLinecap="round" />
        {/* Center line */}
        <line x1="12" y1="7" x2="12" y2="17" stroke="#ffffff" strokeWidth="2.4" strokeLinecap="round" />
        {/* Inner right arc */}
        <path d="M16.5 8.5C17.2 9.5 17.6 10.7 17.6 12C17.6 13.3 17.2 14.5 16.5 15.5" stroke="#7255ff" strokeWidth="2.2" strokeLinecap="round" />
        {/* Outer right arc */}
        <path d="M20 6.5C21.2 8.1 22 10 22 12C22 14 21.2 15.9 20 17.5" stroke="#9079ff" strokeWidth="2" strokeLinecap="round" />
      </svg>

      {showText && (
        <span style={{
          fontFamily: "'Outfit', 'Inter', sans-serif",
          fontWeight: 700,
          fontSize: fontSize,
          letterSpacing: '-0.02em',
          color: '#ffffff',
          display: 'flex',
          alignItems: 'baseline',
          gap: '3px'
        }}>
          <span>Nuzio</span>
          <span style={{ color: '#8c75ff', fontSize: '0.78em', fontWeight: 600 }}>AI</span>
        </span>
      )}
    </div>
  );
};
