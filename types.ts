export interface TravelTip {
  category: string;
  name: string;
  description: string;
}

export interface DemoState {
  isLoading: boolean;
  data: TravelTip[] | null;
  error: string | null;
}

export enum SectionId {
  HERO = 'hero',
  FEATURES = 'features',
  DEMO = 'demo',
  TESTIMONIALS = 'testimonials',
  FAQ = 'faq'
}

export type Page = 'home' | 'features' | 'pricing' | 'about' | 'merchants' | 'blog' | 'contact' | 'privacy' | 'terms';