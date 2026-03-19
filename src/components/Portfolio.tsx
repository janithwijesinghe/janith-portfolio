import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Play, ExternalLink } from 'lucide-react';

type Category =
  | 'All'
  | 'Social Media'
  | '2D Animation'
  | 'AI Video'
  | 'Web Development';

interface Project {
  id: number;
  title: string;
  category: Category;
  thumbnail: string;
  videoUrl?: string;
  description: string;
}

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState<Category>('All');
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const categories: Category[] = [
    'All',
    'Social Media',
    '2D Animation',
    'AI Video',
    'Web Development',
  ];

  const projects: Project[] = [
    {
      id: 1,
      title: 'Social Media Content Creation',
      category: 'Social Media',
      thumbnail: '/images/social1-cover.png',
      description: 'Social Media Post & Video Design',
    },
    {
      id: 2,
      title: 'Product Promotion Video',
      category: 'Social Media',
      thumbnail: '/images/project2-cover.png',
      description: 'Social Media Video Production',
    },
    {
      id: 3,
      title: 'Product Promotion Video',
      category: 'AI Video',
      thumbnail: '/images/project3-cover.png',
      description: 'AI Powered Product Video Creation',
    },
    {
      id: 4,
      title: 'YouTube Video Content Creation',
      category: '2D Animation',
      thumbnail: '/images/project4-cover.png',
      description: '2D Character Animation Showcase',
    },
    {
      id: 5,
      title: 'Product Promotion Video',
      category: 'AI Video',
      thumbnail: '/images/project5-cover.png',
      description: 'AI Powered Product Video Creation',
    },
    {
      id: 6,
      title: 'Product Promotion Video',
      category: 'AI Video',
      thumbnail: '/images/project6-cover.png',
      description: 'AI Powered Product Video Creation',
    },
    {
      id: 7,
      title: 'Website Design & Development',
      category: 'Web Development',
      thumbnail: '/images/web1.png',
      description: 'Tour & Taxi Booking Website',
    },
    {
      id: 8,
      title: 'Mobile Application',
      category: 'Web Development',
      thumbnail: '/images/web2.png',
      description: 'Rice Plant Disease Diagnosis App',
    },
    {
      id: 9,
      title: 'Website Landing Page Design',
      category: 'Web Development',
      thumbnail: '/images/web3.png',
      description: 'Modern Looking Unique Page Design',
    },
  ];

  const filteredProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // ✅ FIXED NAVIGATION
  const handleProjectClick = (projectId: number) => {
    navigate(`/project/${projectId}`, {
      state: { from: '/portfolio' },
    });
  };

  return (
    <section
      id="portfolio"
      ref={sectionRef}
      className="py-24 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-[#1a1a2e] to-[#0a0a0f]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2
            className={`text-5xl md:text-6xl font-bold mb-6 ${
              isVisible ? 'fade-in-up' : 'opacity-0'
            }`}
          >
            Featured <span className="glow-text-cyan">Portfolio</span>
          </h2>

          <p
            className={`text-xl text-gray-300 max-w-3xl mx-auto mb-12 ${
              isVisible ? 'fade-in-up' : 'opacity-0'
            }`}
            style={{ animationDelay: '0.2s' }}
          >
            Explore a collection of my best work across animation, video editing,
            and digital content creation.
          </p>

          <div
            className={`flex flex-wrap justify-center gap-4 ${
              isVisible ? 'fade-in-up' : 'opacity-0'
            }`}
            style={{ animationDelay: '0.4s' }}
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-[0_0_20px_rgba(0,217,255,0.5)]'
                    : 'glass-panel text-gray-300 hover:text-white hover:border-cyan-500'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              onClick={() => handleProjectClick(project.id)}
              className={`group relative overflow-hidden rounded-2xl cursor-pointer ${
                isVisible ? 'scale-in' : 'opacity-0'
              }`}
              style={{ animationDelay: `${0.5 + index * 0.1}s` }}
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-600 opacity-0 group-hover:opacity-100 blur transition-all duration-500" />

              <div className="relative bg-[#1a1a2e] rounded-2xl overflow-hidden">
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Play className="w-16 h-16 text-cyan-400" />
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-semibold text-cyan-400 uppercase tracking-wider">
                      {project.category}
                    </span>

                    <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-cyan-400 transition-colors" />
                  </div>

                  <h3 className="text-xl font-bold mb-2 group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 text-sm">
                    {project.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
