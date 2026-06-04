'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Sparkles } from 'lucide-react';

export default function CalcHero() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 80);
    return () => clearTimeout(t);
  }, []);

  const anim = (delay) => ({
    opacity: loaded ? 1 : 0,
    transform: loaded ? 'translateY(0)' : 'translateY(24px)',
    transition: `opacity 0.7s cubic-bezier(.16,1,.3,1) ${delay}s, transform 0.7s cubic-bezier(.16,1,.3,1) ${delay}s`,
  });

  return (
    <section style={{ position: 'relative', minHeight: 'min(75vh, 600px)', background: 'var(--dark)', overflow: 'hidden', display: 'flex', alignItems: 'center' }}>
      {/* BG layers */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <Image src="/hero-bg.png" alt="" fill priority sizes="100vw" style={{ objectFit: 'cover', opacity: 0.18 }} />
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(8,15,14,0.93)' }} />
        {/* Grid pattern */}
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)', backgroundSize: '64px 64px', pointerEvents: 'none' }} />
        {/* Green glow orb */}
        <div style={{ position: 'absolute', bottom: '-60px', left: '50%', transform: 'translateX(-50%)', width: '800px', height: '350px', background: 'radial-gradient(ellipse, rgba(0,95,87,0.18) 0%, transparent 70%)', pointerEvents: 'none' }} />
      </div>

      {/* Content */}
      <div className="section-wrap" style={{ position: 'relative', zIndex: 1, width: '100%', padding: '100px 28px 60px' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          
          {/* Eyebrow / Label */}
          <div style={{
            ...anim(0.05),
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: 'rgba(255, 229, 0, 0.08)',
            border: '1px solid rgba(255, 229, 0, 0.28)',
            padding: '6px 18px',
            borderRadius: '100px',
            marginBottom: '28px',
          }}>
            <Sparkles size={14} color="var(--yellow)" />
            <span style={{ fontSize: '11px', fontWeight: '700', color: 'var(--yellow)', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
              Savings
            </span>
          </div>

          {/* Heading */}
          <h1 className="heading-display heading-xl" style={{
            ...anim(0.15),
            color: 'var(--cream)',
            marginBottom: '16px',
          }}>
            Profit Recovery<br />
            <span style={{
              background: 'linear-gradient(90deg, var(--yellow) 0%, #fff677 50%, #fffaba 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>Calculator</span>
          </h1>

          {/* Subheading */}
          <h2 style={{
            ...anim(0.22),
            fontFamily: "'Syne', sans-serif",
            fontSize: 'clamp(20px, 3vw, 32px)',
            fontWeight: '800',
            color: 'var(--yellow-soft)',
            marginBottom: '18px',
            letterSpacing: '-0.02em',
          }}>
            Stop Losing 30% of Your Revenue
          </h2>

          {/* Description */}
          <p style={{
            ...anim(0.28),
            fontSize: 'clamp(15px, 1.6vw, 18px)',
            lineHeight: '1.7',
            color: 'rgba(253, 248, 242, 0.65)',
            maxWidth: '560px',
            margin: '0 auto 40px',
          }}>
            See exactly how much commission-free delivery adds to your bottom line instantly.
          </p>

          {/* CTA Link */}
          <div style={{ ...anim(0.35) }}>
            <a href="#calculator" className="btn btn-yellow" style={{ padding: '14px 32px' }}>
              Calculate Your Savings
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
