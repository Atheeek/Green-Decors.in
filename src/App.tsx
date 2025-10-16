import { useState } from 'react';
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

  const navigateToPage = (page: Page, projectId?: string) => {
    setCurrentPage(page);
    if (projectId) {
      setSelectedProject(projectId);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
