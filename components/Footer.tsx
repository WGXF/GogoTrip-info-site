
import React from 'react';
import { Plane } from 'lucide-react';
import { Page } from '../types';

interface FooterProps {
  onNavigate: (page: Page) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleNav = (page: Page) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6 cursor-pointer" onClick={() => handleNav('home')}>
              <div className="bg-blue-600 p-2 rounded-lg">
                <Plane className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">GoGoTrip</span>
            </div>
            <p className="text-slate-400 max-w-sm mb-6">
              The world is a book and those who do not travel read only one page. Let GoGoTrip write your next chapter with the power of AI.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Service</h4>
            <ul className="space-y-4 text-slate-400">
              <li><button onClick={() => handleNav('features')} className="hover:text-white transition-colors text-left">Features</button></li>
              <li><button onClick={() => handleNav('pricing')} className="hover:text-white transition-colors text-left">Pricing</button></li>
              <li><button onClick={() => handleNav('merchants')} className="hover:text-white transition-colors text-left">Advertise</button></li>
              <li><a href="https://gogotrip.teocodes.com/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Web App</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Company</h4>
            <ul className="space-y-4 text-slate-400">
              <li><button onClick={() => handleNav('about')} className="hover:text-white transition-colors text-left">About</button></li>
              <li><button onClick={() => handleNav('contact')} className="hover:text-white transition-colors text-left">Contact</button></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 text-center text-slate-500 text-sm flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} TeoCodes. All rights reserved.</p>
          <div className="flex gap-6">
            <button onClick={() => handleNav('privacy')} className="hover:text-white transition-colors">Privacy Policy</button>
            <button onClick={() => handleNav('terms')} className="hover:text-white transition-colors">Terms of Service</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
