import { Product } from '@/types/product';

const currentDate = new Date().toISOString();

export const products: Product[] = [
  // Bolsas
  {
    id: '1',
    name: 'Bolsa Elegante Couro Genuíno Preta',
    description: 'Bolsa de couro genuíno com acabamento premium e detalhes em dourado',
    price: 299.99,
    imageUrl: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&q=80&w=1000',
    category: 'bags',
    inStock: true,
    createdAt: currentDate,
    updatedAt: currentDate
  },
  {
    id: '2',
    name: 'Bolsa Casual Moderna Off-White',
    description: 'Bolsa casual com design minimalista e versátil',
    price: 199.99,
    imageUrl: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&q=80&w=1000',
    category: 'bags',
    inStock: true,
    createdAt: currentDate,
    updatedAt: currentDate
  },
  {
    id: '3',
    name: 'Bolsa Executiva Estruturada Marrom',
    description: 'Bolsa executiva com múltiplos compartimentos e acabamento em couro',
    price: 399.99,
    imageUrl: 'https://images.unsplash.com/photo-1573346544005-4e314e2e3159?auto=format&fit=crop&q=80&w=1000',
    category: 'bags',
    inStock: true,
    createdAt: currentDate,
    updatedAt: currentDate
  },
  {
    id: '13',
    name: 'Bolsa Executiva Estruturada Preta',
    description: 'Bolsa executiva com múltiplos compartimentos e acabamento em couro',
    price: 400.99,
    imageUrl: 'https://images.unsplash.com/photo-1573346544005-4e314e2e3159?auto=format&fit=crop&q=80&w=1000',
    category: 'bags',
    inStock: true,
    createdAt: currentDate,
    updatedAt: currentDate
  },

  // Mochilas
  {
    id: '4',
    name: 'Mochila Notebook 15.6" Preto',
    description: 'Mochila com proteção para notebook e múltiplos compartimentos',
    price: 249.99,
    imageUrl: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80&w=1000',
    category: 'backpacks',
    inStock: true,
    createdAt: currentDate,
    updatedAt: currentDate
  },
  {
    id: '5',
    name: 'Mochila Casual Azul Marinho',
    description: 'Mochila casual com design moderno e resistente à água',
    price: 179.99,
    imageUrl: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80&w=1000',
    category: 'backpacks',
    inStock: true,
    createdAt: currentDate,
    updatedAt: currentDate
  },
  {
    id: '6',
    name: 'Mochila Tática Militar Verde',
    description: 'Mochila tática com múltiplos compartimentos e tecido resistente',
    price: 299.99,
    imageUrl: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80&w=1000',
    category: 'backpacks',
    inStock: true,
    createdAt: currentDate,
    updatedAt: currentDate
  },

  // Malas
  {
    id: '7',
    name: 'Mala de Viagem 4 Rodas Cinza',
    description: 'Mala com sistema de 4 rodas e material resistente',
    price: 599.99,
    imageUrl: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80&w=1000',
    category: 'suitcases',
    inStock: true,
    createdAt: currentDate,
    updatedAt: currentDate
  },
  {
    id: '8',
    name: 'Mala de Cabine Preto',
    description: 'Mala de cabine com design moderno e leve',
    price: 399.99,
    imageUrl: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80&w=1000',
    category: 'suitcases',
    inStock: true,
    createdAt: currentDate,
    updatedAt: currentDate
  },
  {
    id: '9',
    name: 'Mala de Viagem Grande Azul',
    description: 'Mala grande com sistema de 4 rodas e fechamento TSA',
    price: 799.99,
    imageUrl: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80&w=1000',
    category: 'suitcases',
    inStock: true,
    createdAt: currentDate,
    updatedAt: currentDate
  },

  // Acessórios
  {
    id: '10',
    name: 'Carteira de Couro Marrom',
    description: 'Carteira de couro genuíno com múltiplos compartimentos',
    price: 89.99,
    imageUrl: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80&w=1000',
    category: 'accessories',
    inStock: true,
    createdAt: currentDate,
    updatedAt: currentDate
  },
  {
    id: '11',
    name: 'Cinto de Couro Preto',
    description: 'Cinto de couro genuíno com fivela em metal',
    price: 79.99,
    imageUrl: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80&w=1000',
    category: 'accessories',
    inStock: true,
    createdAt: currentDate,
    updatedAt: currentDate
  },
  {
    id: '12',
    name: 'Organizador de Viagem',
    description: 'Kit organizador com múltiplos compartimentos para viagem',
    price: 129.99,
    imageUrl: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80&w=1000',
    category: 'accessories',
    inStock: true,
    createdAt: currentDate,
    updatedAt: currentDate
  }
]; 