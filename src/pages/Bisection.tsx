import { useState } from "react";
import { Link } from "react-router-dom";

import Navbar from "../components/layout/Navbar";
import SolverLayout from "../components/solver/SolverLayout";
import EquationInput from "../components/solver/EquationInput";
import ParameterInput from "../components/solver/ParameterInput";
import ResultCard from "../components/solver/ResultCard";
import IterationTable from "../components/solver/IterationTable";

import {
  solveBisection,
  type BisectionResponse,
} from "../services/api";

function Bisection() {
  const [expression, setExpression] = useState("x^3 - x - 2");
  const [a, setA] = useState("1");
  const [b, setB] = useState("2");
  const [tolerance, setTolerance] = useState("0.0001");

  const [result, setResult] = useState<BisectionResponse | null>(null);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSolve = async () => {
    setError("");
    setResult(null);

    const numericA = Number(a);
    const numericB = Number(b);
    const numericTolerance = Number(tolerance);

    if (!expression.trim()) {
      setError("Please enter a function.");
      return;
    }

    if (!Number.isFinite(numericA) || !Number.isFinite(numericB)) {
      setError("Please enter valid values for a and b.");
      return;
    }

    if (!Number.isFinite(numericTolerance) || numericTolerance <= 0) {
      setError("Tolerance must be greater than zero.");
      return;
    }

    if (numericA >= numericB) {
      setError("Lower bound a must be smaller than upper bound b.");
      return;
    }

    try {
      setLoading(true);

      const data = await solveBisection({
        expression: expression.trim(),
        a: numericA,
        b: numericB,
        tolerance: numericTolerance,
      });

      setResult(data);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Something went wrong while solving.");
      }
    } finally {
      setLoading(false);
    }
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

            {/* Error */}
            {error && (
              <div className="rounded-xl border border-red-400/20 bg-red-400/5 px-4 py-3 text-sm text-red-400">
                {error}
              </div>
            )}

            {/* Solve button */}
            <button
              onClick={handleSolve}
              disabled={loading}
              className="w-full rounded-xl bg-cyan-400 px-6 py-3.5 font-semibold text-slate-950 transition duration-300 hover:-translate-y-0.5 hover:bg-cyan-300 hover:shadow-[0_0_30px_rgba(34,211,238,0.2)] disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:translate-y-0 disabled:hover:shadow-none"
            >
              {loading ? "Calculating..." : "Solve with Bisection →"}
            </button>

          </div>
        </div>

        {/* Result */}
        {result && (
          <div className="mt-8 space-y-8">

            <ResultCard
              root={result.root.toFixed(8)}
              iterations={result.iterations}
              error={result.error.toFixed(8)}
              converged={result.converged}
            />

            <IterationTable data={result.steps} />

          </div>
        )}

      </SolverLayout>
    </>
  );
}

export default Bisection;