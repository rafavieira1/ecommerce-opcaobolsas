import { User } from '@/types/user';

export const login = (email: string, password: string) => {
  // Simula um login - em produção isso seria uma chamada à API
  const user: User = {
    id: '1',
    name: email.split('@')[0], // Usa a parte antes do @ como nome
    email,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };

  // Salva os dados do usuário no localStorage
  localStorage.setItem('user', JSON.stringify(user));
  
  return user;
};

export const logout = () => {
  localStorage.removeItem('user');
};

export const isAuthenticated = (): boolean => {
  return localStorage.getItem('user') !== null;
}; 