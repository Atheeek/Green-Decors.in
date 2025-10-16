import { useEffect, useRef } from 'react';

const logos = [
  'https://res.cloudinary.com/doevp9obh/image/upload/v1753080065/Screenshot_2025-07-21_at_12.09.53_PM-removebg-preview_cxp06s.png',
  'https://res.cloudinary.com/doevp9obh/image/upload/v1758555539/Screenshot_2025-09-22_at_9.08.12_PM_mirtmy.png',
  'https://res.cloudinary.com/doevp9obh/image/upload/v1758555538/Screenshot_2025-09-22_at_9.07.51_PM_pnutpc.png',
  'https://res.cloudinary.com/doevp9obh/image/upload/v1758555538/Screenshot_2025-09-22_at_9.08.09_PM_s9spvn.png',
  'https://res.cloudinary.com/doevp9obh/image/upload/v1758555538/Screenshot_2025-09-22_at_9.07.57_PM_fhxqfg.png',
  'https://res.cloudinary.com/doevp9obh/image/upload/v1758555538/Screenshot_2025-09-22_at_9.08.06_PM_dkleia.png'
];

const LogoCloud = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    let animationFrame: number;
    let scrollPosition = 0;
    const scrollSpeed = 1;

    const animate = () => {
      scrollPosition += scrollSpeed;

      if (scrollPosition >= container.scrollWidth / 2) {
        scrollPosition = 0;
      }

      container.scrollLeft = scrollPosition;
      animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <section className="py-16 bg-gray-50 overflow-hidden">
      <div
        ref={scrollContainerRef}
        className="flex gap-16 overflow-x-hidden"
        style={{ scrollBehavior: 'auto' }}
      >
        {[...logos, ...logos, ...logos].map((logo, index) => (
          <div
            key={index}
            className="flex-shrink-0 h-16 flex items-center justify-center grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
          >
            <img
              src={logo}
              alt={`Partner logo ${index}`}
              className="h-full w-auto object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default LogoCloud;
