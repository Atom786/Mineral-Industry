import { ReactNode, useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, MapPin, Phone, Mail, Facebook, Linkedin, Instagram } from "lucide-react";
import Logo from "./Logo";
import "../styles/logo.css";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  // Handle scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
      <header className={`bg-white border-b border-border sticky top-0 z-50 ${isScrolled ? 'shadow-lg' : ''} transition-shadow duration-300`}>
        {/* Top Info Bar */}
        <div className="bg-primary text-primary-foreground py-2 text-sm hidden md:block">
          <div className="container mx-auto px-4 flex justify-between items-center">
            <div className="flex gap-6">
              <a
                href="tel:+919876543210"
                className="flex items-center gap-2 hover:opacity-80 transition-opacity"
              >
                <Phone size={16} />
                <span>+91 98765 43210</span>
              </a>
              <a
                href="mailto:info@rlminerals.com"
                className="flex items-center gap-2 hover:opacity-80 transition-opacity"
              >
                <Mail size={16} />
                <span>info@rlminerals.com</span>
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
          <div className="flex justify-between items-center min-h-[60px]">
            {/* Logo */}
            <Link to="/" className="hover:opacity-90 transition-opacity flex-shrink-0">
              <Logo variant="header" showText={true} />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-6 xl:gap-8 flex-shrink-0">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`font-medium transition-colors whitespace-nowrap text-sm xl:text-base relative ${
                    isActive(link.path)
                      ? "text-accent after:absolute after:bottom-[-2px] after:left-0 after:right-0 after:h-0.5 after:bg-accent after:rounded"
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
              className="hidden lg:block bg-accent text-accent-foreground px-4 xl:px-6 py-2 rounded-lg font-medium hover:opacity-90 transition-opacity text-sm xl:text-base whitespace-nowrap flex-shrink-0"
            >
              Get Quote
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors flex-shrink-0"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <nav className="lg:hidden mt-4 flex flex-col gap-4 pb-4 border-t border-border pt-4 bg-white/95 backdrop-blur-sm rounded-lg shadow-lg">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`font-medium transition-all duration-200 py-3 px-4 rounded-lg ${
                    isActive(link.path)
                      ? "text-accent bg-accent/10 border-l-4 border-accent"
                      : "text-foreground hover:text-accent hover:bg-accent/5 hover:translate-x-1"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/contact"
                className="bg-accent text-accent-foreground px-4 py-3 rounded-lg font-medium text-center hover:opacity-90 transition-opacity mt-2"
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
              <div className="mb-4">
                <Logo variant="footer" showText={true} />
              </div>
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
                  <a href="mailto:info@rlminerals.com">info@rlminerals.com</a>
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
            <p>&copy; 2024 R.L MINERALS MINING. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
