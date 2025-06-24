
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Leaf, MapPin, Heart, CheckCircle, LeafyGreen, Sprout, Droplets, Phone } from 'lucide-react';

const Product = () => {
  const benefits = [
    { text: "Promotes hair growth", icon: <Sprout className="h-5 w-5 text-amber-600" /> },
    { text: "Promotes blood circulation", icon: <Droplets className="h-5 w-5 text-amber-600" /> },
    { text: "Hydrates Hair shaft", icon: <Droplets className="h-5 w-5 text-amber-600" /> },
    { text: "Strengthens roots", icon: <LeafyGreen className="h-5 w-5 text-amber-600" /> },
    { text: "Protects against moisture loss", icon: <Droplets className="h-5 w-5 text-amber-600" /> },
    { text: "Reduces itching", icon: <CheckCircle className="h-5 w-5 text-amber-600" /> },
    { text: "Reduces Shedding", icon: <CheckCircle className="h-5 w-5 text-amber-600" /> },
    { text: "Prevents Breakage and Split ends", icon: <CheckCircle className="h-5 w-5 text-amber-600" /> },
    { text: "Reduces Hair loss and thinning", icon: <CheckCircle className="h-5 w-5 text-amber-600" /> },
    { text: "Repairs damaged Hair", icon: <CheckCircle className="h-5 w-5 text-amber-600" /> },
    { text: "Adds Volume and Shine", icon: <CheckCircle className="h-5 w-5 text-amber-600" /> },
    { text: "Fights Dandruff", icon: <CheckCircle className="h-5 w-5 text-amber-600" /> }
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-white"
    >
      <Navigation />
      
      {/* Product Hero Section */}
      <section className="relative pt-24 pb-20 bg-gradient-to-br from-amber-50 via-white to-amber-50 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 -right-32 w-96 h-96 bg-amber-200 rounded-full mix-blend-multiply filter blur-2xl"></div>
          <div className="absolute -bottom-1/4 -left-32 w-96 h-96 bg-teal-200 rounded-full mix-blend-multiply filter blur-2xl"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            {/* Product Image */}
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-amber-400/20 to-teal-400/20 rounded-2xl transform rotate-1 group-hover:rotate-0 transition-transform duration-500"></div>
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/products.png"
                  alt="Organic Hair Oil"
                  className="w-full h-auto max-h-[600px] object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white/90 p-3 rounded-lg shadow-lg z-20 flex items-center space-x-2">
                <Leaf className="h-5 w-5 text-green-600" />
                <span className="text-sm font-medium text-gray-800">100% Organic</span>
              </div>
            </motion.div>

            {/* Product Details */}
            <motion.div 
              variants={container}
              initial="hidden"
              animate="show"
              className="space-y-8"
            >
              <motion.div variants={item} className="space-y-2">
                <span className="inline-block px-3 py-1 text-sm font-medium bg-amber-100 text-amber-800 rounded-full mb-2">
                  Ayurvedic Hair Care
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium text-gray-800 leading-tight">
                  Organic Hair Oil
                </h1>
                <p className="text-xl text-amber-600 font-medium">By Radhika Mohan</p>
              </motion.div>

              <motion.div variants={item} className="inline-block bg-gradient-to-r from-amber-500 to-amber-600 text-white p-0.5 rounded-lg">
                <div className="px-6 py-2 bg-white/10 backdrop-blur-sm rounded-md">
                  <h2 className="text-2xl font-serif">Nova Scotia, Canada</h2>
                </div>
              </motion.div>

              <motion.div variants={item} className="space-y-4 pt-4">
                <h3 className="text-2xl font-serif text-gray-800 border-l-4 border-amber-500 pl-4">About This Product</h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  Handcrafted in Nova Scotia using time-honored Ayurvedic traditions, our organic hair oil is a harmonious blend of nature's finest ingredients. Free from chemicals, preservatives, and synthetic additives, this pure formulation is crafted with care to nourish your hair and honor ancient wellness practices.
                </p>
              </motion.div>

              <motion.div variants={item} className="pt-4">
                <a 
                  href="/contact"
                  onClick={(e) => {
                    e.preventDefault();
                    if (window.location.pathname !== '/contact') {
                      window.location.href = '/contact';
                    }
                  }}
                  className="block"
                >
                  <Button 
                    className="group relative overflow-hidden bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white px-8 py-6 rounded-lg text-lg font-medium transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg w-full sm:w-auto"
                  >
                    <span className="relative z-10">
                      <MapPin className="inline-block mr-2 h-5 w-5" />
                      Find in Store
                    </span>
                    <span className="absolute inset-0 bg-gradient-to-r from-amber-700 to-amber-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  </Button>
                </a>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-b from-white to-amber-50">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 text-sm font-medium bg-amber-100 text-amber-700 rounded-full mb-4">
              Benefits
            </span>
            <h2 className="text-3xl md:text-4xl font-serif text-gray-800 mb-6">
              Nourish Your Hair Naturally
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-amber-400 to-teal-400 mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <div className="grid grid-cols-1 gap-4">
                {benefits.slice(0, 6).map((benefit, index) => (
                  <motion.div 
                    key={index}
                    whileHover={{ x: 5 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                    className="flex items-start p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
                  >
                    <div className="bg-amber-50 p-2 rounded-lg mr-4">
                      {benefit.icon}
                    </div>
                    <p className="text-gray-700 font-medium">{benefit.text}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-6"
            >
              <div className="grid grid-cols-1 gap-4">
                {benefits.slice(6).map((benefit, index) => (
                  <motion.div 
                    key={index}
                    whileHover={{ x: 5 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                    className="flex items-start p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
                  >
                    <div className="bg-amber-50 p-2 rounded-lg mr-4">
                      {benefit.icon}
                    </div>
                    <p className="text-gray-700 font-medium">{benefit.text}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-amber-50 to-amber-100">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-serif text-gray-800 mb-6">
              Experience the Power of Ayurveda
            </h2>
            <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
              Visit us in-store to discover our full range of Ayurvedic products and personalized wellness consultations.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button 
                className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-6 text-lg rounded-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
              >
                <MapPin className="mr-2 h-5 w-5" />
                Find a Store
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </motion.div>
  );
};

export default Product;
