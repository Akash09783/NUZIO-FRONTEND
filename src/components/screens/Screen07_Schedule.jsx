import React, { useState } from 'react';
import { NuzioLogo } from '../common/NuzioLogo';

export const Screen07_Schedule = ({ onNext }) => {
  const [period, setPeriod] = useState('AM');
  const [selectedTime, setSelectedTime] = useState('7:00');

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
            STEP 4 OF 4
          </div>
          <div style={{ display: 'flex', gap: '6px' }}>
            <div style={{ flex: 1, height: '3px', borderRadius: '2px', background: '#6c4ff7' }} />
            <div style={{ flex: 1, height: '3px', borderRadius: '2px', background: '#6c4ff7' }} />
            <div style={{ flex: 1, height: '3px', borderRadius: '2px', background: '#6c4ff7' }} />
            <div style={{ flex: 1, height: '3px', borderRadius: '2px', background: '#6c4ff7' }} />
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
          When do you<br />
          <span style={{
            fontFamily: "'Playfair Display', 'Newsreader', serif",
            fontStyle: 'italic',
            fontWeight: 400,
            background: 'linear-gradient(135deg, #ffffff 0%, #cbd5e1 30%, #a5b4fc 70%, #818cf8 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            want your brief?
          </span>
        </h1>

        <p style={{
          color: '#8a91a0',
          fontSize: '0.84rem',
          marginBottom: '26px'
        }}>
          Nuzio will have your brief ready and waiting each morning.
        </p>

        {/* AM / PM Segmented Control */}
        <div style={{
          display: 'flex',
          background: '#11131a',
          borderRadius: '9999px',
          padding: '4px',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          marginBottom: '32px'
        }}>
          <button
            onClick={() => setPeriod('AM')}
            style={{
              flex: 1,
              padding: '11px',
              borderRadius: '9999px',
              background: period === 'AM' ? '#6c4ff7' : 'transparent',
              color: period === 'AM' ? '#fff' : '#6b7280',
              border: 'none',
              fontFamily: "'Outfit', sans-serif",
              fontWeight: 700,
              fontSize: '0.88rem',
              cursor: 'pointer',
              boxShadow: period === 'AM' ? '0 2px 12px rgba(108, 79, 247, 0.5)' : 'none'
            }}
          >
            AM
          </button>
          <button
            onClick={() => setPeriod('PM')}
            style={{
              flex: 1,
              padding: '11px',
              borderRadius: '9999px',
              background: period === 'PM' ? '#6c4ff7' : 'transparent',
              color: period === 'PM' ? '#fff' : '#6b7280',
              border: 'none',
              fontFamily: "'Outfit', sans-serif",
              fontWeight: 700,
              fontSize: '0.88rem',
              cursor: 'pointer',
              boxShadow: period === 'PM' ? '0 2px 12px rgba(108, 79, 247, 0.5)' : 'none'
            }}
          >
            PM
          </button>
        </div>

        {/* Time Wheel matching Screenshot 7 */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '12px'
        }}>
          <div style={{ color: '#242835', fontSize: '1.2rem', fontWeight: 600 }}>5:30</div>
          <div style={{ color: '#444a5b', fontSize: '1.4rem', fontWeight: 600 }}>6:00</div>
          <div style={{ color: '#6d7589', fontSize: '1.6rem', fontWeight: 600 }}>6:30</div>

          {/* Active 7:00 AM Card with Glowing Purple Border */}
          <div style={{
            width: '100%',
            padding: '12px 20px',
            borderRadius: '20px',
            background: 'rgba(108, 79, 247, 0.12)',
            border: '1.5px solid #6c4ff7',
            display: 'flex',
            alignItems: 'baseline',
            justifyContent: 'center',
            gap: '8px',
            boxShadow: '0 0 30px rgba(108, 79, 247, 0.35)'
          }}>
            <span style={{ fontSize: '2.8rem', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.02em', lineHeight: 1 }}>
              {selectedTime}
            </span>
            <span style={{ fontSize: '1.15rem', fontWeight: 700, color: '#9d87ff' }}>
              {period}
            </span>
          </div>

          <div style={{ color: '#6d7589', fontSize: '1.6rem', fontWeight: 600 }}>7:30</div>
          <div style={{ color: '#444a5b', fontSize: '1.4rem', fontWeight: 600 }}>8:00</div>
          <div style={{ color: '#242835', fontSize: '1.2rem', fontWeight: 600 }}>8:30</div>
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
