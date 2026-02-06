
import React, { useState, useEffect } from 'react';
import { Category, MenuItem as MenuItemType } from '../types';
import { MENU_ITEMS } from '../data';
import { Leaf, Download, Filter, X, Plus, Wheat, Milk, Egg, Shell, Info, Martini, UtensilsCrossed, Wine, ChevronLeft, Fish, CircleDot, Bean, Carrot, Droplet, GlassWater } from 'lucide-react';
import { translations } from '../translations';
import SEO from '../components/SEO';

const Menu: React.FC<{ lang: 'it' | 'en' }> = ({ lang }) => {
  const [activeCategory, setActiveCategory] = useState<Category>(Category.Bistrot);
  const [dietaryFilters, setDietaryFilters] = useState({
    vegetarian: false,
    vegan: false,
    glutenFree: false,
  });
  const [excludedAllergens, setExcludedAllergens] = useState<string[]>([]);
  const [showFilters, setShowFilters] = useState(false);
  const [selectedItem, setSelectedItem] = useState<MenuItemType | null>(null);
  const [itemHistory, setItemHistory] = useState<MenuItemType[]>([]);
  
  const t = translations[lang];
  const categories = Object.values(Category);

  useEffect(() => {
    if (selectedItem || showFilters) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [selectedItem, showFilters]);
  
  const allergensList = [
    { id: 'Glutine (cereali)', label: t.gluten, icon: <Wheat size={14} /> },
    { id: 'Crostacei', label: t.crustaceans, icon: <Shell size={14} /> },
    { id: 'Uova', label: t.eggs, icon: <Egg size={14} /> },
    { id: 'Pesce', label: t.fish, icon: <Fish size={14} /> },
    { id: 'Arachidi', label: t.peanuts, icon: <CircleDot size={14} /> },
    { id: 'Soia', label: t.soy, icon: <Bean size={14} /> },
    { id: 'Latte', label: t.lactose, icon: <Milk size={14} /> },
    { id: 'Frutta a guscio', label: t.nuts, icon: <Shell size={14} /> },
    { id: 'Sedano', label: t.celery, icon: <Carrot size={14} /> },
    { id: 'Senape', label: t.mustard, icon: <Droplet size={14} /> },
    { id: 'Sesamo', label: t.sesame, icon: <CircleDot size={14} /> },
    { id: 'Solfiti', label: t.sulphites, icon: <Wine size={14} /> },
    { id: 'Lupini', label: t.lupin, icon: <Bean size={14} /> },
    { id: 'Molluschi', label: t.molluscs, icon: <Shell size={14} /> },
  ];

  const getAllergenIcon = (allergenName: string) => {
    switch (allergenName) {
      case 'Glutine (cereali)': return <Wheat size={14} className="text-gold" />;
      case 'Crostacei': return <Shell size={14} className="text-gold" />;
      case 'Uova': return <Egg size={14} className="text-gold" />;
      case 'Pesce': return <Fish size={14} className="text-gold" />;
      case 'Arachidi': return <CircleDot size={14} className="text-gold" />;
      case 'Soia': return <Bean size={14} className="text-gold" />;
      case 'Latte': return <Milk size={14} className="text-gold" />;
      case 'Frutta a guscio': return <Shell size={14} className="text-gold" />;
      case 'Sedano': return <Carrot size={14} className="text-gold" />;
      case 'Senape': return <Droplet size={14} className="text-gold" />;
      case 'Semi di sesamo': return <CircleDot size={14} className="text-gold" />;
      case 'Solfiti': return <Wine size={14} className="text-gold" />;
      case 'Lupini': return <Bean size={14} className="text-gold" />;
      case 'Molluschi': return <Shell size={14} className="text-gold" />;
      // Fallback for old keys if any remain
      case 'Glutine': return <Wheat size={14} className="text-gold" />;
      case 'Lattosio': return <Milk size={14} className="text-gold" />;
      default: return <Info size={14} className="text-gold" />;
    }
  };

  const toggleDietary = (key: keyof typeof dietaryFilters) => {
    setDietaryFilters(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const toggleAllergen = (id: string) => {
    setExcludedAllergens(prev => 
      prev.includes(id) ? prev.filter(a => a !== id) : [...prev, id]
    );
  };

  const filteredItems = MENU_ITEMS.filter(item => {
    const matchesCategory = item.category === activeCategory;
    const matchesDietary = 
      (!dietaryFilters.vegetarian || item.isVegetarian || item.isVegan) &&
      (!dietaryFilters.vegan || item.isVegan) &&
      (!dietaryFilters.glutenFree || item.isGlutenFree);
    const matchesAllergens = !item.allergens?.some(a => excludedAllergens.includes(a));
    return matchesCategory && matchesDietary && matchesAllergens;
  });

  // Group items by subCategory
  const groupedItems = filteredItems.reduce((acc, item) => {
    const sub = item.subCategory || 'Generale';
    if (!acc[sub]) acc[sub] = [];
    acc[sub].push(item);
    return acc;
  }, {} as Record<string, MenuItemType[]>);

  const resetFilters = () => {
    setDietaryFilters({ vegetarian: false, vegan: false, glutenFree: false });
    setExcludedAllergens([]);
  };

  const handleItemClick = (item: MenuItemType) => {
    setSelectedItem(item);
    setItemHistory([]);
  };

  const handlePairingClick = (pairingName: string) => {
    const foundItem = MENU_ITEMS.find(i => i.name.toLowerCase() === pairingName.toLowerCase());
    if (foundItem && selectedItem) {
      setItemHistory(prev => [...prev, selectedItem]);
      setSelectedItem(foundItem);
    }
  };

  const handleCloseModal = () => {
    setSelectedItem(null);
    setItemHistory([]);
  };

  const handleBack = () => {
    if (itemHistory.length > 0) {
      const prevItem = itemHistory[itemHistory.length - 1];
      setSelectedItem(prevItem);
      setItemHistory(prev => prev.slice(0, -1));
    } else {
      handleCloseModal();
    }
  };

  const findPairingItem = (pairingName: string) => {
    return MENU_ITEMS.find(i => i.name.toLowerCase() === pairingName.toLowerCase());
  };

  // Determine SEO Metadata based on active category
  const isAperitivo = activeCategory === Category.Drink || activeCategory === Category.ViniBollicine || activeCategory === Category.Birre;
  const seoTitle = isAperitivo 
    ? "Aperitivo a San Martino Buon Albergo – Verona Est | Napoleone Bistrot"
    : "Menu Bistrot a San Martino Buon Albergo – Verona | Cucina Veneta";
  const seoDesc = isAperitivo
    ? "Cocktail, aperitivi e vini selezionati a San Martino Buon Albergo, Verona Est. Il punto ideale per l’aperitivo vicino a Verona."
    : "Scopri il menu di Napoleone Bistrot a San Martino Buon Albergo, vicino a Verona: piatti della tradizione veneta, aperitivi e vini selezionati.";

  return (
    <div className="pt-32 pb-24 bg-cream min-h-screen relative overflow-hidden">
      <SEO title={seoTitle} description={seoDesc} />
      <div className="napoleon-pattern absolute inset-0 pointer-events-none opacity-10"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <header className="text-center mb-10 animate-fade-in">
          <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl mb-4 text-darkGreen tracking-tight font-bold">La Nostra Carta</h1>
          <p className="italic text-darkGreen/70 max-w-2xl mx-auto text-sm sm:text-base md:text-xl font-serif">
            "Dalle ricette della tradizione veronese alle eccellenze italiane, ogni ingrediente è selezionato con cura."
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className={`flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] px-6 py-2 rounded-full border transition-all shadow-sm ${showFilters ? 'bg-darkGreen text-white border-darkGreen' : 'bg-white border-gold/30 text-gold hover:bg-gold/5'}`}
            >
              <Filter size={12} /> {lang === 'it' ? 'Filtri' : 'Filters'}
            </button>
          </div>
        </header>

        {/* Categories Tabs */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-8 py-3 font-serif text-lg tracking-widest transition-all duration-300 rounded-full border ${activeCategory === cat ? 'bg-gold text-white border-gold shadow-xl -translate-y-1' : 'bg-white/50 border-transparent text-darkGreen/80 hover:text-darkGreen hover:bg-white'}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Collapsible Filter Panel */}
        {showFilters && (
          <div className="max-w-2xl mx-auto mb-16 bg-white border border-darkGreen/10 shadow-2xl p-8 rounded-[2rem] animate-fade-in">
            <div className="flex justify-between items-center mb-6">
              <h4 className="font-serif text-xl text-darkGreen italic font-bold">Opzioni di ricerca</h4>
              <button onClick={() => setShowFilters(false)} className="text-darkGreen/80 hover:text-darkGreen transition-colors"><X size={20} /></button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div>
                <h5 className="text-[10px] font-bold uppercase tracking-widest text-gold mb-4">Dietary</h5>
                <div className="flex flex-wrap gap-2">
                  <button onClick={() => toggleDietary('vegetarian')} className={`px-4 py-2 text-[9px] font-bold uppercase tracking-widest border transition-all rounded-full ${dietaryFilters.vegetarian ? 'bg-sage text-white border-sage' : 'bg-cream/30 border-darkGreen/5 text-darkGreen'}`}>Vegetariano</button>
                  <button onClick={() => toggleDietary('vegan')} className={`px-4 py-2 text-[9px] font-bold uppercase tracking-widest border transition-all rounded-full ${dietaryFilters.vegan ? 'bg-sage text-white border-sage' : 'bg-cream/30 border-darkGreen/5 text-darkGreen'}`}>Vegano</button>
                </div>
              </div>
              <div>
                <h5 className="text-[10px] font-bold uppercase tracking-widest text-gold mb-4">Escludi Allergeni</h5>
                <div className="flex flex-wrap gap-2">
                  {allergensList.map(a => (
                    <button key={a.id} onClick={() => toggleAllergen(a.id)} className={`px-4 py-2 text-[9px] font-bold uppercase tracking-widest border transition-all rounded-full ${excludedAllergens.includes(a.id) ? 'bg-darkGreen text-white border-darkGreen' : 'bg-cream/30 border-darkGreen/5 text-darkGreen'}`}>{a.label}</button>
                  ))}
                </div>
              </div>
            </div>
            <button onClick={resetFilters} className="mt-8 text-[9px] font-bold uppercase tracking-widest text-gold border-b border-gold/30">Ripristina tutto</button>
          </div>
        )}

        {/* Menu Items grouped by Subcategory */}
        {Object.keys(groupedItems).length > 0 ? (
          <div className="space-y-20">
            {Object.entries(groupedItems).map(([sub, items]) => (
              <div key={sub} className="animate-fade-in">
                <div className="flex items-center gap-4 mb-8">
                  <h3 className="text-darkGreen font-bold tracking-tight font-serif">{sub}</h3>
                  <div className="h-[1px] flex-grow bg-gold/20"></div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-6">
                  {items.map((item, idx) => (
                    <div
                      key={item.id}
                      onClick={() => handleItemClick(item)}
                      className="group flex items-center justify-between p-4 rounded-2xl border border-transparent hover:border-gold/20 hover:bg-white hover:shadow-xl transition-all duration-500 cursor-pointer"
                    >
                      <div className="flex items-center gap-5 flex-grow">
                        {item.image ? (
                          <div className="w-16 h-16 rounded-2xl overflow-hidden shadow-sm flex-shrink-0 group-hover:scale-110 transition-transform">
                            <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                          </div>
                        ) : (
                          <div className="w-16 h-16 rounded-2xl bg-cream flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-white transition-colors">
                            <Info size={24} />
                          </div>
                        )}
                        <div className="flex flex-col pr-8">
                          <h4 className="font-serif font-bold text-darkGreen group-hover:text-gold transition-colors mb-1">{item.name}</h4>
                          <p className="text-darkGreen/80 italic line-clamp-1 font-serif">{item.description}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        {/* Wine glass/bottle icons for wine items */}
                        {(item.subCategory === 'Vini Bianchi' || item.subCategory === 'Vini Rossi' || item.subCategory === 'Bollicine') && typeof item.price === 'string' && item.price.includes('/') && (
                          <div className="flex gap-3 justify-end mb-1">
                            <GlassWater size={12} className="text-gold" />
                            <Wine size={12} className="text-gold" />
                          </div>
                        )}
                        <div className="font-serif font-bold text-darkGreen text-lg">
                          {typeof item.price === 'number' ? item.price.toFixed(2).replace('.', ',') : item.price}
                        </div>
                        <div className="flex gap-1 justify-end mt-1">
                          {item.isVegan && <Leaf size={10} className="text-sage" />}
                          {item.isVegetarian && !item.isVegan && <Leaf size={10} className="text-sage/80" />}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white/50 rounded-[3rem] border border-gold/10">
            <h3 className="font-serif text-2xl text-darkGreen/80 italic">Nessun articolo trovato per i filtri selezionati.</h3>
            <button onClick={resetFilters} className="mt-4 text-gold font-bold uppercase text-[10px] tracking-widest">Mostra tutto il menu</button>
          </div>
        )}

        {/* Footer Info */}
        <div className="mt-20 p-8 border-t border-gold/10 text-center flex flex-col gap-2">
          <p className="text-[10px] font-bold uppercase tracking-widest text-darkGreen/70">Coperto € 2,00</p>
          <p className="text-[10px] font-bold uppercase tracking-widest text-darkGreen/70">
            {lang === 'it' ? 'Allergie o intolleranze alimentari? Chiedi allo staff.' : 'Allergies or food intolerances? Ask the staff.'}
          </p>
        </div>
      </div>

      {/* Item Detail Modal */}
      {selectedItem && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-darkGreen/60 backdrop-blur-sm animate-fade-in">
          <div className="bg-cream w-full max-w-sm border-2 border-gold p-6 md:p-10 shadow-2xl rounded-[2.5rem] relative animate-[fadeInUp_0.4s_ease-out] max-h-[90vh] overflow-y-auto">
            <button onClick={() => setSelectedItem(null)} className="absolute top-4 right-4 md:top-6 md:right-6 text-darkGreen/80 hover:text-darkGreen transition-colors p-3 bg-white/50 rounded-full"><X size={24} /></button>
            <div className="flex flex-col items-center text-center pt-4">
              <div className="w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-white shadow-xl mb-6 flex-shrink-0">
                <img src={selectedItem.image || 'https://picsum.photos/seed/placeholder/300/300'} alt={selectedItem.name} className="w-full h-full object-cover" />
              </div>
              <h3 className="font-serif text-3xl font-bold text-darkGreen mb-2">{selectedItem.name}</h3>
              <p className="text-gold font-bold uppercase tracking-[0.2em] text-[10px] mb-4">{selectedItem.subCategory || selectedItem.category}</p>
              <p className="font-serif italic text-darkGreen/80 leading-relaxed mb-6">{selectedItem.description}</p>

              {/* ALCOHOL LEVEL */}
              {selectedItem.alcoholLevel !== undefined && selectedItem.alcoholLevel > 0 && (
                <div className="mb-6 flex flex-col items-center animate-fade-in">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-gold mb-2">Intensità</span>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Martini 
                        key={i} 
                        size={16} 
                        className={`${i < (selectedItem.alcoholLevel || 0) ? 'text-gold fill-gold' : 'text-gold/20'}`} 
                      />
                    ))}
                  </div>
                </div>
              )}

              {/* RECOMMENDED PAIRINGS */}
              {selectedItem.recommendedPairings && selectedItem.recommendedPairings.length > 0 && (
                <div className="my-4 w-full animate-fade-in flex flex-col items-center">
                  <h5 className="text-[10px] font-bold uppercase tracking-widest text-gold mb-2 text-center flex items-center justify-center gap-2">
                    <UtensilsCrossed size={12} />
                    {lang === 'it' ? 'Perfetto con' : 'Perfect with'}
                  </h5>
                  <div className="flex flex-wrap justify-center gap-2 items-center max-w-[90%]">
                    {selectedItem.recommendedPairings.map((pairing, idx) => {
                      const isLinkable = findPairingItem(pairing);
                      return isLinkable ? (
                        <button 
                          key={idx} 
                          onClick={() => handlePairingClick(pairing)}
                          className="font-serif font-medium text-darkGreen text-sm border-b border-gold/30 pb-0.5 hover:text-gold hover:border-gold transition-colors"
                        >
                          {pairing}
                        </button>
                      ) : (
                        <span key={idx} className="font-serif font-medium text-darkGreen/70 text-sm border-b border-transparent pb-0.5">
                          {pairing}
                        </span>
                      );
                    })}
                  </div>
                </div>
              )}
              
              {/* RESTORED ALLERGENS INFO SECTION */}
              {selectedItem.allergens && selectedItem.allergens.length > 0 && (
                <div className="mb-8 w-full">
                  <h5 className="text-[10px] font-bold uppercase tracking-widest text-gold mb-3 text-center">
                    {lang === 'it' ? 'Allergeni Presenti' : 'Allergens Present'}
                  </h5>
                  <div className="flex flex-wrap justify-center gap-2">
                    {selectedItem.allergens.map(a => (
                      <div key={a} title={a} className="flex items-center justify-center bg-white p-2 rounded-full border border-gold/10 shadow-sm text-darkGreen hover:scale-110 transition-transform">
                        {getAllergenIcon(a)}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {itemHistory.length > 0 ? (
                <button onClick={handleBack} className="w-full bg-gold text-darkGreen py-4 rounded-full font-bold uppercase text-[10px] tracking-widest hover:bg-darkGreen hover:text-white transition-all flex items-center justify-center gap-2">
                  <ChevronLeft size={16} /> Torna Indietro
                </button>
              ) : (
                <button onClick={handleCloseModal} className="w-full bg-darkGreen text-white py-4 rounded-full font-bold uppercase text-[10px] tracking-widest hover:bg-gold transition-all">Torna al Menu</button>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Filter Modal */}
      {showFilters && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-darkGreen/60 backdrop-blur-sm animate-fade-in">
          <div className="bg-white w-full max-w-2xl border border-darkGreen/10 p-8 shadow-2xl rounded-[2.5rem] relative animate-[fadeInUp_0.4s_ease-out] max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h4 className="font-serif text-xl text-darkGreen italic font-bold">Opzioni di ricerca</h4>
              <button onClick={() => setShowFilters(false)} className="text-darkGreen/80 hover:text-darkGreen transition-colors p-2 bg-cream/50 rounded-full"><X size={20} /></button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div>
                <h5 className="text-[10px] font-bold uppercase tracking-widest text-gold mb-4">Dietary</h5>
                <div className="flex flex-wrap gap-2">
                  <button onClick={() => toggleDietary('vegetarian')} className={`px-4 py-2 text-[9px] font-bold uppercase tracking-widest border transition-all rounded-full ${dietaryFilters.vegetarian ? 'bg-sage text-white border-sage' : 'bg-cream/30 border-darkGreen/5 text-darkGreen'}`}>Vegetariano</button>
                  <button onClick={() => toggleDietary('vegan')} className={`px-4 py-2 text-[9px] font-bold uppercase tracking-widest border transition-all rounded-full ${dietaryFilters.vegan ? 'bg-sage text-white border-sage' : 'bg-cream/30 border-darkGreen/5 text-darkGreen'}`}>Vegano</button>
                </div>
              </div>
              <div>
                <h5 className="text-[10px] font-bold uppercase tracking-widest text-gold mb-4">Escludi Allergeni</h5>
                <div className="flex flex-wrap gap-2">
                  {allergensList.map(a => (
                    <button key={a.id} onClick={() => toggleAllergen(a.id)} className={`px-4 py-2 text-[9px] font-bold uppercase tracking-widest border transition-all rounded-full ${excludedAllergens.includes(a.id) ? 'bg-darkGreen text-white border-darkGreen' : 'bg-cream/30 border-darkGreen/5 text-darkGreen'}`}>{a.label}</button>
                  ))}
                </div>
              </div>
            </div>
            <div className="mt-8 flex justify-between items-center border-t border-gold/10 pt-6">
              <button onClick={resetFilters} className="text-[9px] font-bold uppercase tracking-widest text-gold border-b border-gold/30">Ripristina tutto</button>
              <button onClick={() => setShowFilters(false)} className="bg-darkGreen text-white px-8 py-3 rounded-full font-bold uppercase text-[10px] tracking-widest hover:bg-gold transition-all shadow-lg">Applica Filtri</button>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default Menu;
