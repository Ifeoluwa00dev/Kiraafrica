import React from 'react';
import { motion } from 'motion/react';

const AsFeaturedIn = () => {
  const outlets = [
    { name: 'The Sun', link: 'https://thesun.ng/nigerian-female-talking-drummer-kira-africa-performs-at-careed-10th-anniversary-event-in-scotland/' },
    { name: 'Vanguard', link: 'https://www.vanguardngr.com/2026/07/nigerian-talking-drummer-kira-africa-spotlights-african-culture-in-scotland/' },
    { name: 'The Guardian', link: 'https://guardian.ng/guardian-angels/nigerian-female-drummer-takes-african-culture-to-scotland/' },
    { name: 'AllAfrica', link: 'https://allafrica.com/stories/202607030308.html' },
    { name: 'Yoruba FM', link: 'https://www.yorubafm.com/nigeria-nigerian-talking-drummer-kira-africa-spotlights-african-culture-in-scotland/' },
    { name: 'Talented Women Network', link: 'https://talentedwomennetwork.com/she-left-nigeria-with-a-drum-now-shes-speaking-at-universities-across-scotland/' },
  ];

  return (
    <section className="py-14 bg-brand-light border-y border-brand-dark/5">
      <div className="max-w-7xl mx-auto px-6">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-brand-dark/40 font-mono text-[10px] tracking-[0.3em] uppercase mb-8"
        >
          As Featured In
        </motion.p>
        <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
            {[...outlets, ...outlets].map((outlet, i) => (
              <a
                key={`${outlet.name}-${i}`}
                href={outlet.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-dark/50 hover:text-brand-green transition-colors font-display font-bold text-lg md:text-xl tracking-tight shrink-0 px-6 md:px-8"
              >
                {outlet.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AsFeaturedIn;