import { useState, useEffect, useRef } from 'react';
import { Mail, MessageSquare, Send, CheckCircle } from 'lucide-react';

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" ref={sectionRef} className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-[#1a1a2e] to-[#0a0a0f]" />

      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className={`text-5xl md:text-6xl font-bold mb-6 ${isVisible ? 'fade-in-up' : 'opacity-0'}`}>
            Let's Create <span className="glow-text-cyan">Together</span>
          </h2>
          <p className={`text-xl text-gray-300 max-w-3xl mx-auto ${isVisible ? 'fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
            Have a project in mind? Let's discuss how we can bring your vision to life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className={`${isVisible ? 'fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
            <div className="glass-panel p-8 rounded-3xl h-full">
              <h3 className="text-3xl font-bold mb-6">Get In Touch</h3>

              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4 group cursor-pointer">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Email</h4>
                    <p className="text-gray-400">janith@example.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group cursor-pointer">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-cyan-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <MessageSquare className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">WhatsApp</h4>
                    <p className="text-gray-400">+1 (555) 123-4567</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-semibold text-lg mb-4">Follow Me</h4>
                <div className="flex gap-4">
                  {['YouTube', 'Instagram', 'LinkedIn', 'Behance'].map((platform) => (
                    <a
                      key={platform}
                      href="#"
                      className="w-12 h-12 rounded-xl glass-panel flex items-center justify-center hover:bg-cyan-500/20 hover:border-cyan-500 transition-all duration-300 transform hover:scale-110"
                      aria-label={platform}
                    >
                      <span className="text-sm font-semibold">{platform[0]}</span>
                    </a>
                  ))}
                </div>
              </div>

              <div className="mt-8 p-6 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-2xl border border-cyan-500/20">
                <p className="text-gray-300 leading-relaxed">
                  I'm always excited to collaborate on new projects. Whether you need animation,
                  video editing, or motion graphics, let's create something amazing together.
                </p>
              </div>
            </div>
          </div>

          <div className={`${isVisible ? 'fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.4s' }}>
            <div className="glass-panel p-8 rounded-3xl">
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold mb-2 text-gray-300">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-[#0a0a0f] border border-gray-700 rounded-xl focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold mb-2 text-gray-300">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-[#0a0a0f] border border-gray-700 rounded-xl focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold mb-2 text-gray-300">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-[#0a0a0f] border border-gray-700 rounded-xl focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300 resize-none"
                      placeholder="Tell me about your project..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl font-semibold text-lg hover:shadow-[0_0_30px_rgba(0,217,255,0.6)] transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                  >
                    <Send className="w-5 h-5" />
                    Send Message
                  </button>
                </form>
              ) : (
                <div className="flex flex-col items-center justify-center py-16">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-green-500 to-cyan-500 flex items-center justify-center mb-6 animate-pulse">
                    <CheckCircle className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2 text-cyan-400">Message Sent!</h3>
                  <p className="text-gray-300 text-center">
                    Thank you for reaching out. I'll get back to you soon!
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
