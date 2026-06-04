'use client';
import { useEffect, useRef, useState } from 'react';
import { HelpCircle, AlertTriangle, CheckCircle, TrendingDown } from 'lucide-react';

export default function WhyComparison() {
  const sectionRef = useRef(null);
  const [ordersPerWeek, setOrdersPerWeek] = useState(3);
  
  useEffect(() => {
    const obs = new IntersectionObserver(
      e => e.forEach(en => en.isIntersecting && en.target.classList.add('visible')),
      { threshold: 0.1 }
    );
    sectionRef.current?.querySelectorAll('.reveal,.reveal-left,.reveal-right,.reveal-scale').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const singleSaving = 115; // 709 - 594
  const weeklySaving = ordersPerWeek * singleSaving;
  const monthlySaving = Math.round(weeklySaving * 4.33);
  const yearlySaving = weeklySaving * 52;

  return (
    <section id="compare" ref={sectionRef} style={{ background: 'var(--cream)', padding: '110px 0', scrollMarginTop: '80px', position: 'relative', overflow: 'hidden' }}>
      
      {/* Decorative Orbs */}
      <div style={{ position: 'absolute', top: '-10%', left: '-10%', width: '500px', height: '500px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(0,95,87,0.06) 0%, transparent 65%)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: '-10%', right: '-10%', width: '600px', height: '600px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,229,0,0.04) 0%, transparent 65%)', pointerEvents: 'none' }} />

      <div className="section-wrap">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '72px' }}>
          <span className="reveal tag tag-green" style={{ marginBottom: '16px' }}>Cost Analysis</span>
          <h2 className="reveal heading-display heading-lg" style={{ color: 'var(--text-primary)', marginBottom: '16px' }}>
            What you're actually paying<br />
            <span className="gradient-text-green">when you order online</span>
          </h2>
          <p className="reveal" style={{ fontSize: '17px', color: 'var(--text-muted)', maxWidth: '520px', margin: '0 auto', lineHeight: '1.7' }}>
            That ₹500 biryani? You probably paid ₹720 or more. Here's exactly what happened to your money.
          </p>
        </div>

        {/* Comparison Grid (Side by side bills) */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '32px',
          maxWidth: '1000px',
          margin: '0 auto 80px',
        }}>
          
          {/* Other Platforms Bill */}
          <div className="reveal-left" style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{
              background: '#FFFFFF',
              borderRadius: '24px 24px 0 0',
              border: '1px solid rgba(220, 53, 69, 0.12)',
              borderBottom: 'none',
              padding: '36px 32px 24px',
              boxShadow: '0 8px 30px rgba(0,0,0,0.02)',
              flex: 1,
              position: 'relative',
            }}>
              {/* Badges/Label */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
                <span style={{ fontSize: '12px', fontWeight: '800', textTransform: 'uppercase', color: '#DC3545', background: 'rgba(220, 53, 69, 0.08)', padding: '5px 12px', borderRadius: '8px', letterSpacing: '0.04em' }}>
                  Traditional Platforms
                </span>
                <AlertTriangle size={18} color="#DC3545" />
              </div>

              <h3 style={{ fontFamily: "'Syne', sans-serif", fontWeight: '800', fontSize: '19px', color: 'var(--text-primary)', marginBottom: '4px' }}>
                ₹500 Menu Item
              </h3>
              <p style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '28px' }}>What You Actually Pay</p>

              {/* Items List */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', borderTop: '1px dashed rgba(0,0,0,0.08)', paddingTop: '20px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14.5px', color: 'var(--text-primary)' }}>
                  <span>Menu Price (Inflated)</span>
                  <span style={{ fontWeight: '600' }}>₹549</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14.5px', color: 'var(--text-primary)' }}>
                  <span>Delivery Fee</span>
                  <span style={{ fontWeight: '600' }}>₹50</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14.5px', color: 'var(--text-primary)' }}>
                  <span>Platform Fee</span>
                  <span style={{ fontWeight: '600', color: '#DC3545' }}>₹25</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14.5px', color: 'var(--text-primary)' }}>
                  <span>Packaging Fee</span>
                  <span style={{ fontWeight: '600' }}>₹20</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14.5px', color: 'var(--text-primary)' }}>
                  <span>GST</span>
                  <span style={{ fontWeight: '600' }}>₹65</span>
                </div>
              </div>
            </div>

            {/* Jagged / Total part */}
            <div style={{
              background: '#FFF5F6',
              borderRadius: '0 0 24px 24px',
              border: '1px solid rgba(220, 53, 69, 0.12)',
              borderTop: '1px dashed rgba(220, 53, 69, 0.25)',
              padding: '24px 32px 32px',
              position: 'relative',
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <span style={{ fontSize: '11px', textTransform: 'uppercase', fontWeight: '800', color: 'var(--text-muted)', letterSpacing: '0.05em' }}>TOTAL COST</span>
                  <h4 style={{ fontFamily: "'Syne', sans-serif", fontWeight: '900', fontSize: '32px', color: '#DC3545', margin: '4px 0 0 0' }}>
                    ₹709
                  </h4>
                </div>
                <span style={{ fontSize: '12px', color: '#DC3545', fontWeight: '600', textAlign: 'right', display: 'block', maxWidth: '140px', lineHeight: '1.4' }}>
                  Includes 10% average menu markup
                </span>
              </div>
            </div>
          </div>

          {/* Kwikkit Bill */}
          <div className="reveal-right" style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{
              background: 'var(--green-dark)',
              borderRadius: '24px 24px 0 0',
              border: '1px solid rgba(255, 255, 255, 0.05)',
              borderBottom: 'none',
              padding: '36px 32px 24px',
              boxShadow: '0 16px 40px rgba(0, 61, 55, 0.15)',
              flex: 1,
              position: 'relative',
            }}>
              {/* Badges/Label */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
                <span style={{ fontSize: '12px', fontWeight: '850', textTransform: 'uppercase', color: 'var(--yellow)', background: 'rgba(255,229,0,0.1)', border: '1px solid rgba(255,229,0,0.2)', padding: '5px 12px', borderRadius: '8px', letterSpacing: '0.04em' }}>
                  Kwikkit Delivery
                </span>
                <CheckCircle size={18} color="var(--yellow)" />
              </div>

              <h3 style={{ fontFamily: "'Syne', sans-serif", fontWeight: '800', fontSize: '19px', color: 'var(--cream)', marginBottom: '4px' }}>
                Same ₹500 Item
              </h3>
              <p style={{ fontSize: '13px', color: 'rgba(253,248,242,0.5)', marginBottom: '28px' }}>Honest Pricing</p>

              {/* Items List */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', borderTop: '1px dashed rgba(255,255,255,0.08)', paddingTop: '20px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14.5px', color: 'rgba(253,248,242,0.85)' }}>
                  <span>Menu Price (Real)</span>
                  <span style={{ fontWeight: '700', color: 'var(--cream)' }}>₹500</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14.5px', color: 'rgba(253,248,242,0.85)' }}>
                  <span>Delivery Fee</span>
                  <span style={{ fontWeight: '700', color: 'var(--cream)' }}>₹40</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14.5px', color: 'rgba(253,248,242,0.85)' }}>
                  <span>Platform Fee</span>
                  <span style={{ fontWeight: '800', color: 'var(--yellow)' }}>₹0</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14.5px', color: 'rgba(253,248,242,0.85)' }}>
                  <span>Hidden Charges</span>
                  <span style={{ fontWeight: '800', color: 'var(--yellow)' }}>₹0</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14.5px', color: 'rgba(253,248,242,0.85)' }}>
                  <span>GST</span>
                  <span style={{ fontWeight: '700', color: 'var(--cream)' }}>₹54</span>
                </div>
              </div>
            </div>

            {/* Jagged / Total part */}
            <div style={{
              background: '#04221f',
              borderRadius: '0 0 24px 24px',
              border: '1px solid rgba(255,255,255,0.05)',
              borderTop: '1px dashed rgba(255, 255, 255, 0.15)',
              padding: '24px 32px 32px',
              position: 'relative',
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <span style={{ fontSize: '11px', textTransform: 'uppercase', fontWeight: '850', color: 'rgba(253,248,242,0.4)', letterSpacing: '0.05em' }}>TOTAL COST</span>
                  <h4 style={{ fontFamily: "'Syne', sans-serif", fontWeight: '900', fontSize: '32px', color: 'var(--yellow)', margin: '4px 0 0 0' }}>
                    ₹594
                  </h4>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontSize: '12px', color: 'var(--yellow)', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.05em' }}>SAVE ₹115</div>
                  <span style={{ fontSize: '11px', color: 'rgba(253,248,242,0.5)', marginTop: '2px', display: 'block' }}>On this order</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Savings highlight strip */}
        <div className="reveal" style={{
          background: 'linear-gradient(135deg, rgba(0, 95, 87, 0.08) 0%, rgba(255, 229, 0, 0.08) 100%)',
          border: '1px solid rgba(0, 95, 87, 0.15)',
          borderRadius: '24px',
          padding: '28px 36px',
          textAlign: 'center',
          maxWidth: '800px',
          margin: '0 auto 96px',
        }}>
          <span style={{
            fontFamily: "'Syne', sans-serif",
            fontWeight: '800',
            fontSize: 'clamp(20px, 2.5vw, 28px)',
            color: 'var(--green-dark)',
          }}>
            You save <span style={{ color: 'var(--green)', textShadow: '0 2px 4px rgba(0,95,87,0.05)' }}>₹115</span> on a single ₹500 order. <span className="shimmer-text">Every time.</span>
          </span>
        </div>

        {/* Interactive Savings Calculator */}
        <div className="reveal" style={{
          background: 'var(--green-dark)',
          borderRadius: '32px',
          padding: '48px clamp(24px, 5vw, 56px)',
          maxWidth: '900px',
          margin: '0 auto',
          position: 'relative',
          overflow: 'hidden',
          boxShadow: '0 24px 60px rgba(0,61,55,0.25)',
        }}>
          {/* Background decorations */}
          <div style={{ position: 'absolute', top: '-100px', right: '-100px', width: '250px', height: '250px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,229,0,0.08) 0%, transparent 60%)', pointerEvents: 'none' }} />
          
          <div style={{ position: 'relative', zIndex: 1, display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '48px', alignItems: 'center' }} className="calc-grid">
            
            {/* Left: Input slider */}
            <div>
              <span className="tag tag-green-dark" style={{ marginBottom: '12px' }}>Savings Calculator</span>
              <h3 style={{ fontFamily: "'Syne', sans-serif", fontWeight: '800', fontSize: '26px', color: 'var(--cream)', marginBottom: '16px', letterSpacing: '-0.02em' }}>
                Watch your savings accumulate
              </h3>
              <p style={{ fontSize: '14.5px', color: 'rgba(253,248,242,0.6)', lineHeight: '1.6', marginBottom: '32px' }}>
                Choose how many orders you average per week. We will show you how much platform fees and markups are costing you over the year.
              </p>

              {/* Slider Controller */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '13px', color: 'rgba(253,248,242,0.8)', fontWeight: '600' }}>Orders Per Week</span>
                  <span style={{ fontFamily: "'Syne', sans-serif", fontSize: '28px', color: 'var(--yellow)', fontWeight: '850' }}>{ordersPerWeek}</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="15"
                  step="1"
                  value={ordersPerWeek}
                  onChange={(e) => setOrdersPerWeek(parseInt(e.target.value))}
                  style={{
                    width: '100%',
                    accentColor: 'var(--yellow)',
                    height: '6px',
                    borderRadius: '3px',
                    background: 'rgba(255,255,255,0.12)',
                    cursor: 'pointer',
                    outline: 'none',
                  }}
                />
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', color: 'rgba(253,248,242,0.4)', fontWeight: '600' }}>
                  <span>1 Order</span>
                  <span>15 Orders</span>
                </div>
              </div>
            </div>

            {/* Right: Savings Outputs */}
            <div style={{
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: '24px',
              padding: '32px',
              display: 'flex',
              flexDirection: 'column',
              gap: '24px',
            }}>
              {/* Weekly */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(255,255,255,0.06)', paddingBottom: '16px' }}>
                <span style={{ fontSize: '14.5px', color: 'rgba(253,248,242,0.7)', fontWeight: '600' }}>Weekly Savings</span>
                <span style={{ fontFamily: "'Syne', sans-serif", fontSize: '22px', color: 'var(--cream)', fontWeight: '800' }}>
                  ₹{weeklySaving.toLocaleString('en-IN')}
                </span>
              </div>
              {/* Monthly */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(255,255,255,0.06)', paddingBottom: '16px' }}>
                <span style={{ fontSize: '14.5px', color: 'rgba(253,248,242,0.7)', fontWeight: '600' }}>Monthly Savings</span>
                <span style={{ fontFamily: "'Syne', sans-serif", fontSize: '22px', color: 'var(--cream)', fontWeight: '800' }}>
                  ₹{monthlySaving.toLocaleString('en-IN')}
                </span>
              </div>
              {/* Yearly */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <span style={{ fontSize: '14.5px', color: 'var(--yellow)', fontWeight: '750', textTransform: 'uppercase', letterSpacing: '0.03em' }}>Yearly Savings</span>
                  <div style={{ fontSize: '11px', color: 'rgba(253,248,242,0.4)', marginTop: '2px' }}>Equivalent to a weekend getaway</div>
                </div>
                <span className="shimmer-text" style={{ fontFamily: "'Syne', sans-serif", fontSize: '32px', fontWeight: '900' }}>
                  ₹{yearlySaving.toLocaleString('en-IN')}
                </span>
              </div>
            </div>

          </div>
        </div>

      </div>

      <style>{`
        @media (max-width: 768px) {
          .calc-grid {
            grid-template-columns: 1fr !important;
            gap: 36px !important;
          }
        }
      `}</style>
    </section>
  );
}
