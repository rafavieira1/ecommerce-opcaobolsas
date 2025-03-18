import { useState } from 'react';
import ProductCard from '@/components/product/ProductCard';
import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Mail, Phone, Heart } from 'lucide-react';

// Temporary mock data
const featuredProducts = [
  {
    id: 1,
    title: "Bolsa Elegante Couro Genuíno Preta",
    price: 299.99,
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&q=80&w=1000",
  },
  {
    id: 2,
    title: "Bolsa Casual Moderna Off-White",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&q=80&w=1000",
  },
  {
    id: 3,
    title: "Bolsa Executiva Estruturada Marrom",
    price: 399.99,
    image: "https://images.unsplash.com/photo-1573346544005-4e314e2e3159?auto=format&fit=crop&q=80&w=1000",
  },
  {
    id: 4,
    title: "Bolsa Transversal Casual Bege",
    price: 159.99,
    image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&q=80&w=1000",
  },
  // Adicionar mais produtos para melhor visualização do grid
  {
    id: 5,
    title: "Bolsa Shopper Grande Nude",
    price: 259.99,
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&q=80&w=1000",
  },
  {
    id: 6,
    title: "Bolsa Bucket Texturizada Verde",
    price: 179.99,
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&q=80&w=1000",
  },
  {
    id: 7,
    title: "Bolsa Clutch Festa Dourada",
    price: 149.99,
    image: "https://images.unsplash.com/photo-1573346544005-4e314e2e3159?auto=format&fit=crop&q=80&w=1000",
  },
  {
    id: 8,
    title: "Bolsa Tote Clássica Vermelha",
    price: 289.99,
    image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&q=80&w=1000",
  },
];

const Index = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[80vh] bg-[#E8F5E9] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="max-w-lg">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Leve 3, Pague 2
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Desconto sobre o valor do produto de menor preço, aplicado automaticamente no carrinho.
            </p>
            <Button
              className="bg-primary hover:bg-primary-hover text-white text-lg px-8 py-6 h-auto"
              size="lg"
            >
              MONTE AGORA SEU KIT
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16 bg-white">
        <div className="max-w-[2000px] mx-auto">
          <div className="flex items-center justify-between mb-8 px-4">
            <h2 className="text-xl font-bold text-gray-900">
              PRODUTOS EM DESTAQUE
            </h2>
            <a href="/produtos" className="text-primary text-sm hover:underline">
              Veja mais produtos →
            </a>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-1">
            {featuredProducts.map((product) => (
              <div key={product.id} className="relative group">
                <div className="absolute top-2 left-2 z-10">
                  <span className="bg-red-500 text-white text-xs px-2 py-1 rounded">SALE</span>
                </div>
                <div className="absolute top-2 right-2 z-10">
                  <button className="text-gray-600 hover:text-red-500 transition-colors">
                    <Heart className="w-6 h-6" />
                  </button>
                </div>
                <div className="aspect-[5/5] overflow-hidden bg-gray-100">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-sm font-medium text-gray-900 mb-2">
                    {product.title}
                  </h3>
                  <div className="flex flex-col">
                    <span className="text-lg font-bold text-gray-900">
                      R${product.price.toFixed(2)}
                    </span>
                    <span className="text-sm text-gray-600">
                      6x de R${(product.price / 6).toFixed(2)} sem juros
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Institutional */}
            <div>
              <h3 className="font-bold text-gray-900 mb-4">INSTITUCIONAL</h3>
              <ul className="space-y-2">
                <li><a href="/quem-somos" className="text-gray-600 hover:text-primary text-sm">Quem Somos</a></li>
                <li><a href="/contato" className="text-gray-600 hover:text-primary text-sm">Contato</a></li>
                <li><a href="https://wa.me/5551996411191" className="text-gray-600 hover:text-primary text-sm">WhatsApp</a></li>
              </ul>
            </div>

            {/* Need Help */}
            <div>
              <h3 className="font-bold text-gray-900 mb-4">PRECISA DE AJUDA?</h3>
              <ul className="space-y-2">
                <li><a href="/politica-trocas" className="text-gray-600 hover:text-primary text-sm">Política de Trocas e Devoluções</a></li>
                <li><a href="/privacidade" className="text-gray-600 hover:text-primary text-sm">Política de Privacidade</a></li>
                <li><a href="/envio" className="text-gray-600 hover:text-primary text-sm">Informações de envio</a></li>
                <li><a href="/frete" className="text-gray-600 hover:text-primary text-sm">Frete Grátis</a></li>
                <li><a href="/pagamentos" className="text-gray-600 hover:text-primary text-sm">Pagamentos</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-bold text-gray-900 mb-4">ENTRE EM CONTATO</h3>
              <ul className="space-y-2">
                <li className="text-gray-600 text-sm flex items-center gap-2">
                  <Phone size={16} />
                  (51) 99641-1191
                </li>
                <li className="text-gray-600 text-sm flex items-center gap-2">
                  <Mail size={16} />
                  hello@thunderpod.com.br
                </li>
                <li className="text-gray-600 text-sm">
                  Rua Silvio Bueno, 308<br />
                  Centro - Jaguariúna - SP<br />
                  CEP 13910-005
                </li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h3 className="font-bold text-gray-900 mb-4">NEWSLETTER</h3>
              <p className="text-gray-600 text-sm mb-4">INSCREVA-SE E RECEBA NOVIDADES</p>
              <form className="space-y-3">
                <input
                  type="text"
                  placeholder="Nome"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                />
                <input
                  type="email"
                  placeholder="E-mail"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                />
                <input
                  type="tel"
                  placeholder="Telefone com DDD"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                />
                <button className="w-full bg-black text-white py-2 rounded-md text-sm hover:bg-gray-800 transition-colors">
                  INSCREVER-SE
                </button>
              </form>
            </div>
          </div>

          {/* Social Media & Copyright */}
          <div className="mt-16 pt-8 border-t border-gray-200">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <a href="https://instagram.com" className="text-gray-600 hover:text-primary">
                  <Instagram size={20} />
                </a>
                <a href="https://facebook.com" className="text-gray-600 hover:text-primary">
                  <Facebook size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
