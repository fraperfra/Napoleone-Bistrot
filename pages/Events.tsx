
import React, { useState } from 'react';
import { useCMS } from '../context/CMSContext';
import { EVENTS as STATIC_EVENTS } from '../data';
import { Music, Calendar, Users, Star, ChefHat, Wine, Sparkles, MapPin, Phone, Mail, Check, ChevronDown } from 'lucide-react';
import SEO from '../components/SEO';

const Events: React.FC<{ lang: 'it' | 'en' }> = ({ lang }) => {
  const { events: cmsEvents } = useCMS();
  // Merge static and CMS events, or prefer CMS if available
  const EVENTS = cmsEvents.length > 0 ? cmsEvents : STATIC_EVENTS;
  
  const [expandedFaq, setExpandedFaq] = useState<string | null>(null);
  
  const seoTitle = "Sala Eventi a San Martino Buon Albergo (Verona) | Napoleone Bistrot";
  const seoDesc = "Sala storica per eventi aziendali, cene private e karaoke a San Martino Buon Albergo, 10 min da Verona. Menu personalizzati, DJ, Wi-Fi. Prenota ora!";

  return (
    <div className="pt-32 pb-24 bg-cream">
      <SEO title={seoTitle} description={seoDesc} />
      
      {/* ===== HERO SECTION ===== */}
      <div className="relative overflow-hidden bg-gradient-to-br from-darkGreen to-darkGreen/80 text-white mb-20">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-sage/10 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10 py-20 md:py-32">
          <div className="max-w-3xl">
            <div className="inline-block bg-gold/20 text-gold px-4 py-2 text-xs font-bold uppercase tracking-widest rounded-full mb-6 border border-gold/30">
              🎉 Momenti Indimenticabili vi Aspettano
            </div>
            <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Il Tuo Evento Merita Una Location <span className="text-gold">Straordinaria</span>
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-4 leading-relaxed font-light">
              Dal karaoke spensierato al convegno aziendale, dalle cene private ai festeggiamenti: a Napoleone Bistrot trasformiamo ogni occasione in un ricordo che dura nel tempo.
            </p>
            <p className="text-lg opacity-75 mb-10">
              A soli 10 minuti da Verona, una sala elegante, menu gourmet e servizi completi per il tuo successo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-gold text-darkGreen px-8 py-4 font-bold uppercase tracking-widest text-sm hover:bg-white transition-all rounded-full shadow-lg hover:shadow-2xl">
                Richiedi il Tuo Evento
              </button>
              <button className="bg-white/10 text-white border-2 border-white px-8 py-4 font-bold uppercase tracking-widest text-sm hover:bg-white/20 transition-all rounded-full">
                Scopri i Karaoke
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4">
        
        {/* ===== STATS SECTION ===== */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24">
          {[
            { number: '500+', label: 'Eventi Organizzati' },
            { number: '60', label: 'Ospiti Massimi' },
            { number: '20+', label: 'Anni di Esperienza' },
            { number: '100%', label: 'Clienti Soddisfatti' }
          ].map((stat, i) => (
            <div key={i} className="text-center p-6 bg-white border-2 border-gold/20 rounded-2xl hover:border-gold transition-colors shadow-sm hover:shadow-lg">
              <div className="text-4xl md:text-5xl font-bold text-gold mb-2">{stat.number}</div>
              <p className="text-darkGreen/70 font-medium text-sm">{stat.label}</p>
            </div>
          ))}
        </section>

        {/* ===== KARAOKE SPOTLIGHT ===== */}
        <section className="bg-sage text-white p-8 md:p-16 mb-24 relative overflow-hidden rounded-3xl border border-darkGreen/10 shadow-xl">
          <div className="absolute top-0 right-0 p-12 opacity-10">
            <Music size={200} />
          </div>
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block bg-gold text-darkGreen px-4 py-1 text-xs font-bold uppercase tracking-widest rounded-full">
                🎤 La Nostra Specialità
              </div>
              <h2 className="font-serif text-4xl md:text-6xl font-bold">Karaoke Nights Leggendarie</h2>
              <p className="text-lg opacity-90 leading-relaxed font-light">
                Ogni <strong>Mercoledì e Venerdì</strong>, il Napoleone si trasforma nel palco più vivace di Verona. Con impianto audio professionale, oltre 50.000 brani in italiano e internazionale, e un'atmosfera carica di energia pura.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <Music className="text-gold flex-shrink-0 mt-1" size={20} />
                  <div>
                    <div className="font-bold text-sm">Impianto Pro</div>
                    <p className="text-xs opacity-75">Qualità Studio</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Users className="text-gold flex-shrink-0 mt-1" size={20} />
                  <div>
                    <div className="font-bold text-sm">Atmosfera</div>
                    <p className="text-xs opacity-75">Carica & Divertente</p>
                  </div>
                </div>
              </div>
              <button className="bg-white text-darkGreen px-8 py-3 font-bold uppercase tracking-widest text-xs hover:bg-gold transition-all rounded-full hover:shadow-lg">
                Prenota la Tua Serata
              </button>
            </div>
            <div className="gold-frame rotate-2 hover:rotate-0 transition-transform duration-500 shadow-2xl overflow-hidden rounded-2xl">
              <img src="https://picsum.photos/seed/karaoke-party/800/600" alt="Karaoke Night" className="w-full h-96 object-cover" />
            </div>
          </div>
        </section>

        {/* ===== MONTHLY EVENTS ===== */}
        <section className="mb-24">
          <h2 className="font-serif text-4xl md:text-5xl text-center mb-4">Prossimi Eventi in Programma</h2>
          <p className="text-center text-darkGreen/70 mb-12 max-w-2xl mx-auto">
            Scopri le serate e gli eventi già pianificati dove puoi unirti a noi per un'esperienza indimenticabile.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {EVENTS.map(event => (
              <div key={event.id} className="group cursor-pointer bg-white border border-darkGreen/10 p-4 rounded-3xl shadow-sm hover:shadow-2xl hover:scale-[1.02] transition-all duration-500 overflow-hidden">
                <div className="relative aspect-[16/9] overflow-hidden mb-6 rounded-2xl">
                  <img src={event.image} alt={event.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute top-4 left-4 bg-gold text-darkGreen px-4 py-2 flex flex-col items-center shadow-md rounded-xl font-bold text-xs uppercase tracking-widest">
                    {event.type}
                  </div>
                </div>
                <div className="px-4 pb-4">
                  <h3 className="font-serif text-2xl md:text-3xl mb-3 group-hover:text-gold transition-colors">{event.title}</h3>
                  <div className="flex items-center gap-2 text-gold font-bold text-xs uppercase tracking-widest mb-4">
                    <Calendar size={14} /> {event.date}
                  </div>
                  <p className="text-darkGreen/80 leading-relaxed mb-6">{event.description}</p>
                  <button className="text-gold font-bold text-xs uppercase tracking-widest hover:text-darkGreen transition-colors">
                    Scopri di Più →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ===== WHY CHOOSE US ===== */}
        <section className="bg-white border-2 border-darkGreen/10 rounded-3xl p-8 md:p-16 mb-24">
          <h2 className="font-serif text-4xl md:text-5xl text-center mb-4">Perché Scegliere Napoleone Bistrot?</h2>
          <p className="text-center text-darkGreen/70 mb-16 max-w-2xl mx-auto">
            Siamo il partner ideale per trasformare il tuo evento in un successo. Ecco cosa ci rende unici.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <ChefHat size={40} />,
                title: 'Cucina Gourmet',
                desc: 'Menu personalizzati realizzati da chef esperti con ingredienti selezionati. Diete speciali? Nessun problema.'
              },
              {
                icon: <Wine size={40} />,
                title: 'Selezione Vini',
                desc: 'Cantine della Valpolicella e migliori etichette italiane. Sommelier disponibile per abbinamenti perfetti.'
              },
              {
                icon: <Sparkles size={40} />,
                title: 'Atmosfera Elegante',
                desc: 'Sala con carattere storico, arredamento curato e illuminazione scenica. Lo sfondo perfetto per le tue foto.'
              },
              {
                icon: <Music size={40} />,
                title: 'Intrattenimento',
                desc: 'Karaoke professionale, DJ su richiesta e impianto audio di qualità studio per musica e presentazioni.'
              },
              {
                icon: <Users size={40} />,
                title: 'Spazio Flessibile',
                desc: 'Capienza fino a 60 ospiti con layout personalizzabili. Dalla cena intima al convegno aziendale.'
              },
              {
                icon: <MapPin size={40} />,
                title: 'Posizione Strategica',
                desc: 'A 10 minuti da Verona, con ampio parcheggio privato. Facilmente raggiungibile da tutta la provincia.'
              }
            ].map((item, i) => (
              <div key={i} className="text-center p-6 hover:bg-cream transition-colors rounded-2xl group">
                <div className="text-gold mb-4 flex justify-center group-hover:scale-110 transition-transform">{item.icon}</div>
                <h3 className="font-serif text-xl mb-3 text-darkGreen">{item.title}</h3>
                <p className="text-darkGreen/70 leading-relaxed text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ===== EVENT TYPES ===== */}
        <section className="mb-24">
          <h2 className="font-serif text-4xl md:text-5xl text-center mb-4">Tipologie di Evento</h2>
          <p className="text-center text-darkGreen/70 mb-16 max-w-2xl mx-auto">
            Qualunque sia la tua occasione, abbiamo l'esperienza e i servizi per farla riuscire alla perfezione.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Cene Private & Compleanni',
                desc: 'Da 10 a 60 ospiti. Menù a tema, decorazioni personalizzate e servizio impeccabile per festeggiare chi ami.',
                color: 'from-pink-50 to-rose-50',
                emoji: '🎂'
              },
              {
                title: 'Convegni & Riunioni Aziendali',
                desc: 'Sala attrezzata con WiFi, proiettore e audio per presentazioni. Pause catering e menu business.',
                color: 'from-blue-50 to-cyan-50',
                emoji: '💼'
              },
              {
                title: 'Serate Aziendali & Team Building',
                desc: 'Karaoke, cena gourmet e giochi per rafforzare lo spirito di squadra in un\'atmosfera distesa e allegra.',
                color: 'from-purple-50 to-indigo-50',
                emoji: '🎯'
              },
              {
                title: 'Anniversari & Festeggiamenti',
                desc: 'Ricorrenze importanti meritano un luogo speciale. Menu celebrativi e atmosfera intima e raffinata.',
                color: 'from-yellow-50 to-amber-50',
                emoji: '✨'
              },
              {
                title: 'Addii al Celibato/Nubilato',
                desc: 'Serate indimenticabili con karaoke, giochi divertenti e cibo eccellente. La location perfetta per il vostro addio.',
                color: 'from-green-50 to-emerald-50',
                emoji: '🥳'
              },
              {
                title: 'Karaoke Public (Libero Accesso)',
                desc: 'Ogni Mercoledì e Venerdì. Prenotate il vostro tavolo e cantate con gli amici in un\'atmosfera allegra.',
                color: 'from-orange-50 to-red-50',
                emoji: '🎤'
              }
            ].map((type, i) => (
              <div key={i} className="group cursor-pointer bg-white border border-darkGreen/10 p-4 rounded-3xl shadow-sm hover:shadow-2xl hover:scale-[1.02] transition-all duration-500 overflow-hidden">
                <div className="relative aspect-[16/9] overflow-hidden mb-6 rounded-2xl">
                  <img src={`https://picsum.photos/seed/${type.title.replace(/\s+/g, '-')}/800/600`} alt={type.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute top-4 left-4 bg-gold text-darkGreen px-4 py-2 flex items-center shadow-md rounded-xl font-bold text-xs uppercase tracking-widest">
                    {type.emoji}
                  </div>
                </div>
                <div className="px-4 pb-4">
                  <h3 className="font-serif text-2xl md:text-3xl mb-3 group-hover:text-gold transition-colors">{type.title}</h3>
                  <div className="flex items-center gap-2 text-gold font-bold text-xs uppercase tracking-widest mb-4">
                    <Calendar size={14} /> {type.emoji === '🎤' ? 'Ogni Mercoledì & Venerdì' : 'Su prenotazione'}
                  </div>
                  <p className="text-darkGreen/80 leading-relaxed mb-6">{type.desc}</p>
                  <button className="text-gold font-bold text-xs uppercase tracking-widest hover:text-darkGreen transition-colors">
                    Scopri di Più →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ===== THE PERFECT ROOM ===== */}
        <section className="bg-darkGreen text-white p-8 md:p-16 rounded-3xl mb-24 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-12 opacity-10">
            <Sparkles size={300} />
          </div>
          
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="font-serif text-4xl md:text-5xl text-center mb-6">La Sala Perfetta</h2>
            <p className="text-center text-white/80 mb-12 text-lg">
              Uno spazio accogliente con tutti i comfort per il tuo evento, dal karaoke alle conferenze.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="space-y-4">
                <h3 className="text-2xl font-serif text-gold mb-6">Dettagli Tecnici</h3>
                {[
                  'Capienza: 10-60 ospiti',
                  'Altezza: 4.5 metri (soffitti alti)',
                  'Impianto Karaoke Professionale',
                  'Impianto Audio Full HD',
                  'Proiettore e Schermo Gigante',
                  'WiFi ad alta velocità',
                  'Climatizzazione automatica',
                  'Illuminazione scenica LED'
                ].map((detail, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <Check size={20} className="text-gold flex-shrink-0" />
                    <span className="font-light">{detail}</span>
                  </div>
                ))}
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-serif text-gold mb-6">Servizi Inclusi</h3>
                {[
                  'Tavoli e sedie personalizzate',
                  'Consulenza menu gratuita',
                  'Parcheggio privato (60 posti)',
                  'Bagni accessibili',
                  'Spazi per accoglienza ospiti',
                  'Personale esperto e cortese',
                  'Flessibilità negli orari',
                  'Supporto decorazioni esterne'
                ].map((service, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <Check size={20} className="text-gold flex-shrink-0" />
                    <span className="font-light">{service}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 md:gap-8 text-center">
              <div className="p-4 bg-white/10 rounded-xl border border-gold/20">
                <div className="text-4xl font-bold text-gold mb-2">60</div>
                <p className="text-sm opacity-75">Ospiti Max</p>
              </div>
              <div className="p-4 bg-white/10 rounded-xl border border-gold/20">
                <div className="text-4xl font-bold text-gold mb-2">100m²</div>
                <p className="text-sm opacity-75">Superficie Totale</p>
              </div>
              <div className="p-4 bg-white/10 rounded-xl border border-gold/20">
                <div className="text-4xl font-bold text-gold mb-2">24h</div>
                <p className="text-sm opacity-75">Setup & Cleanup</p>
              </div>
            </div>
          </div>
        </section>

        {/* ===== PACKAGES ===== */}
        <section className="mb-24">
          <h2 className="font-serif text-4xl md:text-5xl text-center mb-4">Pacchetti e Tariffe</h2>
          <p className="text-center text-darkGreen/70 mb-16 max-w-2xl mx-auto">
            Soluzioni flessibili per ogni budget. Contattaci per una quotazione personalizzata.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Smart',
                desc: 'Perfetto per cene informali',
                price: 'da €300',
                features: ['Sala privatizzata', 'Menu base (3 piatti)', 'Karaoke incluso', 'Fino a 30 ospiti']
              },
              {
                name: 'Premium',
                desc: 'La scelta più popolare',
                price: 'da €600',
                features: ['Sala con arredamenti', 'Menu a scelta (4-5 piatti)', 'DJ + Karaoke', 'Fino a 50 ospiti', 'Vini inclusi'],
                highlighted: true
              },
              {
                name: 'Exclusive',
                desc: 'Massima personalizzazione',
                price: 'Personalizzato',
                features: ['Sala esclusiva giornata intera', 'Menu gourmet su misura', 'DJ dedicato + Karaoke', 'Fino a 60 ospiti', 'Bar illimitato', 'Supporto styling']
              }
            ].map((pkg, i) => (
              <div key={i} className={`border-2 rounded-2xl p-8 transition-all flex flex-col ${pkg.highlighted ? 'border-gold bg-cream scale-105' : 'border-darkGreen/20 bg-white'} hover:shadow-xl`}>
                <h3 className="font-serif text-2xl text-darkGreen mb-2">{pkg.name}</h3>
                <p className="text-darkGreen/70 text-sm mb-6">{pkg.desc}</p>
                <div className="text-gold font-bold text-2xl mb-6">{pkg.price}</div>
                <ul className="space-y-3 mb-8 flex-grow">
                  {pkg.features.map((feat, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <Check size={18} className="text-gold flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-darkGreen/80">{feat}</span>
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 font-bold uppercase tracking-widest text-xs rounded-full transition-all ${pkg.highlighted ? 'bg-gold text-darkGreen hover:bg-white' : 'bg-darkGreen text-white hover:bg-gold hover:text-darkGreen'}`}>
                  Richiedi Info
                </button>
              </div>
            ))}
          </div>

          <p className="text-center text-darkGreen/70 mt-12 text-sm">
            * Prezzi indicativi per persone. Bevande, servizio extra e decorazioni su richiesta.
          </p>
        </section>

        {/* ===== TESTIMONIALS ===== */}
        <section className="bg-white rounded-3xl p-8 md:p-16 border-2 border-darkGreen/10 mb-24">
          <h2 className="font-serif text-4xl md:text-5xl text-center mb-4">Cosa Dicono di Noi</h2>
          <p className="text-center text-darkGreen/70 mb-16 max-w-2xl mx-auto">
            Centinaia di ospiti felici ci hanno affidato i loro momenti speciali. Leggi le loro storie.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Elena M.',
                event: 'Compleanno a sorpresa',
                text: 'Hanno realizzato il mio sogno. Dal karaoke all\'atmosfera perfetta, tutto era curato nei dettagli. I miei ospiti non smettono di parlarne!',
                rating: 5
              },
              {
                name: 'Marco T.',
                event: 'Evento aziendale',
                text: 'Professionali, efficienti e simpatici. La sala è perfetta per riunioni e la cucina è straordinaria. Torneremo sicuro!',
                rating: 5
              },
              {
                name: 'Giulia & Andrea',
                event: 'Addio al celibato',
                text: 'Indimenticabile. Karaoke, risate, cibo eccellente. La location ha reso tutto ancora più speciale. Grazie ragazzi!',
                rating: 5
              }
            ].map((testimonial, i) => (
              <div key={i} className="bg-cream rounded-2xl p-6 border-l-4 border-gold">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, j) => (
                    <span key={j} className="text-gold text-lg">★</span>
                  ))}
                </div>
                <p className="text-darkGreen/80 leading-relaxed mb-6 italic">"{testimonial.text}"</p>
                <div>
                  <div className="font-bold text-darkGreen">{testimonial.name}</div>
                  <p className="text-gold text-xs uppercase tracking-widest">{testimonial.event}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ===== FAQ ===== */}
        <section className="mb-24">
          <h2 className="font-serif text-4xl md:text-5xl text-center mb-4">Domande Frequenti</h2>
          <p className="text-center text-darkGreen/70 mb-12 max-w-2xl mx-auto">
            Tutte le risposte che ti servono per organizzare il tuo evento.
          </p>

          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                q: 'Qual è il numero minimo di ospiti per prenotare?',
                a: 'Non esiste un minimo, ma consigliamo almeno 15 ospiti per ottenere le migliori tariffe. Contattaci per valutare ogni caso.'
              },
              {
                q: 'Posso personalizzare il menu?',
                a: 'Assolutamente sì! Il nostro chef crea menu personalizzati in base alle vostre preferenze, esigenze dietetiche e budget. Consultazione gratuita.'
              },
              {
                q: 'Qual è il costo della sala?',
                a: 'Dipende dal tipo di evento, dal numero di ospiti e dai servizi scelti. Da €300 per cene informali fino a pacchetti personalizzati. Richiedi preventivo!'
              },
              {
                q: 'Posso portare my music e decorazioni?',
                a: 'Sì, potete portare playlist e decorazioni. Vi consigliamo di coordinare con il nostro team per integrazioni tecniche perfette.'
              },
              {
                q: 'C\'è parcheggio disponibile?',
                a: 'Sì, disponiamo di ampio parcheggio privato gratuito con 60 posti auto. Ideale per tutti i vostri ospiti.'
              },
              {
                q: 'Quali sono i vostri orari disponibili?',
                a: 'Siamo flessibili. Gli orari standard sono 19:00-23:00 nei giorni feriali e fino a mezzanotte nel weekend. Contattateci per esigenze diverse.'
              }
            ].map((faq, i) => (
              <div key={i} className="border-2 border-darkGreen/10 rounded-2xl overflow-hidden hover:border-gold transition-colors">
                <button
                  onClick={() => setExpandedFaq(expandedFaq === i.toString() ? null : i.toString())}
                  className="w-full p-6 flex items-center justify-between hover:bg-cream transition-colors"
                >
                  <span className="font-serif text-lg text-darkGreen text-left">{faq.q}</span>
                  <ChevronDown size={24} className={`text-gold flex-shrink-0 transition-transform ${expandedFaq === i.toString() ? 'rotate-180' : ''}`} />
                </button>
                {expandedFaq === i.toString() && (
                  <div className="px-6 pb-6 border-t-2 border-darkGreen/10 bg-cream">
                    <p className="text-darkGreen/80 leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* ===== CTA FINAL ===== */}
        <section className="relative overflow-hidden bg-gradient-to-br from-gold to-gold/80 rounded-3xl p-12 md:p-20 text-center text-darkGreen">
          <div className="absolute top-0 right-0 p-12 opacity-10">
            <Sparkles size={300} />
          </div>
          
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
              Non Aspettare: Prenota Ora il Tuo Evento!
            </h2>
            <p className="text-lg opacity-90 mb-12 leading-relaxed">
              Posti limitati per le migliori date. Contattaci oggi per trasformare la tua occasione in un momento indimenticabile.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-darkGreen text-white px-8 py-4 font-bold uppercase tracking-widest text-sm hover:text-gold transition-colors rounded-full hover:shadow-lg">
                Compila il Modulo
              </button>
              <a href="tel:+39-0000-000000" className="bg-white text-darkGreen px-8 py-4 font-bold uppercase tracking-widest text-sm hover:bg-darkGreen hover:text-white transition-all rounded-full flex items-center justify-center gap-2">
                <Phone size={18} /> Chiama Ora
              </a>
            </div>

            <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 text-darkGreen">
              <div>
                <div className="font-bold text-xl mb-2">📍 Dove</div>
                <p className="text-sm opacity-80">San Martino Buon Albergo, Verona</p>
              </div>
              <div>
                <div className="font-bold text-xl mb-2">📞 Contatti</div>
                <p className="text-sm opacity-80">+39 XXX XXX XXXX</p>
              </div>
              <div>
                <div className="font-bold text-xl mb-2">✉️ Email</div>
                <p className="text-sm opacity-80">eventi@napoleone.it</p>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default Events;
