import { useEffect, useState, useRef } from "react";
import {
  Share2,
  Youtube,
  Video,
  Sparkles,
  Code,
  Clapperboard
} from "lucide-react";

export default function Services() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const services = [
    {
      icon: Share2,
      title: "Social Media Management",
      description:
        "Managing social media platforms with strategic content planning, audience engagement, and performance tracking.",
      gradient: "from-cyan-500 to-blue-500",
    },
    {
      icon: Youtube,
      title: "YouTube Channel Growth",
      description:
        "Optimizing YouTube content, analytics, SEO, and strategy to grow audiences and improve channel performance.",
      gradient: "from-red-500 to-pink-500",
    },
    {
      icon: Video,
      title: "Video Editing",
      description:
        "Professional video editing that transforms raw footage into polished, engaging productions.",
      gradient: "from-cyan-500 to-purple-500",
    },
    {
      icon: Sparkles,
      title: "Content Creation",
      description:
        "Creating engaging content for YouTube, TikTok, Instagram, and other social media platforms.",
      gradient: "from-amber-500 to-orange-500",
    },
    {
      icon: Code,
      title: "Programming & Web Development",
      description:
        "Building web applications and digital solutions using technologies like Java, Spring Boot, and JavaScript.",
      gradient: "from-green-500 to-cyan-500",
    },
    {
      icon: Clapperboard,
      title: "2D Animation",
      description:
        "Creating engaging 2D animations that bring ideas, characters, and stories to life.",
      gradient: "from-purple-500 to-indigo-500",
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
    <section
      id="services"
      ref={sectionRef}
      className="py-24 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[#0a0a0f]" />

      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">

        <div className="text-center mb-16">
          <h2
            className={`text-5xl md:text-6xl font-bold mb-6 ${
              isVisible ? "fade-in-up" : "opacity-0"
            }`}
          >
            Creative <span className="glow-text-purple">Services</span>
          </h2>

          <p
            className={`text-xl text-gray-300 max-w-3xl mx-auto ${
              isVisible ? "fade-in-up" : "opacity-0"
            }`}
            style={{ animationDelay: "0.2s" }}
          >
            From concept to completion, I provide creative and technical
            solutions to help brands grow through social media, video, and web
            development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                className={`group relative ${
                  isVisible ? "scale-in" : "opacity-0"
                }`}
                style={{ animationDelay: `${0.3 + index * 0.1}s` }}
              >
                <div
                  className="absolute -inset-1 opacity-0 group-hover:opacity-100 rounded-3xl blur transition-all duration-500"
                  style={{
                    background:
                      "linear-gradient(135deg, var(--color-primary), var(--color-secondary))",
                  }}
                />

                <div className="relative glass-panel p-8 rounded-3xl h-full transform group-hover:-translate-y-2 transition-all duration-300">

                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                    {service.title}
                  </h3>

                  <p className="text-gray-300 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="mt-6 h-1 w-0 group-hover:w-full bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full transition-all duration-500" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
