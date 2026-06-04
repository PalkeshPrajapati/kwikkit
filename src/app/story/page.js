'use client';
import { useEffect, useRef, useState } from 'react';
import { BadgeIndianRupee, Bike, Phone, Receipt, Ban, Star, Users, Building2, MapPin, Heart, Shield, Handshake, TrendingUp, Zap, ArrowRight, Mail, PhoneCall, Download, Briefcase } from 'lucide-react';

/* ─── Scroll reveal hook ─────────────────────────── */
function useReveal(ref) {
  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll('.reveal,.reveal-left,.reveal-right,.reveal-scale').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}

/* ─── Animated Counter ───────────────────────────── */
function Counter({ target, suffix = '', prefix = '' }) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !started) {
        setStarted(true);
        const isDecimal = String(target).includes('.');
        const num = parseFloat(target);
        const duration = 1800;
        const steps = 60;
        const step = num / steps;
        let current = 0;
        const timer = setInterval(() => {
          current += step;
          if (current >= num) { setCount(num); clearInterval(timer); }
          else setCount(isDecimal ? parseFloat(current.toFixed(1)) : Math.floor(current));
        }, duration / steps);
      }
    }, { threshold: 0.5 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [target, started]);

  return (
    <span ref={ref} style={{
      fontFamily: "'Syne',sans-serif", fontWeight: '900', fontSize: 'clamp(40px,5vw,64px)',
      background: 'linear-gradient(135deg, var(--yellow) 0%, #fffaaa 100%)',
      WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
      lineHeight: '1',
    }}>
      {prefix}{count}{suffix}
    </span>
  );
}

/* ═══════════════════════════════════════════════════
   SECTION 1 — HERO
═══════════════════════════════════════════════════ */
function StoryHero() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => { const t = setTimeout(() => setLoaded(true), 80); return () => clearTimeout(t); }, []);

  return (
    <section style={{
      background: 'var(--dark)',
      minHeight: '100svh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      position: 'relative',
      overflow: 'hidden',
      paddingTop: '100px',
    }}>
      {/* bg orbs */}
      <div style={{ position:'absolute', top:'-10%', left:'-5%', width:'700px', height:'700px', borderRadius:'50%', background:'radial-gradient(circle, rgba(0,95,87,0.22) 0%, transparent 65%)', pointerEvents:'none' }} />
      <div style={{ position:'absolute', bottom:'-15%', right:'-10%', width:'600px', height:'600px', borderRadius:'50%', background:'radial-gradient(circle, rgba(255,229,0,0.06) 0%, transparent 65%)', pointerEvents:'none' }} />
      {/* grid */}
      <div style={{ position:'absolute', inset:0, backgroundImage:'linear-gradient(rgba(255,255,255,0.022) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.022) 1px, transparent 1px)', backgroundSize:'64px 64px', pointerEvents:'none' }} />

      <div className="section-wrap" style={{ padding:'80px 28px', position:'relative', zIndex:1 }}>
        {/* eyebrow */}
        <div style={{
          opacity: loaded ? 1 : 0, transform: loaded ? 'translateY(0)' : 'translateY(20px)',
          transition: 'opacity 0.6s ease 0.05s, transform 0.6s ease 0.05s',
          display:'inline-flex', alignItems:'center', gap:'8px',
          background:'rgba(255,229,0,0.1)', border:'1px solid rgba(255,229,0,0.28)',
          padding:'5px 16px', borderRadius:'100px', marginBottom:'28px',
        }}>
          <span className="dot-blink" style={{ width:'6px', height:'6px', borderRadius:'50%', background:'var(--yellow)', display:'inline-block' }} />
          <span style={{ fontSize:'11px', fontWeight:'700', color:'var(--yellow)', letterSpacing:'0.09em', textTransform:'uppercase' }}>
            Our Story
          </span>
        </div>

        {/* headline */}
        <h1 style={{
          fontFamily:"'Syne',sans-serif", fontWeight:'800',
          fontSize:'clamp(40px,6.5vw,84px)', lineHeight:'1.0', letterSpacing:'-0.035em',
          color:'var(--cream)', maxWidth:'820px', marginBottom:'28px',
          opacity: loaded ? 1 : 0, transform: loaded ? 'translateY(0)' : 'translateY(30px)',
          transition: 'opacity 0.75s ease 0.15s, transform 0.75s ease 0.15s',
        }}>
          Born from a{' '}
          <span style={{
            background:'linear-gradient(90deg, var(--yellow) 0%, #fffaaa 100%)',
            WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text',
          }}>₹200 saved</span>
          <br />on a Rapido bike.
        </h1>

        {/* sub */}
        <p style={{
          fontSize:'clamp(16px,1.8vw,20px)', lineHeight:'1.75',
          color:'rgba(253,248,242,0.6)', maxWidth:'560px', marginBottom:'56px',
          opacity: loaded ? 1 : 0, transform: loaded ? 'translateY(0)' : 'translateY(24px)',
          transition: 'opacity 0.7s ease 0.28s, transform 0.7s ease 0.28s',
        }}>
          A simple biryani order in Pune exposed a broken system. That moment became Kwikkit — food delivery without the dishonesty.
        </p>

        {/* origin cards row */}
        <div style={{
          display:'flex', gap:'14px', flexWrap:'wrap',
          opacity: loaded ? 1 : 0, transform: loaded ? 'translateY(0)' : 'translateY(24px)',
          transition: 'opacity 0.7s ease 0.4s, transform 0.7s ease 0.4s',
        }}>
          {[
            { icon: MapPin, label:'Started in Pune' },
            { icon: BadgeIndianRupee, label:'₹80 price gap discovered' },
            { icon: Bike, label:'Verified via Rapido' },
            { icon: TrendingUp, label:'Now live in Tricity' },
          ].map(({ icon: Icon, label }) => (
            <div key={label} style={{
              display:'inline-flex', alignItems:'center', gap:'9px',
              background:'rgba(255,255,255,0.05)', border:'1px solid rgba(255,255,255,0.1)',
              backdropFilter:'blur(12px)', padding:'10px 18px', borderRadius:'12px',
            }}>
              <Icon size={15} color="var(--yellow)" strokeWidth={2} />
              <span style={{ fontSize:'13px', fontWeight:'600', color:'rgba(253,248,242,0.75)' }}>{label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* scroll cue */}
      <div style={{
        position:'absolute', bottom:'32px', left:'50%', transform:'translateX(-50%)',
        opacity: loaded ? 1 : 0, transition:'opacity 0.6s ease 1s',
        display:'flex', flexDirection:'column', alignItems:'center', gap:'6px',
      }}>
        <span style={{ fontSize:'11px', color:'rgba(253,248,242,0.3)', fontWeight:'600', letterSpacing:'0.1em', textTransform:'uppercase' }}>Scroll</span>
        <div style={{ width:'1px', height:'40px', background:'linear-gradient(to bottom, rgba(255,229,0,0.5), transparent)', animation:'scrollLine 1.8s ease-in-out infinite' }} />
      </div>

      <style>{`
        @keyframes scrollLine { 0%{opacity:0;transform:scaleY(0);transform-origin:top} 50%{opacity:1;transform:scaleY(1)} 100%{opacity:0;transform:scaleY(1);transform-origin:bottom} }
        @keyframes blinkDot { 0%,100%{opacity:1} 50%{opacity:0.2} }
        .dot-blink { animation: blinkDot 1.6s ease infinite; }
      `}</style>
    </section>
  );
}

/* ═══════════════════════════════════════════════════
   SECTION 2 — ORIGIN STORY TIMELINE
═══════════════════════════════════════════════════ */
function OriginSection() {
  const ref = useRef(null);
  useReveal(ref);

  const events = [
    {
      icon: MapPin,
      color: 'var(--yellow)',
      colorBg: 'rgba(255,229,0,0.1)',
      colorBorder: 'rgba(255,229,0,0.2)',
      step: '01',
      title: 'The Biryani Order',
      body: 'Sitting in Pune, craving biryani. Opened a food delivery app and noticed a familiar restaurant — but the price felt off. The same dish was ₹80 more expensive than what was on the restaurant\'s actual menu.',
    },
    {
      icon: Phone,
      color: 'var(--green-light)',
      colorBg: 'rgba(0,155,141,0.12)',
      colorBorder: 'rgba(0,155,141,0.25)',
      step: '02',
      title: 'The Phone Call',
      body: 'Called the restaurant directly to confirm. The dine-in and takeaway price was exactly as expected — the delivery app had silently marked it up. No warning. No disclosure.',
    },
    {
      icon: Bike,
      color: '#a78bfa',
      colorBg: 'rgba(167,139,250,0.1)',
      colorBorder: 'rgba(167,139,250,0.22)',
      step: '03',
      title: 'The Rapido Experiment',
      body: 'Booked a Rapido bike to the restaurant and bought the biryani in person. Total cost including the ride: ₹200 less than ordering on the delivery app. The math was undeniable.',
    },
    {
      icon: Receipt,
      color: '#f87171',
      colorBg: 'rgba(248,113,113,0.1)',
      colorBorder: 'rgba(248,113,113,0.22)',
      step: '04',
      title: 'The Real Cost',
      body: 'Between the menu markup, platform fee, and GST calculated on inflated prices — customers were being charged significantly more than the actual cost of food. The system was quietly unfair.',
    },
    {
      icon: TrendingUp,
      color: 'var(--yellow)',
      colorBg: 'rgba(255,229,0,0.1)',
      colorBorder: 'rgba(255,229,0,0.2)',
      step: '05',
      title: 'The Idea That Became Kwikkit',
      body: 'What if delivery worked differently? What if you paid exactly what the restaurant charges — and nothing more? That single question started everything. Kwikkit was born to answer it.',
    },
  ];

  return (
    <section ref={ref} style={{ background:'var(--cream)', padding:'110px 0', position:'relative', overflow:'hidden' }}>
      {/* Background Image Overlay */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: 'url(/biryani-bg.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        opacity: 0.14,
        pointerEvents: 'none',
        zIndex: 0,
      }} />
      {/* Soft gradient overlay to blend edges with cream */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(to bottom, var(--cream) 0%, rgba(253, 248, 242, 0.3) 15%, rgba(253, 248, 242, 0.3) 85%, var(--cream) 100%)',
        pointerEvents: 'none',
        zIndex: 0,
      }} />
      {/* decorative blob */}
      <div style={{ position:'absolute', top:'-80px', right:'-100px', width:'500px', height:'500px', borderRadius:'50%', background:'radial-gradient(circle, rgba(0,95,87,0.08) 0%, transparent 65%)', pointerEvents:'none', zIndex: 0 }} />

      <div className="section-wrap" style={{ position: 'relative', zIndex: 1 }}>
        {/* header */}
        <div style={{ textAlign:'center', marginBottom:'80px' }}>
          <span className="reveal tag tag-green" style={{ marginBottom:'16px' }}>The Origin</span>
          <h2 className="reveal heading-display heading-lg" style={{ color:'var(--text-primary)', marginBottom:'18px' }}>
            How one biryani order<br /><span className="gradient-text-green">changed everything</span>
          </h2>
          <p className="reveal" style={{ fontSize:'17px', lineHeight:'1.7', color:'var(--text-muted)', maxWidth:'480px', margin:'0 auto' }}>
            A real discovery. A real calculation. A real decision to build something fairer.
          </p>
        </div>

        {/* timeline */}
        <div style={{ position:'relative', maxWidth:'780px', margin:'0 auto' }}>
          {/* vertical line */}
          <div style={{
            position:'absolute', left:'50%', top:0, bottom:0,
            width:'2px', background:'linear-gradient(to bottom, transparent, rgba(0,95,87,0.15) 10%, rgba(0,95,87,0.15) 90%, transparent)',
            transform:'translateX(-50%)', pointerEvents:'none',
          }} />

          {events.map((ev, i) => {
            const isLeft = i % 2 === 0;
            const Icon = ev.icon;
            return (
              <div key={ev.step} className={isLeft ? 'reveal-left' : 'reveal-right'}
                style={{ transitionDelay:`${i * 80}ms`, display:'flex', justifyContent: isLeft ? 'flex-start' : 'flex-end', marginBottom:'40px', position:'relative' }}>

                {/* center dot */}
                <div style={{
                  position:'absolute', left:'50%', top:'32px', transform:'translateX(-50%)',
                  width:'14px', height:'14px', borderRadius:'50%',
                  background: ev.color, border:`3px solid var(--cream)`,
                  boxShadow:`0 0 0 4px ${ev.colorBg}`, zIndex:2,
                }} />

                <div style={{ width:'44%' }}>
                  <div className="surface-card" style={{ padding:'28px 26px' }}>
                    {/* icon + step */}
                    <div style={{ display:'flex', alignItems:'center', gap:'12px', marginBottom:'14px' }}>
                      <div style={{
                        width:'40px', height:'40px', borderRadius:'11px', flexShrink:0,
                        background: ev.colorBg, border:`1px solid ${ev.colorBorder}`,
                        display:'flex', alignItems:'center', justifyContent:'center',
                      }}>
                        <Icon size={18} color={ev.color} strokeWidth={1.8} />
                      </div>
                      <span style={{ fontFamily:"'Syne',sans-serif", fontWeight:'900', fontSize:'11px', color:'rgba(0,95,87,0.3)', letterSpacing:'0.08em' }}>
                        STEP {ev.step}
                      </span>
                    </div>
                    <h3 style={{ fontFamily:"'Syne',sans-serif", fontWeight:'700', fontSize:'17px', color:'var(--text-primary)', marginBottom:'10px', letterSpacing:'-0.02em' }}>
                      {ev.title}
                    </h3>
                    <p style={{ fontSize:'14px', lineHeight:'1.7', color:'var(--text-muted)' }}>{ev.body}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 700px) {
          .timeline-line { display: none !important; }
        }
      `}</style>
    </section>
  );
}

/* ═══════════════════════════════════════════════════
   SECTION 3 — THE DISCOVERY (Problem)
═══════════════════════════════════════════════════ */
function DiscoverySection() {
  const ref = useRef(null);
  useReveal(ref);

  const problems = [
    { icon: TrendingUp, title:'Inflated Menu Prices', desc:'Delivery platforms silently mark up restaurant menu prices before customers even see them. You never know the real price.' },
    { icon: Receipt,    title:'Stacked Platform Fees', desc:'On top of marked-up prices, a platform fee is added. Then delivery charges. Then GST — all calculated on inflated numbers.' },
    { icon: Ban,        title:'No Transparency', desc:'There\'s no clear breakdown of what\'s the restaurant\'s price vs. what\'s the platform\'s cut. Customers simply don\'t know.' },
    { icon: Building2,  title:'Restaurants Lose Too', desc:'While customers overpay, restaurants get squeezed with commissions up to 20–30%. A broken system for everyone.' },
  ];

  return (
    <section ref={ref} style={{ background:'var(--dark)', padding:'110px 0', position:'relative', overflow:'hidden' }}>
      {/* orbs */}
      <div style={{ position:'absolute', top:'20%', right:'-5%', width:'560px', height:'560px', borderRadius:'50%', background:'radial-gradient(circle, rgba(248,113,113,0.07) 0%, transparent 65%)', pointerEvents:'none' }} />
      <div style={{ position:'absolute', bottom:'10%', left:'-8%', width:'480px', height:'480px', borderRadius:'50%', background:'radial-gradient(circle, rgba(0,95,87,0.18) 0%, transparent 65%)', pointerEvents:'none' }} />
      <div style={{ position:'absolute', inset:0, backgroundImage:'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)', backgroundSize:'64px 64px', pointerEvents:'none' }} />

      <div className="section-wrap">
        {/* header */}
        <div style={{ textAlign:'center', marginBottom:'80px' }}>
          <span className="reveal tag tag-green-dark" style={{ marginBottom:'16px' }}>The Discovery</span>
          <h2 className="reveal heading-display heading-lg" style={{ color:'var(--cream)', marginBottom:'18px' }}>
            The system was{' '}
            <span style={{ background:'linear-gradient(90deg, #f87171 0%, #fca5a5 100%)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text' }}>
              broken
            </span>
          </h2>
          <p className="reveal" style={{ fontSize:'17px', lineHeight:'1.7', color:'rgba(253,248,242,0.5)', maxWidth:'500px', margin:'0 auto' }}>
            Food delivery lacked transparency and fairness — for customers and restaurants alike.
          </p>
        </div>

        {/* problem cards */}
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(300px,1fr))', gap:'16px', marginBottom:'72px' }}>
          {problems.map((p, i) => {
            const Icon = p.icon;
            return (
              <div key={p.title} className="reveal-scale" style={{ transitionDelay:`${i * 75}ms` }}>
                <div className="glass-card" style={{
                  padding:'32px 28px', height:'100%', cursor:'default',
                  transition:'background 0.35s ease, transform 0.35s cubic-bezier(.34,1.56,.64,1), border-color 0.35s ease',
                }}
                  onMouseEnter={e => { e.currentTarget.style.background='rgba(248,113,113,0.07)'; e.currentTarget.style.transform='translateY(-6px)'; e.currentTarget.style.borderColor='rgba(248,113,113,0.2)'; }}
                  onMouseLeave={e => { e.currentTarget.style.background='rgba(255,255,255,0.06)'; e.currentTarget.style.transform='translateY(0)'; e.currentTarget.style.borderColor='rgba(255,255,255,0.1)'; }}>
                  <div style={{
                    width:'48px', height:'48px', borderRadius:'13px',
                    background:'rgba(248,113,113,0.1)', border:'1px solid rgba(248,113,113,0.2)',
                    display:'flex', alignItems:'center', justifyContent:'center', marginBottom:'20px',
                  }}>
                    <Icon size={22} color="#f87171" strokeWidth={1.8} />
                  </div>
                  <h3 style={{ fontFamily:"'Syne',sans-serif", fontWeight:'700', fontSize:'18px', color:'var(--cream)', marginBottom:'10px', letterSpacing:'-0.02em' }}>{p.title}</h3>
                  <p style={{ fontSize:'14px', lineHeight:'1.7', color:'rgba(253,248,242,0.5)' }}>{p.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* core problem callout */}
        <div className="reveal" style={{
          background:'linear-gradient(135deg, rgba(248,113,113,0.08) 0%, rgba(0,95,87,0.08) 100%)',
          border:'1px solid rgba(248,113,113,0.2)',
          borderRadius:'24px', padding:'40px 48px',
          display:'flex', alignItems:'center', gap:'28px', flexWrap:'wrap',
        }}>
          <div style={{
            width:'56px', height:'56px', borderRadius:'16px', flexShrink:0,
            background:'rgba(248,113,113,0.12)', border:'1px solid rgba(248,113,113,0.25)',
            display:'flex', alignItems:'center', justifyContent:'center',
          }}>
            <Shield size={26} color="#f87171" strokeWidth={1.8} />
          </div>
          <div style={{ flex:1 }}>
            <div style={{ fontSize:'11px', fontWeight:'700', letterSpacing:'0.1em', textTransform:'uppercase', color:'#f87171', marginBottom:'8px' }}>Core Problem</div>
            <p style={{ fontSize:'clamp(16px,2vw,20px)', fontWeight:'600', color:'var(--cream)', lineHeight:'1.5', fontFamily:"'Syne',sans-serif" }}>
              The existing system lacks transparency and fairness — for customers, and for the restaurants that power every meal.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════
   SECTION 4 — MISSION
═══════════════════════════════════════════════════ */
function MissionSection() {
  const ref = useRef(null);
  useReveal(ref);

  const pillars = [
    { icon: BadgeIndianRupee, title:'₹0 Commission', desc:'Restaurants keep 100% of their revenue. We believe the person making your food deserves to be paid fairly.' },
    { icon: Star,             title:'Original Prices', desc:'Customers pay exactly what the restaurant charges. No markup. No inflation. The real menu price, always.' },
    { icon: Shield,           title:'Full Transparency', desc:'Every rupee in the checkout is explained. You know exactly where your money goes before you pay.' },
    { icon: Handshake,        title:'True Partnership', desc:'We grow only when our restaurant partners grow. Our success is inseparable from theirs.' },
  ];

  return (
    <section ref={ref} style={{ background:'var(--green-dark)', padding:'110px 0', position:'relative', overflow:'hidden' }}>
      {/* bg details */}
      <div style={{ position:'absolute', top:'-30%', right:'-10%', width:'700px', height:'700px', borderRadius:'50%', background:'radial-gradient(circle, rgba(0,154,141,0.2) 0%, transparent 65%)', pointerEvents:'none' }} />
      <div style={{ position:'absolute', bottom:'-20%', left:'-5%', width:'500px', height:'500px', borderRadius:'50%', background:'radial-gradient(circle, rgba(255,229,0,0.07) 0%, transparent 65%)', pointerEvents:'none' }} />
      <div style={{ position:'absolute', inset:0, backgroundImage:'linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)', backgroundSize:'64px 64px', pointerEvents:'none' }} />

      <div className="section-wrap">
        {/* header */}
        <div style={{ textAlign:'center', marginBottom:'80px' }}>
          <span className="reveal tag tag-green-dark" style={{ marginBottom:'16px' }}>Our Mission</span>
          <h2 className="reveal heading-display heading-lg" style={{ color:'var(--cream)', marginBottom:'18px' }}>
            Remove the{' '}
            <span style={{ background:'linear-gradient(90deg, var(--yellow) 0%, #fff9a0 100%)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text' }}>
              middleman tax
            </span>
          </h2>
          <p className="reveal" style={{ fontSize:'17px', lineHeight:'1.75', color:'rgba(253,248,242,0.6)', maxWidth:'520px', margin:'0 auto' }}>
            Build a food delivery platform so honest, you never have to second-guess what you're paying or why.
          </p>
        </div>

        {/* pillars */}
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(260px,1fr))', gap:'18px', marginBottom:'72px' }}>
          {pillars.map((p, i) => {
            const Icon = p.icon;
            return (
              <div key={p.title} className="reveal-scale" style={{ transitionDelay:`${i * 80}ms` }}>
                <div style={{
                  padding:'32px 28px', borderRadius:'20px', height:'100%',
                  background:'rgba(255,255,255,0.05)', border:'1px solid rgba(255,255,255,0.1)',
                  backdropFilter:'blur(12px)',
                  transition:'transform 0.35s cubic-bezier(.34,1.56,.64,1), background 0.35s ease, border-color 0.35s ease',
                  cursor:'default',
                }}
                  onMouseEnter={e => { e.currentTarget.style.transform='translateY(-8px)'; e.currentTarget.style.background='rgba(255,255,255,0.09)'; e.currentTarget.style.borderColor='rgba(255,229,0,0.25)'; }}
                  onMouseLeave={e => { e.currentTarget.style.transform=''; e.currentTarget.style.background='rgba(255,255,255,0.05)'; e.currentTarget.style.borderColor='rgba(255,255,255,0.1)'; }}>
                  <div style={{
                    width:'50px', height:'50px', borderRadius:'14px',
                    background:'rgba(255,229,0,0.1)', border:'1px solid rgba(255,229,0,0.2)',
                    display:'flex', alignItems:'center', justifyContent:'center', marginBottom:'20px',
                  }}>
                    <Icon size={22} color="var(--yellow)" strokeWidth={1.8} />
                  </div>
                  <div style={{ width:'28px', height:'3px', borderRadius:'2px', background:'var(--yellow)', marginBottom:'16px' }} />
                  <h3 style={{ fontFamily:"'Syne',sans-serif", fontWeight:'700', fontSize:'18px', color:'var(--cream)', marginBottom:'10px', letterSpacing:'-0.02em' }}>{p.title}</h3>
                  <p style={{ fontSize:'14px', lineHeight:'1.7', color:'rgba(253,248,242,0.55)' }}>{p.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* mission statement */}
        <div className="reveal" style={{
          textAlign:'center',
          background:'rgba(255,229,0,0.06)', border:'1px solid rgba(255,229,0,0.18)',
          borderRadius:'24px', padding:'48px 40px',
        }}>
          <div style={{ fontSize:'clamp(18px,2.5vw,26px)', fontFamily:"'Syne',sans-serif", fontWeight:'800', color:'var(--cream)', lineHeight:'1.5', letterSpacing:'-0.025em', maxWidth:'680px', margin:'0 auto' }}>
            "Let restaurants keep 100% of what they earn.<br />
            Let customers pay 100% of the real price.<br />
            <span style={{ background:'linear-gradient(90deg, var(--yellow) 0%, #fff9a0 100%)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text' }}>
              Nothing more. Nothing less."
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════
   SECTION 5 — KEY METRICS
═══════════════════════════════════════════════════ */
function MetricsSection() {
  const ref = useRef(null);
  useReveal(ref);

  const metrics = [
    { prefix:'', val:'250', suffix:'+', label:'Restaurant Partners', icon: Building2 },
    { prefix:'', val:'0',   suffix:'%', label:'Commission Charged', icon: BadgeIndianRupee },
    { prefix:'', val:'2',   suffix:'',  label:'Cities & Growing', icon: MapPin },
    { prefix:'', val:'2025',suffix:'',  label:'Founded', icon: Star },
  ];

  return (
    <section ref={ref} style={{ background:'var(--cream-dark)', padding:'110px 0', position:'relative', overflow:'hidden' }}>
      <div style={{ position:'absolute', top:'50%', left:'50%', transform:'translate(-50%,-50%)', width:'800px', height:'800px', borderRadius:'50%', background:'radial-gradient(circle, rgba(0,95,87,0.04) 0%, transparent 65%)', pointerEvents:'none' }} />

      <div className="section-wrap">
        <div style={{ textAlign:'center', marginBottom:'72px' }}>
          <span className="reveal tag tag-green" style={{ marginBottom:'16px' }}>By The Numbers</span>
          <h2 className="reveal heading-display heading-lg" style={{ color:'var(--text-primary)' }}>
            Small steps,{' '}
            <span className="gradient-text-green">real progress</span>
          </h2>
        </div>

        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(220px,1fr))', gap:'18px' }}>
          {metrics.map((m, i) => {
            const Icon = m.icon;
            return (
              <div key={m.label} className="reveal-scale" style={{ transitionDelay:`${i * 80}ms` }}>
                <div className="surface-card" style={{ padding:'44px 32px', textAlign:'center', cursor:'default' }}>
                  <div style={{
                    width:'52px', height:'52px', borderRadius:'15px', margin:'0 auto 24px',
                    background:'linear-gradient(135deg, rgba(0,95,87,0.1) 0%, rgba(0,95,87,0.04) 100%)',
                    border:'1px solid rgba(0,95,87,0.12)',
                    display:'flex', alignItems:'center', justifyContent:'center',
                    transition:'transform 0.3s ease',
                  }}
                    onMouseEnter={e => e.currentTarget.style.transform='rotate(-6deg) scale(1.1)'}
                    onMouseLeave={e => e.currentTarget.style.transform=''}>
                    <Icon size={22} color="var(--green)" strokeWidth={1.8} />
                  </div>
                  <Counter prefix={m.prefix} target={m.val} suffix={m.suffix} />
                  <div style={{ fontSize:'14px', color:'var(--text-muted)', marginTop:'10px', fontWeight:'600' }}>{m.label}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════
   SECTION 6 — VALUES
═══════════════════════════════════════════════════ */
function ValuesSection() {
  const ref = useRef(null);
  useReveal(ref);

  const groups = [
    {
      theme: 'Honesty First',
      color: 'var(--yellow)',
      colorBg: 'rgba(255,229,0,0.08)',
      colorBorder: 'rgba(255,229,0,0.2)',
      icon: Shield,
      values: [
        { title:'Honesty over growth hacks', desc:'We choose transparent practices even when shortcuts exist.' },
        { title:'No hidden charges', desc:'Every rupee is visible before you confirm an order.' },
        { title:'No fake discounts', desc:'We don\'t inflate prices to show artificial savings.' },
        { title:'Transparent pricing always', desc:'What you see is literally what you pay.' },
      ],
    },
    {
      theme: 'Restaurants Are Partners',
      color: 'var(--green-light)',
      colorBg: 'rgba(0,155,141,0.08)',
      colorBorder: 'rgba(0,155,141,0.22)',
      icon: Handshake,
      values: [
        { title:'Not products, partners', desc:'We treat every restaurant as a stakeholder, not just a supplier.' },
        { title:'Core stakeholders', desc:'Restaurant success is built into our business model.' },
        { title:'Aligned incentives', desc:'We grow only when our restaurant partners grow.' },
        { title:'Zero commission model', desc:'Their revenue stays with them. Always.' },
      ],
    },
    {
      theme: 'Chandigarh First',
      color: '#a78bfa',
      colorBg: 'rgba(167,139,250,0.08)',
      colorBorder: 'rgba(167,139,250,0.22)',
      icon: MapPin,
      values: [
        { title:'Built for local ecosystem', desc:'Our features, coverage and service are designed for Tricity.' },
        { title:'City-specific growth', desc:'We go deep before we go wide. One city done right.' },
        { title:'Chandigarh first, always', desc:'Our home city gets our best attention, always.' },
        { title:'Hyper-local focus', desc:'We know these streets, restaurants, and neighbourhoods.' },
      ],
    },
  ];

  return (
    <section ref={ref} style={{ background:'var(--dark-2)', padding:'110px 0', position:'relative', overflow:'hidden' }}>
      <div style={{ position:'absolute', top:'-15%', left:'-5%', width:'600px', height:'600px', borderRadius:'50%', background:'radial-gradient(circle, rgba(0,95,87,0.15) 0%, transparent 65%)', pointerEvents:'none' }} />
      <div style={{ position:'absolute', bottom:'-10%', right:'-5%', width:'500px', height:'500px', borderRadius:'50%', background:'radial-gradient(circle, rgba(255,229,0,0.04) 0%, transparent 65%)', pointerEvents:'none' }} />

      <div className="section-wrap">
        <div style={{ textAlign:'center', marginBottom:'80px' }}>
          <span className="reveal tag tag-green-dark" style={{ marginBottom:'16px' }}>What We Stand For</span>
          <h2 className="reveal heading-display heading-lg" style={{ color:'var(--cream)', marginBottom:'18px' }}>
            Values we{' '}
            <span style={{ background:'linear-gradient(90deg, var(--yellow) 0%, #fff9a0 100%)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text' }}>
              never compromise
            </span>
          </h2>
          <p className="reveal" style={{ fontSize:'17px', lineHeight:'1.7', color:'rgba(253,248,242,0.5)', maxWidth:'480px', margin:'0 auto' }}>
            These aren't marketing promises. They're operational constraints we hold ourselves to every day.
          </p>
        </div>

        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(320px,1fr))', gap:'22px' }}>
          {groups.map((g, gi) => {
            const GroupIcon = g.icon;
            return (
              <div key={g.theme} className="reveal-scale" style={{ transitionDelay:`${gi * 100}ms` }}>
                <div style={{
                  background:'rgba(255,255,255,0.04)', border:`1px solid ${g.colorBorder}`,
                  borderRadius:'24px', padding:'36px 32px', height:'100%',
                  backdropFilter:'blur(12px)',
                  transition:'transform 0.35s cubic-bezier(.34,1.56,.64,1), background 0.35s ease',
                }}
                  onMouseEnter={e => { e.currentTarget.style.transform='translateY(-6px)'; e.currentTarget.style.background='rgba(255,255,255,0.07)'; }}
                  onMouseLeave={e => { e.currentTarget.style.transform=''; e.currentTarget.style.background='rgba(255,255,255,0.04)'; }}>

                  {/* group header */}
                  <div style={{ display:'flex', alignItems:'center', gap:'14px', marginBottom:'28px', paddingBottom:'24px', borderBottom:`1px solid ${g.colorBorder}` }}>
                    <div style={{
                      width:'48px', height:'48px', borderRadius:'14px', flexShrink:0,
                      background: g.colorBg, border:`1px solid ${g.colorBorder}`,
                      display:'flex', alignItems:'center', justifyContent:'center',
                    }}>
                      <GroupIcon size={22} color={g.color} strokeWidth={1.8} />
                    </div>
                    <span style={{ fontFamily:"'Syne',sans-serif", fontWeight:'800', fontSize:'17px', color:'var(--cream)', letterSpacing:'-0.02em' }}>{g.theme}</span>
                  </div>

                  {/* value items */}
                  <div style={{ display:'flex', flexDirection:'column', gap:'18px' }}>
                    {g.values.map(v => (
                      <div key={v.title} style={{ display:'flex', gap:'12px', alignItems:'flex-start' }}>
                        <div style={{
                          width:'6px', height:'6px', borderRadius:'50%', flexShrink:0,
                          background: g.color, marginTop:'7px',
                        }} />
                        <div>
                          <div style={{ fontWeight:'700', fontSize:'14px', color:'var(--cream)', marginBottom:'3px' }}>{v.title}</div>
                          <div style={{ fontSize:'13px', lineHeight:'1.6', color:'rgba(253,248,242,0.45)' }}>{v.desc}</div>
                        </div>
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

/* ═══════════════════════════════════════════════════
   SECTION 7 — CTA / JOIN US
═══════════════════════════════════════════════════ */
function JoinSection() {
  const ref = useRef(null);
  useReveal(ref);

  const options = [
    {
      icon: Download,
      title:'Download the App',
      desc:'Order food the honest way. Real prices, no platform fee, from restaurants you love.',
      cta:'Download Now',
      href:'#download',
      accent:'var(--yellow)',
      accentBg:'rgba(255,229,0,0.1)',
      accentBorder:'rgba(255,229,0,0.22)',
      btnStyle:{ background:'var(--yellow)', color:'var(--green-dark)' },
    },
    {
      icon: Building2,
      title:'Partner Your Restaurant',
      desc:'Join 250+ restaurants keeping 100% of their revenue. Zero commission, always.',
      cta:'Become a Partner',
      href:'/restaurants',
      accent:'var(--green-light)',
      accentBg:'rgba(0,155,141,0.1)',
      accentBorder:'rgba(0,155,141,0.22)',
      btnStyle:{ background:'rgba(255,255,255,0.1)', color:'var(--cream)', border:'1px solid rgba(255,255,255,0.2)' },
    },
    {
      icon: Briefcase,
      title:'Join the Team',
      desc:'We\'re building something real. If you believe in honest systems, talk to us.',
      cta:'View Careers',
      href:'/contact',
      accent:'#a78bfa',
      accentBg:'rgba(167,139,250,0.1)',
      accentBorder:'rgba(167,139,250,0.22)',
      btnStyle:{ background:'rgba(255,255,255,0.1)', color:'var(--cream)', border:'1px solid rgba(255,255,255,0.2)' },
    },
  ];

  return (
    <section ref={ref} style={{ background:'var(--green-dark)', padding:'110px 0', position:'relative', overflow:'hidden' }}>
      <div style={{ position:'absolute', top:'-20%', right:'-8%', width:'600px', height:'600px', borderRadius:'50%', background:'radial-gradient(circle, rgba(0,154,141,0.22) 0%, transparent 65%)', pointerEvents:'none' }} />
      <div style={{ position:'absolute', bottom:'-10%', left:'-5%', width:'500px', height:'500px', borderRadius:'50%', background:'radial-gradient(circle, rgba(255,229,0,0.06) 0%, transparent 65%)', pointerEvents:'none' }} />
      <div style={{ position:'absolute', inset:0, backgroundImage:'linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)', backgroundSize:'60px 60px', pointerEvents:'none' }} />

      <div className="section-wrap">
        <div style={{ textAlign:'center', marginBottom:'80px' }}>
          <span className="reveal tag tag-green-dark" style={{ marginBottom:'16px' }}>Get Involved</span>
          <h2 className="reveal heading-display heading-lg" style={{ color:'var(--cream)', marginBottom:'18px' }}>
            Want to be part{' '}
            <span style={{ background:'linear-gradient(90deg, var(--yellow) 0%, #fff9a0 100%)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text' }}>
              of this?
            </span>
          </h2>
          <p className="reveal" style={{ fontSize:'17px', lineHeight:'1.7', color:'rgba(253,248,242,0.6)', maxWidth:'460px', margin:'0 auto' }}>
            Whether you're a customer, a restaurant owner, or someone who wants to build a fairer ecosystem — there's a place for you.
          </p>
        </div>

        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(300px,1fr))', gap:'20px', marginBottom:'72px' }}>
          {options.map((o, i) => {
            const Icon = o.icon;
            return (
              <div key={o.title} className="reveal-scale" style={{ transitionDelay:`${i * 90}ms` }}>
                <div style={{
                  background:'rgba(255,255,255,0.05)', border:`1px solid ${o.accentBorder}`,
                  borderRadius:'24px', padding:'36px 32px', height:'100%',
                  backdropFilter:'blur(12px)',
                  transition:'transform 0.35s cubic-bezier(.34,1.56,.64,1), background 0.35s ease',
                  display:'flex', flexDirection:'column',
                }}
                  onMouseEnter={e => { e.currentTarget.style.transform='translateY(-8px)'; e.currentTarget.style.background='rgba(255,255,255,0.09)'; }}
                  onMouseLeave={e => { e.currentTarget.style.transform=''; e.currentTarget.style.background='rgba(255,255,255,0.05)'; }}>
                  <div style={{
                    width:'54px', height:'54px', borderRadius:'16px',
                    background: o.accentBg, border:`1px solid ${o.accentBorder}`,
                    display:'flex', alignItems:'center', justifyContent:'center', marginBottom:'22px',
                  }}>
                    <Icon size={24} color={o.accent} strokeWidth={1.8} />
                  </div>
                  <h3 style={{ fontFamily:"'Syne',sans-serif", fontWeight:'700', fontSize:'20px', color:'var(--cream)', marginBottom:'10px', letterSpacing:'-0.02em' }}>{o.title}</h3>
                  <p style={{ fontSize:'14px', lineHeight:'1.7', color:'rgba(253,248,242,0.55)', flex:1, marginBottom:'24px' }}>{o.desc}</p>
                  <a href={o.href} style={{
                    display:'inline-flex', alignItems:'center', gap:'8px',
                    padding:'12px 24px', borderRadius:'100px',
                    fontWeight:'700', fontSize:'14px', textDecoration:'none',
                    letterSpacing:'-0.01em',
                    transition:'transform 0.25s cubic-bezier(.34,1.56,.64,1), box-shadow 0.25s ease',
                    ...o.btnStyle,
                  }}
                    onMouseEnter={e => { e.currentTarget.style.transform='translateY(-2px)'; }}
                    onMouseLeave={e => { e.currentTarget.style.transform=''; }}>
                    {o.cta}
                    <ArrowRight size={14} strokeWidth={2.5} />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* contact strip */}
        <div className="reveal" style={{
          display:'flex', alignItems:'center', justifyContent:'center', gap:'40px', flexWrap:'wrap',
          padding:'32px 40px', borderRadius:'20px',
          background:'rgba(255,255,255,0.04)', border:'1px solid rgba(255,255,255,0.08)',
        }}>
          <span style={{ fontSize:'14px', color:'rgba(253,248,242,0.5)', fontWeight:'600', textTransform:'uppercase', letterSpacing:'0.07em' }}>
            Or reach us directly
          </span>
          {[
            { icon: Mail, text:'info@kwikkit.in', href:'mailto:info@kwikkit.in' },
            { icon: PhoneCall, text:'+91 86995 55046', href:'tel:+918699555046' },
          ].map(c => {
            const Icon = c.icon;
            return (
              <a key={c.text} href={c.href} style={{
                display:'flex', alignItems:'center', gap:'10px',
                color:'rgba(253,248,242,0.65)', textDecoration:'none', fontSize:'15px', fontWeight:'600',
                transition:'color 0.2s ease',
              }}
                onMouseEnter={e => e.currentTarget.style.color='var(--yellow)'}
                onMouseLeave={e => e.currentTarget.style.color='rgba(253,248,242,0.65)'}>
                <Icon size={16} strokeWidth={2} />
                {c.text}
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════
   SECTION 8 — AVAILABILITY / DOWNLOAD
═══════════════════════════════════════════════════ */
function AvailabilitySection() {
  const ref = useRef(null);
  useReveal(ref);

  return (
    <section ref={ref} id="story-download" style={{ background:'var(--cream)', padding:'110px 0', position:'relative', overflow:'hidden' }}>
      <div style={{ position:'absolute', top:'50%', left:'50%', transform:'translate(-50%,-50%)', width:'900px', height:'900px', borderRadius:'50%', background:'radial-gradient(circle, rgba(0,95,87,0.05) 0%, transparent 60%)', pointerEvents:'none' }} />

      <div className="section-wrap" style={{ position:'relative', zIndex:1 }}>
        <div style={{
          background:'var(--dark)', borderRadius:'36px',
          padding:'clamp(48px,6vw,88px) clamp(32px,6vw,80px)',
          position:'relative', overflow:'hidden', textAlign:'center',
        }}>
          {/* card decorations */}
          <div style={{ position:'absolute', top:'-40px', right:'-40px', width:'280px', height:'280px', borderRadius:'50%', background:'radial-gradient(circle, rgba(255,229,0,0.08) 0%, transparent 65%)', pointerEvents:'none' }} />
          <div style={{ position:'absolute', bottom:'-60px', left:'-60px', width:'320px', height:'320px', borderRadius:'50%', background:'radial-gradient(circle, rgba(0,122,110,0.2) 0%, transparent 65%)', pointerEvents:'none' }} />
          <div style={{ position:'absolute', inset:0, backgroundImage:'linear-gradient(rgba(255,255,255,0.022) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.022) 1px, transparent 1px)', backgroundSize:'50px 50px', pointerEvents:'none' }} />

          <div style={{ position:'relative', zIndex:1 }}>
            {/* available badge */}
            <div className="reveal" style={{
              display:'inline-flex', alignItems:'center', gap:'8px',
              background:'rgba(0,95,87,0.2)', border:'1px solid rgba(0,155,141,0.3)',
              padding:'6px 18px', borderRadius:'100px', marginBottom:'28px',
            }}>
              <MapPin size={13} color="var(--green-light)" />
              <span style={{ fontSize:'12px', fontWeight:'700', color:'var(--green-light)', letterSpacing:'0.08em', textTransform:'uppercase' }}>
                Available in Chandigarh Tricity
              </span>
            </div>

            <h2 className="reveal heading-display heading-lg" style={{ color:'var(--cream)', marginBottom:'16px' }}>
              Download Kwikkit.<br />
              <span style={{ background:'linear-gradient(90deg, var(--yellow) 0%, #fff9a0 100%)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text' }}>
                Order the honest way.
              </span>
            </h2>

            <p className="reveal" style={{ fontSize:'17px', lineHeight:'1.7', color:'rgba(253,248,242,0.55)', maxWidth:'440px', margin:'0 auto 52px' }}>
              Real restaurant prices. ₹0 platform fee. Live tracking. The food delivery experience you always deserved.
            </p>

            {/* store buttons */}
            <div className="reveal" style={{ display:'flex', justifyContent:'center', gap:'16px', flexWrap:'wrap', marginBottom:'36px' }}>
              <a href="https://apps.apple.com/in/app/kwikkit-food-delivery/id6759088912"
                style={{
                  display:'inline-flex', alignItems:'center', gap:'12px',
                  background:'var(--cream)', color:'var(--green-dark)',
                  padding:'15px 30px', borderRadius:'16px', textDecoration:'none',
                  fontWeight:'700', fontSize:'15px',
                  boxShadow:'0 8px 32px rgba(0,0,0,0.2)',
                  transition:'transform 0.3s cubic-bezier(.34,1.56,.64,1), box-shadow 0.3s ease',
                }}
                onMouseEnter={e => { e.currentTarget.style.transform='translateY(-4px)'; e.currentTarget.style.boxShadow='0 16px 48px rgba(0,0,0,0.3)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform=''; e.currentTarget.style.boxShadow='0 8px 32px rgba(0,0,0,0.2)'; }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="var(--green-dark)">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98l-.09.06c-.22.14-2.22 1.3-2.2 3.88.03 3.02 2.65 4.03 2.68 4.04l-.03.1zM13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                <div style={{ textAlign:'left' }}>
                  <div style={{ fontSize:'11px', opacity:0.6, fontWeight:'500' }}>Download on the</div>
                  <div style={{ fontSize:'16px' }}>App Store</div>
                </div>
              </a>

              <a href="https://play.google.com/store/apps/details?id=com.kwikkitcustomer.kwikkitcustomerapp"
                style={{
                  display:'inline-flex', alignItems:'center', gap:'12px',
                  background:'rgba(255,255,255,0.08)', border:'1px solid rgba(255,255,255,0.18)',
                  backdropFilter:'blur(8px)', color:'var(--cream)',
                  padding:'15px 30px', borderRadius:'16px', textDecoration:'none',
                  fontWeight:'700', fontSize:'15px',
                  transition:'transform 0.3s cubic-bezier(.34,1.56,.64,1), background 0.3s ease',
                }}
                onMouseEnter={e => { e.currentTarget.style.transform='translateY(-4px)'; e.currentTarget.style.background='rgba(255,255,255,0.15)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform=''; e.currentTarget.style.background='rgba(255,255,255,0.08)'; }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="var(--cream)">
                  <path d="M3.18 23.76c.3.17.65.19.98.07L14.94 12 3.16.17C2.83.05 2.48.07 2.18.24 1.6.57 1.25 1.2 1.25 1.93v20.14c0 .73.35 1.36.93 1.69zM16.34 13.19l2.69 2.69-9.14 5.08 6.45-7.77zM20.7 9.99l-2.26-1.26-3.1 3.1 3.1 3.1 2.28-1.27c.65-.36 1.04-.97 1.04-1.67s-.39-1.29-1.06-1.9zM9.89 12L3.44 3.04l9.14 5.08-2.69 2.69V12z" />
                </svg>
                <div style={{ textAlign:'left' }}>
                  <div style={{ fontSize:'11px', opacity:0.6, fontWeight:'500' }}>Get it on</div>
                  <div style={{ fontSize:'16px' }}>Google Play</div>
                </div>
              </a>
            </div>

            <p className="reveal" style={{ fontSize:'13px', color:'rgba(253,248,242,0.3)', fontWeight:'600', letterSpacing:'0.02em' }}>
              Chandigarh · Panchkula · Mohali
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════
   PAGE EXPORT
═══════════════════════════════════════════════════ */
export default function StoryPage() {
  return (
    <>
      <StoryHero />
      <OriginSection />
      <DiscoverySection />
      <MissionSection />
      <MetricsSection />
      <ValuesSection />
      <JoinSection />
      <AvailabilitySection />
    </>
  );
}
