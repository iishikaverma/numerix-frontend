function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-20"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[140px]" />

      {/* Decorative math symbols */}
      <div className="pointer-events-none absolute left-[10%] top-[25%] hidden text-4xl text-cyan-400/20 md:block">
        ∫
      </div>

      <div className="pointer-events-none absolute right-[12%] top-[28%] hidden text-5xl text-purple-400/20 md:block">
        ∑
      </div>

      <div className="pointer-events-none absolute bottom-[25%] left-[15%] hidden text-3xl text-emerald-400/20 md:block">
        √x
      </div>

      <div className="pointer-events-none absolute bottom-[20%] right-[15%] hidden text-4xl text-blue-400/20 md:block">
        f(x)
      </div>

      {/* Hero content */}
      <div className="relative z-10 mx-auto max-w-5xl text-center">

        {/* Badge */}
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 text-sm text-cyan-300 backdrop-blur-sm">
          <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-400" />
          Interactive Numerical Computing
        </div>

        {/* Heading */}
        <h1 className="text-6xl font-bold tracking-tight sm:text-7xl lg:text-8xl">
          Numerical Methods
          <br />
          <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            Made Interactive.
          </span>
        </h1>

        {/* Description */}
        <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-slate-400 sm:text-xl">
          Solve numerical problems, visualize every iteration, and understand
          how mathematical algorithms actually work.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">

          <a
            href="#methods"
            className="group rounded-xl bg-cyan-400 px-7 py-3.5 font-semibold text-slate-950 transition duration-300 hover:-translate-y-1 hover:bg-cyan-300 hover:shadow-[0_0_35px_rgba(34,211,238,0.3)]"
          >
            Explore Methods
            <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>

          <a
            href="#how-it-works"
            className="rounded-xl border border-slate-700 px-7 py-3.5 font-semibold text-slate-300 transition duration-300 hover:border-cyan-400/40 hover:bg-slate-900 hover:text-white"
          >
            How It Works
          </a>

        </div>

        {/* Small stats */}
        <div className="mx-auto mt-16 grid max-w-lg grid-cols-3 border-t border-white/10 pt-8">

          <div>
            <p className="text-2xl font-bold text-white">5</p>
            <p className="mt-1 text-xs text-slate-500 sm:text-sm">
              Methods
            </p>
          </div>

          <div className="border-x border-white/10">
            <p className="text-2xl font-bold text-white">∞</p>
            <p className="mt-1 text-xs text-slate-500 sm:text-sm">
              Calculations
            </p>
          </div>

          <div>
            <p className="text-2xl font-bold text-white">100%</p>
            <p className="mt-1 text-xs text-slate-500 sm:text-sm">
              Interactive
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;