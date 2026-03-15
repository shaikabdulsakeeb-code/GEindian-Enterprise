import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const ProductCard = ({ product, onRequestSample }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative bg-white dark:bg-dark-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-slate-100 dark:border-white/5 transition-all duration-300 isolate"
    >
      {/* Abstract Background blob */}
      <div className="absolute -inset-4 bg-gradient-to-br from-brand-100/40 to-transparent dark:from-brand-900/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity -z-10" />

      {/* Image Container */}
      <div className="relative aspect-[4/3] overflow-hidden bg-slate-100 dark:bg-dark-900">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
          decoding="async"
        />
        <div className="absolute top-3 left-3 bg-white/90 dark:bg-dark-900/90 backdrop-blur px-3 py-1 rounded-full text-xs font-medium text-slate-800 dark:text-slate-200">
          {product.category}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-display font-semibold text-xl text-slate-800 dark:text-white mb-2 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
          {product.name}
        </h3>
        <p className="text-slate-600 dark:text-slate-400 text-sm line-clamp-2 mb-6">
          {product.description}
        </p>

        <button 
          onClick={() => onRequestSample(product.name)}
          className="w-full py-2.5 px-4 rounded-lg bg-slate-50 hover:bg-brand-50 border border-slate-200 hover:border-brand-200 dark:bg-dark-900 dark:hover:bg-brand-900/30 dark:border-white/10 text-slate-700 hover:text-brand-600 dark:text-slate-300 dark:hover:text-brand-400 font-medium text-sm transition-all flex justify-between items-center group/btn"
        >
          Request Sample
          <ArrowRight size={16} className="text-slate-400 group-hover/btn:text-brand-500 group-hover/btn:translate-x-1 transition-all" />
        </button>
      </div>
    </motion.div>
  );
};

export default ProductCard;
