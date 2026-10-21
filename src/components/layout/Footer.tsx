import { Link, useLocation, useNavigate } from "react-router-dom";

function Footer() {
  const location = useLocation();
  const navigate = useNavigate();

  // Footer renders on every page, so section links must route home first
  // when we're not already on it (same behavior as the navbar).
  const goToHomeSection = (section: string) => {
    if (location.pathname === "/") {
      document.getElementById(section)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      return;
    }

    navigate(`/?scrollTo=${section}`);
  };

  const sectionLinkClass =
    "text-left text-sm text-slate-500 transition hover:text-cyan-400";

  return (
    <footer
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
                <button
                  type="button"
                  onClick={() => goToHomeSection("home")}
                  className={sectionLinkClass}
                >
                  Home
                </button>

                <button
                  type="button"
                  onClick={() => goToHomeSection("methods")}
                  className={sectionLinkClass}
                >
                  Methods
                </button>

                <button
                  type="button"
                  onClick={() => goToHomeSection("how-it-works")}
                  className={sectionLinkClass}
                >
                  How It Works
                </button>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-white">
                Methods
              </h4>

              <div className="mt-4 flex flex-col gap-3">
                <Link
                  to="/methods/bisection"
                  className="text-sm text-slate-500 transition hover:text-cyan-400"
                >
                  Bisection
                </Link>

                <Link
                  to="/methods/secant"
                  className="text-sm text-slate-500 transition hover:text-cyan-400"
                >
                  Secant
                </Link>

                <Link
                  to="/methods/newton"
                  className="text-sm text-slate-500 transition hover:text-cyan-400"
                >
                  Newton-Raphson
                </Link>
              </div>
            </div>

            <div className="hidden sm:block">
              <h4 className="text-sm font-semibold text-white">
                More
              </h4>

              <div className="mt-4 flex flex-col gap-3">
                <Link
                  to="/methods/lagrange"
                  className="text-sm text-slate-500 transition hover:text-cyan-400"
                >
                  Lagrange
                </Link>

                <Link
                  to="/methods/divided-difference"
                  className="text-sm text-slate-500 transition hover:text-cyan-400"
                >
                  Divided Differences
                </Link>

                <button
                  type="button"
                  onClick={() => goToHomeSection("about")}
                  className={sectionLinkClass}
                >
                  About NUMERIX
                </button>
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