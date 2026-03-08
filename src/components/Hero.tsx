import React from 'react';
import { motion } from 'motion/react';
import { ArrowDownRight, Music } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-12">
      {/* Background 3D-like elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <motion.div 
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-20 -right-20 w-64 md:w-96 h-64 md:h-96 bg-brand-accent/10 rounded-full blur-3xl"
        />
        <motion.div 
          animate={{ 
            rotate: [360, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-20 -left-20 w-80 md:w-[500px] h-80 md:h-[500px] bg-brand-primary/5 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 md:gap-20 items-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left"
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 text-brand-green font-mono text-[10px] md:text-sm tracking-[0.3em] uppercase mb-6 bg-brand-green/5 px-4 py-2 rounded-full border border-brand-green/10"
          >
            Percussionist | Cultural Ambassador | Community Builder
          </motion.div>
          <h1 className="text-5xl sm:text-6xl md:text-8xl font-display font-bold leading-[0.9] mb-8 tracking-tighter">
            ESTHER <br />
            <span className="italic text-brand-yellow">AKINTADE</span>
          </h1>
          <p className="text-base md:text-xl text-brand-dark/70 max-w-md mx-auto md:mx-0 mb-10 leading-relaxed">
            Nigerian-born percussionist, cultural advocate, and founder bridging rhythm, identity, and impact.
          </p>
          
          <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center md:justify-start">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/portfolio"
                className="w-full sm:w-auto bg-brand-dark text-white px-8 py-4 rounded-2xl font-bold uppercase tracking-widest flex items-center justify-center gap-2 group shadow-xl shadow-brand-dark/20"
              >
                Explore My Work
                <ArrowDownRight className="group-hover:rotate-45 transition-transform" size={20} />
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/services"
                className="w-full sm:w-auto border border-brand-dark/20 px-8 py-4 rounded-2xl font-bold uppercase tracking-widest hover:bg-brand-dark/5 transition-colors text-center block"
              >
                My Services
              </Link>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotateY: 45 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative perspective-1000 mt-8 md:mt-0"
        >
          <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl preserve-3d group">
            <img 
              src="https://res.cloudinary.com/drkksaa3i/image/upload/v1772926175/IMG_0114_znapqz.jpg" 
              alt="Esther Ogo Akintade" 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/60 via-transparent to-transparent" />
            
            {/* Floating 3D Badge */}
            <motion.div
              animate={{ 
                y: [0, -15, 0],
                rotateZ: [-3, 3, -3]
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-6 left-6 right-6 md:-bottom-6 md:-right-6 md:left-auto md:w-64 bg-brand-green text-white p-6 rounded-2xl shadow-2xl font-display font-bold text-lg md:text-xl backdrop-blur-md bg-brand-green/90"
            >
              KIRA AFRICA <br />
              <span className="text-[10px] md:text-xs font-sans font-normal opacity-80 uppercase tracking-widest block mt-1">Foundation Impact</span>
              {/* <div className="mt-4 h-1.5 w-full bg-white/20 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: '95%' }}
                  className="h-full bg-brand-yellow"
                />
              </div> */}
            </motion.div>
          </div>
          
          {/* Mobile-only floating elements */}
          <div className="md:hidden">
            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-4 -left-4 w-12 h-12 bg-brand-primary rounded-xl flex items-center justify-center text-white shadow-lg"
            >
              <Music size={20} />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
