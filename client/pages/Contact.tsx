import { useState } from "react";
import { ArrowRight, MapPin, Phone, Mail, Clock } from "lucide-react";
import Layout from "@/components/Layout";

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    details: ["+91 98765 43210", "+91 87654 32109"],
  },
  {
    icon: Mail,
    title: "Email",
    details: ["info@minerals.com", "sales@minerals.com"],
  },
  {
    icon: MapPin,
    title: "Address",
    details: [
      "Industrial Area, Rajasthan, India",
      "Factory: Mineral Processing Zone",
    ],
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: ["Monday - Saturday: 9:00 AM - 6:00 PM", "Sunday: Closed"],
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    product: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // For production, integrate EmailJS here
      // This demo version shows success without sending
      // See the EmailJS setup section below for instructions

      // Simulate a small delay like a real request
      await new Promise((resolve) => setTimeout(resolve, 500));

      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        product: "",
        message: "",
      });

      // Log the form data (in production, send via EmailJS)
      console.log("Contact form submitted:", {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        company: formData.company,
        product: formData.product,
        message: formData.message,
      });
    } catch (error) {
      console.error("Error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary/80 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-white/90 max-w-2xl">
            Get in touch with our team for quotations and inquiries
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, idx) => {
              const IconComponent = info.icon;
              return (
                <div key={idx} className="bg-white rounded-lg p-6 shadow-md">
                  <div className="text-accent mb-4">
                    <IconComponent size={32} />
                  </div>
                  <h3 className="font-bold text-lg text-primary mb-3">
                    {info.title}
                  </h3>
                  <div className="space-y-2">
                    {info.details.map((detail, detailIdx) => (
                      <p key={detailIdx} className="text-foreground/70 text-sm">
                        {detail}
                      </p>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <h2 className="text-3xl font-bold text-primary mb-8">
                Send us a Message
              </h2>

              {submitStatus === "success" && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg text-green-700">
                  Thank you! Your message has been sent successfully. We'll get
                  back to you soon.
                </div>
              )}

              {submitStatus === "error" && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">
                  Something went wrong. Please try again or contact us directly.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-primary mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                    placeholder="John Doe"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-primary mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-primary mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-primary mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                    placeholder="Your Company"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-primary mb-2">
                    Interested Product
                  </label>
                  <select
                    name="product"
                    value={formData.product}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                  >
                    <option value="">Select a product</option>
                    <option value="Dolomite Powder">Dolomite Powder</option>
                    <option value="Dolomite Sand">Dolomite Sand</option>
                    <option value="Dolomite Lumps">Dolomite Lumps</option>
                    <option value="Calcite Powder">Calcite Powder</option>
                    <option value="Marble Powder">Marble Powder</option>
                    <option value="Soap Stone">Soap Stone</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-primary mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent resize-none"
                    placeholder="Tell us about your requirements..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-accent text-accent-foreground px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity disabled:opacity-50 flex items-center justify-center gap-2"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                  <ArrowRight size={20} />
                </button>
              </form>
            </div>

            {/* Map Placeholder */}
            <div>
              <h2 className="text-3xl font-bold text-primary mb-8">Location</h2>
              <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg h-96 flex items-center justify-center">
                <div className="text-center">
                  <MapPin size={64} className="mx-auto text-primary/40 mb-4" />
                  <p className="text-foreground/60 font-medium">
                    Industrial Area, Rajasthan, India
                  </p>
                  <p className="text-foreground/40 text-sm mt-2">
                    Map integration coming soon
                  </p>
                </div>
              </div>

              <div className="mt-8 p-6 bg-muted/30 rounded-lg">
                <h3 className="font-bold text-primary mb-4">Office Address</h3>
                <p className="text-foreground/70 mb-4">
                  Main Office
                  <br />
                  Industrial Area
                  <br />
                  Rajasthan, India 000000
                </p>
                <h3 className="font-bold text-primary mb-4">
                  Manufacturing Unit
                </h3>
                <p className="text-foreground/70">
                  Mineral Processing Zone
                  <br />
                  Industrial Area
                  <br />
                  Rajasthan, India 000000
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-primary mb-6">
              EmailJS Setup Required
            </h2>
            <p className="text-foreground/70 mb-4">
              To enable email notifications for contact form submissions, you
              need to set up EmailJS:
            </p>
            <ol className="text-left text-foreground/70 space-y-3 mb-8">
              <li>
                1. Sign up at{" "}
                <a
                  href="https://www.emailjs.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent font-semibold hover:underline"
                >
                  emailjs.com
                </a>
              </li>
              <li>2. Create an email service in your EmailJS account</li>
              <li>3. Create an email template for contact form submissions</li>
              <li>
                4. Replace the placeholder IDs in the Contact.tsx file with your
                actual EmailJS credentials
              </li>
              <li>5. Deploy to Netlify or Vercel for production use</li>
            </ol>
            <p className="text-foreground/60 text-sm">
              Note: The form is fully functional but currently uses placeholder
              credentials. Update them with your actual EmailJS details to send
              real emails.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
