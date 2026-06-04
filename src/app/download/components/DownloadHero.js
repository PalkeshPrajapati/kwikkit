'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Star, Utensils, BadgeIndianRupee } from 'lucide-react';

/* ── Reusable phone frame ── */
function PhoneFrame({ src, alt, width }) {
  const br  = Math.round(width * 0.22);
  const pad = Math.round(width * 0.052);
  const diW = Math.round(width * 0.33);
  const diH = Math.round(width * 0.09);

  return (
    <div style={{
      width: `${width}px`, flexShrink: 0,
      background: 'linear-gradient(160deg, #1e3330 0%, #0c1b19 100%)',
      borderRadius: `${br}px`, padding: `${pad}px`,
      boxShadow: '0 40px 90px rgba(0,0,0,0.55), 0 0 0 1px rgba(255,255,255,0.07), inset 0 1px 0 rgba(255,255,255,0.08)',
    }}>
      {/* Dynamic Island */}
      <div style={{ display: 'flex', justifyContent: 'center', paddingTop: `${pad}px`, marginBottom: `-${diH * 0.7}px`, position: 'relative', zIndex: 2 }}>
        <div style={{ width: `${diW}px`, height: `${diH}px`, background: '#0c1b19', borderRadius: '8px', boxShadow: '0 0 0 1px rgba(255,255,255,0.04)' }} />
      </div>
      <div style={{ borderRadius: `${br - pad}px`, overflow: 'hidden', background: '#efefef', aspectRatio: '9/19.5', position: 'relative' }}>
        <Image src={src} alt={alt} fill sizes={`${width}px`} style={{ objectFit: 'cover' }} priority />
      </div>
    </div>
  );
}

/* ── Trust metrics ── */
const trust = [
  { Icon: Star,              val: '4.8',  label: 'Rating on App Store', fill: true },
  { Icon: Utensils,          val: '200+', label: 'Restaurants',          fill: false },
  { Icon: BadgeIndianRupee,  val: '₹0',  label: 'Hidden Fees',          fill: false },
];

/* ── Phone data ── */
const phones = [
  { src: '/screenshot/screenshot-restaurant.png', alt: 'Restaurant page',      width: 158, rotate: -8, translateY: 44 },
  { src: '/screenshot/screenshot-home.png',       alt: 'Home feed',             width: 192, rotate:  0, translateY:  0 },
  { src: '/screenshot/screenshot-cart.png',       alt: 'Zero platform fee',     width: 158, rotate:  8, translateY: 44 },
];

export default function DownloadHero() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 80);
    return () => clearTimeout(t);
  }, []);

  const anim = (d) => ({
    opacity:   loaded ? 1 : 0,
    transform: loaded ? 'translateY(0)' : 'translateY(26px)',
    transition: `opacity 0.7s ease ${d}s, transform 0.7s ease ${d}s`,
  });

  return (
    <section style={{ position: 'relative', minHeight: '100svh', display: 'flex', alignItems: 'center', overflow: 'hidden', background: 'var(--dark)' }}>

      {/* ── Background ── */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <Image src="/hero-bg.png" alt="" fill priority sizes="100vw" style={{ objectFit: 'cover', objectPosition: 'center 35%' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(3,10,9,0.95)' }} />
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)', backgroundSize: '64px 64px', pointerEvents: 'none' }} />
        {/* Left green glow */}
        <div style={{ position: 'absolute', bottom: '-80px', left: '-80px', width: '700px', height: '700px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(0,95,87,0.2) 0%, transparent 65%)', pointerEvents: 'none' }} />
        {/* Right yellow shimmer */}
        <div style={{ position: 'absolute', top: '20%', right: '0', width: '500px', height: '500px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,229,0,0.04) 0%, transparent 65%)', pointerEvents: 'none' }} />
      </div>

      {/* ── Content grid ── */}
      <div className="section-wrap dl-hero-grid" style={{
        position: 'relative', zIndex: 1,
        display: 'grid', gridTemplateColumns: '1fr 1fr',
        gap: '60px', alignItems: 'center',
        padding: 'max(120px, 18vh) 28px 80px',
        width: '100%',
      }}>

        {/* ─── Left: text ─── */}
        <div>

          {/* Status pill */}
          <div style={{ ...anim(0.05), display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(0,154,141,0.1)', border: '1px solid rgba(0,154,141,0.25)', padding: '6px 16px', borderRadius: '100px', marginBottom: '28px', fontSize: '11px', fontWeight: '700', color: '#00c8a8', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#00c8a8', display: 'inline-block', animation: 'blinkTeal 1.6s ease infinite' }} />
            Available Now
          </div>

          {/* Heading */}
          <h1 style={{ ...anim(0.15), fontFamily: "'Syne',sans-serif", fontWeight: '800', fontSize: 'clamp(36px, 4.8vw, 66px)', lineHeight: '1.0', letterSpacing: '-0.035em', color: 'var(--cream)', marginBottom: '22px' }}>
            Download Kwikkit.<br />
            <span style={{ background: 'linear-gradient(90deg, var(--yellow) 0%, #fffab0 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Order the honest way.
            </span>
          </h1>

          {/* Description */}
          <p style={{ ...anim(0.25), fontSize: '17px', lineHeight: '1.75', color: 'rgba(253,248,242,0.48)', maxWidth: '420px', marginBottom: '40px' }}>
            Browse local restaurants, track your food live, and pay exactly what the restaurant charges. No hidden fees. No surprises.
          </p>

          {/* Download buttons */}
          <div style={{ ...anim(0.35), display: 'flex', gap: '14px', flexWrap: 'wrap', marginBottom: '44px' }}>
            {/* App Store */}
            <a href="https://apps.apple.com/in/app/kwikkit-food-delivery/id6759088912" target="_blank" rel="noopener noreferrer"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', background: 'var(--cream)', color: 'var(--green-dark)', padding: '14px 26px', borderRadius: '16px', fontWeight: '700', fontSize: '14px', textDecoration: 'none', boxShadow: '0 8px 32px rgba(0,0,0,0.32)', transition: 'transform 0.3s cubic-bezier(.34,1.56,.64,1), box-shadow 0.3s ease' }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 20px 56px rgba(0,0,0,0.48)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '0 8px 32px rgba(0,0,0,0.32)'; }}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="var(--green-dark)"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98l-.09.06c-.22.14-2.22 1.3-2.2 3.88.03 3.02 2.65 4.03 2.68 4.04l-.03.1zM13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
              <div style={{ textAlign: 'left' }}>
                <div style={{ fontSize: '10px', opacity: 0.55, fontWeight: '500' }}>Download on the</div>
                <div style={{ fontSize: '16px', lineHeight: '1.2' }}>App Store</div>
              </div>
            </a>

            {/* Google Play */}
            <a href="https://play.google.com/store/apps/details?id=com.kwikkitcustomer.kwikkitcustomerapp" target="_blank" rel="noopener noreferrer"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', background: 'rgba(255,255,255,0.09)', color: 'var(--cream)', border: '1px solid rgba(255,255,255,0.18)', padding: '14px 26px', borderRadius: '16px', fontWeight: '700', fontSize: '14px', textDecoration: 'none', backdropFilter: 'blur(8px)', transition: 'background 0.3s ease, transform 0.3s cubic-bezier(.34,1.56,.64,1)' }}
              onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.17)'; e.currentTarget.style.transform = 'translateY(-4px)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.09)'; e.currentTarget.style.transform = ''; }}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="var(--cream)"><path d="M3.18 23.76c.3.17.65.19.98.07L14.94 12 3.16.17C2.83.05 2.48.07 2.18.24 1.6.57 1.25 1.2 1.25 1.93v20.14c0 .73.35 1.36.93 1.69zM16.34 13.19l2.69 2.69-9.14 5.08 6.45-7.77zM20.7 9.99l-2.26-1.26-3.1 3.1 3.1 3.1 2.28-1.27c.65-.36 1.04-.97 1.04-1.67s-.39-1.29-1.06-1.9zM9.89 12L3.44 3.04l9.14 5.08-2.69 2.69V12z"/></svg>
              <div style={{ textAlign: 'left' }}>
                <div style={{ fontSize: '10px', opacity: 0.55, fontWeight: '500' }}>Get it on</div>
                <div style={{ fontSize: '16px', lineHeight: '1.2' }}>Google Play</div>
              </div>
            </a>
          </div>

          {/* Trust metrics */}
          <div style={{ ...anim(0.45), display: 'flex', gap: '28px', flexWrap: 'wrap' }}>
            {trust.map((t, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <t.Icon size={15} color="var(--yellow)" fill={t.fill ? 'var(--yellow)' : 'none'} strokeWidth={1.8} />
                <span style={{ fontFamily: "'Syne',sans-serif", fontWeight: '800', fontSize: '15px', color: 'var(--cream)' }}>{t.val}</span>
                <span style={{ fontSize: '13px', color: 'rgba(253,248,242,0.38)' }}>{t.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ─── Right: 3-phone fan ─── */}
        <div className="dl-phones" style={{ ...anim(0.2), display: 'flex', alignItems: 'flex-end', justifyContent: 'center', position: 'relative', paddingBottom: '20px' }}>
          {/* Glow bloom behind phones */}
          <div style={{ position: 'absolute', bottom: '-40px', left: '50%', transform: 'translateX(-50%)', width: '380px', height: '380px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(0,95,87,0.28) 0%, transparent 70%)', filter: 'blur(40px)', pointerEvents: 'none' }} />

          {phones.map((p, i) => {
            const isCenter = i === 1;
            return (
              <div key={i} style={{
                position: 'relative', zIndex: isCenter ? 3 : 1,
                marginLeft: i === 1 ? '-18px' : 0,
                marginRight: i === 1 ? '-18px' : 0,
                transform: `rotate(${p.rotate}deg) translateY(${p.translateY}px)`,
                transition: 'transform 0.4s cubic-bezier(.34,1.56,.64,1)',
              }}
                onMouseEnter={e => { if (!isCenter) e.currentTarget.style.transform = `rotate(${p.rotate * 0.5}deg) translateY(${p.translateY * 0.6}px) scale(1.04)`; }}
                onMouseLeave={e => { e.currentTarget.style.transform = `rotate(${p.rotate}deg) translateY(${p.translateY}px)`; }}
              >
                <PhoneFrame src={p.src} alt={p.alt} width={p.width} />
              </div>
            );
          })}
        </div>
      </div>

      {/* ── Scroll indicator ── */}
      <div style={{
        position: 'absolute', bottom: '32px', left: '50%', transform: 'translateX(-50%)',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px',
        opacity: loaded ? 0.5 : 0, transition: 'opacity 0.7s ease 0.8s',
        animation: loaded ? 'scrollBounce 2.2s ease-in-out infinite 1s' : 'none',
        zIndex: 2,
      }}>
        <span style={{ fontSize: '10px', color: 'rgba(253,248,242,0.5)', letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: '600' }}>Explore features</span>
        <svg width="16" height="10" viewBox="0 0 16 10" fill="none">
          <path d="M1 1l7 7 7-7" stroke="var(--yellow)" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </div>

      <style>{`
        @keyframes blinkTeal { 0%,100%{opacity:1} 50%{opacity:0.2} }
        @keyframes scrollBounce { 0%,100%{transform:translateX(-50%) translateY(0)} 50%{transform:translateX(-50%) translateY(6px)} }
        @media (max-width: 900px) {
          .dl-hero-grid { grid-template-columns: 1fr !important; gap: 56px !important; }
          .dl-phones { order: -1; }
        }
        @media (max-width: 540px) {
          .dl-phones > div:first-child,
          .dl-phones > div:last-child { display: none !important; }
        }
      `}</style>
    </section>
  );
}
