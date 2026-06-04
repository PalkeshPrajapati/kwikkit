'use client';
import Link from 'next/link';
import { ArrowRight, Check, CheckCircle2, ShieldCheck, HeartHandshake } from 'lucide-react';

export default function ZeroCommissionPage() {
  return (
    <main style={{ background: '#FAF9F6', minHeight: '100vh', paddingBottom: '120px', fontFamily: "'Inter', sans-serif" }}>
      
      {/* ─── Hero Section ─── */}
      <section style={{
        background: 'linear-gradient(135deg, var(--green-dark) 0%, var(--green) 100%)',
        padding: '160px 28px 100px',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
        position: 'relative',
        overflow: 'hidden',
        textAlign: 'center'
      }}>
        {/* Pattern Background */}
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
          opacity: 0.8,
          pointerEvents: 'none'
        }} />
        <div style={{ position: 'absolute', top: '-10%', left: '-5%', width: '400px', height: '400px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(0,155,141,0.08) 0%, transparent 70%)', pointerEvents: 'none' }} />

        <div style={{ maxWidth: '800px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: 'rgba(255, 255, 255, 0.04)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            padding: '5px 14px',
            borderRadius: '100px',
            marginBottom: '28px'
          }}>
            <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: 'var(--yellow)' }} />
            <span style={{ fontSize: '10.5px', fontWeight: '700', color: 'var(--yellow)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              For Restaurants
            </span>
          </div>

          <h1 style={{
            fontFamily: "'Syne', sans-serif",
            fontWeight: '800',
            fontSize: 'clamp(36px, 5.5vw, 60px)',
            color: 'var(--cream)',
            lineHeight: '1.15',
            letterSpacing: '-0.025em',
            marginBottom: '32px'
          }}>
            Zero commission. <br style={{ display: 'none' }} className="hero-br" />
            <span style={{ background: 'linear-gradient(90deg, var(--yellow) 0%, #fff9a0 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Not a promotion. Our model.
            </span>
          </h1>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '40px' }}>
            <p style={{
              fontSize: 'clamp(16px, 1.8vw, 19px)',
              lineHeight: '1.6',
              color: 'rgba(253, 248, 242, 0.95)',
              maxWidth: '680px',
              margin: '0 auto'
            }}>
              Every other platform charges restaurants 20–30% on every order.
            </p>
            <p style={{
              fontSize: 'clamp(22px, 2.4vw, 28px)',
              lineHeight: '1.4',
              fontWeight: '800',
              color: 'var(--yellow)',
              maxWidth: '680px',
              margin: '0 auto',
              letterSpacing: '-0.01em'
            }}>
              We charge zero.
            </p>
            <p style={{
              fontSize: 'clamp(16px, 1.8vw, 19px)',
              lineHeight: '1.6',
              color: 'rgba(253, 248, 242, 0.75)',
              maxWidth: '680px',
              margin: '0 auto'
            }}>
              Here's exactly how our model works and why it's sustainable.
            </p>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Link href="/restaurants" style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              background: 'var(--yellow)', color: 'var(--green-dark)',
              padding: '16px 36px', borderRadius: '100px',
              fontWeight: '800', fontSize: '15px', textDecoration: 'none',
              boxShadow: '0 6px 20px rgba(255,229,0,0.3)',
              transition: 'transform 0.25s ease, box-shadow 0.25s ease'
            }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 10px 28px rgba(255,229,0,0.45)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '0 6px 20px rgba(255,229,0,0.3)'; }}>
              Partner With Kwikkit
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── Main Content Wrapper ─── */}
      <div style={{ maxWidth: '850px', margin: '0 auto', padding: '0 24px' }}>

        {/* ─── Revenue Comparison Section ─── */}
        <section style={{ marginTop: '90px' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <h2 style={{ fontFamily: "'Syne', sans-serif", fontWeight: '800', fontSize: 'clamp(26px, 3.8vw, 36px)', color: '#111827', marginBottom: '12px' }}>
              Revenue Comparison
            </h2>
            <p style={{ fontSize: '16px', color: '#6B7280', maxWidth: '520px', margin: '0 auto', lineHeight: '1.5' }}>
              See how traditional platform commissions erode restaurant revenue compared to Kwikkit's zero-commission structure.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '28px',
            marginBottom: '32px'
          }} className="comparison-grid">
            
            {/* Traditional Card */}
            <div style={{
              border: '1px solid #FCA5A5',
              borderRadius: '20px',
              background: '#FFFFFF',
              padding: '36px',
              boxShadow: '0 4px 20px rgba(239, 68, 68, 0.02)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
                  <h4 style={{ fontWeight: '800', fontSize: '15px', color: '#B91C1C', textTransform: 'uppercase', letterSpacing: '0.02em' }}>Traditional Platform</h4>
                  <span style={{ background: '#FEE2E2', color: '#B91C1C', padding: '5px 12px', borderRadius: '8px', fontSize: '12px', fontWeight: '750' }}>₹10,000 GMV</span>
                </div>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', fontSize: '15px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px dashed #E5E7EB', paddingBottom: '10px' }}>
                    <span style={{ color: '#6B7280' }}>Your Gross Revenue</span>
                    <strong style={{ color: '#111827' }}>₹10,000</strong>
                  </div>
                  
                  <div style={{ marginTop: '6px', fontSize: '11px', fontWeight: '800', textTransform: 'uppercase', color: '#9CA3AF', letterSpacing: '0.06em' }}>Deductions</div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px dashed #E5E7EB', paddingBottom: '10px', color: '#EF4444' }}>
                    <span>Platform Commission (25%)</span>
                    <span style={{ fontWeight: '600' }}>→ ₹2,500</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px dashed #FCA5A5', paddingBottom: '10px', color: '#EF4444' }}>
                    <span>Payment Gateway (2%)</span>
                    <span style={{ fontWeight: '600' }}>→ ₹200</span>
                  </div>
                </div>
              </div>
              
              <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: '20px', marginTop: '24px', borderTop: '1px solid #FEE2E2', fontWeight: '800', alignItems: 'center' }}>
                <span style={{ color: '#4B5563' }}>You Keep</span>
                <span style={{ color: '#B91C1C', fontSize: '24px', fontFamily: "'Syne', sans-serif" }}>₹7,300</span>
              </div>
            </div>

            {/* Kwikkit Card */}
            <div style={{
              border: '2px solid rgba(0, 155, 141, 0.4)',
              borderRadius: '20px',
              background: '#FFFFFF',
              padding: '36px',
              boxShadow: '0 8px 30px rgba(0, 155, 141, 0.05)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              position: 'relative'
            }}>
              <div style={{
                position: 'absolute',
                top: '-12px',
                right: '24px',
                background: 'var(--green)',
                color: 'var(--cream)',
                fontSize: '11px',
                fontWeight: '800',
                padding: '4px 12px',
                borderRadius: '100px',
                textTransform: 'uppercase',
                letterSpacing: '0.04em'
              }}>
                Our Model
              </div>

              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
                  <h4 style={{ fontWeight: '800', fontSize: '15px', color: 'var(--green-dark)', textTransform: 'uppercase', letterSpacing: '0.02em' }}>Kwikkit</h4>
                  <span style={{ background: '#E0F2F1', color: 'var(--green-dark)', padding: '5px 12px', borderRadius: '8px', fontSize: '12px', fontWeight: '750' }}>₹10,000 GMV</span>
                </div>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', fontSize: '15px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px dashed #E5E7EB', paddingBottom: '10px' }}>
                    <span style={{ color: '#6B7280' }}>Your Gross Revenue</span>
                    <strong style={{ color: '#111827' }}>₹10,000</strong>
                  </div>
                  
                  <div style={{ marginTop: '6px', fontSize: '11px', fontWeight: '800', textTransform: 'uppercase', color: '#9CA3AF', letterSpacing: '0.06em' }}>Deductions</div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px dashed #E5E7EB', paddingBottom: '10px', color: 'var(--green)' }}>
                    <span style={{ fontWeight: '600' }}>Platform Commission</span>
                    <strong style={{ fontSize: '16px' }}>→ ₹0</strong>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px dashed rgba(0, 155, 141, 0.25)', paddingBottom: '10px', color: '#EF4444' }}>
                    <span>Payment Gateway (~2%)</span>
                    <span style={{ fontWeight: '600' }}>→ ₹200</span>
                  </div>
                </div>
              </div>
              
              <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: '20px', marginTop: '24px', borderTop: '2px solid rgba(0, 155, 141, 0.1)', fontWeight: '800', alignItems: 'center' }}>
                <span style={{ color: '#111827' }}>You Keep</span>
                <span style={{ color: 'var(--green-dark)', fontSize: '26px', fontFamily: "'Syne', sans-serif" }}>₹9,800</span>
              </div>
            </div>

          </div>

          {/* Savings Highlight */}
          <div style={{
            background: 'linear-gradient(90deg, #E0F2F1 0%, #F0F7F6 100%)',
            borderLeft: '4px solid var(--green)',
            padding: '24px 28px',
            borderRadius: '0 16px 16px 0',
            fontWeight: '800',
            fontSize: '17px',
            color: 'var(--green-dark)',
            textAlign: 'center',
            lineHeight: '1.5',
            boxShadow: '0 4px 15px rgba(0, 95, 87, 0.03)'
          }}>
            That's ₹2,500 more per ₹10,000 in orders — every single month.
          </div>
        </section>

        {/* ─── How We Sustain This Section ─── */}
        <section style={{ marginTop: '100px' }}>
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <h2 style={{ fontFamily: "'Syne', sans-serif", fontWeight: '800', fontSize: 'clamp(26px, 3.8vw, 36px)', color: '#111827', marginBottom: '14px' }}>
              How We Sustain This
            </h2>
            <p style={{ fontSize: '17px', color: '#4B5563', fontWeight: '500' }}>
              If restaurants pay ₹0, how does Kwikkit make money?
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            
            {/* Flat Delivery Fee */}
            <div style={{
              background: '#FFFFFF',
              border: '1px solid #E5E7EB',
              borderRadius: '20px',
              padding: '40px',
              boxShadow: '0 4px 20px rgba(0,0,0,0.015)',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <div style={{ position: 'absolute', top: 0, left: 0, width: '4px', height: '100%', background: 'var(--green)' }} />
              <div style={{ display: 'flex', gap: '16px', alignItems: 'center', marginBottom: '18px' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(0, 155, 141, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <ShieldCheck size={20} color="var(--green)" />
                </div>
                <h3 style={{ fontFamily: "'Syne', sans-serif", fontWeight: '800', fontSize: '19px', color: 'var(--green-dark)' }}>
                  Flat Delivery Fee
                </h3>
              </div>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                <p style={{ fontSize: '15px', lineHeight: '1.65', color: '#374151' }}>
                  Customers pay a small, transparent delivery fee per order.
                </p>
                <p style={{ fontSize: '15px', lineHeight: '1.65', color: '#374151' }}>
                  The fee is shown upfront and helps cover logistics and delivery costs.
                </p>
              </div>
            </div>

            {/* Optional Premium Tools */}
            <div style={{
              background: '#FFFFFF',
              border: '1px solid #E5E7EB',
              borderRadius: '20px',
              padding: '40px',
              boxShadow: '0 4px 20px rgba(0,0,0,0.015)',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <div style={{ position: 'absolute', top: 0, left: 0, width: '4px', height: '100%', background: 'var(--yellow)' }} />
              <div style={{ display: 'flex', gap: '16px', alignItems: 'center', marginBottom: '18px' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(255, 229, 0, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <HeartHandshake size={20} color="var(--green-dark)" />
                </div>
                <h3 style={{ fontFamily: "'Syne', sans-serif", fontWeight: '800', fontSize: '19px', color: 'var(--green-dark)' }}>
                  Optional Premium Tools
                </h3>
              </div>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <p style={{ fontSize: '15px', lineHeight: '1.65', color: '#374151' }}>
                  Restaurants can choose additional tools such as:
                </p>
                <ul style={{ paddingLeft: '20px', margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <li style={{ fontSize: '14.5px', color: '#4B5563', listStyleType: 'none', display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--green)', flexShrink: 0 }} />
                    Premium analytics
                  </li>
                  <li style={{ fontSize: '14.5px', color: '#4B5563', listStyleType: 'none', display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--green)', flexShrink: 0 }} />
                    Promotional features
                  </li>
                  <li style={{ fontSize: '14.5px', color: '#4B5563', listStyleType: 'none', display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--green)', flexShrink: 0 }} />
                    Priority placement
                  </li>
                </ul>
                <p style={{ 
                  fontSize: '13.5px', 
                  color: 'var(--green)', 
                  fontWeight: '700', 
                  background: '#E0F2F1', 
                  padding: '8px 16px', 
                  borderRadius: '8px', 
                  display: 'inline-block',
                  alignSelf: 'flex-start',
                  marginTop: '4px'
                }}>
                  These features are optional and never mandatory.
                </p>
              </div>
            </div>

            {/* Volume Over Extraction */}
            <div style={{
              background: '#FFFFFF',
              border: '1px solid #E5E7EB',
              borderRadius: '20px',
              padding: '40px',
              boxShadow: '0 4px 20px rgba(0,0,0,0.015)',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <div style={{ position: 'absolute', top: 0, left: 0, width: '4px', height: '100%', background: '#a78bfa' }} />
              <div style={{ display: 'flex', gap: '16px', alignItems: 'center', marginBottom: '18px' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(167, 139, 250, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <CheckCircle2 size={20} color="#a78bfa" />
                </div>
                <h3 style={{ fontFamily: "'Syne', sans-serif", fontWeight: '800', fontSize: '19px', color: 'var(--green-dark)' }}>
                  Volume Over Extraction
                </h3>
              </div>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <p style={{ fontSize: '15px', lineHeight: '1.65', color: '#374151' }}>
                  The platform focuses on:
                </p>
                <ul style={{ paddingLeft: '20px', margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <li style={{ fontSize: '14.5px', color: '#4B5563', listStyleType: 'none', display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#a78bfa', flexShrink: 0 }} />
                    Fair economics for restaurants
                  </li>
                  <li style={{ fontSize: '14.5px', color: '#4B5563', listStyleType: 'none', display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#a78bfa', flexShrink: 0 }} />
                    More restaurant partnerships
                  </li>
                  <li style={{ fontSize: '14.5px', color: '#4B5563', listStyleType: 'none', display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#a78bfa', flexShrink: 0 }} />
                    Higher order volume
                  </li>
                  <li style={{ fontSize: '14.5px', color: '#4B5563', listStyleType: 'none', display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#a78bfa', flexShrink: 0 }} />
                    Sustainable long-term growth
                  </li>
                </ul>
                <p style={{ fontSize: '15px', lineHeight: '1.65', color: '#374151', fontStyle: 'italic', borderTop: '1px solid #F3F4F6', paddingTop: '12px', marginTop: '4px' }}>
                  instead of earning through commission deductions.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* ─── Final CTA Section ─── */}
        <section style={{ marginTop: '100px' }}>
          <div style={{
            background: 'linear-gradient(135deg, #091514 0%, #0c1a19 100%)',
            borderRadius: '24px',
            padding: '64px 48px',
            textAlign: 'center',
            color: 'var(--cream)',
            position: 'relative',
            overflow: 'hidden',
            boxShadow: '0 10px 40px rgba(0,0,0,0.1)'
          }}>
            <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(255,255,255,0.01) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.01) 1px, transparent 1px)', backgroundSize: '30px 30px', pointerEvents: 'none' }} />
            
            <div style={{ position: 'relative', zIndex: 1 }}>
              <h3 style={{ fontFamily: "'Syne', sans-serif", fontWeight: '800', fontSize: 'clamp(26px, 3.8vw, 36px)', color: 'var(--cream)', marginBottom: '16px' }}>
                Ready to keep more of what you earn?
              </h3>
              <p style={{ fontSize: '16px', color: 'rgba(253, 248, 242, 0.75)', maxWidth: '500px', margin: '0 auto 40px', lineHeight: '1.6' }}>
                Partner with Kwikkit and start your zero-commission journey today.
              </p>

              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Link href="/restaurants" style={{
                  display: 'inline-flex', alignItems: 'center', gap: '8px',
                  background: 'var(--yellow)', color: 'var(--green-dark)',
                  padding: '16px 40px', borderRadius: '100px',
                  fontWeight: '800', fontSize: '15px', textDecoration: 'none',
                  boxShadow: '0 4px 18px rgba(255,229,0,0.2)',
                  transition: 'transform 0.25s ease, box-shadow 0.25s ease'
                }}
                  onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 10px 28px rgba(255,229,0,0.4)'; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '0 4px 18px rgba(255,229,0,0.2)'; }}>
                  Partner With Kwikkit
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </section>

      </div>

      <style>{`
        @media (max-width: 768px) {
          .hero-br {
            display: block !important;
          }
        }
        @media (max-width: 680px) {
          .comparison-grid {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
          }
        }
      `}</style>
    </main>
  );
}
