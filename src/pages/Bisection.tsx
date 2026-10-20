import { useState } from "react";
import { Link } from "react-router-dom";

import Navbar from "../components/layout/Navbar";
import SolverLayout from "../components/solver/SolverLayout";
import EquationInput from "../components/solver/EquationInput";
import ParameterInput from "../components/solver/ParameterInput";
import ResultCard from "../components/solver/ResultCard";
import IterationTable from "../components/solver/IterationTable";

interface BisectionIteration {
  iteration: number;
  a: number;
  b: number;
  c: number;
  fc: number;
  error: number;
}

function Bisection() {
  const [expression, setExpression] = useState("x^3 - x - 2");
  const [a, setA] = useState("1");
  const [b, setB] = useState("2");
  const [tolerance, setTolerance] = useState("0.0001");

  const [solved, setSolved] = useState(false);

  const demoIterations: BisectionIteration[] = [
    {
      iteration: 1,
      a: 1,
      b: 2,
      c: 1.5,
      fc: -0.125,
      error: 1,
    },
    {
      iteration: 2,
      a: 1.5,
      b: 2,
      c: 1.75,
      fc: 1.609375,
      error: 0.25,
    },
    {
      iteration: 3,
      a: 1.5,
      b: 1.75,
      c: 1.625,
      fc: 0.666016,
      error: 0.125,
    },
    {
      iteration: 4,
      a: 1.5,
      b: 1.625,
      c: 1.5625,
      fc: 0.252197,
      error: 0.0625,
    },
    {
      iteration: 5,
      a: 1.5,
      b: 1.5625,
      c: 1.53125,
      fc: 0.059113,
      error: 0.03125,
    },
  ];

  const handleSolve = () => {
    setSolved(true);
  };

  return (
    <>
      <Navbar />

      <SolverLayout
        methodNumber="01"
        methodName="Bisection Method"
        description="Find a root by repeatedly dividing an interval into two halves and narrowing down the solution."
      >

        {/* Back link */}
        <Link
          to="/methods"
          className="mb-6 inline-block text-sm text-slate-500 transition hover:text-cyan-400"
        >
          ← Back to Methods
        </Link>

        {/* Input panel */}
        <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-6 sm:p-8">

          <div className="mb-8">
            <h2 className="text-xl font-semibold">
              Problem Setup
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Enter the function and initial interval.
            </p>
          </div>

          <div className="space-y-6">

            <EquationInput
              value={expression}
              onChange={setExpression}
            />

            <div className="grid gap-5 sm:grid-cols-3">

              <ParameterInput
                label="Lower Bound (a)"
                value={a}
                onChange={setA}
                placeholder="1"
              />

              <ParameterInput
                label="Upper Bound (b)"
                value={b}
                onChange={setB}
                placeholder="2"
              />

              <ParameterInput
                label="Tolerance"
                value={tolerance}
                onChange={setTolerance}
                placeholder="0.0001"
              />

            </div>

            <button
              onClick={handleSolve}
              className="w-full rounded-xl bg-cyan-400 px-6 py-3.5 font-semibold text-slate-950 transition duration-300 hover:-translate-y-0.5 hover:bg-cyan-300 hover:shadow-[0_0_30px_rgba(34,211,238,0.2)]"
            >
              Solve with Bisection →
            </button>

          </div>
        </div>

        {/* Demo result */}
        {solved && (
          <div className="mt-8 space-y-8">

            <ResultCard
              root="1.531250"
              iterations={5}
              error="0.031250"
              converged={false}
            />

            <IterationTable data={demoIterations} />

          </div>
        )}

      </SolverLayout>
    </>
  );
}

export default Bisection;