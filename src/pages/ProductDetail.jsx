import { useParams, Link } from 'react-router-dom';

/**
 * Product Detail Page
 * Minimal product page with brand colors
 */

const products = {
  1: {
    id: 1,
    name: 'Emotional Honesty Tee',
    price: 45,
    image: '/products/product-1.jpg',
    description: 'A comfortable, thoughtfully designed t-shirt that embodies our core message. Made from sustainable materials, this piece represents emotional authenticity and strength.',
  },
  2: {
    id: 2,
    name: 'Vulnerability Hoodie',
    price: 85,
    image: '/products/product-2.jpg',
    description: 'Premium quality hoodie designed for comfort and meaning. This piece celebrates the courage it takes to be vulnerable and authentic in a world that often asks men to hide their emotions.',
  },
  3: {
    id: 3,
    name: 'Authentic Self Crewneck',
    price: 75,
    image: '/products/product-3.jpg',
    description: 'A classic crewneck sweater that combines comfort with purpose. Designed to remind you that being your authentic self is not just okay, it\'s essential.',
  },
  4: {
    id: 4,
    name: 'Feel It All Long Sleeve',
    price: 55,
    image: '/products/product-4.jpg',
    description: 'Soft, comfortable long-sleeve shirt that encourages embracing the full spectrum of human emotion. A reminder that feeling deeply is a strength, not a weakness.',
  },
};

const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];

const ProductDetail = () => {
  const { id } = useParams();
  const product = products[parseInt(id)];

  if (!product) {
    return (
      <main className="min-h-screen bg-brand-background">
        <section className="container-custom section-spacing">
          <div className="text-center">
            <h1 className="text-2xl font-light text-brand-neutral mb-4">Product not found</h1>
            <Link to="/shop" className="text-brand-secondary hover:text-brand-primary underline">
              Return to Shop
            </Link>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-brand-background">
      <section className="bg-white section-spacing">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            {/* Back link */}
            <Link 
              to="/shop" 
              className="inline-block text-brand-secondary hover:text-brand-primary font-light text-sm mb-8 transition-colors"
            >
              ← Back to Shop
            </Link>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
              {/* Product Image */}
              <div className="aspect-square bg-brand-background overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
              </div>

              {/* Product Info */}
              <div className="flex flex-col justify-center space-y-8">
                {/* Product Name */}
                <h1 className="text-3xl sm:text-4xl font-light tracking-tight text-brand-neutral">
                  {product.name}
                </h1>

                {/* Price */}
                <p className="text-2xl font-light text-brand-secondary">
                  £{product.price}
                </p>

                {/* Description */}
                <div className="space-y-4">
                  <p className="text-body text-lg leading-relaxed font-normal">
                    {product.description}
                  </p>
                  <p className="text-body text-base text-brand-secondary font-normal">
                    Every purchase directly funds counselling sessions for men in need.
                  </p>
                </div>

                {/* Size Selection */}
                <div className="space-y-4 pt-4">
                  <label className="block text-sm font-light text-brand-neutral tracking-wide uppercase">
                    Size
                  </label>
                  <div className="grid grid-cols-6 gap-3">
                    {sizes.map((size) => (
                      <button
                        key={size}
                        className="py-3 px-4 border border-brand-secondary/30 text-brand-neutral font-light hover:border-brand-primary hover:bg-brand-background transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:ring-offset-2"
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Add to Cart Button */}
                <button className="w-full py-4 bg-brand-primary text-white text-sm font-light tracking-wide hover:bg-brand-primary/90 transition-colors duration-200 mt-8">
                  Add to Cart
                </button>

                {/* Additional Info */}
                <div className="pt-6 border-t border-brand-secondary/20 space-y-3 text-sm text-brand-secondary font-light">
                  <p>Free shipping on orders over £50</p>
                  <p>100% of profits fund men's counselling sessions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProductDetail;
