'use client';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { Ban, Star, Package, Handshake, BadgeIndianRupee, MapPin } from 'lucide-react';

const stats = [
  { val: '4.8★', label: 'Rating' },
  { val: '200+', label: 'Restaurants' },
  { val: '500+', label: 'Orders / Day' },
  { val: '₹0',   label: 'Platform Fee' },
];

const ticker = [
  { icon: Ban,               label: 'No Delivery Surge'          },
  { icon: Star,              label: '4.8 Star Rating'             },
  { icon: Package,           label: '500+ Orders Daily'           },
  { icon: Handshake,         label: '200+ Restaurant Partners'    },
  { icon: BadgeIndianRupee,  label: '₹0 Platform Fee'             },
  { icon: MapPin,            label: 'Chandigarh Tricity'          },
];

export default function HeroSection() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 80);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section style={{
      position: 'relative',
      minHeight: '100svh',
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden',
    }}>

      {/* ── Background image ── */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <Image
          src="/hero-bg.png"
          alt="Kwikkit food delivery app"
          fill
          priority
          style={{ objectFit: 'cover', objectPosition: 'center center' }}
          sizes="100vw"
        />

        {/*
          The image: left half = Chandigarh monument (light/golden sky)
                     right half = phone mockup (dark green)
          Gradient strategy:
            - Left side: heavy dark overlay so text is readable
            - Right side: near-transparent so phone mockup remains visible
            - Bottom: fade to dark for the ticker strip
        */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to right, rgba(4,18,16,0.92) 0%, rgba(4,18,16,0.80) 30%, rgba(4,18,16,0.35) 52%, rgba(0,0,0,0.05) 68%, transparent 100%)',
        }} />

        {/* top navbar fade */}
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0, height: '160px',
          background: 'linear-gradient(to bottom, rgba(4,18,16,0.6) 0%, transparent 100%)',
        }} />

        {/* bottom fade into ticker */}
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0, height: '200px',
          background: 'linear-gradient(to top, rgba(4,18,16,0.95) 0%, transparent 100%)',
        }} />
      </div>

      {/* ── Hero content — bottom-left aligned ── */}
      <div style={{
        position: 'relative', zIndex: 1,
        flex: 1,
        display: 'flex',
        alignItems: 'flex-end',          /* anchor to bottom */
        paddingTop: '120px',
        paddingBottom: '52px',
        paddingLeft: 'max(28px, calc((100vw - 1240px) / 2 + 28px))',
        paddingRight: 'max(28px, calc((100vw - 1240px) / 2 + 28px))',
      }}>
        {/* Text block — left half only */}
        <div style={{ width: '100%', maxWidth: '520px' }}>

          {/* Live pill */}
          <div style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.6s ease 0.05s, transform 0.6s ease 0.05s',
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            background: 'rgba(255,229,0,0.12)',
            border: '1px solid rgba(255,229,0,0.3)',
            padding: '5px 14px', borderRadius: '100px', marginBottom: '24px',
          }}>
            <span className="dot-blink" style={{
              width: '6px', height: '6px', borderRadius: '50%',
              background: 'var(--yellow)', display: 'inline-block',
            }} />
            <span style={{
              fontSize: '11px', fontWeight: '700', color: 'var(--yellow)',
              letterSpacing: '0.09em', textTransform: 'uppercase',
            }}>
              Live in Chandigarh Tricity
            </span>
          </div>

          {/* Headline */}
          <h1 style={{
            fontFamily: "'Syne', sans-serif",
            fontWeight: '800',
            fontSize: 'clamp(38px, 5.5vw, 72px)',
            lineHeight: '1.0',
            letterSpacing: '-0.035em',
            color: 'var(--cream)',
            marginBottom: '20px',
            opacity: loaded ? 1 : 0,
            transform: loaded ? 'translateY(0)' : 'translateY(28px)',
            transition: 'opacity 0.7s ease 0.15s, transform 0.7s ease 0.15s',
          }}>
            Pay what the<br />
            <span style={{
              background: 'linear-gradient(90deg, var(--yellow) 0%, #fffaaa 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>restaurant</span><br />
            actually charges.
          </h1>

          {/* Subtext */}
          <p style={{
            fontSize: '16px',
            lineHeight: '1.72',
            color: 'rgba(253,248,242,0.65)',
            marginBottom: '36px',
            maxWidth: '420px',
            fontWeight: '400',
            opacity: loaded ? 1 : 0,
            transform: loaded ? 'translateY(0)' : 'translateY(24px)',
            transition: 'opacity 0.7s ease 0.26s, transform 0.7s ease 0.26s',
          }}>
            No hidden fees. No inflated menu prices.<br />
            Just honest food delivery from places you already love.
          </p>

          {/* CTA buttons */}
          <div style={{
            display: 'flex', flexWrap: 'wrap', gap: '12px',
            marginBottom: '40px',
            opacity: loaded ? 1 : 0,
            transform: loaded ? 'translateY(0)' : 'translateY(24px)',
            transition: 'opacity 0.7s ease 0.36s, transform 0.7s ease 0.36s',
          }}>
            <a href="#download" style={{
              display: 'inline-flex', alignItems: 'center', gap: '10px',
              background: 'var(--cream)', color: 'var(--green-dark)',
              padding: '13px 26px', borderRadius: '14px',
              fontWeight: '700', fontSize: '14px', textDecoration: 'none',
              boxShadow: '0 6px 28px rgba(0,0,0,0.35)',
              transition: 'transform 0.25s cubic-bezier(.34,1.56,.64,1), box-shadow 0.25s ease',
            }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 14px 40px rgba(0,0,0,0.45)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 6px 28px rgba(0,0,0,0.35)'; }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="var(--green-dark)">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98l-.09.06c-.22.14-2.22 1.3-2.2 3.88.03 3.02 2.65 4.03 2.68 4.04l-.03.1zM13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              App Store
            </a>

            <a href="#download" style={{
              display: 'inline-flex', alignItems: 'center', gap: '10px',
              background: 'rgba(255,255,255,0.1)',
              border: '1px solid rgba(255,255,255,0.22)',
              backdropFilter: 'blur(8px)',
              color: 'var(--cream)',
              padding: '13px 26px', borderRadius: '14px',
              fontWeight: '700', fontSize: '14px', textDecoration: 'none',
              transition: 'transform 0.25s cubic-bezier(.34,1.56,.64,1), background 0.25s ease',
            }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.background = 'rgba(255,255,255,0.18)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.background = 'rgba(255,255,255,0.1)'; }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="var(--cream)">
                <path d="M3.18 23.76c.3.17.65.19.98.07L14.94 12 3.16.17C2.83.05 2.48.07 2.18.24 1.6.57 1.25 1.2 1.25 1.93v20.14c0 .73.35 1.36.93 1.69zM16.34 13.19l2.69 2.69-9.14 5.08 6.45-7.77zM20.7 9.99l-2.26-1.26-3.1 3.1 3.1 3.1 2.28-1.27c.65-.36 1.04-.97 1.04-1.67s-.39-1.29-1.06-1.9zM9.89 12L3.44 3.04l9.14 5.08-2.69 2.69V12z" />
              </svg>
              Google Play
            </a>
          </div>

          {/* Stats strip — compact horizontal row */}
          <div style={{
            display: 'flex', gap: '0px',
            borderRadius: '14px', overflow: 'hidden',
            border: '1px solid rgba(255,255,255,0.08)',
            opacity: loaded ? 1 : 0,
            transform: loaded ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.7s ease 0.46s, transform 0.7s ease 0.46s',
          }}>
            {stats.map((s, i) => (
              <div key={s.label} style={{
                flex: 1, padding: '14px 10px', textAlign: 'center',
                background: 'rgba(0,30,25,0.65)', backdropFilter: 'blur(16px)',
                borderRight: i < stats.length - 1 ? '1px solid rgba(255,255,255,0.07)' : 'none',
              }}>
                <div style={{
                  fontFamily: "'Syne',sans-serif", fontWeight: '900', fontSize: '19px',
                  color: 'var(--yellow)', lineHeight: '1.1',
                }}>{s.val}</div>
                <div style={{
                  fontSize: '10px', color: 'rgba(253,248,242,0.45)',
                  marginTop: '3px', fontWeight: '600', textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Scrolling ticker bar ── */}
      <div style={{
        position: 'relative', zIndex: 1,
        background: 'rgba(3,15,13,0.88)', backdropFilter: 'blur(10px)',
        borderTop: '1px solid rgba(255,255,255,0.07)',
        padding: '12px 0', overflow: 'hidden',
      }}>
        <div style={{
          display: 'flex', width: 'max-content', whiteSpace: 'nowrap',
          animation: 'marquee 32s linear infinite',
        }}>
          {[...ticker, ...ticker, ...ticker].map((t, i) => {
            const Icon = t.icon;
            return (
              <span key={i} style={{
                padding: '0 36px', fontSize: '13px', fontWeight: '600',
                color: 'rgba(253,248,242,0.65)',
                borderRight: '1px solid rgba(255,255,255,0.08)',
                display: 'inline-flex', alignItems: 'center', gap: '8px',
              }}>
                <Icon size={14} strokeWidth={2} style={{ color: 'var(--yellow)', flexShrink: 0 }} />
                {t.label}
              </span>
            );
          })}
        </div>
      </div>

      <style>{`
        @keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-33.333%); } }
        @keyframes blinkDot { 0%,100%{opacity:1} 50%{opacity:0.2} }
        .dot-blink { animation: blinkDot 1.6s ease infinite; }
      `}</style>
    </section>
  );
}
