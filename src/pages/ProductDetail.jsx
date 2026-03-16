import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, ChevronRight, Sparkles, CheckCircle2, Beaker, ClipboardList, Leaf } from 'lucide-react';
import ProductCard from '../components/ui/ProductCard';
import ContactModal from '../components/modals/ContactModal';
import productsData from '../data/products.json';

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const stagger = {
  animate: { transition: { staggerChildren: 0.08 } }
};

const ProductDetail = () => {
  const { productId } = useParams();
  const [modalOpen, setModalOpen] = useState(false);

  const product = productsData.find(p => p.id === productId);

  // Get related products (same category, exclude current)
  const relatedProducts = product
    ? productsData.filter(p => p.category === product.category && p.id !== product.id).slice(0, 3)
    : [];

  const handleRequestSample = (productName) => {
    setModalOpen(true);
  };

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 dark:bg-dark-900 pt-20 px-4">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center"
        >
          <div className="w-24 h-24 mx-auto mb-6 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center">
            <span className="text-4xl">🔍</span>
          </div>
          <h1 className="text-3xl font-display font-bold text-slate-900 dark:text-white mb-4">Product Not Found</h1>
          <p className="text-slate-500 dark:text-slate-400 mb-8 max-w-md mx-auto">
            The product you're looking for doesn't exist or may have been removed.
          </p>
          <Link 
            to="/products"
            className="inline-flex items-center gap-2 px-6 py-3 bg-brand-500 hover:bg-brand-600 text-white rounded-xl font-medium transition-all hover:shadow-lg hover:shadow-brand-500/30"
          >
            <ArrowLeft size={18} />
            Back to Products
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-dark-900">

      {/* Hero Section */}
      <section className="relative bg-white dark:bg-dark-800 border-b border-slate-100 dark:border-white/5">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[60%] bg-brand-400/10 dark:bg-brand-600/10 rounded-full blur-[100px]" />
          <div className="absolute bottom-[-20%] left-[-10%] w-[40%] h-[50%] bg-green-300/10 dark:bg-green-600/10 rounded-full blur-[100px]" />
        </div>

        <div className="container mx-auto px-4 md:px-6 pt-8 pb-12 md:pt-12 md:pb-16 relative z-10">
          {/* Breadcrumbs */}
          <motion.nav 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 mb-8 md:mb-12"
          >
            <Link to="/" className="hover:text-brand-600 dark:hover:text-brand-400 transition-colors">Home</Link>
            <ChevronRight size={14} />
            <Link to="/products" className="hover:text-brand-600 dark:hover:text-brand-400 transition-colors">Products</Link>
            <ChevronRight size={14} />
            <span className="text-slate-900 dark:text-white font-medium">{product.name}</span>
          </motion.nav>

          {/* Product Hero Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="relative group"
            >
              <div className="absolute -inset-3 bg-gradient-to-br from-brand-200/50 to-green-200/50 dark:from-brand-800/30 dark:to-green-800/30 rounded-[2rem] blur-xl opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative aspect-square rounded-2xl md:rounded-3xl overflow-hidden bg-white dark:bg-dark-900 shadow-2xl shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-white/5">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 md:top-6 md:left-6">
                  <span className="px-4 py-1.5 bg-white/90 dark:bg-dark-900/90 backdrop-blur-sm rounded-full text-sm font-medium text-brand-700 dark:text-brand-300 border border-brand-100 dark:border-brand-800/50">
                    {product.category}
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Info */}
            <motion.div {...fadeUp} className="space-y-6 md:space-y-8">
              <div>
                <motion.h1 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-3xl md:text-5xl font-display font-bold text-slate-900 dark:text-white leading-tight mb-4"
                >
                  {product.name}
                </motion.h1>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="text-base md:text-lg text-slate-600 dark:text-slate-300 leading-relaxed"
                >
                  {product.longDescription}
                </motion.p>
              </div>

              {/* Quick Benefits Preview */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="space-y-3"
              >
                {product.benefits.slice(0, 3).map((benefit, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 size={20} className="text-brand-500 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">{benefit}</span>
                  </div>
                ))}
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4 pt-2"
              >
                <button 
                  onClick={() => setModalOpen(true)}
                  className="px-8 py-4 bg-brand-500 hover:bg-brand-600 text-white rounded-xl font-medium transition-all hover:shadow-lg hover:shadow-brand-500/30 flex items-center justify-center gap-2 group text-base"
                >
                  <Sparkles size={20} />
                  Request Free Sample
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
                <Link 
                  to="/contact"
                  className="px-8 py-4 bg-white dark:bg-dark-900 hover:bg-slate-50 dark:hover:bg-dark-700 text-slate-900 dark:text-white border border-slate-200 dark:border-white/10 rounded-xl font-medium transition-all flex items-center justify-center text-base"
                >
                  Contact for Bulk Orders
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24 bg-slate-50 dark:bg-dark-900">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-50 dark:bg-brand-900/20 text-brand-700 dark:text-brand-300 font-medium text-sm mb-4">
              <Leaf size={16} />
              Why Choose This Product
            </div>
            <h2 className="text-2xl md:text-4xl font-display font-bold text-slate-900 dark:text-white">
              Key Benefits
            </h2>
          </motion.div>

          <motion.div 
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto"
          >
            {product.benefits.map((benefit, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="group glass p-6 rounded-2xl hover:-translate-y-1 transition-all duration-300 border border-slate-100 dark:border-white/5"
              >
                <div className="w-10 h-10 bg-brand-100 dark:bg-brand-900/40 text-brand-600 dark:text-brand-400 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <CheckCircle2 size={20} />
                </div>
                <p className="text-slate-700 dark:text-slate-300 font-medium">{benefit}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Usage & Specifications */}
      <section className="py-16 md:py-24 bg-white dark:bg-dark-800">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 max-w-5xl mx-auto">
            
            {/* Usage Suggestions */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-xl flex items-center justify-center">
                  <Beaker size={20} />
                </div>
                <h3 className="text-xl md:text-2xl font-display font-bold text-slate-900 dark:text-white">How to Use</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {product.usage.map((use, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="px-4 py-2.5 bg-slate-50 dark:bg-dark-900 border border-slate-200 dark:border-white/10 rounded-full text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-brand-50 hover:border-brand-200 hover:text-brand-700 dark:hover:bg-brand-900/20 dark:hover:border-brand-700 dark:hover:text-brand-300 transition-all cursor-default"
                  >
                    {use}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* Specifications */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 rounded-xl flex items-center justify-center">
                  <ClipboardList size={20} />
                </div>
                <h3 className="text-xl md:text-2xl font-display font-bold text-slate-900 dark:text-white">Specifications</h3>
              </div>
              <div className="bg-slate-50 dark:bg-dark-900 rounded-2xl overflow-hidden border border-slate-100 dark:border-white/5">
                {Object.entries(product.specifications).map(([key, value], i) => (
                  <div
                    key={key}
                    className={`flex items-center justify-between px-6 py-4 ${
                      i !== Object.entries(product.specifications).length - 1
                        ? 'border-b border-slate-100 dark:border-white/5'
                        : ''
                    }`}
                  >
                    <span className="text-slate-500 dark:text-slate-400 text-sm font-medium uppercase tracking-wide">{key}</span>
                    <span className="text-slate-900 dark:text-white font-medium text-sm">{value}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Big CTA Banner */}
      <section className="py-16 md:py-20 bg-slate-50 dark:bg-dark-900">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center glass p-8 md:p-16 rounded-[2rem] relative overflow-hidden shadow-xl"
          >
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-brand-400 via-green-400 to-brand-500" />
            <Sparkles size={40} className="mx-auto text-brand-500 mb-4" />
            <h2 className="text-2xl md:text-4xl font-display font-bold text-slate-900 dark:text-white mb-4">
              Interested in {product.name}?
            </h2>
            <p className="text-slate-600 dark:text-slate-300 mb-8 max-w-xl mx-auto">
              Get a free sample delivered to your doorstep. Experience the premium quality before placing a bulk order.
            </p>
            <button
              onClick={() => setModalOpen(true)}
              className="px-10 py-4 bg-brand-500 hover:bg-brand-600 text-white rounded-xl font-medium text-lg transition-all hover:shadow-xl hover:shadow-brand-500/30 hover:-translate-y-1 inline-flex items-center gap-3 group"
            >
              Request Free Sample
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="py-16 md:py-24 bg-white dark:bg-dark-800 border-t border-slate-100 dark:border-white/5">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-brand-600 dark:text-brand-400 font-medium tracking-wider uppercase text-sm mb-3">You May Also Like</h2>
              <h3 className="font-display font-bold text-2xl md:text-4xl text-slate-900 dark:text-white">
                Related Products
              </h3>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
              {relatedProducts.map(rp => (
                <ProductCard 
                  key={rp.id} 
                  product={rp} 
                  onRequestSample={handleRequestSample}
                />
              ))}
            </div>

            <div className="mt-12 text-center">
              <Link 
                to="/products"
                className="inline-flex items-center gap-2 text-brand-600 dark:text-brand-400 font-medium hover:text-brand-700 dark:hover:text-brand-300 transition-colors group"
              >
                View All Products
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </section>
      )}

      <ContactModal 
        isOpen={modalOpen} 
        onClose={() => setModalOpen(false)} 
        productName={product.name} 
      />
    </div>
  );
};

export default ProductDetail;
