import React from 'react';
import { Check, X } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: 'Traveler',
      price: '$0',
      period: 'forever',
      description: 'Perfect for planning your yearly vacation.',
      features: [
        'Basic Itinerary Builder',
        'Smart Checklists',
        'Standard Support'
      ],
      notIncluded: [
        'Real-time Budget Tracking',
        'Instant Translation',
        'Ads-free Experience',
        'Real-time Translation'
      ],
      cta: 'Start for Free',
      href: 'https://gogotrip.teocodes.com/chat',
      popular: false
    },
    {
      name: 'Monthly',
      price: 'RM 19',
      period: 'per month',
      description: 'Gogotrip Premium Access for 1 month.',
      features: [
        'Smart Budget Tracking',
        'Instant AI Translation',
        'Priority Support',
        'Ad-free Experience',
        'Advanced Calendar Sync',
        'Real-time Translation',
        'Checklists with Reminders'
      ],
      notIncluded: [],
      cta: 'Go Pro',
      href: 'https://gogotrip.teocodes.com/billing',
      popular: false
    },
    {
      name: 'Annual',
      price: 'RM 200',
      period: 'per year',
      description: 'Gogotrip Premium Access for 1 year. Save more and enjoy privileged access. You are a loyal user.',
      features: [
        'Everything in Monthly',
        'Smart Budget Tracking',
        'Instant AI Translation',
        'Priority Support',
        'Ad-free Experience',
        'Advanced Calendar Sync',
        'Real-time Translation',
        'Checklists with Reminders'
      ],
      notIncluded: [],
      cta: 'Go Pro',
      href: 'https://gogotrip.teocodes.com/billing',
      popular: true
    },
    {
      name: 'Super Good Lifetime Package',
      price: 'RM 999',
      period: 'one-time',
      description: 'Gogotrip Premium Lifetime Access. You are a super good user.',
      features: [
        'Everything in Yearly',
        'Smart Budget Tracking',
        'Instant AI Translation',
        'Priority Support',
        'Ad-free Experience',
        'Advanced Calendar Sync',
        'Real-time Translation',
        'Checklists with Reminders'
      ],
      notIncluded: [],
      cta: 'Go Pro',
      href: 'https://gogotrip.teocodes.com/billing',
      popular: false
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

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
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
                {plan.notIncluded && plan.notIncluded.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3 opacity-50">
                    <div className="mt-1 p-0.5 bg-slate-100 rounded-full">
                      <X className="w-3 h-3 text-slate-500" />
                    </div>
                    <span className="text-slate-500 text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <a 
                href={plan.href}
                className={`block w-full py-3 rounded-xl font-semibold text-center transition-all ${
                  plan.popular 
                    ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-600/30' 
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-900'
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;