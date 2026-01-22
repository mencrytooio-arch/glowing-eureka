/**
 * About Us Page
 * Will's story with dividers, consistent spacing, and unified text color
 */
const About = () => {
  return (
    <main className="min-h-screen" style={{ backgroundColor: 'var(--color-background)' }}>
      {/* Introduction Section */}
      <section style={{ backgroundColor: 'var(--color-background)', paddingTop: '3rem', paddingBottom: '0' }}>
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight mb-10" style={{ color: 'var(--color-text-primary)' }}>
              About Us
            </h1>
            
            <div className="space-y-2">
              <p className="text-2xl sm:text-3xl font-light leading-relaxed" style={{ color: 'var(--color-text-primary)' }}>
                MenCryToo was created with a simple goal in mind.
              </p>
              <p className="text-xl sm:text-2xl font-light leading-relaxed" style={{ color: 'var(--color-text-primary)' }}>
                To raise awareness and provide support for Men all over the world suffering with mental health issues.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* My Why Section */}
      <section style={{ backgroundColor: 'var(--color-background)', paddingTop: '0', paddingBottom: '1rem' }}>
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="mt-6 mb-6" style={{ borderTop: '1px solid', borderColor: 'var(--color-accent-secondary)' + '33' }}></div>
            <h2 className="text-2xl sm:text-3xl font-light tracking-tight mb-6" style={{ color: 'var(--color-text-primary)' }}>
              My Why?
            </h2>
            <div className="prose-content space-y-4">
              <p className="font-light" style={{ color: 'var(--color-text-primary)' }}>
                Growing up my Dad was my biggest inspiration and role model, watching him bring laughter, light and excitement to every room he walked in.
              </p>
              <p className="font-light" style={{ color: 'var(--color-text-primary)' }}>
                That all changed in 2017 when he lost his long battle with his mental health.
              </p>
              <p className="font-light" style={{ color: 'var(--color-text-primary)' }}>
                Seeing how he suffered day to day as well as the toll it took on his loved ones, I am always left with the regret that there was more I could have done.
              </p>
              <p className="font-light" style={{ color: 'var(--color-text-primary)' }}>
                Now living with the aftermath of his suicide and the trauma my Mum and Sister both live with to this day, I want to make a difference to the next family, community and individual so their story does not take the same turn.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How we plan section */}
      <section style={{ backgroundColor: 'var(--color-background)', paddingTop: '0', paddingBottom: '1rem' }}>
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="mt-6 mb-6" style={{ borderTop: '1px solid', borderColor: 'var(--color-accent-secondary)' + '33' }}></div>
            <h2 className="text-2xl sm:text-3xl font-light tracking-tight mb-6" style={{ color: 'var(--color-text-primary)' }}>
              How we plan to tackle such a task?
            </h2>
            <div className="prose-content space-y-4">
              <p className="font-light" style={{ color: 'var(--color-text-primary)' }}>
                By running a fully financially transparent company utilising the profits from clothing sales, collaborations and donations to fully fund comprehensive counselling packages for those in need. All while destroying the stigma associated with Men's mental health.
              </p>
              <p className="font-light" style={{ color: 'var(--color-text-primary)' }}>
                With a long and bumpy road ahead, we are going to need all the support we can get, it would be great to have you along for the journey!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section style={{ backgroundColor: 'var(--color-background)', paddingTop: '0', paddingBottom: '3rem' }}>
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="mt-6 mb-6" style={{ borderTop: '1px solid', borderColor: 'var(--color-accent-secondary)' + '33' }}></div>
            <div className="space-y-4 italic">
              <p className="text-xl sm:text-2xl font-light leading-comfortable" style={{ color: 'var(--color-text-primary)' }}>
                "Happiness can be found even in the darkest of times, if one only remembers to turn on the light."
              </p>
              <p className="text-base sm:text-lg font-light not-italic" style={{ color: 'var(--color-text-primary)' }}>
                — Albus Dumbledore, Harry Potter and the Prisoner of Azkaban
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
