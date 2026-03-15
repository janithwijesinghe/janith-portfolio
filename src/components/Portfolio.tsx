import { useState, useEffect, useRef } from 'react';
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
  description: string;
  media?: string[];
  video?: string;
}

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState<Category>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

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
      title: 'Social Media Content Creation.',
      category: 'Social Media',
      thumbnail: '/images/social1-cover.png',
      description: 'Social Media Post & Video Design',
      media: [
        '/images/social1-1.png',
        '/images/social1-2.png',
        '/images/social1-3.png'
      ],
      video: '/videos/social1.mp4'
    },

    {
      id: 2,
      title: 'Product Promotion Video.',
      category: 'Social Media',
      thumbnail: '/images/project2 cover.png',
      description: 'Social Media Video Production',
      media: [
        '/images/project2-1.png',
        '/images/project2-2.png'
      ],
      video: '/videos/project2.mp4'
    },

    {
      id: 3,
      title: 'Product Promotion Video',
      category: 'AI Video',
      thumbnail: '/images/project3 cover.png',
      description: 'AI Powered Product Video Creation',
      media: [
        '/images/project3-1.png',
        '/images/project3-2.png'
      ],
      video: '/videos/project3.mp4'
    },

    {
      id: 7,
      title: 'Website Design & Development.',
      category: 'Web Development',
      thumbnail: '/images/web1.png',
      description: 'Tour & Taxi Booking Website',
      media: [
        '/images/web1-1.png',
        '/images/web1-2.png'
      ]
    },
  ];

  const filteredProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter((project) => project.category === activeCategory);

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

  /* ---------------------------
      PROJECT DETAIL VIEW
  ----------------------------*/

  if (selectedProject) {
    return (
      <section className="py-24 bg-[#0a0a0f]">

        <div className="container mx-auto px-6">

          <button
            onClick={() => setSelectedProject(null)}
            className="mb-10 px-6 py-2 glass-panel text-white rounded-full"
          >
            ← Back to Portfolio
          </button>

          <h2 className="text-5xl font-bold mb-6 glow-text-cyan">
            {selectedProject.title}
          </h2>

          <p className="text-gray-400 mb-12">
            {selectedProject.description}
          </p>

          {/* Video */}
          {selectedProject.video && (
            <div className="mb-12">
              <video
                src={selectedProject.video}
                controls
                className="w-full rounded-xl"
              />
            </div>
          )}

          {/* Images */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {selectedProject.media?.map((img, i) => (
              <img
                key={i}
                src={img}
                className="rounded-xl"
              />
            ))}
          </div>

        </div>

      </section>
    );
  }

  /* ---------------------------
      PORTFOLIO GRID
  ----------------------------*/

  return (
    <section
      id="portfolio"
      ref={sectionRef}
      className="py-24 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-[#1a1a2e] to-[#0a0a0f]" />

      <div className="container mx-auto px-6 relative z-10">

        <div className="text-center mb-16">

          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Featured <span className="glow-text-cyan">Portfolio</span>
          </h2>

          {/* Category Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white'
                    : 'glass-panel text-gray-300'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">

          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer relative overflow-hidden rounded-2xl"
            >

              <div className="relative bg-[#1a1a2e] rounded-2xl overflow-hidden">

                <div className="aspect-video relative overflow-hidden">

                  <img
                    src={project.thumbnail}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />

                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                    <Play className="w-16 h-16 text-cyan-400" />
                  </div>

                </div>

                <div className="p-6">

                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-cyan-400 uppercase">
                      {project.category}
                    </span>
                    <ExternalLink className="w-4 h-4 text-gray-400" />
                  </div>

                  <h3 className="text-xl font-bold mb-2">
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
