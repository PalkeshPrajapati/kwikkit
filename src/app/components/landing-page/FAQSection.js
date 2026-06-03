'use client';
import { useEffect, useRef, useState } from 'react';

const faqs = [
  { q: 'What does delivery cost?',
    a: "Kwikkit doesn't charge a platform fee. You only pay the restaurant's actual delivery charge (if any) and the exact menu price — nothing added on top by us." },
  { q: 'Are menu prices the same as the restaurant?',
    a: 'Yes, 100%. We never mark up menu prices. What you see in our app is exactly what the restaurant charges for that item.' },
  { q: 'Which areas do you deliver to?',
    a: 'We currently serve Chandigarh, Panchkula, and Mohali — the entire Tricity. We are rapidly expanding restaurant coverage.' },
  { q: 'Can I cancel or modify my order?',
    a: 'You can cancel or modify before the restaurant accepts the order. Once they start preparing your food, we may not be able to make changes.' },
  { q: 'How is Kwikkit different from Zomato or Swiggy?',
    a: 'Unlike Zomato and Swiggy, we charge zero platform fees and never inflate menu prices. Our zero-commission model means local restaurants also benefit directly.' },
  { q: 'What payment methods are accepted?',
    a: 'All major UPI apps, credit/debit cards, net banking, and cash on delivery for select areas.' },
];

function Item({ faq, index }) {
  const [open, setOpen] = useState(false);

  return (
    <div style={{
      borderRadius: '14px',
      border: `1px solid ${open ? 'rgba(0,95,87,0.22)' : 'rgba(0,95,87,0.08)'}`,
      overflow: 'hidden',
      transition: 'border-color 0.3s ease',
      background: open ? 'rgba(0,95,87,0.02)' : '#fff',
    }}>
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: '100%', textAlign: 'left',
          padding: '22px 28px', display: 'flex',
          justifyContent: 'space-between', alignItems: 'center', gap: '16px',
          background: 'transparent', border: 'none', cursor: 'pointer',
        }}
      >
        <span style={{
          fontFamily: "'Syne',sans-serif", fontWeight: '700',
          fontSize: '16px', color: 'var(--text-primary)', lineHeight: '1.3',
          letterSpacing: '-0.02em',
        }}>{faq.q}</span>

        <div style={{
          width: '30px', height: '30px', flexShrink: 0, borderRadius: '50%',
          background: open
            ? 'linear-gradient(135deg, var(--green) 0%, var(--green-mid) 100%)'
            : 'rgba(0,95,87,0.07)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          transition: 'all 0.3s cubic-bezier(.34,1.56,.64,1)',
          transform: open ? 'rotate(45deg)' : 'rotate(0)',
        }}>
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none"
            stroke={open ? 'var(--cream)' : 'var(--green)'} strokeWidth="2.8">
            <line x1="12" y1="5" x2="12" y2="19"/>
            <line x1="5" y1="12" x2="19" y2="12"/>
          </svg>
        </div>
      </button>

      <div style={{
        maxHeight: open ? '240px' : '0',
        overflow: 'hidden',
        transition: 'max-height 0.4s cubic-bezier(.4,0,.2,1)',
      }}>
        <p style={{ padding: '0 28px 24px', fontSize: '15px', lineHeight: '1.75', color: 'var(--text-muted)' }}>
          {faq.a}
        </p>
      </div>
    </div>
  );
}

export default function FAQSection() {
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
    <section id="faq" ref={ref} style={{ background:'var(--cream-dark)', padding:'110px 0' }}>
      <div className="section-wrap" style={{ maxWidth:'820px', margin:'0 auto', padding:'0 28px' }}>
        <div style={{ textAlign:'center', marginBottom:'64px' }}>
          <span className="reveal tag tag-green" style={{ marginBottom:'16px' }}>FAQ</span>
          <h2 className="reveal heading-display heading-lg" style={{ color:'var(--text-primary)' }}>
            Things Customers <span className="gradient-text-green">Ask Us</span>
          </h2>
        </div>
        <div style={{ display:'flex', flexDirection:'column', gap:'10px' }}>
          {faqs.map((faq, i) => (
            <div key={i} className="reveal" style={{ transitionDelay:`${i * 55}ms` }}>
              <Item faq={faq} index={i} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
