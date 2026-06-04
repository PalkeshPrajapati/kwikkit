import CalcHero from './components/CalcHero';
import SavingsCalculator from './components/SavingsCalculator';
import CostComparison from './components/CostComparison';
import PricingSection from './components/PricingSection';
import CalcFAQ from './components/CalcFAQ';
import ConversionSection from './components/ConversionSection';

export const metadata = {
  title: 'Savings Calculator — Kwikkit for Restaurants',
  description:
    'See exactly how much you save switching from 20-30% aggregator commissions to Kwikkit\'s flat daily fee. Calculate your profit recovery instantly.',
};

export default function SavingsCalculatorPage() {
  return (
    <>
      <CalcHero />
      <SavingsCalculator />
      <CostComparison />
      <PricingSection />
      <CalcFAQ />
      <ConversionSection />
    </>
  );
}
