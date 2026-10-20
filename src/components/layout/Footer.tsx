function Footer() {
  return (
    <footer
      id="about"
      className="border-t border-white/10 bg-slate-950 px-6 py-12"
    >
      <div className="mx-auto max-w-7xl">

        <div className="flex flex-col justify-between gap-10 md:flex-row">

          {/* Brand */}
          <div className="max-w-sm">
            <div className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-cyan-400 font-bold text-slate-950">
                N
              </div>

              <span className="text-xl font-bold text-white">
                Numer<span className="text-cyan-400">ix</span>
              </span>
            </div>

            <p className="mt-4 text-sm leading-6 text-slate-500">
              An interactive computational mathematics tool designed to make
              numerical methods easier to understand, visualize, and explore.
            </p>
          </div>

          {/* Navigation */}
          <div className="grid grid-cols-2 gap-12 sm:grid-cols-3">

            <div>
              <h4 className="text-sm font-semibold text-white">
                Explore
              </h4>

              <div className="mt-4 flex flex-col gap-3">
                <a
                  href="#home"
                  className="text-sm text-slate-500 transition hover:text-cyan-400"
                >
                  Home
                </a>

                <a
                  href="#methods"
                  className="text-sm text-slate-500 transition hover:text-cyan-400"
                >
                  Methods
                </a>

                <a
                  href="#how-it-works"
                  className="text-sm text-slate-500 transition hover:text-cyan-400"
                >
                  How It Works
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-white">
                Methods
              </h4>

              <div className="mt-4 flex flex-col gap-3">
                <span className="text-sm text-slate-500">
                  Bisection
                </span>

                <span className="text-sm text-slate-500">
                  Secant
                </span>

                <span className="text-sm text-slate-500">
                  Newton-Raphson
                </span>
              </div>
            </div>

            <div className="hidden sm:block">
              <h4 className="text-sm font-semibold text-white">
                More
              </h4>

              <div className="mt-4 flex flex-col gap-3">
                <span className="text-sm text-slate-500">
                  Lagrange
                </span>

                <span className="text-sm text-slate-500">
                  Divided Differences
                </span>

                <span className="text-sm text-slate-500">
                  About NUMERIX
                </span>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col justify-between gap-4 border-t border-white/5 pt-6 text-xs text-slate-600 sm:flex-row">
          <p>
            © 2026 NUMERIX. Built for interactive numerical computing.
          </p>

          <p>
            Numerical Methods Solver
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;