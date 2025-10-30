import { ReactNode, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, MapPin, Phone, Mail, Facebook, Linkedin, Instagram } from "lucide-react";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "About Us", path: "/about" },
    { label: "Products", path: "/products" },
    { label: "Applications", path: "/applications" },
    { label: "Contact Us", path: "/contact" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-white border-b border-border sticky top-0 z-50">
        {/* Top Info Bar */}
        <div className="bg-primary text-primary-foreground py-2 text-sm hidden md:block">
          <div className="container mx-auto flex justify-between items-center">
            <div className="flex gap-6">
              <a
                href="tel:+919876543210"
                className="flex items-center gap-2 hover:opacity-80"
              >
                <Phone size={16} />
                <span>+91 98765 43210</span>
              </a>
              <a
                href="mailto:info@minerals.com"
                className="flex items-center gap-2 hover:opacity-80"
              >
                <Mail size={16} />
                <span>info@minerals.com</span>
              </a>
            </div>
            <div className="flex gap-3">
              <a 
                href="https://facebook.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity p-1 hover:bg-white/10 rounded"
                aria-label="Follow us on Facebook"
              >
                <Facebook size={18} />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity p-1 hover:bg-white/10 rounded"
                aria-label="Connect with us on LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity p-1 hover:bg-white/10 rounded"
                aria-label="Follow us on Instagram"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Main Navigation */}
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center text-white font-bold text-lg">
                M
              </div>
              <span className="font-bold text-xl text-primary hidden sm:inline">
                Minerals Co.
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`font-medium transition-colors ${
                    isActive(link.path)
                      ? "text-accent"
                      : "text-foreground hover:text-accent"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* CTA Button */}
            <Link
              to="/contact"
              className="hidden md:block bg-accent text-accent-foreground px-6 py-2 rounded-lg font-medium hover:opacity-90 transition-opacity"
            >
              Get Quote
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <nav className="md:hidden mt-4 flex flex-col gap-4 pb-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`font-medium transition-colors ${
                    isActive(link.path)
                      ? "text-accent"
                      : "text-foreground hover:text-accent"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/contact"
                className="bg-accent text-accent-foreground px-4 py-2 rounded-lg font-medium text-center hover:opacity-90 transition-opacity"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get Quote
              </Link>
            </nav>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            {/* About */}
            <div>
              <h3 className="font-bold text-lg mb-4">About Us</h3>
              <p className="text-sm opacity-90">
                Leading supplier of industrial minerals and products with over
                15 years of excellence in the industry.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-bold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                {navLinks.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="opacity-90 hover:opacity-100 transition-opacity"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="font-bold text-lg mb-4">Contact Info</h3>
              <ul className="space-y-2 text-sm opacity-90">
                <li className="flex items-start gap-2">
                  <Phone size={16} className="mt-0.5" />
                  <a href="tel:+919876543210">+91 98765 43210</a>
                </li>
                <li className="flex items-start gap-2">
                  <Mail size={16} className="mt-0.5" />
                  <a href="mailto:info@minerals.com">info@minerals.com</a>
                </li>
                <li className="flex items-start gap-2">
                  <MapPin size={16} className="mt-0.5" />
                  <span>Industrial Area, Rajasthan, India</span>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="font-bold text-lg mb-4">Our Services</h3>
              <ul className="space-y-2 text-sm opacity-90">
                <li>Quality Products</li>
                <li>Timely Delivery</li>
                <li>Expert Support</li>
                <li>Bulk Orders</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-primary-foreground/20 pt-6 text-center text-sm opacity-75">
            <p>&copy; 2024 Minerals Co. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
