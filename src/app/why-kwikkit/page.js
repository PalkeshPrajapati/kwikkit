import WhyHero from './components/WhyHero';
import WhyComparison from './components/WhyComparison';
import WhyReasons from './components/WhyReasons';
import WhyProof from './components/WhyProof';
import WhyCTA from './components/WhyCTA';

export const metadata = {
  title: "Why Kwikkit — Honest Food Delivery in Chandigarh Tricity",
  description:
    "Discover why Kwikkit is the honest food delivery app for Chandigarh, Panchkula & Mohali. No platform commission, zero hidden surges, and real menu prices.",
  keywords: "zero commission, why Kwikkit, Chandigarh, no hidden fees, food delivery, original prices",
  openGraph: {
    title: "Why Kwikkit — Zero Commission, Honest Pricing",
    description: "Pay real menu prices with zero platform fees. Here's exactly why people are switching.",
    type: "website",
  },
};

export default function WhyKwikkitPage() {
  return (
    <>
      <WhyHero />
      <WhyComparison />
      <WhyReasons />
      <WhyProof />
      <WhyCTA />
    </>
  );
}
