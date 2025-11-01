import { getProductByPath } from "@/data/productList";
import ProductPage from "@/components/ProductPage";
import { Navigate } from "react-router-dom";

export default function CalcitePowder() {
  const product = getProductByPath("/products/calcite-powder");
  
  if (!product) {
    return <Navigate to="/products" replace />;
  }

  return <ProductPage product={product} />;
}
