/**
 * About Us Page
 * Will's story - verbatim content
 */
const About = () => {
  return (
    <main className="min-h-screen">
      <section className="container-custom py-16 sm:py-24">
        <div className="max-w-3xl mx-auto">
          {/* Page Header */}
          <div className="mb-16 sm:mb-20">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-neutral-900 mb-6">
              About Us
            </h1>
          </div>

          {/* Content */}
          <div className="space-y-12 sm:space-y-16 text-body text-lg sm:text-xl leading-relaxed">
            {/* Introduction */}
            <div className="space-y-6">
              <p className="text-2xl sm:text-3xl font-light text-neutral-900">
                MenCryToo was created with a simple goal in mind.
              </p>
              <p className="text-xl sm:text-2xl font-light text-neutral-700">
                To raise awareness and provide support for Men all over the world suffering with mental health issues.
              </p>
            </div>

            {/* Section Divider */}
            <div className="border-t border-neutral-200 pt-12"></div>

            {/* My Why */}
            <div className="space-y-6">
              <h2 className="text-2xl sm:text-3xl font-light tracking-tight text-neutral-900">
                My Why?
              </h2>
              <div className="space-y-6">
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

            {/* Section Divider */}
            <div className="border-t border-neutral-200 pt-12"></div>

            {/* How we plan to tackle */}
            <div className="space-y-6">
              <h2 className="text-2xl sm:text-3xl font-light tracking-tight text-neutral-900">
                How we plan to tackle such a task?
              </h2>
              <div className="space-y-6">
                <p>
                  By running a fully financially transparent company utilising the profits from clothing sales, collaborations and donations to fully fund comprehensive counselling packages for those in need. All while destroying the stigma associated with Men's mental health.
                </p>
                <p>
                  With a long and bumpy road ahead, we are going to need all the support we can get, it would be great to have you along for the journey!
                </p>
              </div>
            </div>

            {/* Signature */}
            <div className="pt-8">
              <p className="text-neutral-900 font-light">— Will</p>
            </div>

            {/* Section Divider */}
            <div className="border-t border-neutral-200 pt-12"></div>

            {/* Quote */}
            <div className="space-y-4 italic text-neutral-600">
              <p className="text-xl sm:text-2xl font-light leading-relaxed">
                "Happiness can be found even in the darkest of times, if one only remembers to turn on the light."
              </p>
              <p className="text-base sm:text-lg font-light not-italic">
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
