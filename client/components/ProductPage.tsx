import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";

interface ProductPageProps {
    product: {
        id: number;
        name: string;
        path: string;
        image: string;
        description: string;
        specifications: string[];
        applications: string[];
        features: string[];
    };
}

export default function ProductPage({ product }: ProductPageProps) {
    return (
        <Layout>
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-primary to-primary/80 text-white py-16 md:py-24">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">
                        {product.name}
                    </h1>
                    <p className="text-xl text-white/90 max-w-2xl">
                        Premium grade {product.name.toLowerCase()} for industrial applications
                    </p>
                </div>
            </section>

            {/* Product Details */}
            <section className="py-16 md:py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
                        {/* Product Image */}
                        <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg h-96 flex items-center justify-center text-8xl">
                            {product.image}
                        </div>

                        {/* Product Info */}
                        <div>
                            <h2 className="text-3xl font-bold text-primary mb-6">
                                Product Overview
                            </h2>
                            <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
                                {product.description}
                            </p>

                            <h3 className="text-xl font-bold text-primary mb-4">
                                Key Features
                            </h3>
                            <ul className="space-y-3 mb-8">
                                {product.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-start gap-3">
                                        <span className="text-accent font-bold">✓</span>
                                        <span className="text-foreground/80">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <Link
                                to="/contact"
                                className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
                            >
                                Request Quote
                                <ArrowRight size={20} />
                            </Link>
                        </div>
                    </div>

                    {/* Specifications */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 my-16 py-16 border-y border-border">
                        <div>
                            <h3 className="text-2xl font-bold text-primary mb-6">
                                Technical Specifications
                            </h3>
                            <div className="space-y-4">
                                {product.specifications.map((spec, idx) => (
                                    <div key={idx} className="flex justify-between items-center pb-2 border-b border-border">
                                        <span className="text-foreground/70">{spec.split(':')[0] || spec}</span>
                                        <span className="font-semibold text-primary">
                                            {spec.includes(':') ? spec.split(':')[1]?.trim() : '✓'}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h3 className="text-2xl font-bold text-primary mb-6">
                                Packaging & Delivery
                            </h3>
                            <div className="space-y-4">
                                <div>
                                    <h4 className="font-semibold text-primary mb-2">
                                        Standard Packaging
                                    </h4>
                                    <p className="text-foreground/70">
                                        25 kg bags, 50 kg bags, 1000 kg jumbo bags
                                    </p>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-primary mb-2">
                                        Minimum Order Quantity
                                    </h4>
                                    <p className="text-foreground/70">500 kg (20 bags)</p>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-primary mb-2">
                                        Delivery Time
                                    </h4>
                                    <p className="text-foreground/70">
                                        7-14 days from order confirmation
                                    </p>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-primary mb-2">
                                        Shelf Life
                                    </h4>
                                    <p className="text-foreground/70">
                                        24 months in dry storage conditions
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Applications */}
                    <div className="bg-muted/30 rounded-lg p-8 mb-16">
                        <h3 className="text-2xl font-bold text-primary mb-6">
                            Applications & Industries
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <h4 className="font-semibold text-primary mb-2">
                                    Primary Applications
                                </h4>
                                <ul className="space-y-2 text-foreground/70">
                                    {product.applications.map((app, idx) => (
                                        <li key={idx}>✓ {app}</li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-semibold text-primary mb-2">
                                    Key Benefits
                                </h4>
                                <ul className="space-y-2 text-foreground/70">
                                    {product.features.map((feature, idx) => (
                                        <li key={idx}>✓ {feature}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Related Products */}
                    <div className="mb-16">
                        <h3 className="text-2xl font-bold text-primary mb-6">
                            Related Products
                        </h3>
                        <div className="text-center">
                            <Link
                                to="/products"
                                className="inline-flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all"
                            >
                                View All Products
                                <ArrowRight size={20} />
                            </Link>
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="text-center p-8 bg-primary text-white rounded-lg">
                        <h3 className="text-2xl font-bold mb-4">
                            Interested in Our {product.name}?
                        </h3>
                        <p className="text-white/90 mb-6">
                            Contact our sales team for pricing, bulk orders, or custom specifications
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                to="/contact"
                                className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
                            >
                                Get Quote
                                <ArrowRight size={20} />
                            </Link>
                            <Link
                                to="/products"
                                className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                            >
                                View All Products
                                <ArrowRight size={20} />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
}