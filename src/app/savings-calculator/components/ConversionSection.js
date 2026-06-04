'use client';
import { useEffect, useRef } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function ConversionSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      e => e.forEach(en => en.isIntersecting && en.target.classList.add('visible')),
      { threshold: 0.1 }
    );
    sectionRef.current?.querySelectorAll('.reveal,.reveal-left,.reveal-right').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const points = [
    'Zero Commission',
    'Transparent Pricing',
    'Fast Onboarding',
    'Next-Day Settlements',
  ];

  return (
    <section ref={sectionRef} style={{ background: 'var(--green-dark)', padding: '110px 0', position: 'relative', overflow: 'hidden', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
      {/* Background patterns */}
      <div style={{ position: 'absolute', top: '-10%', right: '-10%', width: '600px', height: '600px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(0,154,141,0.2) 0%, transparent 65%)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: '-15%', left: '-5%', width: '500px', height: '500px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,229,0,0.05) 0%, transparent 65%)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)', backgroundSize: '64px 64px', pointerEvents: 'none' }} />

      <div className="section-wrap" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ maxWidth: '850px', margin: '0 auto', textAlign: 'center' }}>
          
          {/* Eyebrow */}
          <span className="reveal tag tag-green-dark" style={{ marginBottom: '24px' }}>Grow Safely</span>

          {/* Heading */}
          <h2 className="reveal heading-display heading-lg" style={{ color: 'var(--cream)', marginBottom: '20px' }}>
            Ready to recover<br />
            <span style={{
              background: 'linear-gradient(90deg, var(--yellow) 0%, #fff9a0 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>your profits?</span>
          </h2>

          {/* Description */}
          <p className="reveal" style={{ fontSize: 'clamp(15px, 1.8vw, 18px)', lineHeight: '1.7', color: 'rgba(253,248,242,0.65)', maxWidth: '580px', margin: '0 auto 48px' }}>
            Stop giving away 20–30% of every order and start keeping more of what you earn. Onboard your kitchen today in under 24 hours.
          </p>

          {/* CTA Button */}
          <div className="reveal" style={{ marginBottom: '56px' }}>
            <a href="/restaurants" className="btn btn-yellow" style={{ padding: '16px 36px', fontSize: '15.5px' }}>
              Partner With Kwikkit
              <ArrowRight size={16} strokeWidth={2.5} />
            </a>
          </div>

          {/* Bullet Highlights Grid */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '24px',
            flexWrap: 'wrap',
            maxWidth: '700px',
            margin: '0 auto',
          }} className="reveal">
            {points.map((pt, idx) => (
              <div key={idx} style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                background: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                padding: '10px 20px',
                borderRadius: '14px',
                backdropFilter: 'blur(8px)',
              }}>
                <CheckCircle2 size={16} color="var(--yellow)" />
                <span style={{ fontSize: '14px', fontWeight: '700', color: 'rgba(253, 248, 242, 0.85)', letterSpacing: '-0.01em' }}>
                  {pt}
                </span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
