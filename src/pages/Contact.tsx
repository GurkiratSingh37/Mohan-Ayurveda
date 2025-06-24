
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Clock, Loader2, Facebook, Instagram, Linkedin, Mail } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
    phoneCode: '',
    services: [] as string[],
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    // Set mounted state
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  const serviceOptions = [
    "New Patient",
    "Existing Patient", 
    "Shanti Yoga Teacher",
    "Shanti Yoga Member",
    "Honey & Ginger Associate"
  ];

  const handleServiceChange = (service: string, checked: boolean) => {
    if (checked) {
      setFormData(prev => ({
        ...prev,
        services: [...prev.services, service]
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        services: prev.services.filter(s => s !== service)
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      const templateParams = {
        to_email: 'sgurkirat3788@gmail.com',
        from_name: `${formData.firstName} ${formData.lastName}`.trim(),
        from_email: formData.email,
        phone: formData.phoneCode,
        title: "Mohan Ayurveda Someone sent a query",
        services: formData.services.join(', '),
        message: formData.message,
        to_name: 'Support Team'
      };
      
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      
      toast({
        title: "Message Sent!",
        description: "Thank you for contacting us. We'll get back to you soon.",
      });
      
      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        message: '',
        phoneCode: '',
        services: [],
      });
    } catch (error) {
      console.error('Error sending email:', error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again later or contact us directly at sgurkirat3788@gmail.com",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Contact Form Section */}
      <motion.section 
        className="pt-24 pb-20 relative"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5 }}
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.6)), url('https://images.unsplash.com/photo-1545569341-9eb8b30979d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" />
        <div className="relative z-10">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <Card className="bg-white/95 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="mb-8">
                    <h1 className="text-3xl font-serif text-gray-800 mb-4">Greetings</h1>
                    <p className="text-gray-600 mb-6">
                      Feel free to post all your queries—we'll be happy to 
                      respond and will get back to you as soon as possible.
                    </p>
                    
                    {/* Social Links */}
                    <div className="flex space-x-4">
                      <Facebook className="h-5 w-5 text-gray-600 hover:text-blue-600 cursor-pointer" />
                      <Instagram className="h-5 w-5 text-gray-600 hover:text-pink-600 cursor-pointer" />
                      <Linkedin className="h-5 w-5 text-gray-600 hover:text-blue-700 cursor-pointer" />
                    </div>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name Fields */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm text-gray-600 mb-2">First Name</label>
                        <Input
                          value={formData.firstName}
                          onChange={(e) => setFormData(prev => ({ ...prev, firstName: e.target.value }))}
                          className="border-gray-300"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm text-gray-600 mb-2">Last Name</label>
                        <Input
                          value={formData.lastName}
                          onChange={(e) => setFormData(prev => ({ ...prev, lastName: e.target.value }))}
                          className="border-gray-300"
                          required
                        />
                      </div>
                    </div>

                    {/* Services */}
                    <div>
                      <label className="block text-sm text-gray-600 mb-3">Choose the correct option *</label>
                      <div className="space-y-2">
                        {serviceOptions.map((service) => (
                          <div key={service} className="flex items-center space-x-2">
                            <Checkbox
                              id={service}
                              checked={formData.services.includes(service)}
                              onCheckedChange={(checked) => handleServiceChange(service, checked as boolean)}
                            />
                            <label htmlFor={service} className="text-sm text-gray-700">{service}</label>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-sm text-gray-600 mb-2">Email *</label>
                      <Input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                        className="border-gray-300"
                        required
                      />
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-sm text-gray-600 mb-2">Message</label>
                      <Textarea
                        value={formData.message}
                        onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                        className="border-gray-300 min-h-[100px]"
                        placeholder="Your message here..."
                      />
                    </div>

                    {/* Phone Code */}
                    <div>
                      <label className="block text-sm text-gray-600 mb-2">Phone Code</label>
                      <Input
                        value={formData.phoneCode}
                        onChange={(e) => setFormData(prev => ({ ...prev, phoneCode: e.target.value }))}
                        className="border-gray-300"
                        placeholder="+1 (902) 000-0000"
                      />
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full bg-amber-600 hover:bg-amber-700 text-white py-3 rounded-none"
                    >
                      Send
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Visit Us Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-serif text-gray-800 mb-4">Visit Us</h2>
            <p className="text-gray-600">
              All sessions are <strong>APPOINTMENT ONLY!</strong><br/>
              Will be available for in-person consultations and therapies at the following locations:
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Hari Mohan Location */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
            >
              <Card className="h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-serif text-gray-800 mb-4">Hari Mohan</h3>
                  <div className="space-y-3 text-gray-600">
                    <div className="flex items-center space-x-2">
                      <MapPin className="h-4 w-4 text-amber-600" />
                      <span>Shanti Studios</span>
                    </div>
                    <p className="text-sm">
                      Bedford Studio - 620 Nine Mile Drive, Bedford, Nova Scotia B4A 1H9 (Main Office)
                    </p>
                    <p className="text-sm">
                      Dartmouth Studio - 114 Windmill Rd, Dartmouth, NS B2W 2S7
                    </p>
                    <p className="text-sm">
                      Halifax Studio - 5508 Spring Garden Rd, Halifax, NS B3J 1G8
                    </p>
                    <div className="flex items-center space-x-2 mt-4">
                      <Clock className="h-4 w-4 text-amber-600" />
                      <span className="text-sm">Mon - Fri: 6:30 am - 8:30 pm</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Radhika Mohan Location */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Card className="h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-serif text-gray-800 mb-4">Radhika Mohan</h3>
                  <div className="space-y-3 text-gray-600">
                    <div className="flex items-center space-x-2">
                      <MapPin className="h-4 w-4 text-amber-600" />
                      <span>Honey & Ginger</span>
                    </div>
                    <p className="text-sm">
                      Dartmouth Clinic - 262 Baker Dr, Dartmouth, NS B2W 6L4
                    </p>
                    <div className="flex items-center space-x-2 mt-4">
                      <Clock className="h-4 w-4 text-amber-600" />
                      <span className="text-sm">Mon - Fri: 10:30 am - 5:00 pm</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Map Placeholder */}
        <motion.div 
            className="h-64 w-full rounded-lg overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
          <iframe
            className="w-full h-full border-0"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2817.435293264863!2d-63.69098218445516!3d44.71792297909961!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4b5a1f88c9fc0b07%3A0x23e6edb8cbf6a8dc!2s620%20Nine%20Mile%20Dr%2C%20Bedford%2C%20NS%20B4A%204H6%2C%20Canada!5e0!3m2!1sen!2sin!4v1689999999999!5m2!1sen!2sin"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>

        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
