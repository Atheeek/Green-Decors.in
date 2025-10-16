function LogoCloud() {
  const logos = [
    'https://res.cloudinary.com/doevp9obh/image/upload/v1753080065/Screenshot_2025-07-21_at_12.09.53_PM-removebg-preview_cxp06s.png',
    'https://res.cloudinary.com/doevp9obh/image/upload/v1758555539/Screenshot_2025-09-22_at_9.08.12_PM_mirtmy.png',
    'https://res.cloudinary.com/doevp9obh/image/upload/v1758555538/Screenshot_2025-09-22_at_9.07.51_PM_pnutpc.png',
    'https://res.cloudinary.com/doevp9obh/image/upload/v1758555538/Screenshot_2025-09-22_at_9.08.09_PM_s9spvn.png',
    'https://res.cloudinary.com/doevp9obh/image/upload/v1758555538/Screenshot_2025-09-22_at_9.07.57_PM_fhxqfg.png',
    'https://res.cloudinary.com/doevp9obh/image/upload/v1758555538/Screenshot_2025-09-22_at_9.08.06_PM_dkleia.png',
  ];

  const allLogos = [...logos, ...logos, ...logos];

  return (
    <div className="py-16 bg-white overflow-hidden">
      <div className="relative">
        <div className="flex animate-scroll">
          {allLogos.map((logo, index) => (
            <div
              key={index}
              className="flex-shrink-0 mx-12 flex items-center justify-center"
              style={{ width: '200px' }}
            >
              <img
                src={logo}
                alt={`Partner ${index + 1}`}
                className="max-h-16 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }

        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
      `}</style>
    </div>
  );
}

export default LogoCloud;
