'use client';
import { useEffect, useRef } from 'react';
import { Tag, Zap, Shield, ClipboardList, Star, Sparkles } from 'lucide-react';

const features = [
  {
    num: '01', Icon: Tag,
    title: 'Real Menu Prices',
    desc: 'No inflated prices. Ever. What you see on the menu is exactly what the restaurant charges.',
    accent: 'rgba(255,229,0,0.1)',
    border: 'rgba(255,229,0,0.2)',
    iconColor: 'var(--yellow)',
  },
  {
    num: '02', Icon: Zap,
    title: 'Fast Delivery',
    desc: '30–45 minute average delivery time with live GPS tracking from restaurant to your doorstep.',
    accent: 'rgba(0,95,87,0.08)',
    border: 'rgba(0,95,87,0.18)',
    iconColor: 'var(--green)',
  },
  {
    num: '03', Icon: Shield,
    title: 'Secure Payments',
    desc: 'Supports UPI, cards, and wallets with secure payment processing and bank-grade protection.',
    accent: 'rgba(100,180,255,0.07)',
    border: 'rgba(100,180,255,0.15)',
    iconColor: '#64b4ff',
  },
  {
    num: '04', Icon: ClipboardList,
    title: 'Order History',
    desc: 'Access complete order history and reorder your favourite meals in just a few taps.',
    accent: 'rgba(255,150,80,0.07)',
    border: 'rgba(255,150,80,0.15)',
    iconColor: '#ff9650',
  },
  {
    num: '05', Icon: Star,
    title: 'Rate & Review',
    desc: 'Leave ratings and reviews to help other users discover quality restaurants near them.',
    accent: 'rgba(255,229,0,0.07)',
    border: 'rgba(255,229,0,0.15)',
    iconColor: 'var(--yellow)',
  },
  {
    num: '06', Icon: Sparkles,
    title: 'Personalised Feed',
    desc: 'Restaurant recommendations tailored to your preferences and ordering habits.',
    accent: 'rgba(0,95,87,0.07)',
    border: 'rgba(0,95,87,0.15)',
    iconColor: 'var(--green)',
  },
];

function FeatureCard({ feature }) {
  return (
    <div
      className="feat-card"
      style={{
        padding: '32px',
        borderRadius: '22px',
        border: '1px solid rgba(0,0,0,0.07)',
        background: 'rgba(255,255,255,0.7)',
        backdropFilter: 'blur(8px)',
        position: 'relative', overflow: 'hidden',
        cursor: 'default',
        transition: 'transform 0.35s cubic-bezier(.34,1.56,.64,1), box-shadow 0.35s ease, border-color 0.3s ease',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = 'translateY(-8px)';
        e.currentTarget.style.boxShadow = `0 24px 56px rgba(0,0,0,0.1), 0 0 0 1.5px ${feature.border}`;
        e.currentTarget.style.borderColor = feature.border;
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = '';
        e.currentTarget.style.boxShadow = '';
        e.currentTarget.style.borderColor = 'rgba(0,0,0,0.07)';
      }}
    >
      {/* Ghost number */}
      <div style={{ position: 'absolute', top: '-8px', right: '16px', fontFamily: "'Syne',sans-serif", fontWeight: '900', fontSize: '72px', color: 'rgba(0,0,0,0.04)', lineHeight: '1', userSelect: 'none', pointerEvents: 'none' }}>
        {feature.num}
      </div>

      {/* Icon box */}
      <div style={{
        width: '52px', height: '52px', borderRadius: '14px',
        background: feature.accent, border: `1px solid ${feature.border}`,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        marginBottom: '20px',
        transition: 'transform 0.35s cubic-bezier(.34,1.56,.64,1)',
      }}
        ref={el => {
          if (el) {
            el.parentElement.addEventListener('mouseenter', () => { el.style.transform = 'scale(1.12) rotate(-4deg)'; });
            el.parentElement.addEventListener('mouseleave', () => { el.style.transform = ''; });
          }
        }}
      >
        <feature.Icon size={22} color={feature.iconColor} strokeWidth={1.8} />
      </div>

      {/* Text */}
      <h3 style={{ fontFamily: "'Syne',sans-serif", fontWeight: '700', fontSize: '18px', letterSpacing: '-0.02em', color: 'var(--text-primary)', marginBottom: '10px', lineHeight: '1.2' }}>
        {feature.title}
      </h3>
      <p style={{ fontSize: '14px', lineHeight: '1.75', color: 'var(--text-muted)' }}>
        {feature.desc}
      </p>
    </div>
  );
}

export default function FeaturesSection() {
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      e => e.forEach(en => en.isIntersecting && en.target.classList.add('visible')),
      { threshold: 0.08 }
    );
    ref.current?.querySelectorAll('.reveal,.feat-card').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} style={{ background: 'var(--cream)', padding: '110px 0', position: 'relative', overflow: 'hidden' }}>

      {/* Subtle cityscape bg tint */}
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(253,248,242,1) 0%, rgba(253,248,242,0.92) 50%, rgba(253,248,242,1) 100%)', pointerEvents: 'none' }} />

      <div className="section-wrap" style={{ position: 'relative', zIndex: 1 }}>

        {/* ── Header ── */}
        <div style={{ textAlign: 'center', marginBottom: '72px' }}>
          <span className="reveal tag tag-green" style={{ marginBottom: '16px' }}>App Features</span>
          <h2 className="reveal heading-display heading-lg" style={{ color: 'var(--text-primary)', marginBottom: '16px' }}>
            Everything you need,<br />
            <span className="gradient-text-green">nothing you don&apos;t</span>
          </h2>
          <p className="reveal" style={{ fontSize: '17px', color: 'var(--text-muted)', maxWidth: '440px', margin: '0 auto', lineHeight: '1.7' }}>
            Core features designed to make food ordering simple, transparent, and reliable.
          </p>
        </div>

        {/* ── 3×2 feature grid ── */}
        <div className="feat-grid reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
          {features.map(f => <FeatureCard key={f.num} feature={f} />)}
        </div>

        {/* ── Bottom CTA strip ── */}
        <div className="reveal" style={{
          marginTop: '56px', padding: '36px 40px',
          background: 'var(--green-dark)', borderRadius: '22px',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          flexWrap: 'wrap', gap: '24px',
          position: 'relative', overflow: 'hidden',
        }}>
          <div style={{ position: 'absolute', top: '-60px', right: '-60px', width: '280px', height: '280px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,229,0,0.08) 0%, transparent 65%)', pointerEvents: 'none' }} />
          <div>
            <div style={{ fontFamily: "'Syne',sans-serif", fontWeight: '800', fontSize: '22px', color: 'var(--cream)', letterSpacing: '-0.03em', marginBottom: '4px' }}>
              All features. Zero hidden fees.
            </div>
            <div style={{ fontSize: '14px', color: 'rgba(253,248,242,0.5)' }}>
              Available now in Chandigarh, Mohali & Panchkula.
            </div>
          </div>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', position: 'relative', zIndex: 1 }}>
            {[
              { label: 'App Store',    href: 'https://apps.apple.com/in/app/kwikkit-food-delivery/id6759088912' },
              { label: 'Google Play',  href: 'https://play.google.com/store/apps/details?id=com.kwikkitcustomer.kwikkitcustomerapp' },
            ].map(btn => (
              <a key={btn.label} href={btn.href} target="_blank" rel="noopener noreferrer" style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                background: btn.label === 'App Store' ? 'var(--yellow)' : 'rgba(255,255,255,0.1)',
                color: btn.label === 'App Store' ? 'var(--green-dark)' : 'var(--cream)',
                border: btn.label === 'App Store' ? 'none' : '1px solid rgba(255,255,255,0.18)',
                padding: '12px 22px', borderRadius: '12px', fontWeight: '700',
                fontSize: '14px', textDecoration: 'none',
                transition: 'transform 0.3s cubic-bezier(.34,1.56,.64,1), box-shadow 0.3s ease',
              }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = btn.label === 'App Store' ? '0 12px 32px rgba(255,229,0,0.35)' : '0 8px 24px rgba(0,0,0,0.3)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = ''; }}
              >
                {btn.label}
              </a>
            ))}
          </div>
        </div>

      </div>

      <style>{`
        @media (max-width: 860px) {
          .feat-grid { grid-template-columns: repeat(2,1fr) !important; }
        }
        @media (max-width: 520px) {
          .feat-grid { grid-template-columns: 1fr !important; }
        }
        .feat-card { opacity: 0; transform: translateY(20px); transition: opacity 0.5s ease, transform 0.5s ease, box-shadow 0.35s ease, border-color 0.3s ease !important; }
        .feat-card.visible { opacity: 1 !important; transform: translateY(0) !important; }
        .feat-card:nth-child(1) { transition-delay: 0.05s !important; }
        .feat-card:nth-child(2) { transition-delay: 0.12s !important; }
        .feat-card:nth-child(3) { transition-delay: 0.19s !important; }
        .feat-card:nth-child(4) { transition-delay: 0.26s !important; }
        .feat-card:nth-child(5) { transition-delay: 0.33s !important; }
        .feat-card:nth-child(6) { transition-delay: 0.4s !important; }
      `}</style>
    </section>
  );
}
