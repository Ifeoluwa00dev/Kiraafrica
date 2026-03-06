import React from 'react';
import { motion } from 'motion/react';

const About = () => {
  const milestones = [
    { year: '2018', title: 'Journey Began', desc: 'Started exploring traditional African percussion.' },
    { year: '2020', title: 'Kira Africa Founded', desc: 'Launched the foundation to support African arts.' },
    { year: '2022', title: 'Global Recognition', desc: 'Featured in major cultural media outlets.' },
    { year: '2024', title: 'BrandArc Media', desc: 'Expanding creative direction and media services.' },
  ];

  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative z-10"
            >
              <motion.span 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="text-brand-primary font-mono text-xs tracking-[0.3em] uppercase mb-4 block"
              >
                My Story
              </motion.span>
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-8 leading-tight">
                A Rhythmic <br />
                <span className="text-brand-primary italic">Soul with a Vision</span>
              </h2>
              <div className="space-y-6 text-brand-dark/70 text-base md:text-lg leading-relaxed">
                <p>
                  Esther Ogo Akintade is a visionary percussionist and cultural advocate whose work transcends boundaries. Her journey started with a deep-seated passion for the heartbeat of Africa—the drum.
                </p>
                <p>
                  Beyond the stage, Esther is a catalyst for change. As the founder of Kira Africa Foundation, she works tirelessly to empower the next generation of African creatives, ensuring our stories are told with authenticity and power.
                </p>
              </div>
              
              <div className="mt-12 grid grid-cols-2 gap-6 md:gap-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-brand-light p-6 rounded-2xl"
                >
                  <h4 className="text-3xl md:text-4xl font-display font-bold text-brand-primary">10+</h4>
                  <p className="text-[10px] uppercase tracking-widest font-bold opacity-60 mt-1">Years Experience</p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="bg-brand-light p-6 rounded-2xl"
                >
                  <h4 className="text-3xl md:text-4xl font-display font-bold text-brand-primary">50+</h4>
                  <p className="text-[10px] uppercase tracking-widest font-bold opacity-60 mt-1">Events Hosted</p>
                </motion.div>
              </div>
            </motion.div>
            
            {/* Decorative background text - hidden on small mobile */}
            <div className="hidden sm:block absolute -top-10 -left-20 text-[8rem] md:text-[12rem] font-display font-bold text-brand-dark/[0.02] select-none pointer-events-none">
              ESTHER
            </div>
          </div>

          <div className="space-y-10 md:space-y-12 mt-12 md:mt-0">
            <h3 className="text-xl md:text-2xl font-display font-bold border-b border-brand-dark/10 pb-4">Milestones</h3>
            <div className="space-y-8">
              {milestones.map((item, i) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-6 group"
                >
                  <div className="flex flex-col items-center">
                    <div className="text-brand-accent font-mono font-bold text-lg md:text-xl">
                      {item.year}
                    </div>
                    <div className="w-px h-full bg-brand-dark/10 mt-2" />
                  </div>
                  <div className="pb-4">
                    <h4 className="font-display font-bold text-lg md:text-xl group-hover:text-brand-primary transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-brand-dark/60 text-sm md:text-base mt-1 leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
