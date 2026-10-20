import { useState } from "react";
import { Link } from "react-router-dom";

import Navbar from "../components/layout/Navbar";
import SolverLayout from "../components/solver/SolverLayout";
import ParameterInput from "../components/solver/ParameterInput";
import LagrangeIterationTable from "../components/solver/LagrangeIterationTable";
import InterpolationResultCard from "../components/solver/InterpolationResultCard";

import {
  solveLagrange,
  type LagrangeResponse,
} from "../services/api";

function Lagrange() {
  const [xValues, setXValues] = useState([
    "1",
    "2",
    "3",
    "4",
  ]);

  const [yValues, setYValues] = useState([
    "1",
    "4",
    "9",
    "16",
  ]);

  const [targetX, setTargetX] = useState("2.5");

  const [result, setResult] =
    useState<LagrangeResponse | null>(null);

  const [loading, setLoading] =
    useState(false);

  const [error, setError] =
    useState("");

  const updateXValue = (
    index: number,
    value: string
  ) => {
    const updated = [...xValues];
    updated[index] = value;
    setXValues(updated);
  };

  const updateYValue = (
    index: number,
    value: string
  ) => {
    const updated = [...yValues];
    updated[index] = value;
    setYValues(updated);
  };

  const addPoint = () => {
    setXValues([...xValues, ""]);
    setYValues([...yValues, ""]);
  };

  const removePoint = (index: number) => {
    if (xValues.length <= 2) {
      return;
    }

    setXValues(
      xValues.filter((_, i) => i !== index)
    );

    setYValues(
      yValues.filter((_, i) => i !== index)
    );
  };

  const handleSolve = async () => {
    setError("");
    setResult(null);

    const parsedX = xValues.map((value) =>
      Number(value)
    );

    const parsedY = yValues.map((value) =>
      Number(value)
    );

    const parsedTargetX = Number(targetX);

    if (
      parsedX.some(
        (value) => !Number.isFinite(value)
      )
    ) {
      setError("Please enter valid X values.");
      return;
    }

    if (
      parsedY.some(
        (value) => !Number.isFinite(value)
      )
    ) {
      setError("Please enter valid Y values.");
      return;
    }

    if (parsedX.length !== parsedY.length) {
      setError(
        "The number of X and Y values must be equal."
      );
      return;
    }

    if (parsedX.length < 2) {
      setError(
        "Please enter at least two data points."
      );
      return;
    }

    if (
      !Number.isFinite(parsedTargetX)
    ) {
      setError(
        "Please enter a valid target X."
      );
      return;
    }

    // X values must be unique
    const uniqueX = new Set(parsedX);

    if (uniqueX.size !== parsedX.length) {
      setError(
        "X values must be unique."
      );
      return;
    }

    try {
      setLoading(true);

      const data = await solveLagrange({
        x: parsedX,
        y: parsedY,
        targetX: parsedTargetX,
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
        methodNumber="04"
        methodName="Lagrange Interpolation"
        description="Estimate the value of a function at a target point using a set of known data points."
      >
        <Link
          to="/methods"
          className="mb-6 inline-block text-sm text-slate-500 transition hover:text-cyan-400"
        >
          ← Back to Methods
        </Link>

        <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-6 sm:p-8">

          <div className="mb-8">
            <h2 className="text-xl font-semibold">
              Problem Setup
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Enter the known data points and the target X value.
            </p>
          </div>

          {/* Data Points */}

          <div className="space-y-4">

            <div className="grid grid-cols-[40px_1fr_1fr_40px] gap-4 px-1">
              <div className="text-sm font-medium text-slate-500">
                #
              </div>

              <div className="text-sm font-medium text-slate-400">
                X
              </div>

              <div className="text-sm font-medium text-slate-400">
                Y
              </div>

              <div />
            </div>

            {xValues.map((xValue, index) => (
              <div
                key={index}
                className="grid grid-cols-[40px_1fr_1fr_40px] items-center gap-4"
              >
                <div className="text-sm text-slate-500">
                  {index + 1}
                </div>

                <input
                  type="number"
                  value={xValue}
                  onChange={(e) =>
                    updateXValue(
                      index,
                      e.target.value
                    )
                  }
                  className="
                    w-full
                    rounded-xl
                    border
                    border-white/10
                    bg-slate-950/60
                    px-4
                    py-3
                    text-slate-200
                    outline-none
                    transition
                    placeholder:text-slate-600
                    focus:border-cyan-400/50
                    focus:ring-1
                    focus:ring-cyan-400/30
                  "
                  placeholder="X"
                />

                <input
                  type="number"
                  value={yValues[index]}
                  onChange={(e) =>
                    updateYValue(
                      index,
                      e.target.value
                    )
                  }
                  className="
                    w-full
                    rounded-xl
                    border
                    border-white/10
                    bg-slate-950/60
                    px-4
                    py-3
                    text-slate-200
                    outline-none
                    transition
                    placeholder:text-slate-600
                    focus:border-cyan-400/50
                    focus:ring-1
                    focus:ring-cyan-400/30
                  "
                  placeholder="Y"
                />

                <button
                  type="button"
                  onClick={() =>
                    removePoint(index)
                  }
                  disabled={xValues.length <= 2}
                  className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-lg
                    text-slate-500
                    transition
                    hover:bg-red-400/10
                    hover:text-red-400
                    disabled:cursor-not-allowed
                    disabled:opacity-30
                  "
                  title="Remove point"
                >
                  ×
                </button>
              </div>
            ))}

            <button
              type="button"
              onClick={addPoint}
              className="
                mt-2
                rounded-xl
                border
                border-cyan-400/20
                bg-cyan-400/5
                px-4
                py-2.5
                text-sm
                font-medium
                text-cyan-400
                transition
                hover:border-cyan-400/40
                hover:bg-cyan-400/10
              "
            >
              + Add Point
            </button>

          </div>

          {/* Target X */}

          <div className="mt-8">
            <ParameterInput
              label="Target X"
              value={targetX}
              onChange={setTargetX}
              placeholder="2.5"
            />
          </div>

          {/* Error */}

          {error && (
            <div className="mt-6 rounded-xl border border-red-400/20 bg-red-400/5 px-4 py-3 text-sm text-red-400">
              {error}
            </div>
          )}

          {/* Solve */}

          <button
            onClick={handleSolve}
            disabled={loading}
            className="
              mt-6
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
              : "Calculate Interpolation →"}
          </button>

        </div>

        {/* Result */}

        {result && (
          <div className="mt-8 space-y-8">

            <InterpolationResultCard
              value={result.value.toFixed(8)}
            />

            <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-6 sm:p-8">

              <div className="mb-6">
                <h2 className="text-xl font-semibold">
                  Calculation Steps
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                  Lagrange basis values and their contributions.
                </p>
              </div>

              <LagrangeIterationTable
                steps={result.steps}
              />

            </div>

          </div>
        )}

      </SolverLayout>
    </>
  );
}

export default Lagrange;