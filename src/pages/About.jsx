import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, ShieldCheck, Users } from 'lucide-react';
import siteData from '../data/siteData.json';

const About = () => {
  return (
    <div className="pt-8 pb-24 min-h-screen bg-slate-50 dark:bg-dark-900">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 pt-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-display font-bold text-slate-900 dark:text-white mb-6"
          >
            About <span className="text-gradient">GE Enterprise</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-brand-600 dark:text-brand-400 font-medium"
          >
            {siteData.tagline}
          </motion.p>
        </div>

        {/* Intro Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="/src/assets/images/activity-img-vegetables.jpg" 
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
            className="space-y-6"
          >
            <h2 className="text-3xl font-display font-bold text-slate-900 dark:text-white">Who We Are</h2>
            <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed">
              {siteData.description} We work directly with farmers to ensure purity, freshness, and sustainability.
            </p>
            <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed">
              Our goal is to build a bridge between farms and global markets, ensuring quality products reach customers worldwide.
            </p>
          </motion.div>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-32">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass p-10 rounded-3xl"
          >
            <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-2xl flex items-center justify-center mb-8">
              <Target size={32} />
            </div>
            <h3 className="text-2xl font-display font-bold text-slate-900 dark:text-white mb-4">Our Mission</h3>
            <p className="text-slate-600 dark:text-slate-300 text-lg">
              {siteData.mission}
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="glass p-10 rounded-3xl"
          >
            <div className="w-16 h-16 bg-brand-100 dark:bg-brand-900/30 text-brand-600 dark:text-brand-400 rounded-2xl flex items-center justify-center mb-8">
              <Eye size={32} />
            </div>
            <h3 className="text-2xl font-display font-bold text-slate-900 dark:text-white mb-4">Our Vision</h3>
            <p className="text-slate-600 dark:text-slate-300 text-lg">
              {siteData.vision}
            </p>
          </motion.div>
        </div>

        {/* Values Setup */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 dark:text-white mb-6">Why Choose GE Enterprise?</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 text-left max-w-4xl mx-auto">
           <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-dark-800 p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-white/5 flex gap-6"
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
            className="bg-white dark:bg-dark-800 p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-white/5 flex gap-6"
          >
            <div className="text-brand-500 shrink-0"><Users size={40} /></div>
            <div>
              <h4 className="text-xl font-display font-bold text-slate-900 dark:text-white mb-2">Dedicated Team</h4>
              <p className="text-slate-600 dark:text-slate-400">Our team works closely with farmers, suppliers, and customers to maintain excellence in every step.</p>
            </div>
          </motion.div>
        </div>

      </div>
    </div>
  );
};

export default About;
