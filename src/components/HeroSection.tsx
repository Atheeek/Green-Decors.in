import { useEffect, useState } from 'react';
import { Play, Menu, X } from 'lucide-react';
import logoimg from '../assets/logo.png'; // Uncomment this line and provide the correct path to your logo

interface HeroSectionProps {
  onNavigate: (page: string) => void;
}

function HeroSection({ onNavigate }: HeroSectionProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showLogoSplash, setShowLogoSplash] = useState(true);


  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  useEffect(() => {
    // Show logo splash for 1.5 seconds before showing hero section
    const timer = setTimeout(() => {
      setShowLogoSplash(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  // Helper to run navigation/scroll and then close the mobile menu
  const handleMobileLinkClick = (action: () => void) => {
    
    action();
    setIsMobileMenuOpen(false);
  };

  if (showLogoSplash) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
        <img
          src={logoimg}
          alt="Green Decors Logo"
          className="w-32 h-32 sm:w-40 sm:h-40 object-contain animate-pulse"
        />
      </div>
    );
  }


  return (
    <section className="relative min-h-screen bg-gray-0 p-2 sm:p-4">
      <div className="relative h-screen rounded-2xl sm:rounded-3xl overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop)',
          }}
        />
        <div className="absolute inset-0 bg-black opacity-20" />

        {/* Navigation Bar */}
        <nav className="relative z-20 flex items-center justify-between px-4 sm:px-8 lg:px-12 py-4 sm:py-6">
          <div className="flex items-center gap-2">
            {/* Using a placeholder div for the logo as in the original code. 
                Replace with the <img> tag below if you have a logo file. */}
           
            <img
              src={logoimg}
              alt="Green Decors Logo"
              className="w-12 h-12 sm:w-14 sm:h-14 object-contain"
            /> 
           
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            <button onClick={() => scrollToSection('home')} className="text-white font-inter-display hover:underline underline-offset-4">Home</button>
            <button onClick={() => onNavigate('about')} className="text-white font-inter-display hover:underline underline-offset-4">About Us</button>
            <button onClick={() => scrollToSection('projects')} className="text-white font-inter-display hover:underline underline-offset-4">Projects</button>
            <button onClick={() => onNavigate('services')} className="text-white font-inter-display hover:underline underline-offset-4">Services</button>
            <button onClick={() => scrollToSection('contact')} className="text-white font-inter-display hover:underline underline-offset-4">Contact</button>
            <button className="bg-white text-black px-4 xl:px-6 py-2.5 rounded-[15px] font-inter-display hover:bg-gray-100 transition">Get Started</button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-white p-2 z-30"
            aria-controls="mobile-menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {/* Mobile Menu Panel */}
        {isMobileMenuOpen && (
          <div
            id="mobile-menu"
            className="absolute top-20 left-4  right-4 z-20 bg-black/10 backdrop-blur-md rounded-2xl p-6 lg:hidden border border-white/20"
          >
           <div className="flex flex-col space-y-4">
              <button onClick={() => handleMobileLinkClick(() => scrollToSection('home'))} className="text-white text-left py-2 hover:text-gray-300">Home</button>
              <button onClick={() => handleMobileLinkClick(() => onNavigate('about'))} className="text-white text-left py-2 hover:text-gray-300">About Us</button>
              <button onClick={() => handleMobileLinkClick(() => scrollToSection('projects'))} className="text-white text-left py-2 hover:text-gray-300">Projects</button>
              <button onClick={() => handleMobileLinkClick(() => onNavigate('services'))} className="text-white text-left py-2 hover:text-gray-300">Services</button>
              <button onClick={() => handleMobileLinkClick(() => scrollToSection('contact'))} className="text-white text-left py-2 hover:text-gray-300">Contact</button>
              <button className="bg-white text-black px-6 py-2.5 rounded-[15px] hover:bg-gray-100 transition mt-2">Get Started</button>
            </div>
          </div>
        )}

        {/* Hero Content */}
        <div className="relative z-10 px-4 sm:px-8 lg:px-12 md:mt-10 mt-40 flex items-center h-[calc(100%-80px)] sm:h-[calc(100%-100px)]">
          <div className="max-w-4xl">
            <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-inter-display font-medium leading-tight mb-6 sm:mb-8">
              Discover the art of eco conscious interior design with Green Decors.
            </h1>
            <button className="flex items-center gap-2 sm:gap-3 bg-white/10 backdrop-blur-sm text-white px-4 sm:px-6  py-2.5 sm:py-3 rounded-[15px] font-inter-display hover:bg-white/20 transition border border-white/20 text-sm sm:text-base">
              <Play className="w-5 h-5" fill="white" />
              <span>Play Video</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;