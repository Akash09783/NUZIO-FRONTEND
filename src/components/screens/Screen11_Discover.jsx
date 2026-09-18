import React, { useState } from 'react';
import { NuzioLogo } from '../common/NuzioLogo';
import { BottomFloatingNav } from '../common/BottomFloatingNav';
import { Search, Play, Bookmark } from 'lucide-react';
import { useAudioPlayer } from '../../context/AudioPlayerContext';

export const Screen11_Discover = ({ onNavigate }) => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [search, setSearch] = useState('');
  const { play, selectStory } = useAudioPlayer();

  const categories = ['All', 'AI & Tech', 'Markets', 'Startups', 'Science'];

  const articles = [
    {
      id: 0,
      tag: 'AI & TECH',
      source: 'THE VERGE ›',
      title: 'Anthropic ships Claude 4.5 with 2M-token memory and native tools.',
      snippet: "Anthropic's new memory layer lets Claude hold entire codebases in mind while it works.",
      readTime: '3 MIN READ'
    },
    {
      id: 2,
      tag: 'GLOBAL',
      source: 'BLOOMBERG ›',
      title: 'Fed minutes hint at a September policy shift.',
      snippet: 'Officials flagged growing confidence that inflation is cooling toward target.',
      readTime: '2 MIN READ'
    },
    {
      id: 3,
      tag: 'STARTUPS',
      source: 'TECHCRUNCH ›',
      title: 'Bengaluru deep-tech startups secure $420M across quantum and silicon.',
      snippet: 'Early-stage venture capital pivoted aggressively toward deep-tech hardware.',
      readTime: '2 MIN READ'
    }
  ];

  return (
    <div style={{
      height: '100%',
      minHeight: '740px',
      display: 'flex',
      flexDirection: 'column',
      padding: '16px 18px 90px 18px',
      position: 'relative'
    }}>
      {/* Top Bar */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: '16px'
      }}>
        <NuzioLogo size="small" />

        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <Search size={18} color="#fff" />
          <div 
            onClick={() => onNavigate && onNavigate('settings')}
            style={{
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
              color: '#fff',
              cursor: 'pointer'
            }}
            title="Settings"
          >
            A
          </div>
        </div>
      </div>

      {/* Header Title */}
      <div style={{ marginBottom: '14px' }}>
        <h1 style={{ fontSize: '1.65rem', fontWeight: 800, letterSpacing: '-0.02em', marginBottom: '2px' }}>
          Discover
        </h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.82rem' }}>
          In-depth style — swipe the world.
        </p>
      </div>

      {/* Search Input Bar */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        background: '#12141c',
        border: '1px solid var(--border-hairline)',
        borderRadius: 'var(--radius-full)',
        padding: '10px 16px',
        gap: '10px',
        marginBottom: '16px'
      }}>
        <Search size={16} color="#6b7280" />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search stories, sources, topics..."
          style={{
            background: 'none',
            border: 'none',
            outline: 'none',
            color: '#fff',
            fontSize: '0.82rem',
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
        paddingBottom: '4px',
        marginBottom: '18px',
        scrollbarWidth: 'none'
      }}>
        {categories.map(cat => {
          const isSelected = activeCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
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
                boxShadow: isSelected ? '0 0 14px rgba(16, 185, 129, 0.4)' : 'none'
              }}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Articles Feed Cards matching Screenshot 11 */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
        {articles.map((art) => (
          <div
            key={art.id}
            style={{
              background: 'var(--bg-card)',
              borderRadius: 'var(--radius-lg)',
              border: '1px solid var(--border-hairline)',
              padding: '16px 18px',
              display: 'flex',
              flexDirection: 'column',
              gap: '8px'
            }}
          >
            {/* Tags Row */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{
                fontSize: '0.62rem',
                fontWeight: 800,
                color: '#9d87ff',
                background: 'rgba(109, 84, 234, 0.16)',
                padding: '2px 7px',
                borderRadius: '4px',
                letterSpacing: '0.06em'
              }}>
                {art.tag}
              </span>
              <span style={{ fontSize: '0.68rem', fontWeight: 700, color: '#6b7280' }}>
                {art.source}
              </span>
            </div>

            {/* Title */}
            <h3 style={{ fontSize: '0.98rem', fontWeight: 700, lineHeight: 1.35, color: '#ffffff' }}>
              {art.title}
            </h3>

            {/* Snippet */}
            <p style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', lineHeight: 1.45 }}>
              {art.snippet}
            </p>

            {/* Footer with Read time and Green Play button */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '4px' }}>
              <span style={{ fontSize: '0.68rem', fontWeight: 700, color: '#6b7280', letterSpacing: '0.04em' }}>
                {art.readTime}
              </span>

              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <button
                    onClick={() => {
                      selectStory(art.id);
                      if (onNavigate) onNavigate('player');
                    }}
                    style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '50%',
                      background: '#10b981',
                      border: 'none',
                      color: '#000',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      boxShadow: '0 4px 12px rgba(16, 185, 129, 0.4)'
                    }}
                    title="Play story"
                  >
                    <Play size={14} fill="#000" style={{ marginLeft: '2px' }} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      {/* Bottom Floating Nav Bar */}
      <BottomFloatingNav currentScreen="discover" onNavigate={onNavigate} />
    </div>
  );
};
