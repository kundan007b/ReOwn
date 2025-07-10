import React from 'react';

// --- Reusable Components ---

// This component represents a single product card.
const ProductCard = ({ imageUrl, name, price }) => (
  <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 group">
    <img src={imageUrl} alt={name} className="w-full h-56 object-cover" />
    <div className="p-5">
      <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
      <p className="text-2xl font-bold text-orange-600 mt-2">₹{price}</p>
      <button className="w-full mt-4 bg-gray-800 text-white py-2 rounded-lg hover:bg-gray-900 transition-colors duration-300">
        View Details
      </button>
    </div>
  </div>
);

// --- Page Section Components ---

const Header = () => (
  <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
    <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
      <a href="#" className="text-3xl font-extrabold text-orange-600">ReOwn</a>
      <div className="hidden md:flex items-center space-x-8 font-medium text-gray-600">
        <a href="#features" className="hover:text-orange-600 transition-colors">Features</a>
        <a href="#how-it-works" className="hover:text-orange-600 transition-colors">How It Works</a>
        <a href="#categories" className="hover:text-orange-600 transition-colors">Categories</a>
      </div>
      <div className="flex items-center space-x-4">
        <button className="hidden sm:block text-gray-600 font-medium hover:text-orange-600">Log In</button>
        <button className="bg-orange-600 text-white py-2 px-5 rounded-full hover:bg-orange-700 transition-transform hover:scale-105 shadow-md">
          Sign Up
        </button>
      </div>
    </nav>
  </header>
);

const HeroSection = () => (
  <section className="hero-bg text-white" style={{ backgroundImage: "linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.2)), url('https://images.unsplash.com/photo-1526178613552-2b45c6c302f0?q=80&w=2070&auto=format&fit=crop')" }}>
    <div className="container mx-auto px-6 py-24 md:py-32 text-center">
      <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">Give Your Stuff a Second Life</h1>
      <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 text-gray-200">
        The modern marketplace for buying and selling pre-loved treasures. Affordable, sustainable, and right in your neighborhood.
      </p>
      <div className="flex justify-center items-center gap-4">
        <a href="#featured" className="bg-orange-600 text-white py-3 px-8 rounded-full text-lg font-semibold hover:bg-orange-700 transition-transform hover:scale-105 shadow-lg">
          Start Shopping
        </a>
        <a href="#" className="bg-white text-gray-800 py-3 px-8 rounded-full text-lg font-semibold hover:bg-gray-200 transition-transform hover:scale-105 shadow-lg">
          Start Selling
        </a>
      </div>
    </div>
  </section>
);

const ValuePropsSection = () => (
  <section id="features" className="bg-white py-16">
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
        <div className="flex flex-col items-center">
          <div className="bg-orange-100 text-orange-600 rounded-full p-5 mb-4">
            <i className="fa-solid fa-rupee-sign fa-2x"></i>
          </div>
          <h3 className="text-2xl font-bold text-gray-800 mb-2">Affordability</h3>
          <p className="text-gray-600">Discover amazing deals and access quality products at a fraction of the original price.</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="bg-green-100 text-green-600 rounded-full p-5 mb-4">
            <i className="fa-solid fa-leaf fa-2x"></i>
          </div>
          <h3 className="text-2xl font-bold text-gray-800 mb-2">Sustainability</h3>
          <p className="text-gray-600">Reduce waste and promote a circular economy by giving items a second chance.</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="bg-blue-100 text-blue-600 rounded-full p-5 mb-4">
            <i className="fa-solid fa-shield-halved fa-2x"></i>
          </div>
          <h3 className="text-2xl font-bold text-gray-800 mb-2">Security</h3>
          <p className="text-gray-600">Shop with confidence thanks to our secure payment gateways and user verification.</p>
        </div>
      </div>
    </div>
  </section>
);

const FeaturedProductsSection = () => {
  // In a real app, this data would come from an API call
  const products = [
    { id: 1, name: 'Vintage Camera', price: '6,500', imageUrl: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1964&auto=format&fit=crop' },
    { id: 2, name: 'Ergonomic Desk Chair', price: '4,000', imageUrl: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?q=80&w=1965&auto=format&fit=crop' },
    { id: 3, name: 'Classic Record Player', price: '12,000', imageUrl: 'https://images.unsplash.com/photo-1591118472533-315a6f261902?q=80&w=1974&auto=format&fit=crop' },
    { id: 4, name: 'Retro Cruiser Bicycle', price: '9,500', imageUrl: 'https://images.unsplash.com/photo-1485965120184-e220f721d03e?q=80&w=2070&auto=format&fit=crop' },
  ];

  return (
    <section id="featured" className="py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">Featured Items</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map(product => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

const HowItWorksSection = () => (
  <section id="how-it-works" className="bg-orange-50 py-16">
    <div className="container mx-auto px-6">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12 text-center">How It Works</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
        <div className="flex flex-col items-center">
          <div className="relative mb-4">
            <div className="bg-white rounded-full p-6 shadow-lg"><i className="fa-solid fa-camera-retro fa-3x text-orange-600"></i></div>
            <span className="absolute -top-2 -right-2 bg-orange-600 text-white text-xl font-bold rounded-full h-10 w-10 flex items-center justify-center">1</span>
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-2">List Your Item</h3>
          <p className="text-gray-600">Snap a few photos, add a description and price. It's that easy!</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="relative mb-4">
            <div className="bg-white rounded-full p-6 shadow-lg"><i className="fa-solid fa-comments-dollar fa-3x text-orange-600"></i></div>
            <span className="absolute -top-2 -right-2 bg-orange-600 text-white text-xl font-bold rounded-full h-10 w-10 flex items-center justify-center">2</span>
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-2">Connect & Sell</h3>
          <p className="text-gray-600">Communicate with buyers, agree on a price, and arrange for pickup or delivery.</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="relative mb-4">
            <div className="bg-white rounded-full p-6 shadow-lg"><i className="fa-solid fa-handshake-angle fa-3x text-orange-600"></i></div>
            <span className="absolute -top-2 -right-2 bg-orange-600 text-white text-xl font-bold rounded-full h-10 w-10 flex items-center justify-center">3</span>
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-2">Get Paid Securely</h3>
          <p className="text-gray-600">Receive your payment safely through our integrated system once the sale is complete.</p>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-gray-800 text-white">
    <div className="container mx-auto px-6 py-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-2xl font-bold text-orange-500 mb-4">ReOwn</h3>
          <p className="text-gray-400">Your community marketplace for pre-loved goods.</p>
        </div>
        <div>
          <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#" className="hover:text-orange-400">About Us</a></li>
            <li><a href="#" className="hover:text-orange-400">Contact</a></li>
            <li><a href="#" className="hover:text-orange-400">Careers</a></li>
            <li><a href="#" className="hover:text-orange-400">Blog</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-lg mb-4">Support</h4>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#" className="hover:text-orange-400">FAQ</a></li>
            <li><a href="#" className="hover:text-orange-400">Safety Tips</a></li>
            <li><a href="#" className="hover:text-orange-400">Terms of Service</a></li>
            <li><a href="#" className="hover:text-orange-400">Privacy Policy</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-lg mb-4">Follow Us</h4>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-facebook-f fa-lg"></i></a>
            <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-twitter fa-lg"></i></a>
            <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-instagram fa-lg"></i></a>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-500">
        <p>&copy; 2025 ReOwn Marketplace. Made with care by Raj Malhotra's vision.</p>
      </div>
    </div>
  </footer>
);

// --- Main App Component ---
// This component assembles all the sections into a single page.
export default function App() {
  return (
    <div className="bg-gray-50">
      <Header />
      <main>
        <HeroSection />
        <ValuePropsSection />
        <FeaturedProductsSection />
        <HowItWorksSection />
      </main>
      <Footer />
    </div>
  );
}
