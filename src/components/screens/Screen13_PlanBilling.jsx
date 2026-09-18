import React from 'react';
import { NuzioLogo } from '../common/NuzioLogo';
import { Search, ArrowLeft } from 'lucide-react';

export const Screen13_PlanBilling = ({ onBack }) => {
  return (
    <div style={{
      height: '100%',
      minHeight: '740px',
      display: 'flex',
      flexDirection: 'column',
      padding: '16px 18px 40px 18px',
      position: 'relative'
    }}>
      {/* Top Bar */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: '16px'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          {onBack && (
            <button
              onClick={onBack}
              style={{
                background: 'none',
                border: 'none',
                color: '#fff',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                padding: '4px'
              }}
            >
              <ArrowLeft size={18} />
            </button>
          )}
          <NuzioLogo size="small" />
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <Search size={18} color="#fff" />
          <div style={{
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
            color: '#fff'
          }}>
            A
          </div>
        </div>
      </div>

      {/* Header Title */}
      <div style={{ marginBottom: '20px' }}>
        <h1 style={{ fontSize: '1.75rem', fontWeight: 800, letterSpacing: '-0.02em', marginBottom: '4px' }}>
          Plan & billing
        </h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.82rem' }}>
          Start free. Upgrade when mornings pay for themselves.
        </p>
      </div>

      {/* Tiers List matching Screenshot 13 */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {/* Tier 1: Free */}
        <div style={{
          background: 'var(--bg-card)',
          borderRadius: 'var(--radius-lg)',
          border: '1px solid var(--border-hairline)',
          padding: '18px 20px'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
            <span style={{ fontSize: '1.05rem', fontWeight: 700, color: '#fff' }}>Free</span>
            <span style={{ fontSize: '1.35rem', fontWeight: 800, color: '#fff' }}>₹0<span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>/mo</span></span>
          </div>

          <p style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', lineHeight: 1.45, marginBottom: '16px' }}>
            5 article summaries per niche daily. Ad supported. Push notifications.
          </p>

          <button
            disabled
            style={{
              width: '100%',
              padding: '12px',
              borderRadius: 'var(--radius-full)',
              background: '#181a24',
              border: '1px solid var(--border-hairline)',
              color: 'var(--text-muted)',
              fontWeight: 600,
              fontSize: '0.85rem',
              cursor: 'default'
            }}
          >
            Current plan
          </button>
        </div>

        {/* Tier 2: Pro (Highlighted with Green outline) */}
        <div style={{
          background: 'radial-gradient(ellipse at top, #14211d 0%, #0d1413 100%)',
          borderRadius: 'var(--radius-lg)',
          border: '1.5px solid #10b981',
          padding: '18px 20px',
          boxShadow: '0 8px 30px rgba(16, 185, 129, 0.25)'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ fontSize: '1.15rem', fontWeight: 800, color: '#fff' }}>Pro</span>
              <span style={{
                fontSize: '0.62rem',
                fontWeight: 800,
                textTransform: 'uppercase',
                background: '#10b981',
                color: '#000',
                padding: '2px 8px',
                borderRadius: '999px',
                letterSpacing: '0.05em'
              }}>
                LAUNCH OFFER
              </span>
            </div>
            <span style={{ fontSize: '1.45rem', fontWeight: 800, color: '#10b981' }}>₹79<span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>/mo</span></span>
          </div>

          <p style={{ fontSize: '0.8rem', color: '#cbd5e1', lineHeight: 1.45, marginBottom: '16px' }}>
            Unlimited custom briefings, premium AI voices, multi-language support.
          </p>

          <button
            onClick={() => alert("Upgraded to Pro! Enjoy unlimited briefings.")}
            className="btn-cyan-emerald-pill"
            style={{ padding: '14px', fontSize: '0.92rem' }}
          >
            Upgrade to Pro
          </button>
        </div>

        {/* Tier 3: Pro Annual */}
        <div style={{
          background: 'var(--bg-card)',
          borderRadius: 'var(--radius-lg)',
          border: '1px solid var(--border-hairline)',
          padding: '18px 20px'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
            <span style={{ fontSize: '1.05rem', fontWeight: 700, color: '#fff' }}>Pro Annual</span>
            <span style={{ fontSize: '1.35rem', fontWeight: 800, color: '#fff' }}>₹1,499<span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>/yr</span></span>
          </div>

          <p style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', lineHeight: 1.45 }}>
            All Pro benefits, offline mode, priority features. Locks in lifetime rate.
          </p>
        </div>
      </div>
    </div>
  );
};
