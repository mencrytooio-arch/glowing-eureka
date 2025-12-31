/**
 * How We Work Page
 * Financial transparency with brand colors
 */
const HowWeWork = () => {
  return (
    <main className="min-h-screen bg-brand-light">
      {/* Header */}
      <section className="bg-white section-spacing border-b border-brand-secondary/20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-brand-primary mb-6">
              How We Work
            </h1>
          </div>
        </div>
      </section>

      {/* The Financials Section */}
      <section className="bg-brand-light section-spacing">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-light tracking-tight text-brand-primary mb-10">
              The Financials
            </h2>

            <div className="space-y-12">
              {/* Transparency */}
              <div className="space-y-5">
                <h3 className="text-xl sm:text-2xl font-normal tracking-tight text-brand-primary">
                  Transparency
                </h3>
                <div className="prose-content text-body space-y-4">
                  <p className="font-normal">
                    Full financial transparency is key for our concept to succeed.
                  </p>
                  <p className="font-normal">
                    Everything from manufacturing costs to wages will be made publicly available to view at anytime.
                  </p>
                  <p className="text-brand-secondary font-normal">
                    Tracking through this link.
                  </p>
                </div>
              </div>

              {/* Divider */}
              <div className="border-t border-brand-secondary/20"></div>

              {/* Income */}
              <div className="space-y-5">
                <h3 className="text-xl sm:text-2xl font-normal tracking-tight text-brand-primary">
                  Income
                </h3>
                <div className="prose-content text-body space-y-4">
                  <p className="font-normal">
                    The primary source of income will be through the clothing sales.
                  </p>
                  <p className="font-normal">
                    With this doubling up as marketing the brand and spreading awareness.
                  </p>
                  <p className="font-normal">
                    As the brand and concept grows additional support through collaborations, donations, grants and sponsorships may become apparent.
                  </p>
                </div>
              </div>

              {/* Divider */}
              <div className="border-t border-brand-secondary/20"></div>

              {/* Expenses */}
              <div className="space-y-5">
                <h3 className="text-xl sm:text-2xl font-normal tracking-tight text-brand-primary">
                  Expenses
                </h3>
                <div className="prose-content text-body space-y-4">
                  <p className="font-normal">
                    As with running any business comes costs.
                  </p>
                  <p className="font-normal">
                    Initially the main costs will come from the clothing R&D and manufacturing costs themselves, alongside any website and design costing.
                  </p>
                  <p className="font-normal">
                    With the overall aim that as the business grows and becomes profitable, the money generated is used to cover these costs alongside building a 'rainy day' fund for the business to cover any unexpected urgent costs.
                  </p>
                  <p className="font-normal">
                    Anything additional will be used to cover counselling packages for those in need of the support.
                  </p>
                  <p className="font-normal text-brand-primary">
                    With each package allowing for 25 sessions of paid counselling, leaving the estimated cost of £3000 per package.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Support Section */}
      <section className="bg-white section-spacing">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-light tracking-tight text-brand-primary mb-10">
              Our Support
            </h2>

            <div className="space-y-12">
              {/* Counselling Package */}
              <div className="space-y-5">
                <h3 className="text-xl sm:text-2xl font-normal tracking-tight text-brand-primary">
                  Counselling Package
                </h3>
                <div className="prose-content text-body space-y-4">
                  <p className="font-normal">
                    Each counselling block will consist of up to 25 sessions of paid counselling.
                  </p>
                  <p className="font-normal">
                    Estimating that each 50 minute session of virtual counselling will cost £100 (GBP) per session.
                  </p>
                  <p className="font-normal text-brand-primary">
                    The amount needed per person totals £3000.
                  </p>
                  <p className="font-normal">
                    Counselling is not one size fits all.
                  </p>
                  <p className="font-normal">
                    Finding the right counsellor is paramount to the success of the counselling journey.
                  </p>
                  <p className="font-normal">
                    Therefore, in the package we have included the option to try 2–4 counsellors to find the right fit.
                  </p>
                </div>
              </div>

              {/* Divider */}
              <div className="border-t border-brand-secondary/20"></div>

              {/* Intake */}
              <div className="space-y-5">
                <h3 className="text-xl sm:text-2xl font-normal tracking-tight text-brand-primary">
                  Intake
                </h3>
                <div className="prose-content text-body space-y-4">
                  <p className="font-normal">
                    Intake will be done on a first come, first serve basis — as we grow and become more experienced, this is open to change.
                  </p>
                  <p className="font-normal">
                    Initially our head counsellors will review the information provided by an individual.
                  </p>
                  <p className="font-normal">
                    Allowing them to make an educated suggestion on which 2–4 of our partnered counsellors they think you would be best suited for.
                  </p>
                </div>
              </div>

              {/* Divider */}
              <div className="border-t border-brand-secondary/20"></div>

              {/* Our Counsellors */}
              <div className="space-y-5">
                <h3 className="text-xl sm:text-2xl font-normal tracking-tight text-brand-primary">
                  Our Counsellors
                </h3>
                <div className="prose-content text-body space-y-4">
                  <p className="font-normal">
                    Each of our partnered counsellors will be thoroughly vetted.
                  </p>
                  <p className="font-normal">
                    As to what this process looks like initially is unknown but will be updated once figured out.
                  </p>
                  <p className="font-normal">
                    Certification and accreditation will be required to apply alongside the willingness to have any financial transaction between MenCryToo and themselves open for the public to see.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HowWeWork;
