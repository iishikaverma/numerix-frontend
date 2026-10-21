const highlights = [
  {
    symbol: "ƒ",
    title: "Root Finding",
    description:
      "Bisection, Secant, and Newton-Raphson for locating where an equation equals zero.",
  },
  {
    symbol: "∿",
    title: "Interpolation",
    description:
      "Lagrange and Newton's Divided Differences for estimating values between known data points.",
  },
  {
    symbol: "≡",
    title: "Step by Step",
    description:
      "Every solve returns the final answer along with the full iteration and calculation table.",
  },
  {
    symbol: "⚙",
    title: "Real Computation",
    description:
      "A dedicated C++ engine runs each method, so results come from actual numerical code — not approximations in the browser.",
  },
];

function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden border-t border-white/5 bg-slate-950 px-6 py-28"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[400px] w-[600px] -translate-x-1/2 rounded-full bg-cyan-500/5 blur-[130px]" />

      <div className="relative mx-auto max-w-7xl">

        <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">

          {/* Left: narrative */}
          <div className="max-w-xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
              About NUMERIX
            </p>

            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Numerical methods,
              <br />
              <span className="text-slate-500">made understandable.</span>
            </h2>

            <p className="mt-6 leading-7 text-slate-400">
              NUMERIX is an interactive computational mathematics tool that
              brings classical numerical methods to life. Instead of treating
              these algorithms as black boxes, it shows exactly how a solution
              is reached — one iteration at a time.
            </p>

            <p className="mt-4 leading-7 text-slate-400">
              Enter an equation or a set of data points, choose a method, and
              NUMERIX returns both the final result and the intermediate steps
              behind it. It's built to make root-finding and interpolation
              easier to learn, verify, and explore.
            </p>

            <p className="mt-8 text-sm leading-6 text-slate-500">
              Built with a React and TypeScript interface powered by a C++
              numerical engine — combining a modern, responsive experience with
              genuine computational accuracy.
            </p>
          </div>

          {/* Right: highlight grid */}
          <div className="grid gap-5 sm:grid-cols-2">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="group rounded-2xl border border-white/10 bg-slate-900/50 p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:shadow-[0_0_30px_rgba(34,211,238,0.08)]"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-slate-950 text-lg text-cyan-400">
                  {item.symbol}
                </div>

                <h3 className="mt-5 text-base font-semibold text-white">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-400">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

export default About;
