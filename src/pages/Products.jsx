import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProductCard from '../components/ui/ProductCard';
import ContactModal from '../components/modals/ContactModal';
import productsData from '../data/products.json';
import SEO from '../components/common/SEO';

const Products = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState('');
  const [visibleCount, setVisibleCount] = useState(6);

  useEffect(() => {
    setVisibleCount(6);
  }, [searchTerm]);

  const filteredProducts = productsData.filter(product => 
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    product.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const visibleProducts = filteredProducts.slice(0, visibleCount);

  const handleRequestSample = (productName) => {
    setSelectedProduct(productName);
    setModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-cream dark:bg-dark-900 pb-24">
      <SEO 
        title="Our Collection" 
        description="Browse our premium selection of agricultural powders, seeds, and farming tools. Quality-assured products directly from trusted farms." 
        keywords="premium agricultural products catalog, organic farming seeds, top quality fertilizers India, buy agricultural powders online, export quality farming supplies"
      />
      
      {/* Editorial Deep Ink Header */}
      <section className="bg-ink text-white pt-24 pb-32 px-8 md:px-16 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
           <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full transform translate-x-1/4 -translate-y-1/4">
             <circle cx="100" cy="100" r="90" fill="none" stroke="#eab308" strokeWidth="2" strokeDasharray="4 8"/>
             <circle cx="100" cy="100" r="60" fill="none" stroke="#eab308" strokeWidth="1" opacity="0.5"/>
             <circle cx="100" cy="100" r="30" fill="#eab308" opacity="0.2"/>
           </svg>
        </div>

        <div className="container mx-auto max-w-5xl relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="flex justify-center items-center gap-3 text-[11px] font-medium tracking-[0.16em] uppercase text-sunflower mb-6"
          >
            <div className="w-6 h-[1px] bg-sunflower"></div> The Collection <div className="w-6 h-[1px] bg-sunflower"></div>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.6 }}
            className="font-serif text-[clamp(40px,5vw,64px)] font-light leading-[1.05] tracking-[-0.02em] mb-8"
          >
            Finest <em>Harvest</em><br />for Global Export.
          </motion.h1>

          {/* Search Bar */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }}
            className="relative max-w-xl mx-auto mt-12"
          >
            <div className="relative">
              <div className="absolute inset-y-0 left-5 flex items-center pointer-events-none text-white/40">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
              </div>
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-14 pr-6 py-4 bg-white/10 backdrop-blur-sm border border-white/20 focus:border-sunflower focus:bg-white/15 outline-none text-white placeholder-white/40 text-[15px] font-light tracking-wide transition-all rounded-sm"
              />
            </div>
          </motion.div>
        </div>
      </section>

      <section className="container mx-auto px-8 md:px-16 max-w-7xl -mt-16 relative z-20">
        {filteredProducts.length === 0 ? (
          <div className="bg-white dark:bg-dark-800 p-16 text-center shadow-2xl rounded-sm">
            <h3 className="font-serif text-3xl text-ink/50 dark:text-cream/50 mb-4">Nothing found for "{searchTerm}"</h3>
            <button 
              onClick={() => setSearchTerm('')}
              className="text-[12px] font-medium tracking-[0.08em] uppercase text-sunflower border-b border-sunflower/30 pb-1 hover:border-sunflower transition-all"
            >
              Reset Search
            </button>
          </div>
        ) : (
          <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
            <AnimatePresence>
              {visibleProducts.map((product, index) => (
                <ProductCard 
                  key={product.id} 
                  product={product} 
                  index={index}
                  onRequestSample={handleRequestSample} 
                />
              ))}
            </AnimatePresence>
          </motion.div>
        )}

        {filteredProducts.length > visibleCount && (
          <div className="flex justify-center mt-24">
            <button
              onClick={() => setVisibleCount(prev => prev + 6)}
              className="px-10 py-4 bg-ink text-sunflower hover:bg-sunflower hover:text-ink dark:bg-white dark:text-ink font-medium tracking-[0.1em] uppercase text-[12px] rounded-sm transition-all duration-300 shadow-xl"
            >
              Load More
            </button>
          </div>
        )}
      </section>

      <ContactModal 
        isOpen={modalOpen} 
        onClose={() => setModalOpen(false)} 
        productName={selectedProduct} 
      />
    </div>
  );
};

export default Products;
