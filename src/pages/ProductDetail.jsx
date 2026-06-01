import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ProductCard from '../components/ui/ProductCard';
import ContactModal from '../components/modals/ContactModal';
import productsData from '../data/products.json';
import SEO from '../components/common/SEO';

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const stagger = {
  animate: { transition: { staggerChildren: 0.1 } }
};

const ProductDetail = () => {
  const { productId } = useParams();
  const [modalOpen, setModalOpen] = useState(false);

  const product = productsData.find(p => p.id === productId);

  // Get related products (same category, exclude current)
  const relatedProducts = product
    ? productsData.filter(p => p.category === product.category && p.id !== product.id).slice(0, 3)
    : [];

  const handleRequestSample = () => {
    setModalOpen(true);
  };

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-cream dark:bg-dark-900 pt-20 px-4">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center">
          <h1 className="font-serif text-5xl text-ink dark:text-white mb-4">Product Not Found</h1>
          <Link to="/products" className="text-[12px] font-medium tracking-[0.08em] uppercase text-sunflower border-b border-sunflower/30 pb-1 hover:border-sunflower transition-all">
            Back to Collection
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-cream dark:bg-dark-900 pb-24">
      <SEO 
        title={product.name} 
        description={product.description} 
        keywords={`${product.name}, ${product.category}, premium agriculture export, buy ${product.name.toLowerCase()}, Indian farming products`}
      />

      {/* Hero Section */}
      <section className="bg-white dark:bg-dark-800 pt-24 pb-24 md:pt-32 md:pb-32 px-8 md:px-16 border-b border-ink/5 dark:border-white/5">
        <div className="container mx-auto max-w-7xl">
          
          {/* Breadcrumbs */}
          <motion.nav 
            initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}
            className="flex items-center gap-3 text-[10px] font-medium tracking-[0.14em] uppercase text-ink/40 dark:text-cream/40 mb-12"
          >
            <Link to="/" className="hover:text-sunflower transition-colors">Home</Link>
            <span className="w-1 h-1 bg-sunflower rounded-full"></span>
            <Link to="/products" className="hover:text-sunflower transition-colors">Collection</Link>
            <span className="w-1 h-1 bg-sunflower rounded-full"></span>
            <span className="text-ink dark:text-white">{product.name}</span>
          </motion.nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-start">
            {/* Image display */}
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="relative">
              <div className="aspect-square bg-cream-deep dark:bg-dark-900 rounded-sm overflow-hidden flex items-center justify-center p-8 relative">
                <div className="absolute inset-0 flex items-center justify-center opacity-30 pointer-events-none">
                  <svg viewBox="0 0 200 200" className="w-[80%] h-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="100" cy="100" r="80" fill="none" stroke="#eab308" strokeWidth="1" strokeDasharray="4 4"/>
                  </svg>
                </div>
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover relative z-10 mix-blend-multiply dark:mix-blend-normal transform transition-transform duration-700 hover:scale-105"
                />
                <span className="absolute top-6 left-6 bg-ink text-white text-[10px] font-medium tracking-[0.1em] uppercase px-4 py-2 rounded-sm z-20">
                  {product.category}
                </span>
              </div>
            </motion.div>

            {/* Product Info */}
            <motion.div {...fadeUp} className="space-y-8 md:space-y-12">
              <div>
                <motion.h1 
                  initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                  className="font-serif text-[clamp(40px,5vw,56px)] font-light leading-[1.1] text-ink dark:text-white mb-6"
                >
                  {product.name}
                </motion.h1>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
                  className="text-[16px] font-light leading-[1.8] text-ink/70 dark:text-cream/70"
                >
                  {product.longDescription}
                </motion.p>
              </div>

              {/* Action Buttons */}
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="flex gap-4">
                <button 
                  onClick={() => setModalOpen(true)}
                  className="px-10 py-4 bg-ink text-sunflower hover:bg-sunflower hover:text-ink dark:bg-cream dark:text-ink font-medium tracking-[0.1em] uppercase text-[12px] rounded-sm transition-all duration-300 shadow-xl flex-1 text-center"
                >
                  Request Sample
                </button>
                <Link 
                  to="/contact"
                  className="px-10 py-4 border border-ink/20 dark:border-white/20 text-ink dark:text-white hover:border-sunflower hover:text-sunflower font-medium tracking-[0.1em] uppercase text-[12px] rounded-sm transition-all duration-300 flex-1 text-center flex justify-center items-center"
                >
                  Bulk Orders
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 px-8 md:px-16 bg-cream dark:bg-dark-900">
        <div className="container mx-auto max-w-7xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="font-serif text-[32px] md:text-[40px] text-ink dark:text-white">The <em>Advantages</em></h2>
            <div className="w-12 h-[1px] bg-sunflower mx-auto mt-6"></div>
          </motion.div>

          <motion.div variants={stagger} initial="initial" whileInView="animate" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {product.benefits.map((benefit, i) => (
              <motion.div key={i} variants={fadeUp} className="bg-white dark:bg-dark-800 p-10 rounded-sm border border-ink/5 dark:border-white/5 shadow-sm hover:-translate-y-1 transition-transform duration-300 group">
                <div className="w-12 h-12 rounded-full border border-sunflower/30 flex items-center justify-center text-sunflower mb-6 group-hover:bg-sunflower group-hover:text-ink transition-colors">
                  <span className="text-xl">☘</span>
                </div>
                <p className="text-[15px] font-light leading-[1.6] text-ink/80 dark:text-cream/80">{benefit}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Specifications */}
      <section className="py-24 px-8 md:px-16 bg-white dark:bg-dark-800">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24">
            
            {/* Usage */}
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h3 className="font-serif text-[28px] text-ink dark:text-white mb-8">Recommended <em>Usage</em></h3>
              <div className="flex flex-wrap gap-3">
                {product.usage.map((use, i) => (
                  <span key={i} className="px-6 py-3 bg-cream dark:bg-dark-900 border border-ink/10 dark:border-white/10 text-[13px] tracking-[0.05em] text-ink/70 dark:text-cream/70 rounded-sm">
                    {use}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Details */}
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h3 className="font-serif text-[28px] text-ink dark:text-white mb-8">Product <em>Details</em></h3>
              <div className="bg-cream dark:bg-dark-900 p-8 rounded-sm border border-ink/10 dark:border-white/10">
                {Object.entries(product.specifications).map(([key, value], i) => (
                  <div key={key} className={`flex flex-col sm:flex-row sm:items-center justify-between py-4 ${i !== 0 ? 'border-t border-ink/10 dark:border-white/10' : ''}`}>
                    <span className="text-[11px] font-medium tracking-[0.14em] uppercase text-ink/50 dark:text-cream/50 mb-1 sm:mb-0">{key}</span>
                    <span className="text-[14px] text-ink dark:text-white">{value}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Luxurious CTA */}
      <section className="py-24 px-8 md:px-16">
        <div className="container mx-auto max-w-5xl">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-ink text-white p-12 md:p-24 rounded-sm text-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at center, #eab308 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
            <h2 className="font-serif text-[32px] md:text-[48px] font-light leading-[1.1] mb-6 relative z-10">
              Experience the <em>Purity</em>.
            </h2>
            <p className="text-[15px] font-light leading-[1.8] text-white/70 max-w-xl mx-auto mb-10 relative z-10">
              Get a free sample delivered to your doorstep. Experience the premium quality of our {product.name} before placing a bulk order.
            </p>
            <button onClick={() => setModalOpen(true)} className="px-10 py-4 bg-sunflower text-ink hover:bg-white transition-colors font-medium tracking-[0.1em] uppercase text-[12px] rounded-sm relative z-10 shadow-xl">
              Request Your Sample
            </button>
          </motion.div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="py-24 px-8 md:px-16 bg-cream-deep dark:bg-dark-800 border-t border-ink/5 dark:border-white/5">
          <div className="container mx-auto max-w-7xl">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <div>
                <div className="flex items-center gap-3 text-[11px] font-medium tracking-[0.16em] uppercase text-brand-600 mb-4">
                  <div className="w-6 h-[1px] bg-brand-600"></div> Discover More
                </div>
                <h3 className="font-serif text-[36px] text-ink dark:text-white">Related <em>Products</em></h3>
              </div>
              <Link to="/products" className="text-[12px] font-medium tracking-[0.08em] uppercase text-sunflower border-b border-sunflower/30 pb-1 hover:border-sunflower transition-all">
                View Collection
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedProducts.map((rp, index) => (
                <ProductCard 
                  key={rp.id} 
                  product={rp} 
                  index={index}
                  onRequestSample={() => {
                    setModalOpen(true);
                  }}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      <ContactModal isOpen={modalOpen} onClose={() => setModalOpen(false)} productName={product.name} />
    </div>
  );
};

export default ProductDetail;
