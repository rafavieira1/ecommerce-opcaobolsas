import { useQuery } from '@tanstack/react-query';
import { User } from '@/types/user';

export const useUser = () => {
  return useQuery<User>({
    queryKey: ['user'],
    queryFn: async () => {
      try {
        const userData = localStorage.getItem('user');
        if (!userData) throw new Error('User not found');
        return JSON.parse(userData);
      } catch (error) {
        throw new Error('Erro ao recuperar dados do usuário');
      }
    },
    retry: false,
    staleTime: Infinity,
    gcTime: 1000 * 60 * 60 * 24, // 24 horas - tempo até que os dados inativos sejam removidos do cache
  });
}; 