import { Link } from "react-router-dom";
import { ArrowRight, Award, Zap, Truck, Clock } from "lucide-react";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";

const products = [
  {
    id: 1,
    name: "Dolomite Powder",
    path: "/products/dolomite-powder",
    image: "🪨",
  },
  {
    id: 2,
    name: "Dolomite Sand",
    path: "/products/dolomite-sand",
    image: "🏜️",
  },
  {
    id: 3,
    name: "Dolomite Lumps",
    path: "/products/dolomite-lumps",
    image: "⛏️",
  },
  {
    id: 4,
    name: "Calcite Powder",
    path: "/products/calcite-powder",
    image: "✨",
  },
  {
    id: 5,
    name: "Marble Powder",
    path: "/products/marble-powder",
    image: "🎨",
  },
  {
    id: 6,
    name: "Soap Stone",
    path: "/products/soap-stone",
    image: "💎",
  },
];

const highlights = [
  {
    number: "01",
    title: "Quality Materials",
    description:
      "Premium grade minerals sourced and processed to international standards",
    icon: Award,
  },
  {
    number: "02",
    title: "Expert Team",
    description: "Experienced professionals with decades of industry expertise",
    icon: Zap,
  },
  {
    number: "03",
    title: "Timely Delivery",
    description: "Reliable logistics and on-time delivery to all destinations",
    icon: Truck,
  },
  {
    number: "04",
    title: "24/7 Support",
    description: "Round-the-clock customer support and technical assistance",
    icon: Clock,
  },
];

export default function Index() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark min-h-[500px] md:min-h-screen flex items-center text-white overflow-hidden">
        {/* Animated Background Elements */}
        <motion.div
          className="absolute inset-0 opacity-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            className="absolute top-20 left-10 w-72 h-72 bg-accent rounded-full mix-blend-multiply filter blur-3xl"
            animate={{
              y: [0, 50, 0],
              x: [0, 30, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-10 right-10 w-72 h-72 bg-accent rounded-full mix-blend-multiply filter blur-3xl"
            animate={{
              y: [0, -50, 0],
              x: [0, -30, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          />
        </motion.div>

        <div className="container mx-auto px-4 relative z-10 py-20 md:py-0">
          <div className="max-w-2xl">
            <motion.h1
              className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Premium Industrial Minerals & Products
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Leading supplier of high-quality minerals for industries
              worldwide. With over 15 years of excellence, we deliver superior
              products and unmatched service.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Link
                to="/contact"
                className="bg-accent text-accent-foreground px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity inline-flex items-center justify-center gap-2"
              >
                Get Your Quote
                <ArrowRight size={20} />
              </Link>
              <Link
                to="/products"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors inline-flex items-center justify-center gap-2"
              >
                View Products
                <ArrowRight size={20} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-gradient-to-br from-primary to-primary/70 rounded-lg h-96 flex items-center justify-center text-6xl">
                🏭
              </div>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Welcome To Minerals Co.
              </h2>
              <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
                With a commitment to excellence since 2010, Minerals Co. has
                become a trusted name in industrial minerals distribution. Our
                state-of-the-art manufacturing facilities and rigorous quality
                control ensure every product meets the highest international
                standards.
              </p>
              <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
                We produce over 5000+ MT of minerals monthly, supplying
                industries across construction, ceramics, glass, chemicals, and
                more. Our efficient distribution network ensures timely delivery
                to every corner of the country.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all"
              >
                Learn More About Us
                <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Our Products
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Comprehensive range of industrial minerals tailored to meet
              diverse industry requirements
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <Link
                key={product.id}
                to={product.path}
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden group"
              >
                <div className="bg-gradient-to-br from-primary/10 to-accent/10 h-48 flex items-center justify-center text-6xl group-hover:scale-110 transition-transform">
                  {product.image}
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-lg text-primary group-hover:text-accent transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-sm text-foreground/60 mt-2">
                    High-quality mineral product for industrial applications
                  </p>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              View All Products
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Buy From Us */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Why Buy From Us?
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-accent text-white">
                      ✓
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-primary mb-2">
                      Premium Quality
                    </h3>
                    <p className="text-foreground/70">
                      All minerals undergo rigorous quality testing to ensure
                      they meet international standards
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-accent text-white">
                      ✓
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-primary mb-2">
                      Reliable Supply Chain
                    </h3>
                    <p className="text-foreground/70">
                      Strategic distribution network ensures timely delivery
                      across all regions
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-accent text-white">
                      ✓
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-primary mb-2">
                      Competitive Pricing
                    </h3>
                    <p className="text-foreground/70">
                      Best market prices without compromising on quality and
                      service excellence
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-accent text-white">
                      ✓
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-primary mb-2">
                      Expert Support
                    </h3>
                    <p className="text-foreground/70">
                      Dedicated team ready to assist with technical guidance and
                      custom requirements
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary to-primary/70 rounded-lg h-96 flex items-center justify-center text-6xl">
              ⚡
            </div>
          </div>
        </div>
      </section>

      {/* Quality Highlights */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Our Quality Promise
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Excellence in every aspect of our operations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((highlight) => {
              const IconComponent = highlight.icon;
              return (
                <div
                  key={highlight.number}
                  className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-accent">
                      {highlight.number}
                    </span>
                  </div>
                  <div className="mb-4 text-primary">
                    <IconComponent size={40} />
                  </div>
                  <h3 className="font-bold text-lg text-primary mb-2">
                    {highlight.title}
                  </h3>
                  <p className="text-foreground/70">{highlight.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact us today for a free quote and discover how we can meet your
            mineral supply needs
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
          >
            Get Your Quote Now
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </Layout>
  );
}
