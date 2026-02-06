import React, { useState } from 'react';
import { useCMS } from '../../context/CMSContext';
import { 
  LayoutDashboard, 
  UtensilsCrossed, 
  CalendarDays, 
  Settings, 
  LogOut, 
  Menu as MenuIcon, 
  X,
  ExternalLink,
  Wand2,
  Database
} from 'lucide-react';
import MenuManager from './MenuManager';
import EventManager from './EventManager';
import DashboardHome from './DashboardHome';
import AdminGenerator from '../AdminGenerator';
import SettingsManager from './SettingsManager';
import IntegrationTest from './IntegrationTest';

const AdminDashboard: React.FC = () => {
  const { logout } = useCMS();
  const [activeTab, setActiveTab] = useState<'dashboard' | 'menu' | 'events' | 'settings' | 'generator' | 'test'>('dashboard');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <DashboardHome />;
      case 'menu':
        return <MenuManager />;
      case 'events':
        return <EventManager />;
      case 'generator':
        return <AdminGenerator />;
      case 'settings':
        return <SettingsManager />;
      case 'test':
        return <IntegrationTest />;
      default:
        return <DashboardHome />;
    }
  };

  const NavItem = ({ id, icon: Icon, label }: { id: typeof activeTab, icon: any, label: string }) => (
    <button
      onClick={() => {
        setActiveTab(id);
        setIsMobileMenuOpen(false);
      }}
      className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
        activeTab === id 
          ? 'bg-gold text-darkGreen font-bold shadow-md' 
          : 'text-white/70 hover:bg-white/10 hover:text-white'
      }`}
    >
      <Icon size={20} />
      <span>{label}</span>
    </button>
  );

  return (
    <div className="min-h-screen bg-cream flex flex-col md:flex-row">
      {/* Mobile Header */}
      <div className="md:hidden bg-darkGreen text-white p-4 flex justify-between items-center shadow-lg z-20 sticky top-0">
        <span className="font-serif font-bold text-xl text-gold">Napoleone CMS</span>
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X /> : <MenuIcon />}
        </button>
      </div>

      {/* Sidebar */}
      <aside className={`
        fixed md:sticky top-0 h-screen w-64 bg-darkGreen text-white p-6 flex flex-col z-40 transition-transform duration-300
        ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
      `}>
        <div className="mb-10 hidden md:block">
          <h1 className="font-serif text-2xl font-bold text-gold">Napoleone</h1>
          <span className="text-xs uppercase tracking-[0.3em] opacity-60">Admin Panel</span>
        </div>

        <nav className="space-y-2 flex-1">
          <NavItem id="dashboard" icon={LayoutDashboard} label="Dashboard" />
          <NavItem id="menu" icon={UtensilsCrossed} label="Gestione Menu" />
          <NavItem id="events" icon={CalendarDays} label="Gestione Eventi" />
          <NavItem id="generator" icon={Wand2} label="AI Foto" />
        </nav>

        <div className="space-y-2 mb-4">
          <NavItem id="test" icon={Database} label="Test Sistema" />
          <NavItem id="settings" icon={Settings} label="Impostazioni" />
        </div>

        <div className="pt-6 border-t border-white/10 space-y-2">
            <a href="/" target="_blank" className="w-full flex items-center gap-3 px-4 py-3 text-white/70 hover:text-gold transition-colors">
                <ExternalLink size={18} />
                <span className="text-sm">Vedi Sito Web</span>
            </a>
            <button 
                onClick={logout}
                className="w-full flex items-center gap-3 px-4 py-3 text-red-400 hover:bg-red-500/10 rounded-xl transition-colors"
            >
                <LogOut size={18} />
                <span className="text-sm">Esci</span>
            </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto h-[calc(100vh-64px)] md:h-screen">
        {renderContent()}
      </main>

      {/* Overlay for mobile */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </div>
  );
};

export default AdminDashboard;
