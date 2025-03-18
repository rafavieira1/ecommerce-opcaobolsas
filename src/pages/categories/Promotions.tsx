import { useEffect, useState } from 'react';
import { Product } from '@/types/product';
import { products } from '@/data/products';
import ProductCard from '@/components/product/ProductCard';

const PromotionsPage = () => {
  const [productsList, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulando uma chamada à API
    const fetchProducts = async () => {
      try {
        setLoading(true);
        // Filtrando apenas produtos com preço acima de 300 reais para simular promoções
        const promotionsProducts = products.filter(product => product.price > 300);
        setProducts(promotionsProducts);
      } catch (error) {
        console.error('Erro ao carregar produtos:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-semibold mb-6">Promoções</h1>
      
      {productsList.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-gray-500">Nenhum produto em promoção no momento.</p>
        </div>
      ) : (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-1">
          {productsList.map((product) => (
            <ProductCard
              key={product.id}
              image={product.imageUrl}
              title={product.name}
              price={product.price}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default PromotionsPage; 