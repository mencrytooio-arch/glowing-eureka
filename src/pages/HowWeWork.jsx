/**
 * How We Work Page
 * Financial transparency with unified text color and divider before Our Support
 */
const HowWeWork = () => {
  return (
    <main className="min-h-screen" style={{ backgroundColor: 'var(--color-background)' }}>
      {/* Header */}
      <section 
        style={{ 
          backgroundColor: 'var(--color-background)',
          paddingTop: '3rem',
          paddingBottom: '0',
        }}
      >
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight mb-10" style={{ color: 'var(--color-text-primary)' }}>
              How We Work
            </h1>
          </div>
        </div>
      </section>

      {/* The Financials Section */}
      <section style={{ backgroundColor: 'var(--color-background)', paddingTop: '0', paddingBottom: '1rem' }}>
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-light tracking-tight mb-6" style={{ color: 'var(--color-text-primary)' }}>
              The Financials
            </h2>

            <div className="prose-content space-y-4">
              <h3 className="text-xl sm:text-2xl font-light tracking-tight" style={{ color: 'var(--color-text-primary)' }}>
                Transparency
              </h3>
              <p className="font-light" style={{ color: 'var(--color-text-primary)' }}>
                Full financial transparency is key for our concept to succeed.
              </p>
              <p className="font-light" style={{ color: 'var(--color-text-primary)' }}>
                Everything from manufacturing costs to wages will be made publicly available to view at anytime.
              </p>
              <p className="font-light" style={{ color: 'var(--color-text-primary)' }}>
                Tracking through this link.
              </p>

              {/* Divider */}
              <div className="mt-6 mb-6" style={{ borderTop: '1px solid', borderColor: 'var(--color-accent-secondary)' + '33' }}></div>

              <h3 className="text-xl sm:text-2xl font-light tracking-tight" style={{ color: 'var(--color-text-primary)' }}>
                Income
              </h3>
              <p className="font-light" style={{ color: 'var(--color-text-primary)' }}>
                The primary source of income will be through the clothing sales.
              </p>
              <p className="font-light" style={{ color: 'var(--color-text-primary)' }}>
                With this doubling up as marketing the brand and spreading awareness.
              </p>
              <p className="font-light" style={{ color: 'var(--color-text-primary)' }}>
                As the brand and concept grows additional support through collaborations, donations, grants and sponsorships may become apparent.
              </p>

              {/* Divider */}
              <div className="mt-6 mb-6" style={{ borderTop: '1px solid', borderColor: 'var(--color-accent-secondary)' + '33' }}></div>

              <h3 className="text-xl sm:text-2xl font-light tracking-tight" style={{ color: 'var(--color-text-primary)' }}>
                Expenses
              </h3>
              <p className="font-light" style={{ color: 'var(--color-text-primary)' }}>
                As with running any business comes costs.
              </p>
              <p className="font-light" style={{ color: 'var(--color-text-primary)' }}>
                Initially the main costs will come from the clothing R&D and manufacturing costs themselves, alongside any website and design costing.
              </p>
              <p className="font-light" style={{ color: 'var(--color-text-primary)' }}>
                With the overall aim that as the business grows and becomes profitable, the money generated is used to cover these costs alongside building a 'rainy day' fund for the business to cover any unexpected urgent costs.
              </p>
              <p className="font-light" style={{ color: 'var(--color-text-primary)' }}>
                Anything additional will be used to cover counselling packages for those in need of the support.
              </p>
              <p className="font-light" style={{ color: 'var(--color-text-primary)' }}>
                With each package allowing for 25 sessions of paid counselling, leaving the estimated cost of £3000 per package.
              </p>
            </div>

            {/* Divider before Our Support */}
            <div className="mt-6 mb-6" style={{ borderTop: '1px solid', borderColor: 'var(--color-accent-secondary)' + '33' }}></div>
          </div>
        </div>
      </section>

      {/* Our Support Section */}
      <section style={{ backgroundColor: 'var(--color-background)', paddingTop: '0', paddingBottom: '3rem' }}>
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-light tracking-tight mb-6" style={{ color: 'var(--color-text-primary)' }}>
              Our Support
            </h2>

            <div className="prose-content space-y-4">
              <h3 className="text-xl sm:text-2xl font-light tracking-tight" style={{ color: 'var(--color-text-primary)' }}>
                Counselling Package
              </h3>
              <p className="font-light" style={{ color: 'var(--color-text-primary)' }}>
                Each counselling block will consist of up to 25 sessions of paid counselling.
              </p>
              <p className="font-light" style={{ color: 'var(--color-text-primary)' }}>
                Estimating that each 50 minute session of virtual counselling will cost £100 (GBP) per session.
              </p>
              <p className="font-light" style={{ color: 'var(--color-text-primary)' }}>
                The amount needed per person totals £3000.
              </p>
              <p className="font-light" style={{ color: 'var(--color-text-primary)' }}>
                Counselling is not one size fits all.
              </p>
              <p className="font-light" style={{ color: 'var(--color-text-primary)' }}>
                Finding the right counsellor is paramount to the success of the counselling journey.
              </p>
              <p className="font-light" style={{ color: 'var(--color-text-primary)' }}>
                Therefore, in the package we have included the option to try 2–4 counsellors to find the right fit.
              </p>

              {/* Divider */}
              <div className="mt-6 mb-6" style={{ borderTop: '1px solid', borderColor: 'var(--color-accent-secondary)' + '33' }}></div>

              <h3 className="text-xl sm:text-2xl font-light tracking-tight" style={{ color: 'var(--color-text-primary)' }}>
                Intake
              </h3>
              <p className="font-light" style={{ color: 'var(--color-text-primary)' }}>
                Intake will be done on a first come, first serve basis — as we grow and become more experienced, this is open to change.
              </p>
              <p className="font-light" style={{ color: 'var(--color-text-primary)' }}>
                Initially our head counsellors will review the information provided by an individual.
              </p>
              <p className="font-light" style={{ color: 'var(--color-text-primary)' }}>
                Allowing them to make an educated suggestion on which 2–4 of our partnered counsellors they think you would be best suited for.
              </p>

              {/* Divider */}
              <div className="mt-6 mb-6" style={{ borderTop: '1px solid', borderColor: 'var(--color-accent-secondary)' + '33' }}></div>

              <h3 className="text-xl sm:text-2xl font-light tracking-tight" style={{ color: 'var(--color-text-primary)' }}>
                Our Counsellors
              </h3>
              <p className="font-light" style={{ color: 'var(--color-text-primary)' }}>
                Each of our partnered counsellors will be thoroughly vetted.
              </p>
              <p className="font-light" style={{ color: 'var(--color-text-primary)' }}>
                As to what this process looks like initially is unknown but will be updated once figured out.
              </p>
              <p className="font-light" style={{ color: 'var(--color-text-primary)' }}>
                Certification and accreditation will be required to apply alongside the willingness to have any financial transaction between MenCryToo and themselves open for the public to see.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HowWeWork;
