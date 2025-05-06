import { useState, useEffect } from 'react';
import ProductCard from '@/components/product/ProductCard';
import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Mail, Phone, Heart, ArrowDown } from 'lucide-react';
import { products } from '@/data/products';
import { Product } from '@/types/product';
import { motion } from 'framer-motion';

const Index = () => {
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>([]);

  useEffect(() => {
    // Pegando os primeiros 8 produtos para exibir como destaque
    // Você pode modificar essa lógica para mostrar produtos específicos
    const featured = products.slice(0, 8);
    setFeaturedProducts(featured);
  }, []);

  const scrollToProducts = () => {
    const productsSection = document.getElementById('featured-products');
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative h-[80vh] flex items-center"
      >
        <div className="absolute inset-0 overflow-hidden">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0 bg-black/20 backdrop-blur-[4px]"
          />
          <motion.img
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            src="/images/hero.jpg"
            alt="Hero Background"
            className="w-full h-full object-cover object-center"
          />
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/30"
          />
        </div>
        
        <div className="container mx-auto px-4 relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="max-w-2xl"
          >
            <h1 className="text-5xl md:text-6xl font-ponomar font-bold text-white mb-6 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
              Elegância em cada detalhe
            </h1>
            <p className="text-xl text-white mb-8 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
              Descubra nossa coleção exclusiva de bolsas e acessórios que combinam estilo e qualidade.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                onClick={scrollToProducts}
                className="bg-green-700 hover:bg-gray-800 text-white px-8 py-6 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Explorar Coleção
              </Button>
            </motion.div>
          </motion.div>
        </div>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
          whileHover={{ y: 5 }}
          onClick={scrollToProducts}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-600 hover:text-primary transition-colors"
        >
          <ArrowDown className="w-8 h-8 animate-bounce" />
        </motion.button>
      </motion.section>

      {/* Featured Products Section */}
      <motion.section
        id="featured-products"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="py-20 bg-white"
      >
        <div className="w-full max-w-[2000px] mx-auto px-4">
          <motion.div 
            variants={itemVariants}
            className="flex items-center justify-between mb-12"
          >
            <h2 className="text-3xl font-ponomar font-bold text-gray-900">
              Produtos em Destaque
            </h2>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                variants={itemVariants}
                custom={index}
              >
                <ProductCard
                  productId={product.id}
                  image={product.imageUrl}
                  title={product.name}
                  price={product.price}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Footer Section */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="bg-gray-100 py-16"
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              variants={itemVariants}
              className="space-y-4"
            >
              <h3 className="text-xl font-ponomar font-semibold text-gray-900">Sobre Nós</h3>
              <p className="text-gray-600">
                Somos apaixonados por oferecer produtos de qualidade que combinam estilo e funcionalidade.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="space-y-4"
            >
              <h3 className="text-xl font-ponomar font-semibold text-gray-900">Contato</h3>
              <div className="space-y-2">
                <a href="tel:+551199999999" className="flex items-center text-gray-600 hover:text-primary transition-colors">
                  <Phone className="h-5 w-5 mr-2" />
                  (11) 9999-9999
                </a>
                <a href="mailto:contato@opcaobolsas.com" className="flex items-center text-gray-600 hover:text-primary transition-colors">
                  <Mail className="h-5 w-5 mr-2" />
                  contato@opcaobolsas.com
                </a>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="space-y-4"
            >
              <h3 className="text-xl font-ponomar font-semibold text-gray-900">Redes Sociais</h3>
              <div className="flex space-x-4">
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-primary transition-colors"
                >
                  <Facebook className="h-6 w-6" />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-primary transition-colors"
                >
                  <Instagram className="h-6 w-6" />
                </motion.a>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="space-y-4"
            >
              <h3 className="text-xl font-ponomar font-semibold text-gray-900">Newsletter</h3>
              <p className="text-gray-600">
                Receba nossas novidades e promoções exclusivas.
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Seu e-mail"
                  className="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
                >
                  Assinar
                </motion.button>
              </div>
            </motion.div>
          </div>

          <motion.div
            variants={itemVariants}
            className="mt-12 pt-8 border-t border-gray-200 text-center text-gray-600"
          >
            <p>&copy; 2024 Opção Bolsas. Todos os direitos reservados.</p>
          </motion.div>
        </div>
      </motion.footer>
    </div>
  );
};

export default Index;
