import { Heart } from "lucide-react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

interface ProductCardProps {
  image: string;
  title: string;
  price: number;
  onClick?: () => void;
  className?: string;
}

// Criar função utilitária para formatação de preço
const formatPrice = (price: number) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(price);
};

const ProductCard = ({
  image,
  title,
  price,
  onClick,
  className,
}: ProductCardProps) => {
  // Calcular o preço parcelado (6x sem juros)
  const installmentPrice = price / 6;

  return (
    <div 
      className={cn(
        "group relative bg-white rounded-none overflow-hidden",
        className
      )}
      onClick={onClick}
    >
      {/* Favorite button */}
      <button className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/80 hover:bg-white transition-colors">
        <Heart className="h-5 w-5 text-gray-600 hover:text-primary" />
      </button>

      {/* Sale Badge */}
      <Badge className="absolute top-4 left-4 z-10 bg-rose-500 hover:bg-rose-600">
        Leve 3 Pague 2
      </Badge>

      {/* Image Container */}
      <div className="aspect-square overflow-hidden bg-gray-100 cursor-pointer">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Product Info */}
      <div className="p-4 text-center">
        <h3 className="text-gray-800 text-sm mb-2 group-hover:text-primary transition-colors line-clamp-2 min-h-[40px]">
          {title}
        </h3>
        <div className="space-y-1">
          <p className="text-gray-500 text-sm line-through">
            {formatPrice(price * 1.1)}
          </p>
          <p className="text-primary font-semibold">
            {formatPrice(price)}
          </p>
          <p className="text-gray-500 text-sm">
            6x de {formatPrice(installmentPrice)} sem juros
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
