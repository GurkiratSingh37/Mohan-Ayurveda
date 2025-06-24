import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from 'lucide-react';

// Logo from the original site
const logoUrl = 'https://static.wixstatic.com/media/03703b_063ac773e0da4a84aea86d43ff784bb8~mv2.png/v1/fill/w_73,h_73,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/new%20logo%20ma.png';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Navigation items with exact widths from the original site
  const navItems = [
    { name: 'About', path: '/' },
    { name: 'Product', path: '/product' },
    { name: 'Procedures', path: '/procedures' },
    { name: 'Contact', path: '/contact' },
  ] as const;

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`sticky top-0 left-0 right-0 z-50 h-[93px] transition-all duration-300 ${
      scrolled 
        ? 'bg-[#1a3a3a] shadow-lg backdrop-blur-sm bg-opacity-95' 
        : 'bg-[#264d4d] shadow-md'
    }`}>
      <div className="mx-auto px-4 sm:px-6 w-full h-full">
        <div className="flex items-center justify-between h-full">
          {/* Logo with subtle hover effect */}
          <Link 
            to="/" 
            className="flex items-center h-full ml-2 sm:ml-5 transition-transform duration-300 hover:scale-105"
          >
            <img 
              src={logoUrl} 
              alt="Mohan Ayurveda Logo" 
              className="h-[70px] w-[70px] sm:h-[73px] sm:w-[73px] object-contain transition-all duration-300"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center h-full">
            <div className="flex items-center h-full gap-8 lg:gap-12">
              {navItems.map((item) => (
                <div key={item.name} className="relative h-full flex items-center group">
                  <Link
                    to={item.path}
                    className={`px-4 h-full flex items-center justify-center text-white hover:text-[#9ce2c5] transition-all duration-300 font-sans-serif font-extralight text-lg lg:text-xl xl:text-2xl ${
                      location.pathname === item.path ? 'text-[#9ce2c5]' : ''
                    }`}
                  >
                    <span className="relative z-10">{item.name}</span>
                    <span className={`absolute bottom-0 left-0 right-0 h-0.5 bg-[#9ce2c5] transition-all duration-300 transform scale-x-0 ${
                      location.pathname === item.path ? 'scale-x-100' : 'group-hover:scale-x-75'
                    }`}></span>
                  </Link>
                </div>
              ))}
            </div>
            <div className="ml-32 flex items-center gap-4">
            <Link 
                to="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  setIsOpen(false);
                  const footer = document.getElementById('contact');
                  if (footer) {
                    footer.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="block w-full"
              >
                <Button 
                  className="bg-[#955f27] hover:bg-[#b8773a] text-white text-base px-6 h-11 rounded-full font-avenir shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                >
                  Book Online
                </Button>
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <a 
              href="tel:+1234567890" 
              className="mr-4 p-2 text-white rounded-full bg-[#955f27] bg-opacity-80 hover:bg-opacity-100 transition-all duration-300"
              aria-label="Call Us"
            >
              <Phone className="h-5 w-5" />
            </a>
            <button
              className="text-white p-2 rounded-full hover:bg-white hover:bg-opacity-10 transition-colors duration-200"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation with smooth transition */}
        <div 
          className={`md:hidden bg-[#1a3a3a] bg-opacity-95 backdrop-blur-sm overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navItems.map((item, index) => (
              <Link
                key={item.name}
                to={item.path}
                className={`block text-white text-lg py-4 px-4 rounded-lg transition-colors duration-200 ${
                  location.pathname === item.path 
                    ? 'bg-[#9ce2c5] bg-opacity-20 text-[#9ce2c5]' 
                    : 'hover:bg-white hover:bg-opacity-10'
                }`}
                onClick={() => setIsOpen(false)}
                style={{
                  transitionDelay: isOpen ? `${index * 50}ms` : '0ms',
                  transform: isOpen ? 'translateX(0)' : 'translateX(-20px)',
                  opacity: isOpen ? 1 : 0,
                  transition: 'all 0.3s ease-out'
                }}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-2">
              <Link 
                to="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  setIsOpen(false);
                  const footer = document.getElementById('contact');
                  if (footer) {
                    footer.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="block w-full"
              >
                <Button className="w-full bg-[#955f27] hover:bg-[#b8773a] text-white py-3 text-base rounded-full font-medium mt-2 transition-all duration-300 hover:shadow-lg">
                  Book Online
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
