import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const ProductCard = ({ product, onRequestSample, index = 0 }) => {
  const isFeatured = index === 0;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      className={`group relative bg-white dark:bg-dark-800 rounded-sm overflow-hidden transition-all duration-350 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-ink/10 ${isFeatured ? 'md:col-span-2' : ''}`}
    >
      <Link to={`/products/${product.id}`} className="block relative">
        <div className={`relative ${isFeatured ? 'aspect-[16/7]' : 'aspect-[4/3]'} bg-cream-deep dark:bg-dark-900 overflow-hidden flex items-center justify-center`}>
          
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-cream to-cream-deep dark:from-dark-800 dark:to-dark-900 z-0">
          </div>
          
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105 z-10 mix-blend-multiply dark:mix-blend-normal"
            loading="lazy"
          />

          {product.tag && (
            <span className={`absolute top-4 left-4 ${product.tag === 'Best Seller' ? 'bg-sunflower text-ink' : 'bg-brand-600 text-white'} text-[10px] font-semibold tracking-[0.1em] uppercase px-3 py-1.5 rounded-sm z-20 shadow-lg`}>
              {product.tag}
            </span>
          )}
        </div>

        <div className={`p-6 bg-white dark:bg-dark-800 relative z-20 ${isFeatured ? 'flex gap-8 items-end flex-wrap' : ''}`}>
          <div className={isFeatured ? 'flex-1 min-w-[240px]' : ''}>
            <div className="text-[10px] font-medium tracking-[0.14em] uppercase text-sunflower mb-2">
              {product.category}
            </div>
            <h3 className="font-serif text-[22px] font-semibold text-ink dark:text-white mb-2 leading-[1.2]">
              {product.name}
            </h3>
            <p className="text-[13px] font-light leading-[1.6] text-ink/60 dark:text-cream/60 mb-5 line-clamp-2">
              {product.description}
            </p>
          </div>

          <div className={`flex items-center justify-between ${isFeatured ? 'flex-shrink-0' : ''}`}>
            <button 
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                onRequestSample(product.name);
              }}
              className="text-[12px] font-medium tracking-[0.08em] uppercase text-ink dark:text-cream border-b border-ink/20 dark:border-cream/20 pb-0.5 hover:text-sunflower hover:border-sunflower transition-all duration-300"
            >
              Request Sample
            </button>
            <div className="w-[38px] h-[38px] bg-sunflower text-white rounded-sm flex items-center justify-center text-lg font-light transition-transform duration-300 group-hover:scale-110 group-hover:bg-ink dark:group-hover:bg-cream dark:group-hover:text-ink">
              +
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProductCard;
