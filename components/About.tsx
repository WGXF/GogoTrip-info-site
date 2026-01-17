
import React from 'react';
import { Heart, Globe, Shield, Zap } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section className="pt-32 pb-24 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        {/* Intro */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              We're changing how the world <span className="text-blue-600">explores</span>
            </h1>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              GoGoTrip was born from a simple frustration: travel is amazing, but planning it is a headache. We believe that everyone deserves a perfectly tailored journey without spending weeks on research.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              By combining cutting-edge AI with a passion for discovery, we've built a platform that understands your travel style better than you do. From hidden alleyways in Tokyo to the best tacos in Austin, we're here to guide you.
            </p>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
               <img src="https://picsum.photos/800/800?grayscale" alt="Team working" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl border border-slate-100 max-w-xs">
              <p className="font-bold text-slate-900 text-lg">"Travel is the only thing you buy that makes you richer."</p>
            </div>
          </div>
        </div>

        {/* Values */}
        <div>
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-16">Our Core Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Heart, title: 'Traveler First', text: 'Every feature we build starts with the user experience.' },
              { icon: Globe, title: 'Global Mindset', text: 'We celebrate diversity in culture, food, and people.' },
              { icon: Zap, title: 'Innovation', text: 'We push the boundaries of what AI can do for travel.' },
              { icon: Shield, title: 'Trust & Safety', text: 'Your data and your journey are safe with us.' }
            ].map((value, idx) => (
              <div key={idx} className="bg-slate-50 p-8 rounded-2xl text-center hover:bg-slate-100 transition-colors">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm text-blue-600">
                  <value.icon className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-lg text-slate-900 mb-2">{value.title}</h3>
                <p className="text-slate-600">{value.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
