'use client';
import { useEffect, useRef } from 'react';
import { Search, UtensilsCrossed, Radio, BadgeCheck } from 'lucide-react';

const steps = [
  { num: '01', Icon: Search, title: 'Browse nearby restaurants', desc: 'Discover local favourites and hidden gems across Chandigarh Tricity.' },
  { num: '02', Icon: UtensilsCrossed, title: 'Choose & customise your order', desc: 'Pick dishes, add instructions, customise exactly how you like it.' },
  { num: '03', Icon: Radio, title: 'Track delivery in real time', desc: 'Live map tracking from the kitchen all the way to your door.' },
  { num: '04', Icon: BadgeCheck, title: 'Enjoy with transparent pricing', desc: 'Pay exactly the restaurant price — no extra charges, ever.' },
];

export default function HowItWorksSection() {
  const ref = useRef(null);
  useEffect(() => {
    const obs = new IntersectionObserver(
      e => e.forEach(en => en.isIntersecting && en.target.classList.add('visible')),
      { threshold: 0.12 }
    );
    ref.current?.querySelectorAll('.reveal,.reveal-left,.reveal-right').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section id="how" ref={ref} style={{
      background: 'var(--dark)',
      padding: '110px 0',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* background gradient orb */}
      <div style={{
        position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)',
        width: '900px', height: '900px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(0,122,110,0.14) 0%, transparent 60%)',
        pointerEvents: 'none',
      }} />

      <div className="section-wrap">
        {/* header */}
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <span className="reveal tag tag-green-dark" style={{ marginBottom: '16px' }}>The Process</span>
          <h2 className="reveal heading-display heading-lg" style={{ color: 'var(--cream)' }}>
            How Kwikkit Works
          </h2>
        </div>

        {/* steps */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: '5px' }}>
          {steps.map((s, i) => (
            <div key={s.num} className="reveal" style={{ transitionDelay: `${i * 90}ms` }}>
              <div className="glass-card" style={{
                padding: '44px 32px', height: '100%',
                transition: 'background 0.35s ease, transform 0.35s cubic-bezier(.34,1.56,.64,1)',
                cursor: 'default',
              }}
                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.1)'; e.currentTarget.style.transform = 'translateY(-6px)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.06)'; e.currentTarget.style.transform = 'translateY(0)'; }}>

                {/* step number bg */}
                <div style={{
                  fontFamily: "'Syne',sans-serif", fontWeight: '900', fontSize: '72px',
                  color: 'rgba(255,255,255,0.04)', lineHeight: '1', marginBottom: '-16px',
                  userSelect: 'none',
                }}>{s.num}</div>

                {/* icon */}
                <div style={{
                  width: '54px', height: '54px', borderRadius: '16px',
                  background: 'rgba(255,229,0,0.1)', border: '1px solid rgba(255,229,0,0.15)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: '24px',
                  transition: 'transform 0.3s ease, background 0.3s ease',
                }}
                  onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,229,0,0.18)'; e.currentTarget.style.transform = 'scale(1.1)'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,229,0,0.1)'; e.currentTarget.style.transform = 'scale(1)'; }}>
                  <s.Icon size={22} strokeWidth={1.8} color="var(--yellow)" />
                </div>

                {/* step label */}
                <div style={{ fontSize: '11px', fontWeight: '700', color: 'var(--yellow)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '10px' }}>
                  Step {s.num}
                </div>

                {/* yellow line */}
                <div style={{ width: '28px', height: '3px', background: 'var(--yellow)', borderRadius: '2px', marginBottom: '16px' }} />

                <h3 style={{
                  fontFamily: "'Syne',sans-serif", fontWeight: '700', fontSize: '19px',
                  letterSpacing: '-0.02em', color: 'var(--cream)', marginBottom: '12px', lineHeight: '1.3',
                }}>{s.title}</h3>
                <p style={{ fontSize: '14px', lineHeight: '1.7', color: 'rgba(253,248,242,0.55)' }}>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
