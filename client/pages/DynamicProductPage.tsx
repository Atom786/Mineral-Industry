import { useParams, Navigate } from "react-router-dom";
import { getProductByPath } from "@/data/productList";
import ProductPage from "@/components/ProductPage";

export default function DynamicProductPage() {
    const { productSlug } = useParams<{ productSlug: string }>();

    if (!productSlug) {
        return <Navigate to="/products" replace />;
    }

    // Construct the full path from the slug
    const productPath = `/products/${productSlug}`;
    const product = getProductByPath(productPath);

    if (!product) {
        return <Navigate to="/404" replace />;
    }

    return <ProductPage product={product} />;
}