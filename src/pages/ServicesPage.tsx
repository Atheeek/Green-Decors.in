import { ArrowLeft, Building2, Ruler, Palette, MessageSquare, Cpu, Leaf } from 'lucide-react';

interface ServicesPageProps {
  onNavigate: () => void;
}

function ServicesPage({ onNavigate }: ServicesPageProps) {
  const services = [
    {
      icon: <Building2 className="w-12 h-12" />,
      title: 'Property Development',
      description: 'End-to-end development of luxury residential and commercial properties tailored to modern living.',
    },
    {
      icon: <Ruler className="w-12 h-12" />,
      title: 'Architectural Design',
      description: 'Award-winning architectural concepts that blend aesthetics with functionality and cultural context.',
    },
    {
      icon: <Palette className="w-12 h-12" />,
      title: 'Interior Curation',
      description: 'Bespoke interior design services creating sophisticated spaces that reflect your unique style.',
    },
    {
      icon: <MessageSquare className="w-12 h-12" />,
      title: 'Property Consultation',
      description: 'Expert guidance on investment opportunities, market trends, and portfolio optimization.',
    },
    {
      icon: <Cpu className="w-12 h-12" />,
      title: 'Smart Living Integration',
      description: 'Cutting-edge home automation and IoT solutions for seamless, intelligent living experiences.',
    },
    {
      icon: <Leaf className="w-12 h-12" />,
      title: 'Sustainable Projects',
      description: 'Eco-conscious developments incorporating green building practices and renewable energy solutions.',
    },
  ];

  const process = [
    {
      number: '01',
      title: 'Consultation',
      description: 'Understanding your vision, needs, and aspirations',
    },
    {
      number: '02',
      title: 'Concept & Design',
      description: 'Creating architectural concepts and detailed plans',
    },
    {
      number: '03',
      title: 'Development',
      description: 'Bringing designs to life with precision execution',
    },
    {
      number: '04',
      title: 'Delivery & Aftercare',
      description: 'Seamless handover and ongoing support services',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <button
        onClick={onNavigate}
        className="fixed top-8 left-8 z-50 w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-gray-50 transition-all"
      >
        <ArrowLeft className="w-5 h-5" />
      </button>

      <div className="relative h-screen">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1600607687644-c7171b42498f?q=80&w=2070&auto=format&fit=crop)',
          }}
        />
        <div className="absolute inset-0 bg-black opacity-40" />

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-12 max-w-4xl mx-auto">
          <h1 className="text-white font-['Inter_Display'] font-medium leading-tight text-6xl mb-6">
            Our Expertise. Your Vision.
          </h1>

          <p className="text-gray-200 font-['Inter_Display'] text-xl font-normal leading-relaxed max-w-3xl">
            Delivering architectural brilliance and unmatched value through innovation and design.
          </p>
        </div>
      </div>

      <div className="py-12 md:py-24 px-4 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-['Inter_Display'] text-2xl md:text-3xl lg:text-4xl font-bold leading-tight text-black mb-4">
              What We Offer
            </h2>
            <p className="font-['Inter_Display'] text-lg font-normal leading-tight text-gray-600">
              Comprehensive solutions for luxury real estate development
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="p-8 bg-white border border-gray-200 rounded-2xl space-y-4 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="text-black">{service.icon}</div>
                <h3 className="font-['Inter_Display'] text-2xl font-semibold leading-tight text-black">
                  {service.title}
                </h3>
                <p className="font-['Inter_Display'] text-base font-normal leading-relaxed text-gray-600">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="py-12 md:py-24 px-4 md:px-12 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-['Inter_Display'] text-2xl md:text-3xl lg:text-4xl font-bold leading-tight text-black mb-4">
              Our Process
            </h2>
            <p className="font-['Inter_Display'] text-lg font-normal leading-tight text-gray-600">
              A proven approach to delivering excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {process.map((step, index) => (
              <div key={index} className="relative">
                <div className="space-y-4">
                  <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center font-['Inter_Display'] text-2xl font-bold">
                    {step.number}
                  </div>
                  <h3 className="font-['Inter_Display'] text-xl font-semibold leading-tight text-black">
                    {step.title}
                  </h3>
                  <p className="font-['Inter_Display'] text-sm font-normal leading-relaxed text-gray-600">
                    {step.description}
                  </p>
                </div>

                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-px bg-gray-300 -translate-x-1/2" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="py-12 md:py-24 px-4 md:px-12 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="font-['Inter_Display'] text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            Let's Build Your Dream Property Today
          </h2>
          <button
            onClick={onNavigate}
            className="px-8 py-3 bg-white text-black rounded-lg font-['Inter_Display'] font-medium leading-tight hover:bg-gray-100 transition-all"
          >
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
}

export default ServicesPage;
