import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { auth, db } from '@/hooks/useFirebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  });
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      if (isLogin) {
        // Login com Firebase
        await signInWithEmailAndPassword(
          auth,
          formData.email,
          formData.password
        );

        toast({
          title: "Sucesso!",
          description: "Login realizado com sucesso",
        });
        
        navigate('/');
      } else {
        // Validações para cadastro
        if (formData.password !== formData.confirmPassword) {
          toast({
            variant: "destructive",
            title: "Erro",
            description: "As senhas não coincidem"
          });
          setIsLoading(false);
          return;
        }

        if (!formData.fullName || !formData.email || !formData.phone || !formData.password) {
          toast({
            variant: "destructive",
            title: "Erro",
            description: "Por favor, preencha todos os campos"
          });
          setIsLoading(false);
          return;
        }

        console.log('Iniciando criação de usuário...');

        // Criar usuário com Firebase
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          formData.email,
          formData.password
        );

        console.log('Usuário criado com sucesso. UID:', userCredential.user.uid);

        // Criar o documento do perfil no Firestore
        const profileData = {
          full_name: formData.fullName,
          phone: formData.phone,
          email: formData.email,
          created_at: new Date().toISOString()
        };

        console.log('Criando perfil com dados:', profileData);

        // Inserir informações adicionais do usuário no Firestore
        const profileRef = doc(db, 'profiles', userCredential.user.uid);
        await setDoc(profileRef, profileData);

        console.log('Perfil criado com sucesso');

        toast({
          title: "Sucesso!",
          description: "Conta criada com sucesso",
        });

        navigate('/');
      }
    } catch (error: any) {
      console.error('Erro detalhado:', error);
      
      let errorMessage = "Ocorreu um erro. Por favor, tente novamente.";
      
      if (error.code === 'auth/network-request-failed') {
        errorMessage = "Erro de conexão com o servidor. Verifique sua conexão com a internet.";
      } else if (error.code === 'auth/email-already-in-use') {
        errorMessage = "Este e-mail já está cadastrado.";
      } else if (error.code === 'auth/invalid-credential') {
        errorMessage = "E-mail ou senha inválidos.";
      } else if (error.code === 'auth/too-many-requests') {
        errorMessage = "Muitas tentativas de login. Tente novamente mais tarde.";
      } else if (error.code === 'auth/weak-password') {
        errorMessage = "A senha é muito fraca. Use pelo menos 6 caracteres.";
      } else if (error.code === 'auth/invalid-email') {
        errorMessage = "O formato do e-mail é inválido.";
      } else if (error.code === 'auth/operation-not-allowed') {
        errorMessage = "Operação não permitida. Entre em contato com o suporte.";
      } else if (error.code === 'auth/user-disabled') {
        errorMessage = "Esta conta foi desativada. Entre em contato com o suporte.";
      } else if (error.code === 'auth/missing-password') {
        errorMessage = "Por favor, informe uma senha.";
      } else if (error.code === 'auth/internal-error') {
        errorMessage = "Erro interno do servidor. Tente novamente mais tarde.";
      }
      
      toast({
        variant: "destructive",
        title: "Erro",
        description: errorMessage,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <button
        onClick={() => navigate('/')}
        className="flex items-center text-gray-600 hover:text-gray-900 mb-8"
      >
        <ArrowLeft className="h-5 w-5 mr-2" />
        Voltar
      </button>

      <div className="max-w-4xl mx-auto space-y-8">
        <div>
          <h2 className="text-center text-3xl font-extrabold text-gray-900">
            {isLogin ? "Iniciar Sessão" : "Criar Conta"}
          </h2>
        </div>
        <form className="mt-8 space-y-6 max-w-3xl mx-auto px-4" onSubmit={handleSubmit}>
          <div className="rounded-md space-y-6">
            {!isLogin && (
              <>
                <div>
                  <Label htmlFor="fullName">Nome Completo</Label>
                  <Input
                    id="fullName"
                    name="fullName"
                    type="text"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="mt-2 h-12"
                    disabled={isLoading}
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Telefone</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    className="mt-2 h-12"
                    disabled={isLoading}
                  />
                </div>
              </>
            )}
            <div>
              <Label htmlFor="email">E-mail</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-2 h-12 bg-[#F8F9FA]"
                disabled={isLoading}
              />
            </div>
            <div>
              <Label htmlFor="password">Senha</Label>
              <Input
                id="password"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                className="mt-2 h-12 bg-[#F8F9FA]"
                disabled={isLoading}
              />
            </div>
            {!isLogin && (
              <div>
                <Label htmlFor="confirmPassword">Confirme sua senha</Label>
                <Input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="mt-2 h-12"
                  disabled={isLoading}
                />
              </div>
            )}
          </div>

          <div className="mt-8">
            <Button
              type="submit"
              className="w-full bg-[#4CAF50] hover:bg-[#45a049] text-white h-12 rounded"
              disabled={isLoading}
            >
              {isLoading ? "Carregando..." : isLogin ? "Entrar" : "Criar Conta"}
            </Button>
          </div>
        </form>

        <div className="text-center">
          <button
            type="button"
            onClick={() => setIsLogin(!isLogin)}
            className="text-primary hover:underline text-sm"
            disabled={isLoading}
          >
            {isLogin ? "Não possui uma conta? Criar uma conta" : "Já possui uma conta? Fazer login"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Auth;
