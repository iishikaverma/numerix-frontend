import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";

const methods = [
  {
    number: "01",
    title: "Bisection Method",
    description:
      "A reliable root-finding method that repeatedly divides an interval into two halves.",
    formula: "c = (a + b) / 2",
    path: "/methods/bisection",
  },
  {
    number: "02",
    title: "Secant Method",
    description:
      "A root-finding technique that uses two initial approximations without requiring a derivative.",
    formula: "xₙ₊₁ = xₙ − f(xₙ)(xₙ−xₙ₋₁)/(f(xₙ)−f(xₙ₋₁))",
    path: "/methods/secant",
  },
  {
    number: "03",
    title: "Newton-Raphson",
    description:
      "A fast root-finding method based on the function and its derivative.",
    formula: "xₙ₊₁ = xₙ − f(xₙ)/f′(xₙ)",
    path: "/methods/newton",
  },
  {
    number: "04",
    title: "Lagrange Interpolation",
    description:
      "Construct an interpolation polynomial from a set of known data points.",
    formula: "P(x) = Σ yᵢLᵢ(x)",
    path: "/methods/lagrange",
  },
  {
    number: "05",
    title: "Newton's Divided Differences",
    description:
      "Construct an interpolation polynomial using divided difference coefficients.",
    formula: "P(x) = f[x₀] + f[x₀,x₁](x−x₀) + ...",
    path: "/methods/divided-difference",
  },
];

function Methods() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <section className="px-6 pb-20 pt-36">
        <div className="mx-auto max-w-7xl">

          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
              Numerical Toolkit
            </p>

            <h1 className="mt-4 text-5xl font-bold tracking-tight sm:text-6xl">
              Choose your
              <span className="text-cyan-400"> method.</span>
            </h1>

            <p className="mt-6 text-lg leading-8 text-slate-400">
              Select a numerical method to start solving problems
              interactively.
            </p>
          </div>

          <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {methods.map((method) => (
              <Link
                key={method.number}
                to={method.path}
                className="group rounded-2xl border border-white/10 bg-slate-900/60 p-6 transition duration-300 hover:-translate-y-2 hover:border-cyan-400/30 hover:bg-slate-900"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-600">
                    {method.number}
                  </span>

                  <span className="text-slate-600 transition group-hover:text-cyan-400">
                    ↗
                  </span>
                </div>

                <h2 className="mt-7 text-xl font-semibold">
                  {method.title}
                </h2>

                <p className="mt-3 min-h-[72px] text-sm leading-6 text-slate-400">
                  {method.description}
                </p>

                <div className="mt-6 rounded-lg border border-white/5 bg-slate-950 px-4 py-3">
                  <code className="text-sm text-cyan-300">
                    {method.formula}
                  </code>
                </div>

                <div className="mt-6 text-sm font-medium text-cyan-400">
                  Open Solver →
                </div>
              </Link>
            ))}
          </div>

        </div>
      </section>
    </main>
  );
}

export default Methods;