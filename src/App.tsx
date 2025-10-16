import { useRef, useState } from 'react';
import HeroSection from './components/HeroSection';
import LogoCloud from './components/LogoCloud';
import PropertyCarousel from './components/PropertyCarousel';
import PropertyGateway from './components/PropertyGateway';
import OurProjects from './components/OurProjects';
import WhoWeAre from './components/WhoWeAre';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import Instagram from './components/Instagram';
import Footer from './components/Footer';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ProjectDetailsPage from './pages/ProjectDetailsPage';

type Page = 'home' | 'about' | 'services' | 'project-details';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [selectedProject, setSelectedProject] = useState<string>('');
  const homeScrollYRef = useRef<number>(0);

  const navigateToPage = (page: string, projectId?: string) => {
    const allowedPages = ['home', 'about', 'services', 'project-details'] as const;
    const targetPage: Page = (allowedPages as readonly string[]).includes(page) ? (page as Page) : 'home';
    if (targetPage !== 'home') {
      homeScrollYRef.current = window.scrollY;
    }
    setCurrentPage(targetPage);
    if (projectId) {
      setSelectedProject(projectId);
    }
    if (targetPage === 'home') {
      window.scrollTo({ top: homeScrollYRef.current, behavior: 'auto' });
    } else {
      window.scrollTo({ top: 0, behavior: 'auto' });
    }
  };

  if (currentPage === 'about') {
    return <AboutPage onNavigate={() => navigateToPage('home')} />;
  }

  if (currentPage === 'services') {
    return <ServicesPage onNavigate={() => navigateToPage('home')} />;
  }

  if (currentPage === 'project-details') {
    return <ProjectDetailsPage projectId={selectedProject} onNavigate={() => navigateToPage('home')} />;
  }

  return (
    <div className="min-h-screen bg-white">
      <HeroSection onNavigate={navigateToPage} />
      <PropertyCarousel />
      <PropertyGateway />
      <LogoCloud />
      <OurProjects onNavigate={navigateToPage} />
      <WhoWeAre />
      <Testimonials />
      <ContactForm />
      <Instagram />
      <Footer onNavigate={navigateToPage} />
    </div>
  );
}

export default App;
