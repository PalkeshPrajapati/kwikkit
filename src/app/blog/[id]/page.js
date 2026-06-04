import Link from 'next/link';
import Image from 'next/image';
import { Calendar, Clock, ArrowLeft } from 'lucide-react';
import { articles } from '../articlesData';

export default async function BlogArticlePage({ params }) {
  const { id } = await params;
  const article = articles.find(a => a.id === id);

  if (!article) {
    return (
      <div style={{
        background: 'var(--cream)',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px',
        textAlign: 'center',
      }}>
        <h1 style={{ fontFamily: "'Syne', sans-serif", fontWeight: '800', color: 'var(--green-dark)', marginBottom: '16px' }}>Article Not Found</h1>
        <p style={{ color: 'var(--text-muted)', marginBottom: '24px' }}>The blog post you are looking for does not exist.</p>
        <Link href="/blog" className="btn btn-primary" style={{ textDecoration: 'none' }}>
          Back to Blog
        </Link>
      </div>
    );
  }

  return (
    <main style={{ background: 'var(--cream)', minHeight: '100vh', paddingBottom: '100px' }}>
      {/* ── Hero Section (Unified Style) ── */}
      <section style={{ position: 'relative', minHeight: '52vh', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <Image
            src="/herobg/blog-herobg.png"
            alt=""
            fill
            priority
            style={{ objectFit: 'cover', objectPosition: 'center 30%' }}
            sizes="100vw"
          />
          <div style={{ position: 'absolute', inset: 0, background: 'rgba(3,11,10,0.8)' }} />
          <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)', backgroundSize: '64px 64px', pointerEvents: 'none' }} />
        </div>

        <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', padding: '140px 28px 60px', maxWidth: '960px', margin: '0 auto', width: '100%' }}>
          {/* Eyebrow / Category */}
          <div style={{ display: 'inline-flex', gap: '8px', alignItems: 'center', background: 'rgba(255,229,0,0.09)', border: '1px solid rgba(255,229,0,0.22)', padding: '6px 18px', borderRadius: '100px', marginBottom: '24px', fontSize: '11px', fontWeight: '700', color: 'var(--yellow)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
            {article.category}
          </div>

          {/* Title */}
          <h1 style={{
            fontFamily: "'Syne', sans-serif",
            fontWeight: '800',
            fontSize: 'clamp(24px, 4vw, 48px)',
            lineHeight: '1.15',
            letterSpacing: '-0.02em',
            color: 'var(--cream)',
            maxWidth: '880px',
            margin: '0 auto 20px',
          }}>
            {article.title}
          </h1>

          {/* Read time and date */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', color: 'rgba(253,248,242,0.45)', fontSize: '13px', fontWeight: '600' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              <Clock size={14} /> {article.readTime}
            </span>
            <span>•</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              <Calendar size={14} /> {article.published}
            </span>
          </div>
        </div>
      </section>

      {/* ── Content Area ── */}
      <div className="section-wrap" style={{ marginTop: '50px', position: 'relative' }}>
        {/* Back Link */}
        <div style={{ marginBottom: '32px' }}>
          <Link href="/blog" className="back-to-blog" style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            color: 'var(--green)',
            textDecoration: 'none',
            fontWeight: '700',
            fontSize: '15px',
            transition: 'transform 0.2s ease',
          }}>
            <ArrowLeft size={16} strokeWidth={2.5} />
            Back to Blog
          </Link>
        </div>

        {/* Article Box */}
        <div style={{
          background: '#ffffff',
          borderRadius: '24px',
          border: '1px solid rgba(0, 95, 87, 0.08)',
          boxShadow: '0 12px 40px rgba(0, 95, 87, 0.03)',
          padding: 'clamp(28px, 5vw, 60px) clamp(20px, 4vw, 50px)',
          maxWidth: '820px',
          margin: '0 auto',
        }}>
          {/* Subtitle */}
          {article.subtitle && (
            <p style={{
              fontSize: 'clamp(15px, 2.5vw, 19px)',
              lineHeight: '1.65',
              color: 'var(--text-primary)',
              opacity: 0.85,
              marginBottom: '36px',
              fontWeight: '500',
              fontStyle: 'italic',
              borderLeft: '3px solid var(--green)',
              paddingLeft: '16px',
            }}>
              {article.subtitle}
            </p>
          )}

          {/* Author Strip */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            paddingBottom: '20px',
            marginBottom: '32px',
            borderBottom: '1px dashed rgba(0, 95, 87, 0.1)',
          }}>
            <div style={{
              width: '38px',
              height: '38px',
              borderRadius: '50%',
              background: 'var(--green)',
              color: 'var(--cream)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '14px',
              fontWeight: '700',
              fontFamily: "'Syne', sans-serif",
            }}>
              KT
            </div>
            <div>
              <div style={{ fontSize: '14px', fontWeight: '750', color: 'var(--text-primary)' }}>
                Published by {article.author}
              </div>
              <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>
                Kwikkit Editorial
              </div>
            </div>

            <div style={{ marginLeft: 'auto', display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              {article.tags?.map(t => (
                <span key={t} style={{
                  fontSize: '11px',
                  fontWeight: '600',
                  color: 'var(--green)',
                  background: 'rgba(0, 95, 87, 0.05)',
                  padding: '4px 10px',
                  borderRadius: '100px',
                }}>
                  #{t}
                </span>
              ))}
            </div>
          </div>

          {/* Article content */}
          <div className="article-body-content" style={{ color: 'var(--text-primary)' }}>
            {article.content}
          </div>
        </div>
      </div>
      <style>{`
        .back-to-blog:hover {
          transform: translateX(-4px);
        }
      `}</style>
    </main>
  );
}
