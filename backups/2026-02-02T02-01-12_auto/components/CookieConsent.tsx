
import React, { useState, useEffect } from 'react';
import { translations } from '../translations';

interface CookieConsentProps {
  lang: 'it' | 'en';
}

const CookieConsent: React.FC<CookieConsentProps> = ({ lang }) => {
  const [isVisible, setIsVisible] = useState(false);
  const t = translations[lang];

  useEffect(() => {
    const consent = localStorage.getItem('napoleone_cookie_consent');
    if (!consent) {
      setTimeout(() => setIsVisible(true), 1500);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('napoleone_cookie_consent', 'true');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 left-6 right-6 md:left-auto md:right-6 md:w-96 bg-white shadow-2xl z-[100] border-t-4 border-gold p-8 animate-fade-in rounded-3xl">
      <h4 className="font-serif text-xl mb-2">{t.cookieTitle}</h4>
      <p className="text-sm text-darkGreen/70 mb-6 leading-relaxed">
        {t.cookieText}
      </p>
      <div className="flex justify-end">
        <button
          onClick={handleAccept}
          className="bg-darkGreen text-white px-8 py-3 text-xs font-bold uppercase tracking-widest hover:bg-gold transition-all rounded-full shadow-lg"
        >
          {t.accept}
        </button>
      </div>
    </div>
  );
};

export default CookieConsent;
