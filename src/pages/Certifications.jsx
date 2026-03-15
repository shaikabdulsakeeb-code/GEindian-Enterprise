import React from 'react';
import { motion } from 'framer-motion';
import { Award, ShieldCheck } from 'lucide-react';
import { CertificateCard } from '../components/ui/CertificateCard';
import certificationsData from '../data/certifications.json';

const Certifications = () => {
  return (
    <div className="pt-8 pb-24 min-h-screen bg-slate-50 dark:bg-dark-900">
      
      <div className="bg-brand-50 dark:bg-brand-900/10 py-16 mb-16 border-b border-brand-100 dark:border-white/5">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="w-16 h-16 mx-auto bg-brand-100 dark:bg-brand-900/40 text-brand-600 dark:text-brand-400 rounded-full flex items-center justify-center mb-6"
            >
              <Award size={32} />
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-display font-bold text-slate-900 dark:text-white mb-6"
            >
              Our <span className="text-gradient">Certifications</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-slate-600 dark:text-slate-300 mb-8"
            >
              Quality Assurance & Trusted Standards. We hold various certifications ensuring our products meet the highest global standards.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white dark:bg-dark-800 border border-slate-200 dark:border-white/10 shadow-sm text-slate-700 dark:text-slate-200 font-medium"
            >
              <ShieldCheck size={20} className="text-brand-500" />
              100% Export Quality Guaranteed
            </motion.div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {certificationsData.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <CertificateCard cert={cert} />
            </motion.div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default Certifications;
