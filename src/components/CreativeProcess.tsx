import { useEffect, useState, useRef } from 'react';
import { Lightbulb, Palette, Video, Music, CheckCircle } from 'lucide-react';

export default function CreativeProcess() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const steps = [
    {
      icon: Lightbulb,
      title: 'Idea & Story',
      description: 'Understanding your vision and crafting the narrative foundation.',
      color: 'from-yellow-500 to-orange-500',
    },
    {
      icon: Palette,
      title: 'Concept Design',
      description: 'Creating visual concepts, storyboards, and style frames.',
      color: 'from-pink-500 to-purple-500',
    },
    {
      icon: Video,
      title: 'Animation Production',
      description: 'Bringing the designs to life through animation and motion.',
      color: 'from-cyan-500 to-blue-500',
    },
    {
      icon: Music,
      title: 'Editing & Sound',
      description: 'Fine-tuning visuals, adding effects, music, and sound design.',
      color: 'from-green-500 to-cyan-500',
    },
    {
      icon: CheckCircle,
      title: 'Final Delivery',
      description: 'Delivering polished, production-ready content on time.',
      color: 'from-purple-500 to-cyan-500',
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="process" ref={sectionRef} className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-[#1a1a2e] to-[#0a0a0f]" />

      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className={`text-5xl md:text-6xl font-bold mb-6 ${isVisible ? 'fade-in-up' : 'opacity-0'}`}>
            Creative <span className="glow-text-cyan">Process</span>
          </h2>
          <p className={`text-xl text-gray-300 max-w-3xl mx-auto ${isVisible ? 'fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
            A streamlined workflow designed to transform ideas into captivating visual stories.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="relative">
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-cyan-500 transform -translate-y-1/2 hidden lg:block" />

            <div className="grid lg:grid-cols-5 gap-8">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div
                    key={index}
                    className={`relative ${isVisible ? 'fade-in-up' : 'opacity-0'}`}
                    style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                  >
                    <div className="flex flex-col items-center text-center">
                      <div className="relative mb-6">
                        <div className={`w-24 h-24 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center shadow-[0_0_30px_rgba(0,217,255,0.4)] transform hover:scale-110 transition-transform duration-300`}>
                          <Icon className="w-12 h-12 text-white" />
                        </div>

                        <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-[#0a0a0f] border-2 border-cyan-400 flex items-center justify-center font-bold text-cyan-400">
                          {index + 1}
                        </div>
                      </div>

                      <h3 className="text-xl font-bold mb-3 text-white">
                        {step.title}
                      </h3>

                      <p className="text-gray-400 text-sm leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className={`mt-20 text-center ${isVisible ? 'fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.8s' }}>
          <div className="glass-panel max-w-3xl mx-auto p-8 rounded-3xl">
            <p className="text-lg text-gray-300 leading-relaxed">
              Every project is unique, and this process is tailored to meet your specific needs.
              From initial concept to final delivery, I ensure quality, creativity, and timely completion.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
