import { ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';

interface ServicesPageProps {
  onNavigate: () => void;
}

function ServicesPage({ onNavigate }: ServicesPageProps) {
  const services = [
    {
      image: 'https://images.unsplash.com/photo-1760072513367-55182245e76c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1168',
      title: 'Residential Interiors',
      description:
        'Full-home makeovers with sustainable materials, cozy palettes, and timeless elegance.',
    },
    {
      image: 'https://images.unsplash.com/photo-1755771984341-546c2a04f236?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2069',
      title: 'Modular Kitchens',
      description:
        'Tailored modular designs that combine functionality with aesthetic precision.',
    },
    {
      image: 'https://plus.unsplash.com/premium_photo-1664304066233-80febd2729b2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170',
      title: 'Commercial Spaces',
      description:
        'Office, studio, and boutique interiors built for comfort and brand identity.',
    },
    {
      image: 'https://plus.unsplash.com/premium_photo-1683121179538-35f7fe9a1f16?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2132',
      title: 'Eco Styling & Decor',
      description:
        'Sustainable styling, natural textures, and handcrafted elements for balance.',
    },
    {
      image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80&auto=format&fit=crop',
      title: 'Smart Lighting Plans',
      description:
        'Ambient and task lighting designs with intelligent, energy-efficient systems.',
    },
    {
      image: 'https://images.unsplash.com/photo-1759239572496-4ec13e7643d6?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170',
      title: 'Renovations & Makeovers',
      description:
        'End-to-end remodels with a focus on sustainability, space, and design impact.',
    },
  ];

  const process = [
    { number: '01', title: 'Consultation', description: 'Understanding your vision, needs, and aspirations.' },
    { number: '02', title: 'Concept & Design', description: 'Creating mood boards, 3D renders, and plans.' },
    { number: '03', title: 'Development', description: 'Execution with attention to detail and craftsmanship.' },
    { number: '04', title: 'Delivery & Aftercare', description: 'Seamless handover and ongoing client support.' },
  ];

  return (
    <div className="min-h-screen bg-white text-black font-inter-display">
      {/* Back Button */}
      <button
        onClick={onNavigate}
        className="fixed top-8 left-8 z-50 w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-gray-50 transition-all"
      >
        <ArrowLeft className="w-5 h-5" />
      </button>

      {/* Hero Section */}
      <div className="relative h-[90vh] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center transform scale-105"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1615873968403-89e068629265?w=1600')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6 md:px-12">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-white font-medium leading-tight text-5xl md:text-6xl mb-6"
          >
            Our Expertise. <br /> Your Vision.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-gray-200 text-lg md:text-xl max-w-2xl"
          >
            Merging timeless design with innovation to redefine your living experience.
          </motion.p>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-20 px-4 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-[500] mb-4">What We Offer</h2>
          <p className="text-gray-600 text-lg">
            Tailored interior solutions blending aesthetics, sustainability, and comfort.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-white border border-gray-100 rounded-2xl shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden group"
            >
              <div className="h-56 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="p-8 text-left">
                <h3 className="text-2xl font-[500] mb-3">{service.title}</h3>
                <p className="text-gray-600 text-base leading-relaxed">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Process Section */}
      <div className="py-20 px-4 md:px-12 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-[500] mb-4">Our Process</h2>
          <p className="text-gray-600 text-lg">
            A collaborative, transparent, and efficient design journey.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-10 md:gap-16 max-w-6xl mx-auto">
          {process.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              className="flex flex-col items-center text-center max-w-[220px]"
            >
              <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center text-xl font-[500] mb-4 shadow-lg">
                {step.number}
              </div>
              <h3 className="text-xl font-[500] mb-2">{step.title}</h3>
              <p className="text-gray-600 text-sm">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 px-4 md:px-12 bg-gray-50">
  <div className="max-w-4xl mx-auto rounded-3xl bg-white shadow-xl p-12 text-center space-y-6">
    <motion.h2
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-3xl md:text-4xl font-[500] font-inter-display leading-tight text-gray-900"
    >
      Let’s Build Your Dream Space
    </motion.h2>

    <motion.p
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto"
    >
      Together, we create interiors that reflect your lifestyle, sustainability, and modern elegance.
    </motion.p>

    <motion.button
      whileHover={{ scale: 1.05 }}
      onClick={onNavigate}
      className="px-10 py-4 bg-turquoise hover:bg-turquoise/90 text-white rounded-full font-medium shadow-lg transition-all"
    >
      Contact Us
    </motion.button>
  </div>
</div>

    </div>
  );
}

export default ServicesPage;
