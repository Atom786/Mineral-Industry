import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";
import { productList } from "@/data/productList";

export default function Products() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary/80 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Products</h1>
          <p className="text-xl text-white/90 max-w-2xl">
            Comprehensive range of high-quality industrial minerals for every
            industry need
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productList.map((product) => (
              <div
                key={product.id}
                className="border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="bg-gradient-to-br from-primary/10 to-accent/10 h-56 flex items-center justify-center text-6xl">
                  {product.image}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-2">
                    {product.name}
                  </h3>
                  <p className="text-foreground/70 mb-4">
                    {product.description}
                  </p>

                  <div className="mb-4">
                    <p className="text-sm font-semibold text-primary mb-2">
                      Specifications:
                    </p>
                    <ul className="space-y-1">
                      {product.specifications.map((spec, idx) => (
                        <li
                          key={idx}
                          className="text-sm text-foreground/60 flex items-center gap-2"
                        >
                          <span className="text-accent">✓</span> {spec}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <p className="text-sm font-semibold text-primary mb-2">
                      Applications:
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {product.applications.slice(0, 3).map((app, idx) => (
                        <span
                          key={idx}
                          className="text-xs bg-accent/10 text-accent px-2 py-1 rounded-full"
                        >
                          {app}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Link
                    to={product.path}
                    className="inline-flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all"
                  >
                    View Details
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 p-8 bg-muted/30 rounded-lg text-center">
            <h3 className="text-2xl font-bold text-primary mb-4">
              Custom Products Available
            </h3>
            <p className="text-foreground/70 mb-6 max-w-2xl mx-auto">
              Need a specific product or custom specification? We offer tailored
              solutions to meet your exact requirements. Contact our team for
              custom orders.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 py-2 rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              Request Custom Product
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Order?</h2>
          <p className="text-lg text-white/90 mb-8">
            Get a competitive quote for your mineral requirements today
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
          >
            Get a Quote
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </Layout>
  );
}
