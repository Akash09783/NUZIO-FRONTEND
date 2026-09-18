import React, { useState } from 'react';
import { AuthProvider, useAuth } from './context/AuthContext';
import { AudioPlayerProvider, useAudioPlayer } from './context/AudioPlayerContext';
import { NuzioLogo } from './components/common/NuzioLogo';

// Screen components
import { Screen01_Splash } from './components/screens/Screen01_Splash';
import { Screen02_Language } from './components/screens/Screen02_Language';
import { Screen03_Welcome } from './components/screens/Screen03_Welcome';
import { Screen04_Profession } from './components/screens/Screen04_Profession';
import { Screen05_Niches } from './components/screens/Screen05_Niches';
import { Screen06_Voice } from './components/screens/Screen06_Voice';
import { Screen07_Schedule } from './components/screens/Screen07_Schedule';
import { Screen08_Notifications } from './components/screens/Screen08_Notifications';
import { Screen09_Ready } from './components/screens/Screen09_Ready';
import { Screen10_Player } from './components/screens/Screen10_Player';
import { Screen11_Discover } from './components/screens/Screen11_Discover';
import { Screen12_Settings } from './components/screens/Screen12_Settings';
import { Screen13_PlanBilling } from './components/screens/Screen13_PlanBilling';

import { 
  Headphones, Compass, Settings, Play, Pause, 
  RotateCcw, RotateCw, Monitor, Smartphone, Search, 
  Check, ArrowRight, Sparkles, Volume2, Bookmark, Clock
} from 'lucide-react';

const MainApp = () => {
  // Natural user-driven screen flow:
  // splash -> language -> welcome -> profession -> niches -> voice -> schedule -> notifications -> ready -> player
  const [currentScreen, setCurrentScreen] = useState('splash');
  
  // Optional viewport preview mode on desktop: 'responsive' | 'mobile-mockup'
  const [devicePreview, setDevicePreview] = useState('responsive');

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
    skipForward,
    skipBackward,
    seek,
    cycleSpeed,
    selectStory,
    formatTime
  } = useAudioPlayer();

  const progressPercent = duration > 0 ? (currentTime / duration) * 100 : 38;
  const remainingTime = duration > currentTime ? duration - currentTime : 227;

  const isOnboarding = [
    'splash', 'language', 'welcome', 'profession', 
    'niches', 'voice', 'schedule', 'notifications', 'ready'
  ].includes(currentScreen);

  // In-app navigation handler
  const goTo = (screenId) => {
    setCurrentScreen(screenId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Render the current active screen
  const renderScreenContent = () => {
    switch (currentScreen) {
      case 'splash':
        return <Screen01_Splash onNext={() => goTo('language')} />;
      case 'language':
        return <Screen02_Language onNext={() => goTo('welcome')} />;
      case 'welcome':
        return <Screen03_Welcome onNext={() => goTo('profession')} />;
      case 'profession':
        return <Screen04_Profession onNext={() => goTo('niches')} />;
      case 'niches':
        return <Screen05_Niches onNext={() => goTo('voice')} />;
      case 'voice':
        return <Screen06_Voice onNext={() => goTo('schedule')} />;
      case 'schedule':
        return <Screen07_Schedule onNext={() => goTo('notifications')} />;
      case 'notifications':
        return <Screen08_Notifications onNext={() => goTo('ready')} />;
      case 'ready':
        return <Screen09_Ready onNext={() => goTo('player')} />;
      case 'player':
        return <Screen10_Player onNavigate={goTo} />;
      case 'discover':
        return <Screen11_Discover onNavigate={goTo} />;
      case 'settings':
        return <Screen12_Settings onNavigate={goTo} onOpenBilling={() => goTo('billing')} onEditProfile={() => goTo('profession')} />;
      case 'billing':
        return <Screen13_PlanBilling onBack={() => goTo('settings')} />;
      default:
        return <Screen10_Player />;
    }
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: '#060709', color: '#fff', position: 'relative' }}>
      {/* Background ambient radial glow */}
      <div className="ambient-glow-center" />

      {/* Global Header (Clean, minimal, natural) */}
      <header style={{
        height: '64px',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        background: 'rgba(8, 10, 15, 0.85)',
        backdropFilter: 'blur(20px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 24px',
        position: 'sticky',
        top: 0,
        zIndex: 100
      }}>
        {/* Brand */}
        <div 
          onClick={() => goTo(isOnboarding ? 'splash' : 'player')}
          style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}
        >
          <NuzioLogo size="medium" />
        </div>

        {/* Desktop Navigation Links (Visible when user has entered main app) */}
        {!isOnboarding && (
          <nav style={{ display: 'flex', alignItems: 'center', gap: '8px' }} className="desktop-nav-links">
            <button
              onClick={() => goTo('player')}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '8px 16px',
                borderRadius: '9999px',
                background: currentScreen === 'player' ? 'rgba(109, 84, 234, 0.2)' : 'transparent',
                border: currentScreen === 'player' ? '1px solid #6d54ea' : 'none',
                color: currentScreen === 'player' ? '#fff' : '#8e95a5',
                fontFamily: "'Outfit', sans-serif",
                fontWeight: 600,
                fontSize: '0.88rem',
                cursor: 'pointer',
                transition: 'all 0.15s ease'
              }}
            >
              <Headphones size={16} color={currentScreen === 'player' ? '#9d87ff' : '#8e95a5'} />
              <span>Today's Brief</span>
            </button>

            <button
              onClick={() => goTo('discover')}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '8px 16px',
                borderRadius: '9999px',
                background: currentScreen === 'discover' ? 'rgba(109, 84, 234, 0.2)' : 'transparent',
                border: currentScreen === 'discover' ? '1px solid #6d54ea' : 'none',
                color: currentScreen === 'discover' ? '#fff' : '#8e95a5',
                fontFamily: "'Outfit', sans-serif",
                fontWeight: 600,
                fontSize: '0.88rem',
                cursor: 'pointer',
                transition: 'all 0.15s ease'
              }}
            >
              <Compass size={16} color={currentScreen === 'discover' ? '#9d87ff' : '#8e95a5'} />
              <span>Discover</span>
            </button>

            <button
              onClick={() => goTo('settings')}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '8px 16px',
                borderRadius: '9999px',
                background: (currentScreen === 'settings' || currentScreen === 'billing') ? 'rgba(109, 84, 234, 0.2)' : 'transparent',
                border: (currentScreen === 'settings' || currentScreen === 'billing') ? '1px solid #6d54ea' : 'none',
                color: (currentScreen === 'settings' || currentScreen === 'billing') ? '#fff' : '#8e95a5',
                fontFamily: "'Outfit', sans-serif",
                fontWeight: 600,
                fontSize: '0.88rem',
                cursor: 'pointer',
                transition: 'all 0.15s ease'
              }}
            >
              <Settings size={16} color={(currentScreen === 'settings' || currentScreen === 'billing') ? '#9d87ff' : '#8e95a5'} />
              <span>Settings</span>
            </button>
          </nav>
        )}

        {/* Right side: Viewport switcher (Desktop layout vs Phone mockup) & Profile */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{
            display: 'flex',
            background: '#12141c',
            borderRadius: '9999px',
            padding: '2px',
            border: '1px solid rgba(255, 255, 255, 0.1)'
          }}>
            <button
              onClick={() => setDevicePreview('responsive')}
              style={{
                padding: '5px 12px',
                borderRadius: '9999px',
                background: devicePreview === 'responsive' ? '#6d54ea' : 'transparent',
                color: devicePreview === 'responsive' ? '#fff' : '#717887',
                border: 'none',
                fontSize: '0.75rem',
                fontWeight: 700,
                display: 'flex',
                alignItems: 'center',
                gap: '5px',
                cursor: 'pointer'
              }}
              title="Full responsive desktop dashboard"
            >
              <Monitor size={13} />
              <span>Desktop</span>
            </button>

            <button
              onClick={() => setDevicePreview('mobile-mockup')}
              style={{
                padding: '5px 12px',
                borderRadius: '9999px',
                background: devicePreview === 'mobile-mockup' ? '#6d54ea' : 'transparent',
                color: devicePreview === 'mobile-mockup' ? '#fff' : '#717887',
                border: 'none',
                fontSize: '0.75rem',
                fontWeight: 700,
                display: 'flex',
                alignItems: 'center',
                gap: '5px',
                cursor: 'pointer'
              }}
              title="Mobile phone app frame"
            >
              <Smartphone size={13} />
              <span>Mobile</span>
            </button>
          </div>

          {!isOnboarding && (
            <div
              onClick={() => goTo('settings')}
              style={{
                width: '34px',
                height: '34px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #f59e0b, #ef4444)',
                border: '1.5px solid rgba(255, 255, 255, 0.25)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 800,
                fontSize: '0.85rem',
                color: '#fff',
                cursor: 'pointer'
              }}
              title="Aarav Sharma (Settings)"
            >
              A
            </div>
          )}
        </div>
      </header>

      {/* Main App Content Area */}
      <main style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'flex-start', padding: devicePreview === 'mobile-mockup' ? '28px 16px' : '0' }}>
        {devicePreview === 'mobile-mockup' ? (
          /* MOBILE PHONE MOCKUP VIEW */
          <div style={{
            width: '390px',
            height: '844px',
            background: '#060709',
            borderRadius: '50px',
            border: '10px solid #1c1e28',
            boxShadow: '0 25px 65px -15px rgba(0, 0, 0, 0.9), 0 0 50px -10px rgba(109, 84, 234, 0.25)',
            position: 'relative',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column'
          }}>
            {/* Dynamic Island */}
            <div style={{
              position: 'absolute',
              top: '11px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '100px',
              height: '24px',
              background: '#000',
              borderRadius: '16px',
              zIndex: 60,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '0 8px',
              border: '1px solid rgba(255, 255, 255, 0.08)'
            }}>
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#12141a' }} />
              {isPlaying && (
                <div style={{ display: 'flex', gap: '2px', alignItems: 'center' }}>
                  <div style={{ width: '2px', height: '8px', background: '#9d87ff', borderRadius: '1px' }} />
                  <div style={{ width: '2px', height: '12px', background: '#6d54ea', borderRadius: '1px' }} />
                  <div style={{ width: '2px', height: '6px', background: '#9d87ff', borderRadius: '1px' }} />
                </div>
              )}
            </div>

            {/* Inner Phone View */}
            <div style={{ flex: 1, overflowY: 'auto', scrollbarWidth: 'none', paddingTop: '16px' }}>
              {renderScreenContent()}
            </div>
          </div>
        ) : (
          /* RESPONSIVE FULL-SCREEN DESKTOP / MOBILE VIEW */
          <div style={{ width: '100%', maxWidth: isOnboarding ? '460px' : '1240px', margin: '0 auto', padding: '24px 20px' }}>
            {isOnboarding ? (
              /* Centered Onboarding Card on Desktop */
              <div style={{
                background: '#0c0e15',
                borderRadius: '28px',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                boxShadow: '0 20px 50px rgba(0, 0, 0, 0.8), 0 0 35px rgba(109, 84, 234, 0.15)',
                overflow: 'hidden',
                minHeight: '740px'
              }}>
                {renderScreenContent()}
              </div>
            ) : (
              /* Full Desktop Multi-column Layout for Main App */
              <div style={{ display: 'grid', gridTemplateColumns: '270px 1fr 340px', gap: '28px', alignItems: 'start' }}>
                {/* Left Sidebar: Profile, Curated Niches & Navigation */}
                <div style={{
                  background: '#0f1118',
                  borderRadius: '24px',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  padding: '22px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '20px',
                  position: 'sticky',
                  top: '88px'
                }}>
                  {/* User Profile */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                    <div style={{
                      width: '46px',
                      height: '46px',
                      borderRadius: '50%',
                      background: 'linear-gradient(135deg, #7c5cfc, #6366f1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: 800,
                      fontSize: '1.15rem',
                      color: '#fff'
                    }}>
                      A
                    </div>
                    <div>
                      <div style={{ fontWeight: 700, fontSize: '1.02rem', color: '#fff' }}>Aarav Sharma</div>
                      <div style={{ fontSize: '0.78rem', color: '#8a91a0' }}>Technology • Mumbai, India</div>
                    </div>
                  </div>

                  {/* Quick Sidebar Links */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    <button
                      onClick={() => goTo('player')}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px',
                        padding: '12px 16px',
                        borderRadius: '14px',
                        background: currentScreen === 'player' ? 'rgba(109, 84, 234, 0.22)' : 'transparent',
                        border: currentScreen === 'player' ? '1.5px solid #6d54ea' : 'none',
                        color: currentScreen === 'player' ? '#fff' : '#8e95a5',
                        fontFamily: "'Outfit', sans-serif",
                        fontWeight: 600,
                        fontSize: '0.9rem',
                        cursor: 'pointer',
                        transition: 'all 0.15s ease'
                      }}
                    >
                      <Headphones size={18} color={currentScreen === 'player' ? '#9d87ff' : '#6b7280'} />
                      <span>Today's Brief</span>
                    </button>

                    <button
                      onClick={() => goTo('discover')}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px',
                        padding: '12px 16px',
                        borderRadius: '14px',
                        background: currentScreen === 'discover' ? 'rgba(109, 84, 234, 0.22)' : 'transparent',
                        border: currentScreen === 'discover' ? '1.5px solid #6d54ea' : 'none',
                        color: currentScreen === 'discover' ? '#fff' : '#8e95a5',
                        fontFamily: "'Outfit', sans-serif",
                        fontWeight: 600,
                        fontSize: '0.9rem',
                        cursor: 'pointer',
                        transition: 'all 0.15s ease'
                      }}
                    >
                      <Compass size={18} color={currentScreen === 'discover' ? '#9d87ff' : '#6b7280'} />
                      <span>Discover Stories</span>
                    </button>

                    <button
                      onClick={() => goTo('settings')}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px',
                        padding: '12px 16px',
                        borderRadius: '14px',
                        background: (currentScreen === 'settings' || currentScreen === 'billing') ? 'rgba(109, 84, 234, 0.22)' : 'transparent',
                        border: (currentScreen === 'settings' || currentScreen === 'billing') ? '1.5px solid #6d54ea' : 'none',
                        color: (currentScreen === 'settings' || currentScreen === 'billing') ? '#fff' : '#8e95a5',
                        fontFamily: "'Outfit', sans-serif",
                        fontWeight: 600,
                        fontSize: '0.9rem',
                        cursor: 'pointer',
                        transition: 'all 0.15s ease'
                      }}
                    >
                      <Settings size={18} color={(currentScreen === 'settings' || currentScreen === 'billing') ? '#9d87ff' : '#6b7280'} />
                      <span>Settings & Plan</span>
                    </button>
                  </div>

                  {/* Active Niches */}
                  <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.08)', paddingTop: '16px' }}>
                    <div style={{ fontSize: '0.68rem', fontWeight: 800, color: '#585e6d', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '10px' }}>
                      MY CURATED NICHES
                    </div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                      {['AI & Technology', 'Financial Markets', 'Startups'].map(n => (
                        <span
                          key={n}
                          style={{
                            fontSize: '0.72rem',
                            fontWeight: 600,
                            padding: '4px 10px',
                            borderRadius: '9999px',
                            background: 'rgba(109, 84, 234, 0.15)',
                            color: '#9d87ff',
                            border: '1px solid rgba(109, 84, 234, 0.3)'
                          }}
                        >
                          {n}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Active Narrator Badge */}
                  <div style={{
                    background: 'rgba(255, 255, 255, 0.03)',
                    padding: '14px',
                    borderRadius: '16px',
                    border: '1px solid rgba(255, 255, 255, 0.07)'
                  }}>
                    <div style={{ fontSize: '0.68rem', fontWeight: 800, color: '#585e6d', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                      ACTIVE NARRATOR
                    </div>
                    <div style={{ fontSize: '0.88rem', fontWeight: 700, color: '#fff', marginTop: '3px' }}>
                      Aria — Warm • British
                    </div>
                    <div style={{ fontSize: '0.75rem', color: '#8a91a0', marginTop: '3px' }}>
                      6 stories • 15:30 total
                    </div>
                  </div>
                </div>

                {/* Center Column: The Active Screen (Player / Discover / Settings / Billing) */}
                <div style={{
                  background: '#0a0c12',
                  borderRadius: '28px',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  overflow: 'hidden',
                  minHeight: '740px',
                  boxShadow: '0 20px 50px rgba(0, 0, 0, 0.8), 0 0 30px rgba(109, 84, 234, 0.12)'
                }}>
                  {renderScreenContent()}
                </div>

                {/* Right Column: Briefing Companion & Up Next Queue */}
                <div style={{
                  background: '#0f1118',
                  borderRadius: '24px',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  padding: '22px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '18px',
                  position: 'sticky',
                  top: '88px'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <span style={{ fontSize: '0.9rem', fontWeight: 700, color: '#fff' }}>
                      Briefing Companion
                    </span>
                    <span style={{
                      fontSize: '0.68rem',
                      fontWeight: 800,
                      padding: '2px 8px',
                      borderRadius: '9999px',
                      background: 'rgba(16, 185, 129, 0.14)',
                      color: '#10b981',
                      border: '1px solid rgba(16, 185, 129, 0.3)'
                    }}>
                      LIVE AUDIO
                    </span>
                  </div>

                  {currentStory && (
                    <div>
                      <div style={{ fontSize: '0.68rem', fontWeight: 800, color: '#585e6d', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '6px' }}>
                        NOW STREAMING
                      </div>
                      <h4 style={{ fontSize: '0.95rem', fontWeight: 700, lineHeight: 1.35, color: '#ffffff', marginBottom: '8px' }}>
                        {currentStory.title}
                      </h4>
                      <p style={{ fontSize: '0.78rem', color: '#8a91a0', lineHeight: 1.45, marginBottom: '14px' }}>
                        {currentStory.summary}
                      </p>

                      <div style={{ fontSize: '0.68rem', fontWeight: 800, color: '#9d87ff', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '8px' }}>
                        KEY TAKEAWAYS
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        {(currentStory.bulletPoints || []).map((bullet, idx) => (
                          <div key={idx} style={{ display: 'flex', gap: '8px', fontSize: '0.76rem', color: '#cbd5e1', lineHeight: 1.4 }}>
                            <span style={{ color: '#9d87ff', fontWeight: 700 }}>•</span>
                            <span>{bullet}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Morning drop card */}
                  <div style={{
                    marginTop: 'auto',
                    padding: '16px',
                    borderRadius: '16px',
                    background: 'radial-gradient(ellipse at top, #1e1b4b 0%, #11131a 100%)',
                    border: '1px solid rgba(109, 84, 234, 0.35)'
                  }}>
                    <div style={{ fontSize: '0.7rem', fontWeight: 800, color: '#9d87ff', textTransform: 'uppercase' }}>
                      NEXT MORNING DROP
                    </div>
                    <div style={{ fontSize: '1.35rem', fontWeight: 800, color: '#fff', margin: '4px 0' }}>
                      7:00 AM
                    </div>
                    <div style={{ fontSize: '0.75rem', color: '#8a91a0' }}>
                      Freshly curated audio brief delivered daily to your device.
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </main>
    </div>
  );
};

export default function App() {
  return (
    <AuthProvider>
      <AudioPlayerProvider>
        <MainApp />
      </AudioPlayerProvider>
    </AuthProvider>
  );
}
