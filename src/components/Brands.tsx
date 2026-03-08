import React from 'react';
import { motion } from 'motion/react';
import { Heart, Zap, Globe, ArrowUpRight } from 'lucide-react';

const Brands = () => {
  const brands = [
    {
      name: 'Kira Africa Foundation',
      tagline: 'Compassion & Community',
      desc: 'A community-driven initiative supporting and empowering mothers, children, and vulnerable communities through support programs and engagement.',
      icon: <Heart className="text-brand-red" />,
      stats: 'Uplifting Families',
      color: 'group-hover:bg-brand-red/10'
    },
    {
      name: 'Kirative Africa',
      tagline: 'Creative Community',
      desc: 'A platform dedicated to celebrating and supporting African creatives, connecting artists and innovators globally.',
      icon: <Zap className="text-brand-yellow" />,
      stats: 'Connecting Creatives',
      color: 'group-hover:bg-brand-yellow/10'
    },
    {
      name: 'Brandarc Media',
      tagline: 'Authentic Branding',
      desc: 'A branding and media platform helping African-led brands build authentic identities through storytelling and strategic communication.',
      icon: <Globe className="text-brand-green" />,
      stats: 'Empowering Brands',
      color: 'group-hover:bg-brand-green/10'
    }
  ];

  return (
    <section id="brands" className="py-24 bg-brand-dark text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-20 gap-8">
          <div className="max-w-xl">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-brand-accent font-mono text-xs tracking-[0.3em] uppercase"
            >
              Ecosystem
            </motion.span>
            <h2 className="text-4xl md:text-5xl font-display font-bold mt-4 leading-tight">Foundations & Brands</h2>
          </div>
          <p className="text-white/50 max-w-sm text-sm md:text-base leading-relaxed">
            A collective of initiatives designed to amplify African voices and create sustainable impact.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {brands.map((brand, i) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="relative p-8 md:p-10 rounded-[2.5rem] bg-white/5 border border-white/10 hover:border-white/20 transition-all group overflow-hidden"
            >
              {/* Animated background glow */}
              <div className={`absolute -top-20 -right-20 w-40 h-40 rounded-full blur-[80px] transition-colors duration-500 ${brand.color}`} />
              
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                  {brand.icon}
                </div>
                <h3 className="text-2xl md:text-3xl font-display font-bold mb-2">{brand.name}</h3>
                <p className="text-brand-accent text-[10px] font-bold uppercase tracking-[0.2em] mb-6">
                  {brand.tagline}
                </p>
                <p className="text-white/60 leading-relaxed mb-8 text-sm md:text-base">
                  {brand.desc}
                </p>
                <div className="pt-8 border-t border-white/10 flex justify-between items-center">
                  <div className="flex flex-col">
                    <span className="text-[10px] font-mono text-white/30 uppercase tracking-widest">Impact</span>
                    <span className="text-sm font-bold text-white/80">{brand.stats}</span>
                  </div>
                  
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brands;
