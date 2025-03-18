import { useQuery } from '@tanstack/react-query';
import { User } from '@/types/user';

export const useUser = () => {
  return useQuery<User>({
    queryKey: ['user'],
    queryFn: async () => {
      // Recupera os dados do usuário do localStorage
      const userData = localStorage.getItem('user');
      
      if (!userData) {
        throw new Error('User not found');
      }

      return JSON.parse(userData);
    },
    retry: false, // Não tenta novamente se falhar
    staleTime: Infinity, // Mantém os dados em cache indefinidamente
  });
}; 