'use client';
import { useEffect, useRef, useState } from 'react';
import { AlertCircle, TrendingUp } from 'lucide-react';

export default function CostComparison() {
  const sectionRef = useRef(null);
  const svgRef = useRef(null);
  const [hoverData, setHoverData] = useState(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      e => e.forEach(en => en.isIntersecting && en.target.classList.add('visible')),
      { threshold: 0.08 }
    );
    sectionRef.current?.querySelectorAll('.reveal,.reveal-left,.reveal-right').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  // Graph Layout coordinates (SVG ViewBox: 0 0 600 350)
  const paddingLeft = 70;
  const paddingRight = 30;
  const paddingTop = 30;
  const paddingBottom = 50;
  const chartWidth = 600 - paddingLeft - paddingRight;
  const chartHeight = 350 - paddingTop - paddingBottom;

  const maxSales = 30000;
  const maxCost = 8000; // 25% of 30k is 7.5k, so 8k max height is good

  // Helper to map sales value to SVG X coordinate
  const getX = (sales) => {
    return paddingLeft + (sales / maxSales) * chartWidth;
  };

  // Helper to map cost value to SVG Y coordinate (inverted)
  const getY = (cost) => {
    return paddingTop + chartHeight - (cost / maxCost) * chartHeight;
  };

  // Get Kwikkit Daily Fee for given Sales
  const getKwikkitCost = (sales) => {
    if (sales < 700) return 0;
    if (sales < 2500) return Math.round(100 * 1.18);
    if (sales < 5000) return Math.round(249 * 1.18);
    if (sales < 10000) return Math.round(349 * 1.18);
    return Math.round(499 * 1.18);
  };

  const getAggregatorCost = (sales) => {
    return Math.round(sales * 0.25);
  };

  // Handle Mouse Hover on SVG
  const handleMouseMove = (e) => {
    if (!svgRef.current) return;
    const rect = svgRef.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    
    // Convert SVG mouseX to sales value
    const relativeX = mouseX - (paddingLeft * rect.width) / 600;
    const chartWidthInPx = (chartWidth * rect.width) / 600;
    const salesRatio = Math.max(0, Math.min(1, relativeX / chartWidthInPx));
    const hoveredSales = Math.round(salesRatio * maxSales);

    const kwikkit = getKwikkitCost(hoveredSales);
    const aggregator = getAggregatorCost(hoveredSales);
    const savings = Math.max(0, aggregator - kwikkit);

    setHoverData({
      x: getX(hoveredSales),
      sales: hoveredSales,
      kwikkit,
      aggregator,
      savings,
    });
  };

  const handleMouseLeave = () => {
    setHoverData(null);
  };

  // Generate SVG path for Aggregator (line: 0 to maxSales)
  const aggregatorPath = `M ${getX(0)},${getY(getAggregatorCost(0))} L ${getX(maxSales)},${getY(getAggregatorCost(maxSales))}`;

  // Generate SVG path for Kwikkit (stepped tiers)
  const steps = [
    { start: 0, end: 699, cost: getKwikkitCost(0) },
    { start: 700, end: 2499, cost: getKwikkitCost(1000) },
    { start: 2500, end: 4999, cost: getKwikkitCost(3000) },
    { start: 5000, end: 9999, cost: getKwikkitCost(6000) },
    { start: 10000, end: maxSales, cost: getKwikkitCost(15000) },
  ];

  let kwikkitPath = '';
  steps.forEach((step, idx) => {
    const xStart = getX(step.start);
    const xEnd = getX(step.end);
    const yVal = getY(step.cost);
    
    if (idx === 0) {
      kwikkitPath += `M ${xStart},${yVal} L ${xEnd},${yVal}`;
    } else {
      const prevY = getY(steps[idx - 1].cost);
      kwikkitPath += ` L ${xStart},${prevY} L ${xStart},${yVal} L ${xEnd},${yVal}`;
    }
  });

  return (
    <section ref={sectionRef} style={{ background: 'var(--dark-2)', padding: '110px 0', position: 'relative', overflow: 'hidden' }}>
      
      {/* Decorative radial gradients */}
      <div style={{ position: 'absolute', top: '-15%', left: '-5%', width: '500px', height: '500px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(0,95,87,0.18) 0%, transparent 65%)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: '-10%', right: '-10%', width: '600px', height: '600px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,229,0,0.03) 0%, transparent 65%)', pointerEvents: 'none' }} />

      <div className="section-wrap">
        
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '72px' }}>
          <span className="reveal tag tag-green-dark" style={{ marginBottom: '16px' }}>Cost Comparison</span>
          <h2 className="reveal heading-display heading-lg" style={{ color: 'var(--cream)', marginBottom: '16px' }}>
            Platform Fee vs<br />
            <span style={{
              background: 'linear-gradient(90deg, var(--yellow) 0%, #fff9a0 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>Commission Growth</span>
          </h2>
          <p className="reveal" style={{ fontSize: '17px', color: 'rgba(253,248,242,0.5)', maxWidth: '520px', margin: '0 auto', lineHeight: '1.7' }}>
            See how aggregator commissions stack up against Kwikkit flat rates as your daily order volumes grow.
          </p>
        </div>

        {/* Graph Display Card */}
        <div className="reveal" style={{
          background: 'rgba(255, 255, 255, 0.03)',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          borderRadius: '32px',
          padding: '40px clamp(16px, 5vw, 48px)',
          maxWidth: '900px',
          margin: '0 auto 64px',
          boxShadow: '0 20px 50px rgba(0, 0, 0, 0.3)',
          position: 'relative',
        }}>
          
          {/* Interactive Graph Box */}
          <div style={{ position: 'relative' }}>
            <svg
              ref={svgRef}
              viewBox="0 0 600 350"
              style={{ width: '100%', height: 'auto', overflow: 'visible', cursor: 'crosshair' }}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              {/* Grid Lines */}
              {[0, 2000, 4000, 6000, 8000].map((val) => (
                <line
                  key={val}
                  x1={paddingLeft}
                  y1={getY(val)}
                  x2={600 - paddingRight}
                  y2={getY(val)}
                  stroke="rgba(255, 255, 255, 0.06)"
                  strokeWidth="1"
                />
              ))}

              {/* X & Y Axis Labels */}
              <text x={paddingLeft - 15} y={getY(0)} fill="rgba(253,248,242,0.4)" fontSize="10" fontWeight="700" textAnchor="end">₹0</text>
              <text x={paddingLeft - 15} y={getY(2000)} fill="rgba(253,248,242,0.4)" fontSize="10" fontWeight="700" textAnchor="end">₹2K</text>
              <text x={paddingLeft - 15} y={getY(4000)} fill="rgba(253,248,242,0.4)" fontSize="10" fontWeight="700" textAnchor="end">₹4K</text>
              <text x={paddingLeft - 15} y={getY(6000)} fill="rgba(253,248,242,0.4)" fontSize="10" fontWeight="700" textAnchor="end">₹6K</text>
              <text x={paddingLeft - 15} y={getY(8000)} fill="rgba(253,248,242,0.4)" fontSize="10" fontWeight="700" textAnchor="end">₹8K</text>

              <text x={getX(0)} y={335} fill="rgba(253,248,242,0.4)" fontSize="10" fontWeight="700" textAnchor="middle">₹0</text>
              <text x={getX(10000)} y={335} fill="rgba(253,248,242,0.4)" fontSize="10" fontWeight="700" textAnchor="middle">₹10K</text>
              <text x={getX(20000)} y={335} fill="rgba(253,248,242,0.4)" fontSize="10" fontWeight="700" textAnchor="middle">₹20K</text>
              <text x={getX(30000)} y={335} fill="rgba(253,248,242,0.4)" fontSize="10" fontWeight="700" textAnchor="middle">₹30K+</text>

              <text x="300" y="350" fill="rgba(253,248,242,0.3)" fontSize="10" fontWeight="700" textAnchor="middle" letterSpacing="0.05em">DAILY SALES VOLUME</text>
              <text x="18" y="175" fill="rgba(253,248,242,0.3)" fontSize="10" fontWeight="700" textAnchor="middle" transform="rotate(-90 18 175)" letterSpacing="0.05em">PLATFORM COST</text>

              {/* Aggregator Line (glowing red) */}
              <path
                d={aggregatorPath}
                fill="none"
                stroke="#DC3545"
                strokeWidth="3.5"
                strokeLinecap="round"
                style={{ filter: 'drop-shadow(0 0 6px rgba(220,53,69,0.4))' }}
              />

              {/* Kwikkit Line (glowing yellow-green) */}
              <path
                d={kwikkitPath}
                fill="none"
                stroke="var(--yellow)"
                strokeWidth="3.5"
                strokeLinecap="round"
                style={{ filter: 'drop-shadow(0 0 6px rgba(255,229,0,0.5))' }}
              />

              {/* Vertical Guide & Intersection Dots on Hover */}
              {hoverData && (
                <>
                  <line
                    x1={hoverData.x}
                    y1={paddingTop}
                    x2={hoverData.x}
                    y2={350 - paddingBottom}
                    stroke="rgba(255,255,255,0.25)"
                    strokeWidth="1.5"
                    strokeDasharray="4 4"
                  />
                  {/* Aggregator Intersection Dot */}
                  <circle
                    cx={hoverData.x}
                    cy={getY(hoverData.aggregator)}
                    r="6"
                    fill="#DC3545"
                    stroke="var(--cream)"
                    strokeWidth="2"
                  />
                  {/* Kwikkit Intersection Dot */}
                  <circle
                    cx={hoverData.x}
                    cy={getY(hoverData.kwikkit)}
                    r="6"
                    fill="var(--yellow)"
                    stroke="var(--cream)"
                    strokeWidth="2"
                  />
                </>
              )}
            </svg>

            {/* Custom Tooltip on Hover */}
            {hoverData && (
              <div style={{
                position: 'absolute',
                top: '10px',
                left: hoverData.x > 300 ? '20px' : 'auto',
                right: hoverData.x <= 300 ? '20px' : 'auto',
                background: 'rgba(8, 15, 14, 0.95)',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                borderRadius: '16px',
                padding: '20px',
                width: '240px',
                boxShadow: '0 12px 36px rgba(0,0,0,0.4)',
                zIndex: 10,
                color: 'var(--cream)',
              }}>
                <div style={{ fontSize: '11px', fontWeight: '800', color: 'rgba(253,248,242,0.4)', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '8px' }}>
                  Daily Sales: ₹{hoverData.sales.toLocaleString('en-IN')}
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px' }}>
                    <span style={{ color: 'rgba(253,248,242,0.6)' }}>Aggregator Cost (25%):</span>
                    <span style={{ fontWeight: '700', color: '#ff7b88' }}>₹{hoverData.aggregator.toLocaleString('en-IN')}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px' }}>
                    <span style={{ color: 'rgba(253,248,242,0.6)' }}>Kwikkit Cost (Tiered):</span>
                    <span style={{ fontWeight: '700', color: 'var(--yellow)' }}>₹{hoverData.kwikkit}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13.5px', marginTop: '4px', paddingTop: '8px', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
                    <span style={{ fontWeight: '750', color: 'var(--cream)' }}>Daily Savings:</span>
                    <span style={{ fontWeight: '850', color: 'var(--yellow)' }}>₹{hoverData.savings.toLocaleString('en-IN')}</span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Graph Legend */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '28px', flexWrap: 'wrap', marginTop: '32px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{ width: '16px', height: '4px', background: 'var(--yellow)', borderRadius: '2px' }} />
              <span style={{ fontSize: '13.5px', fontWeight: '700', color: 'var(--cream)' }}>Kwikkit (Flat Pricing)</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{ width: '16px', height: '4px', background: '#DC3545', borderRadius: '2px' }} />
              <span style={{ fontSize: '13.5px', fontWeight: '700', color: 'var(--cream)' }}>Aggregator (25% Commission)</span>
            </div>
          </div>

        </div>

        {/* Insight Callout */}
        <div className="reveal" style={{
          background: 'rgba(255, 229, 0, 0.05)',
          border: '1px solid rgba(255, 229, 0, 0.18)',
          borderRadius: '20px',
          padding: '24px 32px',
          maxWidth: '760px',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          gap: '16px',
        }}>
          <AlertCircle size={22} color="var(--yellow)" style={{ flexShrink: 0 }} />
          <p style={{ fontSize: '14.5px', fontWeight: '600', color: 'var(--cream)', margin: 0 }}>
            <span style={{ color: 'var(--yellow)', fontWeight: '800' }}>Key Insight:</span> The more a restaurant grows, the more it saves with Kwikkit. Aggregator commissions scale linearly without limit, whereas Kwikkit flat pricing caps out.
          </p>
        </div>

      </div>
    </section>
  );
}
