'use client';
import { useEffect, useRef, useState } from 'react';
import { Mail, Phone } from 'lucide-react';

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

      {/* ─── Minimal, Professional Header ─── */}
      <section style={{
        background: '#FFFFFF',
        padding: '130px 28px 60px',
        borderBottom: '1px solid #E5E7EB',
        position: 'relative'
      }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', textAlign: 'left' }}>
          <span style={{
            fontSize: '11px',
            fontWeight: '700',
            color: 'var(--green-dark)',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            display: 'block',
            marginBottom: '10px'
          }}>
            Legal Agreement
          </span>
          <h1 style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: '800',
            fontSize: 'clamp(32px, 4.5vw, 48px)',
            color: '#111827',
            lineHeight: '1.2',
            letterSpacing: '-0.02em',
            marginBottom: '18px'
          }}>
            Terms and Conditions
          </h1>

          <div style={{
            display: 'flex',
            gap: '24px',
            flexWrap: 'wrap',
            fontSize: '13.5px',
            color: '#6B7280',
            fontWeight: '500'
          }}>
            <span>Last Updated: <strong>January 28, 2026</strong></span>
            <span style={{ color: '#E5E7EB' }}>|</span>
            <span>Company: <strong>Kwikkit / Aushadhiya Foods Pvt. Ltd.</strong></span>
          </div>
        </div>
      </section>

      {/* ─── Two-Column Content Grid ─── */}
      <section style={{ maxWidth: '1100px', margin: '50px auto 0', padding: '0 28px' }}>
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

            <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
              {sections.map((sec) => {
                const isActive = activeSection === sec.id;
                return (
                  <button
                    key={sec.id}
                    onClick={() => handleSidebarClick(sec.id)}
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
                    onMouseEnter={(e) => {
                      if (!isActive) {
                        e.currentTarget.style.color = '#374151';
                        e.currentTarget.style.borderLeftColor = '#D1D5DB';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isActive) {
                        e.currentTarget.style.color = '#6B7280';
                        e.currentTarget.style.borderLeftColor = 'transparent';
                      }
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

      {/* Responsive Media Styles */}
      <style jsx global>{`
        @media (max-width: 900px) {
          .terms-grid {
            grid-template-columns: 1fr !important;
            gap: 30px !important;
          }
          .terms-sidebar {
            position: sticky !important;
            top: 60px !important;
            z-index: 100 !important;
            max-height: 50px !important;
            overflow-x: auto !important;
            overflow-y: hidden !important;
            white-space: nowrap !important;
            display: flex !important;
            flex-direction: row !important;
            align-items: center !important;
            gap: 8px !important;
            padding: 8px 16px !important;
            border-radius: 8px !important;
            background: #FFFFFF !important;
            border: 1px solid #E5E7EB !important;
          }
          .terms-sidebar h3 {
            display: none !important;
          }
          .terms-sidebar button {
            display: inline-block !important;
            padding: 6px 12px !important;
            font-size: 12px !important;
            border-left: none !important;
            border-bottom: 2px solid transparent !important;
            border-radius: 0 !important;
            background: transparent !important;
          }
        }
        @media (max-width: 600px) {
          .terms-split {
            grid-template-columns: 1fr !important;
            gap: 20px !important;
          }
        }
      `}</style>
    </main>
  );
}
