'use client';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  BadgeIndianRupee, Bike, Phone, Receipt, Ban, Star, Users, Building2,
  MapPin, Heart, Shield, Handshake, TrendingUp, Zap, ArrowRight, Mail,
  PhoneCall, Download, Briefcase, Target, Compass, Sparkles, Quote, Award, Check
} from 'lucide-react';

/* ─── Scroll Reveal Hook ─────────────────────────── */
function useReveal(ref) {
  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.08 }
    );
    ref.current?.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}

/* ─── Animated Counter ───────────────────────────── */
function Counter({ target, suffix = '', prefix = '' }) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !started) {
        setStarted(true);
        const isDecimal = String(target).includes('.');
        const num = parseFloat(target);
        const duration = 1500;
        const steps = 50;
        const step = num / steps;
        let current = 0;
        const timer = setInterval(() => {
          current += step;
          if (current >= num) { setCount(num); clearInterval(timer); }
          else setCount(isDecimal ? parseFloat(current.toFixed(1)) : Math.floor(current));
        }, duration / steps);
      }
    }, { threshold: 0.2 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [target, started]);

  return (
    <span ref={ref} style={{
      fontFamily: "'Syne', sans-serif",
      fontWeight: '900',
      fontSize: 'clamp(32px, 5.5vw, 68px)',
      background: 'linear-gradient(135deg, var(--yellow) 0%, #fffaaa 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
      lineHeight: '1'
    }}>
      {prefix}{count}{suffix}
    </span>
  );
}

/* ═══════════════════════════════════════════════════
   SECTION 1 — COMBINED HERO
   ═══════════════════════════════════════════════════ */
function AboutHero() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => { const t = setTimeout(() => setLoaded(true), 80); return () => clearTimeout(t); }, []);

  return (
    <section style={{ position: 'relative', minHeight: '92vh', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>

      {/* ── Background ── */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <Image
          src="/herobg/about-herobg.png"
          alt=""
          fill priority
          sizes="100vw"
          style={{ objectFit: 'cover', objectPosition: 'center 30%' }}
        />
        {/* heavy dark overlay */}
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(3,11,10,0.8)' }} />
        {/* grid pattern */}
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)', backgroundSize: '64px 64px', pointerEvents: 'none' }} />
        {/* green glow bloom */}
        <div style={{ position: 'absolute', bottom: '-60px', left: '50%', transform: 'translateX(-50%)', width: '1000px', height: '500px', background: 'radial-gradient(ellipse, rgba(0,95,87,0.18) 0%, transparent 68%)', pointerEvents: 'none' }} />
        {/* yellow accent orb */}
        <div style={{ position: 'absolute', top: '20%', right: '10%', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(255,229,0,0.04) 0%, transparent 65%)', pointerEvents: 'none' }} />
      </div>

      {/* ── Content ── */}
      <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', padding: '140px 28px 80px', maxWidth: '820px', margin: '0 auto', width: '100%' }}>

        {/* Eyebrow */}
        <div style={{
          opacity: loaded ? 1 : 0, transform: loaded ? 'translateY(0)' : 'translateY(24px)',
          transition: 'opacity 0.7s ease 0.05s, transform 0.7s ease 0.05s',
          display: 'inline-flex', alignItems: 'center', gap: '8px',
          background: 'rgba(255,229,0,0.09)', border: '1px solid rgba(255,229,0,0.22)',
          padding: '6px 18px', borderRadius: '100px', marginBottom: '32px',
          fontSize: '11px', fontWeight: '700', color: 'var(--yellow)', letterSpacing: '0.1em', textTransform: 'uppercase'
        }}>
          <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--yellow)', display: 'inline-block', animation: 'blinkY 1.6s ease infinite' }} />
          About Kwikkit
        </div>

        {/* Headline */}
        <h1 style={{
          opacity: loaded ? 1 : 0, transform: loaded ? 'translateY(0)' : 'translateY(24px)',
          transition: 'opacity 0.7s ease 0.15s, transform 0.7s ease 0.15s',
          fontFamily: "'Syne',sans-serif", fontWeight: '800',
          fontSize: 'clamp(28px,5.8vw,80px)', lineHeight: '1.05', letterSpacing: '-0.03em',
          color: 'var(--cream)', maxWidth: '980px', margin: '0 auto 28px'
        }}>
          Fixing food delivery.<br />
          <span style={{
            background: 'linear-gradient(90deg, var(--yellow) 0%, #fffaaa 100%)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
          }}>At the root, not the edges.</span>
        </h1>

        {/* Subtitle */}
        <p style={{
          opacity: loaded ? 1 : 0, transform: loaded ? 'translateY(0)' : 'translateY(24px)',
          transition: 'opacity 0.7s ease 0.28s, transform 0.7s ease 0.28s',
          fontSize: '18px', lineHeight: '1.75', color: 'rgba(253,248,242,0.5)', maxWidth: '720px', margin: '0 auto 48px'
        }}>
          The traditional delivery model extracts margins from restaurants and inflates prices for customers. Kwikkit is building a fair alternative based on transparency, zero-commission economics, and respect.
        </p>

        {/* Action Buttons */}
        <div style={{
          opacity: loaded ? 1 : 0, transform: loaded ? 'translateY(0)' : 'translateY(24px)',
          transition: 'opacity 0.7s ease 0.35s, transform 0.7s ease 0.35s',
          display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap', marginBottom: '10px'
        }}>
          <a href="#origin" className="btn btn-yellow" style={{ padding: '16px 36px', fontSize: '14.5px' }}>
            Our Story <ArrowRight size={15} />
          </a>
          <a href="#mission" className="btn btn-ghost" style={{ padding: '16px 36px', fontSize: '14.5px', background: 'transparent', border: '1px solid rgba(255,255,255,0.1)' }}>
            Core Pillars
          </a>
        </div>

        {/* Scroll hint */}
        <div style={{
          opacity: loaded ? 1 : 0, transform: loaded ? 'translateY(0)' : 'translateY(24px)',
          transition: 'opacity 0.7s ease 0.5s, transform 0.7s ease 0.5s',
          marginTop: '80px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px'
        }}>
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
    </section>
  );
}

/* ═══════════════════════════════════════════════════
   SECTION 2 — THE ORIGIN TIMELINE
   ═══════════════════════════════════════════════════ */
function OriginSection() {
  const ref = useRef(null);
  useReveal(ref);

  const events = [
    {
      icon: MapPin,
      color: 'var(--yellow)',
      colorBg: 'rgba(255,229,0,0.1)',
      colorBorder: 'rgba(255,229,0,0.2)',
      step: '01',
      title: 'The Biryani Order',
      body: "Sitting in Pune, craving biryani. Opened a food delivery app and noticed a familiar restaurant — but the price felt off. The same dish was ₹80 more expensive than what was on the restaurant's actual menu.",
    },
    {
      icon: Phone,
      color: 'var(--green-light)',
      colorBg: 'rgba(0,155,141,0.12)',
      colorBorder: 'rgba(0,155,141,0.25)',
      step: '02',
      title: 'The Phone Call',
      body: 'Called the restaurant directly to confirm. The dine-in and takeaway price was exactly as expected — the delivery app had silently marked it up. No warning. No disclosure.',
    },
    {
      icon: Bike,
      color: '#a78bfa',
      colorBg: 'rgba(167,139,250,0.1)',
      colorBorder: 'rgba(167,139,250,0.22)',
      step: '03',
      title: 'The Rapido Experiment',
      body: 'Booked a Rapido bike to the restaurant and bought the biryani in person. Total cost including the ride: ₹200 less than ordering on the delivery app. The math was undeniable.',
    },
    {
      icon: Receipt,
      color: '#f87171',
      colorBg: 'rgba(248,113,113,0.1)',
      colorBorder: 'rgba(248,113,113,0.22)',
      step: '04',
      title: 'The Real Cost',
      body: 'Between the menu markup, platform fee, and GST calculated on inflated prices — customers were being charged significantly more than the actual cost of food. The system was quietly unfair.',
    },
    {
      icon: TrendingUp,
      color: 'var(--yellow)',
      colorBg: 'rgba(255,229,0,0.1)',
      colorBorder: 'rgba(255,229,0,0.2)',
      step: '05',
      title: 'The Idea That Became Kwikkit',
      body: 'What if delivery worked differently? What if you paid exactly what the restaurant charges — and nothing more? That single question started everything. Kwikkit was born to answer it.',
    },
  ];

  return (
    <section ref={ref} id="origin" style={{ background: 'var(--cream)', padding: '120px 0', position: 'relative', overflow: 'hidden' }}>
      <div style={{
        position: 'absolute', inset: 0, backgroundImage: 'url(/biryani-bg.png)',
        backgroundSize: 'cover', backgroundPosition: 'center center', opacity: 0.08, pointerEvents: 'none', zIndex: 0,
      }} />
      <div style={{
        position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, var(--cream) 0%, rgba(253, 248, 242, 0.2) 15%, rgba(253, 248, 242, 0.2) 85%, var(--cream) 100%)',
        pointerEvents: 'none', zIndex: 0,
      }} />

      <div className="section-wrap" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <span className="reveal tag tag-green" style={{ marginBottom: '16px' }}>Our History</span>
          <h2 className="reveal heading-display heading-lg" style={{ color: 'var(--text-primary)', marginBottom: '18px' }}>
            How one biryani order<br /><span className="gradient-text-green">changed everything</span>
          </h2>
          <p className="reveal" style={{ fontSize: '17px', lineHeight: '1.7', color: 'var(--text-muted)', maxWidth: '500px', margin: '0 auto' }}>
            A real-world realization that led to a decision to rebuild food delivery economics.
          </p>
        </div>

        {/* Timeline container */}
        <div style={{ position: 'relative', maxWidth: '840px', margin: '0 auto' }} className="timeline-container">
          {/* vertical line */}
          <div style={{
            position: 'absolute', left: '50%', top: 0, bottom: 0,
            width: '2px', background: 'linear-gradient(to bottom, transparent, rgba(0,95,87,0.12) 8%, rgba(0,95,87,0.12) 92%, transparent)',
            transform: 'translateX(-50%)', pointerEvents: 'none',
          }} className="timeline-line" />

          {events.map((ev, i) => {
            const isLeft = i % 2 === 0;
            const Icon = ev.icon;
            return (
              <div key={ev.step} className={isLeft ? 'reveal-left' : 'reveal-right'}
                style={{ transitionDelay: `${i * 80}ms`, display: 'flex', justifyContent: isLeft ? 'flex-start' : 'flex-end', marginBottom: '48px', position: 'relative' }}>

                {/* center dot */}
                <div style={{
                  position: 'absolute', left: '50%', top: '24px', transform: 'translateX(-50%)',
                  width: '14px', height: '14px', borderRadius: '50%',
                  background: ev.color, border: `3px solid var(--cream)`,
                  boxShadow: `0 0 0 4px ${ev.colorBg}`, zIndex: 2,
                }} className="timeline-dot" />

                <div style={{ width: '44%' }} className="timeline-card-wrap">
                  <div className="surface-card" style={{ padding: '28px 26px', background: 'var(--white)', border: '1px solid rgba(0,95,87,0.06)', borderRadius: '20px', boxShadow: '0 4px 24px rgba(0,95,87,0.02)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
                      <div style={{
                        width: '40px', height: '40px', borderRadius: '11px', flexShrink: 0,
                        background: ev.colorBg, border: `1px solid ${ev.colorBorder}`,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                      }}>
                        <Icon size={18} color={ev.color} strokeWidth={1.8} />
                      </div>
                      <span style={{ fontFamily: "'Syne',sans-serif", fontWeight: '900', fontSize: '11px', color: 'rgba(0,95,87,0.3)', letterSpacing: '0.08em' }}>
                        STEP {ev.step}
                      </span>
                    </div>
                    <h3 style={{ fontFamily: "'Syne',sans-serif", fontWeight: '750', fontSize: '17px', color: 'var(--text-primary)', marginBottom: '10px', letterSpacing: '-0.02em' }}>
                      {ev.title}
                    </h3>
                    <p style={{ fontSize: '14px', lineHeight: '1.65', color: 'var(--text-muted)' }}>{ev.body}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════
   SECTION 3 — CORE PILLARS
   ═══════════════════════════════════════════════════ */
function PillarsSection() {
  const ref = useRef(null);
  useReveal(ref);
  const [hoveredPillar, setHoveredPillar] = useState(null);

  const pillars = [
    {
      id: 1,
      num: '01',
      title: 'Pricing Power Belongs to Restaurants',
      beliefText: 'Restaurants invest years perfecting their food, understanding ingredients, and earning guest trust. They should decide what their menu items cost — not platform algorithms.',
      controls: ['Menu pricing control', 'Direct margin protection', 'Freedom from forced discounts'],
      themeColor: 'var(--green-light)',
      themeBg: 'rgba(0, 155, 141, 0.08)',
      glowColor: 'rgba(0, 155, 141, 0.12)',
    },
    {
      id: 2,
      num: '02',
      title: 'Customers Deserve Honest Pricing',
      beliefText: 'Customers should know exactly what they are paying for. The displayed price on the app should match the dine-in menu price. No inflated rates, no hidden fees.',
      controls: ['Consistent dine-in rates', 'Fully transparent delivery fees', 'Zero markup guarantee'],
      themeColor: 'var(--yellow)',
      themeBg: 'rgba(255, 229, 0, 0.08)',
      glowColor: 'rgba(255, 229, 0, 0.15)',
    },
    {
      id: 3,
      num: '03',
      title: "Delivery Tech Shouldn't Squeeze Margins",
      beliefText: 'Connecting users to local kitchens is valuable, but extracting 25-30% on every transaction is not. Software should support local commerce, not extract from it.',
      controls: ['0% platform commission', 'Flat, clear delivery rates', 'Direct settlement structures'],
      themeColor: '#a78bfa',
      themeBg: 'rgba(167, 139, 250, 0.08)',
      glowColor: 'rgba(167, 139, 250, 0.15)',
    },
    {
      id: 4,
      num: '04',
      title: 'Local Kitchens Are Worth Protecting',
      beliefText: 'Independent cafes, home kitchens, and heritage dhabas form the cultural backbone of Tricity. They deserve sustainable delivery economics to thrive.',
      controls: ['Supporting independent kitchens', 'Protecting heritage eateries', 'Community-centric operations'],
      themeColor: '#f97316',
      themeBg: 'rgba(249, 115, 22, 0.08)',
      glowColor: 'rgba(249, 115, 22, 0.15)',
    }
  ];

  return (
    <section ref={ref} id="mission" style={{ padding: '120px 0', background: 'var(--dark-2)', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: '10%', left: '-5%', width: '500px', height: '500px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(0,155,141,0.12) 0%, transparent 65%)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: '10%', right: '-5%', width: '500px', height: '500px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,229,0,0.04) 0%, transparent 65%)', pointerEvents: 'none' }} />

      <div className="section-wrap" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <span className="reveal tag tag-green-dark" style={{ marginBottom: '16px' }}>Our Mission</span>
          <h2 className="reveal heading-display heading-lg" style={{ color: 'var(--cream)', marginBottom: '18px' }}>
            The Pillars of <span style={{ background: 'linear-gradient(90deg, var(--yellow) 0%, #fff9a0 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Fair Delivery</span>
          </h2>
          <p className="reveal" style={{ fontSize: '17px', color: 'rgba(253,248,242,0.5)', maxWidth: '480px', margin: '0 auto', lineHeight: '1.65' }}>
            Four fundamental beliefs that direct every system development and policy at Kwikkit.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '28px', maxWidth: '1000px', margin: '0 auto' }} className="about-pillars-grid">
          {pillars.map((p) => {
            const isHovered = hoveredPillar === p.id;
            return (
              <div
                key={p.id}
                style={{
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: `1px solid ${isHovered ? p.themeColor : 'rgba(255, 255, 255, 0.08)'}`,
                  borderRadius: '24px',
                  padding: '40px',
                  boxShadow: isHovered ? `0 0 20px ${p.glowColor}` : 'none',
                  transition: 'all 0.35s cubic-bezier(0.25, 0.8, 0.25, 1)',
                  transform: isHovered ? 'translateY(-6px)' : 'translateY(0)',
                  position: 'relative',
                  overflow: 'hidden'
                }}
                onMouseEnter={() => setHoveredPillar(p.id)}
                onMouseLeave={() => setHoveredPillar(null)}
              >
                <div style={{ display: 'flex', gap: '20px', alignItems: 'center', marginBottom: '24px' }}>
                  <div style={{
                    width: '44px', height: '44px', borderRadius: '50%',
                    background: p.themeBg, color: p.themeColor,
                    border: `1px solid ${p.themeColor}33`,
                    display: 'flex', alignItems: 'center', justifycontent: 'center',
                    fontWeight: '800', fontSize: '16px', flexShrink: 0
                  }}>
                    {p.num}
                  </div>
                  <h3 style={{
                    fontFamily: "'Syne', sans-serif", fontWeight: '800',
                    fontSize: '20px', color: 'var(--cream)', lineHeight: '1.25'
                  }}>{p.title}</h3>
                </div>

                <p style={{ fontSize: '15px', color: 'rgba(253,248,242,0.6)', lineHeight: '1.65', marginBottom: '24px' }}>
                  {p.beliefText}
                </p>

                <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '20px' }}>
                  <ul style={{ padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px', listStyleType: 'none' }}>
                    {p.controls.map((ctrl, idx) => (
                      <li key={idx} style={{ fontSize: '13.5px', color: 'rgba(253,248,242,0.75)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: p.themeColor, flexShrink: 0 }} />
                        {ctrl}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════
   SECTION 4 — IMPACT METRICS
   ═══════════════════════════════════════════════════ */
function MetricsSection() {
  const ref = useRef(null);
  useReveal(ref);

  const metrics = [
    { target: 0, prefix: '₹', suffix: '', label: 'Platform Commissions', desc: 'No transaction percentages. Restaurants retain 100% of their bill value.' },
    { target: 250, prefix: '', suffix: '+', label: 'Tricity Partners', desc: 'Local kitchens using Kwikkit to protect and expand their food business margins.' },
    { target: 100, prefix: '', suffix: '%', label: 'Revenue Kept', desc: 'Every rupee paid goes straight to the restaurants preparing your meals.' },
    { target: 2, prefix: '', suffix: 'x', label: 'Average Profit Increase', desc: 'Significant margin growth compared to paying 25% to legacy platforms.' }
  ];

  return (
    <section ref={ref} style={{ padding: '120px 0', background: 'var(--cream)' }}>
      <div className="section-wrap">
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <span className="reveal tag tag-green" style={{ marginBottom: '16px' }}>Our Impact</span>
          <h2 className="reveal heading-display heading-lg" style={{ color: 'var(--text-primary)', marginBottom: '16px' }}>
            Protecting Local Livelihoods
          </h2>
          <p className="reveal" style={{ fontSize: '17px', color: 'var(--text-muted)', maxWidth: '480px', margin: '0 auto' }}>
            We measure our success by the profit margins we return to our community kitchens.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: '28px', maxWidth: '1100px', margin: '0 auto' }} className="metrics-grid">
          {metrics.map((m, idx) => (
            <div key={idx} className="reveal-scale" style={{
              background: 'var(--white)', border: '1px solid rgba(0,95,87,0.06)', borderRadius: '24px',
              padding: '36px 28px', textAlign: 'center', boxShadow: '0 8px 30px rgba(0,95,87,0.025)',
              transitionDelay: `${idx * 80}ms`
            }}>
              <div style={{ marginBottom: '14px' }}>
                <Counter target={m.target} prefix={m.prefix} suffix={m.suffix} />
              </div>
              <h4 style={{ fontWeight: '800', fontSize: '15px', color: 'var(--green-dark)', marginBottom: '10px' }}>{m.label}</h4>
              <p style={{ fontSize: '13.5px', color: 'var(--text-muted)', lineHeight: '1.45' }}>{m.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════
   SECTION 5 — ECOSYSTEM VISION
   ═══════════════════════════════════════════════════ */
function VisionSection() {
  const ref = useRef(null);
  useReveal(ref);

  const visions = [
    { label: 'Restaurants retain their earnings', desc: 'Kitchens operate profitably without paying a premium to third-party tech middleware.' },
    { label: 'Customers pay honest prices', desc: 'Menu prices are direct and clean, matching the tables in the restaurant.' },
    { label: 'Technology serves businesses', desc: 'Software empowers independent operators instead of commoditizing them.' },
    { label: 'Local food culture thrives', desc: 'Tricity\'s unique food ecosystem is protected and allowed to grow sustainably.' }
  ];

  return (
    <section ref={ref} style={{ padding: '120px 0', background: 'var(--dark)' }}>
      <div className="section-wrap" style={{ maxWidth: '900px', margin: '0 auto' }}>
        <div style={{
          background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)',
          borderRadius: '32px', padding: '64px 48px', backdropFilter: 'blur(16px)',
          position: 'relative', overflow: 'hidden', textAlign: 'center'
        }} className="reveal">
          <div style={{ position: 'absolute', top: '24px', left: '24px', opacity: 0.06 }}>
            <Quote size={64} color="var(--yellow)" />
          </div>

          <span style={{
            display: 'inline-flex', alignItems: 'center', gap: '6px',
            background: 'rgba(255,229,0,0.08)', color: 'var(--yellow)',
            fontSize: '11px', fontWeight: '800', padding: '5px 14px', borderRadius: '100px',
            textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '20px'
          }}>
            <Award size={12} /> Ecosystem Vision
          </span>

          <h2 style={{ fontFamily: "'Syne', sans-serif", fontWeight: '800', fontSize: 'clamp(20px, 3.8vw, 36px)', color: 'var(--cream)', marginBottom: '14px' }}>
            Building a Better Ecosystem
          </h2>
          <p style={{ fontSize: '16px', color: 'rgba(253,248,242,0.5)', maxWidth: '520px', margin: '0 auto 48px', lineHeight: '1.5' }}>
            Kwikkit was established to prove that a delivery application can be helpful, fair, and sustainable.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', textAlign: 'left' }} className="about-vision-grid">
            {visions.map((v, i) => (
              <div key={i} style={{
                background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)',
                borderRadius: '20px', padding: '24px 28px', display: 'flex', flexDirection: 'column', gap: '8px'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--yellow)', flexShrink: 0 }} />
                  <span style={{ fontWeight: '750', fontSize: '15px', color: 'var(--cream)' }}>{v.label}</span>
                </div>
                <p style={{ fontSize: '13.5px', color: 'rgba(253,248,242,0.45)', lineHeight: '1.5', margin: 0 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════
   SECTION 6 — FINAL CTA
   ═══════════════════════════════════════════════════ */
function CTASection() {
  return (
    <section style={{ padding: '120px 0', background: 'var(--cream)' }}>
      <div className="section-wrap" style={{ maxWidth: '880px', margin: '0 auto' }}>
        <div style={{
          background: 'linear-gradient(135deg, #091514 0%, #0c1a19 100%)',
          borderRadius: '32px', padding: '64px clamp(28px,6vw,56px)',
          color: 'var(--cream)', position: 'relative', overflow: 'hidden',
          boxShadow: '0 12px 40px rgba(0,61,55,0.12)'
        }}>
          <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(255,255,255,0.01) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.01) 1px, transparent 1px)', backgroundSize: '32px 32px', pointerEvents: 'none' }} />

          <div style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
            <h3 style={{ fontFamily: "'Syne', sans-serif", fontWeight: '800', fontSize: 'clamp(20px, 3.8vw, 36px)', color: 'var(--cream)', marginBottom: '44px' }}>
              Be Part of the Change
            </h3>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px', textAlign: 'left' }} className="about-cta-split">
              {/* Customers */}
              <div style={{
                background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.07)',
                borderRadius: '20px', padding: '32px', display: 'flex', flexDirection: 'column',
                justifyContent: 'space-between', backdropFilter: 'blur(8px)'
              }}>
                <div>
                  <h4 style={{ fontFamily: "'Syne', sans-serif", fontWeight: '800', fontSize: '18px', color: 'var(--yellow)', marginBottom: '14px' }}>
                    For Customers
                  </h4>
                  <ul style={{ padding: 0, margin: '0 0 28px 0', listStyleType: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <li style={{ display: 'flex', gap: '8px', fontSize: '14px', color: 'rgba(253, 248, 242, 0.75)' }}>
                      <span style={{ color: 'var(--yellow)' }}>✓</span> Order at real menu prices
                    </li>
                    <li style={{ display: 'flex', gap: '8px', fontSize: '14px', color: 'rgba(253, 248, 242, 0.75)' }}>
                      <span style={{ color: 'var(--yellow)' }}>✓</span> Browse top local restaurants
                    </li>
                  </ul>
                </div>

                <a href="/#download" style={{
                  display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
                  background: 'var(--yellow)', color: 'var(--green-dark)',
                  padding: '13px 24px', borderRadius: '100px',
                  fontWeight: '800', fontSize: '14px', textDecoration: 'none',
                  transition: 'transform 0.2s ease', textAlign: 'center'
                }}
                  onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-2px)'}
                  onMouseLeave={e => e.currentTarget.style.transform = ''}>
                  Get the App <ArrowRight size={14} />
                </a>
              </div>

              {/* Restaurants */}
              <div style={{
                background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.07)',
                borderRadius: '20px', padding: '32px', display: 'flex', flexDirection: 'column',
                justifyContent: 'space-between', backdropFilter: 'blur(8px)'
              }}>
                <div>
                  <h4 style={{ fontFamily: "'Syne', sans-serif", fontWeight: '800', fontSize: '18px', color: 'var(--cream)', marginBottom: '14px' }}>
                    For Restaurants
                  </h4>
                  <ul style={{ padding: 0, margin: '0 0 28px 0', listStyleType: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <li style={{ display: 'flex', gap: '8px', fontSize: '14px', color: 'rgba(253, 248, 242, 0.75)' }}>
                      <span style={{ color: 'var(--green-light)' }}>✓</span> Keep 100% of order value
                    </li>
                    <li style={{ display: 'flex', gap: '8px', fontSize: '14px', color: 'rgba(253, 248, 242, 0.75)' }}>
                      <span style={{ color: 'var(--green-light)' }}>✓</span> List in 24 hours live
                    </li>
                  </ul>
                </div>

                <Link href="/restaurants" style={{
                  display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
                  background: 'rgba(255, 255, 255, 0.08)', color: 'var(--cream)',
                  padding: '13px 24px', borderRadius: '100px',
                  fontWeight: '800', fontSize: '14px', textDecoration: 'none',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  transition: 'all 0.2s ease', textAlign: 'center'
                }}
                  onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)'; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)'; }}>
                  Partner With Us <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════
   MAIN ABOUT PAGE
   ═══════════════════════════════════════════════════ */
export default function AboutPage() {
  const pageRef = useRef(null);
  useReveal(pageRef);

  return (
    <main ref={pageRef} style={{ background: 'var(--cream)', minHeight: '100vh', overflowX: 'hidden' }}>
      <AboutHero />
      <OriginSection />
      <PillarsSection />
      <MetricsSection />
      <VisionSection />
      <CTASection />

      <style>{`
        @keyframes scrollLine { 0%{opacity:0;transform:scaleY(0);transform-origin:top} 50%{opacity:1;transform:scaleY(1)} 100%{opacity:0;transform:scaleY(1);transform-origin:bottom} }
        @keyframes blinkDot { 0%,100%{opacity:1} 50%{opacity:0.2} }
        @keyframes blinkY { 0%,100%{opacity:1} 50%{opacity:0.25} }
        @keyframes chevDrop { 0%,100%{transform:translateY(0)} 50%{transform:translateY(6px)} }
        .dot-blink { animation: blinkDot 1.6s ease infinite; }
        
        @media (max-width: 768px) {
          .timeline-line { display: none !important; }
          .timeline-dot { display: none !important; }
          .timeline-card-wrap { width: 100% !important; }
          .about-pillars-grid { grid-template-columns: 1fr !important; gap: 20px !important; }
          .about-vision-grid { grid-template-columns: 1fr !important; gap: 16px !important; }
          .about-cta-split { grid-template-columns: 1fr !important; gap: 24px !important; }
          .metrics-grid { grid-template-columns: 1fr 1fr !important; gap: 20px !important; }
        }
        @media (max-width: 480px) {
          .metrics-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </main>
  );
}
