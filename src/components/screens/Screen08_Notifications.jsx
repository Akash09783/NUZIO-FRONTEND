import React from 'react';
import { NuzioLogo } from '../common/NuzioLogo';
import { Sun, Zap, Sparkles, Bell } from 'lucide-react';

export const Screen08_Notifications = ({ onNext }) => {
  return (
    <div style={{
      height: '100%',
      minHeight: '740px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      padding: '24px 20px',
      position: 'relative'
    }}>
      <div>
        {/* Header with SKIP */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '18px' }}>
          <div style={{ fontSize: '0.68rem', fontWeight: 800, color: 'var(--accent-purple-light)', letterSpacing: '0.08em' }}>
            STEP 4 OF 4
          </div>
          <button
            onClick={onNext}
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--text-muted)',
              fontSize: '0.75rem',
              fontWeight: 700,
              cursor: 'pointer'
            }}
          >
            SKIP
          </button>
        </div>

        {/* Title */}
        <h1 style={{
          fontSize: '1.95rem',
          fontWeight: 700,
          lineHeight: 1.2,
          letterSpacing: '-0.02em',
          marginBottom: '8px'
        }}>
          Stay in<br />
          <span className="editorial-serif-italic editorial-purple">the loop.</span>
        </h1>

        <p style={{
          color: 'var(--text-secondary)',
          fontSize: '0.85rem',
          marginBottom: '24px'
        }}>
          Turn on notifications so you never miss your brief.
        </p>

        {/* Notification Bubble Card matching Screenshot 8 */}
        <div style={{
          background: 'var(--bg-card)',
          border: '1px solid var(--border-hairline)',
          borderRadius: 'var(--radius-lg)',
          padding: '16px',
          marginBottom: '26px',
          boxShadow: '0 10px 25px rgba(0, 0, 0, 0.4)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{
                width: '20px',
                height: '20px',
                borderRadius: '6px',
                background: '#6d54ea',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <NuzioLogo size="small" showText={false} />
              </div>
              <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#fff' }}>Nuzio</span>
            </div>
            <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>now</span>
          </div>

          <div style={{ fontSize: '0.88rem', fontWeight: 700, color: '#fff', marginBottom: '4px' }}>
            🟡 Your morning brief is ready
          </div>
          <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', lineHeight: 1.4 }}>
            6 stories • AI & Tech, Markets, Startups • Voice: Aria • 15:30
          </div>
        </div>

        {/* WHAT YOU'LL RECEIVE section */}
        <div>
          <div style={{ fontSize: '0.68rem', fontWeight: 800, color: 'var(--text-muted)', letterSpacing: '0.08em', marginBottom: '14px', textTransform: 'uppercase' }}>
            WHAT YOU'LL RECEIVE
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {/* Item 1: Morning brief */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '12px 14px',
              borderRadius: 'var(--radius-md)',
              background: 'var(--bg-card)',
              border: '1px solid var(--border-hairline)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  background: 'rgba(16, 185, 129, 0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#10b981'
                }}>
                  <Sun size={16} />
                </div>
                <div>
                  <div style={{ fontWeight: 600, fontSize: '0.85rem', color: '#fff' }}>Morning brief ready</div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--text-secondary)' }}>Your daily audio briefing is waiting</div>
                </div>
              </div>
              <span style={{ fontSize: '0.68rem', color: '#10b981', fontWeight: 700 }}>Daily • 7:00 AM</span>
            </div>

            {/* Item 2: Breaking story */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '12px 14px',
              borderRadius: 'var(--radius-md)',
              background: 'var(--bg-card)',
              border: '1px solid var(--border-hairline)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  background: 'rgba(245, 158, 11, 0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#f59e0b'
                }}>
                  <Zap size={16} />
                </div>
                <div>
                  <div style={{ fontWeight: 600, fontSize: '0.85rem', color: '#fff' }}>Breaking story</div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--text-secondary)' }}>A major story just broke in your niches</div>
                </div>
              </div>
              <span style={{ fontSize: '0.68rem', color: '#f59e0b', fontWeight: 700 }}>When it happens</span>
            </div>

            {/* Item 3: Weekly digest */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '12px 14px',
              borderRadius: 'var(--radius-md)',
              background: 'var(--bg-card)',
              border: '1px solid var(--border-hairline)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  background: 'rgba(99, 102, 241, 0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#818cf8'
                }}>
                  <Sparkles size={16} />
                </div>
                <div>
                  <div style={{ fontWeight: 600, fontSize: '0.85rem', color: '#fff' }}>Weekly digest</div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--text-secondary)' }}>The most-saved stories from this week</div>
                </div>
              </div>
              <span style={{ fontSize: '0.68rem', color: '#818cf8', fontWeight: 700 }}>Sundays • 9:00 AM</span>
            </div>
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', paddingTop: '20px' }}>
        <button onClick={onNext} className="btn-purple-pill">
          <span>Allow notifications</span>
        </button>

        <button
          onClick={onNext}
          style={{
            background: 'none',
            border: 'none',
            color: 'var(--text-secondary)',
            fontSize: '0.82rem',
            padding: '8px',
            cursor: 'pointer'
          }}
        >
          Not now
        </button>
      </div>
    </div>
  );
};
