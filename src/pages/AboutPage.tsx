import { ArrowLeft, Target, Lightbulb, Award, Users } from 'lucide-react';
import { motion } from 'framer-motion';

interface AboutPageProps {
  onNavigate: () => void;
}

function AboutPage({ onNavigate }: AboutPageProps) {
  const values = [
    { icon: <Target className="w-8 h-8" />, title: 'Transparency', description: 'Clear communication and honest dealings in every transaction.' },
    { icon: <Lightbulb className="w-8 h-8" />, title: 'Innovation', description: 'Pioneering design and smart technology in every project.' },
    { icon: <Award className="w-8 h-8" />, title: 'Excellence', description: 'Uncompromising quality standards across all developments.' },
    { icon: <Users className="w-8 h-8" />, title: 'Client-Centric', description: 'Your vision and satisfaction drive everything we create.' },
  ];

  const leaders = [
    { name: 'Ahmed Al Mansouri', title: 'CEO', quote: 'Building legacies, not just properties', image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop' },
    { name: 'Sarah Williams', title: 'Creative Director', quote: 'Where architecture meets art', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop' },
    { name: 'Mohammed Al Hashimi', title: 'Project Head', quote: 'Excellence in every detail', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop' },
    { name: 'Emma Chen', title: 'Marketing Lead', quote: 'Connecting dreams with reality', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&auto=format&fit=crop' },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Back Button */}
      <button
        onClick={onNavigate}
        className="fixed top-8 left-8 z-50 w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-gray-50 transition-all"
      >
        <ArrowLeft className="w-5 h-5" />
      </button>

      {/* Hero Section */}
      <div className="relative h-screen">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1200)' }} />
        <div className="absolute inset-0 bg-black opacity-30" />

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 md:px-12 max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
            <div className="font-inter-display text-sm font-normal leading-tight text-gray-300 uppercase mb-4">
              About Green Decors
            </div>
            <h1 className="text-white font-inter-display font-medium leading-tight text-3xl md:text-5xl lg:text-6xl mb-6">
              Eco‑Conscious Interior Design, Thoughtfully Crafted
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="text-gray-200 font-inter-display text-base md:text-lg font-normal leading-relaxed max-w-2xl mb-8"
          >
            We transform homes and commercial spaces with sustainable materials, timeless aesthetics, and detail‑driven craftsmanship—rooted in Nehrunagar, Puttur, Karnataka.
          </motion.p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            className="px-8 py-3 bg-white text-black rounded-lg font-inter-display font-medium leading-tight hover:bg-gray-100 transition-all"
          >
            Learn More
          </motion.button>
        </div>
      </div>

  {/* Story Section */}
<div className="py-12 md:py-24 px-4 md:px-12">
  <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
    
    {/* Text - First on mobile, Second on desktop */}
    <motion.div
      className="space-y-6 order-1 lg:order-2"
      // initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        visible: { transition: { staggerChildren: 0.15 } },
      }}
    >
      <motion.h2
        className="font-inter-display text-2xl md:text-3xl lg:text-4xl font-[500] leading-tight text-black"
        variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
      >
        Our Story
      </motion.h2>
      <motion.div className="h-px bg-gray-200 w-24" variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }} />
      <motion.p
        className="font-inter-display text-base md:text-lg font-normal leading-relaxed text-gray-600"
        variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
      >
        Founded in Puttur, Green Decors began with a simple mission: design beautiful, sustainable interiors that feel like home. From compact makeovers to full space transformations, we bring nature‑inspired design into everyday living.
      </motion.p>
      <motion.p
        className="font-inter-display text-base md:text-lg font-normal leading-relaxed text-gray-600"
        variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
      >
        We specialize in eco‑friendly materials, efficient layouts, natural lighting, and handcrafted finishes—balancing aesthetics, comfort, and sustainability in every project.
      </motion.p>
    </motion.div>

    {/* Images - Second on mobile, First on desktop */}
    <motion.div
      className="grid grid-cols-2 gap-4 h-auto lg:h-[600px] order-2 lg:order-1"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        visible: { transition: { staggerChildren: 0.2 } },
      }}
    >
      <div className="space-y-4">
        <motion.img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=600&auto=format&fit=crop"
          alt="Office"
          className="w-full h-48 md:h-72 object-cover rounded-2xl"
          variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.8 }}
        />
        <motion.img
          src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=600&auto=format&fit=crop"
          alt="Team"
          className="w-full h-48 md:h-64 object-cover rounded-2xl"
          variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.8 }}
        />
      </div>
      <div className="pt-0 lg:pt-12">
        <motion.img
          src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=600&auto=format&fit=crop"
          alt="Projects"
          className="w-full h-full lg:h-[520px] object-cover rounded-2xl"
          variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.8 }}
        />
      </div>
    </motion.div>
  </div>
</div>

      {/* Values Section */}
      <div className="py-12 md:py-24 px-4 md:px-12 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="font-inter-display text-2xl md:text-3xl lg:text-4xl font-[500] leading-tight text-black mb-4">
            Our Values
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.8 }} className="font-inter-display text-lg font-normal leading-tight text-gray-600">
            Principles that guide every space we create
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {values.map((value, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.15 }} className="bg-white p-8 rounded-2xl space-y-4 hover:shadow-lg transition-shadow">
              <div className="text-black">{value.icon}</div>
              <h3 className="font-inter-display text-xl font-[500] leading-tight text-black">{value.title}</h3>
              <p className="font-inter-display text-sm font-normal leading-relaxed text-gray-600">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Leadership Section */}
      <div className="py-12 md:py-24 px-4 md:px-12">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="font-inter-display text-2xl md:text-3xl lg:text-4xl font-[500] leading-tight text-black mb-4">
            Leadership Team
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.8 }} className="font-inter-display text-lg font-normal leading-tight text-gray-600">
            Visionaries shaping the future of luxury real estate
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {leaders.map((leader, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.2 }} className="space-y-4 group cursor-pointer">
              <div className="relative overflow-hidden rounded-2xl">
                <motion.img src={leader.image} alt={leader.name} className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300" whileHover={{ scale: 1.05 }} />
              </div>
              <div>
                <h3 className="font-inter-display text-2xl font-[500] leading-tight text-black">{leader.name}</h3>
                <p className="font-inter-display text-md font-normal leading-tight text-gray-600 mb-2">{leader.title}</p>
                <p className="font-inter-display text-sm font-normal leading-tight text-gray-500 italic">"{leader.quote}"</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-12 md:py-24 px-4 md:px-12 bg-black text-white">
        <motion.div className="max-w-4xl mx-auto text-center space-y-8" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h2 className="font-inter-display text-3xl md:text-4xl lg:text-5xl font-[500] leading-tight">
            Let's Build Your Dream Property Today
          </h2>
          <motion.button whileHover={{ scale: 1.05 }} onClick={onNavigate} className="px-8 py-3 bg-white text-black rounded-lg font-inter-display font-medium leading-tight hover:bg-gray-100 transition-all">
            Contact Us
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}

export default AboutPage;
