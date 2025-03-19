import { Link, useNavigate } from "react-router-dom";
import { User2, Heart } from "lucide-react";
import { useUser } from "@/hooks/useUser";
import { logout } from "@/lib/auth";
import { useQueryClient } from "@tanstack/react-query";
import { CartDropdown } from "../cart/CartDropdown";

const UserNav = () => {
  const { data: user } = useUser();
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    queryClient.setQueryData(['user'], null);
    queryClient.invalidateQueries({ queryKey: ['user'] });
    navigate('/auth');
  };

  return (
    <div className="flex items-center gap-4">
      <button className="hover:text-primary transition-colors">
        <Heart className="w-6 h-6" />
      </button>
      <CartDropdown />
      {!user ? (
        <Link
          to="/auth"
          className="flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors whitespace-nowrap"
        >
          <User2 className="w-6 h-6" />
          <span>Entrar/Cadastrar</span>
        </Link>
      ) : (
        <div className="relative group">
          <button className="flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors whitespace-nowrap">
            <User2 className="w-6 h-6" />
            <span>Bem-vindo, {user.name.split(' ')[0]}</span>
          </button>
          <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-300 hover:visible hover:opacity-100 z-50">
            <Link
              to="/profile"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
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
        </div>
      )}
    </div>
  );
};

export default UserNav; 