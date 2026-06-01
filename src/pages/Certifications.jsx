import React from 'react';
import { motion } from 'framer-motion';
import { CertificateCard } from '../components/ui/CertificateCard';
import certificationsData from '../data/certifications.json';
import SEO from '../components/common/SEO';

const Certifications = () => {
  return (
    <div className="min-h-screen bg-cream dark:bg-dark-900 pb-32">
      <SEO 
        title="Our Certifications" 
        description="Explore our certifications and quality standards. GEindian is committed to providing export-quality agricultural products that meet international guidelines." 
        keywords="agricultural certifications India, export quality seeds, certified organic farming, global agricultural standards, premium certified spices"
      />
      
      {/* Editorial Header */}
      <section className="bg-ink text-white pt-24 pb-32 px-8 md:px-16 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-5 pointer-events-none">
           <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full transform translate-x-1/4 -translate-y-1/4">
             <rect x="20" y="20" width="160" height="160" fill="none" stroke="#eab308" strokeWidth="1"/>
             <rect x="40" y="40" width="120" height="120" fill="none" stroke="#eab308" strokeWidth="2" strokeDasharray="4 4"/>
           </svg>
        </div>

        <div className="container mx-auto max-w-5xl relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="flex justify-center items-center gap-3 text-[11px] font-medium tracking-[0.16em] uppercase text-sunflower mb-6"
          >
            <div className="w-6 h-[1px] bg-sunflower"></div> Quality Assurance <div className="w-6 h-[1px] bg-sunflower"></div>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.6 }}
            className="font-serif text-[clamp(40px,5vw,64px)] font-light leading-[1.05] tracking-[-0.02em] mb-6"
          >
            Global Standards of <em>Excellence</em>.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }}
            className="text-[16px] font-light leading-[1.8] text-white/70 max-w-2xl mx-auto"
          >
            We adhere to the highest global standards, ensuring our products are certified for purity, safety, and 100% export quality.
          </motion.p>
        </div>
      </section>

      {/* Certifications Grid */}
      <section className="container mx-auto px-8 md:px-16 max-w-7xl -mt-16 relative z-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 md:gap-10">
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
      </section>

      {/* Trust Banner */}
      <section className="mt-32 max-w-4xl mx-auto px-8 text-center">
        <div className="w-16 h-[1px] bg-sunflower mx-auto mb-8"></div>
        <h3 className="font-serif text-[28px] text-ink dark:text-white mb-4">Uncompromised Purity</h3>
        <p className="text-[15px] font-light text-ink/70 dark:text-cream/70 leading-[1.8]">
          Every certification we hold is a testament to our dedication. From soil to export, our processes are continuously vetted by international authorities to guarantee you receive nothing but the best.
        </p>
      </section>

    </div>
  );
};

export default Certifications;
