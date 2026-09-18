import React, { useState } from 'react';
import { NuzioLogo } from '../common/NuzioLogo';
import { BottomFloatingNav } from '../common/BottomFloatingNav';
import { useAudioPlayer } from '../../context/AudioPlayerContext';
import { useAuth } from '../../context/AuthContext';
import { Search, RotateCcw, RotateCw, Play, Pause, ChevronRight } from 'lucide-react';

export const Screen10_Player = ({ onNavigate }) => {
  const { user } = useAuth();
  const {
    currentStory,
    currentStoryIndex,
    isPlaying,
    currentTime,
    duration,
    playbackRate,
    waveformBars,
    filterCategory,
    setFilterCategory,
    togglePlayPause,
    skipForward,
    skipBackward,
    seek,
    cycleSpeed,
    formatTime
  } = useAudioPlayer();

  const progressPercent = duration > 0 ? (currentTime / duration) * 100 : 38;
  const remainingTime = duration > currentTime ? duration - currentTime : 227;

  const categories = ['All', 'AI & Tech', 'Markets', 'Startups', 'Science'];

  return (
    <div style={{
      height: '100%',
      minHeight: '740px',
      display: 'flex',
      flexDirection: 'column',
      padding: '16px 18px 90px 18px',
      position: 'relative'
    }}>
      {/* Top Header Bar */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: '16px'
      }}>
        <NuzioLogo size="small" />

        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <button
            onClick={() => onNavigate && onNavigate('discover')}
            style={{
              background: 'none',
              border: 'none',
              color: '#ffffff',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
            title="Discover"
          >
            <Search size={18} />
          </button>

          {/* Avatar with yellow pip notification dot */}
          <div 
            onClick={() => onNavigate && onNavigate('settings')}
            style={{ position: 'relative', cursor: 'pointer' }}
            title="Settings"
          >
            <div style={{
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #f59e0b, #ef4444)',
              border: '1.5px solid rgba(255, 255, 255, 0.25)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 800,
              fontSize: '0.82rem',
              color: '#fff'
            }}>
              A
            </div>
            <div style={{
              position: 'absolute',
              top: '-1px',
              right: '-1px',
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              background: '#f59e0b',
              border: '1.5px solid #060709'
            }} />
          </div>
        </div>
      </div>

      {/* Category Pills Slider */}
      <div style={{
        display: 'flex',
        gap: '8px',
        overflowX: 'auto',
        paddingBottom: '4px',
        marginBottom: '18px',
        scrollbarWidth: 'none'
      }}>
        {categories.map(cat => {
          const isSelected = filterCategory === cat || (cat === 'All' && filterCategory === 'All');
          return (
            <button
              key={cat}
              onClick={() => setFilterCategory(cat)}
              style={{
                padding: '6px 16px',
                borderRadius: 'var(--radius-full)',
                background: isSelected ? '#10b981' : '#14161f',
                border: isSelected ? '1px solid #10b981' : '1px solid var(--border-hairline)',
                color: isSelected ? '#000000' : '#8e95a5',
                fontSize: '0.78rem',
                fontWeight: 700,
                whiteSpace: 'nowrap',
                cursor: 'pointer',
                boxShadow: isSelected ? '0 0 14px rgba(16, 185, 129, 0.4)' : 'none',
                transition: 'all 0.15s ease'
              }}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Greeting & Date Header */}
      <div style={{ marginBottom: '18px' }}>
        <div style={{
          fontSize: '0.68rem',
          fontWeight: 800,
          color: '#d97706',
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          marginBottom: '4px'
        }}>
          SUNDAY • 14 JULY • MORNING BRIEF
        </div>

        <h1 style={{
          fontSize: '1.75rem',
          fontWeight: 700,
          lineHeight: 1.2,
          letterSpacing: '-0.02em',
          marginBottom: '8px'
        }}>
          Good morning, Aarav —<br />
          <span className="editorial-serif-italic editorial-purple">
            6 things.
          </span>
        </h1>

        {/* Live status tag */}
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
          <span style={{
            width: '6px',
            height: '6px',
            borderRadius: '50%',
            background: '#10b981',
            boxShadow: '0 0 8px #10b981'
          }} />
          <span style={{ fontSize: '0.75rem', fontWeight: 600, color: '#9d87ff' }}>
            Audio live • Voice Aria • 6 stories • 15:30
          </span>
        </div>
      </div>

      {/* CORE NOW PLAYING CARD (Screenshot 10) */}
      <div style={{
        background: 'radial-gradient(ellipse at top, #191c28 0%, #11131a 100%)',
        borderRadius: 'var(--radius-xl)',
        border: '1.2px solid rgba(255, 255, 255, 0.12)',
        padding: '20px 18px',
        boxShadow: '0 15px 35px rgba(0, 0, 0, 0.6), 0 0 30px rgba(109, 84, 234, 0.18)',
        marginBottom: '16px',
        position: 'relative'
      }}>
        {/* Top Tag & Counter */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            background: 'rgba(109, 84, 234, 0.2)',
            padding: '3px 8px',
            borderRadius: '4px',
            border: '1px solid rgba(109, 84, 234, 0.4)'
          }}>
            <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#9d87ff' }} />
            <span style={{ fontSize: '0.65rem', fontWeight: 800, color: '#c4b5fd', letterSpacing: '0.06em' }}>
              NOW PLAYING • AI & TECH
            </span>
          </div>

          <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#6b7280' }}>
            01 / 06
          </span>
        </div>

        {/* Headline */}
        <h2 style={{
          fontSize: '1.22rem',
          fontWeight: 700,
          lineHeight: 1.35,
          color: '#ffffff',
          marginBottom: '8px'
        }}>
          Anthropic ships Claude 4.5 with 2M-token memory and native tools.
        </h2>

        {/* Source metadata */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          fontSize: '0.68rem',
          fontWeight: 700,
          color: 'var(--text-muted)',
          textTransform: 'uppercase',
          letterSpacing: '0.05em',
          marginBottom: '10px'
        }}>
          <span style={{ color: '#9d87ff' }}>THE VERGE</span>
          <span>•</span>
          <span>3 MIN</span>
          <span>•</span>
          <span>10M AGO</span>
        </div>

        {/* Snippet */}
        <p style={{
          fontSize: '0.78rem',
          color: 'var(--text-secondary)',
          lineHeight: 1.45,
          marginBottom: '18px'
        }}>
          Anthropic's new memory layer lets Claude hold entire codebases in mind while it works.
        </p>

        {/* Real-time fluctuating Audio Waveform Bars */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '38px',
          gap: '2px',
          marginBottom: '14px'
        }}>
          {waveformBars.map((height, idx) => {
            const isPlayed = (idx / waveformBars.length) <= (progressPercent / 100);
            return (
              <div
                key={idx}
                style={{
                  flex: 1,
                  height: `${height}%`,
                  borderRadius: '1.5px',
                  background: isPlayed
                    ? 'linear-gradient(180deg, #9d87ff 0%, #6d54ea 100%)'
                    : 'rgba(255, 255, 255, 0.16)',
                  boxShadow: (isPlayed && isPlaying) ? '0 0 6px rgba(109, 84, 234, 0.7)' : 'none',
                  transition: 'height 0.12s ease'
                }}
              />
            );
          })}
        </div>

        {/* Scrubber track & Timers */}
        <div style={{ marginBottom: '16px' }}>
          <div
            className="scrubber-track"
            onClick={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              const pos = (e.clientX - rect.left) / rect.width;
              seek(Math.floor(pos * duration));
            }}
          >
            <div className="scrubber-fill" style={{ width: `${progressPercent}%` }} />
          </div>

          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            fontSize: '0.72rem',
            fontWeight: 600,
            color: 'var(--text-muted)',
            marginTop: '6px'
          }}>
            <span>02:14</span>
            <span>-03:47</span>
          </div>
        </div>

        {/* Player Controls cluster */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 12px'
        }}>
          {/* Skip Back 10s */}
          <button
            onClick={() => skipBackward(10)}
            style={{
              background: 'none',
              border: 'none',
              color: '#8b92a2',
              cursor: 'pointer',
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <RotateCcw size={22} strokeWidth={2.2} />
            <span style={{ position: 'absolute', fontSize: '0.52rem', fontWeight: 800 }}>10</span>
          </button>

          {/* Central Glowing Purple Play/Pause Button */}
          <button
            onClick={togglePlayPause}
            className={isPlaying ? "glowing-play-btn" : ""}
            style={{
              width: '54px',
              height: '54px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #7c5cfc 0%, #583fe0 100%)',
              border: '2px solid rgba(255, 255, 255, 0.3)',
              color: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              boxShadow: '0 6px 25px rgba(109, 84, 234, 0.65)'
            }}
          >
            {isPlaying ? <Pause size={24} fill="#fff" /> : <Play size={24} fill="#fff" style={{ marginLeft: '3px' }} />}
          </button>

          {/* Skip Forward 10s */}
          <button
            onClick={() => skipForward(10)}
            style={{
              background: 'none',
              border: 'none',
              color: '#8b92a2',
              cursor: 'pointer',
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <RotateCw size={22} strokeWidth={2.2} />
            <span style={{ position: 'absolute', fontSize: '0.52rem', fontWeight: 800 }}>10</span>
          </button>

          {/* Speed Indicator */}
          <button
            onClick={cycleSpeed}
            style={{
              background: 'rgba(255, 255, 255, 0.08)',
              border: '1px solid var(--border-hairline)',
              borderRadius: '999px',
              padding: '4px 10px',
              color: '#cbd5e1',
              fontSize: '0.75rem',
              fontWeight: 700,
              cursor: 'pointer'
            }}
          >
            {playbackRate}x
          </button>
        </div>
      </div>

      {/* Live Narration Ticker matching Screenshot 10 */}
      <div style={{
        background: 'var(--bg-card)',
        borderRadius: 'var(--radius-md)',
        border: '1px solid var(--border-hairline)',
        padding: '12px 14px',
        display: 'flex',
        alignItems: 'center',
        gap: '8px'
      }}>
        <span style={{
          width: '6px',
          height: '6px',
          borderRadius: '50%',
          background: '#10b981',
          boxShadow: '0 0 6px #10b981',
          flexShrink: 0
        }} />
        <span style={{
          fontSize: '0.75rem',
          color: '#cbd5e1',
          fontWeight: 500,
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis'
        }}>
          Now narrating — Anthropic ships Claude 4.5 with 2M-token memory...
        </span>
      </div>

      {/* Bottom Floating Nav Bar */}
      <BottomFloatingNav currentScreen="player" onNavigate={onNavigate} />
    </div>
  );
};
