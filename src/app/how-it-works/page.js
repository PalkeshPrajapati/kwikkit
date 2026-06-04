import HowHero from './components/HowHero';
import CustomerJourney from './components/CustomerJourney';
import RestaurantJourney from './components/RestaurantJourney';
import HowFAQ from './components/HowFAQ';
import HowCTA from './components/HowCTA';

export const metadata = {
  title: 'How It Works — Kwikkit',
  description:
    'Learn how Kwikkit works for customers and restaurant partners. 4 simple steps to order food honestly. Go live as a restaurant in under 24 hours.',
};

export default function HowItWorksPage() {
  return (
    <>
      <HowHero />
      <CustomerJourney />
      <RestaurantJourney />
      <HowFAQ />
      <HowCTA />
    </>
  );
}
