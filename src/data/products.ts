import { Product } from '@/types/product';

const currentDate = new Date().toISOString();

export const products: Product[] = [
  // Bolsas
  {
    id: '1',
    name: 'Bolsa Elegante Couro Genuíno Preta',
    description: 'Bolsa de couro genuíno com acabamento premium e detalhes em dourado',
    price: 299.99,
    imageUrl: 'https://img.freepik.com/fotos-gratis/bela-elegancia-e-moda-de-luxo-bolsa-verde_1203-7655.jpg?t=st=1742341372~exp=1742344972~hmac=b0158a9e9a3531ae5b324c2ee4825ce390e22bec8b9aa8c4bdec3cd7b1d12c66&w=740',
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
    imageUrl: 'https://img.freepik.com/fotos-gratis/bolsas-cor-de-rosa_1203-7829.jpg?t=st=1742341470~exp=1742345070~hmac=f5430094f284d2038dad6008831271f0b01311825d06e4b416d69f030eda7c0e&w=740',
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
    imageUrl: 'https://img.freepik.com/fotos-gratis/cor-mulher-luxuosa-elegancia-roxa_1203-6518.jpg?t=st=1742341470~exp=1742345070~hmac=c580986bdefe4f6b557353cced2df73980b66460b5d0d4ce64852d1d76488738&w=740',
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
    imageUrl: 'https://img.freepik.com/fotos-premium/bolsa-de-couro-moda-mulher_1339-110125.jpg?w=740',
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
    imageUrl: 'https://img.freepik.com/fotos-premium/mochila-de-costas_1056055-536.jpg?w=740',
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
    imageUrl: 'https://img.freepik.com/fotos-premium/mochila-de-costas_1056055-538.jpg?w=740',
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
    imageUrl: 'https://img.freepik.com/fotos-premium/bolso-mochila-maletin_1056055-973.jpg?w=740',
    category: 'backpacks',
    inStock: true,
    createdAt: currentDate,
    updatedAt: currentDate
  },
  {
    id: '14',
    name: 'Mochila Tática Militar Verde',
    description: 'Mochila tática com múltiplos compartimentos e tecido resistente',
    price: 299.99,
    imageUrl: 'https://img.freepik.com/fotos-premium/mochila-de-viagem_1056055-278.jpg?w=740',
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
    imageUrl: 'https://img.freepik.com/vetores-gratis/travel-suitcase-realistic_1284-4831.jpg?t=st=1742341973~exp=1742345573~hmac=cdb51772fa6b077f8b8dbdd63a06e223fc1ed571024cb930e676c443ca7e318f&w=740',
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
    imageUrl: 'https://img.freepik.com/fotos-premium/bagagem-contra-fundo-branco_1048944-18965155.jpg?w=740',
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
    imageUrl: 'https://img.freepik.com/fotos-premium/bolsa-de-viagem-amarela-e-chapeu-de-palha-isolados-em-um-fundo-branco_434420-2710.jpg?w=740',
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
    imageUrl: 'https://img.freepik.com/fotos-gratis/cinto-de-couro_74190-2615.jpg?t=st=1742342151~exp=1742345751~hmac=25edd0088e20decd03fd8a463449757f3fe2fa7586aff15b28d7f64a357954f3&w=996',
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
    imageUrl: 'https://img.freepik.com/fotos-gratis/carteira-de-couro-isolada-no-branco_1232-1814.jpg?t=st=1742342159~exp=1742345759~hmac=c3151a255291c6fdc6336f72f4192f7507251af6e47ed2c05848e4e5fd6565c8&w=996',
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
    imageUrl: 'https://img.freepik.com/psd-gratuitas/vista-da-ilustracao-da-bolsa-de-higiene-3d_23-2150766655.jpg?t=st=1742342188~exp=1742345788~hmac=523cb16caa918e4298f39ffdc1c27dbe42b6f9694f0748d2028dc6cae3857890&w=740',
    category: 'accessories',
    inStock: true,
    createdAt: currentDate,
    updatedAt: currentDate
  }
]; 