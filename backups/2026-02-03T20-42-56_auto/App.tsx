
import React, { useState, useEffect } from 'react';
import Layout from './components/Layout';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Events from './pages/Events';
import About from './pages/About';
import Contact from './pages/Contact';

const App: React.FC = () => {
  const [activePage, setActivePage] = useState<string>('home');
  const [lang, setLang] = useState<'it' | 'en'>('it');

  // Smooth scroll to top when page changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activePage]);

  const renderPage = () => {
    switch (activePage) {
      case 'home':
        return <Home lang={lang} setActivePage={setActivePage} />;
      case 'menu':
        return <Menu lang={lang} />;
      case 'events':
        return <Events lang={lang} />;
      case 'about':
        return <About />;
      case 'contact':
        return <Contact />;
      default:
        return <Home lang={lang} setActivePage={setActivePage} />;
    }
  };

  return (
    <Layout
      activePage={activePage}
      setActivePage={setActivePage}
      lang={lang}
      setLang={setLang}
    >
      {renderPage()}
    </Layout>
  );
};

export default App;
