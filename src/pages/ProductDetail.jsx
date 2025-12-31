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
      <main className="min-h-screen" style={{ backgroundColor: 'var(--color-background)' }}>
        <section className="container-custom section-spacing">
          <div className="text-center">
            <h1 className="text-2xl font-light mb-4" style={{ color: 'var(--color-text-primary)' }}>Product not found</h1>
            <Link to="/shop" className="underline" style={{ color: 'var(--color-accent-secondary)' }} onMouseEnter={(e) => e.target.style.color = 'var(--color-accent-primary)'} onMouseLeave={(e) => e.target.style.color = 'var(--color-accent-secondary)'}>
              Return to Shop
            </Link>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="min-h-screen" style={{ backgroundColor: 'var(--color-background)' }}>
      <section className="section-spacing" style={{ backgroundColor: 'var(--color-background)' }}>
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            {/* Back link */}
            <Link 
              to="/shop" 
              className="inline-block font-light text-sm mb-8 transition-colors"
              style={{ color: 'var(--color-accent-secondary)' }}
              onMouseEnter={(e) => e.target.style.color = 'var(--color-accent-primary)'}
              onMouseLeave={(e) => e.target.style.color = 'var(--color-accent-secondary)'}
            >
              ← Back to Shop
            </Link>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
              {/* Product Image */}
              <div className="aspect-square overflow-hidden" style={{ backgroundColor: 'var(--color-background)' }}>
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
                <h1 className="text-3xl sm:text-4xl font-light tracking-tight" style={{ color: 'var(--color-text-primary)' }}>
                  {product.name}
                </h1>

                {/* Price */}
                <p className="text-2xl font-light" style={{ color: 'var(--color-accent-secondary)' }}>
                  £{product.price}
                </p>

                {/* Description */}
                <div className="space-y-4">
                  <p className="text-body text-lg leading-relaxed font-normal" style={{ color: 'var(--color-text-primary)' }}>
                    {product.description}
                  </p>
                  <p className="text-body text-base font-normal" style={{ color: 'var(--color-accent-secondary)' }}>
                    Every purchase directly funds counselling sessions for men in need.
                  </p>
                </div>

                {/* Size Selection */}
                <div className="space-y-4 pt-4">
                  <label className="block text-sm font-light tracking-wide uppercase" style={{ color: 'var(--color-text-primary)' }}>
                    Size
                  </label>
                  <div className="grid grid-cols-6 gap-3">
                    {sizes.map((size) => (
                      <button
                        key={size}
                        className="py-3 px-4 font-light transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2"
                        style={{ 
                          border: '1px solid',
                          borderColor: 'var(--color-accent-secondary)' + '4D',
                          color: 'var(--color-text-primary)',
                        }}
                        onMouseEnter={(e) => {
                          e.target.style.borderColor = 'var(--color-accent-primary)';
                          e.target.style.backgroundColor = 'var(--color-background)';
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.borderColor = 'var(--color-accent-secondary)' + '4D';
                          e.target.style.backgroundColor = 'transparent';
                        }}
                        onFocus={(e) => {
                          e.target.style.outline = '2px solid var(--color-accent-primary)';
                          e.target.style.outlineOffset = '2px';
                        }}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Add to Cart Button */}
                <button 
                  className="w-full py-4 text-sm font-light tracking-wide transition-colors duration-200 mt-8"
                  style={{ 
                    backgroundColor: 'var(--color-accent-primary)',
                    color: 'var(--color-background)',
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = 'var(--color-dark-section)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = 'var(--color-accent-primary)';
                  }}
                >
                  Add to Cart
                </button>

                {/* Additional Info */}
                <div 
                  className="pt-6 space-y-3 text-sm font-light"
                  style={{ 
                    borderTop: '1px solid',
                    borderColor: 'var(--color-accent-secondary)' + '33',
                    color: 'var(--color-accent-secondary)',
                  }}
                >
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
