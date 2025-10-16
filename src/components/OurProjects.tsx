import { ArrowUpRight } from 'lucide-react';

interface OurProjectsProps {
  onNavigate: (page: string, projectId?: string) => void;
}

function OurProjects({ onNavigate }: OurProjectsProps) {
  const projects = [
    {
      id: 'living-room',
      title: 'Living Room Makeover',
      image: 'https://images.unsplash.com/photo-1616047006789-b7af5afb8c20?w=1200',
    },
    {
      id: 'kitchen',
      title: 'Minimal Modular Kitchen',
      image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1200',
    },
    {
      id: 'commercial',
      title: 'Boutique Store Interior',
      image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200',
    },
    {
      id: 'bedroom',
      title: 'Eco Bedroom Retreat',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200',
    },
    {
      id: 'dining',
      title: 'Warm Dining Nook',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200',
    },
  ];

  return (
    <div id="projects" className="py-16 px-4 md:py-24 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-6 mb-10 md:mb-16">
          <div className="space-y-4">
            <div className="font-inter-display text-lg font-normal leading-tight text-gray-600">
              Our Project
            </div>
            <h2 className="font-inter-display text-3xl md:text-4xl font-normal leading-tight text-black max-w-2xl">
              Explore Our Work: Sustainable Interiors by Green Decors
            </h2>
          </div>

          <p className="font-inter-display text-sm font-normal leading-tight text-gray-500 max-w-md">
            A curated selection of interiors—designed with natural materials, warm palettes, and thoughtful details.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" style={{ gridAutoRows: '250px' }}>
          <button
            onClick={() => onNavigate('project-details', projects[0].id)}
            className="relative overflow-hidden rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg transition-all group col-span-1 row-span-1"
          >
            <img
              src={projects[0].image}
              alt={projects[0].title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
              <span className="font-inter-display text-white font-medium bg-black/30 backdrop-blur-sm px-3 py-1 rounded-lg">
                {projects[0].title}
              </span>
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </div>
          </button>

          <button
            onClick={() => onNavigate('project-details', projects[1].id)}
            className="relative overflow-hidden rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg transition-all group col-span-1 row-span-1"
          >
            <img
              src={projects[1].image}
              alt={projects[1].title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
              <span className="font-inter-display text-white font-medium bg-black/30 backdrop-blur-sm px-3 py-1 rounded-lg">
                {projects[1].title}
              </span>
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </div>
          </button>

          <button
            onClick={() => onNavigate('project-details', projects[2].id)}
            className="relative overflow-hidden rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg transition-all group col-span-1 row-span-1 lg:row-span-2"
          >
            <img
              src={projects[2].image}
              alt={projects[2].title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
              <span className="font-inter-display text-white font-medium bg-black/30 backdrop-blur-sm px-3 py-1 rounded-lg">
                {projects[2].title}
              </span>
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </div>
          </button>

          <button
            onClick={() => onNavigate('project-details', projects[3].id)}
            className="relative overflow-hidden rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg transition-all group col-span-1 row-span-1 lg:row-span-2"
          >
            <img
              src={projects[3].image}
              alt={projects[3].title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
              <span className="font-inter-display text-white font-medium bg-black/30 backdrop-blur-sm px-3 py-1 rounded-lg">
                {projects[3].title}
              </span>
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </div>
          </button>

          <button
            onClick={() => onNavigate('project-details', projects[4].id)}
            className="relative overflow-hidden rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg transition-all group col-span-1 sm:col-span-2 lg:col-span-2 row-span-1"
          >
            <img
              src={projects[4].image}
              alt={projects[4].title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
              <span className="font-inter-display text-white font-medium bg-black/30 backdrop-blur-sm px-3 py-1 rounded-lg">
                {projects[4].title}
              </span>
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default OurProjects;
