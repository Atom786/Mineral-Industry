import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";

export default function CalcitePowder() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary/80 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Calcite Powder</h1>
          <p className="text-xl text-white/90 max-w-2xl">
            High-purity calcite powder for diverse industrial applications
          </p>
        </div>
      </section>

      {/* Product Details */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Product Image */}
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg h-96 flex items-center justify-center text-8xl">
              ✨
            </div>

            {/* Product Info */}
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">Product Overview</h2>
              <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
                Our Calcite Powder is a pure, fine-ground product made from high-grade calcite mineral. 
                Perfect for applications requiring bright, white, and chemically pure material.
              </p>

              <h3 className="text-xl font-bold text-primary mb-4">Key Features</h3>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold">✓</span>
                  <span className="text-foreground/80">99.5% CaCO₃ purity</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold">✓</span>
                  <span className="text-foreground/80">Bright white color</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold">✓</span>
                  <span className="text-foreground/80">Ultra-fine particle size</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold">✓</span>
                  <span className="text-foreground/80">Low heavy metals content</span>
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

          {/* Specifications */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 my-16 py-16 border-y border-border">
            <div>
              <h3 className="text-2xl font-bold text-primary mb-6">Technical Specifications</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-2 border-b border-border">
                  <span className="text-foreground/70">CaCO₃ Content</span>
                  <span className="font-semibold text-primary">99.5%</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-border">
                  <span className="text-foreground/70">Mesh Size</span>
                  <span className="font-semibold text-primary">100-325 Mesh</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-border">
                  <span className="text-foreground/70">Brightness</span>
                  <span className="font-semibold text-primary">95%+</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-border">
                  <span className="text-foreground/70">Bulk Density</span>
                  <span className="font-semibold text-primary">1.2-1.3 g/cm³</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-border">
                  <span className="text-foreground/70">Moisture</span>
                  <span className="font-semibold text-primary">&lt; 0.3%</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary mb-6">Packaging & Delivery</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-primary mb-2">Standard Packaging</h4>
                  <p className="text-foreground/70">25 kg bags, 50 kg bags, 1000 kg jumbo bags</p>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-2">Minimum Order Quantity</h4>
                  <p className="text-foreground/70">250 kg (10 bags)</p>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-2">Delivery Time</h4>
                  <p className="text-foreground/70">5-10 days from order confirmation</p>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-2">Shelf Life</h4>
                  <p className="text-foreground/70">Indefinite in dry conditions</p>
                </div>
              </div>
            </div>
          </div>

          {/* Applications */}
          <div className="bg-muted/30 rounded-lg p-8 mb-16">
            <h3 className="text-2xl font-bold text-primary mb-6">Applications</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-primary mb-2">Primary Uses</h4>
                <ul className="space-y-2 text-foreground/70">
                  <li>✓ Paint and coatings filler</li>
                  <li>✓ Plastic and polymer filler</li>
                  <li>✓ Paper coating and filling</li>
                  <li>✓ Pharmaceutical applications</li>
                  <li>✓ Food industry filler</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-primary mb-2">Industries Served</h4>
                <ul className="space-y-2 text-foreground/70">
                  <li>✓ Paint & Coatings</li>
                  <li>✓ Plastics & Polymers</li>
                  <li>✓ Paper & Pulp</li>
                  <li>✓ Pharmaceuticals</li>
                  <li>✓ Food Processing</li>
                </ul>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center p-8 bg-primary text-white rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Need High-Purity Calcite Powder?</h3>
            <p className="text-white/90 mb-6">
              Contact us for competitive pricing and bulk orders
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
