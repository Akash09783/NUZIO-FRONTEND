import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { Radio, Volume2, MapPin, Check, Sparkles, ArrowRight } from 'lucide-react';

export const AuthView = () => {
  const { login, setActiveView } = useAuth();
  const [subStep, setSubStep] = useState('welcome'); // 'welcome' | 'language'
  const [selectedLang, setSelectedLang] = useState('English');
  const [locationEnabled, setLocationEnabled] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleContinueWithGoogle = async () => {
    setIsSubmitting(true);
    await login({
      name: "Aarav Sharma",
      email: "aarav.sharma@example.com",
      language: selectedLang,
      locationEnabled
    });
    setIsSubmitting(false);
    // Proceed to onboarding flow
    setActiveView('onboarding');
  };

  const handleGuestQuickStart = async () => {
    await login({
      name: "Aarav",
      language: selectedLang
    });
    setActiveView('onboarding');
  };

  if (subStep === 'language') {
    return (
      <div style={{
        minHeight: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '24px 20px',
        position: 'relative'
      }}>
        {/* Top Header */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '36px' }}>
            <div style={{
              width: '32px',
              height: '32px',
              borderRadius: '8px',
              background: 'linear-gradient(135deg, #7c5cfc, #6366f1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#fff'
            }}>
              <Volume2 size={18} />
            </div>
            <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1.2rem', letterSpacing: '-0.02em' }}>
              Nuzio <span style={{ color: 'var(--accent-purple-light)', fontSize: '0.8em' }}>AI</span>
            </span>
          </div>

          <h1 style={{ fontSize: '1.75rem', fontWeight: 700, lineHeight: 1.25, marginBottom: '8px' }}>
            Choose your <br />
            <span className="editorial-italic" style={{ color: 'var(--accent-purple-light)' }}>language</span>
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '32px' }}>
            Select the language for your daily audio news brief.
          </p>

          {/* Language Options */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '24px' }}>
            {/* English Card */}
            <div
              onClick={() => setSelectedLang('English')}
              style={{
                padding: '18px 20px',
                borderRadius: 'var(--radius-lg)',
                background: selectedLang === 'English' ? 'rgba(124, 92, 252, 0.12)' : 'var(--bg-card)',
                border: selectedLang === 'English' ? '1.5px solid var(--accent-purple)' : '1px solid var(--border-subtle)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                boxShadow: selectedLang === 'English' ? '0 8px 25px -8px rgba(124, 92, 252, 0.35)' : 'none'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                <span style={{
                  padding: '4px 8px',
                  background: 'rgba(255, 255, 255, 0.08)',
                  borderRadius: '6px',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  color: '#fff'
                }}>GB</span>
                <div>
                  <div style={{ fontWeight: 600, fontSize: '1rem', color: '#fff' }}>English</div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Briefings delivered in English</div>
                </div>
              </div>

              <div style={{
                width: '22px',
                height: '22px',
                borderRadius: '50%',
                border: selectedLang === 'English' ? '6px solid var(--accent-purple)' : '2px solid var(--text-muted)',
                background: '#fff'
              }} />
            </div>

            {/* Hindi Card */}
            <div
              onClick={() => setSelectedLang('Hindi')}
              style={{
                padding: '18px 20px',
                borderRadius: 'var(--radius-lg)',
                background: selectedLang === 'Hindi' ? 'rgba(124, 92, 252, 0.12)' : 'var(--bg-card)',
                border: selectedLang === 'Hindi' ? '1.5px solid var(--accent-purple)' : '1px solid var(--border-subtle)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                <span style={{
                  padding: '4px 8px',
                  background: 'rgba(255, 255, 255, 0.08)',
                  borderRadius: '6px',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  color: '#fff'
                }}>IN</span>
                <div>
                  <div style={{ fontWeight: 600, fontSize: '1rem', color: '#fff' }}>हिन्दी</div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>हिंदी में समाचार सुनें</div>
                </div>
              </div>

              <div style={{
                width: '22px',
                height: '22px',
                borderRadius: '50%',
                border: selectedLang === 'Hindi' ? '6px solid var(--accent-purple)' : '2px solid var(--text-muted)',
                background: '#fff'
              }} />
            </div>
          </div>

          {/* Location Toggle */}
          <div style={{
            padding: '16px 20px',
            borderRadius: 'var(--radius-lg)',
            background: 'var(--bg-card)',
            border: '1px solid var(--border-subtle)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{
                width: '36px',
                height: '36px',
                borderRadius: '10px',
                background: 'rgba(239, 68, 68, 0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#f87171'
              }}>
                <MapPin size={18} />
              </div>
              <div>
                <div style={{ fontWeight: 600, fontSize: '0.95rem' }}>Enable Location</div>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-secondary)' }}>Get hyper-local news tailored to your city</div>
              </div>
            </div>

            <div
              onClick={() => setLocationEnabled(!locationEnabled)}
              style={{
                width: '46px',
                height: '26px',
                borderRadius: '999px',
                background: locationEnabled ? 'var(--accent-purple)' : 'rgba(255, 255, 255, 0.15)',
                position: 'relative',
                cursor: 'pointer',
                transition: 'background 0.2s ease'
              }}
            >
              <div style={{
                width: '20px',
                height: '20px',
                borderRadius: '50%',
                background: '#fff',
                position: 'absolute',
                top: '3px',
                left: locationEnabled ? '23px' : '3px',
                transition: 'left 0.2s cubic-bezier(0.2, 0.8, 0.2, 1)',
                boxShadow: '0 2px 4px rgba(0,0,0,0.3)'
              }} />
            </div>
          </div>
        </div>

        {/* Continue Button */}
        <div style={{ paddingTop: '24px' }}>
          <button
            onClick={() => setSubStep('welcome')}
            className="btn-primary"
            style={{ width: '100%', padding: '16px' }}
          >
            <span>Continue</span>
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    );
  }

  // SubStep: Welcome / Login screen (matches Screen 3 in prompt)
  return (
    <div style={{
      minHeight: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      padding: '24px 20px',
      position: 'relative'
    }}>
      {/* Top Logo */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{
            width: '34px',
            height: '34px',
            borderRadius: '10px',
            background: 'linear-gradient(135deg, #7c5cfc, #6366f1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fff',
            boxShadow: '0 4px 14px rgba(124, 92, 252, 0.4)'
          }}>
            <Volume2 size={20} />
          </div>
          <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '1.25rem', letterSpacing: '-0.02em' }}>
            Nuzio <span style={{ color: 'var(--accent-purple-light)' }}>AI</span>
          </span>
        </div>

        <button
          onClick={() => setSubStep('language')}
          style={{
            background: 'rgba(255, 255, 255, 0.08)',
            border: '1px solid var(--border-subtle)',
            color: 'var(--text-secondary)',
            fontSize: '0.8rem',
            padding: '6px 12px',
            borderRadius: '999px',
            cursor: 'pointer'
          }}
        >
          {selectedLang} • Edit
        </button>
      </div>

      {/* Center Hero Art & Title */}
      <div style={{ padding: '40px 0 20px 0' }}>
        <div style={{
          width: '72px',
          height: '72px',
          borderRadius: '24px',
          background: 'linear-gradient(135deg, rgba(124, 92, 252, 0.25), rgba(99, 102, 241, 0.1))',
          border: '1px solid rgba(124, 92, 252, 0.3)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '28px',
          boxShadow: '0 12px 30px rgba(124, 92, 252, 0.2)'
        }}>
          <Sparkles size={34} color="var(--accent-purple-light)" />
        </div>

        <h1 style={{
          fontSize: '2.4rem',
          fontWeight: 800,
          lineHeight: 1.15,
          letterSpacing: '-0.03em',
          marginBottom: '12px'
        }}>
          Good morning.<br />
          <span className="editorial-italic" style={{
            background: 'linear-gradient(135deg, #e2e8f0 0%, #a5b4fc 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            News on go.
          </span>
        </h1>

        <p style={{
          color: 'var(--text-secondary)',
          fontSize: '0.98rem',
          lineHeight: 1.6,
          maxWidth: '340px'
        }}>
          Personalized audio news for modern professionals — curated every morning in under 10 minutes.
        </p>
      </div>

      {/* Action Buttons */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', paddingTop: '20px' }}>
        {/* Google SSO Button */}
        <button
          onClick={handleContinueWithGoogle}
          disabled={isSubmitting}
          style={{
            width: '100%',
            padding: '16px',
            borderRadius: 'var(--radius-full)',
            background: '#ffffff',
            color: '#111827',
            border: 'none',
            fontFamily: 'var(--font-heading)',
            fontWeight: 600,
            fontSize: '0.95rem',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '12px',
            boxShadow: '0 4px 20px rgba(255, 255, 255, 0.15)',
            transition: 'transform 0.2s ease'
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
        >
          {/* Google G SVG */}
          <svg width="18" height="18" viewBox="0 0 24 24">
            <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z"/>
            <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.26v3.15C3.27 21.37 7.35 24 12 24z"/>
            <path fill="#FBBC05" d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.26C.46 8.16 0 9.94 0 12s.46 3.84 1.26 5.42l4.02-3.15z"/>
            <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.35 0 3.27 2.63 1.26 6.58l4.02 3.15c.95-2.83 3.6-4.98 6.72-4.98z"/>
          </svg>
          <span>{isSubmitting ? 'Authenticating...' : 'Continue with Google'}</span>
        </button>

        {/* Instant Guest Demo Button */}
        <button
          onClick={handleGuestQuickStart}
          className="btn-secondary"
          style={{ width: '100%', padding: '14px' }}
        >
          <span>Quick Demo Access (Aarav)</span>
          <ArrowRight size={16} />
        </button>

        <p style={{
          textAlign: 'center',
          fontSize: '0.72rem',
          color: 'var(--text-muted)',
          marginTop: '6px'
        }}>
          By continuing you agree to our <a href="#terms" style={{ color: 'var(--text-secondary)', textDecoration: 'underline' }}>Terms</a> & <a href="#privacy" style={{ color: 'var(--text-secondary)', textDecoration: 'underline' }}>Privacy Policy</a>.
        </p>
      </div>
    </div>
  );
};
