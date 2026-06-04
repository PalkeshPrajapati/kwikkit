'use client';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import {
  Building2, Sparkles, Smartphone, Receipt, ShieldCheck, TrendingUp,
  UserCheck, Clock, ArrowRight, Check, CheckCircle, AlertCircle,
  HelpCircle, BarChart3, Users, MapPin, Coins, FileText, PhoneCall,
  ClipboardCheck, Rocket, Shield, HeartHandshake, CheckCircle2,
  RefreshCw, Lock, Calendar
} from 'lucide-react';

/* ─── Scroll Reveal ─────────────────────────── */
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

/* ═══════════════════════════════════════
   SECTION 1 — HERO
═══════════════════════════════════════ */
function HeroSection({ onScrollToForm, onScrollToBenefits }) {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => { const t = setTimeout(() => setLoaded(true), 80); return () => clearTimeout(t); }, []);

  return (
    <section style={{ position: 'relative', minHeight: '92vh', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>

      {/* ── Background ── */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <Image
          src="/herobg/restaurants-herobg.png"
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
      <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', padding: '140px 28px 80px', maxWidth: '960px', margin: '0 auto', width: '100%' }}>

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
          Partnership Program
        </div>

        {/* Heading */}
        <h1 style={{
          opacity: loaded ? 1 : 0, transform: loaded ? 'translateY(0)' : 'translateY(24px)',
          transition: 'opacity 0.7s ease 0.15s, transform 0.7s ease 0.15s',
          fontFamily: "'Syne', sans-serif", fontWeight: '800', fontSize: 'clamp(28px,6.2vw,80px)', lineHeight: '1.02', letterSpacing: '-0.035em', color: 'var(--cream)', maxWidth: '1000px', margin: '0 auto 28px'
        }}>
          Keep 100% of every order.<br />
          <span style={{ background: 'linear-gradient(90deg, var(--yellow) 0%, #fff677 50%, #fffaba 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Zero commission. Always.</span>
        </h1>

        {/* Description */}
        <p style={{
          opacity: loaded ? 1 : 0, transform: loaded ? 'translateY(0)' : 'translateY(24px)',
          transition: 'opacity 0.7s ease 0.25s, transform 0.7s ease 0.25s',
          fontSize: '18px', lineHeight: '1.75', color: 'rgba(253,248,242,0.5)', maxWidth: '720px', margin: '0 auto 40px'
        }}>
          Kwikkit is a food delivery platform built for Chandigarh Tricity. No commission. No complications.
        </p>

        {/* Bullet Points */}
        <div style={{
          opacity: loaded ? 1 : 0, transform: loaded ? 'translateY(0)' : 'translateY(24px)',
          transition: 'opacity 0.7s ease 0.35s, transform 0.7s ease 0.35s',
          display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap', maxWidth: '900px', margin: '0 auto 56px'
        }}>
          {['List your real menu prices without inflation', 'Boost delivery profitability instantly', 'Retain full earnings from every order'].map((b, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', padding: '12px 24px', borderRadius: '16px', backdropFilter: 'blur(8px)' }}>
              <div style={{ width: '22px', height: '22px', borderRadius: '50%', background: 'rgba(0,155,141,0.15)', border: '1px solid rgba(0,155,141,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--green-light)', flexShrink: 0 }}>
                <Check size={13} strokeWidth={3} />
              </div>
              <span style={{ fontSize: '14px', fontWeight: '600', color: 'rgba(253,248,242,0.85)', letterSpacing: '-0.01em' }}>{b}</span>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div style={{
          opacity: loaded ? 1 : 0, transform: loaded ? 'translateY(0)' : 'translateY(24px)',
          transition: 'opacity 0.7s ease 0.45s, transform 0.7s ease 0.45s',
          display: 'flex', justifyContent: 'center', gap: '18px', flexWrap: 'wrap'
        }}>
          <button onClick={onScrollToForm} className="btn btn-yellow" style={{ padding: '18px 40px', fontSize: '15px' }}>
            Partner With Kwikkit <ArrowRight size={16} strokeWidth={2.5} />
          </button>
          <button onClick={onScrollToBenefits} className="btn btn-ghost" style={{ padding: '18px 36px', fontSize: '15px', background: 'transparent', border: '1px solid rgba(255,255,255,0.1)' }}>
            See Benefits
          </button>
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

/* ═══════════════════════════════════════
   SECTION 2 — BENEFITS GRID
═══════════════════════════════════════ */
function BenefitsSection({ benefitsRef }) {
  const ref = useRef(null);
  useReveal(ref);
  const features = [
    { title: 'Keep 100% of Every Order', icon: Coins, desc: 'No commission charged. You receive the full order value. Delivery fee collected separately from customers.', example: '₹500 order = ₹500 revenue to you', color: 'var(--green-light)', num: '01' },
    { title: 'Your Menu, Your Prices', icon: Building2, desc: 'Full pricing control. No forced discounts. No price inflation requirements. You set your own menu rates.', color: 'var(--green)', num: '02' },
    { title: 'Higher Net Earnings', icon: TrendingUp, desc: 'Higher delivery profitability compared to traditional platforms that take 20–30% in commissions.', color: '#a78bfa', num: '03' },
    { title: 'Dedicated Partner Support', icon: UserCheck, desc: 'Personal account manager. Onboarding assistance. Menu optimization guidance. Growth support included.', color: 'var(--green-light)', num: '04' },
    { title: 'Full Analytics Dashboard', icon: BarChart3, desc: 'Track orders, monitor revenue, analyze bestsellers, and view real-time business performance data.', color: 'var(--green)', num: '05' },
    { title: 'Go Live in 24 Hours', icon: Clock, desc: 'Fast onboarding process, quick verification, rapid restaurant listing. Live within one business day.', color: 'var(--yellow)', num: '06' },
  ];

  return (
    <section ref={(el) => { ref.current = el; if (benefitsRef) benefitsRef.current = el; }} style={{ padding: '120px 0', background: 'var(--cream)', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url(/restaurants-benefits-bg.png)', backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.14, pointerEvents: 'none', zIndex: 0 }} />
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, var(--cream) 0%, rgba(253,248,242,0.3) 15%, rgba(253,248,242,0.3) 85%, var(--cream) 100%)', pointerEvents: 'none', zIndex: 0 }} />
      <div className="section-wrap" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <span className="reveal tag tag-green" style={{ marginBottom: '16px' }}>Onboarding Benefits</span>
          <h2 className="reveal heading-display heading-lg" style={{ color: 'var(--text-primary)', marginBottom: '18px' }}>
            Built to Work Better<br /><span className="gradient-text-green">for Restaurants</span>
          </h2>
          <p className="reveal" style={{ fontSize: '17px', color: 'var(--text-muted)', maxWidth: '480px', margin: '0 auto' }}>
            Traditional food delivery takes up to 30% of your bill. Kwikkit takes 0% and protects your margins.
          </p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '28px', maxWidth: '1100px', margin: '0 auto' }}>
          {features.map((feat, i) => {
            const Icon = feat.icon;
            return (
              <div key={feat.title} className="reveal-scale" style={{ transitionDelay: `${i * 80}ms` }}>
                <div style={{ padding: '40px 36px', background: 'var(--green-dark)', borderRadius: '24px', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', border: '1px solid rgba(255,255,255,0.08)', boxShadow: '0 10px 30px rgba(0,61,55,0.18)', position: 'relative', transition: 'transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease, background-color 0.3s ease', cursor: 'default' }}
                  onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-8px)'; e.currentTarget.style.background = '#061d1b'; e.currentTarget.style.borderColor = 'var(--yellow)'; e.currentTarget.style.boxShadow = '0 20px 45px rgba(255,229,0,0.15)'; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.background = 'var(--green-dark)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,61,55,0.18)'; }}>
                  <span style={{ position: 'absolute', top: '24px', right: '32px', fontFamily: "'Syne', sans-serif", fontWeight: '800', fontSize: '36px', color: 'rgba(255,229,0,0.07)', lineHeight: '1', userSelect: 'none' }}>{feat.num}</span>
                  <div>
                    <div style={{ width: '52px', height: '52px', borderRadius: '14px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px' }}>
                      <Icon size={24} color="var(--yellow)" strokeWidth={1.8} />
                    </div>
                    <h3 style={{ fontFamily: "'Syne', sans-serif", fontWeight: '850', fontSize: '21px', color: 'var(--cream)', marginBottom: '14px', letterSpacing: '-0.02em' }}>{feat.title}</h3>
                    <p style={{ fontSize: '14.5px', lineHeight: '1.75', color: 'rgba(253,248,242,0.7)', marginBottom: feat.example ? '20px' : '0' }}>{feat.desc}</p>
                  </div>
                  {feat.example && (
                    <div style={{ background: 'rgba(255,255,255,0.04)', borderLeft: '4px solid var(--yellow)', padding: '12px 18px', borderRadius: '0 12px 12px 0', marginTop: '24px' }}>
                      <div style={{ fontSize: '11px', fontWeight: '800', textTransform: 'uppercase', color: 'var(--yellow)', letterSpacing: '0.05em', marginBottom: '4px' }}>Example</div>
                      <span style={{ fontSize: '14px', fontWeight: '700', color: 'var(--cream)' }}>{feat.example}</span>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════
   SECTION 3 — ZERO COMMISSION EXPLAINED
═══════════════════════════════════════ */
function ZeroCommissionSection() {
  const ref = useRef(null);
  useReveal(ref);

  return (
    <section ref={ref} id="zero-commission" style={{ padding: '120px 0', background: 'var(--dark-2)', position: 'relative', overflow: 'hidden', scrollMarginTop: '80px' }}>
      <div style={{ position: 'absolute', top: '-10%', left: '-5%', width: '500px', height: '500px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(0,154,141,0.15) 0%, transparent 65%)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: '-15%', right: '-10%', width: '600px', height: '600px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,229,0,0.04) 0%, transparent 65%)', pointerEvents: 'none' }} />

      <div className="section-wrap">
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <span className="reveal tag tag-green-dark" style={{ marginBottom: '16px' }}>Zero Commission</span>
          <h2 className="reveal heading-display heading-lg" style={{ color: 'var(--cream)', marginBottom: '18px' }}>
            Not a promotion.{' '}
            <span style={{ background: 'linear-gradient(90deg, var(--yellow) 0%, #fffaaa 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Our model.</span>
          </h2>
          <p className="reveal" style={{ fontSize: '17px', lineHeight: '1.7', color: 'rgba(253,248,242,0.5)', maxWidth: '500px', margin: '0 auto' }}>
            Every other platform charges 20–30% per order. Kwikkit charges zero. Here's how we sustain it.
          </p>
        </div>

        {/* Revenue Comparison */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '28px', maxWidth: '900px', margin: '0 auto 64px' }} className="comparison-grid">
          {/* Traditional */}
          <div className="reveal-left" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(248,113,113,0.25)', borderRadius: '24px', padding: '36px', backdropFilter: 'blur(12px)' }}>
            <h4 style={{ fontWeight: '800', fontSize: '14px', color: '#f87171', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '8px' }}>Traditional Platform</h4>
            <span style={{ display: 'inline-block', background: 'rgba(248,113,113,0.1)', color: '#f87171', padding: '4px 12px', borderRadius: '8px', fontSize: '12px', fontWeight: '700', marginBottom: '24px' }}>₹10,000 GMV</span>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '14px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px dashed rgba(255,255,255,0.08)', paddingBottom: '10px' }}>
                <span style={{ color: 'rgba(253,248,242,0.5)' }}>Gross Revenue</span>
                <strong style={{ color: 'var(--cream)' }}>₹10,000</strong>
              </div>
              <div style={{ fontSize: '11px', fontWeight: '700', textTransform: 'uppercase', color: 'rgba(253,248,242,0.25)', letterSpacing: '0.06em' }}>Deductions</div>
              <div style={{ display: 'flex', justifyContent: 'space-between', color: '#f87171' }}>
                <span>Commission (25%)</span><span style={{ fontWeight: '600' }}>−₹2,500</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', color: '#f87171', borderBottom: '1px dashed rgba(248,113,113,0.2)', paddingBottom: '10px' }}>
                <span>Payment Gateway (2%)</span><span style={{ fontWeight: '600' }}>−₹200</span>
              </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: '20px', fontWeight: '800', alignItems: 'center' }}>
              <span style={{ color: 'rgba(253,248,242,0.6)' }}>You Keep</span>
              <span style={{ color: '#f87171', fontSize: '26px', fontFamily: "'Syne', sans-serif" }}>₹7,300</span>
            </div>
          </div>

          {/* Kwikkit */}
          <div className="reveal-right" style={{ background: 'rgba(0,155,141,0.06)', border: '2px solid rgba(0,155,141,0.35)', borderRadius: '24px', padding: '36px', backdropFilter: 'blur(12px)', position: 'relative' }}>
            <div style={{ position: 'absolute', top: '-12px', right: '24px', background: 'var(--green)', color: 'var(--cream)', fontSize: '11px', fontWeight: '800', padding: '4px 12px', borderRadius: '100px', textTransform: 'uppercase', letterSpacing: '0.04em' }}>Our Model</div>
            <h4 style={{ fontWeight: '800', fontSize: '14px', color: 'var(--green-light)', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '8px' }}>Kwikkit</h4>
            <span style={{ display: 'inline-block', background: 'rgba(0,155,141,0.12)', color: 'var(--green-light)', padding: '4px 12px', borderRadius: '8px', fontSize: '12px', fontWeight: '700', marginBottom: '24px' }}>₹10,000 GMV</span>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '14px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px dashed rgba(255,255,255,0.08)', paddingBottom: '10px' }}>
                <span style={{ color: 'rgba(253,248,242,0.5)' }}>Gross Revenue</span>
                <strong style={{ color: 'var(--cream)' }}>₹10,000</strong>
              </div>
              <div style={{ fontSize: '11px', fontWeight: '700', textTransform: 'uppercase', color: 'rgba(253,248,242,0.25)', letterSpacing: '0.06em' }}>Deductions</div>
              <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--green-light)' }}>
                <span style={{ fontWeight: '600' }}>Platform Commission</span><strong style={{ fontSize: '16px' }}>₹0</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', color: '#f87171', borderBottom: '1px dashed rgba(0,155,141,0.2)', paddingBottom: '10px' }}>
                <span>Payment Gateway (~2%)</span><span style={{ fontWeight: '600' }}>−₹200</span>
              </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: '20px', fontWeight: '800', alignItems: 'center' }}>
              <span style={{ color: 'rgba(253,248,242,0.6)' }}>You Keep</span>
              <span style={{ color: 'var(--green-light)', fontSize: '28px', fontFamily: "'Syne', sans-serif" }}>₹9,800</span>
            </div>
          </div>
        </div>

        {/* Savings callout */}
        <div className="reveal" style={{ background: 'rgba(255,229,0,0.06)', border: '1px solid rgba(255,229,0,0.2)', borderRadius: '20px', padding: '28px 40px', textAlign: 'center', maxWidth: '700px', margin: '0 auto 80px' }}>
          <p style={{ fontFamily: "'Syne', sans-serif", fontWeight: '800', fontSize: 'clamp(15px,2.2vw,24px)', color: 'var(--yellow)', margin: 0 }}>
            That's ₹2,500 more per ₹10,000 in orders — every single month.
          </p>
        </div>

        {/* How we sustain it */}
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <span className="reveal tag tag-green-dark" style={{ marginBottom: '16px' }}>How We Sustain This</span>
          <h3 className="reveal heading-display" style={{ color: 'var(--cream)', fontSize: 'clamp(20px,3.5vw,42px)', marginBottom: '12px' }}>If restaurants pay ₹0, how does Kwikkit make money?</h3>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px', maxWidth: '1000px', margin: '0 auto' }}>
          {[
            { icon: ShieldCheck, color: 'var(--green-light)', border: 'rgba(0,155,141,0.2)', title: 'Flat Delivery Fee', desc: 'Customers pay a small, transparent delivery fee per order — shown upfront. This covers logistics and delivery costs.' },
            { icon: HeartHandshake, color: 'var(--yellow)', border: 'rgba(255,229,0,0.2)', title: 'Optional Premium Tools', desc: 'Restaurants can optionally access premium analytics, promotional features, and priority placement. Never mandatory.' },
            { icon: TrendingUp, color: '#a78bfa', border: 'rgba(167,139,250,0.2)', title: 'Volume Over Extraction', desc: 'We grow through higher order volume and more restaurant partnerships — not by extracting commissions.' },
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="reveal-scale" style={{ transitionDelay: `${i * 80}ms` }}>
                <div style={{ padding: '32px 28px', borderRadius: '20px', height: '100%', background: 'rgba(255,255,255,0.04)', border: `1px solid ${item.border}`, backdropFilter: 'blur(12px)', transition: 'transform 0.35s ease, background 0.35s ease', cursor: 'default' }}
                  onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.background = 'rgba(255,255,255,0.07)'; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.background = 'rgba(255,255,255,0.04)'; }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '14px', background: 'rgba(255,255,255,0.05)', border: `1px solid ${item.border}`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                    <Icon size={22} color={item.color} strokeWidth={1.8} />
                  </div>
                  <h3 style={{ fontFamily: "'Syne', sans-serif", fontWeight: '700', fontSize: '18px', color: 'var(--cream)', marginBottom: '10px' }}>{item.title}</h3>
                  <p style={{ fontSize: '14px', lineHeight: '1.7', color: 'rgba(253,248,242,0.55)' }}>{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════
   SECTION 4 — SAVINGS CALCULATOR
═══════════════════════════════════════ */
function SavingsCalculatorSection() {
  const ref = useRef(null);
  useReveal(ref);
  const [dailySales, setDailySales] = useState(20000);
  const [commissionPct, setCommissionPct] = useState(28);

  let tierName = 'Starter', kwikkitBaseFee = 0;
  if (dailySales < 700) { tierName = 'Starter'; kwikkitBaseFee = 0; }
  else if (dailySales < 2500) { tierName = 'Basic'; kwikkitBaseFee = 100; }
  else if (dailySales < 5000) { tierName = 'Standard'; kwikkitBaseFee = 249; }
  else if (dailySales < 10000) { tierName = 'Growth'; kwikkitBaseFee = 349; }
  else { tierName = 'Enterprise'; kwikkitBaseFee = 499; }

  const competitorFee = Math.round(dailySales * (commissionPct / 100));
  const kwikkitFee = Math.round(kwikkitBaseFee * 1.18);
  const dailySavings = Math.max(0, competitorFee - kwikkitFee);
  const monthlySavings = dailySavings * 30;
  const yearlySavings = dailySavings * 360;
  const fmt = (n) => n >= 100000 ? `₹${(n / 100000).toFixed(2)} Lakhs` : `₹${n.toLocaleString('en-IN')}`;

  return (
    <section ref={ref} id="calculator" style={{ padding: '120px 0', background: 'var(--cream)', position: 'relative', overflow: 'hidden' }}>
      <div className="section-wrap">
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <span className="reveal tag tag-green" style={{ marginBottom: '16px' }}>Savings Calculator</span>
          <h2 className="reveal heading-display heading-lg" style={{ color: 'var(--text-primary)', marginBottom: '16px' }}>
            Calculate Your <span className="gradient-text-green">Recovered Revenue</span>
          </h2>
          <p className="reveal" style={{ fontSize: '17px', color: 'var(--text-muted)', maxWidth: '500px', margin: '0 auto' }}>
            Compare typical food delivery commissions against Kwikkit's honest flat fees.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: '40px', maxWidth: '1100px', margin: '0 auto 60px', alignItems: 'stretch' }} className="calc-main-grid">
          {/* Inputs */}
          <div className="reveal-left" style={{ background: 'var(--white)', border: '1px solid rgba(0,95,87,0.08)', borderRadius: '28px', padding: '40px 32px', boxShadow: '0 10px 40px rgba(0,95,87,0.02)', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '36px' }}>
            {[
              { label: 'Daily Sales Value', sub: 'Total revenue from daily orders.', val: `₹${dailySales.toLocaleString('en-IN')}`, min: 500, max: 50000, step: 500, value: dailySales, onChange: setDailySales, left: '₹500', right: '₹50,000+' },
              { label: 'Competitor Commission', sub: 'What percentage are you currently paying?', val: `${commissionPct}%`, min: 15, max: 40, step: 1, value: commissionPct, onChange: setCommissionPct, left: '15%', right: '40%' },
            ].map((inp) => (
              <div key={inp.label} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <div>
                    <h3 style={{ fontFamily: "'Syne', sans-serif", fontSize: '18px', fontWeight: '800', color: 'var(--text-primary)', letterSpacing: '-0.01em' }}>{inp.label}</h3>
                    <p style={{ fontSize: '13px', color: 'var(--text-muted)', marginTop: '2px' }}>{inp.sub}</p>
                  </div>
                  <div style={{ background: 'var(--cream-dark)', padding: '6px 14px', borderRadius: '10px' }}>
                    <span style={{ fontSize: '18px', fontWeight: '800', color: 'var(--green-dark)', fontFamily: "'Syne', sans-serif" }}>{inp.val}</span>
                  </div>
                </div>
                <input type="range" min={inp.min} max={inp.max} step={inp.step} value={inp.value} onChange={e => inp.onChange(parseInt(e.target.value))} style={{ width: '100%', accentColor: 'var(--green)', height: '6px', borderRadius: '3px', cursor: 'pointer', outline: 'none' }} />
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', color: 'var(--text-muted)', fontWeight: '600' }}>
                  <span>{inp.left}</span><span>{inp.right}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Results */}
          <div className="reveal-right" style={{ background: 'var(--green-dark)', borderRadius: '28px', padding: '40px 36px', boxShadow: '0 16px 48px rgba(0,61,55,0.18)', color: 'var(--cream)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: '-60px', right: '-60px', width: '180px', height: '180px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,229,0,0.06) 0%, transparent 60%)', pointerEvents: 'none' }} />
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '28px' }}>
                <h3 style={{ fontFamily: "'Syne', sans-serif", fontSize: '20px', fontWeight: '800', letterSpacing: '-0.02em' }}>Your Savings Summary</h3>
                <span style={{ fontSize: '11px', fontWeight: '850', color: 'var(--yellow)', border: '1px solid rgba(255,229,0,0.3)', background: 'rgba(255,229,0,0.08)', padding: '4px 12px', borderRadius: '6px', textTransform: 'uppercase', letterSpacing: '0.04em' }}>{tierName} Tier</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '32px' }}>
                {[
                  { label: 'Daily Savings', val: `₹${dailySavings.toLocaleString('en-IN')}`, highlight: false },
                  { label: 'Monthly Savings', val: fmt(monthlySavings), highlight: false },
                  { label: 'Yearly Revenue Saved', val: fmt(yearlySavings), highlight: true },
                ].map((row, i) => (
                  <div key={row.label} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: i < 2 ? '1px solid rgba(255,255,255,0.06)' : 'none', paddingBottom: i < 2 ? '14px' : '0' }}>
                    <span style={{ fontSize: '14px', color: row.highlight ? 'var(--yellow)' : 'rgba(253,248,242,0.65)', fontWeight: row.highlight ? '750' : '400' }}>{row.label}</span>
                    <span style={{ fontFamily: "'Syne', sans-serif", fontSize: row.highlight ? '32px' : '22px', color: 'var(--cream)', fontWeight: '800' }}>{row.val}</span>
                  </div>
                ))}
              </div>
              <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '16px', padding: '20px 24px', marginBottom: '32px' }}>
                <h4 style={{ fontSize: '12px', fontWeight: '800', textTransform: 'uppercase', color: 'rgba(253,248,242,0.4)', letterSpacing: '0.05em', marginBottom: '14px' }}>Daily Cost Breakdown</h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13.5px' }}>
                    <span style={{ color: 'rgba(253,248,242,0.65)' }}>Competitor ({commissionPct}%)</span>
                    <span style={{ fontWeight: '600', color: '#ff7b88' }}>₹{competitorFee.toLocaleString('en-IN')}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13.5px' }}>
                    <span style={{ color: 'rgba(253,248,242,0.65)' }}>Kwikkit ({tierName} + GST)</span>
                    <span style={{ fontWeight: '700', color: 'var(--yellow)' }}>₹{kwikkitFee}</span>
                  </div>
                </div>
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[{ label: 'No Hidden Fees', icon: Shield }, { label: 'Cancel Anytime', icon: RefreshCw }, { label: 'FSSAI Regulated', icon: Check }, { label: 'SSL Secure', icon: Lock }].map((b, i) => {
                const BIcon = b.icon;
                return (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <div style={{ width: '20px', height: '20px', borderRadius: '50%', background: 'rgba(255,255,255,0.07)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--yellow)' }}>
                      <BIcon size={11} strokeWidth={2.5} />
                    </div>
                    <span style={{ fontSize: '12.5px', fontWeight: '600', color: 'rgba(253,248,242,0.5)' }}>{b.label}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════
   SECTION 5 — EASY ONBOARDING STEPS
═══════════════════════════════════════ */
function OnboardingSection() {
  const ref = useRef(null);
  useReveal(ref);
  const [activeStep, setActiveStep] = useState(1);
  const [checkedItems, setCheckedItems] = useState({ name: false, address: false, cuisine: false, hours: false, menu: false, photos: false });

  const toggleCheck = (k) => setCheckedItems(prev => ({ ...prev, [k]: !prev[k] }));
  const completed = Object.values(checkedItems).filter(Boolean).length;
  const progress = Math.round((completed / 6) * 100);

  const steps = [
    { id: 1, num: '01', title: 'Submit Your Details', timeline: '~3 min', desc: 'Fill out our short partner form.', icon: FileText, color: 'var(--yellow)', bg: 'rgba(255,229,0,0.12)', bullets: ['Restaurant name & contact details', 'Restaurant address', 'Cuisine type', 'Operating hours'] },
    { id: 2, num: '02', title: 'We Call You Back', timeline: 'Within 24 hrs', desc: 'A dedicated Kwikkit partner manager contacts you.', icon: PhoneCall, color: 'var(--green-light)', bg: 'rgba(0,155,141,0.12)', bullets: ['Platform walkthrough', 'Setup assistance', 'Live Q&A session', 'Agreement briefing'] },
    { id: 3, num: '03', title: 'Build Your Menu', timeline: '~30 min', desc: 'Add your dishes at your actual menu prices. No inflation.', icon: ClipboardCheck, color: '#a78bfa', bg: 'rgba(167,139,250,0.12)', bullets: ['Real menu prices — no tricks', 'Our team assists with setup', 'Photos optional but recommended'] },
    { id: 4, num: '04', title: 'Go Live & Earn', timeline: 'Live!', desc: 'Your restaurant goes live on the Kwikkit app.', icon: Rocket, color: '#34d399', bg: 'rgba(52,211,153,0.12)', bullets: ['Start receiving orders immediately', 'Zero commission deductions', 'Keep every rupee you earn'] },
  ];

  return (
    <section ref={ref} id="onboarding" style={{ padding: '120px 0', background: 'var(--cream)', scrollMarginTop: '80px' }}>
      <div className="section-wrap">
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <span className="reveal tag tag-green" style={{ marginBottom: '16px' }}>Easy Onboarding</span>
          <h2 className="reveal heading-display heading-lg" style={{ color: 'var(--text-primary)', marginBottom: '18px' }}>
            From sign-up to your first order<br /><span className="gradient-text-green">in under 24 hours.</span>
          </h2>
          <p className="reveal" style={{ fontSize: '17px', color: 'var(--text-muted)', maxWidth: '480px', margin: '0 auto' }}>
            We've built the simplest restaurant onboarding process. No complicated contracts, no technical expertise needed.
          </p>
        </div>

        {/* Step Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', maxWidth: '1100px', margin: '0 auto 80px' }}>
          {steps.map((s, i) => {
            const Icon = s.icon;
            return (
              <div key={s.id} className="reveal-scale" style={{ transitionDelay: `${i * 80}ms` }}>
                <div style={{ padding: '36px', background: 'var(--white)', border: activeStep === s.id ? `2px solid ${s.color}` : '1px solid rgba(0,95,87,0.08)', borderRadius: '24px', boxShadow: activeStep === s.id ? `0 10px 40px ${s.color}20` : '0 4px 20px rgba(0,95,87,0.03)', transition: 'all 0.3s ease', cursor: 'default', height: '100%' }}
                  onMouseEnter={() => setActiveStep(s.id)}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                    <div style={{ width: '52px', height: '52px', borderRadius: '14px', background: s.bg, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Icon size={24} color={s.color} strokeWidth={1.8} />
                    </div>
                    <span style={{ fontSize: '12px', fontWeight: '800', color: s.color, background: s.bg, padding: '5px 12px', borderRadius: '100px', textTransform: 'uppercase', letterSpacing: '0.04em' }}>{s.timeline}</span>
                  </div>
                  <div style={{ fontSize: '11px', fontWeight: '800', color: 'rgba(0,95,87,0.3)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '8px' }}>Step {s.num}</div>
                  <h3 style={{ fontFamily: "'Syne', sans-serif", fontWeight: '800', fontSize: '20px', color: 'var(--text-primary)', marginBottom: '10px' }}>{s.title}</h3>
                  <p style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: '1.6', marginBottom: '20px' }}>{s.desc}</p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {s.bullets.map((b, bi) => (
                      <div key={bi} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                        <div style={{ width: '18px', height: '18px', borderRadius: '50%', background: `${s.color}18`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>
                          <Check size={11} color={s.color} strokeWidth={3} />
                        </div>
                        <span style={{ fontSize: '13.5px', color: 'var(--text-muted)', lineHeight: '1.5' }}>{b}</span>
                      </div>
                    ))}
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

/* ═══════════════════════════════════════
   SECTION 6 — PARTNER TESTIMONIALS
═══════════════════════════════════════ */
function TestimonialsSection() {
  const ref = useRef(null);
  useReveal(ref);
  const testimonials = [
    { name: 'Harpreet S.', restaurant: 'Dhaba 22', city: 'Chandigarh', since: 'January 2026', feedback: 'Reduced significant monthly commission expenses after joining Kwikkit.', initial: 'H' },
    { name: 'Meena R.', restaurant: 'Spice Garden', city: 'Mohali', since: 'February 2026', feedback: 'Experienced a simple and fast onboarding process without complicated agreements.', initial: 'M' },
    { name: 'Vikram T.', restaurant: 'Tikka World', city: 'Chandigarh', since: 'March 2026', feedback: 'Customers appreciated transparent pricing, leading to increased trust and repeat orders.', initial: 'V' },
  ];

  return (
    <section ref={ref} style={{ background: 'var(--dark-2)', padding: '120px 0', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: '-10%', left: '-5%', width: '500px', height: '500px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(0,154,141,0.12) 0%, transparent 65%)', pointerEvents: 'none' }} />
      <div className="section-wrap">
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <span className="reveal tag tag-green-dark" style={{ marginBottom: '16px' }}>Partner Stories</span>
          <h2 className="reveal heading-display heading-lg" style={{ color: 'var(--cream)', marginBottom: '18px' }}>
            Stories from{' '}
            <span style={{ background: 'linear-gradient(90deg, var(--yellow) 0%, #fff9a0 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Our Partners</span>
          </h2>
          <p className="reveal" style={{ fontSize: '17px', lineHeight: '1.7', color: 'rgba(253,248,242,0.5)', maxWidth: '480px', margin: '0 auto' }}>
            Hear how restaurant owners across Tricity are increasing profits with Kwikkit.
          </p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px', maxWidth: '1080px', margin: '0 auto' }}>
          {testimonials.map((t, i) => (
            <div key={t.name} className="reveal-scale" style={{ transitionDelay: `${i * 100}ms` }}>
              <div style={{ padding: '40px 32px', borderRadius: '24px', height: '100%', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', backdropFilter: 'blur(12px)', transition: 'transform 0.35s ease, background 0.35s ease, border-color 0.35s ease', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.background = 'rgba(255,255,255,0.07)'; e.currentTarget.style.borderColor = 'rgba(255,229,0,0.2)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.background = 'rgba(255,255,255,0.04)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; }}>
                <div style={{ marginBottom: '32px' }}>
                  <div style={{ color: 'var(--yellow)', fontSize: '48px', fontFamily: 'serif', lineHeight: '0.1', height: '24px', opacity: 0.8 }}>"</div>
                  <p style={{ fontSize: '15.5px', lineHeight: '1.75', color: 'rgba(253,248,242,0.82)', fontStyle: 'italic', margin: '10px 0 0' }}>{t.feedback}</p>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px', paddingTop: '20px', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                  <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: 'linear-gradient(135deg, var(--green-light) 0%, var(--green) 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--cream)', fontWeight: '800', fontSize: '16px', fontFamily: "'Syne', sans-serif" }}>{t.initial}</div>
                  <div>
                    <h4 style={{ fontSize: '15px', fontWeight: '700', color: 'var(--cream)' }}>{t.name}</h4>
                    <span style={{ fontSize: '12px', color: 'rgba(253,248,242,0.45)' }}>{t.restaurant} · {t.city}</span><br />
                    <span style={{ fontSize: '10px', color: 'var(--yellow)', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.04em' }}>Partner since {t.since}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════
   SECTION 7 — PARTNER FORM
═══════════════════════════════════════ */
function PartnerFormSection({ formRef }) {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({ restaurantName: '', ownerName: '', phone: '', address: '', cuisineType: '', currentPlatform: '', additionalInfo: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = {};
    if (!formData.restaurantName.trim()) errs.restaurantName = 'Restaurant Name is required';
    if (!formData.ownerName.trim()) errs.ownerName = 'Owner Name is required';
    if (!formData.phone.trim()) errs.phone = 'Phone Number is required';
    else if (!/^[6-9]\d{9}$/.test(formData.phone.trim().replace(/[\s-+]/g, '').slice(-10))) errs.phone = 'Please enter a valid 10-digit mobile number';
    if (!formData.address.trim()) errs.address = 'Restaurant Address is required';
    if (Object.keys(errs).length > 0) { setErrors(errs); formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' }); return; }
    setFormSubmitted(true);
  };

  const inputStyle = (err) => ({ width: '100%', padding: '14px 18px', borderRadius: '12px', border: err ? '1px solid #ef4444' : '1px solid rgba(0,95,87,0.15)', background: 'var(--cream-dark)', fontSize: '15px', color: 'var(--text-primary)', outline: 'none', boxSizing: 'border-box' });

  return (
    <section id="form" ref={formRef} style={{ padding: '120px 0', background: 'var(--cream)' }}>
      <div className="section-wrap" style={{ maxWidth: '780px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <span className="tag tag-green" style={{ marginBottom: '16px' }}>Partner With Us</span>
          <h2 className="heading-display heading-md" style={{ color: 'var(--text-primary)', marginBottom: '12px' }}>Ready to Join Kwikkit?</h2>
          <p style={{ fontSize: '15px', color: 'var(--text-muted)' }}>Fill out the form below. Our partner manager will call you within 24 hours.</p>
        </div>

        <div style={{ background: 'var(--white)', border: '1px solid rgba(0,95,87,0.08)', borderRadius: '28px', padding: '48px clamp(24px,6vw,48px)', boxShadow: '0 10px 40px rgba(0,95,87,0.03)' }}>
          {!formSubmitted ? (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: '750', color: 'var(--text-primary)', marginBottom: '8px', textTransform: 'uppercase' }}>Restaurant Name *</label>
                  <input type="text" name="restaurantName" placeholder="Your Restaurant Name" value={formData.restaurantName} onChange={handleChange} style={inputStyle(errors.restaurantName)} />
                  {errors.restaurantName && <div style={{ color: '#ef4444', fontSize: '12px', marginTop: '6px', display: 'flex', alignItems: 'center', gap: '4px' }}><AlertCircle size={12} />{errors.restaurantName}</div>}
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: '750', color: 'var(--text-primary)', marginBottom: '8px', textTransform: 'uppercase' }}>Owner / Contact Name *</label>
                  <input type="text" name="ownerName" placeholder="Your Name" value={formData.ownerName} onChange={handleChange} style={inputStyle(errors.ownerName)} />
                  {errors.ownerName && <div style={{ color: '#ef4444', fontSize: '12px', marginTop: '6px', display: 'flex', alignItems: 'center', gap: '4px' }}><AlertCircle size={12} />{errors.ownerName}</div>}
                </div>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: '750', color: 'var(--text-primary)', marginBottom: '8px', textTransform: 'uppercase' }}>Phone Number *</label>
                  <input type="tel" name="phone" placeholder="10-digit Mobile Number" value={formData.phone} onChange={handleChange} style={inputStyle(errors.phone)} />
                  {errors.phone && <div style={{ color: '#ef4444', fontSize: '12px', marginTop: '6px', display: 'flex', alignItems: 'center', gap: '4px' }}><AlertCircle size={12} />{errors.phone}</div>}
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: '750', color: 'var(--text-primary)', marginBottom: '8px', textTransform: 'uppercase' }}>Cuisine Type</label>
                  <input type="text" name="cuisineType" placeholder="e.g. North Indian, Chinese" value={formData.cuisineType} onChange={handleChange} style={inputStyle(false)} />
                </div>
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: '750', color: 'var(--text-primary)', marginBottom: '8px', textTransform: 'uppercase' }}>Restaurant Address *</label>
                <input type="text" name="address" placeholder="Full address including sector / city" value={formData.address} onChange={handleChange} style={inputStyle(errors.address)} />
                {errors.address && <div style={{ color: '#ef4444', fontSize: '12px', marginTop: '6px', display: 'flex', alignItems: 'center', gap: '4px' }}><AlertCircle size={12} />{errors.address}</div>}
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: '750', color: 'var(--text-primary)', marginBottom: '8px', textTransform: 'uppercase' }}>Currently on Which Platform?</label>
                <input type="text" name="currentPlatform" placeholder="e.g. Swiggy, Zomato, None" value={formData.currentPlatform} onChange={handleChange} style={inputStyle(false)} />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: '750', color: 'var(--text-primary)', marginBottom: '8px', textTransform: 'uppercase' }}>Anything else?</label>
                <textarea name="additionalInfo" rows={3} placeholder="Any questions or additional context" value={formData.additionalInfo} onChange={handleChange} style={{ ...inputStyle(false), resize: 'vertical', lineHeight: '1.6' }} />
              </div>
              <button type="submit" style={{ background: 'var(--green-dark)', color: 'var(--cream)', padding: '16px 28px', borderRadius: '100px', fontWeight: '700', fontSize: '15px', border: 'none', cursor: 'pointer', transition: 'background 0.2s ease, transform 0.2s ease', marginTop: '8px', boxShadow: '0 6px 20px rgba(0,61,55,0.15)' }}
                onMouseEnter={e => { e.currentTarget.style.backgroundColor = 'var(--green)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'var(--green-dark)'; e.currentTarget.style.transform = ''; }}>
                Submit Partnership Request
              </button>
            </form>
          ) : (
            <div style={{ textAlign: 'center', padding: '40px 0' }}>
              <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'rgba(0,95,87,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px', color: 'var(--green)' }}>
                <CheckCircle size={32} />
              </div>
              <h3 style={{ fontFamily: "'Syne', sans-serif", fontWeight: '800', fontSize: '28px', color: 'var(--text-primary)', marginBottom: '12px' }}>Request Received!</h3>
              <p style={{ fontSize: '16px', color: 'var(--text-muted)', maxWidth: '400px', margin: '0 auto 28px', lineHeight: '1.6' }}>
                Our partner manager will call you within 24 hours to walk you through the onboarding process.
              </p>
              <button onClick={() => setFormSubmitted(false)} style={{ background: 'none', border: '1px solid rgba(0,95,87,0.2)', color: 'var(--green)', padding: '12px 28px', borderRadius: '100px', fontWeight: '700', fontSize: '14px', cursor: 'pointer' }}>
                Submit Another Request
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════
   ROOT PAGE
═══════════════════════════════════════ */
export default function RestaurantsPage() {
  const formRef = useRef(null);
  const benefitsRef = useRef(null);

  const scrollToForm = () => formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  const scrollToBenefits = () => benefitsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });

  return (
    <main style={{ background: 'var(--cream)', minHeight: '100vh', overflowX: 'hidden' }}>
      <HeroSection onScrollToForm={scrollToForm} onScrollToBenefits={scrollToBenefits} />
      <BenefitsSection benefitsRef={benefitsRef} />
      <ZeroCommissionSection />
      <SavingsCalculatorSection />
      <OnboardingSection />
      <TestimonialsSection />
      <PartnerFormSection formRef={formRef} />

      <style>{`
        @keyframes scrollLine { 0%{opacity:0;transform:scaleY(0);transform-origin:top} 50%{opacity:1;transform:scaleY(1)} 100%{opacity:0;transform:scaleY(1);transform-origin:bottom} }
        @keyframes blinkDot { 0%,100%{opacity:1} 50%{opacity:0.2} }
        @keyframes blinkY { 0%,100%{opacity:1} 50%{opacity:0.25} }
        @keyframes chevDrop { 0%,100%{transform:translateY(0)} 50%{transform:translateY(6px)} }
        .dot-blink { animation: blinkDot 1.6s ease infinite; }
        @media (max-width: 820px) {
          .calc-main-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
          .comparison-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 600px) {
          .checklist-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </main>
  );
}
