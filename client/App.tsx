import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Products from "./pages/Products";
import Applications from "./pages/Applications";
import Contact from "./pages/Contact";
import DolomitePowder from "./pages/products/DolomitePowder";
import CalcitePowder from "./pages/products/CalcitePowder";
import ProductPlaceholder from "./pages/ProductPlaceholder";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/applications" element={<Applications />} />
          <Route path="/contact" element={<Contact />} />

          {/* Individual Product Pages */}
          <Route
            path="/products/dolomite-powder"
            element={<DolomitePowder />}
          />
          <Route path="/products/calcite-powder" element={<CalcitePowder />} />
          <Route path="/products/:product" element={<ProductPlaceholder />} />

          {/* Catch all - 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
