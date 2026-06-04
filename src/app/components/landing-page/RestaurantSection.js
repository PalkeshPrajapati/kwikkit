'use client';
import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { BadgeIndianRupee, Receipt, Zap } from 'lucide-react';

const benefits = [
  { Icon: BadgeIndianRupee, title:'Zero Commission',       desc:"Keep 100% of your revenue. Kwikkit takes nothing from your sales — ever." },
  { Icon: Receipt,          title:'Transparent Pricing',   desc:"No hidden partnership fees. Everything is clear and agreed from day one." },
  { Icon: Zap,              title:'24-Hour Onboarding',    desc:"Get your restaurant live on Kwikkit in as little as 24 hours after sign-up." },
];

const stats = [
  { val:'0%',   label:'Commission'           },
  { val:'24h',  label:'Onboarding'           },
  { val:'100%', label:'Pricing Transparency' },
];

export default function RestaurantSection() {
  const ref = useRef(null);
  useEffect(() => {
    const obs = new IntersectionObserver(
      e => e.forEach(en => en.isIntersecting && en.target.classList.add('visible')),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll('.reveal,.reveal-left,.reveal-right').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section id="restaurants" ref={ref} style={{
      background: 'var(--dark-2)',
      padding: '110px 0',
      position: 'relative', overflow: 'hidden',
    }}>
      {/* ── Background Image ── */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <Image
          src="/landing/restaurant-bg.png"
          alt="Professional restaurant kitchen"
          fill
          style={{ objectFit: 'cover', objectPosition: 'center center' }}
          sizes="100vw"
        />
        {/* Dark overlay for readability */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to right, rgba(14, 26, 25, 0.88) 0%, rgba(14, 26, 25, 0.75) 45%, rgba(14, 26, 25, 0.82) 80%, rgba(14, 26, 25, 0.90) 100%)',
        }} />
      </div>

      {/* gradient orbs */}
      <div style={{
        position:'absolute', top:'-20%', right:'-10%',
        width:'600px', height:'600px', borderRadius:'50%',
        background:'radial-gradient(circle, rgba(255,229,0,0.06) 0%, transparent 65%)',
        pointerEvents:'none',
        zIndex: 1,
      }}/>
      <div style={{
        position:'absolute', bottom:'-20%', left:'-8%',
        width:'500px', height:'500px', borderRadius:'50%',
        background:'radial-gradient(circle, rgba(0,122,110,0.18) 0%, transparent 65%)',
        pointerEvents:'none',
        zIndex: 1,
      }}/>

      <div className="section-wrap" style={{ position: 'relative', zIndex: 2 }}>
        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'80px', alignItems:'center' }}>

          {/* Left */}
          <div>
            <span className="reveal tag tag-green-dark" style={{ marginBottom:'20px' }}>For Restaurants</span>
            <h2 className="reveal heading-display heading-lg" style={{ color:'var(--cream)', marginBottom:'22px' }}>
              Run your restaurant<br />on a{' '}
              <span style={{
                background:'linear-gradient(90deg, var(--yellow) 0%, #fff9a0 100%)',
                WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text',
              }}>fairer platform.</span>
            </h2>
            <p className="reveal" style={{ fontSize:'17px', lineHeight:'1.75', color:'rgba(253,248,242,0.6)', maxWidth:'440px', marginBottom:'48px' }}>
              Zomato and Swiggy take 20–30% commission. We take zero. Partner with Kwikkit and keep every rupee you earn.
            </p>

            {/* stats */}
            <div className="reveal" style={{
              display:'grid', gridTemplateColumns:'repeat(3,1fr)',
              gap:'2px', background:'rgba(255,255,255,0.05)',
              borderRadius:'18px', overflow:'hidden', marginBottom:'40px',
            }}>
              {stats.map(s => (
                <div key={s.label} style={{
                  padding:'26px 18px', textAlign:'center',
                  background:'rgba(0,50,45,0.4)', backdropFilter:'blur(8px)',
                  transition:'background 0.3s ease',
                }}
                onMouseEnter={e=>e.currentTarget.style.background='rgba(0,95,87,0.4)'}
                onMouseLeave={e=>e.currentTarget.style.background='rgba(0,50,45,0.4)'}>
                  <div style={{
                    fontFamily:"'Syne',sans-serif", fontWeight:'900', fontSize:'30px',
                    color:'var(--yellow)', lineHeight:'1',
                  }}>{s.val}</div>
                  <div style={{ fontSize:'12px', color:'rgba(253,248,242,0.5)', marginTop:'6px', fontWeight:'500' }}>{s.label}</div>
                </div>
              ))}
            </div>

            <div className="reveal">
              <a href="#contact" style={{
                display:'inline-flex', alignItems:'center', gap:'12px',
                background:'var(--yellow)', color:'var(--green-dark)',
                padding:'16px 38px', borderRadius:'100px',
                fontWeight:'800', fontSize:'16px', textDecoration:'none',
                fontFamily:"'Syne',sans-serif", letterSpacing:'-0.02em',
                boxShadow:'0 8px 32px rgba(255,229,0,0.2)',
                transition:'transform 0.3s cubic-bezier(.34,1.56,.64,1), box-shadow 0.3s ease',
              }}
              onMouseEnter={e=>{ e.currentTarget.style.transform='translateY(-4px)'; e.currentTarget.style.boxShadow='0 18px 48px rgba(255,229,0,0.35)'; }}
              onMouseLeave={e=>{ e.currentTarget.style.transform=''; e.currentTarget.style.boxShadow='0 8px 32px rgba(255,229,0,0.2)'; }}>
                Partner With Kwikkit
                <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </a>
            </div>
          </div>

          {/* Right */}
          <div style={{ display:'flex', flexDirection:'column', gap:'18px' }}>
            {benefits.map((b, i) => (
              <div key={i} className="reveal-right" style={{ transitionDelay:`${i * 100}ms` }}>
                <div className="glass-card" style={{
                  padding:'28px 30px', display:'flex', gap:'18px', alignItems:'flex-start',
                  transition:'background 0.3s ease, transform 0.3s cubic-bezier(.34,1.56,.64,1)',
                  cursor:'default',
                }}
                onMouseEnter={e=>{ e.currentTarget.style.background='rgba(255,255,255,0.12)'; e.currentTarget.style.transform='translateX(8px)'; }}
                onMouseLeave={e=>{ e.currentTarget.style.background='rgba(255,255,255,0.06)'; e.currentTarget.style.transform='translateX(0)'; }}>
                  <div style={{
                    width:'50px', height:'50px', flexShrink:0, borderRadius:'14px',
                    background:'rgba(255,229,0,0.1)', border:'1px solid rgba(255,229,0,0.15)',
                    display:'flex', alignItems:'center', justifyContent:'center',
                  }}>
                    <b.Icon size={22} strokeWidth={1.8} color="var(--yellow)" />
                  </div>
                  <div>
                    <h3 style={{ fontFamily:"'Syne',sans-serif", fontWeight:'700', fontSize:'17px', color:'var(--cream)', marginBottom:'6px' }}>{b.title}</h3>
                    <p style={{ fontSize:'14px', lineHeight:'1.65', color:'rgba(253,248,242,0.55)' }}>{b.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width:880px) { #restaurants .section-wrap > div { grid-template-columns:1fr !important; } }
      `}</style>
    </section>
  );
}
