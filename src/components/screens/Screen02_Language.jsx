import React, { useState } from 'react';
import { NuzioLogo } from '../common/NuzioLogo';
import { MapPin } from 'lucide-react';

export const Screen02_Language = ({ onNext }) => {
  const [selectedLang, setSelectedLang] = useState('English');
  const [locationEnabled, setLocationEnabled] = useState(false);

  return (
    <div style={{
      height: '100%',
      minHeight: '740px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      padding: '20px 20px 24px 20px',
      position: 'relative',
      background: 'radial-gradient(circle at 50% 12%, rgba(108, 79, 247, 0.16) 0%, rgba(108, 79, 247, 0.02) 45%, #060709 60%)'
    }}>
      <div>
        {/* Top Nuzio Logo */}
        <div style={{ marginBottom: '28px' }}>
          <NuzioLogo size="small" />
        </div>

        {/* Title */}
        <h1 style={{
          fontSize: '2rem',
          fontWeight: 700,
          lineHeight: 1.18,
          letterSpacing: '-0.02em',
          marginBottom: '6px'
        }}>
          Choose your<br />
          <span style={{
            fontFamily: "'Playfair Display', 'Newsreader', serif",
            fontStyle: 'italic',
            fontWeight: 400,
            background: 'linear-gradient(135deg, #ffffff 0%, #cbd5e1 30%, #a5b4fc 70%, #818cf8 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            language
          </span>
        </h1>

        <p style={{
          color: '#8a91a0',
          fontSize: '0.84rem',
          marginBottom: '26px'
        }}>
          Select the language for your daily brief.
        </p>

        {/* Language Selection Cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '20px' }}>
          {/* English Option */}
          <div
            onClick={() => setSelectedLang('English')}
            style={{
              padding: '16px 18px',
              borderRadius: '18px',
              background: selectedLang === 'English' ? 'rgba(108, 79, 247, 0.12)' : '#11131a',
              border: selectedLang === 'English' ? '1.5px solid #6c4ff7' : '1px solid rgba(255, 255, 255, 0.08)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              cursor: 'pointer',
              boxShadow: selectedLang === 'English' ? '0 0 24px rgba(108, 79, 247, 0.28)' : 'none',
              transition: 'all 0.15s ease'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
              <div style={{
                background: '#1c1f2b',
                padding: '4px 8px',
                borderRadius: '6px',
                fontSize: '0.72rem',
                fontWeight: 700,
                color: '#8b92a2',
                border: '1px solid rgba(255, 255, 255, 0.06)'
              }}>
                GB
              </div>
              <div>
                <div style={{ fontWeight: 600, fontSize: '0.98rem', color: '#fff' }}>English</div>
                <div style={{ fontSize: '0.76rem', color: '#7a8192' }}>Briefings delivered in English</div>
              </div>
            </div>

            {/* Custom Radio Button: Purple circle with purple dot */}
            <div style={{
              width: '20px',
              height: '20px',
              borderRadius: '50%',
              border: selectedLang === 'English' ? '2px solid #6c4ff7' : '2px solid #3c4250',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'transparent'
            }}>
              {selectedLang === 'English' && (
                <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#6c4ff7' }} />
              )}
            </div>
          </div>

          {/* Hindi Option */}
          <div
            onClick={() => setSelectedLang('Hindi')}
            style={{
              padding: '16px 18px',
              borderRadius: '18px',
              background: selectedLang === 'Hindi' ? 'rgba(108, 79, 247, 0.12)' : '#11131a',
              border: selectedLang === 'Hindi' ? '1.5px solid #6c4ff7' : '1px solid rgba(255, 255, 255, 0.08)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              cursor: 'pointer',
              transition: 'all 0.15s ease'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
              <div style={{
                background: '#1c1f2b',
                padding: '4px 8px',
                borderRadius: '6px',
                fontSize: '0.72rem',
                fontWeight: 700,
                color: '#8b92a2',
                border: '1px solid rgba(255, 255, 255, 0.06)'
              }}>
                IN
              </div>
              <div>
                <div style={{ fontWeight: 600, fontSize: '0.98rem', color: '#fff' }}>हिन्दी</div>
                <div style={{ fontSize: '0.76rem', color: '#7a8192' }}>हिंदी में समाचार सुनें</div>
              </div>
            </div>

            <div style={{
              width: '20px',
              height: '20px',
              borderRadius: '50%',
              border: selectedLang === 'Hindi' ? '2px solid #6c4ff7' : '2px solid #3c4250',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'transparent'
            }}>
              {selectedLang === 'Hindi' && (
                <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#6c4ff7' }} />
              )}
            </div>
          </div>
        </div>

        {/* Enable Location Card matching Screenshot 2 */}
        <div style={{
          padding: '16px 18px',
          borderRadius: '18px',
          background: '#11131a',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <div style={{
              width: '36px',
              height: '36px',
              borderRadius: '12px',
              background: 'rgba(239, 68, 68, 0.14)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#ef4444'
            }}>
              <MapPin size={18} />
            </div>
            <div>
              <div style={{ fontWeight: 600, fontSize: '0.92rem', color: '#fff' }}>Enable Location</div>
              <div style={{ fontSize: '0.74rem', color: '#7a8192' }}>Get hyperlocal news tailored to your city.</div>
              <div style={{ fontSize: '0.65rem', color: '#525866', marginTop: '3px', fontWeight: 600, letterSpacing: '0.04em' }}>
                • {locationEnabled ? 'ALLOWED' : 'NOT ALLOWED'}
              </div>
            </div>
          </div>

          {/* iOS Toggle switch */}
          <label className="ios-switch">
            <input
              type="checkbox"
              checked={locationEnabled}
              onChange={() => setLocationEnabled(!locationEnabled)}
            />
            <span className="ios-slider"></span>
          </label>
        </div>
      </div>

      {/* Bottom Continue Button */}
      <div style={{ paddingTop: '20px' }}>
        <button
          onClick={onNext}
          style={{
            width: '100%',
            padding: '16px',
            borderRadius: '9999px',
            background: 'linear-gradient(135deg, #6c4ff7 0%, #583be8 100%)',
            color: '#fff',
            fontFamily: "'Outfit', sans-serif",
            fontWeight: 600,
            fontSize: '1rem',
            border: 'none',
            cursor: 'pointer',
            boxShadow: '0 8px 25px -4px rgba(108, 79, 247, 0.55)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px'
          }}
        >
          <span>Continue</span>
          <span>→</span>
        </button>
      </div>
    </div>
  );
};
