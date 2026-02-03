
import React from 'react';
import { EVENTS } from '../data';
import { Music, Calendar, Users, Star } from 'lucide-react';
import SEO from '../components/SEO';

const Events: React.FC<{ lang: 'it' | 'en' }> = ({ lang }) => {
  const seoTitle = "Sala Eventi a San Martino Buon Albergo (Verona) | Napoleone Bistrot";
  const seoDesc = "Sala storica per eventi aziendali e convegni a San Martino Buon Albergo, a pochi minuti da Verona. Allestimenti personalizzati.";

  return (
    <div className="pt-32 pb-24">
      <SEO title={seoTitle} description={seoDesc} />
      <div className="max-w-7xl mx-auto px-4">
        <header className="text-center mb-16">
          <h1 className="font-serif text-5xl md:text-6xl mb-6">Eventi & Intrattenimento</h1>
          <p className="italic text-darkGreen/70 max-w-2xl mx-auto">
            "Non solo buon cibo. Al Napoleone Bistrot creiamo momenti indimenticabili tra musica, risate e convivialità."
          </p>
        </header>

        {/* Karaoke Spotlight */}
        <section className="bg-sage text-white p-8 md:p-16 mb-24 relative overflow-hidden rounded-3xl border border-darkGreen/10 shadow-xl">
          <div className="absolute top-0 right-0 p-12 opacity-10">
            <Music size={200} />
          </div>
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block bg-gold text-darkGreen px-4 py-1 text-xs font-bold uppercase tracking-widest rounded-full">
                Il Cuore del Napoleone
              </div>
              <h2 className="font-serif text-4xl md:text-6xl font-bold">Karaoke Nights</h2>
              <p className="text-lg opacity-90 leading-relaxed font-light">
                Ogni Mercoledì e Venerdì, il locale si trasforma nel palcoscenico più vivace di Verona. Un impianto audio professionale, oltre 50.000 brani e un'atmosfera carica di energia.
              </p>
              <div className="flex gap-4">
                <button className="bg-white text-darkGreen px-8 py-3 font-bold uppercase tracking-widest text-xs hover:bg-gold transition-all rounded-full">
                  Prenota la tua serata
                </button>
              </div>
            </div>
            <div className="gold-frame rotate-2 hover:rotate-0 transition-transform duration-500 shadow-2xl overflow-hidden rounded-2xl">
              <img src="https://picsum.photos/seed/karaoke-party/800/600" alt="Karaoke" className="w-full" />
            </div>
          </div>
        </section>

        {/* Monthly Events List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
          {EVENTS.map(event => (
            <div key={event.id} className="group cursor-pointer bg-white border border-darkGreen/10 p-4 rounded-3xl shadow-sm hover:shadow-2xl hover:scale-[1.02] transition-all duration-500">
              <div className="relative aspect-[16/9] overflow-hidden mb-6 rounded-2xl">
                <img src={event.image} alt={event.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute top-4 left-4 bg-white/90 px-4 py-2 flex flex-col items-center shadow-md rounded-xl">
                  <span className="text-xs uppercase font-bold tracking-widest text-gold">{event.type}</span>
                </div>
              </div>
              <div className="px-4 pb-4">
                <h3 className="font-serif text-3xl mb-2 group-hover:text-gold transition-colors">{event.title}</h3>
                <div className="flex items-center gap-2 text-sage font-bold text-xs uppercase tracking-widest mb-4">
                  <Calendar size={14} /> {event.date}
                </div>
                <p className="text-darkGreen/80 leading-relaxed">{event.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Private Events Section */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center bg-cream p-6 sm:p-10 md:p-20 relative border border-darkGreen/10 rounded-[2rem] shadow-inner">
          <div className="napoleon-pattern absolute inset-0"></div>
          <div className="relative z-10">
            <h2 className="font-serif text-3xl sm:text-4xl mb-6 md:mb-8 leading-tight">Privatizza il Napoleone per i tuoi momenti speciali.</h2>
            <div className="space-y-4 md:space-y-6">
              {[
                { icon: <Users size={20} />, text: 'Capienza fino a 60 persone' },
                { icon: <Star size={20} />, text: 'Menu personalizzati su misura' },
                { icon: <Music size={20} />, text: 'Servizio DJ e Karaoke dedicato' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 text-darkGreen/80">
                  <div className="text-gold">{item.icon}</div>
                  <span className="font-medium text-sm sm:text-base">{item.text}</span>
                </div>
              ))}
            </div>
            <div className="mt-12 p-8 border border-darkGreen/10 bg-white shadow-xl rounded-2xl">
              <h4 className="font-serif text-xl mb-4 text-darkGreen">Richiedi un Preventivo</h4>
              <form className="space-y-4">
                <input type="text" placeholder="Nome & Cognome" className="w-full p-4 bg-cream/50 border border-darkGreen/10 outline-none focus:border-gold transition-colors rounded-xl" />
                <input type="email" placeholder="Email" className="w-full p-4 bg-cream/50 border border-darkGreen/10 outline-none focus:border-gold transition-colors rounded-xl" />
                <textarea placeholder="Parlaci del tuo evento..." rows={3} className="w-full p-4 bg-cream/50 border border-darkGreen/10 outline-none focus:border-gold transition-colors rounded-xl"></textarea>
                <button className="w-full bg-darkGreen text-white py-4 font-bold uppercase tracking-widest text-xs hover:bg-gold hover:text-darkGreen transition-all rounded-xl">Invia Richiesta</button>
              </form>
            </div>
          </div>
          <div className="space-y-4">
            <img src="https://picsum.photos/seed/private1/800/600" className="w-full shadow-lg border border-darkGreen/10 rounded-2xl" alt="Private event space" />
            <img src="https://picsum.photos/seed/private2/800/600" className="w-full shadow-lg border border-darkGreen/10 rounded-2xl" alt="Private event dining" />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Events;
