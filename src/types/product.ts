export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  category: 'bags' | 'backpacks' | 'suitcases' | 'accessories';
  inStock: boolean;
  createdAt: string;
  updatedAt: string;
} 