import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";

export default function DolomitePowder() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary/80 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Dolomite Powder</h1>
          <p className="text-xl text-white/90 max-w-2xl">
            Premium grade fine dolomite powder for industrial applications
          </p>
        </div>
      </section>

      {/* Product Details */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Product Image */}
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg h-96 flex items-center justify-center text-8xl">
              🪨
            </div>

            {/* Product Info */}
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">Product Overview</h2>
              <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
                Our Dolomite Powder is a fine-ground mineral product with exceptional purity and consistency. 
                Produced using advanced processing techniques, it meets stringent international quality standards.
              </p>

              <h3 className="text-xl font-bold text-primary mb-4">Key Features</h3>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold">✓</span>
                  <span className="text-foreground/80">99% CaCO₃ + MgCO₃ purity</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold">✓</span>
                  <span className="text-foreground/80">Consistent fine mesh size</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold">✓</span>
                  <span className="text-foreground/80">Low iron and impurities content</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold">✓</span>
                  <span className="text-foreground/80">ISO 9001:2015 certified</span>
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
                  <span className="text-foreground/70">Purity</span>
                  <span className="font-semibold text-primary">99%</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-border">
                  <span className="text-foreground/70">Mesh Size</span>
                  <span className="font-semibold text-primary">200-300 Mesh</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-border">
                  <span className="text-foreground/70">Bulk Density</span>
                  <span className="font-semibold text-primary">1.4-1.5 g/cm³</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-border">
                  <span className="text-foreground/70">Moisture Content</span>
                  <span className="font-semibold text-primary">&lt; 0.5%</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-border">
                  <span className="text-foreground/70">pH Value</span>
                  <span className="font-semibold text-primary">9-10</span>
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
                  <p className="text-foreground/70">500 kg (20 bags)</p>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-2">Delivery Time</h4>
                  <p className="text-foreground/70">7-14 days from order confirmation</p>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-2">Shelf Life</h4>
                  <p className="text-foreground/70">24 months in dry storage conditions</p>
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
                  <li>✓ Ceramic and tile manufacturing</li>
                  <li>✓ Glass production</li>
                  <li>✓ Construction materials</li>
                  <li>✓ Chemical processing</li>
                  <li>✓ Paint and coatings</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-primary mb-2">Industries Served</h4>
                <ul className="space-y-2 text-foreground/70">
                  <li>✓ Building & Construction</li>
                  <li>✓ Ceramics & Tiles</li>
                  <li>✓ Glass Manufacturing</li>
                  <li>✓ Chemical Industry</li>
                  <li>✓ Refractory Materials</li>
                </ul>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center p-8 bg-primary text-white rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Interested in Our Dolomite Powder?</h3>
            <p className="text-white/90 mb-6">
              Contact our sales team for pricing, bulk orders, or custom specifications
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
