import { Play } from 'lucide-react';
import { useState } from 'react';

interface HeroSectionProps {
  onNavigate: (page: string) => void;
}

function HeroSection({ onNavigate }: HeroSectionProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNavigate = (action: () => void) => {
    action();
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="relative min-h-screen bg-gray-50 p-2 md:p-4">
      <div className="relative h-screen rounded-2xl md:rounded-3xl  overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop)',
          }}
        />
        <div className="absolute inset-0 bg-black opacity-30" />

        <nav className="relative z-10 flex  items-center justify-between px-4 md:px-12 py-4 md:py-8">
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 md:w-8 md:h-8 border-2 border-white rounded-lg" />
            <span className="text-white font-['Inter_Display'] font-normal leading-tight text-sm md:text-lg">
              Prime Properties
            </span>
          </div>

          <div className="hidden lg:flex items-center space-x-12">
            <button
              onClick={() => scrollToSection('home')}
              className="text-white font-['Inter_Display'] font-normal leading-tight hover:underline transition-all"
            >
              Home
            </button>
            <button
              onClick={() => onNavigate('about')}
              className="text-white font-['Inter_Display'] font-normal leading-tight hover:underline transition-all"
            >
              About Us
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="text-white font-['Inter_Display'] font-normal leading-tight hover:underline transition-all"
            >
              Product
            </button>
            <button
              onClick={() => onNavigate('services')}
              className="text-white font-['Inter_Display'] font-normal leading-tight hover:underline transition-all"
            >
              Store
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-white font-['Inter_Display'] font-normal leading-tight hover:underline transition-all"
            >
              Contact
            </button>
            <button className="bg-white text-black px-6 py-3 rounded-[15px] font-['Inter_Display'] font-normal leading-tight hover:bg-gray-100 transition-all">
              Get Started
            </button>
          </div>

          <button
            className="lg:hidden bg-white text-black px-4 py-2 text-sm rounded-[15px] font-['Inter_Display'] font-normal leading-tight hover:bg-gray-100 transition-all"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
          >
            Menu
          </button>
        </nav>

        {isMobileMenuOpen && (
          <div
            id="mobile-menu"
            className="relative z-10 lg:hidden px-4 md:px-12 pb-4"
          >
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-4 space-y-2 border border-white/30">
              <button
                onClick={() => handleNavigate(() => scrollToSection('home'))}
                className="w-full text-left px-3 py-2 rounded-lg hover:bg-white text-black"
              >
                Home
              </button>
              <button
                onClick={() => handleNavigate(() => onNavigate('about'))}
                className="w-full text-left px-3 py-2 rounded-lg hover:bg-white text-black"
              >
                About Us
              </button>
              <button
                onClick={() => handleNavigate(() => scrollToSection('projects'))}
                className="w-full text-left px-3 py-2 rounded-lg hover:bg-white text-black"
              >
                Product
              </button>
              <button
                onClick={() => handleNavigate(() => onNavigate('services'))}
                className="w-full text-left px-3 py-2 rounded-lg hover:bg-white text:black"
              >
                Store
              </button>
              <button
                onClick={() => handleNavigate(() => scrollToSection('contact'))}
                className="w-full text-left px-3 py-2 rounded-lg hover:bg-white text-black"
              >
                Contact
              </button>
              <button className="w-full bg-black text-white px-4 py-2 rounded-[15px] font-['Inter_Display'] font-normal leading-tight hover:bg-black/90 transition-all">
                Get Started
              </button>
            </div>
          </div>
        )}

        <div className="relative z-10 flex flex-col md:pt-20 pt-[315px] justify-center h-[calc(100%-120px)] px-4 md:px-12 max-w-4xl">
          <h1 className="text-white font-['Inter_Display'] font-medium leading-tight text-4xl md:text-6xl lg:text-6xl mb-6 md:mb-8">
          Discover the art of eco conscious interior design with Green Decors.
          </h1>

          <button className="flex items-center space-x-2 md:space-x-3 bg-white/10 backdrop-blur-sm text-white px-4 md:px-6 py-2 md:py-3 text-sm md:text-base rounded-[15px] font-['Inter_Display'] font-normal leading-tight hover:bg-white/20 transition-all w-fit border border-white/20">
            <Play className="w-5 h-5" fill="white" />
            <span>Play Video</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
