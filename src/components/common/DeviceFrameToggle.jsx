import React from 'react';
import { Smartphone, Monitor } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

export const DeviceFrameToggle = () => {
  const { displayMode, setDisplayMode } = useAuth();

  return (
    <div style={{
      display: 'inline-flex',
      alignItems: 'center',
      background: 'rgba(255, 255, 255, 0.06)',
      backdropFilter: 'blur(12px)',
      padding: '4px',
      borderRadius: '999px',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      zIndex: 50
    }}>
      <button
        onClick={() => setDisplayMode('desktop')}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          padding: '6px 14px',
          borderRadius: '999px',
          border: 'none',
          background: displayMode === 'desktop' ? 'linear-gradient(135deg, #7c5cfc, #6366f1)' : 'transparent',
          color: displayMode === 'desktop' ? '#fff' : '#9da3b4',
          fontSize: '0.8rem',
          fontWeight: 600,
          cursor: 'pointer',
          transition: 'all 0.2s ease',
          boxShadow: displayMode === 'desktop' ? '0 2px 10px rgba(124, 92, 252, 0.4)' : 'none'
        }}
        title="View responsive widescreen layout"
      >
        <Monitor size={14} />
        <span>Desktop View</span>
      </button>

      <button
        onClick={() => setDisplayMode('mobile-sim')}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          padding: '6px 14px',
          borderRadius: '999px',
          border: 'none',
          background: displayMode === 'mobile-sim' ? 'linear-gradient(135deg, #7c5cfc, #6366f1)' : 'transparent',
          color: displayMode === 'mobile-sim' ? '#fff' : '#9da3b4',
          fontSize: '0.8rem',
          fontWeight: 600,
          cursor: 'pointer',
          transition: 'all 0.2s ease',
          boxShadow: displayMode === 'mobile-sim' ? '0 2px 10px rgba(124, 92, 252, 0.4)' : 'none'
        }}
        title="Simulate Mobile iPhone screen frame"
      >
        <Smartphone size={14} />
        <span>Mobile Phone</span>
      </button>
    </div>
  );
};
