import { useEffect, useState, useRef } from 'react';
import { Play } from 'lucide-react';

export default function VideoReel() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const reels = [
    {
      id: 1,
      title: 'Animation Showreel 2024',
      thumbnail: 'https://images.pexels.com/photos/3945683/pexels-photo-3945683.jpeg?auto=compress&cs=tinysrgb&w=1200',
      type: 'Animation Reel',
    },
    {
      id: 2,
      title: 'Documentary Highlights',
      thumbnail: 'https://images.pexels.com/photos/3225517/pexels-photo-3225517.jpeg?auto=compress&cs=tinysrgb&w=1200',
      type: 'Documentary',
    },
    {
      id: 3,
      title: 'Motion Graphics Portfolio',
      thumbnail: 'https://images.pexels.com/photos/6953875/pexels-photo-6953875.jpeg?auto=compress&cs=tinysrgb&w=1200',
      type: 'Motion Graphics',
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
    <section id="video-reel" ref={sectionRef} className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[#0a0a0f]" />

      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className={`text-5xl md:text-6xl font-bold mb-6 ${isVisible ? 'fade-in-up' : 'opacity-0'}`}>
            Video <span className="glow-text-purple">Showreels</span>
          </h2>
          <p className={`text-xl text-gray-300 max-w-3xl mx-auto ${isVisible ? 'fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
            Watch my latest work and creative journey through these curated showreels.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {reels.map((reel, index) => (
            <div
              key={reel.id}
              className={`group relative ${isVisible ? 'scale-in' : 'opacity-0'}`}
              style={{ animationDelay: `${0.3 + index * 0.1}s` }}
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500" />

              <div className="relative glass-panel rounded-3xl overflow-hidden">
                <div className="aspect-video relative overflow-hidden cursor-pointer">
                  <img
                    src={reel.thumbnail}
                    alt={reel.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex items-center justify-center">
                    <div className="transform group-hover:scale-110 transition-transform duration-300">
                      <div className="w-20 h-20 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 flex items-center justify-center shadow-[0_0_40px_rgba(0,217,255,0.6)]">
                        <Play className="w-10 h-10 text-white ml-1" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <span className="text-xs font-semibold text-cyan-400 uppercase tracking-wider">
                    {reel.type}
                  </span>
                  <h3 className="text-xl font-bold mt-2 group-hover:text-cyan-400 transition-colors">
                    {reel.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={`mt-16 max-w-5xl mx-auto ${isVisible ? 'fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.6s' }}>
          <div className="glass-panel rounded-3xl overflow-hidden">
            <div className="aspect-video bg-gradient-to-br from-cyan-500/10 to-purple-500/10 flex items-center justify-center">
              <div className="text-center">
                <Play className="w-24 h-24 mx-auto mb-6 text-cyan-400 animate-pulse" />
                <h3 className="text-2xl font-bold mb-2">Featured Showreel</h3>
                <p className="text-gray-400">Click to watch the complete demo reel</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
