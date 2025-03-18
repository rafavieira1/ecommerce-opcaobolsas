import { useState } from 'react';
import { Search, Menu, X } from 'lucide-react';
import { Badge } from "@/components/ui/badge";
import { useNavigate, Link } from "react-router-dom";
import UserNav from '../user/UserNav';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartCount] = useState(0);
  const navigate = useNavigate();

  return (
    <nav className="bg-white border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center w-[180px]">
            <Link to="/" className="text-[#4CAF50] font-semibold text-xl">
              Opção Bolsas
            </Link>
          </div>

          {/* Search */}
          <div className="hidden md:flex flex-1 justify-center">
            <div className="w-full max-w-[520px]">
              <label htmlFor="search" className="sr-only">Buscar</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="search"
                  className="block w-full pl-10 pr-3 py-2 border border-gray-200 rounded-md leading-5 bg-white placeholder-gray-400 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary sm:text-sm"
                  placeholder="Buscar produtos..."
                  type="search"
                />
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center w-[180px] justify-end">
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
          <Link to="/bolsas" className="text-gray-600 hover:text-primary transition-colors text-sm font-medium">
            BOLSAS
          </Link>
          <Link to="/mochilas" className="text-gray-600 hover:text-primary transition-colors text-sm font-medium">
            MOCHILAS
          </Link>
          <Link to="/malas" className="text-gray-600 hover:text-primary transition-colors text-sm font-medium">
            MALAS
          </Link>
          <Link to="/acessorios" className="text-gray-600 hover:text-primary transition-colors text-sm font-medium">
            ACESSÓRIOS
          </Link>
          <Link to="/promocoes" className="text-gray-600 hover:text-primary transition-colors text-sm font-medium">
            PROMOÇÕES
          </Link>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden py-4 animate-fade-in border-t">
          <div className="px-4 pb-4">
            <label htmlFor="mobile-search" className="sr-only">Buscar</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                id="mobile-search"
                className="block w-full pl-10 pr-3 py-2 border border-gray-200 rounded-md leading-5 bg-white placeholder-gray-400 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary sm:text-sm"
                placeholder="Buscar produtos..."
                type="search"
              />
            </div>
          </div>
          <div className="flex flex-col space-y-4 px-4">
            <Link to="/bolsas" className="text-gray-600 hover:text-primary transition-colors">
              BOLSAS
            </Link>
            <Link to="/mochilas" className="text-gray-600 hover:text-primary transition-colors">
              MOCHILAS
            </Link>
            <Link to="/malas" className="text-gray-600 hover:text-primary transition-colors">
              MALAS
            </Link>
            <Link to="/acessorios" className="text-gray-600 hover:text-primary transition-colors">
              ACESSÓRIOS
            </Link>
            <Link to="/promocoes" className="text-gray-600 hover:text-primary transition-colors">
              PROMOÇÕES
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
