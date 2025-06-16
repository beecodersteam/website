export default function ContactForm() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 session" id="contact">
        <div className="pb-12 md:pb-20">

          {/* CTA box */}
          <div className="relative bg-beePrimary-normal rounded py-10 px-8 md:py-16 md:px-12 shadow-2xl overflow-hidden" data-aos="zoom-y-out">

            {/* Background illustration */}
            <div className="absolute right-0 bottom-0 pointer-events-none hidden lg:block" aria-hidden="true">
              <svg width="428" height="328" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <radialGradient cx="35.542%" cy="34.553%" fx="35.542%" fy="34.553%" r="96.031%" id="ni-a">
                    <stop stopColor="#DFDFDF" offset="0%" />
                    <stop stopColor="#4C4C4C" offset="44.317%" />
                    <stop stopColor="#333" offset="100%" />
                  </radialGradient>
                </defs>
                <g fill="none" fillRule="evenodd">
                  <g fill="yellow">
                    <ellipse fillOpacity=".04" cx="185" cy="15.576" rx="16" ry="15.576" />
                    <ellipse fillOpacity=".24" cx="100" cy="68.402" rx="24" ry="23.364" />
                    <ellipse fillOpacity=".12" cx="29" cy="251.231" rx="29" ry="28.231" />
                    <ellipse fillOpacity=".64" cx="29" cy="251.231" rx="8" ry="7.788" />
                    <ellipse fillOpacity=".12" cx="342" cy="31.303" rx="8" ry="7.788" />
                    <ellipse fillOpacity=".48" cx="62" cy="126.811" rx="2" ry="1.947" />
                    <ellipse fillOpacity=".12" cx="78" cy="7.072" rx="2" ry="1.947" />
                    <ellipse fillOpacity=".64" cx="185" cy="15.576" rx="6" ry="5.841" />
                  </g>
                  <circle fill="#FBC700" cx="276" cy="237" r="200" />
                </g>
              </svg>
            </div>

            <div className="relative flex flex-col lg:flex-row justify-between items-center">

              {/* CTA content */}
              <div className="text-center lg:text-left lg:max-w-xl">
                <h3 className="h3 text-white mb-2">Got something to say?</h3>
                <p className="text-gray-300 text-lg mb-6">Send us a message. We can't wait to hear from you.</p>

                {/* CTA form */}
                <form className="w-full lg:w-auto">
                  <div className="flex flex-col sm:flex-row justify-center max-w-xs mx-auto sm:max-w-md lg:mx-0">
                    <textarea className="form-input w-full appearance-none bg-white border border-gray-300 focus:border-beePrimary-light focus:ring-2 focus:ring-beePrimary-light rounded-md px-4 py-3 mb-2 h-24 text-gray-900 placeholder-gray-500 resize-none" placeholder="Your message…" aria-label="Your message…" />
                  </div>
                  <div className="flex flex-col sm:flex-row justify-center max-w-xs mx-auto sm:max-w-md lg:mx-0">
                    <input type="email" className="form-input w-full appearance-none bg-white border border-gray-300 focus:border-beePrimary-light focus:ring-2 focus:ring-beePrimary-light rounded-md px-4 py-3 mb-2 sm:mb-0 sm:mr-2 text-gray-900 placeholder-gray-500" placeholder="Your email…" aria-label="Your email…" />
                    <a className="btn text-beePrimary-normal bg-beeSecondary-normal hover:bg-beeSecondary-dark shadow rounded-md" href="#0">Send</a>
                  </div>

                  {/* Success message */}
                  {/* <p className="text-sm text-gray-400 mt-3">Thanks for subscribing!</p> */}
                  <p className="text-sm text-gray-400 mt-3">We'll respond as soon as possible.</p>
                </form>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  )
}