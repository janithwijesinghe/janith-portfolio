import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import VideoReel from './components/VideoReel';
import CreativeProcess from './components/CreativeProcess';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <VideoReel />
      <CreativeProcess />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
