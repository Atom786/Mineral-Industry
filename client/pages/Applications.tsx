import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";

const applications = [
  {
    title: "Construction Industry",
    icon: "🏗️",
    description: "Dolomite and calcite used in concrete, mortar, and construction aggregates for structural applications",
  },
  {
    title: "Ceramic & Tiles",
    icon: "🎨",
    description: "Premium minerals used in ceramic tiles, sanitaryware, and porcelain manufacturing",
  },
  {
    title: "Glass Manufacturing",
    icon: "🔵",
    description: "High-purity minerals essential for producing transparent and colored glass products",
  },
  {
    title: "Chemical Industry",
    icon: "⚗️",
    description: "Industrial-grade minerals used in chemical production and processing applications",
  },
  {
    title: "Paint & Coatings",
    icon: "🎭",
    description: "Calcite powder used as filler and extender in paints, coatings, and pigments",
  },
  {
    title: "Plastic & Polymers",
    icon: "🔧",
    description: "Mineral fillers for improving strength, durability, and thermal properties of plastics",
  },
  {
    title: "Paper & Pulp",
    icon: "📄",
    description: "Fine minerals used in paper coating and filling for improved finish and brightness",
  },
  {
    title: "Pharmaceutical",
    icon: "💊",
    description: "Ultra-pure minerals meeting pharmaceutical and food-grade standards",
  },
];

export default function Applications() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary/80 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Applications</h1>
          <p className="text-xl text-white/90 max-w-2xl">
            Discover how our mineral products are used across diverse industries
          </p>
        </div>
      </section>

      {/* Applications Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {applications.map((app, idx) => (
              <div
                key={idx}
                className="p-6 bg-white border border-border rounded-lg hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="text-4xl">{app.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-primary mb-2">{app.title}</h3>
                    <p className="text-foreground/70">{app.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Info Section */}
          <div className="p-8 bg-muted/30 rounded-lg">
            <h2 className="text-2xl font-bold text-primary mb-6">Industry-Specific Solutions</h2>
            <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
              Our minerals are specially processed and graded to meet the specific requirements of each industry. 
              Whether you need ultra-fine particles for paint, coarse aggregates for construction, or chemically 
              pure minerals for pharmaceuticals, we have the solution.
            </p>
            <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
              Our technical team works closely with customers to understand their specific needs and provide 
              customized mineral solutions that ensure optimal performance and cost-effectiveness.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-bold text-primary mb-3">Quality Assurance</h3>
                <ul className="space-y-2 text-foreground/70">
                  <li>✓ ISO certified processing</li>
                  <li>✓ Strict quality control</li>
                  <li>✓ Consistent specifications</li>
                  <li>✓ Regular testing</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-primary mb-3">Certifications</h3>
                <ul className="space-y-2 text-foreground/70">
                  <li>✓ ISO 9001:2015</li>
                  <li>✓ Environmental compliance</li>
                  <li>✓ Export standards met</li>
                  <li>✓ Industry certifications</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Need Minerals for Your Industry?</h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Let's discuss your specific requirements and find the perfect mineral solution for your application
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
          >
            Contact Us Today
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </Layout>
  );
}
