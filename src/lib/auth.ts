import { User } from '@/types/user';

export const login = (email: string, password: string) => {
  // Adicionar validações básicas
  if (!email || !password) {
    throw new Error('Email e senha são obrigatórios');
  }

  if (!email.includes('@')) {
    throw new Error('Email inválido');
  }

  const user: User = {
    id: crypto.randomUUID(), // Gerar ID único
    name: email.split('@')[0],
    email,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };

  localStorage.setItem('user', JSON.stringify(user));
  return user;
};

export const logout = () => {
  localStorage.removeItem('user');
};

export const isAuthenticated = (): boolean => {
  return localStorage.getItem('user') !== null;
}; 