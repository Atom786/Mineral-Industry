import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";

export default function About() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary/80 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Minerals Co.</h1>
          <p className="text-xl text-white/90 max-w-2xl">
            Discover our journey of excellence in mineral production and supply
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-6">Our Company</h2>
            <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
              Founded in 2010, Minerals Co. has grown to become one of the leading suppliers of 
              industrial minerals in the region. With state-of-the-art facilities and a dedicated team, 
              we have earned the trust of thousands of customers across various industries.
            </p>
            <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
              Our commitment to quality, innovation, and customer service has been the cornerstone of our success. 
              We continue to expand our product range and improve our services to meet the evolving needs of our clients.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-12 py-12 border-y border-border">
              <div className="text-center">
                <div className="text-4xl font-bold text-accent mb-2">15+</div>
                <p className="text-foreground/70">Years of Experience</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-accent mb-2">5000+</div>
                <p className="text-foreground/70">MT Production Monthly</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-accent mb-2">500+</div>
                <p className="text-foreground/70">Happy Customers</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-primary mb-4 mt-12">Our Vision</h2>
            <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
              To become the most trusted and innovative mineral supplier in the industry, 
              delivering exceptional value to our customers worldwide.
            </p>

            <h2 className="text-2xl font-bold text-primary mb-4 mt-12">Our Mission</h2>
            <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
              We are committed to providing superior quality minerals at competitive prices with 
              outstanding customer service and timely delivery.
            </p>

            <div className="mt-12 p-6 bg-muted/30 rounded-lg">
              <h3 className="font-bold text-lg text-primary mb-4">Infrastructure & Quality</h3>
              <p className="text-foreground/80 mb-4">
                Our modern manufacturing units are equipped with the latest technology to ensure 
                consistent quality and efficiency. We maintain strict quality control procedures 
                and comply with all international standards.
              </p>
              <p className="text-foreground/80">
                Our dedicated quality compliance team ensures every product meets the highest standards 
                before it reaches our customers.
              </p>
            </div>

            <div className="mt-12 text-center">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
              >
                Get in Touch
                <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
