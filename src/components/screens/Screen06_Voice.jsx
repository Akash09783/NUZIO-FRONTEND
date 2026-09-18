import React, { useState } from 'react';
import { NuzioLogo } from '../common/NuzioLogo';
import { useAudioPlayer } from '../../context/AudioPlayerContext';
import { Play, Square, Check } from 'lucide-react';

const VOICES = [
  {
    id: 'aria',
    name: 'Aria',
    desc: 'Warm • Unhurried • British, ♀',
    lang: 'English',
    avatarBg: 'linear-gradient(135deg, #7c5cfc, #6366f1)',
    letter: 'A',
    sample: 'Good morning! This is Aria. Ready with your morning audio brief.'
  },
  {
    id: 'kai',
    name: 'Kai',
    desc: 'Crisp • Focused • American, ♂',
    lang: 'English',
    avatarBg: 'linear-gradient(135deg, #3b82f6, #1d4ed8)',
    letter: 'K',
    sample: 'Hey there, Kai here. Let us dive straight into what actually moves your day.'
  },
  {
    id: 'meera',
    name: 'Meera',
    desc: 'Bright • Curious • Indian, ♀',
    lang: 'Hindi',
    avatarBg: 'linear-gradient(135deg, #06b6d4, #0d9488)',
    letter: 'M',
    sample: 'Namaste! I am Meera. Here are the top insights shaping business and technology today.'
  }
];

export const Screen06_Voice = ({ onNext }) => {
  const [selectedVoice, setSelectedVoice] = useState('aria');
  const [briefLength, setBriefLength] = useState('5 min');
  const [playingVoice, setPlayingVoice] = useState(null);
  const { playVoiceSample } = useAudioPlayer();

  const handlePlay = (e, v) => {
    e.stopPropagation();
    if (playingVoice === v.id) {
      setPlayingVoice(null);
      if (window.speechSynthesis) window.speechSynthesis.cancel();
    } else {
      setPlayingVoice(v.id);
      playVoiceSample(v.id, v.sample);
      setTimeout(() => setPlayingVoice(null), 3500);
    }
  };

  const selectedVoiceObj = VOICES.find(v => v.id === selectedVoice) || VOICES[0];
  const storiesCount = briefLength === '5 min' ? '5' : briefLength === '10 min' ? '6' : '8';

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
        <div style={{ marginBottom: '20px' }}>
          <div style={{ fontSize: '0.66rem', fontWeight: 800, color: '#795bf5', letterSpacing: '0.08em', marginBottom: '8px' }}>
            STEP 3 OF 4
          </div>
          <div style={{ display: 'flex', gap: '6px' }}>
            <div style={{ flex: 1, height: '3px', borderRadius: '2px', background: '#6c4ff7' }} />
            <div style={{ flex: 1, height: '3px', borderRadius: '2px', background: '#6c4ff7' }} />
            <div style={{ flex: 1, height: '3px', borderRadius: '2px', background: '#6c4ff7' }} />
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
          Pick a<br />
          <span style={{
            fontFamily: "'Playfair Display', 'Newsreader', serif",
            fontStyle: 'italic',
            fontWeight: 400,
            background: 'linear-gradient(135deg, #ffffff 0%, #cbd5e1 30%, #a5b4fc 70%, #818cf8 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            narrator voice.
          </span>
        </h1>

        <p style={{
          color: '#8a91a0',
          fontSize: '0.82rem',
          marginBottom: '20px'
        }}>
          Tap ▶ to hear a 10-second sample.
        </p>

        {/* 3 Voice Cards matching Screenshot 6 */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '22px' }}>
          {VOICES.map(v => {
            const isSelected = selectedVoice === v.id;
            const isAudioPlaying = playingVoice === v.id;
            return (
              <div
                key={v.id}
                onClick={() => setSelectedVoice(v.id)}
                style={{
                  padding: '14px 16px',
                  borderRadius: '18px',
                  background: isSelected ? 'rgba(108, 79, 247, 0.12)' : '#11131a',
                  border: isSelected ? '1.5px solid #6c4ff7' : '1px solid rgba(255, 255, 255, 0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  cursor: 'pointer',
                  boxShadow: isSelected ? '0 0 20px rgba(108, 79, 247, 0.28)' : 'none',
                  transition: 'all 0.15s ease'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  {/* Avatar Circle */}
                  <div style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '50%',
                    background: v.avatarBg,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 700,
                    fontSize: '1rem',
                    color: '#ffffff'
                  }}>
                    {v.letter}
                  </div>

                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <span style={{ fontWeight: 600, fontSize: '0.95rem', color: '#fff' }}>{v.name}</span>
                      <span style={{
                        fontSize: '0.62rem',
                        fontWeight: 700,
                        color: '#9d87ff',
                        background: 'rgba(108, 79, 247, 0.2)',
                        padding: '1px 5px',
                        borderRadius: '4px'
                      }}>AI</span>
                    </div>
                    <div style={{ fontSize: '0.74rem', color: '#8e95a5' }}>
                      {v.desc}
                    </div>
                    <div style={{ fontSize: '0.68rem', color: '#5b6170' }}>
                      {v.lang}
                    </div>
                  </div>
                </div>

                {/* Right Side: Checkmark if selected + Play button */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  {isSelected && (
                    <div style={{
                      width: '18px',
                      height: '18px',
                      borderRadius: '50%',
                      background: '#10b981',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <Check size={11} color="#000" strokeWidth={3.2} />
                    </div>
                  )}

                  <button
                    onClick={(e) => handlePlay(e, v)}
                    style={{
                      width: '34px',
                      height: '34px',
                      borderRadius: '50%',
                      background: isSelected ? '#6c4ff7' : 'rgba(255, 255, 255, 0.08)',
                      border: 'none',
                      color: '#fff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      boxShadow: isSelected ? '0 2px 10px rgba(108, 79, 247, 0.5)' : 'none'
                    }}
                    title="Play audio preview"
                  >
                    {isAudioPlaying ? <Square size={12} fill="#fff" /> : <Play size={12} fill="#fff" style={{ marginLeft: '2px' }} />}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Brief Length Section */}
        <div>
          <div style={{ fontSize: '0.65rem', fontWeight: 800, color: '#585e6d', letterSpacing: '0.08em', marginBottom: '3px' }}>
            BRIEF LENGTH
          </div>
          <div style={{
            fontSize: '1.2rem',
            fontWeight: 400,
            marginBottom: '2px',
            fontFamily: "'Playfair Display', 'Newsreader', serif",
            fontStyle: 'italic',
            background: 'linear-gradient(135deg, #ffffff 0%, #cbd5e1 30%, #a5b4fc 70%, #818cf8 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            How long is your morning?
          </div>
          <div style={{ fontSize: '0.76rem', color: '#7a8192', marginBottom: '12px' }}>
            Set your ideal brief length.
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '8px' }}>
            {['5 min', '10 min', '15 min', 'Custom'].map(dur => {
              const isSelected = briefLength === dur;
              return (
                <button
                  key={dur}
                  onClick={() => setBriefLength(dur)}
                  style={{
                    padding: '9px 0',
                    borderRadius: '12px',
                    background: isSelected ? '#6c4ff7' : '#11131a',
                    border: isSelected ? '1.5px solid #6c4ff7' : '1px solid rgba(255, 255, 255, 0.08)',
                    color: isSelected ? '#fff' : '#8e95a5',
                    fontWeight: 600,
                    fontSize: '0.78rem',
                    cursor: 'pointer',
                    boxShadow: isSelected ? '0 0 14px rgba(108, 79, 247, 0.45)' : 'none'
                  }}
                >
                  {dur}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Dynamic CTA Button matching Screenshot 6 */}
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
          <span>Continue with {selectedVoiceObj.name} • {storiesCount} stories</span>
          <span>→</span>
        </button>
      </div>
    </div>
  );
};
