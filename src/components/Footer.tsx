import { Facebook, Instagram, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="relative bg-teal-800 text-teal-50 py-16 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -top-32 -right-32 w-64 h-64 bg-amber-200 rounded-full mix-blend-multiply filter blur-xl"></div>
        <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-teal-300 rounded-full mix-blend-multiply filter blur-xl"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-6xl mx-[200px]">
          <div className="flex flex-col md:flex-row justify-between items-start mb-12">
            {/* Logo and Tagline - Left aligned */}
            <div className="md:w-1/2 mb-8 md:mb-0">
              <div className="text-4xl font-serif font-medium text-amber-300 mb-4">
                Mohan's <span className="block text-white text-2xl">Ayurveda</span>
              </div>
              <p className="text-teal-100 max-w-md">
                Embracing ancient wisdom for modern wellness through authentic Ayurvedic practices.
              </p>
            </div>

            {/* Contact Information - Right aligned */}
            <div className="w-full md:w-1/2 md:pl-8">
              <h3 className="text-xl font-serif font-medium mb-6 text-amber-200 text-right md:text-left">
                Contact Us
              </h3>
              <ul className="space-y-4">
                <li className="flex items-center md:justify-end lg:justify-start">
                  <span>620 Nine Mile Dr, Bedford, NS</span>
                  <MapPin className="h-5 w-5 text-amber-300 ml-3 flex-shrink-0" />
                </li>
                <li className="flex items-center md:justify-end lg:justify-start">
                  <a href="mailto:harihar190.hm@gmail.com" className="hover:text-amber-200 transition-colors">
                    harihar190.hm@gmail.com
                  </a>
                  <Mail className="h-5 w-5 text-amber-300 ml-3 flex-shrink-0" />
                </li>
                <li className="flex items-center md:justify-end lg:justify-start">
                  <a href="tel:+11234567890" className="hover:text-amber-200 transition-colors">
                    +1 (123) 456-7890
                  </a>
                  <Phone className="h-5 w-5 text-amber-300 ml-3 flex-shrink-0" />
                </li>
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-teal-500/30 to-transparent my-8"></div>

          {/* Bottom Bar */}
          <div className="flex flex-col items-center">
            {/* Social Media Links */}
            <div className="flex space-x-6 mb-6">
              {[
                { icon: Facebook, url: 'https://www.facebook.com/mohanayurveda.ca' },
                { icon: Instagram, url: 'https://www.instagram.com/mohanayurvedicwellness/' },
                { icon: Mail, url: 'mailto:harihar190.hm@gmail.com' }
              ].map((social, index) => (
                <a 
                  key={index}
                  href={social.url}
                  className="h-10 w-10 rounded-full bg-teal-600/30 hover:bg-amber-400/10 flex items-center justify-center text-teal-100 hover:text-amber-300 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                  aria-label={`${social.icon.name} link`}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>

            {/* Copyright */}
            <div className="text-teal-200/80 text-sm text-center">
              <p>© {new Date().getFullYear()} Mohan's Ayurveda. All rights reserved.</p>
              <p className="text-xs mt-1 text-teal-200/60">
                Embracing the ancient wisdom of Ayurveda for modern wellbeing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
