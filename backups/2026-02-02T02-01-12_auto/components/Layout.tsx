
import React, { useState, useEffect } from 'react';
import { Menu as MenuIcon, X, Phone, Instagram, Facebook, Mail, MapPin, Globe } from 'lucide-react';
import { translations } from '../translations';
import CookieConsent from './CookieConsent';

interface LayoutProps {
  children: React.ReactNode;
  activePage: string;
  setActivePage: (page: string) => void;
  lang: 'it' | 'en';
  setLang: (lang: 'it' | 'en') => void;
}

const Layout: React.FC<LayoutProps> = ({ children, activePage, setActivePage, lang, setLang }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const t = translations[lang];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  // Check if we should use the "Transparent/Hero" header style
  const isHeroHeader = activePage === 'home' && !scrolled;

  const navItems = [
    { id: 'home', label: t.home },
    { id: 'menu', label: t.menu },
    { id: 'events', label: t.events },
    { id: 'about', label: t.about },
    { id: 'contact', label: t.contact },
  ];

  const Logo = ({ light = false }: { light?: boolean }) => (
    <div className="flex items-center gap-3 cursor-pointer" onClick={() => { setActivePage('home'); setIsMenuOpen(false); }}>
      <img 
        src={light ? "/logo-long-white.png" : "/logo.jpg"} 
        alt="Napoleone Bistrot" 
        className={`${light ? 'h-16' : 'h-12'} w-auto object-contain transition-all duration-300`} 
      />
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col">
      <nav className={`fixed w-full z-50 transition-all duration-500 ${!isHeroHeader ? 'bg-white/95 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-between items-center">
          <Logo light={isHeroHeader} />

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => setActivePage(item.id)}
                className={`text-sm font-medium tracking-wider uppercase transition-all hover:text-gold ${activePage === item.id ? 'text-gold border-b border-gold' : isHeroHeader ? 'text-white' : 'text-darkGreen'}`}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => setLang(lang === 'it' ? 'en' : 'it')}
              className={`flex items-center gap-1 text-xs font-bold uppercase transition-colors duration-500 ${isHeroHeader ? 'text-white' : 'text-darkGreen'} hover:text-gold`}
            >
              <Globe size={14} /> {lang.toUpperCase()}
            </button>
            <button
              onClick={() => setActivePage('contact')}
              className="bg-sage text-white px-6 py-2 rounded-full text-sm font-bold uppercase tracking-widest hover:bg-darkGreen transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-sage/20"
            >
              {t.bookNow}
            </button>
          </div>

          {/* Mobile Toggle */}
          <button 
            className={`md:hidden p-2 transition-colors duration-300 ${isHeroHeader ? 'text-white' : 'text-gold'}`} 
            onClick={() => setIsMenuOpen(true)}
          >
            <MenuIcon size={28} />
          </button>
        </div>
      </nav>

      {/* NEW MOBILE MENU: More contained, smooth, and rounded */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center p-6 md:hidden">
          {/* Backdrop Blur/Dim */}
          <div 
            className="absolute inset-0 bg-darkGreen/40 backdrop-blur-sm animate-in fade-in duration-500"
            onClick={() => setIsMenuOpen(false)}
          ></div>
          
          {/* Menu Card */}
          <div className="relative w-full max-w-sm bg-cream border-2 border-gold shadow-2xl rounded-[3rem] overflow-hidden flex flex-col animate-[menuIn_0.5s_cubic-bezier(0.16,1,0.3,1)]">
            <div className="napoleon-pattern absolute inset-0 opacity-10 pointer-events-none"></div>
            
            {/* Header of Modal */}
            <div className="flex justify-between items-center p-8 pb-4 relative z-10">
              <Logo />
              <button className="text-gold p-2 hover:bg-gold/10 rounded-full transition-colors" onClick={() => setIsMenuOpen(false)}>
                <X size={28} />
              </button>
            </div>

            {/* Nav Links */}
            <div className="flex flex-col items-center gap-4 py-8 relative z-10">
              {navItems.map((item, idx) => (
                <button
                  key={item.id}
                  onClick={() => { setActivePage(item.id); setIsMenuOpen(false); }}
                  className={`text-xl font-serif tracking-widest py-2 px-6 rounded-full transition-all duration-300 transform animate-[fadeInUp_0.4s_ease-out_forwards] opacity-0`}
                  style={{ animationDelay: `${0.1 + idx * 0.05}s`, color: activePage === item.id ? '#C9A961' : '#2C3E2F' }}
                >
                  {item.label}
                </button>
              ))}
              
              <div className="w-12 h-[1px] bg-gold/30 my-4 animate-[fadeInUp_0.4s_0.4s_forwards] opacity-0"></div>
              
              <button
                onClick={() => { setLang(lang === 'it' ? 'en' : 'it'); setIsMenuOpen(false); }}
                className="flex items-center gap-2 text-sage font-bold uppercase text-[10px] tracking-widest animate-[fadeInUp_0.4s_0.45s_forwards] opacity-0"
              >
                <Globe size={16} /> {lang === 'it' ? 'Switch to English' : 'Passa all\'Italiano'}
              </button>
            </div>

            {/* CTA in Modal */}
            <div className="p-8 pt-4 relative z-10">
              <button
                onClick={() => { setActivePage('contact'); setIsMenuOpen(false); }}
                className="w-full bg-darkGreen text-white py-4 rounded-full font-bold uppercase text-xs tracking-[0.2em] shadow-xl animate-[fadeInUp_0.4s_0.5s_forwards] opacity-0"
              >
                {t.bookNow}
              </button>
            </div>
          </div>
        </div>
      )}

      <main className="flex-grow">
        {children}
      </main>

      <footer className="bg-darkGreen text-cream py-12 md:py-20 px-4 relative overflow-hidden">
        <div className="napoleon-pattern absolute inset-0 opacity-10 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 relative z-10">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 border-2 border-gold rounded-full flex items-center justify-center">
                <span className="font-serif text-gold font-bold">N</span>
              </div>
              <span className="font-serif text-xl tracking-widest uppercase text-white">Napoleone</span>
            </div>
            <p className="text-sm opacity-70 leading-relaxed italic font-serif">
              "L'eleganza della tradizione italiana incontra il calore dell'accoglienza veronese."
            </p>
            <div className="flex gap-4">
              <a href="https://instagram.com/napoleonebistrot" target="_blank" rel="noopener noreferrer" className="p-2 border border-gold/30 rounded-full text-gold hover:bg-gold hover:text-darkGreen transition-all">
                <Instagram size={18} />
              </a>
              <a href="#" className="p-2 border border-gold/30 rounded-full text-gold hover:bg-gold hover:text-darkGreen transition-all">
                <Facebook size={18} />
              </a>
              <a href="mailto:info@napoleonebistrot.it" className="p-2 border border-gold/30 rounded-full text-gold hover:bg-gold hover:text-darkGreen transition-all">
                <Mail size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-serif text-xl text-gold mb-6 uppercase tracking-widest">{t.openingHours}</h4>
            <ul className="text-sm space-y-3 opacity-80">
              <li className="flex justify-between border-b border-white/5 pb-2"><span>Lun - Gio:</span> <span>08:00 - 01:00</span></li>
              <li className="flex justify-between border-b border-white/5 pb-2"><span>Ven - Sab:</span> <span>08:00 - 02:30</span></li>
              <li className="flex justify-between"><span>Domenica:</span> <span className="text-gold font-bold uppercase tracking-tighter">Chiuso</span></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-xl text-gold mb-6 uppercase tracking-widest">{t.contact}</h4>
            <ul className="text-sm space-y-4 opacity-80">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-gold shrink-0 mt-1" />
                <span>Via Garibaldi, 23<br/>37121 Verona, IT</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-gold" />
                <span>+39 045 23 76 868</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-gold" />
                <span className="truncate">info@napoleonebistrot.it</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-xl text-gold mb-6 uppercase tracking-widest">Newsletter</h4>
            <p className="text-xs opacity-70 mb-4">Ricevi aggiornamenti su eventi e nuovi menu.</p>
            <div className="flex border border-gold/50 focus-within:border-gold transition-colors rounded-full px-4 bg-white/5">
              <input type="email" placeholder="La tua email" className="bg-transparent py-3 flex-grow outline-none text-sm placeholder:opacity-50 text-white" />
              <button className="text-gold px-2 hover:translate-x-1 transition-transform">➜</button>
            </div>
            <p className="text-[9px] opacity-40 mt-4 leading-tight">
              Iscrivendoti accetti la nostra privacy policy.
            </p>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-gold/10 text-center text-[10px] opacity-40 uppercase tracking-[0.2em]">
          &copy; 2024 Napoleone Bistrot &bull; Verona, Italia &bull; P.IVA 0123456789
        </div>
      </footer>
      <CookieConsent lang={lang} />
      
      {/* Custom Keyframes for Mobile Menu */}
      <style>{`
        @keyframes menuIn {
          from { opacity: 0; transform: scale(0.95) translateY(-20px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default Layout;
