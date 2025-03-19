import React, { createContext, useContext, useState, useEffect } from 'react';
import { Product } from '@/types/product';
import { CartItem, CartContextType } from '@/types/cart';
import { useToast } from '@/components/ui/use-toast';

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [items, setItems] = useState<CartItem[]>([]);
  const { toast } = useToast();

  // Carregar carrinho do localStorage quando o componente montar
  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setItems(JSON.parse(savedCart));
    }
  }, []);

  // Salvar carrinho no localStorage sempre que for atualizado
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(items));
  }, [items]);

  const addItem = (product: Product, quantity = 1) => {
    setItems(currentItems => {
      const existingItem = currentItems.find(item => item.product.id === product.id);
      
      if (existingItem) {
        toast({
          title: "Produto atualizado",
          description: `Quantidade atualizada para ${existingItem.quantity + quantity}`,
        });
        
        return currentItems.map(item =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }

      toast({
        title: "Produto adicionado",
        description: `${product.name} adicionado ao carrinho`,
      });

      return [...currentItems, { product, quantity }];
    });
  };

  const removeItem = (productId: string) => {
    setItems(currentItems => currentItems.filter(item => item.product.id !== productId));
    
    toast({
      title: "Produto removido",
      description: "Item removido do carrinho",
    });
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity < 1) {
      removeItem(productId);
      return;
    }

    setItems(currentItems =>
      currentItems.map(item =>
        item.product.id === productId
          ? { ...item, quantity }
          : item
      )
    );
  };

  const clearCart = () => {
    setItems([]);
    toast({
      title: "Carrinho limpo",
      description: "Todos os itens foram removidos",
    });
  };

  const total = items.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  const itemsCount = items.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        total,
        itemsCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}; 