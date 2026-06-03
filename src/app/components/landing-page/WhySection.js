'use client';
import { useEffect, useRef } from 'react';
import { Ban, ClipboardList, MapPin, Sparkles, Radio, Handshake } from 'lucide-react';

const features = [
  { num:'01', Icon: Ban,           title:'No Surprise Charges',   desc:'No hidden platform markups. What you see at checkout is exactly what you pay.' },
  { num:'02', Icon: ClipboardList, title:'No Menu Markups',        desc:'Restaurant menu prices are never touched. Zero inflation, ever.' },
  { num:'03', Icon: MapPin,        title:'Built for Chandigarh',   desc:'Hyper-local focus. We know the Tricity and we built Kwikkit specifically for it.' },
  { num:'04', Icon: Sparkles,      title:'Easy Ordering',           desc:'Minimal, clean ordering flow. No dark patterns, no confusion.' },
  { num:'05', Icon: Radio,         title:'Real-Time Tracking',     desc:'Watch your order move live from kitchen to your doorstep.' },
  { num:'06', Icon: Handshake,     title:'Fair for Restaurants',   desc:'Zero commission model. Local restaurants keep every rupee they earn.' },
];

export default function WhySection() {
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll('.reveal,.reveal-scale').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section id="why" ref={ref} style={{ background:'var(--cream)', padding:'110px 0', position:'relative' }}>
      {/* subtle top gradient fade from dark section */}
      <div style={{ position:'absolute', top:0, left:0, right:0, height:'80px',
        background:'linear-gradient(to bottom, rgba(0,30,26,0.05), transparent)', pointerEvents:'none' }}/>

      <div className="section-wrap">
        {/* header */}
        <div style={{ textAlign:'center', marginBottom:'72px' }}>
          <span className="reveal tag tag-green" style={{ marginBottom:'16px' }}>Why Switch</span>
          <h2 className="reveal heading-display heading-lg" style={{ color:'var(--text-primary)', marginBottom:'18px' }}>
            Why people are switching<br />
            <span className="gradient-text-green">to Kwikkit</span>
          </h2>
          <p className="reveal" style={{ fontSize:'17px', lineHeight:'1.7', color:'var(--text-muted)', maxWidth:'500px', margin:'0 auto' }}>
            We built Kwikkit because food delivery was broken — not fair to you, not fair to restaurants.
          </p>
        </div>

        {/* grid */}
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(340px,1fr))', gap:'20px' }}>
          {features.map((f, i) => (
            <div key={f.num} className="reveal-scale" style={{ transitionDelay:`${i * 75}ms` }}>
              <div className="surface-card" style={{ padding:'36px 32px', height:'100%', cursor:'default' }}>
                {/* top row */}
                <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start', marginBottom:'22px' }}>
                  <div style={{
                    width:'52px', height:'52px', borderRadius:'14px',
                    background:'linear-gradient(135deg, rgba(0,95,87,0.1) 0%, rgba(0,95,87,0.05) 100%)',
                    display:'flex', alignItems:'center', justifyContent:'center',
                    transition:'transform 0.3s ease',
                    border: '1px solid rgba(0,95,87,0.12)',
                  }}
                  onMouseEnter={e=>e.currentTarget.style.transform='rotate(-6deg) scale(1.1)'}
                  onMouseLeave={e=>e.currentTarget.style.transform=''}>
                    <f.Icon size={22} strokeWidth={1.8} color="var(--green)" />
                  </div>
                  <span style={{
                    fontFamily:"'Syne',sans-serif", fontWeight:'900',
                    fontSize:'52px', color:'rgba(0,95,87,0.06)', lineHeight:'1',
                  }}>{f.num}</span>
                </div>

                {/* accent line */}
                <div style={{
                  width:'32px', height:'3px', borderRadius:'2px',
                  background:'linear-gradient(90deg, var(--green) 0%, var(--green-light) 100%)',
                  marginBottom:'16px',
                  transition:'width 0.4s ease',
                }}/>

                <h3 style={{
                  fontFamily:"'Syne',sans-serif", fontWeight:'700',
                  fontSize:'19px', letterSpacing:'-0.02em',
                  color:'var(--text-primary)', marginBottom:'10px',
                }}>{f.title}</h3>

                <p style={{ fontSize:'15px', lineHeight:'1.65', color:'var(--text-muted)' }}>{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
