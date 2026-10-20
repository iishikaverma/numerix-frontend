interface ResultCardProps {
  root: string;
  iterations: number;
  error: string;
  converged: boolean;
}

function ResultCard({
  root,
  iterations,
  error,
  converged,
}: ResultCardProps) {
  return (
    <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-6">

      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <p className="text-sm text-slate-500">
            Numerical Result
          </p>

            <p className="mt-2 break-all text-4xl font-bold text-cyan-400 sm:text-5xl">
                {root}
            </p>

          <p className="mt-1 text-sm text-slate-500">
            Approximate root
          </p>
        </div>

        <div
          className={`rounded-full border px-4 py-2 text-sm font-medium ${
            converged
              ? "border-emerald-400/20 bg-emerald-400/10 text-emerald-400"
              : "border-amber-400/20 bg-amber-400/10 text-amber-400"
          }`}
        >
          {converged ? "✓ Converged" : "Maximum iterations reached"}
        </div>
      </div>

      <div className="mt-6 grid grid-cols-2 gap-4 border-t border-white/5 pt-6 sm:grid-cols-3">

        <div>
          <p className="text-xs text-slate-600">
            Iterations
          </p>
          <p className="mt-1 font-semibold text-slate-200">
            {iterations}
          </p>
        </div>

        <div>
          <p className="text-xs text-slate-600">
            Error
          </p>
          <p className="mt-1 font-semibold text-slate-200">
            {error}
          </p>
        </div>

        <div className="col-span-2 sm:col-span-1">
          <p className="text-xs text-slate-600">
            Status
          </p>
          <p
            className={`mt-1 font-semibold ${
              converged ? "text-emerald-400" : "text-amber-400"
            }`}
          >
            {converged ? "Successful" : "Incomplete"}
          </p>
        </div>

      </div>
    </div>
  );
}

export default ResultCard;