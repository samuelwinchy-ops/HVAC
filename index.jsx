export default function HVACQuoteLandingPage() {
  const benefits = [
    {
      title: "100% Free and No Obligation",
      description:
        "Compare local air conditioning installers without paying upfront or committing to anything.",
      icon: "✓",
    },
    {
      title: "Fast and Secure",
      description:
        "Simple multi-step form with a clean layout that helps users complete the process quickly.",
      icon: "⚡",
    },
    {
      title: "Expert Guidance",
      description:
        "Get matched with vetted professionals for installation, replacement, or maintenance.",
      icon: "☎",
    },
  ];

  const trustLogos = ["Featured in", "Trusted by homeowners", "Verified installers"];

  const steps = [
    {
      step: "01",
      title: "Tell us what you need",
      text: "Answer a few short questions about your property, goals, and preferred timeline.",
    },
    {
      step: "02",
      title: "Get matched locally",
      text: "We connect you with suitable air conditioning specialists in your area.",
    },
    {
      step: "03",
      title: "Compare quotes confidently",
      text: "Review offers, ask questions, and choose the installer that fits best.",
    },
  ];

  const fields = [
    {
      label: "What do you need?",
      type: "buttons",
      options: ["New installation", "Replacement", "Repair", "Maintenance"],
    },
    {
      label: "Property type",
      type: "buttons",
      options: ["House", "Flat / Apartment", "Office", "Commercial"],
    },
    {
      label: "How many rooms need cooling?",
      type: "buttons",
      options: ["1 room", "2 rooms", "3 rooms", "4+ rooms"],
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-sky-500/10 to-emerald-400/10" />
        <div className="absolute -top-24 right-0 h-80 w-80 rounded-full bg-cyan-400/20 blur-3xl" />
        <div className="absolute -bottom-24 left-0 h-80 w-80 rounded-full bg-emerald-400/15 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl gap-10 px-6 py-8 lg:grid-cols-[1.1fr_0.9fr] lg:px-10 lg:py-12">
          <div className="flex min-h-[620px] flex-col justify-between">
            <div>
              <div className="mb-8 flex flex-wrap items-center gap-4 text-sm text-slate-300">
                <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2">
                  Free quote matching service
                </div>
                <div className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-cyan-200">
                  English version · cleaner UX
                </div>
              </div>

              <div className="mb-8 flex items-center justify-between gap-4">
                <div>
                  <div className="text-xs uppercase tracking-[0.25em] text-cyan-300">
                    CoolHome Compare
                  </div>
                  <div className="mt-2 text-sm text-slate-400">
                    Find trusted local AC installers
                  </div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-right shadow-2xl backdrop-blur">
                  <div className="text-xs uppercase tracking-wide text-slate-400">Need help?</div>
                  <div className="mt-1 text-lg font-semibold text-white">0800 123 4567</div>
                </div>
              </div>

              <h1 className="max-w-2xl text-4xl font-semibold leading-tight tracking-tight text-white md:text-6xl">
                Compare air conditioning quotes with a faster, more user-friendly form.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                Built around the same high-conversion structure as the reference page, but redesigned in English with better spacing, stronger visual hierarchy, and more modern colours.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#quote-form"
                  className="rounded-2xl bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/30 transition hover:-translate-y-0.5"
                >
                  Start Free Quote
                </a>
                <a
                  href="#how-it-works"
                  className="rounded-2xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10"
                >
                  See How It Works
                </a>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                {benefits.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-xl shadow-black/20 backdrop-blur"
                  >
                    <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 to-emerald-400 text-lg font-bold text-slate-950">
                      {item.icon}
                    </div>
                    <h3 className="text-base font-semibold text-white">{item.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-300">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-10 rounded-3xl border border-white/10 bg-slate-900/60 p-5 shadow-2xl backdrop-blur">
              <div className="text-xs uppercase tracking-[0.25em] text-slate-400">As seen in / trust signals</div>
              <div className="mt-4 grid gap-3 sm:grid-cols-3">
                {trustLogos.map((logo) => (
                  <div
                    key={logo}
                    className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-center text-sm font-medium text-slate-200"
                  >
                    {logo}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div id="quote-form" className="lg:pt-6">
            <div className="rounded-[32px] border border-white/10 bg-white p-6 text-slate-900 shadow-[0_30px_80px_rgba(0,0,0,0.35)] md:p-8">
              <div className="mb-6 flex items-center justify-between gap-4">
                <div>
                  <div className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-700">
                    Free quote form
                  </div>
                  <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-950 md:text-3xl">
                    Find local air conditioning installers
                  </h2>
                </div>
                <div className="rounded-2xl bg-slate-100 px-4 py-3 text-center">
                  <div className="text-xs uppercase tracking-wide text-slate-500">Takes</div>
                  <div className="text-lg font-semibold text-slate-900">~2 min</div>
                </div>
              </div>

              <div className="mb-6 h-2 overflow-hidden rounded-full bg-slate-100">
                <div className="h-full w-1/3 rounded-full bg-gradient-to-r from-cyan-500 to-emerald-400" />
              </div>

              <div className="space-y-7">
                {fields.map((field) => (
                  <div key={field.label}>
                    <label className="mb-3 block text-sm font-semibold text-slate-800">{field.label}</label>
                    <div className="grid gap-3 sm:grid-cols-2">
                      {field.options.map((option) => (
                        <button
                          key={option}
                          type="button"
                          className="rounded-2xl border border-slate-200 bg-white px-4 py-4 text-left text-sm font-medium text-slate-700 transition hover:border-cyan-400 hover:bg-cyan-50 hover:text-slate-950"
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-3 block text-sm font-semibold text-slate-800">Postcode</label>
                    <input
                      type="text"
                      placeholder="e.g. SW1A 1AA"
                      className="w-full rounded-2xl border border-slate-200 px-4 py-4 text-sm outline-none transition focus:border-cyan-500"
                    />
                  </div>
                  <div>
                    <label className="mb-3 block text-sm font-semibold text-slate-800">Preferred timeframe</label>
                    <select className="w-full rounded-2xl border border-slate-200 px-4 py-4 text-sm outline-none transition focus:border-cyan-500">
                      <option>As soon as possible</option>
                      <option>Within 1 month</option>
                      <option>Within 3 months</option>
                      <option>Just researching</option>
                    </select>
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-3 block text-sm font-semibold text-slate-800">Full name</label>
                    <input
                      type="text"
                      placeholder="Your name"
                      className="w-full rounded-2xl border border-slate-200 px-4 py-4 text-sm outline-none transition focus:border-cyan-500"
                    />
                  </div>
                  <div>
                    <label className="mb-3 block text-sm font-semibold text-slate-800">Phone number</label>
                    <input
                      type="tel"
                      placeholder="Your phone number"
                      className="w-full rounded-2xl border border-slate-200 px-4 py-4 text-sm outline-none transition focus:border-cyan-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-3 block text-sm font-semibold text-slate-800">Email address</label>
                  <input
                    type="email"
                    placeholder="you@example.com"
                    className="w-full rounded-2xl border border-slate-200 px-4 py-4 text-sm outline-none transition focus:border-cyan-500"
                  />
                </div>

                <div className="rounded-2xl bg-slate-50 p-4 text-sm leading-6 text-slate-600">
                  This service is completely free and non-binding. Your details are only used to match you with relevant local professionals.
                </div>

                <button
                  type="submit"
                  className="w-full rounded-2xl bg-slate-950 px-6 py-4 text-sm font-semibold text-white shadow-xl transition hover:-translate-y-0.5"
                >
                  Continue and Compare Quotes
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="how-it-works" className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="mb-12 max-w-2xl">
          <div className="text-sm font-medium uppercase tracking-[0.25em] text-cyan-300">How it works</div>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-5xl">
            A simpler quote journey with less friction.
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-300">
            The reference page relies heavily on trust markers and a lead form. This version keeps that conversion logic, but improves readability, mobile responsiveness, and visual polish.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {steps.map((item) => (
            <div key={item.step} className="rounded-3xl border border-white/10 bg-white/5 p-7 shadow-2xl backdrop-blur">
              <div className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">Step {item.step}</div>
              <h3 className="mt-4 text-xl font-semibold text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-white/10 bg-slate-900/80">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 py-8 lg:grid-cols-[1fr_auto] lg:px-10">
          <div>
            <div className="text-lg font-semibold text-white">CoolHome Compare</div>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-400">
              A modern English landing page for generating air conditioning leads with clearer messaging, softer contrast, and a more premium feel.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-4 text-sm text-slate-400">
            <span>Privacy</span>
            <span>Terms</span>
            <span>Imprint</span>
          </div>
        </div>
      </section>
    </div>
  );
}
