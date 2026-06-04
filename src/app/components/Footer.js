'use client';
import Image from 'next/image';
import Link from 'next/link';

const year = new Date().getFullYear();

/* ── Social links ── */
const socials = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/kwikkitindia/',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: 'X / Twitter',
    href: 'https://x.com/kwikkitindia',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/kwikkitindia',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
];

/* ── Nav columns ── */
const cols = [
  {
    heading: 'Product',
    links: [
      { l: 'Home', h: '/' },
      { l: 'Why Kwikkit', h: '/#why' },
      { l: 'How It Works', h: '/how-it-works' },
      { l: 'Download App', h: '/#download' },
      { l: 'Blog', h: '/blog' },
    ],
  },
  {
    heading: 'For Restaurants',
    links: [
      { l: 'Partner With Us', h: '/restaurants' },
      { l: 'Zero Commission', h: '/restaurants#zero-commission' },
      { l: 'Easy Onboarding', h: '/restaurants#onboarding' },
      { l: 'Savings Calculator', h: '/restaurants#calculator' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { l: 'About Us', h: '/about' },
      { l: 'Our Mission', h: '/about#mission' },
      { l: 'Careers', h: '/careers' },
      { l: 'Contact Us', h: '/contact' },
    ],
  },
  {
    heading: 'Legal',
    links: [
      { l: 'Terms & Conditions', h: '/terms' },
      { l: 'Privacy Policy', h: '/terms' },
      { l: 'FSSAI License', h: '/legal/fssai.pdf' },
      { l: 'ISO Certification', h: '/legal/iso.pdf' },
    ],
  },
];

/* ── Contact items ── */
const contacts = [
  {
    label: 'Email',
    value: 'info@kwikkit.in',
    href: 'mailto:info@kwikkit.in',
    icon: (
      <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
  },
  {
    label: 'Phone',
    value: '+91 86995 55046',
    href: 'tel:+918699555046',
    icon: (
      <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.5 11.5 19.79 19.79 0 011.5 2.83 2 2 0 013.49 1h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L7.91 8.91a16 16 0 006.18 6.18l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
      </svg>
    ),
  },
];

/* ── Reusable link style ── */
const linkStyle = {
  fontSize: '14px',
  color: 'rgba(253,248,242,0.45)',
  textDecoration: 'none',
  transition: 'color 0.2s ease',
  display: 'block',
};

export default function Footer() {
  return (
    <footer id="contact" style={{ background: '#060e0d', borderTop: '1px solid rgba(255,255,255,0.05)' }}>

      {/* ── Top accent line ── */}
      <div style={{ height: '3px', background: 'linear-gradient(90deg, var(--green-dark) 0%, var(--green) 40%, var(--yellow) 100%)' }} />

      <div className="section-wrap" style={{ padding: '72px 28px 0' }}>

        {/* ═══════════════════════════════════════════
            MAIN GRID  |  brand col + 4 nav cols
        ═══════════════════════════════════════════ */}
        <div className="footer-grid" style={{
          display: 'grid',
          gridTemplateColumns: '2fr 1fr 1fr 1fr 1fr',
          gap: '48px',
          paddingBottom: '60px',
          borderBottom: '1px solid rgba(255,255,255,0.06)',
        }}>

          {/* ── Brand column ── */}
          <div>
            {/* Logo + name */}
            <Link href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', textDecoration: 'none', marginBottom: '20px' }}>
              <Image
                src="/logo/logo-android.jpg"
                alt="Kwikkit"
                width={38} height={38}
                style={{ borderRadius: '10px', width: '38px', height: '38px' }}
              />
              <span style={{
                fontFamily: "'Syne',sans-serif", fontWeight: '800',
                fontSize: '20px', letterSpacing: '-0.03em', color: 'var(--cream)',
              }}>kwikkit</span>
            </Link>

            {/* Tagline */}
            <p style={{
              fontSize: '14px', lineHeight: '1.75',
              color: 'rgba(253,248,242,0.35)',
              maxWidth: '220px', marginBottom: '28px',
            }}>
              Zero-commission food delivery built for Chandigarh Tricity.
            </p>

            {/* Contact info */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '28px' }}>
              {contacts.map(c => (
                <a key={c.href} href={c.href} style={{
                  display: 'inline-flex', alignItems: 'center', gap: '9px',
                  color: 'rgba(253,248,242,0.38)', textDecoration: 'none',
                  fontSize: '13px', fontWeight: '500', transition: 'color 0.2s ease',
                }}
                  onMouseEnter={e => e.currentTarget.style.color = 'var(--yellow)'}
                  onMouseLeave={e => e.currentTarget.style.color = 'rgba(253,248,242,0.38)'}
                >
                  <span style={{ opacity: 0.6, flexShrink: 0 }}>{c.icon}</span>
                  {c.value}
                </a>
              ))}
            </div>

            {/* Social icons */}
            <div style={{ display: 'flex', gap: '10px' }}>
              {socials.map(s => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  style={{
                    width: '38px', height: '38px',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    borderRadius: '10px',
                    background: 'rgba(255,255,255,0.06)',
                    border: '1px solid rgba(255,255,255,0.09)',
                    color: 'rgba(253,248,242,0.45)',
                    textDecoration: 'none',
                    transition: 'background 0.25s ease, color 0.25s ease, border-color 0.25s ease, transform 0.25s cubic-bezier(.34,1.56,.64,1)',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = 'rgba(255,229,0,0.12)';
                    e.currentTarget.style.borderColor = 'rgba(255,229,0,0.3)';
                    e.currentTarget.style.color = 'var(--yellow)';
                    e.currentTarget.style.transform = 'translateY(-3px)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.06)';
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.09)';
                    e.currentTarget.style.color = 'rgba(253,248,242,0.45)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* ── Nav columns ── */}
          {cols.map(col => (
            <div key={col.heading}>
              <h4 style={{
                fontSize: '11px', fontWeight: '700',
                letterSpacing: '0.1em', textTransform: 'uppercase',
                color: 'rgba(253,248,242,0.22)',
                marginBottom: '20px',
              }}>
                {col.heading}
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {col.links.map(link => {
                  const isExternal = link.h.endsWith('.pdf');
                  if (isExternal) {
                    return (
                      <a
                        key={link.l}
                        href={link.h}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={linkStyle}
                        onMouseEnter={e => e.currentTarget.style.color = 'var(--cream)'}
                        onMouseLeave={e => e.currentTarget.style.color = 'rgba(253,248,242,0.45)'}
                      >
                        {link.l}
                      </a>
                    );
                  }
                  return (
                    <Link
                      key={link.l}
                      href={link.h}
                      style={linkStyle}
                      onMouseEnter={e => e.currentTarget.style.color = 'var(--cream)'}
                      onMouseLeave={e => e.currentTarget.style.color = 'rgba(253,248,242,0.45)'}
                    >
                      {link.l}
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* ═══════════════════════════════════════════
            BOTTOM BAR
        ═══════════════════════════════════════════ */}
        <div style={{ padding: '24px 0 28px' }}>

          {/* Row 1 — copyright + quick links */}
          <div style={{
            display: 'flex', justifyContent: 'space-between',
            alignItems: 'center', flexWrap: 'wrap', gap: '12px',
            marginBottom: '10px',
          }}>
            <p style={{ fontSize: '13px', color: 'rgba(253,248,242,0.22)', fontWeight: '500' }}>
              &copy; {year} Aushadhiya Foods Pvt. Ltd. All rights reserved.
            </p>
            <div style={{ display: 'flex', gap: '20px' }}>
              {[{ l: 'Privacy Policy', h: '/terms' }, { l: 'Terms', h: '/terms' }, { l: 'Careers', h: '/careers' }].map(item => (
                <Link
                  key={item.l}
                  href={item.h}
                  style={{ fontSize: '12px', color: 'rgba(253,248,242,0.3)', textDecoration: 'none', transition: 'color 0.2s ease' }}
                  onMouseEnter={e => e.currentTarget.style.color = 'var(--cream)'}
                  onMouseLeave={e => e.currentTarget.style.color = 'rgba(253,248,242,0.3)'}
                >
                  {item.l}
                </Link>
              ))}
            </div>
          </div>

          {/* Row 2 — legal details */}
          <p style={{
            fontSize: '11px',
            color: 'rgba(253,248,242,0.22)',
            fontWeight: '500',
            letterSpacing: '0.03em',
            display: 'flex',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '8px',
            marginTop: '16px',
            borderTop: '1px solid rgba(255, 255, 255, 0.03)',
            paddingTop: '16px'
          }}>
            <span>CIN: U10100PB2025PTC000000</span>
            <span style={{ color: 'rgba(255,255,255,0.05)', margin: '0 2px' }}>•</span>
            
            <a
              href="/legal/fssai.pdf"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '4px 10px',
                borderRadius: '6px',
                background: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                color: 'rgba(253, 248, 242, 0.65)',
                fontSize: '11px',
                fontWeight: '600',
                textDecoration: 'none',
                transition: 'all 0.25s ease',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = 'rgba(255, 229, 0, 0.08)';
                e.currentTarget.style.borderColor = 'rgba(255, 229, 0, 0.3)';
                e.currentTarget.style.color = 'var(--yellow)';
                e.currentTarget.style.transform = 'translateY(-1px)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.04)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                e.currentTarget.style.color = 'rgba(253, 248, 242, 0.65)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#10B981', display: 'inline-block', boxShadow: '0 0 6px #10B981' }} />
              FSSAI Licensed
            </a>

            <span style={{ color: 'rgba(255,255,255,0.05)', margin: '0 2px' }}>•</span>

            <a
              href="/legal/iso.pdf"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '4px 10px',
                borderRadius: '6px',
                background: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                color: 'rgba(253, 248, 242, 0.65)',
                fontSize: '11px',
                fontWeight: '600',
                textDecoration: 'none',
                transition: 'all 0.25s ease',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = 'rgba(255, 229, 0, 0.08)';
                e.currentTarget.style.borderColor = 'rgba(255, 229, 0, 0.3)';
                e.currentTarget.style.color = 'var(--yellow)';
                e.currentTarget.style.transform = 'translateY(-1px)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.04)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                e.currentTarget.style.color = 'rgba(253, 248, 242, 0.65)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#10B981', display: 'inline-block', boxShadow: '0 0 6px #10B981' }} />
              ISO Certified
            </a>

            <span style={{ color: 'rgba(255,255,255,0.05)', margin: '0 2px' }}>•</span>
            <span>Made with ♥ in Chandigarh</span>
          </p>

        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .footer-grid { grid-template-columns: 1fr 1fr 1fr !important; }
        }
        @media (max-width: 680px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; gap: 36px !important; }
        }
        @media (max-width: 420px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
}
