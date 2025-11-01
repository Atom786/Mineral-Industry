import { getProductByPath } from "@/data/productList";
import ProductPage from "@/components/ProductPage";
import { Navigate } from "react-router-dom";

export default function DolomitePowder() {
  const product = getProductByPath("/products/dolomite-powder");
  
  if (!product) {
    return <Navigate to="/products" replace />;
  }

  return <ProductPage product={product} />;
}
