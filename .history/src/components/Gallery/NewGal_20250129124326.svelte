import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, X, ExternalLink } from 'lucide-react';

const images = [
  {
    url: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=1200",
    caption: "Networking Event 2023",
  },
  {
    url: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=1200",
    caption: "Panel Discussion",
  },
  {
    url: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&q=80&w=1200",
    caption: "Keynote Speech",
  },
  {
    url: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=1200",
    caption: "Workshop Sessions",
  },
  {
    url: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&q=80&w=1200",
    caption: "Interactive Sessions",
  },
  {
    url: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80&w=1200",
    caption: "Tech Exhibition",
  },
  {
    url: "https://images.unsplash.com/photo-1528605105345-5344ea20e269?auto=format&fit=crop&q=80&w=1200",
    caption: "Networking Break",
  },
  {
    url: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80&w=1200",
    caption: "Closing Ceremony",
  },
];

export default function GallerySlider() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [isViewAll, setIsViewAll] = useState(false);

  const handlePrevious = () => {
    if (selectedImage === null) return;
    setSelectedImage(selectedImage === 0 ? images.length - 1 : selectedImage - 1);
  };

  const handleNext = () => {
    if (selectedImage === null) return;
    setSelectedImage(selectedImage === images.length - 1 ? 0 : selectedImage + 1);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (selectedImage === null) return;
    if (e.key === 'ArrowLeft') handlePrevious();
    if (e.key === 'ArrowRight') handleNext();
    if (e.key === 'Escape') setSelectedImage(null);
  };

  return (
    <section 
      className="py-16 px-4 md:px-8 bg-gray-50"
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-12">
        <p className="text-sm font-semibold text-orange-500 uppercase tracking-wider mb-2">
          // Previous Gallery
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
          Memories Shared
        </h2>
      </div>

      {/* Gallery Grid */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1">
          {images.slice(0, isViewAll ? images.length : 7).map((image, index) => (
            <div
              key={index}
              className={`relative aspect-square overflow-hidden group ${
                index === 6 && !isViewAll ? 'hidden lg:block' : ''
              }`}
            >
              {index === 6 && !isViewAll ? (
                <div 
                  className="absolute inset-0 bg-orange-500 text-white p-6 flex flex-col justify-center items-center cursor-pointer"
                  onClick={() => setIsViewAll(true)}
                >
                  <p className="text-sm uppercase tracking-wide mb-2">— Gallery</p>
                  <h3 className="text-3xl font-bold mb-2">2023</h3>
                  <p className="text-lg mb-4">Our Events Gallery</p>
                  <button 
                    className="px-6 py-2 bg-white text-black font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200"
                  >
                    View All Gallery
                  </button>
                </div>
              ) : (
                <>
                  <img
                    src={image.url}
                    alt={image.caption}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    onClick={() => setSelectedImage(index)}
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300 flex items-center justify-center">
                    <ExternalLink className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-8 h-8" />
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center">
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors duration-200"
            aria-label="Close lightbox"
          >
            <X className="w-8 h-8" />
          </button>
          
          <button
            onClick={handlePrevious}
            className="absolute left-4 text-white hover:text-gray-300 transition-colors duration-200"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>
          
          <button
            onClick={handleNext}
            className="absolute right-4 text-white hover:text-gray-300 transition-colors duration-200"
            aria-label="Next image"
          >
            <ChevronRight className="w-8 h-8" />
          </button>

          <div className="max-w-7xl mx-auto px-4 w-full">
            <div className="relative aspect-video">
              <img
                src={images[selectedImage].url}
                alt={images[selectedImage].caption}
                className="w-full h-full object-contain"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                <p className="text-white text-xl font-medium">
                  {images[selectedImage].caption}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}