import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf, MapPin, Phone, Mail, ArrowRight } from 'lucide-react';
import siteData from '../../data/siteData.json';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8 border-t border-slate-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Company Info */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2 group mb-4">
              <div className="bg-brand-500 p-2 rounded-lg text-white">
                <Leaf size={24} />
              </div>
              <span className="font-display font-bold text-2xl tracking-tight text-white">
                GE <span className="text-brand-400">Enterprise</span>
              </span>
            </Link>
            <p className="text-slate-400 leading-relaxed text-sm">
              {siteData.description}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-display font-semibold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: 'Home', path: '/' },
                { name: 'About Us', path: '/about' },
                { name: 'Products', path: '/products' },
                { name: 'Certifications', path: '/certifications' },
                { name: 'Contact Us', path: '/contact' }
              ].map((item) => (
                <li key={item.name}>
                  <Link 
                    to={item.path} 
                    className="hover:text-brand-400 transition-colors flex items-center gap-2 group text-sm text-slate-400"
                  >
                    <ArrowRight size={14} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all text-brand-400" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Products (placeholder logic) */}
          <div>
            <h4 className="text-white font-display font-semibold text-lg mb-6">Popular Products</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li><Link to="/products" className="hover:text-brand-400 transition-colors">Banana Powder</Link></li>
              <li><Link to="/products" className="hover:text-brand-400 transition-colors">Mango Powder</Link></li>
              <li><Link to="/products" className="hover:text-brand-400 transition-colors">Tomato Powder</Link></li>
              <li><Link to="/products" className="mt-2 inline-block text-brand-400 hover:underline">Explore all →</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-display font-semibold text-lg mb-6">Connect With Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-slate-400">
                <MapPin size={18} className="text-brand-400 shrink-0 mt-0.5" />
                <span>{siteData.address}</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-slate-400">
                <Phone size={18} className="text-brand-400 shrink-0" />
                <span>{siteData.phone}</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-slate-400">
                <Mail size={18} className="text-brand-400 shrink-0" />
                <a href={`mailto:${siteData.email}`} className="hover:text-brand-400 transition-colors">{siteData.email}</a>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500">
          <p>&copy; {currentYear} {siteData.companyName}. All rights reserved.</p>
          <p>
            Developed by <a href={siteData.developerLink} target="_blank" rel="noopener noreferrer" className="text-brand-400 hover:text-brand-300">Sakeeb</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
