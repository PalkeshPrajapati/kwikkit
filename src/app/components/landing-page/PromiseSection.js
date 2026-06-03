'use client';
import { useEffect, useRef } from 'react';

export default function PromiseSection() {
  const ref = useRef(null);
  useEffect(() => {
    const obs = new IntersectionObserver(entries =>
      entries.forEach(e => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.2 }
    );
    ref.current?.querySelectorAll('.reveal,.reveal-left,.reveal-right').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} style={{
      background: 'var(--green-dark)',
      padding: '0',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* animated gradient blob */}
      <div style={{
        position:'absolute', top:'-40%', right:'-10%',
        width:'700px', height:'700px', borderRadius:'50%',
        background:'radial-gradient(circle, rgba(0,154,141,0.18) 0%, transparent 65%)',
        pointerEvents:'none',
      }}/>
      <div style={{
        position:'absolute', bottom:'-30%', left:'-8%',
        width:'500px', height:'500px', borderRadius:'50%',
        background:'radial-gradient(circle, rgba(255,229,0,0.07) 0%, transparent 65%)',
        pointerEvents:'none',
      }}/>

      {/* grid lines */}
      <div style={{
        position:'absolute', inset:0,
        backgroundImage:'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
        backgroundSize:'64px 64px', pointerEvents:'none',
      }}/>

      <div className="section-wrap" style={{ padding:'100px 28px' }}>
        <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', gap:'60px', flexWrap:'wrap' }}>

          {/* Left */}
          <div style={{ flex:'1', minWidth:'280px', maxWidth:'580px' }}>
            <span className="reveal tag tag-green-dark" style={{ marginBottom:'20px' }}>The Promise</span>
            <h2 className="reveal heading-display heading-lg" style={{ color:'var(--cream)', marginBottom:'24px' }}>
              Honest pricing.<br />
              <span style={{
                background:'linear-gradient(90deg, var(--yellow) 0%, #fff9a0 100%)',
                WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text',
              }}>Always.</span>
            </h2>
            <p className="reveal" style={{ fontSize:'18px', lineHeight:'1.75', color:'rgba(253,248,242,0.65)', maxWidth:'460px' }}>
              You pay what the restaurant actually charges.
              That&apos;s how food delivery should have worked all along.
            </p>
          </div>

          {/* Right */}
          <div className="reveal-right" style={{ flex:'0 0 auto' }}>
            <a href="#download" style={{
              display:'inline-flex', alignItems:'center', gap:'12px',
              background:'var(--yellow)', color:'var(--green-dark)',
              padding:'18px 44px', borderRadius:'100px',
              fontWeight:'800', fontSize:'17px', textDecoration:'none',
              fontFamily:"'Syne',sans-serif", letterSpacing:'-0.02em',
              boxShadow:'0 12px 48px rgba(255,229,0,0.25)',
              transition:'transform 0.3s cubic-bezier(.34,1.56,.64,1), box-shadow 0.3s ease',
              animation:'pulseRing 2.4s ease-out infinite',
            }}
            onMouseEnter={e=>{ e.currentTarget.style.transform='translateY(-4px) scale(1.04)'; e.currentTarget.style.boxShadow='0 20px 56px rgba(255,229,0,0.4)'; e.currentTarget.style.animation='none'; }}
            onMouseLeave={e=>{ e.currentTarget.style.transform=''; e.currentTarget.style.boxShadow='0 12px 48px rgba(255,229,0,0.25)'; e.currentTarget.style.animation='pulseRing 2.4s ease-out infinite'; }}>
              Download the App
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
          </div>
        </div>
      </div>

      <style>{`@keyframes pulseRing{0%{box-shadow:0 0 0 0 rgba(255,229,0,.45)}70%{box-shadow:0 0 0 18px rgba(255,229,0,0)}100%{box-shadow:0 0 0 0 rgba(255,229,0,0)}}`}</style>
    </section>
  );
}
