import { useQuery } from "@tanstack/react-query";
import { Product } from "@/types/product";
import { api } from "@/mocks/api";

export const useProduct = (productId: string | undefined) => {
  return useQuery({
    queryKey: ['product', productId],
    queryFn: () => api.getProduct(productId!),
    enabled: !!productId,
  });
}; 