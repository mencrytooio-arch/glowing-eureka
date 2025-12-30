import Hero from './components/Hero';
import Section from './components/Section';
import ProductCard from './components/ProductCard';
import CTA from './components/CTA';
import Footer from './components/Footer';

/**
 * Main App Component
 * MenCryToo - E-commerce clothing store
 */

// Product data
const products = [
  {
    id: 1,
    name: 'Emotional Honesty Tee',
    price: 29.99,
    description: 'Comfortable, soft cotton tee with empowering message about emotional authenticity.',
    image: '/products/tee-1.jpg',
    imageAlt: 'Emotional Honesty T-Shirt'
  },
  {
    id: 2,
    name: 'Strength in Vulnerability Hoodie',
    price: 59.99,
    description: 'Premium hoodie that celebrates the courage it takes to be vulnerable and real.',
    image: '/products/hoodie-1.jpg',
    imageAlt: 'Strength in Vulnerability Hoodie'
  },
  {
    id: 3,
    name: 'Authentic Self Crewneck',
    price: 49.99,
    description: 'Classic crewneck sweater designed for comfort and style while staying true to yourself.',
    image: '/products/crewneck-1.jpg',
    imageAlt: 'Authentic Self Crewneck'
  },
  {
    id: 4,
    name: 'Feel It All Long Sleeve',
    price: 39.99,
    description: 'Soft long-sleeve shirt that encourages embracing the full spectrum of emotions.',
    image: '/products/longsleeve-1.jpg',
    imageAlt: 'Feel It All Long Sleeve Shirt'
  }
];

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <Hero />

      {/* Products Section */}
      <Section
        id="products"
        title="Our Collection"
        subtitle="Clothing that empowers you to express your authentic self"
        bgColor="bg-white"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </Section>

      {/* About / Mission Section */}
      <Section
        id="about"
        title="Our Story"
        subtitle="More than clothing. A movement."
        bgColor="bg-neutral-50"
      >
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg mx-auto text-neutral-700 leading-relaxed space-y-4">
            <p>
              MenCryToo was born from a simple belief: that emotional honesty is not a weakness, 
              but a profound strength. We create clothing that empowers men to express their authentic 
              selves and embrace the full spectrum of human emotion.
            </p>
            <p>
              Every piece in our collection is designed with intention—to spark conversations, 
              challenge stereotypes, and remind you that it's okay to feel, to cry, to be vulnerable, 
              and to be authentically you.
            </p>
            <p>
              Join us in redefining masculinity. Wear your truth. Express yourself. Because when 
              men are free to be emotional, we all become stronger.
            </p>
          </div>
        </div>
      </Section>

      {/* Call-to-Action Section */}
      <CTA />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
