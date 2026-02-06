import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { MenuItem, Event } from '../types';
import { MENU_ITEMS as INITIAL_MENU_ITEMS } from '../data';
import DatabaseService from '../services/DatabaseService';
import { NotificationToast, Notification } from '../components/NotificationToast';

// Dashboard Types
export interface DashboardStats {
  totalOrders: number;
  totalRevenue: number;
  totalVisitors: number;
  avgOrderValue: number;
  pendingReservations: number;
}

export interface RevenueData {
  date: string;
  revenue: number;
  orders: number;
}

export interface ActivityLog {
  id: string;
  action: string;
  user: string;
  timestamp: string;
  type: 'info' | 'warning' | 'success' | 'error';
}

interface CMSContextType {
  menuItems: MenuItem[];
  events: Event[];
  // Dashboard Data
  dashboardStats: DashboardStats;
  revenueData: RevenueData[];
  recentActivity: ActivityLog[];
  // Operations
  addMenuItem: (item: MenuItem) => void;
  updateMenuItem: (item: MenuItem) => void;
  deleteMenuItem: (id: string) => void;
  addEvent: (event: Event) => void;
  updateEvent: (event: Event) => void;
  deleteEvent: (id: string) => void;
  isAuthenticated: boolean;
  login: (password: string) => boolean;
  logout: () => void;
  refreshData: () => void;
  // Notifications
  notify: (type: 'success' | 'error' | 'info', message: string) => void;
}

const CMSContext = createContext<CMSContextType | undefined>(undefined);

const LOCAL_STORAGE_KEYS = {
  // MENU managed by DatabaseService now
  EVENTS: 'napoleone_cms_events',
  AUTH: 'napoleone_cms_auth'
};

export const CMSProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const [events, setEvents] = useState<Event[]>([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [notifications, setNotifications] = useState<Notification[]>([]);

  const notify = (type: 'success' | 'error' | 'info', message: string) => {
    const id = crypto.randomUUID();
    setNotifications(prev => [...prev, { id, type, message }]);
  };

  const removeNotification = (id: string) => {
    setNotifications(prev => prev.filter(n => n.id !== id));
  };

  // Mock Data for Dashboard
  const [dashboardStats] = useState<DashboardStats>({
    totalOrders: 1250,
    totalRevenue: 45200,
    totalVisitors: 3400,
    avgOrderValue: 36,
    pendingReservations: 12
  });

  const [revenueData] = useState<RevenueData[]>([
    { date: 'Lun', revenue: 1200, orders: 45 },
    { date: 'Mar', revenue: 1500, orders: 52 },
    { date: 'Mer', revenue: 1800, orders: 60 },
    { date: 'Gio', revenue: 2200, orders: 75 },
    { date: 'Ven', revenue: 3500, orders: 110 },
    { date: 'Sab', revenue: 4200, orders: 140 },
    { date: 'Dom', revenue: 3800, orders: 125 },
  ]);

  const [recentActivity] = useState<ActivityLog[]>([
    { id: '1', action: 'Nuova prenotazione (Rossi - 4 pax)', user: 'Sistema', timestamp: '10 min fa', type: 'success' },
    { id: '2', action: 'Menu aggiornato (Vini)', user: 'Francesco', timestamp: '1 ora fa', type: 'info' },
    { id: '3', action: 'Recensione ricevuta (5 stelle)', user: 'Google', timestamp: '3 ore fa', type: 'success' },
    { id: '4', action: 'Scorta bassa: Gin Mare', user: 'Magazzino', timestamp: '5 ore fa', type: 'warning' },
  ]);

  // Initialize data
  useEffect(() => {
    // Load Menu via DatabaseService
    const storedMenu = DatabaseService.loadMenu();
    if (storedMenu) {
      setMenuItems(storedMenu);
    } else {
      setMenuItems(INITIAL_MENU_ITEMS);
      DatabaseService.saveMenu(INITIAL_MENU_ITEMS);
    }

    // Load Events (keep simple local storage for now or move to Service later)
    const storedEvents = localStorage.getItem(LOCAL_STORAGE_KEYS.EVENTS);
    if (storedEvents) {
      try {
        setEvents(JSON.parse(storedEvents));
      } catch (e) {
        console.error('Failed to parse stored events', e);
        setEvents([]);
      }
    }

    // Load Auth State
    const storedAuth = localStorage.getItem(LOCAL_STORAGE_KEYS.AUTH);
    if (storedAuth === 'true') {
      setIsAuthenticated(true);
    }

    // Process any pending changes from offline session
    DatabaseService.processQueue({
      onMenuItemCreate: async (item) => { console.log('Processed offline create', item); },
      onMenuItemUpdate: async (item) => { console.log('Processed offline update', item); },
      onMenuItemDelete: async (id) => { console.log('Processed offline delete', id); }
    });
  }, []);

  // Menu Operations
  const addMenuItem = (item: MenuItem) => {
    try {
      const updated = [...menuItems, item];
      setMenuItems(updated);
      DatabaseService.saveMenu(updated);
      DatabaseService.logChange({
        action: 'create',
        entity: 'menuItem',
        entityId: item.id,
        userId: 'Admin', // In real app, get from auth
        newValue: item,
        details: `Added ${item.name}`
      });
      notify('success', `Piatto "${item.name}" aggiunto con successo`);
    } catch (e) {
      console.error(e);
      notify('error', 'Errore durante il salvataggio');
    }
  };

  const updateMenuItem = (updatedItem: MenuItem) => {
    try {
      const oldItem = menuItems.find(i => i.id === updatedItem.id);
      const updated = menuItems.map(item => item.id === updatedItem.id ? updatedItem : item);
      setMenuItems(updated);
      DatabaseService.saveMenu(updated);
      DatabaseService.logChange({
        action: 'update',
        entity: 'menuItem',
        entityId: updatedItem.id,
        userId: 'Admin',
        previousValue: oldItem,
        newValue: updatedItem,
        details: `Updated ${updatedItem.name}`
      });
      notify('success', `Piatto "${updatedItem.name}" aggiornato`);
    } catch (e) {
      console.error(e);
      notify('error', 'Errore durante l\'aggiornamento');
    }
  };

  const deleteMenuItem = (id: string) => {
    try {
      const item = menuItems.find(i => i.id === id);
      const updated = menuItems.filter(item => item.id !== id);
      setMenuItems(updated);
      DatabaseService.saveMenu(updated);
      DatabaseService.logChange({
        action: 'delete',
        entity: 'menuItem',
        entityId: id,
        userId: 'Admin',
        previousValue: item,
        details: `Deleted ${item?.name || id}`
      });
      notify('success', 'Piatto eliminato');
    } catch (e) {
      console.error(e);
      notify('error', 'Errore durante l\'eliminazione');
    }
  };

  // Event Operations
  const addEvent = (event: Event) => {
    const updated = [...events, event];
    setEvents(updated);
    localStorage.setItem(LOCAL_STORAGE_KEYS.EVENTS, JSON.stringify(updated));
    notify('success', 'Evento aggiunto');
  };

  const updateEvent = (updatedEvent: Event) => {
    const updated = events.map(evt => evt.id === updatedEvent.id ? updatedEvent : evt);
    setEvents(updated);
    localStorage.setItem(LOCAL_STORAGE_KEYS.EVENTS, JSON.stringify(updated));
    notify('success', 'Evento aggiornato');
  };

  const deleteEvent = (id: string) => {
    const updated = events.filter(evt => evt.id !== id);
    setEvents(updated);
    localStorage.setItem(LOCAL_STORAGE_KEYS.EVENTS, JSON.stringify(updated));
    notify('success', 'Evento eliminato');
  };

  // Auth Operations
  const login = (password: string) => {
    // Simple hardcoded password for demo purposes
    if (password === 'napoleone2024' || password === 'admin') {
      setIsAuthenticated(true);
      localStorage.setItem(LOCAL_STORAGE_KEYS.AUTH, 'true');
      notify('success', 'Login effettuato');
      return true;
    }
    notify('error', 'Password non valida');
    return false;
  };

  const logout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem(LOCAL_STORAGE_KEYS.AUTH);
    notify('info', 'Logout effettuato');
  };

  const refreshData = () => {
     // Force reload from local storage
    const storedMenu = DatabaseService.loadMenu();
    if (storedMenu) setMenuItems(storedMenu);
    
    const storedEvents = localStorage.getItem(LOCAL_STORAGE_KEYS.EVENTS);
    if (storedEvents) setEvents(JSON.parse(storedEvents));
    notify('info', 'Dati aggiornati');
  };

  return (
    <CMSContext.Provider value={{
      menuItems,
      events,
      dashboardStats,
      revenueData,
      recentActivity,
      addMenuItem,
      updateMenuItem,
      deleteMenuItem,
      addEvent,
      updateEvent,
      deleteEvent,
      isAuthenticated,
      login,
      logout,
      refreshData,
      notify
    }}>
      {children}
      <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2">
        {notifications.map(n => (
          <NotificationToast key={n.id} notification={n} onClose={removeNotification} />
        ))}
      </div>
    </CMSContext.Provider>
  );
};

export const useCMS = () => {
  const context = useContext(CMSContext);
  if (context === undefined) {
    throw new Error('useCMS must be used within a CMSProvider');
  }
  return context;
};
