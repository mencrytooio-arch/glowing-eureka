import { Link } from 'react-router-dom';

/**
 * Shop Page
 * Product grid with brand colors
 */

const products = [
  {
    id: 1,
    name: 'Emotional Honesty Tee',
    price: 45,
    image: '/products/product-1.jpg',
  },
  {
    id: 2,
    name: 'Vulnerability Hoodie',
    price: 85,
    image: '/products/product-2.jpg',
  },
  {
    id: 3,
    name: 'Authentic Self Crewneck',
    price: 75,
    image: '/products/product-3.jpg',
  },
  {
    id: 4,
    name: 'Feel It All Long Sleeve',
    price: 55,
    image: '/products/product-4.jpg',
  },
];

const Shop = () => {
  return (
    <main className="min-h-screen bg-brand-light">
      <section className="section-spacing">
        <div className="container-custom">
          {/* Page Header */}
          <div className="text-center mb-16 sm:mb-20">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-brand-primary mb-4">
              Shop
            </h1>
            <p className="text-brand-secondary font-light max-w-2xl mx-auto text-lg">
              Every purchase directly funds counselling sessions for men in need.
            </p>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12">
            {products.map((product) => (
              <Link
                key={product.id}
                to={`/shop/product/${product.id}`}
                className="group cursor-pointer block"
              >
                {/* Product Image */}
                <div className="aspect-square bg-white mb-4 overflow-hidden transition-colors duration-300 group-hover:bg-brand-light">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                </div>

                {/* Product Info */}
                <div className="space-y-2">
                  <h3 className="text-lg font-light text-brand-primary tracking-tight group-hover:text-brand-primary/80 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-brand-secondary font-light">£{product.price}</p>
                  <span className="text-sm text-brand-primary font-light tracking-wide border-b border-transparent group-hover:border-brand-primary transition-colors duration-200 inline-block mt-2">
                    View
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Shop;
