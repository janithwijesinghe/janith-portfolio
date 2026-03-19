import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Portfolio from '../components/Portfolio';
import Footer from '../components/Footer';

export default function PortfolioPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white">
      <Navbar />
      <div className="pt-24">
        <Portfolio />
      </div>
      <Footer />
    </div>
  );
}
