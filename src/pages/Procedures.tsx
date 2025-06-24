
import { useEffect } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ArrowUp } from 'lucide-react';

const Procedures = () => {
  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // Show scroll-to-top button when scrolling down
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const scrollToTopBtn = document.getElementById('scroll-to-top');
      if (scrollToTopBtn) {
        if (scrollTop > 300) {
          scrollToTopBtn.classList.remove('opacity-0', 'invisible');
          scrollToTopBtn.classList.add('opacity-100', 'visible');
        } else {
          scrollToTopBtn.classList.remove('opacity-100', 'visible');
          scrollToTopBtn.classList.add('opacity-0', 'invisible');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const procedures = [
    {
      name: "Shirohdara",
      image: "/Shirohdara.png",
      description: "Shirohdara is a deeply relaxing Ayurvedic therapy where a gentle stream of warm herbal oil is poured continuously over the forehead, specifically on the \"third eye\" area. This soothing treatment helps calm the nervous system, reduce stress and anxiety, improve sleep, and promote mental clarity. It's often described as a meditative experience that brings a sense of peace and balance to both mind and body.",
      position: "left"
    },
    {
      name: "Abhyangam",
      image: "/Abhyangam.png", 
      description: "Abhyangam is a traditional Ayurvedic full-body oil massage that uses warm, medicated herbal oils tailored to your individual body type and health conditions. This deeply nourishing therapy helps improve circulation, remove toxins, calm the nervous system, and promote flexibility and vitality. Regular Abhyangam not only supports physical health—by reducing muscle tension and joint stiffness—but also enhances mental clarity and emotional balance. It's a rejuvenating ritual that restores harmony between the body, mind, and spirit, making it a cornerstone of Ayurvedic self-care and healing.",
      position: "right"
    },
    {
      name: "Kati Vasthi",
      image: "/KatiVasthi.png",
      description: "Kati Vasthi is a traditional Ayurvedic therapy focused on relieving lower back pain and stiffness. In this treatment, warm medicated oil is pooled over the lower back within a small dough ring placed on the skin. The warmth of the oil, combined with its healing properties, penetrates deeply into the muscles and tissues, helping to reduce inflammation, improve circulation, and ease chronic pain. It's especially beneficial for conditions like sciatica, herniated discs, and lumbar spondylosis, offering a natural and therapeutic alternative to manage back issues.",
      position: "left"
    },
    {
      name: "Akshi Tarpanam",
      image: "/AkshiTarpanam.png",
      description: "Akshi Tarpanam is a specialized Ayurvedic eye treatment designed to nourish, strengthen, and rejuvenate the eyes. In this therapy, a ring made of dough is placed around the eyes and filled with warm, medicated ghee (clarified butter). The individual eye will with their eyes immersed in the soothing ghee, allowing it to deeply penetrate the eye tissues. This treatment helps reduce eye strain, dryness, reducing strain, and improving vision. Akshi Tarpanam is especially beneficial for people who spend long hours looking at screens, suffer from dry eyes, or want to maintain overall eye health naturally.",
      position: "right"
    }
  ];

  // Animation variants with proper TypeScript types
  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.6 
      } 
    }
  };

  const imageItem: Variants = {
    hidden: { opacity: 0, scale: 0.9 },
    show: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1] as const
      }
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Header Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="pt-24 pb-20 bg-gradient-to-b from-amber-50 to-white"
      >
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-4xl md:text-5xl font-serif text-amber-800 mb-4"
          >
            Our Services
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-lg text-amber-600 max-w-2xl mx-auto"
          >
            Experience the ancient wisdom of Ayurveda through our specialized treatments
          </motion.p>
        </div>
      </motion.section>

      {/* Procedures Section */}
      <motion.section 
        className="py-12 bg-white"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="container mx-auto px-4">
          <AnimatePresence>
            {procedures.map((procedure, index) => (
              <motion.div 
                key={procedure.name} 
                className="grid md:grid-cols-2 min-h-[80vh] md:min-h-[70vh] mb-16 md:mb-24 last:mb-0 overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                variants={item}
              >
                {procedure.position === "left" ? (
                  <>
                    <motion.div 
                      className="bg-white flex items-center p-8 md:p-12"
                      variants={item}
                    >
                      <div className="space-y-6">
                        <motion.h2 
                          className="text-3xl md:text-4xl font-serif text-amber-800"
                          variants={item}
                        >
                          {procedure.name}
                        </motion.h2>
                        <motion.p 
                          className="text-gray-600 leading-relaxed text-lg"
                          variants={item}
                        >
                          {procedure.description}
                        </motion.p>
                      </div>
                    </motion.div>
                    <motion.div 
                      className="bg-cover bg-center min-h-[50vh] md:min-h-auto"
                      style={{ backgroundImage: `url(${procedure.image})` }}
                      variants={imageItem}
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                    />
                  </>
                ) : (
                  <>
                    <motion.div 
                      className="bg-cover bg-center min-h-[50vh] md:min-h-auto order-1 md:order-2"
                      style={{ backgroundImage: `url(${procedure.image})` }}
                      variants={imageItem}
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                    />
                    <motion.div 
                      className="bg-white flex items-center p-8 md:p-12 order-2 md:order-1"
                      variants={item}
                    >
                      <div className="space-y-6">
                        <motion.h2 
                          className="text-3xl md:text-4xl font-serif text-amber-800"
                          variants={item}
                        >
                          {procedure.name}
                        </motion.h2>
                        <motion.p 
                          className="text-gray-600 leading-relaxed text-lg"
                          variants={item}
                        >
                          {procedure.description}
                        </motion.p>
                      </div>
                    </motion.div>
                  </>
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </motion.section>

      <Footer />
      
      {/* Scroll to Top Button */}
      <motion.button
        id="scroll-to-top"
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 bg-amber-600 text-white p-3 rounded-full shadow-lg hover:bg-amber-700 transition-all duration-300 opacity-0 invisible z-50"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ 
          opacity: 1, 
          y: 0,
          transition: { delay: 0.5 }
        }}
      >
        <ArrowUp size={24} />
      </motion.button>
    </div>
  );
};

export default Procedures;
