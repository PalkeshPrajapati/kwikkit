'use client';
import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, ClipboardCheck, PhoneCall, FileText, Rocket, Check, ArrowRightLeft, Sparkles } from 'lucide-react';

export default function EasyOnboardingPage() {
  const [activeTab, setActiveTab] = useState(1);
  const [checkedItems, setCheckedItems] = useState({
    name: false,
    address: false,
    cuisine: false,
    hours: false,
    menu: false,
    photos: false,
  });

  const toggleCheck = (key) => {
    setCheckedItems(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const completedCount = Object.values(checkedItems).filter(Boolean).length;
  const progressPercent = Math.round((completedCount / Object.keys(checkedItems).length) * 100);

  const steps = [
    {
      id: 1,
      num: '01',
      title: 'Submit Your Details',
      timeline: '~3 min',
      desc: 'Fill out our short partner form.',
      icon: FileText,
      badgeColor: 'var(--yellow)',
      badgeBg: 'rgba(255, 229, 0, 0.15)',
      badgeText: 'var(--green-dark)',
      bullets: [
        'Restaurant name',
        'Contact details',
        'Restaurant address',
        'Cuisine type',
        'Operating hours'
      ],
      panelTitle: 'What We Need',
      panelItems: [
        'Name & Contact',
        'Restaurant Address',
        'Cuisine Type',
        'Operating Hours'
      ]
    },
    {
      id: 2,
      num: '02',
      title: 'We Call You Back',
      timeline: 'Within 24 hrs',
      desc: 'A dedicated Kwikkit partner manager will contact you.',
      icon: PhoneCall,
      badgeColor: 'var(--green)',
      badgeBg: 'rgba(0, 155, 141, 0.12)',
      badgeText: 'var(--green)',
      bullets: [
        'Explain the platform features',
        'Answer all your questions',
        'Guide you step-by-step through onboarding',
        'Set expectations clearly'
      ],
      panelTitle: 'Manager Call Includes',
      panelItems: [
        'Platform Walkthrough',
        'Setup Assistance',
        'Agreement Briefing',
        'Live Q&A Session'
      ]
    },
    {
      id: 3,
      num: '03',
      title: 'Build Your Menu',
      timeline: '~30 min',
      desc: 'Add your dishes using your actual menu prices.',
      icon: ClipboardCheck,
      badgeColor: '#a78bfa',
      badgeBg: 'rgba(167, 139, 250, 0.15)',
      badgeText: '#a78bfa',
      bullets: [
        'No inflation. No tricks.',
        'Our team can assist with menu setup if needed.',
        'Photos are optional but recommended.'
      ],
      panelTitle: 'Menu Setup Includes',
      panelItems: [
        'Upload Items',
        'Real Menu Prices',
        'Add Photos (Optional)'
      ]
    },
    {
      id: 4,
      num: '04',
      title: 'Go Live & Start Earning',
      timeline: 'Go Live',
      desc: 'Your restaurant becomes visible on the Kwikkit app.',
      icon: Rocket,
      badgeColor: '#34d399',
      badgeBg: 'rgba(52, 211, 153, 0.15)',
      badgeText: '#34d399',
      bullets: [
        'Start receiving customer orders immediately',
        'Full visibility on the food delivery platform',
        'Keep every rupee you earn',
        'Zero commission deductions'
      ],
      panelTitle: 'Launch Benefits',
      panelItems: [
        'Instant Order Dispatch',
        'Customer Discovery',
        '100% Takeaway Revenue',
        'No Commission Ever'
      ]
    }
  ];

  const handleStepClick = (id) => {
    setActiveTab(id);
    const element = document.getElementById(`step-card-${id}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

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
            fontSize: 'clamp(36px, 5.5vw, 56px)',
            color: 'var(--cream)',
            lineHeight: '1.2',
            letterSpacing: '-0.025em',
            marginBottom: '32px'
          }}>
            From sign-up to your first order <br style={{ display: 'none' }} className="hero-br" />
            <span style={{ background: 'linear-gradient(90deg, var(--yellow) 0%, #fff9a0 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              in under 24 hours.
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
              We've built the simplest restaurant onboarding in India.
            </p>
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '12px 24px',
              fontSize: 'clamp(14px, 1.6vw, 17px)',
              fontWeight: '600',
              color: 'var(--yellow)',
              maxWidth: '680px',
              margin: '6px auto 0'
            }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Check size={16} strokeWidth={3} /> No complicated contracts
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Check size={16} strokeWidth={3} /> No technical expertise needed
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Check size={16} strokeWidth={3} /> No waiting weeks to go live
              </span>
            </div>
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
              Get Started — It's Free
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── Main Content Wrapper ─── */}
      <div style={{ maxWidth: '850px', margin: '0 auto', padding: '0 24px' }}>

        {/* ─── Process Summary horizontal flow tracker ─── */}
        <section style={{ marginTop: '70px', marginBottom: '60px' }}>
          <div style={{ 
            background: '#FFFFFF',
            border: '1px solid #E5E7EB',
            borderRadius: '20px',
            padding: '24px 30px',
            boxShadow: '0 4px 20px rgba(0,0,0,0.01)'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
              <span style={{ fontSize: '11px', fontWeight: '800', textTransform: 'uppercase', color: '#9CA3AF', letterSpacing: '0.08em' }}>
                Process Summary
              </span>
              <span style={{ fontSize: '12px', fontWeight: '750', color: 'var(--green)' }}>
                Total Time: Under 24 Hours
              </span>
            </div>

            {/* Steps indicator */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr auto 1fr auto 1fr auto 1fr',
              alignItems: 'center',
              gap: '8px'
            }} className="flow-tracker">
              
              {steps.map((s, idx) => {
                const StepIcon = s.icon;
                const isSelected = activeTab === s.id;
                return (
                  <div key={s.id} style={{ display: 'contents' }}>
                    <button 
                      onClick={() => handleStepClick(s.id)}
                      style={{
                        all: 'unset',
                        cursor: 'pointer',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        textAlign: 'center',
                        padding: '12px 8px',
                        borderRadius: '12px',
                        background: isSelected ? 'rgba(0, 155, 141, 0.05)' : 'transparent',
                        border: isSelected ? '1px solid rgba(0, 155, 141, 0.15)' : '1px solid transparent',
                        transition: 'all 0.25s ease'
                      }}
                    >
                      <div style={{
                        width: '36px',
                        height: '36px',
                        borderRadius: '50%',
                        background: isSelected ? 'var(--green)' : '#F3F4F6',
                        color: isSelected ? '#FFFFFF' : '#6B7280',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: '8px',
                        fontWeight: '800',
                        fontSize: '13px',
                        transition: 'all 0.25s ease'
                      }}>
                        {s.id}
                      </div>
                      <span style={{ fontSize: '12px', fontWeight: '750', color: isSelected ? 'var(--green-dark)' : '#4B5563', transition: 'color 0.25s' }}>
                        {s.id === 1 ? 'Submit Details' : s.id === 2 ? 'Callback' : s.id === 3 ? 'Build Menu' : 'Go Live'}
                      </span>
                      <span style={{ fontSize: '10px', color: '#9CA3AF', marginTop: '2px' }}>
                        {s.timeline}
                      </span>
                    </button>
                    {idx < 3 && (
                      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#D1D5DB' }}>
                        <ArrowRight size={16} className="arrow-sep" />
                      </div>
                    )}
                  </div>
                );
              })}

            </div>
          </div>
        </section>

        {/* ─── Step Detail Cards ─── */}
        <section style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
          {steps.map((s) => {
            const StepIcon = s.icon;
            const isTabbed = activeTab === s.id;
            return (
              <div 
                id={`step-card-${s.id}`}
                key={s.id} 
                style={{
                  background: '#FFFFFF',
                  border: isTabbed ? '2px solid var(--green)' : '1px solid #E5E7EB',
                  borderRadius: '24px',
                  padding: '40px',
                  boxShadow: isTabbed ? '0 10px 30px rgba(0, 155, 141, 0.04)' : '0 4px 20px rgba(0,0,0,0.01)',
                  transition: 'all 0.3s ease',
                  position: 'relative'
                }}
                onMouseEnter={() => setActiveTab(s.id)}
              >
                {/* timeline float badge */}
                <div style={{
                  position: 'absolute',
                  top: '40px',
                  right: '40px',
                  background: s.badgeBg,
                  color: s.badgeText,
                  fontWeight: '800',
                  fontSize: '12px',
                  padding: '6px 14px',
                  borderRadius: '100px',
                  letterSpacing: '0.02em',
                  textTransform: 'uppercase'
                }}>
                  Timeline: {s.timeline}
                </div>

                {/* step count */}
                <div style={{
                  fontSize: '11px',
                  fontWeight: '800',
                  textTransform: 'uppercase',
                  color: s.badgeText,
                  letterSpacing: '0.1em',
                  marginBottom: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px'
                }}>
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: s.badgeColor }} />
                  Step {s.num}
                </div>

                <div style={{ display: 'flex', gap: '24px', alignItems: 'flex-start', marginTop: '16px' }} className="card-inner-split">
                  
                  {/* Icon */}
                  <div style={{
                    width: '56px',
                    height: '56px',
                    borderRadius: '16px',
                    background: s.badgeBg,
                    border: `1px solid ${s.badgeColor}22`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <StepIcon size={24} color={s.badgeColor} strokeWidth={2} />
                  </div>

                  <div style={{ flex: 1 }}>
                    <h3 style={{
                      fontFamily: "'Syne', sans-serif",
                      fontWeight: '800',
                      fontSize: '24px',
                      color: 'var(--green-dark)',
                      marginBottom: '12px',
                      lineHeight: '1.2'
                    }}>
                      {s.title}
                    </h3>
                    <p style={{ fontSize: '15.5px', color: '#4B5563', lineHeight: '1.65', marginBottom: '24px', fontWeight: '500' }}>
                      {s.desc}
                    </p>

                    {/* bullets */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '28px' }}>
                      {s.bullets.map((b, bIdx) => (
                        <div key={bIdx} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                          <div style={{ 
                            width: '18px', 
                            height: '18px', 
                            borderRadius: '50%', 
                            background: 'rgba(0, 155, 141, 0.08)', 
                            display: 'flex', 
                            alignItems: 'center', 
                            justifyContent: 'center',
                            flexShrink: 0,
                            marginTop: '2px'
                          }}>
                            <Check size={11} color="var(--green)" strokeWidth={3} />
                          </div>
                          <span style={{ fontSize: '14.5px', color: '#374151', lineHeight: '1.5' }}>{b}</span>
                        </div>
                      ))}
                    </div>

                    {/* what we need panel */}
                    <div style={{
                      background: '#F9FAFB',
                      borderRadius: '16px',
                      padding: '20px 24px',
                      border: '1px solid #F3F4F6'
                    }}>
                      <div style={{ fontSize: '12px', fontWeight: '800', textTransform: 'uppercase', color: '#9CA3AF', letterSpacing: '0.04em', marginBottom: '12px' }}>
                        {s.panelTitle}
                      </div>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                        {s.panelItems.map((pi, piIdx) => (
                          <span 
                            key={piIdx} 
                            style={{ 
                              background: '#FFFFFF', 
                              border: '1px solid #E5E7EB', 
                              color: 'var(--green-dark)', 
                              padding: '6px 14px', 
                              borderRadius: '8px', 
                              fontSize: '13px', 
                              fontWeight: '700' 
                            }}
                          >
                            {pi}
                          </span>
                        ))}
                      </div>
                    </div>

                  </div>
                </div>

              </div>
            );
          })}
        </section>

        {/* ─── Interactive Readiness Checklist ─── */}
        <section style={{ marginTop: '100px' }}>
          <div style={{ 
            background: '#FFFFFF',
            border: '2px solid rgba(255, 229, 0, 0.5)',
            borderRadius: '24px',
            padding: '40px',
            boxShadow: '0 10px 30px rgba(255, 229, 0, 0.03)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
              <Sparkles size={20} color="var(--green)" />
              <h3 style={{ fontFamily: "'Syne', sans-serif", fontWeight: '800', fontSize: '20px', color: 'var(--green-dark)' }}>
                Onboarding Readiness Checklist
              </h3>
            </div>
            <p style={{ fontSize: '14.5px', color: '#4B5563', marginBottom: '28px', lineHeight: '1.5' }}>
              Tick off the items you already have prepared to see how fast we can get your kitchen online.
            </p>

            {/* Checkbox Grid */}
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: '1fr 1fr', 
              gap: '16px', 
              marginBottom: '32px' 
            }} className="checkbox-grid">
              {[
                { key: 'name', label: 'Restaurant Name & Brand Details' },
                { key: 'address', label: 'Complete Restaurant Address' },
                { key: 'cuisine', label: 'Cuisine Types & Categories' },
                { key: 'hours', label: 'Operating / Opening Hours' },
                { key: 'menu', label: 'Menu Pricing & Dish List' },
                { key: 'photos', label: 'Food Photos (Optional)' }
              ].map((item) => (
                <label 
                  key={item.key} 
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    padding: '14px 18px',
                    background: checkedItems[item.key] ? 'rgba(0, 155, 141, 0.03)' : '#F9FAFB',
                    border: checkedItems[item.key] ? '1px solid rgba(0, 155, 141, 0.15)' : '1px solid #E5E7EB',
                    borderRadius: '12px',
                    cursor: 'pointer',
                    fontSize: '14px',
                    fontWeight: '600',
                    color: checkedItems[item.key] ? 'var(--green-dark)' : '#4B5563',
                    transition: 'all 0.2s ease'
                  }}
                >
                  <input 
                    type="checkbox"
                    checked={checkedItems[item.key]}
                    onChange={() => toggleCheck(item.key)}
                    style={{
                      width: '18px',
                      height: '18px',
                      accentColor: 'var(--green)',
                      cursor: 'pointer'
                    }}
                  />
                  {item.label}
                </label>
              ))}
            </div>

            {/* Progress bar */}
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px', fontSize: '13px', fontWeight: '750' }}>
                <span style={{ color: '#6B7280' }}>Onboarding Preparation Progress</span>
                <span style={{ color: 'var(--green)' }}>{progressPercent}% Complete</span>
              </div>
              <div style={{ width: '100%', height: '8px', background: '#E5E7EB', borderRadius: '4px', overflow: 'hidden' }}>
                <div style={{ width: `${progressPercent}%`, height: '100%', background: 'var(--green)', transition: 'width 0.4s ease' }} />
              </div>
              <p style={{ fontSize: '13px', color: 'var(--green-dark)', fontWeight: '750', marginTop: '12px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                {progressPercent === 100 
                  ? '🎉 You have everything! We can launch your kitchen live in under 24 hours.' 
                  : progressPercent >= 60 
                    ? '✨ Great job! You have enough details to submit the initial application.' 
                    : '💡 Ready to get online? Start preparing these details to launch smoothly.'
                }
              </p>
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
                Ready to Go Live?
              </h3>
              <p style={{ fontSize: '16px', color: 'rgba(253, 248, 242, 0.75)', maxWidth: '500px', margin: '0 auto 12px', lineHeight: '1.6' }}>
                The whole process takes under 24 hours.
              </p>
              <p style={{ fontSize: '15px', color: 'rgba(253, 248, 242, 0.6)', maxWidth: '500px', margin: '0 auto 40px', lineHeight: '1.6' }}>
                Start today and get your restaurant online quickly.
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
                  Get Started — It's Free
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
          .flow-tracker {
            grid-template-columns: 1fr 1fr !important;
            gap: 16px !important;
          }
          .arrow-sep {
            display: none !important;
          }
        }
        @media (max-width: 600px) {
          .checkbox-grid {
            grid-template-columns: 1fr !important;
            gap: 12px !important;
          }
          .card-inner-split {
            flex-direction: column !important;
            gap: 16px !important;
          }
        }
      `}</style>
    </main>
  );
}
