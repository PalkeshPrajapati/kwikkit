'use client';
import { useEffect, useRef } from 'react';
import Image from 'next/image';

export default function DownloadSection() {
  const ref = useRef(null);
  useEffect(() => {
    const obs = new IntersectionObserver(
      e => e.forEach(en => en.isIntersecting && en.target.classList.add('visible')),
      { threshold: 0.15 }
    );
    ref.current?.querySelectorAll('.reveal').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section id="download" ref={ref} style={{ background: 'var(--cream)', padding: '110px 0', position: 'relative', overflow: 'hidden' }}>
      {/* background gradient */}
      <div style={{
        position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)',
        width: '900px', height: '900px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(0,95,87,0.05) 0%, transparent 60%)',
        pointerEvents: 'none',
      }} />

      <div className="section-wrap" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{
          background: 'var(--green-dark)',
          borderRadius: '36px',
          padding: 'clamp(48px,6vw,88px) clamp(32px,6vw,80px)',
          position: 'relative', overflow: 'hidden',
          textAlign: 'center',
        }}>
          {/* ── Background Image ── */}
          <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
            <Image
              src="/landing/download-bg.png"
              alt="Friends dining and sharing food together"
              fill
              style={{ objectFit: 'cover', objectPosition: 'center center' }}
              sizes="100vw"
            />
            {/* Dark green overlay for readability */}
            <div style={{
              position: 'absolute', inset: 0,
              background: 'linear-gradient(135deg, rgba(0, 61, 55, 0.85) 0%, rgba(0, 40, 36, 0.78) 100%)',
            }} />
          </div>

          {/* card orbs */}
          <div style={{
            position: 'absolute', top: '-60px', right: '-60px',
            width: '300px', height: '300px', borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(255,229,0,0.1) 0%, transparent 65%)',
            pointerEvents: 'none',
            zIndex: 1,
          }} />
          <div style={{
            position: 'absolute', bottom: '-80px', left: '-80px',
            width: '350px', height: '350px', borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(0,122,110,0.3) 0%, transparent 65%)',
            pointerEvents: 'none',
            zIndex: 1,
          }} />
          {/* grid */}
          <div style={{
            position: 'absolute', inset: 0,
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)',
            backgroundSize: '50px 50px', pointerEvents: 'none',
            zIndex: 1,
          }} />

          <div style={{ position: 'relative', zIndex: 2 }}>
            <span className="reveal tag tag-green-dark" style={{ marginBottom: '24px' }}>Available Now</span>

            <h2 className="reveal heading-display heading-lg" style={{ color: 'var(--cream)', marginBottom: '18px' }}>
              Download Kwikkit and<br />
              <span style={{
                background: 'linear-gradient(90deg, var(--yellow) 0%, #fff9a0 100%)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
              }}>order the honest way.</span>
            </h2>

            <p className="reveal" style={{
              fontSize: '17px', lineHeight: '1.7', color: 'rgba(253,248,242,0.6)',
              maxWidth: '460px', margin: '0 auto 52px',
            }}>
              Browse nearby restaurants, track orders live, and pay without hidden pricing.
            </p>

            <div className="reveal" style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap', marginBottom: '36px' }}>
              {/* App Store */}
              <a href="https://apps.apple.com/in/app/kwikkit-food-delivery/id6759088912" style={{
                display: 'inline-flex', alignItems: 'center', gap: '12px',
                background: 'var(--cream)', color: 'var(--green-dark)',
                padding: '15px 30px', borderRadius: '16px', textDecoration: 'none',
                fontWeight: '700', fontSize: '15px',
                boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
                transition: 'transform 0.3s cubic-bezier(.34,1.56,.64,1), box-shadow 0.3s ease',
              }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 16px 48px rgba(0,0,0,0.3)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '0 8px 32px rgba(0,0,0,0.2)'; }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="var(--green-dark)">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98l-.09.06c-.22.14-2.22 1.3-2.2 3.88.03 3.02 2.65 4.03 2.68 4.04l-.03.1zM13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                <div style={{ textAlign: 'left' }}>
                  <div style={{ fontSize: '11px', opacity: 0.6, fontWeight: '500' }}>Download on the</div>
                  <div style={{ fontSize: '16px' }}>App Store</div>
                </div>
              </a>

              {/* Google Play */}
              <a href="https://play.google.com/store/apps/details?id=com.kwikkitcustomer.kwikkitcustomerapp" className="btn btn-ghost" style={{ padding: '15px 30px', borderRadius: '16px', fontSize: '15px', gap: '12px' }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.background = 'rgba(255,255,255,0.18)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.background = 'rgba(255,255,255,0.1)'; }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="var(--cream)">
                  <path d="M3.18 23.76c.3.17.65.19.98.07L14.94 12 3.16.17C2.83.05 2.48.07 2.18.24 1.6.57 1.25 1.2 1.25 1.93v20.14c0 .73.35 1.36.93 1.69zM16.34 13.19l2.69 2.69-9.14 5.08 6.45-7.77zM20.7 9.99l-2.26-1.26-3.1 3.1 3.1 3.1 2.28-1.27c.65-.36 1.04-.97 1.04-1.67s-.39-1.29-1.06-1.9zM9.89 12L3.44 3.04l9.14 5.08-2.69 2.69V12z" />
                </svg>
                <div style={{ textAlign: 'left' }}>
                  <div style={{ fontSize: '11px', opacity: 0.6, fontWeight: '500' }}>Get it on</div>
                  <div style={{ fontSize: '16px' }}>Google Play</div>
                </div>
              </a>
            </div>

            <p className="reveal" style={{ fontSize: '13px', color: 'rgba(253,248,242,0.35)', fontWeight: '600', letterSpacing: '0.02em' }}>
              Fast Ordering · Clear Pricing · Better Delivery Experience
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
