'use client';
import { useEffect, useRef, useState } from 'react';
import { Shield, Sparkles, Check, Lock, Calendar, RefreshCw } from 'lucide-react';

export default function SavingsCalculator() {
  const sectionRef = useRef(null);
  const [dailySales, setDailySales] = useState(20000);
  const [commissionPct, setCommissionPct] = useState(28);

  useEffect(() => {
    const obs = new IntersectionObserver(
      e => e.forEach(en => en.isIntersecting && en.target.classList.add('visible')),
      { threshold: 0.08 }
    );
    sectionRef.current?.querySelectorAll('.reveal,.reveal-left,.reveal-right').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  // Determine Kwikkit Tier and Flat Fee
  let tierName = 'Starter';
  let kwikkitBaseFee = 0;

  if (dailySales < 700) {
    tierName = 'Starter';
    kwikkitBaseFee = 0;
  } else if (dailySales < 2500) {
    tierName = 'Basic';
    kwikkitBaseFee = 100;
  } else if (dailySales < 5000) {
    tierName = 'Standard';
    kwikkitBaseFee = 249;
  } else if (dailySales < 10000) {
    tierName = 'Growth';
    kwikkitBaseFee = 349;
  } else {
    tierName = 'Enterprise';
    kwikkitBaseFee = 499;
  }

  // Math Calculations
  const competitorFee = Math.round(dailySales * (commissionPct / 100));
  const kwikkitFee = Math.round(kwikkitBaseFee * 1.18); // 18% GST
  const dailySavings = Math.max(0, competitorFee - kwikkitFee);
  const monthlySavings = dailySavings * 30;
  const yearlySavings = dailySavings * 360; // Standard 360-day year representation

  // Formatting Helper
  const formatRupees = (amount) => {
    if (amount >= 100000) {
      return `₹${(amount / 100000).toFixed(2)} Lakhs`;
    }
    return `₹${amount.toLocaleString('en-IN')}`;
  };

  return (
    <section id="calculator" ref={sectionRef} style={{ background: 'var(--cream)', padding: '110px 0', scrollMarginTop: '80px', position: 'relative', overflow: 'hidden' }}>
      <div className="section-wrap">
        
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <span className="reveal tag tag-green" style={{ marginBottom: '16px' }}>Calculator</span>
          <h2 className="reveal heading-display heading-lg" style={{ color: 'var(--text-primary)', marginBottom: '16px' }}>
            Calculate Your <span className="gradient-text-green">Recovered Revenue</span>
          </h2>
          <p className="reveal" style={{ fontSize: '17px', color: 'var(--text-muted)', maxWidth: '500px', margin: '0 auto' }}>
            Compare typical food delivery commissions against Kwikkit's honest tiered flat fees.
          </p>
        </div>

        {/* Calculator Body */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.1fr 1fr',
          gap: '40px',
          maxWidth: '1100px',
          margin: '0 auto 60px',
          alignItems: 'stretch',
        }} className="calc-main-grid">

          {/* Left Side: Inputs */}
          <div className="reveal-left" style={{
            background: 'var(--white)',
            border: '1px solid rgba(0, 95, 87, 0.08)',
            borderRadius: '28px',
            padding: '40px 32px',
            boxShadow: '0 10px 40px rgba(0,95,87,0.02)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            gap: '36px',
          }}>
            
            {/* Input 1: Daily Sales Value */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div>
                  <h3 style={{ fontFamily: "'Syne', sans-serif", fontSize: '18px', fontWeight: '800', color: 'var(--text-primary)', letterSpacing: '-0.01em' }}>
                    Daily Sales Value
                  </h3>
                  <p style={{ fontSize: '13px', color: 'var(--text-muted)', marginTop: '2px' }}>Total revenue from daily orders.</p>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', background: 'var(--cream-dark)', padding: '6px 14px', borderRadius: '10px' }}>
                  <span style={{ fontSize: '18px', fontWeight: '800', color: 'var(--green-dark)', fontFamily: "'Syne', sans-serif" }}>
                    ₹{dailySales.toLocaleString('en-IN')}
                  </span>
                </div>
              </div>

              <input
                type="range"
                min="500"
                max="50000"
                step="500"
                value={dailySales}
                onChange={(e) => setDailySales(parseInt(e.target.value))}
                style={{
                  width: '100%',
                  accentColor: 'var(--green)',
                  height: '6px',
                  borderRadius: '3px',
                  background: 'rgba(0, 95, 87, 0.1)',
                  cursor: 'pointer',
                  outline: 'none',
                }}
              />
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', color: 'var(--text-muted)', fontWeight: '600' }}>
                <span>₹500</span>
                <span>₹50,000+</span>
              </div>
            </div>

            {/* Input 2: Competitor Commission */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div>
                  <h3 style={{ fontFamily: "'Syne', sans-serif", fontSize: '18px', fontWeight: '800', color: 'var(--text-primary)', letterSpacing: '-0.01em' }}>
                    Competitor Commission
                  </h3>
                  <p style={{ fontSize: '13px', color: 'var(--text-muted)', marginTop: '2px' }}>What percentage are you currently paying?</p>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', background: 'var(--cream-dark)', padding: '6px 14px', borderRadius: '10px' }}>
                  <span style={{ fontSize: '18px', fontWeight: '800', color: 'var(--green-dark)', fontFamily: "'Syne', sans-serif" }}>
                    {commissionPct}%
                  </span>
                </div>
              </div>

              <input
                type="range"
                min="15"
                max="40"
                step="1"
                value={commissionPct}
                onChange={(e) => setCommissionPct(parseInt(e.target.value))}
                style={{
                  width: '100%',
                  accentColor: 'var(--green)',
                  height: '6px',
                  borderRadius: '3px',
                  background: 'rgba(0, 95, 87, 0.1)',
                  cursor: 'pointer',
                  outline: 'none',
                }}
              />
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', color: 'var(--text-muted)', fontWeight: '600' }}>
                <span>15% Commission</span>
                <span>40% Commission</span>
              </div>
            </div>

          </div>

          {/* Right Side: Results */}
          <div className="reveal-right" style={{
            background: 'var(--green-dark)',
            borderRadius: '28px',
            padding: '40px 36px',
            boxShadow: '0 16px 48px rgba(0, 61, 55, 0.18)',
            color: 'var(--cream)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            position: 'relative',
            overflow: 'hidden',
          }}>
            {/* Background design */}
            <div style={{ position: 'absolute', top: '-60px', right: '-60px', width: '180px', height: '180px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,229,0,0.06) 0%, transparent 60%)', pointerEvents: 'none' }} />

            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '28px' }}>
                <h3 style={{ fontFamily: "'Syne', sans-serif", fontSize: '20px', fontWeight: '800', color: 'var(--cream)', letterSpacing: '-0.02em' }}>
                  Your Savings Summary
                </h3>
                <span style={{ fontSize: '11px', fontWeight: '850', color: 'var(--yellow)', border: '1px solid rgba(255,229,0,0.3)', background: 'rgba(255,229,0,0.08)', padding: '4px 12px', borderRadius: '6px', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                  {tierName} Tier
                </span>
              </div>

              {/* Outputs list */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '32px' }}>
                
                {/* Daily Savings */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(255,255,255,0.06)', paddingBottom: '14px' }}>
                  <span style={{ fontSize: '14px', color: 'rgba(253,248,242,0.65)' }}>Daily Savings</span>
                  <span style={{ fontFamily: "'Syne', sans-serif", fontSize: '22px', color: 'var(--cream)', fontWeight: '800' }}>
                    ₹{dailySavings.toLocaleString('en-IN')}
                  </span>
                </div>

                {/* Monthly Savings */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(255,255,255,0.06)', paddingBottom: '14px' }}>
                  <span style={{ fontSize: '14px', color: 'rgba(253,248,242,0.65)' }}>Monthly Savings</span>
                  <span style={{ fontFamily: "'Syne', sans-serif", fontSize: '22px', color: 'var(--cream)', fontWeight: '800' }}>
                    {formatRupees(monthlySavings)}
                  </span>
                </div>

                {/* Yearly Revenue Saved */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <span style={{ fontSize: '14px', color: 'var(--yellow)', fontWeight: '750' }}>Yearly Revenue Saved</span>
                    <span style={{ display: 'block', fontSize: '11px', color: 'rgba(253,248,242,0.4)', marginTop: '2px' }}>Recovered operational margins</span>
                  </div>
                  <span className="shimmer-text" style={{ fontFamily: "'Syne', sans-serif", fontSize: '32px', fontWeight: '900' }}>
                    {formatRupees(yearlySavings)}
                  </span>
                </div>

              </div>

              {/* Side-by-Side Cost breakdown box */}
              <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '16px', padding: '20px 24px', marginBottom: '32px' }}>
                <h4 style={{ fontSize: '12px', fontWeight: '800', textTransform: 'uppercase', color: 'rgba(253,248,242,0.4)', letterSpacing: '0.05em', marginBottom: '14px' }}>Daily Cost Breakdown</h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13.5px' }}>
                    <span style={{ color: 'rgba(253,248,242,0.65)' }}>Competitor Commission ({commissionPct}%)</span>
                    <span style={{ fontWeight: '600', color: '#ff7b88' }}>₹{competitorFee.toLocaleString('en-IN')}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13.5px' }}>
                    <span style={{ color: 'rgba(253,248,242,0.65)' }}>Kwikkit Fee ({tierName} Tier + GST)</span>
                    <span style={{ fontWeight: '700', color: 'var(--yellow)' }}>₹{kwikkitFee}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <a href="/restaurants" className="btn btn-yellow" style={{ width: '100%', justifyContent: 'center', padding: '16px' }}>
              Start Saving Today
            </a>

          </div>

        </div>

        {/* Trust Badges */}
        <div className="reveal" style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '32px',
          flexWrap: 'wrap',
          background: 'rgba(0, 95, 87, 0.04)',
          border: '1px solid rgba(0, 95, 87, 0.08)',
          borderRadius: '20px',
          padding: '24px 32px',
          maxWidth: '900px',
          margin: '0 auto',
        }}>
          {[
            { label: 'No Hidden Fees', icon: Shield },
            { label: 'Cancel Anytime', icon: RefreshCw },
            { label: 'FSSAI Regulated', icon: Check },
            { label: 'SSL Secure', icon: Lock },
          ].map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{
                  width: '24px',
                  height: '24px',
                  borderRadius: '50%',
                  background: 'rgba(0, 95, 87, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--green)',
                }}>
                  <Icon size={12} strokeWidth={2.5} />
                </div>
                <span style={{ fontSize: '13.5px', fontWeight: '700', color: 'var(--green-dark)' }}>{item.label}</span>
              </div>
            );
          })}
        </div>

      </div>

      <style>{`
        @media (max-width: 820px) {
          .calc-main-grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
        }
      `}</style>
    </section>
  );
}
