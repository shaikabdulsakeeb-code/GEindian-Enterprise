import React from 'react';
import { motion } from 'framer-motion';
import siteData from '../data/siteData.json';
import SEO from '../components/common/SEO';

const About = () => {
  return (
    <div className="min-h-screen bg-cream dark:bg-dark-900 pb-24">
      <SEO 
        title="Our Story" 
        description="Learn more about GEindian, our mission to provide high-quality agricultural products, and our commitment to sustainable farming." 
        keywords="premium agricultural products, organic farming India, sustainable agriculture, GE Enterprise about us, high quality seeds, export quality fertilizers, Indian farming heritage"
      />
      
      {/* Editorial Header */}
      <section className="bg-ink text-white pt-20 pb-24 px-8 md:px-16 overflow-hidden relative">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'repeating-linear-gradient(45deg, #eab308 0px, #eab308 1px, transparent 1px, transparent 20px), repeating-linear-gradient(-45deg, #eab308 0px, #eab308 1px, transparent 1px, transparent 20px)' }}></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="flex justify-center items-center gap-3 text-[11px] font-medium tracking-[0.16em] uppercase text-sunflower mb-6"
          >
            <div className="w-6 h-[1px] bg-sunflower"></div> Our Story <div className="w-6 h-[1px] bg-sunflower"></div>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.6 }}
            className="font-serif text-[clamp(40px,5vw,64px)] font-light leading-[1.05] tracking-[-0.02em] mb-6"
          >
            Rooted in India,<br /><em>Built for the World.</em>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }}
            className="text-[16px] font-light leading-[1.8] text-white/70 max-w-2xl mx-auto"
          >
            {siteData.tagline}
          </motion.p>
        </div>
      </section>

      {/* Intro Section - Split Layout */}
      <section className="py-24 px-8 md:px-16 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="aspect-[4/5] overflow-hidden rounded-sm bg-cream-deep">
              <img 
                src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=1000&q=80" 
                alt="Farming Heritage" 
                className="w-full h-full object-cover mix-blend-multiply dark:mix-blend-normal"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 w-[160px] h-[160px] bg-ink text-sunflower flex flex-col items-center justify-center font-serif shadow-2xl">
              <span className="text-[56px] font-bold leading-none">100<span className="text-3xl">%</span></span>
              <span className="text-[10px] tracking-[0.14em] uppercase opacity-85 mt-2 text-center leading-tight">Organic<br/>Promise</span>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3 text-[11px] font-medium tracking-[0.16em] uppercase text-brand-600 mb-5">
              <div className="w-6 h-[1px] bg-brand-600"></div> Who We Are
            </div>
            <h2 className="font-serif text-[clamp(32px,4vw,48px)] font-light leading-[1.1] tracking-[-0.02em] text-ink dark:text-white mb-6">
              A legacy of <em>Purity</em><br />and Excellence.
            </h2>
            <p className="text-[15px] font-light leading-[1.8] text-ink/70 dark:text-cream/70">
              {siteData.description} We work directly with farmers to ensure purity, freshness, and sustainability. Every product we curate carries a story — of skilled hands, ancient agricultural knowledge, and timeless quality.
            </p>
            <p className="text-[15px] font-light leading-[1.8] text-ink/70 dark:text-cream/70">
              Our goal is to build a seamless bridge between local farms and global markets, ensuring that only the absolute finest quality products reach our discerning customers worldwide.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision - Premium Cards */}
      <section className="py-24 px-8 md:px-16 bg-cream-deep dark:bg-dark-800">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="bg-ink p-12 md:p-16 rounded-sm relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform duration-700">
              <svg width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="#eab308" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
            </div>
            <h3 className="font-serif text-[32px] text-white mb-6">Our <em>Mission</em></h3>
            <p className="text-[15px] font-light leading-[1.8] text-white/70 relative z-10">
              {siteData.mission} We strive to empower farmers while delivering uncompromised quality to our consumers, ensuring a sustainable cycle of growth.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="bg-white dark:bg-dark-900 p-12 md:p-16 rounded-sm border border-ink/5 dark:border-white/5 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:scale-110 transition-transform duration-700">
              <svg width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-ink dark:text-cream" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12h3"/><path d="M19 12h3"/><path d="M12 2v3"/><path d="M12 19v3"/><path d="M4.93 4.93l2.12 2.12"/><path d="M16.95 16.95l2.12 2.12"/><path d="M4.93 19.07l2.12-2.12"/><path d="M16.95 7.05l2.12-2.12"/><circle cx="12" cy="12" r="4"/></svg>
            </div>
            <h3 className="font-serif text-[32px] text-ink dark:text-white mb-6">Our <em>Vision</em></h3>
            <p className="text-[15px] font-light leading-[1.8] text-ink/70 dark:text-cream/70 relative z-10">
              {siteData.vision} We envision a world where pure, ethically sourced agricultural products are the standard, bridging the gap between nature's finest and everyday life.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-24 px-8 md:px-16 max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex justify-center items-center gap-3 text-[11px] font-medium tracking-[0.16em] uppercase text-brand-600 mb-5">
            <div className="w-6 h-[1px] bg-brand-600"></div> Visit Us <div className="w-6 h-[1px] bg-brand-600"></div>
          </div>
          <h2 className="font-serif text-[clamp(32px,4vw,48px)] font-light leading-[1.1] tracking-[-0.02em] text-ink dark:text-white">
            Our <em>Location</em>
          </h2>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="aspect-[21/9] min-h-[400px] w-full bg-cream-deep rounded-sm overflow-hidden border border-ink/10 dark:border-white/10"
        >
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3636.21160868795!2d80.70850787491389!3d16.501147084242724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35fbabec117e45%3A0x8084a82fe7451d44!2sGeneral%20Enterprises!5e1!3m2!1sen!2sin!4v1773580058650!5m2!1sen!2sin" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="GE Enterprise Location"
            className="filter grayscale-[20%] contrast-125"
          />
        </motion.div>
      </section>

    </div>
  );
};

export default About;
