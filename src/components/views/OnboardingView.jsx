import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useAudioPlayer } from '../../context/AudioPlayerContext';
import { 
  Check, ArrowRight, Play, Square, Sparkles, 
  Briefcase, TrendingUp, Cpu, Scale, Stethoscope, 
  Users, Building2, BookOpen, Rocket, Clock, Volume2, Bell
} from 'lucide-react';

const PROFESSIONS = [
  { id: 'Finance & Trading', label: 'Finance & Trading', icon: TrendingUp },
  { id: 'Legal', label: 'Legal', icon: Scale },
  { id: 'Technology', label: 'Technology', icon: Cpu },
  { id: 'Healthcare', label: 'Healthcare', icon: Stethoscope },
  { id: 'Consulting', label: 'Consulting', icon: Users },
  { id: 'Marketing & Media', label: 'Marketing & Media', icon: Sparkles },
  { id: 'Government & Policy', label: 'Government & Policy', icon: Building2 },
  { id: 'Real Estate', label: 'Real Estate', icon: Building2 },
  { id: 'Education', label: 'Education', icon: BookOpen },
  { id: 'Founder / Builder', label: 'Founder / Builder', icon: Rocket }
];

const NICHES = [
  'AI & Technology',
  'Financial Markets',
  'Indian Business',
  'Global Politics',
  'Startups',
  'Science',
  'Geopolitics',
  'Health & Medicine',
  'Climate & Energy',
  'Sports',
  'Culture & Arts',
  'Legal & Policy'
];

const VOICES = [
  {
    id: 'aria',
    name: 'Aria',
    tagline: 'Warm • British',
    accent: 'British',
    sample: 'Good morning! This is Aria. Ready with your morning audio brief.'
  },
  {
    id: 'kai',
    name: 'Kai',
    tagline: 'Crisp • American',
    accent: 'American',
    sample: 'Hey there, Kai here. Let’s dive straight into what actually moves your day.'
  },
  {
    id: 'meera',
    name: 'Meera',
    tagline: 'Bright • Indian',
    accent: 'Indian',
    sample: 'Namaste! I am Meera. Here are the top insights shaping business and technology today.'
  }
];

export const OnboardingView = () => {
  const { user, updatePreferences, setActiveView } = useAuth();
  const { playVoiceSample } = useAudioPlayer();

  const [step, setStep] = useState(1); // 1: Profession, 2: Niches, 3: Voice/Duration, 4: Schedule, 5: Ready
  const [profession, setProfession] = useState(user.profession || 'Technology');
  const [niches, setNiches] = useState(user.niches || ['AI & Technology', 'Financial Markets', 'Startups']);
  const [voice, setVoice] = useState(user.voice || 'aria');
  const [briefLength, setBriefLength] = useState(user.briefLengthMinutes || 10);
  const [period, setPeriod] = useState(user.deliveryPeriod || 'AM');
  const [deliveryTime, setDeliveryTime] = useState(user.deliveryTime || '07:00');
  const [activeVoicePlaying, setActiveVoicePlaying] = useState(null);

  const toggleNiche = (n) => {
    if (niches.includes(n)) {
      setNiches(niches.filter(item => item !== n));
    } else {
      if (niches.length < 3) {
        setNiches([...niches, n]);
      }
    }
  };

  const handlePlaySample = (e, v) => {
    e.stopPropagation();
    setActiveVoicePlaying(v.id);
    playVoiceSample(v.id, v.sample);
    setTimeout(() => setActiveVoicePlaying(null), 3500);
  };

  const handleNext = () => {
    if (step < 4) {
      setStep(step + 1);
    } else if (step === 4) {
      // Save all preferences
      updatePreferences({
        profession,
        niches,
        voice,
        briefLengthMinutes: briefLength,
        deliveryTime,
        deliveryPeriod: period
      });
      setStep(5); // Go to Ready screen
    }
  };

  const handleStartListening = () => {
    setActiveView('player');
  };

  // Step Progress Indicator Bar
  const renderProgress = () => {
    if (step > 4) return null;
    return (
      <div style={{ marginBottom: '24px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
          <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--accent-purple-light)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
            STEP {step} OF 4
          </span>
          <button 
            onClick={() => setStep(step < 4 ? step + 1 : 5)}
            style={{ background: 'none', border: 'none', color: 'var(--text-muted)', fontSize: '0.75rem', cursor: 'pointer' }}
          >
            SKIP
          </button>
        </div>
        <div style={{ display: 'flex', gap: '6px', height: '4px' }}>
          {[1, 2, 3, 4].map(idx => (
            <div
              key={idx}
              style={{
                flex: 1,
                borderRadius: '999px',
                background: idx <= step ? 'linear-gradient(90deg, #7c5cfc, #a855f7)' : 'rgba(255, 255, 255, 0.1)',
                transition: 'background 0.3s ease'
              }}
            />
          ))}
        </div>
      </div>
    );
  };

  // SCREEN 5: YOU'RE READY
  if (step === 5) {
    const selectedVoiceObj = VOICES.find(v => v.id === voice) || VOICES[0];
    return (
      <div style={{
        minHeight: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '28px 20px',
        position: 'relative'
      }}>
        <div>
          {/* Header indicator */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--accent-emerald)', fontSize: '0.85rem', fontWeight: 600, marginBottom: '28px' }}>
            <Check size={16} />
            <span>ALL SET</span>
          </div>

          {/* Success Halo Ring */}
          <div style={{ textAlign: 'center', margin: '20px 0 28px 0' }}>
            <div style={{
              width: '84px',
              height: '84px',
              borderRadius: '50%',
              margin: '0 auto 20px auto',
              background: 'radial-gradient(circle, rgba(16, 185, 129, 0.25) 0%, rgba(16, 185, 129, 0.05) 70%)',
              border: '2px solid rgba(16, 185, 129, 0.5)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 0 30px rgba(16, 185, 129, 0.3)'
            }}>
              <Check size={40} color="#10b981" />
            </div>

            <h1 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '8px' }}>
              You're ready,<br />
              <span className="editorial-italic" style={{ color: 'var(--accent-emerald)' }}>
                {user.name || 'Aarav'}.
              </span>
            </h1>

            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', maxWidth: '300px', margin: '0 auto' }}>
              Your first brief is ready. We've synthesized today's top stories tailored to your world.
            </p>
          </div>

          {/* Brief Summary Card */}
          <div style={{
            background: 'var(--bg-card)',
            borderRadius: 'var(--radius-lg)',
            border: '1px solid var(--border-subtle)',
            padding: '18px 20px',
            display: 'flex',
            flexDirection: 'column',
            gap: '14px'
          }}>
            <div style={{ fontSize: '0.72rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              YOUR BRIEF PROFILE
            </div>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <Briefcase size={18} color="var(--accent-purple-light)" />
                <span style={{ fontSize: '0.9rem', fontWeight: 500 }}>{profession}</span>
              </div>
              <Check size={16} color="var(--accent-emerald)" />
            </div>

            <div style={{ height: '1px', background: 'var(--border-subtle)' }} />

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <TrendingUp size={18} color="var(--accent-purple-light)" />
                <span style={{ fontSize: '0.9rem', fontWeight: 500 }}>{niches.join(', ')}</span>
              </div>
              <Check size={16} color="var(--accent-emerald)" />
            </div>

            <div style={{ height: '1px', background: 'var(--border-subtle)' }} />

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <Volume2 size={18} color="var(--accent-purple-light)" />
                <span style={{ fontSize: '0.9rem', fontWeight: 500 }}>{selectedVoiceObj.name} — {selectedVoiceObj.tagline}</span>
              </div>
              <Check size={16} color="var(--accent-emerald)" />
            </div>

            <div style={{ height: '1px', background: 'var(--border-subtle)' }} />

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <Clock size={18} color="var(--accent-purple-light)" />
                <span style={{ fontSize: '0.9rem', fontWeight: 500 }}>6 stories • {briefLength} min</span>
              </div>
              <Check size={16} color="var(--accent-emerald)" />
            </div>

            <div style={{ height: '1px', background: 'var(--border-subtle)' }} />

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <Bell size={18} color="var(--accent-purple-light)" />
                <span style={{ fontSize: '0.9rem', fontWeight: 500 }}>Daily at {deliveryTime} {period}</span>
              </div>
              <Check size={16} color="var(--accent-emerald)" />
            </div>
          </div>
        </div>

        {/* Start Listening Button */}
        <div style={{ paddingTop: '24px' }}>
          <button
            onClick={handleStartListening}
            className="btn-primary"
            style={{
              width: '100%',
              padding: '16px',
              background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
              boxShadow: '0 8px 25px -4px rgba(16, 185, 129, 0.5)'
            }}
          >
            <span>Start listening</span>
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    );
  }

  return (
    <div style={{
      minHeight: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      padding: '24px 20px',
      position: 'relative'
    }}>
      <div>
        {renderProgress()}

        {/* STEP 1: PROFESSION */}
        {step === 1 && (
          <div>
            <h1 style={{ fontSize: '1.75rem', fontWeight: 700, lineHeight: 1.25, marginBottom: '6px' }}>
              What's your <br />
              <span className="editorial-italic" style={{ color: 'var(--accent-purple-light)' }}>profession?</span>
            </h1>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', marginBottom: '24px' }}>
              We'll tailor every brief to what actually moves your day.
            </p>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '10px'
            }}>
              {PROFESSIONS.map((p) => {
                const Icon = p.icon;
                const isSelected = profession === p.id;
                return (
                  <div
                    key={p.id}
                    onClick={() => setProfession(p.id)}
                    style={{
                      padding: '14px 12px',
                      borderRadius: 'var(--radius-md)',
                      background: isSelected ? 'rgba(124, 92, 252, 0.14)' : 'var(--bg-card)',
                      border: isSelected ? '1.5px solid var(--accent-purple)' : '1px solid var(--border-subtle)',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      transition: 'all 0.2s ease',
                      boxShadow: isSelected ? '0 4px 16px rgba(124, 92, 252, 0.25)' : 'none'
                    }}
                  >
                    <Icon size={16} color={isSelected ? 'var(--accent-purple-light)' : 'var(--text-secondary)'} />
                    <span style={{ fontSize: '0.85rem', fontWeight: 500, color: isSelected ? '#fff' : 'var(--text-secondary)', flex: 1 }}>
                      {p.label}
                    </span>
                    {isSelected && <Check size={14} color="var(--accent-purple-light)" />}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* STEP 2: NICHES */}
        {step === 2 && (
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '6px' }}>
              <h1 style={{ fontSize: '1.75rem', fontWeight: 700, lineHeight: 1.25 }}>
                What moves <br />
                <span className="editorial-italic" style={{ color: 'var(--accent-purple-light)' }}>your world?</span>
              </h1>
              <span className="badge badge-purple" style={{ marginTop: '6px' }}>
                {niches.length}/3
              </span>
            </div>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', marginBottom: '24px' }}>
              Pick up to 3 niches to headline your morning briefings.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
              {NICHES.map((n) => {
                const isSelected = niches.includes(n);
                return (
                  <div
                    key={n}
                    onClick={() => toggleNiche(n)}
                    style={{
                      padding: '10px 16px',
                      borderRadius: 'var(--radius-full)',
                      background: isSelected ? 'rgba(124, 92, 252, 0.2)' : 'var(--bg-card)',
                      border: isSelected ? '1.5px solid var(--accent-purple)' : '1px solid var(--border-subtle)',
                      color: isSelected ? '#fff' : 'var(--text-secondary)',
                      fontSize: '0.85rem',
                      fontWeight: 500,
                      cursor: 'pointer',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      transition: 'all 0.2s ease',
                      boxShadow: isSelected ? '0 4px 14px rgba(124, 92, 252, 0.2)' : 'none'
                    }}
                  >
                    <span>{n}</span>
                    {isSelected && <Check size={14} color="var(--accent-purple-light)" />}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* STEP 3: VOICE & DURATION */}
        {step === 3 && (
          <div>
            <h1 style={{ fontSize: '1.75rem', fontWeight: 700, lineHeight: 1.25, marginBottom: '6px' }}>
              Pick a <br />
              <span className="editorial-italic" style={{ color: 'var(--accent-purple-light)' }}>narrator voice.</span>
            </h1>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', marginBottom: '20px' }}>
              Tap ▶ to hear a sample preview.
            </p>

            {/* Voice Cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '28px' }}>
              {VOICES.map((v) => {
                const isSelected = voice === v.id;
                const isPlaying = activeVoicePlaying === v.id;
                return (
                  <div
                    key={v.id}
                    onClick={() => setVoice(v.id)}
                    style={{
                      padding: '16px',
                      borderRadius: 'var(--radius-lg)',
                      background: isSelected ? 'rgba(124, 92, 252, 0.14)' : 'var(--bg-card)',
                      border: isSelected ? '1.5px solid var(--accent-purple)' : '1px solid var(--border-subtle)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                      boxShadow: isSelected ? '0 6px 20px rgba(124, 92, 252, 0.25)' : 'none'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                      <div style={{
                        width: '42px',
                        height: '42px',
                        borderRadius: '50%',
                        background: 'linear-gradient(135deg, #6366f1, #a855f7)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontWeight: 700,
                        color: '#fff',
                        fontSize: '1rem'
                      }}>
                        {v.name[0]}
                      </div>
                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <span style={{ fontWeight: 600, fontSize: '1rem', color: '#fff' }}>{v.name}</span>
                          {isSelected && <span className="badge badge-purple" style={{ fontSize: '0.65rem', padding: '2px 8px' }}>Selected</span>}
                        </div>
                        <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>{v.tagline}</div>
                      </div>
                    </div>

                    <button
                      onClick={(e) => handlePlaySample(e, v)}
                      style={{
                        width: '36px',
                        height: '36px',
                        borderRadius: '50%',
                        background: isPlaying ? 'var(--accent-purple)' : 'rgba(255, 255, 255, 0.08)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        color: '#fff',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer'
                      }}
                      title="Play preview"
                    >
                      {isPlaying ? <Square size={14} fill="#fff" /> : <Play size={14} fill="#fff" />}
                    </button>
                  </div>
                );
              })}
            </div>

            {/* Brief Duration */}
            <div>
              <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '6px' }}>
                BRIEF LENGTH
              </div>
              <div style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '12px' }}>
                How long is your morning?
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '8px' }}>
                {[5, 10, 15, 'Custom'].map((dur) => {
                  const isSelected = briefLength === dur || (dur === 'Custom' && briefLength > 15);
                  return (
                    <button
                      key={dur}
                      onClick={() => setBriefLength(typeof dur === 'number' ? dur : 10)}
                      style={{
                        padding: '10px 0',
                        borderRadius: 'var(--radius-md)',
                        background: isSelected ? 'rgba(124, 92, 252, 0.25)' : 'var(--bg-card)',
                        border: isSelected ? '1.5px solid var(--accent-purple)' : '1px solid var(--border-subtle)',
                        color: isSelected ? '#fff' : 'var(--text-secondary)',
                        fontSize: '0.82rem',
                        fontWeight: 600,
                        cursor: 'pointer'
                      }}
                    >
                      {typeof dur === 'number' ? `${dur} min` : dur}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* STEP 4: SCHEDULE */}
        {step === 4 && (
          <div>
            <h1 style={{ fontSize: '1.75rem', fontWeight: 700, lineHeight: 1.25, marginBottom: '6px' }}>
              When do you <br />
              <span className="editorial-italic" style={{ color: 'var(--accent-purple-light)' }}>want your brief?</span>
            </h1>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', marginBottom: '28px' }}>
              Nuzio will have your brief ready and waiting each morning.
            </p>

            {/* AM / PM Toggle */}
            <div style={{
              display: 'flex',
              background: 'var(--bg-card)',
              borderRadius: 'var(--radius-full)',
              padding: '4px',
              border: '1px solid var(--border-subtle)',
              marginBottom: '32px'
            }}>
              <button
                onClick={() => setPeriod('AM')}
                style={{
                  flex: 1,
                  padding: '10px',
                  borderRadius: 'var(--radius-full)',
                  background: period === 'AM' ? 'var(--accent-purple)' : 'transparent',
                  color: period === 'AM' ? '#fff' : 'var(--text-secondary)',
                  border: 'none',
                  fontWeight: 600,
                  fontSize: '0.9rem',
                  cursor: 'pointer'
                }}
              >
                AM
              </button>
              <button
                onClick={() => setPeriod('PM')}
                style={{
                  flex: 1,
                  padding: '10px',
                  borderRadius: 'var(--radius-full)',
                  background: period === 'PM' ? 'var(--accent-purple)' : 'transparent',
                  color: period === 'PM' ? '#fff' : 'var(--text-secondary)',
                  border: 'none',
                  fontWeight: 600,
                  fontSize: '0.9rem',
                  cursor: 'pointer'
                }}
              >
                PM
              </button>
            </div>

            {/* Wheel / Time Picker Highlight matching screenshot 7 */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '12px'
            }}>
              <div style={{ color: 'var(--text-muted)', fontSize: '1.2rem', opacity: 0.4 }}>6:00</div>
              <div style={{ color: 'var(--text-muted)', fontSize: '1.4rem', opacity: 0.65 }}>6:30</div>
              
              {/* Highlighted active time */}
              <div style={{
                width: '100%',
                padding: '16px',
                borderRadius: 'var(--radius-lg)',
                background: 'rgba(124, 92, 252, 0.15)',
                border: '1.5px solid var(--accent-purple)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                boxShadow: '0 0 25px rgba(124, 92, 252, 0.35)'
              }}>
                <span style={{ fontSize: '2.4rem', fontWeight: 800, color: '#fff', letterSpacing: '-0.03em' }}>
                  {deliveryTime}
                </span>
                <span style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--accent-purple-light)' }}>
                  {period}
                </span>
              </div>

              <div style={{ color: 'var(--text-muted)', fontSize: '1.4rem', opacity: 0.65 }}>7:30</div>
              <div style={{ color: 'var(--text-muted)', fontSize: '1.2rem', opacity: 0.4 }}>8:00</div>
            </div>
          </div>
        )}
      </div>

      {/* Navigation Footer */}
      <div style={{ paddingTop: '20px' }}>
        <button
          onClick={handleNext}
          className="btn-primary"
          style={{ width: '100%', padding: '16px' }}
        >
          <span>
            {step === 3
              ? `Continue with ${VOICES.find(v => v.id === voice)?.name} • 6 stories`
              : 'Continue'}
          </span>
          <ArrowRight size={18} />
        </button>
      </div>
    </div>
  );
};
