import { useNavigate } from 'react-router-dom';
import { Heart, ShoppingBag, CreditCard, MessageSquare, ThumbsUp, User2 } from 'lucide-react';

const Profile = () => {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        {/* Cabeçalho do Perfil */}
        <div className="flex items-center gap-4 mb-8">
          <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center">
            <User2 className="w-12 h-12 text-gray-500" />
          </div>
          <div>
            <h1 className="text-2xl font-bold">Bem-vindo, Rafael Silva Vieira</h1>
            <p className="text-gray-600">rafavieira372@gmail.com</p>
          </div>
          <button
            onClick={() => navigate('/auth')}
            className="ml-auto px-4 py-2 bg-[#FF4D0D] text-white rounded hover:bg-[#FF4D0D]/90"
          >
            EDITAR DADOS
          </button>
        </div>

        <h2 className="text-xl font-semibold mb-6 text-[#FF4D0D]">ATALHOS</h2>

        {/* Grid de Atalhos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Meus Pedidos */}
          <div className="bg-white p-6 rounded-lg shadow-sm border hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4">
              <div className="p-2 bg-[#FF4D0D]/10 rounded">
                <ShoppingBag className="w-6 h-6 text-[#FF4D0D]" />
              </div>
              <div>
                <h3 className="font-semibold mb-2">MEUS PEDIDOS</h3>
                <p className="text-sm text-gray-600">Veja histórico e acompanhe suas compras.</p>
              </div>
            </div>
          </div>

          {/* Meus Dados */}
          <div className="bg-white p-6 rounded-lg shadow-sm border hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4">
              <div className="p-2 bg-[#FF4D0D]/10 rounded">
                <User2 className="w-6 h-6 text-[#FF4D0D]" />
              </div>
              <div>
                <h3 className="font-semibold mb-2">MEUS DADOS</h3>
                <p className="text-sm text-gray-600">Altere seus dados cadastrados, endereços ou cadastre um novo endereço.</p>
              </div>
            </div>
          </div>

          {/* Carteira */}
          <div className="bg-white p-6 rounded-lg shadow-sm border hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4">
              <div className="p-2 bg-[#FF4D0D]/10 rounded">
                <CreditCard className="w-6 h-6 text-[#FF4D0D]" />
              </div>
              <div>
                <h3 className="font-semibold mb-2">CARTEIRA</h3>
                <p className="text-sm text-gray-600">Gerencie seus cartões, créditos e resgate gift card.</p>
              </div>
            </div>
          </div>

          {/* Protocolos */}
          <div className="bg-white p-6 rounded-lg shadow-sm border hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4">
              <div className="p-2 bg-[#FF4D0D]/10 rounded">
                <MessageSquare className="w-6 h-6 text-[#FF4D0D]" />
              </div>
              <div>
                <h3 className="font-semibold mb-2">PROTOCOLOS</h3>
                <p className="text-sm text-gray-600">Aqui você encontra seus protocolos de atendimento.</p>
              </div>
            </div>
          </div>

          {/* Avaliações */}
          <div className="bg-white p-6 rounded-lg shadow-sm border hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4">
              <div className="p-2 bg-[#FF4D0D]/10 rounded">
                <ThumbsUp className="w-6 h-6 text-[#FF4D0D]" />
              </div>
              <div>
                <h3 className="font-semibold mb-2">AVALIAÇÕES</h3>
                <p className="text-sm text-gray-600">Avalie suas compras e visualize suas avaliações e comentários.</p>
              </div>
            </div>
          </div>

          {/* Favoritos */}
          <div className="bg-white p-6 rounded-lg shadow-sm border hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4">
              <div className="p-2 bg-[#FF4D0D]/10 rounded">
                <Heart className="w-6 h-6 text-[#FF4D0D]" />
              </div>
              <div>
                <h3 className="font-semibold mb-2">FAVORITOS</h3>
                <p className="text-sm text-gray-600">Consulte sua lista de produtos favoritados.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile; 