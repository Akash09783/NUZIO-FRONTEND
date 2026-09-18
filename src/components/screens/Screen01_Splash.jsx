import React, { useEffect } from 'react';
import { NuzioLogo } from '../common/NuzioLogo';

export const Screen01_Splash = ({ onNext }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onNext();
    }, 2200);
    return () => clearTimeout(timer);
  }, [onNext]);
  return (
    <div 
      onClick={onNext}
      style={{
        height: '100%',
        minHeight: '740px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '30px 24px',
        position: 'relative',
        cursor: 'pointer',
        userSelect: 'none',
        background: 'radial-gradient(circle at 50% 38%, rgba(108, 79, 247, 0.18) 0%, rgba(108, 79, 247, 0.03) 50%, #060709 70%)'
      }}
    >
      {/* Brandmark Centered */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '-30px'
      }}>
        <NuzioLogo size="large" />

        {/* Golden Editorial Serif Headline: News on go */}
        <div style={{ marginTop: '28px', textAlign: 'center' }}>
          <h1 style={{
            fontFamily: "'Playfair Display', 'Newsreader', serif",
            fontStyle: 'italic',
            fontWeight: 400,
            fontSize: '2.5rem',
            lineHeight: 1.1,
            background: 'linear-gradient(135deg, #fffbeb 0%, #fef08a 40%, #eab308 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            letterSpacing: '-0.01em'
          }}>
            News on go
          </h1>

          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '0.62rem',
            fontWeight: 700,
            letterSpacing: '0.22em',
            color: '#4e5564',
            marginTop: '8px',
            textTransform: 'uppercase'
          }}>
            YOUR AUDIO BRIEF, EVERY MORNING.
          </p>
        </div>
      </div>

      {/* Pulsing Connecting Indicator at bottom */}
      <div style={{
        position: 'absolute',
        bottom: '36px',
        display: 'flex',
        alignItems: 'center',
        gap: '6px',
        fontSize: '0.65rem',
        fontWeight: 600,
        color: '#2a2e39',
        letterSpacing: '0.12em',
        textTransform: 'uppercase'
      }}>
        <span style={{
          width: '5px',
          height: '5px',
          borderRadius: '50%',
          background: '#10b981',
          boxShadow: '0 0 6px #10b981',
          display: 'inline-block'
        }} />
        <span>CONNECTING YOUR BRIEF...</span>
      </div>
    </div>
  );
};
