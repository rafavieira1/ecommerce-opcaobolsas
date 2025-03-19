import { Product } from "@/types/product";
import { products as productsData } from "@/data/products";

// Simula um delay de rede
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const api = {
  async getProduct(id: string): Promise<Product> {
    if (!id) throw new Error('ID é obrigatório');
    
    await delay(1000);
    const product = productsData.find(p => p.id === id);
    
    if (!product) {
      throw new Error(`Produto não encontrado: ${id}`);
    }
    
    return product;
  },

  async getProducts(limit?: number): Promise<Product[]> {
    await delay(1000);
    return limit ? productsData.slice(0, limit) : productsData;
  }
}; 