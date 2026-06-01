import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Leaf, Shield, Truck } from 'lucide-react';
import ProductCard from '../components/ui/ProductCard';
import ContactModal from '../components/modals/ContactModal';
import productsData from '../data/products.json';
import siteData from '../data/siteData.json';
import SEO from '../components/common/SEO';

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] grid grid-cols-1 md:grid-cols-2 overflow-hidden" style={{ paddingTop: '0' }}>
      
      {/* Decorative mandala bg left side */}
      <svg className="absolute top-1/2 -left-[10%] transform -translate-y-1/2 w-[500px] h-[500px] opacity-[0.03] pointer-events-none z-0" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <g transform="translate(100,100)">
          <circle r="90" fill="none" stroke="#eab308" strokeWidth="1"/>
          <circle r="70" fill="none" stroke="#eab308" strokeWidth="0.5"/>
          <circle r="50" fill="none" stroke="#eab308" strokeWidth="1"/>
          <g id="petals">
            <ellipse rx="6" ry="40" cy="-50" fill="#eab308" opacity="0.6"/>
            <ellipse rx="6" ry="40" cy="-50" fill="#eab308" opacity="0.6" transform="rotate(45)"/>
            <ellipse rx="6" ry="40" cy="-50" fill="#eab308" opacity="0.6" transform="rotate(90)"/>
            <ellipse rx="6" ry="40" cy="-50" fill="#eab308" opacity="0.6" transform="rotate(135)"/>
            <ellipse rx="6" ry="40" cy="-50" fill="#eab308" opacity="0.6" transform="rotate(180)"/>
            <ellipse rx="6" ry="40" cy="-50" fill="#eab308" opacity="0.6" transform="rotate(225)"/>
            <ellipse rx="6" ry="40" cy="-50" fill="#eab308" opacity="0.6" transform="rotate(270)"/>
            <ellipse rx="6" ry="40" cy="-50" fill="#eab308" opacity="0.6" transform="rotate(315)"/>
          </g>
        </g>
      </svg>

      {/* Hero Left */}
      <div className="flex flex-col justify-center px-8 py-16 md:px-16 relative z-10 bg-cream dark:bg-dark-900">
        <motion.div 
          initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}
          className="flex items-center gap-3 text-[11px] font-medium tracking-[0.16em] uppercase text-sunflower mb-8"
        >
          <div className="w-8 h-[1px] bg-sunflower"></div>
          Est. 2020 · Premium Agricultural Products
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
          className="font-serif text-[clamp(44px,5vw,76px)] font-light leading-[1.05] tracking-[-0.02em] text-ink dark:text-cream-deep mb-8"
        >
          Growing with <em>Nature</em>,<br />
          Delivering with <strong>Trust.</strong>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}
          className="text-base font-light leading-relaxed text-ink/60 dark:text-cream-deep/60 max-w-[420px] mb-12"
        >
          Buy quality seeds, fertilizers, food powders, and tools directly from farmers. Eco-friendly, safe, and trusted worldwide.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.35 }}
          className="flex items-center gap-6 flex-wrap"
        >
          <Link to="/products" className="bg-sunflower hover:bg-ink hover:text-white dark:hover:bg-cream dark:hover:text-ink text-white px-9 py-4 rounded-sm font-sans text-[13px] font-medium tracking-[0.08em] uppercase transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-sunflower/20">
            Explore Products
          </Link>
          <Link to="/about" className="text-ink dark:text-cream text-[13px] font-normal tracking-[0.06em] flex items-center gap-2 border-b border-ink/20 dark:border-cream/20 pb-0.5 hover:gap-3 hover:text-sunflower hover:border-sunflower transition-all duration-300">
            Our Story <ArrowRight size={14}/>
          </Link>
        </motion.div>
      </div>

      {/* Hero Right */}
      <div className="relative overflow-hidden bg-ink min-h-[50vh]">
        <div className="grid grid-cols-2 grid-rows-2 h-full gap-[3px]">
          <div className="row-span-2 overflow-hidden relative group">
            <img 
              src="https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=600&q=60" 
              alt="Organic Farming" 
              fetchpriority="high"
              className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent"></div>
            <span className="absolute bottom-4 left-4 text-[10px] font-medium tracking-[0.12em] uppercase text-white/80">Organic Farming</span>
          </div>
          <div className="overflow-hidden relative group">
            <img 
              src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=400&q=60" 
              alt="Seeds & Tools" 
              fetchpriority="high"
              className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent"></div>
            <span className="absolute bottom-4 left-4 text-[10px] font-medium tracking-[0.12em] uppercase text-white/80">Seeds & Plants</span>
          </div>
          <div className="overflow-hidden relative group">
            <img 
              src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=400&q=60" 
              alt="Fresh Produce" 
              fetchpriority="high"
              className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent"></div>
            <span className="absolute bottom-4 left-4 text-[10px] font-medium tracking-[0.12em] uppercase text-white/80">Fresh Produce</span>
          </div>
        </div>
        <div className="absolute bottom-8 left-[-10px] bg-sunflower-dark text-white px-5 py-3.5 rounded-sm text-[11px] font-medium tracking-[0.08em] uppercase z-20 animate-slideInLeft shadow-xl">
          ✦ Premium Quality Assured
        </div>
      </div>

    </section>
  );
};

const FeaturesSection = () => {
  const features = [
    { icon: "☘", title: "Organic Products", desc: "Eco-friendly & safe farming solutions." },
    { icon: "🚚", title: "Fast Delivery", desc: "Quick shipping to your farm location." },
    { icon: "🛡", title: "Best Prices & Quality", desc: "Affordable and trusted products." }
  ];

  return (
    <section className="bg-white dark:bg-dark-800">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center px-8 py-24 md:px-16 max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
          className="relative aspect-[4/5] overflow-hidden rounded-sm"
        >
          <img 
            src="https://images.unsplash.com/photo-1500595046743-cd271d694d30?auto=format&fit=crop&w=600&q=60" 
            alt="Agricultural fields with lush green crops" 
            loading="lazy"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent"></div>
          <div className="absolute -bottom-5 -right-5 w-[140px] h-[140px] bg-sunflower text-white flex flex-col items-center justify-center font-serif">
            <span className="text-[48px] font-bold leading-none">4+</span>
            <span className="text-[11px] tracking-[0.1em] uppercase opacity-85 mt-1 text-center leading-tight">Years of<br/>Excellence</span>
          </div>
        </motion.div>

        <div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex items-center gap-3 text-[11px] font-medium tracking-[0.16em] uppercase text-brand-600 mb-5">
            <div className="w-6 h-[1px] bg-brand-600"></div> Our Features
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="font-serif text-[clamp(32px,4vw,48px)] font-light leading-[1.1] tracking-[-0.02em] text-ink dark:text-white mb-4">
            Rooted in Nature,<br /><em>Built for Farmers</em>
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="text-base font-light leading-[1.7] text-ink/60 dark:text-cream/60 max-w-[480px] mb-10">
            GE Enterprise was born from a deep love for quality agriculture. Every product we provide is aimed to enhance your farming experience — safe, natural, and highly effective.
          </motion.p>
          
          <div className="flex flex-col gap-6">
            {features.map((f, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 * i }}
                className="flex gap-4 items-start pb-6 border-b border-ink/10 dark:border-cream/10 last:border-0 last:pb-0"
              >
                <div className="w-11 h-11 min-w-[44px] bg-brand-50 dark:bg-dark-900 rounded-sm flex items-center justify-center text-xl text-brand-600 border border-brand-100 dark:border-white/5">
                  {f.icon}
                </div>
                <div>
                  <div className="text-[15px] font-medium mb-1 text-ink dark:text-white">{f.title}</div>
                  <div className="text-[14px] font-light leading-[1.6] text-ink/60 dark:text-cream/60">{f.desc}</div>
                </div>
              </motion.div>
            ))}
          </div>
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

  const featuredProducts = productsData.slice(0, 3);

  return (
    <div className="flex flex-col min-h-screen">
      <SEO 
        title="Home" 
        description="Welcome to GEindian - Your premier destination for high-quality agricultural products, seeds, and expert farming solutions." 
      />
      <HeroSection />

      {/* Marquee */}
      <div className="bg-sunflower text-ink px-0 py-3.5 overflow-hidden whitespace-nowrap relative border-y border-sunflower-dark/20">
        <div className="inline-flex gap-0 animate-marquee">
          {[...Array(12)].map((_, i) => (
            <span key={i} className="inline-flex items-center gap-4 text-[12px] font-medium tracking-[0.12em] uppercase px-10">
              {['Organic Farming', 'Premium Seeds', 'Eco-friendly', 'Trusted Quality'][i % 4]}
              <span className="w-1 h-1 rounded-full bg-ink/40"></span>
            </span>
          ))}
        </div>
      </div>

      <FeaturesSection />
      
      {/* Featured Products */}
      <section className="py-24 bg-cream dark:bg-dark-900">
        <div className="px-8 md:px-16 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-6 mb-14">
            <div>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex items-center gap-3 text-[11px] font-medium tracking-[0.16em] uppercase text-sunflower mb-5">
                <div className="w-6 h-[1px] bg-sunflower"></div> Our Collection
              </motion.div>
              <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="font-serif text-[clamp(32px,4vw,48px)] font-light leading-[1.1] tracking-[-0.02em] text-ink dark:text-white">
                Handpicked <em>Products</em>
              </motion.h2>
            </div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
              <Link to="/products" className="text-ink dark:text-cream text-[13px] font-normal tracking-[0.06em] flex items-center gap-2 border-b border-ink/20 dark:border-cream/20 pb-0.5 hover:gap-3 hover:text-brand-600 hover:border-brand-600 transition-all duration-300">
                View All Collection <ArrowRight size={14}/>
              </Link>
            </motion.div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product, index) => (
              <ProductCard 
                key={product.id} 
                product={product} 
                onRequestSample={handleRequestSample} 
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* About Section Summary */}
      <section className="py-24 bg-ink text-white">
        <div className="px-8 md:px-16 max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex justify-center items-center gap-3 text-[11px] font-medium tracking-[0.16em] uppercase text-sunflower mb-6">
            <div className="w-6 h-[1px] bg-sunflower"></div> Who We Are <div className="w-6 h-[1px] bg-sunflower"></div>
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="font-serif text-[clamp(32px,4vw,48px)] font-light leading-[1.1] tracking-[-0.02em] mb-8">
            About <em>GE Enterprise</em>
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="text-[15px] font-light leading-[1.7] text-white/70 max-w-2xl mx-auto mb-10">
            {siteData.description}
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
            <Link 
              to="/about"
              className="inline-flex items-center justify-center bg-transparent border border-sunflower/50 text-sunflower hover:bg-sunflower hover:text-ink px-9 py-4 rounded-sm font-sans text-[13px] font-medium tracking-[0.08em] uppercase transition-all duration-300"
            >
              Learn More About Us
            </Link>
          </motion.div>
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
