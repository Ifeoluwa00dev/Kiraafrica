import React from 'react';
import Hero from '../components/Hero';
import PageTransition from '../components/PageTransition';
import { motion } from 'motion/react';

const Home = () => {
  return (
    <PageTransition>
      <Hero />
      
      {/* Brand Story Section */}
      <section className="py-24 bg-brand-light">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-8 tracking-tighter">
                Rhythm, Identity, <br />
                <span className="text-brand-green italic">and Impact</span>
              </h2>
              <div className="space-y-6 text-brand-dark/70 text-lg leading-relaxed">
                <p>
                  Esther Akintade is a Nigerian-born percussionist, cultural advocate, and founder whose work bridges rhythm, identity, and impact. Her journey began with a deep love for African sound and storytelling, using percussion not just as music, but as a voice for culture and healing.
                </p>
                <p>
                  After relocating to the UK, Esther expanded her work beyond performance—building platforms that celebrate African creativity, support women and children, and amplify cultural expression.
                </p>
              </div>
              <div className="mt-10">
                <a href="/about" className="inline-flex items-center gap-2 text-brand-green font-bold uppercase tracking-widest text-sm hover:gap-4 transition-all">
                  Read Full Story <span className="text-xl">→</span>
                </a>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl"
            >
              <img 
                src="https://res.cloudinary.com/drkksaa3i/image/upload/v1772926300/1G6A3497_pwaqjn.jpg" 
                alt="Esther Akintade Percussion" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-green/40 to-transparent" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-24 bg-brand-dark text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white/5 p-12 rounded-3xl border border-white/10"
            >
              <div className="w-12 h-12 bg-brand-yellow rounded-2xl flex items-center justify-center mb-8">
                <span className="text-brand-dark font-bold text-xl">V</span>
              </div>
              <h3 className="text-3xl font-display font-bold mb-6">Vision</h3>
              <p className="text-white/60 text-xl leading-relaxed">
                To use rhythm and culture as tools for global connection, healing, and empowerment.
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white/5 p-12 rounded-3xl border border-white/10"
            >
              <div className="w-12 h-12 bg-brand-green rounded-2xl flex items-center justify-center mb-8">
                <span className="text-white font-bold text-xl">M</span>
              </div>
              <h3 className="text-3xl font-display font-bold mb-6">Mission</h3>
              <p className="text-white/60 text-xl leading-relaxed">
                To amplify African creativity, build community-driven platforms, and inspire transformation through music, storytelling, and impact initiatives.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Message Section */}
      <section className="py-24 bg-brand-green text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-4 tracking-tighter">More Than A Performer</h2>
            <p className="text-white/80 text-xl">Impact-driven creativity that moves the soul.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {['Inspired', 'Connected', 'Moved', 'Empowered'].map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="text-5xl md:text-7xl font-display font-bold mb-2 opacity-20">0{i+1}</div>
                <div className="text-xl font-bold uppercase tracking-widest">{item}</div>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white rounded-full blur-[120px]" />
        </div>
      </section>
    </PageTransition>
  );
};

export default Home;
