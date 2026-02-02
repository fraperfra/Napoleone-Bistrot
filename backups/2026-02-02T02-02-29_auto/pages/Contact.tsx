
import React from 'react';
import { Phone, Mail, MapPin, Instagram, Clock, Car } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4">
        <header className="text-center mb-10 md:mb-16">
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl mb-6">Prenotazioni & Contatti</h1>
          <p className="italic text-darkGreen/70 text-sm sm:text-base">
            Siamo a vostra completa disposizione per info e prenotazioni tavoli o eventi.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Info Side */}
          <div className="space-y-8">
            <div className="bg-cream p-8 space-y-6 border border-darkGreen/10 rounded-3xl shadow-sm">
              <h3 className="font-serif text-2xl text-gold">Napoleone Bistrot</h3>
              <div className="space-y-4 text-darkGreen/80">
                <div className="flex gap-4">
                  <MapPin className="text-gold shrink-0" />
                  <div>
                    <p className="font-bold">Indirizzo</p>
                    <p className="text-sm">Piazzetta Napoleone 3, San Martino Buon Albergo, 37036 (VR)</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Phone className="text-gold shrink-0" />
                  <div>
                    <p className="font-bold">Telefono</p>
                    <p className="text-sm">+39 045 23 76 868</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Mail className="text-gold shrink-0" />
                  <div>
                    <p className="font-bold">Email</p>
                    <p className="text-sm">info@napoleonebistrot.it</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Instagram className="text-gold shrink-0" />
                  <div>
                    <p className="font-bold">Social</p>
                    <p className="text-sm">@napoleonebistrot</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-darkGreen text-white p-8 space-y-4 border border-darkGreen shadow-md rounded-3xl">
              <div className="flex items-center gap-3 text-gold">
                <Clock size={20} />
                <h4 className="font-bold uppercase tracking-widest text-xs">Orari di Apertura</h4>
              </div>
              <ul className="text-sm opacity-80 space-y-2">
                <li className="flex justify-between border-b border-white/10 pb-2"><span>Lun - Gio</span> <span>08:00 - 01:00</span></li>
                <li className="flex justify-between border-b border-white/10 pb-2"><span>Venerdì</span> <span>08:00 - 02:30</span></li>
                <li className="flex justify-between border-b border-white/10 pb-2"><span>Sabato</span> <span>08:00 - 02:30</span></li>
                <li className="flex justify-between"><span>Domenica</span> <span className="text-gold font-bold">Chiuso</span></li>
              </ul>
            </div>

            <div className="p-8 border border-darkGreen/10 flex items-start gap-4 rounded-3xl shadow-sm bg-white">
              <Car className="text-gold shrink-0" />
              <div>
                <h4 className="font-bold text-xs uppercase tracking-widest mb-1">Parcheggio</h4>
                <p className="text-xs text-darkGreen/60 leading-relaxed">
                  Convenzione con Parcheggio Arena (5 min a piedi). Segnalaci la targa al tuo arrivo.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white p-8 md:p-12 shadow-xl border border-darkGreen/10 rounded-3xl">
              <h3 className="font-serif text-3xl mb-8">Modulo Prenotazione Tavolo</h3>
              <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-darkGreen/50">Nome Completo</label>
                  <input type="text" className="w-full p-4 bg-cream/30 border border-darkGreen/5 focus:ring-1 focus:ring-gold outline-none transition-all rounded-xl" placeholder="Es. Mario Rossi" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-darkGreen/50">Email</label>
                  <input type="email" className="w-full p-4 bg-cream/30 border border-darkGreen/5 focus:ring-1 focus:ring-gold outline-none transition-all rounded-xl" placeholder="mario@email.it" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-darkGreen/50">Data</label>
                  <input type="date" className="w-full p-4 bg-cream/30 border border-darkGreen/5 focus:ring-1 focus:ring-gold outline-none transition-all rounded-xl" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-darkGreen/50">Ora</label>
                  <select className="w-full p-4 bg-cream/30 border border-darkGreen/5 focus:ring-1 focus:ring-gold outline-none transition-all rounded-xl">
                    <option>19:30</option>
                    <option>20:00</option>
                    <option>20:30</option>
                    <option>21:00</option>
                  </select>
                </div>
                <div className="space-y-2 md:col-span-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-darkGreen/50">Numero di Persone</label>
                  <input type="number" min="1" max="20" className="w-full p-4 bg-cream/30 border border-darkGreen/5 focus:ring-1 focus:ring-gold outline-none transition-all rounded-xl" defaultValue="2" />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-darkGreen/50">Note (Allergie, Eventi Speciali)</label>
                  <textarea className="w-full p-4 bg-cream/30 border border-darkGreen/5 focus:ring-1 focus:ring-gold outline-none transition-all rounded-xl" rows={4}></textarea>
                </div>
                <div className="md:col-span-2">
                  <button className="w-full bg-darkGreen text-white py-5 font-bold uppercase tracking-widest shadow-lg hover:bg-gold hover:text-darkGreen transition-all transform hover:-translate-y-1 rounded-xl">
                    Invia Prenotazione
                  </button>
                  <p className="text-[10px] text-center mt-4 opacity-50">
                    Riceverai una mail di conferma entro 15 minuti.
                  </p>
                </div>
              </form>
            </div>

            {/* Google Maps (Placeholder Iframe) */}
            <div className="h-96 w-full bg-gray-100 grayscale hover:grayscale-0 transition-all duration-1000 border border-darkGreen/10 rounded-3xl overflow-hidden shadow-sm">
              <iframe
                title="Napoleone Bistrot Position"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2800.7363401736!2d10.992837315553!3d45.44192137910058!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477f5f4039323d6d%3A0xc3517430159d3d3b!2sArena%20di%20Verona!5e0!3m2!1sit!2sit!4v1652194684534!5m2!1sit!2sit"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
