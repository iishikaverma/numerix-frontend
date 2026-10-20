import { useState } from "react";
import { Link } from "react-router-dom";

import Navbar from "../components/layout/Navbar";
import SolverLayout from "../components/solver/SolverLayout";
import EquationInput from "../components/solver/EquationInput";
import ParameterInput from "../components/solver/ParameterInput";
import ResultCard from "../components/solver/ResultCard";
import SecantIterationTable from "../components/solver/SecantIterationTable";

import {
  solveSecant,
  type SecantResponse,
} from "../services/api";

function Secant() {
  const [expression, setExpression] =
    useState("x^3 - x - 2");

  const [x0, setX0] =
    useState("1");

  const [x1, setX1] =
    useState("2");

  const [tolerance, setTolerance] =
    useState("0.0001");

  const [result, setResult] =
    useState<SecantResponse | null>(null);

  const [loading, setLoading] =
    useState(false);

  const [error, setError] =
    useState("");

  const handleSolve = async () => {
    setError("");
    setResult(null);

    const parsedX0 = Number(x0);
    const parsedX1 = Number(x1);
    const parsedTolerance = Number(tolerance);

    // Function validation
    if (!expression.trim()) {
      setError("Please enter a function.");
      return;
    }

    // x0 validation
    if (!Number.isFinite(parsedX0)) {
      setError("Please enter a valid value for x₀.");
      return;
    }

    // x1 validation
    if (!Number.isFinite(parsedX1)) {
      setError("Please enter a valid value for x₁.");
      return;
    }

    // x0 and x1 must be different
    if (parsedX0 === parsedX1) {
      setError("x₀ and x₁ must be different.");
      return;
    }

    // Tolerance validation
    if (
      !Number.isFinite(parsedTolerance) ||
      parsedTolerance <= 0
    ) {
      setError("Tolerance must be greater than zero.");
      return;
    }

    try {
      setLoading(true);

      const data = await solveSecant({
        expression: expression.trim(),
        x0: parsedX0,
        x1: parsedX1,
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
        methodNumber="02"
        methodName="Secant Method"
        description="Find a root by using two initial guesses and repeatedly approximating the solution."
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
              Enter the function and two initial guesses.
            </p>

          </div>

          <div className="space-y-6">

            {/* Function */}
            <EquationInput
              value={expression}
              onChange={setExpression}
            />

            {/* Parameters */}
            <div className="grid gap-5 sm:grid-cols-3">

              <ParameterInput
                label="Initial x₀"
                value={x0}
                onChange={setX0}
                placeholder="1"
              />

              <ParameterInput
                label="Initial x₁"
                value={x1}
                onChange={setX1}
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
                : "Solve with Secant →"}
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

            <SecantIterationTable
              iterations={result.steps}
            />

          </div>
        )}

      </SolverLayout>
    </>
  );
}

export default Secant;