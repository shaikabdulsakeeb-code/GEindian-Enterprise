import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Leaf, Shield, Truck } from 'lucide-react';
import ProductCard from '../components/ui/ProductCard';
import ContactModal from '../components/modals/ContactModal';
import productsData from '../data/products.json';
import siteData from '../data/siteData.json';

const HeroSection = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <div className="relative min-h-[80vh] md:min-h-[90vh] flex items-center justify-center bg-slate-50 dark:bg-dark-900 pt-16 md:pt-20 overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-[-10%] left-[-10%] w-[60%] md:w-[40%] h-[30%] md:h-[40%] bg-brand-400/30 dark:bg-brand-600/20 rounded-full blur-[80px] md:blur-[120px] mix-blend-multiply animate-blob" />
      <div className="absolute top-[20%] right-[-10%] w-[60%] md:w-[40%] h-[30%] md:h-[40%] bg-blue-400/20 dark:bg-blue-600/20 rounded-full blur-[80px] md:blur-[120px] mix-blend-multiply animate-blob animation-delay-2000" />
      <div className="absolute bottom-[-20%] left-[20%] w-[70%] md:w-[50%] h-[30%] md:h-[50%] bg-green-300/30 dark:bg-brand-500/20 rounded-full blur-[80px] md:blur-[120px] mix-blend-multiply animate-blob animation-delay-4000" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-6 md:space-y-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-brand-200 dark:border-white/10 text-brand-700 dark:text-brand-300 font-medium text-sm mb-4"
          >
            <Leaf size={16} />
            Premium Agricultural Products
          </motion.div>
          
          <motion.h1 
            style={{ y: y1, opacity }}
            className="text-4xl md:text-7xl font-display font-bold text-slate-900 dark:text-white leading-tight md:leading-[1.1]"
          >
            Growing with Nature, <br />
            <span className="text-gradient">Delivering with Trust.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed"
          >
            Buy quality seeds, fertilizers, food powders, and tools directly from farmers. Eco-friendly, safe, and trusted worldwide.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
          >
            <Link 
              to="/products" 
              className="w-full sm:w-auto px-8 py-4 bg-brand-500 hover:bg-brand-600 text-white rounded-xl font-medium transition-all hover:shadow-lg hover:shadow-brand-500/30 flex items-center justify-center gap-2 group"
            >
              Explore Products
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              to="/about" 
              className="w-full sm:w-auto px-8 py-4 bg-white dark:bg-dark-800 hover:bg-slate-50 dark:hover:bg-dark-700 text-slate-900 dark:text-white border border-slate-200 dark:border-white/10 rounded-xl font-medium transition-all flex items-center justify-center"
            >
              Know More About Us
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

const FeaturesSection = () => {
  const features = [
    { icon: <Leaf size={24} />, title: "Organic Products", desc: "Eco-friendly & safe farming solutions." },
    { icon: <Truck size={24} />, title: "Fast Delivery", desc: "Quick shipping to your farm location." },
    { icon: <Shield size={24} />, title: "Best Prices & Quality", desc: "Affordable and trusted products." }
  ];

  return (
    <section className="py-20 bg-white dark:bg-dark-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto md:-mt-32 relative z-20">
          {features.map((f, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: i * 0.1 }}
              className="glass p-8 rounded-2xl text-center hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="w-14 h-14 mx-auto bg-brand-100 dark:bg-brand-900/40 text-brand-600 dark:text-brand-400 rounded-2xl flex items-center justify-center mb-6">
                {f.icon}
              </div>
              <h3 className="font-display font-semibold text-xl mb-3 text-slate-900 dark:text-white">{f.title}</h3>
              <p className="text-slate-600 dark:text-slate-400">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Home = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState('');

  const handleRequestSample = (productName) => {
    setSelectedProduct(productName);
    setModalOpen(true);
  };

  const featuredProducts = productsData.slice(0, 3); // Banana, Mango, Tomato powder approx

  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <FeaturesSection />
      
      {/* Featured Products */}
      <section className="py-16 md:py-24 bg-slate-50 dark:bg-dark-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-brand-600 dark:text-brand-400 font-medium tracking-wider uppercase text-sm mb-3">Top Rated</h2>
            <h3 className="font-display font-bold text-2xl md:text-5xl text-slate-900 dark:text-white">
              Popular Products
            </h3>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {featuredProducts.map(product => (
              <ProductCard 
                key={product.id} 
                product={product} 
                onRequestSample={handleRequestSample} 
              />
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link 
              to="/products"
              className="inline-flex items-center gap-2 text-brand-600 dark:text-brand-400 font-medium hover:text-brand-700 dark:hover:text-brand-300 transition-colors group"
            >
              Explore Full Catalog
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* About Section Summary */}
      <section className="py-16 md:py-24 bg-white dark:bg-dark-800">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto glass p-6 md:p-16 rounded-[2rem] md:rounded-[2.5rem] relative overflow-hidden text-center shadow-xl">
             <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-brand-400 to-green-300" />
            <h2 className="font-display font-bold text-2xl md:text-4xl text-slate-900 dark:text-white mb-6">About GE Enterprise</h2>
            <p className="text-base md:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl mx-auto mb-10">
              {siteData.description}
            </p>
            <Link 
              to="/about"
              className="inline-flex px-8 py-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-xl font-medium transition-transform hover:scale-105"
            >
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>

      <ContactModal 
        isOpen={modalOpen} 
        onClose={() => setModalOpen(false)} 
        productName={selectedProduct} 
      />
    </div>
  );
};

export default Home;
