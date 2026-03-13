import { useState, useEffect, useRef } from 'react';
import { Mail, MessageSquare, Send, CheckCircle } from 'lucide-react';
import emailjs from "@emailjs/browser";

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

    emailjs.send(
      "service_2n1zpjl",
      "template_79571aa",
      {
        name: formData.name,
        email: formData.email,
        message: formData.message,
      },
      "O9ubO3JIr-WR1wwjw"
    ).then(
      () => {
        setSubmitted(true);
        setTimeout(() => {
          setSubmitted(false);
          setFormData({ name: '', email: '', message: '' });
        }, 3000);
      },
      (error) => {
        console.log("FAILED...", error);
        alert("Failed to send message. Please try again.");
      }
    );
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
          
          {/* LEFT PANEL */}
          <div className={`${isVisible ? 'fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
            <div className="glass-panel p-8 rounded-3xl h-full">
              <h3 className="text-3xl font-bold mb-6">Get In Touch</h3>

              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4 group cursor-pointer">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Email</h4>
                    <p className="text-gray-400">janithjayarisi@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group cursor-pointer">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-cyan-500 flex items-center justify-center">
                    <MessageSquare className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">WhatsApp</h4>
                    <a
                      href="https://wa.me/94714352799"
                      target="_blank"
                      className="text-gray-400 hover:text-green-400"
                    >
                      +94714352799
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-2xl border border-cyan-500/20">
                <p className="text-gray-300 leading-relaxed">
                  I’m always excited to collaborate on new projects. Whether you need animation, video editing,
                  motion graphics, or website development, let’s create something amazing together.
                </p>
              </div>
            </div>
          </div>

          {/* FORM */}
          <div className={`${isVisible ? 'fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.4s' }}>
            <div className="glass-panel p-8 rounded-3xl">

              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">

                  <div>
                    <label className="block text-sm font-semibold mb-2 text-gray-300">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-[#0a0a0f] border border-gray-700 rounded-xl focus:border-cyan-500 focus:outline-none"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2 text-gray-300">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-[#0a0a0f] border border-gray-700 rounded-xl focus:border-cyan-500 focus:outline-none"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2 text-gray-300">
                      Your Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-[#0a0a0f] border border-gray-700 rounded-xl focus:border-cyan-500 focus:outline-none resize-none"
                      placeholder="Tell me about your project..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl font-semibold text-lg flex items-center justify-center gap-2 hover:scale-105 transition"
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
