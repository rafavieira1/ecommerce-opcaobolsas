import { ShoppingCart, Trash, Plus, Minus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { formatPrice } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

export const CartDropdown = () => {
  const { items, removeItem, updateQuantity, total, itemsCount } = useCart();
  const navigate = useNavigate();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <motion.div 
          className="relative hover:text-primary transition-colors cursor-pointer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <ShoppingCart className="w-6 h-6" />
          <AnimatePresence>
            {itemsCount > 0 && (
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
                className="absolute -top-2 -right-2 bg-primary text-white text-xs rounded-full h-5 w-5 flex items-center justify-center"
              >
                {itemsCount}
              </motion.span>
            )}
          </AnimatePresence>
        </motion.div>
      </DropdownMenuTrigger>
      
      <DropdownMenuContent className="w-96 p-4 bg-white rounded-xl shadow-xl border-none">
        <h3 className="font-ponomar text-xl font-semibold mb-4">Carrinho</h3>
        
        <AnimatePresence>
          {items.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="text-gray-500 text-center py-8"
            >
              <ShoppingCart className="w-12 h-12 mx-auto mb-4 text-gray-400" />
              <p className="text-lg">Seu carrinho está vazio</p>
              <p className="text-sm text-gray-400 mt-2">Adicione produtos para começar</p>
            </motion.div>
          ) : (
            <>
              <div className="space-y-4 max-h-96 overflow-auto pr-2">
                <AnimatePresence>
                  {items.map((item) => (
                    <motion.div
                      key={item.product.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      className="flex items-center gap-4 bg-gray-50 p-3 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      <motion.img
                        whileHover={{ scale: 1.05 }}
                        src={item.product.imageUrl}
                        alt={item.product.name}
                        className="w-20 h-20 object-cover rounded-md"
                      />
                      <div className="flex-1">
                        <h4 className="font-ponomar text-sm font-medium">{item.product.name}</h4>
                        <p className="text-primary font-semibold mt-1">
                          {formatPrice(item.product.price)}
                        </p>
                        <div className="flex items-center gap-2 mt-2">
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                            className="p-1 hover:bg-white rounded-full"
                          >
                            <Minus className="h-4 w-4" />
                          </motion.button>
                          <span className="text-sm font-medium w-6 text-center">{item.quantity}</span>
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                            className="p-1 hover:bg-white rounded-full"
                          >
                            <Plus className="h-4 w-4" />
                          </motion.button>
                        </div>
                      </div>
                      <motion.button
                        whileHover={{ scale: 1.1, color: '#ef4444' }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => removeItem(item.product.id)}
                        className="text-gray-400 hover:text-red-500 transition-colors p-2"
                      >
                        <Trash className="h-4 w-4" />
                      </motion.button>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>

              <div className="border-t border-gray-200 mt-4 pt-4">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-gray-600 font-medium">Total</span>
                  <span className="text-xl font-ponomar font-semibold text-primary">
                    {formatPrice(total)}
                  </span>
                </div>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    onClick={() => navigate('/checkout')}
                    className="w-full bg-primary hover:bg-primary/90 text-white py-6 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Finalizar Compra
                  </Button>
                </motion.div>
              </div>
            </>
          )}
        </AnimatePresence>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}; 