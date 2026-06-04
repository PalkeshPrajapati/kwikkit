'use client';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import {
  Clock,
  Calendar,
  User,
  ArrowRight,
  Shield,
  CheckCircle,
  HelpCircle,
  Mail,
  Phone,
  Download,
  BookOpen,
  ArrowUpRight,
  MapPin,
  X
} from 'lucide-react';

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
  const [activeArticle, setActiveArticle] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 80);
    return () => clearTimeout(timer);
  }, []);

  // Lock body scroll when article is open
  useEffect(() => {
    if (activeArticle) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [activeArticle]);

  const articles = [
    {
      id: 'hidden-cost-food-delivery',
      category: 'Industry',
      categoryColor: 'var(--green-dark)',
      categoryBg: 'rgba(0, 155, 141, 0.1)',
      readTime: '5 min read',
      subtitle: 'A blatant, honest and unexpected look at what really goes into your food delivery bills and why the final amount is oftentimes higher than expected.',
      title: 'The Hidden Cost of Ordering Food Online in India — and How Much You\'re Actually Paying',
      summary: 'A direct and transparent look at what actually contributes to food delivery bills and why the final amount is often much higher than expected.',
      author: 'Kwikkit Team',
      published: 'April 24, 2026',
      iconBg: 'rgba(248,113,113,0.1)',
      iconColor: '#f87171',
      tags: ['Transparency', 'Industry Insights'],
      content: (
        <>
          <p style={{ fontSize: '16px', lineHeight: '1.8', color: 'var(--text-muted)', marginBottom: '20px' }}>
            Ordering food online helps you save time and effort that might be spent on cooking, and oftentimes, you might be in such a rush that there is no option but to get your food delivered.
          </p>
          <p style={{ fontSize: '16px', lineHeight: '1.8', color: 'var(--text-muted)', marginBottom: '20px' }}>
            It can be your quick lunch, dinner after a long and tired day or even breakfast. You open a food delivery app, browse through various restaurants available, look at the menu and their prices, choose the food you would like to have and place an order within minutes with a few simple steps. It feels straightforward yet dishonest. Food delivery offers convenience at the expense of a little money. But what if this little amount of money turns into a noticeable increase in your monthly spending?
          </p>
          <p style={{ fontSize: '16px', lineHeight: '1.8', color: 'var(--text-muted)', marginBottom: '24px' }}>
            It all starts with the unexpected increase in the amount that you need to pay at the final stage of payment. The difference is, however, not accidental. It comes from the blend of all the visible and hidden charges that you, as users, pay.
          </p>
          
          <div style={{
            background: 'linear-gradient(135deg, rgba(0, 95, 87, 0.05) 0%, rgba(0, 95, 87, 0.01) 100%)',
            borderLeft: '4px solid var(--green)',
            padding: '24px',
            borderRadius: '12px',
            marginBottom: '32px',
            marginTop: '32px',
          }}>
            <h4 style={{ fontFamily: "'Syne', sans-serif", fontWeight: '850', color: 'var(--green-dark)', marginBottom: '10px', fontSize: '16px' }}>The Crux of the Issue</h4>
            <p style={{ fontStyle: 'italic', margin: 0, color: 'var(--text-primary)', fontSize: '15px', lineHeight: '1.7' }}>
              The price difference is not accidental. It is a carefully layered combination of menu price markups, service cuts, packaging add-ons, and taxes calculated on top of these inflated values.
            </p>
          </div>

          <h3 style={{ fontFamily: "'Syne', sans-serif", fontWeight: '800', fontSize: '24px', color: 'var(--green-dark)', marginTop: '36px', marginBottom: '18px', letterSpacing: '-0.02em' }}>Breaking Down the Bill</h3>
          
          <p style={{ fontSize: '16px', lineHeight: '1.8', color: 'var(--text-muted)', marginBottom: '20px' }}>
            To understand the actual cost of ordering food online, you need to look beyond the actual food price and break down the cost of the bill that you usually ignore.
          </p>
          
          <p style={{ fontSize: '16px', lineHeight: '1.8', color: 'var(--text-muted)', marginBottom: '20px' }}>
            <strong>1. Menu Inflations:</strong> When you first browse through the menu, the prices may appear pretty normal however, they may already be slightly higher than what the restaurant charges. This mostly happens because food delivery platforms charge restaurants a commission, so the restaurants, in return, increase their listed prices on platforms to maintain their own profit.
          </p>
          
          <p style={{ fontSize: '16px', lineHeight: '1.8', color: 'var(--text-muted)', marginBottom: '20px' }}>
            <strong>2. Delivery Fees:</strong> Next comes the final payment stage. This is where you notice the additional charges. A part of these additional charges is the delivery fee, which is justified in itself as it covers the cost of transporting your food from the restaurant to your doorstep. This depends on various factors, including the distance from the restaurant to your location, the demand at the time of ordering and the time of the day.
          </p>
          
          <p style={{ fontSize: '16px', lineHeight: '1.8', color: 'var(--text-muted)', marginBottom: '20px' }}>
            <strong>3. Platform Fees & Packaging:</strong> Another common addition is the platform fee that you pay for using the services of the app. This neither goes to the restaurant nor the delivery partner. Then comes the packaging charges. However less it might seem, restaurants oftentimes already factor packaging into their pricing, meaning that the packaging may just be an extra layer of cost for you to bear.
          </p>
          
          <p style={{ fontSize: '16px', lineHeight: '1.8', color: 'var(--text-muted)', marginBottom: '24px' }}>
            <strong>4. Inflated GST:</strong> Then comes the Goods and Services Tax (GST). It is applied to the total amount. With all these additional charges, the amount increases, resulting in increased GST charges.
          </p>

          <div style={{
            background: 'linear-gradient(135deg, rgba(248, 113, 113, 0.08) 0%, rgba(248, 113, 113, 0.02) 100%)',
            border: '1px solid rgba(248, 113, 113, 0.25)',
            padding: '28px',
            borderRadius: '20px',
            marginBottom: '32px',
            marginTop: '32px',
            textAlign: 'center',
          }}>
            <span style={{ fontSize: '32px', display: 'block', marginBottom: '10px' }}>💸</span>
            <p style={{ fontWeight: '750', color: '#b91c1c', fontSize: '17px', lineHeight: '1.6', margin: 0, fontFamily: "'Syne', sans-serif" }}>
              That ₹500 biryani? By the time it reaches your door via a traditional platform, you've paid ₹700 or more. The math is simply not in your favour.
            </p>
          </div>

          <h3 style={{ fontFamily: "'Syne', sans-serif", fontWeight: '800', fontSize: '24px', color: 'var(--green-dark)', marginTop: '36px', marginBottom: '18px', letterSpacing: '-0.02em' }}>The Alternative</h3>
          <p style={{ fontSize: '16px', lineHeight: '1.8', color: 'var(--text-muted)', marginBottom: '20px' }}>
            This is the reason why the idea of zero-commission food delivery is gaining attention nowadays. In this model, the platforms do not charge restaurants a high commission. The Kwikkit app is one such model. Instead of adding multiple layers of hidden charges, the pricing is kept simple. No platform fee, no inflated menu prices, what you see is what you pay, plus the delivery cost.
          </p>
          <p style={{ fontSize: '16px', lineHeight: '1.8', color: 'var(--text-muted)', marginBottom: '24px' }}>
            It is not something revolutionary, it is just honest because food delivery should feel easy, not calculated.
          </p>
        </>
      ),
    },
    {
      id: 'supporting-local-restaurants',
      category: 'Community',
      categoryColor: 'var(--yellow)',
      categoryBg: 'rgba(255, 229, 0, 0.15)',
      readTime: '6 min read',
      subtitle: 'Supporting local restaurants is seen as a positive and fulfilling choice. However, in reality, it has a much deeper impact on both the local economy and the overall dining culture.',
      title: 'Why Supporting Local Restaurants in Chandigarh Matters More Than You Think',
      summary: 'Supporting local restaurants is seen as a positive and fulfilling choice. However, in reality, it has a much deeper impact on both the local economy and the overall dining culture.',
      author: 'Kwikkit Team',
      published: 'April 18, 2026',
      iconBg: 'rgba(0, 155, 141, 0.1)',
      iconColor: 'var(--green-light)',
      tags: ['Community', 'Restaurants'],
      content: (
        <>
          <p style={{ fontSize: '16px', lineHeight: '1.8', color: 'var(--text-muted)', marginBottom: '20px' }}>
            The food culture in Chandigarh is remarkable for its diversity — from family-run small kitchens to popular cafes and eateries across different sectors. Chandigarh offers a wide range of options reflecting both traditional and modern tastes. These places are not just places of business but also form a distinct identity of the city.
          </p>
          <p style={{ fontSize: '16px', lineHeight: '1.8', color: 'var(--text-muted)', marginBottom: '20px' }}>
            Ordering from local restaurants ensures that your money stays within the community, offering a means of livelihood for the people residing there. It not only supports restaurant owners but also the kitchen staff, delivery workers and the suppliers. This, in return, not only helps local businesses grow and contribute to the local economy but also promotes their confidence, which acts as fuel for improvement and invention in the near future.
          </p>
          <p style={{ fontSize: '16px', lineHeight: '1.8', color: 'var(--text-muted)', marginBottom: '24px' }}>
            Supporting local restaurants does not necessarily mean that you visit them in person and eat there, which is not always feasible or possible. You can support these local restaurants by opting to order from them online, even when you have a variety of different high-end restaurants available just a click away.
          </p>
          
          <h3 style={{ fontFamily: "'Syne', sans-serif", fontWeight: '800', fontSize: '24px', color: 'var(--green-dark)', marginTop: '36px', marginBottom: '18px', letterSpacing: '-0.02em' }}>The Platform Problem</h3>
          <p style={{ fontSize: '16px', lineHeight: '1.8', color: 'var(--text-muted)', marginBottom: '20px' }}>
            While many of you may have been ordering food online from local restaurants at a much higher price, have you ever wondered if that extra expense is really helping the restaurants, or are they just a source of profit for food delivery platforms?
          </p>
          <p style={{ fontSize: '16px', lineHeight: '1.8', color: 'var(--text-muted)', marginBottom: '20px' }}>
            Most restaurants are not thriving on food delivery platforms, but rather, they are just surviving. Most of the currently used food delivery models do not favour restaurants. Platforms charge high commission on orders from restaurants. These restaurants, in return, increase their prices online or adjust their quality so as not to affect themselves and remain in a profitable business.
          </p>
          <p style={{ fontSize: '16px', lineHeight: '1.8', color: 'var(--text-muted)', marginBottom: '20px' }}>
            This affects customers as well, as you end up paying more and oftentimes have to compromise with food quality.
          </p>
          <p style={{ fontSize: '16px', lineHeight: '1.8', color: 'var(--text-muted)', marginBottom: '24px' }}>
            What seems like an act of positivity and upliftment — ordering from a local restaurant — might actually be working against them if the platform is extracting 25% of every order.
          </p>

          <h3 style={{ fontFamily: "'Syne', sans-serif", fontWeight: '800', fontSize: '24px', color: 'var(--green-dark)', marginTop: '36px', marginBottom: '18px', letterSpacing: '-0.02em' }}>What Real Support Looks Like</h3>
          <p style={{ fontSize: '16px', lineHeight: '1.8', color: 'var(--text-muted)', marginBottom: '20px' }}>
            Supporting local restaurants through online platforms means being aware of the challenges faced by restaurant owners and choosing platforms that offer fairer systems, changing the equation. For the same causeway, Zero Commission models are becoming famous nowadays. Kwikkit works on the same model, allowing restaurants to list their actual prices without inflation and without needing to compromise on the quality of food and their margins.
          </p>
          <p style={{ fontSize: '16px', lineHeight: '1.8', color: 'var(--text-muted)', marginBottom: '20px' }}>
            By removing high commissions and unnecessary hidden charges, restaurants operate sustainably while customers get the same taste at the same expense.
          </p>
          <p style={{ fontSize: '16px', lineHeight: '1.8', color: 'var(--text-muted)', marginBottom: '20px' }}>
            Your act of making small changes can make a real difference. Ordering from restaurant-friendly platforms contributes to a healthier ecosystem where each of the units involved — the platform, restaurant and the consumer — all benefit.
          </p>
          <p style={{ fontSize: '16px', lineHeight: '1.8', color: 'var(--text-muted)', marginBottom: '24px' }}>
            Supporting local restaurants is not just about intention. It's about making the right choice because a strong food culture does not survive on demand alone. It survives on fairness.
          </p>
        </>
      ),
    },
    {
      id: 'biryani-experiment-chandigarh',
      category: 'Industry',
      categoryColor: 'var(--green-dark)',
      categoryBg: 'rgba(0, 155, 141, 0.1)',
      readTime: '5 min read',
      subtitle: 'What began as a dull, uneventful day quietly unfolded into one filled with new insights and unexpected discoveries. This was not about biryani but rather understanding how convenience sometimes comes with hidden charges.',
      title: 'I ordered the same biryani from 5 Chandigarh restaurants on 3 different apps — here’s what I actually paid',
      summary: 'An experiment ordering the same biryani from 5 Chandigarh restaurants on 3 different apps to expose how price changes based on the platform.',
      author: 'Kwikkit Team',
      published: 'May 10, 2026',
      iconBg: 'rgba(248,113,113,0.1)',
      iconColor: '#f87171',
      tags: ['Transparency', 'Case Study'],
      content: (
        <>
          <p style={{ fontSize: '16px', lineHeight: '1.8', color: 'var(--text-muted)', marginBottom: '20px' }}>
            There are days with no plans, no purpose and no urgency bringing a feeling of emptiness. But in that space came an idea which seemed like a curious yet another boring experience. To my surprise, it went far beyond anyone's supposition. The story of a simple yet revealing experiment unfolded unknowingly on this day. I ordered biryani. Not just one but the same biryani from five different restaurants using three food delivery platforms using different models of servicing in Chandigarh. What unfolded was anything but simple.
          </p>
          <p style={{ fontSize: '16px', lineHeight: '1.8', color: 'var(--text-muted)', marginBottom: '20px' }}>
            At first, the prices seemed pretty similar. Each of the platform listed biryani within a close range. But as I proceeded towards the checkout, it told a different story. Costs began stacking up one after another including delivery fees, packaging charges, surge pricing, platform fees and many more. A priced meal suddenly seemed significantly expensive.
          </p>
          <p style={{ fontSize: '16px', lineHeight: '1.8', color: 'var(--text-muted)', marginBottom: '20px' }}>
            Across the three different delivery platforms, the final amount paid by me differed noticeably and somewhat unreasonably. In some cases, I even ended up paying nearly 20% - 25% more than the listed price. What piqued my interest more was the difference in the prices of the same biryani of the same restaurant just on different platforms. It raised an obvious question as to why the cost of a meal changes based on the platform service being used. This led me to dig deeper into these platform services and I came across my answer.
          </p>
          
          <div style={{
            background: 'linear-gradient(135deg, rgba(0, 95, 87, 0.05) 0%, rgba(0, 95, 87, 0.01) 100%)',
            borderLeft: '4px solid var(--green)',
            padding: '24px',
            borderRadius: '12px',
            marginBottom: '32px',
            marginTop: '32px',
          }}>
            <h4 style={{ fontFamily: "'Syne', sans-serif", fontWeight: '850', color: 'var(--green-dark)', marginBottom: '10px', fontSize: '16px' }}>The Core Finding</h4>
            <p style={{ fontStyle: 'italic', margin: 0, color: 'var(--text-primary)', fontSize: '15px', lineHeight: '1.7' }}>
              The answer lay in the commission-based models being used by the different platforms. Often times, restaurants pay a sum for each order to the platform which makes them inflate their listing prices so as to maintain their profit-margin. This seemed reasonably fair and also answered the question as to why the in-person price and online listed price varied for the same menu of the same restaurant.
            </p>
          </div>

          <p style={{ fontSize: '16px', lineHeight: '1.8', color: 'var(--text-muted)', marginBottom: '20px' }}>
            The commission model that gained my interest more was the zero-commission based platform model that fundamentally changed this rigid, overcharging dynamic. A zero-commission platform model do not charge restaurants a high commission. Instead of adding multiple layers of hidden charges, the pricing is kept simple. No platform fee, no inflated menu prices, what you see is what you pay plus the delivery cost.
          </p>
          <p style={{ fontSize: '16px', lineHeight: '1.8', color: 'var(--text-muted)', marginBottom: '20px' }}>
            This meant that the restaurants would no longer have to increase the listed price of their food ultimately leading to the customers paying fair and reasonable prices for their food. An honest pricing option where the restaurants would be able to focus on the quality of food rather than compensating for platform cuts.
          </p>
          <p style={{ fontSize: '16px', lineHeight: '1.8', color: 'var(--text-muted)', marginBottom: '24px' }}>
            Transparency was the key in such models which would create a fairer eco-system for both the consumers and the restaurant owners. In the end, what began as a dull, uneventful day quietly unfolded into one filled with new insights and unexpected discoveries. This was not about biryani but rather understanding how convenience sometimes comes with hidden charges. And more importantly how a different platform-model would make this experience better for everyone involved.
          </p>
        </>
      ),
    },
    {
      id: 'fees-math-calculated',
      category: 'Community',
      categoryColor: 'var(--yellow)',
      categoryBg: 'rgba(255, 229, 0, 0.15)',
      readTime: '4 min read',
      subtitle: 'We did the math — you’ve probably spent ₹15,000 this year on fees you didn’t notice. A breakdown of how minor platform charges quietly accumulate.',
      title: 'We did the math — you’ve probably spent ₹15,000 this year on fees you didn’t notice',
      summary: 'A deep dive into how ₹30 to ₹70 added silently at checkout accumulates to over ₹15,000 a year for regular delivery users.',
      author: 'Kwikkit Team',
      published: 'May 3, 2026',
      iconBg: 'rgba(0, 155, 141, 0.1)',
      iconColor: 'var(--green-light)',
      tags: ['Community', 'Restaurants'],
      content: (
        <>
          <p style={{ fontSize: '16px', lineHeight: '1.8', color: 'var(--text-muted)', marginBottom: '20px' }}>
            It feels insignificant at first. A small delivery charge, minimum packaging fee, maybe even convenience fee and platform fee quietly added at checkout. But when we sat down and actually did the math, the numbers told a very different story. You\'ve probably spent close to ₹15,000 this year on fees, you have barely even noticed if you usually order food online.
          </p>
          <p style={{ fontSize: '16px', lineHeight: '1.8', color: 'var(--text-muted)', marginBottom: '20px' }}>
            Think of how often you order food or make small online purchases. Might be twice or thrice a week. Each order carries an extra ₹30 to ₹70 disguised as different kinds of charges which seem harmless individually and are often times ignored in exchange for convenience. But over months, these invisible costs pile up faster than you would expect and much more in number than they seem at first.
          </p>
          
          <div style={{
            background: 'linear-gradient(135deg, rgba(255, 229, 0, 0.08) 0%, rgba(255, 229, 0, 0.02) 100%)',
            borderLeft: '4px solid var(--yellow)',
            padding: '24px',
            borderRadius: '12px',
            marginBottom: '32px',
            marginTop: '32px',
          }}>
            <h4 style={{ fontFamily: "'Syne', sans-serif", fontWeight: '850', color: '#856404', marginBottom: '10px', fontSize: '16px' }}>Let\'s Do The Math</h4>
            <p style={{ fontStyle: 'italic', margin: 0, color: 'var(--text-primary)', fontSize: '15px', lineHeight: '1.7' }}>
              If you place just four orders a week and pay an average of ₹45 in added fees each time, that’s ₹180 a week. Multiply that by 52 weeks, and you’re already at ₹9,360. Now, let\'s factor in the occasional higher charges such as surge pricing, distance fees, or peak-time add ons and it’s not hard to see how the total climbs well beyond ₹10,900, inching closer to ₹15,000 annually.
            </p>
          </div>

          <p style={{ fontSize: '16px', lineHeight: '1.8', color: 'var(--text-muted)', marginBottom: '20px' }}>
            What makes these hidden charges piling up more frustrating is how subtly these charges are added. They are rarely highlighted in the front and instead appear at the final step when you have already committed to placing the order. Over time this normalisation of small extras changes how we perceive pricing altogether, often times accepting that the listed price and the final amount to be paid will have a substantive difference.
          </p>
          <p style={{ fontSize: '16px', lineHeight: '1.8', color: 'var(--text-muted)', marginBottom: '20px' }}>
            The root cause of this issue lies in the model of delivery platforms. Commission-based systems lead to a layered pricing structure where costs are distributed across multiple points sometimes visible often times hidden. This keeps the upfront price attractive and aims to shifts the real expense to the background.
          </p>
          <p style={{ fontSize: '16px', lineHeight: '1.8', color: 'var(--text-muted)', marginBottom: '24px' }}>
            There is also a growing conversation around alternatives to these models, particularly the zero-commission based platform models. By removing the need for restaurants to pay hefty commissions, such models can reduce the pressure to inflate prices. They do not rely on hidden charges. The pricing is kept simple and up-front. This leads to more transparency in billing and creates a fairer ecosystem for all the three parties involved i.e., the consumer, the restaurant and the platform involved.
          </p>
          <p style={{ fontSize: '16px', lineHeight: '1.8', color: 'var(--text-primary)', fontWeight: '600', marginBottom: '24px' }}>
            Convenience does not mean lack of clarity. As consumers, its your duty to become more aware of these patterns in the first step. And then finally, would you realise that these small fees were never meant to be small.
          </p>
        </>
      ),
    }
  ];

  return (
    <main ref={pageRef} style={{ background: 'var(--cream)', minHeight: '100vh', overflowX: 'hidden' }}>

      {/* ═══════════════════════════════════════════════════
         SECTION 1 — HERO SECTION
      ═══════════════════════════════════════════════════ */}
      <section style={{
        background: 'var(--dark)',
        minHeight: '80svh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        paddingTop: '100px',
      }}>
        {/* Background Image & Overlay */}
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'url(/blog-hero-bg.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          zIndex: 0,
          opacity: 0.28,
        }} />
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to bottom, rgba(8, 15, 14, 0.95) 0%, rgba(0, 61, 55, 0.65) 100%)',
          zIndex: 0,
        }} />

        {/* Decorative Grid Lines */}
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
          pointerEvents: 'none',
          zIndex: 0,
        }} />

        <div className="section-wrap" style={{ position: 'relative', zIndex: 1, padding: '64px 28px', textAlign: 'center' }}>
          {/* Eyebrow */}
          <div style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.6s ease 0.05s, transform 0.6s ease 0.05s',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: 'rgba(255, 229, 0, 0.1)',
            border: '1px solid rgba(255, 229, 0, 0.3)',
            padding: '6px 18px',
            borderRadius: '100px',
            marginBottom: '28px',
          }}>
            <span className="dot-blink" style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--yellow)', display: 'inline-block' }} />
            <span style={{ fontSize: '11px', fontWeight: '700', color: 'var(--yellow)', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
              Fresh Perspective
            </span>
          </div>

          {/* Headline */}
          <h1 style={{
            fontFamily: "'Syne', sans-serif",
            fontWeight: '800',
            fontSize: 'clamp(44px, 7vw, 80px)',
            lineHeight: '1.05',
            letterSpacing: '-0.035em',
            color: 'var(--cream)',
            maxWidth: '900px',
            margin: '0 auto 28px',
            opacity: loaded ? 1 : 0,
            transform: loaded ? 'translateY(0)' : 'translateY(30px)',
            transition: 'opacity 0.75s ease 0.15s, transform 0.75s ease 0.15s',
          }}>
            Kwikkit <span style={{
              background: 'linear-gradient(90deg, var(--yellow) 0%, #fffaaa 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>Blog</span>
          </h1>

          {/* Subtitle */}
          <h2 style={{
            fontSize: 'clamp(20px, 2.5vw, 28px)',
            fontWeight: '600',
            fontFamily: "'Syne', sans-serif",
            color: 'var(--yellow-soft)',
            maxWidth: '680px',
            margin: '0 auto 20px',
            lineHeight: '1.4',
            letterSpacing: '-0.01em',
            opacity: loaded ? 1 : 0,
            transform: loaded ? 'translateY(0)' : 'translateY(24px)',
            transition: 'opacity 0.7s ease 0.25s, transform 0.7s ease 0.25s',
          }}>
            Honest takes on food delivery in India.
          </h2>

          {/* Summary description */}
          <p style={{
            fontSize: 'clamp(15px, 1.6vw, 18px)',
            lineHeight: '1.7',
            color: 'rgba(253, 248, 242, 0.65)',
            maxWidth: '580px',
            margin: '0 auto',
            opacity: loaded ? 1 : 0,
            transform: loaded ? 'translateY(0)' : 'translateY(24px)',
            transition: 'opacity 0.7s ease 0.35s, transform 0.7s ease 0.35s',
          }}>
            Industry insights, Chandigarh food culture, and the story behind why Kwikkit was built.
          </p>
        </div>

        {/* Scroll indicator cue */}
        <div style={{
          position: 'absolute',
          bottom: '24px',
          left: '50%',
          transform: 'translateX(-50%)',
          opacity: loaded ? 1 : 0,
          transition: 'opacity 0.6s ease 0.9s',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '6px',
        }}>
          <span style={{ fontSize: '10px', color: 'rgba(253, 248, 242, 0.4)', fontWeight: '600', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Articles</span>
          <div style={{ width: '1px', height: '30px', background: 'linear-gradient(to bottom, rgba(255, 229, 0, 0.6), transparent)', animation: 'scrollLine 1.8s ease-in-out infinite' }} />
        </div>

        <style>{`
          @keyframes scrollLine {
            0% { opacity: 0; transform: scaleY(0); transform-origin: top }
            50% { opacity: 1; transform: scaleY(1) }
            100% { opacity: 0; transform: scaleY(1); transform-origin: bottom }
          }
          .dot-blink {
            animation: blinkDot 1.6s ease infinite;
          }
          @keyframes blinkDot {
            0%, 100% { opacity: 1 }
            50% { opacity: 0.2 }
          }
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
            <p className="reveal" style={{ fontSize: '16px', color: 'var(--text-muted)', maxWidth: '480px', margin: '0 auto' }}>
              Delivering facts and fair comparisons about the food tech industry.
            </p>
          </div>

          <div className="blog-grid">
            {articles.map((article, i) => (
              <div key={article.id} className="reveal-scale" style={{ transitionDelay: `${i * 100}ms` }}>
                <article
                  className="surface-card"
                  onClick={() => setActiveArticle(article)}
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
                    <div style={{ display: 'flex', alignItems: 'center', justifyText: 'space-between', marginBottom: '24px' }}>
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
                        color: 'var(--text-muted)',
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
                      fontSize: 'clamp(18px, 2.2vw, 22px)',
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

      {/* ═══════════════════════════════════════════════════
         ARTICLE READER MODAL OVERLAY
      ═══════════════════════════════════════════════════ */}
      {activeArticle && (
        <div style={{
          position: 'fixed',
          inset: 0,
          background: 'rgba(8, 15, 14, 0.72)',
          backdropFilter: 'blur(20px)',
          zIndex: 1100,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '24px 16px',
        }}
        onClick={() => setActiveArticle(null)}
        >
          {/* Modal Container */}
          <div style={{
            background: 'var(--cream)',
            maxWidth: '820px',
            width: '100%',
            maxHeight: '90vh',
            borderRadius: '28px',
            boxShadow: '0 24px 70px rgba(0, 0, 0, 0.45)',
            border: '1px solid rgba(0, 95, 87, 0.1)',
            display: 'flex',
            flexDirection: 'column',
            position: 'relative',
            overflow: 'hidden',
            animation: 'modalSlideUp 0.45s cubic-bezier(0.16, 1, 0.3, 1)',
          }}
          onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div style={{
              display: 'flex',
              alignItems: 'flex-start',
              justifyContent: 'space-between',
              padding: '32px 32px 20px',
              borderBottom: '1px solid rgba(0, 95, 87, 0.08)',
              background: 'var(--cream-dark)',
            }}>
              <div style={{ paddingRight: '48px' }}>
                {/* Meta details */}
                <div style={{ display: 'flex', gap: '12px', alignItems: 'center', marginBottom: '12px' }}>
                  <span style={{
                    fontSize: '10px',
                    fontWeight: '800',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    padding: '4px 10px',
                    borderRadius: '100px',
                    background: activeArticle.categoryBg,
                    color: activeArticle.category === 'Industry' ? 'var(--green-dark)' : '#9c8100',
                  }}>
                    {activeArticle.category}
                  </span>
                  <span style={{ fontSize: '13px', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <Clock size={12} />
                    {activeArticle.readTime}
                  </span>
                </div>
                {/* Title */}
                <h2 style={{
                  fontFamily: "'Syne', sans-serif",
                  fontWeight: '800',
                  fontSize: 'clamp(20px, 2.8vw, 26px)',
                  lineHeight: '1.3',
                  letterSpacing: '-0.02em',
                  color: 'var(--text-primary)',
                }}>
                  {activeArticle.title}
                </h2>
                {/* Subtitle */}
                {activeArticle.subtitle && (
                  <p style={{
                    fontSize: '14px',
                    lineHeight: '1.6',
                    color: 'var(--text-muted)',
                    marginTop: '10px',
                    fontWeight: '500',
                    fontStyle: 'italic',
                  }}>
                    {activeArticle.subtitle}
                  </p>
                )}
              </div>

              {/* Close Button */}
              <button
                onClick={() => setActiveArticle(null)}
                style={{
                  background: 'rgba(0, 95, 87, 0.06)',
                  border: 'none',
                  borderRadius: '50%',
                  width: '40px',
                  height: '40px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  color: 'var(--text-primary)',
                  transition: 'background 0.2s ease, transform 0.2s ease',
                  flexShrink: 0,
                }}
                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(0, 95, 87, 0.12)'; e.currentTarget.style.transform = 'scale(1.05)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'rgba(0, 95, 87, 0.06)'; e.currentTarget.style.transform = 'scale(1)'; }}
                aria-label="Close article"
              >
                <X size={20} />
              </button>
            </div>

            {/* Scrollable Body */}
            <div style={{
              overflowY: 'auto',
              padding: '32px 32px 40px',
              flex: 1,
            }}>
              {/* Author Strip */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                paddingBottom: '24px',
                marginBottom: '28px',
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
                    Published by {activeArticle.author}
                  </div>
                  <div style={{ fontSize: '12px', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '4px', marginTop: '2px' }}>
                    <Calendar size={11} />
                    {activeArticle.published}
                  </div>
                </div>

                {/* Tags block */}
                <div style={{ marginLeft: 'auto', display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  {activeArticle.tags?.map(t => (
                    <span key={t} style={{
                      fontSize: '11px',
                      fontWeight: '600',
                      color: 'var(--green)',
                      background: 'rgba(0, 95, 87, 0.05)',
                      padding: '3px 10px',
                      borderRadius: '100px',
                    }}>
                      #{t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Render article contents */}
              <div className="article-body-content">
                {activeArticle.content}
              </div>
            </div>

            {/* Footer with sticky action */}
            <div style={{
              padding: '20px 32px',
              background: 'var(--cream-dark)',
              borderTop: '1px solid rgba(0, 95, 87, 0.08)',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
              <span style={{ fontSize: '13px', color: 'var(--text-muted)', fontWeight: '500' }}>
                Thanks for reading Kwikkit Blog!
              </span>
              <button
                onClick={() => setActiveArticle(null)}
                style={{
                  background: 'var(--green-dark)',
                  color: 'var(--cream)',
                  border: 'none',
                  padding: '10px 24px',
                  borderRadius: '100px',
                  fontWeight: '700',
                  fontSize: '13px',
                  cursor: 'pointer',
                  transition: 'background 0.2s ease, transform 0.2s ease',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = 'var(--green)'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'var(--green-dark)'; e.currentTarget.style.transform = ''; }}
              >
                Close Article
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ═══════════════════════════════════════════════════
         SECTION 3 — BRAND MESSAGE (Core Promise)
      ═══════════════════════════════════════════════════ */}
      <section style={{
        background: 'var(--dark-2)',
        padding: '110px 0',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Glow Details */}
        <div style={{ position: 'absolute', top: '-10%', right: '-5%', width: '500px', height: '500px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(0, 154, 141, 0.15) 0%, transparent 65%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: '-15%', left: '-10%', width: '600px', height: '600px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(255, 229, 0, 0.04) 0%, transparent 65%)', pointerEvents: 'none' }} />

        <div className="section-wrap">
          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <span className="reveal tag tag-green-dark" style={{ marginBottom: '16px' }}>Core promise</span>
            <h2 className="reveal heading-display heading-lg" style={{ color: 'var(--cream)', marginBottom: '18px' }}>
              Zero-commission food delivery<br />
              <span style={{
                background: 'linear-gradient(90deg, var(--yellow) 0%, #fff9a0 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>for Chandigarh.</span>
            </h2>
            <p className="reveal" style={{ fontSize: '17px', lineHeight: '1.7', color: 'rgba(253, 248, 242, 0.5)', maxWidth: '520px', margin: '0 auto' }}>
              We're building an honest delivery system that respects both restaurant margins and customer pocketbooks.
            </p>
          </div>

          {/* Core Promise Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px',
            maxWidth: '1080px',
            margin: '0 auto',
          }}>
            {[
              {
                title: 'Honest pricing',
                desc: 'No sneaky markup on menu items. You pay exactly the menu price listed by the restaurant at their counter.',
                icon: Shield,
                color: 'var(--yellow)',
                bg: 'rgba(255, 229, 0, 0.08)',
                border: 'rgba(255, 229, 0, 0.18)',
              },
              {
                title: 'Real restaurants',
                desc: 'Supporting local kitchens directly. By charging 0% commission, restaurants keep 100% of their earnings.',
                icon: CheckCircle,
                color: 'var(--green-light)',
                bg: 'rgba(0, 155, 141, 0.08)',
                border: 'rgba(0, 155, 141, 0.2)',
              },
              {
                title: 'Zero surprises',
                desc: 'A full transparent breakdown of your food price, delivery fee, and GST. No fake discounts or hidden fees.',
                icon: HelpCircle,
                color: '#a78bfa',
                bg: 'rgba(167, 139, 250, 0.08)',
                border: 'rgba(167, 139, 250, 0.2)',
              }
            ].map((promise, i) => {
              const Icon = promise.icon;
              return (
                <div key={promise.title} className="reveal-scale" style={{ transitionDelay: `${i * 80}ms` }}>
                  <div
                    style={{
                      padding: '40px 32px',
                      borderRadius: '24px',
                      height: '100%',
                      background: 'rgba(255, 255, 255, 0.04)',
                      border: `1px solid ${promise.border}`,
                      backdropFilter: 'blur(12px)',
                      transition: 'transform 0.35s cubic-bezier(.34,1.56,.64,1), background 0.35s ease',
                      cursor: 'default',
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.transform = 'translateY(-6px)';
                      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.07)';
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.transform = '';
                      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.04)';
                    }}
                  >
                    <div style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '14px',
                      background: promise.bg,
                      border: `1px solid ${promise.border}`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '24px',
                    }}>
                      <Icon size={22} color={promise.color} />
                    </div>
                    <h3 style={{
                      fontFamily: "'Syne', sans-serif",
                      fontWeight: '700',
                      fontSize: '18px',
                      color: 'var(--cream)',
                      marginBottom: '12px',
                      letterSpacing: '-0.01em',
                    }}>
                      {promise.title}
                    </h3>
                    <p style={{
                      fontSize: '14px',
                      lineHeight: '1.65',
                      color: 'rgba(253, 248, 242, 0.55)',
                    }}>
                      {promise.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
         SECTION 4 — AVAILABILITY / DOWNLOAD SECTION
      ═══════════════════════════════════════════════════ */}
      <section style={{
        background: 'var(--cream)',
        padding: '110px 0',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Soft Radial Grid */}
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: '900px', height: '900px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(0,95,87,0.04) 0%, transparent 60%)', pointerEvents: 'none' }} />

        <div className="section-wrap" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{
            background: 'var(--dark)',
            borderRadius: '36px',
            padding: 'clamp(48px, 6vw, 80px) clamp(24px, 5vw, 64px)',
            position: 'relative',
            overflow: 'hidden',
            textAlign: 'center',
          }}>
            {/* Card backgrounds */}
            <div style={{ position: 'absolute', top: '-40px', right: '-40px', width: '280px', height: '280px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,229,0,0.06) 0%, transparent 65%)', pointerEvents: 'none' }} />
            <div style={{ position: 'absolute', bottom: '-60px', left: '-60px', width: '320px', height: '320px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(0,122,110,0.18) 0%, transparent 65%)', pointerEvents: 'none' }} />

            <div style={{ position: 'relative', zIndex: 1 }}>
              {/* Region Tag */}
              <div className="reveal" style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: 'rgba(0, 95, 87, 0.22)',
                border: '1px solid rgba(0, 155, 141, 0.28)',
                padding: '6px 18px',
                borderRadius: '100px',
                marginBottom: '28px',
              }}>
                <MapPin size={13} color="var(--green-light)" />
                <span style={{ fontSize: '11px', fontWeight: '700', color: 'var(--green-light)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                  Available Now in Chandigarh Tricity
                </span>
              </div>

              <h2 className="reveal heading-display heading-lg" style={{ color: 'var(--cream)', marginBottom: '16px' }}>
                Download the Kwikkit app.<br />
                <span style={{ background: 'linear-gradient(90deg, var(--yellow) 0%, #fff9a0 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                  Real food, original prices.
                </span>
              </h2>

              <p className="reveal" style={{ fontSize: '16px', lineHeight: '1.65', color: 'rgba(253, 248, 242, 0.55)', maxWidth: '440px', margin: '0 auto 48px' }}>
                No artificial markup, no platform commissions. Get your favorite meals from trusted restaurants in Chandigarh, Panchkula & Mohali.
              </p>

              {/* Download Buttons Row */}
              <div className="reveal" style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap', marginBottom: '24px' }}>
                <a href="https://apps.apple.com/in/app/kwikkit-food-delivery/id6759088912"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '12px',
                    background: 'var(--cream)',
                    color: 'var(--green-dark)',
                    padding: '14px 28px',
                    borderRadius: '16px',
                    textDecoration: 'none',
                    fontWeight: '700',
                    fontSize: '15px',
                    boxShadow: '0 8px 32px rgba(0,0,0,0.15)',
                    transition: 'transform 0.3s cubic-bezier(.34,1.56,.64,1), box-shadow 0.3s ease',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 16px 48px rgba(0,0,0,0.25)'; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '0 8px 32px rgba(0,0,0,0.15)'; }}
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="var(--green-dark)" style={{ flexShrink: 0 }}>
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98l-.09.06c-.22.14-2.22 1.3-2.2 3.88.03 3.02 2.65 4.03 2.68 4.04l-.03.1zM13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                  </svg>
                  <div style={{ textAlign: 'left' }}>
                    <div style={{ fontSize: '11px', opacity: 0.6, fontWeight: '500', lineHeight: '1.2' }}>Download on the</div>
                    <div style={{ fontSize: '15px', lineHeight: '1.2' }}>App Store</div>
                  </div>
                </a>

                <a href="https://play.google.com/store/apps/details?id=com.kwikkitcustomer.kwikkitcustomerapp"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '12px',
                    background: 'rgba(255,255,255,0.06)',
                    border: '1px solid rgba(255,255,255,0.16)',
                    backdropFilter: 'blur(8px)',
                    color: 'var(--cream)',
                    padding: '14px 28px',
                    borderRadius: '16px',
                    textDecoration: 'none',
                    fontWeight: '700',
                    fontSize: '15px',
                    transition: 'transform 0.3s cubic-bezier(.34,1.56,.64,1), background 0.3s ease',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.background = 'rgba(255,255,255,0.12)'; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.background = 'rgba(255,255,255,0.06)'; }}
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="var(--cream)" style={{ flexShrink: 0 }}>
                    <path d="M3.18 23.76c.3.17.65.19.98.07L14.94 12 3.16.17C2.83.05 2.48.07 2.18.24 1.6.57 1.25 1.2 1.25 1.93v20.14c0 .73.35 1.36.93 1.69zM16.34 13.19l2.69 2.69-9.14 5.08 6.45-7.77zM20.7 9.99l-2.26-1.26-3.1 3.1 3.1 3.1 2.28-1.27c.65-.36 1.04-.97 1.04-1.67s-.39-1.29-1.06-1.9zM9.89 12L3.44 3.04l9.14 5.08-2.69 2.69V12z" />
                  </svg>
                  <div style={{ textAlign: 'left' }}>
                    <div style={{ fontSize: '11px', opacity: 0.6, fontWeight: '500', lineHeight: '1.2' }}>Get it on</div>
                    <div style={{ fontSize: '15px', lineHeight: '1.2' }}>Google Play</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
         SECTION 5 — CONTACT INFORMATION
      ═══════════════════════════════════════════════════ */}
      <section style={{
        background: 'var(--cream-dark)',
        padding: '90px 0',
        borderTop: '1px solid rgba(0, 95, 87, 0.05)',
      }}>
        <div className="section-wrap" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div className="reveal" style={{
            background: 'var(--white)',
            border: '1px solid rgba(0, 95, 87, 0.08)',
            borderRadius: '24px',
            padding: '40px clamp(24px, 5vw, 60px)',
            maxWidth: '720px',
            width: '100%',
            textAlign: 'center',
            boxShadow: '0 8px 30px rgba(0,95,87,0.03)',
          }}>
            <h3 style={{
              fontFamily: "'Syne', sans-serif",
              fontWeight: '800',
              fontSize: '24px',
              color: 'var(--text-primary)',
              marginBottom: '10px',
            }}>
              Have questions or feedback?
            </h3>
            <p style={{ fontSize: '14px', color: 'var(--text-muted)', marginBottom: '32px' }}>
              We'd love to hear from you. Contact the Kwikkit team directly.
            </p>

            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '24px',
            }}>
              {/* Email Button */}
              <a
                href="mailto:info@kwikkit.in"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  background: 'var(--green-dark)',
                  color: 'var(--cream)',
                  padding: '14px 28px',
                  borderRadius: '100px',
                  fontSize: '15px',
                  fontWeight: '600',
                  textDecoration: 'none',
                  transition: 'transform 0.25s ease, background-color 0.25s ease',
                  boxShadow: '0 4px 15px rgba(0, 61, 55, 0.15)',
                }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.backgroundColor = 'var(--green)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.backgroundColor = 'var(--green-dark)'; }}
              >
                <Mail size={16} />
                info@kwikkit.in
              </a>

              {/* Phone Button */}
              <a
                href="tel:+918699555046"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  background: 'transparent',
                  border: '2px solid var(--green)',
                  color: 'var(--green)',
                  padding: '12px 28px',
                  borderRadius: '100px',
                  fontSize: '15px',
                  fontWeight: '600',
                  textDecoration: 'none',
                  transition: 'transform 0.25s ease, background-color 0.25s ease, color 0.25s ease',
                }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.backgroundColor = 'rgba(0, 95, 87, 0.05)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.backgroundColor = 'transparent'; }}
              >
                <Phone size={16} />
                +91 86995 55046
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Inline styles for modal transition */}
      <style>{`
        @keyframes modalSlideUp {
          from {
            opacity: 0;
            transform: translateY(30px) scale(0.98);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
      `}</style>
    </main>
  );
}
