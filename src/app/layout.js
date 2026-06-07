import "./globals.css";
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export const metadata = {
  title: "Kwikkit — Honest Food Delivery in Chandigarh Tricity",
  description:
    "Pay what the restaurant actually charges. No hidden fees. No inflated menu prices. Zero-commission food delivery from restaurants you already love in Chandigarh, Panchkula & Mohali.",
  keywords: "food delivery, Chandigarh, Panchkula, Mohali, no hidden fees, zero commission, restaurant delivery",
  openGraph: {
    title: "Kwikkit — Honest Food Delivery",
    description: "Pay what the restaurant actually charges. No hidden fees.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="developer" content="Palkesh Prajapati & Chetna Singh" />
        <meta name="developer-github" content="https://github.com/PalkeshPrajapati & https://github.com/chetnasingh31" />
        <meta name="publisher" content="Kwikkit" />
        <meta name="copyright" content="© 2026 Kwikkit. All rights reserved." />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

