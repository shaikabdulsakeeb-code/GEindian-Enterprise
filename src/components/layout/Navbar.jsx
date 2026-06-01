import React, { useState, useEffect, useRef } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Products', path: '/products' },
  { name: 'Certifications', path: '/certifications' },
  { name: 'Contact', path: '/contact' }
];

const languages = [
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'hi', name: 'हिन्दी', flag: '🇮🇳' },
  { code: 'te', name: 'తెలుగు', flag: '🇮🇳' },
  { code: 'zh-CN', name: '中文', flag: '🇨🇳' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'ar', name: 'العربية', flag: '🇸🇦' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  { code: 'ja', name: '日本語', flag: '🇯🇵' },
  { code: 'ru', name: 'Русский', flag: '🇷🇺' },
  { code: 'pt', name: 'Português', flag: '🇵🇹' }
];

const LanguageSelector = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(languages[0]);
  const ref = useRef(null);

  useEffect(() => {
    const saved = localStorage.getItem('ge-lang');
    if (saved) {
      const lang = languages.find(l => l.code === saved);
      if (lang) setSelected(lang);
    }
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setIsOpen(false);
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (lang) => {
    setSelected(lang);
    localStorage.setItem('ge-lang', lang.code);
    
    // Set Google Translate cookies
    document.cookie = `googtrans=/en/${lang.code}; path=/; domain=${window.location.hostname}`;
    document.cookie = `googtrans=/en/${lang.code}; path=/;`;
    
    setIsOpen(false);
    
    // Slight delay to allow cookies to set before reload
    setTimeout(() => {
      window.location.reload();
    }, 100);
  };

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1.5 px-3 py-2 rounded-sm border border-ink/10 dark:border-white/10 hover:border-sunflower dark:hover:border-sunflower transition-colors text-[12px] font-medium tracking-wide text-ink/70 dark:text-white/70 hover:text-sunflower dark:hover:text-sunflower"
      >
        <span className="text-sm">{selected.flag}</span>
        <span className="hidden sm:inline">{selected.code.toUpperCase()}</span>
        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className={`transition-transform ${isOpen ? 'rotate-180' : ''}`}><polyline points="6 9 12 15 18 9"/></svg>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 top-full mt-2 w-44 bg-white dark:bg-dark-800 border border-ink/10 dark:border-white/10 rounded-sm shadow-2xl shadow-ink/10 dark:shadow-black/30 overflow-hidden z-50"
          >
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => handleSelect(lang)}
                className={`w-full flex items-center gap-3 px-4 py-3 text-left text-[13px] transition-colors
                  ${selected.code === lang.code 
                    ? 'bg-sunflower/10 text-sunflower font-medium' 
                    : 'text-ink/70 dark:text-white/70 hover:bg-cream dark:hover:bg-dark-700 hover:text-ink dark:hover:text-white'
                  }`}
              >
                <span className="text-base">{lang.flag}</span>
                <span>{lang.name}</span>
                {selected.code === lang.code && (
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="ml-auto text-sunflower"><polyline points="20 6 9 17 4 12"/></svg>
                )}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Navbar = ({ toggleDarkMode, isDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${scrolled ? 'glass py-2 md:pt-5 md:pb-4' : 'bg-transparent py-3 md:pt-7 md:pb-6 dark:bg-dark-900/50'}`}>
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="overflow-hidden rounded-lg w-10 h-10 group-hover:scale-105 transition-transform duration-300">
             <img src="/images/logo-title.png" alt="GE Enterprise Logo" fetchpriority="high" className="w-full h-full object-cover" />
          </div>
          <span className="font-display font-bold text-xl md:text-2xl tracking-tight text-slate-900 dark:text-white">
            GE <span className="text-brand-600 dark:text-brand-400">Enterprise</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) => 
                `font-medium transition-colors duration-200 hover:text-brand-600 dark:hover:text-brand-400 ${isActive ? 'text-brand-600 dark:text-brand-400' : 'text-slate-600 dark:text-slate-300'}`
              }
            >
              {link.name}
            </NavLink>
          ))}
          
          <LanguageSelector />

          <button 
            onClick={toggleDarkMode}
            className="p-2 rounded-full bg-slate-100 dark:bg-dark-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-dark-700 transition-colors"
            aria-label="Toggle Dark Mode"
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-3 md:hidden">
          <LanguageSelector />
          <button 
            onClick={toggleDarkMode}
            className="p-2 rounded-full bg-slate-100 dark:bg-dark-800 text-slate-600 dark:text-slate-300"
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button 
            className="p-2 text-slate-600 dark:text-slate-300 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-t border-slate-200 dark:border-white/10"
          >
            <div className="flex flex-col px-4 py-4 gap-4">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) => 
                    `block px-4 py-3 rounded-lg font-medium transition-colors text-base ${isActive ? 'bg-brand-50 dark:bg-brand-900/30 text-brand-600 dark:text-brand-400' : 'text-slate-600 dark:text-slate-300'}`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
