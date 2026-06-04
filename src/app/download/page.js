import DownloadHero from './components/DownloadHero';
import FeaturesSection from './components/FeaturesSection';

export const metadata = {
  title: 'Download Kwikkit — Honest Food Delivery App',
  description:
    'Download Kwikkit on iOS or Android. Browse local restaurants, track your food live, and pay exactly what the restaurant charges. No hidden fees.',
};

export default function DownloadPage() {
  return (
    <>
      <DownloadHero />
      <FeaturesSection />
    </>
  );
}
