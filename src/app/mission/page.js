'use client';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Check, Target, Compass, Sparkles, Quote, Award } from 'lucide-react';

/* ─── Scroll reveal hook ─────────────────────────── */
function useReveal(ref) {
  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll('.reveal,.reveal-left,.reveal-right,.reveal-scale').forEach(el => obs.observe(el));
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
    <span ref={ref} style={{ fontFamily: "'Syne', sans-serif", fontWeight: '900', fontSize: 'clamp(44px, 5.5vw, 68px)', color: 'var(--green-dark)', lineHeight: '1' }}>
      {prefix}{count}{suffix}
    </span>
  );
}

export default function MissionPage() {
  const [hoveredPillar, setHoveredPillar] = useState(null);
  const [hoveredMetric, setHoveredMetric] = useState(null);
  const mainRef = useRef(null);
  useReveal(mainRef);

  const pillars = [
    {
      id: 1,
      num: '01',
      title: 'Pricing Power Belongs to Restaurants',
      beliefTitle: 'Core Belief',
      beliefText: 'Restaurants invest years perfecting their food, understanding costs, and building customer trust.',
      controlLabel: 'They should have complete control over:',
      controls: ['Menu pricing', 'Product value', 'Business economics'],
      controlSub: 'Not delivery platforms.',
      keyMessage: 'Restaurants should decide what their food costs—not platform algorithms.',
      themeColor: '#009587',
      themeBg: 'rgba(0, 149, 135, 0.08)',
      glowColor: 'rgba(0, 149, 135, 0.15)',
      cardBorder: 'rgba(0, 149, 135, 0.15)'
    },
    {
      id: 2,
      num: '02',
      title: 'Customers Deserve Honest Pricing',
      beliefTitle: 'Core Belief',
      beliefText: 'Customers should know exactly what they are paying for.',
      controlLabel: 'Food prices should remain:',
      controls: ['Transparent', 'Consistent', 'Honest'],
      controlSub: 'Whether ordered in the restaurant or through a delivery app.',
      keyMessage: 'The displayed price should be the actual restaurant price.',
      themeColor: '#FFD700',
      themeBg: 'rgba(255, 215, 0, 0.08)',
      glowColor: 'rgba(255, 215, 0, 0.15)',
      cardBorder: 'rgba(255, 215, 0, 0.2)'
    },
    {
      id: 3,
      num: '03',
      title: "Delivery Technology Shouldn't Cost Restaurants Their Livelihood",
      beliefTitle: 'Core Belief',
      beliefText: 'Technology should help restaurants grow, not reduce their margins.',
      controlLabel: 'Our perspective:',
      controls: [
        'Connecting restaurants with customers is valuable.',
        'Taking a large percentage of every order is not.'
      ],
      controlSub: 'Software should enable businesses—not extract from them.',
      keyMessage: 'Software should enable businesses—not extract from them.',
      themeColor: '#8B5CF6',
      themeBg: 'rgba(139, 92, 246, 0.08)',
      glowColor: 'rgba(139, 92, 246, 0.15)',
      cardBorder: 'rgba(139, 92, 246, 0.15)'
    },
    {
      id: 4,
      num: '04',
      title: 'Local Food Businesses Are Worth Protecting',
      beliefTitle: 'Core Belief',
      beliefText: "Local restaurants form the backbone of every city's food culture.",
      controlLabel: 'This includes supporting:',
      controls: ['Dhabas', 'Family-owned restaurants', 'Home kitchens', 'Independent food businesses'],
      controlSub: 'These businesses deserve sustainable delivery economics.',
      keyMessage: 'Supporting local restaurants strengthens communities.',
      themeColor: '#F97316',
      themeBg: 'rgba(249, 115, 22, 0.08)',
      glowColor: 'rgba(249, 115, 22, 0.15)',
      cardBorder: 'rgba(249, 115, 22, 0.15)'
    }
  ];

  const metrics = [
    { id: 1, target: 0, prefix: '₹', suffix: '', label: 'Commission Ever Charged', desc: 'Our core business model guarantees zero extraction from restaurants.', glow: 'rgba(0,149,135,0.2)' },
    { id: 2, target: 250, prefix: '', suffix: '+', label: 'Restaurant Livelihoods Protected', desc: 'Tricity kitchens keeping 100% of their hard-earned delivery revenues.', glow: 'rgba(255,215,0,0.25)' },
    { id: 3, target: 100, prefix: '', suffix: '%', label: 'Revenue Goes To Restaurants', desc: 'No platform cuts, no hidden operational fee deductions on menu orders.', glow: 'rgba(139,92,246,0.2)' },
    { id: 4, target: 2, prefix: '', suffix: '×', label: 'More Earnings Per Order', desc: 'Significant margin improvements compared to traditional 25%+ commissions.', glow: 'rgba(249,115,22,0.2)' }
  ];

  return (
    <main 
      ref={mainRef} 
      style={{ 
        backgroundImage: 'url(/mission-bg.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundAttachment: 'fixed',
        minHeight: '100vh', 
        paddingBottom: '120px', 
        fontFamily: "'Inter', sans-serif",
        position: 'relative'
      }}
    >
      {/* Semi-transparent cream overlay to align with the website cream color but allow the tactile texture to show through */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'rgba(250, 249, 246, 0.88)',
        pointerEvents: 'none',
        zIndex: 0
      }} />

      {/* Subtle vignette on edges */}
      <div style={{ 
        position: 'absolute', 
        inset: 0, 
        background: 'radial-gradient(ellipse at center, transparent 40%, rgba(220,210,198,0.4) 100%)', 
        pointerEvents: 'none',
        zIndex: 0
      }} />

      {/* Floating background ambient orbs */}
      <div style={{ position: 'absolute', top: '15%', left: '5%', width: '450px', height: '450px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(0,155,141,0.06) 0%, transparent 70%)', pointerEvents: 'none', zIndex: 0 }} />
      <div style={{ position: 'absolute', bottom: '25%', right: '5%', width: '500px', height: '500px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,229,0,0.04) 0%, transparent 70%)', pointerEvents: 'none', zIndex: 0 }} />

      {/* Hero section handles its own background wrapper */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        
        {/* ─── Hero Section ─── */}
        <section style={{
          background: 'linear-gradient(135deg, var(--green-dark) 0%, var(--green) 100%)',
          padding: '160px 28px 100px',
          borderBottom: '1px solid rgba(255,255,255,0.06)',
          position: 'relative',
          overflow: 'hidden',
          textAlign: 'center'
        }}>
          {/* Pattern Background */}
          <div style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
            opacity: 0.8,
            pointerEvents: 'none'
          }} />
          <div style={{ position: 'absolute', top: '-10%', left: '-5%', width: '400px', height: '400px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(0,155,141,0.08) 0%, transparent 70%)', pointerEvents: 'none' }} />

          <div style={{ maxWidth: '800px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: 'rgba(255, 255, 255, 0.04)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              padding: '5px 14px',
              borderRadius: '100px',
              marginBottom: '28px'
            }}>
              <Target size={12} color="var(--yellow)" />
              <span style={{ fontSize: '10.5px', fontWeight: '700', color: 'var(--yellow)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                Our Mission
              </span>
            </div>

            <h1 style={{
              fontFamily: "'Syne', sans-serif",
              fontWeight: '800',
              fontSize: 'clamp(36px, 5.5vw, 62px)',
              color: 'var(--cream)',
              lineHeight: '1.15',
              letterSpacing: '-0.025em',
              marginBottom: '32px'
            }}>
              Fix food delivery. <br style={{ display: 'none' }} className="hero-br" />
              <span style={{ background: 'linear-gradient(90deg, var(--yellow) 0%, #fff9a0 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                Not around the edges. At the root.
              </span>
            </h1>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '18px', marginBottom: '10px' }}>
              <p style={{
                fontSize: 'clamp(16px, 1.8vw, 19px)',
                lineHeight: '1.65',
                color: 'rgba(253, 248, 242, 0.95)',
                maxWidth: '700px',
                margin: '0 auto'
              }}>
                The current food delivery model extracts money from restaurants, hides charges from customers, and presents it as convenience.
              </p>
              <p style={{
                fontSize: 'clamp(16px, 1.8vw, 19px)',
                lineHeight: '1.65',
                color: 'var(--yellow)',
                fontWeight: '700',
                maxWidth: '700px',
                margin: '0 auto'
              }}>
                Kwikkit is building an alternative based on transparency, fairness, and sustainable economics.
              </p>
            </div>
          </div>
        </section>

        {/* ─── Main Content Wrapper ─── */}
        <div style={{ maxWidth: '850px', margin: '0 auto', padding: '0 24px' }}>

          {/* ─── Mission Pillars Section ─── */}
          <section style={{ marginTop: '90px' }}>
            <div style={{ textAlign: 'center', marginBottom: '56px' }}>
              <span style={{ 
                display: 'inline-flex', 
                alignItems: 'center', 
                gap: '6px', 
                background: 'rgba(0, 95, 87, 0.06)', 
                padding: '6px 14px', 
                borderRadius: '100px', 
                fontSize: '11px', 
                fontWeight: '800', 
                color: 'var(--green-dark)', 
                textTransform: 'uppercase', 
                letterSpacing: '0.08em', 
                marginBottom: '14px' 
              }}>
                <Compass size={12} /> The Pillars
              </span>
              <h2 style={{ fontFamily: "'Syne', sans-serif", fontWeight: '800', fontSize: 'clamp(26px, 3.8vw, 36px)', color: '#111827', marginBottom: '12px' }}>
                Our Core Pillars
              </h2>
              <p style={{ fontSize: '16px', color: '#6B7280', maxWidth: '520px', margin: '0 auto', lineHeight: '1.5' }}>
                Four fundamental values that direct every product feature, fee structure, and decision at Kwikkit.
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '36px' }} className="reveal-left">
              {pillars.map((p) => {
                const isHovered = hoveredPillar === p.id;
                return (
                  <div 
                    key={p.id}
                    style={{
                      background: 'rgba(255, 255, 255, 0.72)',
                      backdropFilter: 'blur(16px)',
                      WebkitBackdropFilter: 'blur(16px)',
                      border: `1px solid ${isHovered ? p.themeColor : 'rgba(255, 255, 255, 0.55)'}`,
                      borderRadius: '24px',
                      padding: '40px',
                      boxShadow: isHovered 
                        ? `0 20px 40px rgba(0, 0, 0, 0.03), 0 1px 3px rgba(0,0,0,0.01), inset 0 2px 4px rgba(255, 255, 255, 0.9), 0 0 16px ${p.glowColor}`
                        : '0 8px 32px rgba(0, 0, 0, 0.025), inset 0 1px 2px rgba(255, 255, 255, 0.8)',
                      transition: 'all 0.35s cubic-bezier(0.25, 0.8, 0.25, 1)',
                      transform: isHovered ? 'translateY(-5px)' : 'translateY(0)',
                      position: 'relative',
                      overflow: 'hidden'
                    }}
                    onMouseEnter={() => setHoveredPillar(p.id)}
                    onMouseLeave={() => setHoveredPillar(null)}
                  >
                    {/* Glassmorphism Corner Glow */}
                    <div style={{ 
                      position: 'absolute', 
                      bottom: '-40px', 
                      right: '-40px', 
                      width: '180px', 
                      height: '180px', 
                      borderRadius: '50%', 
                      background: `radial-gradient(circle, ${p.glowColor} 0%, transparent 70%)`,
                      pointerEvents: 'none',
                      transition: 'all 0.35s ease',
                      transform: isHovered ? 'scale(1.2)' : 'scale(1)'
                    }} />

                    {/* Big background number */}
                    <div style={{
                      position: 'absolute',
                      top: '20px',
                      right: '30px',
                      fontFamily: "'Syne', sans-serif",
                      fontWeight: '900',
                      fontSize: '90px',
                      color: isHovered ? p.themeBg : 'rgba(0,0,0,0.01)',
                      lineHeight: '1',
                      pointerEvents: 'none',
                      transition: 'color 0.35s ease'
                    }}>
                      {p.num}
                    </div>

                    <div style={{ display: 'flex', gap: '20px', alignItems: 'center', marginBottom: '24px' }}>
                      <div style={{
                        width: '44px',
                        height: '44px',
                        borderRadius: '50%',
                        background: p.themeBg,
                        color: isHovered ? 'var(--green-dark)' : p.themeColor,
                        border: `1px solid ${p.cardBorder}`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontWeight: '800',
                        fontSize: '16px',
                        transition: 'all 0.3s ease'
                      }}>
                        {p.num}
                      </div>
                      <h3 style={{
                        fontFamily: "'Syne', sans-serif",
                        fontWeight: '800',
                        fontSize: 'clamp(18px, 2.5vw, 22px)',
                        color: 'var(--green-dark)',
                        lineHeight: '1.25',
                        marginRight: '60px'
                      }}>
                        {p.title}
                      </h3>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '18px', position: 'relative', zIndex: 1 }}>
                      <div>
                        <h5 style={{ fontWeight: '800', fontSize: '11px', color: '#9CA3AF', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '6px' }}>
                          {p.beliefTitle}
                        </h5>
                        <p style={{ fontSize: '15.5px', color: '#374151', lineHeight: '1.65' }}>
                          {p.beliefText}
                        </p>
                      </div>

                      <div>
                        <h5 style={{ fontWeight: '850', fontSize: '14.5px', color: '#111827', marginBottom: '8px' }}>
                          {p.controlLabel}
                        </h5>
                        <ul style={{ paddingLeft: '20px', margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                          {p.controls.map((ctrl, ctrlIdx) => (
                            <li key={ctrlIdx} style={{ fontSize: '14.5px', color: '#4B5563', listStyleType: 'none', display: 'flex', alignItems: 'center', gap: '8px' }}>
                              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: p.themeColor, flexShrink: 0 }} />
                              {ctrl}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {p.controlSub && (
                        <p style={{ fontSize: '14px', color: '#6B7280', fontWeight: '500', fontStyle: 'italic' }}>
                          {p.controlSub}
                        </p>
                      )}

                      <div style={{ 
                        borderTop: '1px solid rgba(0, 0, 0, 0.05)', 
                        paddingTop: '18px', 
                        marginTop: '8px',
                        display: 'flex',
                        gap: '10px',
                        alignItems: 'flex-start'
                      }}>
                        <div style={{ marginTop: '2px' }}>
                          <Sparkles size={14} color="var(--green)" />
                        </div>
                        <span style={{ fontSize: '14px', fontWeight: '750', color: 'var(--green-dark)', lineHeight: '1.4' }}>
                          {p.keyMessage}
                        </span>
                      </div>
                    </div>

                  </div>
                );
              })}
            </div>
          </section>

          {/* ─── Impact Metrics Section ─── */}
          <section style={{ marginTop: '100px' }}>
            <div style={{ textAlign: 'center', marginBottom: '48px' }}>
              <h2 style={{ fontFamily: "'Syne', sans-serif", fontWeight: '800', fontSize: 'clamp(26px, 3.8vw, 36px)', color: '#111827', marginBottom: '12px' }}>
                Impact Metrics
              </h2>
              <p style={{ fontSize: '16px', color: '#6B7280', maxWidth: '500px', margin: '0 auto', lineHeight: '1.5' }}>
                How our zero-commission system is positively impacting the Tricity restaurant ecosystem.
              </p>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '28px'
            }} className="metrics-grid">
              
              {metrics.map((m) => {
                const isHovered = hoveredMetric === m.id;
                return (
                  <div 
                    key={m.id}
                    style={{
                      background: 'rgba(255, 255, 255, 0.72)',
                      backdropFilter: 'blur(16px)',
                      WebkitBackdropFilter: 'blur(16px)',
                      border: `1px solid ${isHovered ? m.glow : 'rgba(255, 255, 255, 0.55)'}`,
                      borderRadius: '24px',
                      padding: '36px',
                      textAlign: 'center',
                      boxShadow: isHovered
                        ? `0 20px 40px rgba(0, 0, 0, 0.03), inset 0 2px 4px rgba(255,255,255,0.9), 0 0 14px ${m.glow}`
                        : '0 8px 32px rgba(0, 0, 0, 0.02), inset 0 1px 2px rgba(255, 255, 255, 0.8)',
                      transition: 'all 0.35s ease',
                      transform: isHovered ? 'translateY(-4px)' : 'translateY(0)',
                      position: 'relative',
                      overflow: 'hidden'
                    }}
                    onMouseEnter={() => setHoveredMetric(m.id)}
                    onMouseLeave={() => setHoveredMetric(null)}
                  >
                    {/* Subtle colored glow in center */}
                    <div style={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      width: '120px',
                      height: '120px',
                      borderRadius: '50%',
                      background: `radial-gradient(circle, ${m.glow} 0%, transparent 70%)`,
                      pointerEvents: 'none',
                      opacity: isHovered ? 0.8 : 0.4,
                      transition: 'opacity 0.35s ease'
                    }} />

                    <div style={{ marginBottom: '12px', position: 'relative', zIndex: 1 }}>
                      <Counter target={m.target} prefix={m.prefix} suffix={m.suffix} />
                    </div>
                    <h4 style={{ fontWeight: '800', fontSize: '15px', color: 'var(--green-dark)', marginBottom: '8px', position: 'relative', zIndex: 1 }}>
                      {m.label}
                    </h4>
                    <p style={{ fontSize: '13.5px', color: '#6B7280', lineHeight: '1.45', position: 'relative', zIndex: 1 }}>
                      {m.desc}
                    </p>
                  </div>
                );
              })}

            </div>
          </section>

          {/* ─── Vision Statement Section ─── */}
          <section style={{ marginTop: '100px' }}>
            <div style={{
              background: 'rgba(255, 255, 255, 0.72)',
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)',
              border: '1px solid rgba(255, 255, 255, 0.55)',
              borderRadius: '28px',
              padding: '50px 40px',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.025), inset 0 1px 2px rgba(255, 255, 255, 0.8)',
              position: 'relative'
            }}>
              <div style={{ position: 'absolute', top: '24px', left: '24px', opacity: 0.06 }}>
                <Quote size={60} color="var(--green)" />
              </div>

              <div style={{ textAlign: 'center', marginBottom: '36px', position: 'relative', zIndex: 1 }}>
                <span style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  background: 'rgba(0, 155, 141, 0.08)',
                  color: 'var(--green-dark)',
                  fontSize: '11px',
                  fontWeight: '800',
                  padding: '4px 12px',
                  borderRadius: '100px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.04em',
                  marginBottom: '10px'
                }}>
                  <Award size={12} /> Ecosystem Vision
                </span>
                <h2 style={{ fontFamily: "'Syne', sans-serif", fontWeight: '800', fontSize: 'clamp(24px, 3.5vw, 30px)', color: 'var(--green-dark)', marginBottom: '10px' }}>
                  Building a Better Food Delivery Ecosystem
                </h2>
                <p style={{ fontSize: '15.5px', color: '#6B7280', fontWeight: '500' }}>
                  Kwikkit aims to create a system where:
                </p>
              </div>

              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: '1fr 1fr', 
                gap: '24px', 
                position: 'relative', 
                zIndex: 1 
              }} className="vision-grid">
                {[
                  'Restaurants retain their earnings',
                  'Customers pay honest prices',
                  'Technology serves businesses',
                  'Local food culture thrives'
                ].map((v, vIdx) => (
                  <div 
                    key={vIdx}
                    style={{
                      background: 'rgba(255, 255, 255, 0.45)',
                      border: '1px solid rgba(255, 255, 255, 0.5)',
                      backdropFilter: 'blur(8px)',
                      borderRadius: '16px',
                      padding: '22px 26px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '14px',
                      fontWeight: '750',
                      fontSize: '15px',
                      color: 'var(--green-dark)',
                      boxShadow: '0 4px 15px rgba(0, 0, 0, 0.005)'
                    }}
                  >
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--green)', flexShrink: 0 }} />
                    {v}
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ─── Final CTA Section ─── */}
          <section style={{ marginTop: '100px' }}>
            <div style={{
              background: 'linear-gradient(135deg, #091514 0%, #0c1a19 100%)',
              borderRadius: '28px',
              padding: '64px 48px',
              color: 'var(--cream)',
              position: 'relative',
              overflow: 'hidden',
              boxShadow: '0 10px 40px rgba(0,0,0,0.1)'
            }}>
              <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(255,255,255,0.01) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.01) 1px, transparent 1px)', backgroundSize: '30px 30px', pointerEvents: 'none' }} />
              
              <div style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
                <h3 style={{ fontFamily: "'Syne', sans-serif", fontWeight: '800', fontSize: 'clamp(26px, 3.8vw, 36px)', color: 'var(--cream)', marginBottom: '40px' }}>
                  Be Part of the Change.
                </h3>

                <div style={{ 
                  display: 'grid', 
                  gridTemplateColumns: '1fr 1fr', 
                  gap: '32px',
                  textAlign: 'left'
                }} className="cta-split">
                  
                  {/* For Customers */}
                  <div style={{
                    background: 'rgba(255, 255, 255, 0.02)',
                    border: '1px solid rgba(255, 255, 255, 0.07)',
                    borderRadius: '20px',
                    padding: '32px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    backdropFilter: 'blur(8px)'
                  }}>
                    <div>
                      <h4 style={{ fontFamily: "'Syne', sans-serif", fontWeight: '800', fontSize: '18px', color: 'var(--yellow)', marginBottom: '14px' }}>
                        For Customers
                      </h4>
                      <ul style={{ padding: 0, margin: '0 0 28px 0', listStyleType: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        <li style={{ display: 'flex', gap: '8px', fontSize: '14.5px', color: 'rgba(253, 248, 242, 0.75)' }}>
                          <span style={{ color: 'var(--yellow)' }}>✓</span> Download the App
                        </li>
                        <li style={{ display: 'flex', gap: '8px', fontSize: '14.5px', color: 'rgba(253, 248, 242, 0.75)' }}>
                          <span style={{ color: 'var(--yellow)' }}>✓</span> Order with transparent pricing
                        </li>
                      </ul>
                    </div>

                    <a href="/download" style={{
                      display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
                      background: 'var(--yellow)', color: 'var(--green-dark)',
                      padding: '13px 24px', borderRadius: '100px',
                      fontWeight: '800', fontSize: '14px', textDecoration: 'none',
                      transition: 'transform 0.2s ease',
                      textAlign: 'center'
                    }}
                      onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-2px)'}
                      onMouseLeave={e => e.currentTarget.style.transform = ''}>
                      Download App
                      <ArrowRight size={14} />
                    </a>
                  </div>

                  {/* For Restaurants */}
                  <div style={{
                    background: 'rgba(255, 255, 255, 0.02)',
                    border: '1px solid rgba(255, 255, 255, 0.07)',
                    borderRadius: '20px',
                    padding: '32px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    backdropFilter: 'blur(8px)'
                  }}>
                    <div>
                      <h4 style={{ fontFamily: "'Syne', sans-serif", fontWeight: '800', fontSize: '18px', color: 'var(--cream)', marginBottom: '14px' }}>
                        For Restaurants
                      </h4>
                      <ul style={{ padding: 0, margin: '0 0 28px 0', listStyleType: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        <li style={{ display: 'flex', gap: '8px', fontSize: '14.5px', color: 'rgba(253, 248, 242, 0.75)' }}>
                          <span style={{ color: 'var(--green-light)' }}>✓</span> Partner with Kwikkit
                        </li>
                        <li style={{ display: 'flex', gap: '8px', fontSize: '14.5px', color: 'rgba(253, 248, 242, 0.75)' }}>
                          <span style={{ color: 'var(--green-light)' }}>✓</span> Keep what you earn
                      </li>
                    </ul>
                  </div>

                  <Link href="/restaurants" style={{
                    display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
                    background: 'rgba(255, 255, 255, 0.08)', color: 'var(--cream)',
                    padding: '13px 24px', borderRadius: '100px',
                    fontWeight: '800', fontSize: '14px', textDecoration: 'none',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    transition: 'all 0.2s ease',
                    textAlign: 'center'
                  }}
                    onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)'; }}
                    onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)'; }}>
                    Partner With Us
                    <ArrowRight size={14} />
                  </Link>
                </div>

              </div>

            </div>
          </div>
        </section>

      </div>

      <style>{`
        @media (max-width: 768px) {
          .hero-br {
            display: block !important;
          }
          .metrics-grid {
            grid-template-columns: 1fr !important;
            gap: 20px !important;
          }
          .vision-grid {
            grid-template-columns: 1fr !important;
            gap: 16px !important;
          }
          .cta-split {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
          }
        }
      `}</style>
      </div>
    </main>
  );
}
