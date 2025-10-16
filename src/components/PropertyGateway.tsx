import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

function PropertyGateway() {
  const categories = [
    {
      name: 'Residential Towers',
      image: 'https://plus.unsplash.com/premium_photo-1694475634077-e6e4b623b574?q=80&w=1971&auto=format&fit=crop',
    },
    {
      name: 'Business Districts',
      image: 'https://plus.unsplash.com/premium_photo-1661919068698-40e7b78f196a?q=80&w=2070&auto=format&fit=crop',
    },
    {
      name: 'Bespoke Villas',
      image: 'https://images.unsplash.com/photo-1562595410-2cb999af24b5?q=80&w=1626&auto=format&fit=crop',
    },
  ];

  const [activeCategory, setActiveCategory] = useState(2);

  return (
    <div className="py-12 md:py-24 px-4 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        <div className="relative h-[400px] md:h-[600px] rounded-2xl overflow-hidden group order-2 lg:order-1">
          <img
            src={categories[activeCategory].image}
            alt={categories[activeCategory].name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>

        <div className="space-y-6 md:space-y-8 order-1 lg:order-2">
          <div className="space-y-4">
            <div className="font-inter-display text-lg font-normal leading-tight text-gray-600 uppercase">
              Prime Properties
            </div>

            <h2 className="font-inter-display text-3xl md:text-4xl lg:text-5xl font-light leading-tight text-black">
              Your Gateway to Luxurious Living in the UAE
            </h2>

            <p className="font-inter-display text-base md:text-lg font-normal leading-tight text-gray-600">
              Explore an exclusive collection of the UAE's most prestigious properties, where luxury meets innovation.
            </p>
          </div>

          <div className="space-y-4">
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => setActiveCategory(index)}
                className={`flex items-center justify-between w-full py-4 px-2 border-b transition-all ${
                  activeCategory === index
                    ? 'border-black'
                    : 'border-gray-200 hover:border-gray-400'
                }`}
              >
                <span
                  className={`font-inter-display text-lg md:text-xl leading-tight ${
                    activeCategory === index ? 'font-bold text-black' : 'font-normal text-gray-600'
                  }`}
                >
                  {category.name}
                </span>
                {activeCategory === index && <ArrowRight className="w-5 h-5" />}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PropertyGateway;
