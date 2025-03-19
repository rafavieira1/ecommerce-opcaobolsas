import { useState } from 'react';
import { Search, Menu, X } from 'lucide-react';
import { Badge } from "@/components/ui/badge";
import { useNavigate, Link } from "react-router-dom";
import UserNav from '../user/UserNav';
import { CartDropdown } from '../cart/CartDropdown';

const SearchInput = ({ mobile = false }: { mobile?: boolean }) => (
  <div className="relative">
    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
      <Search className="h-5 w-5 text-gray-400" />
    </div>
    <input
      id={mobile ? "mobile-search" : "search"}
      className="block w-full pl-10 pr-3 py-2 border border-gray-200 rounded-md leading-5 bg-white placeholder-gray-400 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary sm:text-sm"
      placeholder="Buscar produtos..."
      type="search"
    />
  </div>
);

const navigationLinks = [
  { to: "/bolsas", label: "BOLSAS" },
  { to: "/mochilas", label: "MOCHILAS" },
  { to: "/malas", label: "MALAS" },
  { to: "/acessorios", label: "ACESSÓRIOS" },
  { to: "/promocoes", label: "PROMOÇÕES" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="bg-white border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center justify-center w-[120px] pt-10">
            <Link to="/" className="flex items-center">
              <img 
                src="/images/logo.png"
                alt="Opção Bolsas"
                className="w-[110px] object-contain"
              />
            </Link>
          </div>

          {/* Search */}
          <div className="hidden md:flex flex-1 justify-center">
            <div className="w-full max-w-[520px]">
              <SearchInput />
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center w-[180px] justify-end gap-2">
            <UserNav />
            <button
              className="md:hidden ml-4 p-2 text-gray-700 hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Categories Menu */}
        <div className="hidden md:flex items-center justify-center space-x-8 py-2">
          {navigationLinks.map((link) => (
            <Link key={link.to} to={link.to} className="text-gray-600 hover:text-primary transition-colors text-sm font-medium">
              {link.label}
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <div className="p-2">
              <SearchInput mobile />
            </div>
            {navigationLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-primary"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
