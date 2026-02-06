import React, { useState, useEffect } from 'react';
import { 
  User, 
  Settings, 
  Shield, 
  Bell, 
  Save, 
  X, 
  Check, 
  Globe, 
  Moon, 
  Sun,
  Smartphone,
  Mail,
  Lock
} from 'lucide-react';

interface UserProfile {
  name: string;
  email: string;
  role: string;
}

interface AppPreferences {
  language: 'it' | 'en';
  theme: 'light' | 'dark';
  autoSave: boolean;
  dashboardRefreshRate: number;
}

interface SecuritySettings {
  twoFactorEnabled: boolean;
  sessionTimeout: number;
}

interface NotificationSettings {
  emailAlerts: boolean;
  pushNotifications: boolean;
  weeklyReports: boolean;
  newOrders: boolean;
}

interface AllSettings {
  profile: UserProfile;
  preferences: AppPreferences;
  security: SecuritySettings;
  notifications: NotificationSettings;
}

const DEFAULT_SETTINGS: AllSettings = {
  profile: {
    name: 'Francesco Coppola',
    email: 'info@napoleonebistrot.it',
    role: 'Amministratore'
  },
  preferences: {
    language: 'it',
    theme: 'light',
    autoSave: true,
    dashboardRefreshRate: 30
  },
  security: {
    twoFactorEnabled: false,
    sessionTimeout: 15
  },
  notifications: {
    emailAlerts: true,
    pushNotifications: false,
    weeklyReports: true,
    newOrders: true
  }
};

const SettingsManager: React.FC = () => {
  const [activeSection, setActiveSection] = useState<'profile' | 'preferences' | 'security' | 'notifications'>('profile');
  const [settings, setSettings] = useState<AllSettings>(DEFAULT_SETTINGS);
  const [originalSettings, setOriginalSettings] = useState<AllSettings>(DEFAULT_SETTINGS);
  const [hasChanges, setHasChanges] = useState(false);
  const [saveStatus, setSaveStatus] = useState<'idle' | 'saving' | 'success' | 'error'>('idle');

  // Load settings from localStorage on mount
  useEffect(() => {
    const savedSettings = localStorage.getItem('napoleone_cms_settings');
    if (savedSettings) {
      try {
        const parsed = JSON.parse(savedSettings);
        setSettings(parsed);
        setOriginalSettings(parsed);
      } catch (e) {
        console.error('Failed to parse settings', e);
      }
    }
  }, []);

  // Check for changes
  useEffect(() => {
    setHasChanges(JSON.stringify(settings) !== JSON.stringify(originalSettings));
  }, [settings, originalSettings]);

  const handleSave = () => {
    setSaveStatus('saving');
    
    // Simulate API call/processing
    setTimeout(() => {
      localStorage.setItem('napoleone_cms_settings', JSON.stringify(settings));
      setOriginalSettings(settings);
      setHasChanges(false);
      setSaveStatus('success');
      
      // Reset success message after 3 seconds
      setTimeout(() => setSaveStatus('idle'), 3000);
    }, 800);
  };

  const handleCancel = () => {
    if (window.confirm('Sei sicuro di voler annullare le modifiche non salvate?')) {
      setSettings(originalSettings);
      setHasChanges(false);
    }
  };

  const updateProfile = (field: keyof UserProfile, value: string) => {
    setSettings(prev => ({
      ...prev,
      profile: { ...prev.profile, [field]: value }
    }));
  };

  const updatePreference = (field: keyof AppPreferences, value: any) => {
    setSettings(prev => ({
      ...prev,
      preferences: { ...prev.preferences, [field]: value }
    }));
  };

  const updateSecurity = (field: keyof SecuritySettings, value: any) => {
    setSettings(prev => ({
      ...prev,
      security: { ...prev.security, [field]: value }
    }));
  };

  const updateNotification = (field: keyof NotificationSettings, value: boolean) => {
    setSettings(prev => ({
      ...prev,
      notifications: { ...prev.notifications, [field]: value }
    }));
  };

  const sections = [
    { id: 'profile', label: 'Profilo', icon: User },
    { id: 'preferences', label: 'Preferenze', icon: Settings },
    { id: 'security', label: 'Sicurezza', icon: Shield },
    { id: 'notifications', label: 'Notifiche', icon: Bell },
  ];

  return (
    <div className="p-6 md:p-8 h-full">
      <div className="bg-white rounded-[2rem] shadow-xl border border-darkGreen/5 overflow-hidden flex flex-col h-full min-h-[600px]">
        {/* Header */}
      <div className="p-8 border-b border-darkGreen/10 flex justify-between items-center bg-cream/30">
        <div>
          <h2 className="font-serif text-3xl text-darkGreen font-bold flex items-center gap-3">
            <Settings className="text-gold" size={32} />
            Impostazioni
          </h2>
          <p className="text-darkGreen/60 mt-1">Gestisci le preferenze del tuo account e dell'applicazione</p>
        </div>
        
        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          {hasChanges && (
            <button 
              onClick={handleCancel}
              className="px-6 py-2 rounded-xl border border-red-200 text-red-600 hover:bg-red-50 font-bold transition-all flex items-center gap-2"
            >
              <X size={18} /> Annulla
            </button>
          )}
          <button 
            onClick={handleSave}
            disabled={!hasChanges || saveStatus === 'saving'}
            className={`px-8 py-3 rounded-xl font-bold transition-all flex items-center gap-2 shadow-lg
              ${hasChanges 
                ? 'bg-gold text-darkGreen hover:bg-darkGreen hover:text-white cursor-pointer' 
                : 'bg-gray-200 text-gray-400 cursor-not-allowed'
              }`}
          >
            {saveStatus === 'saving' ? (
              <span className="animate-pulse">Salvataggio...</span>
            ) : saveStatus === 'success' ? (
              <><Check size={20} /> Salvato!</>
            ) : (
              <><Save size={20} /> Salva Modifiche</>
            )}
          </button>
        </div>
      </div>

      <div className="flex flex-col md:flex-row flex-grow">
        {/* Sidebar Navigation */}
        <div className="w-full md:w-64 bg-darkGreen/5 border-r border-darkGreen/10 p-4">
          <nav className="space-y-2">
            {sections.map(section => (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id as any)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all font-bold text-left
                  ${activeSection === section.id 
                    ? 'bg-white text-darkGreen shadow-md border border-gold/20' 
                    : 'text-darkGreen/60 hover:bg-white/50 hover:text-darkGreen'
                  }`}
              >
                <section.icon size={20} className={activeSection === section.id ? 'text-gold' : 'currentColor'} />
                {section.label}
              </button>
            ))}
          </nav>
        </div>

        {/* Content Area */}
        <div className="flex-1 p-8 overflow-y-auto bg-white">
          
          {/* PROFILE SECTION */}
          {activeSection === 'profile' && (
            <div className="space-y-8 animate-fade-in">
              <div className="flex items-start gap-6">
                <div className="w-24 h-24 rounded-full bg-darkGreen text-gold flex items-center justify-center text-3xl font-serif font-bold border-4 border-cream shadow-lg">
                  {settings.profile.name.charAt(0)}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-darkGreen mb-1">Foto Profilo</h3>
                  <p className="text-sm text-darkGreen/60 mb-4">Carica una nuova foto o rimuovi quella attuale.</p>
                  <div className="flex gap-3">
                    <button className="px-4 py-2 bg-darkGreen text-white rounded-lg text-sm font-bold hover:bg-gold hover:text-darkGreen transition-colors">Carica Nuova</button>
                    <button className="px-4 py-2 border border-darkGreen/20 text-darkGreen rounded-lg text-sm font-bold hover:bg-red-50 hover:text-red-600 hover:border-red-200 transition-colors">Rimuovi</button>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-darkGreen/60 mb-2">Nome Completo</label>
                  <input 
                    type="text" 
                    value={settings.profile.name}
                    onChange={(e) => updateProfile('name', e.target.value)}
                    className="w-full p-3 bg-cream/30 rounded-xl border border-darkGreen/10 focus:border-gold outline-none text-darkGreen"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-darkGreen/60 mb-2">Email</label>
                  <input 
                    type="email" 
                    value={settings.profile.email}
                    onChange={(e) => updateProfile('email', e.target.value)}
                    className="w-full p-3 bg-cream/30 rounded-xl border border-darkGreen/10 focus:border-gold outline-none text-darkGreen"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-xs font-bold uppercase tracking-widest text-darkGreen/60 mb-2">Ruolo</label>
                  <input 
                    type="text" 
                    value={settings.profile.role}
                    readOnly
                    className="w-full p-3 bg-gray-100 rounded-xl border border-darkGreen/5 text-darkGreen/50 cursor-not-allowed"
                  />
                  <p className="text-xs text-darkGreen/40 mt-1">Contatta il supporto tecnico per modificare il tuo ruolo.</p>
                </div>
              </div>
            </div>
          )}

          {/* PREFERENCES SECTION */}
          {activeSection === 'preferences' && (
            <div className="space-y-8 animate-fade-in">
              <div>
                <h3 className="text-lg font-bold text-darkGreen mb-4 flex items-center gap-2">
                  <Globe size={20} className="text-gold" /> Lingua e Regione
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <select 
                    value={settings.preferences.language}
                    onChange={(e) => updatePreference('language', e.target.value)}
                    className="w-full p-3 bg-cream/30 rounded-xl border border-darkGreen/10 outline-none"
                  >
                    <option value="it">Italiano (Italia)</option>
                    <option value="en">English (International)</option>
                  </select>
                </div>
              </div>

              <hr className="border-darkGreen/5" />

              <div>
                <h3 className="text-lg font-bold text-darkGreen mb-4 flex items-center gap-2">
                  <Sun size={20} className="text-gold" /> Aspetto
                </h3>
                <div className="flex gap-4">
                  <button 
                    onClick={() => updatePreference('theme', 'light')}
                    className={`flex-1 p-4 rounded-xl border-2 flex flex-col items-center gap-2 transition-all
                      ${settings.preferences.theme === 'light' 
                        ? 'border-gold bg-gold/10 text-darkGreen' 
                        : 'border-transparent bg-gray-50 text-gray-400 hover:bg-gray-100'
                      }`}
                  >
                    <Sun size={24} />
                    <span className="font-bold text-sm">Chiaro</span>
                  </button>
                  <button 
                    onClick={() => updatePreference('theme', 'dark')}
                    className={`flex-1 p-4 rounded-xl border-2 flex flex-col items-center gap-2 transition-all
                      ${settings.preferences.theme === 'dark' 
                        ? 'border-gold bg-darkGreen text-white' 
                        : 'border-transparent bg-gray-50 text-gray-400 hover:bg-gray-100'
                      }`}
                  >
                    <Moon size={24} />
                    <span className="font-bold text-sm">Scuro</span>
                  </button>
                </div>
              </div>

              <hr className="border-darkGreen/5" />

              <div>
                 <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="font-bold text-darkGreen">Salvataggio Automatico</h3>
                      <p className="text-sm text-darkGreen/60">Salva automaticamente le modifiche alle bozze</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input 
                        type="checkbox" 
                        checked={settings.preferences.autoSave}
                        onChange={(e) => updatePreference('autoSave', e.target.checked)}
                        className="sr-only peer" 
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-gold/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-gold"></div>
                    </label>
                 </div>
              </div>
            </div>
          )}

          {/* SECURITY SECTION */}
          {activeSection === 'security' && (
            <div className="space-y-8 animate-fade-in">
              <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 flex items-start gap-3">
                <Lock className="text-yellow-600 mt-1" size={20} />
                <div>
                  <h4 className="font-bold text-yellow-800">Password e Autenticazione</h4>
                  <p className="text-sm text-yellow-700 mt-1">
                    Ti consigliamo di utilizzare una password forte e di abilitare l'autenticazione a due fattori.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-bold text-darkGreen">Cambia Password</h3>
                <div className="grid grid-cols-1 gap-4">
                  <input type="password" placeholder="Password Attuale" className="w-full p-3 bg-cream/30 rounded-xl border border-darkGreen/10 focus:border-gold outline-none" />
                  <input type="password" placeholder="Nuova Password" className="w-full p-3 bg-cream/30 rounded-xl border border-darkGreen/10 focus:border-gold outline-none" />
                  <input type="password" placeholder="Conferma Nuova Password" className="w-full p-3 bg-cream/30 rounded-xl border border-darkGreen/10 focus:border-gold outline-none" />
                  <button className="w-fit px-6 py-2 bg-darkGreen text-white rounded-lg font-bold text-sm hover:bg-gold hover:text-darkGreen transition-colors">
                    Aggiorna Password
                  </button>
                </div>
              </div>

              <hr className="border-darkGreen/5" />

              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-bold text-darkGreen flex items-center gap-2">
                    <Smartphone size={18} className="text-gold" /> Autenticazione a due fattori (2FA)
                  </h3>
                  <p className="text-sm text-darkGreen/60">Aggiungi un livello di sicurezza extra al tuo account</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input 
                    type="checkbox" 
                    checked={settings.security.twoFactorEnabled}
                    onChange={(e) => updateSecurity('twoFactorEnabled', e.target.checked)}
                    className="sr-only peer" 
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-gold/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-gold"></div>
                </label>
              </div>
            </div>
          )}

          {/* NOTIFICATIONS SECTION */}
          {activeSection === 'notifications' && (
            <div className="space-y-6 animate-fade-in">
              <h3 className="text-lg font-bold text-darkGreen mb-4">Preferenze di Contatto</h3>
              
              {[
                { id: 'emailAlerts', label: 'Email di Avviso', desc: 'Ricevi email per eventi importanti e sicurezza', icon: Mail },
                { id: 'pushNotifications', label: 'Notifiche Push', desc: 'Ricevi notifiche in tempo reale sul browser', icon: Bell },
                { id: 'newOrders', label: 'Nuovi Ordini/Prenotazioni', desc: 'Notifica immediata quando viene effettuato un ordine', icon: Smartphone },
                { id: 'weeklyReports', label: 'Report Settimanale', desc: 'Ricevi un riepilogo delle performance ogni lunedì', icon: Settings },
              ].map((item) => (
                <div key={item.id} className="flex items-center justify-between p-4 bg-cream/20 rounded-xl border border-darkGreen/5 hover:border-gold/30 transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-white rounded-full shadow-sm text-gold">
                      <item.icon size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-darkGreen">{item.label}</h4>
                      <p className="text-sm text-darkGreen/60">{item.desc}</p>
                    </div>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input 
                      type="checkbox" 
                      checked={settings.notifications[item.id as keyof NotificationSettings]}
                      onChange={(e) => updateNotification(item.id as keyof NotificationSettings, e.target.checked)}
                      className="sr-only peer" 
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-gold/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-gold"></div>
                  </label>
                </div>
              ))}
            </div>
          )}

        </div>
      </div>
      </div>
    </div>
  );
};

export default SettingsManager;
