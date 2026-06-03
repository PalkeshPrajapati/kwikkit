'use client';
import { useEffect, useRef, useState, useCallback } from 'react';
import Image from 'next/image';
import { Store, Tag, ShoppingCart, BadgeIndianRupee, Star, CheckCircle, Users } from 'lucide-react';

const screens = [
  {
    img: '/screenshot/screenshot-home.png',
    label: 'Browse Local Restaurants',
    tag: 'Discovery',
    Icon: Store,
    desc: 'Discover local restaurants near you. Every listing shows real, unaltered prices — no platform markup, ever.',
    highlights: [
      'Live restaurant availability',
      'Filter by cuisine & distance',
      '200+ partner restaurants',
    ],
  },
  {
    img: '/screenshot/screenshot-restaurant.png',
    label: 'Real Menu Prices',
    tag: 'Honest Pricing',
    Icon: Tag,
    desc: 'Every item price on Kwikkit is identical to what the restaurant charges in-store. No exceptions.',
    highlights: [
      'Same as dine-in menu price',
      'Zero inflation on any item',
      'Price transparency guaranteed',
    ],
  },
  {
    img: '/screenshot/screenshot-cart.png',
    label: 'Platform Fee ₹0',
    tag: 'Checkout',
    Icon: ShoppingCart,
    desc: 'At checkout the platform fee reads ₹0 — every single time, for every single order.',
    highlights: [
      '₹0 platform fee, always',
      'Full cost breakdown shown',
      'No surprise at payment',
    ],
  },
];

const CYCLE_MS = 4500;

export default function AppShowcaseSection() {
  const [active, setActive]       = useState(0);
  const [imgVisible, setImgVis]   = useState(true);
  const [progress, setProgress]   = useState(0);
  const [paused, setPaused]       = useState(false);

  const sectionRef  = useRef(null);
  const timerRef    = useRef(null);
  const rafRef      = useRef(null);
  const startRef    = useRef(Date.now());

  /* ── switch with fade animation ── */
  const switchTo = useCallback((next) => {
    setImgVis(false);
    setTimeout(() => {
      setActive(next);
      setImgVis(true);
      setProgress(0);
      startRef.current = Date.now();
    }, 300);
  }, []);

  /* ── auto-cycle ── */
  useEffect(() => {
    if (paused) return;
    timerRef.current = setInterval(() => {
      switchTo((active + 1) % screens.length);
    }, CYCLE_MS);
    return () => clearInterval(timerRef.current);
  }, [active, paused, switchTo]);

  /* ── progress bar RAF ── */
  useEffect(() => {
    if (paused) return;
    startRef.current = Date.now();
    const tick = () => {
      const elapsed = Date.now() - startRef.current;
      setProgress(Math.min((elapsed / CYCLE_MS) * 100, 100));
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [active, paused]);

  /* ── scroll reveal ── */
  useEffect(() => {
    const obs = new IntersectionObserver(
      e => e.forEach(en => en.isIntersecting && en.target.classList.add('visible')),
      { threshold: 0.08 }
    );
    sectionRef.current?.querySelectorAll('.reveal,.reveal-left,.reveal-right').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const s = screens[active];

  return (
    <section
      ref={sectionRef}
      style={{ background: 'var(--dark)', padding: '110px 0', position: 'relative', overflow: 'hidden' }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* ── BG gradient orbs ── */}
      <div style={{ position:'absolute', top:'15%', left:'-8%', width:'640px', height:'640px', borderRadius:'50%', background:'radial-gradient(circle, rgba(0,95,87,0.14) 0%, transparent 65%)', pointerEvents:'none' }} />
      <div style={{ position:'absolute', bottom:'5%', right:'-6%', width:'520px', height:'520px', borderRadius:'50%', background:'radial-gradient(circle, rgba(255,229,0,0.05) 0%, transparent 65%)', pointerEvents:'none' }} />
      <div style={{ position:'absolute', inset:0, backgroundImage:'linear-gradient(rgba(255,255,255,0.018) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.018) 1px, transparent 1px)', backgroundSize:'72px 72px', pointerEvents:'none' }} />

      <div className="section-wrap">

        {/* ── Header ── */}
        <div style={{ textAlign:'center', marginBottom:'80px' }}>
          <span className="reveal tag tag-green-dark" style={{ marginBottom:'16px' }}>The App</span>
          <h2 className="reveal heading-display heading-lg" style={{ color:'var(--cream)', marginBottom:'16px' }}>
            Real Screenshots.{' '}
            <span style={{ background:'linear-gradient(90deg, var(--yellow) 0%, #fff9a0 100%)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text' }}>
              Real Prices.
            </span>
          </h2>
          <p className="reveal" style={{ fontSize:'17px', color:'rgba(253,248,242,0.45)', maxWidth:'460px', margin:'0 auto', lineHeight:'1.7' }}>
            These are actual screenshots from the Kwikkit app — every price you see is what you pay.
          </p>
        </div>

        {/* ── Main two-col layout ── */}
        <div className="showcase-grid" style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'72px', alignItems:'center' }}>

          {/* ─── LEFT: interactive tab cards ─── */}
          <div className="reveal-left" style={{ display:'flex', flexDirection:'column', gap:'10px' }}>
            {screens.map((screen, i) => {
              const isActive = active === i;
              return (
                <button
                  key={i}
                  onClick={() => { switchTo(i); setPaused(true); }}
                  style={{
                    all: 'unset',
                    cursor: 'pointer',
                    display: 'block',
                    padding: '22px 24px',
                    borderRadius: '18px',
                    border: `1px solid ${isActive ? 'rgba(255,229,0,0.22)' : 'rgba(255,255,255,0.07)'}`,
                    background: isActive ? 'rgba(255,229,0,0.05)' : 'rgba(255,255,255,0.03)',
                    position: 'relative',
                    overflow: 'hidden',
                    transform: isActive ? 'translateX(6px)' : 'translateX(0)',
                    transition: 'border-color 0.35s ease, background 0.35s ease, transform 0.35s cubic-bezier(.34,1.56,.64,1)',
                    textAlign: 'left',
                  }}
                  onMouseEnter={e => { if (!isActive) { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.14)'; e.currentTarget.style.background = 'rgba(255,255,255,0.055)'; } }}
                  onMouseLeave={e => { if (!isActive) { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'; e.currentTarget.style.background = 'rgba(255,255,255,0.03)'; } }}
                >
                  {/* active left accent */}
                  {isActive && (
                    <div style={{ position:'absolute', left:0, top:'16px', bottom:'16px', width:'3px', borderRadius:'0 3px 3px 0', background:'linear-gradient(180deg, var(--yellow) 0%, rgba(255,229,0,0.3) 100%)' }} />
                  )}

                  {/* progress bar */}
                  {isActive && (
                    <div style={{ position:'absolute', bottom:0, left:0, right:0, height:'2px', background:'rgba(255,255,255,0.06)', borderRadius:'0 0 18px 18px' }}>
                      <div style={{ height:'100%', width:`${progress}%`, background:'var(--yellow)', borderRadius:'2px', transition:'width 0.08s linear' }} />
                    </div>
                  )}

                  {/* row: icon + text */}
                  <div style={{ display:'flex', gap:'16px', alignItems:'flex-start' }}>
                    {/* icon box */}
                    <div style={{
                      width:'46px', height:'46px', borderRadius:'13px', flexShrink:0,
                      background: isActive ? 'rgba(255,229,0,0.12)' : 'rgba(255,255,255,0.07)',
                      border: `1px solid ${isActive ? 'rgba(255,229,0,0.28)' : 'rgba(255,255,255,0.09)'}`,
                      display:'flex', alignItems:'center', justifyContent:'center',
                      transition:'background 0.35s ease, border-color 0.35s ease',
                    }}>
                      <screen.Icon size={20} strokeWidth={1.8} color={isActive ? 'var(--yellow)' : 'rgba(253,248,242,0.45)'} />
                    </div>

                    {/* text block */}
                    <div style={{ flex:1, minWidth:0 }}>
                      <span style={{
                        fontSize:'10px', fontWeight:'700', letterSpacing:'0.1em', textTransform:'uppercase',
                        color: isActive ? 'var(--yellow)' : 'rgba(253,248,242,0.3)',
                        transition:'color 0.35s ease', display:'block', marginBottom:'5px',
                      }}>{screen.tag}</span>

                      <h3 style={{
                        fontFamily:"'Syne',sans-serif", fontWeight:'700', fontSize:'16px',
                        letterSpacing:'-0.02em', lineHeight:'1.25',
                        color: isActive ? 'var(--cream)' : 'rgba(253,248,242,0.55)',
                        transition:'color 0.35s ease',
                        marginBottom: isActive ? '12px' : '0',
                      }}>{screen.label}</h3>

                      {/* expanded content — only for active */}
                      <div style={{
                        maxHeight: isActive ? '200px' : '0',
                        overflow:'hidden',
                        transition:'max-height 0.4s cubic-bezier(.4,0,.2,1)',
                      }}>
                        <p style={{ fontSize:'13px', lineHeight:'1.65', color:'rgba(253,248,242,0.45)', marginBottom:'14px' }}>
                          {screen.desc}
                        </p>
                        <div style={{ display:'flex', flexDirection:'column', gap:'7px' }}>
                          {screen.highlights.map((h, hi) => (
                            <div key={hi} style={{ display:'flex', alignItems:'center', gap:'8px' }}>
                              <CheckCircle size={13} strokeWidth={2.5} color="var(--green-light)" style={{ flexShrink:0 }} />
                              <span style={{ fontSize:'13px', color:'rgba(253,248,242,0.6)', fontWeight:'500' }}>{h}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </button>
              );
            })}

            {/* dot nav */}
            <div style={{ display:'flex', gap:'8px', paddingTop:'8px', paddingLeft:'4px' }}>
              {screens.map((_, i) => (
                <button key={i} onClick={() => { switchTo(i); setPaused(true); }} style={{
                  all:'unset', cursor:'pointer',
                  width: active === i ? '28px' : '8px', height:'8px', borderRadius:'4px',
                  background: active === i ? 'var(--yellow)' : 'rgba(255,255,255,0.18)',
                  transition:'width 0.35s ease, background 0.35s ease',
                }} />
              ))}
              <span style={{ marginLeft:'auto', fontSize:'12px', color:'rgba(253,248,242,0.25)', fontWeight:'500', alignSelf:'center' }}>
                {active + 1} / {screens.length}
              </span>
            </div>
          </div>

          {/* ─── RIGHT: phone + floating badges ─── */}
          <div className="reveal-right" style={{ display:'flex', justifyContent:'center', position:'relative', paddingTop:'24px', paddingBottom:'24px' }}>

            {/* glow behind phone */}
            <div style={{
              position:'absolute', top:'50%', left:'50%', transform:'translate(-50%,-50%)',
              width:'340px', height:'340px', borderRadius:'50%',
              background:'radial-gradient(circle, rgba(0,95,87,0.35) 0%, transparent 70%)',
              filter:'blur(48px)', pointerEvents:'none',
            }} />

            {/* floating badge — top-left */}
            <div style={{
              position:'absolute', top:'4%', left:'-2%',
              background:'rgba(6,14,13,0.92)', backdropFilter:'blur(20px)',
              border:'1px solid rgba(255,229,0,0.22)', borderRadius:'14px',
              padding:'10px 16px', display:'flex', alignItems:'center', gap:'10px',
              boxShadow:'0 12px 40px rgba(0,0,0,0.35)',
              animation:'showcaseFloat 4s ease-in-out infinite',
              zIndex:3,
            }}>
              <div style={{ width:'32px', height:'32px', borderRadius:'9px', background:'rgba(255,229,0,0.12)', display:'flex', alignItems:'center', justifyContent:'center' }}>
                <BadgeIndianRupee size={16} color="var(--yellow)" />
              </div>
              <div>
                <div style={{ fontSize:'10px', color:'rgba(253,248,242,0.4)', fontWeight:'600', letterSpacing:'0.04em', textTransform:'uppercase' }}>Platform Fee</div>
                <div style={{ fontSize:'16px', fontWeight:'900', color:'var(--yellow)', fontFamily:"'Syne',sans-serif", lineHeight:'1.1' }}>₹0 Always</div>
              </div>
            </div>

            {/* floating badge — bottom-right */}
            <div style={{
              position:'absolute', bottom:'8%', right:'-4%',
              background:'rgba(6,14,13,0.92)', backdropFilter:'blur(20px)',
              border:'1px solid rgba(0,154,141,0.28)', borderRadius:'14px',
              padding:'10px 16px', display:'flex', alignItems:'center', gap:'10px',
              boxShadow:'0 12px 40px rgba(0,0,0,0.35)',
              animation:'showcaseFloat 5.5s ease-in-out infinite 1.4s',
              zIndex:3,
            }}>
              <div style={{ width:'32px', height:'32px', borderRadius:'9px', background:'rgba(0,122,110,0.2)', display:'flex', alignItems:'center', justifyContent:'center' }}>
                <Users size={16} color="var(--green-light)" />
              </div>
              <div>
                <div style={{ fontSize:'10px', color:'rgba(253,248,242,0.4)', fontWeight:'600', letterSpacing:'0.04em', textTransform:'uppercase' }}>Partners</div>
                <div style={{ fontSize:'16px', fontWeight:'900', color:'var(--cream)', fontFamily:"'Syne',sans-serif", lineHeight:'1.1' }}>200+ Restaurants</div>
              </div>
            </div>

            {/* floating badge — mid-right */}
            <div style={{
              position:'absolute', top:'38%', right:'-6%',
              background:'rgba(6,14,13,0.92)', backdropFilter:'blur(20px)',
              border:'1px solid rgba(255,229,0,0.18)', borderRadius:'14px',
              padding:'10px 16px', display:'flex', alignItems:'center', gap:'10px',
              boxShadow:'0 12px 40px rgba(0,0,0,0.35)',
              animation:'showcaseFloat 4.8s ease-in-out infinite 0.7s',
              zIndex:3,
            }}>
              <div style={{ width:'32px', height:'32px', borderRadius:'9px', background:'rgba(255,229,0,0.1)', display:'flex', alignItems:'center', justifyContent:'center' }}>
                <Star size={16} color="var(--yellow)" fill="var(--yellow)" />
              </div>
              <div>
                <div style={{ fontSize:'10px', color:'rgba(253,248,242,0.4)', fontWeight:'600', letterSpacing:'0.04em', textTransform:'uppercase' }}>App Rating</div>
                <div style={{ fontSize:'16px', fontWeight:'900', color:'var(--cream)', fontFamily:"'Syne',sans-serif", lineHeight:'1.1' }}>4.8 Stars</div>
              </div>
            </div>

            {/* ── Phone device frame ── */}
            <div style={{
              width:'260px',
              background:'linear-gradient(160deg, #1e3330 0%, #0c1b19 100%)',
              borderRadius:'52px', padding:'14px',
              boxShadow:'0 48px 110px rgba(0,0,0,0.55), 0 0 0 1px rgba(255,255,255,0.07), inset 0 1px 0 rgba(255,255,255,0.08)',
              position:'relative', zIndex:2,
              animation:'phoneFloat 6s ease-in-out infinite',
            }}>
              {/* dynamic island */}
              <div style={{
                position:'absolute', top:'16px', left:'50%', transform:'translateX(-50%)',
                width:'76px', height:'22px', borderRadius:'12px',
                background:'#0c1b19', zIndex:5,
                boxShadow:'0 0 0 1px rgba(255,255,255,0.05)',
              }} />

              {/* screen */}
              <div style={{ borderRadius:'40px', overflow:'hidden', background:'#f2f2f2', aspectRatio:'9/19.5', position:'relative' }}>
                <Image
                  src={s.img}
                  alt={s.label}
                  fill
                  sizes="260px"
                  style={{
                    objectFit:'cover',
                    opacity: imgVisible ? 1 : 0,
                    transform: imgVisible ? 'scale(1) translateY(0)' : 'scale(1.04) translateY(8px)',
                    transition:'opacity 0.32s ease, transform 0.32s ease',
                  }}
                  priority
                />
              </div>

              {/* side button details */}
              <div style={{ position:'absolute', right:'-3px', top:'100px', width:'3px', height:'40px', background:'rgba(255,255,255,0.12)', borderRadius:'0 3px 3px 0' }} />
              <div style={{ position:'absolute', left:'-3px', top:'90px', width:'3px', height:'28px', background:'rgba(255,255,255,0.12)', borderRadius:'3px 0 0 3px' }} />
              <div style={{ position:'absolute', left:'-3px', top:'126px', width:'3px', height:'28px', background:'rgba(255,255,255,0.12)', borderRadius:'3px 0 0 3px' }} />
            </div>
          </div>
        </div>

        {/* ── Bottom trust strip ── */}
        <div className="reveal" style={{
          marginTop:'80px',
          padding:'28px 40px',
          borderRadius:'20px',
          background:'rgba(255,255,255,0.03)',
          border:'1px solid rgba(255,255,255,0.07)',
          display:'flex', alignItems:'center', justifyContent:'center',
          gap:'0', flexWrap:'wrap',
        }}>
          {[
            { val:'₹0', label:'Platform Fee' },
            { val:'100%', label:'Price Match' },
            { val:'200+', label:'Restaurants' },
            { val:'4.8★', label:'App Rating' },
          ].map((item, i, arr) => (
            <div key={item.val} style={{
              flex:'1', minWidth:'120px', textAlign:'center',
              borderRight: i < arr.length - 1 ? '1px solid rgba(255,255,255,0.07)' : 'none',
              padding:'12px 24px',
            }}>
              <div style={{ fontFamily:"'Syne',sans-serif", fontWeight:'900', fontSize:'26px', color:'var(--yellow)', lineHeight:'1.1' }}>{item.val}</div>
              <div style={{ fontSize:'12px', color:'rgba(253,248,242,0.38)', fontWeight:'600', textTransform:'uppercase', letterSpacing:'0.07em', marginTop:'4px' }}>{item.label}</div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes showcaseFloat {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes phoneFloat {
          0%, 100% { transform: translateY(0px) rotate(0.3deg); }
          50% { transform: translateY(-8px) rotate(-0.3deg); }
        }
        @media (max-width: 900px) {
          .showcase-grid {
            grid-template-columns: 1fr !important;
            gap: 56px !important;
          }
          .showcase-grid > div:last-child {
            order: -1;
          }
        }
        @media (max-width: 640px) {
          .showcase-grid > div:first-child > div:first-child {
            display: none;
          }
        }
      `}</style>
    </section>
  );
}
