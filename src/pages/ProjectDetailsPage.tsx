import { ArrowLeft, MapPin, Calendar, User, Building, Maximize, Droplet, Home, Eye, Leaf } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'framer-motion'; // Import motion

interface ProjectDetailsPageProps {
  projectId: string;
  onNavigate: () => void;
}

function ProjectDetailsPage({ projectId, onNavigate }: ProjectDetailsPageProps) {
  const projects: Record<string, any> = {
    'living-room': {
      name: 'Living Room Makeover',
      tagline: 'Warm, Natural Textures • Nehrunagar, Puttur',
      mainImage: 'https://images.unsplash.com/photo-1544092683-c0c9ebb368e5?w=900&auto=format&fit=crop&q=60',
      description: 'A calm living space designed around natural light, sustainable materials and comfortable seating—merging function with a timeless look.',
      stats: {
        location: 'Nehrunagar, Puttur, Karnataka',
        area: '420 sq.ft',
        year: '2025',
        architect: 'Green Decors',
        client: 'Residential Interior',
      },
      gallery: [
        'https://images.unsplash.com/photo-1615873968403-89e068629265?w=1200',
        'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1200',
        'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1200',
        'https://images.unsplash.com/photo-1567016432779-094069958ea5?w=1200',
      ],
      features: [
        { icon: <Leaf className="w-6 h-6" />, title: 'Sustainable Materials' },
        { icon: <Home className="w-6 h-6" />, title: 'Optimized Layout' },
        { icon: <Eye className="w-6 h-6" />, title: 'Natural Light' },
        { icon: <Droplet className="w-6 h-6" />, title: 'Low‑VOC Finishes' },
      ],
    },
     kitchen: {
      name: 'Minimal Modular Kitchen',
      tagline: 'Efficient Storage • Easy Maintenance',
      mainImage: 'https://images.unsplash.com/photo-1600450575743-43793ba079d3?q=80&w=2073&auto=format&fit=crop',
      description: 'A modular kitchen planned for workflow: efficient storage, durable surfaces and warm tones for everyday cooking and gathering.',
      stats: {
        location: 'Puttur, Karnataka',
        area: '160 sq.ft',
        year: '2025',
        architect: 'Green Decors',
        client: 'Kitchen Renovation',
      },
      gallery: [
        'https://images.unsplash.com/photo-1556912167-f556f1f39faa?w=1200',
        'https://images.unsplash.com/photo-1615529182904-14819c35db37?w=1200',
        'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=1200',
        'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=1200',
      ],
      features: [
        { icon: <Maximize className="w-6 h-6" />, title: 'Space‑Smart Storage' },
        { icon: <Droplet className="w-6 h-6" />, title: 'Easy‑Clean Surfaces' },
        { icon: <Leaf className="w-6 h-6" />, title: 'Energy‑Efficient Lighting' },
        { icon: <Home className="w-6 h-6" />, title: 'Ergonomic Workflow' },
      ],
    },
    commercial: {
      name: 'Boutique Store Interior',
      tagline: 'Brand‑led Layout • Natural Palette',
      mainImage: 'https://plus.unsplash.com/premium_photo-1661952507078-b620cba09fdb?q=80&w=2070&auto=format&fit=crop',
      description: 'A compact retail interior with flexible display, visual hierarchy and a warm palette that puts the products first.',
      stats: {
        location: 'Puttur, Karnataka',
        area: '650 sq.ft',
        year: '2024',
        architect: 'Green Decors',
        client: 'Retail Interior',
      },
      gallery: [
        'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200',
        'https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=1200',
        'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1200',
        'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1200',
      ],
      features: [
        { icon: <Building className="w-6 h-6" />, title: 'Flexible Displays' },
        { icon: <Eye className="w-6 h-6" />, title: 'Clear Sightlines' },
        { icon: <Leaf className="w-6 h-6" />, title: 'Warm, Natural Finishes' },
        { icon: <Droplet className="w-6 h-6" />, title: 'Low Maintenance' },
      ],
    },
    bedroom: {
      name: 'Eco Bedroom Retreat',
      tagline: 'Soft Lighting • Cozy Textures',
      mainImage: 'https://images.unsplash.com/photo-1526495124232-a04e1849168c?q=80&w=987&auto=format&fit=crop',
      description: 'A restful bedroom with natural fabrics, muted tones and layered lighting for a serene, rejuvenating atmosphere.',
      stats: {
        location: 'Nehrunagar, Puttur',
        area: '220 sq.ft',
        year: '2024',
        architect: 'Green Decors',
        client: 'Residential Interior',
      },
      gallery: [
        'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200',
        'https://images.unsplash.com/photo-1615873968403-89e068629265?w=1200',
        'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1200',
        'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1200',
      ],
      features: [
        { icon: <Leaf className="w-6 h-6" />, title: 'Natural Fabrics' },
        { icon: <Droplet className="w-6 h-6" />, title: 'Low‑VOC Paints' },
        { icon: <Home className="w-6 h-6" />, title: 'Smart Storage' },
        { icon: <Eye className="w-6 h-6" />, title: 'Soft Ambience' },
      ],
    },
    dining: {
      name: 'Warm Dining Nook',
      tagline: 'Compact • Comfortable • Inviting',
      mainImage: 'https://images.unsplash.com/photo-1565613469091-797f8c97e9dd?q=80&w=927&auto=format&fit=crop',
      description: 'A cozy dining corner with space‑saving seating, warm wood tones and simple lighting for everyday meals.',
      stats: {
        location: 'Puttur, Karnataka',
        area: '140 sq.ft',
        year: '2023',
        architect: 'Green Decors',
        client: 'Residential Interior',
      },
      gallery: [
        'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200',
        'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=1200',
        'https://images.unsplash.com/photo-1615875474908-9c6f0c8ff99f?w=1200',
      ],
      features: [
        { icon: <Home className="w-6 h-6" />, title: 'Built‑in Seating' },
        { icon: <Leaf className="w-6 h-6" />, title: 'Warm Wood Tones' },
        { icon: <Eye className="w-6 h-6" />, title: 'Cozy Ambience' },
        { icon: <Droplet className="w-6 h-6" />, title: 'Easy Maintenance' },
      ],
    },
  };

  const project = projects[projectId] || projects['living-room'];
  const [selectedImage, setSelectedImage] = useState(0);

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const staggerContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  return (
    <div className="min-h-screen bg-white">
      <button
        onClick={onNavigate}
        className="fixed top-8 left-8 z-50 w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-gray-50 transition-all"
      >
        <ArrowLeft className="w-5 h-5" />
      </button>

      {/* Hero Section */}
      <div className="relative h-[70vh]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${project.mainImage})` }}
        />
        <div className="absolute inset-0 bg-black opacity-30" />

        <div className="relative z-10 flex flex-col justify-end h-full px-4 md:px-12 pb-8 md:pb-16 max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
            <motion.h1 className="text-white font-inter-display font-medium leading-tight text-3xl md:text-5xl lg:text-6xl mb-4">
              {project.name}
            </motion.h1>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="text-gray-200 font-inter-display text-base md:text-lg lg:text-xl font-normal leading-tight"
          >
            {project.tagline}
          </motion.p>
        </div>
      </div>

      <div className="py-12 md:py-24 px-4 md:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Overview Section */}
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 mb-12 md:mb-24"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div className="space-y-6" variants={fadeIn}>
              <h2 className="font-inter-display text-2xl md:text-3xl font-[500] leading-tight text-black">
                Project Overview
              </h2>
              <p className="font-inter-display text-base md:text-lg font-normal leading-relaxed text-gray-600">
                {project.description}
              </p>
            </motion.div>

            <motion.div className="bg-gray-50 p-8 rounded-2xl space-y-6" variants={fadeIn}>
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
            </motion.div>
          </motion.div>

          {/* Gallery Section */}
          <div className="mb-24">
            <motion.h2
              className="font-inter-display text-3xl font-[500] leading-tight text-black mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              // viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              Project Gallery
            </motion.h2>

            <motion.div
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4"
              initial="hidden"
              whileInView="visible"
              // viewport={{ once: true }}
              variants={staggerContainer}
            >
              {project.gallery.map((image: string, index: number) => (
                <motion.div
                  key={index}
                  className="relative aspect-square rounded-2xl overflow-hidden cursor-pointer"
                  variants={fadeIn}
                  onClick={() => setSelectedImage(index)}
                >
                  <motion.img
                    src={image}
                    alt={`Gallery ${index + 1}`}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Features Section */}
          <div>
            <motion.h2
              className="font-inter-display text-3xl font-[500] leading-tight text-black mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              // viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              Key Features
            </motion.h2>

            <motion.div
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6"
              initial="hidden"
              whileInView="visible"
              // viewport={{ once: true }}
              variants={staggerContainer}
            >
              {project.features.map((feature: any, index: number) => (
                <motion.div key={index} className="flex items-center space-x-3" variants={fadeIn}>
                  <div className="text-black">{feature.icon}</div>
                  <span className="font-inter-display text-base font-medium leading-tight text-black">
                    {feature.title}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-12 md:py-24 px-4 md:px-12 bg-black text-white">
        <motion.div
          className="max-w-4xl mx-auto text-center space-y-8"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          // viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-inter-display text-3xl md:text-4xl lg:text-5xl font-[500] leading-tight">
            Interested in similar interiors?
          </h2>
          <motion.button
            onClick={onNavigate}
            whileHover={{ scale: 1.05 }}
            className="px-8 py-3 bg-white text-black rounded-lg font-inter-display font-medium leading-tight hover:bg-gray-100 transition-all"
          >
            Explore More Interiors
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}

export default ProjectDetailsPage;