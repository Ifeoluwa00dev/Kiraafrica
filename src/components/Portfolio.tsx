import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, ExternalLink, Filter } from 'lucide-react';

const Portfolio = () => {
  const [filter, setFilter] = useState('all');

  const items = [
    { id: 1, type: 'performance', title: 'London Fashion Week', image: 'https://picsum.photos/seed/fashion/600/800' },
    { id: 2, type: 'performance', title: 'EBRD Diversity Week', image: 'https://picsum.photos/seed/ebrd/600/800' },
    { id: 3, type: 'foundation', title: 'Kira Africa Foundation', image: 'https://picsum.photos/seed/kira/600/800' },
    { id: 4, type: 'performance', title: 'UNISON Black History Month', image: 'https://picsum.photos/seed/unison/600/800' },
    { id: 5, type: 'media', title: 'Brandarc Media Launch', image: 'https://picsum.photos/seed/brandarc/600/800' },
    { id: 6, type: 'performance', title: 'African Scottish Diversity Expo', image: 'https://picsum.photos/seed/expo/600/800' },
  ];

  const filteredItems = filter === 'all' ? items : items.filter(i => i.type === filter);

  return (
    <section id="portfolio" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 md:mb-16 gap-8">
          <div>
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-brand-primary font-mono text-xs tracking-[0.3em] uppercase mb-4 block"
            >
              Gallery
            </motion.span>
            <h2 className="text-4xl md:text-5xl font-display font-bold leading-tight">Portfolio & Media</h2>
          </div>
          
          <div className="w-full md:w-auto overflow-x-auto pb-4 md:pb-0">
            <div className="flex items-center gap-3 min-w-max">
              <div className="p-2 bg-brand-dark/5 rounded-full text-brand-dark/40 mr-2">
                <Filter size={16} />
              </div>
              {['all', 'performance', 'workshop', 'foundation', 'media'].map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`px-6 py-2.5 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all ${
                    filter === f ? 'bg-brand-primary text-white shadow-lg shadow-brand-primary/20' : 'bg-brand-dark/5 text-brand-dark hover:bg-brand-dark/10'
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <AnimatePresence mode='popLayout'>
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative aspect-[3/4] rounded-[2.5rem] overflow-hidden bg-brand-dark shadow-xl"
              >
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-brand-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8 md:p-10">
                  <span className="text-brand-accent text-[10px] font-mono uppercase tracking-[0.2em] mb-2">
                    {item.type}
                  </span>
                  <h4 className="text-white text-2xl md:text-3xl font-display font-bold mb-6 leading-tight">{item.title}</h4>
                  <div className="flex gap-4">
                    <motion.button 
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white text-brand-dark flex items-center justify-center hover:bg-brand-accent transition-colors shadow-lg"
                    >
                      <Play size={20} fill="currentColor" />
                    </motion.button>
                    <motion.button 
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-white/20 text-white flex items-center justify-center hover:bg-white/10 transition-colors backdrop-blur-md"
                    >
                      <ExternalLink size={20} />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
