import { useEffect, useState } from 'react';
import { Product } from '@/types/product';
import { products } from '@/data/products';
import ProductCard from '@/components/product/ProductCard';

const BagsPage = () => {
  const [productsList, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulando uma chamada à API
    const fetchProducts = async () => {
      try {
        setLoading(true);
        // Filtrando apenas produtos da categoria bags
        const bagsProducts = products.filter(product => product.category === 'bags');
        setProducts(bagsProducts);
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
    <div className="w-full max-w-[2000px] mx-auto py-8 px-4">
      <div>
        <h1 className="text-2xl font-semibold mb-6">Bolsas</h1>
      </div>
      
      {productsList.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-gray-500">Nenhum produto encontrado nesta categoria.</p>
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-0">
          {productsList.map((product) => (
            <ProductCard
              key={product.id}
              productId={product.id}
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

export default BagsPage; 