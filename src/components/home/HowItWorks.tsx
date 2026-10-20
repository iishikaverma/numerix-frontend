const steps = [
  {
    number: "01",
    title: "Choose a Method",
    description:
      "Select the numerical method that fits your problem, from root finding to interpolation.",
    symbol: "∑",
  },
  {
    number: "02",
    title: "Enter Your Problem",
    description:
      "Provide your equation, initial values, interval, tolerance, or interpolation data.",
    symbol: "f(x)",
  },
  {
    number: "03",
    title: "Explore the Solution",
    description:
      "See the result along with iterations, calculations, tables, and visualizations.",
    symbol: "√",
  },
];

function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="relative overflow-hidden border-t border-white/5 bg-slate-950 px-6 py-28"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[450px] w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-500/5 blur-[130px]" />

      <div className="relative mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
            Simple Workflow
          </p>

          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            From problem
            <br />
            <span className="text-slate-500">to solution.</span>
          </h2>

          <p className="mt-5 text-slate-400">
            NUMERIX turns numerical computation into a clear,
            step-by-step experience.
          </p>
        </div>

        {/* Steps */}
        <div className="relative mt-20 grid gap-12 md:grid-cols-3 md:gap-8">

          {/* Connecting line */}
          <div className="pointer-events-none absolute left-[16.66%] right-[16.66%] top-8 hidden h-px bg-gradient-to-r from-cyan-400/40 via-purple-400/40 to-emerald-400/40 md:block" />

          {steps.map((step) => (
            <div
              key={step.number}
              className="group relative text-center"
            >
              {/* Number / symbol */}
              <div className="relative mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-slate-900 text-xl font-semibold text-cyan-400 shadow-[0_0_30px_rgba(34,211,238,0.05)] transition duration-300 group-hover:-translate-y-2 group-hover:border-cyan-400/40 group-hover:shadow-[0_0_30px_rgba(34,211,238,0.15)]">
                {step.symbol}

                <span className="absolute -right-3 -top-3 flex h-7 w-7 items-center justify-center rounded-full border border-slate-800 bg-slate-950 text-[10px] font-bold text-slate-500">
                  {step.number}
                </span>
              </div>

              {/* Content */}
              <h3 className="mt-7 text-xl font-semibold text-white">
                {step.title}
              </h3>

              <p className="mx-auto mt-3 max-w-sm text-sm leading-6 text-slate-400">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="relative mt-24 overflow-hidden rounded-3xl border border-cyan-400/10 bg-gradient-to-br from-cyan-400/10 via-slate-900 to-purple-400/10 p-8 text-center sm:p-12">

          <div className="pointer-events-none absolute left-1/2 top-0 h-40 w-80 -translate-x-1/2 rounded-full bg-cyan-400/10 blur-[80px]" />

          <div className="relative">
            <p className="text-sm font-medium text-cyan-300">
              Ready to calculate?
            </p>

            <h3 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
              Turn mathematics into something you can see.
            </h3>

            <p className="mx-auto mt-4 max-w-xl text-slate-400">
              Pick a method and start exploring numerical computation
              interactively.
            </p>

            <a
              href="#methods"
              className="mt-8 inline-flex rounded-xl bg-cyan-400 px-7 py-3.5 font-semibold text-slate-950 transition duration-300 hover:-translate-y-1 hover:bg-cyan-300 hover:shadow-[0_0_30px_rgba(34,211,238,0.25)]"
            >
              Explore Methods →
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}

export default HowItWorks;