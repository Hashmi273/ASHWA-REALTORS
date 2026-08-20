import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight, Phone } from 'lucide-react';
import Logo from './Logo';
import Button from './Button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Contact Us', path: '/contact' },
    { name: 'Terms & Conditions', path: '/terms' },
    { name: 'Privacy Policy', path: '/privacy' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-navy-primary/95 backdrop-blur-md shadow-2xl py-3 border-b border-gold-primary/20' 
        : 'bg-navy-primary py-4 border-b border-white/10'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo Mark */}
          <Logo variant="dark" />

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `text-xs uppercase tracking-[0.2em] font-medium transition-all duration-200 relative py-1 ${
                  isActive
                    ? 'text-gold-primary font-semibold'
                    : 'text-gray-300 hover:text-gold-muted'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  Home
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gold-primary rounded-full" />
                  )}
                </>
              )}
            </NavLink>

            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `text-xs uppercase tracking-[0.2em] font-medium transition-all duration-200 relative py-1 ${
                  isActive
                    ? 'text-gold-primary font-semibold'
                    : 'text-gray-300 hover:text-gold-muted'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  Contact Us
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gold-primary rounded-full" />
                  )}
                </>
              )}
            </NavLink>
          </nav>

          {/* Desktop Right CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Button to="/contact" variant="gold" size="sm" icon={ArrowRight}>
              Enquire Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-gold-primary p-2 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      {isOpen && (
        <div className="md:hidden bg-navy-deep border-b border-gold-primary/30 px-4 pt-4 pb-6 space-y-4 shadow-2xl animate-fadeIn">
          <div className="flex flex-col space-y-3 pt-2">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `px-3 py-2 text-sm uppercase tracking-[0.15em] font-medium rounded-sm transition-colors ${
                    isActive
                      ? 'bg-gold-primary/10 text-gold-primary font-semibold border-l-2 border-gold-primary'
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>

          <div className="pt-3 border-t border-white/10 flex flex-col space-y-3">
            <Button to="/contact" variant="gold" size="md" className="w-full" icon={ArrowRight}>
              Enquire Now
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
