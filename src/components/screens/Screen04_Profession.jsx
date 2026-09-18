import React, { useState } from 'react';
import { NuzioLogo } from '../common/NuzioLogo';
import { 
  TrendingUp, Scale, Cpu, Stethoscope, Users, 
  Sparkles, Building2, Home, BookOpen, Rocket, Check 
} from 'lucide-react';

const PROFESSIONS = [
  { id: 'Finance & Trading', label: 'Finance & Trading', icon: TrendingUp },
  { id: 'Legal', label: 'Legal', icon: Scale },
  { id: 'Technology', label: 'Technology', icon: Cpu },
  { id: 'Healthcare', label: 'Healthcare', icon: Stethoscope },
  { id: 'Consulting', label: 'Consulting', icon: Users },
  { id: 'Marketing & Media', label: 'Marketing & Media', icon: Sparkles },
  { id: 'Government & Policy', label: 'Government & Policy', icon: Building2 },
  { id: 'Real Estate', label: 'Real Estate', icon: Home },
  { id: 'Education', label: 'Education', icon: BookOpen },
  { id: 'Founder / Builder', label: 'Founder / Builder', icon: Rocket }
];

export const Screen04_Profession = ({ onNext }) => {
  const [selected, setSelected] = useState('Technology');

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
            STEP 1 OF 4
          </div>
          <div style={{ display: 'flex', gap: '6px' }}>
            <div style={{ flex: 1, height: '3px', borderRadius: '2px', background: '#6c4ff7' }} />
            <div style={{ flex: 1, height: '3px', borderRadius: '2px', background: '#191c26' }} />
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
          What's your<br />
          <span style={{
            fontFamily: "'Playfair Display', 'Newsreader', serif",
            fontStyle: 'italic',
            fontWeight: 400,
            background: 'linear-gradient(135deg, #ffffff 0%, #cbd5e1 30%, #a5b4fc 70%, #818cf8 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            profession?
          </span>
        </h1>

        <p style={{
          color: '#8a91a0',
          fontSize: '0.84rem',
          marginBottom: '24px'
        }}>
          We'll tailor every brief to what actually moves your day.
        </p>

        {/* Profession Grid matching Screenshot 4 */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '10px'
        }}>
          {PROFESSIONS.map(p => {
            const isSelected = selected === p.id;
            const Icon = p.icon;
            return (
              <div
                key={p.id}
                onClick={() => setSelected(p.id)}
                style={{
                  padding: '12px 14px',
                  borderRadius: '16px',
                  background: isSelected ? 'rgba(108, 79, 247, 0.16)' : '#11131a',
                  border: isSelected ? '1.5px solid #6c4ff7' : '1px solid rgba(255, 255, 255, 0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  cursor: 'pointer',
                  boxShadow: isSelected ? '0 0 18px rgba(108, 79, 247, 0.3)' : 'none',
                  transition: 'all 0.15s ease'
                }}
              >
                <Icon size={15} color={isSelected ? '#9d87ff' : '#646c7d'} />
                <span style={{
                  fontSize: '0.8rem',
                  fontWeight: 500,
                  color: isSelected ? '#fff' : '#cbd5e1',
                  flex: 1,
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis'
                }}>
                  {p.label}
                </span>
                {isSelected && <Check size={14} color="#9d87ff" strokeWidth={3} />}
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
