import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import GeminiDemo from './components/GeminiDemo';
import Footer from './components/Footer';
import Pricing from './components/Pricing';
import About from './components/About';
import Merchants from './components/Merchants';
import Blog from './components/Blog';
import { Page } from './types';

function App() {
  const [activePage, setActivePage] = useState<Page>('home');

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-blue-200 selection:text-blue-900 flex flex-col">
      <Navbar activePage={activePage} onNavigate={setActivePage} />
      
      <main className="flex-grow">
        {activePage === 'home' && (
          <>
            <Hero />
            {/* We can show a preview of features on home, or just the demo. 
                Let's show the features section as a preview on Home as well. */}
            <div className="bg-white">
               <Features />
            </div>
            <GeminiDemo />
          </>
        )}
        
        {activePage === 'features' && (
          <div className="pt-10">
            <Features />
            <section className="bg-blue-600 py-16 text-center text-white">
                <div className="max-w-4xl mx-auto px-6">
                    <h2 className="text-3xl font-bold mb-4">Ready to try these features?</h2>
                    <button 
                        onClick={() => setActivePage('home')} 
                        className="px-8 py-3 bg-white text-blue-600 rounded-lg font-bold hover:bg-slate-100 transition-colors"
                    >
                        Try AI Demo Now
                    </button>
                </div>
            </section>
          </div>
        )}
        
        {activePage === 'pricing' && <Pricing />}
        
        {activePage === 'about' && <About />}
        
        {activePage === 'merchants' && <Merchants />}

        {activePage === 'blog' && <Blog />}

        {/* Global Call to Action Banner (only on Home and Features to avoid clutter on Pricing/About/Merchants) */}
        {(activePage === 'home' || activePage === 'features') && (
          <section className="py-20 bg-slate-900">
              <div className="max-w-4xl mx-auto px-6 text-center text-white">
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to explore the world?</h2>
                  <p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto">
                      Join thousands of travelers who are planning better, faster, and smarter with GogoTrip.
                  </p>
                  <a 
                      href="https://gogotrip.teocodes.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-10 py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-colors shadow-xl shadow-blue-900/50"
                  >
                      Get Started for Free
                  </a>
              </div>
          </section>
        )}
      </main>
      
      <Footer />
    </div>
  );
}

export default App;