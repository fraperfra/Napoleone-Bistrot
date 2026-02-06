import React from 'react';
import { useCMS } from '../../context/CMSContext';
import { 
  UtensilsCrossed, 
  CalendarDays, 
  Users, 
  TrendingUp,
  Award
} from 'lucide-react';
import { MenuItem } from '../../types';

const DashboardHome: React.FC = () => {
  const { dashboardStats, menuItems, events } = useCMS();

  // Mock function to generate selection counts for demo
  const getMostSelectedDishes = (items: MenuItem[]) => {
    // In a real app, this would come from backend analytics.
    // Here we deterministically hash the ID to get a pseudo-random number
    return items
      .map(item => ({
        ...item,
        selectionCount: Math.floor(item.price ? (typeof item.price === 'number' ? item.price * 12 : 50) + (item.name.length * 5) : 100) // Fake metric
      }))
      .sort((a, b) => b.selectionCount - a.selectionCount)
      .slice(0, 5);
  };

  const topDishes = getMostSelectedDishes(menuItems);

  // Menu Aggregates
  const menuStats = {
    totalItems: menuItems.length,
    categories: new Set(menuItems.map(i => i.category)).size,
    avgPrice: (menuItems.reduce((acc, curr) => acc + (typeof curr.price === 'number' ? curr.price : 0), 0) / (menuItems.length || 1)).toFixed(2)
  };

  // Event Stats
  const eventStats = {
    totalEvents: events.length,
    upcoming: events.length // Assuming all are upcoming for now
  };

  return (
    <div className="p-4 md:p-8 text-base md:text-sm">
      <h1 className="text-2xl md:text-3xl font-serif font-bold text-darkGreen mb-6 md:mb-8">Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        
        {/* Card 1: Top Dishes */}
        <div className="bg-white p-4 md:p-6 rounded-2xl border border-darkGreen/5 shadow-sm hover:shadow-lg transition-all md:col-span-2 lg:col-span-1" data-testid="top-dishes-card">
          <div className="flex items-center gap-3 mb-4 md:mb-6">
            <div className="p-3 rounded-xl bg-gold/10 text-darkGreen min-w-[44px] min-h-[44px] flex items-center justify-center">
              <Award size={24} />
            </div>
            <h2 className="text-lg md:text-xl font-serif font-bold text-darkGreen">Piatti Più Richiesti</h2>
          </div>
          
          <div className="space-y-4">
            {topDishes.map((dish, index) => (
              <div key={dish.id} className="flex items-center justify-between p-3 md:p-3 rounded-xl hover:bg-cream/30 transition-colors group min-h-[44px]" data-testid="top-dish-row">
                <div className="flex items-center gap-3 md:gap-4">
                  <span className="w-8 h-8 md:w-6 md:h-6 flex items-center justify-center rounded-full bg-darkGreen text-gold text-sm md:text-xs font-bold">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="font-bold text-darkGreen text-base md:text-sm">{dish.name}</h3>
                    <p className="text-base md:text-xs text-darkGreen/60">{dish.category}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-2 md:h-1.5 w-24 bg-gray-100 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gold rounded-full" 
                      style={{ width: `${Math.min((dish.selectionCount / 200) * 100, 100)}%` }}
                    />
                  </div>
                  <span className="text-base md:text-sm font-bold text-darkGreen">{dish.selectionCount}</span>
                </div>
              </div>
            ))}
            {topDishes.length === 0 && <p className="text-darkGreen/50 italic">Nessun dato disponibile</p>}
          </div>
        </div>

        {/* Card 2: Menu Aggregates */}
        <div className="bg-white p-4 md:p-6 rounded-2xl border border-darkGreen/5 shadow-sm hover:shadow-lg transition-all">
          <div className="flex items-center gap-3 mb-4 md:mb-6">
            <div className="p-3 rounded-xl bg-green-100 text-green-700 min-w-[44px] min-h-[44px] flex items-center justify-center">
              <UtensilsCrossed size={24} />
            </div>
            <h2 className="text-lg md:text-xl font-serif font-bold text-darkGreen">Statistiche Menu</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4" data-testid="menu-stats-grid">
            <div className="p-4 bg-cream/30 rounded-xl">
              <p className="text-darkGreen/60 text-base md:text-sm uppercase tracking-wider mb-1">Totale Piatti</p>
              <p className="text-2xl md:text-3xl font-serif font-bold text-darkGreen">{menuStats.totalItems}</p>
            </div>
            <div className="p-4 bg-cream/30 rounded-xl">
              <p className="text-darkGreen/60 text-base md:text-sm uppercase tracking-wider mb-1">Categorie</p>
              <p className="text-2xl md:text-3xl font-serif font-bold text-darkGreen">{menuStats.categories}</p>
            </div>
            <div className="col-span-1 md:col-span-2 p-4 bg-cream/30 rounded-xl flex items-center justify-between">
              <div>
                <p className="text-darkGreen/60 text-base md:text-sm uppercase tracking-wider mb-1">Prezzo Medio</p>
                <p className="text-2xl md:text-3xl font-serif font-bold text-darkGreen">€ {menuStats.avgPrice}</p>
              </div>
              <div className="h-11 w-11 md:h-10 md:w-10 rounded-full bg-darkGreen/10 flex items-center justify-center text-darkGreen">
                <TrendingUp size={20} />
              </div>
            </div>
          </div>
        </div>

        {/* Card 3: Events Stats */}
        <div className="bg-white p-6 rounded-2xl border border-darkGreen/5 shadow-sm hover:shadow-lg transition-all">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-xl bg-purple-100 text-purple-700">
              <CalendarDays size={24} />
            </div>
            <h2 className="text-xl font-serif font-bold text-darkGreen">Eventi Programmati</h2>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between p-4 bg-cream/30 rounded-xl">
              <div>
                <p className="text-darkGreen/60 text-sm uppercase tracking-wider mb-1">Eventi Totali</p>
                <p className="text-3xl font-serif font-bold text-darkGreen">{eventStats.totalEvents}</p>
              </div>
              <CalendarDays size={32} className="text-darkGreen/20" />
            </div>
            
            {events.length > 0 && (
              <div className="p-4 border border-darkGreen/10 rounded-xl">
                <p className="text-xs font-bold text-gold uppercase mb-2">Prossimo Evento</p>
                <h3 className="font-bold text-darkGreen text-lg">{events[0].title}</h3>
                <p className="text-sm text-darkGreen/70">{events[0].date}</p>
              </div>
            )}
            {events.length === 0 && (
              <div className="p-4 border border-darkGreen/10 rounded-xl text-center text-darkGreen/50">
                Nessun evento in programma
              </div>
            )}
          </div>
        </div>

        {/* Card 4: Visitor Metrics */}
        <div className="bg-white p-6 rounded-2xl border border-darkGreen/5 shadow-sm hover:shadow-lg transition-all md:col-span-2 lg:col-span-1">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-xl bg-blue-100 text-blue-700">
              <Users size={24} />
            </div>
            <h2 className="text-xl font-serif font-bold text-darkGreen">Metriche Visitatori</h2>
          </div>

          <div className="grid grid-cols-2 gap-4">
             <div className="col-span-2 p-6 bg-gradient-to-r from-darkGreen to-green-900 rounded-xl text-white">
                <p className="text-white/70 text-sm uppercase tracking-wider mb-2">Visitatori Totali</p>
                <div className="flex items-end gap-3">
                  <h3 className="text-4xl font-serif font-bold">{dashboardStats.totalVisitors.toLocaleString()}</h3>
                  <span className="text-gold font-bold text-sm mb-1 flex items-center gap-1">
                    <TrendingUp size={14} /> +12%
                  </span>
                </div>
             </div>
             <div className="p-4 bg-cream/30 rounded-xl">
                <p className="text-darkGreen/60 text-sm uppercase tracking-wider mb-1">Ordini</p>
                <p className="text-2xl font-serif font-bold text-darkGreen">{dashboardStats.totalOrders}</p>
             </div>
             <div className="p-4 bg-cream/30 rounded-xl">
                <p className="text-darkGreen/60 text-sm uppercase tracking-wider mb-1">Ricavo</p>
                <p className="text-2xl font-serif font-bold text-darkGreen">€{(dashboardStats.totalRevenue / 1000).toFixed(1)}k</p>
             </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default DashboardHome;
