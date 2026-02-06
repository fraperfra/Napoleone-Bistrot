import React, { useState } from 'react';
import { useCMS } from '../../context/CMSContext';
import { Event } from '../../types.ts';
import { 
  Plus, 
  Edit2, 
  Trash2, 
  Save, 
  X, 
  Calendar as CalendarIcon,
  Clock,
  Type
} from 'lucide-react';

const EventManager: React.FC = () => {
  const { events, addEvent, updateEvent, deleteEvent } = useCMS();
  const [isEditing, setIsEditing] = useState(false);
  
  const emptyEvent: Event = {
    id: '',
    title: '',
    date: '',
    description: '',
    type: 'dinner',
    image: ''
  };

  const [currentEvent, setCurrentEvent] = useState<Event>(emptyEvent);

  const handleEdit = (event: Event) => {
    setCurrentEvent(event);
    setIsEditing(true);
  };

  const handleAdd = () => {
    setCurrentEvent({ ...emptyEvent, id: Date.now().toString() });
    setIsEditing(true);
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (events.find(e => e.id === currentEvent.id)) {
      updateEvent(currentEvent);
    } else {
      addEvent(currentEvent);
    }
    setIsEditing(false);
  };

  const handleDelete = (id: string) => {
    if (window.confirm('Sei sicuro di voler eliminare questo evento?')) {
      deleteEvent(id);
    }
  };

  if (isEditing) {
    return (
      <div className="p-6 max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-serif text-darkGreen font-bold">
            {events.find(e => e.id === currentEvent.id) ? 'Modifica Evento' : 'Nuovo Evento'}
          </h2>
          <button onClick={() => setIsEditing(false)} className="p-2 hover:bg-gray-100 rounded-full">
            <X size={24} />
          </button>
        </div>

        <form onSubmit={handleSave} className="bg-white p-8 rounded-[2rem] shadow-xl space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="md:col-span-2">
              <label className="block text-xs font-bold uppercase tracking-widest text-darkGreen/60 mb-2">Titolo Evento</label>
              <input 
                required
                value={currentEvent.title}
                onChange={e => setCurrentEvent({...currentEvent, title: e.target.value})}
                className="w-full p-3 bg-cream/30 rounded-xl border border-darkGreen/10 outline-none focus:border-gold"
              />
            </div>
            
            <div>
              <label className="block text-xs font-bold uppercase tracking-widest text-darkGreen/60 mb-2">Data</label>
              <input 
                required
                value={currentEvent.date}
                onChange={e => setCurrentEvent({...currentEvent, date: e.target.value})}
                placeholder="es. 15 Ottobre 2024"
                className="w-full p-3 bg-cream/30 rounded-xl border border-darkGreen/10 outline-none focus:border-gold"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-widest text-darkGreen/60 mb-2">Tipo</label>
              <select 
                value={currentEvent.type}
                onChange={e => setCurrentEvent({...currentEvent, type: e.target.value as any})}
                className="w-full p-3 bg-cream/30 rounded-xl border border-darkGreen/10 outline-none focus:border-gold"
              >
                <option value="dinner">Cena a tema</option>
                <option value="karaoke">Karaoke / Musica</option>
                <option value="private">Evento Privato</option>
              </select>
            </div>

            <div className="md:col-span-2">
              <label className="block text-xs font-bold uppercase tracking-widest text-darkGreen/60 mb-2">Descrizione</label>
              <textarea 
                rows={4}
                value={currentEvent.description}
                onChange={e => setCurrentEvent({...currentEvent, description: e.target.value})}
                className="w-full p-3 bg-cream/30 rounded-xl border border-darkGreen/10 outline-none focus:border-gold"
              />
            </div>

             <div className="md:col-span-2">
              <label className="block text-xs font-bold uppercase tracking-widest text-darkGreen/60 mb-2">URL Immagine</label>
              <input 
                value={currentEvent.image}
                onChange={e => setCurrentEvent({...currentEvent, image: e.target.value})}
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
                <Save size={18} /> Salva Evento
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
          <h2 className="text-3xl font-serif text-darkGreen font-bold">Gestione Eventi</h2>
          <p className="text-darkGreen/60">Programma le serate e gli eventi speciali.</p>
        </div>
        <button 
          onClick={handleAdd}
          className="bg-darkGreen text-white px-6 py-3 rounded-xl font-bold flex items-center gap-2 hover:bg-gold hover:text-darkGreen transition-all shadow-lg"
        >
          <Plus size={20} /> Nuovo Evento
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map(event => (
          <div key={event.id} className="bg-white rounded-[2rem] overflow-hidden border border-darkGreen/5 shadow-lg group hover:shadow-xl transition-all">
            <div className="h-48 bg-gray-200 relative overflow-hidden">
                {event.image ? (
                    <img src={event.image} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                ) : (
                    <div className="w-full h-full flex items-center justify-center bg-darkGreen/10 text-darkGreen/20">
                        <CalendarIcon size={48} />
                    </div>
                )}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-darkGreen shadow-sm">
                    {event.type}
                </div>
            </div>
            
            <div className="p-6">
                <div className="flex items-center gap-2 text-gold text-sm font-bold mb-2">
                    <CalendarIcon size={14} />
                    {event.date}
                </div>
                <h3 className="text-xl font-serif font-bold text-darkGreen mb-2">{event.title}</h3>
                <p className="text-darkGreen/70 text-sm line-clamp-3 mb-6">{event.description}</p>
                
                <div className="flex gap-2 border-t border-gray-100 pt-4">
                    <button 
                        onClick={() => handleEdit(event)}
                        className="flex-1 py-2 rounded-lg bg-cream/50 text-darkGreen font-bold text-sm hover:bg-gold hover:text-darkGreen transition-colors"
                    >
                        Modifica
                    </button>
                    <button 
                        onClick={() => handleDelete(event.id)}
                        className="px-3 py-2 rounded-lg bg-red-50 text-red-500 hover:bg-red-500 hover:text-white transition-colors"
                    >
                        <Trash2 size={18} />
                    </button>
                </div>
            </div>
          </div>
        ))}
        
        {events.length === 0 && (
            <div className="col-span-full text-center py-12 bg-white rounded-xl border border-dashed border-gray-300">
                <p className="text-gray-400">Nessun evento in programma.</p>
            </div>
        )}
      </div>
    </div>
  );
};

export default EventManager;
