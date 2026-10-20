interface DividedDifferenceTableProps {
  table: number[][];
}

function DividedDifferenceTable({
  table,
}: DividedDifferenceTableProps) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[700px] border-collapse text-sm">
        <thead>
          <tr className="border-b border-slate-700">
            {table.map((_, index) => (
              <th
                key={index}
                className="px-4 py-3 text-left font-medium text-slate-400"
              >
                {index === 0
                  ? "x / f(x)"
                  : `${index}${index === 1 ? "st" : index === 2 ? "nd" : index === 3 ? "rd" : "th"} Difference`}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {table.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className="border-b border-slate-800 transition hover:bg-slate-800/50"
            >
              {row.map((value, columnIndex) => (
                <td
                  key={columnIndex}
                  className="px-4 py-3 text-slate-300"
                >
                  {Number.isFinite(value)
                    ? value.toFixed(6)
                    : "—"}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DividedDifferenceTable;