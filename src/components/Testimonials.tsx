import { Star } from 'lucide-react';

function Testimonials() {
  const testimonials = [
    {
      name: 'Nasser Al Suwaidi',
      title: 'Managing Director, Suwaidi Holdings',
      rating: 5.0,
      quote: 'Prime Properties transformed our vision into reality. Their attention to detail and commitment to excellence is unmatched in the UAE real estate market.',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop',
    },
    {
      name: 'Fatima Al Hashimi',
      title: 'CEO, Emirates Investment Group',
      rating: 4.9,
      quote: 'Working with Prime Properties was a seamless experience. They delivered a stunning property that exceeded all our expectations, combining luxury with functionality.',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop',
    },
  ];

  return (
    <div className="py-12 md:py-24 px-4 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
        <div className="space-y-6">
          <div className="font-['Inter_Display'] text-sm font-normal leading-tight text-gray-500">
            What our client say
          </div>

          <h2 className="font-['Inter_Display'] text-3xl md:text-4xl lg:text-5xl font-[500] leading-tight text-black">
            Prime Properties Excellence Through Client Eyes
          </h2>
        </div>

        <div className="space-y-8">
          {testimonials.map((testimonial, index) => (
            <div key={index}>
              <div className="flex items-start space-x-4 md:space-x-6 p-4 md:p-8 bg-gray-50 rounded-2xl">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 md:w-16 md:h-16 rounded-full object-cover flex-shrink-0"
                />

                <div className="flex-1 space-y-4">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 md:gap-0">
                    <div>
                      <div className="font-['Inter_Display'] text-base md:text-lg font-[400] leading-tight text-black">
                        {testimonial.name}
                      </div>
                      <div className="font-['Inter_Display'] text-sm font-normal leading-tight text-gray-600">
                        {testimonial.title}
                      </div>
                    </div>

                    <div className="flex items-center space-x-1 px-3 py-1 bg-white rounded-lg border border-gray-200">
                      <Star className="w-4 h-4 text-black" fill="black" />
                      <span className="font-['Inter_Display'] text-sm font-semibold">
                        {testimonial.rating}
                      </span>
                    </div>
                  </div>

                  <p className="font-['Inter_Display'] text-sm md:text-base font-normal leading-relaxed text-gray-700">
                    {testimonial.quote}
                  </p>
                </div>
              </div>

              {index < testimonials.length - 1 && (
                <div className="h-px bg-gray-200 my-8" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
