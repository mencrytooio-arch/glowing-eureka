import { useState } from 'react';

/**
 * Email Signup Component
 * Clean, minimal email collection bar
 * Positioned below impact tracker on homepage
 */

const EmailSignup = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState(null); // null, 'success', 'error'
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!email.trim()) {
      setStatus('error');
      return;
    }

    if (!validateEmail(email)) {
      setStatus('error');
      return;
    }

    setIsSubmitting(true);
    setStatus(null);

    try {
      // TODO: Replace with your email collection endpoint
      // For now, simulate API call
      await new Promise(resolve => setTimeout(resolve, 500));
      
      // In production, you would call your API here:
      // const response = await fetch('/api/subscribe', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ email }),
      // });
      
      setStatus('success');
      setEmail('');
    } catch (error) {
      setStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div 
      className="w-full py-12 md:py-16"
      style={{ backgroundColor: 'var(--color-background)', marginTop: '0' }}
    >
      <div className="w-full">
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* CTA Text */}
          <label 
            htmlFor="email-signup"
            className="block text-center sm:text-left text-lg sm:text-xl font-light"
            style={{ color: 'var(--color-text-primary)', opacity: 0.9 }}
          >
            Follow the change you're helping create.
          </label>

          {/* Email Input and Submit */}
          <div className="flex flex-col sm:flex-row gap-3 items-center">
            <input
              id="email-signup"
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setStatus(null); // Clear status on input change
              }}
              placeholder="Enter your email"
              aria-label="Email address"
              className="flex-1 w-full px-4 py-3 text-sm font-light transition-colors duration-200"
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                border: '1px solid',
                borderColor: status === 'error' 
                  ? 'rgba(220, 38, 38, 0.5)' 
                  : 'var(--color-accent-secondary)' + '33',
                color: 'var(--color-text-primary)',
                outline: 'none',
              }}
              onFocus={(e) => {
                e.target.style.borderColor = 'var(--color-accent-primary)';
                e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
              }}
              onBlur={(e) => {
                e.target.style.borderColor = 'var(--color-accent-secondary)' + '33';
                e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
              }}
              disabled={isSubmitting}
            />

            <button
              type="submit"
              disabled={isSubmitting}
              className="px-6 py-3 text-sm font-light tracking-wide transition-colors duration-200 whitespace-nowrap w-full sm:w-auto"
              style={{
                backgroundColor: isSubmitting 
                  ? 'var(--color-accent-secondary)' 
                  : 'var(--color-accent-primary)',
                color: 'var(--color-background)',
                cursor: isSubmitting ? 'not-allowed' : 'pointer',
                opacity: isSubmitting ? 0.7 : 1,
              }}
              onMouseEnter={(e) => {
                if (!isSubmitting) {
                  e.target.style.backgroundColor = 'var(--color-dark-section)';
                }
              }}
              onMouseLeave={(e) => {
                if (!isSubmitting) {
                  e.target.style.backgroundColor = 'var(--color-accent-primary)';
                }
              }}
            >
              {isSubmitting ? 'Submitting...' : 'Subscribe'}
            </button>
          </div>

          {/* Status Message */}
          {status === 'success' && (
            <p 
              className="text-sm font-light text-center sm:text-left"
              style={{ color: 'var(--color-accent-primary)', opacity: 0.9 }}
            >
              Thank you! We'll keep you updated on the impact.
            </p>
          )}

          {status === 'error' && (
            <p 
              className="text-sm font-light text-center sm:text-left"
              style={{ color: 'rgba(220, 38, 38, 0.8)' }}
            >
              Please enter a valid email address.
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default EmailSignup;
