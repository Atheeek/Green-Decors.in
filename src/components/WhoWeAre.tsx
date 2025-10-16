import { Play } from 'lucide-react';

function WhoWeAre() {
  return (
    <div className="py-12 md:py-24 px-4 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-8 md:mb-16">
          <div className="space-y-6 md:space-y-8">
            <div className="font-inter-display text-sm font-normal leading-tight text-gray-500 uppercase">
              Who we are
            </div>

            <h2 className="font-inter-display text-3xl md:text-4xl lg:text-5xl font-[500] leading-tight text-black">
              Building the Future of Luxury Living.
            </h2>

            <button className="px-8 py-3 bg-black text-white rounded-lg font-inter-display font-medium leading-tight hover:bg-gray-900 transition-all">
              Get Started
            </button>
          </div>

          <div className="space-y-6">
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop"
              alt="Luxury House"
              className="w-full h-48 object-cover rounded-2xl"
            />

            <p className="font-inter-display text-base md:text-lg font-normal leading-relaxed text-gray-600">
              Prime Properties is dedicated to creating sophisticated spaces that resonate with purpose and style.
            </p>
          </div>
        </div>

        <div className="relative h-[300px] md:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden group cursor-pointer">
          <img
            src="https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?q=80&w=2084&auto=format&fit=crop"
            alt="Luxury Patio"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
              <Play className="w-8 h-8 text-black ml-1" fill="black" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhoWeAre;
