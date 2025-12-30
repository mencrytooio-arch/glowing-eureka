/**
 * Shop Page
 * Minimal product grid with 4 products
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
    <main className="min-h-screen">
      <section className="container-custom py-16 sm:py-24">
        {/* Page Header */}
        <div className="text-center mb-20 sm:mb-24">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-neutral-900 mb-4">
            Shop
          </h1>
          <p className="text-neutral-600 font-light max-w-2xl mx-auto">
            Every purchase directly funds counselling sessions for men in need.
          </p>
        </div>

        {/* Product Grid - 4 products */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 lg:gap-16">
          {products.map((product) => (
            <div
              key={product.id}
              className="group cursor-pointer"
            >
              {/* Product Image */}
              <div className="aspect-square bg-neutral-100 mb-4 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    // Show placeholder if image doesn't exist
                    e.target.style.display = 'none';
                  }}
                />
              </div>

              {/* Product Info */}
              <div className="space-y-2">
                <h3 className="text-lg font-light text-neutral-900 tracking-tight">
                  {product.name}
                </h3>
                <p className="text-neutral-600 font-light">£{product.price}</p>
                <button className="text-sm text-neutral-900 font-light tracking-wide border-b border-transparent hover:border-neutral-900 transition-colors duration-200 mt-2">
                  View
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Shop;
