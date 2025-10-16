import { Instagram as InstagramIcon } from 'lucide-react';

function Instagram() {
  const posts = [
    // Bedroom + Modern (8)
    'https://images.unsplash.com/photo-1615873968403-89e068629265?w=1200',
    'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1200',
    'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1200',
    'https://images.unsplash.com/photo-1567016432779-094069958ea5?w=1200',
    'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=1200',
    'https://images.unsplash.com/photo-1616047006789-b7af5afb8c20?w=1200',
    'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=1200',
    'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1200',
  ];

  return (
    <div className="py-12 md:py-24 px-4 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-12">
          <h2 className="font-inter-display text-2xl md:text-3xl lg:text-4xl font-[400] leading-tight text-black">
            Follow Our Journey on Instagram
          </h2>
          <p className="font-inter-display text-lg font-normal leading-tight text-gray-600">
            @greendecors.india
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 mb-8">
          {posts.map((post, index) => (
            <div
              key={index}
              className="relative aspect-square rounded-2xl overflow-hidden group cursor-pointer"
            >
              <img
                src={post}
                alt={`Instagram post ${index + 1}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/80 via-pink-500/80 to-purple-600/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <InstagramIcon className="w-12 h-12 text-white" />
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="px-8 py-3 bg-black text-white rounded-lg font-inter-display font-medium leading-tight hover:bg-gray-900 transition-all">
            View on Instagram
          </button>
        </div>
      </div>
    </div>
  );
}

export default Instagram;
