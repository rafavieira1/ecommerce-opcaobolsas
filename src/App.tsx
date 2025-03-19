import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./components/layout/MainLayout";
import Index from "./pages/Index";
import Auth from "./pages/Auth";
import NotFound from "./pages/NotFound";
import Profile from "./pages/Profile";
import BagsPage from "./pages/categories/Bags";
import BackpacksPage from "./pages/categories/Backpacks";
import SuitcasesPage from "./pages/categories/Suitcases";
import AccessoriesPage from "./pages/categories/Accessories";
import PromotionsPage from "./pages/categories/Promotions";
import ProductPage from "./pages/Product";
import { CartProvider } from "./contexts/CartContext";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <CartProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route element={<MainLayout />}>
              <Route path="/" element={<Index />} />
              <Route path="/auth" element={<Auth />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/bolsas" element={<BagsPage />} />
              <Route path="/mochilas" element={<BackpacksPage />} />
              <Route path="/malas" element={<SuitcasesPage />} />
              <Route path="/acessorios" element={<AccessoriesPage />} />
              <Route path="/promocoes" element={<PromotionsPage />} />
              <Route path="/product/:productId" element={<ProductPage />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </CartProvider>
  </QueryClientProvider>
);

export default App;
