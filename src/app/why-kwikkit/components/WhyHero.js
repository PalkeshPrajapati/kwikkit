'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { ShieldCheck, ArrowRight } from 'lucide-react';

export default function WhyHero() {
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
    <section style={{ position: 'relative', minHeight: 'min(90vh, 800px)', background: 'var(--dark)', overflow: 'hidden', display: 'flex', alignItems: 'center' }}>
      {/* BG layers */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <Image src="/hero-bg.png" alt="" fill priority sizes="100vw" style={{ objectFit: 'cover', opacity: 0.16 }} />
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(8,15,14,0.92)' }} />
        {/* Grid pattern */}
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)', backgroundSize: '64px 64px', pointerEvents: 'none' }} />
        {/* Green glow orb */}
        <div style={{ position: 'absolute', bottom: '-80px', left: '50%', transform: 'translateX(-50%)', width: '800px', height: '400px', background: 'radial-gradient(ellipse, rgba(0,95,87,0.18) 0%, transparent 70%)', pointerEvents: 'none' }} />
      </div>

      {/* Content */}
      <div className="section-wrap" style={{ position: 'relative', zIndex: 1, width: '100%', padding: '120px 28px 80px' }}>
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
            <ShieldCheck size={14} color="var(--yellow)" />
            <span style={{ fontSize: '11px', fontWeight: '700', color: 'var(--yellow)', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
              Transparency First
            </span>
          </div>

          {/* Heading */}
          <h1 className="heading-display heading-xl" style={{
            ...anim(0.15),
            color: 'var(--cream)',
            marginBottom: '24px',
          }}>
            Honest food delivery.<br />
            <span style={{
              background: 'linear-gradient(90deg, var(--yellow) 0%, #fff677 50%, #fffaba 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>Finally.</span>
          </h1>

          {/* Description */}
          <p style={{
            ...anim(0.25),
            fontSize: 'clamp(16px, 1.8vw, 20px)',
            lineHeight: '1.75',
            color: 'rgba(253, 248, 242, 0.65)',
            maxWidth: '600px',
            margin: '0 auto 48px',
          }}>
            Every rupee you pay on Kwikkit goes to the food and the delivery — not to platform commissions and hidden surges. Here's exactly why that matters.
          </p>

          {/* CTAs */}
          <div style={{
            ...anim(0.35),
            display: 'flex',
            justifyContent: 'center',
            gap: '16px',
            flexWrap: 'wrap',
          }}>
            <a href="#compare" className="btn btn-yellow">
              Compare Pricing
              <ArrowRight size={16} strokeWidth={2.5} />
            </a>
            <a href="/download" className="btn btn-ghost">
              Download App
            </a>
          </div>

        </div>
      </div>

      {/* Scroll indicator cue */}
      <div style={{
        position: 'absolute',
        bottom: '24px',
        left: '50%',
        transform: 'translateX(-50%)',
        opacity: loaded ? 1 : 0,
        transition: 'opacity 0.6s ease 0.9s',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '6px',
      }}>
        <span style={{ fontSize: '10px', color: 'rgba(253, 248, 242, 0.4)', fontWeight: '600', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Scroll</span>
        <div style={{ width: '1px', height: '30px', background: 'linear-gradient(to bottom, rgba(255, 229, 0, 0.6), transparent)', animation: 'scrollLine 1.8s ease-in-out infinite' }} />
      </div>

      <style>{`
        @keyframes scrollLine {
          0% { opacity: 0; transform: scaleY(0); transform-origin: top }
          50% { opacity: 1; transform: scaleY(1) }
          100% { opacity: 0; transform: scaleY(1); transform-origin: bottom }
        }
      `}</style>
    </section>
  );
}
