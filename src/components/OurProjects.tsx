import { ArrowUpRight } from 'lucide-react';

interface OurProjectsProps {
  onNavigate: (page: string, projectId?: string) => void;
}

function OurProjects({ onNavigate }: OurProjectsProps) {
  const projects = [
    {
      id: 'residential',
      title: 'Residential',
      image: 'https://images.unsplash.com/photo-1544092683-c0c9ebb368e5?w=900&auto=format&fit=crop&q=60',
    },
    {
      id: 'villas',
      title: 'Exclusive Villas',
      image: 'https://images.unsplash.com/photo-1600450575743-43793ba079d3?q=80&w=2073&auto=format&fit=crop',
    },
    {
      id: 'condos',
      title: 'High-End Condos',
      image: 'https://plus.unsplash.com/premium_photo-1661952507078-b620cba09fdb?q=80&w=2070&auto=format&fit=crop',
    },
    {
      id: 'mansions',
      title: 'Modern Mansions',
      image: 'https://images.unsplash.com/photo-1526495124232-a04e1849168c?q=80&w=987&auto=format&fit=crop',
    },
    {
      id: 'resort',
      title: 'Resort Properties',
      image: 'https://images.unsplash.com/photo-1565613469091-797f8c97e9dd?q=80&w=927&auto=format&fit=crop',
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
              Explore Our Portfolio: The Best of UAE Real Estate.
            </h2>
          </div>

          <p className="font-inter-display text-sm font-normal leading-tight text-gray-500 max-w-md">
            Immerse yourself in Prime Properties' exclusive developments, each a symbol of excellence in real estate.
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
