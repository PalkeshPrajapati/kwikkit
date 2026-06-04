'use client';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { Mail, Phone, List, X } from 'lucide-react';

const sections = [
  { id: 'introduction', label: '1. Introduction' },
  { id: 'definitions', label: '2. Definitions' },
  { id: 'eligibility', label: '3. Eligibility & Account' },
  { id: 'use-platform', label: '4. Use of the Platform' },
  { id: 'content', label: '5. Content' },
  { id: 'orders-payment', label: '6. Orders & Payment' },
  { id: 'delivery', label: '7. Delivery' },
  { id: 'user-responsibilities', label: '8. User Responsibilities' },
  { id: 'partner-obligations', label: '9. Restaurant Partner Obligations' },
  { id: 'privacy', label: '10. Privacy' },
  { id: 'dispute-resolution', label: '11. Dispute Resolution' },
  { id: 'limitation-liability', label: '12. Limitation of Liability' },
  { id: 'severability-amendments', label: '13. Severability & Amendments' },
  { id: 'contact-info', label: '14. Contact Information' },
];

export default function TermsPage() {
  const [activeSection, setActiveSection] = useState('introduction');
  const [loaded, setLoaded] = useState(false);
  const [showFloatingBtn, setShowFloatingBtn] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 80);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth <= 900) {
        if (window.scrollY > 350) {
          setShowFloatingBtn(true);
        } else {
          setShowFloatingBtn(false);
        }
      } else {
        setShowFloatingBtn(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -50% 0px',
      threshold: 0,
    };

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    sections.forEach((sec) => {
      const el = document.getElementById(sec.id);
      if (el) {
        observer.observe(el);
      }
    });

    return () => observer.disconnect();
  }, []);

  const handleSidebarClick = (id) => {
    setActiveSection(id);
    const el = document.getElementById(id);
    if (el) {
      const offset = 90; // offset for fixed navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <main style={{ background: '#FAF9F6', minHeight: '100vh', paddingBottom: '120px', fontFamily: "'Inter', sans-serif" }}>

      {/* ── Hero Section (Unified Style) ── */}
      <section style={{ position: 'relative', minHeight: '75vh', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>

        {/* ── Background ── */}
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <Image
            src="/herobg/about-herobg.png"
            alt=""
            fill
            priority
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
            Legal Agreement
          </div>

          {/* Headline */}
          <h1 style={{
            opacity: loaded ? 1 : 0, transform: loaded ? 'translateY(0)' : 'translateY(24px)',
            transition: 'opacity 0.7s ease 0.15s, transform 0.7s ease 0.15s',
            fontFamily: "'Syne', sans-serif", fontWeight: '800',
            fontSize: 'clamp(28px, 5.8vw, 68px)', lineHeight: '1.05', letterSpacing: '-0.03em',
            color: 'var(--cream)', maxWidth: '980px', margin: '0 auto 28px'
          }}>
            Terms & <span style={{
              background: 'linear-gradient(90deg, var(--yellow) 0%, #fffaaa 100%)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
            }}>Conditions</span>
          </h1>

          {/* Metadata info */}
          <div style={{
            opacity: loaded ? 1 : 0, transform: loaded ? 'translateY(0)' : 'translateY(24px)',
            transition: 'opacity 0.7s ease 0.28s, transform 0.7s ease 0.28s',
            display: 'flex',
            justifyContent: 'center',
            gap: '24px',
            flexWrap: 'wrap',
            fontSize: '14px',
            color: 'rgba(253,248,242,0.5)',
            fontWeight: '600',
            fontFamily: "'Syne', sans-serif",
            letterSpacing: '0.01em',
          }}>
            <span>Last Updated: <strong style={{ color: 'var(--yellow)' }}>January 28, 2026</strong></span>
            <span>•</span>
            <span>Company: <strong style={{ color: 'var(--cream)' }}>Kwikkit / Aushadhiya Foods Pvt. Ltd.</strong></span>
          </div>
        </div>

        <style>{`
          @keyframes blinkY { 0%,100%{opacity:1} 50%{opacity:0.25} }
        `}</style>
      </section>

      {/* ─── Two-Column Content Grid ─── */}
      <section className="terms-container" style={{ maxWidth: '1100px', margin: '50px auto 0', padding: '0 28px' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '260px 1fr',
          gap: '60px',
          alignItems: 'start'
        }} className="terms-grid">

          {/* Left Sidebar Sticky Navigation */}
          <aside className="terms-sidebar" style={{
            position: 'sticky',
            top: '100px',
            maxHeight: 'calc(100vh - 140px)',
            overflowY: 'auto',
            paddingRight: '12px'
          }}>
            <h3 style={{
              fontSize: '12px',
              fontWeight: '700',
              color: '#374151',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              marginBottom: '16px',
              paddingBottom: '8px',
              borderBottom: '1px solid #E5E7EB'
            }}>
              Sections
            </h3>

            <div className="terms-sidebar-list">
              {sections.map((sec) => {
                const isActive = activeSection === sec.id;
                return (
                  <button
                    key={sec.id}
                    onClick={() => handleSidebarClick(sec.id)}
                    className={isActive ? 'active' : ''}
                    style={{
                      all: 'unset',
                      cursor: 'pointer',
                      display: 'block',
                      padding: '8px 14px',
                      fontSize: '13px',
                      fontWeight: isActive ? '700' : '450',
                      color: isActive ? 'var(--green)' : '#6B7280',
                      borderLeft: `2px solid ${isActive ? 'var(--green)' : 'transparent'}`,
                      background: isActive ? '#F3F4F6' : 'transparent',
                      transition: 'all 0.2s ease',
                      textAlign: 'left'
                    }}
                  >
                    {sec.label}
                  </button>
                );
              })}
            </div>
          </aside>

          {/* Right Content Area */}
          <article style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '48px',
            color: '#374151',
            fontSize: '15.5px',
            lineHeight: '1.75'
          }}>

            {/* 1 Introduction */}
            <section id="introduction" style={{ borderBottom: '1px solid #E5E7EB', paddingBottom: '32px' }}>
              <h2 style={{ fontWeight: '700', fontSize: '20px', color: '#111827', marginBottom: '16px' }}>
                1. Introduction
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <p>
                  Welcome to Kwikkit. These terms and conditions outline the rules and regulations for the use of Kwikkit's Website, located at kwikkit.in. By accessing this website we assume you accept these terms and conditions. Do not continue to use Kwikkit if you do not agree to take all of the terms and conditions stated on this page.
                </p>
                <p>
                  This document constitutes a legally binding agreement between you and Kwikkit, governing your access to and use of the Kwikkit platform.
                </p>
              </div>
            </section>

            {/* 2 Definitions */}
            <section id="definitions" style={{ borderBottom: '1px solid #E5E7EB', paddingBottom: '32px' }}>
              <h2 style={{ fontWeight: '700', fontSize: '20px', color: '#111827', marginBottom: '16px' }}>
                2. Definitions
              </h2>
              <p>
                Throughout this document, "Platform" refers to the Kwikkit website and mobile applications. "User," "You," and "Your" refer to you, the person logging on this website. "The Company," "Ourselves," "We," "Our," and "Us" refers to Kwikkit. "Party," "Parties," or "Us" refers to both the User and ourselves.
              </p>
            </section>

            {/* 3 Eligibility & Account */}
            <section id="eligibility" style={{ borderBottom: '1px solid #E5E7EB', paddingBottom: '32px' }}>
              <h2 style={{ fontWeight: '700', fontSize: '20px', color: '#111827', marginBottom: '16px' }}>
                3. Eligibility & Account
              </h2>
              <p>
                To use our services, you must be at least 18 years old and capable of entering into a binding contract. You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account.
              </p>
            </section>

            {/* 4 Use of the Platform */}
            <section id="use-platform" style={{ borderBottom: '1px solid #E5E7EB', paddingBottom: '32px' }}>
              <h2 style={{ fontWeight: '700', fontSize: '20px', color: '#111827', marginBottom: '16px' }}>
                4. Use of the Platform
              </h2>
              <p>
                You agree to use the Kwikkit platform only for lawful purposes. You will not use the platform to harass, abuse, or harm another person, or in a way that is fraudulent, defamatory, or otherwise unlawful.
              </p>
            </section>

            {/* 5 Content */}
            <section id="content" style={{ borderBottom: '1px solid #E5E7EB', paddingBottom: '32px' }}>
              <h2 style={{ fontWeight: '700', fontSize: '20px', color: '#111827', marginBottom: '16px' }}>
                5. Content
              </h2>
              <p>
                Any reviews, comments, or other material you upload to our platform must not be illegal, obscene, threatening, or defamatory. By posting content, you grant Kwikkit a non-exclusive, royalty-free license to use, reproduce, and modify such content.
              </p>
            </section>

            {/* 6 Orders & Payment */}
            <section id="orders-payment" style={{ borderBottom: '1px solid #E5E7EB', paddingBottom: '32px' }}>
              <h2 style={{ fontWeight: '700', fontSize: '20px', color: '#111827', marginBottom: '16px' }}>
                6. Orders & Payment
              </h2>
              <p>
                All orders placed through the platform are subject to availability and acceptance by our restaurant partners. Prices for items are listed on the platform and are inclusive of applicable taxes. Payment must be made at the time of ordering through our available payment methods.
              </p>
            </section>

            {/* 7 Delivery */}
            <section id="delivery" style={{ borderBottom: '1px solid #E5E7EB', paddingBottom: '32px' }}>
              <h2 style={{ fontWeight: '700', fontSize: '20px', color: '#111827', marginBottom: '16px' }}>
                7. Delivery
              </h2>
              <p>
                Kwikkit facilitates the delivery of your order from the restaurant to your specified address. Delivery times are estimates and may vary due to factors beyond our control, such as traffic and weather conditions. We are not liable for any delays in delivery.
              </p>
            </section>

            {/* 8 User Responsibilities */}
            <section id="user-responsibilities" style={{ borderBottom: '1px solid #E5E7EB', paddingBottom: '32px' }}>
              <h2 style={{ fontWeight: '700', fontSize: '20px', color: '#111827', marginBottom: '16px' }}>
                8. User Responsibilities
              </h2>
              <p>
                You are responsible for providing accurate and complete information for your account and orders, including your delivery address and contact details. You agree to treat delivery personnel with respect and courtesy.
              </p>
            </section>

            {/* 9 Restaurant Partner Obligations */}
            <section id="partner-obligations" style={{ borderBottom: '1px solid #E5E7EB', paddingBottom: '32px' }}>
              <h2 style={{ fontWeight: '700', fontSize: '20px', color: '#111827', marginBottom: '16px' }}>
                9. Restaurant Partner Obligations
              </h2>
              <p>
                Our restaurant partners are responsible for the preparation, quality, and packaging of the food. They are obligated to adhere to all food safety and hygiene standards as required by law. Kwikkit is a platform provider and does not assume responsibility for the food itself.
              </p>
            </section>

            {/* 10 Privacy */}
            <section id="privacy" style={{ borderBottom: '1px solid #E5E7EB', paddingBottom: '32px' }}>
              <h2 style={{ fontWeight: '700', fontSize: '20px', color: '#111827', marginBottom: '16px' }}>
                10. Privacy
              </h2>
              <p>
                Your privacy is important to us. Our Privacy Policy, which is incorporated into these Terms by reference, explains how we collect, use, and share your personal information. Please review it to understand our practices.
              </p>
            </section>

            {/* 11 Dispute Resolution */}
            <section id="dispute-resolution" style={{ borderBottom: '1px solid #E5E7EB', paddingBottom: '32px' }}>
              <h2 style={{ fontWeight: '700', fontSize: '20px', color: '#111827', marginBottom: '16px' }}>
                11. Dispute Resolution
              </h2>
              <p>
                Any disputes arising out of or in connection with these terms will be governed by the laws of India and subject to the exclusive jurisdiction of the courts in Chandigarh.
              </p>
            </section>

            {/* 12 Limitation of Liability */}
            <section id="limitation-liability" style={{ borderBottom: '1px solid #E5E7EB', paddingBottom: '32px' }}>
              <h2 style={{ fontWeight: '700', fontSize: '20px', color: '#111827', marginBottom: '16px' }}>
                12. Limitation of Liability
              </h2>
              <p>
                To the maximum extent permitted by law, Kwikkit shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly.
              </p>
            </section>

            {/* 13 Severability & Amendments */}
            <section id="severability-amendments" style={{ borderBottom: '1px solid #E5E7EB', paddingBottom: '32px' }}>
              <h2 style={{ fontWeight: '700', fontSize: '20px', color: '#111827', marginBottom: '16px' }}>
                13. Severability & Amendments
              </h2>
              <p>
                If any provision of these Terms is found to be unenforceable, the remaining provisions will continue to be in full force and effect. We reserve the right to modify these terms at any time. Your continued use of the platform after any such changes constitutes your acceptance of the new Terms.
              </p>
            </section>

            {/* 14 Contact Information */}
            <section id="contact-info" style={{ paddingBottom: '32px' }}>
              <h2 style={{ fontWeight: '700', fontSize: '20px', color: '#111827', marginBottom: '16px' }}>
                14. Contact Information
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <p>
                  If you have any questions about these Terms, please reach out to us:
                </p>

                <div style={{
                  background: '#FFFFFF',
                  border: '1px solid #E5E7EB',
                  borderRadius: '12px',
                  padding: '24px',
                  marginTop: '8px',
                  boxShadow: '0 1px 3px rgba(0,0,0,0.05)'
                }}>
                  <p style={{ fontWeight: '700', color: '#111827', fontSize: '15px', marginBottom: '12px' }}>
                    Kwikkit — Aushadhiya Foods Pvt. Ltd.
                  </p>
                  <p style={{ fontSize: '14px', lineHeight: '1.65', color: '#6B7280', marginBottom: '18px' }}>
                    9th Floor, Badshahpur Sohna Road Highway,<br />
                    Sohna - Gurgaon Rd, Gurugram, Haryana 122018<br />
                    <strong>CIN:</strong> U15490HR2022PTC108779
                  </p>

                  <div style={{
                    display: 'flex',
                    gap: '24px',
                    flexWrap: 'wrap',
                    borderTop: '1px solid #E5E7EB',
                    paddingTop: '16px'
                  }}>
                    <a href="mailto:info@kwikkit.in" style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      color: 'var(--green)',
                      textDecoration: 'none',
                      fontSize: '14px',
                      fontWeight: '600'
                    }}>
                      <Mail size={15} />
                      info@kwikkit.in
                    </a>
                    <a href="tel:+918699555046" style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      color: 'var(--green)',
                      textDecoration: 'none',
                      fontSize: '14px',
                      fontWeight: '600'
                    }}>
                      <Phone size={15} />
                      +91 86995 55046
                    </a>
                  </div>
                </div>
              </div>
            </section>

          </article>
        </div>
      </section>
      {/* ─── Floating Menu Trigger Button (Mobile Only) ─── */}
      <button
        onClick={() => setIsMobileMenuOpen(true)}
        style={{
          position: 'fixed',
          bottom: '24px',
          left: '50%',
          transform: showFloatingBtn ? 'translateX(-50%) translateY(0)' : 'translateX(-50%) translateY(100px)',
          opacity: showFloatingBtn ? 1 : 0,
          pointerEvents: showFloatingBtn ? 'auto' : 'none',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          background: 'rgba(19, 26, 25, 0.92)',
          backdropFilter: 'blur(16px)',
          border: '1px solid rgba(255, 229, 0, 0.25)',
          borderRadius: '100px',
          padding: '12px 22px',
          color: 'var(--cream)',
          fontWeight: '700',
          fontSize: '13px',
          fontFamily: "'Syne', sans-serif",
          boxShadow: '0 10px 32px rgba(0, 0, 0, 0.35)',
          transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
          zIndex: 999,
          cursor: 'pointer',
        }}
        className="terms-mobile-fab"
      >
        <List size={16} style={{ color: 'var(--yellow)' }} />
        <span>Sections</span>
        <span style={{ color: 'rgba(253, 248, 242, 0.3)', margin: '0 2px' }}>|</span>
        <span style={{ color: 'var(--yellow)', maxWidth: '140px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
          {sections.find(s => s.id === activeSection)?.label.split('. ')[1] || 'Select'}
        </span>
      </button>

      {/* ─── Bottom Sheet Drawer Menu Backdrop (Mobile Only) ─── */}
      <div
        onClick={() => setIsMobileMenuOpen(false)}
        style={{
          position: 'fixed',
          inset: 0,
          background: 'rgba(3, 11, 10, 0.65)',
          backdropFilter: 'blur(4px)',
          opacity: isMobileMenuOpen ? 1 : 0,
          pointerEvents: isMobileMenuOpen ? 'auto' : 'none',
          transition: 'opacity 0.3s ease',
          zIndex: 1000,
        }}
      />

      {/* ─── Bottom Sheet Drawer Menu Container (Mobile Only) ─── */}
      <div
        style={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          background: '#FAF9F6',
          borderTopLeftRadius: '24px',
          borderTopRightRadius: '24px',
          boxShadow: '0 -10px 40px rgba(0, 0, 0, 0.2)',
          transform: isMobileMenuOpen ? 'translateY(0)' : 'translateY(100%)',
          transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
          zIndex: 1001,
          maxHeight: '75vh',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
        }}
      >
        {/* Header / Drag Handle */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '10px 16px 0' }}>
          <div style={{ width: '36px', height: '4px', background: '#D1D5DB', borderRadius: '2px', marginBottom: '12px' }} />
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', paddingBottom: '12px', borderBottom: '1px solid #E5E7EB' }}>
            <h3 style={{ fontFamily: "'Syne', sans-serif", fontWeight: '700', fontSize: '16px', color: '#111827', margin: 0 }}>
              Table of Contents
            </h3>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              style={{
                all: 'unset',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '28px',
                height: '28px',
                borderRadius: '50%',
                background: '#E5E7EB',
                color: '#374151',
              }}
            >
              <X size={16} />
            </button>
          </div>
        </div>

        {/* Scrollable list */}
        <div style={{ overflowY: 'auto', padding: '16px 16px 32px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {sections.map((sec) => {
            const isActive = activeSection === sec.id;
            return (
              <button
                key={sec.id}
                onClick={() => {
                  handleSidebarClick(sec.id);
                  setIsMobileMenuOpen(false);
                }}
                style={{
                  all: 'unset',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '12px 16px',
                  borderRadius: '12px',
                  background: isActive ? '#E6F0EE' : 'transparent',
                  color: isActive ? 'var(--green)' : '#374151',
                  fontWeight: isActive ? '700' : '500',
                  fontSize: '14px',
                  transition: 'all 0.2s ease',
                  border: isActive ? '1px solid rgba(0, 95, 87, 0.15)' : '1px solid transparent',
                }}
                className={`terms-drawer-item ${isActive ? 'active' : ''}`}
              >
                <span>{sec.label}</span>
                {isActive && (
                  <span style={{
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    background: 'var(--green)',
                  }} />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Responsive Media Styles */}
      <style>{`
        .terms-sidebar-list {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }
        .terms-sidebar button {
          border-left: 2px solid transparent;
          transition: all 0.2s ease;
        }
        @media (hover: hover) {
          .terms-sidebar button:not(.active):hover {
            color: #374151 !important;
            border-left-color: #D1D5DB !important;
          }
        }
        @media (max-width: 900px) {
          .terms-grid {
            grid-template-columns: 1fr !important;
            gap: 30px !important;
          }
          .terms-sidebar {
            display: none !important;
          }
          .terms-drawer-item:active {
            background-color: #E6F0EE !important;
          }
          .terms-mobile-fab:active {
            transform: translateX(-50%) scale(0.95) !important;
          }
        }
        @media (max-width: 600px) {
          .terms-container {
            padding: 0 16px !important;
            margin-top: 24px !important;
          }
          .terms-split {
            grid-template-columns: 1fr !important;
            gap: 20px !important;
          }
        }
      `}</style>
    </main>
  );
}
