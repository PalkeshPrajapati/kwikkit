'use client';
import { useState, useEffect, useRef } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    q: 'How does Kwikkit make money without commissions?',
    a: 'Kwikkit charges a small, flat delivery fee per order — shown upfront at checkout. That covers operational costs. Restaurant revenue remains completely untouched.',
  },
  {
    q: 'Are menu prices really the same as the restaurant?',
    a: 'Yes. Restaurants list their actual in-house prices. Kwikkit prohibits menu inflation on the platform — every item price is verified and must match the restaurant\'s own menu.',
  },
  {
    q: 'How long does onboarding take for restaurants?',
    a: 'Submit today, receive a callback within 24 hours, and go live within one business day. The entire onboarding takes under 48 hours from registration to first order.',
  },
  {
    q: 'Which areas in Chandigarh are covered?',
    a: 'Kwikkit currently serves Chandigarh, Mohali, and Panchkula, with coverage expanding regularly. Check the app for your current delivery zone.',
  },
];

function FAQItem({ item, idx }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{
      border: `1px solid ${open ? 'rgba(0,95,87,0.2)' : 'rgba(0,0,0,0.08)'}`,
      borderRadius: '16px',
      overflow: 'hidden',
      background: open ? 'rgba(0,95,87,0.03)' : 'transparent',
      transition: 'border-color 0.3s ease, background 0.3s ease',
    }}>
      <button
        onClick={() => setOpen(!open)}
        style={{
          all: 'unset', cursor: 'pointer', display: 'flex', alignItems: 'center',
          justifyContent: 'space-between', width: '100%', padding: '22px 24px',
          textAlign: 'left',
        }}
      >
        <span style={{ fontFamily: "'Syne',sans-serif", fontWeight: '700', fontSize: '16px', color: open ? 'var(--green)' : 'var(--text-primary)', letterSpacing: '-0.02em', lineHeight: '1.3', transition: 'color 0.3s ease', paddingRight: '20px' }}>
          {item.q}
        </span>
        <div style={{
          width: '32px', height: '32px', borderRadius: '50%', flexShrink: 0,
          background: open ? 'var(--green)' : 'rgba(0,95,87,0.08)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          transition: 'background 0.3s ease, transform 0.35s cubic-bezier(.34,1.56,.64,1)',
          transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
        }}>
          {open ? <Minus size={14} color="var(--cream)" strokeWidth={2.5} /> : <Plus size={14} color="var(--green)" strokeWidth={2.5} />}
        </div>
      </button>
      <div style={{
        maxHeight: open ? '300px' : '0',
        overflow: 'hidden',
        transition: 'max-height 0.4s cubic-bezier(.4,0,.2,1)',
      }}>
        <p style={{ padding: '0 24px 24px', fontSize: '15px', lineHeight: '1.8', color: 'var(--text-muted)' }}>
          {item.a}
        </p>
      </div>
    </div>
  );
}

export default function HowFAQ() {
  const ref = useRef(null);
  useEffect(() => {
    const obs = new IntersectionObserver(
      e => e.forEach(en => en.isIntersecting && en.target.classList.add('visible')),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll('.reveal').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} style={{ background: 'var(--cream-dark)', padding: '110px 0' }}>
      <div className="section-wrap">

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <span className="reveal tag tag-green" style={{ marginBottom: '16px' }}>FAQ</span>
          <h2 className="reveal heading-display heading-lg" style={{ color: 'var(--text-primary)', marginBottom: '16px' }}>
            Common Questions
          </h2>
          <p className="reveal" style={{ fontSize: '16px', color: 'var(--text-muted)', maxWidth: '420px', margin: '0 auto', lineHeight: '1.7' }}>
            Everything you need to know about how Kwikkit works.
          </p>
        </div>

        {/* Accordion */}
        <div className="reveal" style={{ maxWidth: '720px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {faqs.map((item, idx) => <FAQItem key={idx} item={item} idx={idx} />)}
        </div>
      </div>
    </section>
  );
}
