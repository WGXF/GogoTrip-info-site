import React from 'react';
import { Check, X } from 'lucide-react';

const Pricing: React.FC = () => {
  const plans = [
    {
      name: 'Traveler',
      price: '$0',
      period: 'forever',
      description: 'Perfect for planning your yearly vacation.',
      features: [
        '3 AI Trip Plans per month',
        'Basic Itinerary Builder',
        'Public Trip Sharing',
        'Standard Support'
      ],
      notIncluded: [
        'Real-time Budget Tracking',
        'Offline Access',
        'Collaboration Tools'
      ],
      cta: 'Start for Free',
      popular: false
    },
    {
      name: 'Explorer',
      price: '$9.99',
      period: 'per month',
      description: 'For the frequent flyer who needs flexibility.',
      features: [
        'Unlimited AI Trip Plans',
        'Smart Budget Tracking',
        'Offline Maps & Itineraries',
        'Priority Support',
        'Ad-free Experience',
        'Export to Calendar'
      ],
      notIncluded: [
        'Collaboration Tools'
      ],
      cta: 'Go Pro',
      popular: true
    }
  ];

  return (
    <section className="pt-32 pb-24 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Simple Pricing for <span className="text-blue-600">Smart Travel</span>
          </h2>
          <p className="text-lg text-slate-600">
            Choose the plan that fits your journey. No hidden fees, cancel anytime.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`relative bg-white rounded-2xl p-8 border ${plan.popular ? 'border-blue-500 shadow-xl scale-105 z-10' : 'border-slate-200 shadow-sm'} transition-all duration-300 flex flex-col`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-bold tracking-wide">
                  MOST POPULAR
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-xl font-bold text-slate-900 mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-slate-900">{plan.price}</span>
                  <span className="text-slate-500 text-sm">/{plan.period}</span>
                </div>
                <p className="text-slate-500 mt-4 text-sm">{plan.description}</p>
              </div>

              <div className="flex-1 space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="mt-1 p-0.5 bg-green-100 rounded-full">
                      <Check className="w-3 h-3 text-green-600" />
                    </div>
                    <span className="text-slate-700 text-sm">{feature}</span>
                  </div>
                ))}
                {plan.notIncluded.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3 opacity-50">
                    <div className="mt-1 p-0.5 bg-slate-100 rounded-full">
                      <X className="w-3 h-3 text-slate-500" />
                    </div>
                    <span className="text-slate-500 text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <button 
                className={`w-full py-3 rounded-xl font-semibold transition-all ${
                  plan.popular 
                    ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-600/30' 
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-900'
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;