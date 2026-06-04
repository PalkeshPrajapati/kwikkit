'use client';
import { useEffect, useRef } from 'react';
import { Coins, Tag, MapPin, Building2, Bike, Eye } from 'lucide-react';

export default function WhyReasons() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      e => e.forEach(en => en.isIntersecting && en.target.classList.add('visible')),
      { threshold: 0.08 }
    );
    sectionRef.current?.querySelectorAll('.reveal,.reveal-scale').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const reasons = [
    {
      num: '01',
      title: 'Zero Platform Fee',
      desc: '₹0 platform fee on every order. No extra charge for simply using the app.',
      icon: Coins,
      accent: 'var(--yellow)',
      border: 'rgba(255, 229, 0, 0.2)',
      bg: 'rgba(255, 229, 0, 0.06)',
    },
    {
      num: '02',
      title: 'Real Menu Prices',
      desc: 'Restaurants list their actual menu prices. No algorithmic inflation or hidden markups.',
      icon: Tag,
      accent: 'var(--green-light)',
      border: 'rgba(0, 155, 141, 0.25)',
      bg: 'rgba(0, 155, 141, 0.1)',
    },
    {
      num: '03',
      title: 'Built for Chandigarh',
      desc: 'Local restaurants, local discovery, and a platform designed specifically around Chandigarh Tricity.',
      icon: MapPin,
      accent: '#a78bfa',
      border: 'rgba(167, 139, 250, 0.22)',
      bg: 'rgba(167, 139, 250, 0.1)',
    },
    {
      num: '04',
      title: 'Restaurants Earn More',
      desc: 'Zero commission means restaurants keep 100% of the revenue customers pay.',
      icon: Building2,
      accent: 'var(--yellow)',
      border: 'rgba(255, 229, 0, 0.2)',
      bg: 'rgba(255, 229, 0, 0.06)',
    },
    {
      num: '05',
      title: 'Live Tracking That Works',
      desc: 'Real GPS tracking from kitchen pickup to doorstep delivery.',
      icon: Bike,
      accent: 'var(--green-light)',
      border: 'rgba(0, 155, 141, 0.25)',
      bg: 'rgba(0, 155, 141, 0.1)',
    },
    {
      num: '06',
      title: 'Transparent Checkout',
      desc: 'View a complete cost breakdown before payment with no last-minute charges.',
      icon: Eye,
      accent: '#a78bfa',
      border: 'rgba(167, 139, 250, 0.22)',
      bg: 'rgba(167, 139, 250, 0.1)',
    },
  ];

  return (
    <section ref={sectionRef} style={{ background: 'var(--dark)', padding: '110px 0', position: 'relative', overflow: 'hidden' }}>
      
      {/* Background Orbs */}
      <div style={{ position: 'absolute', top: '-10%', right: '-5%', width: '600px', height: '600px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(0,95,87,0.15) 0%, transparent 65%)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: '-15%', left: '-5%', width: '500px', height: '500px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,229,0,0.03) 0%, transparent 65%)', pointerEvents: 'none' }} />
      
      <div className="section-wrap">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <span className="reveal tag tag-green-dark" style={{ marginBottom: '16px' }}>Six reasons</span>
          <h2 className="reveal heading-display heading-lg" style={{ color: 'var(--cream)', marginBottom: '18px' }}>
            Why people switch<br />
            <span style={{
              background: 'linear-gradient(90deg, var(--yellow) 0%, #fff9a0 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>and never go back</span>
          </h2>
          <p className="reveal" style={{ fontSize: '17px', color: 'rgba(253,248,242,0.5)', maxWidth: '480px', margin: '0 auto', lineHeight: '1.75' }}>
            Food delivery should be simple and fair. Here is how Kwikkit holds itself to a higher operational standard.
          </p>
        </div>

        {/* Reasons Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '24px',
          maxWidth: '1100px',
          margin: '0 auto',
        }}>
          {reasons.map((r, i) => {
            const Icon = r.icon;
            return (
              <div key={r.title} className="reveal-scale" style={{ transitionDelay: `${i * 80}ms` }}>
                <div style={{
                  background: 'rgba(255, 255, 255, 0.04)',
                  border: `1px solid ${r.border}`,
                  borderRadius: '24px',
                  padding: '40px 36px',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative',
                  overflow: 'hidden',
                  cursor: 'default',
                  transition: 'transform 0.3s cubic-bezier(.34,1.56,.64,1), background 0.3s ease, border-color 0.3s ease',
                }}
                  onMouseEnter={e => {
                    e.currentTarget.style.transform = 'translateY(-8px)';
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
                    e.currentTarget.style.borderColor = 'var(--yellow)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.transform = '';
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.04)';
                    e.currentTarget.style.borderColor = r.border;
                  }}
                >
                  
                  {/* Floating Number */}
                  <span style={{
                    position: 'absolute',
                    top: '28px',
                    right: '32px',
                    fontFamily: "'Syne', sans-serif",
                    fontWeight: '800',
                    fontSize: '36px',
                    color: 'rgba(255,229,0,0.06)',
                    userSelect: 'none',
                  }}>
                    {r.num}
                  </span>

                  {/* Icon Block */}
                  <div style={{
                    width: '52px',
                    height: '52px',
                    borderRadius: '14px',
                    background: r.bg,
                    border: `1px solid ${r.border}`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '24px',
                  }}>
                    <Icon size={24} color={r.accent} strokeWidth={1.8} />
                  </div>

                  {/* Title */}
                  <h3 style={{
                    fontFamily: "'Syne', sans-serif",
                    fontWeight: '800',
                    fontSize: '20px',
                    color: 'var(--cream)',
                    marginBottom: '12px',
                    letterSpacing: '-0.02em',
                  }}>
                    {r.title}
                  </h3>

                  {/* Description */}
                  <p style={{
                    fontSize: '14.5px',
                    lineHeight: '1.7',
                    color: 'rgba(253, 248, 242, 0.65)',
                  }}>
                    {r.desc}
                  </p>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
