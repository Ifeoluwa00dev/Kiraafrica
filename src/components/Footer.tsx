import React from 'react';
import { Instagram, Linkedin, Music, ArrowUp, Facebook } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import logo from '../assets/images/100.png';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socials = [
    {
      icon: <Instagram size={18} />,
      href: 'https://instagram.com/kira.Africa',
      label: 'Instagram'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.253 5.622 5.911-5.622Zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      ),
      href: 'https://twitter.com/kirafrica',
      label: 'Twitter'
    },
    {
      icon: <Linkedin size={18} />,
      href: 'https://linkedin.com/in/esther-akintade',
      label: 'LinkedIn'
    },
    {
      icon: <Facebook size={18} />,
      href: 'https://facebook.com/KiraAfrica',
      label: 'Facebook'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z"/>
        </svg>
      ),
      href: 'https://tiktok.com/@kiraofafrica',
      label: 'TikTok'
    },
  ];

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
            {/* Mobile socials */}
            <div className="md:hidden">
              <h4 className="font-display font-bold text-lg mb-6">Social</h4>
              <div className="flex flex-wrap gap-3">
                {socials.map((s, i) => (
                  <a key={i} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
                    className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-brand-accent hover:text-brand-dark transition-all">
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="hidden md:block">
            <h4 className="font-display font-bold text-xl mb-6">Connect</h4>
            <div className="flex flex-wrap gap-3">
              {socials.map((s, i) => (
                <motion.a
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  whileHover={{ y: -5 }}
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-accent hover:text-brand-dark transition-all"
                >
                  {s.icon}
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