import React from 'react';
import { Link } from 'react-router-dom';
import siteData from '../../data/siteData.json';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Products', path: '/products' },
    { name: 'Certifications', path: '/certifications' },
    { name: 'Contact Us', path: '/contact' }
  ];

  const products = [
    { name: 'Banana Powder', path: '/products' },
    { name: 'Mango Powder', path: '/products' },
    { name: 'Tomato Powder', path: '/products' },
  ];

  return (
    <footer className="bg-ink text-white">
      {/* Top accent line */}
      <div className="h-[2px] bg-gradient-to-r from-transparent via-sunflower to-transparent"></div>

      <div className="max-w-7xl mx-auto px-8 md:px-16 pt-20 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-20">

          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="inline-block">
              <span className="font-serif text-[28px] font-light tracking-[-0.02em] text-white">
                GE <em className="text-sunflower">Enterprise</em>
              </span>
            </Link>
            <p className="text-[14px] font-light leading-[1.8] text-white/50">
              {siteData.description}
            </p>
            <div className="flex items-center gap-4 pt-2">
              <a href={siteData.socialLinks.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram"
                className="w-10 h-10 border border-white/10 flex items-center justify-center text-white/40 hover:border-sunflower hover:text-sunflower transition-all duration-300 rounded-sm">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              </a>
              <a href={siteData.socialLinks.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter"
                className="w-10 h-10 border border-white/10 flex items-center justify-center text-white/40 hover:border-sunflower hover:text-sunflower transition-all duration-300 rounded-sm">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4l11.733 16h4.267l-11.733 -16h-4.267z"/><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"/></svg>
              </a>
              <a href={siteData.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
                className="w-10 h-10 border border-white/10 flex items-center justify-center text-white/40 hover:border-sunflower hover:text-sunflower transition-all duration-300 rounded-sm">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <div className="flex items-center gap-3 text-[10px] font-medium tracking-[0.14em] uppercase text-sunflower mb-8">
              <div className="w-4 h-[1px] bg-sunflower"></div> Quick Links
            </div>
            <ul className="space-y-4">
              {quickLinks.map((item) => (
                <li key={item.name}>
                  <Link to={item.path} className="text-[14px] font-light text-white/50 hover:text-sunflower transition-colors duration-300">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <div className="flex items-center gap-3 text-[10px] font-medium tracking-[0.14em] uppercase text-sunflower mb-8">
              <div className="w-4 h-[1px] bg-sunflower"></div> Popular Products
            </div>
            <ul className="space-y-4">
              {products.map((item) => (
                <li key={item.name}>
                  <Link to={item.path} className="text-[14px] font-light text-white/50 hover:text-sunflower transition-colors duration-300">
                    {item.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/products" className="text-[12px] font-medium tracking-[0.08em] uppercase text-sunflower border-b border-sunflower/30 pb-1 hover:border-sunflower transition-all">
                  Explore All →
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div className="flex items-center gap-3 text-[10px] font-medium tracking-[0.14em] uppercase text-sunflower mb-8">
              <div className="w-4 h-[1px] bg-sunflower"></div> Connect
            </div>
            <ul className="space-y-5">
              <li>
                <span className="text-[10px] font-medium tracking-[0.12em] uppercase text-white/30 block mb-1">Address</span>
                <span className="text-[14px] font-light text-white/50 leading-[1.7]">{siteData.address}</span>
              </li>
              <li>
                <span className="text-[10px] font-medium tracking-[0.12em] uppercase text-white/30 block mb-1">Phone</span>
                <span className="text-[14px] font-light text-white/50">{siteData.phone}</span>
              </li>
              <li>
                <span className="text-[10px] font-medium tracking-[0.12em] uppercase text-white/30 block mb-1">Email</span>
                <a href={`mailto:${siteData.email}`} className="text-[14px] font-light text-white/50 hover:text-sunflower transition-colors">{siteData.email}</a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[12px] font-light text-white/30 tracking-wide">
            © {currentYear} {siteData.companyName}. All rights reserved.
          </p>
          <p className="text-[12px] font-light text-white/30 tracking-wide">
            Crafted by <a href={siteData.developerLink} target="_blank" rel="noopener noreferrer" className="text-sunflower/60 hover:text-sunflower transition-colors">Sakeeb</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
