import { MenuItem, Event } from '../types';

export interface ChangeLog {
  id: string;
  timestamp: number;
  action: 'create' | 'update' | 'delete';
  entity: 'menuItem' | 'event';
  entityId: string;
  userId: string;
  details?: string;
  previousValue?: any;
  newValue?: any;
}

export interface PendingChange {
  id: string;
  timestamp: number;
  action: 'create' | 'update' | 'delete';
  entity: 'menuItem' | 'event';
  data: any;
  status: 'pending' | 'synced' | 'failed';
  retryCount: number;
}

const STORAGE_KEYS = {
  MENU: 'napoleone_cms_menu',
  EVENTS: 'napoleone_cms_events',
  HISTORY: 'napoleone_cms_history',
  PENDING: 'napoleone_cms_pending',
  VERSION: 'napoleone_cms_version'
};

class DatabaseService {
  private static instance: DatabaseService;
  private currentVersion: number = 1;

  private constructor() {
    this.initialize();
  }

  public static getInstance(): DatabaseService {
    if (!DatabaseService.instance) {
      DatabaseService.instance = new DatabaseService();
    }
    return DatabaseService.instance;
  }

  private initialize() {
    if (!localStorage.getItem(STORAGE_KEYS.VERSION)) {
      localStorage.setItem(STORAGE_KEYS.VERSION, this.currentVersion.toString());
    }
    // Ensure arrays exist
    if (!localStorage.getItem(STORAGE_KEYS.HISTORY)) {
      localStorage.setItem(STORAGE_KEYS.HISTORY, JSON.stringify([]));
    }
    if (!localStorage.getItem(STORAGE_KEYS.PENDING)) {
      localStorage.setItem(STORAGE_KEYS.PENDING, JSON.stringify([]));
    }
  }

  // --- Menu Operations ---

  public saveMenu(items: MenuItem[], user: string = 'System'): void {
    try {
      localStorage.setItem(STORAGE_KEYS.MENU, JSON.stringify(items));
      // In a real DB, we would log this action, but for bulk save we might skip individual logs
      // or log "bulk update"
    } catch (error) {
      console.error('DatabaseService: Failed to save menu', error);
      throw new Error('Salvataggio fallito');
    }
  }

  public loadMenu(): MenuItem[] | null {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.MENU);
      return data ? JSON.parse(data) : null;
    } catch (error) {
      console.error('DatabaseService: Failed to load menu', error);
      return null;
    }
  }

  // --- Change Tracking & Queue ---

  public logChange(change: Omit<ChangeLog, 'id' | 'timestamp'>): void {
    try {
      const history = this.getHistory();
      const newLog: ChangeLog = {
        ...change,
        id: crypto.randomUUID(),
        timestamp: Date.now()
      };
      
      // Keep last 1000 entries
      const updatedHistory = [newLog, ...history].slice(0, 1000);
      localStorage.setItem(STORAGE_KEYS.HISTORY, JSON.stringify(updatedHistory));
    } catch (error) {
      console.error('DatabaseService: Failed to log change', error);
    }
  }

  public getHistory(): ChangeLog[] {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.HISTORY);
      return data ? JSON.parse(data) : [];
    } catch (error) {
      return [];
    }
  }

  // --- Pending Queue (Simulation for Offline/Async) ---

  public queueChange(change: Omit<PendingChange, 'id' | 'timestamp' | 'status' | 'retryCount'>): string {
    const queue = this.getPendingQueue();
    const newChange: PendingChange = {
      ...change,
      id: crypto.randomUUID(),
      timestamp: Date.now(),
      status: 'pending',
      retryCount: 0
    };
    
    queue.push(newChange);
    this.saveQueue(queue);
    return newChange.id;
  }

  public getPendingQueue(): PendingChange[] {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.PENDING);
      return data ? JSON.parse(data) : [];
    } catch (error) {
      return [];
    }
  }

  private saveQueue(queue: PendingChange[]): void {
    localStorage.setItem(STORAGE_KEYS.PENDING, JSON.stringify(queue));
  }

  public async processQueue(
    handlers: {
      onMenuItemCreate: (item: MenuItem) => Promise<void>;
      onMenuItemUpdate: (item: MenuItem) => Promise<void>;
      onMenuItemDelete: (id: string) => Promise<void>;
    }
  ): Promise<void> {
    const queue = this.getPendingQueue();
    if (queue.length === 0) return;

    const remainingQueue: PendingChange[] = [];

    for (const change of queue) {
      try {
        if (change.entity === 'menuItem') {
          if (change.action === 'create') await handlers.onMenuItemCreate(change.data);
          else if (change.action === 'update') await handlers.onMenuItemUpdate(change.data);
          else if (change.action === 'delete') await handlers.onMenuItemDelete(change.data);
        }
        // Success: don't add back to queue
      } catch (error) {
        console.error(`Failed to process change ${change.id}`, error);
        change.retryCount++;
        change.status = 'failed';
        if (change.retryCount < 5) {
            remainingQueue.push(change);
        }
      }
    }

    this.saveQueue(remainingQueue);
  }
}

export default DatabaseService.getInstance();
