import React, { useState, useEffect } from 'react';
import { Plane, Menu, X } from 'lucide-react';
import { Page } from '../types';

interface NavbarProps {
  activePage: Page;
  onNavigate: (page: Page) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activePage, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (page: Page) => {
    onNavigate(page);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks: { label: string; id: Page }[] = [
    { label: 'Home', id: 'home' },
    { label: 'Features', id: 'features' },
    { label: 'Blog', id: 'blog' },
    { label: 'Pricing', id: 'pricing' },
    { label: 'About', id: 'about' },
    { label: 'Advertise', id: 'merchants' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || activePage !== 'home' ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => handleNavClick('home')}>
          <div className="bg-blue-600 p-2 rounded-lg">
            <Plane className="w-6 h-6 text-white" />
          </div>
          <span className={`text-xl font-bold ${isScrolled || activePage !== 'home' ? 'text-slate-900' : 'text-slate-900 lg:text-white'}`}>
            GogoTrip
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.filter(link => link.id !== 'home').map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`font-medium transition-colors ${
                activePage === item.id 
                  ? 'text-blue-600' 
                  : (isScrolled || activePage !== 'home' ? 'text-slate-600 hover:text-blue-600' : 'text-white/90 hover:text-white')
              }`}
            >
              {item.label}
            </button>
          ))}
          <a
            href="https://gogotrip.teocodes.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium transition-all shadow-lg shadow-blue-600/20"
          >
            Launch App
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-slate-800"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu className={!isScrolled && activePage === 'home' ? 'lg:text-white' : ''} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-slate-100 p-6 flex flex-col gap-4 shadow-xl">
          {navLinks.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`text-left font-medium py-2 ${activePage === item.id ? 'text-blue-600' : 'text-slate-600'}`}
            >
              {item.label}
            </button>
          ))}
          <a
            href="https://gogotrip.teocodes.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-center px-5 py-3 bg-blue-600 text-white rounded-lg font-medium"
          >
            Launch App
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;