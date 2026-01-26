
export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  image: string;
  keywords: string[];
}

export interface WorkExample {
  id: string;
  title: string;
  area: string;
  category: string;
  description: string;
  imageUrl: string;
}

export enum Page {
  HOME = 'home',
  SERVICES = 'services',
  WORKS = 'works',
  COMPANY = 'company',
  CONTACT = 'contact'
}
