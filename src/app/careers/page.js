'use client';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import {
  Briefcase,
  MapPin,
  Clock,
  Calendar,
  CheckCircle,
  FileText,
  Mail,
  Phone,
  ArrowRight,
  Shield,
  Star,
  Users,
  Compass,
  Download,
  AlertCircle
} from 'lucide-react';

/* ─── Scroll Reveal Hook ─────────────────────────── */
function useReveal(ref) {
  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}

export default function CareersPage() {
  const pageRef = useRef(null);
  const formRef = useRef(null);
  useReveal(pageRef);

  const [loaded, setLoaded] = useState(false);
  const [selectedRole, setSelectedRole] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    portfolio: '',
    linkedin: '',
    whyKwikkit: '',
  });

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 80);
    return () => clearTimeout(timer);
  }, []);

  const roles = [
    {
      title: 'Frontend Developer',
      type: 'Full-time',
      location: 'Chandigarh / Remote',
      desc: 'Build the customer-facing web experience. Own the ordering flow, restaurant pages, and key user interactions customers use every day.',
      skills: ['React', 'TypeScript', 'CSS / Tailwind CSS', 'Performance Optimization'],
    },
    {
      title: 'Full Stack Developer',
      type: 'Full-time',
      location: 'Chandigarh / Remote',
      desc: 'Work across the entire technology stack including APIs, backend services, database architecture, and integrations that power order processing.',
      skills: ['Node.js / Python', 'PostgreSQL', 'REST APIs', 'DevOps'],
    },
    {
      title: 'Flutter Developer',
      type: 'Full-time',
      location: 'Chandigarh / Remote',
      desc: 'Build and improve mobile applications for iOS and Android that customers use to place and track orders.',
      skills: ['Flutter / Dart', 'Bloc / Riverpod', 'App Store Deployment', 'Google Play Deployment'],
    },
    {
      title: 'Finance Professional',
      type: 'Full-time',
      location: 'Chandigarh',
      desc: 'Manage financial operations including settlements, reconciliation, compliance, and financial planning for business expansion.',
      skills: ['Financial Modelling', 'Reconciliation', 'Compliance', 'Startup Finance'],
    }
  ];

  const handleApplyClick = (roleTitle) => {
    setSelectedRole(roleTitle);
    formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

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

    if (!formData.fullName.trim()) newErrors.fullName = 'Full Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email Address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!selectedRole) newErrors.role = 'Please select a role';
    if (!formData.whyKwikkit.trim()) {
      newErrors.whyKwikkit = 'Please tell us why you want to join Kwikkit';
    } else if (formData.whyKwikkit.trim().split(/\s+/).length < 10) {
      newErrors.whyKwikkit = 'Please write at least 2-3 sentences';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }

    setFormSubmitted(true);
  };

  const resetForm = () => {
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      portfolio: '',
      linkedin: '',
      whyKwikkit: '',
    });
    setSelectedRole('');
    setFormSubmitted(false);
    setErrors({});
  };

  return (
    <main ref={pageRef} style={{ background: 'var(--cream)', minHeight: '100vh', overflowX: 'hidden' }}>

      {/* ═══════════════════════════════════════════════════
         SECTION 1 — HERO SECTION
      ═══════════════════════════════════════════════════ */}
      <section style={{ position: 'relative', minHeight: '92vh', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>

        {/* ── Background ── */}
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <Image
            src="/herobg/career-herobg.png"
            alt=""
            fill priority
            sizes="100vw"
            style={{ objectFit: 'cover', objectPosition: 'center 30%' }}
          />
          {/* heavy dark overlay */}
          <div style={{ position: 'absolute', inset: 0, background: 'rgba(3,11,10,0.8)' }} />
          {/* grid pattern */}
          <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)', backgroundSize: '64px 64px', pointerEvents: 'none' }} />
          {/* green glow bloom */}
          <div style={{ position: 'absolute', bottom: '-60px', left: '50%', transform: 'translateX(-50%)', width: '1000px', height: '500px', background: 'radial-gradient(ellipse, rgba(0,95,87,0.18) 0%, transparent 68%)', pointerEvents: 'none' }} />
          {/* yellow accent orb */}
          <div style={{ position: 'absolute', top: '20%', right: '10%', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(255,229,0,0.04) 0%, transparent 65%)', pointerEvents: 'none' }} />
        </div>

        {/* ── Content ── */}
        <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', padding: '140px 28px 80px', maxWidth: '820px', margin: '0 auto', width: '100%' }}>

          {/* Eyebrow */}
          <div style={{
            opacity: loaded ? 1 : 0, transform: loaded ? 'translateY(0)' : 'translateY(24px)',
            transition: 'opacity 0.7s ease 0.05s, transform 0.7s ease 0.05s',
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            background: 'rgba(255,229,0,0.09)', border: '1px solid rgba(255,229,0,0.22)',
            padding: '6px 18px', borderRadius: '100px', marginBottom: '32px',
            fontSize: '11px', fontWeight: '700', color: 'var(--yellow)', letterSpacing: '0.1em', textTransform: 'uppercase'
          }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--yellow)', display: 'inline-block', animation: 'blinkY 1.6s ease infinite' }} />
            We're Hiring
          </div>

          {/* Headline */}
          <h1 style={{
            opacity: loaded ? 1 : 0, transform: loaded ? 'translateY(0)' : 'translateY(24px)',
            transition: 'opacity 0.7s ease 0.15s, transform 0.7s ease 0.15s',
            fontFamily: "'Syne', sans-serif", fontWeight: '800',
            fontSize: 'clamp(28px,5.8vw,80px)', lineHeight: '1.05', letterSpacing: '-0.03em',
            color: 'var(--cream)', maxWidth: '980px', margin: '0 auto 28px'
          }}>
            Join Kwikkit.<br />
            <span style={{
              background: 'linear-gradient(90deg, var(--yellow) 0%, #fffaaa 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>Fix food delivery.</span>
          </h1>

          {/* Subtitle / Description */}
          <p style={{
            opacity: loaded ? 1 : 0, transform: loaded ? 'translateY(0)' : 'translateY(24px)',
            transition: 'opacity 0.7s ease 0.28s, transform 0.7s ease 0.28s',
            fontSize: '18px', lineHeight: '1.75', color: 'rgba(253,248,242,0.5)', maxWidth: '720px', margin: '0 auto 48px'
          }}>
            We're a small team with a real mission: make food delivery honest. If you want to own your work, see real impact, and build something that matters, Kwikkit is the place to do it.
          </p>

          {/* Scroll hint */}
          <div style={{
            opacity: loaded ? 1 : 0, transform: loaded ? 'translateY(0)' : 'translateY(24px)',
            transition: 'opacity 0.7s ease 0.4s, transform 0.7s ease 0.4s',
            marginTop: '80px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px'
          }}>
            <span style={{ fontSize: '10px', color: 'rgba(253,248,242,0.25)', letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: '600' }}>Openings</span>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '3px', animation: 'chevDrop 2.2s ease-in-out infinite' }}>
              {[0, 1].map(i => (
                <svg key={i} width="16" height="10" viewBox="0 0 16 10" fill="none" style={{ opacity: 0.4 - i * 0.15 }}>
                  <path d="M1 1l7 7 7-7" stroke="var(--yellow)" strokeWidth="2" strokeLinecap="round" />
                </svg>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
         SECTION 2 — OPEN ROLES SECTION
      ═══════════════════════════════════════════════════ */}
      <section style={{ padding: '120px 0', background: 'var(--cream)' }}>
        <div className="section-wrap">
          <div style={{ textAlign: 'center', marginBottom: '72px' }}>
            <span className="reveal tag tag-green" style={{ marginBottom: '16px' }}>Opportunities</span>
            <h2 className="reveal heading-display heading-lg" style={{ color: 'var(--text-primary)', marginBottom: '16px' }}>
              Current <span className="gradient-text-green">Openings</span>
            </h2>
            <p className="reveal" style={{ fontSize: '16px', color: 'var(--text-muted)', maxWidth: '440px', margin: '0 auto' }}>
              Find your role and help us construct a fairer ecosystem.
            </p>
          </div>

          {/* Grid of roles */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '24px',
            maxWidth: '1100px',
            margin: '0 auto'
          }}>
            {roles.map((r, i) => (
              <div key={r.title} className="reveal-scale" style={{ transitionDelay: `${i * 80}ms` }}>
                <div
                  className="surface-card"
                  style={{
                    padding: '36px',
                    height: '100%',
                    background: 'var(--white)',
                    border: '1px solid rgba(0, 95, 87, 0.06)',
                    borderRadius: '24px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    boxShadow: '0 8px 30px rgba(0,95,87,0.03)',
                    transition: 'transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.transform = 'translateY(-6px)';
                    e.currentTarget.style.borderColor = 'rgba(0, 95, 87, 0.18)';
                    e.currentTarget.style.boxShadow = '0 16px 40px rgba(0, 95, 87, 0.08)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.transform = '';
                    e.currentTarget.style.borderColor = 'rgba(0, 95, 87, 0.06)';
                    e.currentTarget.style.boxShadow = '0 8px 30px rgba(0,95,87,0.03)';
                  }}
                >
                  <div>
                    {/* Header: Title & Meta */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
                      <div>
                        <h3 style={{
                          fontFamily: "'Syne', sans-serif",
                          fontWeight: '800',
                          fontSize: '20px',
                          color: 'var(--text-primary)',
                          lineHeight: '1.3',
                        }}>
                          {r.title}
                        </h3>
                        <div style={{ display: 'flex', gap: '8px', alignItems: 'center', marginTop: '8px' }}>
                          <span style={{
                            fontSize: '11px',
                            fontWeight: '700',
                            color: 'var(--green)',
                            background: 'rgba(0, 95, 87, 0.06)',
                            padding: '3px 10px',
                            borderRadius: '100px',
                            textTransform: 'uppercase',
                          }}>{r.type}</span>
                          <span style={{ fontSize: '13px', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                            <MapPin size={12} color="var(--green-light)" />
                            {r.location}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p style={{
                      fontSize: '14px',
                      lineHeight: '1.7',
                      color: 'var(--text-muted)',
                      marginBottom: '28px',
                    }}>
                      {r.desc}
                    </p>

                    {/* Skills required */}
                    <div style={{ marginBottom: '32px' }}>
                      <div style={{ fontSize: '12px', fontWeight: '750', color: 'var(--text-primary)', marginBottom: '10px', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                        Required Skills
                      </div>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                        {r.skills.map(s => (
                          <span key={s} style={{
                            fontSize: '12px',
                            fontWeight: '600',
                            color: 'var(--text-muted)',
                            background: 'var(--cream-dark)',
                            padding: '4px 10px',
                            borderRadius: '8px',
                            border: '1px solid rgba(0,95,87,0.04)',
                          }}>
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Apply Button */}
                  <button
                    onClick={() => handleApplyClick(r.title)}
                    style={{
                      width: '100%',
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px',
                      background: 'var(--green)',
                      color: 'var(--cream)',
                      padding: '12px 20px',
                      borderRadius: '12px',
                      fontWeight: '700',
                      fontSize: '14px',
                      border: 'none',
                      cursor: 'pointer',
                      transition: 'background-color 0.2s ease, transform 0.2s ease',
                    }}
                    onMouseEnter={e => { e.currentTarget.style.backgroundColor = 'var(--green-mid)'; }}
                    onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'var(--green)'; }}
                  >
                    Apply Now
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
         SECTION 3 — WHY WORK HERE SECTION
      ═══════════════════════════════════════════════════ */}
      <section style={{
        background: 'var(--dark-2)',
        padding: '110px 0',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Glow decoration */}
        <div style={{ position: 'absolute', top: '-10%', left: '-5%', width: '500px', height: '500px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(0, 154, 141, 0.15) 0%, transparent 65%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: '-15%', right: '-10%', width: '600px', height: '600px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(255, 229, 0, 0.04) 0%, transparent 65%)', pointerEvents: 'none' }} />

        <div className="section-wrap">
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <span className="reveal tag tag-green-dark" style={{ marginBottom: '16px' }}>Our Culture</span>
            <h2 className="reveal heading-display heading-lg" style={{ color: 'var(--cream)', marginBottom: '18px' }}>
              Why People Join <span style={{
                background: 'linear-gradient(90deg, var(--yellow) 0%, #fff9a0 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>Kwikkit</span>
            </h2>
            <p className="reveal" style={{ fontSize: '17px', lineHeight: '1.7', color: 'rgba(253, 248, 242, 0.5)', maxWidth: '480px', margin: '0 auto' }}>
              We value mission alignment, ownership, and immediate real-world results.
            </p>
          </div>

          {/* Grid of why points */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '24px',
            maxWidth: '1080px',
            margin: '0 auto',
          }}>
            {[
              {
                title: "You're Rebuilding the System",
                icon: Shield,
                color: 'var(--yellow)',
                border: 'rgba(255, 229, 0, 0.18)',
                points: [
                  "Most companies operate within the existing food delivery ecosystem.",
                  "Kwikkit is working to challenge a model that has been unfair to restaurants and customers for years."
                ]
              },
              {
                title: "Own Your Work End-to-End",
                icon: Users,
                color: 'var(--green-light)',
                border: 'rgba(0, 155, 141, 0.2)',
                points: [
                  "Small team environment with a high ownership culture.",
                  "Direct product impact and transparent visibility into business results."
                ]
              },
              {
                title: "A Mission That Creates Real Impact",
                icon: Star,
                color: '#a78bfa',
                border: 'rgba(167, 139, 250, 0.2)',
                points: [
                  "When restaurant partners save significant money in commissions, the impact is tangible and immediate.",
                  "The mission directly benefits local businesses and customers in our community."
                ]
              }
            ].map((p, i) => {
              const Icon = p.icon;
              return (
                <div key={p.title} className="reveal-scale" style={{ transitionDelay: `${i * 80}ms` }}>
                  <div
                    style={{
                      padding: '40px 32px',
                      borderRadius: '24px',
                      height: '100%',
                      background: 'rgba(255, 255, 255, 0.04)',
                      border: `1px solid ${p.border}`,
                      backdropFilter: 'blur(12px)',
                      transition: 'transform 0.35s ease, background 0.35s ease',
                      cursor: 'default',
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.transform = 'translateY(-6px)';
                      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.07)';
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.transform = '';
                      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.04)';
                    }}
                  >
                    <div style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '14px',
                      background: 'rgba(255,255,255,0.06)',
                      border: `1px solid ${p.border}`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '24px',
                    }}>
                      <Icon size={22} color={p.color} />
                    </div>

                    <h3 style={{
                      fontFamily: "'Syne', sans-serif",
                      fontWeight: '700',
                      fontSize: '19px',
                      color: 'var(--cream)',
                      marginBottom: '20px',
                      letterSpacing: '-0.01em',
                    }}>
                      {p.title}
                    </h3>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                      {p.points.map((pt, idx) => (
                        <div key={idx} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                          <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: p.color, marginTop: '7px', flexShrink: 0 }} />
                          <p style={{ fontSize: '13.5px', lineHeight: '1.6', color: 'rgba(253, 248, 242, 0.55)', margin: 0 }}>{pt}</p>
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

      {/* ═══════════════════════════════════════════════════
         SECTION 4 — APPLICATION FORM SECTION
      ═══════════════════════════════════════════════════ */}
      <section ref={formRef} style={{ padding: '120px 0', background: 'var(--cream)' }}>
        <div className="section-wrap" style={{ maxWidth: '780px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <span className="reveal tag tag-green" style={{ marginBottom: '16px' }}>Join the team</span>
            <h2 className="reveal heading-display heading-md" style={{ color: 'var(--text-primary)', marginBottom: '12px' }}>
              Tell Us About Yourself
            </h2>
            <p className="reveal" style={{ fontSize: '15px', color: 'var(--text-muted)' }}>
              Complete the form below. We review every application personally.
            </p>
          </div>

          <div className="reveal" style={{
            background: 'var(--white)',
            border: '1px solid rgba(0, 95, 87, 0.08)',
            borderRadius: '28px',
            padding: '48px clamp(24px, 6vw, 48px)',
            boxShadow: '0 10px 40px rgba(0,95,87,0.03)',
            position: 'relative',
          }}>
            {!formSubmitted ? (
              <form onSubmit={handleFormSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>

                {/* Row 1: Name & Email */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: '750', color: 'var(--text-primary)', marginBottom: '8px', textTransform: 'uppercase' }}>
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      placeholder="Applicant Name"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      style={{
                        width: '100%',
                        padding: '14px 18px',
                        borderRadius: '12px',
                        border: errors.fullName ? '1px solid #ef4444' : '1px solid rgba(0, 95, 87, 0.15)',
                        background: 'var(--cream-dark)',
                        fontSize: '15px',
                        color: 'var(--text-primary)',
                        outline: 'none',
                      }}
                    />
                    {errors.fullName && <div style={{ color: '#ef4444', fontSize: '12px', marginTop: '6px', display: 'flex', alignItems: 'center', gap: '4px' }}><AlertCircle size={12} />{errors.fullName}</div>}
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: '750', color: 'var(--text-primary)', marginBottom: '8px', textTransform: 'uppercase' }}>
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={handleInputChange}
                      style={{
                        width: '100%',
                        padding: '14px 18px',
                        borderRadius: '12px',
                        border: errors.email ? '1px solid #ef4444' : '1px solid rgba(0, 95, 87, 0.15)',
                        background: 'var(--cream-dark)',
                        fontSize: '15px',
                        color: 'var(--text-primary)',
                        outline: 'none',
                      }}
                    />
                    {errors.email && <div style={{ color: '#ef4444', fontSize: '12px', marginTop: '6px', display: 'flex', alignItems: 'center', gap: '4px' }}><AlertCircle size={12} />{errors.email}</div>}
                  </div>
                </div>

                {/* Row 2: Phone & Role */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: '750', color: 'var(--text-primary)', marginBottom: '8px', textTransform: 'uppercase' }}>
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Contact Number"
                      value={formData.phone}
                      onChange={handleInputChange}
                      style={{
                        width: '100%',
                        padding: '14px 18px',
                        borderRadius: '12px',
                        border: '1px solid rgba(0, 95, 87, 0.15)',
                        background: 'var(--cream-dark)',
                        fontSize: '15px',
                        color: 'var(--text-primary)',
                        outline: 'none',
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: '750', color: 'var(--text-primary)', marginBottom: '8px', textTransform: 'uppercase' }}>
                      Role You're Applying For *
                    </label>
                    <select
                      name="role"
                      value={selectedRole}
                      onChange={(e) => {
                        setSelectedRole(e.target.value);
                        if (errors.role) setErrors(prev => ({ ...prev, role: '' }));
                      }}
                      style={{
                        width: '100%',
                        padding: '14px 18px',
                        borderRadius: '12px',
                        border: errors.role ? '1px solid #ef4444' : '1px solid rgba(0, 95, 87, 0.15)',
                        background: 'var(--cream-dark)',
                        fontSize: '15px',
                        color: 'var(--text-primary)',
                        outline: 'none',
                        cursor: 'pointer',
                        appearance: 'none',
                      }}
                    >
                      <option value="">Select a role</option>
                      <option value="Frontend Developer">Frontend Developer</option>
                      <option value="Full Stack Developer">Full Stack Developer</option>
                      <option value="Flutter Developer">Flutter Developer</option>
                      <option value="Finance Professional">Finance Professional</option>
                    </select>
                    {errors.role && <div style={{ color: '#ef4444', fontSize: '12px', marginTop: '6px', display: 'flex', alignItems: 'center', gap: '4px' }}><AlertCircle size={12} />{errors.role}</div>}
                  </div>
                </div>

                {/* Row 3: Portfolio & Github */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: '750', color: 'var(--text-primary)', marginBottom: '8px', textTransform: 'uppercase' }}>
                      LinkedIn or Portfolio URL
                    </label>
                    <input
                      type="url"
                      name="portfolio"
                      placeholder="Portfolio Website"
                      value={formData.portfolio}
                      onChange={handleInputChange}
                      style={{
                        width: '100%',
                        padding: '14px 18px',
                        borderRadius: '12px',
                        border: '1px solid rgba(0, 95, 87, 0.15)',
                        background: 'var(--cream-dark)',
                        fontSize: '15px',
                        color: 'var(--text-primary)',
                        outline: 'none',
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: '750', color: 'var(--text-primary)', marginBottom: '8px', textTransform: 'uppercase' }}>
                      GitHub Profile
                    </label>
                    <input
                      type="url"
                      name="linkedin"
                      placeholder="GitHub or LinkedIn Profile"
                      value={formData.linkedin}
                      onChange={handleInputChange}
                      style={{
                        width: '100%',
                        padding: '14px 18px',
                        borderRadius: '12px',
                        border: '1px solid rgba(0, 95, 87, 0.15)',
                        background: 'var(--cream-dark)',
                        fontSize: '15px',
                        color: 'var(--text-primary)',
                        outline: 'none',
                      }}
                    />
                  </div>
                </div>

                {/* Textarea: Why Kwikkit */}
                <div>
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: '750', color: 'var(--text-primary)', marginBottom: '8px', textTransform: 'uppercase' }}>
                    Why Kwikkit? (2–3 Sentences) *
                  </label>
                  <textarea
                    name="whyKwikkit"
                    rows="4"
                    placeholder="Describe what excites you about Kwikkit, why you want to join, and how you connect with our transparency mission."
                    value={formData.whyKwikkit}
                    onChange={handleInputChange}
                    style={{
                      width: '100%',
                      padding: '14px 18px',
                      borderRadius: '12px',
                      border: errors.whyKwikkit ? '1px solid #ef4444' : '1px solid rgba(0, 95, 87, 0.15)',
                      background: 'var(--cream-dark)',
                      fontSize: '15px',
                      color: 'var(--text-primary)',
                      outline: 'none',
                      resize: 'vertical',
                      lineHeight: '1.6',
                    }}
                  />
                  {errors.whyKwikkit && <div style={{ color: '#ef4444', fontSize: '12px', marginTop: '6px', display: 'flex', alignItems: 'center', gap: '4px' }}><AlertCircle size={12} />{errors.whyKwikkit}</div>}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  style={{
                    background: 'var(--green-dark)',
                    color: 'var(--cream)',
                    padding: '16px 28px',
                    borderRadius: '100px',
                    fontWeight: '700',
                    fontSize: '15px',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'background-color 0.2s ease, transform 0.2s ease',
                    marginTop: '12px',
                    boxShadow: '0 6px 20px rgba(0, 61, 55, 0.15)',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.backgroundColor = 'var(--green)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                  onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'var(--green-dark)'; e.currentTarget.style.transform = ''; }}
                >
                  Submit Application
                </button>
              </form>
            ) : (
              /* Success Screen */
              <div style={{ textAlign: 'center', padding: '24px 0', animation: 'successFadeIn 0.5s ease' }}>
                <div style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '50%',
                  background: 'rgba(0, 95, 87, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 24px',
                  color: 'var(--green)',
                }}>
                  <CheckCircle size={36} />
                </div>
                <h3 style={{
                  fontFamily: "'Syne', sans-serif",
                  fontWeight: '800',
                  fontSize: '24px',
                  color: 'var(--green-dark)',
                  marginBottom: '16px',
                }}>
                  Application Submitted!
                </h3>
                <p style={{
                  fontSize: '15px',
                  lineHeight: '1.7',
                  color: 'var(--text-muted)',
                  maxWidth: '480px',
                  margin: '0 auto 36px',
                }}>
                  Thank you for applying. Candidate information is reviewed by the hiring team for the selected position. We will get in touch with you shortly.
                </p>
                <button
                  onClick={resetForm}
                  style={{
                    background: 'transparent',
                    border: '2px solid var(--green)',
                    color: 'var(--green)',
                    padding: '12px 28px',
                    borderRadius: '100px',
                    fontSize: '14px',
                    fontWeight: '700',
                    cursor: 'pointer',
                    transition: 'background-color 0.2s ease, color 0.2s ease',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.backgroundColor = 'var(--green)'; e.currentTarget.style.color = 'var(--cream)'; }}
                  onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = 'var(--green)'; }}
                >
                  Apply for another role
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
         SECTION 5 — AVAILABILITY / DOWNLOAD SECTION
      ═══════════════════════════════════════════════════ */}
      <section style={{
        background: 'var(--cream)',
        padding: '110px 0',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Soft Radial Grid */}
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: '900px', height: '900px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(0,95,87,0.04) 0%, transparent 60%)', pointerEvents: 'none' }} />

        <div className="section-wrap" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{
            background: 'var(--dark)',
            borderRadius: '36px',
            padding: 'clamp(48px, 6vw, 80px) clamp(24px, 5vw, 64px)',
            position: 'relative',
            overflow: 'hidden',
            textAlign: 'center',
          }}>
            {/* Card backgrounds */}
            <div style={{ position: 'absolute', top: '-40px', right: '-40px', width: '280px', height: '280px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,229,0,0.06) 0%, transparent 65%)', pointerEvents: 'none' }} />
            <div style={{ position: 'absolute', bottom: '-60px', left: '-60px', width: '320px', height: '320px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(0,122,110,0.18) 0%, transparent 65%)', pointerEvents: 'none' }} />

            <div style={{ position: 'relative', zIndex: 1 }}>
              {/* Region Tag */}
              <div className="reveal" style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: 'rgba(0, 95, 87, 0.22)',
                border: '1px solid rgba(0, 155, 141, 0.28)',
                padding: '6px 18px',
                borderRadius: '100px',
                marginBottom: '28px',
              }}>
                <MapPin size={13} color="var(--green-light)" />
                <span style={{ fontSize: '11px', fontWeight: '700', color: 'var(--green-light)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                  Available Now in Chandigarh Tricity
                </span>
              </div>

              <h2 className="reveal heading-display heading-lg" style={{ color: 'var(--cream)', marginBottom: '16px' }}>
                Download the Kwikkit app.<br />
                <span style={{ background: 'linear-gradient(90deg, var(--yellow) 0%, #fff9a0 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                  Real food, original prices.
                </span>
              </h2>

              <p className="reveal" style={{ fontSize: '16px', lineHeight: '1.65', color: 'rgba(253, 248, 242, 0.55)', maxWidth: '440px', margin: '0 auto 48px' }}>
                No artificial markup, no platform commissions. Get your favorite meals from trusted restaurants in Chandigarh, Panchkula & Mohali.
              </p>

              {/* Download Buttons Row */}
              <div className="reveal" style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap', marginBottom: '24px' }}>
                <a href="https://apps.apple.com/in/app/kwikkit-food-delivery/id6759088912"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '12px',
                    background: 'var(--cream)',
                    color: 'var(--green-dark)',
                    padding: '14px 28px',
                    borderRadius: '16px',
                    textDecoration: 'none',
                    fontWeight: '700',
                    fontSize: '15px',
                    boxShadow: '0 8px 32px rgba(0,0,0,0.15)',
                    transition: 'transform 0.3s cubic-bezier(.34,1.56,.64,1), box-shadow 0.3s ease',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 16px 48px rgba(0,0,0,0.25)'; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '0 8px 32px rgba(0,0,0,0.15)'; }}
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="var(--green-dark)" style={{ flexShrink: 0 }}>
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98l-.09.06c-.22.14-2.22 1.3-2.2 3.88.03 3.02 2.65 4.03 2.68 4.04l-.03.1zM13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                  </svg>
                  <div style={{ textAlign: 'left' }}>
                    <div style={{ fontSize: '11px', opacity: 0.6, fontWeight: '500', lineHeight: '1.2' }}>Download on the</div>
                    <div style={{ fontSize: '15px', lineHeight: '1.2' }}>App Store</div>
                  </div>
                </a>

                <a href="https://play.google.com/store/apps/details?id=com.kwikkitcustomer.kwikkitcustomerapp"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '12px',
                    background: 'rgba(255,255,255,0.06)',
                    border: '1px solid rgba(255,255,255,0.16)',
                    backdropFilter: 'blur(8px)',
                    color: 'var(--cream)',
                    padding: '14px 28px',
                    borderRadius: '16px',
                    textDecoration: 'none',
                    fontWeight: '700',
                    fontSize: '15px',
                    transition: 'transform 0.3s cubic-bezier(.34,1.56,.64,1), background 0.3s ease',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.background = 'rgba(255,255,255,0.12)'; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.background = 'rgba(255,255,255,0.06)'; }}
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="var(--cream)" style={{ flexShrink: 0 }}>
                    <path d="M3.18 23.76c.3.17.65.19.98.07L14.94 12 3.16.17C2.83.05 2.48.07 2.18.24 1.6.57 1.25 1.2 1.25 1.93v20.14c0 .73.35 1.36.93 1.69zM16.34 13.19l2.69 2.69-9.14 5.08 6.45-7.77zM20.7 9.99l-2.26-1.26-3.1 3.1 3.1 3.1 2.28-1.27c.65-.36 1.04-.97 1.04-1.67s-.39-1.29-1.06-1.9zM9.89 12L3.44 3.04l9.14 5.08-2.69 2.69V12z" />
                  </svg>
                  <div style={{ textAlign: 'left' }}>
                    <div style={{ fontSize: '11px', opacity: 0.6, fontWeight: '500', lineHeight: '1.2' }}>Get it on</div>
                    <div style={{ fontSize: '15px', lineHeight: '1.2' }}>Google Play</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Inline styles for scrolling reveal and success transition */}
      <style>{`
        @keyframes successFadeIn {
          from {
            opacity: 0;
            transform: scale(0.96);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        @keyframes blinkY { 0%,100%{opacity:1} 50%{opacity:0.25} }
        @keyframes chevDrop { 0%,100%{transform:translateY(0)} 50%{transform:translateY(6px)} }
      `}</style>
    </main>
  );
}
