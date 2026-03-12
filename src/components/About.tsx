import { useEffect, useState, useRef } from 'react';
import { Award, Clock, Video, Users } from 'lucide-react';

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const stats = [
    { icon: Clock, value: 8, suffix: '+', label: 'Years of Experience' },
    { icon: Video, value: 1.7M+ subscribers, suffix: '+', label: 'Built  YouTube channels' },
    { icon: Award, value: 1000, suffix: '+', label: 'Videos Produced' },
    { icon: Users, value: 200, suffix: '+', label: 'Clients Served' },
  ];

  const [counters, setCounters] = useState(stats.map(() => 0));

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const increment = duration / steps;

    stats.forEach((stat, index) => {
      let current = 0;
      const target = stat.value;
      const step = target / steps;

      const timer = setInterval(() => {
        current += step;
        if (current >= target) {
          setCounters((prev) => {
            const newCounters = [...prev];
            newCounters[index] = target;
            return newCounters;
          });
          clearInterval(timer);
        } else {
          setCounters((prev) => {
            const newCounters = [...prev];
            newCounters[index] = Math.floor(current);
            return newCounters;
          });
        }
      }, increment);
    });
  }, [isVisible]);

  return (
    <section id="about" ref={sectionRef} className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-[#1a1a2e] to-[#0a0a0f]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          <div className={`${isVisible ? 'fade-in-up' : 'opacity-0'}`}>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-3xl blur-2xl" />
              <div className="relative glass-panel p-8 rounded-3xl">
                <div className="w-full aspect-square bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-2xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-8xl mb-4">🎬</div>
                    <p className="text-cyan-400 font-semibold">Visual Storyteller</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={`${isVisible ? 'fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
            <h2 className="text-5xl font-bold mb-6">
              About <span className="glow-text-cyan">Janith Wijesinghe</span>
            </h2>

            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
              A passionate creative professional specializing in animation, video editing, and motion graphics.
              With over 8 years of experience in the creative industry, I've dedicated my career to transforming
              concepts into compelling visual narratives.
            </p>

            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              My expertise spans across 2D and 3D animation, documentary production, and social media content
              creation. I believe in the power of visual storytelling to connect, inspire, and captivate audiences
              across all platforms.
            </p>

            <div className="mb-8">
              <h3 className="text-2xl font-semibold mb-4 text-purple-400">Creative Philosophy</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                Every frame tells a story. Every transition evokes emotion. My approach combines technical
                excellence with artistic vision to create visuals that don't just look good—they feel right.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className={`glass-panel p-8 rounded-2xl text-center transform hover:scale-105 transition-all duration-300 ${
                  isVisible ? 'scale-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${0.4 + index * 0.1}s` }}
              >
                <Icon className="w-12 h-12 mx-auto mb-4 text-cyan-400" />
                <div className="text-4xl font-bold mb-2 glow-text-cyan">
                  {counters[index]}{stat.suffix}
                </div>
                <div className="text-gray-400 font-medium">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
