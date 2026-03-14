import { Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = ['Home', 'About', 'Services', 'Portfolio', 'Contact'];
  const socialLinks = ['LinkedIn', 'fiverr', 'git'];

  return (
    <footer className="relative py-12 overflow-hidden border-t border-gray-800">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] to-black" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src="/logo.png" alt="Janith Wijesinghe" className="h-12" />
            </div>
            <p className="text-gray-400 leading-relaxed mb-6">
              Transforming ideas into engaging digital experiences through social media strategy, 
              creative storytelling, video production, and technology.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-10 h-10 rounded-lg glass-panel flex items-center justify-center hover:bg-cyan-500/20 hover:border-cyan-500 transition-all duration-300 text-xs font-semibold"
                  aria-label={social}
                >
                  {social[0]}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6 text-cyan-400">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 inline-flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-cyan-400 transition-all duration-300" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6 text-cyan-400">Get In Touch</h3>
            <div className="space-y-3 text-gray-400">
              <p>
                <a href="mailto:janith@example.com" className="hover:text-cyan-400 transition-colors">
                  janithjayarisi@gmail.com
                </a>
              </p>
              <p>
                <a href="tel:+15551234567" className="hover:text-cyan-400 transition-colors">
                  +94 714 352 799
                </a>
              </p>
              <p className="text-sm">Available for freelance projects</p>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm flex items-center gap-2">
              <span>&copy; {currentYear} Janith Wijesinghe. All rights reserved.</span>
            </p>

            <p className="text-gray-400 text-sm flex items-center gap-2">
              Made with <Heart className="w-4 h-4 text-red-500 fill-red-500 animate-pulse" /> and creativity
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
