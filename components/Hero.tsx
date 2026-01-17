
import React from 'react';
import { SectionId } from '../types';
import { Map, Compass, ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id={SectionId.HERO} className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-900">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://picsum.photos/1920/1080?grayscale&blur=2"
          alt="Travel Background"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/40 to-slate-50"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-sm font-medium">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Now Live: Gemini 2.5 Integration
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-bold text-white tracking-tight leading-tight">
            Your Personal <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              AI Travel Agent
            </span>
          </h1>
          
          <p className="text-lg lg:text-xl text-slate-300 max-w-xl">
            Stop spending hours researching. GoGoTrip builds personalized itineraries, tracks your budget, and finds hidden gems in seconds.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://gogotrip.teocodes.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold transition-all shadow-lg shadow-blue-600/30 group"
            >
              Start Planning Free
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <button
                onClick={() => document.getElementById(SectionId.DEMO)?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-xl font-semibold transition-all backdrop-blur-sm"
            >
              Try Live Demo
            </button>
          </div>
          
          <div className="flex items-center gap-6 pt-4 text-slate-400 text-sm">
            <div className="flex items-center gap-2">
              <Map className="w-4 h-4 text-blue-400" />
              <span>Smart Itineraries</span>
            </div>
            <div className="flex items-center gap-2">
              <Compass className="w-4 h-4 text-cyan-400" />
              <span>Real-time Discovery</span>
            </div>
          </div>
        </div>

        {/* Hero Illustration / Dashboard Preview */}
        <div className="relative hidden lg:block perspective-1000">
          <div className="relative transform rotate-y-12 rotate-x-6 hover:rotate-0 transition-all duration-700 ease-out shadow-2xl rounded-2xl overflow-hidden border border-slate-700 bg-slate-800">
            <img 
              src="https://picsum.photos/800/600" 
              alt="App Dashboard" 
              className="w-full h-auto opacity-90"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
