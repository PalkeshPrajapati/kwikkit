'use client';
import { useEffect, useRef } from 'react';
import Image from 'next/image';

export default function HowCTA() {
  const ref = useRef(null);
  useEffect(() => {
    const obs = new IntersectionObserver(
      e => e.forEach(en => en.isIntersecting && en.target.classList.add('visible')),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll('.reveal').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} style={{ background: 'var(--dark)', padding: '110px 0', position: 'relative', overflow: 'hidden' }}>

      {/* BG orb */}
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: '800px', height: '800px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(0,95,87,0.1) 0%, transparent 65%)', pointerEvents: 'none' }} />

      <div className="section-wrap">

        {/* ── CTA Card ── */}
        <div className="reveal" style={{
          background: 'var(--green-dark)',
          borderRadius: '36px',
          padding: 'clamp(48px,6vw,88px) clamp(28px,5vw,72px)',
          position: 'relative', overflow: 'hidden',
          textAlign: 'center',
          marginBottom: '64px',
        }}>
          {/* Card orbs */}
          <div style={{ position: 'absolute', top: '-80px', right: '-80px', width: '320px', height: '320px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,229,0,0.1) 0%, transparent 65%)', pointerEvents: 'none' }} />
          <div style={{ position: 'absolute', bottom: '-80px', left: '-80px', width: '320px', height: '320px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(0,122,110,0.3) 0%, transparent 65%)', pointerEvents: 'none' }} />
          {/* grid */}
          <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)', backgroundSize: '48px 48px', pointerEvents: 'none' }} />

          <div style={{ position: 'relative', zIndex: 1 }}>
            <span style={{ display: 'inline-block', background: 'rgba(255,229,0,0.12)', border: '1px solid rgba(255,229,0,0.25)', borderRadius: '100px', padding: '5px 16px', fontSize: '11px', fontWeight: '700', color: 'var(--yellow)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '24px' }}>
              Ready to Start?
            </span>
            <h2 style={{ fontFamily: "'Syne',sans-serif", fontWeight: '800', fontSize: 'clamp(32px, 4.5vw, 58px)', letterSpacing: '-0.035em', color: 'var(--cream)', lineHeight: '1.05', marginBottom: '16px' }}>
              Ready to get started?
            </h2>
            <p style={{ fontSize: '17px', lineHeight: '1.7', color: 'rgba(253,248,242,0.55)', maxWidth: '440px', margin: '0 auto 48px' }}>
              Download the app to order, or partner with us to start selling the honest way.
            </p>

            {/* CTAs */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
              <a href="https://apps.apple.com/in/app/kwikkit-food-delivery/id6759088912" target="_blank" rel="noopener noreferrer" style={{
                display: 'inline-flex', alignItems: 'center', gap: '12px',
                background: 'var(--cream)', color: 'var(--green-dark)',
                padding: '15px 32px', borderRadius: '16px', fontWeight: '700',
                fontSize: '15px', textDecoration: 'none',
                boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
                transition: 'transform 0.3s cubic-bezier(.34,1.56,.64,1), box-shadow 0.3s ease',
              }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 20px 56px rgba(0,0,0,0.35)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '0 8px 32px rgba(0,0,0,0.2)'; }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="var(--green-dark)"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98l-.09.06c-.22.14-2.22 1.3-2.2 3.88.03 3.02 2.65 4.03 2.68 4.04l-.03.1zM13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
                Download App
              </a>

              <a href="#restaurant" style={{
                display: 'inline-flex', alignItems: 'center', gap: '12px',
                background: 'rgba(255,255,255,0.1)', color: 'var(--cream)',
                border: '1px solid rgba(255,255,255,0.2)',
                padding: '15px 32px', borderRadius: '16px', fontWeight: '700',
                fontSize: '15px', textDecoration: 'none', backdropFilter: 'blur(8px)',
                transition: 'background 0.3s ease, transform 0.3s cubic-bezier(.34,1.56,.64,1)',
              }}
                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.18)'; e.currentTarget.style.transform = 'translateY(-4px)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.1)'; e.currentTarget.style.transform = ''; }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
                Partner With Us
              </a>
            </div>
          </div>
        </div>

        {/* ── Download Banner ── */}
        <div className="reveal" style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          flexWrap: 'wrap', gap: '24px',
          padding: '28px 36px',
          border: '1px solid rgba(255,255,255,0.07)',
          borderRadius: '20px',
          background: 'rgba(255,255,255,0.03)',
        }}>
          <div>
            <div style={{ fontSize: '11px', fontWeight: '700', color: 'var(--yellow)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '6px' }}>
              Available Now
            </div>
            <p style={{ fontFamily: "'Syne',sans-serif", fontWeight: '700', fontSize: '18px', color: 'var(--cream)', letterSpacing: '-0.02em' }}>
              Available in Chandigarh Tricity
            </p>
          </div>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            {[
              { href: 'https://apps.apple.com/in/app/kwikkit-food-delivery/id6759088912', label: 'App Store', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98l-.09.06c-.22.14-2.22 1.3-2.2 3.88.03 3.02 2.65 4.03 2.68 4.04l-.03.1zM13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg> },
              { href: 'https://play.google.com/store/apps/details?id=com.kwikkitcustomer.kwikkitcustomerapp', label: 'Google Play', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M3.18 23.76c.3.17.65.19.98.07L14.94 12 3.16.17C2.83.05 2.48.07 2.18.24 1.6.57 1.25 1.2 1.25 1.93v20.14c0 .73.35 1.36.93 1.69zM16.34 13.19l2.69 2.69-9.14 5.08 6.45-7.77zM20.7 9.99l-2.26-1.26-3.1 3.1 3.1 3.1 2.28-1.27c.65-.36 1.04-.97 1.04-1.67s-.39-1.29-1.06-1.9zM9.89 12L3.44 3.04l9.14 5.08-2.69 2.69V12z"/></svg> },
            ].map(btn => (
              <a key={btn.label} href={btn.href} target="_blank" rel="noopener noreferrer" style={{
                display: 'inline-flex', alignItems: 'center', gap: '10px',
                background: 'rgba(255,255,255,0.08)', color: 'var(--cream)',
                border: '1px solid rgba(255,255,255,0.12)',
                padding: '12px 22px', borderRadius: '12px', fontWeight: '700',
                fontSize: '14px', textDecoration: 'none',
                transition: 'background 0.25s ease, border-color 0.25s ease, transform 0.3s cubic-bezier(.34,1.56,.64,1)',
              }}
                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,229,0,0.1)'; e.currentTarget.style.borderColor = 'rgba(255,229,0,0.3)'; e.currentTarget.style.transform = 'translateY(-3px)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.08)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'; e.currentTarget.style.transform = ''; }}
              >
                {btn.icon}
                {btn.label}
              </a>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
