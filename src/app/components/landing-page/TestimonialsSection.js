'use client';
import { useEffect, useRef } from 'react';

const reviews = [
  {
    name: 'Priya S.',
    location: 'Chandigarh',
    rating: 5,
    text: 'Finally a delivery app that doesn\'t trick me! The prices are exactly what I see at the restaurant. Ordered biryani and paid the exact same price as the takeaway menu.',
    avatar: 'P',
    tag: 'Verified Order',
  },
  {
    name: 'Arjun M.',
    location: 'Panchkula',
    rating: 5,
    text: 'Ordered twice this week. No platform fee, no inflated menu prices. Kwikkit actually delivers on its promise. The tracking is smooth and the app is super clean to use.',
    avatar: 'A',
    tag: 'Verified Order',
  },
  {
    name: 'Ravi K.',
    location: 'Mohali',
    rating: 5,
    text: 'Switched from Zomato and never looking back. I save at least ₹80–100 per order on fees alone. The local restaurant selection is already great and growing fast.',
    avatar: 'R',
    tag: 'Verified Order',
  },
];

export default function TestimonialsSection() {
  const ref = useRef(null);
  useEffect(() => {
    const obs = new IntersectionObserver(
      e => e.forEach(en => en.isIntersecting && en.target.classList.add('visible')),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll('.reveal,.reveal-scale').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section id="blog" ref={ref} style={{ background:'var(--cream)', padding:'110px 0', position:'relative', overflow:'hidden' }}>
      {/* decorative blob */}
      <div style={{
        position:'absolute', bottom:'-100px', right:'-80px',
        width:'500px', height:'500px', borderRadius:'50%',
        background:'radial-gradient(circle, rgba(0,95,87,0.05) 0%, transparent 65%)',
        pointerEvents:'none',
      }}/>

      <div className="section-wrap">
        <div style={{ textAlign:'center', marginBottom:'72px' }}>
          <span className="reveal tag tag-green" style={{ marginBottom:'16px' }}>Customer Love</span>
          <h2 className="reveal heading-display heading-lg" style={{ color:'var(--text-primary)' }}>
            From the <span className="gradient-text-green">Kwikkit Community</span>
          </h2>
        </div>

        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(320px,1fr))', gap:'22px' }}>
          {reviews.map((r, i) => (
            <div key={i} className="reveal-scale" style={{ transitionDelay:`${i * 100}ms` }}>
              <div className="surface-card" style={{ padding:'36px', height:'100%', cursor:'default' }}>
                {/* Quote icon */}
                <div style={{
                  width:'40px', height:'40px', borderRadius:'12px',
                  background:'linear-gradient(135deg, var(--green) 0%, var(--green-light) 100%)',
                  display:'flex', alignItems:'center', justifyContent:'center',
                  marginBottom:'20px',
                }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="var(--cream)">
                    <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"/>
                    <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"/>
                  </svg>
                </div>

                {/* Stars */}
                <div style={{ display:'flex', gap:'3px', marginBottom:'16px' }}>
                  {Array(r.rating).fill(0).map((_, si) => (
                    <svg key={si} width="16" height="16" viewBox="0 0 24 24" fill="var(--yellow)">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  ))}
                </div>

                {/* Review text */}
                <p style={{
                  fontSize:'16px', lineHeight:'1.75', color:'var(--text-primary)',
                  marginBottom:'28px', fontStyle:'italic',
                }}>
                  &ldquo;{r.text}&rdquo;
                </p>

                {/* User row */}
                <div style={{ display:'flex', alignItems:'center', gap:'12px' }}>
                  <div style={{
                    width:'42px', height:'42px', borderRadius:'50%', flexShrink:0,
                    background:'linear-gradient(135deg, var(--green) 0%, var(--green-mid) 100%)',
                    display:'flex', alignItems:'center', justifyContent:'center',
                    fontSize:'17px', fontWeight:'800', color:'var(--cream)', fontFamily:"'Syne',sans-serif",
                  }}>{r.avatar}</div>
                  <div>
                    <div style={{ fontWeight:'700', fontSize:'15px', color:'var(--text-primary)' }}>{r.name}</div>
                    <div style={{ fontSize:'13px', color:'var(--text-muted)', display:'flex', alignItems:'center', gap:'4px' }}>
                      <svg width="11" height="11" viewBox="0 0 24 24" fill="var(--green)"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/></svg>
                      {r.location}
                    </div>
                  </div>
                  <span style={{
                    marginLeft:'auto', background:'rgba(0,95,87,0.08)',
                    color:'var(--green)', padding:'3px 10px', borderRadius:'100px',
                    fontSize:'11px', fontWeight:'700',
                  }}>{r.tag}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
