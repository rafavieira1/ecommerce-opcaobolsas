import { Heart } from "lucide-react";
import { cn } from "@/lib/utils";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { formatPrice } from '@/lib/utils';

interface ProductCardProps {
  image: string;
  title: string;
  price: number;
  productId: string;
  onClick?: () => void;
  className?: string;
}

const ProductCard = ({
  image,
  title,
  price,
  productId,
  onClick,
  className,
}: ProductCardProps) => {
  const navigate = useNavigate();
  const installmentPrice = price / 6;

  const handleProductClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate(`/product/${productId}`);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={{ y: -5 }}
      className={cn(
        "group relative bg-white border-[0.5px] border-gray-200 cursor-pointer rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300",
        className
      )}
      onClick={handleProductClick}
    >
      {/* Favorite button */}
      <motion.button 
        className="absolute top-4 right-4 z-10 text-gray-600 hover:text-primary transition-colors bg-white/80 backdrop-blur-sm p-2 rounded-full"
        onClick={(e) => {
          e.stopPropagation();
          // TODO: Implementar lógica de favoritos
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <Heart className="h-5 w-5" />
      </motion.button>

      {/* Image Container */}
      <div className="aspect-[4/5] overflow-hidden bg-gray-50">
        <motion.img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.4 }}
        />
      </div>

      {/* Product Info */}
      <div className="p-6 text-center bg-white">
        <h3 className="text-gray-800 font-ponomar text-lg mb-3 group-hover:text-primary transition-colors line-clamp-2 min-h-[20px]">
          {title}
        </h3>
        <div className="space-y-1">
          <motion.p 
            className="text-gray-500 font-ponomar text-sm line-through"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {formatPrice(price * 1.1)}
          </motion.p>
          <motion.p 
            className="text-primary font-ponomar text-2xl font-extrabold tracking-wider leading-relaxed"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            {formatPrice(price)}
          </motion.p>
          <motion.p 
            className="text-gray-500 font-ponomar text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            6x de {formatPrice(installmentPrice)} sem juros
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
