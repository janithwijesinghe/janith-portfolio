import { useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: Array<{
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
    }> = [];

    for (let i = 0; i < 100; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 3 + 1,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        opacity: Math.random() * 0.5 + 0.2,
      });
    }

    function animate() {
      if (!ctx || !canvas) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 217, 255, ${particle.opacity})`;
        ctx.fill();

        particle.x += particle.speedX;
        particle.y += particle.speedY;

        if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1;
      });

      requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const scrollToContent = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0a0f]/50 to-[#0a0a0f] z-10" />

      <div className="absolute top-0 left-0 w-full h-full z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: '1s' }}
        />
      </div>

      <div className="container mx-auto px-6 z-20 relative">
        <div className="max-w-5xl mx-auto text-center">

          {/* TITLE */}
          <h1
            className="text-5xl md:text-7xl font-bold mb-3 fade-in-up leading-tight"
            style={{ animationDelay: '0.2s' }}
          >
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent animate-gradient">
              Creative Digital
            </span>
            <br />
            <span className="glow-text-cyan">Solutions</span>
          </h1>

          {/* ROLE TEXT */}
          <p
            className="text-lg md:text-xl text-gray-300 mb-2 font-space fade-in-up"
            style={{ animationDelay: '0.4s' }}
          >
            Social Media Manager • Video Editor • Programmer
          </p>

          {/* DESCRIPTION */}
          <p
            className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto mb-10 fade-in-up"
            style={{ animationDelay: '0.6s' }}
          >
            Transforming ideas into engaging digital experiences. As a social media manager,
            video editor, and programmer, I combine creativity and technology to create
            impactful content, build digital solutions, and bring stories to life.
          </p>

          {/* BUTTONS */}
          <div
            className="flex flex-col sm:flex-row gap-5 justify-center fade-in-up"
            style={{ animationDelay: '0.8s' }}
          >
            <button
              onClick={() =>
                document
                  .getElementById('portfolio')
                  ?.scrollIntoView({ behavior: 'smooth' })
              }
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full font-semibold text-lg hover:shadow-[0_0_30px_rgba(0,217,255,0.6)] transition-all duration-300 transform hover:scale-105"
            >
              View Portfolio
            </button>

            <button
              onClick={() =>
                document
                  .getElementById('contact')
                  ?.scrollIntoView({ behavior: 'smooth' })
              }
              className="px-8 py-4 glass-panel rounded-full font-semibold text-lg hover:border-cyan-500 transition-all duration-300 transform hover:scale-105"
            >
              Contact Me
            </button>
          </div>
        </div>
      </div>

      <button
        onClick={scrollToContent}
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-20 animate-bounce cursor-pointer"
        aria-label="Scroll down"
      >
        <ChevronDown className="w-8 h-8 text-cyan-400" />
      </button>
    </section>
  );
}
