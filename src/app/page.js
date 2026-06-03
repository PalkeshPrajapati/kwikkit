import Navbar from './components/Navbar';
import HeroSection from './components/landing-page/HeroSection';
import PromiseSection from './components/landing-page/PromiseSection';
import WhySection from './components/landing-page/WhySection';
import HowItWorksSection from './components/landing-page/HowItWorksSection';
import AppShowcaseSection from './components/landing-page/AppShowcaseSection';
import TestimonialsSection from './components/landing-page/TestimonialsSection';
import FAQSection from './components/landing-page/FAQSection';
import RestaurantSection from './components/landing-page/RestaurantSection';
import DownloadSection from './components/landing-page/DownloadSection';
import Footer from './components/Footer';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <PromiseSection />
        <WhySection />
        <HowItWorksSection />
        <AppShowcaseSection />
        <TestimonialsSection />
        <FAQSection />
        <RestaurantSection />
        <DownloadSection />
      </main>
      <Footer />
    </>
  );
}
