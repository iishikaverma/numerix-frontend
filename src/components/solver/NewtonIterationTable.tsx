import type { NewtonIteration } from "../../services/api";

interface NewtonIterationTableProps {
  iterations: NewtonIteration[];
}

function NewtonIterationTable({
  iterations,
}: NewtonIterationTableProps) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[800px] border-collapse text-sm">

        <thead>
          <tr className="border-b border-slate-700">

            <th className="px-4 py-3 text-left font-medium text-slate-400">
              Iteration
            </th>

            <th className="px-4 py-3 text-left font-medium text-slate-400">
              x
            </th>

            <th className="px-4 py-3 text-left font-medium text-slate-400">
              f(x)
            </th>

            <th className="px-4 py-3 text-left font-medium text-slate-400">
              f'(x)
            </th>

            <th className="px-4 py-3 text-left font-medium text-slate-400">
              Next x
            </th>

            <th className="px-4 py-3 text-left font-medium text-slate-400">
              Error
            </th>

          </tr>
        </thead>

        <tbody>
          {iterations.map((row) => (
            <tr
              key={row.iteration}
              className="
                border-b
                border-slate-800
                transition
                hover:bg-slate-800/50
              "
            >

              <td className="px-4 py-3 text-slate-300">
                {row.iteration}
              </td>

              <td className="px-4 py-3 text-slate-300">
                {row.x.toFixed(6)}
              </td>

              <td className="px-4 py-3 text-slate-300">
                {row.fx.toFixed(6)}
              </td>

              <td className="px-4 py-3 text-slate-300">
                {row.derivative.toFixed(6)}
              </td>

              <td className="px-4 py-3 text-slate-300">
                {row.nextX.toFixed(6)}
              </td>

              <td className="px-4 py-3 text-slate-300">
                {row.error.toFixed(6)}
              </td>

            </tr>
          ))}
        </tbody>

      </table>
    </div>
  );
}

export default NewtonIterationTable;