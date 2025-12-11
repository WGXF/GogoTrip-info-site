import React, { useState } from 'react';
import { SectionId, TravelTip } from '../types';
import { generateTravelPreview } from '../services/geminiService';
import { Search, Loader2, MapPin, Coffee, Star } from 'lucide-react';

const GeminiDemo: React.FC = () => {
  const [destination, setDestination] = useState('');
  const [loading, setLoading] = useState(false);
  const [tips, setTips] = useState<TravelTip[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!destination.trim()) return;

    setLoading(true);
    setError(null);
    setTips(null);

    try {
      const result = await generateTravelPreview(destination);
      setTips(result);
    } catch (err) {
      setError("We couldn't reach our AI guide at the moment. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const getIcon = (category: string) => {
    const lower = category.toLowerCase();
    if (lower.includes('food') || lower.includes('bite')) return <Coffee className="w-5 h-5 text-orange-500" />;
    if (lower.includes('gem') || lower.includes('hidden')) return <MapPin className="w-5 h-5 text-purple-500" />;
    return <Star className="w-5 h-5 text-yellow-500" />;
  };

  return (
    <section id={SectionId.DEMO} className="py-24 bg-white relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-64 h-64 bg-blue-50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
        <div className="absolute top-10 right-10 w-64 h-64 bg-cyan-50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-64 h-64 bg-purple-50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 text-white text-sm font-medium mb-6">
            <SparkleIcon /> Powered by Gemini 2.5 Flash
          </div>
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Taste the Magic
          </h2>
          <p className="text-lg text-slate-600">
            See how GogoTrip generates personalized suggestions instantly. Enter a city below.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-2">
          <form onSubmit={handleSearch} className="flex flex-col md:flex-row gap-2">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
              <input
                type="text"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                placeholder="Where do you want to go? (e.g., Kyoto, Paris, Austin)"
                className="w-full pl-12 pr-4 py-4 rounded-xl border-none bg-slate-50 focus:bg-white focus:ring-2 focus:ring-blue-500 transition-all outline-none text-slate-900 placeholder:text-slate-400"
              />
            </div>
            <button
              type="submit"
              disabled={loading || !destination}
              className="px-8 py-4 bg-blue-600 hover:bg-blue-700 disabled:bg-slate-300 disabled:cursor-not-allowed text-white font-semibold rounded-xl transition-colors flex items-center justify-center min-w-[160px]"
            >
              {loading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin mr-2" />
                  Thinking...
                </>
              ) : (
                'Get Insights'
              )}
            </button>
          </form>
        </div>

        {error && (
          <div className="mt-6 p-4 bg-red-50 text-red-600 rounded-xl text-center border border-red-100">
            {error}
          </div>
        )}

        {tips && (
          <div className="mt-12 grid md:grid-cols-3 gap-6 animate-fade-in-up">
            {tips.map((tip, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl shadow-lg border border-slate-100 hover:-translate-y-1 transition-transform duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-slate-50 rounded-lg">
                    {getIcon(tip.category)}
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    {tip.category}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{tip.name}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {tip.description}
                </p>
              </div>
            ))}
          </div>
        )}
        
        {/* Call to action after demo */}
        {tips && (
            <div className="mt-10 text-center animate-fade-in-up delay-100">
                <p className="text-slate-500 mb-4">Want a full itinerary?</p>
                <a 
                    href="https://gogotrip.teocodes.com/"
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800"
                >
                    Build full trip in App <span className="ml-1">→</span>
                </a>
            </div>
        )}
      </div>
    </section>
  );
};

const SparkleIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L14.4 9.6L22 12L14.4 14.4L12 22L9.6 14.4L2 12L9.6 9.6L12 2Z" fill="currentColor"/>
  </svg>
);

export default GeminiDemo;