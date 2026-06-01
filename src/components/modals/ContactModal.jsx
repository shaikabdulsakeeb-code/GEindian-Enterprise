import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';

const ContactModal = ({ isOpen, onClose, productName = '' }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    country: '',
    message: '',
    product: productName
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  React.useEffect(() => {
    setFormData(prev => ({ ...prev, product: productName }));
  }, [productName]);

  const EMAILJS_SERVICE_ID = 'service_afqktgw';
  const EMAILJS_TEMPLATE_ID = 'template_5kdvvwo';
  const EMAILJS_PUBLIC_KEY = 'hWJDh3Bed7wbgRnoT';

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          reply_to: formData.email,
          phone: formData.phone,
          city: formData.city,
          country: formData.country,
          product: formData.product,
          message: formData.message,
        },
        EMAILJS_PUBLIC_KEY
      );
      
      setIsSuccess(true);
      setTimeout(() => {
        setIsSuccess(false);
        onClose();
        setFormData({ name: '', email: '', phone: '', city: '', country: '', message: '', product: '' });
      }, 2000);
    } catch (error) {
      console.error('Failed to send email:', error);
      alert('Failed to send request. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass = "w-full px-0 py-3 bg-transparent border-b border-ink/15 dark:border-white/15 focus:border-sunflower focus:outline-none transition-colors text-[14px] font-light text-ink dark:text-white placeholder-ink/30 dark:placeholder-white/30";

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-ink/80 dark:bg-black/80 backdrop-blur-sm"
          />
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.4 }}
            className="relative w-full max-w-lg bg-white dark:bg-dark-800 rounded-sm overflow-hidden flex flex-col max-h-[90vh] shadow-2xl"
          >
            {/* Accent Line */}
            <div className="h-[2px] bg-gradient-to-r from-sunflower via-brand-600 to-sunflower"></div>

            {/* Header */}
            <div className="flex items-center justify-between px-8 pt-8 pb-4 shrink-0">
              <div>
                <div className="flex items-center gap-3 text-[10px] font-medium tracking-[0.14em] uppercase text-sunflower mb-2">
                  <div className="w-4 h-[1px] bg-sunflower"></div> Sample Request
                </div>
                <h3 className="font-serif text-[24px] text-ink dark:text-white">Request a <em>Sample</em></h3>
              </div>
              <button 
                onClick={onClose}
                className="text-[10px] font-medium tracking-[0.12em] uppercase text-ink/40 dark:text-white/40 hover:text-sunflower transition-colors border border-ink/10 dark:border-white/10 px-3 py-2 rounded-sm hover:border-sunflower"
              >
                Close
              </button>
            </div>

            {/* Content */}
            <div className="px-8 pb-8 overflow-y-auto">
              {isSuccess ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 text-center"
                >
                  <div className="w-16 h-16 border-2 border-brand-600 rounded-full flex items-center justify-center mb-6">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-brand-600" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
                  </div>
                  <h4 className="font-serif text-[24px] text-ink dark:text-white mb-2">Request <em>Sent!</em></h4>
                  <p className="text-[14px] font-light text-ink/60 dark:text-white/60">
                    We'll get back to you shortly about {formData.product}.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5 mt-4">
                  <div>
                    <input 
                      type="text" 
                      name="product"
                      value={formData.product}
                      readOnly
                      className="w-full px-4 py-3 bg-cream dark:bg-dark-900 border border-ink/10 dark:border-white/10 text-ink dark:text-white text-[14px] font-medium tracking-wide rounded-sm cursor-not-allowed"
                    />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-6">
                    <input type="text" name="name" required value={formData.name} onChange={handleChange} className={inputClass} placeholder="Your Name" />
                    <input type="tel" name="phone" required value={formData.phone} onChange={handleChange} className={inputClass} placeholder="Phone Number" />
                  </div>

                  <div className="grid grid-cols-2 gap-6">
                    <input type="text" name="city" required value={formData.city} onChange={handleChange} className={inputClass} placeholder="City" />
                    <input type="text" name="country" required value={formData.country} onChange={handleChange} className={inputClass} placeholder="Country" />
                  </div>

                  <input type="email" name="email" required value={formData.email} onChange={handleChange} className={inputClass} placeholder="Email Address" />

                  <textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={3}
                    className={`${inputClass} resize-none`}
                    placeholder="Additional message (optional)"
                  />

                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full mt-4 px-8 py-4 bg-ink text-sunflower hover:bg-sunflower hover:text-ink dark:bg-white dark:text-ink font-medium tracking-[0.1em] uppercase text-[12px] rounded-sm transition-all duration-300 shadow-xl disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-3">
                        <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: 'linear' }} className="w-4 h-4 border-2 border-sunflower/30 border-t-sunflower rounded-full" />
                        Sending...
                      </span>
                    ) : (
                      'Submit Request'
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ContactModal;
