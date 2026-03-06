import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Music, ChevronRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/images/100.png'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    document.body.style.overflow = 'unset';
  }, [location]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Brands', href: '/brands' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled ? 'bg-brand-light/90 backdrop-blur-xl py-3 shadow-lg' : 'bg-transparent py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <Link to="/" className="flex items-center group">
              <img 
                src={logo} 
                alt="Kira Africa" 
                className="h-20 md:h-32 w-auto object-contain"
              />
            </Link>
          </motion.div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link, i) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <Link
                  to={link.href}
                  className={`text-xs font-bold uppercase tracking-[0.2em] transition-all hover:text-brand-primary relative group ${
                    location.pathname === link.href ? 'text-brand-primary' : 'text-brand-dark/70'
                  }`}
                >
                  {link.name}
                  <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-primary transition-all duration-300 group-hover:w-full ${
                    location.pathname === link.href ? 'w-full' : ''
                  }`} />
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              <Link
                to="/contact"
                className="bg-brand-primary text-white px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-brand-dark transition-all shadow-lg shadow-brand-primary/20"
              >
                Book Now
              </Link>
            </motion.div>
          </div>

          {/* Mobile Toggle */}
          <motion.button 
            whileTap={{ scale: 0.9 }}
            className="md:hidden w-12 h-12 flex items-center justify-center rounded-2xl bg-brand-dark/5 text-brand-dark hover:bg-brand-primary hover:text-white transition-colors" 
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </motion.button>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsOpen(false)}
                className="fixed inset-0 bg-brand-dark/40 backdrop-blur-sm z-40 md:hidden"
              />
              <motion.div
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'spring', damping: 30, stiffness: 300 }}
                className="fixed top-0 right-0 h-screen w-full sm:w-[400px] bg-brand-light z-50 md:hidden shadow-2xl flex flex-col"
              >
                <div className="p-6 flex justify-between items-center border-b border-brand-dark/5">
                  <Link to="/" onClick={() => setIsOpen(false)}>
                    <img 
                      src={logo} 
                      alt="Kira Africa" 
                      className="h-12 w-auto object-contain"
                    />
                  </Link>
                  <button 
                    onClick={() => setIsOpen(false)} 
                    className="w-12 h-12 flex items-center justify-center hover:bg-brand-dark/5 rounded-2xl transition-colors"
                  >
                    <X size={28} />
                  </button>
                </div>
                
                <div className="flex-1 overflow-y-auto py-8 px-6">
                  <div className="flex flex-col gap-2">
                    {navLinks.map((link, i) => (
                      <motion.div
                        key={link.name}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                      >
                        <Link
                          to={link.href}
                          className={`flex items-center justify-between py-4 border-b border-brand-dark/5 group ${
                            location.pathname === link.href ? 'text-brand-primary' : 'text-brand-dark'
                          }`}
                        >
                          <span className="text-2xl font-display font-bold">{link.name}</span>
                          <ChevronRight className={`transition-transform group-hover:translate-x-1 ${
                            location.pathname === link.href ? 'text-brand-primary' : 'text-brand-dark/20'
                          }`} size={20} />
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="p-8 border-t border-brand-dark/5">
                  <Link
                    to="/contact"
                    className="w-full bg-brand-primary text-white py-4 rounded-2xl font-bold uppercase tracking-widest text-center block shadow-xl shadow-brand-primary/20"
                  >
                    Book Now
                  </Link>
                  <div className="mt-8 flex justify-center gap-6 text-brand-dark/40">
                    <Music size={20} />
                    <span className="text-[10px] font-mono uppercase tracking-[0.3em]">Esther Ogo</span>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </nav>

      {/* Spacer to push content below the navbar */}
      <div className="h-16 md:h-20" />
    </>
  );
};

export default Navbar;