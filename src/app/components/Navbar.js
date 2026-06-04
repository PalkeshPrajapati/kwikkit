'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const links = [
  { label: 'Why Kwikkit', href: '/why-kwikkit' },
  { label: 'How It Works', href: '/how-it-works' },
  { label: 'Our Story', href: '/story' },
  { label: 'Restaurants', href: '/restaurants' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
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
            <Link href="/download"
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
        background: 'var(--dark)',
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '32px',
        transform: menuOpen ? 'translateX(0)' : 'translateX(100%)',
        transition: 'transform 0.45s cubic-bezier(.77,0,.175,1)',
      }}>
        {links.map((l, i) => (
          <Link key={l.label} href={l.href}
            onClick={() => setMenuOpen(false)}
            style={{
              color: 'var(--cream)', textDecoration: 'none',
              fontFamily: "'Syne',sans-serif", fontSize: '32px', fontWeight: '800',
              letterSpacing: '-0.04em',
              opacity: menuOpen ? 1 : 0,
              transform: menuOpen ? 'translateY(0)' : 'translateY(20px)',
              transition: `opacity 0.45s ease ${i * 0.06 + 0.1}s, transform 0.45s ease ${i * 0.06 + 0.1}s`,
            }}
            onMouseEnter={e => e.currentTarget.style.color = 'var(--yellow)'}
            onMouseLeave={e => e.currentTarget.style.color = 'var(--cream)'}
          >{l.label}</Link>
        ))}
        <a href="#download" className="btn btn-yellow" style={{ marginTop: '16px' }} onClick={() => setMenuOpen(false)}>
          Download App
        </a>
      </div>

      <style>{`
        @media (max-width: 840px) {
          .nav-links { display: none !important; }
          .nav-hamburger { display: flex !important; }
        }
      `}</style>
    </>
  );
}
