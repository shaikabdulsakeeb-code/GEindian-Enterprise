import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Send, Clock } from 'lucide-react';
import emailjs from '@emailjs/browser';
import siteData from '../data/siteData.json';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState({ submitting: false, success: false, error: false });

  const handleChange = (e) => setFormData(p => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, success: false, error: false });
    
    // Send actual email via EmailJS
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
    { icon: <MapPin size={24} />, title: "Visit Us", content: siteData.address },
    { icon: <Phone size={24} />, title: "Call Us", content: siteData.phone },
    { icon: <Mail size={24} />, title: "Email Us", content: siteData.email },
    { icon: <Clock size={24} />, title: "Working Hours", content: "Mon - Sat: 9:00 AM - 6:00 PM" }
  ];

  return (
    <div className="pt-20 pb-24 min-h-screen bg-slate-50 dark:bg-dark-900">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-display font-bold text-slate-900 dark:text-white mb-6"
          >
            Get in <span className="text-gradient">Touch</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-600 dark:text-slate-300"
          >
            Have questions about our products or want to place a bulk order? We're here to help.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
          {/* Contact Methods */}
          <div className="lg:col-span-2 space-y-6">
            {contactMethods.map((method, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * i }}
                className="bg-white dark:bg-dark-800 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-white/5 flex gap-4 items-start"
              >
                <div className="w-12 h-12 bg-brand-50 dark:bg-brand-900/30 text-brand-600 dark:text-brand-400 rounded-xl flex items-center justify-center shrink-0">
                  {method.icon}
                </div>
                <div>
                  <h4 className="font-display font-bold text-lg text-slate-900 dark:text-white mb-1">{method.title}</h4>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{method.content}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-3"
          >
            <div className="glass p-8 md:p-10 rounded-3xl relative overflow-hidden">
               <div className="absolute top-0 right-0 w-64 h-64 bg-brand-400/10 rounded-full blur-3xl -z-10" />
               <h3 className="text-2xl font-display font-bold text-slate-900 dark:text-white mb-6">Send us a Message</h3>
               
               <form onSubmit={handleSubmit} className="space-y-6">
                 <div className="grid sm:grid-cols-2 gap-6">
                   <div>
                     <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Name</label>
                     <input type="text" name="name" required value={formData.name} onChange={handleChange} className="w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-dark-900/50 border border-slate-200 dark:border-white/10 focus:ring-2 focus:ring-brand-500 focus:outline-none transition-shadow text-slate-900 dark:text-slate-100" placeholder="John Doe" />
                   </div>
                   <div>
                     <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Email</label>
                     <input type="email" name="email" required value={formData.email} onChange={handleChange} className="w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-dark-900/50 border border-slate-200 dark:border-white/10 focus:ring-2 focus:ring-brand-500 focus:outline-none transition-shadow text-slate-900 dark:text-slate-100" placeholder="john@example.com" />
                   </div>
                 </div>
                 
                 <div>
                   <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Subject</label>
                   <input type="text" name="subject" required value={formData.subject} onChange={handleChange} className="w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-dark-900/50 border border-slate-200 dark:border-white/10 focus:ring-2 focus:ring-brand-500 focus:outline-none transition-shadow text-slate-900 dark:text-slate-100" placeholder="How can we help?" />
                 </div>

                 <div>
                   <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Message</label>
                   <textarea name="message" required value={formData.message} onChange={handleChange} rows={5} className="w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-dark-900/50 border border-slate-200 dark:border-white/10 focus:ring-2 focus:ring-brand-500 focus:outline-none transition-shadow text-slate-900 dark:text-slate-100 resize-none" placeholder="Your message here..." />
                 </div>

                 <button type="submit" disabled={status.submitting} className="w-full sm:w-auto px-8 py-3 bg-brand-500 hover:bg-brand-600 text-white rounded-xl font-medium transition-all hover:shadow-lg hover:shadow-brand-500/30 flex items-center justify-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed">
                    {status.submitting ? 'Sending...' : 'Send Message'}
                    {!status.submitting && <Send size={18} className="group-hover:translate-x-1 transition-transform" />}
                 </button>

                 {status.success && <p className="text-green-600 dark:text-green-400 mt-2 text-sm font-medium">Message sent successfully!</p>}
                 {status.error && <p className="text-red-600 dark:text-red-400 mt-2 text-sm font-medium">Failed to send message. Please try again later.</p>}
               </form>
            </div>
          </motion.div>
        </div>

      </div>
    </div>
  );
};

export default Contact;
