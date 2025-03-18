import { useNavigate } from 'react-router-dom';
import { Heart, ShoppingBag, CreditCard, MessageSquare, ThumbsUp, User2 } from 'lucide-react';
import { useUser } from '@/hooks/useUser';

const Profile = () => {
  const navigate = useNavigate();
  const { data: user, isLoading, error } = useUser();

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (error || !user) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <p className="text-gray-500">Erro ao carregar dados do usuário. Por favor, tente novamente.</p>
          <button
            onClick={() => navigate('/auth')}
            className="mt-4 px-4 py-2 bg-primary text-white rounded hover:bg-primary/90"
          >
            Fazer Login
          </button>
        </div>
      </div>
    );
  }

  const shortcuts = [
    {
      icon: <ShoppingBag className="w-6 h-6 text-primary" />,
      title: "MEUS PEDIDOS",
      description: "Veja histórico e acompanhe suas compras."
    },
    {
      icon: <User2 className="w-6 h-6 text-primary" />,
      title: "MEUS DADOS",
      description: "Altere seus dados cadastrados, endereços ou cadastre um novo endereço."
    },
    {
      icon: <CreditCard className="w-6 h-6 text-primary" />,
      title: "CARTEIRA",
      description: "Gerencie seus cartões, créditos e resgate gift card."
    },
    {
      icon: <MessageSquare className="w-6 h-6 text-primary" />,
      title: "PROTOCOLOS",
      description: "Aqui você encontra seus protocolos de atendimento."
    },
    {
      icon: <ThumbsUp className="w-6 h-6 text-primary" />,
      title: "AVALIAÇÕES",
      description: "Avalie suas compras e visualize suas avaliações e comentários."
    },
    {
      icon: <Heart className="w-6 h-6 text-primary" />,
      title: "FAVORITOS",
      description: "Consulte sua lista de produtos favoritados."
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center">
            {user.avatar ? (
              <img
                src={user.avatar}
                alt={user.name}
                className="w-full h-full rounded-full object-cover"
              />
            ) : (
              <User2 className="w-12 h-12 text-gray-500" />
            )}
          </div>
          <div>
            <h1 className="text-2xl font-bold">Bem-vindo, {user.name}</h1>
            <p className="text-gray-600">{user.email}</p>
          </div>
          <button
            onClick={() => navigate('/auth')}
            className="ml-auto px-4 py-2 bg-primary text-white rounded hover:bg-primary/90"
          >
            EDITAR DADOS
          </button>
        </div>

        <h2 className="text-xl font-semibold mb-6 text-primary">ATALHOS</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {shortcuts.map((shortcut, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm border hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-primary/10 rounded">
                  {shortcut.icon}
                </div>
                <div>
                  <h3 className="font-semibold mb-2">{shortcut.title}</h3>
                  <p className="text-sm text-gray-600">{shortcut.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile; 