import React from 'react';
import { motion } from 'motion/react';
import { Send, Calendar, Mail, Phone, Instagram, Youtube, Linkedin, Facebook } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-brand-light">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 md:gap-20">
          <div>
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-brand-primary font-mono text-xs tracking-[0.3em] uppercase mb-4 block"
            >
              Get in Touch
            </motion.span>
            <h2 className="text-4xl md:text-5xl font-display font-bold mt-4 mb-8 leading-tight">Let's Create <br />Something <span className="text-brand-primary italic">Rhythmic</span></h2>
            <p className="text-brand-dark/60 text-base md:text-lg mb-12 max-w-md leading-relaxed">
              Available for global performances, workshops, and creative consulting. Let's discuss how we can collaborate.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-6 md:gap-8">
  <motion.div 
    whileHover={{ x: 10 }}
    className="flex items-center gap-6 group"
  >
    <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-all duration-300">
      <Mail size={24} />
    </div>
    <div>
      <p className="text-[10px] font-mono uppercase tracking-widest opacity-40">Email</p>
      <a href="mailto:Kirafrica.com@gmail.com" className="text-base md:text-lg font-bold hover:text-brand-primary transition-colors">
        Kirafrica.com@gmail.com
      </a>
    </div>
  </motion.div>

  <motion.div 
    whileHover={{ x: 10 }}
    className="flex items-center gap-6 group"
  >
    <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-all duration-300">
      <Phone size={24} />
    </div>
    <div>
      <p className="text-[10px] font-mono uppercase tracking-widest opacity-40">Phone</p>
      <a href="tel:+2348000000000" className="text-base md:text-lg font-bold hover:text-brand-primary transition-colors">
        +234 800 000 0000
      </a>
    </div>
  </motion.div>

  <motion.div 
    whileHover={{ x: 10 }}
    className="flex items-center gap-6 group"
  >
    <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-all duration-300">
      <Instagram size={24} />
    </div>
    <div>
      <p className="text-[10px] font-mono uppercase tracking-widest opacity-40">Instagram</p>
      <a href="https://instagram.com/kira.Africa" target="_blank" rel="noopener noreferrer" className="text-base md:text-lg font-bold hover:text-brand-primary transition-colors">
        @kira.Africa
      </a>
    </div>
  </motion.div>

  <motion.div 
    whileHover={{ x: 10 }}
    className="flex items-center gap-6 group"
  >
    <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-all duration-300">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.253 5.622 5.911-5.622Zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    </div>
    <div>
      <p className="text-[10px] font-mono uppercase tracking-widest opacity-40">Twitter / X</p>
      <a href="https://twitter.com/kirafrica" target="_blank" rel="noopener noreferrer" className="text-base md:text-lg font-bold hover:text-brand-primary transition-colors">
        @kirafrica
      </a>
    </div>
  </motion.div>

  <motion.div 
    whileHover={{ x: 10 }}
    className="flex items-center gap-6 group"
  >
    <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-all duration-300">
      <Linkedin size={24} />
    </div>
    <div>
      <p className="text-[10px] font-mono uppercase tracking-widest opacity-40">LinkedIn</p>
      <a href="https://linkedin.com/in/esther-akintade" target="_blank" rel="noopener noreferrer" className="text-base md:text-lg font-bold hover:text-brand-primary transition-colors">
        Esther Akintade (Kira Africa)
      </a>
    </div>
  </motion.div>

  <motion.div 
    whileHover={{ x: 10 }}
    className="flex items-center gap-6 group"
  >
    <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-all duration-300">
      <Facebook size={24} />
    </div>
    <div>
      <p className="text-[10px] font-mono uppercase tracking-widest opacity-40">Facebook</p>
      <a href="https://facebook.com/KiraAfrica" target="_blank" rel="noopener noreferrer" className="text-base md:text-lg font-bold hover:text-brand-primary transition-colors">
        Kira Africa
      </a>
    </div>
  </motion.div>

  <motion.div 
    whileHover={{ x: 10 }}
    className="flex items-center gap-6 group"
  >
    <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-all duration-300">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z"/>
      </svg>
    </div>
    <div>
      <p className="text-[10px] font-mono uppercase tracking-widest opacity-40">TikTok</p>
      <a href="https://tiktok.com/@kiraofafrica" target="_blank" rel="noopener noreferrer" className="text-base md:text-lg font-bold hover:text-brand-primary transition-colors">
        @kiraofafrica
      </a>
    </div>
  </motion.div>
</div>

            <div className="mt-12 pt-12 border-t border-brand-dark/5">
              <p className="text-[10px] font-mono uppercase tracking-widest opacity-40 mb-6">Booking Process</p>
              <div className="space-y-4">
                {[
                  'Submit a request through the form',
                  'Provide event details (date, location, type)',
                  'Receive availability and booking details',
                  'Confirm and prepare for a cultural experience'
                ].map((step, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm font-bold text-brand-dark/60">
                    <span className="text-brand-green">0{i+1}</span>
                    {step}
                  </div>
                ))}
              </div>
            </div>

            {/* <div className="mt-12 pt-12 border-t border-brand-dark/5">
              <p className="text-[10px] font-mono uppercase tracking-widest opacity-40 mb-6">Social Presence</p>
              <div className="flex flex-wrap gap-4">
                <motion.a
                  href="https://instagram.com/kira.Africa"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-brand-dark hover:text-brand-primary transition-colors"
                  title="Instagram: @kira.Africa"
                >
                  <Instagram size={20} />
                </motion.a>
                <motion.a
                  href="https://twitter.com/kirafrica"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-brand-dark hover:text-brand-primary transition-colors"
                  title="Twitter: @kirafrica"
                >
                  
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.253 5.622 5.911-5.622Zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </motion.a>
                <motion.a
                  href="https://linkedin.com/in/esther-akintade"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-brand-dark hover:text-brand-primary transition-colors"
                  title="LinkedIn: Esther Akintade (Kira Africa)"
                >
                  <Linkedin size={20} />
                </motion.a>
                <motion.a
                  href="https://facebook.com/KiraAfrica"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-brand-dark hover:text-brand-primary transition-colors"
                  title="Facebook: Kira Africa"
                >
                  <Facebook size={20} />
                </motion.a>
                <motion.a
                  href="https://tiktok.com/@kiraofafrica"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-brand-dark hover:text-brand-primary transition-colors"
                  title="TikTok: Kira of Africa"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z"/>
                  </svg>
                </motion.a>
              </div>
            </div> */}
          </div>


{/* contact form */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl shadow-brand-dark/5 border border-brand-dark/5"
          >
            <form className="space-y-6">
  <div className="grid md:grid-cols-2 gap-6">
    <div className="space-y-2">
      <label className="text-[10px] font-bold uppercase tracking-widest opacity-60 ml-1">Full Name</label>
      <input type="text" className="w-full bg-brand-light border-none rounded-2xl p-4 md:p-5 focus:ring-2 focus:ring-brand-primary/20 transition-all text-sm" placeholder="John Doe" />
    </div>
    <div className="space-y-2">
      <label className="text-[10px] font-bold uppercase tracking-widest opacity-60 ml-1">Email Address</label>
      <input type="email" className="w-full bg-brand-light border-none rounded-2xl p-4 md:p-5 focus:ring-2 focus:ring-brand-primary/20 transition-all text-sm" placeholder="john@example.com" />
    </div>
  </div>

  <div className="space-y-2">
    <label className="text-[10px] font-bold uppercase tracking-widest opacity-60 ml-1">Service Interest</label>
    <select className="w-full bg-brand-light border-none rounded-2xl p-4 md:p-5 focus:ring-2 focus:ring-brand-primary/20 transition-all text-sm appearance-none">
      <option>Performance</option>
      <option>Workshop</option>
      <option>Speaking</option>
      <option>Consulting</option>
    </select>
  </div>

  <div className="grid md:grid-cols-2 gap-6">
    <div className="space-y-2">
      <label className="text-[10px] font-bold uppercase tracking-widest opacity-60 ml-1">Event Date</label>
      <input type="date" className="w-full bg-brand-light border-none rounded-2xl p-4 md:p-5 focus:ring-2 focus:ring-brand-primary/20 transition-all text-sm" />
    </div>
    <div className="space-y-2">
      <label className="text-[10px] font-bold uppercase tracking-widest opacity-60 ml-1">Event Type</label>
      <select className="w-full bg-brand-light border-none rounded-2xl p-4 md:p-5 focus:ring-2 focus:ring-brand-primary/20 transition-all text-sm appearance-none">
        <option>Concert / Live Show</option>
        <option>Corporate Event</option>
        <option>Wedding / Private</option>
        <option>Festival</option>
        <option>Workshop / Class</option>
        <option>Other</option>
      </select>
    </div>
  </div>

  <div className="space-y-2">
    <label className="text-[10px] font-bold uppercase tracking-widest opacity-60 ml-1">Event Location</label>
    <input type="text" className="w-full bg-brand-light border-none rounded-2xl p-4 md:p-5 focus:ring-2 focus:ring-brand-primary/20 transition-all text-sm" placeholder="City, Country" />
  </div>

  <div className="space-y-2">
    <label className="text-[10px] font-bold uppercase tracking-widest opacity-60 ml-1">Message</label>
    <textarea rows={4} className="w-full bg-brand-light border-none rounded-2xl p-4 md:p-5 focus:ring-2 focus:ring-brand-primary/20 transition-all text-sm" placeholder="Tell me about your project..."></textarea>
  </div>

  <motion.button 
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
    className="w-full bg-brand-primary text-white py-5 rounded-2xl font-bold uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-brand-dark transition-all shadow-xl shadow-brand-primary/20"
  >
    Send Message
    <Send size={18} />
  </motion.button>
</form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;