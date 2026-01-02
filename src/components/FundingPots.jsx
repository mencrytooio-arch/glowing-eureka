import { useState, useEffect } from 'react';

/**
 * Funding Pots Component
 * Displays two visual pots showing:
 * - Left: Counselling Packages (resets at £3000)
 * - Right: Total Amount Raised (capped at £100k visually)
 */

const FundingPots = () => {
  const [fundingData, setFundingData] = useState({
    totalAmountRaised: 0,
    currentPackageAmount: 0,
    packagesFundedCount: 0,
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch funding data on component mount
  useEffect(() => {
    fetchFundingData();
    
    // Poll for updates every 30 seconds (in case of concurrent purchases)
    const interval = setInterval(fetchFundingData, 30000);
    
    return () => clearInterval(interval);
  }, []);

  const fetchFundingData = async () => {
    try {
      // In production, this will use /api/funding (via netlify.toml redirect)
      // In local development with Netlify CLI, it will work automatically
      // If functions aren't available, component will gracefully handle the error
      const response = await fetch('/api/funding');
      if (!response.ok) {
        throw new Error('Failed to fetch funding data');
      }
      const data = await response.json();
      setFundingData(data);
      setError(null);
    } catch (err) {
      console.error('Error fetching funding data:', err);
      setError(err.message);
      // Gracefully handle errors - show default values (0) if API is unavailable
      // This allows the site to work even if backend isn't ready yet
    } finally {
      setLoading(false);
    }
  };

  // Calculate fill percentages
  const packageFillPercentage = Math.min((fundingData.currentPackageAmount / 3000) * 100, 100);
  const totalFillPercentage = Math.min((fundingData.totalAmountRaised / 100000) * 100, 100);

  // Format currency
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-GB', {
      style: 'currency',
      currency: 'GBP',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  if (loading) {
    return (
      <section className="section-spacing" style={{ backgroundColor: 'var(--color-background)' }}>
        <div className="container-custom">
          <div className="text-center">
            <p className="font-light" style={{ color: 'var(--color-accent-secondary)' }}>Loading impact data...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="section-spacing" style={{ backgroundColor: 'var(--color-background)' }}>
      <div className="container-custom">
        <div className="max-w-5xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light tracking-tight mb-4" style={{ color: 'var(--color-text-primary)' }}>
              Your Impact
            </h2>
            <p className="font-light text-lg max-w-2xl mx-auto" style={{ color: 'var(--color-accent-secondary)' }}>
              Every purchase directly funds counselling sessions for men in need.
            </p>
          </div>

          {/* Pots Container */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 sm:gap-16 lg:gap-20">
            {/* Left Pot - Counselling Packages */}
            <div className="flex flex-col items-center">
              {/* Pot SVG */}
              <div className="relative w-48 h-64 sm:w-56 sm:h-72 mb-6">
                <svg
                  viewBox="0 0 200 300"
                  className="w-full h-full"
                  style={{ filter: 'drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1))' }}
                >
                  {/* Pot Outline */}
                  <path
                    d="M 40 280 L 40 60 Q 40 20 60 20 L 140 20 Q 160 20 160 60 L 160 280 Q 160 290 150 290 L 50 290 Q 40 290 40 280 Z"
                    fill="none"
                    stroke="var(--color-accent-secondary)"
                    strokeWidth="3"
                    style={{ opacity: 0.3 }}
                  />
                  
                  {/* Fill (current package amount) */}
                  {packageFillPercentage > 0 && (
                    <rect
                      x="40"
                      y={280 - (packageFillPercentage / 100) * 220}
                      width="120"
                      height={(packageFillPercentage / 100) * 220}
                      fill="var(--color-accent-primary)"
                      style={{ opacity: 0.7 }}
                    />
                  )}
                  
                  {/* Fill Border */}
                  {packageFillPercentage > 0 && (
                    <line
                      x1="40"
                      y1={280 - (packageFillPercentage / 100) * 220}
                      x2="160"
                      y2={280 - (packageFillPercentage / 100) * 220}
                      stroke="var(--color-accent-primary)"
                      strokeWidth="2"
                    />
                  )}
                </svg>
                
                {/* Amount Label on Pot */}
                <div 
                  className="absolute inset-0 flex items-center justify-center"
                  style={{ pointerEvents: 'none' }}
                >
                  <span 
                    className="text-2xl sm:text-3xl font-light"
                    style={{ color: 'var(--color-text-primary)' }}
                  >
                    {formatCurrency(fundingData.currentPackageAmount)}
                  </span>
                </div>
              </div>

              {/* Counter */}
              <div className="text-center">
                <p className="text-sm sm:text-base font-light mb-2" style={{ color: 'var(--color-accent-secondary)' }}>
                  Counselling Packages Funded
                </p>
                <p className="text-4xl sm:text-5xl font-light" style={{ color: 'var(--color-text-primary)' }}>
                  {fundingData.packagesFundedCount}
                </p>
              </div>
            </div>

            {/* Right Pot - Total Amount Raised */}
            <div className="flex flex-col items-center">
              {/* Pot SVG */}
              <div className="relative w-48 h-64 sm:w-56 sm:h-72 mb-6">
                <svg
                  viewBox="0 0 200 300"
                  className="w-full h-full"
                  style={{ filter: 'drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1))' }}
                >
                  {/* Pot Outline */}
                  <path
                    d="M 40 280 L 40 60 Q 40 20 60 20 L 140 20 Q 160 20 160 60 L 160 280 Q 160 290 150 290 L 50 290 Q 40 290 40 280 Z"
                    fill="none"
                    stroke="var(--color-accent-secondary)"
                    strokeWidth="3"
                    style={{ opacity: 0.3 }}
                  />
                  
                  {/* Fill (total amount, capped at £100k visually) */}
                  {totalFillPercentage > 0 && (
                    <rect
                      x="40"
                      y={280 - (totalFillPercentage / 100) * 220}
                      width="120"
                      height={(totalFillPercentage / 100) * 220}
                      fill="var(--color-accent-primary)"
                      style={{ opacity: 0.7 }}
                    />
                  )}
                  
                  {/* Fill Border */}
                  {totalFillPercentage > 0 && (
                    <line
                      x1="40"
                      y1={280 - (totalFillPercentage / 100) * 220}
                      x2="160"
                      y2={280 - (totalFillPercentage / 100) * 220}
                      stroke="var(--color-accent-primary)"
                      strokeWidth="2"
                    />
                  )}
                  
                  {/* Max indicator (if at or above £100k) */}
                  {fundingData.totalAmountRaised >= 100000 && (
                    <text
                      x="100"
                      y="50"
                      textAnchor="middle"
                      className="text-xs font-light"
                      fill="var(--color-accent-primary)"
                    >
                      Max
                    </text>
                  )}
                </svg>
                
                {/* Amount Label on Pot */}
                <div 
                  className="absolute inset-0 flex items-center justify-center"
                  style={{ pointerEvents: 'none' }}
                >
                  <span 
                    className="text-xl sm:text-2xl font-light text-center px-2"
                    style={{ color: 'var(--color-text-primary)' }}
                  >
                    {formatCurrency(Math.min(fundingData.totalAmountRaised, 100000))}
                    {fundingData.totalAmountRaised > 100000 && '+'}
                  </span>
                </div>
              </div>

              {/* Counter */}
              <div className="text-center">
                <p className="text-sm sm:text-base font-light mb-2" style={{ color: 'var(--color-accent-secondary)' }}>
                  Total Amount Raised
                </p>
                <p className="text-3xl sm:text-4xl font-light" style={{ color: 'var(--color-text-primary)' }}>
                  {formatCurrency(fundingData.totalAmountRaised)}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FundingPots;

