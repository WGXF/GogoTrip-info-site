import React, { useState } from 'react';
import { TrendingUp, Target, Store, MessageSquare, CheckCircle, Send } from 'lucide-react';

const Merchants: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    businessName: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setTimeout(() => {
      setSubmitted(true);
      setFormState({ name: '', businessName: '', email: '', message: '' });
    }, 1000);
  };

  return (
    <section className="pt-32 pb-24 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-bold mb-6">
              <Store className="w-4 h-4" /> For Business Owners
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              Reach Travelers <span className="text-blue-600">Before</span> They Arrive
            </h1>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              GogoTrip connects your local business with thousands of travelers actively planning their itinerary. Become a "Must See" or "Local Bite" recommendation powered by our AI context engine.
            </p>
            <div className="flex gap-4">
              <button 
                onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold transition-all shadow-lg shadow-blue-600/20"
              >
                Start Advertising
              </button>
              <a href="#benefits" className="px-8 py-4 bg-slate-100 hover:bg-slate-200 text-slate-900 rounded-xl font-bold transition-all">
                Learn More
              </a>
            </div>
          </div>
          <div className="relative">
             <div className="bg-slate-900 rounded-2xl p-6 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                {/* Mock Ad Preview */}
                <div className="flex items-center gap-3 mb-4 border-b border-slate-700 pb-4">
                  <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">GT</div>
                  <div>
                    <div className="text-white font-bold">GogoTrip App</div>
                    <div className="text-slate-400 text-xs">Suggested for you</div>
                  </div>
                </div>
                <div className="bg-slate-800 rounded-xl overflow-hidden mb-4">
                  <img src="https://picsum.photos/600/400" alt="Restaurant interior" className="w-full h-48 object-cover opacity-80" />
                  <div className="p-4">
                    <div className="text-xs font-bold text-blue-400 mb-1 uppercase tracking-wide">Sponsored • Local Bite</div>
                    <h3 className="text-white text-lg font-bold mb-2">Joe's Authentic Ramen</h3>
                    <p className="text-slate-400 text-sm">"The best miso broth in the city! Just 5 minutes from your hotel."</p>
                  </div>
                </div>
                <div className="flex justify-between items-center text-slate-400 text-sm">
                  <span>📍 0.2 mi away</span>
                  <span className="text-yellow-500">★★★★★ (452)</span>
                </div>
             </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div id="benefits" className="mb-24">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-16">Why Partner With GogoTrip?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">High Intent Audience</h3>
              <p className="text-slate-600">
                Unlike social media, our users are actively looking for places to eat, sleep, and visit right now.
              </p>
            </div>
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
              <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center mb-6">
                <TrendingUp className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Contextual AI Placement</h3>
              <p className="text-slate-600">
                Our AI suggests your business exactly when it fits the user's vibe, budget, and location.
              </p>
            </div>
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
              <div className="w-12 h-12 bg-green-100 text-green-600 rounded-xl flex items-center justify-center mb-6">
                <CheckCircle className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Verified Partner Badge</h3>
              <p className="text-slate-600">
                Stand out on the map with a verified badge that builds trust with international travelers.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Form - Light Theme */}
        <div id="contact-form" className="max-w-2xl mx-auto bg-slate-50 rounded-3xl shadow-xl border border-slate-200 p-8 md:p-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-2">Join the Network</h2>
            <p className="text-slate-600">Tell us about your business and we'll be in touch with pricing options.</p>
          </div>

          {submitted ? (
             <div className="bg-white text-slate-900 p-8 rounded-2xl text-center border border-slate-200 shadow-sm">
               <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                 <CheckCircle className="w-8 h-8" />
               </div>
               <h3 className="text-2xl font-bold mb-2">Request Received!</h3>
               <p className="text-slate-600">Thanks for your interest. Our partnership team will contact you within 24 hours.</p>
               <button 
                 onClick={() => setSubmitted(false)} 
                 className="mt-6 text-green-600 font-bold hover:underline"
               >
                 Send another request
               </button>
             </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Your Name</label>
                  <input 
                    type="text" 
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({...formState, name: e.target.value})}
                    className="w-full px-4 py-3 rounded-lg bg-white border border-slate-200 text-slate-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Business Name</label>
                  <input 
                    type="text" 
                    required
                    value={formState.businessName}
                    onChange={(e) => setFormState({...formState, businessName: e.target.value})}
                    className="w-full px-4 py-3 rounded-lg bg-white border border-slate-200 text-slate-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    placeholder="Joe's Ramen"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Email Address</label>
                <input 
                  type="email" 
                  required
                  value={formState.email}
                  onChange={(e) => setFormState({...formState, email: e.target.value})}
                  className="w-full px-4 py-3 rounded-lg bg-white border border-slate-200 text-slate-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Tell us about your business</label>
                <textarea 
                  rows={4}
                  required
                  value={formState.message}
                  onChange={(e) => setFormState({...formState, message: e.target.value})}
                  className="w-full px-4 py-3 rounded-lg bg-white border border-slate-200 text-slate-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  placeholder="We are a local restaurant looking to attract more tourists..."
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-600/20"
              >
                <Send className="w-5 h-5" /> Submit Inquiry
              </button>
            </form>
          )}
        </div>

      </div>
    </section>
  );
};

export default Merchants;