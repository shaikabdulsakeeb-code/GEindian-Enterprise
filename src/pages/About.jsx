import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, ShieldCheck, Users } from 'lucide-react';
import siteData from '../data/siteData.json';

const About = () => {
  return (
    <div className="pt-8 pb-24 min-h-screen bg-slate-50 dark:bg-dark-900">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-20 pt-6 md:pt-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-6xl font-display font-bold text-slate-900 dark:text-white mb-4 md:mb-6"
          >
            About <span className="text-gradient">GE Enterprise</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-brand-600 dark:text-brand-400 font-medium"
          >
            {siteData.tagline}
          </motion.p>
        </div>

        {/* Intro Section */}
        <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center mb-20 md:mb-32">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative order-2 lg:order-1"
          >
            <div className="aspect-[4/3] rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="/images/activity-img-vegetables.jpg" 
                alt="Farming Vegetables" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-brand-500 rounded-full blur-3xl opacity-30 -z-10" />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4 md:space-y-6 order-1 lg:order-2"
          >
            <h2 className="text-2xl md:text-3xl font-display font-bold text-slate-900 dark:text-white">Who We Are</h2>
            <p className="text-slate-600 dark:text-slate-300 text-base md:text-lg leading-relaxed">
              {siteData.description} We work directly with farmers to ensure purity, freshness, and sustainability.
            </p>
            <p className="text-slate-600 dark:text-slate-300 text-base md:text-lg leading-relaxed">
              Our goal is to build a bridge between farms and global markets, ensuring quality products reach customers worldwide.
            </p>
          </motion.div>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-20 md:mb-32">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass p-6 md:p-10 rounded-2xl md:rounded-3xl"
          >
            <div className="w-12 h-12 md:w-16 md:h-16 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-xl md:rounded-2xl flex items-center justify-center mb-6 md:mb-8">
              <Target size={28} />
            </div>
            <h3 className="text-xl md:text-2xl font-display font-bold text-slate-900 dark:text-white mb-3 md:mb-4">Our Mission</h3>
            <p className="text-slate-600 dark:text-slate-300 text-base md:text-lg">
              {siteData.mission}
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="glass p-6 md:p-10 rounded-2xl md:rounded-3xl"
          >
            <div className="w-12 h-12 md:w-16 md:h-16 bg-brand-100 dark:bg-brand-900/30 text-brand-600 dark:text-brand-400 rounded-xl md:rounded-2xl flex items-center justify-center mb-6 md:mb-8">
              <Eye size={28} />
            </div>
            <h3 className="text-xl md:text-2xl font-display font-bold text-slate-900 dark:text-white mb-3 md:mb-4">Our Vision</h3>
            <p className="text-slate-600 dark:text-slate-300 text-base md:text-lg">
              {siteData.vision}
            </p>
          </motion.div>
        </div>

        {/* Values Setup */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 dark:text-white mb-6">Why Choose GE Enterprise?</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-12 text-left max-w-4xl mx-auto mb-16 md:mb-32">
           <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-dark-800 p-5 md:p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-white/5 flex flex-col sm:flex-row gap-4 sm:gap-6"
          >
            <div className="text-brand-500 shrink-0"><ShieldCheck size={40} /></div>
            <div>
              <h4 className="text-xl font-display font-bold text-slate-900 dark:text-white mb-2">Uncompromised Quality</h4>
              <p className="text-slate-600 dark:text-slate-400">Our products undergo strict quality checks to ensure they meet global standards of purity and freshness.</p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-white dark:bg-dark-800 p-5 md:p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-white/5 flex flex-col sm:flex-row gap-4 sm:gap-6"
          >
            <div className="text-brand-500 shrink-0"><Users size={40} /></div>
            <div>
              <h4 className="text-xl font-display font-bold text-slate-900 dark:text-white mb-2">Dedicated Team</h4>
              <p className="text-slate-600 dark:text-slate-400">Our team works closely with farmers, suppliers, and customers to maintain excellence in every step.</p>
            </div>
          </motion.div>
        </div>

        {/* Location Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-5xl font-display font-bold text-slate-900 dark:text-white mb-4 md:mb-6">Our Location</h2>
            <p className="text-slate-600 dark:text-slate-400 text-base md:text-lg">Visit us at our main center for direct inquiries.</p>
          </div>
          
          <div className="glass p-2 md:p-4 rounded-[1.5rem] md:rounded-[2rem] overflow-hidden shadow-2xl h-[350px] md:h-[450px]">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3636.21160868795!2d80.70850787491389!3d16.501147084242724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35fbabec117e45%3A0x8084a82fe7451d44!2sGeneral%20Enterprises!5e1!3m2!1sen!2sin!4v1773580058650!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="GE Enterprise Location"
              className="rounded-2xl"
            />
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default About;
