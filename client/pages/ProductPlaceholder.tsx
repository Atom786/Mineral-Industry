import { useParams, Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";

const productMap: Record<
  string,
  { icon: string; fullName: string; emoji: string }
> = {
  "dolomite-sand": { icon: "sand", fullName: "Dolomite Sand", emoji: "🏜️" },
  "dolomite-lumps": { icon: "lumps", fullName: "Dolomite Lumps", emoji: "⛏️" },
  "marble-powder": { icon: "marble", fullName: "Marble Powder", emoji: "🎨" },
  "soap-stone": { icon: "stone", fullName: "Soap Stone", emoji: "💎" },
};

export default function ProductPlaceholder() {
  const { product } = useParams();
  const productInfo = product ? productMap[product] : null;

  if (!productInfo) {
    return (
      <Layout>
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl font-bold text-primary mb-4">
              Product Not Found
            </h1>
            <Link
              to="/products"
              className="text-accent font-semibold hover:underline"
            >
              Back to Products
            </Link>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary/80 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {productInfo.fullName}
          </h1>
          <p className="text-xl text-white/90 max-w-2xl">
            Premium {productInfo.fullName.toLowerCase()} for industrial
            applications
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Product Image */}
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg h-96 flex items-center justify-center text-8xl">
              {productInfo.emoji}
            </div>

            {/* Product Info */}
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">
                Product Overview
              </h2>
              <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
                Our {productInfo.fullName} is a premium-grade mineral product
                produced using advanced processing techniques to meet
                international quality standards.
              </p>

              <h3 className="text-xl font-bold text-primary mb-4">
                Key Features
              </h3>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold">✓</span>
                  <span className="text-foreground/80">
                    Premium Grade Quality
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold">✓</span>
                  <span className="text-foreground/80">
                    Consistent Specifications
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold">✓</span>
                  <span className="text-foreground/80">ISO Certified</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold">✓</span>
                  <span className="text-foreground/80">
                    Bulk Orders Available
                  </span>
                </li>
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

          {/* Info Section */}
          <div className="bg-muted/30 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-primary mb-6">
              Product Details
            </h3>
            <p className="text-lg text-foreground/80 mb-6">
              Detailed specifications, applications, and pricing information for{" "}
              {productInfo.fullName}
              will be provided upon request.
            </p>
            <p className="text-foreground/70">
              Contact our sales team to learn more about this product, request
              samples, or get a competitive quote.
            </p>
          </div>

          {/* CTA */}
          <div className="mt-12 text-center p-8 bg-primary text-white rounded-lg">
            <h3 className="text-2xl font-bold mb-4">
              Interested in {productInfo.fullName}?
            </h3>
            <p className="text-white/90 mb-6">
              Contact our sales team for detailed specifications and pricing
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              Get in Touch
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
