import { useState, useEffect, useRef } from 'react';

/**
 * Impact Tracker Component
 * Complete recreation of Embeddable widget page
 * Reference: https://embeddable.live/embed/Rnf6Bp3bIE
 * 
 * Exact structure:
 * - Two-column layout (desktop), stacked (mobile)
 * - Left: Headline, subtext, amount, goal, progress bar, sessions count
 * - Right: Jar SVG with percentage
 * - All typography, spacing, and colors match exactly
 * 
 * Intentional change: Removed ellipse bubble/highlight from jar fill
 */

const ImpactTracker = () => {
  const [fundingData, setFundingData] = useState({
    totalAmountRaised: 0,
    currentPackageAmount: 0,
    packagesFundedCount: 0,
  });
  const [animatedJarProgress, setAnimatedJarProgress] = useState(0);
  const [animatedBarProgress, setAnimatedBarProgress] = useState(0);
  const loadingRef = useRef(true);
  const previousJarProgressRef = useRef(0);
  const previousBarProgressRef = useRef(0);
  const animationFrameRef = useRef(null);

  // Check for reduced motion preference
  const prefersReducedMotion = typeof window !== 'undefined' && 
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Fetch funding data
  useEffect(() => {
    fetchFundingData();
    
    // Poll for updates every 30 seconds
    const interval = setInterval(fetchFundingData, 30000);
    
    return () => {
      clearInterval(interval);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  // Animate jar progress (0-100% based on package progress toward £3000)
  useEffect(() => {
    if (loadingRef.current) return;

    const targetProgress = Math.min((fundingData.currentPackageAmount / 3000) * 100, 100);
    const startProgress = previousJarProgressRef.current;

    if (prefersReducedMotion) {
      setAnimatedJarProgress(targetProgress);
      previousJarProgressRef.current = targetProgress;
      return;
    }

    const duration = 1000;
    const startTime = performance.now();

    const animate = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      const currentProgress = startProgress + (targetProgress - startProgress) * easedProgress;
      setAnimatedJarProgress(currentProgress);

      if (progress < 1) {
        animationFrameRef.current = requestAnimationFrame(animate);
      } else {
        setAnimatedJarProgress(targetProgress);
        previousJarProgressRef.current = targetProgress;
      }
    };

    animationFrameRef.current = requestAnimationFrame(animate);
    
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [fundingData.currentPackageAmount, prefersReducedMotion]);

  // Animate bar progress (0-100% based on total raised toward £100,000)
  useEffect(() => {
    if (loadingRef.current) return;

    const targetProgress = Math.min((fundingData.totalAmountRaised / 100000) * 100, 100);
    const startProgress = previousBarProgressRef.current;

    if (prefersReducedMotion) {
      setAnimatedBarProgress(targetProgress);
      previousBarProgressRef.current = targetProgress;
      return;
    }

    const duration = 1000;
    const startTime = performance.now();

    const animate = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      const currentProgress = startProgress + (targetProgress - startProgress) * easedProgress;
      setAnimatedBarProgress(currentProgress);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setAnimatedBarProgress(targetProgress);
        previousBarProgressRef.current = targetProgress;
      }
    };

    requestAnimationFrame(animate);
  }, [fundingData.totalAmountRaised, prefersReducedMotion]);

  const fetchFundingData = async () => {
    try {
      const response = await fetch('/api/funding');
      if (!response.ok) {
        throw new Error('Failed to fetch funding data');
      }
      const data = await response.json();
      setFundingData(data);
      loadingRef.current = false;
    } catch (err) {
      console.error('Error fetching funding data:', err);
      loadingRef.current = false;
    }
  };

  // Format currency
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-GB', {
      style: 'currency',
      currency: 'GBP',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  if (loadingRef.current) {
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

  // Exact SVG dimensions from Embeddable
  const svgViewBox = "0 0 200 280";
  const jarPath = "M 60 40 L 60 240 Q 60 260 80 260 L 120 260 Q 140 260 140 240 L 140 40 Z";
  const fillHeight = (animatedJarProgress / 100) * 220;
  const fillY = 260 - fillHeight;

  return (
    <section 
      className="min-h-[600px] w-full flex items-center justify-center px-6 py-12 md:py-16" 
      style={{ backgroundColor: 'var(--color-background)', color: 'var(--color-text-primary)' }}
    >
      <div className="w-full max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          
          {/* Left Column - Text Content */}
          <div className="space-y-8 text-center md:text-left order-2 md:order-1">
            <div className="space-y-4">
              {/* Headline */}
              <h1 
                className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tight leading-none"
                style={{ color: 'var(--color-text-primary)' }}
              >
                Wear the change.
              </h1>
              
              {/* Subtext */}
              <p 
                className="text-lg md:text-xl font-normal opacity-70"
                style={{ color: 'var(--color-accent-secondary)' }}
              >
                The difference we have made so far.
              </p>
            </div>
            
            <div className="space-y-6">
              {/* Amount Raised Section */}
              <div className="text-center">
                <div 
                  className="text-4xl md:text-5xl font-light tracking-tight mb-2"
                  style={{ color: 'var(--color-text-primary)' }}
                >
                  {formatCurrency(fundingData.totalAmountRaised)}
                </div>
                <div 
                  className="text-base md:text-lg font-normal opacity-60"
                  style={{ color: 'var(--color-accent-secondary)' }}
                >
                  of {formatCurrency(100000)} goal
                </div>
              </div>
              
              {/* Progress Bar - Exact Embeddable styling */}
              <div className="w-full max-w-md mx-auto">
                <div 
                  className="h-1 rounded-full overflow-hidden"
                  style={{ backgroundColor: 'var(--color-accent-secondary)', opacity: 0.15 }}
                >
                  <div 
                    className="h-full rounded-full"
                    style={{ 
                      backgroundColor: 'var(--color-accent-primary)',
                      width: `${animatedBarProgress}%`,
                    }}
                  />
                </div>
              </div>
              
              {/* Sessions Funded Section */}
              <div className="text-center pt-4">
                <div 
                  className="text-3xl md:text-4xl font-light tracking-tight mb-1"
                  style={{ color: 'var(--color-accent-primary)' }}
                >
                  {fundingData.packagesFundedCount}
                </div>
                <div 
                  className="text-sm md:text-base font-normal opacity-60"
                  style={{ color: 'var(--color-accent-secondary)' }}
                >
                  Counselling Packages Funded
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Column - Jar */}
          <div className="flex justify-center order-1 md:order-2">
            <div className="relative w-full max-w-[200px] mx-auto">
              <svg 
                viewBox={svgViewBox} 
                className="w-full h-auto" 
                xmlns="http://www.w3.org/2000/svg"
                style={{ display: 'block' }}
              >
                {/* Jar Outline */}
                <path 
                  d={jarPath}
                  fill="none" 
                  stroke="var(--color-accent-secondary)" 
                  strokeWidth="2" 
                  opacity="0.3"
                />
                
                {/* Lid - Top rectangle */}
                <rect 
                  x="75" 
                  y="20" 
                  width="50" 
                  height="20" 
                  rx="4" 
                  fill="none" 
                  stroke="var(--color-accent-secondary)" 
                  strokeWidth="2" 
                  opacity="0.3"
                />
                
                {/* Lid - Top cap */}
                <rect 
                  x="70" 
                  y="10" 
                  width="60" 
                  height="12" 
                  rx="2" 
                  fill="var(--color-background)" 
                  stroke="var(--color-accent-secondary)" 
                  strokeWidth="2" 
                  opacity="0.6"
                />
                
                {/* ClipPath for fill */}
                <defs>
                  <clipPath id="jar-clip">
                    <path d={jarPath} />
                  </clipPath>
                </defs>
                
                {/* Fill - Solid, flat (bubble removed) */}
                {animatedJarProgress > 0 && fillHeight > 0 && (
                  <rect 
                    x="60" 
                    y={fillY} 
                    width="80" 
                    height={fillHeight} 
                    fill="var(--color-accent-primary)" 
                    opacity="0.85" 
                    clipPath="url(#jar-clip)"
                  />
                )}
              </svg>
              
              {/* Percentage Text - Centered in jar */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div 
                  className="text-3xl font-light tracking-tight"
                  style={{ color: 'var(--color-text-primary)' }}
                >
                  {Math.round(animatedJarProgress)}%
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default ImpactTracker;

