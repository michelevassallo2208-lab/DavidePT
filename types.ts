import { LucideIcon } from 'lucide-react';

export interface PricingItem {
  title: string;
  price: string;
  subtitle?: string;
  features: string[];
  highlight?: boolean;
}

export interface PricingCategory {
  id: string;
  name: string;
  items: PricingItem[];
}

export interface Service {
  title: string;
  description: string;
  icon: LucideIcon;
}
