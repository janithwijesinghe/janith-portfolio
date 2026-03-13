import { useEffect, useState, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Testimonial {
  id: number;
  image: string;
}

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      image: 'public/images/R1.png',
    },
    {
      id: 2,
      image: 'public/images/R2.png',
    },
    {
      id: 3,
      image: 'public/images/R3.png',
    },
    {
      id: 4,
      image: 'public/images/R4.png',
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
            Client <span className="glow-text-purple">Reviews</span>
          </h2>

          <p
            className={`text-xl text-gray-300 max-w-3xl mx-auto ${
              isVisible ? 'fade-in-up' : 'opacity-0'
            }`}
            style={{ animationDelay: '0.2s' }}
          >
            Real reviews from my Fiverr clients.
          </p>
        </div>

        <div
          className={`max-w-5xl mx-auto ${isVisible ? 'scale-in' : 'opacity-0'}`}
          style={{ animationDelay: '0.4s' }}
        >
          <div className="relative">

            <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-3xl blur-2xl" />

            <div className="relative glass-panel p-6 rounded-3xl">

              {/* Fiverr Review Screenshot */}
              <img
                src={current.image}
                alt="Client Review"
                className="w-full rounded-xl border border-gray-700"
              />

              {/* Slider Controls */}
              <div className="flex justify-between items-center mt-8">

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
