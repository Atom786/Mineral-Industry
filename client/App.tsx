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
import DynamicProductPage from "./pages/DynamicProductPage";
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

          {/* Dynamic Product Pages - handles all products from productList.js */}
          <Route path="/products/:productSlug" element={<DynamicProductPage />} />

          {/* Catch all - 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

const rootElement = document.getElementById("root") as any;

if (rootElement) {
  if (!rootElement._reactRootContainer) {
    rootElement._reactRootContainer = createRoot(rootElement);
  }
  rootElement._reactRootContainer.render(<App />);
}

if (import.meta.hot) {
  import.meta.hot.accept();
}
