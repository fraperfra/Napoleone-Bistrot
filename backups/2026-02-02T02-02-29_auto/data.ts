
import { Category, MenuItem, Event } from './types';

export const MENU_ITEMS: MenuItem[] = [
  // --- DRINK SPECIALI ---
  {
    id: 'sp-1',
    name: 'Poison Ivy',
    description: 'Cocktail botanico con note verdi e fresche, un segreto della casa.',
    price: 10,
    category: Category.Drink,
    subCategory: 'Drink Speciali',
    image: 'https://images.unsplash.com/photo-1536935338788-846bb9981813?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 'sp-2',
    name: 'Grey Napoleone',
    description: 'Elegante e misterioso, con spirits premium e profumi agrumati.',
    price: 10,
    category: Category.Drink,
    subCategory: 'Drink Speciali',
    image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 'sp-3',
    name: 'Vesper',
    description: 'Il classico drink "shaken, not stirred" amato da James Bond.',
    price: 10,
    category: Category.Drink,
    subCategory: 'Drink Speciali',
    image: 'https://images.unsplash.com/photo-1574096079513-d8259312b785?auto=format&fit=crop&q=80&w=400'
  },

  // --- DRINK CLASSICI ---
  {
    id: 'cl-1',
    name: 'Manhattan',
    description: 'Rye whiskey, vermouth rosso e angostura.',
    price: 8,
    category: Category.Drink,
    subCategory: 'Drink Classici'
  },
  {
    id: 'cl-2',
    name: 'Old Fashioned',
    description: 'Zucchero, angostura e bourbon, un classico senza tempo.',
    price: 7,
    category: Category.Drink,
    subCategory: 'Drink Classici'
  },
  {
    id: 'cl-3',
    name: 'Cosmopolitan',
    description: 'Vodka, triple sec, succo di mirtillo e lime.',
    price: 7,
    category: Category.Drink,
    subCategory: 'Drink Classici'
  },
  {
    id: 'cl-4',
    name: 'Hugo Napoleone',
    description: 'La nostra rivisitazione dell\'aperitivo altoatesino.',
    price: 6.5,
    category: Category.Drink,
    subCategory: 'Drink Classici'
  },
  {
    id: 'cl-5',
    name: 'Espresso Martini',
    description: 'Vodka, liquore al caffè e caffè espresso fresco.',
    price: 7,
    category: Category.Drink,
    subCategory: 'Drink Classici'
  },
  {
    id: 'cl-6',
    name: 'Whiskey Sour',
    description: 'Bourbon, succo di limone e sciroppo di zucchero.',
    price: 7,
    category: Category.Drink,
    subCategory: 'Drink Classici'
  },

  // --- APERITIVI ---
  {
    id: 'ap-1',
    name: 'Spritz Aperol',
    description: 'L\'iconico aperitivo veneto conosciuto in tutto il mondo.',
    price: 4.5,
    category: Category.Drink,
    subCategory: 'Aperitivi'
  },
  {
    id: 'ap-2',
    name: 'Spritz Campari',
    description: 'Per chi ama un aperitivo più deciso e amaricante.',
    price: 4.5,
    category: Category.Drink,
    subCategory: 'Aperitivi'
  },
  {
    id: 'ap-3',
    name: 'Gin Tonic / Lemon',
    description: 'Selezione di gin premium con tonica o lemon soda.',
    price: 7,
    category: Category.Drink,
    subCategory: 'Aperitivi'
  },
  {
    id: 'ap-4',
    name: 'Negroni',
    description: 'Gin, Campari e Vermouth rosso, equilibrio perfetto.',
    price: 7,
    category: Category.Drink,
    subCategory: 'Aperitivi'
  },
  {
    id: 'ap-5',
    name: 'Americano Premium',
    description: 'Vermouth e Bitter di alta gamma per un\'esperienza superiore.',
    price: 7,
    category: Category.Drink,
    subCategory: 'Aperitivi'
  },

  // --- ANALCOLICI ---
  {
    id: 'an-1',
    name: 'Rose Tonic',
    description: 'Delicato profumo di rosa incontrano l\'amaro della tonica.',
    price: 6,
    category: Category.Drink,
    subCategory: 'Analcolici'
  },
  {
    id: 'an-2',
    name: 'Virgin Mojito',
    description: 'Menta fresca, lime, zucchero e soda. Senza alcool.',
    price: 6,
    category: Category.Drink,
    subCategory: 'Analcolici'
  },

  // --- BOLLICINE ---
  {
    id: 'bo-1',
    name: 'Prosecco DOC',
    description: 'Fresco e fruttato, perfetto per ogni momento.',
    price: 3.5,
    category: Category.ViniBollicine,
    subCategory: 'Bollicine'
  },
  {
    id: 'bo-2',
    name: 'Franciacorta',
    description: 'L\'eccellenza del metodo classico italiano.',
    price: 6,
    category: Category.ViniBollicine,
    subCategory: 'Bollicine'
  },
  {
    id: 'bo-3',
    name: 'Durello',
    description: 'Spumante tipico dei monti Lessini, acidità vibrante.',
    price: 5,
    category: Category.ViniBollicine,
    subCategory: 'Bollicine'
  },

  // --- BIRRE ALLA SPINA ---
  {
    id: 'bi-1',
    name: 'Kuhbacher non filtrata',
    description: '0,25L / 0,5L - Tradizione tedesca autentica.',
    price: '3 / 5,50',
    category: Category.Birre,
    subCategory: 'Birre alla spina'
  },
  {
    id: 'bi-2',
    name: 'IPA Special',
    description: '0,25L / 0,5L - Carattere luppolato e persistente.',
    price: '3,50 / 6,50',
    category: Category.Birre,
    subCategory: 'Birre alla spina'
  },

  // --- CAFFETTERIA ---
  {
    id: 'cf-1',
    name: 'Caffè Espresso',
    description: 'Selezione 100% Arabica, tostatura media.',
    price: 1.3,
    category: Category.Bar,
    subCategory: 'Caffetteria'
  },
  {
    id: 'cf-2',
    name: 'Cappuccino',
    description: 'Crema di latte setosa ed espresso d\'eccellenza.',
    price: 1.6,
    category: Category.Bar,
    subCategory: 'Caffetteria',
    allergens: ['Lattosio']
  },
  {
    id: 'cf-3',
    name: 'Caffè Shakerato',
    description: 'Energia fredda montata alla perfezione.',
    price: 3,
    category: Category.Bar,
    subCategory: 'Caffetteria'
  },

  // --- BEVANDE ---
  {
    id: 'bv-1',
    name: 'Spremuta d\'arancia',
    description: 'Solo arance fresche di stagione.',
    price: 3.5,
    category: Category.Bar,
    subCategory: 'Bevande'
  },
  {
    id: 'bv-2',
    name: 'Acqua Mood 0,5 L',
    description: 'Minerale in vetro dal design unico.',
    price: 1.2,
    category: Category.Bar,
    subCategory: 'Bevande'
  },

  // --- DOLCI & PASTICCERIA ---
  {
    id: 'do-1',
    name: 'Tiramisù Classico',
    description: 'La nostra ricetta segreta con mascarpone fresco.',
    price: 5,
    category: Category.Bistrot,
    subCategory: 'Dolci & Pasticceria',
    image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&q=80&w=400',
    allergens: ['Lattosio', 'Glutine', 'Uova']
  },
  {
    id: 'do-2',
    name: 'Sbrisolona',
    description: 'Tipico dolce mantovano croccante alle mandorle.',
    price: 5,
    category: Category.Bistrot,
    subCategory: 'Dolci & Pasticceria',
    allergens: ['Frutta a guscio', 'Glutine']
  },
  {
    id: 'br-1',
    name: 'Brioche Artigianali',
    description: 'Disponibili: Crema, Pistacchio, Nutella, Albicocca, Frutti di Bosco.',
    price: 1.6,
    category: Category.Bar,
    subCategory: 'Pasticceria',
    allergens: ['Glutine', 'Lattosio']
  },
  {
    id: 'br-2',
    name: 'Brioche Vegana',
    description: 'Lievitazione naturale senza derivati animali.',
    price: 1.8,
    category: Category.Bar,
    subCategory: 'Pasticceria',
    isVegan: true,
    allergens: ['Glutine']
  },

  // --- SALATO BAR ---
  {
    id: 'sa-1',
    name: 'Tramezzini',
    description: 'Farciture classiche e gourmet del giorno.',
    price: 3.5,
    category: Category.Bar,
    subCategory: 'Salato Bar',
    allergens: ['Glutine', 'Uova']
  },
  {
    id: 'sa-2',
    name: 'Pinsa Margherita',
    description: 'Lievitazione 72h, croccante e leggera.',
    price: 2,
    category: Category.Bar,
    subCategory: 'Salato Bar',
    allergens: ['Glutine', 'Lattosio']
  },
  {
    id: 'sa-3',
    name: 'Pinsa Speck e Gorgonzola',
    description: 'Gusto deciso per un break sfizioso.',
    price: 2.5,
    category: Category.Bar,
    subCategory: 'Salato Bar',
    allergens: ['Glutine', 'Lattosio']
  },

  // --- BISTROT - ANTIPASTI ---
  {
    id: 'ant-1',
    name: 'Tartare di Bufalo',
    description: 'Carne di bufalo freschissima condita con Olio Extravergine di Oliva, Limone ed Erbe aromatiche.',
    price: 13,
    category: Category.Bistrot,
    subCategory: 'Antipasti',
    image: 'https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 'ant-2',
    name: 'Parmigiana di Melanzane',
    description: 'Melanzane grigliate, Pomodoro "Rosso Gargano", Fior di latte e Parmigiano, gratinata al forno.',
    price: 10,
    category: Category.Bistrot,
    subCategory: 'Antipasti',
    isVegetarian: true,
    image: 'https://images.unsplash.com/photo-1574484284002-952d92456975?auto=format&fit=crop&q=80&w=400',
    allergens: ['Lattosio']
  },
  {
    id: 'ant-3',
    name: 'Tagliere Misto di Salumi e Formaggi',
    description: 'Selezione di Salumi e Formaggi locali, accompagnati da Miele, Confetture e Crostini freschi.',
    price: 18,
    category: Category.Bistrot,
    subCategory: 'Antipasti',
    image: 'https://images.unsplash.com/photo-1541529086526-db283c563270?auto=format&fit=crop&q=80&w=400',
    allergens: ['Lattosio', 'Glutine']
  },
  {
    id: 'ant-4',
    name: 'Trippa con Polenta',
    description: 'Trippa stufata in Salsa di Pomodoro, servita con morbida Polenta calda.',
    price: 10,
    category: Category.Bistrot,
    subCategory: 'Antipasti',
    image: 'https://images.unsplash.com/photo-1627042633145-c7644d841e0a?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 'ant-5',
    name: 'Polenta, Gorgonzola, Soppressa, Funghi',
    description: 'Polenta grigliata, Gorgonzola cremoso, Soppressa con aglio, Funghi trifolati.',
    price: 12,
    category: Category.Bistrot,
    subCategory: 'Antipasti',
    image: 'https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&q=80&w=400',
    allergens: ['Lattosio', 'Glutine']
  },

  // --- BISTROT - PRIMI ---
  {
    id: 'pri-1',
    name: 'Gnocchi di Malga al Burro e Salvia',
    description: 'Gnocchi di Malga fatti a mano mantecati con Burro chiarificato e Salvia.',
    price: 10,
    category: Category.Bistrot,
    subCategory: 'Primi Piatti',
    isVegetarian: true,
    image: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&q=80&w=400',
    allergens: ['Glutine', 'Lattosio']
  },
  {
    id: 'pri-2',
    name: 'Bigoli al ragù di Cortile',
    description: 'Bigoli artigianali con ragù di Faraona, Coniglio, Anatra e Gallina.',
    price: 13,
    category: Category.Bistrot,
    subCategory: 'Primi Piatti',
    image: 'https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?auto=format&fit=crop&q=80&w=400',
    allergens: ['Glutine', 'Uova']
  },
  {
    id: 'pri-3',
    name: 'Maccheroncini con Salsiccia, Porri e Ricotta affumicata',
    description: 'Maccheroncini artigianali con Salsiccia alla piastra, Porri stufati e Ricotta affumicata.',
    price: 13,
    category: Category.Bistrot,
    subCategory: 'Primi Piatti',
    image: 'https://images.unsplash.com/photo-1626844131082-256783844137?auto=format&fit=crop&q=80&w=400',
    allergens: ['Glutine', 'Lattosio']
  },

  // --- BISTROT - SECONDI ---
  {
    id: 'sec-1',
    name: 'Tagliata di Bufalo con Verze Sofegae',
    description: 'Tagliata di Bufalo fresca (circa 250gr) con Verze stufate nel Lardo.',
    price: 18,
    category: Category.Bistrot,
    subCategory: 'Secondi Piatti',
    image: 'https://images.unsplash.com/photo-1546241072-48010ad28c2c?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 'sec-2',
    name: 'Galletto CBT con Patate al Forno',
    description: 'Galletto cotto a bassa temperatura, ripassato in forno, accompagnato da patate.',
    price: 18,
    category: Category.Bistrot,
    subCategory: 'Secondi Piatti',
    image: 'https://images.unsplash.com/photo-1610057099443-fde8c4d29f29?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 'sec-3',
    name: 'Baccalà alla Vicentina con Polenta',
    description: 'Baccalà cucinato con Cipolla, Latte e Acciughe, servito con Polenta cremosa.',
    price: 18,
    category: Category.Bistrot,
    subCategory: 'Secondi Piatti',
    image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&q=80&w=400',
    allergens: ['Lattosio', 'Pesce']
  },
  {
    id: 'sec-4',
    name: 'Lesso con Pearà',
    description: 'Selezione di Cotechino, Testina di Vitello, Copertina di Manzo, Lingua, accompagnato dalla tradizionale Pearà.',
    price: 21,
    category: Category.Bistrot,
    subCategory: 'Secondi Piatti',
    image: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&q=80&w=400',
    allergens: ['Glutine']
  },

  // --- BISTROT - CONTORNI ---
  {
    id: 'cnt-1',
    name: 'Patate Arrosto',
    description: 'Patate cotte al forno con Rosmarino e un filo di Olio Extravergine.',
    price: 5,
    category: Category.Bistrot,
    subCategory: 'Contorni',
    isVegetarian: true,
    isVegan: true,
    image: 'https://images.unsplash.com/photo-1592417817098-8fd3d9eb14a5?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 'cnt-2',
    name: 'Verdure Grigliate',
    description: 'Verdure di stagione grigliate, condite con Olio Extravergine e Aromi freschi.',
    price: 5,
    category: Category.Bistrot,
    subCategory: 'Contorni',
    isVegetarian: true,
    isVegan: true,
    image: 'https://images.unsplash.com/photo-1590759687955-a024ef13a6b5?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 'cnt-3',
    name: 'Insalata Mista',
    description: 'Insalata con Carote alla Julienne e Pomodoro Ciliegino.',
    price: 5,
    category: Category.Bistrot,
    subCategory: 'Contorni',
    isVegetarian: true,
    isVegan: true,
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=400'
  },

  // --- VINI IN CARTA ---
  {
    id: 'vi-1',
    name: 'Lugana DOC',
    description: 'Calice / Bottiglia - Bianco minerale dal Lago di Garda.',
    price: '4 / 23',
    category: Category.ViniBollicine,
    subCategory: 'Vini in Carta'
  },
  {
    id: 'vi-2',
    name: 'Valpolicella Ripasso DOC',
    description: 'Calice / Bottiglia - Struttura e morbidezza.',
    price: '4,5 / 26',
    category: Category.ViniBollicine,
    subCategory: 'Vini in Carta'
  },
  {
    id: 'vi-3',
    name: 'Amarone DOC',
    description: 'Il re dei vini veronesi, bottiglia selezione.',
    price: 48,
    category: Category.ViniBollicine,
    subCategory: 'Vini in Carta'
  },

  // --- CHAMPAGNE ---
  {
    id: 'ch-1',
    name: 'Moët Imperial',
    description: 'L\'icona dello Champagne mondiale.',
    price: '60 / 65',
    category: Category.ViniBollicine,
    subCategory: 'Champagne'
  },
  {
    id: 'ch-2',
    name: 'Veuve Clicquot',
    description: 'Etichetta gialla, eccellenza francese.',
    price: '65 / 70',
    category: Category.ViniBollicine,
    subCategory: 'Champagne'
  }
];

export const EVENTS: Event[] = [
  {
    id: '1',
    title: 'Karaoke Night Classic',
    date: 'Ogni Mercoledì & Venerdì',
    description: 'La serata più divertente di Verona! Canta i grandi successi italiani e internazionali.',
    type: 'karaoke',
    image: 'https://picsum.photos/seed/karaoke/600/400'
  },
  {
    id: '2',
    title: 'Cena con Degustazione Vini',
    date: '15 Maggio 2024',
    description: 'Un viaggio sensoriale tra le migliori cantine della Valpolicella accompagnato da piatti gourmet.',
    type: 'dinner',
    image: 'https://picsum.photos/seed/tasting/600/400'
  }
];
