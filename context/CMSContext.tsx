import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { MenuItem, Event } from '../types';
import { MENU_ITEMS as INITIAL_MENU_ITEMS } from '../data';

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
}

const CMSContext = createContext<CMSContextType | undefined>(undefined);

const LOCAL_STORAGE_KEYS = {
  MENU: 'napoleone_cms_menu',
  EVENTS: 'napoleone_cms_events',
  AUTH: 'napoleone_cms_auth'
};

export const CMSProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const [events, setEvents] = useState<Event[]>([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

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
    // Load Menu
    const storedMenu = localStorage.getItem(LOCAL_STORAGE_KEYS.MENU);
    if (storedMenu) {
      try {
        setMenuItems(JSON.parse(storedMenu));
      } catch (e) {
        console.error('Failed to parse stored menu', e);
        setMenuItems(INITIAL_MENU_ITEMS);
      }
    } else {
      setMenuItems(INITIAL_MENU_ITEMS);
      localStorage.setItem(LOCAL_STORAGE_KEYS.MENU, JSON.stringify(INITIAL_MENU_ITEMS));
    }

    // Load Events (if we had initial events in data.ts we would use them, assuming empty or mock for now)
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

    // Listen for storage changes (for multi-tab sync)
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === LOCAL_STORAGE_KEYS.MENU && e.newValue) {
        setMenuItems(JSON.parse(e.newValue));
      }
      if (e.key === LOCAL_STORAGE_KEYS.EVENTS && e.newValue) {
        setEvents(JSON.parse(e.newValue));
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  // Menu Operations
  const addMenuItem = (item: MenuItem) => {
    const updated = [...menuItems, item];
    setMenuItems(updated);
    localStorage.setItem(LOCAL_STORAGE_KEYS.MENU, JSON.stringify(updated));
  };

  const updateMenuItem = (updatedItem: MenuItem) => {
    const updated = menuItems.map(item => item.id === updatedItem.id ? updatedItem : item);
    setMenuItems(updated);
    localStorage.setItem(LOCAL_STORAGE_KEYS.MENU, JSON.stringify(updated));
  };

  const deleteMenuItem = (id: string) => {
    const updated = menuItems.filter(item => item.id !== id);
    setMenuItems(updated);
    localStorage.setItem(LOCAL_STORAGE_KEYS.MENU, JSON.stringify(updated));
  };

  // Event Operations
  const addEvent = (event: Event) => {
    const updated = [...events, event];
    setEvents(updated);
    localStorage.setItem(LOCAL_STORAGE_KEYS.EVENTS, JSON.stringify(updated));
  };

  const updateEvent = (updatedEvent: Event) => {
    const updated = events.map(evt => evt.id === updatedEvent.id ? updatedEvent : evt);
    setEvents(updated);
    localStorage.setItem(LOCAL_STORAGE_KEYS.EVENTS, JSON.stringify(updated));
  };

  const deleteEvent = (id: string) => {
    const updated = events.filter(evt => evt.id !== id);
    setEvents(updated);
    localStorage.setItem(LOCAL_STORAGE_KEYS.EVENTS, JSON.stringify(updated));
  };

  // Auth Operations
  const login = (password: string) => {
    // Simple hardcoded password for demo purposes
    if (password === 'napoleone2024' || password === 'admin') {
      setIsAuthenticated(true);
      localStorage.setItem(LOCAL_STORAGE_KEYS.AUTH, 'true');
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem(LOCAL_STORAGE_KEYS.AUTH);
  };

  const refreshData = () => {
     // Force reload from local storage
    const storedMenu = localStorage.getItem(LOCAL_STORAGE_KEYS.MENU);
    if (storedMenu) setMenuItems(JSON.parse(storedMenu));
    
    const storedEvents = localStorage.getItem(LOCAL_STORAGE_KEYS.EVENTS);
    if (storedEvents) setEvents(JSON.parse(storedEvents));
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
      refreshData
    }}>
      {children}
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
