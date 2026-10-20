import MethodCard from "../methods/MethodCard";

const methods = [
  {
    number: "01",
    title: "Bisection Method",
    description:
      "Find a root by repeatedly dividing an interval into two halves and narrowing down the solution.",
    formula: "c = (a + b) / 2",
    accent: "bg-cyan-400",
  },
  {
    number: "02",
    title: "Secant Method",
    description:
      "Approximate the root using secant lines without requiring the derivative of the function.",
    formula: "xₙ₊₁ = xₙ − f(xₙ)(xₙ−xₙ₋₁)/(f(xₙ)−f(xₙ₋₁))",
    accent: "bg-purple-400",
  },
  {
    number: "03",
    title: "Newton-Raphson",
    description:
      "Use the function and its derivative to rapidly converge toward a root.",
    formula: "xₙ₊₁ = xₙ − f(xₙ)/f′(xₙ)",
    accent: "bg-blue-400",
  },
  {
    number: "04",
    title: "Lagrange Interpolation",
    description:
      "Estimate unknown values by constructing an interpolation polynomial from known data points.",
    formula: "P(x) = Σ yᵢLᵢ(x)",
    accent: "bg-emerald-400",
  },
  {
    number: "05",
    title: "Newton's Divided Differences",
    description:
      "Build an interpolation polynomial using divided differences from a set of data points.",
    formula: "P(x) = f[x₀] + f[x₀,x₁](x−x₀) + ...",
    accent: "bg-amber-400",
  },
];

function MethodPreview() {
  return (
    <section
      id="methods"
      className="relative bg-slate-950 px-6 py-28"
    >
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mb-14 max-w-2xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
            Numerical Toolkit
          </p>

          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Five methods.
            <br />
            <span className="text-slate-500">
              One interactive workspace.
            </span>
          </h2>

          <p className="mt-5 text-slate-400">
            Explore classical numerical methods through calculations,
            iterations, tables, and visualizations.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {methods.map((method) => (
            <MethodCard
              key={method.number}
              {...method}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

export default MethodPreview;