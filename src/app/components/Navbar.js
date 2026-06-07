'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const links = [
  { label: 'How It Works', desc: 'Simple steps to get food delivered', href: '/how-it-works' },
  { label: 'Restaurants', desc: 'Partner with us and keep 100% revenue', href: '/restaurants' },
  { label: 'About Us', desc: 'Our mission and zero-commission story', href: '/about' },
  { label: 'Blog', desc: 'Latest updates and food delivery insights', href: '/blog' },
  { label: 'Contact', desc: 'Have questions? Get in touch with us', href: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('');

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 48);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  /* lock body scroll when mobile menu open */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const navBg = scrolled
    ? 'rgba(8,15,14,0.82)'
    : 'transparent';

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
        background: navBg,
        backdropFilter: scrolled ? 'blur(20px) saturate(1.5)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.07)' : 'none',
        transition: 'background 0.4s ease, border-color 0.4s ease, backdrop-filter 0.4s ease',
      }}>
        <div style={{
          maxWidth: '1240px', margin: '0 auto', padding: '0 28px',
          height: scrolled ? '58px' : '70px',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          transition: 'height 0.35s ease',
        }}>

          {/* ── Logo ── */}
          <Link href="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', flexShrink: 0 }}>
            <Image
              src="/logo/logo-android.jpg"
              alt="Kwikkit"
              width={36} height={36}
              style={{ borderRadius: '10px', width: '36px', height: '36px' }}
              priority
            />
            <span style={{
              marginLeft: '10px',
              fontFamily: "'Syne',sans-serif",
              fontWeight: '800', fontSize: '20px', letterSpacing: '-0.03em',
              color: 'var(--cream)',
            }}>kwikkit</span>
          </Link>

          {/* ── Desktop links ── */}
          <div className="nav-links" style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            {links.map(l => (
              <Link key={l.label} href={l.href}
                style={{
                  color: activeLink === l.href ? 'var(--yellow)' : 'rgba(253,248,242,0.75)',
                  textDecoration: 'none', fontSize: '14px', fontWeight: '500',
                  padding: '7px 14px', borderRadius: '8px',
                  transition: 'color 0.2s ease, background 0.2s ease',
                  letterSpacing: '-0.01em',
                }}
                onMouseEnter={e => { e.currentTarget.style.color = 'var(--cream)'; e.currentTarget.style.background = 'rgba(255,255,255,0.08)'; }}
                onMouseLeave={e => { e.currentTarget.style.color = activeLink === l.href ? 'var(--yellow)' : 'rgba(253,248,242,0.75)'; e.currentTarget.style.background = 'transparent'; }}
                onClick={() => setActiveLink(l.href)}
              >
                {l.label}
              </Link>
            ))}
          </div>

          {/* ── Right: CTA + hamburger ── */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Link href="/#download"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '7px',
                background: 'var(--yellow)', color: 'var(--green-dark)',
                padding: '8px 20px', borderRadius: '100px',
                fontWeight: '700', fontSize: '13px', textDecoration: 'none',
                letterSpacing: '-0.01em',
                boxShadow: '0 4px 18px rgba(255,229,0,0.3)',
                transition: 'transform 0.25s cubic-bezier(.34,1.56,.64,1), box-shadow 0.25s ease',
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 28px rgba(255,229,0,0.45)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 18px rgba(255,229,0,0.3)'; }}
            >
              Download
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 3v13M5 13l7 7 7-7" /></svg>
            </Link>

            {/* hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="nav-hamburger"
              style={{ display: 'none', background: 'none', border: 'none', cursor: 'pointer', padding: '6px', color: 'var(--cream)' }}
              aria-label="Toggle menu"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                {menuOpen
                  ? <><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></>
                  : <><line x1="3" y1="7" x2="21" y2="7" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="17" x2="21" y2="17" /></>
                }
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* ── Mobile fullscreen menu ── */}
      <div style={{
        position: 'fixed', inset: 0, zIndex: 999,
        background: '#040909',
        display: 'flex', flexDirection: 'column',
        justifyContent: 'flex-start',
        padding: '110px 24px 32px',
        transform: menuOpen ? 'translateX(0)' : 'translateX(100%)',
        transition: 'transform 0.45s cubic-bezier(.77,0,.175,1)',
        overflowY: 'auto',
        overflowX: 'hidden', // Prevents horizontal scroll indicator
      }}>
        {/* Background Gradients & Grids */}
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(255,255,255,0.012) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.012) 1px, transparent 1px)', backgroundSize: '56px 56px', pointerEvents: 'none', opacity: menuOpen ? 0.8 : 0, transition: 'opacity 0.6s ease' }} />
        <div style={{ position: 'absolute', top: '10%', left: '-30%', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(0,95,87,0.18) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: '15%', right: '-30%', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(255,229,0,0.04) 0%, transparent 70%)', pointerEvents: 'none' }} />

        {/* Content Wrapper */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          flexGrow: 1, // Stretches wrapper to fill remaining viewport height
          width: '100%',
          maxWidth: '480px',
          margin: '0 auto',
          position: 'relative',
          zIndex: 2,
        }}>
          {/* Links List Container */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '36px', // Larger gap to separate options
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            margin: 'auto 0', // Dynamically centers vertically in the space
            paddingBottom: '40px', // Ensures a safe margin above CTA
            paddingTop: '20px'
          }}>
            {links.map((l, i) => (
              <Link key={l.label} href={l.href}
                onClick={() => setMenuOpen(false)}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '4px',
                  textDecoration: 'none',
                  opacity: menuOpen ? 1 : 0,
                  transform: menuOpen ? 'translateY(0)' : 'translateY(20px)',
                  transition: `opacity 0.4s ease ${i * 0.05 + 0.1}s, transform 0.4s ease ${i * 0.05 + 0.1}s`,
                  outline: 'none',
                  textAlign: 'center',
                }}
                className="mobile-nav-item"
              >
                {/* Text Group */}
                <span style={{
                  color: 'var(--cream)',
                  fontFamily: "'Syne',sans-serif",
                  fontSize: '22px',
                  fontWeight: '800',
                  letterSpacing: '-0.02em',
                  transition: 'color 0.2s ease',
                }} className="mobile-nav-label">
                  {l.label}
                </span>
                <span style={{
                  color: 'rgba(253, 248, 242, 0.45)',
                  fontSize: '12.5px',
                  fontWeight: '450',
                  lineHeight: '1.4',
                  maxWidth: '280px', // Restrict width so it wraps nicely in center
                }}>
                  {l.desc}
                </span>
              </Link>
            ))}
          </div>

          {/* Bottom Section */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '24px',
            width: '100%',
            opacity: menuOpen ? 1 : 0,
            transform: menuOpen ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.4s ease 0.4s, transform 0.4s ease 0.4s',
          }}>
            {/* CTA */}
            <Link href="/#download"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%',
                background: 'var(--yellow)',
                color: 'var(--green-dark)',
                padding: '14px 28px',
                borderRadius: '100px',
                fontWeight: '800',
                fontSize: '14px',
                fontFamily: "'Syne', sans-serif",
                textDecoration: 'none',
                boxShadow: '0 4px 20px rgba(255, 229, 0, 0.25)',
                textAlign: 'center',
              }}
              onClick={() => setMenuOpen(false)}
            >
              Download App
            </Link>

            {/* Socials & Info */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '12px',
              width: '100%',
              borderTop: '1px solid rgba(255, 255, 255, 0.05)',
              paddingTop: '20px'
            }}>
              <div style={{ display: 'flex', gap: '16px' }}>
                <a href="https://www.instagram.com/kwikkitindia/" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(253, 248, 242, 0.4)', textDecoration: 'none', fontSize: '12px', fontWeight: '500' }}>Instagram</a>
                <a href="https://x.com/kwikkitindia" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(253, 248, 242, 0.4)', textDecoration: 'none', fontSize: '12px', fontWeight: '500' }}>Twitter</a>
                <a href="https://www.linkedin.com/in/kwikkitindia" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(253, 248, 242, 0.4)', textDecoration: 'none', fontSize: '12px', fontWeight: '500' }}>LinkedIn</a>
              </div>
              <p style={{ margin: 0, fontSize: '11px', color: 'rgba(253, 248, 242, 0.25)', fontWeight: '500' }}>
                info@kwikkit.in &nbsp;&middot;&nbsp; +91 86995 55046
              </p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 840px) {
          .nav-links { display: none !important; }
          .nav-hamburger { display: flex !important; }
          .mobile-nav-item:active .mobile-nav-label {
            color: var(--yellow) !important;
          }
        }
      `}</style>
    </>
  );
}
