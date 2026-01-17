
import React from 'react';
import { SectionId } from '../types';
import { 
  Sparkles, 
  DollarSign, 
  Globe, 
  Languages, 
  ClipboardCheck, 
  CalendarRange 
} from 'lucide-react';

const features = [
  {
    icon: Sparkles,
    title: 'AI-Powered Planning',
    description: 'Tell Gemini your interests and get a tailored day-by-day plan in seconds, not hours.',
    color: 'bg-purple-100 text-purple-600'
  },
  {
    icon: DollarSign,
    title: 'Smart Budgeting',
    description: 'Track expenses in real-time. Split bills with friends and never overspend on your adventures.',
    color: 'bg-green-100 text-green-600'
  },
  {
    icon: Globe,
    title: 'Local Exploring',
    description: 'Get recommendations from locals and AI for authentic food, culture, and hidden spots.',
    color: 'bg-cyan-100 text-cyan-600'
  },
  {
    icon: Languages,
    title: 'Instant Translation',
    description: 'Communicate effortlessly. Use AI to translate menus, street signs, and local conversations in real-time.',
    color: 'bg-orange-100 text-orange-600'
  },
  {
    icon: ClipboardCheck,
    title: 'Smart Checklists',
    description: 'Create to-do lists for packing or tasks, and set reminder times so you never miss a beat.',
    color: 'bg-rose-100 text-rose-600'
  },
  {
    icon: CalendarRange,
    title: 'Calendar Sync',
    description: 'Add your planned trips directly to your personal calendar and manage your full itinerary in one place.',
    color: 'bg-blue-100 text-blue-600'
  }
];

const Features: React.FC = () => {
  return (
    <section id={SectionId.FEATURES} className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
            Everything you need for the <br />
            <span className="gradient-text">Perfect Trip</span>
          </h2>
          <p className="text-slate-600 text-lg">
            GoGoTrip combines advanced AI with practical travel tools to create the ultimate companion for your journeys.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-slate-100">
              <div className={`w-12 h-12 rounded-xl ${feature.color} flex items-center justify-center mb-6`}>
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
