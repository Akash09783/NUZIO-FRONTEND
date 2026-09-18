import React from 'react';
import { Check, ArrowRight, Briefcase, TrendingUp, Volume2, Clock, Calendar } from 'lucide-react';

export const Screen09_Ready = ({ onNext }) => {
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
        {/* ALL SET Top Indicator */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          color: '#10b981',
          fontSize: '0.78rem',
          fontWeight: 800,
          letterSpacing: '0.08em',
          marginBottom: '20px'
        }}>
          <Check size={14} strokeWidth={3} />
          <span>ALL SET</span>
        </div>

        {/* Center Emerald Ring & Header */}
        <div style={{ textAlign: 'center', margin: '10px 0 24px 0' }}>
          <div style={{
            width: '74px',
            height: '74px',
            borderRadius: '50%',
            margin: '0 auto 16px auto',
            background: 'radial-gradient(circle, rgba(16, 185, 129, 0.25) 0%, rgba(16, 185, 129, 0.05) 70%)',
            border: '2px solid rgba(16, 185, 129, 0.6)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 0 28px rgba(16, 185, 129, 0.35)'
          }}>
            <Check size={36} color="#10b981" strokeWidth={2.8} />
          </div>

          <h1 style={{ fontSize: '2.1rem', fontWeight: 700, lineHeight: 1.15, marginBottom: '6px' }}>
            You're ready,<br />
            <span className="editorial-serif-italic editorial-green">
              Aarav.
            </span>
          </h1>

          <p style={{
            color: 'var(--text-secondary)',
            fontSize: '0.85rem',
            lineHeight: 1.45,
            maxWidth: '280px',
            margin: '0 auto'
          }}>
            Your first brief will be ready tomorrow at 7:00 AM. We're already curating.
          </p>
        </div>

        {/* Brief Profile Card matching Screenshot 9 */}
        <div style={{
          background: 'var(--bg-card)',
          borderRadius: 'var(--radius-lg)',
          border: '1px solid var(--border-hairline)',
          padding: '16px 18px',
          display: 'flex',
          flexDirection: 'column',
          gap: '12px'
        }}>
          <div style={{ fontSize: '0.65rem', fontWeight: 800, color: 'var(--text-muted)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
            YOUR BRIEF PROFILE
          </div>

          {/* Row 1: Profession */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ width: '28px', height: '28px', borderRadius: '8px', background: 'rgba(255, 255, 255, 0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#9da3b2' }}>
                <Briefcase size={14} />
              </div>
              <div>
                <div style={{ fontSize: '0.65rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>PROFESSION</div>
                <div style={{ fontSize: '0.85rem', fontWeight: 600, color: '#fff' }}>Technology</div>
              </div>
            </div>
            <Check size={16} color="#10b981" strokeWidth={2.5} />
          </div>

          {/* Row 2: Niches */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ width: '28px', height: '28px', borderRadius: '8px', background: 'rgba(255, 255, 255, 0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#9da3b2' }}>
                <TrendingUp size={14} />
              </div>
              <div>
                <div style={{ fontSize: '0.65rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>NICHES</div>
                <div style={{ fontSize: '0.85rem', fontWeight: 600, color: '#fff' }}>AI, Markets, Startups +1</div>
              </div>
            </div>
            <Check size={16} color="#10b981" strokeWidth={2.5} />
          </div>

          {/* Row 3: Voice */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ width: '28px', height: '28px', borderRadius: '8px', background: 'rgba(255, 255, 255, 0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#9da3b2' }}>
                <Volume2 size={14} />
              </div>
              <div>
                <div style={{ fontSize: '0.65rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>VOICE</div>
                <div style={{ fontSize: '0.85rem', fontWeight: 600, color: '#fff' }}>Aria — British, warm</div>
              </div>
            </div>
            <Check size={16} color="#10b981" strokeWidth={2.5} />
          </div>

          {/* Row 4: Length */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ width: '28px', height: '28px', borderRadius: '8px', background: 'rgba(255, 255, 255, 0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#9da3b2' }}>
                <Clock size={14} />
              </div>
              <div>
                <div style={{ fontSize: '0.65rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>LENGTH</div>
                <div style={{ fontSize: '0.85rem', fontWeight: 600, color: '#fff' }}>6 stories • ~15 min</div>
              </div>
            </div>
            <Check size={16} color="#10b981" strokeWidth={2.5} />
          </div>

          {/* Row 5: Delivery */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ width: '28px', height: '28px', borderRadius: '8px', background: 'rgba(255, 255, 255, 0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#9da3b2' }}>
                <Calendar size={14} />
              </div>
              <div>
                <div style={{ fontSize: '0.65rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>DELIVERY</div>
                <div style={{ fontSize: '0.85rem', fontWeight: 600, color: '#fff' }}>Daily at 7:00 AM</div>
              </div>
            </div>
            <Check size={16} color="#10b981" strokeWidth={2.5} />
          </div>
        </div>
      </div>

      {/* Start Listening Button */}
      <div style={{ paddingTop: '20px' }}>
        <button
          onClick={onNext}
          className="btn-cyan-emerald-pill"
        >
          <span>Start listening</span>
          <ArrowRight size={18} />
        </button>
      </div>
    </div>
  );
};
