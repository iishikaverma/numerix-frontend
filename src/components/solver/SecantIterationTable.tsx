import type { SecantIteration } from "../../services/api";

interface SecantIterationTableProps {
  iterations: SecantIteration[];
}

function SecantIterationTable({
  iterations,
}: SecantIterationTableProps) {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-slate-900/60">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[800px] border-collapse text-sm">
          <thead>
            <tr className="border-b border-slate-700">
              <th className="whitespace-nowrap px-4 py-4 text-left font-medium text-slate-400 sm:px-5">
                Iteration
              </th>
              <th className="px-4 py-4 text-left font-medium text-slate-400 sm:px-5">
                x₀
              </th>
              <th className="px-4 py-4 text-left font-medium text-slate-400 sm:px-5">
                x₁
              </th>
              <th className="px-4 py-4 text-left font-medium text-slate-400 sm:px-5">
                x₂
              </th>
              <th className="px-4 py-4 text-left font-medium text-slate-400 sm:px-5">
                f(x₂)
              </th>
              <th className="px-4 py-4 text-left font-medium text-slate-400 sm:px-5">
                Error
              </th>
            </tr>
          </thead>

          <tbody>
            {iterations.map((row) => (
              <tr
                key={row.iteration}
                className="border-b border-slate-800 transition hover:bg-slate-800/50"
              >
                <td className="px-4 py-4 text-slate-300 sm:px-5">
                  {row.iteration}
                </td>
                <td className="px-4 py-4 text-slate-300 sm:px-5">
                  {row.x0.toFixed(6)}
                </td>
                <td className="px-4 py-4 text-slate-300 sm:px-5">
                  {row.x1.toFixed(6)}
                </td>
                <td className="px-4 py-4 text-slate-300 sm:px-5">
                  {row.x2.toFixed(6)}
                </td>
                <td className="px-4 py-4 text-slate-300 sm:px-5">
                  {row.fx2.toFixed(6)}
                </td>
                <td className="px-4 py-4 text-slate-300 sm:px-5">
                  {row.error.toFixed(6)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default SecantIterationTable;