import { useState } from "react";
import { Play, X, ChevronLeft, ChevronRight } from "lucide-react";

type Category =
  | "All"
  | "Social Media"
  | "YouTube Management"
  | "2D Animation"
  | "Web Development"
  | "AI Video";

interface Media {
  type: "image" | "video";
  src: string;
}

interface Project {
  id: number;
  title: string;
  category: Category;
  cover: string;
  description: string;
  media: Media[];
}

export default function Portfolio() {

  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [mediaIndex, setMediaIndex] = useState(0);

  const categories: Category[] = [
    "All",
    "Social Media",
    "YouTube Management",
    "2D Animation",
    "Web Development",
    "AI Video",
  ];

  const projects: Project[] = [
    {
      id: 1,
      title: "Social Media Campaign",
      category: "Social Media",
      cover: "/project3-cover.png",
      description: "Social media strategy and content production.",
      media: [
        { type: "image", src: "/social1-cover.png" },
        { type: "image", src: "/project2-cover.png" },
      ],
    },

    {
      id: 2,
      title: "YouTube Channel Management",
      category: "YouTube Management",
      cover: "/project4-cover.png",
      description: "YouTube channel growth and analytics optimization.",
      media: [
        { type: "video", src: "/youtube-sample.mp4" },
      ],
    },

    {
      id: 3,
      title: "Web Video Content",
      category: "Social Media",
      cover: "/project5-cover.png",
      description: "Content production for digital marketing.",
      media: [
        { type: "video", src: "/web-video.mp4" },
      ],
    },

    {
      id: 4,
      title: "AI Video Production",
      category: "AI Video",
      cover: "/project6-cover.png",
      description: "AI assisted video storytelling and production.",
      media: [
        { type: "video", src: "/ai-video.mp4" },
      ],
    },

    {
      id: 5,
      title: "Website Development",
      category: "Web Development",
      cover: "/web1.png",
      description: "Full stack web development projects.",
      media: [
        { type: "image", src: "/web1.png" },
        { type: "image", src: "/web2.png" },
        { type: "image", src: "/web3.png" },
      ],
    },
  ];

  const filtered =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

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
    <section id="portfolio" className="py-24 relative">

      <div className="container mx-auto px-6">

        <h2 className="text-5xl font-bold text-center mb-12">
          Featured <span className="text-cyan-400">Portfolio</span>
        </h2>

        {/* CATEGORY FILTER */}

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActiveCategory(c)}
              className={`px-6 py-3 rounded-full ${
                activeCategory === c
                  ? "bg-cyan-500 text-white"
                  : "glass-panel"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* PROJECT GRID */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {filtered.map((project) => (
            <div
              key={project.id}
              className="cursor-pointer group"
              onClick={() => {
                setActiveProject(project);
                setMediaIndex(0);
              }}
            >
              <div className="rounded-xl overflow-hidden relative">

                <img
                  src={project.cover}
                  className="w-full h-60 object-cover group-hover:scale-110 transition"
                />

                <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100">
                  <Play className="w-14 h-14 text-white" />
                </div>

              </div>

              <h3 className="text-xl font-bold mt-4">{project.title}</h3>
              <p className="text-gray-400 text-sm">{project.description}</p>

            </div>
          ))}
        </div>

      </div>

      {/* PROJECT VIEWER */}

      {activeProject && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50">

          <button
            className="absolute top-8 right-8"
            onClick={() => setActiveProject(null)}
          >
            <X className="w-8 h-8 text-white" />
          </button>

          <button
            className="absolute left-10"
            onClick={prevMedia}
          >
            <ChevronLeft className="w-10 h-10 text-white" />
          </button>

          <button
            className="absolute right-10"
            onClick={nextMedia}
          >
            <ChevronRight className="w-10 h-10 text-white" />
          </button>

          <div className="max-w-5xl w-full">

            {activeProject.media[mediaIndex].type === "image" ? (
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
