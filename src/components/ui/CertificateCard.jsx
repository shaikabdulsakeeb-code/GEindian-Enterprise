import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const ImageModal = ({ isOpen, onClose, imageSrc, imageAlt }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-2 sm:p-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-ink/95 backdrop-blur-sm cursor-zoom-out"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4 }}
            className="relative max-w-4xl max-h-[90vh] w-full rounded-sm overflow-hidden shadow-2xl z-10 bg-cream"
          >
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 text-[10px] font-medium tracking-[0.14em] uppercase text-ink hover:text-sunflower transition-colors z-20 bg-white/80 px-4 py-2 rounded-sm"
            >
              Close
            </button>
            <div className="w-full h-[85vh] p-4">
              {imageSrc.endsWith('.pdf') ? (
                <iframe 
                  src={`${imageSrc}#toolbar=0`} 
                  className="w-full h-full"
                  title={imageAlt}
                />
              ) : (
                <img 
                  src={imageSrc} 
                  alt={imageAlt} 
                  className="w-full h-full object-contain"
                />
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export const CertificateCard = ({ cert }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <motion.div 
        onClick={() => setIsModalOpen(true)}
        className="group relative aspect-[3/4] rounded-sm overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl hover:shadow-ink/20 transition-all duration-500 bg-white"
      >
        {cert.image.endsWith('.pdf') ? (
          <div className="w-full h-full relative overflow-hidden pointer-events-none">
            <iframe 
              loading="lazy"
              src={`${cert.image}#toolbar=0&navpanes=0&scrollbar=0&view=fitH`} 
              className="w-full h-[150%] -mt-4 transform scale-75 origin-top border-none"
              title={cert.name}
              tabIndex={-1}
            />
          </div>
        ) : (
          <div className="w-full h-full p-6">
            <img 
              src={cert.image} 
              alt={cert.name} 
              className="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-700"
              loading="lazy"
              decoding="async"
            />
          </div>
        )}
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-ink/90 flex flex-col justify-center items-center p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-center">
          <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
            <div className="w-8 h-[1px] bg-sunflower mx-auto mb-4"></div>
            <h3 className="font-serif text-[24px] text-white leading-[1.2] mb-4">
              {cert.name}
            </h3>
            <span className="text-[10px] font-medium tracking-[0.14em] uppercase text-sunflower border-b border-sunflower/30 pb-1">
              View Certificate
            </span>
          </div>
        </div>
      </motion.div>

      <ImageModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        imageSrc={cert.image} 
        imageAlt={cert.name} 
      />
    </>
  );
};
