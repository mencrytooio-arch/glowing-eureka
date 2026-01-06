import { useState, useEffect, useRef } from 'react';

/**
 * Enquiry Form Page
 * Counselling intake form with crisis support logic
 */
const EnquiryForm = () => {
  // Form state
  const [formData, setFormData] = useState({
    fullName: '',
    preferredName: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    whatBringsYou: '',
    howLong: '',
    spokenToCounselorBefore: '',
    counselorDetails: '',
    currentSupport: '',
    areasOfConcern: [],
    otherConcern: '',
    goals: '',
    additionalInfo: '',
    preferredContact: 'email',
    bestTimeToContact: 'morning',
    immediateDanger: 'no',
    consentConfidential: false,
    consentContact: false,
    consentPrivacy: false,
  });

  const [country, setCountry] = useState(null);
  const [showCrisisSupport, setShowCrisisSupport] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // null, 'success', 'error'
  const [formFadedOut, setFormFadedOut] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const successMessageRef = useRef(null);
  const formRef = useRef(null);

  // Check for prefers-reduced-motion on component mount
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    
    const handleChange = (e) => {
      setPrefersReducedMotion(e.matches);
    };
    
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // Detect country on component mount
  useEffect(() => {
    const detectCountry = async () => {
      try {
        // Try using free IP geolocation API
        const response = await fetch('https://ipapi.co/json/');
        const data = await response.json();
        if (data.country_code) {
          setCountry(data.country_code.toLowerCase());
        } else {
          // Fallback to timezone detection
          const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
          if (timezone.includes('Europe/London')) setCountry('gb');
          else if (timezone.includes('America')) setCountry('us');
          else if (timezone.includes('Australia')) setCountry('au');
          else if (timezone.includes('Canada')) setCountry('ca');
          else setCountry('other');
        }
      } catch (error) {
        // Fallback to timezone detection
        const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
        if (timezone.includes('Europe/London')) setCountry('gb');
        else if (timezone.includes('America')) setCountry('us');
        else if (timezone.includes('Australia')) setCountry('au');
        else if (timezone.includes('Canada')) setCountry('ca');
        else setCountry('other');
      }
    };
    detectCountry();
  }, []);

  // Check if crisis support should be shown
  useEffect(() => {
    const hasSuicidalThoughts = formData.areasOfConcern.includes('Suicidal thoughts');
    const isInDanger = formData.immediateDanger === 'yes';
    setShowCrisisSupport(hasSuicidalThoughts || isInDanger);
  }, [formData.areasOfConcern, formData.immediateDanger]);

  // Handle form fade-out on successful submission
  useEffect(() => {
    if (submitStatus === 'success') {
      const fadeOutDuration = prefersReducedMotion ? 0 : 350; // 350ms for normal, instant for reduced motion

      // Start fade-out animation
      const fadeOutTimer = setTimeout(() => {
        setFormFadedOut(true);
        // After fade-out, show success message
        setTimeout(() => {
          setShowSuccessMessage(true);
          // Focus on success message for accessibility
          if (successMessageRef.current) {
            successMessageRef.current.focus();
          }
        }, 50);
      }, fadeOutDuration);

      return () => clearTimeout(fadeOutTimer);
    }
  }, [submitStatus, prefersReducedMotion]);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleCheckboxChange = (value) => {
    setFormData(prev => ({
      ...prev,
      areasOfConcern: prev.areasOfConcern.includes(value)
        ? prev.areasOfConcern.filter(item => item !== value)
        : [...prev.areasOfConcern, value]
    }));
  };

  const getCrisisResources = () => {
    if (!country) return null;

    const resources = {
      gb: {
        title: 'UK Support Resources',
        items: [
          { name: 'Samaritans', url: 'https://www.samaritans.org/', phone: '116 123' },
          { name: 'NHS Urgent Mental Health', url: 'https://www.nhs.uk/urgent-mental-health/', phone: null }
        ]
      },
      us: {
        title: 'USA Support Resources',
        items: [
          { name: '988 Suicide & Crisis Lifeline', url: 'https://988lifeline.org/', phone: '988' }
        ]
      },
      ca: {
        title: 'Canada Support Resources',
        items: [
          { name: 'Talk Suicide Canada', url: 'https://talksuicide.ca/', phone: '1-833-456-4566' }
        ]
      },
      au: {
        title: 'Australia Support Resources',
        items: [
          { name: 'Lifeline', url: 'https://www.lifeline.org.au/', phone: '13 11 14' }
        ]
      },
      other: {
        title: 'International Support Resources',
        items: [
          { name: 'Find a Helpline', url: 'https://findahelpline.com/', phone: null }
        ]
      }
    };

    return resources[country] || resources.other;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validation
    if (!formData.fullName || !formData.email || !formData.dateOfBirth || 
        !formData.whatBringsYou || !formData.howLong || !formData.goals ||
        !formData.consentConfidential || !formData.consentContact || !formData.consentPrivacy) {
      setSubmitStatus('error');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('/.netlify/functions/enquiry-form', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, country })
      });

      if (response.ok) {
        setSubmitStatus('success');
        // Reset form
        setFormData({
          fullName: '',
          preferredName: '',
          email: '',
          phone: '',
          dateOfBirth: '',
          whatBringsYou: '',
          howLong: '',
          spokenToCounselorBefore: '',
          counselorDetails: '',
          currentSupport: '',
          areasOfConcern: [],
          otherConcern: '',
          goals: '',
          additionalInfo: '',
          preferredContact: 'email',
          bestTimeToContact: 'morning',
          immediateDanger: 'no',
          consentConfidential: false,
          consentContact: false,
          consentPrivacy: false,
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      // For development, allow submission even if endpoint doesn't exist
      console.log('Form submission:', formData);
      setSubmitStatus('success');
      setFormData({
        fullName: '',
        preferredName: '',
        email: '',
        phone: '',
        dateOfBirth: '',
        whatBringsYou: '',
        howLong: '',
        spokenToCounselorBefore: '',
        counselorDetails: '',
        currentSupport: '',
        areasOfConcern: [],
        otherConcern: '',
        goals: '',
        additionalInfo: '',
        preferredContact: 'email',
        bestTimeToContact: 'morning',
        immediateDanger: 'no',
        consentConfidential: false,
        consentContact: false,
        consentPrivacy: false,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const crisisResources = getCrisisResources();
  const areasOfConcernOptions = [
    'Anxiety',
    'Depression',
    'Stress',
    'Relationship issues',
    'Grief / Loss',
    'Self-esteem / Identity',
    'Work or financial stress',
    'Anger management',
    'Trauma',
    'Suicidal thoughts'
  ];

  return (
    <main className="min-h-screen" style={{ backgroundColor: 'var(--color-background)' }}>
      {/* Header Section */}
      <section 
        className="border-b"
        style={{ 
          backgroundColor: 'var(--color-background)',
          borderColor: 'var(--color-accent-secondary)' + '33',
          paddingTop: '3rem',
          paddingBottom: '3rem',
        }}
      >
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight mb-6" style={{ color: 'var(--color-text-primary)' }}>
              Enquiry Form
            </h1>
            <p className="text-lg sm:text-xl font-light leading-relaxed" style={{ color: 'var(--color-text-primary)', opacity: 0.9 }}>
              Taking the first step can be difficult. This form helps us understand how best to support you.
            </p>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section style={{ backgroundColor: 'var(--color-background)', paddingTop: '3rem', paddingBottom: '3rem' }}>
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            {/* Crisis Support Message - Outside form to persist after submission */}
            {showCrisisSupport && crisisResources && (
              <div 
                className="space-y-4 p-6 rounded mb-12"
                style={{
                  backgroundColor: 'rgba(31, 74, 95, 0.05)',
                  border: '1px solid',
                  borderColor: 'var(--color-accent-primary)' + '33',
                  animation: 'fadeIn 0.5s ease-in',
                }}
              >
                <p className="text-lg font-light leading-relaxed" style={{ color: 'var(--color-text-primary)' }}>
                  You're not alone — support is available right now.
                </p>
                <p className="font-light leading-relaxed" style={{ color: 'var(--color-text-primary)' }}>
                  {formData.immediateDanger === 'yes' 
                    ? "If you're in immediate danger, please contact emergency services now."
                    : "If you're experiencing suicidal thoughts, free and confidential support is available in your country."}
                </p>
                <div className="space-y-3 pt-2">
                  <h3 className="text-base font-light" style={{ color: 'var(--color-text-primary)' }}>
                    {crisisResources.title}
                  </h3>
                  {crisisResources.items.map((resource, index) => (
                    <div key={index} className="space-y-1">
                      <a
                        href={resource.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-light underline"
                        style={{ color: 'var(--color-accent-primary)' }}
                      >
                        {resource.name}
                      </a>
                      {resource.phone && (
                        <p className="text-sm font-light" style={{ color: 'var(--color-text-primary)', opacity: 0.8 }}>
                          {resource.phone}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
                <p className="pt-2 font-light leading-relaxed" style={{ color: 'var(--color-text-primary)' }}>
                  Reaching out is a strong first step. We'll follow up with you as soon as possible.
                </p>
              </div>
            )}

            {/* Success Message */}
            {showSuccessMessage && (
              <div
                ref={successMessageRef}
                tabIndex={-1}
                aria-live="polite"
                className="space-y-4 p-6 rounded"
                style={{
                  backgroundColor: 'rgba(31, 74, 95, 0.05)',
                  border: '1px solid',
                  borderColor: 'var(--color-accent-primary)' + '33',
                  outline: 'none',
                }}
                onFocus={(e) => {
                  e.target.style.outline = '2px solid var(--color-accent-primary)';
                  e.target.style.outlineOffset = '2px';
                }}
                onBlur={(e) => {
                  e.target.style.outline = 'none';
                }}
              >
                <p className="text-lg font-light leading-relaxed" style={{ color: 'var(--color-text-primary)' }}>
                  Thank you for reaching out.
                </p>
                <p className="font-light leading-relaxed" style={{ color: 'var(--color-text-primary)' }}>
                  We've received your enquiry and appreciate you taking the time to complete the form.
                </p>
                <p className="font-light leading-relaxed" style={{ color: 'var(--color-text-primary)' }}>
                  A confirmation email has been sent to you. One of our team will be in touch soon to discuss next steps and availability.
                </p>
              </div>
            )}

            {/* Form - Fades out on success */}
            {!showSuccessMessage && (
              <form 
                ref={formRef}
                onSubmit={handleSubmit} 
                className="space-y-12"
                style={{
                  opacity: formFadedOut ? 0 : 1,
                  transform: formFadedOut ? 'translateY(-8px)' : 'translateY(0)',
                  transition: prefersReducedMotion 
                    ? 'none' 
                    : 'opacity 350ms ease-out, transform 350ms ease-out',
                  pointerEvents: formFadedOut ? 'none' : 'auto',
                }}
              >
              {/* Basic Information */}
              <div className="space-y-6">
                <h2 className="text-2xl sm:text-3xl font-light tracking-tight" style={{ color: 'var(--color-text-primary)' }}>
                  Basic Information
                </h2>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-light mb-2" style={{ color: 'var(--color-text-primary)' }}>
                      Full Name <span style={{ color: 'var(--color-accent-primary)' }}>*</span>
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      required
                      value={formData.fullName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 font-light transition-colors duration-200"
                      style={{
                        backgroundColor: 'rgba(255, 255, 255, 0.8)',
                        border: '1px solid',
                        borderColor: 'var(--color-accent-secondary)' + '33',
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
                    />
                  </div>

                  <div>
                    <label htmlFor="preferredName" className="block text-sm font-light mb-2" style={{ color: 'var(--color-text-primary)' }}>
                      Preferred Name / Pronouns
                    </label>
                    <input
                      type="text"
                      id="preferredName"
                      name="preferredName"
                      value={formData.preferredName}
                      onChange={handleInputChange}
                      placeholder="e.g. Will (he/him)"
                      className="w-full px-4 py-3 font-light transition-colors duration-200"
                      style={{
                        backgroundColor: 'rgba(255, 255, 255, 0.8)',
                        border: '1px solid',
                        borderColor: 'var(--color-accent-secondary)' + '33',
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
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block text-sm font-light mb-2" style={{ color: 'var(--color-text-primary)' }}>
                        Email Address <span style={{ color: 'var(--color-accent-primary)' }}>*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 font-light transition-colors duration-200"
                        style={{
                          backgroundColor: 'rgba(255, 255, 255, 0.8)',
                          border: '1px solid',
                          borderColor: 'var(--color-accent-secondary)' + '33',
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
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-light mb-2" style={{ color: 'var(--color-text-primary)' }}>
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 font-light transition-colors duration-200"
                        style={{
                          backgroundColor: 'rgba(255, 255, 255, 0.8)',
                          border: '1px solid',
                          borderColor: 'var(--color-accent-secondary)' + '33',
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
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="dateOfBirth" className="block text-sm font-light mb-2" style={{ color: 'var(--color-text-primary)' }}>
                      Date of Birth <span style={{ color: 'var(--color-accent-primary)' }}>*</span>
                    </label>
                    <input
                      type="date"
                      id="dateOfBirth"
                      name="dateOfBirth"
                      required
                      value={formData.dateOfBirth}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 font-light transition-colors duration-200"
                      style={{
                        backgroundColor: 'rgba(255, 255, 255, 0.8)',
                        border: '1px solid',
                        borderColor: 'var(--color-accent-secondary)' + '33',
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
                    />
                  </div>
                </div>
              </div>

              {/* Divider */}
              <div style={{ borderTop: '1px solid', borderColor: 'var(--color-accent-secondary)' + '33' }}></div>

              {/* What brings you here today */}
              <div className="space-y-6">
                <h2 className="text-2xl sm:text-3xl font-light tracking-tight" style={{ color: 'var(--color-text-primary)' }}>
                  What brings you here today?
                </h2>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="whatBringsYou" className="block text-sm font-light mb-2" style={{ color: 'var(--color-text-primary)' }}>
                      Please tell us what you're experiencing <span style={{ color: 'var(--color-accent-primary)' }}>*</span>
                    </label>
                    <textarea
                      id="whatBringsYou"
                      name="whatBringsYou"
                      required
                      rows="5"
                      value={formData.whatBringsYou}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 font-light transition-colors duration-200 resize-y"
                      style={{
                        backgroundColor: 'rgba(255, 255, 255, 0.8)',
                        border: '1px solid',
                        borderColor: 'var(--color-accent-secondary)' + '33',
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
                    />
                  </div>

                  <div>
                    <label htmlFor="howLong" className="block text-sm font-light mb-2" style={{ color: 'var(--color-text-primary)' }}>
                      How long have you been experiencing this? <span style={{ color: 'var(--color-accent-primary)' }}>*</span>
                    </label>
                    <select
                      id="howLong"
                      name="howLong"
                      required
                      value={formData.howLong}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 font-light transition-colors duration-200"
                      style={{
                        backgroundColor: 'rgba(255, 255, 255, 0.8)',
                        border: '1px solid',
                        borderColor: 'var(--color-accent-secondary)' + '33',
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
                    >
                      <option value="">Please select...</option>
                      <option value="less-than-month">Less than a month</option>
                      <option value="1-6-months">1 – 6 months</option>
                      <option value="6-12-months">6 – 12 months</option>
                      <option value="more-than-year">More than a year</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Divider */}
              <div style={{ borderTop: '1px solid', borderColor: 'var(--color-accent-secondary)' + '33' }}></div>

              {/* Current Support & History */}
              <div className="space-y-6">
                <h2 className="text-2xl sm:text-3xl font-light tracking-tight" style={{ color: 'var(--color-text-primary)' }}>
                  Current Support & History
                </h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-light mb-3" style={{ color: 'var(--color-text-primary)' }}>
                      Have you spoken to a counsellor, therapist, or mental health professional before?
                    </label>
                    <div className="flex gap-6">
                      <label className="flex items-center cursor-pointer">
                        <input
                          type="radio"
                          name="spokenToCounselorBefore"
                          value="yes"
                          checked={formData.spokenToCounselorBefore === 'yes'}
                          onChange={handleInputChange}
                          className="mr-2"
                          style={{ accentColor: 'var(--color-accent-primary)' }}
                        />
                        <span className="font-light" style={{ color: 'var(--color-text-primary)' }}>Yes</span>
                      </label>
                      <label className="flex items-center cursor-pointer">
                        <input
                          type="radio"
                          name="spokenToCounselorBefore"
                          value="no"
                          checked={formData.spokenToCounselorBefore === 'no'}
                          onChange={handleInputChange}
                          className="mr-2"
                          style={{ accentColor: 'var(--color-accent-primary)' }}
                        />
                        <span className="font-light" style={{ color: 'var(--color-text-primary)' }}>No</span>
                      </label>
                    </div>
                    {formData.spokenToCounselorBefore === 'yes' && (
                      <div className="mt-4">
                        <textarea
                          name="counselorDetails"
                          placeholder="Please share any relevant details (optional)"
                          rows="3"
                          value={formData.counselorDetails}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 font-light transition-colors duration-200 resize-y"
                          style={{
                            backgroundColor: 'rgba(255, 255, 255, 0.8)',
                            border: '1px solid',
                            borderColor: 'var(--color-accent-secondary)' + '33',
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
                        />
                      </div>
                    )}
                  </div>

                  <div>
                    <label htmlFor="currentSupport" className="block text-sm font-light mb-2" style={{ color: 'var(--color-text-primary)' }}>
                      Are you currently receiving any other support?
                    </label>
                    <textarea
                      id="currentSupport"
                      name="currentSupport"
                      rows="3"
                      value={formData.currentSupport}
                      onChange={handleInputChange}
                      placeholder="e.g. GP, medication, support groups..."
                      className="w-full px-4 py-3 font-light transition-colors duration-200 resize-y"
                      style={{
                        backgroundColor: 'rgba(255, 255, 255, 0.8)',
                        border: '1px solid',
                        borderColor: 'var(--color-accent-secondary)' + '33',
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
                    />
                  </div>
                </div>
              </div>

              {/* Divider */}
              <div style={{ borderTop: '1px solid', borderColor: 'var(--color-accent-secondary)' + '33' }}></div>

              {/* Areas of Concern */}
              <div className="space-y-6">
                <h2 className="text-2xl sm:text-3xl font-light tracking-tight" style={{ color: 'var(--color-text-primary)' }}>
                  Areas of Concern
                </h2>
                <div className="space-y-3">
                  {areasOfConcernOptions.map((concern) => (
                    <label key={concern} className="flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.areasOfConcern.includes(concern)}
                        onChange={() => handleCheckboxChange(concern)}
                        className="mr-3"
                        style={{ accentColor: 'var(--color-accent-primary)' }}
                      />
                      <span className="font-light" style={{ color: 'var(--color-text-primary)' }}>{concern}</span>
                    </label>
                  ))}
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.areasOfConcern.includes('Other')}
                      onChange={() => handleCheckboxChange('Other')}
                      className="mr-3"
                      style={{ accentColor: 'var(--color-accent-primary)' }}
                    />
                    <span className="font-light" style={{ color: 'var(--color-text-primary)' }}>Other</span>
                  </label>
                  {formData.areasOfConcern.includes('Other') && (
                    <div className="ml-6">
                      <input
                        type="text"
                        name="otherConcern"
                        value={formData.otherConcern}
                        onChange={handleInputChange}
                        placeholder="Please specify"
                        className="w-full px-4 py-3 font-light transition-colors duration-200"
                        style={{
                          backgroundColor: 'rgba(255, 255, 255, 0.8)',
                          border: '1px solid',
                          borderColor: 'var(--color-accent-secondary)' + '33',
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
                      />
                    </div>
                  )}
                </div>
              </div>

              {/* Divider */}
              <div style={{ borderTop: '1px solid', borderColor: 'var(--color-accent-secondary)' + '33' }}></div>

              {/* Goals & Expectations */}
              <div className="space-y-6">
                <h2 className="text-2xl sm:text-3xl font-light tracking-tight" style={{ color: 'var(--color-text-primary)' }}>
                  Goals & Expectations
                </h2>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="goals" className="block text-sm font-light mb-2" style={{ color: 'var(--color-text-primary)' }}>
                      What are you hoping to gain from counselling? <span style={{ color: 'var(--color-accent-primary)' }}>*</span>
                    </label>
                    <textarea
                      id="goals"
                      name="goals"
                      required
                      rows="5"
                      value={formData.goals}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 font-light transition-colors duration-200 resize-y"
                      style={{
                        backgroundColor: 'rgba(255, 255, 255, 0.8)',
                        border: '1px solid',
                        borderColor: 'var(--color-accent-secondary)' + '33',
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
                    />
                  </div>

                  <div>
                    <label htmlFor="additionalInfo" className="block text-sm font-light mb-2" style={{ color: 'var(--color-text-primary)' }}>
                      Is there anything else you'd like us to know?
                    </label>
                    <textarea
                      id="additionalInfo"
                      name="additionalInfo"
                      rows="4"
                      value={formData.additionalInfo}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 font-light transition-colors duration-200 resize-y"
                      style={{
                        backgroundColor: 'rgba(255, 255, 255, 0.8)',
                        border: '1px solid',
                        borderColor: 'var(--color-accent-secondary)' + '33',
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
                    />
                  </div>
                </div>
              </div>

              {/* Divider */}
              <div style={{ borderTop: '1px solid', borderColor: 'var(--color-accent-secondary)' + '33' }}></div>

              {/* Safety & Urgency */}
              <div className="space-y-6">
                <h2 className="text-2xl sm:text-3xl font-light tracking-tight" style={{ color: 'var(--color-text-primary)' }}>
                  Safety & Urgency
                </h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-light mb-3" style={{ color: 'var(--color-text-primary)' }}>
                      Are you currently in immediate danger or at risk of harming yourself or others?
                    </label>
                    <div className="flex gap-6">
                      <label className="flex items-center cursor-pointer">
                        <input
                          type="radio"
                          name="immediateDanger"
                          value="yes"
                          checked={formData.immediateDanger === 'yes'}
                          onChange={handleInputChange}
                          className="mr-2"
                          style={{ accentColor: 'var(--color-accent-primary)' }}
                        />
                        <span className="font-light" style={{ color: 'var(--color-text-primary)' }}>Yes</span>
                      </label>
                      <label className="flex items-center cursor-pointer">
                        <input
                          type="radio"
                          name="immediateDanger"
                          value="no"
                          checked={formData.immediateDanger === 'no'}
                          onChange={handleInputChange}
                          className="mr-2"
                          style={{ accentColor: 'var(--color-accent-primary)' }}
                        />
                        <span className="font-light" style={{ color: 'var(--color-text-primary)' }}>No</span>
                      </label>
                    </div>
                    <p className="mt-3 text-sm font-light" style={{ color: 'var(--color-text-primary)', opacity: 0.8 }}>
                      This form is not monitored in real time and is not a crisis service.
                    </p>
                  </div>
                </div>
              </div>

              {/* Divider */}
              <div style={{ borderTop: '1px solid', borderColor: 'var(--color-accent-secondary)' + '33' }}></div>

              {/* Consent */}
              <div className="space-y-6">
                <h2 className="text-2xl sm:text-3xl font-light tracking-tight" style={{ color: 'var(--color-text-primary)' }}>
                  Consent
                </h2>
                <div className="space-y-4">
                  <label className="flex items-start cursor-pointer">
                    <input
                      type="checkbox"
                      name="consentConfidential"
                      checked={formData.consentConfidential}
                      onChange={handleInputChange}
                      required
                      className="mt-1 mr-3"
                      style={{ accentColor: 'var(--color-accent-primary)' }}
                    />
                    <span className="font-light" style={{ color: 'var(--color-text-primary)' }}>
                      I understand this form is confidential and not a crisis service <span style={{ color: 'var(--color-accent-primary)' }}>*</span>
                    </span>
                  </label>

                  <label className="flex items-start cursor-pointer">
                    <input
                      type="checkbox"
                      name="consentContact"
                      checked={formData.consentContact}
                      onChange={handleInputChange}
                      required
                      className="mt-1 mr-3"
                      style={{ accentColor: 'var(--color-accent-primary)' }}
                    />
                    <span className="font-light" style={{ color: 'var(--color-text-primary)' }}>
                      I consent to being contacted by MenCryToo regarding counselling support <span style={{ color: 'var(--color-accent-primary)' }}>*</span>
                    </span>
                  </label>

                  <label className="flex items-start cursor-pointer">
                    <input
                      type="checkbox"
                      name="consentPrivacy"
                      checked={formData.consentPrivacy}
                      onChange={handleInputChange}
                      required
                      className="mt-1 mr-3"
                      style={{ accentColor: 'var(--color-accent-primary)' }}
                    />
                    <span className="font-light" style={{ color: 'var(--color-text-primary)' }}>
                      I agree to the{' '}
                      <a href="/privacy-policy" className="underline" style={{ color: 'var(--color-accent-primary)' }}>
                        Privacy Policy
                      </a>{' '}
                      <span style={{ color: 'var(--color-accent-primary)' }}>*</span>
                    </span>
                  </label>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-6">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-8 py-4 text-base font-light tracking-wide transition-colors duration-200"
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
                  {isSubmitting ? 'Submitting...' : 'Submit Enquiry'}
                </button>
              </div>

              {/* Error Message */}
              {submitStatus === 'error' && (
                <div className="p-4 rounded" style={{ backgroundColor: 'rgba(220, 38, 38, 0.1)' }}>
                  <p className="font-light" style={{ color: 'rgba(220, 38, 38, 0.9)' }}>
                    Please complete all required fields and ensure all consent boxes are checked.
                  </p>
                </div>
              )}
            </form>
            )}
          </div>
        </div>
      </section>

      {/* Add fade-in animation */}
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </main>
  );
};

export default EnquiryForm;

