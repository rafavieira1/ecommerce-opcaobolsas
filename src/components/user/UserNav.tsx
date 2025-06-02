import { Link, useNavigate } from "react-router-dom";
import { User2, Heart } from "lucide-react";
import { useUser } from "@/hooks/useUser";
import { logout } from "@/lib/auth";
import { useQueryClient } from "@tanstack/react-query";
import { useState } from "react";

const UserNav = () => {
  const { data: user } = useUser();
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = () => {
    setIsMenuOpen(false);
    logout();
    queryClient.setQueryData(['user'], null);
    queryClient.invalidateQueries({ queryKey: ['user'] });
    navigate('/auth');
  };

  const handleProfileClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="flex items-center gap-4">
      <button className="hover:text-primary transition-colors">
        <Heart className="w-6 h-6" />
      </button>
      {!user ? (
        <Link
          to="/auth"
          className="flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors whitespace-nowrap"
        >
          <User2 className="w-6 h-6" />
          <span>Entrar/Cadastrar</span>
        </Link>
      ) : (
        <div className="relative">
          <button 
            className="flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors whitespace-nowrap"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <User2 className="w-6 h-6" />
            <span>Bem-vindo, {user.name.split(' ')[0]}</span>
          </button>
          {isMenuOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
              <Link
                to="/profile"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                onClick={handleProfileClick}
              >
                Meu Perfil
              </Link>
              <button
                onClick={handleLogout}
                className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Sair
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default UserNav; 