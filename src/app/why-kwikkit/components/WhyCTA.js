'use client';
import { useEffect, useRef } from 'react';

export default function WhyCTA() {
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      e => e.forEach(en => en.isIntersecting && en.target.classList.add('visible')),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll('.reveal,.reveal-left,.reveal-right').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} style={{ background: 'var(--green-dark)', padding: '80px 0', position: 'relative', overflow: 'hidden', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
      {/* Background decorations */}
      <div style={{ position: 'absolute', bottom: '-40px', left: '10%', width: '300px', height: '150px', background: 'radial-gradient(ellipse, rgba(0,155,141,0.14) 0%, transparent 70%)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)', backgroundSize: '40px 40px', pointerEvents: 'none' }} />

      <div className="section-wrap">
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '40px',
          flexWrap: 'wrap',
        }} className="cta-container">
          
          {/* Left: Copy */}
          <div className="reveal-left" style={{ flex: '1 1 500px' }}>
            <h2 className="heading-display heading-md" style={{ color: 'var(--cream)', marginBottom: '14px' }}>
              See the difference for yourself.<br />
              <span className="shimmer-text">Zero hidden charges.</span>
            </h2>
            <p style={{ fontSize: '15px', lineHeight: '1.65', color: 'rgba(253, 248, 242, 0.65)', maxWidth: '520px' }}>
              Download Kwikkit and experience food delivery without hidden fees, inflated prices, or surprise charges.
            </p>
          </div>

          {/* Right: Store Buttons */}
          <div className="reveal-right" style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', alignItems: 'center' }}>
            {/* App Store button */}
            <a href="https://apps.apple.com/in/app/kwikkit-food-delivery/id6759088912" target="_blank" rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '12px',
                background: 'var(--yellow)',
                color: 'var(--green-dark)',
                padding: '14px 26px',
                borderRadius: '16px',
                fontWeight: '700',
                fontSize: '14px',
                textDecoration: 'none',
                transition: 'transform 0.3s cubic-bezier(.34,1.56,.64,1), box-shadow 0.3s ease',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 12px 32px rgba(255,229,0,0.35)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = '';
                e.currentTarget.style.boxShadow = '';
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98l-.09.06c-.22.14-2.22 1.3-2.2 3.88.03 3.02 2.65 4.03 2.68 4.04l-.03.1zM13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              App Store
            </a>

            {/* Google Play button */}
            <a href="https://play.google.com/store/apps/details?id=com.kwikkitcustomer.kwikkitcustomerapp" target="_blank" rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '12px',
                background: 'rgba(255,255,255,0.06)',
                color: 'var(--cream)',
                border: '1px solid rgba(255,255,255,0.18)',
                padding: '14px 26px',
                borderRadius: '16px',
                fontWeight: '700',
                fontSize: '14px',
                textDecoration: 'none',
                transition: 'background 0.3s ease, transform 0.3s cubic-bezier(.34,1.56,.64,1)',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.14)';
                e.currentTarget.style.transform = 'translateY(-4px)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.06)';
                e.currentTarget.style.transform = '';
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3.18 23.76c.3.17.65.19.98.07L14.94 12 3.16.17C2.83.05 2.48.07 2.18.24 1.6.57 1.25 1.2 1.25 1.93v20.14c0 .73.35 1.36.93 1.69zM16.34 13.19l2.69 2.69-9.14 5.08 6.45-7.77zM20.7 9.99l-2.26-1.26-3.1 3.1 3.1 3.1 2.28-1.27c.65-.36 1.04-.97 1.04-1.67s-.39-1.29-1.06-1.9zM9.89 12L3.44 3.04l9.14 5.08-2.69 2.69V12z" />
              </svg>
              Google Play
            </a>
          </div>

        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .cta-container {
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 28px !important;
          }
        }
      `}</style>
    </section>
  );
}
