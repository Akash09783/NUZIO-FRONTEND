import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useAudioPlayer } from '../../context/AudioPlayerContext';
import { 
  Play, Pause, RotateCcw, RotateCw, SkipForward, 
  Volume2, Search, Sparkles, ChevronDown, ChevronUp,
  Bookmark, Share2, CheckCircle2, Radio, Clock
} from 'lucide-react';

export const PlayerView = () => {
  const { user, setActiveView } = useAuth();
  const {
    brief,
    stories,
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
    nextStory,
    previousStory,
    skipForward,
    skipBackward,
    seek,
    cycleSpeed,
    selectStory,
    formatTime
  } = useAudioPlayer();

  const [expandedSummary, setExpandedSummary] = useState(true);
  const [activeTab, setActiveTab] = useState('player');

  const progressPercent = duration > 0 ? (currentTime / duration) * 100 : 0;
  const remainingTime = duration > currentTime ? duration - currentTime : 0;

  // Filter stories if user clicks category tag
  const filteredStories = filterCategory === "All" 
    ? stories 
    : stories.filter(s => s.niche.toLowerCase().includes(filterCategory.toLowerCase()));

  const categories = ["All", "AI & Tech", "Markets", "Startups", "Science"];

  return (
    <div style={{
      minHeight: '100%',
      display: 'flex',
      flexDirection: 'column',
      padding: '16px 16px 80px 16px',
      position: 'relative'
    }}>
      {/* Top Bar Header */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: '16px'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{
            width: '30px',
            height: '30px',
            borderRadius: '8px',
            background: 'linear-gradient(135deg, #7c5cfc, #6366f1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fff',
            boxShadow: '0 2px 10px rgba(124, 92, 252, 0.4)'
          }}>
            <Volume2 size={16} />
          </div>
          <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '1.15rem' }}>
            Nuzio <span style={{ color: 'var(--accent-purple-light)', fontSize: '0.85em' }}>AI</span>
          </span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <button
            onClick={() => setActiveView('discover')}
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              background: 'rgba(255, 255, 255, 0.06)',
              border: '1px solid var(--border-subtle)',
              color: '#fff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer'
            }}
            title="Discover"
          >
            <Search size={16} />
          </button>

          <button
            onClick={() => setActiveView('settings')}
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #f59e0b, #ef4444)',
              border: '2px solid rgba(255, 255, 255, 0.2)',
              color: '#fff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 700,
              fontSize: '0.85rem',
              cursor: 'pointer'
            }}
            title="Settings & Profile"
          >
            {user.name ? user.name[0] : 'A'}
          </button>
        </div>
      </div>

      {/* Category Pills Slider */}
      <div style={{
        display: 'flex',
        gap: '8px',
        overflowX: 'auto',
        paddingBottom: '8px',
        marginBottom: '16px',
        scrollbarWidth: 'none'
      }}>
        {categories.map(cat => {
          const isSelected = filterCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => setFilterCategory(cat)}
              style={{
                padding: '6px 14px',
                borderRadius: 'var(--radius-full)',
                background: isSelected ? 'rgba(124, 92, 252, 0.25)' : 'rgba(255, 255, 255, 0.05)',
                border: isSelected ? '1px solid var(--accent-purple)' : '1px solid var(--border-subtle)',
                color: isSelected ? '#fff' : 'var(--text-secondary)',
                fontSize: '0.78rem',
                fontWeight: 600,
                whiteSpace: 'nowrap',
                cursor: 'pointer',
                transition: 'all 0.15s ease'
              }}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Daily Briefing Headline Header */}
      <div style={{ marginBottom: '18px' }}>
        <div style={{ fontSize: '0.7rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '4px' }}>
          {brief?.date || 'SUNDAY • 14 JULY • MORNING BRIEF'}
        </div>
        <h1 style={{ fontSize: '1.45rem', fontWeight: 700, lineHeight: 1.25, letterSpacing: '-0.02em', marginBottom: '6px' }}>
          Good morning, {user.name?.split(' ')[0] || 'Aarav'} —{' '}
          <span className="editorial-italic" style={{ color: 'var(--accent-purple-light)' }}>
            {stories.length} things.
          </span>
        </h1>

        {/* Live Audio Status Badge */}
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(124, 92, 252, 0.12)', border: '1px solid rgba(124, 92, 252, 0.25)', padding: '4px 10px', borderRadius: 'var(--radius-full)' }}>
          <div style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#10b981', boxShadow: '0 0 8px #10b981' }} />
          <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--accent-purple-light)' }}>
            Audio live • Voice {user.voice === 'kai' ? 'Kai' : user.voice === 'meera' ? 'Meera' : 'Aria'} • {stories.length} stories • {brief?.totalDuration || '15:30'}
          </span>
        </div>
      </div>

      {/* CORE NOW PLAYING PLAYER CARD (Screenshot 10) */}
      {currentStory && (
        <div style={{
          background: 'radial-gradient(ellipse at top, #1c1d29 0%, #11131a 100%)',
          borderRadius: 'var(--radius-xl)',
          border: '1px solid rgba(255, 255, 255, 0.12)',
          padding: '20px',
          boxShadow: '0 16px 40px -10px rgba(0, 0, 0, 0.7), 0 0 35px -10px rgba(124, 92, 252, 0.2)',
          marginBottom: '20px',
          position: 'relative'
        }}>
          {/* Card Meta Row */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
            <span style={{
              fontSize: '0.68rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              color: 'var(--accent-purple-light)',
              background: 'rgba(124, 92, 252, 0.15)',
              padding: '3px 8px',
              borderRadius: '4px'
            }}>
              NOW PLAYING • {currentStory.niche}
            </span>
            <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-muted)', fontFamily: 'var(--font-sans)' }}>
              {currentStoryIndex + 1 < 10 ? `0${currentStoryIndex + 1}` : currentStoryIndex + 1} / {stories.length < 10 ? `0${stories.length}` : stories.length}
            </span>
          </div>

          {/* Headline */}
          <h2 style={{
            fontSize: '1.2rem',
            fontWeight: 700,
            lineHeight: 1.35,
            marginBottom: '8px',
            color: '#ffffff'
          }}>
            {currentStory.title}
          </h2>

          {/* Source & Timestamp */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-muted)', fontSize: '0.72rem', fontWeight: 600, textTransform: 'uppercase', marginBottom: '18px' }}>
            <span style={{ color: 'var(--accent-purple-light)' }}>{currentStory.source}</span>
            <span>•</span>
            <span>{currentStory.readTime}</span>
            <span>•</span>
            <span>{currentStory.timeAgo}</span>
          </div>

          {/* DYNAMIC AUDIO WAVEFORM VISUALIZER */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: '42px',
            padding: '4px 0',
            gap: '2px',
            marginBottom: '16px'
          }}>
            {waveformBars.map((height, idx) => {
              const isActive = (idx / waveformBars.length) <= (progressPercent / 100);
              return (
                <div
                  key={idx}
                  style={{
                    flex: 1,
                    height: `${height}%`,
                    borderRadius: '2px',
                    background: isActive
                      ? 'linear-gradient(180deg, #9d85fd 0%, #7c5cfc 100%)'
                      : 'rgba(255, 255, 255, 0.15)',
                    boxShadow: (isActive && isPlaying) ? '0 0 6px rgba(124, 92, 252, 0.6)' : 'none',
                    transition: 'height 0.15s ease, background 0.1s ease'
                  }}
                />
              );
            })}
          </div>

          {/* Scrubber Progress Bar & Timers */}
          <div style={{ marginBottom: '16px' }}>
            <div
              className="scrubber-track"
              onClick={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const clickPos = (e.clientX - rect.left) / rect.width;
                seek(Math.floor(clickPos * duration));
              }}
            >
              <div className="scrubber-fill" style={{ width: `${progressPercent}%` }} />
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.72rem', color: 'var(--text-muted)', marginTop: '6px', fontWeight: 500 }}>
              <span>{formatTime(currentTime)}</span>
              <span>-{formatTime(remainingTime)}</span>
            </div>
          </div>

          {/* Controls Cluster */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '4px 8px'
          }}>
            {/* Playback speed toggle */}
            <button
              onClick={cycleSpeed}
              style={{
                background: 'rgba(255, 255, 255, 0.08)',
                border: '1px solid var(--border-subtle)',
                color: 'var(--text-secondary)',
                fontSize: '0.78rem',
                fontWeight: 700,
                padding: '6px 10px',
                borderRadius: '999px',
                cursor: 'pointer'
              }}
              title="Playback speed"
            >
              {playbackRate}x
            </button>

            {/* Skip back 10s */}
            <button
              onClick={() => skipBackward(10)}
              style={{
                background: 'none',
                border: 'none',
                color: 'var(--text-secondary)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative'
              }}
              title="Rewind 10 seconds"
            >
              <RotateCcw size={22} />
              <span style={{ position: 'absolute', fontSize: '0.55rem', fontWeight: 800 }}>10</span>
            </button>

            {/* Glowing Main Play/Pause Button */}
            <button
              onClick={togglePlayPause}
              className={isPlaying ? "btn-play-glow" : ""}
              style={{
                width: '56px',
                height: '56px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #7c5cfc 0%, #6366f1 100%)',
                border: '2px solid rgba(255, 255, 255, 0.25)',
                color: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                boxShadow: '0 8px 25px rgba(124, 92, 252, 0.6)',
                transition: 'transform 0.15s ease'
              }}
              onMouseDown={(e) => e.currentTarget.style.transform = 'scale(0.94)'}
              onMouseUp={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
              {isPlaying ? <Pause size={24} fill="#fff" /> : <Play size={24} fill="#fff" style={{ marginLeft: '3px' }} />}
            </button>

            {/* Skip forward 10s */}
            <button
              onClick={() => skipForward(10)}
              style={{
                background: 'none',
                border: 'none',
                color: 'var(--text-secondary)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative'
              }}
              title="Forward 10 seconds"
            >
              <RotateCw size={22} />
              <span style={{ position: 'absolute', fontSize: '0.55rem', fontWeight: 800 }}>10</span>
            </button>

            {/* Next story button */}
            <button
              onClick={nextStory}
              style={{
                background: 'rgba(255, 255, 255, 0.08)',
                border: '1px solid var(--border-subtle)',
                color: 'var(--text-secondary)',
                padding: '6px 12px',
                borderRadius: '999px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                fontSize: '0.78rem',
                fontWeight: 600
              }}
              title="Next Story"
            >
              <span>Next</span>
              <SkipForward size={14} />
            </button>
          </div>
        </div>
      )}

      {/* EXPANDABLE LIVE TRANSCRIPT & TAKEAWAYS */}
      {currentStory && (
        <div style={{
          background: 'var(--bg-card)',
          borderRadius: 'var(--radius-lg)',
          border: '1px solid var(--border-subtle)',
          padding: '16px',
          marginBottom: '20px'
        }}>
          <div
            onClick={() => setExpandedSummary(!expandedSummary)}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              cursor: 'pointer'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                background: isPlaying ? 'var(--accent-purple-light)' : 'var(--text-muted)'
              }} />
              <span style={{ fontSize: '0.82rem', fontWeight: 600, color: '#fff' }}>
                {isPlaying ? 'Now narrating' : 'Key takeaways'} — {currentStory.title.slice(0, 36)}...
              </span>
            </div>
            {expandedSummary ? <ChevronUp size={16} color="var(--text-muted)" /> : <ChevronDown size={16} color="var(--text-muted)" />}
          </div>

          {expandedSummary && (
            <div style={{ marginTop: '14px', paddingTop: '12px', borderTop: '1px solid var(--border-subtle)' }}>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.55, marginBottom: '12px' }}>
                {currentStory.summary}
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {currentStory.bulletPoints.map((point, pIdx) => (
                  <div key={pIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                    <div style={{
                      width: '6px',
                      height: '6px',
                      borderRadius: '50%',
                      background: 'var(--accent-purple-light)',
                      marginTop: '6px',
                      flexShrink: 0
                    }} />
                    <span style={{ fontSize: '0.82rem', color: '#e2e8f0', lineHeight: 1.45 }}>
                      {point}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* UPCOMING STORIES QUEUE */}
      <div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
          <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
            UP NEXT IN TODAY'S BRIEF
          </div>
          <span style={{ fontSize: '0.75rem', color: 'var(--accent-purple-light)', fontWeight: 600 }}>
            {stories.length - currentStoryIndex - 1} remaining
          </span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {filteredStories.map((story, idx) => {
            const isCurrent = story.id === currentStory?.id;
            return (
              <div
                key={story.id}
                onClick={() => selectStory(stories.findIndex(s => s.id === story.id))}
                style={{
                  padding: '14px 16px',
                  borderRadius: 'var(--radius-md)',
                  background: isCurrent ? 'rgba(124, 92, 252, 0.15)' : 'var(--bg-card)',
                  border: isCurrent ? '1.5px solid var(--accent-purple)' : '1px solid var(--border-subtle)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  cursor: 'pointer',
                  transition: 'all 0.15s ease'
                }}
              >
                <div style={{ flex: 1, paddingRight: '12px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '4px' }}>
                    <span style={{ fontSize: '0.68rem', fontWeight: 700, color: 'var(--accent-purple-light)', textTransform: 'uppercase' }}>
                      {story.niche}
                    </span>
                    <span style={{ color: 'var(--text-muted)', fontSize: '0.68rem' }}>• {story.source}</span>
                  </div>
                  <div style={{ fontSize: '0.88rem', fontWeight: 600, color: isCurrent ? '#fff' : 'var(--text-secondary)', lineHeight: 1.35 }}>
                    {story.title}
                  </div>
                </div>

                <div style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  background: isCurrent ? 'var(--accent-purple)' : 'rgba(255, 255, 255, 0.06)',
                  color: '#fff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  {isCurrent && isPlaying ? <Pause size={14} fill="#fff" /> : <Play size={14} fill="#fff" style={{ marginLeft: '2px' }} />}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
