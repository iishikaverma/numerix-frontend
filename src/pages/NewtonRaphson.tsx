import { useState } from "react";
import { Link } from "react-router-dom";

import Navbar from "../components/layout/Navbar";
import SolverLayout from "../components/solver/SolverLayout";
import EquationInput from "../components/solver/EquationInput";
import ParameterInput from "../components/solver/ParameterInput";
import ResultCard from "../components/solver/ResultCard";
import NewtonIterationTable from "../components/solver/NewtonIterationTable";
import SlowLoadingHint from "../components/solver/SlowLoadingHint";

import {
  solveNewton,
  type NewtonResponse,
} from "../services/api";

function NewtonRaphson() {
  const [expression, setExpression] =
    useState("x^3 - x - 2");

  const [initialGuess, setInitialGuess] =
    useState("1.5");

  const [tolerance, setTolerance] =
    useState("0.0001");

  const [result, setResult] =
    useState<NewtonResponse | null>(null);

  const [loading, setLoading] =
    useState(false);

  const [error, setError] =
    useState("");

  const handleSolve = async () => {
    setError("");
    setResult(null);

    const parsedInitialGuess =
      Number(initialGuess);

    const parsedTolerance =
      Number(tolerance);

    if (!expression.trim()) {
      setError("Please enter a function.");
      return;
    }

    if (!Number.isFinite(parsedInitialGuess)) {
      setError("Please enter a valid initial guess.");
      return;
    }

    if (
      !Number.isFinite(parsedTolerance) ||
      parsedTolerance <= 0
    ) {
      setError("Tolerance must be greater than zero.");
      return;
    }

    try {
      setLoading(true);

      const data = await solveNewton({
        expression: expression.trim(),
        initialGuess: parsedInitialGuess,
        tolerance: parsedTolerance,
      });

      setResult(data);

    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError(
          "Something went wrong while solving."
        );
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />

      <SolverLayout
        methodNumber="03"
        methodName="Newton-Raphson Method"
        description="Find a root by using the tangent-based Newton-Raphson iteration."
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
              Enter the function and initial guess.
            </p>

          </div>

          <div className="space-y-6">

            {/* Function */}
            <EquationInput
              value={expression}
              onChange={setExpression}
            />

            {/* Parameters */}
            <div className="grid gap-5 sm:grid-cols-2">

              <ParameterInput
                label="Initial Guess"
                value={initialGuess}
                onChange={setInitialGuess}
                placeholder="1.5"
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
              className="
                w-full
                rounded-xl
                bg-cyan-400
                px-6
                py-3.5
                font-semibold
                text-slate-950
                transition
                duration-300
                hover:-translate-y-0.5
                hover:bg-cyan-300
                hover:shadow-[0_0_30px_rgba(34,211,238,0.2)]
                disabled:cursor-not-allowed
                disabled:opacity-50
                disabled:hover:translate-y-0
                disabled:hover:shadow-none
              "
            >
              {loading
                ? "Calculating..."
                : "Solve with Newton-Raphson →"}
            </button>

            <SlowLoadingHint loading={loading} />

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

            <NewtonIterationTable
              iterations={result.steps}
            />

          </div>
        )}

      </SolverLayout>
    </>
  );
}

export default NewtonRaphson;