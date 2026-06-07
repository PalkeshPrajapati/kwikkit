'use client';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Mail, Phone, Clock, MapPin, CheckCircle, ArrowRight,
  Shield, HelpCircle, Users, Building2, AlertCircle
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

export default function ContactPage() {
  const pageRef = useRef(null);
  const formRef = useRef(null);
  useReveal(pageRef);

  const [loaded, setLoaded] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
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

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};
    setSubmitError('');

    if (!formData.name.trim()) newErrors.name = 'Full Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email Address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Please tell us a bit more (minimum 10 characters)';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch('/api/submit-form', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          formType: 'contact',
          ...formData
        })
      });

      const result = await response.json();
      if (!response.ok) {
        throw new Error(result.error || 'Something went wrong. Please try again.');
      }

      setFormSubmitted(true);
    } catch (err) {
      setSubmitError(err.message || 'Failed to submit form. Please check your connection and try again.');
      formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
    setFormSubmitted(false);
    setErrors({});
    setSubmitError('');
    setIsSubmitting(false);
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
            src="/herobg/contact-herobg.png"
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
            Contact Center
          </div>

          {/* Headline */}
          <h1 style={{
            opacity: loaded ? 1 : 0, transform: loaded ? 'translateY(0)' : 'translateY(24px)',
            transition: 'opacity 0.7s ease 0.15s, transform 0.7s ease 0.15s',
            fontFamily: "'Syne', sans-serif", fontWeight: '800',
            fontSize: 'clamp(28px,5.8vw,80px)', lineHeight: '1.05', letterSpacing: '-0.03em',
            color: 'var(--cream)', maxWidth: '980px', margin: '0 auto 28px'
          }}>
            Get in touch with<br />
            <span style={{
              background: 'linear-gradient(90deg, var(--yellow) 0%, #fffaaa 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>Kwikkit.</span>
          </h1>

          {/* Subtitle / Description */}
          <p style={{
            opacity: loaded ? 1 : 0, transform: loaded ? 'translateY(0)' : 'translateY(24px)',
            transition: 'opacity 0.7s ease 0.28s, transform 0.7s ease 0.28s',
            fontSize: '18px', lineHeight: '1.75', color: 'rgba(253,248,242,0.5)', maxWidth: '720px', margin: '0 auto 48px'
          }}>
            Have questions about your order, interested in a restaurant partnership, or looking to apply for an open job role? Choose your path below.
          </p>

          {/* Scroll hint */}
          <div style={{
            opacity: loaded ? 1 : 0, transform: loaded ? 'translateY(0)' : 'translateY(24px)',
            transition: 'opacity 0.7s ease 0.4s, transform 0.7s ease 0.4s',
            marginTop: '80px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px'
          }}>
            <span style={{ fontSize: '10px', color: 'rgba(253, 248, 242, 0.25)', letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: '600' }}>Scroll to explore</span>
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
         SECTION 2 — INTENT DIRECTORY CARDS
      ═══════════════════════════════════════════════════ */}
      <section style={{ padding: '80px 0 40px', background: 'var(--cream)' }}>
        <div className="section-wrap" style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '28px', marginBottom: '40px' }} className="intent-grid">
            {/* Restaurant Card */}
            <div style={{
              background: 'var(--white)',
              border: '1px solid rgba(0, 95, 87, 0.06)',
              borderRadius: '24px',
              padding: '36px',
              boxShadow: '0 8px 30px rgba(0,95,87,0.02)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              transition: 'transform 0.3s ease, border-color 0.3s ease',
            }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.borderColor = 'rgba(0, 95, 87, 0.15)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.borderColor = 'rgba(0, 95, 87, 0.06)'; }}
            >
              <div>
                <div style={{
                  width: '48px', height: '48px', borderRadius: '12px',
                  background: 'rgba(0, 95, 87, 0.05)', color: 'var(--green)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px'
                }}>
                  <Building2 size={22} />
                </div>
                <h3 style={{ fontFamily: "'Syne', sans-serif", fontWeight: '800', fontSize: '20px', color: 'var(--text-primary)', marginBottom: '10px' }}>
                  Restaurant Partnership
                </h3>
                <p style={{ fontSize: '14.5px', color: 'var(--text-muted)', lineHeight: '1.65', marginBottom: '28px' }}>
                  Join Chandigarh's only zero-commission food delivery network. Keep 100% of your menu prices and go live in 24 hours.
                </p>
              </div>
              <Link href="/restaurants#form" style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                background: 'var(--green-dark)', color: 'var(--cream)',
                padding: '12px 24px', borderRadius: '12px',
                fontWeight: '750', fontSize: '14px', textDecoration: 'none',
                transition: 'background-color 0.2s ease', alignSelf: 'flex-start'
              }}
                onMouseEnter={e => e.currentTarget.style.backgroundColor = 'var(--green)'}
                onMouseLeave={e => e.currentTarget.style.backgroundColor = 'var(--green-dark)'}
              >
                Go to Partner Portal <ArrowRight size={14} />
              </Link>
            </div>

            {/* Careers Card */}
            <div style={{
              background: 'var(--white)',
              border: '1px solid rgba(0, 95, 87, 0.06)',
              borderRadius: '24px',
              padding: '36px',
              boxShadow: '0 8px 30px rgba(0,95,87,0.02)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              transition: 'transform 0.3s ease, border-color 0.3s ease',
            }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.borderColor = 'rgba(0, 95, 87, 0.15)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.borderColor = 'rgba(0, 95, 87, 0.06)'; }}
            >
              <div>
                <div style={{
                  width: '48px', height: '48px', borderRadius: '12px',
                  background: 'rgba(255, 229, 0, 0.1)', color: 'var(--green-dark)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px'
                }}>
                  <Users size={22} color="var(--green-dark)" />
                </div>
                <h3 style={{ fontFamily: "'Syne', sans-serif", fontWeight: '800', fontSize: '20px', color: 'var(--text-primary)', marginBottom: '10px' }}>
                  Careers & Hiring
                </h3>
                <p style={{ fontSize: '14.5px', color: 'var(--text-muted)', lineHeight: '1.65', marginBottom: '28px' }}>
                  We are looking for frontend, full stack, flutter developers, and finance professionals to help rebuild the food delivery industry.
                </p>
              </div>
              <Link href="/careers" style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                background: 'rgba(0, 95, 87, 0.05)', color: 'var(--green-dark)',
                padding: '12px 24px', borderRadius: '12px',
                fontWeight: '750', fontSize: '14px', textDecoration: 'none',
                transition: 'background-color 0.2s ease, transform 0.2s ease', alignSelf: 'flex-start',
                border: '1px solid rgba(0, 95, 87, 0.15)'
              }}
                onMouseEnter={e => { e.currentTarget.style.backgroundColor = 'rgba(0, 95, 87, 0.1)'; }}
                onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'rgba(0, 95, 87, 0.05)'; }}
              >
                View Job Openings <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
         SECTION 3 — GENERAL SUPPORT FORM & INFO
      ═══════════════════════════════════════════════════ */}
      <section ref={formRef} style={{ padding: '40px 0 120px', background: 'var(--cream)' }}>
        <div className="section-wrap" style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '48px', alignItems: 'stretch' }} className="form-info-grid">

            {/* Form Column */}
            <div style={{
              background: 'var(--white)',
              border: '1px solid rgba(0, 95, 87, 0.08)',
              borderRadius: '28px',
              padding: '48px clamp(24px, 5vw, 48px)',
              boxShadow: '0 10px 40px rgba(0,95,87,0.03)',
            }}>
              <h3 style={{ fontFamily: "'Syne', sans-serif", fontWeight: '800', fontSize: '24px', color: 'var(--text-primary)', marginBottom: '10px' }}>
                General support & enquiries
              </h3>
              <p style={{ fontSize: '14px', color: 'var(--text-muted)', marginBottom: '32px' }}>
                For customers, general inquiries, press relations, or generic feedback.
              </p>

              {!formSubmitted ? (
                <form onSubmit={handleFormSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>

                  {/* Name */}
                  <div>
                    <label style={{ display: 'block', fontSize: '12px', fontWeight: '750', color: 'var(--text-primary)', marginBottom: '6px', textTransform: 'uppercase' }}>
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Full Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      style={{
                        width: '100%', padding: '14px 18px', borderRadius: '12px',
                        border: errors.name ? '1px solid #ef4444' : '1px solid rgba(0, 95, 87, 0.15)',
                        background: 'var(--cream-dark)', fontSize: '15px', color: 'var(--text-primary)', outline: 'none'
                      }}
                    />
                    {errors.name && <div style={{ color: '#ef4444', fontSize: '12px', marginTop: '6px', display: 'flex', alignItems: 'center', gap: '4px' }}><AlertCircle size={12} />{errors.name}</div>}
                  </div>

                  {/* Row: Email & Phone */}
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }} className="inner-form-row">
                    <div>
                      <label style={{ display: 'block', fontSize: '12px', fontWeight: '750', color: 'var(--text-primary)', marginBottom: '6px', textTransform: 'uppercase' }}>
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        value={formData.email}
                        onChange={handleInputChange}
                        style={{
                          width: '100%', padding: '14px 18px', borderRadius: '12px',
                          border: errors.email ? '1px solid #ef4444' : '1px solid rgba(0, 95, 87, 0.15)',
                          background: 'var(--cream-dark)', fontSize: '15px', color: 'var(--text-primary)', outline: 'none'
                        }}
                      />
                      {errors.email && <div style={{ color: '#ef4444', fontSize: '12px', marginTop: '6px', display: 'flex', alignItems: 'center', gap: '4px' }}><AlertCircle size={12} />{errors.email}</div>}
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: '12px', fontWeight: '750', color: 'var(--text-primary)', marginBottom: '6px', textTransform: 'uppercase' }}>
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        placeholder="Optional"
                        value={formData.phone}
                        onChange={handleInputChange}
                        style={{
                          width: '100%', padding: '14px 18px', borderRadius: '12px',
                          border: '1px solid rgba(0, 95, 87, 0.15)',
                          background: 'var(--cream-dark)', fontSize: '15px', color: 'var(--text-primary)', outline: 'none'
                        }}
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label style={{ display: 'block', fontSize: '12px', fontWeight: '750', color: 'var(--text-primary)', marginBottom: '6px', textTransform: 'uppercase' }}>
                      Subject *
                    </label>
                    <input
                      type="text"
                      name="subject"
                      placeholder="What is this regarding?"
                      value={formData.subject}
                      onChange={handleInputChange}
                      style={{
                        width: '100%', padding: '14px 18px', borderRadius: '12px',
                        border: errors.subject ? '1px solid #ef4444' : '1px solid rgba(0, 95, 87, 0.15)',
                        background: 'var(--cream-dark)', fontSize: '15px', color: 'var(--text-primary)', outline: 'none'
                      }}
                    />
                    {errors.subject && <div style={{ color: '#ef4444', fontSize: '12px', marginTop: '6px', display: 'flex', alignItems: 'center', gap: '4px' }}><AlertCircle size={12} />{errors.subject}</div>}
                  </div>

                  {/* Message */}
                  <div>
                    <label style={{ display: 'block', fontSize: '12px', fontWeight: '750', color: 'var(--text-primary)', marginBottom: '6px', textTransform: 'uppercase' }}>
                      Message *
                    </label>
                    <textarea
                      name="message"
                      rows="4"
                      placeholder="Write your message here..."
                      value={formData.message}
                      onChange={handleInputChange}
                      style={{
                        width: '100%', padding: '14px 18px', borderRadius: '12px',
                        border: errors.message ? '1px solid #ef4444' : '1px solid rgba(0, 95, 87, 0.15)',
                        background: 'var(--cream-dark)', fontSize: '15px', color: 'var(--text-primary)',
                        outline: 'none', resize: 'vertical', lineHeight: '1.6'
                      }}
                    />
                    {errors.message && <div style={{ color: '#ef4444', fontSize: '12px', marginTop: '6px', display: 'flex', alignItems: 'center', gap: '4px' }}><AlertCircle size={12} />{errors.message}</div>}
                  </div>

                  {/* Submit */}
                  {submitError && (
                    <div style={{
                      color: '#ef4444',
                      fontSize: '14px',
                      background: 'rgba(239, 68, 68, 0.08)',
                      border: '1px solid rgba(239, 68, 68, 0.2)',
                      padding: '12px 16px',
                      borderRadius: '12px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      marginTop: '8px'
                    }}>
                      <AlertCircle size={16} />
                      <span>{submitError}</span>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    style={{
                      background: isSubmitting ? '#a3b8b5' : 'var(--green-dark)', color: 'var(--cream)',
                      padding: '16px 28px', borderRadius: '100px',
                      fontWeight: '700', fontSize: '15px', border: 'none', cursor: isSubmitting ? 'not-allowed' : 'pointer',
                      transition: 'background-color 0.2s ease, transform 0.2s ease',
                      marginTop: '8px', boxShadow: '0 6px 20px rgba(0, 61, 55, 0.15)',
                    }}
                    onMouseEnter={e => { if (!isSubmitting) { e.currentTarget.style.backgroundColor = 'var(--green)'; e.currentTarget.style.transform = 'translateY(-2px)'; } }}
                    onMouseLeave={e => { if (!isSubmitting) { e.currentTarget.style.backgroundColor = 'var(--green-dark)'; e.currentTarget.style.transform = ''; } }}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>

                </form>
              ) : (
                <div style={{ textAlign: 'center', padding: '36px 0' }}>
                  <div style={{
                    width: '64px', height: '64px', borderRadius: '50%',
                    background: 'rgba(0, 95, 87, 0.1)', display: 'flex',
                    alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px', color: 'var(--green)'
                  }}>
                    <CheckCircle size={32} />
                  </div>
                  <h3 style={{ fontFamily: "'Syne', sans-serif", fontWeight: '800', fontSize: '26px', color: 'var(--text-primary)', marginBottom: '12px' }}>
                    Message Sent!
                  </h3>
                  <p style={{ fontSize: '15px', color: 'var(--text-muted)', maxWidth: '360px', margin: '0 auto 28px', lineHeight: '1.6' }}>
                    We have received your enquiry. A Kwikkit representative will respond to your email within 24 hours.
                  </p>
                  <button onClick={resetForm} style={{
                    background: 'none', border: '1px solid rgba(0,95,87,0.2)', color: 'var(--green)',
                    padding: '12px 28px', borderRadius: '100px', fontWeight: '700', fontSize: '14px', cursor: 'pointer'
                  }}>
                    Send Another Message
                  </button>
                </div>
              )}
            </div>

            {/* Info Column */}
            <div style={{
              display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: '32px'
            }}>
              {/* Direct Channels card */}
              <div style={{
                background: 'var(--green-dark)', borderRadius: '28px',
                padding: '40px', color: 'var(--cream)',
                boxShadow: '0 12px 40px rgba(0,61,55,0.12)',
                position: 'relative', overflow: 'hidden', flex: 1,
                display: 'flex', flexDirection: 'column', justifyContent: 'center'
              }}>
                <div style={{ position: 'absolute', bottom: '-40px', right: '-40px', width: '200px', height: '200px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,229,0,0.06) 0%, transparent 65%)', pointerEvents: 'none' }} />

                <h4 style={{ fontFamily: "'Syne', sans-serif", fontSize: '20px', fontWeight: '850', color: 'var(--cream)', marginBottom: '24px' }}>
                  Direct Support
                </h4>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                  {/* Email */}
                  <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                    <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--yellow)', flexShrink: 0 }}>
                      <Mail size={18} />
                    </div>
                    <div>
                      <div style={{ fontSize: '11px', color: 'rgba(253,248,242,0.4)', fontWeight: '750', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '4px' }}>Email Support</div>
                      <a href="mailto:info@kwikkit.in" style={{ fontSize: '16px', fontWeight: '700', color: 'var(--cream)', textDecoration: 'none', transition: 'color 0.2s ease' }}
                        onMouseEnter={e => e.currentTarget.style.color = 'var(--yellow)'}
                        onMouseLeave={e => e.currentTarget.style.color = 'var(--cream)'}
                      >
                        info@kwikkit.in
                      </a>
                    </div>
                  </div>

                  {/* Phone */}
                  <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                    <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--yellow)', flexShrink: 0 }}>
                      <Phone size={18} />
                    </div>
                    <div>
                      <div style={{ fontSize: '11px', color: 'rgba(253,248,242,0.4)', fontWeight: '750', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '4px' }}>Call Hotline</div>
                      <a href="tel:+918699555046" style={{ fontSize: '16px', fontWeight: '700', color: 'var(--cream)', textDecoration: 'none', transition: 'color 0.2s ease' }}
                        onMouseEnter={e => e.currentTarget.style.color = 'var(--yellow)'}
                        onMouseLeave={e => e.currentTarget.style.color = 'var(--cream)'}
                      >
                        +91 86995 55046
                      </a>
                    </div>
                  </div>

                  {/* Hours */}
                  <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                    <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--yellow)', flexShrink: 0 }}>
                      <Clock size={18} />
                    </div>
                    <div>
                      <div style={{ fontSize: '11px', color: 'rgba(253,248,242,0.4)', fontWeight: '750', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '4px' }}>Business Hours</div>
                      <span style={{ fontSize: '15px', fontWeight: '600', color: 'rgba(253,248,242,0.85)' }}>
                        Mon – Sat: 9:00 AM – 6:00 PM
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Head office card */}
              <div style={{
                background: 'var(--white)', border: '1px solid rgba(0, 95, 87, 0.06)',
                borderRadius: '28px', padding: '40px',
                display: 'flex', gap: '20px', alignItems: 'flex-start',
                boxShadow: '0 8px 30px rgba(0,95,87,0.02)'
              }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'rgba(0, 95, 87, 0.05)', border: '1px solid rgba(0, 95, 87, 0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--green)', flexShrink: 0 }}>
                  <MapPin size={18} />
                </div>
                <div>
                  <div style={{ fontSize: '11px', color: 'var(--text-muted)', fontWeight: '750', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '4px' }}>Head Office</div>
                  <h5 style={{ fontSize: '15px', fontWeight: '800', color: 'var(--text-primary)', marginBottom: '6px' }}>Kwikkit Headquarters</h5>
                  <p style={{ fontSize: '13.5px', color: 'var(--text-muted)', lineHeight: '1.5', margin: 0 }}>
                    Gurgaon,<br />
                    Haryana, India
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* CSS Layout hacks */}
      <style>{`
        @keyframes blinkY { 0%,100%{opacity:1} 50%{opacity:0.25} }
        @keyframes chevDrop { 0%,100%{transform:translateY(0)} 50%{transform:translateY(6px)} }
        
        @media (max-width: 820px) {
          .intent-grid { grid-template-columns: 1fr !important; gap: 20px !important; }
          .form-info-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
        }
        @media (max-width: 480px) {
          .inner-form-row { grid-template-columns: 1fr !important; gap: 20px !important; }
        }
      `}</style>

    </main>
  );
}
