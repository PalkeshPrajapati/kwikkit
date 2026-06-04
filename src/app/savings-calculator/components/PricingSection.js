'use client';
import { useEffect, useRef } from 'react';
import { ShieldCheck, HelpCircle } from 'lucide-react';

export default function PricingSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      e => e.forEach(en => en.isIntersecting && en.target.classList.add('visible')),
      { threshold: 0.1 }
    );
    sectionRef.current?.querySelectorAll('.reveal,.reveal-scale').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const tiers = [
    { name: 'Starter (Tier 1)', range: '₹0 – ₹699', fee: '₹0', notes: 'No Charges' },
    { name: 'Basic (Tier 2)', range: '₹700 – ₹2,499', fee: '₹100 + GST', notes: 'Perfect for small establishments' },
    { name: 'Standard (Tier 3)', range: '₹2,500 – ₹4,999', fee: '₹249 + GST', notes: 'For mid-sized cafes and diners' },
    { name: 'Growth (Tier 4)', range: '₹5,000 – ₹9,999', fee: '₹349 + GST', notes: 'Designed for growing restaurants' },
    { name: 'Enterprise (Tier 5)', range: '₹10,000+', fee: '₹499 + GST', notes: 'Flat cap for high-volume partners' },
  ];

  return (
    <section ref={sectionRef} style={{ background: 'var(--cream-dark)', padding: '110px 0', position: 'relative', overflow: 'hidden' }}>
      
      {/* Decorative Orb */}
      <div style={{ position: 'absolute', bottom: '-10%', left: '-5%', width: '500px', height: '500px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(0,95,87,0.04) 0%, transparent 65%)', pointerEvents: 'none' }} />

      <div className="section-wrap">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <span className="reveal tag tag-green" style={{ marginBottom: '16px' }}>Pricing</span>
          <h2 className="reveal heading-display heading-lg" style={{ color: 'var(--text-primary)', marginBottom: '16px' }}>
            Transparent Pricing
          </h2>
          <h3 style={{ fontFamily: "'Syne', sans-serif", fontSize: '22px', fontWeight: '850', color: 'var(--green-dark)', marginBottom: '16px', letterSpacing: '-0.02em' }}>
            Fair Daily Tiers. No Hidden Fees.
          </h3>
          <p className="reveal" style={{ fontSize: '16px', color: 'var(--text-muted)', maxWidth: '480px', margin: '0 auto', lineHeight: '1.65' }}>
            Pay only when you sell. A simple daily fee based on your sales volume.
          </p>
        </div>

        {/* Pricing Table Card */}
        <div className="reveal" style={{
          background: 'var(--white)',
          border: '1px solid rgba(0, 95, 87, 0.08)',
          borderRadius: '28px',
          padding: '40px clamp(16px, 5vw, 40px)',
          maxWidth: '960px',
          margin: '0 auto 48px',
          boxShadow: '0 12px 40px rgba(0, 95, 87, 0.02)',
          overflowX: 'auto',
        }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '600px' }}>
            <thead>
              <tr style={{ borderBottom: '2px solid rgba(0, 95, 87, 0.1)' }}>
                <th style={{ padding: '16px 20px', fontFamily: "'Syne', sans-serif", fontSize: '13px', fontWeight: '850', color: 'var(--green-dark)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Daily Sales Tier</th>
                <th style={{ padding: '16px 20px', fontFamily: "'Syne', sans-serif", fontSize: '13px', fontWeight: '850', color: 'var(--green-dark)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Daily Sales Range</th>
                <th style={{ padding: '16px 20px', fontFamily: "'Syne', sans-serif", fontSize: '13px', fontWeight: '850', color: 'var(--green-dark)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Flat Daily Fee</th>
                <th style={{ padding: '16px 20px', fontFamily: "'Syne', sans-serif", fontSize: '13px', fontWeight: '850', color: 'var(--green-dark)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Details</th>
              </tr>
            </thead>
            <tbody>
              {tiers.map((t, idx) => (
                <tr
                  key={t.name}
                  style={{
                    borderBottom: '1px solid rgba(0, 95, 87, 0.06)',
                    background: idx % 2 === 1 ? 'rgba(0, 95, 87, 0.01)' : 'transparent',
                    transition: 'background 0.2s ease',
                  }}
                  onMouseEnter={e => e.currentTarget.style.background = 'rgba(0, 95, 87, 0.03)'}
                  onMouseLeave={e => e.currentTarget.style.background = idx % 2 === 1 ? 'rgba(0, 95, 87, 0.01)' : 'transparent'}
                >
                  <td style={{ padding: '20px', fontSize: '14.5px', fontWeight: '750', color: 'var(--text-primary)' }}>{t.name}</td>
                  <td style={{ padding: '20px', fontSize: '14.5px', fontWeight: '600', color: 'var(--text-muted)' }}>{t.range}</td>
                  <td style={{ padding: '20px', fontSize: '15px', fontWeight: '800', color: 'var(--green)' }}>{t.fee}</td>
                  <td style={{ padding: '20px', fontSize: '13.5px', color: 'var(--text-muted)' }}>{t.notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Bottom Trust & CTA Row */}
        <div className="reveal" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px', textAlign: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--text-muted)', fontSize: '14.5px', fontWeight: '600' }}>
            <ShieldCheck size={18} color="var(--green)" />
            <span>No contracts. Cancel anytime.</span>
          </div>
          <a href="/terms" className="btn btn-ghost" style={{ background: 'transparent', border: '1px solid rgba(0, 95, 87, 0.18)', color: 'var(--green-dark)', padding: '12px 28px' }}
            onMouseEnter={e => e.currentTarget.style.background = 'rgba(0, 95, 87, 0.04)'}
            onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
          >
            View Full Terms
          </a>
        </div>

      </div>
    </section>
  );
}
