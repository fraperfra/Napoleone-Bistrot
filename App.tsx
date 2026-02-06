
import React, { useState, useEffect } from 'react';
import Layout from './components/Layout';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Events from './pages/Events';
import About from './pages/About';
import Contact from './pages/Contact';
import AdminGenerator from './pages/AdminGenerator';
import AdminDashboard from './pages/admin/AdminDashboard';
import AdminLogin from './pages/admin/AdminLogin';
import { CMSProvider, useCMS } from './context/CMSContext';

const AppContent: React.FC = () => {
  const [activePage, setActivePage] = useState<string>('home');
  const [lang, setLang] = useState<'it' | 'en'>('it');
  const [menuCategory, setMenuCategory] = useState<string | null>(null);
  const { isAuthenticated } = useCMS();

  // Smooth scroll to top when page changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activePage]);

  const navigateToMenu = (category?: string) => {
    setMenuCategory(category || null);
    setActivePage('menu');
  };

  // Admin Route Protection
  if (activePage === 'admin-dashboard') {
      if (!isAuthenticated) return <AdminLogin onLoginSuccess={() => setActivePage('admin-dashboard')} />;
      return <AdminDashboard />;
  }
  
  // Legacy Admin Generator (can be merged into dashboard later)
  if (activePage === 'admin-generator') {
     // Optional: Protect this too or redirect to dashboard
     // return <AdminGenerator />;
  }

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
      case 'admin-generator': // Keep legacy access for now, or redirect
        return <AdminGenerator />;
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

const App: React.FC = () => {
  return (
    <CMSProvider>
      <AppContent />
    </CMSProvider>
  );
};

export default App;
