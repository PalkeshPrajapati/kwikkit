'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function HowHero() {
  const [loaded, setLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState('customers');

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 80);
    return () => clearTimeout(t);
  }, []);

  const anim = (delay) => ({
    opacity: loaded ? 1 : 0,
    transform: loaded ? 'translateY(0)' : 'translateY(24px)',
    transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`,
  });

  const tabs = [
    { id: 'customers',   label: '↓ For Customers',   href: '#customer'   },
    { id: 'restaurants', label: '↓ For Restaurants',  href: '#restaurant' },
  ];

  return (
    <section style={{ position: 'relative', minHeight: '92vh', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>

      {/* ── Background ── */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <Image
          src="/hero-bg.png"
          alt=""
          fill priority
          sizes="100vw"
          style={{ objectFit: 'cover', objectPosition: 'center 30%' }}
        />
        {/* heavy dark overlay */}
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(3,11,10,0.93)' }} />
        {/* grid pattern */}
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)', backgroundSize: '64px 64px', pointerEvents: 'none' }} />
        {/* green glow bloom */}
        <div style={{ position: 'absolute', bottom: '-60px', left: '50%', transform: 'translateX(-50%)', width: '1000px', height: '500px', background: 'radial-gradient(ellipse, rgba(0,95,87,0.18) 0%, transparent 68%)', pointerEvents: 'none' }} />
        {/* yellow accent orb */}
        <div style={{ position: 'absolute', top: '20%', right: '10%', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(255,229,0,0.04) 0%, transparent 65%)', pointerEvents: 'none' }} />
      </div>

      {/* ── Content ── */}
      <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', padding: '140px 28px 80px', maxWidth: '820px', margin: '0 auto', width: '100%' }}>

        {/* Label pill */}
        <div style={{ ...anim(0.05), display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(255,229,0,0.09)', border: '1px solid rgba(255,229,0,0.22)', padding: '6px 18px', borderRadius: '100px', marginBottom: '32px', fontSize: '11px', fontWeight: '700', color: 'var(--yellow)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
          <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--yellow)', display: 'inline-block', animation: 'blinkY 1.6s ease infinite' }} />
          Simple Process
        </div>

        {/* Heading */}
        <h1 style={{ ...anim(0.15), fontFamily: "'Syne',sans-serif", fontWeight: '800', fontSize: 'clamp(40px, 6.5vw, 80px)', lineHeight: '1.0', letterSpacing: '-0.035em', color: 'var(--cream)', marginBottom: '24px' }}>
          Ordering food should<br />
          be{' '}
          <span style={{ background: 'linear-gradient(90deg, var(--yellow) 0%, #fffab0 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
            this easy.
          </span>
        </h1>

        {/* Description */}
        <p style={{ ...anim(0.25), fontSize: '18px', lineHeight: '1.75', color: 'rgba(253,248,242,0.5)', maxWidth: '520px', margin: '0 auto 52px' }}>
          For customers it&apos;s 4 steps. For restaurants it&apos;s 5. Here&apos;s exactly how Kwikkit works — for both sides.
        </p>

        {/* Tab toggle */}
        <div style={{ ...anim(0.35), display: 'inline-flex', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '100px', padding: '5px', gap: '4px' }}>
          {tabs.map(tab => {
            const isActive = activeTab === tab.id;
            return (
              <a
                key={tab.id}
                href={tab.href}
                onClick={() => setActiveTab(tab.id)}
                style={{
                  display: 'inline-block', padding: '12px 30px', borderRadius: '100px',
                  fontSize: '14px', fontWeight: '700', textDecoration: 'none',
                  background: isActive ? 'var(--yellow)' : 'transparent',
                  color: isActive ? 'var(--green-dark)' : 'rgba(253,248,242,0.5)',
                  boxShadow: isActive ? '0 4px 20px rgba(255,229,0,0.28)' : 'none',
                  transition: 'background 0.3s ease, color 0.3s ease, box-shadow 0.3s ease',
                  letterSpacing: '-0.01em',
                }}
              >
                {tab.label}
              </a>
            );
          })}
        </div>

        {/* Scroll hint */}
        <div style={{ ...anim(0.5), marginTop: '80px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
          <span style={{ fontSize: '10px', color: 'rgba(253,248,242,0.25)', letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: '600' }}>Scroll to explore</span>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '3px', animation: 'chevDrop 2.2s ease-in-out infinite' }}>
            {[0, 1].map(i => (
              <svg key={i} width="16" height="10" viewBox="0 0 16 10" fill="none" style={{ opacity: 0.4 - i * 0.15 }}>
                <path d="M1 1l7 7 7-7" stroke="var(--yellow)" strokeWidth="2" strokeLinecap="round" />
              </svg>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes blinkY { 0%,100%{opacity:1} 50%{opacity:0.25} }
        @keyframes chevDrop { 0%,100%{transform:translateY(0)} 50%{transform:translateY(6px)} }
      `}</style>
    </section>
  );
}
