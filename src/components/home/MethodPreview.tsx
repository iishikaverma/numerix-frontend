import MethodCard from "../methods/MethodCard";

const methods = [
  {
    number: "01",
    name: "Bisection Method",
    category: "Root Finding",
    description:
      "Find a root by repeatedly dividing an interval into two halves and narrowing down the solution.",
    path: "/methods/bisection",
  },
  {
    number: "02",
    name: "Secant Method",
    category: "Root Finding",
    description:
      "Approximate the root using secant lines without requiring the derivative of the function.",
    path: "/methods/secant",
  },
  {
    number: "03",
    name: "Newton-Raphson",
    category: "Root Finding",
    description:
      "Use the function and its derivative to rapidly converge toward a root.",
    path: "/methods/newton",
  },
  {
    number: "04",
    name: "Lagrange Interpolation",
    category: "Interpolation",
    description:
      "Estimate unknown values by constructing an interpolation polynomial from known data points.",
    path: "/methods/lagrange",
  },
  {
    number: "05",
    name: "Newton's Divided Differences",
    category: "Interpolation",
    description:
      "Build an interpolation polynomial using divided differences from a set of data points.",
    path: "/methods/divided-difference",
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
            iterations, and detailed result tables.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {methods.map((method) => (
            <MethodCard
              key={method.number}
              number={method.number}
              name={method.name}
              category={method.category}
              description={method.description}
              path={method.path}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

export default MethodPreview;