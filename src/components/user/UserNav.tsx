import { useNavigate } from 'react-router-dom';
import { User2, Heart, ShoppingBag, LogOut } from 'lucide-react';
import { auth, db } from '@/hooks/useFirebase';
import { useEffect, useState } from 'react';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { signOut } from 'firebase/auth';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useToast } from "@/components/ui/use-toast";

const UserNav = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    const createUserProfile = async (userId: string, email: string) => {
      try {
        const profileRef = doc(db, 'profiles', userId);
        await setDoc(profileRef, {
          full_name: 'Rafael Silva',  // Substitua pelo nome correto
          email: email,
          created_at: new Date().toISOString()
        }, { merge: true });
        console.log('Perfil criado/atualizado com sucesso');
        return true;
      } catch (error) {
        console.error('Erro ao criar perfil:', error);
        return false;
      }
    };

    const fetchUserData = async (userId: string, email: string) => {
      console.log('Iniciando busca de dados do usuário:', userId);
      setIsLoading(true);
      
      try {
        const userDocRef = doc(db, 'profiles', userId);
        console.log('Buscando documento:', userDocRef.path);
        
        const userDoc = await getDoc(userDocRef);
        console.log('Documento existe?', userDoc.exists());
        
        if (!userDoc.exists()) {
          console.log('Documento não encontrado, criando perfil...');
          const created = await createUserProfile(userId, email);
          if (created) {
            // Buscar o documento novamente após criar
            const newDoc = await getDoc(userDocRef);
            if (newDoc.exists()) {
              const userData = newDoc.data();
              const firstName = userData.full_name.split(' ')[0];
              setUserName(firstName);
            }
          }
        } else {
          const userData = userDoc.data();
          console.log('Dados completos do usuário:', userData);
          
          if (userData.full_name) {
            const firstName = userData.full_name.split(' ')[0];
            console.log('Primeiro nome:', firstName);
            setUserName(firstName);
          } else {
            console.log('Nome completo não encontrado nos dados');
            setUserName('Usuário');
          }
        }
      } catch (error) {
        console.error('Erro ao buscar dados do usuário:', error);
        setUserName('Usuário');
      } finally {
        setIsLoading(false);
      }
    };

    const unsubscribe = auth.onAuthStateChanged((user) => {
      console.log('Estado de autenticação mudou. User:', user?.email);
      setIsLoggedIn(!!user);
      
      if (user?.uid && user?.email) {
        fetchUserData(user.uid, user.email);
      } else {
        setUserName('');
        setIsLoading(false);
      }
    });

    return () => unsubscribe();
  }, []);

  const handleClick = () => {
    if (!isLoggedIn) {
      navigate('/auth');
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setUserName('');
      setIsLoading(false);
      toast({
        title: "Sucesso!",
        description: "Você saiu da sua conta",
      });
      navigate('/');
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Erro",
        description: "Erro ao sair da conta. Tente novamente.",
      });
    }
  };

  return (
    <div className="flex items-center gap-4">
      <button className="hover:text-gray-600">
        <Heart className="w-6 h-6" />
      </button>
      <button className="hover:text-gray-600">
        <ShoppingBag className="w-6 h-6" />
      </button>
      {isLoggedIn ? (
        <DropdownMenu>
          <DropdownMenuTrigger className="flex items-center gap-2 hover:text-gray-600">
            <User2 className="w-6 h-6" />
            <span className="text-sm whitespace-nowrap">
              {isLoading ? 'Carregando...' : userName ? `Bem-vindo, ${userName}` : 'Bem-vindo'}
            </span>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => navigate('/profile')}>
              Minha Conta
            </DropdownMenuItem>
            <DropdownMenuItem onClick={handleLogout} className="text-red-600">
              <LogOut className="w-4 h-4 mr-2" />
              Sair
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <button
          onClick={handleClick}
          className="flex items-center gap-2 hover:text-gray-600"
        >
          <User2 className="w-6 h-6" />
          <span className="text-sm whitespace-nowrap">
            Entrar/Cadastrar
          </span>
        </button>
      )}
    </div>
  );
};

export default UserNav; 