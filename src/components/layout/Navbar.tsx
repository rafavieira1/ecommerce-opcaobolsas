import { useState } from 'react';
import { Search, Menu, X } from 'lucide-react';
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
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
          <div className="flex-shrink-0 flex items-center">
            <a href="/" className="text-[#4CAF50] font-semibold text-xl">
              Opção Bolsas
            </a>
          </div>

          {/* Search */}
          <div className="hidden md:flex flex-1 justify-center max-w-lg">
            <div className="w-full max-w-lg lg:max-w-xs">
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
          <div className="flex items-center">
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
          <a href="/bolsas" className="text-gray-600 hover:text-primary transition-colors text-sm font-medium">
            BOLSAS
          </a>
          <a href="/mochilas" className="text-gray-600 hover:text-primary transition-colors text-sm font-medium">
            MOCHILAS
          </a>
          <a href="/malas" className="text-gray-600 hover:text-primary transition-colors text-sm font-medium">
            MALAS
          </a>
          <a href="/acessorios" className="text-gray-600 hover:text-primary transition-colors text-sm font-medium">
            ACESSÓRIOS
          </a>
          <a href="/promocoes" className="text-gray-600 hover:text-primary transition-colors text-sm font-medium">
            PROMOÇÕES
          </a>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden py-4 animate-fade-in border-t">
          <div className="flex flex-col space-y-4 px-4">
            <a href="/bolsas" className="text-gray-600 hover:text-primary transition-colors">
              BOLSAS
            </a>
            <a href="/mochilas" className="text-gray-600 hover:text-primary transition-colors">
              MOCHILAS
            </a>
            <a href="/malas" className="text-gray-600 hover:text-primary transition-colors">
              MALAS
            </a>
            <a href="/acessorios" className="text-gray-600 hover:text-primary transition-colors">
              ACESSÓRIOS
            </a>
            <a href="/promocoes" className="text-gray-600 hover:text-primary transition-colors">
              PROMOÇÕES
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
