// Shared product data for the application
export const productList = [
  {
    id: 1,
    name: "Dolomite Powder",
    path: "/products/dolomite-powder",
    image: "🪨",
    description: "Fine dolomite powder used in ceramics, construction, and chemical industries. High-quality mineral with excellent chemical properties for various industrial applications.",
    specifications: ["99% Purity", "Fine Mesh Size", "ISO Certified", "Whiteness: 85-90%"],
    applications: ["Ceramics & Tiles", "Construction Materials", "Chemical Industry", "Glass Manufacturing"],
    features: ["High Purity", "Consistent Quality", "Eco-Friendly", "Cost-Effective"]
  },
  {
    id: 2,
    name: "Dolomite Sand",
    path: "/products/dolomite-sand",
    image: "🏜️",
    description: "Premium quality dolomite sand for construction, foundry, and industrial applications. Excellent for concrete production and as aggregate material.",
    specifications: ["98% Purity", "Various Grain Sizes", "Low Moisture Content", "Consistent Gradation"],
    applications: ["Concrete Production", "Foundry Casting", "Road Construction", "Building Materials"],
    features: ["High Strength", "Durable", "Weather Resistant", "Uniform Texture"]
  },
  {
    id: 3,
    name: "Dolomite Lumps",
    path: "/products/dolomite-lumps",
    image: "⛏️",
    description: "High-grade dolomite lumps for steel industry, refractory applications, and flux material. Excellent thermal properties and chemical composition.",
    specifications: ["97% Purity", "Size: 10-50mm", "Low Silica Content", "High MgO Content"],
    applications: ["Steel Industry", "Refractory Materials", "Flux in Metallurgy", "Cement Production"],
    features: ["High Temperature Resistance", "Low Impurities", "Consistent Size", "Reliable Supply"]
  },
  {
    id: 4,
    name: "Calcite Powder",
    path: "/products/calcite-powder",
    image: "✨",
    description: "Ultra-fine calcite powder for paint, plastic, rubber, and pharmaceutical industries. Superior whiteness and brightness for premium applications.",
    specifications: ["99.5% Purity", "Ultra-Fine Mesh", "High Brightness", "Low Oil Absorption"],
    applications: ["Paint & Coatings", "Plastic Industry", "Rubber Manufacturing", "Pharmaceuticals"],
    features: ["Superior Whiteness", "Chemical Inertness", "Fine Particle Size", "High Brightness"]
  },
  {
    id: 5,
    name: "Marble Powder",
    path: "/products/marble-powder",
    image: "🎨",
    description: "Premium marble powder for decorative applications, construction, and industrial uses. Excellent for architectural finishes and specialty products.",
    specifications: ["98% Purity", "Fine to Medium Mesh", "Natural White Color", "Low Moisture"],
    applications: ["Decorative Coatings", "Architectural Finishes", "Tile Manufacturing", "Specialty Concrete"],
    features: ["Natural Beauty", "Excellent Workability", "Durable Finish", "Versatile Application"]
  },
  {
    id: 6,
    name: "Soap Stone",
    path: "/products/soap-stone",
    image: "💎",
    description: "High-quality soap stone for industrial applications, cosmetics, and specialty uses. Excellent thermal properties and chemical resistance.",
    specifications: ["95% Purity", "Talc Content: 40-60%", "Low Hardness", "Heat Resistant"],
    applications: ["Industrial Applications", "Cosmetic Industry", "Electrical Insulation", "Thermal Applications"],
    features: ["Heat Resistance", "Chemical Inertness", "Soft Texture", "Electrical Insulation"]
  },
  {
    id: 7,
    name: "Quartz Powder",
    path: "/products/quartz-powder",
    image: "💎",
    description: "High-purity quartz powder for glass, electronics, and ceramic industries. Exceptional hardness and chemical stability.",
    specifications: ["99.8% Purity", "Various Mesh Sizes", "Low Iron Content", "High Hardness"],
    applications: ["Glass Manufacturing", "Electronics", "Ceramics", "Foundry Applications"],
    features: ["High Purity", "Chemical Stability", "Consistent Quality", "Low Contamination"]
  },
  {
    id: 8,
    name: "Feldspar Powder",
    path: "/products/feldspar-powder",
    image: "🔶",
    description: "Premium feldspar powder for ceramic, glass, and enamel industries. Excellent flux properties and consistent chemical composition.",
    specifications: ["96% Purity", "Low Iron Content", "Consistent Alkali", "Fine Mesh Size"],
    applications: ["Ceramic Industry", "Glass Production", "Enamel Manufacturing", "Welding Electrodes"],
    features: ["Excellent Flux Properties", "Low Melting Point", "Consistent Chemistry", "High Alumina Content"]
  }
];

// Helper function to get product by ID
export const getProductById = (id) => {
  return productList.find(product => product.id === id);
};

// Helper function to get product by path
export const getProductByPath = (path) => {
  return productList.find(product => product.path === path);
};

// Helper function to get all product names for navigation
export const getProductNames = () => {
  return productList.map(product => ({
    id: product.id,
    name: product.name,
    path: product.path
  }));
};