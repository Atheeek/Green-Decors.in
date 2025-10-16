import { useState } from "react";
import { Play, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import propertyVideo from "../assets/property-video1.mp4";

function WhoWeAre() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <div className="py-12 md:py-24 px-4 md:px-12 bg-white relative">
      <div className="max-w-7xl mx-auto">
        {/* Text + Image Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-8 md:mb-16">
          <div className="space-y-6 md:space-y-8">
            <div className="font-inter-display text-sm font-normal text-gray-500 uppercase">
              Who we are
            </div>

            <h2 className="font-inter-display text-3xl md:text-4xl lg:text-5xl font-[500] leading-tight text-black">
              Building the Future of Luxury Living.
            </h2>

            <button className="px-8 py-3 bg-black text-white rounded-lg font-inter-display font-medium leading-tight hover:bg-gray-900 transition-all">
              Get Started
            </button>
          </div>

          <div  className="space-y-6">
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop"
              alt="Luxury House"
              className="w-full h-48 object-cover rounded-2xl"
            />
            <p className="font-inter-display text-base md:text-lg font-normal leading-relaxed text-gray-600">
              Prime Properties is dedicated to creating sophisticated spaces that
              resonate with purpose and style.
            </p>
          </div>
        </div>

        {/* Video Section */}
        <div id="whoweare"
          onClick={() => setIsVideoOpen(true)}
          className="relative h-[300px] md:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden group cursor-pointer"
        >
          <img 
            src="https://images.unsplash.com/photo-1664711942326-2c3351e215e6?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1117"
            alt="Luxury Patio"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
              <Play className="w-8 h-8 text-black ml-1" fill="black" />
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {isVideoOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setIsVideoOpen(false)}
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative aspect-[9/16]  md:aspect-[9/16] max-w-sm md:max-w-md lg:max-w-lg bg-black rounded-2xl overflow-hidden flex items-center justify-center"
            >
              <video
                src={propertyVideo}
                controls
                autoPlay
                loop
                playsInline
                className="w-full md:h-screen aspect-[9/16] md:aspect-[9/16] object-contain rounded-4xl bg-black"
              />
              <button
                onClick={() => setIsVideoOpen(false)}
                className="absolute top-3 right-3 bg-white/80 hover:bg-white text-black rounded-full p-2 transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default WhoWeAre;
