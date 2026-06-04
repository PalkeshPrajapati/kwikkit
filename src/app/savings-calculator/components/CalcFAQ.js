'use client';
import { useEffect, useRef, useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export default function CalcFAQ() {
  const sectionRef = useRef(null);
  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      e => e.forEach(en => en.isIntersecting && en.target.classList.add('visible')),
      { threshold: 0.1 }
    );
    sectionRef.current?.querySelectorAll('.reveal,.reveal-scale').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const faqs = [
    {
      q: 'How does pricing work?',
      a: 'Pricing is based on daily sales tiers. Restaurants pay a fixed fee according to daily revenue generated. On days with no orders, the flat fee is ₹0.',
    },
    {
      q: 'Do you really charge 0% commission?',
      a: 'Yes. Restaurants keep 100% of menu prices and only pay a fixed daily subscription fee. Customers pay the original menu price with zero platform markup.',
    },
    {
      q: 'When do payouts happen?',
      a: 'We use a T+1 settlement schedule. Revenue is transferred to the restaurant\'s bank account on the next business day (including weekends).',
    },
    {
      q: 'What documents are required?',
      a: 'To partner with us, you need three basic documents:\n• FSSAI License\n• GST Registration (if applicable)\n• PAN Details',
    },
    {
      q: 'Are there any hidden charges?',
      a: 'No. Only the daily subscription fee, GST, and standard payment gateway charges apply. There are no registration costs, setup charges, or hidden platform surges.',
    },
  ];

  const handleToggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section ref={sectionRef} style={{ background: 'var(--cream)', padding: '110px 0', position: 'relative', overflow: 'hidden' }}>
      
      {/* Decorative Orbs */}
      <div style={{ position: 'absolute', top: '10%', right: '-10%', width: '500px', height: '500px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(0,95,87,0.04) 0%, transparent 65%)', pointerEvents: 'none' }} />

      <div className="section-wrap" style={{ maxWidth: '800px', margin: '0 auto' }}>
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <span className="reveal tag tag-green" style={{ marginBottom: '16px' }}>FAQ</span>
          <h2 className="reveal heading-display heading-lg" style={{ color: 'var(--text-primary)', marginBottom: '16px' }}>
            Got Questions?
          </h2>
          <h3 style={{ fontFamily: "'Syne', sans-serif", fontSize: '20px', fontWeight: '850', color: 'var(--green-dark)', marginBottom: '16px', letterSpacing: '-0.02em' }}>
            Frequently Asked Questions
          </h3>
          <p className="reveal" style={{ fontSize: '16.5px', color: 'var(--text-muted)' }}>
            Everything you need to know about partnering with Kwikkit.
          </p>
        </div>

        {/* Accordion List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={idx} className="reveal-scale" style={{ transitionDelay: `${idx * 60}ms` }}>
                <div style={{
                  background: 'var(--white)',
                  border: '1px solid rgba(0, 95, 87, 0.08)',
                  borderRadius: '20px',
                  boxShadow: '0 8px 30px rgba(0,95,87,0.02)',
                  overflow: 'hidden',
                  transition: 'border-color 0.25s ease',
                }}>
                  {/* Accordion Trigger */}
                  <button
                    onClick={() => handleToggle(idx)}
                    style={{
                      width: '100%',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      padding: '24px 28px',
                      border: 'none',
                      background: 'none',
                      cursor: 'pointer',
                      textAlign: 'left',
                    }}
                  >
                    <span style={{
                      fontFamily: "'Syne', sans-serif",
                      fontWeight: '800',
                      fontSize: '16.5px',
                      color: isOpen ? 'var(--green)' : 'var(--text-primary)',
                      letterSpacing: '-0.01em',
                      transition: 'color 0.2s ease',
                      paddingRight: '20px',
                    }}>
                      {faq.q}
                    </span>
                    <ChevronDown
                      size={18}
                      color={isOpen ? 'var(--green)' : 'var(--text-muted)'}
                      style={{
                        transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                        transition: 'transform 0.3s cubic-bezier(.34,1.56,.64,1), color 0.2s ease',
                        flexShrink: 0,
                      }}
                    />
                  </button>

                  {/* Accordion Content Panel */}
                  <div style={{
                    maxHeight: isOpen ? '250px' : '0px',
                    overflow: 'hidden',
                    transition: 'max-height 0.35s cubic-bezier(.16,1,.3,1)',
                  }}>
                    <div style={{
                      padding: '0 28px 24px',
                      fontSize: '14.5px',
                      lineHeight: '1.7',
                      color: 'var(--text-muted)',
                      whiteSpace: 'pre-line',
                      borderTop: '1px solid rgba(0,95,87,0.04)',
                      paddingTop: '16px',
                    }}>
                      {faq.a}
                    </div>
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
