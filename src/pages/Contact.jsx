import React, { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import siteData from '../data/siteData.json';
import SEO from '../components/common/SEO';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState({ submitting: false, success: false, error: false });

  const handleChange = (e) => setFormData(p => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, success: false, error: false });
    
    try {
      await emailjs.send(
        'service_afqktgw',
        'template_iy6f4nf',
        {
          from_name: formData.name,
          reply_to: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        'hWJDh3Bed7wbgRnoT'
      );
      setStatus({ submitting: false, success: true, error: false });
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus(s => ({ ...s, success: false })), 3000);
    } catch {
      setStatus({ submitting: false, success: false, error: true });
    }
  };

  const contactMethods = [
    { title: "Visit Us", content: siteData.address },
    { title: "Call Us", content: siteData.phone },
    { title: "Email Us", content: siteData.email },
    { title: "Working Hours", content: "Mon - Sat: 9:00 AM - 6:00 PM" }
  ];

  return (
    <div className="min-h-screen bg-cream dark:bg-dark-900 pb-24">
      <SEO 
        title="Contact Us" 
        description="Get in touch with GEindian for bulk orders, product inquiries, or support. We are here to help with your agricultural needs." 
        keywords="contact GE Enterprise, agricultural exports contact, bulk orders Indian spices, organic farming supplies contact, GE Enterprise customer support"
      />
      
      <section className="bg-ink text-white pt-24 pb-32 px-8 md:px-16 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
           <svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg" className="w-full h-full transform translate-x-1/2 -translate-y-1/4">
             <circle cx="200" cy="200" r="180" fill="none" stroke="#eab308" strokeWidth="1" strokeDasharray="6 6"/>
             <circle cx="200" cy="200" r="100" fill="none" stroke="#eab308" strokeWidth="2"/>
           </svg>
        </div>

        <div className="container mx-auto max-w-5xl relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="flex justify-center items-center gap-3 text-[11px] font-medium tracking-[0.16em] uppercase text-sunflower mb-6"
          >
            <div className="w-6 h-[1px] bg-sunflower"></div> Let's Connect <div className="w-6 h-[1px] bg-sunflower"></div>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.6 }}
            className="font-serif text-[clamp(40px,5vw,64px)] font-light leading-[1.05] tracking-[-0.02em] mb-6"
          >
            Get in <em>Touch</em>.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }}
            className="text-[16px] font-light leading-[1.8] text-white/70 max-w-2xl mx-auto"
          >
            Have questions about our products or want to place a bulk order? Our team is dedicated to providing you with the highest level of service.
          </motion.p>
        </div>
      </section>

      <section className="container mx-auto px-8 md:px-16 max-w-7xl -mt-16 relative z-20">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          
          {/* Contact Information */}
          <div className="lg:col-span-2 space-y-6">
            {contactMethods.map((method, i) => (
              <motion.div 
                key={i} initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 * i }}
                className="bg-white dark:bg-dark-800 p-8 md:p-10 rounded-sm border border-ink/5 dark:border-white/5 shadow-xl hover:-translate-y-1 transition-transform"
              >
                <div className="flex items-center gap-3 text-[10px] font-medium tracking-[0.14em] uppercase text-sunflower mb-3">
                  <div className="w-4 h-[1px] bg-sunflower"></div> {method.title}
                </div>
                <p className="text-[15px] font-light leading-[1.8] text-ink dark:text-cream/90">{method.content}</p>
              </motion.div>
            ))}
          </div>

          {/* Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}
            className="lg:col-span-3 bg-white dark:bg-dark-800 p-10 md:p-16 rounded-sm border border-ink/5 dark:border-white/5 shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-sunflower to-brand-600"></div>
            <h3 className="font-serif text-[32px] text-ink dark:text-white mb-8">Send us a <em>Message</em></h3>
               
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid sm:grid-cols-2 gap-8">
                <div className="relative">
                  <input type="text" name="name" required value={formData.name} onChange={handleChange} 
                    className="w-full px-0 py-3 bg-transparent border-b border-ink/20 dark:border-white/20 focus:border-sunflower focus:outline-none transition-colors text-[15px] font-light text-ink dark:text-white peer placeholder-transparent" 
                    placeholder="Name" id="name"
                  />
                  <label htmlFor="name" className="absolute left-0 top-3 text-[13px] font-light text-ink/50 dark:text-cream/50 transition-all peer-placeholder-shown:text-[15px] peer-placeholder-shown:top-3 peer-focus:-top-4 peer-focus:text-[11px] peer-focus:text-sunflower uppercase tracking-widest pointer-events-none">Name</label>
                </div>
                <div className="relative">
                  <input type="email" name="email" required value={formData.email} onChange={handleChange} 
                    className="w-full px-0 py-3 bg-transparent border-b border-ink/20 dark:border-white/20 focus:border-sunflower focus:outline-none transition-colors text-[15px] font-light text-ink dark:text-white peer placeholder-transparent" 
                    placeholder="Email" id="email"
                  />
                  <label htmlFor="email" className="absolute left-0 top-3 text-[13px] font-light text-ink/50 dark:text-cream/50 transition-all peer-placeholder-shown:text-[15px] peer-placeholder-shown:top-3 peer-focus:-top-4 peer-focus:text-[11px] peer-focus:text-sunflower uppercase tracking-widest pointer-events-none">Email</label>
                </div>
              </div>
                 
              <div className="relative mt-8">
                <input type="text" name="subject" required value={formData.subject} onChange={handleChange} 
                  className="w-full px-0 py-3 bg-transparent border-b border-ink/20 dark:border-white/20 focus:border-sunflower focus:outline-none transition-colors text-[15px] font-light text-ink dark:text-white peer placeholder-transparent" 
                  placeholder="Subject" id="subject"
                />
                <label htmlFor="subject" className="absolute left-0 top-3 text-[13px] font-light text-ink/50 dark:text-cream/50 transition-all peer-placeholder-shown:text-[15px] peer-placeholder-shown:top-3 peer-focus:-top-4 peer-focus:text-[11px] peer-focus:text-sunflower uppercase tracking-widest pointer-events-none">Subject</label>
              </div>

              <div className="relative mt-8">
                <textarea name="message" required value={formData.message} onChange={handleChange} rows={4} 
                  className="w-full px-0 py-3 bg-transparent border-b border-ink/20 dark:border-white/20 focus:border-sunflower focus:outline-none transition-colors text-[15px] font-light text-ink dark:text-white peer placeholder-transparent resize-none" 
                  placeholder="Message" id="message"
                />
                <label htmlFor="message" className="absolute left-0 top-3 text-[13px] font-light text-ink/50 dark:text-cream/50 transition-all peer-placeholder-shown:text-[15px] peer-placeholder-shown:top-3 peer-focus:-top-4 peer-focus:text-[11px] peer-focus:text-sunflower uppercase tracking-widest pointer-events-none">Your Message</label>
              </div>

              <button type="submit" disabled={status.submitting} 
                className="px-10 py-4 bg-ink text-sunflower hover:bg-sunflower hover:text-ink dark:bg-white dark:text-ink font-medium tracking-[0.1em] uppercase text-[12px] rounded-sm transition-all duration-300 shadow-xl disabled:opacity-70 disabled:cursor-not-allowed mt-4"
              >
                {status.submitting ? 'Sending...' : 'Send Message'}
              </button>

              {status.success && <p className="text-brand-600 dark:text-brand-400 mt-4 text-[13px] tracking-wide">Message sent successfully! We will get back to you shortly.</p>}
              {status.error && <p className="text-red-600 dark:text-red-400 mt-4 text-[13px] tracking-wide">Failed to send message. Please try again later.</p>}
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
