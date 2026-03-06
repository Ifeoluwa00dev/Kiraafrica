import React from 'react';
import { motion } from 'motion/react';
import { Music, Users, Mic2, Briefcase, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      icon: <Music size={32} />,
      title: 'Performance Services',
      desc: 'Vibrant African percussion performances for cultural festivals, fashion shows, corporate events, and weddings.',
      items: ['Cultural Festivals', 'Fashion Shows', 'Corporate Events', 'Weddings'],
      color: 'bg-brand-green/5',
      accent: 'text-brand-green'
    },
    {
      icon: <Users size={32} />,
      title: 'Workshops & Training',
      desc: 'Interactive percussion workshops designed to introduce participants to the beauty of African rhythm.',
      items: ['Drumming Sessions', 'Storytelling', 'Youth Engagement', 'Educational Programs'],
      color: 'bg-brand-yellow/10',
      accent: 'text-brand-yellow'
    },
    {
      icon: <Mic2 size={32} />,
      title: 'Speaking Engagements',
      desc: 'Sharing insights on African culture, creative communities, and using creativity for social impact.',
      items: ['Cultural Expression', 'Building Communities', 'Social Impact', 'Faith & Purpose'],
      color: 'bg-brand-red/5',
      accent: 'text-brand-red'
    },
    {
      icon: <Briefcase size={32} />,
      title: 'Consulting & Direction',
      desc: 'Cultural consulting and creative direction for projects incorporating authentic African elements.',
      items: ['Cultural Programming', 'Creative Direction', 'Brand Collaboration', 'Storytelling'],
      color: 'bg-brand-dark/5',
      accent: 'text-brand-dark'
    }
  ];

  return (
    <section id="services" className="py-24 bg-brand-light">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-brand-primary font-mono text-xs tracking-[0.3em] uppercase"
          >
            What I Offer
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mt-4 leading-tight">Services & Offerings</h2>
          <p className="text-brand-dark/60 mt-6 text-base md:text-lg">
            From the stage to the boardroom, I bring the rhythm and vision of Africa to every project.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className={`${service.color} p-8 md:p-10 rounded-[2rem] border border-brand-dark/5 shadow-sm hover:shadow-2xl transition-all duration-500 group`}
            >
              <div className={`${service.accent} mb-8 transition-transform group-hover:scale-110 duration-300`}>
                {service.icon}
              </div>
              <h3 className="text-2xl font-display font-bold mb-4">{service.title}</h3>
              <p className="text-brand-dark/70 leading-relaxed text-sm md:text-base mb-6">
                {service.desc}
              </p>
              <ul className="space-y-2 mb-8">
                {service.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-xs font-bold text-brand-dark/40">
                    <div className={`w-1 h-1 rounded-full ${service.accent.replace('text-', 'bg-')}`} />
                    {item}
                  </li>
                ))}
              </ul>
              <Link 
                to="/contact"
                className={`mt-8 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest ${service.accent} hover:text-brand-dark transition-colors`}
              >
                Inquire Now <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
