import React from 'react';
import { Wifi } from 'lucide-react';

export const IosStatusBar = () => {
  return (
    <div style={{
      height: '44px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 24px',
      fontSize: '0.85rem',
      fontWeight: 600,
      color: '#ffffff',
      userSelect: 'none',
      zIndex: 50,
      position: 'relative'
    }}>
      {/* Time */}
      <span style={{ fontSize: '0.9rem', fontWeight: 600, letterSpacing: '-0.01em' }}>9:41</span>

      {/* Dynamic Island pill */}
      <div style={{
        position: 'absolute',
        left: '50%',
        transform: 'translateX(-50%)',
        top: '10px',
        width: '100px',
        height: '24px',
        background: '#000000',
        borderRadius: '16px',
        border: '1px solid rgba(255, 255, 255, 0.08)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 8px'
      }}>
        <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#12141a' }} />
        <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#0a0a0f' }} />
      </div>

      {/* Right icons: Cellular, Wifi, Battery */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
        {/* Cellular Signal bars */}
        <div style={{ display: 'flex', alignItems: 'flex-end', gap: '1.5px', height: '11px' }}>
          <div style={{ width: '3px', height: '3px', background: '#fff', borderRadius: '0.5px' }} />
          <div style={{ width: '3px', height: '5px', background: '#fff', borderRadius: '0.5px' }} />
          <div style={{ width: '3px', height: '8px', background: '#fff', borderRadius: '0.5px' }} />
          <div style={{ width: '3px', height: '11px', background: '#fff', borderRadius: '0.5px' }} />
        </div>

        {/* Wifi */}
        <Wifi size={13} strokeWidth={2.5} />

        {/* Battery */}
        <div style={{
          width: '22px',
          height: '11px',
          border: '1.2px solid rgba(255, 255, 255, 0.75)',
          borderRadius: '3px',
          padding: '1.5px',
          display: 'flex',
          alignItems: 'center',
          position: 'relative'
        }}>
          <div style={{ width: '80%', height: '100%', background: '#fff', borderRadius: '1.5px' }} />
          <div style={{
            position: 'absolute',
            right: '-3px',
            top: '2.5px',
            width: '1.5px',
            height: '4px',
            background: 'rgba(255, 255, 255, 0.75)',
            borderRadius: '0 1px 1px 0'
          }} />
        </div>
      </div>
    </div>
  );
};
