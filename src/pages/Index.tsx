
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Leaf, Users, Award, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Index = () => {
  const backgroundImages = [
    "/home-1.png",
    "/home-2.png"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    setIsVisible(true);

    const interval = setInterval(() => {
      if (!isHovered) {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
      }
    }, 5000); // Change every 5 seconds when not hovered

    return () => clearInterval(interval);
  }, [isHovered]);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex => 
      prevIndex === 0 ? backgroundImages.length - 1 : prevIndex - 1
    ));
  }; 
  
  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const scrollToTeam = () => {
    const teamSection = document.getElementById('meet-the-team');
    if (teamSection) {
      teamSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section 
        className="relative h-[75vh] flex items-center justify-center overflow-hidden group"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Background Image with enhanced transition */}
        <div
          key={currentIndex}
          className="absolute inset-0 bg-cover bg-center transform transition-all duration-1000 ease-in-out scale-110 group-hover:scale-100 carousel-slide"
          style={{
            backgroundImage: `url(${backgroundImages[currentIndex]})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            willChange: 'transform, opacity',
            opacity: 0,
            animation: 'fadeIn 0.8s ease-out forwards, scaleIn 12s ease-in-out infinite alternate'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-black/10"></div>
        </div>
        
        {/* Enhanced Navigation Arrows */}
        <button 
          onClick={goToPrevious}
          className="absolute left-4 z-20 p-3 bg-black/40 text-white rounded-full hover:bg-black/70 transition-all duration-300 transform hover:scale-110 shadow-lg backdrop-blur-sm carousel-control"
          aria-label="Previous slide">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <button 
          onClick={goToNext}
          className="absolute right-4 z-20 p-3 bg-black/40 text-white rounded-full hover:bg-black/70 transition-all duration-300 transform hover:scale-110 shadow-lg backdrop-blur-sm carousel-control"
          aria-label="Next slide">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
        
        {/* Enhanced Slide Indicators */}
        <div className="absolute bottom-6 left-0 right-0 z-20 flex justify-center space-x-3">
          {backgroundImages.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-1.5 rounded-full transition-all duration-300 ${currentIndex === index ? 'w-8 bg-white animate-pulse' : 'w-4 bg-white/50 hover:bg-white/70'}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
        
      {/* Enhanced content with better transitions */}
      <div 
        className={`relative z-10 text-center text-white px-4 max-w-4xl mx-auto transform transition-all duration-700 ease-out carousel-content ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}
        style={{
          textShadow: '0 2px 4px rgba(0,0,0,0.3)'
        }}
      >
        {currentIndex === 0 && (
          <>
            <h1 className="text-5xl md:text-6xl font-serif mb-3 tracking-wide">Mohan</h1>
            <h2 className="text-xl md:text-2xl font-light mb-6 tracking-widest">Ayurvedic Wellness</h2>
            <Button 
              onClick={scrollToTeam}
              className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-2 rounded-none text-base font-light tracking-wide transition-all duration-300"
            >
              View Our Team
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </>
        )}

        {currentIndex === 1 && (
          <>
            <h1 className="text-5xl md:text-6xl font-serif mb-3 tracking-wide">Proud Partners with Shanti Studios</h1>
            <Button 
              onClick={scrollToTeam}
              className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-2 rounded-none text-base font-light tracking-wide transition-all duration-300"
            >
              View Our Team
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </>
        )}
      </div>

      </section>

      {/* Meet The Team Section */}
      <section id="meet-the-team" className="py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-6 py-2 bg-amber-50 text-amber-700 rounded-full text-sm font-medium">
              Our Healers
            </div>
            <h2 className="text-4xl font-serif text-gray-800 mb-4">Meet The Team</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-amber-400 to-teal-400 mx-auto rounded-full"></div>
          </div>

          {/* Founder Section */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
            <div className="order-2 md:order-1 relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-400/20 to-teal-400/20 rounded-2xl transform -rotate-1 group-hover:rotate-0 transition-transform duration-500"></div>
              <img 
                src="hari.png"
                alt="Founder & Ayurvedic Consultant"
                className="relative w-full h-auto object-cover rounded-2xl shadow-xl z-10"
              />
            </div>
            <div className="order-1 md:order-2 space-y-6">
              <div>
                <div className="flex items-center space-x-3 mb-3">
                  <span className="w-6 h-0.5 bg-amber-500"></span>
                  <span className="text-amber-600 font-medium">Founder & Lead Practitioner</span>
                </div>
                <h2 className="text-4xl font-serif text-gray-800 mb-2 leading-tight">Hari Mohan</h2>
                <h4 className="text-lg text-teal-600 mb-6">Mohan Ayurveda by Shanti Studios</h4>
              </div>
              <div className="prose prose-teal max-w-none text-gray-600 space-y-4">
                <p className="text-lg leading-relaxed">
                  <strong className="text-teal-700">Namaste!</strong> I'm Hari Har Mohan, a qualified Ayurvedic Consultant with over a decade of dedicated experience in holistic healing and natural wellness.
                </p>
                <p className="leading-relaxed">
                  My professional journey spans over 10 years, including the leadership of an Ayurvedic Institute in India, where I guided individuals on their path to optimal health through traditional Ayurvedic principles. I’ve also served as a Holistic Healing Specialist in Canada, where I now reside and practice.
                </p>
                <p className="leading-relaxed">
                  Holding a 5.5-year Bachelor of Ayurvedic Medicine and Surgery (BAMS) degree from India, I've further specialized in authentic detoxification and rejuvenation therapies through an advanced Panchakarma Specialist course in Kerala.
                </p>
                <div className="bg-amber-50/50 p-4 rounded-lg border-l-4 border-amber-300">
                  <p className="text-amber-800 italic">
                    "My mission is to help you reconnect with your inner balance and experience true, lasting wellness through personalized Ayurvedic consultations and natural treatment plans."
                  </p>
                </div>
              </div>
              <div className="pt-4">
                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 bg-teal-50 text-teal-700 text-sm rounded-full">BAMS</span>
                  <span className="px-4 py-2 bg-amber-50 text-amber-700 text-sm rounded-full">Panchakarma Specialist</span>
                  <span className="px-4 py-2 bg-gray-100 text-gray-700 text-sm rounded-full">10+ Years Experience</span>
                </div>
              </div>
            </div>
          </div>

          {/* Ayurvedic Consultant Section */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div>
                <div className="flex items-center space-x-3 mb-3">
                  <span className="w-6 h-0.5 bg-amber-500"></span>
                  <span className="text-amber-600 font-medium">Senior Ayurvedic Consultant</span>
                </div>
                <h2 className="text-4xl font-serif text-gray-800 mb-2 leading-tight">Radhika Mohan</h2>
                <h4 className="text-lg text-teal-600 mb-6">Honey & Ginger Dartmouth</h4>
              </div>
              <div className="prose prose-teal max-w-none text-gray-600 space-y-4">
                <p className="leading-relaxed">
                  A graduate in BAMS (Bachelor of Ayurvedic Medicine and Surgery) and BSc (Medical) from India, I come from a family tradition of Ayurvedic practitioners spanning three generations.
                </p>
                <p className="leading-relaxed">
                 With over a decade of experience, I strive to offer a compassionate, personalized, and holistic approach to healing, using the time-tested principles of Ayurveda.
                </p>
                <p className="leading-relaxed">
                  My practice draws from both my formal education and my hands-on experience in emergency departments, where I developed a deeper understanding of the connection between modern system of healing and ancient Ayurvedic wisdom. I also spent several years leading Ayurvedic outpatient and inpatient care, as well as overseeing the preparation of traditional herbal formulations.
                </p>
                <p className="leading-relaxed">
                  I aim to address the root causes of imbalance, rather than just the symptoms. My goal is to create a supportive and nurturing space where healing can unfold naturally. My consultations may include guidance of Ayurvedic diet and lifestyle, detoxification protocols, and mind-body practices designed to restore balance.
                </p>
                <div className="bg-teal-50/50 p-4 rounded-lg border-l-4 border-teal-300">
                  <p className="text-teal-800 italic">
                    "My goal is to create a supportive space where healing unfolds naturally through authentic Ayurvedic care tailored to your personal journey."
                  </p>
                </div>
              </div>
              <div className="pt-4">
                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 bg-teal-50 text-teal-700 text-sm rounded-full">BAMS, BSc</span>
                  <span className="px-4 py-2 bg-amber-50 text-amber-700 text-sm rounded-full">Herbal Formulations</span>
                  <span className="px-4 py-2 bg-gray-100 text-gray-700 text-sm rounded-full">10+ Years Experience</span>
                </div>
              </div>
            </div>
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-400/20 to-amber-400/20 rounded-2xl transform rotate-1 group-hover:rotate-0 transition-transform duration-500"></div>
              <img 
                src="/radhika.png"
                alt="Ayurvedic Consultant"
                className="relative w-full h-auto object-cover rounded-2xl shadow-xl z-10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-20">
            <div className="inline-block p-3 mb-6 bg-teal-50 rounded-full">
              <Leaf className="h-8 w-8 text-teal-700" />
            </div>
            <h2 className="text-4xl font-serif font-light text-gray-800 mb-4 tracking-tight">Our Holistic Services</h2>
            <div className="w-20 h-0.5 bg-teal-600 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
              At Mohan's Ayurveda, we blend ancient wisdom with modern understanding to provide comprehensive care that nurtures
              your body, mind, and spirit through time-honored Ayurvedic practices.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 h-full">
              <CardContent className="p-8 h-full flex flex-col">
                <div className="bg-teal-50 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-teal-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-serif text-gray-800 mb-6 font-medium">Holistic Health Procedures</h3>
                <ul className="space-y-4 text-gray-600 flex-grow">
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2">•</span>
                    <span>Comprehensive History Taking</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2">•</span>
                    <span>Tailored Ayurvedic Consultations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2">•</span>
                    <span>Dosha Evaluation & Analysis</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 h-full">
              <CardContent className="p-8 h-full flex flex-col">
                <div className="bg-amber-50 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                </div>
                <h3 className="text-xl font-serif text-gray-800 mb-6 font-medium">Wellness & Rejuvenation</h3>
                <ul className="space-y-4 text-gray-600 flex-grow">
                  <li className="flex items-start">
                    <span className="text-amber-600 mr-2">•</span>
                    <span>Natural Skin Enhancement</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-600 mr-2">•</span>
                    <span>Rasayana Therapies</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-600 mr-2">•</span>
                    <span>Skin & Hair Care Rituals</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 h-full">
              <CardContent className="p-8 h-full flex flex-col">
                <div className="bg-blue-50 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-serif text-gray-800 mb-6 font-medium">Lifestyle Guidance</h3>
                <ul className="space-y-4 text-gray-600 flex-grow">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Hormonal Balance</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Stress Management</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Modern Lifestyle Solutions</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-16">
            <Link to="/procedures">
              <Button className="bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white px-8 py-4 rounded-md text-base font-medium tracking-wide transition-all duration-300 transform hover:scale-105">
                Discover Our Procedures
                <svg className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Certification Section */}
      <section className="py-20 bg-gradient-to-b from-white to-teal-50 relative overflow-hidden">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="inline-flex items-center mb-6">
                <div className="p-3 bg-teal-100/80 rounded-xl mr-4 backdrop-blur-sm">
                  <Award className="h-7 w-7 text-teal-700" />
                </div>
                <h3 className="text-3xl font-serif font-medium text-gray-800">Professional Certification</h3>
              </div>
              <div className="w-16 h-1 bg-gradient-to-r from-teal-500 to-teal-300 mb-8 rounded-full"></div>
              <p className="text-gray-700 leading-relaxed text-lg mb-8">
                Our practitioner is a <span className="font-medium text-teal-800">registered member of the Ayurvedic Association of Canada</span>, 
                ensuring a high standard of professionalism and adherence to ethical practices in 
                the scope of Ayurveda.
              </p>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-0.5 bg-gradient-to-r from-teal-400 to-transparent"></div>
                <span className="text-teal-700 text-sm font-medium tracking-wider uppercase">Trust & Excellence</span>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -right-16 -bottom-16 w-64 h-64 bg-teal-100/30 rounded-full -z-10 blur-xl"></div>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm border border-gray-200/80 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 overflow-hidden">
              <div className="p-8">
                <div className="text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-teal-100 to-teal-50 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-inner border border-teal-50">
                    <Award className="h-12 w-12 text-teal-700" />
                  </div>
                  <h4 className="text-2xl font-serif font-medium text-gray-800 mb-2">Certified Member</h4>
                  <p className="text-teal-700 font-medium mb-8">Ayurvedic Association of Canada</p>
                  
                  <div className="mt-8 pt-6 border-t border-gray-100">
                    <p className="text-sm text-gray-500 font-medium mb-5 uppercase tracking-wider">Our Commitment To</p>
                    <ul className="space-y-4">
                      <li className="flex items-start group">
                        <div className="flex-shrink-0 mt-1 mr-3">
                          <div className="w-8 h-8 rounded-lg bg-teal-50 flex items-center justify-center group-hover:bg-teal-100 transition-colors">
                            <svg className="w-4 h-4 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                        </div>
                        <span className="text-gray-700">Foundational understanding</span>
                      </li>
                      <li className="flex items-start group">
                        <div className="flex-shrink-0 mt-1 mr-3">
                          <div className="w-8 h-8 rounded-lg bg-teal-50 flex items-center justify-center group-hover:bg-teal-100 transition-colors">
                            <svg className="w-4 h-4 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                        </div>
                        <span className="text-gray-700">Continuing education</span>
                      </li>
                      <li className="flex items-start group">
                        <div className="flex-shrink-0 mt-1 mr-3">
                          <div className="w-8 h-8 rounded-lg bg-teal-50 flex items-center justify-center group-hover:bg-teal-100 transition-colors">
                            <svg className="w-4 h-4 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                        </div>
                        <span className="text-gray-700">Quality care standards</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

{/* Ayurvedic Wisdom Section */}
<section className="py-20 relative bg-amber-50/80 overflow-hidden">
  {/* Organic background elements */}
  <div className="absolute inset-0">
    <div className="absolute top-1/4 -right-32 w-72 h-72 bg-teal-100/60 rounded-full blur-2xl"></div>
    <div className="absolute -bottom-1/4 -left-32 w-96 h-96 bg-amber-100/60 rounded-full blur-2xl"></div>
    <div className="absolute -top-20 left-1/4 w-40 h-40 bg-sand-100/50 rounded-full blur-xl"></div>
  </div>

  <div className="relative z-10 container mx-auto px-4">
    <div className="max-w-3xl mx-auto bg-white/70 backdrop-blur-sm rounded-2xl overflow-hidden border border-amber-100/50 shadow-lg">
      
      {/* Sanskrit text with decorative elements */}
      <div className="relative p-8 md:p-12">
        <div className="absolute left-8 top-8 bottom-8 w-0.5 bg-gradient-to-b from-amber-500/80 via-teal-400/80 to-amber-500/80"></div>
        
        <div className="relative pl-10">
          {/* Decorative leaf icon */}
          <svg 
            className="absolute -left-2 top-0 w-8 h-8 text-amber-600/20" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="1.5" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
          </svg>
          
          <h3 className="text-2xl md:text-3xl font-serif text-amber-900 leading-relaxed mb-6">
            "स्वस्थस्य स्वास्थ्य रक्षणम्,<br />
            आतुरस्य विकार प्रशमनम् च।"
          </h3>

          {/* Transliteration */}
          <p className="text-amber-700/80 italic text-sm md:text-base mb-6 pl-2 border-l-2 border-amber-300/50">
            Swasthasya swasthya rakshanam,<br />
            Aturasya vikara prashamanam cha.
          </p>

          {/* Author */}
          <div className="flex items-center mb-8">
            <div className="h-px flex-1 bg-gradient-to-r from-amber-300/50 to-transparent"></div>
            <span className="mx-4 text-amber-700/80 text-sm font-medium font-sans">— Charaka Samhita</span>
            <div className="h-px flex-1 bg-gradient-to-l from-teal-300/50 to-transparent"></div>
          </div>

          {/* Translation */}
          <div className="bg-white/60 p-5 rounded-xl border border-amber-100 shadow-sm backdrop-blur-sm">
            <div className="flex items-start">
              <svg 
                className="h-5 w-5 text-amber-600 mt-0.5 mr-3 flex-shrink-0" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div>
                <h4 className="text-amber-800 font-medium text-sm mb-1">Wisdom of Ayurveda</h4>
                <p className="text-amber-900/80 text-sm leading-relaxed">
                  "The goal of Ayurveda is to maintain the health of the healthy and to cure the disease of the diseased."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative border */}
      <div className="h-1.5 bg-gradient-to-r from-amber-200 via-teal-200 to-amber-200"></div>
    </div>
  </div>
</section>


      <Footer />
    </div>
  );
};

export default Index
