import { ArrowRight, Youtube, Instagram, Linkedin, Facebook } from 'lucide-react';
import logoimg from "../assets/logo.png";
interface FooterProps {
  onNavigate: (page: string) => void;
}

function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-black text-white py-12 md:py-16 px-4 md:px-12" role="contentinfo">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-8 md:mb-12">
          <div className="space-y-6">
            <div className='flex items-center'>
            <img
              src={logoimg}
              alt="Green Decors Logo"
              className="w-12 h-12 sm:w-14 sm:h-14 cursor-pointer object-contain"
            />
            <h3 className="font-inter-display text-xl md:text-2xl font-[400] leading-tight">
              GREEN DECORS
            </h3>
            </div>

            <address className="not-italic space-y-3 font-inter-display text-sm font-normal leading-relaxed text-gray-400">
              <p>Studio: Nehrunagar, Puttur</p>
              <p>Mangalore, Karnataka, India 575001</p>
              <p>Phone: <a href="tel:+919874563210" className="hover:text-white">+91 9874563210</a></p>
              <p>Email: <a href="mailto:greendecors.india@gmail.com" className="hover:text-white">greendecors.india@gmail.com</a></p>
            </address>
          </div>

          <div className="space-y-6">
            <nav className="flex flex-col space-y-4">
              <button
                onClick={() => onNavigate('home')}
                className="font-inter-display text-base font-normal leading-tight text-gray-400 hover:text-white transition-colors text-left"
              >
                Home
              </button>
              <button
                onClick={() => onNavigate('about')}
                className="font-inter-display text-base font-normal leading-tight text-gray-400 hover:text-white transition-colors text-left"
              >
                About
              </button>
              <button
                onClick={() => onNavigate('services')}
                className="font-inter-display text-base font-normal leading-tight text-gray-400 hover:text-white transition-colors text-left"
              >
                Services
              </button>
              <button
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="font-inter-display text-base font-normal leading-tight text-gray-400 hover:text-white transition-colors text-left"
              >
                Contact
              </button>
            </nav>
          </div>

          <div className="space-y-6">
            <h4 className="font-inter-display text-lg font-[300] leading-tight">
              Sign Up For Free
            </h4>

            <div className="flex">
              <input
                type="email"
                placeholder="Your Email Address"
                className="flex-1 px-4 py-3 bg-gray-900 rounded-l-lg font-inter-display text-sm focus:outline-none focus:ring-2 focus:ring-turquoise"
              />
              <button className="px-4 py-3 bg-turquoise text-white rounded-r-lg hover:bg-turquoise/90 transition-colors">
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        <div className="pt-6 md:pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-0">
          <div className="w-full md:w-auto">
            <iframe
              title="Green Decors India Location"
              src="https://www.google.com/maps?q=Puttur%20Karnataka&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full md:w-[420px] h-40 rounded-lg border border-gray-800"
            />
          </div>
          <p className="font-inter-display text-xs md:text-sm font-normal leading-tight text-gray-400 text-center md:text-left">
            © 2024 Green Decors. All rights reserved.
          </p>

          <div className="flex space-x-4">
            <a
              href="#"
              className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors"
            >
              <Youtube className="w-5 h-5" />
            </a>
            <a
              href="https://www.instagram.com/greendecors.india/"
              className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors"
            >
              <Facebook className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
