import { Link } from "react-router-dom";
import { ArrowRight, Award, Zap, Truck, Clock, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Layout from "@/components/Layout";
import "../styles/hero-banner.css";

// Hero Banner Media Array - Add your images and videos here
const heroMedia = [
  {
    id: 1,
    type: "image",
    src: "/images/hero/mining-operation-1.jpg",
    alt: "Premium mineral extraction facility"
  },
  {
    id: 2,
    type: "video",
    src: "/videos/hero/production-process.mp4",
    alt: "Industrial mineral processing"
  },
  {
    id: 3,
    type: "image",
    src: "/images/hero/quality-control.jpg",
    alt: "Quality control laboratory"
  },
  {
    id: 4,
    type: "image",
    src: "/images/hero/warehouse-facility.jpg",
    alt: "Modern warehouse facility"
  },
  {
    id: 5,
    type: "video",
    src: "/videos/hero/logistics-delivery.mp4",
    alt: "Logistics and delivery operations"
  }
];

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
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroMedia.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroMedia.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroMedia.length) % heroMedia.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <Layout>
      {/* Hero Banner Slider Section */}
      <section 
        className="hero-banner relative min-h-[500px] md:min-h-screen flex items-center text-white overflow-hidden"
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
      >
        {/* Media Background Slider */}
        <div className="absolute inset-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.8 }}
              className="absolute inset-0"
            >
              {heroMedia[currentSlide].type === "image" ? (
                <img
                  src={heroMedia[currentSlide].src}
                  alt={heroMedia[currentSlide].alt}
                  className="w-full h-full object-cover"
                />
              ) : (
                <video
                  src={heroMedia[currentSlide].src}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                />
              )}
              {/* Dark overlay for better text readability */}
              <div className="absolute inset-0 bg-black/50" />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="nav-arrow absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white p-2 md:p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
          aria-label="Previous slide"
        >
          <ChevronLeft size={24} />
        </button>
        
        <button
          onClick={nextSlide}
          className="nav-arrow absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white p-2 md:p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
          aria-label="Next slide"
        >
          <ChevronRight size={24} />
        </button>

        {/* Slide Indicators */}
        <div className="slide-indicators absolute bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {heroMedia.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`slide-indicator w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? "bg-accent scale-125" 
                  : "bg-white/50 hover:bg-white/75"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Content Overlay */}
        <div className="content-overlay container mx-auto px-4 relative z-10 py-16 md:py-20">
          <div className="max-w-2xl">
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight drop-shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Premium Industrial Minerals & Products
            </motion.h1>
            <motion.p
              className="text-base md:text-lg lg:text-xl text-white/90 mb-6 md:mb-8 leading-relaxed drop-shadow-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Leading supplier of high-quality minerals for industries
              worldwide. With over 15 years of excellence, we deliver superior
              products and unmatched service.
            </motion.p>
            <motion.div
              className="button-group flex flex-col sm:flex-row gap-3 md:gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Link
                to="/contact"
                className="bg-accent text-accent-foreground px-6 md:px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity inline-flex items-center justify-center gap-2 shadow-lg text-center"
              >
                Get Your Quote
                <ArrowRight size={20} />
              </Link>
              <Link
                to="/products"
                className="border-2 border-white text-white px-6 md:px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors inline-flex items-center justify-center gap-2 backdrop-blur-sm text-center"
              >
                View Products
                <ArrowRight size={20} />
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Media Type Indicator */}
        <div className="absolute top-4 right-4 z-20 bg-black/30 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">
          {heroMedia[currentSlide].type === "video" ? "📹" : "📷"} 
          {currentSlide + 1} / {heroMedia.length}
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <motion.div
                className="bg-gradient-to-br from-primary to-primary/70 rounded-lg h-96 flex items-center justify-center text-6xl"
                whileHover={{ scale: 1.05, rotate: 2 }}
                transition={{ duration: 0.3 }}
              >
                🏭
              </motion.div>
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Welcome To R.L MINERALS MINING
              </h2>
              <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
                With a commitment to excellence since 2010, R.L MINERALS MINING has
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
            </motion.div>
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
            {products.map((product, idx) => (
              <motion.div
                key={product.id}
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 50 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <Link
                  to={product.path}
                  className="block bg-white rounded-lg shadow-md overflow-hidden h-full"
                >
                  <motion.div
                    className="bg-gradient-to-br from-primary/10 to-accent/10 h-48 flex items-center justify-center text-6xl"
                    whileHover={{ scale: 1.15, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    {product.image}
                  </motion.div>
                  <motion.div
                    className="p-6"
                    whileHover={{ backgroundColor: "rgba(24, 97, 50, 0.02)" }}
                  >
                    <h3 className="font-bold text-lg text-primary hover:text-accent transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-sm text-foreground/60 mt-2">
                      High-quality mineral product for industrial applications
                    </p>
                  </motion.div>
                </Link>
              </motion.div>
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
