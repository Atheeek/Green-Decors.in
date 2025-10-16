import { ArrowLeft, Target, Lightbulb, Award, Users } from 'lucide-react';

interface AboutPageProps {
  onNavigate: () => void;
}

function AboutPage({ onNavigate }: AboutPageProps) {
  const values = [
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Transparency',
      description: 'Clear communication and honest dealings in every transaction.',
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: 'Innovation',
      description: 'Pioneering design and smart technology in every project.',
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Excellence',
      description: 'Uncompromising quality standards across all developments.',
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Client-Centric',
      description: 'Your vision and satisfaction drive everything we create.',
    },
  ];

  const leaders = [
    {
      name: 'Ahmed Al Mansouri',
      title: 'Chief Executive Officer',
      quote: 'Building legacies, not just properties',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop',
    },
    {
      name: 'Sarah Williams',
      title: 'Creative Director',
      quote: 'Where architecture meets art',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop',
    },
    {
      name: 'Mohammed Al Hashimi',
      title: 'Project Head',
      quote: 'Excellence in every detail',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop',
    },
    {
      name: 'Emma Chen',
      title: 'Marketing Lead',
      quote: 'Connecting dreams with reality',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&auto=format&fit=crop',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <button
        onClick={onNavigate}
        className="fixed top-4 left-4 md:top-8 md:left-8 z-50 w-10 h-10 md:w-12 md:h-12 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-gray-50 transition-all"
      >
        <ArrowLeft className="w-5 h-5" />
      </button>

      <div className="relative h-screen">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1200)',
          }}
        />
        <div className="absolute inset-0 bg-black opacity-30" />

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 md:px-12 max-w-4xl mx-auto">
          <div className="font-inter-display text-sm font-normal leading-tight text-gray-300 uppercase mb-4">
            About Green Decors
          </div>

          <h1 className="text-white font-inter-display font-medium leading-tight text-3xl md:text-5xl lg:text-6xl mb-6">
            Eco‑Conscious Interior Design, Thoughtfully Crafted
          </h1>

          <p className="text-gray-200 font-inter-display text-base md:text-lg font-normal leading-relaxed max-w-2xl mb-8">
            We transform homes and commercial spaces with sustainable materials, timeless aesthetics, and detail‑driven craftsmanship—rooted in Nehrunagar, Puttur, Karnataka.
          </p>

          <button className="px-8 py-3 bg-white text-black rounded-lg font-inter-display font-medium leading-tight hover:bg-gray-100 transition-all">
            Learn More
          </button>
        </div>
      </div>

      <div className="py-12 md:py-24 px-4 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div className="hidden lg:grid grid-cols-2 gap-4 h-[600px]">
            <div className="space-y-4">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=600&auto=format&fit=crop"
                alt="Office"
                className="w-full h-72 object-cover rounded-2xl"
              />
              <img
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=600&auto=format&fit=crop"
                alt="Team"
                className="w-full h-64 object-cover rounded-2xl"
              />
            </div>
            <div className="pt-12">
              <img
                src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=600&auto=format&fit=crop"
                alt="Projects"
                className="w-full h-[520px] object-cover rounded-2xl"
              />
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="font-inter-display text-2xl md:text-3xl lg:text-4xl font-[500] leading-tight text-black">
              Our Story
            </h2>

            <div className="h-px bg-gray-200 w-24" />

            <p className="font-inter-display text-base md:text-lg font-normal leading-relaxed text-gray-600">
              Founded in Puttur, Green Decors began with a simple mission: design beautiful, sustainable interiors that feel like home. From compact makeovers to full space transformations, we bring nature‑inspired design into everyday living.
            </p>

            <p className="font-inter-display text-base md:text-lg font-normal leading-relaxed text-gray-600">
              We specialize in eco‑friendly materials, efficient layouts, natural lighting, and handcrafted finishes—balancing aesthetics, comfort, and sustainability in every project.
            </p>
          </div>
        </div>
      </div>

      <div className="py-12 md:py-24 px-4 md:px-12 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-inter-display text-2xl md:text-3xl lg:text-4xl font-[500] leading-tight text-black mb-4">
              Our Values
            </h2>
            <p className="font-inter-display text-lg font-normal leading-tight text-gray-600">
              Principles that guide every space we create
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl space-y-4 hover:shadow-lg transition-shadow"
              >
                <div className="text-black">{value.icon}</div>
                <h3 className="font-inter-display text-xl font-[500] leading-tight text-black">
                  {value.title}
                </h3>
                <p className="font-inter-display text-sm font-normal leading-relaxed text-gray-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="py-12 md:py-24 px-4 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-inter-display text-2xl md:text-3xl lg:text-4xl font-[500] leading-tight text-black mb-4">
              Leadership Team
            </h2>
            <p className="font-inter-display text-lg font-normal leading-tight text-gray-600">
              Visionaries shaping the future of luxury real estate
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {leaders.map((leader, index) => (
              <div
                key={index}
                className="space-y-4 group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-2xl">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div>
                  <h3 className="font-inter-display text-lg font-semibold leading-tight text-black">
                    {leader.name}
                  </h3>
                  <p className="font-inter-display text-sm font-normal leading-tight text-gray-600 mb-2">
                    {leader.title}
                  </p>
                  <p className="font-inter-display text-xs font-normal leading-tight text-gray-500 italic">
                    "{leader.quote}"
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="py-12 md:py-24 px-4 md:px-12 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="font-inter-display text-3xl md:text-4xl lg:text-5xl font-[500] leading-tight">
            Let's Build Your Dream Property Today
          </h2>
          <button
            onClick={onNavigate}
            className="px-8 py-3 bg-white text-black rounded-lg font-inter-display font-medium leading-tight hover:bg-gray-100 transition-all"
          >
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
