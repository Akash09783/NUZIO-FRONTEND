import React, { useState } from 'react';
import { NuzioLogo } from '../common/NuzioLogo';
import { Check } from 'lucide-react';

const NICHES = [
  'AI & Technology',
  'Financial Markets',
  'Indian Business',
  'Global Politics',
  'Startups',
  'Science',
  'Geopolitics',
  'Health & Medicine',
  'Climate & Energy',
  'Sports',
  'Culture & Arts',
  'Legal & Policy'
];

export const Screen05_Niches = ({ onNext }) => {
  const [selectedNiches, setSelectedNiches] = useState([
    'AI & Technology',
    'Indian Business',
    'Startups'
  ]);

  const toggle = (niche) => {
    if (selectedNiches.includes(niche)) {
      setSelectedNiches(selectedNiches.filter(n => n !== niche));
    } else {
      if (selectedNiches.length < 3) {
        setSelectedNiches([...selectedNiches, niche]);
      }
    }
  };

  return (
    <div style={{
      height: '100%',
      minHeight: '740px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      padding: '20px 20px 24px 20px',
      position: 'relative',
      background: 'radial-gradient(circle at 50% 12%, rgba(108, 79, 247, 0.14) 0%, rgba(108, 79, 247, 0.02) 45%, #060709 60%)'
    }}>
      <div>
        {/* Top bar with SKIP */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '18px' }}>
          <NuzioLogo size="small" />
          <button
            onClick={onNext}
            style={{
              background: 'none',
              border: 'none',
              color: '#525866',
              fontSize: '0.74rem',
              fontWeight: 700,
              cursor: 'pointer',
              letterSpacing: '0.04em'
            }}
          >
            SKIP →
          </button>
        </div>

        {/* Step progress bar: 4 dashes */}
        <div style={{ marginBottom: '22px' }}>
          <div style={{ fontSize: '0.66rem', fontWeight: 800, color: '#795bf5', letterSpacing: '0.08em', marginBottom: '8px' }}>
            STEP 2 OF 4
          </div>
          <div style={{ display: 'flex', gap: '6px' }}>
            <div style={{ flex: 1, height: '3px', borderRadius: '2px', background: '#6c4ff7' }} />
            <div style={{ flex: 1, height: '3px', borderRadius: '2px', background: '#6c4ff7' }} />
            <div style={{ flex: 1, height: '3px', borderRadius: '2px', background: '#191c26' }} />
            <div style={{ flex: 1, height: '3px', borderRadius: '2px', background: '#191c26' }} />
          </div>
        </div>

        {/* Title */}
        <h1 style={{
          fontSize: '2rem',
          fontWeight: 700,
          lineHeight: 1.18,
          letterSpacing: '-0.02em',
          marginBottom: '6px'
        }}>
          What moves<br />
          <span style={{
            fontFamily: "'Playfair Display', 'Newsreader', serif",
            fontStyle: 'italic',
            fontWeight: 400,
            background: 'linear-gradient(135deg, #ffffff 0%, #cbd5e1 30%, #a5b4fc 70%, #818cf8 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            your world?
          </span>
        </h1>

        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '22px' }}>
          <span style={{ color: '#8a91a0', fontSize: '0.84rem' }}>
            Pick up to 3 niches.
          </span>
          <span style={{
            fontSize: '0.68rem',
            fontWeight: 800,
            padding: '2px 8px',
            borderRadius: '999px',
            background: 'rgba(16, 185, 129, 0.12)',
            color: '#10b981',
            border: '1px solid rgba(16, 185, 129, 0.35)'
          }}>
            {selectedNiches.length}/3
          </span>
        </div>

        {/* Niches Chips matching Screenshot 5 */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '10px'
        }}>
          {NICHES.map(niche => {
            const isSelected = selectedNiches.includes(niche);
            return (
              <div
                key={niche}
                onClick={() => toggle(niche)}
                style={{
                  padding: '9px 16px',
                  borderRadius: '9999px',
                  background: isSelected ? 'rgba(108, 79, 247, 0.2)' : '#11131a',
                  border: isSelected ? '1.5px solid #6c4ff7' : '1px solid rgba(255, 255, 255, 0.08)',
                  color: isSelected ? '#ffffff' : '#8e95a5',
                  fontSize: '0.82rem',
                  fontWeight: 500,
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  boxShadow: isSelected ? '0 0 16px rgba(108, 79, 247, 0.32)' : 'none',
                  transition: 'all 0.15s ease'
                }}
              >
                <span>{niche}</span>
                {isSelected && <Check size={13} color="#9d87ff" strokeWidth={3} />}
              </div>
            );
          })}
        </div>
      </div>

      {/* Continue button */}
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
