import React, { useState, useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useAudioPlayer } from '../../context/AudioPlayerContext';
import { Search, Play, Pause, ArrowLeft, Filter, Sparkles } from 'lucide-react';

export const DiscoverView = () => {
  const { setActiveView } = useAuth();
  const { stories, currentStory, isPlaying, selectStory } = useAudioPlayer();
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [discoverList, setDiscoverList] = useState([]);

  useEffect(() => {
    fetch(`/api/stories/discover?category=${encodeURIComponent(activeCategory)}&query=${encodeURIComponent(searchTerm)}`)
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          setDiscoverList(data.stories);
        }
      })
      .catch(() => {
        // Fallback filter on local stories
        let res = [...stories];
        if (activeCategory !== 'All') {
          res = res.filter(s => s.niche.toLowerCase().includes(activeCategory.toLowerCase()));
        }
        if (searchTerm) {
          res = res.filter(s => s.title.toLowerCase().includes(searchTerm.toLowerCase()));
        }
        setDiscoverList(res);
      });
  }, [searchTerm, activeCategory, stories]);

  const categories = ["All", "AI & Tech", "Markets", "Startups", "Science"];

  return (
    <div style={{
      minHeight: '100%',
      display: 'flex',
      flexDirection: 'column',
      padding: '20px 16px 80px 16px',
      position: 'relative'
    }}>
      {/* Top Bar with Back Arrow */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
        <button
          onClick={() => setActiveView('player')}
          style={{
            background: 'rgba(255, 255, 255, 0.08)',
            border: '1px solid var(--border-subtle)',
            borderRadius: '50%',
            width: '36px',
            height: '36px',
            color: '#fff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer'
          }}
        >
          <ArrowLeft size={18} />
        </button>

        <span style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-secondary)' }}>
          Explore Topics
        </span>

        <div style={{ width: '36px' }} />
      </div>

      {/* Header text */}
      <div style={{ marginBottom: '20px' }}>
        <h1 style={{ fontSize: '1.75rem', fontWeight: 800, letterSpacing: '-0.02em', marginBottom: '4px' }}>
          Discover
        </h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>
          Short-to-style — hear the world in audio.
        </p>
      </div>

      {/* Search Input Bar */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        background: 'var(--bg-card)',
        border: '1px solid var(--border-subtle)',
        borderRadius: 'var(--radius-full)',
        padding: '12px 18px',
        gap: '10px',
        marginBottom: '16px'
      }}>
        <Search size={18} color="var(--text-muted)" />
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search stories, sources, topics..."
          style={{
            background: 'none',
            border: 'none',
            outline: 'none',
            color: '#fff',
            fontSize: '0.9rem',
            width: '100%',
            fontFamily: 'var(--font-sans)'
          }}
        />
      </div>

      {/* Categories Horizontal Pills */}
      <div style={{
        display: 'flex',
        gap: '8px',
        overflowX: 'auto',
        paddingBottom: '12px',
        marginBottom: '16px',
        scrollbarWidth: 'none'
      }}>
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            style={{
              padding: '8px 16px',
              borderRadius: 'var(--radius-full)',
              background: activeCategory === cat ? 'linear-gradient(135deg, #10b981, #059669)' : 'var(--bg-card)',
              border: activeCategory === cat ? '1px solid #10b981' : '1px solid var(--border-subtle)',
              color: activeCategory === cat ? '#fff' : 'var(--text-secondary)',
              fontSize: '0.8rem',
              fontWeight: 600,
              cursor: 'pointer',
              whiteSpace: 'nowrap'
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Story Cards List */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
        {discoverList.map((story, idx) => {
          const isThisPlaying = currentStory?.id === story.id && isPlaying;
          return (
            <div
              key={story.id}
              style={{
                background: 'var(--bg-card)',
                borderRadius: 'var(--radius-lg)',
                border: '1px solid var(--border-subtle)',
                padding: '18px',
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
                transition: 'transform 0.15s ease'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{
                    fontSize: '0.68rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    color: 'var(--accent-purple-light)',
                    background: 'rgba(124, 92, 252, 0.12)',
                    padding: '3px 8px',
                    borderRadius: '4px'
                  }}>
                    {story.niche}
                  </span>
                  <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)', fontWeight: 600 }}>
                    {story.source}
                  </span>
                </div>

                <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                  {story.readTime} READ
                </span>
              </div>

              <h3 style={{ fontSize: '1.05rem', fontWeight: 700, lineHeight: 1.35, color: '#fff' }}>
                {story.title}
              </h3>

              <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                {story.summary}
              </p>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '6px' }}>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                  {story.timeAgo}
                </span>

                <button
                  onClick={() => {
                    selectStory(stories.findIndex(s => s.id === story.id));
                    setActiveView('player');
                  }}
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    background: isThisPlaying ? 'var(--accent-purple)' : '#10b981',
                    color: '#fff',
                    border: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    boxShadow: '0 4px 14px rgba(16, 185, 129, 0.4)'
                  }}
                  title="Play story"
                >
                  {isThisPlaying ? <Pause size={16} fill="#fff" /> : <Play size={16} fill="#fff" style={{ marginLeft: '2px' }} />}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
