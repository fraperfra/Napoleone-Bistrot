
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4">
        {/* Intro */}
        <section className="mb-16 md:mb-24 text-center">
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6 md:mb-8">La Nostra Storia</h1>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg sm:text-xl italic font-serif text-darkGreen/70 leading-relaxed mb-8 md:mb-12">
              "Dietro ogni piatto, ogni fregio dorato e ogni sorriso del nostro staff, c'è un amore profondo per l'arte dell'accoglienza veronese."
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-stretch">
            <div className="gold-frame rounded-3xl overflow-hidden shadow-lg min-h-[300px]">
              <img src="https://picsum.photos/seed/exterior/1000/1200" className="w-full h-full object-cover rounded-2xl" alt="Exterior" />
            </div>
            <div className="bg-cream p-6 sm:p-10 md:p-12 flex flex-col justify-center text-left space-y-6 rounded-3xl shadow-sm border border-darkGreen/5">
              <h3 className="font-serif text-2xl sm:text-3xl text-gold">Tradizione e Innovazione</h3>
              <p className="text-darkGreen/80 leading-relaxed">
                Situato in un edificio storico di Verona, il Napoleone Bistrot nasce come un omaggio all'epoca dell'eleganza classica, reinterpretata per il pubblico contemporaneo.
              </p>
              <p className="text-darkGreen/80 leading-relaxed">
                Ogni dettaglio, dai marmi ai tessuti, è stato scelto per creare un'atmosfera sospesa nel tempo, dove la nobiltà del passato incontra il dinamismo del presente.
              </p>
              <div className="pt-8 border-t border-gold/20 flex gap-12">
                <div>
                  <div className="font-serif text-4xl font-bold text-darkGreen">1700</div>
                  <div className="text-[10px] uppercase tracking-widest opacity-50 font-bold">Anno di Fondazione</div>
                </div>
                <div>
                  <div className="font-serif text-4xl font-bold text-darkGreen">100%</div>
                  <div className="text-[10px] uppercase tracking-widest opacity-50 font-bold">Passione Veronese</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Philosophy */}
        <section className="py-24 bg-darkGreen text-white -mx-4 px-4 mb-24 relative overflow-hidden">
          <div className="napoleon-pattern absolute inset-0 opacity-10"></div>
          <div className="max-w-5xl mx-auto text-center relative z-10">
            <h2 className="font-serif text-4xl md:text-5xl mb-16 text-gold">La Filosofia</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="space-y-4 p-6 hover:bg-white/5 transition-colors rounded-2xl">
                <div className="text-gold font-serif text-6xl">01</div>
                <h4 className="font-bold uppercase tracking-widest text-sm">Qualità delle Materie</h4>
                <p className="opacity-70 text-sm leading-relaxed">Lavoriamo solo con piccoli produttori locali per garantire freschezza e tracciabilità totale.</p>
              </div>
              <div className="space-y-4 p-6 hover:bg-white/5 transition-colors rounded-2xl">
                <div className="text-gold font-serif text-6xl">02</div>
                <h4 className="font-bold uppercase tracking-widest text-sm">Ospitalità Calda</h4>
                <p className="opacity-70 text-sm leading-relaxed">Per noi ogni cliente è un ospite d'onore. Il nostro staff è formato per farvi sentire a casa.</p>
              </div>
              <div className="space-y-4 p-6 hover:bg-white/5 transition-colors rounded-2xl">
                <div className="text-gold font-serif text-6xl">03</div>
                <h4 className="font-bold uppercase tracking-widest text-sm">Arte del Divertimento</h4>
                <p className="opacity-70 text-sm leading-relaxed">Il cibo nutre il corpo, la musica l'anima. Crediamo nel convivio che si fa festa.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section>
          <div className="text-center mb-10 md:mb-16">
            <h2 className="font-serif text-3xl sm:text-4xl mb-4">I Nostri Spazi</h2>
            <p className="text-darkGreen/60 text-sm uppercase tracking-widest font-bold">Esplora le sale al piano superiore</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { id: 'room1', title: 'Sala Napoleone' },
              { id: 'room2', title: 'Sala Josephine' },
              { id: 'room3', title: 'Sala dei Fregi' },
              { id: 'room4', title: 'Terrazza' }
            ].map((room) => (
              <div key={room.id} className="group relative overflow-hidden rounded-3xl shadow-md border border-darkGreen/5 aspect-square">
                <img 
                  src={`https://picsum.photos/seed/${room.id}/600/600`} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                  alt={room.title} 
                />
                <div className="absolute inset-0 bg-darkGreen/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-white font-serif italic text-xl">{room.title}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
