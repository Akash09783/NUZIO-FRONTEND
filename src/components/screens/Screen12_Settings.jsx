import React, { useState } from 'react';
import { NuzioLogo } from '../common/NuzioLogo';
import { BottomFloatingNav } from '../common/BottomFloatingNav';
import { Bookmark, CreditCard, Moon, Sun, ChevronRight } from 'lucide-react';

export const Screen12_Settings = ({ onOpenBilling, onEditProfile, onNavigate }) => {
  const [theme, setTheme] = useState('dark');
  const [offline, setOffline] = useState(false);
  const [autoAdvance, setAutoAdvance] = useState(true);
  const [pushNotif, setPushNotif] = useState(true);

  return (
    <div style={{
      height: '100%',
      minHeight: '740px',
      display: 'flex',
      flexDirection: 'column',
      padding: '16px 18px 90px 18px',
      position: 'relative'
    }}>
      {/* Top Header */}
      <div style={{ marginBottom: '16px' }}>
        <NuzioLogo size="small" />
      </div>

      <div style={{ marginBottom: '18px' }}>
        <h1 style={{ fontSize: '1.75rem', fontWeight: 800, letterSpacing: '-0.02em', marginBottom: '4px' }}>
          Settings
        </h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>
          Tune your morning.
        </p>
      </div>

      {/* Profile Card matching Screenshot 12 */}
      <div style={{
        background: 'var(--bg-card)',
        borderRadius: 'var(--radius-lg)',
        border: '1px solid var(--border-hairline)',
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
            A
          </div>
          <div>
            <div style={{ fontWeight: 700, fontSize: '0.98rem', color: '#fff' }}>Aarav Sharma</div>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
              Technology • Mumbai, India
            </div>
          </div>
        </div>

        <button
          onClick={onEditProfile}
          style={{
            background: 'none',
            border: 'none',
            color: '#9d87ff',
            fontSize: '0.78rem',
            fontWeight: 600,
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '2px'
          }}
        >
          <span>Edit</span>
          <ChevronRight size={14} />
        </button>
      </div>

      {/* Nav List */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '24px' }}>
        {/* Saved Stories */}
        <div style={{
          background: 'var(--bg-card)',
          borderRadius: 'var(--radius-md)',
          border: '1px solid var(--border-hairline)',
          padding: '14px 16px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          cursor: 'pointer'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <Bookmark size={18} color="#9d87ff" />
            <div>
              <div style={{ fontWeight: 600, fontSize: '0.88rem', color: '#fff' }}>Saved stories</div>
              <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>3 saved</div>
            </div>
          </div>
        </div>

        {/* Plan & Billing Card */}
        <div
          onClick={onOpenBilling}
          style={{
            background: 'var(--bg-card)',
            borderRadius: 'var(--radius-md)',
            border: '1px solid var(--border-hairline)',
            padding: '14px 16px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            cursor: 'pointer'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <CreditCard size={18} color="#f59e0b" />
            <div>
              <div style={{ fontWeight: 600, fontSize: '0.88rem', color: '#fff' }}>Plan & billing</div>
              <div style={{ fontSize: '0.72rem', color: '#10b981' }}>Free — upgrade for unlimited</div>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: 'var(--text-muted)', fontSize: '0.78rem' }}>
            <span>Free</span>
            <ChevronRight size={14} />
          </div>
        </div>
      </div>

      {/* APPEARANCE section */}
      <div>
        <div style={{ fontSize: '0.68rem', fontWeight: 800, color: 'var(--text-muted)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '10px' }}>
          APPEARANCE
        </div>

        <div style={{
          background: 'var(--bg-card)',
          borderRadius: 'var(--radius-lg)',
          border: '1px solid var(--border-hairline)',
          padding: '16px',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px'
        }}>
          {/* Theme Selector */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', background: '#0e1017', borderRadius: '999px', padding: '3px', width: '100%' }}>
              <button
                onClick={() => setTheme('dark')}
                style={{
                  flex: 1,
                  padding: '8px',
                  borderRadius: '999px',
                  background: theme === 'dark' ? '#6d54ea' : 'transparent',
                  border: 'none',
                  color: '#fff',
                  fontWeight: 600,
                  fontSize: '0.8rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '6px',
                  cursor: 'pointer',
                  boxShadow: theme === 'dark' ? '0 2px 10px rgba(109, 84, 234, 0.4)' : 'none'
                }}
              >
                <Moon size={14} />
                <span>Dark</span>
              </button>

              <button
                onClick={() => setTheme('light')}
                style={{
                  flex: 1,
                  padding: '8px',
                  borderRadius: '999px',
                  background: theme === 'light' ? '#6d54ea' : 'transparent',
                  border: 'none',
                  color: theme === 'light' ? '#fff' : 'var(--text-muted)',
                  fontWeight: 600,
                  fontSize: '0.8rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '6px',
                  cursor: 'pointer'
                }}
              >
                <Sun size={14} />
                <span>Light</span>
              </button>
            </div>
          </div>

          <div style={{ height: '1px', background: 'var(--border-hairline)' }} />

          {/* Offline Mode */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div>
              <div style={{ fontSize: '0.88rem', fontWeight: 600, color: '#fff' }}>Offline mode</div>
              <div style={{ fontSize: '0.72rem', color: 'var(--text-secondary)' }}>Download briefs for the commute</div>
            </div>
            <label className="ios-switch">
              <input type="checkbox" checked={offline} onChange={() => setOffline(!offline)} />
              <span className="ios-slider"></span>
            </label>
          </div>

          <div style={{ height: '1px', background: 'var(--border-hairline)' }} />

          {/* Auto Advance */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div>
              <div style={{ fontSize: '0.88rem', fontWeight: 600, color: '#fff' }}>Auto-advance</div>
              <div style={{ fontSize: '0.72rem', color: 'var(--text-secondary)' }}>Play the next story automatically</div>
            </div>
            <label className="ios-switch">
              <input type="checkbox" checked={autoAdvance} onChange={() => setAutoAdvance(!autoAdvance)} />
              <span className="ios-slider"></span>
            </label>
          </div>

          <div style={{ height: '1px', background: 'var(--border-hairline)' }} />

          {/* Push notifications */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div>
              <div style={{ fontSize: '0.88rem', fontWeight: 600, color: '#fff' }}>Push notifications</div>
              <div style={{ fontSize: '0.72rem', color: 'var(--text-secondary)' }}>Brief drops & breaking news</div>
            </div>
            <label className="ios-switch">
              <input type="checkbox" checked={pushNotif} onChange={() => setPushNotif(!pushNotif)} />
              <span className="ios-slider"></span>
            </label>
          </div>
        </div>
      </div>

      {/* Bottom Floating Nav Bar */}
      <BottomFloatingNav currentScreen="settings" onNavigate={onNavigate} />
    </div>
  );
};
