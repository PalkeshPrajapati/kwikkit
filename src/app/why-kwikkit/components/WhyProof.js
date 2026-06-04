'use client';
import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { ShieldCheck, HelpCircle, Check } from 'lucide-react';

function PhoneFrame({ src, alt, width = 240 }) {
  const br  = Math.round(width * 0.22);
  const pad = Math.round(width * 0.052);
  const diW = Math.round(width * 0.33);
  const diH = Math.round(width * 0.09);
  return (
    <div style={{
      width: `${width}px`, flexShrink: 0,
      background: 'linear-gradient(160deg, #1e3330 0%, #0c1b19 100%)',
      borderRadius: `${br}px`, padding: `${pad}px`,
      boxShadow: '0 40px 90px rgba(0,0,0,0.55), 0 0 0 1px rgba(255,255,255,0.07)',
      position: 'relative',
    }}>
      {/* Dynamic Island */}
      <div style={{ display: 'flex', justifyContent: 'center', paddingTop: `${pad}px`, marginBottom: `-${diH * 0.7}px`, position: 'relative', zIndex: 2 }}>
        <div style={{ width: `${diW}px`, height: `${diH}px`, background: '#0c1b19', borderRadius: '8px' }} />
      </div>
      <div style={{ borderRadius: `${br - pad}px`, overflow: 'hidden', background: '#efefef', aspectRatio: '9/19.5', position: 'relative' }}>
        <Image src={src} alt={alt} fill sizes={`${width}px`} style={{ objectFit: 'cover' }} />
      </div>
    </div>
  );
}

export default function WhyProof() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      e => e.forEach(en => en.isIntersecting && en.target.classList.add('visible')),
      { threshold: 0.1 }
    );
    sectionRef.current?.querySelectorAll('.reveal,.reveal-left,.reveal-right').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={sectionRef} style={{ background: 'var(--cream-dark)', padding: '110px 0', position: 'relative', overflow: 'hidden' }}>
      
      {/* Decorative blobs */}
      <div style={{ position: 'absolute', top: '20%', left: '-10%', width: '500px', height: '500px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(0,95,87,0.05) 0%, transparent 65%)', pointerEvents: 'none' }} />
      
      <div className="section-wrap">
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '64px',
          alignItems: 'center',
          maxWidth: '1100px',
          margin: '0 auto',
        }} className="proof-grid">
          
          {/* Left Side: Proof copy and metrics */}
          <div className="reveal-left">
            <span className="tag tag-green" style={{ marginBottom: '16px' }}>App Proof</span>
            <h2 className="heading-display heading-lg" style={{ color: 'var(--text-primary)', marginBottom: '20px' }}>
              Real proof,<br />
              <span className="gradient-text-green">not claims</span>
            </h2>
            <h3 style={{ fontFamily: "'Syne', sans-serif", fontWeight: '700', fontSize: '20px', color: 'var(--green-dark)', marginBottom: '16px', letterSpacing: '-0.01em' }}>
              The checkout that actually says ₹0.00
            </h3>
            <p style={{ fontSize: '15.5px', lineHeight: '1.7', color: 'var(--text-muted)', marginBottom: '40px', maxWidth: '480px' }}>
              A real checkout screen from the Kwikkit app showing transparent pricing and zero platform charges. We don't hide backend costs in stacked fees.
            </p>

            {/* Proof Metrics Cards */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '32px' }}>
              <div style={{
                background: 'var(--white)',
                border: '1px solid rgba(0,95,87,0.08)',
                borderRadius: '20px',
                padding: '24px',
                boxShadow: '0 8px 30px rgba(0,95,87,0.02)',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                  <div style={{ width: '18px', height: '18px', borderRadius: '50%', background: 'rgba(0,155,141,0.1)', display: 'flex', alignItems: 'center', justifyText: 'center', color: 'var(--green)' }}>
                    <Check size={12} strokeWidth={3} style={{ margin: '0 auto' }} />
                  </div>
                  <span style={{ fontSize: '12px', fontWeight: '750', textTransform: 'uppercase', color: 'var(--text-muted)', letterSpacing: '0.04em' }}>Platform Fee</span>
                </div>
                <div className="shimmer-text" style={{ fontFamily: "'Syne', sans-serif", fontSize: '32px', fontWeight: '900' }}>
                  ₹0.00
                </div>
              </div>

              <div style={{
                background: 'var(--white)',
                border: '1px solid rgba(0,95,87,0.08)',
                borderRadius: '20px',
                padding: '24px',
                boxShadow: '0 8px 30px rgba(0,95,87,0.02)',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                  <div style={{ width: '18px', height: '18px', borderRadius: '50%', background: 'rgba(0,155,141,0.1)', display: 'flex', alignItems: 'center', justifyText: 'center', color: 'var(--green)' }}>
                    <Check size={12} strokeWidth={3} style={{ margin: '0 auto' }} />
                  </div>
                  <span style={{ fontSize: '12px', fontWeight: '750', textTransform: 'uppercase', color: 'var(--text-muted)', letterSpacing: '0.04em' }}>Packaging Charge</span>
                </div>
                <div className="shimmer-text" style={{ fontFamily: "'Syne', sans-serif", fontSize: '32px', fontWeight: '900' }}>
                  ₹0.00
                </div>
              </div>
            </div>

            {/* Micro bullet items */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                <ShieldCheck size={16} color="var(--green)" />
                <span style={{ fontSize: '14px', fontWeight: '600', color: 'var(--text-primary)' }}>100% Transparent cost breakdown</span>
              </div>
              <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                <ShieldCheck size={16} color="var(--green)" />
                <span style={{ fontSize: '14px', fontWeight: '600', color: 'var(--text-primary)' }}>Audit-friendly original menus</span>
              </div>
            </div>
          </div>

          {/* Right Side: Phone showcase */}
          <div className="reveal-right" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
            {/* Soft glow behind the phone */}
            <div style={{
              position: 'absolute',
              width: '320px',
              height: '320px',
              background: 'radial-gradient(circle, rgba(0,95,87,0.14) 0%, transparent 70%)',
              zIndex: 0,
              pointerEvents: 'none',
            }} />
            
            {/* Visual Indicator lines pointing to areas on the phone mock */}
            <div style={{ position: 'relative', zIndex: 1 }}>
              <PhoneFrame src="/screenshot/screenshot-cart.png" alt="Real Kwikkit Checkout Screen" />
              
              {/* Highlight callouts */}
              <div className="animate-float" style={{
                position: 'absolute',
                top: '35%',
                right: '-80px',
                background: 'rgba(8,15,14,0.9)',
                border: '1px solid rgba(255,229,0,0.3)',
                padding: '10px 16px',
                borderRadius: '12px',
                backdropFilter: 'blur(8px)',
                boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
                color: 'var(--cream)',
                fontSize: '12px',
                fontWeight: '700',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                zIndex: 2,
              }}>
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--yellow)', display: 'inline-block', animation: 'blinkDot 1.6s infinite' }} />
                Platform Fee: ₹0.00
              </div>

              <div className="animate-float" style={{
                position: 'absolute',
                bottom: '25%',
                left: '-80px',
                background: 'rgba(8,15,14,0.9)',
                border: '1px solid rgba(255,229,0,0.3)',
                padding: '10px 16px',
                borderRadius: '12px',
                backdropFilter: 'blur(8px)',
                boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
                color: 'var(--cream)',
                fontSize: '12px',
                fontWeight: '700',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                zIndex: 2,
                animationDelay: '1.5s',
              }}>
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--yellow)', display: 'inline-block', animation: 'blinkDot 1.6s infinite' }} />
                No Packaging Surge
              </div>
            </div>
          </div>

        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .proof-grid {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }
        }
      `}</style>
    </section>
  );
}
