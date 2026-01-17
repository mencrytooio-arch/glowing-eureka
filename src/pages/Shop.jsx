import { Link } from 'react-router-dom';
import { useRef, useEffect } from 'react';

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
  const videoRef = useRef(null);
  const videoUrl = import.meta.env.VITE_BRAND_VIDEO_URL || "/brand-video.mp4";

  useEffect(() => {
    // Debug: Log video URL (remove after debugging)
    console.log('Video URL:', videoUrl);
    console.log('Env var exists:', !!import.meta.env.VITE_BRAND_VIDEO_URL);
    
    if (videoRef.current) {
      const video = videoRef.current;
      
      // Handle video loading errors
      video.addEventListener('error', (e) => {
        console.error('Video loading error:', e);
        console.error('Video src attempted:', videoUrl);
      });
      
      // Handle successful load
      video.addEventListener('loadeddata', () => {
        console.log('Video loaded successfully');
      });
      
      // Try to load the video
      video.load();
    }
  }, [videoUrl]);

  return (
    <main style={{ backgroundColor: 'var(--color-background)' }}>
      <section className="section section-spacing lg:pb-20 lg:pt-20 lg:mb-0 lg:min-h-0">
        <div className="container-custom">
          {/* Page Header */}
          <div className="text-center mb-16 sm:mb-20">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight mb-4" style={{ color: 'var(--color-text-primary)' }}>
              Shop
            </h1>
            <p className="font-light max-w-2xl mx-auto text-lg" style={{ color: 'var(--color-accent-secondary)' }}>
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
                <div 
                  className="aspect-square mb-4 overflow-hidden transition-colors duration-300"
                  style={{ backgroundColor: 'var(--color-background)' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.5)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--color-background)';
                  }}
                >
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
                  <h3 
                    className="text-lg font-light tracking-tight transition-colors"
                    style={{ color: 'var(--color-text-primary)' }}
                    onMouseEnter={(e) => {
                      e.target.style.color = 'var(--color-accent-primary)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.color = 'var(--color-text-primary)';
                    }}
                  >
                    {product.name}
                  </h3>
                  <p className="font-light" style={{ color: 'var(--color-accent-secondary)' }}>£{product.price}</p>
                  <span 
                    className="text-sm font-light tracking-wide border-b border-transparent transition-colors duration-200 inline-block mt-2"
                    style={{ color: 'var(--color-accent-primary)' }}
                    onMouseEnter={(e) => {
                      e.target.style.borderColor = 'var(--color-accent-primary)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.borderColor = 'transparent';
                    }}
                  >
                    View
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {/* Brand video section – desktop only */}
          <div className="hidden lg:block w-full mt-24">
            <div className="relative w-full max-w-6xl mx-auto overflow-hidden rounded-sm">
              <video
                ref={videoRef}
                className="w-full h-[360px] object-cover object-[center_35%] opacity-90"
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                crossOrigin="anonymous"
              >
                {/* For production: Upload video to Cloudinary and set VITE_BRAND_VIDEO_URL env var */}
                {/* See VIDEO_HOSTING_SETUP.md for instructions */}
                <source src={videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Shop;
