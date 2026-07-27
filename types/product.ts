export interface Product {
  id: number;

  slug: string;

  name: string;

  shortDescription: string;

  description: string;

  price: number;

  unit: string;

  stock: number;

  featured: boolean;

  inStock: boolean;

  sweetness: number;

  origin: string;

  season: string;

  images: string[];
}