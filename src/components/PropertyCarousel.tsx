import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

function PropertyCarousel() {
  const properties = [
    'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=1974&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1745761320791-5ae142edee8c?q=80&w=2070&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1707189856923-46dd41ea2bdc?q=80&w=2070&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1685648628650-63740d39bffc?q=80&w=1974&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1616012760010-8da02da071fd?q=80&w=2070&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1623298317883-6b70254edf31?q=80&w=2070&auto=format&fit=crop',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? properties.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === properties.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="py-12 md:py-24 px-4 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
        <div className="space-y-8">
          <div className="relative h-24 md:h-32 overflow-hidden">
            <div className="flex space-x-4 animate-carousel">
              {[...properties, ...properties].map((image, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-48 md:w-64 h-24 md:h-32 rounded-2xl overflow-hidden"
                >
                  <img
                    src={image}
                    alt={`Property ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <span className="font-['Inter_Display'] text-lg md:text-2xl font-normal leading-tight">
                {String(currentIndex + 1).padStart(2, '0')}/
                {String(properties.length).padStart(2, '0')}
              </span>
              <div className="h-px bg-gray-300 w-16 md:w-32" />
            </div>

            <div className="flex space-x-2">
              <button
                onClick={handlePrev}
                className="w-12 h-12 border border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-50 transition-all"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                className="w-12 h-12 border border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-50 transition-all"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          <h2 className="font-['Inter_Display'] text-2xl md:text-3xl font-medium leading-tight text-black">
            Desert Serenity: Elevating Natural Beauty in Urban Spaces
          </h2>

          <p className="font-['Inter_Display'] text-base md:text-lg font-normal leading-tight text-gray-600">
            In the heart of the UAE, we craft living spaces that reflect the beauty of nature, using wood, stone, and light to create calm, elegant homes.
          </p>
        </div>

        <div className="space-y-8">
          <div className="rounded-2xl overflow-hidden h-64 md:h-80">
            <img
              src={properties[currentIndex]}
              alt="Featured Property"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div className="text-center">
              <div className="font-['Inter_Display'] text-2xl md:text-3xl font-bold text-black">150+</div>
              <div className="font-['Inter_Display'] text-sm font-normal text-gray-500">Iconic Designs</div>
            </div>
            <div className="text-center">
              <div className="font-['Inter_Display'] text-2xl md:text-3xl font-bold text-black">700+</div>
              <div className="font-['Inter_Display'] text-sm font-normal text-gray-500">Satisfied Clients</div>
            </div>
            <div className="text-center">
              <div className="font-['Inter_Display'] text-2xl md:text-3xl font-bold text-black">500+</div>
              <div className="font-['Inter_Display'] text-sm font-normal text-gray-500">Project Delivered</div>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 md:space-x-4">
            <button className="flex items-center space-x-2 px-4 py-2 bg-white border border-black rounded-lg font-['Inter_Display'] font-medium leading-tight hover:bg-gray-50 transition-all">
              <Star className="w-4 h-4" fill="black" />
              <span>4.9</span>
            </button>
            <button className="px-4 py-2 bg-white border border-black rounded-lg font-['Inter_Display'] font-medium leading-tight hover:bg-gray-50 transition-all">
              See Reviews
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes carousel {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-carousel {
          animation: carousel 20s linear infinite;
        }
      `}</style>
    </div>
  );
}

export default PropertyCarousel;
