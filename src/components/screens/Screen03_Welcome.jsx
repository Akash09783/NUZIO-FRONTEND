import React from 'react';
import { NuzioLogo } from '../common/NuzioLogo';

export const Screen03_Welcome = ({ onNext }) => {
  return (
    <div style={{
      height: '100%',
      minHeight: '740px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      padding: '24px 24px 20px 24px',
      position: 'relative',
      background: 'radial-gradient(circle at 50% 22%, rgba(108, 79, 247, 0.18) 0%, rgba(108, 79, 247, 0.03) 48%, #060709 65%)'
    }}>
      {/* Top Logo */}
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '16px' }}>
        <NuzioLogo size="medium" />
      </div>

      {/* Main Center Message */}
      <div style={{ marginTop: 'auto', marginBottom: 'auto', padding: '10px 0' }}>
        <h1 style={{
          fontSize: '2.5rem',
          fontWeight: 700,
          lineHeight: 1.15,
          letterSpacing: '-0.02em',
          marginBottom: '14px'
        }}>
          Good morning.<br />
          <span style={{
            fontFamily: "'Playfair Display', 'Newsreader', serif",
            fontStyle: 'italic',
            fontWeight: 400,
            background: 'linear-gradient(135deg, #ffffff 0%, #cbd5e1 30%, #a5b4fc 70%, #818cf8 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            News on go.
          </span>
        </h1>

        <p style={{
          color: '#8a91a0',
          fontSize: '0.92rem',
          lineHeight: 1.55,
          maxWidth: '310px'
        }}>
          Personalized audio news for Indian professionals — curated every morning.
        </p>
      </div>

      {/* Bottom Actions */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: 'auto' }}>
        {/* Continue with Google button */}
        <button
          onClick={onNext}
          style={{
            width: '100%',
            padding: '16px',
            borderRadius: '9999px',
            background: '#161922',
            border: '1px solid rgba(255, 255, 255, 0.12)',
            color: '#ffffff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '12px',
            fontFamily: "'Outfit', sans-serif",
            fontSize: '0.95rem',
            fontWeight: 600,
            cursor: 'pointer',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.5)',
            transition: 'all 0.15s ease'
          }}
        >
          {/* Google Icon */}
          <svg width="18" height="18" viewBox="0 0 24 24">
            <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z"/>
            <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.26v3.15C3.27 21.37 7.35 24 12 24z"/>
            <path fill="#FBBC05" d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.26C.46 8.16 0 9.94 0 12s.46 3.84 1.26 5.42l4.02-3.15z"/>
            <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.35 0 3.27 2.63 1.26 6.58l4.02 3.15c.95-2.83 3.6-4.98 6.72-4.98z"/>
          </svg>
          <span>Continue with Google</span>
        </button>

        {/* Terms footer */}
        <p style={{
          textAlign: 'center',
          fontSize: '0.68rem',
          color: '#525866',
          marginTop: '6px'
        }}>
          By continuing you agree to our <span style={{ textDecoration: 'underline', color: '#8a91a0' }}>Terms</span> & <span style={{ textDecoration: 'underline', color: '#8a91a0' }}>Privacy Policy</span>
        </p>
      </div>
    </div>
  );
};
