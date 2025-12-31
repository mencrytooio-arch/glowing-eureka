/**
 * About Us Page
 * Will's story with brand colors
 */
const About = () => {
  return (
    <main className="min-h-screen bg-brand-background">
      {/* Introduction Section */}
      <section className="bg-white section-spacing">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-brand-neutral mb-10">
              About Us
            </h1>
            
            <div className="space-y-5">
              <p className="text-2xl sm:text-3xl font-light text-brand-neutral leading-relaxed">
                MenCryToo was created with a simple goal in mind.
              </p>
              <p className="text-xl sm:text-2xl font-light text-brand-secondary leading-relaxed">
                To raise awareness and provide support for Men all over the world suffering with mental health issues.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* My Why Section */}
      <section className="bg-brand-background section-spacing">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-light tracking-tight text-brand-neutral mb-6">
              My Why?
            </h2>
            <div className="prose-content text-body space-y-5">
              <p>
                Growing up my Dad was my biggest inspiration and role model, watching him bring laughter, light and excitement to every room he walked in.
              </p>
              <p>
                That all changed in 2017 when he lost his long battle with his mental health.
              </p>
              <p>
                Seeing how he suffered day to day as well as the toll it took on his loved ones, I am always left with the regret that there was more I could have done.
              </p>
              <p>
                Now living with the aftermath of his suicide and the trauma my Mum and Sister both live with to this day, I want to make a difference to the next family, community and individual so their story does not take the same turn.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How we plan section */}
      <section className="bg-white section-spacing">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-light tracking-tight text-brand-neutral mb-6">
              How we plan to tackle such a task?
            </h2>
            <div className="prose-content text-body space-y-5">
              <p>
                By running a fully financially transparent company utilising the profits from clothing sales, collaborations and donations to fully fund comprehensive counselling packages for those in need. All while destroying the stigma associated with Men's mental health.
              </p>
              <p>
                With a long and bumpy road ahead, we are going to need all the support we can get, it would be great to have you along for the journey!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="bg-brand-background section-spacing">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="space-y-4 italic text-brand-secondary">
              <p className="text-xl sm:text-2xl font-light leading-comfortable">
                "Happiness can be found even in the darkest of times, if one only remembers to turn on the light."
              </p>
              <p className="text-base sm:text-lg font-light not-italic text-brand-secondary/80">
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
