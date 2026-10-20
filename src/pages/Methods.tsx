import Navbar from "../components/layout/Navbar";
import MethodCard from "../components/methods/MethodCard";

const methods = [
  {
    number: "01",
    name: "Bisection Method",
    category: "Root Finding",
    description:
      "Find a root of a function by repeatedly dividing an interval into two halves.",
    path: "/methods/bisection",
  },
  {
    number: "02",
    name: "Secant Method",
    category: "Root Finding",
    description:
      "Approximate a root using two initial guesses and repeated secant-line calculations.",
    path: "/methods/secant",
  },
  {
    number: "03",
    name: "Newton-Raphson Method",
    category: "Root Finding",
    description:
      "Find a root using tangent-line approximations and the derivative of the function.",
    path: "/methods/newton",
  },
  {
    number: "04",
    name: "Lagrange Interpolation",
    category: "Interpolation",
    description:
      "Estimate an unknown value using a polynomial constructed from known data points.",
    path: "/methods/lagrange",
  },
  {
    number: "05",
    name: "Newton's Divided Difference",
    category: "Interpolation",
    description:
      "Construct an interpolation polynomial using a divided-difference table.",
    path: "/methods/divided-difference",
  },
];

function Methods() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen px-6 pb-20 pt-28">
        <div className="mx-auto max-w-6xl">

          {/* Header */}

          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-[0.25em] text-cyan-400">
              Numerical Methods
            </p>

            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Choose your method.
            </h1>

            <p className="mt-5 text-base leading-7 text-slate-400 sm:text-lg">
              Explore numerical methods, enter your problem,
              and let NUMERIX calculate the solution step by step.
            </p>
          </div>

          {/* Method Cards */}

          <div className="mt-12 grid gap-5 md:grid-cols-2">
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
      </main>
    </>
  );
}

export default Methods;