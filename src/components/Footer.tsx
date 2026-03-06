import React from 'react';
import { Instagram, Youtube, Linkedin, Twitter, Music, ArrowUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import logo from '../assets/images/100.png';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-brand-dark text-white py-16 md:py-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-16 mb-16">
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center mb-6">
              <img
                src={logo}
                alt="Kira Africa"
                className="h-20 md:h-24 w-auto object-contain"
              />
            </Link>
            <p className="text-white/50 max-w-sm leading-relaxed text-sm md:text-base">
              Percussionist, African Enthusiast, and Founder. Dedicated to preserving heritage through modern creative expression.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-1 gap-8">
            <div>
              <h4 className="font-display font-bold text-lg md:text-xl mb-6">Explore</h4>
              <ul className="space-y-4 text-white/60 text-sm">
                <li><Link to="/about" className="hover:text-brand-accent transition-colors">About Me</Link></li>
                <li><Link to="/services" className="hover:text-brand-accent transition-colors">Services</Link></li>
                <li><Link to="/portfolio" className="hover:text-brand-accent transition-colors">Portfolio</Link></li>
                <li><Link to="/brands" className="hover:text-brand-accent transition-colors">Foundations</Link></li>
              </ul>
            </div>
            <div className="md:hidden">
              <h4 className="font-display font-bold text-lg mb-6">Social</h4>
              <div className="flex flex-wrap gap-4">
                {[Instagram, Youtube, Linkedin].map((Icon, i) => (
                  <a key={i} href="#" className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-brand-accent hover:text-brand-dark transition-all">
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="hidden md:block">
            <h4 className="font-display font-bold text-xl mb-6">Connect</h4>
            <div className="flex gap-4">
              {[Instagram, Youtube, Linkedin, Twitter].map((Icon, i) => (
                <motion.a 
                  key={i}
                  href="#" 
                  whileHover={{ y: -5 }}
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-accent hover:text-brand-dark transition-all"
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </div>
            <button 
              onClick={scrollToTop}
              className="mt-8 flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-white/40 hover:text-brand-accent transition-colors group"
            >
              Back to Top <ArrowUp size={14} className="group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-mono text-white/30 uppercase tracking-widest text-center md:text-left">
          <p>© 2024 Esther Ogo Akintade. Crafted with Rhythm.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;