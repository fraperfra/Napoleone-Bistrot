
export enum Category {
  Bar = 'Bar',
  Bistrot = 'Bistrot',
  Drink = 'Mixology',
  ViniBollicine = 'Cantina',
  Birre = 'Birre'
}

export interface Photo {
  id: string;
  url: string;
  isMain: boolean;
  generatedAt: string;
  source: 'upload' | 'ai';
}

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number | string; // Supporta stringhe per i range come "5 / 6"
  category: Category;
  subCategory?: string;
  allergens?: string[];
  isVegetarian?: boolean;
  isVegan?: boolean;
  isGlutenFree?: boolean;
  image?: string; // @deprecated use images[0].url
  images?: Photo[]; // New field for gallery
  alcoholLevel?: number; // 1-5 scale for drinks
  recommendedPairings?: string[]; // List of recommended drink/food names
}

export interface Event {
  id: string;
  title: string;
  date: string;
  description: string;
  type: 'karaoke' | 'dinner' | 'private';
  image: string;
}

export interface Translation {
  heroTitle: string;
  heroCta: string;
  welcomeTitle: string;
  welcomeText: string;
  menuCta: string;
  reservationTitle: string;
  bookTable: string;
  contactUs: string;
}
