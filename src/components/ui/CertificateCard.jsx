import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';

export const ImageModal = ({ isOpen, onClose, imageSrc, imageAlt }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-900/90 backdrop-blur-md cursor-zoom-out"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="relative max-w-5xl max-h-[90vh] w-full rounded-xl overflow-hidden shadow-2xl z-10"
          >
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full backdrop-blur transition-colors z-20"
            >
              <X size={24} />
            </button>
            <div className="w-full h-[80vh] bg-slate-100 dark:bg-dark-800 rounded-b-xl pt-1">
              {imageSrc.endsWith('.pdf') ? (
                <iframe 
                  src={`${imageSrc}#toolbar=0`} 
                  className="w-full h-full rounded-b-xl"
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
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        onClick={() => setIsModalOpen(true)}
        className="group relative aspect-[3/4] rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-2xl transition-all duration-300"
      >
        {cert.image.endsWith('.pdf') ? (
          <div className="w-full h-full relative overflow-hidden pointer-events-none bg-white">
            <iframe 
              loading="lazy"
              src={`${cert.image}#toolbar=0&navpanes=0&scrollbar=0&view=fitH`} 
              className="w-full h-[150%] -mt-4 transform scale-75 origin-top border-none"
              title={cert.name}
              tabIndex={-1}
            />
          </div>
        ) : (
          <img 
            src={cert.image} 
            alt={cert.name} 
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
            loading="lazy"
            decoding="async"
          />
        )}
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6 opacity-80 group-hover:opacity-100 transition-opacity">
          <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            <h3 className="font-display font-semibold text-lg text-white mb-1">
              {cert.name}
            </h3>
            <span className="flex items-center gap-2 text-brand-300 text-sm font-medium">
              <ZoomIn size={16} />
              Click to View
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
