import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { ArrowLeft, User, Bookmark, CreditCard, Moon, Sun, DownloadCloud, PlayCircle, Bell, Check, Sparkles, ShieldCheck } from 'lucide-react';

export const SettingsView = () => {
  const { user, updatePreferences, logout, setActiveView } = useAuth();
  const [subView, setSubView] = useState('settings'); // 'settings' | 'billing'
  const [theme, setTheme] = useState('dark');
  const [offlineMode, setOfflineMode] = useState(false);
  const [autoAdvance, setAutoAdvance] = useState(true);
  const [pushNotif, setPushNotif] = useState(true);

  if (subView === 'billing') {
    return (
      <div style={{
        minHeight: '100%',
        display: 'flex',
        flexDirection: 'column',
        padding: '20px 16px 80px 16px',
        position: 'relative'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px' }}>
          <button
            onClick={() => setSubView('settings')}
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
            Membership
          </span>
          <div style={{ width: '36px' }} />
        </div>

        <h1 style={{ fontSize: '1.75rem', fontWeight: 800, marginBottom: '4px' }}>
          Plan & billing
        </h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', marginBottom: '24px' }}>
          Start free. Upgrade when mornings pay for themselves.
        </p>

        {/* Pricing Tiers */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {/* Free Tier */}
          <div style={{
            background: 'var(--bg-card)',
            border: '1px solid var(--border-subtle)',
            borderRadius: 'var(--radius-lg)',
            padding: '20px'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
              <span style={{ fontSize: '1rem', fontWeight: 700 }}>Free</span>
              <span style={{ fontSize: '1.3rem', fontWeight: 800 }}>₹0<span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>/mo</span></span>
            </div>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '16px' }}>
              5 article summaries per niche daily. Ad-supported. Push notifications.
            </p>
            <button
              disabled
              style={{
                width: '100%',
                padding: '12px',
                borderRadius: 'var(--radius-full)',
                background: 'rgba(255, 255, 255, 0.06)',
                border: '1px solid var(--border-subtle)',
                color: 'var(--text-muted)',
                fontWeight: 600,
                fontSize: '0.85rem'
              }}
            >
              Current plan
            </button>
          </div>

          {/* Pro Tier (Highlighted) */}
          <div style={{
            background: 'radial-gradient(ellipse at top, #1c2626 0%, #111a18 100%)',
            border: '1.5px solid #10b981',
            borderRadius: 'var(--radius-lg)',
            padding: '20px',
            boxShadow: '0 8px 30px -5px rgba(16, 185, 129, 0.25)'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ fontSize: '1.1rem', fontWeight: 800, color: '#fff' }}>Pro</span>
                <span style={{
                  fontSize: '0.65rem',
                  fontWeight: 800,
                  textTransform: 'uppercase',
                  background: '#10b981',
                  color: '#000',
                  padding: '2px 8px',
                  borderRadius: '999px'
                }}>LAUNCH OFFER</span>
              </div>
              <span style={{ fontSize: '1.4rem', fontWeight: 800, color: '#10b981' }}>₹79<span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>/mo</span></span>
            </div>

            <p style={{ fontSize: '0.82rem', color: '#cbd5e1', marginBottom: '16px' }}>
              Unlimited custom briefings, premium AI narrator voices, multi-language support & zero ads.
            </p>

            <button
              onClick={() => alert("Upgraded to Pro! Enjoy unlimited briefings.")}
              className="btn-primary"
              style={{
                width: '100%',
                padding: '14px',
                background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                boxShadow: '0 4px 20px rgba(16, 185, 129, 0.4)'
              }}
            >
              <Sparkles size={16} />
              <span>Upgrade to Pro</span>
            </button>
          </div>

          {/* Annual Tier */}
          <div style={{
            background: 'var(--bg-card)',
            border: '1px solid var(--border-subtle)',
            borderRadius: 'var(--radius-lg)',
            padding: '20px'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
              <span style={{ fontSize: '1rem', fontWeight: 700 }}>Pro Annual</span>
              <span style={{ fontSize: '1.3rem', fontWeight: 800 }}>₹1,499<span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>/yr</span></span>
            </div>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
              All Pro benefits, offline mode, priority features. Saves 35% compared to monthly.
            </p>
          </div>
        </div>
      </div>
    );
  }

  // Main Settings Screen
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
          Preferences
        </span>

        <div style={{ width: '36px' }} />
      </div>

      <div style={{ marginBottom: '20px' }}>
        <h1 style={{ fontSize: '1.75rem', fontWeight: 800, marginBottom: '4px' }}>
          Settings
        </h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>
          Tune your morning audio experience.
        </p>
      </div>

      {/* Profile Card (Screenshot 12) */}
      <div style={{
        background: 'var(--bg-card)',
        borderRadius: 'var(--radius-lg)',
        border: '1px solid var(--border-subtle)',
        padding: '16px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: '16px'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          <div style={{
            width: '44px',
            height: '44px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #7c5cfc, #6366f1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: 800,
            fontSize: '1.1rem',
            color: '#fff'
          }}>
            {user.name ? user.name[0] : 'A'}
          </div>
          <div>
            <div style={{ fontWeight: 700, fontSize: '1rem' }}>{user.name || 'Aarav Sharma'}</div>
            <div style={{ fontSize: '0.78rem', color: 'var(--text-secondary)' }}>
              {user.profession || 'Technology'} • Mumbai, India
            </div>
          </div>
        </div>

        <button
          onClick={() => setActiveView('onboarding')}
          style={{
            background: 'none',
            border: 'none',
            color: 'var(--accent-purple-light)',
            fontSize: '0.8rem',
            fontWeight: 600,
            cursor: 'pointer'
          }}
        >
          Edit
        </button>
      </div>

      {/* Nav List */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '24px' }}>
        {/* Saved Stories */}
        <div style={{
          background: 'var(--bg-card)',
          borderRadius: 'var(--radius-md)',
          border: '1px solid var(--border-subtle)',
          padding: '14px 16px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          cursor: 'pointer'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <Bookmark size={18} color="var(--accent-purple-light)" />
            <div>
              <div style={{ fontWeight: 600, fontSize: '0.9rem' }}>Saved stories</div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>3 saved</div>
            </div>
          </div>
        </div>

        {/* Plan & Billing */}
        <div
          onClick={() => setSubView('billing')}
          style={{
            background: 'var(--bg-card)',
            borderRadius: 'var(--radius-md)',
            border: '1px solid var(--border-subtle)',
            padding: '14px 16px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            cursor: 'pointer'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <CreditCard size={18} color="var(--accent-purple-light)" />
            <div>
              <div style={{ fontWeight: 600, fontSize: '0.9rem' }}>Plan & billing</div>
              <div style={{ fontSize: '0.75rem', color: 'var(--accent-emerald)' }}>Free — upgrade for unlimited</div>
            </div>
          </div>
          <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Free ›</span>
        </div>
      </div>

      {/* Appearance & Toggles */}
      <div style={{ fontSize: '0.72rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '10px' }}>
        APPEARANCE & PLAYBACK
      </div>

      <div style={{
        background: 'var(--bg-card)',
        borderRadius: 'var(--radius-lg)',
        border: '1px solid var(--border-subtle)',
        padding: '14px 16px',
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        marginBottom: '28px'
      }}>
        {/* Dark / Light Toggle */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span style={{ fontSize: '0.9rem', fontWeight: 500 }}>Theme</span>
          <div style={{ display: 'flex', background: 'rgba(255, 255, 255, 0.08)', borderRadius: '999px', padding: '3px' }}>
            <button
              onClick={() => setTheme('dark')}
              style={{
                background: theme === 'dark' ? 'var(--accent-purple)' : 'transparent',
                border: 'none',
                color: '#fff',
                padding: '4px 12px',
                borderRadius: '999px',
                fontSize: '0.75rem',
                fontWeight: 600,
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                cursor: 'pointer'
              }}
            >
              <Moon size={12} /> Dark
            </button>
            <button
              onClick={() => setTheme('light')}
              style={{
                background: theme === 'light' ? 'var(--accent-purple)' : 'transparent',
                border: 'none',
                color: theme === 'light' ? '#fff' : 'var(--text-muted)',
                padding: '4px 12px',
                borderRadius: '999px',
                fontSize: '0.75rem',
                fontWeight: 600,
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                cursor: 'pointer'
              }}
            >
              <Sun size={12} /> Light
            </button>
          </div>
        </div>

        <div style={{ height: '1px', background: 'var(--border-subtle)' }} />

        {/* Offline Mode Toggle */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div>
            <div style={{ fontSize: '0.9rem', fontWeight: 500 }}>Offline mode</div>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>Download briefs for the commute</div>
          </div>
          <input
            type="checkbox"
            checked={offlineMode}
            onChange={() => setOfflineMode(!offlineMode)}
            style={{ width: '18px', height: '18px', accentColor: 'var(--accent-purple)', cursor: 'pointer' }}
          />
        </div>

        <div style={{ height: '1px', background: 'var(--border-subtle)' }} />

        {/* Auto Advance Toggle */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div>
            <div style={{ fontSize: '0.9rem', fontWeight: 500 }}>Auto-advance</div>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>Play the next story automatically</div>
          </div>
          <input
            type="checkbox"
            checked={autoAdvance}
            onChange={() => setAutoAdvance(!autoAdvance)}
            style={{ width: '18px', height: '18px', accentColor: 'var(--accent-purple)', cursor: 'pointer' }}
          />
        </div>

        <div style={{ height: '1px', background: 'var(--border-subtle)' }} />

        {/* Push Notifications Toggle */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div>
            <div style={{ fontSize: '0.9rem', fontWeight: 500 }}>Push notifications</div>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>Brief drops & breaking news</div>
          </div>
          <input
            type="checkbox"
            checked={pushNotif}
            onChange={() => setPushNotif(!pushNotif)}
            style={{ width: '18px', height: '18px', accentColor: 'var(--accent-purple)', cursor: 'pointer' }}
          />
        </div>
      </div>

      {/* Logout button */}
      <button
        onClick={logout}
        style={{
          background: 'rgba(239, 68, 68, 0.1)',
          border: '1px solid rgba(239, 68, 68, 0.25)',
          color: '#f87171',
          padding: '12px',
          borderRadius: 'var(--radius-full)',
          fontSize: '0.85rem',
          fontWeight: 600,
          cursor: 'pointer'
        }}
      >
        Sign Out
      </button>
    </div>
  );
};
