import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search } from 'lucide-react';
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
    <div className="pt-8 pb-24 min-h-screen bg-slate-50 dark:bg-dark-900">
      <SEO 
        title="Our Products" 
        description="Browse our premium selection of agricultural powders, seeds, and farming tools. Quality-assured products directly from trusted farms." 
      />
      
      {/* Title & Search header */}
      <div className="bg-brand-50 dark:bg-brand-900/10 py-10 md:py-16 mb-10 md:mb-16 border-b border-brand-100 dark:border-white/5">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl md:text-5xl font-display font-bold text-slate-900 dark:text-white mb-4 md:mb-6"
            >
              Our Premium <span className="text-gradient">Products</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-base md:text-lg text-slate-600 dark:text-slate-300 mb-8 md:mb-10"
            >
              Fresh, Quality-Assured Agricultural Powders directly from trusted farms.
            </motion.p>

            {/* Search Bar */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="relative max-w-xl mx-auto"
            >
              <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none text-slate-400">
                <Search size={22} />
              </div>
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 md:pl-14 pr-6 py-3 md:py-4 rounded-full bg-white dark:bg-dark-800 border overflow-hidden border-slate-200 dark:border-white/10 shadow-lg shadow-slate-200/50 dark:shadow-none focus:outline-none focus:ring-2 focus:ring-brand-500/50 text-slate-900 dark:text-white text-base md:text-lg transition-all"
              />
            </motion.div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6">
        {filteredProducts.length === 0 ? (
          <div className="text-center py-20">
            <h3 className="text-2xl font-display text-slate-500 dark:text-slate-400">No products found matching "{searchTerm}"</h3>
            <button 
              onClick={() => setSearchTerm('')}
              className="mt-4 text-brand-600 hover:text-brand-700 font-medium"
            >
              Clear Search
            </button>
          </div>
        ) : (
          <motion.div 
            layout
            className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-6 sm:gap-x-6 sm:gap-y-10"
          >
            <AnimatePresence>
              {visibleProducts.map((product) => (
                <ProductCard 
                  key={product.id} 
                  product={product} 
                  onRequestSample={handleRequestSample} 
                />
              ))}
            </AnimatePresence>
          </motion.div>
        )}

        {filteredProducts.length > visibleCount && (
          <div className="flex justify-center mt-12">
            <button
              onClick={() => setVisibleCount(prev => prev + 6)}
              className="px-8 py-3 bg-brand-600 hover:bg-brand-700 text-white font-medium rounded-full shadow-lg hover:shadow-brand-500/30 transition-all duration-300 transform hover:-translate-y-1"
            >
              Load More Products
            </button>
          </div>
        )}
      </div>

      <ContactModal 
        isOpen={modalOpen} 
        onClose={() => setModalOpen(false)} 
        productName={selectedProduct} 
      />
    </div>
  );
};

export default Products;
