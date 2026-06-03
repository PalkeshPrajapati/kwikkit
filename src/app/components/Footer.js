'use client';
import Image from 'next/image';
import Link from 'next/link';

const year = new Date().getFullYear();

const cols = [
  {
    heading: 'Product', links: [
      { l: 'Home', h: '/' },
      { l: 'Why Kwikkit', h: '#why' },
      { l: 'How It Works', h: '#how' },
      { l: 'Download App', h: '#download' },
      { l: 'Blog', h: '#blog' },
    ]
  },
  {
    heading: 'For Restaurants', links: [
      { l: 'Partner With Us', h: '#restaurants' },
      { l: 'Zero Commission', h: '#restaurants' },
      { l: 'Easy Onboarding', h: '#restaurants' },
      { l: 'Savings Calculator', h: '#restaurants' },
    ]
  },
  {
    heading: 'Company', links: [
      { l: 'About Us', h: '#story' },
      { l: 'Our Mission', h: '#story' },
      { l: 'Careers', h: '#contact' },
    ]
  },
  {
    heading: 'Legal', links: [
      { l: 'Terms & Conditions', h: '#' },
      { l: 'Privacy Policy', h: '#' },
    ]
  },
];

export default function Footer() {
  return (
    <footer id="contact" style={{
      background: '#060e0d',
      borderTop: '1px solid rgba(255,255,255,0.04)',
    }}>
      <div className="section-wrap" style={{ padding: '72px 28px 0' }}>

        {/* top grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.8fr 1fr 1fr 1fr',
          gap: '48px',
          paddingBottom: '56px',
          borderBottom: '1px solid rgba(255,255,255,0.06)',
        }}>
          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '18px' }}>
              <Image src="/logo/logo-android.jpg" alt="Kwikkit" width={34} height={34} style={{ borderRadius: '9px', width: '34px', height: '34px' }} />
              <span style={{ fontFamily: "'Syne',sans-serif", fontWeight: '800', fontSize: '19px', letterSpacing: '-0.03em', color: 'var(--cream)' }}>
                kwikkit
              </span>
            </div>
            <p style={{ fontSize: '14px', lineHeight: '1.7', color: 'rgba(253,248,242,0.38)', maxWidth: '200px', marginBottom: '28px' }}>
              Zero-commission food delivery for Chandigarh Tricity.
            </p>
            {/* contact */}
            {[
              { icon: <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>, text: 'info@kwikkit.in', href: 'mailto:info@kwikkit.in' },
              { icon: <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.5 11.5 19.79 19.79 0 011.5 2.83 2 2 0 013.49 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L7.91 8.91a16 16 0 006.18 6.18l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" /></svg>, text: '+91 86995 55046', href: 'tel:+919876543210' },
            ].map(c => (
              <a key={c.text} href={c.href} style={{
                display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px',
                color: 'rgba(253,248,242,0.42)', textDecoration: 'none', fontSize: '13px',
                transition: 'color 0.2s ease',
              }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--yellow)'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(253,248,242,0.42)'}>
                {c.icon}{c.text}
              </a>
            ))}
          </div>

          {/* Nav cols */}
          {cols.map(col => (
            <div key={col.heading}>
              <h4 style={{ fontSize: '11px', fontWeight: '700', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(253,248,242,0.25)', marginBottom: '18px' }}>
                {col.heading}
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '11px' }}>
                {col.links.map(link => (
                  <Link key={link.l} href={link.h} style={{
                    fontSize: '14px', color: 'rgba(253,248,242,0.48)',
                    textDecoration: 'none', transition: 'color 0.2s ease',
                  }}
                    onMouseEnter={e => e.currentTarget.style.color = 'var(--cream)'}
                    onMouseLeave={e => e.currentTarget.style.color = 'rgba(253,248,242,0.48)'}>
                    {link.l}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* bottom bar */}
        <div style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          padding: '24px 0', flexWrap: 'wrap', gap: '12px',
        }}>
          <p style={{ fontSize: '13px', color: 'rgba(253,248,242,0.2)' }}>
            © {year} Kwikkit · Made with ❤️ in Chandigarh
          </p>
          <span style={{ fontSize: '12px', color: 'rgba(253,248,242,0.15)', fontWeight: '500' }}>
            Honest food delivery since 2024
          </span>
        </div>
      </div>

      <style>{`
        @media (max-width:860px){
          footer .section-wrap > div:first-child { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width:540px){
          footer .section-wrap > div:first-child { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
}
