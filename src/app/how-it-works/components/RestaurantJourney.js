'use client';
import { useEffect, useRef } from 'react';
import { FileText, Phone, Upload, Bell, BadgeIndianRupee } from 'lucide-react';

const steps = [
  { num: '01', Icon: FileText,          title: 'Register for Free',  desc: 'Fill out our short partner form. Restaurant name, contact, cuisine, hours. Takes 3 minutes.', },
  { num: '02', Icon: Phone,             title: 'We Call You Back',   desc: 'A Kwikkit partner manager calls within 24 hours, walks you through the platform, and answers every question.', },
  { num: '03', Icon: Upload,            title: 'Upload Your Menu',   desc: 'Add your dishes at your actual prices. No inflation needed — we charge 0% commission.', },
  { num: '04', Icon: Bell,              title: 'Receive Orders',     desc: 'Orders land on your dashboard or POS in real time. Accept and prepare with full visibility.', },
  { num: '05', Icon: BadgeIndianRupee,  title: 'Keep Everything',    desc: 'Every rupee your customer paid goes to you. 0% commission. Always.', },
];

const stats = [
  { val: '₹0',   label: 'Commission' },
  { val: '24h',  label: 'Onboarding' },
  { val: '100%', label: 'Your Revenue' },
];

export default function RestaurantJourney() {
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      e => e.forEach(en => en.isIntersecting && en.target.classList.add('visible')),
      { threshold: 0.08 }
    );
    ref.current?.querySelectorAll('.reveal,.reveal-left,.reveal-right').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section id="restaurant" ref={ref} style={{ background: 'var(--dark)', padding: '110px 0', position: 'relative', overflow: 'hidden', scrollMarginTop: '80px' }}>

      {/* BG orbs */}
      <div style={{ position: 'absolute', top: '10%', left: '-8%', width: '600px', height: '600px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(0,95,87,0.13) 0%, transparent 65%)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: '5%', right: '-5%', width: '500px', height: '500px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,229,0,0.04) 0%, transparent 65%)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(255,255,255,0.018) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.018) 1px, transparent 1px)', backgroundSize: '72px 72px', pointerEvents: 'none' }} />

      <div className="section-wrap">

        {/* ── Two-col layout: Left=header+stats, Right=timeline ── */}
        <div className="restaurant-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: '80px', alignItems: 'start' }}>

          {/* ── LEFT: Sticky header + stats ── */}
          <div className="reveal-left" style={{ position: 'sticky', top: '100px' }}>
            <span style={{ display: 'inline-block', background: 'rgba(255,229,0,0.1)', border: '1px solid rgba(255,229,0,0.22)', borderRadius: '100px', padding: '5px 16px', fontSize: '11px', fontWeight: '700', color: 'var(--yellow)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '20px' }}>
              For Restaurants
            </span>
            <h2 style={{ fontFamily: "'Syne',sans-serif", fontWeight: '800', fontSize: 'clamp(24px, 3.8vw, 52px)', letterSpacing: '-0.035em', color: 'var(--cream)', lineHeight: '1.05', marginBottom: '20px' }}>
              Go live on Kwikkit<br />
              <span style={{ background: 'linear-gradient(90deg, var(--yellow) 0%, #fffab0 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>in 24 hours.</span>
            </h2>
            <p style={{ fontSize: '15px', lineHeight: '1.75', color: 'rgba(253,248,242,0.45)', marginBottom: '44px', maxWidth: '320px' }}>
              No complicated contracts, no hidden clauses. A simple 5-step process to start earning more from delivery.
            </p>

            {/* Stats */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '40px' }}>
              {stats.map(s => (
                <div key={s.label} style={{
                  display: 'flex', alignItems: 'center', gap: '16px',
                  padding: '16px 20px', borderRadius: '14px',
                  background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)',
                }}>
                  <span style={{ fontFamily: "'Syne',sans-serif", fontWeight: '900', fontSize: '26px', color: 'var(--yellow)', lineHeight: '1', minWidth: '60px' }}>{s.val}</span>
                  <span style={{ fontSize: '13px', color: 'rgba(253,248,242,0.45)', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.07em' }}>{s.label}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <a href="#contact" style={{
              display: 'inline-flex', alignItems: 'center', gap: '10px',
              background: 'var(--yellow)', color: 'var(--green-dark)',
              padding: '14px 28px', borderRadius: '14px', fontWeight: '800',
              fontSize: '14px', textDecoration: 'none', letterSpacing: '-0.01em',
              boxShadow: '0 8px 28px rgba(255,229,0,0.28)',
              transition: 'transform 0.3s cubic-bezier(.34,1.56,.64,1), box-shadow 0.3s ease',
            }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 16px 48px rgba(255,229,0,0.4)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '0 8px 28px rgba(255,229,0,0.28)'; }}
            >
              Partner With Us
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </a>
          </div>

          {/* ── RIGHT: Timeline ── */}
          <div className="reveal-right" style={{ position: 'relative', paddingLeft: '40px' }}>
            {/* Vertical connecting line */}
            <div style={{
              position: 'absolute', left: '18px', top: '24px', bottom: '24px', width: '2px',
              background: 'linear-gradient(to bottom, var(--yellow), rgba(0,154,141,0.6), rgba(0,95,87,0.2))',
            }} />

            <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
              {steps.map((step, i) => (
                <div key={step.num} className="rest-step" style={{
                  position: 'relative', padding: '28px 28px 28px 32px',
                  background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)',
                  borderRadius: '18px',
                  transition: 'background 0.3s ease, border-color 0.3s ease, transform 0.35s cubic-bezier(.34,1.56,.64,1)',
                  cursor: 'default',
                }}
                  onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.06)'; e.currentTarget.style.borderColor = 'rgba(255,229,0,0.18)'; e.currentTarget.style.transform = 'translateX(6px)'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.03)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'; e.currentTarget.style.transform = 'translateX(0)'; }}
                >
                  {/* Dot on the line */}
                  <div style={{
                    position: 'absolute', left: '-49px', top: '50%', transform: 'translateY(-50%)',
                    width: '36px', height: '36px', borderRadius: '50%',
                    background: i === 4 ? 'var(--yellow)' : 'rgba(255,255,255,0.06)',
                    border: `2px solid ${i === 4 ? 'var(--yellow)' : 'rgba(255,229,0,0.3)'}`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontFamily: "'Syne',sans-serif", fontWeight: '800', fontSize: '11px',
                    color: i === 4 ? 'var(--green-dark)' : 'var(--yellow)',
                    boxShadow: i === 4 ? '0 0 20px rgba(255,229,0,0.4)' : 'none',
                    zIndex: 1,
                  }}>{step.num}</div>

                  {/* Content */}
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                    {/* Icon */}
                    <div style={{
                      width: '42px', height: '42px', borderRadius: '12px', flexShrink: 0,
                      background: 'rgba(255,229,0,0.08)', border: '1px solid rgba(255,229,0,0.15)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                      <step.Icon size={19} strokeWidth={1.7} color="var(--yellow)" />
                    </div>
                    <div>
                      <div style={{ fontSize: '10px', fontWeight: '700', color: 'var(--yellow)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '6px' }}>
                        Step {step.num}
                      </div>
                      <h3 style={{ fontFamily: "'Syne',sans-serif", fontWeight: '700', fontSize: '17px', color: 'var(--cream)', letterSpacing: '-0.02em', marginBottom: '8px', lineHeight: '1.2' }}>
                        {step.title}
                      </h3>
                      <p style={{ fontSize: '14px', lineHeight: '1.7', color: 'rgba(253,248,242,0.48)' }}>
                        {step.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .restaurant-grid { grid-template-columns: 1fr !important; gap: 60px !important; }
          .restaurant-grid > div:first-child { position: static !important; }
        }
      `}</style>
    </section>
  );
}
