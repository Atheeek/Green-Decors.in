import { Instagram as InstagramIcon } from 'lucide-react';

function Instagram() {
  const posts = [
    'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=400&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=400&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?q=80&w=400&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=400&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?q=80&w=400&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1600573472592-401b489a3cdc?q=80&w=400&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=400&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?q=80&w=400&auto=format&fit=crop',
  ];

  return (
    <div className="py-12 md:py-24 px-4 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-12">
          <h2 className="font-['Inter_Display'] text-2xl md:text-3xl lg:text-4xl font-[400] leading-tight text-black">
            Follow Our Journey on Instagram
          </h2>
          <p className="font-['Inter_Display'] text-lg font-normal leading-tight text-gray-600">
            @primeproperties_uae
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
          <button className="px-8 py-3 bg-black text-white rounded-lg font-['Inter_Display'] font-medium leading-tight hover:bg-gray-900 transition-all">
            View on Instagram
          </button>
        </div>
      </div>
    </div>
  );
}

export default Instagram;
