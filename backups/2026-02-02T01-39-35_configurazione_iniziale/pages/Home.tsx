
import React from 'react';
import { ArrowRight, Star, Clock, Users, Wine, Instagram, Calendar, Music, Mic, GlassWater, Zap, FlaskConical, UtensilsCrossed, Leaf, Heart } from 'lucide-react';
import { translations } from '../translations';
import { EVENTS, MENU_ITEMS } from '../data';
import { Category } from '../types';

interface HomeProps {
  lang: 'it' | 'en';
  setActivePage: (p: string) => void;
}

const Home: React.FC<HomeProps> = ({ lang, setActivePage }) => {
  const t = translations[lang];
  
  // Get the primary signature drink for the showcase (just one as requested)
  const signatureDrink = MENU_ITEMS.find(item => item.category === Category.Drink);
  const signatureDish = MENU_ITEMS.find(item => item.id === '1'); // Risotto all'Amarone

  return (
    <div className="animate-in fade-in duration-1000">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=1920"
            alt="Interior"
            className="w-full h-full object-cover scale-105 animate-[zoom_20s_infinite_alternate]"
            loading="eager"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        <div className="relative z-10 text-center text-white px-4 max-w-5xl">
          <span className="italic text-lg sm:text-xl md:text-2xl text-gold mb-4 sm:mb-6 block opacity-0 animate-[fadeInUp_0.8s_0.2s_forwards]">
            {t.heroWelcome}
          </span>
          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold mb-6 sm:mb-8 leading-tight opacity-0 animate-[fadeInUp_0.8s_0.4s_forwards]">
            Napoleone <span className="text-gold italic">Bistrot</span>
          </h1>
          <p className="text-base sm:text-lg md:text-2xl font-light tracking-[0.2em] sm:tracking-[0.3em] uppercase mb-8 sm:mb-12 opacity-0 animate-[fadeInUp_0.8s_0.6s_forwards]">
            {t.heroSubtitle}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 opacity-0 animate-[fadeInUp_0.8s_0.8s_forwards]">
            <button
              onClick={() => setActivePage('contact')}
              className="w-full sm:w-auto bg-gold text-darkGreen px-8 sm:px-12 py-4 sm:py-5 font-bold uppercase tracking-widest hover:bg-white transition-all transform hover:-translate-y-1 shadow-2xl rounded-full text-sm sm:text-base"
            >
              {t.bookNow}
            </button>
            <button
              onClick={() => setActivePage('menu')}
              className="w-full sm:w-auto bg-transparent border border-white/50 text-white px-8 sm:px-12 py-4 sm:py-5 font-bold uppercase tracking-widest hover:bg-white/10 hover:border-white transition-all backdrop-blur-sm rounded-full text-sm sm:text-base"
            >
              {t.discoverMenu}
            </button>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce opacity-50">
          <span className="text-[10px] uppercase tracking-[0.4em] text-white">Scroll</span>
          <div className="w-[1px] h-12 bg-gold"></div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-16 md:py-28 px-4 bg-cream relative overflow-hidden">
        <div className="napoleon-pattern absolute inset-0"></div>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-center relative z-10">
          <div className="gold-frame group rounded-3xl overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=800"
              alt="Plating"
              className="w-full grayscale group-hover:grayscale-0 transition-all duration-1000 rounded-2xl"
              loading="lazy"
            />
          </div>
          <div className="space-y-6 md:space-y-10">
            <h2 className="text-4xl sm:text-5xl md:text-6xl leading-tight text-darkGreen font-bold">
              Un salotto di storia e sapore nel cuore di Verona.
            </h2>
            <p className="text-darkGreen/80 leading-relaxed text-lg sm:text-xl md:text-2xl italic border-l-4 border-gold pl-6">
              "Napoleone Bistrot nasce dal desiderio di creare uno spazio dove il tempo sembra rallentare. I nostri fregi dorati e il verde salvia delle pareti raccontano una story di eleganza intramontabile."
            </p>
            <p className="text-darkGreen/70 leading-relaxed text-base sm:text-lg md:text-xl font-medium">
              Dalla colazione gourmet all'aperitivo chic, fino alle cene animate dal nostro celebre karaoke, ogni momento è pensato per farvi sentire speciali. La nostra cucina celebra i prodotti del territorio veneto con un tocco contemporaneo.
            </p>
            <div className="flex flex-wrap gap-8">
              <button
                onClick={() => setActivePage('about')}
                className="group flex items-center gap-4 text-sage font-bold uppercase tracking-widest hover:text-darkGreen transition-colors px-6 py-2 rounded-full border border-sage/20 hover:border-darkGreen"
              >
                {lang === 'it' ? 'La nostra storia' : 'Our Story'}
                <ArrowRight className="group-hover:translate-x-2 transition-transform" />
              </button>
              <button
                onClick={() => setActivePage('events')}
                className="group flex items-center gap-4 text-gold font-bold uppercase tracking-widest hover:text-darkGreen transition-colors px-6 py-2 rounded-full border border-gold/20 hover:border-darkGreen"
              >
                {t.organizeEvent}
                <ArrowRight className="group-hover:translate-x-2 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* NEW: Kitchen Section - MATCHED STYLE WITH EVENTS */}
      <section className="py-28 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
            <div className="max-w-2xl">
              <span className="text-gold uppercase tracking-[0.4em] text-xs font-bold mb-4 block">
                {lang === 'it' ? 'Gusto & Tradizione' : 'Taste & Tradition'}
              </span>
              <h2 className="text-5xl md:text-7xl text-darkGreen mb-6 tracking-tight font-bold">
                {lang === 'it' ? 'La Nostra Cucina' : 'Our Kitchen'}
              </h2>
              <p className="text-darkGreen/60 text-xl md:text-2xl italic leading-relaxed">
                {lang === 'it' 
                  ? "Dalla terra alla tavola, selezioniamo solo il meglio del territorio veronese. Una cucina che parla di storia, passione e autenticità."
                  : "From farm to table, we select only the best of the Veronese territory. A cuisine that speaks of history, passion, and authenticity."}
              </p>
            </div>
            <button 
              onClick={() => setActivePage('menu')}
              className="bg-transparent border-b-2 border-gold text-gold pb-2 font-bold uppercase tracking-widest text-xs hover:text-darkGreen hover:border-darkGreen transition-all flex items-center gap-3 shrink-0"
            >
              {lang === 'it' ? 'Esplora il Menu' : 'Explore Menu'} <ArrowRight size={16} />
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Feature Dish: Risotto (Large Card) */}
            <div className="lg:col-span-2 group relative h-[400px] md:h-auto overflow-hidden rounded-[3rem] shadow-xl border border-darkGreen/5 cursor-pointer" onClick={() => setActivePage('menu')}>
              <img 
                src="https://images.unsplash.com/photo-1476124369491-e7addf5db371?auto=format&fit=crop&q=80&w=1200" 
                alt="Risotto all'Amarone" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-darkGreen via-darkGreen/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full">
                <div className="flex items-center gap-3 text-gold mb-4">
                  <UtensilsCrossed size={24} />
                  <span className="uppercase tracking-widest text-xs font-bold">{lang === 'it' ? 'Piatto Iconico' : 'Iconic Dish'}</span>
                </div>
                <h3 className="text-4xl md:text-5xl text-white mb-4 font-bold">Risotto all'Amarone</h3>
                <p className="text-white/80 text-xl italic mb-6 max-w-xl">
                  {lang === 'it' 
                    ? "Il cuore della Valpolicella mantecato lentamente con il miglior riso Vialone Nano. Un'esplosione di sapore veneto."
                    : "The heart of Valpolicella slowly creamed with the best Vialone Nano rice. An explosion of Venetian flavor."}
                </p>
                <div className="inline-flex items-center gap-2 text-gold font-bold uppercase text-[10px] tracking-widest group-hover:translate-x-2 transition-transform">
                  {lang === 'it' ? 'Dettagli piatto' : 'Dish details'} <ArrowRight size={14} />
                </div>
              </div>
            </div>

            {/* Side Kitchen Info Column */}
            <div className="flex flex-col gap-8">
              <div className="bg-cream p-8 rounded-[2.5rem] border border-darkGreen/5 hover:border-gold/30 hover:shadow-2xl transition-all duration-500 group flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <div className="bg-white p-3 rounded-2xl shadow-sm text-gold group-hover:bg-gold group-hover:text-darkGreen transition-colors">
                      <Leaf size={20} />
                    </div>
                  </div>
                  <h4 className="text-3xl text-darkGreen mb-3 group-hover:text-gold transition-colors font-bold">Km Zero</h4>
                  <p className="text-darkGreen/60 text-lg leading-relaxed font-medium">
                    {lang === 'it' ? 'Materie prime selezionate da piccoli produttori della Lessinia e della Valpolicella.' : 'Raw materials selected from small producers in Lessinia and Valpolicella.'}
                  </p>
                </div>
              </div>

              <div className="bg-darkGreen p-8 rounded-[2.5rem] text-center flex flex-col items-center justify-center gap-4 group cursor-pointer" onClick={() => setActivePage('menu')}>
                <div className="text-gold mb-2"><Heart size={32} /></div>
                <h4 className="text-3xl text-white mb-2 font-bold">{lang === 'it' ? 'Fatto a Mano' : 'Handmade'}</h4>
                <p className="text-white/60 text-lg italic leading-relaxed mb-4">
                  {lang === 'it' ? 'Ogni giorno pasta fresca e dolci artigianali.' : 'Fresh pasta and artisanal desserts every day.'}
                </p>
                <div className="w-12 h-12 bg-gold text-darkGreen rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <ArrowRight />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NEW: SEO Optimized Signature Drink Section - Smaller & Contained */}
      <section className="py-24 bg-[#1a251b] text-white relative overflow-hidden">
        <div className="napoleon-pattern absolute inset-0 opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="max-w-xl">
              <span className="text-gold uppercase tracking-[0.4em] text-xs font-bold mb-4 block">
                {lang === 'it' ? 'Mixology Artigianale' : 'Artisanal Mixology'}
              </span>
              <h2 className="text-5xl md:text-6xl mb-6 font-bold">
                {lang === 'it' ? "Il Nostro Drink d'Autore" : "Our Signature Drink"}
              </h2>
              <p className="text-white/60 text-xl italic leading-relaxed mb-8">
                {lang === 'it' 
                  ? "Un'esperienza sensoriale racchiusa in un calice. Ingredienti rari e spirits premium si fondono nel cuore del centro storico di Verona per l'aperitivo perfetto."
                  : "A sensory experience in a glass. Rare ingredients and premium spirits merge in the heart of Verona's historic center for the perfect aperitif."}
              </p>
              <button 
                onClick={() => setActivePage('menu')}
                className="bg-gold text-darkGreen px-10 py-4 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-white transition-all transform hover:-translate-y-1 shadow-xl flex items-center gap-3 w-fit"
              >
                {lang === 'it' ? 'Sfoglia la Drink List' : 'Browse Drink List'} <ArrowRight size={16} />
              </button>
            </div>

            <div className="flex justify-center">
              {signatureDrink && (
                <div className="group relative w-full max-w-sm bg-white/5 backdrop-blur-sm p-3 rounded-[3rem] border border-white/10 shadow-2xl transition-all duration-500 hover:border-gold/30">
                  <div className="relative aspect-[3/2] rounded-[2.5rem] overflow-hidden mb-5">
                    <img 
                      src={signatureDrink.image} 
                      alt={signatureDrink.name} 
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1a251b] via-transparent to-transparent opacity-60"></div>
                    <div className="absolute top-3 right-3 bg-darkGreen/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-gold/30 text-gold font-bold text-xs">
                      {/* Fix: Handle cases where price might be a string (e.g., price ranges) before calling toFixed */}
                      €{typeof signatureDrink.price === 'number' ? signatureDrink.price.toFixed(2) : signatureDrink.price}
                    </div>
                  </div>
                  <div className="px-3 pb-3 text-center">
                    <h3 className="text-2xl text-gold mb-1 font-bold">{signatureDrink.name}</h3>
                    <p className="text-white/60 text-sm italic mb-4 line-clamp-1 px-2 font-medium">
                      {signatureDrink.description}
                    </p>
                    <div className="flex justify-center gap-5 opacity-30 group-hover:opacity-100 transition-all">
                      <Zap size={14} className="text-gold" />
                      <FlaskConical size={14} className="text-gold" />
                      <GlassWater size={14} className="text-gold" />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* SEO Optimized Events & Atmosphere Section - STYLE MATCHED WITH MIXOLOGY */}
      <section className="py-16 md:py-28 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-20 gap-8">
            <div className="max-w-2xl">
              <span className="text-gold uppercase tracking-[0.4em] text-xs font-bold mb-4 block">
                {lang === 'it' ? 'Intrattenimento & Vita Notturna' : 'Entertainment & Nightlife'}
              </span>
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-darkGreen mb-6 tracking-tight font-bold">
                {lang === 'it' ? 'Eventi & Atmosfera' : 'Events & Atmosphere'}
              </h2>
              <p className="text-darkGreen/60 text-lg sm:text-xl md:text-2xl italic leading-relaxed">
                {lang === 'it' 
                  ? "Dal calore delle serate karaoke alla raffinatezza dei nostri eventi privati. Scriviamo insieme le notti più vibranti del centro storico di Verona."
                  : "From the warmth of karaoke nights to the refinement of our private events. Let's write together the most vibrant nights of Verona's historic center."}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Feature Event: Karaoke (SEO Keyword Target) */}
            <div className="lg:col-span-2 group relative h-[400px] md:h-auto overflow-hidden rounded-[3rem] shadow-xl border border-darkGreen/5 cursor-pointer" onClick={() => setActivePage('events')}>
              <img 
                src="https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&q=80&w=1200" 
                alt="Karaoke Verona" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-darkGreen via-darkGreen/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full">
                <div className="flex items-center gap-3 text-gold mb-4">
                  <Mic size={24} />
                  <span className="uppercase tracking-widest text-xs font-bold">{lang === 'it' ? 'Ogni Mercoledì e Venerdì' : 'Every Wednesday and Friday'}</span>
                </div>
                <h3 className="text-4xl md:text-5xl text-white mb-4 font-bold">Karaoke Nights Verona</h3>
                <p className="text-white/80 text-xl italic mb-6 max-w-xl">
                  {lang === 'it' 
                    ? "La serata più vivace del centro storico. Canta i tuoi successi preferiti in un'atmosfera elegante e divertente."
                    : "The most vibrant night in the historic center. Sing your favorite hits in an elegant and fun atmosphere."}
                </p>
                <div className="inline-flex items-center gap-2 text-gold font-bold uppercase text-[10px] tracking-widest group-hover:translate-x-2 transition-transform">
                  {lang === 'it' ? 'Scopri le serate' : 'Explore nights'} <ArrowRight size={14} />
                </div>
              </div>
            </div>

            {/* Side Events Column */}
            <div className="flex flex-col gap-8">
              {EVENTS.slice(0, 2).map((event, idx) => (
                <div 
                  key={event.id}
                  className="bg-cream p-8 rounded-[2.5rem] border border-darkGreen/5 hover:border-gold/30 hover:shadow-2xl transition-all duration-500 group flex flex-col justify-between"
                  onClick={() => setActivePage('events')}
                >
                  <div>
                    <div className="flex justify-between items-start mb-6">
                      <div className="bg-white p-3 rounded-2xl shadow-sm text-gold group-hover:bg-gold group-hover:text-darkGreen transition-colors">
                        {event.type === 'karaoke' ? <Music size={20} /> : <Calendar size={20} />}
                      </div>
                      <span className="text-[9px] font-black uppercase tracking-[0.2em] text-darkGreen/30">{event.date}</span>
                    </div>
                    <h4 className="text-3xl text-darkGreen mb-3 group-hover:text-gold transition-colors font-bold">{event.title}</h4>
                    <p className="text-darkGreen/60 text-lg leading-relaxed line-clamp-2 font-medium">{event.description}</p>
                  </div>
                  <div className="mt-8 pt-4 border-t border-darkGreen/5 text-[9px] font-bold uppercase tracking-widest text-gold">
                    {lang === 'it' ? 'Dettagli Evento' : 'Event Details'} +
                  </div>
                </div>
              ))}
              
              {/* Call to Action Card */}
              <div className="bg-darkGreen p-8 rounded-[2.5rem] text-center flex flex-col items-center justify-center gap-4 group cursor-pointer" onClick={() => setActivePage('events')}>
                <p className="text-white/60 text-[10px] uppercase tracking-widest">{lang === 'it' ? 'Vuoi vedere tutto?' : 'Want to see all?'}</p>
                <h4 className="text-3xl text-white mb-2 font-bold">{lang === 'it' ? 'Calendario Completo' : 'Full Calendar'}</h4>
                <div className="w-12 h-12 bg-gold text-darkGreen rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <ArrowRight />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Showcase / Stats */}
      <section className="py-24 bg-darkGreen text-white overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full napoleon-pattern opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-12 relative z-10">
          {[
            { icon: <Users size={40} />, label: 'Ospiti Felici', val: '50k+' },
            { icon: <Star size={40} />, label: 'Voto Google', val: '4.9' },
            { icon: <Clock size={40} />, label: 'Anni di Storia', val: '25' },
            { icon: <Wine size={40} />, label: 'Etichette Vini', val: '120+' },
          ].map((stat, i) => (
            <div key={i} className="flex flex-col items-center text-center space-y-6 group p-8 rounded-3xl hover:bg-white/5 transition-all">
              <div className="text-gold p-6 bg-white/5 rounded-full group-hover:bg-gold group-hover:text-darkGreen transition-all duration-500">{stat.icon}</div>
              <div className="text-4xl font-bold">{stat.val}</div>
              <div className="text-[10px] uppercase tracking-[0.3em] opacity-60 font-bold">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Instagram Promo */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 flex flex-col items-center">
          <Instagram size={48} className="text-gold mb-6" />
          <h2 className="text-4xl mb-8 text-center font-bold">{t.followInstagram}</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full mb-12">
            {[1, 2, 3, 4].map(i => (
              <div key={i} className="aspect-square overflow-hidden group relative rounded-3xl shadow-md border border-darkGreen/5">
                <img src={`https://picsum.photos/seed/insta${i}/600/600`} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 rounded-3xl" alt="Instagram post" loading="lazy" />
                <div className="absolute inset-0 bg-gold/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
            ))}
          </div>
          <a
            href="https://instagram.com/napoleonebistrot"
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-4 border-2 border-gold text-gold font-bold uppercase tracking-widest hover:bg-gold hover:text-white transition-all rounded-full"
          >
            @napoleonebistrot
          </a>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-28 bg-cream border-y border-gold/10">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="flex justify-center gap-1 mb-10 text-gold">
            {[...Array(5)].map((_, i) => <Star key={i} fill="currentColor" size={24} />)}
          </div>
          <blockquote className="text-3xl md:text-5xl italic text-darkGreen/90 leading-relaxed mb-10 font-medium">
            "Un posto magico nel cuore di Verona. Il servizio è impeccabile e l'arredamento ti trasporta in un'altra epoca. Da non perdere il risotto all'Amarone!"
          </blockquote>
          <cite className="not-italic text-sm font-bold uppercase tracking-[0.4em] text-gold">— Giulia B., Recensione Google —</cite>
        </div>
      </section>
    </div>
  );
};

export default Home;
