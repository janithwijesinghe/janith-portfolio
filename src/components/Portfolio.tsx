import { useState, useEffect, useRef } from 'react';
import { Play, ExternalLink, X, ChevronLeft, ChevronRight } from 'lucide-react';

type Category =
  | 'All'
  | 'Social Media'
  | 'YouTube Management'
  | '2D Animation'
  | 'Web Development'
  | 'AI Video';

interface Media {
  type: 'image' | 'video';
  src: string;
}

interface Project {
  id: number;
  title: string;
  category: Category;
  thumbnail: string;
  description: string;
  media: Media[];
}

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState<Category>('All');
  const [isVisible, setIsVisible] = useState(false);
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [mediaIndex, setMediaIndex] = useState(0);

  const sectionRef = useRef<HTMLDivElement>(null);

  const categories: Category[] = [
    'All',
    'Social Media',
    'YouTube Management',
    '2D Animation',
    'Web Development',
    'AI Video',
  ];

  const projects: Project[] = [
    {
      id: 1,
      title: 'Social Media Campaign',
      category: 'Social Media',
      thumbnail: '/project3-cover.png',
      description: 'Social media strategy and campaign management.',
      media: [
        { type: 'image', src: '/social1-cover.png' },
        { type: 'image', src: '/project2-cover.png' },
      ],
    },
    {
      id: 2,
      title: 'YouTube Channel Management',
      category: 'YouTube Management',
      thumbnail: '/project4-cover.png',
      description: 'YouTube analytics and channel growth strategy.',
      media: [
        { type: 'video', src: '/youtube-sample.mp4' },
      ],
    },
    {
      id: 3,
      title: 'Web Video Content',
      category: 'Social Media',
      thumbnail: '/project5-cover.png',
      description: 'Video content creation for web and social media.',
      media: [
        { type: 'video', src: '/web-video.mp4' },
      ],
    },
    {
      id: 4,
      title: 'AI Video Production',
      category: 'AI Video',
      thumbnail: '/project6-cover.png',
      description: 'AI-powered video production and storytelling.',
      media: [
        { type: 'video', src: '/ai-video.mp4' },
      ],
    },
    {
      id: 5,
      title: 'Website Development',
      category: 'Web Development',
      thumbnail: '/web1.png',
      description: 'Modern website and mobile application development.',
      media: [
        { type: 'image', src: '/web1.png' },
        { type: 'image', src: '/web2.png' },
        { type: 'image', src: '/web3.png' },
      ],
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

  const nextMedia = () => {
    if (!activeProject) return;
    setMediaIndex((mediaIndex + 1) % activeProject.media.length);
  };

  const prevMedia = () => {
    if (!activeProject) return;
    setMediaIndex(
      (mediaIndex - 1 + activeProject.media.length) %
        activeProject.media.length
    );
  };

  return (
    <section id="portfolio" ref={sectionRef} className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-[#1a1a2e] to-[#0a0a0f]" />

      <div className="container mx-auto px-6 relative z-10">

        {/* Title */}
        <div className="text-center mb-16">
          <h2 className={`text-5xl md:text-6xl font-bold mb-6 ${isVisible ? 'fade-in-up' : 'opacity-0'}`}>
            Featured <span className="glow-text-cyan">Portfolio</span>
          </h2>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full font-semibold ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white'
                  : 'glass-panel text-gray-300'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-2xl cursor-pointer"
              onClick={() => {
                setActiveProject(project);
                setMediaIndex(0);
              }}
            >
              <div className="relative bg-[#1a1a2e] rounded-2xl overflow-hidden">
                <div className="aspect-video relative overflow-hidden">

                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />

                  <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition">
                    <Play className="w-16 h-16 text-cyan-400" />
                  </div>

                </div>

                <div className="p-6">
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

      {/* MEDIA VIEWER */}
      {activeProject && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50">

          <button
            className="absolute top-8 right-8"
            onClick={() => setActiveProject(null)}
          >
            <X className="w-8 h-8 text-white" />
          </button>

          <button className="absolute left-10" onClick={prevMedia}>
            <ChevronLeft className="w-10 h-10 text-white" />
          </button>

          <button className="absolute right-10" onClick={nextMedia}>
            <ChevronRight className="w-10 h-10 text-white" />
          </button>

          <div className="max-w-5xl w-full">
            {activeProject.media[mediaIndex].type === 'image' ? (
              <img
                src={activeProject.media[mediaIndex].src}
                className="w-full rounded-xl"
              />
            ) : (
              <video
                src={activeProject.media[mediaIndex].src}
                controls
                className="w-full rounded-xl"
              />
            )}
          </div>

        </div>
      )}
    </section>
  );
}
