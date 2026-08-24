import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Linkedin, Instagram, Twitter, Facebook } from 'lucide-react';
import Logo from './Logo';

const Footer = () => {
  return (
    <footer className="bg-navy-primary text-white pt-16 pb-8 border-t-2 border-gold-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          
          {/* Col 1: Brand Info */}
          <div className="space-y-4">
            <Logo variant="dark" />
            <p className="text-slate-grey text-xs md:text-sm leading-relaxed mt-4 font-sans max-w-sm">
              ASHWA REALTORS provides bespoke property advisory services across premium residential, commercial, and investment portfolios with absolute discretion and market expertise.
            </p>
            {/* Social Icons */}
            <div className="flex items-center space-x-3 pt-2">
              <a href="#linkedin" className="w-9 h-9 rounded-full bg-navy-deep border border-gold-primary/30 flex items-center justify-center text-slate-grey hover:text-gold-primary hover:border-gold-primary transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#instagram" className="w-9 h-9 rounded-full bg-navy-deep border border-gold-primary/30 flex items-center justify-center text-slate-grey hover:text-gold-primary hover:border-gold-primary transition-colors" aria-label="Instagram">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#twitter" className="w-9 h-9 rounded-full bg-navy-deep border border-gold-primary/30 flex items-center justify-center text-slate-grey hover:text-gold-primary hover:border-gold-primary transition-colors" aria-label="Twitter">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#facebook" className="w-9 h-9 rounded-full bg-navy-deep border border-gold-primary/30 flex items-center justify-center text-slate-grey hover:text-gold-primary hover:border-gold-primary transition-colors" aria-label="Facebook">
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h3 className="font-serif text-lg font-semibold tracking-wider text-gold-primary mb-4 flex items-center gap-2">
              <span>Quick Links</span>
              <span className="h-[1px] w-8 bg-gold-primary/40"></span>
            </h3>
            <ul className="space-y-2.5 text-xs uppercase tracking-widest font-sans">
              <li>
                <Link to="/" className="text-slate-grey hover:text-gold-primary transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-primary"></span>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-slate-grey hover:text-gold-primary transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-primary"></span>
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-slate-grey hover:text-gold-primary transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-primary"></span>
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-slate-grey hover:text-gold-primary transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-primary"></span>
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Practice Areas */}
          <div>
            <h3 className="font-serif text-lg font-semibold tracking-wider text-gold-primary mb-4 flex items-center gap-2">
              <span>Advisory Practice</span>
              <span className="h-[1px] w-8 bg-gold-primary/40"></span>
            </h3>
            <ul className="space-y-2 text-xs text-slate-grey font-sans">
              <li className="hover:text-white transition-colors">Residential Advisory & Luxury Homes</li>
              <li className="hover:text-white transition-colors">Commercial Real Estate Leasing & Sales</li>
              <li className="hover:text-white transition-colors">Property Investment Consultation</li>
              <li className="hover:text-white transition-colors">Legal Title Verification & Assistance</li>
              <li className="hover:text-white transition-colors">Portfolio Restructuring & Valuations</li>
            </ul>
          </div>

          {/* Col 4: Contact Info Placeholders */}
          <div>
            <h3 className="font-serif text-lg font-semibold tracking-wider text-gold-primary mb-4 flex items-center gap-2">
              <span>Advisory Desk</span>
              <span className="h-[1px] w-8 bg-gold-primary/40"></span>
            </h3>
            <ul className="space-y-3 text-xs text-slate-grey font-sans">
              <li className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-gold-primary flex-shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  Flat No. 902, Bronx Rosa Manhattan, Hiranandani Estate, Ghodbunder Road, Thane West, Maharashtra – 400615
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-gold-primary flex-shrink-0" />
                <a href="tel:+919820927491" className="hover:text-gold-primary transition-colors">
                  +91 98209 27491
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-gold-primary flex-shrink-0" />
                <a href="mailto:info@ashwarealtors.com" className="hover:text-gold-primary transition-colors">
                  info@ashwarealtors.com
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Clock className="w-4 h-4 text-gold-primary flex-shrink-0" />
                <span>Mon – Sat: 9:30 AM – 6:30 PM IST</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Footer Bottom / Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-grey font-sans">
          <p className="tracking-wide">
            © 2026 ASHWA REALTORS. All Rights Reserved.
          </p>
          <div className="flex items-center space-x-6 text-[11px] uppercase tracking-widest">
            <Link to="/" className="hover:text-gold-primary transition-colors">Home</Link>
            <span>·</span>
            <Link to="/contact" className="hover:text-gold-primary transition-colors">Contact Us</Link>
            <span>·</span>
            <Link to="/terms" className="hover:text-gold-primary transition-colors">Terms & Conditions</Link>
            <span>·</span>
            <Link to="/privacy" className="hover:text-gold-primary transition-colors">Privacy Policy</Link>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
