
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
  const [menuCategory, setMenuCategory] = useState<string | null>(null);

  // Smooth scroll to top when page changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activePage]);

  const navigateToMenu = (category?: string) => {
    setMenuCategory(category || null);
    setActivePage('menu');
  };

  const renderPage = () => {
    switch (activePage) {
      case 'home':
        return <Home lang={lang} setActivePage={setActivePage} navigateToMenu={navigateToMenu} />;
      case 'menu':
        return <Menu lang={lang} initialCategory={menuCategory} />;
      case 'events':
        return <Events lang={lang} />;
      case 'about':
        return <About />;
      case 'contact':
        return <Contact />;
      default:
        return <Home lang={lang} setActivePage={setActivePage} navigateToMenu={navigateToMenu} />;
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
