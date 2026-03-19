import { useState, useEffect } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom'; // ✅ added useLocation
import { ArrowLeft, Play } from 'lucide-react';
import { projectsData } from '../data/projectsData';
import Lightbox from '../components/Lightbox';
import Navbar from '../components/Navbar';

export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const location = useLocation(); // ✅ NEW

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);

  const project = projectsData.find((p) => p.id === Number(id));

  useEffect(() => {
    if (!project) {
      navigate('/portfolio'); // ✅ FIXED (was '/')
    }
  }, [project, navigate]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return null;
  }

  const openLightbox = (index: number) => {
    setCurrentMediaIndex(index);
    setLightboxOpen(true);
  };

  const handleNext = () => {
    setCurrentMediaIndex((prev) =>
      prev === project.media.length - 1 ? 0 : prev + 1
    );
  };

  const handlePrevious = () => {
    setCurrentMediaIndex((prev) =>
      prev === 0 ? project.media.length - 1 : prev - 1
    );
  };

  // ✅ NEW BACK FUNCTION
  const handleBack = () => {
    if (location.state?.from) {
      navigate(location.state.from);
    } else {
      navigate('/portfolio');
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white">
      <Navbar />

      <div className="pt-32 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-[#1a1a2e] to-[#0a0a0f]" />

        <div className="container mx-auto px-6 relative z-10">
          
          {/* ✅ FIXED BUTTON */}
          <button
            onClick={handleBack}
            className="flex items-center gap-2 text-gray-300 hover:text-cyan-400 mb-8 transition-colors group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="font-medium">Back to Portfolio</span>
          </button>

          <div className="max-w-7xl mx-auto">
            <div className="mb-12">
              <div className="flex items-center gap-4 mb-4">
                <span className="px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-purple-600/20 border border-cyan-500/50 rounded-full text-sm font-semibold text-cyan-400 uppercase tracking-wider">
                  {project.category}
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 glow-text-cyan">
                {project.title}
              </h1>

              <p className="text-xl text-gray-300 max-w-4xl">
                {project.fullDescription}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {project.media.map((item, index) => (
                <div
                  key={item.id}
                  onClick={() => openLightbox(index)}
                  className="group relative overflow-hidden rounded-2xl cursor-pointer"
                >
                  <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-600 opacity-0 group-hover:opacity-100 blur transition-all duration-500" />

                  <div className="relative bg-[#1a1a2e] rounded-2xl overflow-hidden">
                    <div className="aspect-video relative overflow-hidden">
                      {item.type === 'image' ? (
                        <img
                          src={item.url}
                          alt={item.title}
                          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                        />
                      ) : (
                        <>
                          <img
                            src={item.thumbnail}
                            alt={item.title}
                            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                            <div className="w-16 h-16 rounded-full bg-cyan-500/20 backdrop-blur-sm border-2 border-cyan-400 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                              <Play className="w-8 h-8 text-cyan-400 ml-1" />
                            </div>
                          </div>
                        </>
                      )}

                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>

                    <div className="p-4">
                      <h3 className="text-lg font-semibold group-hover:text-cyan-400 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-400 mt-1">
                        {item.type === 'image' ? 'Image' : 'Video'}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>

      {lightboxOpen && (
        <Lightbox
          media={project.media}
          currentIndex={currentMediaIndex}
          onClose={() => setLightboxOpen(false)}
          onNext={handleNext}
          onPrevious={handlePrevious}
        />
      )}
    </div>
  );
}