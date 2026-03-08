import React from 'react';
import PageTransition from '../components/PageTransition';
import { motion } from 'motion/react';
import { Award, Star, Mic, Newspaper, Globe, Music } from 'lucide-react';

const AboutPage = () => {
  const achievements = [
    { title: "NCIE-UK Creativity and Arts Award", desc: "Recognition for contributions to African creativity and cultural expression in the UK." },
    { title: "London Fashion Week", desc: "Performed African percussion and cultural rhythm on a global fashion platform." },
    { title: "European Bank (EBRD)", desc: "Invited artist for Diversity Week, celebrating global culture and inclusion." },
    { title: "UNISON City of Edinburgh", desc: "Featured for Black History Month celebrations with a cultural percussion performance." },
    { title: "African Scottish Diversity Expo 2025", desc: "Celebrated African heritage and cultural unity through music." },
    { title: "BellAfricana Visionary Creative", desc: "Recognized as an impactful African creative shaping culture and community." },
    { title: "Black Scottish Stories", desc: "Highlighting the journey of a percussionist, founder, and cultural advocate." },
  ];

  const mediaFeatures = [
    { 
      source: "UNISON City of Edinburgh", 
      title: "Black History Month Feature", 
      desc: "Featured in 'Standing Firm in Power and Pride', celebrating Black culture and identity in Edinburgh." 
    },
    { 
      source: "BellAfricana", 
      title: "African Visionary Creatives Spotlight", 
      desc: "Recognized as an innovator and change-maker shaping culture and driving impact." 
    },
    { 
      source: "Black Scottish Stories", 
      title: "Creative Interview Feature", 
      desc: "Exploring the journey of a percussionist and founder promoting African heritage." 
    },
  ];

  return (
    <PageTransition>
      <div className="pt-32 pb-24">
        {/* Bio Section */}
        <section className="max-w-7xl mx-auto px-6 mb-24">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <span className="text-brand-green font-mono text-xs tracking-[0.3em] uppercase mb-4 block">About Esther Akintade</span>
              <h1 className="text-5xl md:text-7xl font-display font-bold mb-8 tracking-tighter leading-none">
                Cultural <br />
                <span className="text-brand-green italic">Ambassador</span>
              </h1>
              <div className="space-y-6 text-brand-dark/70 text-lg leading-relaxed">
                <p className="font-bold text-brand-dark">
                  Esther  Akintade is a Nigerian-born percussionist, cultural ambassador, and creative founder based in the United Kingdom.
                </p>
                <p>
                  Passionate about African rhythm, culture, and storytelling, she uses percussion as a powerful medium to connect people, celebrate heritage, and inspire transformation. Her journey into percussion began with a deep love for African sound and expression.
                </p>
                <p>
                  Over the years, Esther has performed at cultural events, community gatherings, and creative platforms in the UK, including performances at fashion shows and cultural showcases. Her performances are known for their vibrant energy and ability to bring audiences into the spirit of African rhythm and celebration.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/5]"
            >
              <img 
                src="https://res.cloudinary.com/drkksaa3i/image/upload/v1772926667/1G6A3493_qqffjz.jpg" 
                alt="Esther Akintade" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-green/20 to-transparent" />
            </motion.div>
          </div>
        </section>

        {/* Extended Bio Section */}
        <section className="bg-brand-dark text-white py-24 mb-24">
          <div className="max-w-4xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Extended Bio</h2>
              <div className="w-20 h-1 bg-brand-yellow mx-auto" />
            </motion.div>
            <div className="space-y-8 text-white/70 text-lg leading-relaxed">
              <p>
                Esther Ogo Akintade is a percussionist, creative leader, and cultural advocate whose work centers around rhythm, identity, and community impact. Born in Nigeria and now based in the UK, Esther’s journey reflects resilience, passion, and a deep commitment to uplifting African culture and creativity.
              </p>
              <p>
                Her love for percussion grew from a desire to express culture through rhythm. For Esther, drumming is more than performance—it is storytelling, healing, and celebration. She has brought this passion to stages and events across the UK, where her performances create vibrant cultural experiences that connect audiences with African heritage.
              </p>
              <p>
                Beyond the stage, Esther has dedicated her life to building platforms that empower others. She founded Kira Africa Foundation, an initiative focused on supporting mothers and children and creating positive community impact. She also created Kirative Africa, a creative community that celebrates African artists, entrepreneurs, and storytellers while encouraging collaboration and visibility.
              </p>
              <p>
                As the founder of Brandarc Media, Esther works with African-led brands to help them build authentic identities and share their stories with the world. Her work continues to grow at the intersection of culture, creativity, and impact, using rhythm as a universal language that brings people together.
              </p>
            </div>
          </div>
        </section>

        {/* Achievements Section */}
        <section className="max-w-7xl mx-auto px-6 mb-24">
          <h2 className="text-4xl font-display font-bold mb-12 text-center">Key Achievements & Milestones</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {achievements.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 bg-brand-light rounded-3xl border border-brand-dark/5 hover:border-brand-green/20 transition-all group"
              >
                <div className="w-12 h-12 bg-brand-green/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-green group-hover:text-white transition-all">
                  <Star size={24} />
                </div>
                <h3 className="text-xl font-display font-bold mb-3">{item.title}</h3>
                <p className="text-brand-dark/60 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Awards Section */}
        <section className="bg-brand-green py-24 text-white mb-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-white/20 rounded-3xl flex items-center justify-center mb-8">
                  <Award size={32} />
                </div>
                <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">NCIE-UK Creativity and Arts Award</h2>
                <p className="text-white/80 text-xl leading-relaxed mb-8">
                  Awarded by the Nigerian Community in Edinburgh (NCIE-UK) in recognition of outstanding contributions to African creativity and arts in the United Kingdom.
                </p>
                <div className="p-6 bg-white/10 rounded-2xl border border-white/20">
                  <p className="text-sm italic">
                    "Esther Akintade received this recognition for her work as a percussionist and cultural advocate, using African rhythm and performance to celebrate heritage and promote African creativity in the UK."
                  </p>
                </div>
              </motion.div>
              <div className="grid grid-cols-2 gap-4">
  <div className="aspect-square bg-white/5 rounded-3xl border border-white/10 flex items-center justify-center overflow-hidden">
    <img 
      src="https://res.cloudinary.com/drkksaa3i/image/upload/v1772926863/IMG_0118_al8m2a.jpg" 
      alt="" 
      className="w-full h-full object-cover"
    />
  </div>
  <div className="aspect-square bg-white/5 rounded-3xl border border-white/10 flex items-center justify-center mt-12 overflow-hidden">
    <img 
      src="https://res.cloudinary.com/drkksaa3i/image/upload/v1772926932/IMG_0120_ysrrdi.jpg" 
      alt="" 
      className="w-full h-full object-cover"
    />
  </div>
</div>
            </div>
          </div>
        </section>

        {/* Media Features Section */}
        <section className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold mb-4">Media & Press</h2>
            <p className="text-brand-dark/60">Recognition across global and local platforms.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {mediaFeatures.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 bg-white rounded-3xl border border-brand-dark/5 shadow-sm hover:shadow-xl transition-all"
              >
                <div className="flex items-center gap-2 text-brand-green font-bold text-xs uppercase tracking-widest mb-4">
                  <Newspaper size={16} />
                  {item.source}
                </div>
                <h3 className="text-xl font-display font-bold mb-4">{item.title}</h3>
                <p className="text-brand-dark/60 text-sm leading-relaxed mb-6">{item.desc}</p>
                <button className="text-brand-green font-bold text-xs uppercase tracking-widest hover:underline">
                  Read Feature
                </button>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default AboutPage;
