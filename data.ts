
import { Category, MenuItem, Event } from './types';

export const MENU_ITEMS: MenuItem[] = [
  // --- DRINK SPECIALI ---
  {
    id: 'dsp-1',
    name: 'Poison Ivy',
    description: 'Gin Mare, St\'Germain, Assenzio, Lime, Basilico, Menta',
    price: 10,
    category: Category.Drink,
    subCategory: 'Drink Speciali',
    image: 'https://images.unsplash.com/photo-1536935338788-846bb9981813?auto=format&fit=crop&q=80&w=400',
    alcoholLevel: 4
  },
  {
    id: 'dsp-2',
    name: 'Grey Napoleone',
    description: 'Grey Goose, Brandy Napoleon, Passion Fruit, Tropical, Seltz',
    price: 10,
    category: Category.Drink,
    subCategory: 'Drink Speciali',
    image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=400',
    alcoholLevel: 4
  },
  {
    id: 'dsp-3',
    name: 'Vesper',
    description: 'Beluga, Roby Marton, Lillet Blanc',
    price: 10,
    category: Category.Drink,
    subCategory: 'Drink Speciali',
    image: 'https://images.unsplash.com/photo-1574096079513-d8259312b785?auto=format&fit=crop&q=80&w=400',
    alcoholLevel: 5
  },
  {
    id: 'dsp-4',
    name: 'Rose Tonic',
    description: 'Tanqueray 0, Succo di Pompelmo, Tonica, Sciroppo alle Rose',
    price: 6,
    category: Category.Drink,
    subCategory: 'Drink Speciali',
    alcoholLevel: 1
  },

  // --- DRINK CLASSICI ---
  {
    id: 'dcl-1',
    name: 'Manhattan',
    description: 'Rye Whiskey, Vermouth Cocchi, Angostura',
    price: 8,
    category: Category.Drink,
    subCategory: 'Drink Classici',
    alcoholLevel: 4
  },
  {
    id: 'dcl-2',
    name: 'Old Fashioned',
    description: 'Rye Whiskey, Angostura, Seltz, Zucchero',
    price: 7,
    category: Category.Drink,
    subCategory: 'Drink Classici',
    alcoholLevel: 4
  },
  {
    id: 'dcl-3',
    name: 'Cosmopolitan',
    description: 'Vodka, Cointreau, Succo di Lime e Mirtilli',
    price: 7,
    category: Category.Drink,
    subCategory: 'Drink Classici',
    alcoholLevel: 3
  },
  {
    id: 'dcl-4',
    name: 'Daiquiri',
    description: 'Rum Bianco, Succo di Lime, Sciroppo, Maraschino',
    price: 7,
    category: Category.Drink,
    subCategory: 'Drink Classici',
    alcoholLevel: 3
  },
  {
    id: 'dcl-5',
    name: 'Espresso Martini',
    description: 'Vodka, Kahlua, Caffè',
    price: 7,
    category: Category.Drink,
    subCategory: 'Drink Classici',
    alcoholLevel: 3
  },
  {
    id: 'dcl-6',
    name: 'Black Russian',
    description: 'Vodka, Kahlua',
    price: 6,
    category: Category.Drink,
    subCategory: 'Drink Classici',
    alcoholLevel: 3
  },
  {
    id: 'dcl-7',
    name: 'Sex On the Beach',
    description: 'Vodka, Liquore Pesca, Succo d\'Arancia e Cranberry',
    price: 6,
    category: Category.Drink,
    subCategory: 'Drink Classici',
    alcoholLevel: 3
  },
  {
    id: 'dcl-8',
    name: 'Whiskey Sour',
    description: 'Whiskey, Succo di Limone, Sciroppo di Zucchero',
    price: 7,
    category: Category.Drink,
    subCategory: 'Drink Classici',
    alcoholLevel: 3
  },

  // --- APERITIVI ---
  {
    id: 'dap-1',
    name: 'Spritz Aperol/Campari',
    description: 'Aperol/Campari, Vino Frizzante, Seltz',
    price: 4.5,
    category: Category.Drink,
    subCategory: 'Aperitivi',
    alcoholLevel: 2
  },
  {
    id: 'dap-2',
    name: 'Gin Tonic/Lemon',
    description: 'Tanqueray, Tonica FeverTree/Lemon Soda',
    price: 7,
    category: Category.Drink,
    subCategory: 'Aperitivi',
    alcoholLevel: 3
  },
  {
    id: 'dap-3',
    name: 'Vodka RedBull/Tonic',
    description: 'Vodka, RedBull/Tonica FeverTree',
    price: 6,
    category: Category.Drink,
    subCategory: 'Aperitivi',
    alcoholLevel: 3
  },
  {
    id: 'dap-4',
    name: 'Hugo',
    description: 'Prosecco DOC, Sciroppo di Sambuco, Seltz',
    price: 4,
    category: Category.Drink,
    subCategory: 'Aperitivi',
    alcoholLevel: 2
  },
  {
    id: 'dap-5',
    name: 'Hugo Napoleone',
    description: 'Prosecco DOC, St\'Germain, Seltz',
    price: 6.5,
    category: Category.Drink,
    subCategory: 'Aperitivi',
    alcoholLevel: 2
  },
  {
    id: 'dap-6',
    name: 'Americano',
    description: 'Campari, Vermouth, Seltz',
    price: 6,
    category: Category.Drink,
    subCategory: 'Aperitivi',
    alcoholLevel: 3
  },
  {
    id: 'dap-7',
    name: 'Americano Premium',
    description: 'Campari, Vermouth Cocchi, Seltz',
    price: 7,
    category: Category.Drink,
    subCategory: 'Aperitivi',
    alcoholLevel: 3
  },
  {
    id: 'dap-8',
    name: 'Negroni',
    description: 'Campari, Vermouth, Tanqueray',
    price: 7,
    category: Category.Drink,
    subCategory: 'Aperitivi',
    alcoholLevel: 4
  },

  // --- ANALCOLICI ---
  {
    id: 'dan-1',
    name: 'Red Sunset',
    description: 'Succo Ananas, Arancia, Pesca, Sciroppo di Lamponi, Menta',
    price: 6,
    category: Category.Drink,
    subCategory: 'Analcolici',
    alcoholLevel: 0
  },
  {
    id: 'dan-2',
    name: 'Virgin Mojito',
    description: 'Lemon Soda, Lime, Menta, Zucchero, Seltz',
    price: 6,
    category: Category.Drink,
    subCategory: 'Analcolici',
    alcoholLevel: 0
  },
  {
    id: 'dan-3',
    name: 'Virgin Margarita',
    description: 'Lime, Arancia, Limone, Sciroppo d\'Agave',
    price: 6,
    category: Category.Drink,
    subCategory: 'Analcolici',
    alcoholLevel: 0
  },
  {
    id: 'dan-4',
    name: 'Virgin Moscow Mule',
    description: 'Ginger Beer, Lime, Menta, Seltz',
    price: 6,
    category: Category.Drink,
    subCategory: 'Analcolici',
    alcoholLevel: 0
  },

  // --- LIQUORI ---
  {
    id: 'liq-1',
    name: 'Liquori vari',
    description: 'Chiedere al Personale',
    price: '3,50 / 4',
    category: Category.Drink,
    subCategory: 'Liquori',
    alcoholLevel: 4
  },

  // --- BIRRE ALLA SPINA ---
  {
    id: 'bir-1',
    name: 'Kuhbacher (non filtrata)',
    description: '0,25l / 0,5l',
    price: '3 / 5,50',
    category: Category.Birre,
    subCategory: 'Birre alla spina',
    alcoholLevel: 2
  },
  {
    id: 'bir-2',
    name: 'Kloster Hell',
    description: '0,25l / 0,5l',
    price: '3 / 5,50',
    category: Category.Birre,
    subCategory: 'Birre alla spina',
    alcoholLevel: 2
  },
  {
    id: 'bir-3',
    name: 'IPA Special',
    description: '0,25l / 0,5l',
    price: '3 / 6,50',
    category: Category.Birre,
    subCategory: 'Birre alla spina',
    alcoholLevel: 3
  },

  // --- CAFFETTERIA ---
  {
    id: 'caf-1',
    name: 'Caffè Liscio',
    description: '',
    price: 1.3,
    category: Category.Bar,
    subCategory: 'Caffetteria'
  },
  {
    id: 'caf-2',
    name: 'Caffè Macchiato Freddo',
    description: '',
    price: 1.3,
    category: Category.Bar,
    subCategory: 'Caffetteria'
  },
  {
    id: 'caf-3',
    name: 'Caffè Macchiato',
    description: '',
    price: 1.4,
    category: Category.Bar,
    subCategory: 'Caffetteria',
    allergens: ['Lattosio']
  },
  {
    id: 'caf-4',
    name: 'Caffè Deca',
    description: '',
    price: 1.4,
    category: Category.Bar,
    subCategory: 'Caffetteria'
  },
  {
    id: 'caf-5',
    name: 'Caffè Corretto',
    description: '',
    price: 1.8,
    category: Category.Bar,
    subCategory: 'Caffetteria'
  },
  {
    id: 'caf-6',
    name: 'Caffè Shakerato',
    description: '',
    price: 3,
    category: Category.Bar,
    subCategory: 'Caffetteria'
  },
  {
    id: 'caf-7',
    name: 'Cappuccino',
    description: '',
    price: 1.6,
    category: Category.Bar,
    subCategory: 'Caffetteria',
    allergens: ['Lattosio']
  },
  {
    id: 'caf-8',
    name: 'Cappuccino Orzo',
    description: '',
    price: 2,
    category: Category.Bar,
    subCategory: 'Caffetteria',
    allergens: ['Lattosio', 'Glutine']
  },
  {
    id: 'caf-9',
    name: 'Macchiatone',
    description: '',
    price: 1.5,
    category: Category.Bar,
    subCategory: 'Caffetteria',
    allergens: ['Lattosio']
  },
  {
    id: 'caf-10',
    name: 'Ginseng / Orzo',
    description: '',
    price: 1.6,
    category: Category.Bar,
    subCategory: 'Caffetteria',
    allergens: ['Lattosio']
  },
  {
    id: 'caf-11',
    name: 'Latte Macchiato',
    description: '',
    price: 1.9,
    category: Category.Bar,
    subCategory: 'Caffetteria',
    allergens: ['Lattosio']
  },
  {
    id: 'caf-12',
    name: 'Crema di Latte',
    description: '',
    price: 0.5,
    category: Category.Bar,
    subCategory: 'Caffetteria',
    allergens: ['Lattosio']
  },
  {
    id: 'caf-13',
    name: 'Tè Caldo',
    description: '',
    price: 3.5,
    category: Category.Bar,
    subCategory: 'Caffetteria'
  },
  {
    id: 'caf-14',
    name: 'Cioccolata Calda',
    description: '',
    price: 3,
    category: Category.Bar,
    subCategory: 'Caffetteria',
    allergens: ['Lattosio']
  },

  // --- BEVANDE ---
  {
    id: 'bev-1',
    name: 'Spremuta d\'Arancia',
    description: '',
    price: 3.5,
    category: Category.Bar,
    subCategory: 'Bevande'
  },
  {
    id: 'bev-2',
    name: 'FuzeTea Pesca/Limone',
    description: '',
    price: 2.5,
    category: Category.Bar,
    subCategory: 'Bevande'
  },
  {
    id: 'bev-3',
    name: 'Acqua Mood 0,5l',
    description: '',
    price: 1.2,
    category: Category.Bar,
    subCategory: 'Bevande'
  },
  {
    id: 'bev-4',
    name: 'Succhi in Vetro',
    description: '',
    price: 2.5,
    category: Category.Bar,
    subCategory: 'Bevande'
  },
  {
    id: 'bev-5',
    name: 'Coca Cola/Zero Vetro',
    description: '',
    price: 2.5,
    category: Category.Bar,
    subCategory: 'Bevande'
  },
  {
    id: 'bev-6',
    name: 'RedBull',
    description: '',
    price: 3,
    category: Category.Bar,
    subCategory: 'Bevande'
  },
  {
    id: 'bev-7',
    name: 'Gingerino',
    description: '',
    price: 3,
    category: Category.Bar,
    subCategory: 'Bevande'
  },
  {
    id: 'bev-8',
    name: 'Crodino',
    description: '',
    price: 3,
    category: Category.Bar,
    subCategory: 'Bevande'
  },
  {
    id: 'bev-9',
    name: 'SanBittèr',
    description: '',
    price: 3,
    category: Category.Bar,
    subCategory: 'Bevande'
  },
  {
    id: 'bev-10',
    name: 'Extra Prosecco',
    description: '',
    price: 0.5,
    category: Category.Bar,
    subCategory: 'Bevande'
  },
  {
    id: 'bev-11',
    name: 'Extra Vino Frizzante',
    description: '',
    price: 0.2,
    category: Category.Bar,
    subCategory: 'Bevande'
  },

  // --- DOLCE (BAR) ---
  {
    id: 'bar-dol-1',
    name: 'Risino Artigianale',
    description: '',
    price: 1.5,
    category: Category.Bar,
    subCategory: 'Dolci',
    allergens: ['Glutine', 'Uova', 'Lattosio']
  },
  {
    id: 'bar-dol-2',
    name: 'Treccia Noci e Albicocca',
    description: '',
    price: 1.5,
    category: Category.Bar,
    subCategory: 'Dolci',
    allergens: ['Glutine', 'Frutta a guscio']
  },
  {
    id: 'bar-dol-3',
    name: 'Girella con Uvetta',
    description: '',
    price: 1.5,
    category: Category.Bar,
    subCategory: 'Dolci',
    allergens: ['Glutine', 'Uova']
  },
  {
    id: 'bar-dol-4',
    name: 'Mini Mun',
    description: '',
    price: 1.2,
    category: Category.Bar,
    subCategory: 'Dolci',
    allergens: ['Glutine']
  },
  {
    id: 'bar-dol-5',
    name: 'Crostata Noci e Miele',
    description: '',
    price: 2,
    category: Category.Bar,
    subCategory: 'Dolci',
    allergens: ['Glutine', 'Frutta a guscio', 'Lattosio']
  },
  {
    id: 'bar-dol-6',
    name: 'Pasticceria Secca',
    description: '',
    price: 1.5,
    category: Category.Bar,
    subCategory: 'Dolci',
    allergens: ['Glutine', 'Uova', 'Frutta a guscio']
  },
  {
    id: 'bar-dol-7',
    name: 'Torta del Giorno',
    description: '',
    price: 3,
    category: Category.Bar,
    subCategory: 'Dolci',
    allergens: ['Glutine', 'Uova', 'Lattosio']
  },
  {
    id: 'bar-dol-8',
    name: 'Pasticceria Mignon',
    description: '',
    price: 1.5,
    category: Category.Bar,
    subCategory: 'Dolci',
    allergens: ['Glutine', 'Uova', 'Lattosio']
  },
  {
    id: 'bar-dol-9',
    name: 'Brioche Artigianale Vuota',
    description: '',
    price: 1.3,
    category: Category.Bar,
    subCategory: 'Dolci',
    allergens: ['Glutine', 'Uova', 'Lattosio']
  },
  {
    id: 'bar-dol-10',
    name: 'Brioche Farcita',
    description: 'Crema, Pistacchio, Nutella, Albicocca, Frutti di Bosco',
    price: 1.6,
    category: Category.Bar,
    subCategory: 'Dolci',
    allergens: ['Glutine', 'Uova', 'Lattosio', 'Frutta a guscio']
  },
  {
    id: 'bar-dol-11',
    name: 'Brioche Integrale',
    description: '',
    price: 1.5,
    category: Category.Bar,
    subCategory: 'Dolci',
    allergens: ['Glutine']
  },
  {
    id: 'bar-dol-12',
    name: 'Brioche 5 Cereali al Miele',
    description: '',
    price: 1.5,
    category: Category.Bar,
    subCategory: 'Dolci',
    allergens: ['Glutine']
  },
  {
    id: 'bar-dol-13',
    name: 'Brioche Vegana',
    description: '',
    price: 1.8,
    category: Category.Bar,
    subCategory: 'Dolci',
    isVegan: true,
    allergens: ['Glutine']
  },

  // --- SALATO (BAR) ---
  {
    id: 'bar-sal-1',
    name: 'Tramezzini',
    description: 'Tonno/Uovo/Mayonese - Cotto/Rucola/Funghi - Cotto/Zucchine/Philadelphia - Tacchino/Melanzane',
    price: 3.5,
    category: Category.Bar,
    subCategory: 'Salato',
    allergens: ['Glutine', 'Uova', 'Lattosio', 'Pesce'],
    recommendedPairings: ['Spritz Aperol/Campari', 'Coca Cola/Zero Vetro']
  },
  {
    id: 'bar-sal-2',
    name: 'Toast',
    description: 'Cotto/Lattuga/Fontina - Crudo/Rucola/Bufala - Salame/Rucola/Pecorino - Tacchino/Lattuga/Fontina',
    price: 4,
    category: Category.Bar,
    subCategory: 'Salato',
    allergens: ['Glutine', 'Lattosio'],
    recommendedPairings: ['Birra Kuhbacher', 'Coca Cola/Zero Vetro']
  },
  {
    id: 'bar-sal-3',
    name: 'Piadina Ripiena',
    description: 'Cotto/Lattuga/Fontina - Crudo/Rucola/Bufala - Salame/Rucola/Pecorino - Tacchino/Lattuga/Fontina',
    price: 5.5,
    category: Category.Bar,
    subCategory: 'Salato',
    allergens: ['Glutine', 'Lattosio'],
    recommendedPairings: ['Birra IPA Special', 'FuzeTea Pesca/Limone']
  },
  {
    id: 'bar-sal-4',
    name: 'Pinsa Napoli',
    description: '',
    price: 2,
    category: Category.Bar,
    subCategory: 'Salato',
    allergens: ['Glutine', 'Lattosio', 'Pesce'],
    recommendedPairings: ['Birra Kloster Hell', 'Spritz Aperol/Campari']
  },
  {
    id: 'bar-sal-5',
    name: 'Pinsa Margherita',
    description: '',
    price: 2,
    category: Category.Bar,
    subCategory: 'Salato',
    allergens: ['Glutine', 'Lattosio'],
    recommendedPairings: ['Birra Kloster Hell', 'Coca Cola/Zero Vetro']
  },
  {
    id: 'bar-sal-6',
    name: 'Pinsa Speck e Gorgonzola',
    description: '',
    price: 2.5,
    category: Category.Bar,
    subCategory: 'Salato',
    allergens: ['Glutine', 'Lattosio'],
    recommendedPairings: ['Birra IPA Special', 'Valpolicella Classico']
  },
  {
    id: 'bar-sal-7',
    name: 'Pinsa Salsiccia e Patate',
    description: '',
    price: 2.5,
    category: Category.Bar,
    subCategory: 'Salato',
    allergens: ['Glutine', 'Lattosio'],
    recommendedPairings: ['Birra Kuhbacher', 'Valpolicella Classico']
  },
  {
    id: 'bar-sal-8',
    name: 'Bocconcini Misti',
    description: '',
    price: 1.8,
    category: Category.Bar,
    subCategory: 'Salato',
    allergens: ['Glutine', 'Lattosio'],
    recommendedPairings: ['Prosecco DOC', 'Spritz Aperol/Campari']
  },


  // --- BISTROT - INSALATONE (NEW) ---
  {
    id: 'ins-1',
    name: 'Caesar',
    description: 'Lattuga fresca, petto di pollo grigliato, uovo sodo, crostini, scaglie di parmigiano e salsa Caesar.',
    price: 11,
    category: Category.Bistrot,
    subCategory: 'Insalatone',
    image: 'https://images.unsplash.com/photo-1550304943-4f24f54ddde9?auto=format&fit=crop&q=80&w=400',
    allergens: ['Glutine', 'Uova', 'Lattosio'],
    recommendedPairings: ['Acqua Mood', 'Custoza DOC', 'Sauvignon Blanc']
  },
  {
    id: 'ins-2',
    name: 'Tonno',
    description: 'Lattuga fresca, pomodori, cipolla rossa, olive e tonno.',
    price: 11,
    category: Category.Bistrot,
    subCategory: 'Insalatone',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=400',
    allergens: ['Pesce'],
    recommendedPairings: ['Lugana DOC', 'Acqua Mood']
  },
  {
    id: 'ins-3',
    name: 'Salmone',
    description: 'Lattuga fresca, avocado, cetrioli, pomodorini e salmone affumicato.',
    price: 12,
    category: Category.Bistrot,
    subCategory: 'Insalatone',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=400',
    allergens: ['Pesce'],
    recommendedPairings: ['Prosecco DOC Rosè', 'Gewurztraminer DOC']
  },

  // --- BISTROT - ANTIPASTI ---
  {
    id: 'ant-1',
    name: 'Tartare di Bufalo',
    description: 'Carne di bufalo freschissima condita con Olio Extravergine di Oliva, Limone ed Erbe aromatiche.',
    price: 13,
    category: Category.Bistrot,
    subCategory: 'Antipasti',
    image: 'https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&q=80&w=400',
    recommendedPairings: ['Valpolicella Classico', 'Franciacorta Brut']
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
    allergens: ['Lattosio'],
    recommendedPairings: ['Chianti Classico', 'Valpolicella Classico']
  },
  {
    id: 'ant-3',
    name: 'Tagliere Misto di Salumi e Formaggi',
    description: 'Selezione di Salumi e Formaggi locali, accompagnati da Miele, Confetture e Crostini freschi.',
    price: 18,
    category: Category.Bistrot,
    subCategory: 'Antipasti',
    image: 'https://images.unsplash.com/photo-1541529086526-db283c563270?auto=format&fit=crop&q=80&w=400',
    allergens: ['Lattosio', 'Glutine'],
    recommendedPairings: ['Valpolicella Ripasso', 'Birra IPA Special', 'Prosecco DOC']
  },
  {
    id: 'ant-4',
    name: 'Trippa con Polenta',
    description: 'Trippa stufata in Salsa di Pomodoro, servita con morbida Polenta calda.',
    price: 10,
    category: Category.Bistrot,
    subCategory: 'Antipasti',
    image: 'https://images.unsplash.com/photo-1627042633145-c7644d841e0a?auto=format&fit=crop&q=80&w=400',
    recommendedPairings: ['Valpolicella Superiore', 'Birra Kuhbacher']
  },
  {
    id: 'ant-5',
    name: 'Polenta, Gorgonzola, Soppressa, Funghi',
    description: 'Polenta grigliata, Gorgonzola cremoso, Soppressa con aglio, Funghi trifolati.',
    price: 12,
    category: Category.Bistrot,
    subCategory: 'Antipasti',
    image: 'https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&q=80&w=400',
    allergens: ['Lattosio', 'Glutine'],
    recommendedPairings: ['Valpolicella Ripasso', 'Birra IPA Special']
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
    allergens: ['Glutine', 'Lattosio'],
    recommendedPairings: ['Soave Classico', 'Lugana Riserva']
  },
  {
    id: 'pri-2',
    name: 'Bigoli al ragù di Cortile',
    description: 'Bigoli artigianali con ragù di Faraona, Coniglio, Anatra e Gallina.',
    price: 13,
    category: Category.Bistrot,
    subCategory: 'Primi Piatti',
    image: 'https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?auto=format&fit=crop&q=80&w=400',
    allergens: ['Glutine', 'Uova'],
    recommendedPairings: ['Valpolicella Classico', 'Chianti Classico']
  },
  {
    id: 'pri-3',
    name: 'Maccheroncini con Salsiccia, Porri e Ricotta affumicata',
    description: 'Maccheroncini artigianali con Salsiccia alla piastra, Porri stufati e Ricotta affumicata.',
    price: 13,
    category: Category.Bistrot,
    subCategory: 'Primi Piatti',
    image: 'https://images.unsplash.com/photo-1626844131082-256783844137?auto=format&fit=crop&q=80&w=400',
    allergens: ['Glutine', 'Lattosio'],
    recommendedPairings: ['Valpolicella Superiore', 'Birra IPA Special']
  },

  // --- BISTROT - SECONDI ---
  {
    id: 'sec-1',
    name: 'Tagliata di Bufalo con Verze Sofegae',
    description: 'Tagliata di Bufalo fresca (circa 250gr) con Verze stufate nel Lardo.',
    price: 18,
    category: Category.Bistrot,
    subCategory: 'Secondi Piatti',
    image: 'https://images.unsplash.com/photo-1546241072-48010ad28c2c?auto=format&fit=crop&q=80&w=400',
    recommendedPairings: ['Valpolicella Ripasso', 'Amarone della Valpolicella', 'Napoleone Rosso Veronese']
  },
  {
    id: 'sec-2',
    name: 'Galletto CBT con Patate al Forno',
    description: 'Galletto cotto a bassa temperatura, ripassato in forno, accompagnato da patate.',
    price: 18,
    category: Category.Bistrot,
    subCategory: 'Secondi Piatti',
    image: 'https://images.unsplash.com/photo-1610057099443-fde8c4d29f29?auto=format&fit=crop&q=80&w=400',
    recommendedPairings: ['Valpolicella Superiore', 'Birra Kloster Hell']
  },
  {
    id: 'sec-3',
    name: 'Baccalà alla Vicentina con Polenta',
    description: 'Baccalà cucinato con Cipolla, Latte e Acciughe, servito con Polenta cremosa.',
    price: 18,
    category: Category.Bistrot,
    subCategory: 'Secondi Piatti',
    image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&q=80&w=400',
    allergens: ['Lattosio', 'Pesce'],
    recommendedPairings: ['Durello Lessini', 'Lugana Riserva']
  },
  {
    id: 'sec-4',
    name: 'Lesso con Pearà',
    description: 'Selezione di Cotechino, Testina di Vitello, Copertina di Manzo, Lingua, accompagnato dalla tradizionale Pearà.',
    price: 21,
    category: Category.Bistrot,
    subCategory: 'Secondi Piatti',
    image: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&q=80&w=400',
    allergens: ['Glutine'],
    recommendedPairings: ['Valpolicella Ripasso', 'Amarone della Valpolicella']
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

  // --- BISTROT - DOLCI (UPDATED) ---
  {
    id: 'do-1',
    name: 'Tiramisù',
    description: 'La nostra ricetta segreta con mascarpone fresco.',
    price: 5,
    category: Category.Bistrot,
    subCategory: 'Dolci',
    image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&q=80&w=400',
    allergens: ['Lattosio', 'Glutine', 'Uova'],
    recommendedPairings: ['Caffè Espresso', 'Liquori vari']
  },
  {
    id: 'do-2',
    name: 'Semifreddo',
    description: 'Delizioso semifreddo artigianale.',
    price: 6,
    category: Category.Bistrot,
    subCategory: 'Dolci',
    allergens: ['Lattosio', 'Uova'],
    recommendedPairings: ['Caffè Espresso', 'Passito']
  },
  {
    id: 'do-3',
    name: 'Sbrisolona',
    description: 'Tipico dolce mantovano croccante alle mandorle.',
    price: 5,
    category: Category.Bistrot,
    subCategory: 'Dolci',
    allergens: ['Frutta a guscio', 'Glutine'],
    recommendedPairings: ['Grappa', 'Caffè Corretto']
  },

  // --- BISTROT - MENU BAMBINI (NEW) ---
  {
    id: 'kids-1',
    name: 'Maccheroncini al Pomodoro',
    description: 'Maccheroncini artigianali con sugo di pomodoro e basilico fresco.',
    price: 10,
    category: Category.Bistrot,
    subCategory: 'Menu Bambini',
    allergens: ['Glutine'],
    recommendedPairings: ['Acqua Mood', 'Coca Cola/Zero Vetro']
  },
  {
    id: 'kids-2',
    name: 'Cotoletta con Patatine Fritte',
    description: 'Cotoletta di Pollo Fritta accompagnata da Patatine.',
    price: 12,
    category: Category.Bistrot,
    subCategory: 'Menu Bambini',
    allergens: ['Glutine', 'Uova'],
    recommendedPairings: ['Acqua Mood', 'Coca Cola/Zero Vetro']
  },

  // --- VINI - BIANCHI ---
  {
    id: 'vb-1',
    name: 'Lugana DOC',
    description: 'Felugan, Veneto - Bianco minerale dal Lago di Garda.',
    price: '4 / 23',
    category: Category.ViniBollicine,
    subCategory: 'Vini Bianchi',
    alcoholLevel: 3
  },
  {
    id: 'vb-2',
    name: 'Lugana Riserva DOC',
    description: 'Serce, Veneto - Strutturato e complesso.',
    price: '5 / 29',
    category: Category.ViniBollicine,
    subCategory: 'Vini Bianchi',
    alcoholLevel: 3
  },
  {
    id: 'vb-3',
    name: 'Gewurztraminer DOC',
    description: 'Gaierhof, Trentino - Aromatico e speziato.',
    price: '4,5 / 26',
    category: Category.ViniBollicine,
    subCategory: 'Vini Bianchi',
    alcoholLevel: 3
  },
  {
    id: 'vb-4',
    name: 'Custoza DOC',
    description: 'Tamburino Sardo, Veneto - Fresco e leggero.',
    price: '3 / 17',
    category: Category.ViniBollicine,
    subCategory: 'Vini Bianchi',
    alcoholLevel: 2
  },
  {
    id: 'vb-5',
    name: 'Soave Classico DOC',
    description: 'Le Mandolare, Veneto - Floreale e armonico.',
    price: '3,5 / 20',
    category: Category.ViniBollicine,
    subCategory: 'Vini Bianchi',
    alcoholLevel: 2
  },

  // --- VINI - ROSSI ---
  {
    id: 'vr-1',
    name: 'Valpolicella Classico 2023 DOC',
    description: 'Nicolis, Veneto - Giovane e fruttato.',
    price: '3,5 / 20',
    category: Category.ViniBollicine,
    subCategory: 'Vini Rossi',
    alcoholLevel: 3
  },
  {
    id: 'vr-2',
    name: 'Valpolicella Classico 2021 DOC',
    description: 'Soripa, Veneto - Equilibrato e persistente.',
    price: '4 / 23',
    category: Category.ViniBollicine,
    subCategory: 'Vini Rossi',
    alcoholLevel: 3
  },
  {
    id: 'vr-3',
    name: 'Valpolicella Superiore 2021 DOC',
    description: 'Lavarini, Veneto - Intenso e vellutato.',
    price: '4 / 23',
    category: Category.ViniBollicine,
    subCategory: 'Vini Rossi',
    alcoholLevel: 3
  },
  {
    id: 'vr-4',
    name: 'Valpolicella Superiore 2019 DOC',
    description: 'Soripa, Veneto - Ricco e speziato.',
    price: '5 / 29',
    category: Category.ViniBollicine,
    subCategory: 'Vini Rossi',
    alcoholLevel: 4
  },
  {
    id: 'vr-5',
    name: 'Valpolicella Ripasso 2017 DOC',
    description: 'Lavarini, Veneto - Corpo pieno e morbido.',
    price: '4,5 / 26',
    category: Category.ViniBollicine,
    subCategory: 'Vini Rossi',
    alcoholLevel: 4
  },
  {
    id: 'vr-6',
    name: 'Chianti Classico Bucianera DOCG',
    description: 'Sasso Cupo, Toscana - Sangiovese in purezza.',
    price: '4 / 23',
    category: Category.ViniBollicine,
    subCategory: 'Vini Rossi',
    alcoholLevel: 4
  },
  {
    id: 'vr-7',
    name: 'Valpolicella Amarone DOC',
    description: 'Soripa, Veneto - Il re dei vini veronesi.',
    price: '48',
    category: Category.ViniBollicine,
    subCategory: 'Vini Rossi',
    alcoholLevel: 5
  },
  {
    id: 'vr-8',
    name: 'Napoleone Rosso Veronese',
    description: 'Tenuta "La Presa", Veneto - Selezione esclusiva.',
    price: '35',
    category: Category.ViniBollicine,
    subCategory: 'Vini Rossi',
    alcoholLevel: 4
  },

  // --- BOLLICINE ---
  {
    id: 'bol-1',
    name: 'Prosecco DOC Brut/Extra Dry',
    description: 'Oasi La Brussa, Veneto - Perlage fine e persistente.',
    price: '3,5 / 21',
    category: Category.ViniBollicine,
    subCategory: 'Bollicine',
    alcoholLevel: 3
  },
  {
    id: 'bol-2',
    name: 'Prosecco DOC Rosè',
    description: 'Oasi La Brussa, Veneto - Note di frutti rossi.',
    price: '3,5 / 21',
    category: Category.ViniBollicine,
    subCategory: 'Bollicine',
    alcoholLevel: 3
  },
  {
    id: 'bol-3',
    name: 'Durello Lessini DOC',
    description: 'Tenuta "Sasso Nero", Veneto - Freschezza vulcanica.',
    price: '4 / 23',
    category: Category.ViniBollicine,
    subCategory: 'Bollicine',
    alcoholLevel: 3
  },
  {
    id: 'bol-4',
    name: 'Metodo Classico Durello 36 Mesi',
    description: 'Casarotto, Veneto - Evoluto e complesso.',
    price: '5,5 / 32',
    category: Category.ViniBollicine,
    subCategory: 'Bollicine',
    alcoholLevel: 4
  },
  {
    id: 'bol-5',
    name: 'Metodo Classico Trento DOC',
    description: 'Gaierhof, Trentino - Eleganza di montagna.',
    price: '5,5 / 32',
    category: Category.ViniBollicine,
    subCategory: 'Bollicine',
    alcoholLevel: 4
  },
  {
    id: 'bol-6',
    name: 'Franciacorta Brut',
    description: 'Ricci Curbastro, Franciacorta - Classico e raffinato.',
    price: '6 / 35',
    category: Category.ViniBollicine,
    subCategory: 'Bollicine',
    alcoholLevel: 4
  },
  {
    id: 'bol-7',
    name: 'Champagne Moet Imperial',
    description: 'Francia - L\'icona dello Champagne.',
    price: '60',
    category: Category.ViniBollicine,
    subCategory: 'Bollicine',
    alcoholLevel: 4
  },
  {
    id: 'bol-8',
    name: 'Champagne Veuve Clicquot',
    description: 'Francia - Etichetta gialla, stile inconfondibile.',
    price: '65',
    category: Category.ViniBollicine,
    subCategory: 'Bollicine',
    alcoholLevel: 4
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
