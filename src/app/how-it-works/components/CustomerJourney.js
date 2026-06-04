'use client';
import { useEffect, useRef } from 'react';
import Image from 'next/image';

/* ── Inline phone frame ── */
function PhoneFrame({ src, alt }) {
  return (
    <div style={{
      width: '220px', margin: '0 auto',
      background: 'linear-gradient(160deg, #1e3330 0%, #0c1b19 100%)',
      borderRadius: '46px', padding: '11px',
      boxShadow: '0 40px 80px rgba(0,95,87,0.18), 0 0 0 1px rgba(255,255,255,0.07), inset 0 1px 0 rgba(255,255,255,0.08)',
    }}>
      {/* Dynamic Island */}
      <div style={{ position: 'relative', zIndex: 2, display: 'flex', justifyContent: 'center', marginBottom: '-14px', paddingTop: '8px' }}>
        <div style={{ width: '68px', height: '18px', background: '#0c1b19', borderRadius: '10px', boxShadow: '0 0 0 1px rgba(255,255,255,0.05)' }} />
      </div>
      <div style={{ borderRadius: '37px', overflow: 'hidden', background: '#f0f0f0', aspectRatio: '9/19.5', position: 'relative' }}>
        <Image src={src} alt={alt} fill sizes="220px" style={{ objectFit: 'cover' }} />
      </div>
      {/* side button */}
      <div style={{ position: 'absolute', right: '-3px', top: '90px', width: '3px', height: '36px', background: 'rgba(255,255,255,0.1)', borderRadius: '0 3px 3px 0' }} />
    </div>
  );
}

/* ── Download card for Step 1 ── */
function DownloadCard() {
  const btnBase = {
    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px',
    padding: '13px 20px', borderRadius: '13px',
    fontWeight: '700', fontSize: '14px', textDecoration: 'none',
    transition: 'transform 0.3s cubic-bezier(.34,1.56,.64,1), box-shadow 0.3s ease',
  };
  return (
    <div style={{
      background: 'linear-gradient(145deg, rgba(0,95,87,0.06), rgba(0,60,55,0.04))',
      border: '1px solid rgba(0,95,87,0.14)',
      borderRadius: '28px', padding: '40px 32px', textAlign: 'center',
      maxWidth: '300px', margin: '0 auto',
      boxShadow: '0 24px 60px rgba(0,95,87,0.06)',
    }}>
      {/* App icon */}
      <Image src="/logo/logo-android.jpg" alt="Kwikkit" width={64} height={64} style={{ borderRadius: '16px', width: '64px', height: '64px', marginBottom: '14px' }} />
      <div style={{ fontFamily: "'Syne',sans-serif", fontWeight: '800', fontSize: '22px', color: 'var(--text-primary)', letterSpacing: '-0.02em', marginBottom: '4px' }}>kwikkit</div>
      <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginBottom: '16px' }}>Honest food delivery</div>
      {/* Stars */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '3px', marginBottom: '28px' }}>
        {[...Array(5)].map((_, i) => (
          <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="var(--yellow)">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        ))}
        <span style={{ fontSize: '12px', color: 'var(--text-muted)', fontWeight: '600', marginLeft: '4px' }}>4.8</span>
      </div>
      {/* Buttons */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <a href="https://apps.apple.com/in/app/kwikkit-food-delivery/id6759088912" target="_blank" rel="noopener noreferrer" style={{ ...btnBase, background: 'var(--green)', color: 'var(--cream)' }}
          onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 12px 32px rgba(0,95,87,0.35)'; }}
          onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = ''; }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="var(--cream)"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98l-.09.06c-.22.14-2.22 1.3-2.2 3.88.03 3.02 2.65 4.03 2.68 4.04l-.03.1zM13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
          App Store
        </a>
        <a href="https://play.google.com/store/apps/details?id=com.kwikkitcustomer.kwikkitcustomerapp" target="_blank" rel="noopener noreferrer" style={{ ...btnBase, background: 'rgba(0,95,87,0.08)', color: 'var(--green)', border: '1.5px solid rgba(0,95,87,0.2)' }}
          onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.background = 'rgba(0,95,87,0.14)'; }}
          onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.background = 'rgba(0,95,87,0.08)'; }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="var(--green)"><path d="M3.18 23.76c.3.17.65.19.98.07L14.94 12 3.16.17C2.83.05 2.48.07 2.18.24 1.6.57 1.25 1.2 1.25 1.93v20.14c0 .73.35 1.36.93 1.69zM16.34 13.19l2.69 2.69-9.14 5.08 6.45-7.77zM20.7 9.99l-2.26-1.26-3.1 3.1 3.1 3.1 2.28-1.27c.65-.36 1.04-.97 1.04-1.67s-.39-1.29-1.06-1.9zM9.89 12L3.44 3.04l9.14 5.08-2.69 2.69V12z"/></svg>
          Google Play
        </a>
      </div>
    </div>
  );
}

const steps = [
  { num: '01', title: 'Download the App',    desc: 'Get Kwikkit on iOS or Android. Sign up in under 30 seconds — phone number, OTP, done. No lengthy forms.',                                                                                visual: 'download' },
  { num: '02', title: 'Browse Restaurants',  desc: 'Discover local restaurants nearby. Every price you see is the exact price the restaurant charges — no inflation, no surprises.',                                                      visual: '/screenshot/screenshot-home.png' },
  { num: '03', title: 'Place Your Order',    desc: 'Add items to your cart. The checkout shows you exactly what you\'re paying — food total, delivery fee, GST. Nothing hidden, nothing added at the last second.',                       visual: '/screenshot/screenshot-restaurant.png' },
  { num: '04', title: 'Track & Enjoy',       desc: 'Live GPS tracking from kitchen to your door. Know exactly when your food arrives. Eat knowing every rupee went to the restaurant — not a platform.',                                   visual: '/screenshot/screenshot-cart.png' },
];

export default function CustomerJourney() {
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
    <section id="customer" ref={ref} style={{ background: 'var(--cream)', padding: '110px 0', scrollMarginTop: '80px' }}>
      <div className="section-wrap">

        {/* ── Header ── */}
        <div style={{ textAlign: 'center', marginBottom: '96px' }}>
          <span className="reveal tag tag-green" style={{ marginBottom: '16px' }}>For Customers</span>
          <h2 className="reveal heading-display heading-lg" style={{ color: 'var(--text-primary)', marginBottom: '18px' }}>
            From app to doorstep<br />
            <span className="gradient-text-green">in 4 steps</span>
          </h2>
          <p className="reveal" style={{ fontSize: '17px', color: 'var(--text-muted)', maxWidth: '440px', margin: '0 auto', lineHeight: '1.7' }}>
            No complicated flows. No confusing checkout. Just food, delivered honestly.
          </p>
        </div>

        {/* ── Steps ── */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '112px' }}>
          {steps.map((step, i) => {
            const textFirst = i % 2 === 0;

            const textBlock = (
              <div className={textFirst ? 'reveal-left' : 'reveal-right'} style={{ flex: 1 }}>
                {/* Step badge */}
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(0,95,87,0.07)', border: '1px solid rgba(0,95,87,0.12)', borderRadius: '100px', padding: '5px 14px', marginBottom: '16px' }}>
                  <span style={{ fontSize: '10px', fontWeight: '800', color: 'var(--green)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Step {step.num}</span>
                </div>

                {/* Ghost number */}
                <div style={{ fontFamily: "'Syne',sans-serif", fontWeight: '900', fontSize: '96px', lineHeight: '0.85', color: 'rgba(0,95,87,0.055)', marginBottom: '-8px', userSelect: 'none' }}>
                  {step.num}
                </div>

                <h3 style={{ fontFamily: "'Syne',sans-serif", fontWeight: '800', fontSize: 'clamp(26px, 3vw, 38px)', letterSpacing: '-0.03em', color: 'var(--text-primary)', marginBottom: '18px', lineHeight: '1.1' }}>
                  {step.title}
                </h3>
                <p style={{ fontSize: '16px', lineHeight: '1.8', color: 'var(--text-muted)', maxWidth: '400px' }}>
                  {step.desc}
                </p>
              </div>
            );

            const visualBlock = (
              <div className={textFirst ? 'reveal-right' : 'reveal-left'} style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ position: 'relative' }}>
                  {/* glow behind visual */}
                  <div style={{ position: 'absolute', inset: '-40px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(0,95,87,0.08) 0%, transparent 70%)', pointerEvents: 'none' }} />
                  {step.visual === 'download' ? <DownloadCard /> : <PhoneFrame src={step.visual} alt={step.title} />}
                </div>
              </div>
            );

            return (
              <div key={step.num} className="customer-step" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
                {textFirst ? textBlock : visualBlock}
                {textFirst ? visualBlock : textBlock}
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .customer-step {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }
          .customer-step > div:last-child { order: -1; }
        }
      `}</style>
    </section>
  );
}
