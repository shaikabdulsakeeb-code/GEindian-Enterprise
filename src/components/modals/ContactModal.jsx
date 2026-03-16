import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, CheckCircle2 } from 'lucide-react';
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

  // Sync the external prop into form state whenever it changes
  React.useEffect(() => {
    setFormData(prev => ({ ...prev, product: productName }));
  }, [productName]);

  // Integrated real EmailJS keys
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
      const payload = {
        from_name: formData.name,
        reply_to: formData.email,
        phone: formData.phone,
        city: formData.city,
        country: formData.country,
        product: formData.product,
        message: formData.message,
      };

      console.log('Sending EmailJS Payload:', payload);
      console.log('Using Service ID:', EMAILJS_SERVICE_ID);
      console.log('Using Template ID:', EMAILJS_TEMPLATE_ID);

      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        payload,
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

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-2 sm:p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-lg glass-card overflow-hidden flex flex-col max-h-[90vh]"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-slate-200 dark:border-white/10 shrink-0">
              <h3 className="font-display font-semibold text-xl text-slate-800 dark:text-white">
                Request Sample
              </h3>
              <button 
                onClick={onClose}
                className="p-2 text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-white transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Content */}
            <div className="p-4 sm:p-6 overflow-y-auto">
              {isSuccess ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-8 text-center"
                >
                  <CheckCircle2 size={64} className="text-brand-500 mb-4" />
                  <h4 className="font-display font-semibold text-2xl text-slate-800 dark:text-white mb-2">Request Sent!</h4>
                  <p className="text-slate-600 dark:text-slate-300">
                    We'll get back to you shortly about your sample request for {formData.product}.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                      Target Product
                    </label>
                    <input 
                      type="text" 
                      name="product"
                      value={formData.product}
                      readOnly
                      className="w-full px-4 py-2.5 rounded-lg bg-slate-100 dark:bg-dark-900 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-slate-100 cursor-not-allowed"
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                        Your Name
                      </label>
                      <input 
                        type="text" 
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 rounded-lg bg-white/50 dark:bg-dark-900/50 border border-slate-200 dark:border-white/10 focus:ring-2 focus:ring-brand-500 focus:outline-none transition-shadow text-slate-900 dark:text-slate-100"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                        Phone Number
                      </label>
                      <input 
                        type="tel" 
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 rounded-lg bg-white/50 dark:bg-dark-900/50 border border-slate-200 dark:border-white/10 focus:ring-2 focus:ring-brand-500 focus:outline-none transition-shadow text-slate-900 dark:text-slate-100"
                        placeholder="+91..."
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                        City
                      </label>
                      <input 
                        type="text" 
                        name="city"
                        required
                        value={formData.city}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 rounded-lg bg-white/50 dark:bg-dark-900/50 border border-slate-200 dark:border-white/10 focus:ring-2 focus:ring-brand-500 focus:outline-none transition-shadow text-slate-900 dark:text-slate-100"
                        placeholder="Mumbai"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                        Country
                      </label>
                      <input 
                        type="text" 
                        name="country"
                        required
                        value={formData.country}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 rounded-lg bg-white/50 dark:bg-dark-900/50 border border-slate-200 dark:border-white/10 focus:ring-2 focus:ring-brand-500 focus:outline-none transition-shadow text-slate-900 dark:text-slate-100"
                        placeholder="India"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                      Email Address
                    </label>
                    <input 
                      type="email" 
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-lg bg-white/50 dark:bg-dark-900/50 border border-slate-200 dark:border-white/10 focus:ring-2 focus:ring-brand-500 focus:outline-none transition-shadow text-slate-900 dark:text-slate-100"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                      Additional Message (Optional)
                    </label>
                    <textarea 
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={3}
                      className="w-full px-4 py-2.5 rounded-lg bg-white/50 dark:bg-dark-900/50 border border-slate-200 dark:border-white/10 focus:ring-2 focus:ring-brand-500 focus:outline-none transition-shadow text-slate-900 dark:text-slate-100 resize-none"
                      placeholder="Any specific requirements..."
                    />
                  </div>

                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full mt-2 bg-brand-500 hover:bg-brand-600 text-white font-medium py-3 rounded-lg transition-colors flex items-center justify-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: 'linear' }} className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full" />
                        Sending...
                      </span>
                    ) : (
                      <>
                        Submit Request
                        <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                      </>
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
