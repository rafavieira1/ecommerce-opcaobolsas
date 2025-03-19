import { useParams, useNavigate } from 'react-router-dom';
import { ShoppingCart, ArrowLeft, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';
import { useProduct } from '@/hooks/useProduct';
import { useToast } from '@/components/ui/use-toast';
import { motion } from 'framer-motion';

const formatPrice = (price: number) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(price);
};

const ProductPage = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const { addItem } = useCart();
  const { toast } = useToast();
  const { data: product, isLoading, error } = useProduct(productId);

  if (isLoading) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="animate-pulse">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Imagem Placeholder */}
            <div className="aspect-square bg-gray-200 rounded-lg"></div>
            
            {/* Conteúdo Placeholder */}
            <div className="space-y-4">
              <div className="h-8 bg-gray-200 rounded w-3/4"></div>
              <div className="space-y-2">
                <div className="h-6 bg-gray-200 rounded w-1/4"></div>
                <div className="h-8 bg-gray-200 rounded w-1/2"></div>
                <div className="h-6 bg-gray-200 rounded w-1/3"></div>
              </div>
              <div className="space-y-2 pt-8">
                <div className="h-6 bg-gray-200 rounded w-1/4"></div>
                <div className="h-24 bg-gray-200 rounded"></div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="h-12 bg-gray-200 rounded"></div>
                <div className="h-12 bg-gray-200 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center">
          <h2 className="text-2xl font-ponomar text-gray-900 mb-4">
            Ops! Não foi possível carregar o produto
          </h2>
          <p className="text-gray-600 mb-8">
            Ocorreu um erro ao carregar as informações do produto. Por favor, tente novamente.
          </p>
          <Button
            onClick={() => navigate(-1)}
            variant="outline"
            className="flex items-center gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Voltar
          </Button>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addItem(product);
    toast({
      title: "Produto adicionado",
      description: "Item adicionado ao carrinho com sucesso!",
    });
  };

  const handleBuyNow = () => {
    addItem(product);
    navigate('/checkout');
  };

  const installmentPrice = product.price / 6;

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8"
    >
      <Button
        onClick={() => navigate(-1)}
        variant="ghost"
        className="mb-6 -ml-2 text-gray-600 hover:text-gray-900 group"
      >
        <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" />
        Voltar
      </Button>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Imagem do Produto */}
        <motion.div 
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="relative aspect-square overflow-hidden rounded-2xl bg-gray-50 shadow-lg"
        >
          <motion.img
            src={product.imageUrl}
            alt={product.name}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
          />
          <motion.button
            className="absolute top-4 right-4 z-10 bg-white/80 backdrop-blur-sm p-3 rounded-full shadow-md"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Heart className="h-5 w-5 text-gray-600 hover:text-primary transition-colors" />
          </motion.button>
        </motion.div>

        {/* Informações do Produto */}
        <motion.div 
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col"
        >
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-4xl font-ponomar text-gray-900 mb-4"
          >
            {product.name}
          </motion.h1>
          
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-2 mb-8"
          >
            <p className="text-gray-500 font-ponomar text-lg line-through">
              {formatPrice(product.price * 1.2)}
            </p>
            <p className="text-4xl font-ponomar text-primary font-semibold">
              {formatPrice(product.price)}
            </p>
            <p className="text-gray-600 font-ponomar text-lg">
              ou 6x de {formatPrice(installmentPrice)} sem juros
            </p>
          </motion.div>

          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="prose prose-green max-w-none mb-8"
          >
            <h2 className="text-2xl font-ponomar mb-4">Descrição</h2>
            <p className="text-gray-600 text-lg leading-relaxed">{product.description}</p>
          </motion.div>

          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="space-y-4 mt-auto"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                onClick={handleBuyNow}
                className="w-full bg-primary hover:bg-primary/90 text-white h-14 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                disabled={!product.inStock}
              >
                {product.inStock ? 'Comprar agora' : 'Produto indisponível'}
              </Button>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                onClick={handleAddToCart}
                variant="outline"
                className="w-full border-2 border-primary text-primary hover:bg-primary/5 h-14 text-lg font-semibold rounded-xl flex items-center justify-center gap-2 transition-all duration-300"
                disabled={!product.inStock}
              >
                <ShoppingCart className="h-5 w-5" />
                Adicionar ao carrinho
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProductPage; 