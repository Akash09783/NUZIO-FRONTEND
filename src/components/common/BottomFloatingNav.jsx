import React from 'react';
import { Compass, Settings, Play, Pause, Headphones } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { useAudioPlayer } from '../../context/AudioPlayerContext';

export const BottomFloatingNav = ({ currentScreen = 'player', onNavigate }) => {
  const { activeView, setActiveView } = useAuth();
  const { isPlaying, togglePlayPause } = useAudioPlayer();

  const active = currentScreen || activeView || 'player';

  const handleNav = (target) => {
    if (onNavigate) {
      onNavigate(target);
    } else {
      setActiveView(target);
    }
  };

  return (
    <div style={{
      position: 'absolute',
      bottom: '16px',
      left: '18px',
      right: '18px',
      height: '62px',
      background: 'rgba(16, 18, 26, 0.94)',
      backdropFilter: 'blur(20px)',
      WebkitBackdropFilter: 'blur(20px)',
      borderRadius: '32px',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 28px',
      zIndex: 60,
      boxShadow: '0 12px 35px rgba(0, 0, 0, 0.7)'
    }}>
      {/* Left: Discover or Briefing */}
      {active === 'discover' ? (
        <button
          onClick={() => handleNav('player')}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '3px',
            background: 'none',
            border: 'none',
            color: '#6b7280',
            cursor: 'pointer',
            transition: 'color 0.15s ease'
          }}
        >
          <Headphones size={18} />
          <span style={{
            fontSize: '0.62rem',
            fontWeight: 700,
            letterSpacing: '0.06em',
            textTransform: 'uppercase'
          }}>
            Briefing
          </span>
        </button>
      ) : (
        <button
          onClick={() => handleNav('discover')}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '3px',
            background: 'none',
            border: 'none',
            color: active === 'discover' ? '#9d87ff' : '#6b7280',
            cursor: 'pointer',
            transition: 'color 0.15s ease'
          }}
        >
          <Compass size={18} strokeWidth={active === 'discover' ? 2.5 : 2} />
          <span style={{
            fontSize: '0.62rem',
            fontWeight: 700,
            letterSpacing: '0.06em',
            textTransform: 'uppercase'
          }}>
            Discover
          </span>
        </button>
      )}

      {/* Center: Floating Glowing Purple Play Button */}
      <button
        onClick={togglePlayPause}
        className={isPlaying ? "glowing-play-btn" : ""}
        style={{
          width: '54px',
          height: '54px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #7c5cfc 0%, #5b3be2 100%)',
          border: '2px solid rgba(255, 255, 255, 0.3)',
          color: '#ffffff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          boxShadow: '0 6px 24px rgba(109, 84, 234, 0.65)',
          transform: 'translateY(-14px)',
          transition: 'transform 0.15s ease'
        }}
        onMouseDown={(e) => e.currentTarget.style.transform = 'translateY(-14px) scale(0.94)'}
        onMouseUp={(e) => e.currentTarget.style.transform = 'translateY(-14px) scale(1)'}
        title={isPlaying ? "Pause audio" : "Play audio brief"}
      >
        {isPlaying ? <Pause size={22} fill="#fff" /> : <Play size={22} fill="#fff" style={{ marginLeft: '3px' }} />}
      </button>

      {/* Right: Settings or Briefing */}
      {active === 'settings' ? (
        <button
          onClick={() => handleNav('player')}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '3px',
            background: 'none',
            border: 'none',
            color: '#6b7280',
            cursor: 'pointer',
            transition: 'color 0.15s ease'
          }}
        >
          <Headphones size={18} />
          <span style={{
            fontSize: '0.62rem',
            fontWeight: 700,
            letterSpacing: '0.06em',
            textTransform: 'uppercase'
          }}>
            Briefing
          </span>
        </button>
      ) : (
        <button
          onClick={() => handleNav('settings')}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '3px',
            background: 'none',
            border: 'none',
            color: active === 'settings' ? '#9d87ff' : '#6b7280',
            cursor: 'pointer',
            transition: 'color 0.15s ease'
          }}
        >
          <Settings size={18} strokeWidth={active === 'settings' ? 2.5 : 2} />
          <span style={{
            fontSize: '0.62rem',
            fontWeight: 700,
            letterSpacing: '0.06em',
            textTransform: 'uppercase'
          }}>
            Settings
          </span>
        </button>
      )}
    </div>
  );
};
