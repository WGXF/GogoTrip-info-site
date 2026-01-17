import React, { useState } from 'react';
import { TrendingUp, Target, Store, MessageSquare, CheckCircle, Send, Zap, BellRing, MapPin, Navigation, AlertCircle, Loader2 } from 'lucide-react';

// API Base URL - adjust based on your environment
import { API_BASE_URL } from '../config';


interface FormState {
  name: string;
  businessName: string;
  email: string;
  message: string;
}

interface SubmitState {
  loading: boolean;
  success: boolean;
  error: string | null;
}

const Merchants: React.FC = () => {
  const [formState, setFormState] = useState<FormState>({
    name: '',
    businessName: '',
    email: '',
    message: ''
  });
  
  const [submitState, setSubmitState] = useState<SubmitState>({
    loading: false,
    success: false,
    error: null
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Reset states
    setSubmitState({ loading: true, success: false, error: null });
    
    try {
      const response = await fetch(`${API_BASE_URL}/api/public/inquiry`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          type: 'merchant',
          name: formState.name.trim(),
          email: formState.email.trim(),
          businessName: formState.businessName.trim(),
          message: formState.message.trim()
        })
      });
      
      const data = await response.json();
      
      if (response.ok && data.success) {
        // Success - clear form and show success message
        setSubmitState({ loading: false, success: true, error: null });
        setFormState({ name: '', businessName: '', email: '', message: '' });
      } else {
        // API returned an error
        setSubmitState({ 
          loading: false, 
          success: false, 
          error: data.error || 'Failed to submit inquiry. Please try again.' 
        });
      }
    } catch (error) {
      // Network or other error
      console.error('Merchant inquiry submission error:', error);
      setSubmitState({ 
        loading: false, 
        success: false, 
        error: 'Network error. Please check your connection and try again.' 
      });
    }
  };

  const resetForm = () => {
    setSubmitState({ loading: false, success: false, error: null });
  };

  return (
    <section className="pt-32 pb-24 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-bold mb-6">
              <Store className="w-4 h-4" /> Advertising Partners
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              Reach Travelers <span className="text-blue-600">Before</span> They Arrive
            </h1>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              GoGoTrip connects your local business with thousands of travelers actively planning their itinerary. Get featured as a "Must See" landmark or a "Local Bite" recommendation and grow your customer base.
            </p>
            <div className="flex gap-4">
              <button 
                onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold transition-all shadow-lg shadow-blue-600/20"
              >
                Start Advertising
              </button>
            </div>
          </div>
          <div className="relative">
             <div className="bg-slate-900 rounded-2xl p-6 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                {/* Mock Ad Preview */}
                <div className="flex items-center gap-3 mb-4 border-b border-slate-700 pb-4">
                  <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">GT</div>
                  <div>
                    <div className="text-white font-bold">GoGoTrip App</div>
                    <div className="text-slate-400 text-xs">Featured Recommendation</div>
                  </div>
                </div>
                <div className="bg-slate-800 rounded-xl overflow-hidden mb-4">
                  <img src="https://picsum.photos/600/400" alt="Restaurant interior" className="w-full h-48 object-cover opacity-80" />
                  <div className="p-4">
                    <div className="text-xs font-bold text-blue-400 mb-1 uppercase tracking-wide">Sponsored • Local Bite</div>
                    <h3 className="text-white text-lg font-bold mb-2">Joe's Authentic Ramen</h3>
                    <p className="text-slate-400 text-sm">"The best miso broth in the city! Just 5 minutes from your current location."</p>
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
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-16">Why Advertise with GoGoTrip?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">High Intent Audience</h3>
              <p className="text-slate-600 leading-relaxed">
                Reach travelers who are actively looking for places to eat, sleep, and visit. Your business appears exactly when they are making decisions.
              </p>
            </div>
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
              <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center mb-6">
                <Store className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Premium Local Placement</h3>
              <p className="text-slate-600 leading-relaxed">
                Get your business featured in high-visibility sections like "Local Bites" or "Must See" landmarks, ensuring you stand out from the competition.
              </p>
            </div>
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
              <div className="w-12 h-12 bg-green-100 text-green-600 rounded-xl flex items-center justify-center mb-6">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Bring Customers to Your Door</h3>
              <p className="text-slate-600 leading-relaxed">
                Every ad includes direct navigation links, making it effortless for travelers to find and visit your location.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Form - Light Theme */}
        <div id="contact-form" className="max-w-2xl mx-auto bg-slate-50 rounded-3xl shadow-xl border border-slate-200 p-8 md:p-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-2">Join the Network</h2>
            <p className="text-slate-600">Tell us about your business and we'll be in touch with advertising options.</p>
          </div>

          {submitState.success ? (
             <div className="bg-white text-slate-900 p-8 rounded-2xl text-center border border-slate-200 shadow-sm">
               <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                 <CheckCircle className="w-8 h-8" />
               </div>
               <h3 className="text-2xl font-bold mb-2">Request Received!</h3>
               <p className="text-slate-600">Thanks for your interest. Our advertising team will contact you within 24 hours.</p>
               <button 
                 onClick={resetForm} 
                 className="mt-6 text-green-600 font-bold hover:underline"
               >
                 Send another request
               </button>
             </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Error Message */}
              {submitState.error && (
                <div className="bg-red-50 border border-red-200 rounded-xl p-4 flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-red-700 font-medium">Submission Failed</p>
                    <p className="text-red-600 text-sm">{submitState.error}</p>
                  </div>
                </div>
              )}

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Your Name</label>
                  <input 
                    type="text" 
                    required
                    disabled={submitState.loading}
                    value={formState.name}
                    onChange={(e) => setFormState({...formState, name: e.target.value})}
                    className="w-full px-4 py-3 rounded-lg bg-white border border-slate-200 text-slate-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Business Name</label>
                  <input 
                    type="text" 
                    required
                    disabled={submitState.loading}
                    value={formState.businessName}
                    onChange={(e) => setFormState({...formState, businessName: e.target.value})}
                    className="w-full px-4 py-3 rounded-lg bg-white border border-slate-200 text-slate-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    placeholder="Joe's Ramen"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Email Address</label>
                <input 
                  type="email" 
                  required
                  disabled={submitState.loading}
                  value={formState.email}
                  onChange={(e) => setFormState({...formState, email: e.target.value})}
                  className="w-full px-4 py-3 rounded-lg bg-white border border-slate-200 text-slate-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Tell us about your business</label>
                <textarea 
                  rows={4}
                  required
                  disabled={submitState.loading}
                  value={formState.message}
                  onChange={(e) => setFormState({...formState, message: e.target.value})}
                  className="w-full px-4 py-3 rounded-lg bg-white border border-slate-200 text-slate-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  placeholder="We are a local restaurant looking to attract more tourists..."
                ></textarea>
              </div>

              <button 
                type="submit" 
                disabled={submitState.loading}
                className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-600/20 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-blue-600"
              >
                {submitState.loading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" /> Submitting...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" /> Submit Inquiry
                  </>
                )}
              </button>
            </form>
          )}
        </div>

      </div>
    </section>
  );
};

export default Merchants;
