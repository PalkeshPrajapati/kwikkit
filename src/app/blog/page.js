'use client';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Clock,
  Calendar,
  BookOpen,
  ArrowRight
} from 'lucide-react';
import { articles } from './articlesData';

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

export default function BlogPage() {
  const pageRef = useRef(null);
  useReveal(pageRef);

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 80);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main ref={pageRef} style={{ background: 'var(--cream)', minHeight: '100vh', overflowX: 'hidden' }}>

      {/* ═══════════════════════════════════════════════════
         SECTION 1 — HERO SECTION
      ═══════════════════════════════════════════════════ */}
      <section style={{ position: 'relative', minHeight: '92vh', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>

        {/* ── Background ── */}
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <Image
            src="/herobg/blog-herobg.png"
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
            Fresh Perspective
          </div>

          {/* Headline */}
          <h1 style={{
            opacity: loaded ? 1 : 0, transform: loaded ? 'translateY(0)' : 'translateY(24px)',
            transition: 'opacity 0.7s ease 0.15s, transform 0.7s ease 0.15s',
            fontFamily: "'Syne', sans-serif", fontWeight: '800',
            fontSize: 'clamp(28px,5.8vw,80px)', lineHeight: '1.05', letterSpacing: '-0.03em',
            color: 'var(--cream)', maxWidth: '980px', margin: '0 auto 28px'
          }}>
            Kwikkit <span style={{
              background: 'linear-gradient(90deg, var(--yellow) 0%, #fffaaa 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>Blog</span>
          </h1>

          {/* Subtitle / Description */}
          <p style={{
            opacity: loaded ? 1 : 0, transform: loaded ? 'translateY(0)' : 'translateY(24px)',
            transition: 'opacity 0.7s ease 0.28s, transform 0.7s ease 0.28s',
            fontSize: '18px', lineHeight: '1.75', color: 'rgba(253,248,242,0.5)', maxWidth: '720px', margin: '0 auto 48px'
          }}>
            Honest takes on food delivery in India. Industry insights, Chandigarh food culture, and the story behind why Kwikkit was built.
          </p>

          {/* Scroll hint */}
          <div style={{
            opacity: loaded ? 1 : 0, transform: loaded ? 'translateY(0)' : 'translateY(24px)',
            transition: 'opacity 0.7s ease 0.4s, transform 0.7s ease 0.4s',
            marginTop: '80px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px'
          }}>
            <span style={{ fontSize: '10px', color: 'rgba(253, 248, 242, 0.25)', letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: '600' }}>Articles</span>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '3px', animation: 'chevDrop 2.2s ease-in-out infinite' }}>
              {[0, 1].map(i => (
                <svg key={i} width="16" height="10" viewBox="0 0 16 10" fill="none" style={{ opacity: 0.4 - i * 0.15 }}>
                  <path d="M1 1l7 7 7-7" stroke="var(--yellow)" strokeWidth="2" strokeLinecap="round" />
                </svg>
              ))}
            </div>
          </div>

        </div>

        <style>{`
          @keyframes blinkY { 0%,100%{opacity:1} 50%{opacity:0.25} }
          @keyframes chevDrop { 0%,100%{transform:translateY(0)} 50%{transform:translateY(6px)} }
        `}</style>
      </section>

      {/* ═══════════════════════════════════════════════════
         SECTION 2 — FEATURED ARTICLES SECTION
      ═══════════════════════════════════════════════════ */}
      <section style={{
        position: 'relative',
        padding: '120px 0',
        overflow: 'hidden',
        backgroundImage: 'url(/blog-food-bg.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
      }}>
        {/* Soft Organic Background Overlay to keep cards readable but texture visible */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'rgba(253, 248, 242, 0.88)',
          zIndex: 0,
        }} />

        <div className="section-wrap" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ textAlign: 'center', marginBottom: '72px' }}>
            <span className="reveal tag tag-green" style={{ marginBottom: '16px' }}>Publications</span>
            <h2 className="reveal heading-display heading-lg" style={{ color: 'var(--text-primary)', marginBottom: '16px' }}>
              Featured <span className="gradient-text-green">Articles</span>
            </h2>
            <p className="reveal" style={{ fontSize: '16px', color: 'var(--text-primary)', maxWidth: '480px', margin: '0 auto' }}>
              Delivering facts and fair comparisons about the food tech industry.
            </p>
          </div>

          <div className="blog-grid">
            {articles.map((article, i) => (
              <div key={article.id} className="reveal-scale" style={{ transitionDelay: `${i * 100}ms` }}>
                <Link href={`/blog/${article.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                  <article
                    className="surface-card"
                    style={{
                      padding: '36px 32px',
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      boxShadow: '0 10px 40px rgba(0, 95, 87, 0.04)',
                      background: 'var(--white)',
                      border: '1px solid rgba(0, 95, 87, 0.06)',
                      borderRadius: '24px',
                      position: 'relative',
                      overflow: 'hidden',
                      cursor: 'pointer',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-8px)';
                      e.currentTarget.style.boxShadow = '0 24px 50px rgba(0, 95, 87, 0.12)';
                      e.currentTarget.style.borderColor = 'rgba(0, 95, 87, 0.18)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = '';
                      e.currentTarget.style.boxShadow = '0 10px 40px rgba(0, 95, 87, 0.04)';
                      e.currentTarget.style.borderColor = 'rgba(0, 95, 87, 0.06)';
                    }}
                  >
                    <div>
                      {/* Meta row */}
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px' }}>
                        <span style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '6px',
                          padding: '6px 14px',
                          borderRadius: '100px',
                          fontSize: '11px',
                          fontWeight: '700',
                          textTransform: 'uppercase',
                          letterSpacing: '0.06em',
                          color: article.category === 'Industry' ? 'var(--green-dark)' : '#9c8100',
                          background: article.categoryBg,
                        }}>
                          <BookOpen size={11} />
                          {article.category}
                        </span>

                        <span style={{
                          fontSize: '13px',
                          color: 'var(--text-primary)',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '6px',
                          fontWeight: '500',
                          marginLeft: 'auto',
                        }}>
                          <Clock size={13} style={{ color: 'var(--green-light)' }} />
                          {article.readTime}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 style={{
                        fontFamily: "'Syne', sans-serif",
                        fontWeight: '800',
                        fontSize: 'clamp(15px, 2.2vw, 22px)',
                        lineHeight: '1.35',
                        letterSpacing: '-0.02em',
                        color: 'var(--text-primary)',
                        marginBottom: '16px',
                      }}>
                        {article.title}
                      </h3>

                      {/* Summary */}
                      <p style={{
                        fontSize: '14px',
                        lineHeight: '1.75',
                        color: 'var(--text-muted)',
                        marginBottom: '32px',
                      }}>
                        {article.summary}
                      </p>
                    </div>

                    {/* Footer Row */}
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      paddingTop: '20px',
                      borderTop: '1px solid rgba(0, 95, 87, 0.06)',
                    }}>
                      {/* Author info */}
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <div style={{
                          width: '32px',
                          height: '32px',
                          borderRadius: '50%',
                          background: 'var(--green)',
                          color: 'var(--cream)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '12px',
                          fontWeight: '700',
                          fontFamily: "'Syne', sans-serif",
                        }}>
                          KT
                        </div>
                        <div>
                          <div style={{ fontSize: '13px', fontWeight: '700', color: 'var(--text-primary)' }}>
                            {article.author}
                          </div>
                          <div style={{
                            fontSize: '11px',
                            color: 'var(--text-muted)',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '4px',
                            marginTop: '2px',
                          }}>
                            <Calendar size={10} />
                            {article.published}
                          </div>
                        </div>
                      </div>

                      {/* Action Arrow */}
                      <div className="card-arrow" style={{
                        width: '36px',
                        height: '36px',
                        borderRadius: '50%',
                        background: 'rgba(0, 95, 87, 0.05)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--green)',
                        transition: 'background 0.3s ease, color 0.3s ease, transform 0.3s ease',
                      }}>
                        <ArrowRight size={16} strokeWidth={2.5} />
                      </div>
                    </div>
                  </article>
                </Link>
              </div>
            ))}
          </div>
        </div>

        <style>{`
          .blog-grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 24px;
            max-width: 1280px;
            margin: 0 auto;
          }
          .reveal-scale {
            opacity: 0;
            transform: scale(0.95);
            transition: opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1), transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
          }
          .reveal-scale.visible {
            opacity: 1;
            transform: scale(1);
          }
          article:hover .card-arrow {
            background: var(--green) !important;
            color: var(--cream) !important;
            transform: translateX(4px);
          }
          @media (max-width: 1100px) {
            .blog-grid {
              grid-template-columns: repeat(2, 1fr);
            }
          }
          @media (max-width: 640px) {
            .blog-grid {
              grid-template-columns: 1fr;
            }
            .section-wrap {
              padding: 0 16px;
            }
          }
        `}</style>
      </section>
    </main>
  );
}
