import type { LagrangeStep } from "../../services/api";

interface LagrangeIterationTableProps {
  steps: LagrangeStep[];
}

function LagrangeIterationTable({
  steps,
}: LagrangeIterationTableProps) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[650px] border-collapse text-sm">
        <thead>
          <tr className="border-b border-slate-700">
            <th className="px-4 py-3 text-left font-medium text-slate-400">
              i
            </th>

            <th className="px-4 py-3 text-left font-medium text-slate-400">
              Lᵢ(x)
            </th>

            <th className="px-4 py-3 text-left font-medium text-slate-400">
              Contribution
            </th>
          </tr>
        </thead>

        <tbody>
          {steps.map((row) => (
            <tr
              key={row.index}
              className="border-b border-slate-800 transition hover:bg-slate-800/50"
            >
              <td className="px-4 py-3 text-slate-300">
                {row.index}
              </td>

              <td className="px-4 py-3 text-slate-300">
                {row.basis.toFixed(6)}
              </td>

              <td className="px-4 py-3 text-slate-300">
                {row.contribution.toFixed(6)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default LagrangeIterationTable;