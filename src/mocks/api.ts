import { Product } from "@/types/product";
import { products as productsData } from "@/data/products";

// Simula um delay de rede
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const api = {
  async getProduct(id: string): Promise<Product> {
    await delay(1000); // Simula latência de rede
    const product = productsData.find(p => p.id === id);
    if (!product) {
      throw new Error('Product not found');
    }
    return product;
  },

  async getProducts(): Promise<Product[]> {
    await delay(1000);
    return productsData;
  }
}; 