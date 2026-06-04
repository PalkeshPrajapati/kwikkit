'use client';
import { useEffect, useRef, useState } from 'react';
import {
  Building2,
  Sparkles,
  Smartphone,
  Receipt,
  ShieldCheck,
  TrendingUp,
  UserCheck,
  Clock,
  ArrowRight,
  Check,
  CheckCircle,
  AlertCircle,
  HelpCircle,
  Phone,
  BarChart3,
  Users,
  MapPin,
  Coins
} from 'lucide-react';

/* ─── Scroll Reveal Hook ─────────────────────────── */
function useReveal(ref) {
  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.08 }
    );
    ref.current?.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}

export default function RestaurantsPage() {
  const pageRef = useRef(null);
  const formRef = useRef(null);
  const whyRef = useRef(null);
  useReveal(pageRef);

  const [loaded, setLoaded] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    restaurantName: '',
    ownerName: '',
    phone: '',
    address: '',
    cuisineType: '',
    currentPlatform: '',
    additionalInfo: ''
  });

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 80);
    return () => clearTimeout(timer);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!formData.restaurantName.trim()) newErrors.restaurantName = 'Restaurant Name is required';
    if (!formData.ownerName.trim()) newErrors.ownerName = 'Owner / Contact Name is required';
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone Number is required';
    } else if (!/^[6-9]\d{9}$/.test(formData.phone.trim().replace(/[\s-+]/g, '').slice(-10))) {
      newErrors.phone = 'Please enter a valid 10-digit mobile number';
    }
    if (!formData.address.trim()) newErrors.address = 'Restaurant Address is required';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }

    setFormSubmitted(true);
  };

  const resetForm = () => {
    setFormData({
      restaurantName: '',
      ownerName: '',
      phone: '',
      address: '',
      cuisineType: '',
      currentPlatform: '',
      additionalInfo: ''
    });
    setFormSubmitted(false);
    setErrors({});
  };

  const handleScrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleScrollToWhy = () => {
    whyRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <main ref={pageRef} style={{ background: 'var(--cream)', minHeight: '100vh', overflowX: 'hidden' }}>

      {/* ═══════════════════════════════════════════════════
         SECTION 1 — HERO SECTION
      ═══════════════════════════════════════════════════ */}
      <section style={{
        background: 'var(--dark)',
        minHeight: '92svh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        paddingTop: '100px',
      }}>
        {/* Background Image & Overlay */}
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'url(/restaurant-hero-bg.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          zIndex: 0,
          opacity: 0.22,
        }} />
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to bottom, rgba(8, 15, 14, 0.96) 0%, rgba(0, 61, 55, 0.72) 100%)',
          zIndex: 0,
        }} />
        {/* Glowing Orbs */}
        <div style={{ position: 'absolute', top: '10%', right: '-10%', width: '600px', height: '600px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,229,0,0.08) 0%, transparent 70%)', pointerEvents: 'none', zIndex: 0 }} />
        <div style={{ position: 'absolute', bottom: '-10%', left: '-10%', width: '500px', height: '500px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(0,155,141,0.2) 0%, transparent 70%)', pointerEvents: 'none', zIndex: 0 }} />

        <div className="section-wrap" style={{ position: 'relative', zIndex: 1, padding: '48px 28px', textAlign: 'center' }}>
          {/* Eyebrow */}
          <div style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.6s ease 0.05s, transform 0.6s ease 0.05s',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: 'rgba(255, 229, 0, 0.08)',
            border: '1px solid rgba(255, 229, 0, 0.25)',
            padding: '8px 20px',
            borderRadius: '100px',
            marginBottom: '32px',
          }}>
            <span className="dot-blink" style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--yellow)', display: 'inline-block' }} />
            <span style={{ fontSize: '11px', fontWeight: '800', color: 'var(--yellow)', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
              Partnership Program
            </span>
          </div>

          {/* Headline */}
          <h1 style={{
            fontFamily: "'Syne', sans-serif",
            fontWeight: '800',
            fontSize: 'clamp(42px, 6.5vw, 84px)',
            lineHeight: '1.02',
            letterSpacing: '-0.035em',
            color: 'var(--cream)',
            maxWidth: '1000px',
            margin: '0 auto 28px',
            opacity: loaded ? 1 : 0,
            transform: loaded ? 'translateY(0)' : 'translateY(30px)',
            transition: 'opacity 0.75s ease 0.15s, transform 0.75s ease 0.15s',
          }}>
            Keep 100% of every order.<br />
            <span style={{
              background: 'linear-gradient(90deg, var(--yellow) 0%, #fff677 50%, #fffaba 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>Zero commission. Always.</span>
          </h1>

          {/* Subtitle */}
          <p style={{
            fontSize: 'clamp(18px, 2.2vw, 23px)',
            fontWeight: '500',
            fontFamily: "'Syne', sans-serif",
            color: 'var(--yellow-soft)',
            maxWidth: '720px',
            margin: '0 auto 40px',
            lineHeight: '1.45',
            opacity: loaded ? 1 : 0,
            transform: loaded ? 'translateY(0)' : 'translateY(24px)',
            transition: 'opacity 0.7s ease 0.25s, transform 0.7s ease 0.25s',
          }}>
            Kwikkit is a food delivery platform built specifically for Chandigarh Tricity, charging restaurants absolutely no commission.
          </p>

          {/* Bullets List */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '20px',
            flexWrap: 'wrap',
            maxWidth: '850px',
            margin: '0 auto 56px',
            opacity: loaded ? 1 : 0,
            transform: loaded ? 'translateY(0)' : 'translateY(24px)',
            transition: 'opacity 0.7s ease 0.35s, transform 0.7s ease 0.35s',
          }}>
            {[
              'List your real menu prices without inflation',
              'Boost delivery profitability instantly',
              'Retain full earnings from every single order'
            ].map((bullet, idx) => (
              <div key={idx} style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                background: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                padding: '12px 24px',
                borderRadius: '16px',
                backdropFilter: 'blur(8px)',
              }}>
                <div style={{
                  width: '22px',
                  height: '22px',
                  borderRadius: '50%',
                  background: 'rgba(0, 155, 141, 0.15)',
                  border: '1px solid rgba(0, 155, 141, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--green-light)',
                  flexShrink: 0,
                }}>
                  <Check size={13} strokeWidth={3} />
                </div>
                <span style={{ fontSize: '14.5px', fontWeight: '600', color: 'rgba(253, 248, 242, 0.85)', letterSpacing: '-0.01em' }}>
                  {bullet}
                </span>
              </div>
            ))}
          </div>

          {/* Actions */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '18px',
            flexWrap: 'wrap',
            opacity: loaded ? 1 : 0,
            transform: loaded ? 'translateY(0)' : 'translateY(24px)',
            transition: 'opacity 0.7s ease 0.45s, transform 0.7s ease 0.45s',
          }}>
            <button onClick={handleScrollToForm} className="btn btn-yellow" style={{ padding: '18px 40px', fontSize: '15px' }}>
              Partner With Kwikkit
              <ArrowRight size={16} strokeWidth={2.5} />
            </button>
            <button onClick={handleScrollToWhy} className="btn btn-ghost" style={{ padding: '18px 36px', fontSize: '15px', background: 'transparent', border: '1px solid rgba(255,255,255,0.1)' }}>
              How it works
            </button>
          </div>
        </div>

        {/* Scroll cue */}
        <div style={{
          position: 'absolute',
          bottom: '24px',
          left: '50%',
          transform: 'translateX(-50%)',
          opacity: loaded ? 1 : 0,
          transition: 'opacity 0.6s ease 0.9s',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '6px',
        }}>
          <span style={{ fontSize: '10px', color: 'rgba(253, 248, 242, 0.4)', fontWeight: '600', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Onboarding Benefits</span>
          <div style={{ width: '1px', height: '30px', background: 'linear-gradient(to bottom, rgba(255, 229, 0, 0.6), transparent)', animation: 'scrollLine 1.8s ease-in-out infinite' }} />
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
         SECTION 2 — WHY PARTNER WITH KWIKKIT
      ═══════════════════════════════════════════════════ */}
      <section ref={whyRef} style={{ padding: '120px 0', background: 'var(--cream)', position: 'relative', overflow: 'hidden' }}>
        {/* Background Image Overlay */}
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'url(/restaurants-benefits-bg.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          opacity: 0.16,
          pointerEvents: 'none',
          zIndex: 0,
        }} />
        {/* Smooth gradient blend edges */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to bottom, var(--cream) 0%, rgba(253, 248, 242, 0.3) 15%, rgba(253, 248, 242, 0.3) 85%, var(--cream) 100%)',
          pointerEvents: 'none',
          zIndex: 0,
        }} />

        <div className="section-wrap" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <span className="reveal tag tag-green" style={{ marginBottom: '16px' }}>Onboarding Benefits</span>
            <h2 className="reveal heading-display heading-lg" style={{ color: 'var(--text-primary)', marginBottom: '18px' }}>
              Built to Work Better<br /><span className="gradient-text-green">for Restaurants</span>
            </h2>
            <p className="reveal" style={{ fontSize: '17px', color: 'var(--text-muted)', maxWidth: '480px', margin: '0 auto' }}>
              Traditional food delivery takes up to 30% of your bill. Kwikkit takes 0% and protects your margins.
            </p>
          </div>

          {/* Features Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '28px',
            maxWidth: '1100px',
            margin: '0 auto',
          }}>
            {[
              {
                title: 'Keep 100% of Every Order',
                icon: Coins,
                desc: 'No commission charged. Restaurant receives full order value. Delivery fee collected separately.',
                example: '₹500 order = ₹500 revenue to restaurant',
                color: 'var(--green-light)',
                bg: 'rgba(0, 155, 141, 0.05)',
                border: 'rgba(0, 155, 141, 0.15)',
                num: '01'
              },
              {
                title: 'Your Menu, Your Prices',
                icon: Building2,
                desc: 'Full pricing control. No forced discounts. No price inflation requirements. Restaurants decide their own menu rates.',
                color: 'var(--green)',
                bg: 'rgba(0, 95, 87, 0.05)',
                border: 'rgba(0, 95, 87, 0.12)',
                num: '02'
              },
              {
                title: 'Higher Net Earnings',
                icon: TrendingUp,
                desc: 'Higher delivery profitability compared to traditional commission-based platforms. Restaurants retain more revenue from every order.',
                color: '#a78bfa',
                bg: 'rgba(167, 139, 250, 0.06)',
                border: 'rgba(167, 139, 250, 0.18)',
                num: '03'
              },
              {
                title: 'Dedicated Partner Support',
                icon: UserCheck,
                desc: 'Personal account manager. Onboarding assistance. Menu optimization guidance. Growth support.',
                color: 'var(--green-light)',
                bg: 'rgba(0, 155, 141, 0.05)',
                border: 'rgba(0, 155, 141, 0.15)',
                num: '04'
              },
              {
                title: 'Full Analytics Dashboard',
                icon: BarChart3,
                desc: 'Track orders, monitor revenue, analyze bestselling items, and view real-time business performance.',
                color: 'var(--green)',
                bg: 'rgba(0, 95, 87, 0.05)',
                border: 'rgba(0, 95, 87, 0.12)',
                num: '05'
              },
              {
                title: 'Go Live in 24 Hours',
                icon: Clock,
                desc: 'Fast onboarding process, quick verification, and rapid restaurant listing. Live within one business day.',
                color: 'var(--yellow)',
                bg: 'rgba(255, 229, 0, 0.06)',
                border: 'rgba(255, 229, 0, 0.25)',
                num: '06'
              }
            ].map((feat, i) => {
              const Icon = feat.icon;
              return (
                <div key={feat.title} className="reveal-scale" style={{ transitionDelay: `${i * 80}ms` }}>
                  <div
                    style={{
                      padding: '40px 36px',
                      background: 'var(--green-dark)',
                      borderRadius: '24px',
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      border: '1px solid rgba(255, 255, 255, 0.08)',
                      boxShadow: '0 10px 30px rgba(0, 61, 55, 0.18)',
                      position: 'relative',
                      transition: 'transform 0.3s cubic-bezier(0.25, 0.8, 0.25, 1), box-shadow 0.3s ease, border-color 0.3s ease, background-color 0.3s ease',
                      cursor: 'default',
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.transform = 'translateY(-8px)';
                      e.currentTarget.style.background = '#061d1b';
                      e.currentTarget.style.borderColor = 'var(--yellow)';
                      e.currentTarget.style.boxShadow = '0 20px 45px rgba(255, 229, 0, 0.15), 0 0 15px rgba(0, 155, 141, 0.1)';
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.transform = '';
                      e.currentTarget.style.background = 'var(--green-dark)';
                      e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                      e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 61, 55, 0.18)';
                    }}
                  >
                    {/* Floating Counter Number */}
                    <span style={{
                      position: 'absolute',
                      top: '24px',
                      right: '32px',
                      fontFamily: "'Syne', sans-serif",
                      fontWeight: '800',
                      fontSize: '36px',
                      color: 'rgba(255, 229, 0, 0.07)',
                      lineHeight: '1',
                      userSelect: 'none',
                    }}>
                      {feat.num}
                    </span>

                    <div>
                      {/* Icon container */}
                      <div style={{
                        width: '52px',
                        height: '52px',
                        borderRadius: '14px',
                        background: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: '24px',
                      }}>
                        <Icon size={24} color="var(--yellow)" strokeWidth={1.8} />
                      </div>

                      <h3 style={{
                        fontFamily: "'Syne', sans-serif",
                        fontWeight: '850',
                        fontSize: '21px',
                        color: 'var(--cream)',
                        marginBottom: '14px',
                        letterSpacing: '-0.02em',
                      }}>
                        {feat.title}
                      </h3>

                      <p style={{
                        fontSize: '14.5px',
                        lineHeight: '1.75',
                        color: 'rgba(253, 248, 242, 0.7)',
                        marginBottom: feat.example ? '20px' : '0',
                      }}>
                        {feat.desc}
                      </p>
                    </div>

                    {/* Example highlight box */}
                    {feat.example && (
                      <div style={{
                        background: 'rgba(255, 255, 255, 0.04)',
                        borderLeft: '4px solid var(--yellow)',
                        padding: '12px 18px',
                        borderRadius: '0 12px 12px 0',
                        marginTop: '24px',
                      }}>
                        <div style={{ fontSize: '11px', fontWeight: '800', textTransform: 'uppercase', color: 'var(--yellow)', letterSpacing: '0.05em', marginBottom: '4px' }}>Example Calculation</div>
                        <span style={{ fontSize: '14px', fontWeight: '700', color: 'var(--cream)' }}>
                          {feat.example}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
         SECTION 3 — PARTNER TESTIMONIALS
      ═══════════════════════════════════════════════════ */}
      <section style={{
        background: 'var(--dark-2)',
        padding: '120px 0',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Glow decoration */}
        <div style={{ position: 'absolute', top: '-10%', left: '-5%', width: '500px', height: '500px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(0, 154, 141, 0.12) 0%, transparent 65%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: '-15%', right: '-10%', width: '600px', height: '600px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(255, 229, 0, 0.03) 0%, transparent 65%)', pointerEvents: 'none' }} />

        <div className="section-wrap">
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <span className="reveal tag tag-green-dark" style={{ marginBottom: '16px' }}>Partner Stories</span>
            <h2 className="reveal heading-display heading-lg" style={{ color: 'var(--cream)', marginBottom: '18px' }}>
              Stories from <span style={{
                background: 'linear-gradient(90deg, var(--yellow) 0%, #fff9a0 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>Our Partners</span>
            </h2>
            <p className="reveal" style={{ fontSize: '17px', lineHeight: '1.7', color: 'rgba(253, 248, 242, 0.5)', maxWidth: '480px', margin: '0 auto' }}>
              Hear how restaurant owners across Tricity are increasing their profits and trust with Kwikkit.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '24px',
            maxWidth: '1080px',
            margin: '0 auto',
          }}>
            {[
              {
                name: 'Harpreet S.',
                restaurant: 'Dhaba 22',
                city: 'Chandigarh',
                since: 'January 2026',
                feedback: 'Reduced significant monthly commission expenses after joining Kwikkit.',
                initial: 'H'
              },
              {
                name: 'Meena R.',
                restaurant: 'Spice Garden',
                city: 'Mohali',
                since: 'February 2026',
                feedback: 'Experienced a simple and fast onboarding process without complicated agreements.',
                initial: 'M'
              },
              {
                name: 'Vikram T.',
                restaurant: 'Tikka World',
                city: 'Sector 9, Chandigarh',
                since: 'March 2026',
                feedback: 'Customers appreciated transparent menu pricing, leading to increased trust and repeat orders.',
                initial: 'V'
              }
            ].map((test, i) => (
              <div key={test.name} className="reveal-scale" style={{ transitionDelay: `${i * 100}ms` }}>
                <div
                  style={{
                    padding: '40px 32px',
                    borderRadius: '24px',
                    height: '100%',
                    background: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    backdropFilter: 'blur(12px)',
                    transition: 'transform 0.35s ease, background 0.35s ease, border-color 0.35s ease',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.transform = 'translateY(-6px)';
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.07)';
                    e.currentTarget.style.borderColor = 'rgba(255, 229, 0, 0.2)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.transform = '';
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.04)';
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                  }}
                >
                  {/* Feedback quote */}
                  <div style={{ marginBottom: '32px' }}>
                    <div style={{ color: 'var(--yellow)', fontSize: '48px', fontFamily: 'serif', lineHeight: '0.1', height: '24px', opacity: 0.8 }}>“</div>
                    <p style={{
                      fontSize: '15.5px',
                      lineHeight: '1.75',
                      color: 'rgba(253, 248, 242, 0.82)',
                      fontStyle: 'italic',
                      margin: '10px 0 0 0',
                    }}>
                      {test.feedback}
                    </p>
                  </div>

                  {/* Profile block */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '14px', paddingTop: '20px', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                    <div style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '50%',
                      background: 'linear-gradient(135deg, var(--green-light) 0%, var(--green) 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--cream)',
                      fontWeight: '800',
                      fontSize: '16px',
                      fontFamily: "'Syne', sans-serif",
                    }}>
                      {test.initial}
                    </div>

                    <div>
                      <h4 style={{ fontSize: '15px', fontWeight: '700', color: 'var(--cream)' }}>
                        {test.name}
                      </h4>
                      <div style={{ fontSize: '12px', color: 'rgba(253, 248, 242, 0.45)', display: 'flex', flexDirection: 'column', marginTop: '2px' }}>
                        <span>{test.restaurant} · {test.city}</span>
                        <span style={{ fontSize: '10px', color: 'var(--yellow)', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.04em', marginTop: '3px' }}>
                          Partner since {test.since}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
         SECTION 4 — CUSTOMER EXPERIENCE SHOWCASE
      ═══════════════════════════════════════════════════ */}
      <section style={{ padding: '120px 0', background: 'var(--cream-dark)', position: 'relative', overflow: 'hidden' }}>
        {/* Background Image Overlay */}
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'url(/customer-showcase-bg.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          opacity: 0.15,
          pointerEvents: 'none',
          zIndex: 0,
        }} />
        {/* Smooth gradient blend edges */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to bottom, var(--cream-dark) 0%, rgba(243, 237, 228, 0.3) 15%, rgba(243, 237, 228, 0.3) 85%, var(--cream-dark) 100%)',
          pointerEvents: 'none',
          zIndex: 0,
        }} />

        <div className="section-wrap" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <span className="reveal tag tag-green" style={{ marginBottom: '16px' }}>See It Live</span>
            <h2 className="reveal heading-display heading-lg" style={{ color: 'var(--text-primary)', marginBottom: '18px' }}>
              What Your Customers See<br /><span className="gradient-text-green">When They Order</span>
            </h2>
            <p className="reveal" style={{ fontSize: '17px', color: 'var(--text-muted)', maxWidth: '520px', margin: '0 auto' }}>
              Kwikkit highlights restaurant transparency in the customer app through special trust indicators.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: '1.2fr 1fr',
            gap: '64px',
            alignItems: 'center',
            maxWidth: '1100px',
            margin: '0 auto',
          }} className="showcase-grid">
            {/* Left Column: Descriptions */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
              {[
                {
                  title: 'Lowest Price Guaranteed Badge',
                  badgeText: 'Lowest Price Guaranteed',
                  purpose: 'Shows menu prices match restaurant prices. Builds customer confidence and reinforces pricing transparency.',
                  icon: ShieldCheck,
                },
                {
                  title: '0% Markup on Menu Prices',
                  badgeText: '0% Markup on Menu Prices. Always.',
                  purpose: 'Displayed clearly below restaurant listings in search results. Increases customer trust, encourages exploration, and differentiates your restaurant.',
                  icon: Sparkles,
                },
                {
                  title: 'Platform Fee: ₹0.00 Display',
                  badgeText: 'Platform Fee: ₹0.00',
                  purpose: 'Visible during checkout to show customers they pay no platform markup or hidden charges. A direct commitment to transparent ordering.',
                  icon: Smartphone,
                }
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="reveal-left" style={{ transitionDelay: `${idx * 100}ms` }}>
                    <div style={{
                      background: 'var(--white)',
                      border: '1px solid rgba(0, 95, 87, 0.08)',
                      borderRadius: '20px',
                      padding: '28px 32px',
                      boxShadow: '0 8px 30px rgba(0,95,87,0.02)',
                      display: 'flex',
                      gap: '20px',
                    }}>
                      <div style={{
                        width: '44px',
                        height: '44px',
                        borderRadius: '12px',
                        background: 'rgba(0, 95, 87, 0.05)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--green)',
                        flexShrink: 0,
                      }}>
                        <Icon size={20} />
                      </div>

                      <div>
                        <h3 style={{
                          fontFamily: "'Syne', sans-serif",
                          fontWeight: '750',
                          fontSize: '17px',
                          color: 'var(--text-primary)',
                          marginBottom: '8px',
                        }}>
                          {item.title}
                        </h3>

                        {/* Visual Badge Simulation */}
                        <div style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '6px',
                          background: idx === 2 ? 'rgba(0, 155, 141, 0.08)' : 'rgba(255, 229, 0, 0.15)',
                          border: idx === 2 ? '1px solid rgba(0, 155, 141, 0.2)' : '1px solid rgba(255, 229, 0, 0.4)',
                          color: idx === 2 ? 'var(--green-dark)' : 'var(--green-dark)',
                          padding: '4px 12px',
                          borderRadius: '8px',
                          fontSize: '12px',
                          fontWeight: '800',
                          marginBottom: '12px',
                          fontFamily: idx === 2 ? 'monospace' : 'inherit'
                        }}>
                          <div style={{ width: '5px', height: '5px', borderRadius: '50%', background: idx === 2 ? 'var(--green)' : '#cc8500' }} />
                          {item.badgeText}
                        </div>

                        <p style={{
                          fontSize: '14px',
                          lineHeight: '1.65',
                          color: 'var(--text-muted)',
                        }}>
                          {item.purpose}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Right Column: Visual Simulated App UI */}
            <div className="reveal-right" style={{ display: 'flex', justifyContent: 'center' }}>
              <div style={{
                width: '320px',
                height: '600px',
                borderRadius: '40px',
                background: 'var(--dark)',
                border: '12px solid #1c2726',
                boxShadow: '0 30px 80px rgba(0,61,55,0.22)',
                position: 'relative',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
              }}>
                {/* Speaker & camera notch */}
                <div style={{
                  position: 'absolute',
                  top: '0',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '120px',
                  height: '24px',
                  background: '#1c2726',
                  borderRadius: '0 0 16px 16px',
                  zIndex: 10,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  <div style={{ width: '40px', height: '4px', background: '#0e1716', borderRadius: '2px', marginRight: '8px' }} />
                  <div style={{ width: '8px', height: '8px', background: '#0e1716', borderRadius: '50%' }} />
                </div>

                {/* Simulated Screen Content */}
                <div style={{
                  flex: 1,
                  background: 'var(--cream)',
                  padding: '36px 18px 18px',
                  overflowY: 'auto',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '16px',
                  fontSize: '12px',
                }}>
                  {/* App Header */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '10px', borderBottom: '1px solid rgba(0,95,87,0.06)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <MapPin size={12} color="var(--green)" />
                      <span style={{ fontWeight: '750', color: 'var(--green-dark)' }}>Sector 22, Chandigarh</span>
                    </div>
                    <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: 'var(--cream-dark)' }} />
                  </div>

                  {/* Search / Tag simulation */}
                  <div style={{ display: 'flex', gap: '6px' }}>
                    <span style={{ background: 'var(--green)', color: 'var(--cream)', padding: '4px 10px', borderRadius: '100px', fontSize: '10px', fontWeight: '700' }}>Biryani</span>
                    <span style={{ background: 'var(--cream-dark)', color: 'var(--text-muted)', padding: '4px 10px', borderRadius: '100px', fontSize: '10px' }}>Fast Food</span>
                    <span style={{ background: 'var(--cream-dark)', color: 'var(--text-muted)', padding: '4px 10px', borderRadius: '100px', fontSize: '10px' }}>North Indian</span>
                  </div>

                  {/* Restaurant Card Simulation */}
                  <div style={{
                    background: 'var(--white)',
                    borderRadius: '16px',
                    border: '1px solid rgba(0, 95, 87, 0.08)',
                    overflow: 'hidden',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.02)',
                  }}>
                    <div style={{
                      height: '100px',
                      backgroundImage: 'url(/dhaba-header.png)',
                      backgroundSize: 'cover',
                      backgroundPosition: 'center center',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      position: 'relative',
                    }}>
                      <div style={{ position: 'absolute', inset: 0, background: 'rgba(8, 15, 14, 0.45)' }} />
                      <span style={{ position: 'relative', zIndex: 1, color: 'var(--cream)', fontFamily: "'Syne', sans-serif", fontSize: '24px', fontWeight: '800', letterSpacing: '-0.02em', textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}>
                        DHABA 22
                      </span>
                    </div>
                    <div style={{ padding: '12px' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                        <span style={{ fontWeight: '750', fontSize: '14px', color: 'var(--text-primary)' }}>Dhaba 22</span>
                        <span style={{ background: 'rgba(0,155,141,0.1)', color: 'var(--green-light)', padding: '2px 6px', borderRadius: '4px', fontSize: '10px', fontWeight: '800' }}>4.8 ★</span>
                      </div>
                      <div style={{ color: 'var(--text-muted)', fontSize: '11px', marginBottom: '8px' }}>North Indian · Sector 22, Chandigarh</div>

                      {/* 0% Markup Tag */}
                      <div style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '4px',
                        background: 'rgba(255, 229, 0, 0.15)',
                        border: '1px solid rgba(255, 229, 0, 0.3)',
                        padding: '3px 8px',
                        borderRadius: '6px',
                        fontSize: '9.5px',
                        fontWeight: '800',
                        color: 'var(--green-dark)',
                      }}>
                        <div style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#b27400' }} />
                        0% Markup on Menu Prices. Always.
                      </div>
                    </div>
                  </div>

                  {/* Detail Item Box / Checkout simulation */}
                  <div style={{
                    background: 'var(--white)',
                    borderRadius: '16px',
                    border: '1px solid rgba(0, 95, 87, 0.08)',
                    padding: '12px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '8px',
                  }}>
                    <div style={{ fontWeight: '750', fontSize: '11px', textTransform: 'uppercase', color: 'var(--text-muted)' }}>Bill Summary</div>
                    
                    <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                      <div style={{
                        width: '36px',
                        height: '36px',
                        borderRadius: '6px',
                        backgroundImage: 'url(/paneer-tikka.png)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center center',
                        flexShrink: 0,
                      }} />
                      <div style={{ flex: 1 }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                          <span style={{ fontWeight: '600' }}>Paneer Tikka Butter Masala</span>
                          <span style={{ fontWeight: '700' }}>₹320.00</span>
                        </div>
                      </div>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'space-between', paddingLeft: '46px', color: 'var(--text-muted)' }}>
                      <span>Tandoori Roti x4</span>
                      <span style={{ fontWeight: '600' }}>₹60.00</span>
                    </div>

                    {/* Lowest Price Guaranteed Badge */}
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      background: 'rgba(0, 95, 87, 0.05)',
                      border: '1px solid rgba(0, 95, 87, 0.1)',
                      padding: '8px',
                      borderRadius: '8px',
                      marginTop: '4px',
                    }}>
                      <ShieldCheck size={14} color="var(--green)" />
                      <span style={{ fontSize: '10px', color: 'var(--green-dark)', fontWeight: '700' }}>Lowest Price Guaranteed</span>
                    </div>

                    <hr style={{ border: 'none', borderTop: '1px solid rgba(0,95,87,0.06)', margin: '4px 0' }} />

                    {/* Checkout Fees details */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--text-muted)' }}>
                      <span>Delivery Fee</span>
                      <span>₹30.00</span>
                    </div>

                    {/* Platform Fee: 0 */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--green)', fontWeight: '700' }}>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '3px' }}>
                        Platform Fee
                        <HelpCircle size={10} />
                      </span>
                      <span>₹0.00</span>
                    </div>

                    <hr style={{ border: 'none', borderTop: '1px dotted rgba(0,95,87,0.12)', margin: '4px 0' }} />

                    <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: '800', fontSize: '13px', color: 'var(--text-primary)' }}>
                      <span>Total to Pay</span>
                      <span>₹410.00</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <style>{`
          @media (max-width: 860px) {
            .showcase-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
          }
        `}</style>
      </section>

      {/* ═══════════════════════════════════════════════════
         SECTION 5 — RESTAURANT BENEFITS SUMMARY
      ═══════════════════════════════════════════════════ */}
      <section style={{ padding: '110px 0', background: 'var(--cream)' }}>
        <div className="section-wrap">
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <span className="reveal tag tag-green" style={{ marginBottom: '16px' }}>Summary Matrix</span>
            <h2 className="reveal heading-display heading-md" style={{ color: 'var(--text-primary)' }}>
              What Restaurants Gain
            </h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '16px',
            maxWidth: '1000px',
            margin: '0 auto',
          }}>
            {[
              '0% commission',
              'Full pricing control',
              'Better delivery margins',
              'Dedicated support',
              'Business analytics',
              'Fast onboarding',
              'Increased customer trust',
              'Transparent platform positioning'
            ].map((benefit, i) => (
              <div key={benefit} className="reveal-scale" style={{ transitionDelay: `${i * 50}ms` }}>
                <div style={{
                  padding: '24px 28px',
                  background: 'var(--white)',
                  border: '1px solid rgba(0, 95, 87, 0.05)',
                  borderRadius: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '14px',
                  boxShadow: '0 4px 20px rgba(0,95,87,0.01)',
                }}>
                  <div style={{
                    width: '28px',
                    height: '28px',
                    borderRadius: '50%',
                    background: 'rgba(0, 95, 87, 0.08)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--green)',
                    flexShrink: 0,
                  }}>
                    <Check size={14} strokeWidth={2.5} />
                  </div>
                  <span style={{ fontSize: '14.5px', fontWeight: '700', color: 'var(--text-primary)', letterSpacing: '-0.01em' }}>
                    {benefit}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
         SECTION 6 — CALL TO ACTION & FORM
      ═══════════════════════════════════════════════════ */}
      <section ref={formRef} style={{ padding: '120px 0', background: 'var(--dark)', position: 'relative', overflow: 'hidden' }}>
        {/* bg details */}
        <div style={{ position: 'absolute', top: '-20%', right: '-8%', width: '600px', height: '600px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(0,154,141,0.2) 0%, transparent 65%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: '-10%', left: '-5%', width: '500px', height: '500px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,229,0,0.04) 0%, transparent 65%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)', backgroundSize: '60px 60px', pointerEvents: 'none' }} />

        <div className="section-wrap" style={{ maxWidth: '780px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <span className="reveal tag tag-green-dark" style={{ marginBottom: '16px' }}>Get Listed</span>
            <h2 className="reveal heading-display heading-md" style={{ color: 'var(--cream)', marginBottom: '14px' }}>
              Partner with Kwikkit Today
            </h2>
            <p className="reveal" style={{ fontSize: '15.5px', color: 'rgba(253, 248, 242, 0.6)', maxWidth: '440px', margin: '0 auto' }}>
              Fill out the form below. Our restaurant partnership team will call you back within 24 hours.
            </p>
          </div>

          <div className="reveal" style={{
            background: 'var(--dark-2)',
            border: '1px solid rgba(255, 229, 0, 0.18)',
            borderRadius: '28px',
            padding: '48px clamp(24px, 6vw, 48px)',
            boxShadow: '0 10px 40px rgba(0,0,0,0.2)',
            position: 'relative',
          }}>
            {!formSubmitted ? (
              <form onSubmit={handleFormSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>

                {/* Row 1: Restaurant Name & Owner Name */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '12.5px', fontWeight: '750', color: 'var(--cream)', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                      Restaurant Name *
                    </label>
                    <input
                      type="text"
                      name="restaurantName"
                      placeholder="e.g. Spice Garden"
                      value={formData.restaurantName}
                      onChange={handleInputChange}
                      style={{
                        width: '100%',
                        padding: '14px 18px',
                        borderRadius: '12px',
                        border: errors.restaurantName ? '1px solid #ef4444' : '1px solid rgba(255, 255, 255, 0.15)',
                        background: 'rgba(255,255,255,0.05)',
                        fontSize: '15px',
                        color: 'var(--cream)',
                        outline: 'none',
                      }}
                    />
                    {errors.restaurantName && <div style={{ color: '#ef4444', fontSize: '12px', marginTop: '6px', display: 'flex', alignItems: 'center', gap: '4px' }}><AlertCircle size={12}/>{errors.restaurantName}</div>}
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '12.5px', fontWeight: '750', color: 'var(--cream)', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                      Owner / Contact Name *
                    </label>
                    <input
                      type="text"
                      name="ownerName"
                      placeholder="e.g. Harpreet Singh"
                      value={formData.ownerName}
                      onChange={handleInputChange}
                      style={{
                        width: '100%',
                        padding: '14px 18px',
                        borderRadius: '12px',
                        border: errors.ownerName ? '1px solid #ef4444' : '1px solid rgba(255, 255, 255, 0.15)',
                        background: 'rgba(255,255,255,0.05)',
                        fontSize: '15px',
                        color: 'var(--cream)',
                        outline: 'none',
                      }}
                    />
                    {errors.ownerName && <div style={{ color: '#ef4444', fontSize: '12px', marginTop: '6px', display: 'flex', alignItems: 'center', gap: '4px' }}><AlertCircle size={12}/>{errors.ownerName}</div>}
                  </div>
                </div>

                {/* Row 2: Phone Number & Address */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '12.5px', fontWeight: '750', color: 'var(--cream)', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="10-digit mobile number"
                      value={formData.phone}
                      onChange={handleInputChange}
                      style={{
                        width: '100%',
                        padding: '14px 18px',
                        borderRadius: '12px',
                        border: errors.phone ? '1px solid #ef4444' : '1px solid rgba(255, 255, 255, 0.15)',
                        background: 'rgba(255,255,255,0.05)',
                        fontSize: '15px',
                        color: 'var(--cream)',
                        outline: 'none',
                      }}
                    />
                    {errors.phone && <div style={{ color: '#ef4444', fontSize: '12px', marginTop: '6px', display: 'flex', alignItems: 'center', gap: '4px' }}><AlertCircle size={12}/>{errors.phone}</div>}
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '12.5px', fontWeight: '750', color: 'var(--cream)', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                      Restaurant Address *
                    </label>
                    <input
                      type="text"
                      name="address"
                      placeholder="Sector, Market, or Mall location"
                      value={formData.address}
                      onChange={handleInputChange}
                      style={{
                        width: '100%',
                        padding: '14px 18px',
                        borderRadius: '12px',
                        border: errors.address ? '1px solid #ef4444' : '1px solid rgba(255, 255, 255, 0.15)',
                        background: 'rgba(255,255,255,0.05)',
                        fontSize: '15px',
                        color: 'var(--cream)',
                        outline: 'none',
                      }}
                    />
                    {errors.address && <div style={{ color: '#ef4444', fontSize: '12px', marginTop: '6px', display: 'flex', alignItems: 'center', gap: '4px' }}><AlertCircle size={12}/>{errors.address}</div>}
                  </div>
                </div>

                {/* Row 3: Cuisine Type & Current Platform */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '12.5px', fontWeight: '750', color: 'var(--cream)', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                      Cuisine Type
                    </label>
                    <input
                      type="text"
                      name="cuisineType"
                      placeholder="e.g. North Indian, Chinese, Fast Food"
                      value={formData.cuisineType}
                      onChange={handleInputChange}
                      style={{
                        width: '100%',
                        padding: '14px 18px',
                        borderRadius: '12px',
                        border: '1px solid rgba(255, 255, 255, 0.15)',
                        background: 'rgba(255,255,255,0.05)',
                        fontSize: '15px',
                        color: 'var(--cream)',
                        outline: 'none',
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '12.5px', fontWeight: '750', color: 'var(--cream)', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                      Current Delivery Platform (if any)
                    </label>
                    <select
                      name="currentPlatform"
                      value={formData.currentPlatform}
                      onChange={handleInputChange}
                      style={{
                        width: '100%',
                        padding: '14px 18px',
                        borderRadius: '12px',
                        border: '1px solid rgba(255, 255, 255, 0.15)',
                        background: 'rgba(255,255,255,0.05)',
                        fontSize: '15px',
                        color: 'var(--cream)',
                        outline: 'none',
                        cursor: 'pointer',
                      }}
                    >
                      <option value="" style={{ color: 'var(--text-primary)' }}>Select option</option>
                      <option value="Not on any platform" style={{ color: 'var(--text-primary)' }}>Not on any platform</option>
                      <option value="Zomato" style={{ color: 'var(--text-primary)' }}>Zomato</option>
                      <option value="Swiggy" style={{ color: 'var(--text-primary)' }}>Swiggy</option>
                      <option value="Both" style={{ color: 'var(--text-primary)' }}>Both Zomato & Swiggy</option>
                      <option value="Other" style={{ color: 'var(--text-primary)' }}>Other</option>
                    </select>
                  </div>
                </div>

                {/* Additional Information */}
                <div>
                  <label style={{ display: 'block', fontSize: '12.5px', fontWeight: '750', color: 'var(--cream)', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                    Additional Information
                  </label>
                  <textarea
                    name="additionalInfo"
                    rows="3"
                    placeholder="Anything else you'd like us to know? Optional comments or business details."
                    value={formData.additionalInfo}
                    onChange={handleInputChange}
                    style={{
                      width: '100%',
                      padding: '14px 18px',
                      borderRadius: '12px',
                      border: '1px solid rgba(255, 255, 255, 0.15)',
                      background: 'rgba(255,255,255,0.05)',
                      fontSize: '15px',
                      color: 'var(--cream)',
                      outline: 'none',
                      resize: 'vertical',
                    }}
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  style={{
                    background: 'var(--yellow)',
                    color: 'var(--green-dark)',
                    padding: '16px 36px',
                    borderRadius: '100px',
                    fontWeight: '800',
                    fontSize: '15px',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'background-color 0.2s ease, transform 0.2s ease',
                    marginTop: '12px',
                    boxShadow: '0 6px 20px rgba(255, 229, 0, 0.15)',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '10px',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = ''; }}
                >
                  Submit — We'll Call You Back
                  <ArrowRight size={16} strokeWidth={2.5} />
                </button>
              </form>
            ) : (
              /* Success Screen */
              <div style={{ textAlign: 'center', padding: '36px 0', animation: 'successFadeIn 0.5s ease' }}>
                <div style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '50%',
                  background: 'rgba(255, 229, 0, 0.15)',
                  border: '1px solid rgba(255, 229, 0, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 24px',
                  color: 'var(--yellow)',
                }}>
                  <CheckCircle size={36} />
                </div>
                <h3 style={{
                  fontFamily: "'Syne', sans-serif",
                  fontWeight: '800',
                  fontSize: '24px',
                  color: 'var(--cream)',
                  marginBottom: '16px',
                }}>
                  Application Submitted!
                </h3>
                <p style={{
                  fontSize: '15px',
                  lineHeight: '1.75',
                  color: 'rgba(253, 248, 242, 0.65)',
                  maxWidth: '500px',
                  margin: '0 auto 36px',
                }}>
                  Thank you for your interest in Kwikkit. Our partner onboarding specialist will reach out to you within 24 hours.
                </p>

                {/* Steps Grid */}
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
                  gap: '16px',
                  maxWidth: '600px',
                  margin: '0 auto 40px',
                  textAlign: 'left',
                }}>
                  {[
                    { title: '1. Team Review', desc: 'We verify your details' },
                    { title: '2. Callback', desc: 'Walkthrough call' },
                    { title: '3. Setup', desc: 'No commitment onboard' }
                  ].map((step, idx) => (
                    <div key={idx} style={{
                      background: 'rgba(255,255,255,0.03)',
                      border: '1px solid rgba(255,255,255,0.06)',
                      padding: '16px',
                      borderRadius: '12px',
                    }}>
                      <div style={{ color: 'var(--yellow)', fontWeight: '750', fontSize: '12px', marginBottom: '4px' }}>{step.title}</div>
                      <div style={{ color: 'rgba(253,248,242,0.45)', fontSize: '11px', lineHeight: '1.4' }}>{step.desc}</div>
                    </div>
                  ))}
                </div>

                <button
                  onClick={resetForm}
                  style={{
                    background: 'transparent',
                    border: '2px solid var(--cream)',
                    color: 'var(--cream)',
                    padding: '12px 28px',
                    borderRadius: '100px',
                    fontSize: '14px',
                    fontWeight: '700',
                    cursor: 'pointer',
                    transition: 'background-color 0.2s ease, color 0.2s ease',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.backgroundColor = 'var(--cream)'; e.currentTarget.style.color = 'var(--dark)'; }}
                  onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = 'var(--cream)'; }}
                >
                  Submit another query
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Inline styles for scroll animations */}
      <style>{`
        @keyframes scrollLine {
          0% { opacity: 0; transform: scaleY(0); transform-origin: top }
          50% { opacity: 1; transform: scaleY(1) }
          100% { opacity: 0; transform: scaleY(1); transform-origin: bottom }
        }
        @keyframes successFadeIn {
          from { opacity: 0; transform: scale(0.96); }
          to { opacity: 1; transform: scale(1); }
        }
        .dot-blink {
          animation: blinkDot 1.6s ease infinite;
        }
        @keyframes blinkDot {
          0%, 100% { opacity: 1 }
          50% { opacity: 0.2 }
        }
      `}</style>
    </main>
  );
}
