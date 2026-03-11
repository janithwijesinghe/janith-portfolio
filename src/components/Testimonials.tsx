import { useEffect, useState, useRef } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  image: string;
  text: string;
  rating: number;
  project: string;
}

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Marketing Director',
      company: 'Creative Studios Inc.',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400',
      text: 'Janith transformed our brand story into a stunning animated video. The attention to detail and creative vision exceeded all expectations. Highly recommended!',
      rating: 5,
      project: 'Brand Animation',
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Content Producer',
      company: 'Digital Media Group',
      image: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=400',
      text: 'Working with Janith was an absolute pleasure. The motion graphics he created for our documentary added a professional polish that elevated the entire production.',
      rating: 5,
      project: 'Documentary Production',
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      role: 'Founder & CEO',
      company: 'StartUp Vision',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
      text: 'Outstanding work on our explainer video! Janith understood our vision perfectly and delivered a product that resonates with our audience. Communication was flawless.',
      rating: 5,
      project: 'Explainer Video',
    },
    {
      id: 4,
      name: 'David Thompson',
      role: 'Creative Director',
      company: 'Innovate Media',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
      text: 'Janith brings stories to life with incredible skill. The 3D animation project was completed on time and exceeded our quality standards. A true professional!',
      rating: 5,
      project: '3D Animation',
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

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[currentIndex];

  return (
    <section id="testimonials" ref={sectionRef} className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[#0a0a0f]" />

      <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className={`text-5xl md:text-6xl font-bold mb-6 ${isVisible ? 'fade-in-up' : 'opacity-0'}`}>
            Client <span className="glow-text-purple">Testimonials</span>
          </h2>
          <p className={`text-xl text-gray-300 max-w-3xl mx-auto ${isVisible ? 'fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
            Don't just take my word for it. Here's what clients say about working together.
          </p>
        </div>

        <div className={`max-w-5xl mx-auto ${isVisible ? 'scale-in' : 'opacity-0'}`} style={{ animationDelay: '0.4s' }}>
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-3xl blur-2xl" />

            <div className="relative glass-panel p-12 rounded-3xl">
              <Quote className="w-16 h-16 text-cyan-400/30 mb-6" />

              <div className="flex items-center gap-1 mb-6">
                {[...Array(current.rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-amber-400 text-amber-400" />
                ))}
              </div>

              <p className="text-2xl text-gray-200 leading-relaxed mb-8 font-light">
                "{current.text}"
              </p>

              <div className="flex items-center gap-6">
                <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-cyan-400/50">
                  <img
                    src={current.image}
                    alt={current.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div>
                  <h4 className="text-xl font-bold text-white mb-1">{current.name}</h4>
                  <p className="text-cyan-400 font-medium">{current.role}</p>
                  <p className="text-gray-400 text-sm">{current.company}</p>
                </div>

                <div className="ml-auto">
                  <span className="inline-block px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full text-sm font-semibold text-cyan-400 border border-cyan-400/30">
                    {current.project}
                  </span>
                </div>
              </div>

              <div className="flex justify-between items-center mt-12">
                <button
                  onClick={prevTestimonial}
                  className="w-12 h-12 rounded-full glass-panel flex items-center justify-center hover:bg-cyan-500/20 hover:border-cyan-500 transition-all duration-300"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>

                <div className="flex gap-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentIndex
                          ? 'bg-cyan-400 w-8'
                          : 'bg-gray-600 hover:bg-gray-500'
                      }`}
                      aria-label={`Go to testimonial ${index + 1}`}
                    />
                  ))}
                </div>

                <button
                  onClick={nextTestimonial}
                  className="w-12 h-12 rounded-full glass-panel flex items-center justify-center hover:bg-cyan-500/20 hover:border-cyan-500 transition-all duration-300"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
