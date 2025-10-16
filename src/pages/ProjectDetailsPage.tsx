import { ArrowLeft, MapPin, Calendar, User, Building, Maximize, Droplet, Home, Eye, Leaf } from 'lucide-react';
import { useState } from 'react';

interface ProjectDetailsPageProps {
  projectId: string;
  onNavigate: () => void;
}

function ProjectDetailsPage({ projectId, onNavigate }: ProjectDetailsPageProps) {
  const projects: Record<string, any> = {
    residential: {
      name: 'Marina Heights',
      tagline: 'Luxury Waterfront Residences, Dubai Marina',
      mainImage: 'https://images.unsplash.com/photo-1544092683-c0c9ebb368e5?w=900&auto=format&fit=crop&q=60',
      description: 'Marina Heights represents the pinnacle of waterfront living in Dubai. This 45-story residential tower features panoramic views of the Arabian Gulf, state-of-the-art amenities, and thoughtfully designed living spaces that embody modern luxury. Each residence is crafted with premium materials and finishes, offering residents an unparalleled lifestyle experience.',
      stats: {
        location: 'Dubai Marina, Dubai',
        area: '125,000 sq.ft',
        year: '2023',
        architect: 'Foster + Partners',
        client: 'Residential',
      },
      gallery: [
        'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=800&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=800&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?q=80&w=800&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop',
      ],
      features: [
        { icon: <Droplet className="w-6 h-6" />, title: 'Infinity Pool' },
        { icon: <Home className="w-6 h-6" />, title: 'Smart Home Integration' },
        { icon: <Eye className="w-6 h-6" />, title: 'Panoramic Views' },
        { icon: <Leaf className="w-6 h-6" />, title: 'Green Building Certified' },
      ],
    },
    villas: {
      name: 'Desert Oasis Villas',
      tagline: 'Exclusive Desert Living, Arabian Ranches',
      mainImage: 'https://images.unsplash.com/photo-1600450575743-43793ba079d3?q=80&w=2073&auto=format&fit=crop',
      description: 'Desert Oasis Villas brings together contemporary architecture and natural desert beauty. These exclusive villas feature expansive living spaces, private pools, and landscaped gardens that create a serene retreat from urban life while maintaining proximity to Dubai\'s key destinations.',
      stats: {
        location: 'Arabian Ranches, Dubai',
        area: '8,500 sq.ft per villa',
        year: '2024',
        architect: 'Zaha Hadid Architects',
        client: 'Private Villas',
      },
      gallery: [
        'https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=800&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=800&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?q=80&w=800&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1600573472592-401b489a3cdc?q=80&w=800&auto=format&fit=crop',
      ],
      features: [
        { icon: <Droplet className="w-6 h-6" />, title: 'Private Pools' },
        { icon: <Home className="w-6 h-6" />, title: 'Smart Technology' },
        { icon: <Maximize className="w-6 h-6" />, title: 'Spacious Layouts' },
        { icon: <Leaf className="w-6 h-6" />, title: 'Sustainable Design' },
      ],
    },
    condos: {
      name: 'Skyline Residences',
      tagline: 'High-End Urban Living, Downtown Dubai',
      mainImage: 'https://plus.unsplash.com/premium_photo-1661952507078-b620cba09fdb?q=80&w=2070&auto=format&fit=crop',
      description: 'Skyline Residences offers sophisticated urban living in the heart of Downtown Dubai. With stunning views of the Burj Khalifa and Dubai Fountain, these premium condominiums feature world-class amenities, elegant interiors, and unmatched connectivity to the city\'s finest attractions.',
      stats: {
        location: 'Downtown Dubai, Dubai',
        area: '95,000 sq.ft',
        year: '2023',
        architect: 'Gensler',
        client: 'Mixed-Use',
      },
      gallery: [
        'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=800&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?q=80&w=800&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=800&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800&auto=format&fit=crop',
      ],
      features: [
        { icon: <Building className="w-6 h-6" />, title: 'Sky Lounge' },
        { icon: <Home className="w-6 h-6" />, title: 'Concierge Service' },
        { icon: <Eye className="w-6 h-6" />, title: 'City Views' },
        { icon: <Droplet className="w-6 h-6" />, title: 'Rooftop Pool' },
      ],
    },
    mansions: {
      name: 'Emirates Estates',
      tagline: 'Contemporary Mansions, Emirates Hills',
      mainImage: 'https://images.unsplash.com/photo-1526495124232-a04e1849168c?q=80&w=987&auto=format&fit=crop',
      description: 'Emirates Estates represents the ultimate in luxury mansion living. Set within the prestigious Emirates Hills community, these architectural masterpieces feature cutting-edge design, expansive grounds, and bespoke finishes that cater to the most discerning clientele.',
      stats: {
        location: 'Emirates Hills, Dubai',
        area: '15,000 sq.ft per mansion',
        year: '2024',
        architect: 'Perkins and Will',
        client: 'Ultra-Luxury Residential',
      },
      gallery: [
        'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=800&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=800&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1600607687644-c7171b42498f?q=80&w=800&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=800&auto=format&fit=crop',
      ],
      features: [
        { icon: <Maximize className="w-6 h-6" />, title: 'Expansive Grounds' },
        { icon: <Home className="w-6 h-6" />, title: 'Home Cinema' },
        { icon: <Droplet className="w-6 h-6" />, title: 'Spa & Wellness' },
        { icon: <Leaf className="w-6 h-6" />, title: 'Golf Course Access' },
      ],
    },
    resort: {
      name: 'Palm Retreat',
      tagline: 'Resort-Style Living, Palm Jumeirah',
      mainImage: 'https://images.unsplash.com/photo-1565613469091-797f8c97e9dd?q=80&w=927&auto=format&fit=crop',
      description: 'Palm Retreat brings resort-style luxury to everyday living on the iconic Palm Jumeirah. With direct beach access, world-class amenities, and meticulously designed spaces, residents enjoy a permanent vacation lifestyle in one of the world\'s most exclusive locations.',
      stats: {
        location: 'Palm Jumeirah, Dubai',
        area: '180,000 sq.ft',
        year: '2023',
        architect: 'HOK',
        client: 'Resort Residential',
      },
      gallery: [
        'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?q=80&w=800&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?q=80&w=800&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=800&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?q=80&w=800&auto=format&fit=crop',
      ],
      features: [
        { icon: <Droplet className="w-6 h-6" />, title: 'Beach Access' },
        { icon: <Home className="w-6 h-6" />, title: 'Resort Amenities' },
        { icon: <Eye className="w-6 h-6" />, title: 'Sea Views' },
        { icon: <Building className="w-6 h-6" />, title: 'Marina Access' },
      ],
    },
  };

  const project = projects[projectId] || projects.residential;
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className="min-h-screen bg-white">
      <button
        onClick={onNavigate}
        className="fixed top-4 left-4 md:top-8 md:left-8 z-50 w-10 h-10 md:w-12 md:h-12 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-gray-50 transition-all"
      >
        <ArrowLeft className="w-5 h-5" />
      </button>

      <div className="relative h-[70vh]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${project.mainImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/20" />

        <div className="relative z-10 flex flex-col justify-end h-full px-4 md:px-12 pb-8 md:pb-16 max-w-7xl mx-auto">
          <h1 className="text-white font-inter-display font-semi-bold leading-tight text-3xl md:text-5xl lg:text-6xl mb-4">
            {project.name}
          </h1>
          <p className="text-gray-200 font-inter-display text-base md:text-lg lg:text-xl font-normal leading-tight">
            {project.tagline}
          </p>
        </div>
      </div>

      <div className="py-12 md:py-24 px-4 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 mb-12 md:mb-24">
            <div className="space-y-6">
              <h2 className="font-inter-display text-2xl md:text-3xl font-[500] leading-tight text-black">
                Project Overview
              </h2>
              <p className="font-inter-display text-base md:text-lg font-normal leading-relaxed text-gray-600">
                {project.description}
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl space-y-6">
              <div className="flex items-start space-x-4">
                <MapPin className="w-5 h-5 text-gray-400 mt-1" />
                <div>
                  <div className="font-inter-display text-sm font-normal text-gray-500">Location</div>
                  <div className="font-inter-display text-base font-[500] text-black">{project.stats.location}</div>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Maximize className="w-5 h-5 text-gray-400 mt-1" />
                <div>
                  <div className="font-inter-display text-sm font-normal text-gray-500">Area</div>
                  <div className="font-inter-display text-base font-[500] text-black">{project.stats.area}</div>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Calendar className="w-5 h-5 text-gray-400 mt-1" />
                <div>
                  <div className="font-inter-display text-sm font-normal text-gray-500">Completion Year</div>
                  <div className="font-inter-display text-base font-[500] text-black">{project.stats.year}</div>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <User className="w-5 h-5 text-gray-400 mt-1" />
                <div>
                  <div className="font-inter text-sm font-normal text-gray-500">Architect / Designer</div>
                  <div className="font-inter-display text-base font-[500] text-black">{project.stats.architect}</div>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Building className="w-5 h-5 text-gray-400 mt-1" />
                <div>
                  <div className="font-inter text-sm font-normal text-gray-500">Client Type</div>
                  <div className="font-inter-display text-base font-[500] text-black">{project.stats.client}</div>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-24">
            <h2 className="font-inter-display text-3xl font-[500] leading-tight text-black mb-8">
              Project Gallery
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
              {project.gallery.map((image: string, index: number) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className="relative aspect-square rounded-2xl overflow-hidden group cursor-pointer"
                >
                  <img
                    src={image}
                    alt={`Gallery ${index + 1}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </button>
              ))}
            </div>
          </div>

          <div>
            <h2 className="font-inter-display text-3xl font-[500] leading-tight text-black mb-8">
              Key Features
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {project.features.map((feature: any, index: number) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="text-black">{feature.icon}</div>
                  <span className="font-inter-display text-base font-medium leading-tight text-black">
                    {feature.title}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="py-12 md:py-24 px-4 md:px-12 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="font-inter-display text-3xl md:text-4xl lg:text-5xl font-[500] leading-tight">
            Interested in similar developments?
          </h2>
          <button
            onClick={onNavigate}
            className="px-8 py-3 bg-white text-black rounded-lg font-inter-display font-medium leading-tight hover:bg-gray-100 transition-all"
          >
            Explore More Projects
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetailsPage;
