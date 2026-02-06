import React, { useState } from 'react';
import { useCMS } from '../../context/CMSContext';
import { MenuItem, Category } from '../../types';
import { 
  Plus, 
  Search, 
  Edit2, 
  Trash2, 
  Save, 
  X, 
  Image as ImageIcon,
  Wand2,
  Euro
} from 'lucide-react';

const MenuManager: React.FC = () => {
  const { menuItems, addMenuItem, updateMenuItem, deleteMenuItem } = useCMS();
  const [isEditing, setIsEditing] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState<string>('all');
  const [generatingDesc, setGeneratingDesc] = useState(false);
  
  // Empty item template
  const emptyItem: MenuItem = {
    id: '',
    name: '',
    description: '',
    price: 0,
    category: Category.Bistrot,
    subCategory: '',
    allergens: [],
    image: '',
    alcoholLevel: 0
  };

  const [currentItem, setCurrentItem] = useState<MenuItem>(emptyItem);

  // Filter items
  const filteredItems = menuItems.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          item.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = filterCategory === 'all' || item.category === filterCategory;
    return matchesSearch && matchesCategory;
  });

  const handleEdit = (item: MenuItem) => {
    setCurrentItem(item);
    setIsEditing(true);
  };

  const handleAdd = () => {
    setCurrentItem({ ...emptyItem, id: Date.now().toString() }); // Simple ID gen
    setIsEditing(true);
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (menuItems.find(i => i.id === currentItem.id)) {
      updateMenuItem(currentItem);
    } else {
      addMenuItem(currentItem);
    }
    setIsEditing(false);
  };

  const handleDelete = (id: string) => {
    if (window.confirm('Sei sicuro di voler eliminare questo piatto?')) {
      deleteMenuItem(id);
    }
  };

  // AI Description Generator (Mock/Proxy)
  const generateDescription = async () => {
    if (!currentItem.name) return alert('Inserisci prima il nome del piatto');
    
    setGeneratingDesc(true);
    try {
        const apiKey = import.meta.env.VITE_OPENAI_API_KEY;
        if (!apiKey) {
            // Fallback mock if no API key
            setTimeout(() => {
                setCurrentItem(prev => ({
                    ...prev, 
                    description: `Delizioso ${prev.name} preparato con ingredienti freschi di stagione, selezionati dai nostri chef per offrire un'esperienza autentica.`
                }));
                setGeneratingDesc(false);
            }, 1000);
            return;
        }

        // Real API Call via Proxy
        const isLocal = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
        const endpoint = isLocal ? '/openai-api/chat/completions' : 'https://api.openai.com/v1/chat/completions';

        const response = await fetch(endpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`
            },
            body: JSON.stringify({
                model: "gpt-3.5-turbo", // Use 3.5 for speed/cost on text
                messages: [{
                    role: "system",
                    content: "Sei un copywriter gastronomico esperto per un bistrot di lusso. Scrivi una descrizione breve (max 20 parole), elegante e appetitosa in italiano per il piatto richiesto."
                }, {
                    role: "user",
                    content: `Descrivi il piatto: ${currentItem.name}. Ingredienti/Note: ${currentItem.description}`
                }]
            })
        });
        
        const data = await response.json();
        if (data.choices && data.choices[0]) {
            setCurrentItem(prev => ({
                ...prev,
                description: data.choices[0].message.content.replace(/"/g, '')
            }));
        }
    } catch (e) {
        console.error(e);
        alert('Errore generazione descrizione');
    } finally {
        setGeneratingDesc(false);
    }
  };

  if (isEditing) {
    return (
      <div className="p-6 max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-serif text-darkGreen font-bold">
            {menuItems.find(i => i.id === currentItem.id) ? 'Modifica Piatto' : 'Nuovo Piatto'}
          </h2>
          <button onClick={() => setIsEditing(false)} className="p-2 hover:bg-gray-100 rounded-full">
            <X size={24} />
          </button>
        </div>

        <form onSubmit={handleSave} className="bg-white p-8 rounded-[2rem] shadow-xl space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-bold uppercase tracking-widest text-darkGreen/60 mb-2">Nome Piatto</label>
              <input 
                required
                value={currentItem.name}
                onChange={e => setCurrentItem({...currentItem, name: e.target.value})}
                className="w-full p-3 bg-cream/30 rounded-xl border border-darkGreen/10 outline-none focus:border-gold"
              />
            </div>
            
            <div>
              <label className="block text-xs font-bold uppercase tracking-widest text-darkGreen/60 mb-2">Categoria</label>
              <select 
                value={currentItem.category}
                onChange={e => setCurrentItem({...currentItem, category: e.target.value as Category})}
                className="w-full p-3 bg-cream/30 rounded-xl border border-darkGreen/10 outline-none focus:border-gold"
              >
                {Object.values(Category).map(c => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>

            <div className="md:col-span-2">
              <label className="block text-xs font-bold uppercase tracking-widest text-darkGreen/60 mb-2 flex justify-between">
                <span>Descrizione</span>
                <button 
                    type="button" 
                    onClick={generateDescription}
                    disabled={generatingDesc}
                    className="text-gold flex items-center gap-1 hover:text-darkGreen transition-colors"
                >
                    <Wand2 size={14} /> {generatingDesc ? 'Generando...' : 'Genera con AI'}
                </button>
              </label>
              <textarea 
                rows={3}
                value={currentItem.description}
                onChange={e => setCurrentItem({...currentItem, description: e.target.value})}
                className="w-full p-3 bg-cream/30 rounded-xl border border-darkGreen/10 outline-none focus:border-gold"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-widest text-darkGreen/60 mb-2">Prezzo (€)</label>
              <div className="relative">
                <input 
                  type="number"
                  step="0.5"
                  value={currentItem.price}
                  onChange={e => setCurrentItem({...currentItem, price: parseFloat(e.target.value)})}
                  className="w-full p-3 pl-10 bg-cream/30 rounded-xl border border-darkGreen/10 outline-none focus:border-gold"
                />
                <Euro size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-darkGreen/40" />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-widest text-darkGreen/60 mb-2">Sottocategoria</label>
              <input 
                value={currentItem.subCategory || ''}
                onChange={e => setCurrentItem({...currentItem, subCategory: e.target.value})}
                placeholder="es. Antipasti, Primi..."
                className="w-full p-3 bg-cream/30 rounded-xl border border-darkGreen/10 outline-none focus:border-gold"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-widest text-darkGreen/60 mb-2">Immagine (URL)</label>
              <input 
                value={currentItem.image || ''}
                onChange={e => setCurrentItem({...currentItem, image: e.target.value})}
                placeholder="https://..."
                className="w-full p-3 bg-cream/30 rounded-xl border border-darkGreen/10 outline-none focus:border-gold"
              />
            </div>
          </div>

          <div className="pt-4 border-t border-gray-100 flex justify-end gap-4">
            <button 
                type="button" 
                onClick={() => setIsEditing(false)}
                className="px-6 py-3 rounded-xl border border-darkGreen/20 text-darkGreen font-bold hover:bg-gray-50"
            >
                Annulla
            </button>
            <button 
                type="submit"
                className="px-6 py-3 rounded-xl bg-gold text-darkGreen font-bold hover:bg-darkGreen hover:text-white transition-all shadow-lg flex items-center gap-2"
            >
                <Save size={18} /> Salva Piatto
            </button>
          </div>
        </form>
      </div>
    );
  }

  return (
    <div className="p-6">
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
        <div>
          <h2 className="text-3xl font-serif text-darkGreen font-bold">Gestione Menu</h2>
          <p className="text-darkGreen/60">Gestisci i piatti, i prezzi e le categorie.</p>
        </div>
        <button 
          onClick={handleAdd}
          className="bg-darkGreen text-white px-6 py-3 rounded-xl font-bold flex items-center gap-2 hover:bg-gold hover:text-darkGreen transition-all shadow-lg"
        >
          <Plus size={20} /> Nuovo Piatto
        </button>
      </div>

      {/* Filters */}
      <div className="bg-white p-4 rounded-2xl shadow-sm border border-darkGreen/5 mb-6 flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
          <input 
            placeholder="Cerca piatto..." 
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            className="w-full pl-10 p-2 bg-cream/30 rounded-lg border-transparent focus:bg-white focus:border-gold outline-none transition-all"
          />
        </div>
        <select 
            value={filterCategory}
            onChange={e => setFilterCategory(e.target.value)}
            className="p-2 bg-cream/30 rounded-lg border-transparent focus:border-gold outline-none"
        >
            <option value="all">Tutte le categorie</option>
            {Object.values(Category).map(c => <option key={c} value={c}>{c}</option>)}
        </select>
      </div>

      {/* List */}
      <div className="grid grid-cols-1 gap-4">
        {filteredItems.map(item => (
          <div key={item.id} className="bg-white p-4 rounded-xl border border-darkGreen/5 shadow-sm hover:shadow-md transition-all flex flex-col md:flex-row items-center gap-4">
            <div className="w-16 h-16 bg-cream rounded-lg overflow-hidden shrink-0 flex items-center justify-center text-darkGreen/20">
                {item.image ? <img src={item.image} className="w-full h-full object-cover" /> : <ImageIcon />}
            </div>
            
            <div className="flex-1 text-center md:text-left">
              <h4 className="font-bold text-darkGreen text-lg">{item.name}</h4>
              <p className="text-sm text-gray-500 line-clamp-1">{item.description}</p>
              <div className="flex gap-2 justify-center md:justify-start mt-1">
                <span className="text-xs bg-gold/20 text-darkGreen px-2 py-1 rounded-md font-bold">{item.category}</span>
                {item.subCategory && <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-md">{item.subCategory}</span>}
              </div>
            </div>

            <div className="font-serif font-bold text-xl text-gold">€ {item.price}</div>

            <div className="flex gap-2">
              <button 
                onClick={() => handleEdit(item)}
                className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
              >
                <Edit2 size={20} />
              </button>
              <button 
                onClick={() => handleDelete(item.id)}
                className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
              >
                <Trash2 size={20} />
              </button>
            </div>
          </div>
        ))}
        
        {filteredItems.length === 0 && (
            <div className="text-center py-12 text-gray-400">
                <p>Nessun piatto trovato.</p>
            </div>
        )}
      </div>
    </div>
  );
};

export default MenuManager;
