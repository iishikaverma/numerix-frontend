interface EquationInputProps {
  value: string;
  onChange: (value: string) => void;
}

function EquationInput({
  value,
  onChange,
}: EquationInputProps) {
  return (
    <div>
      <label
        htmlFor="expression"
        className="mb-2 block text-sm font-medium text-slate-300"
      >
        Function f(x)
      </label>

      <input
        id="expression"
        type="text"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Example: x^3 - x - 2"
        className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/10 sm:text-base"
      />

      <p className="mt-2 text-xs leading-5 text-slate-600">
        Use x as the variable. Example: x^3 - x - 2
      </p>
    </div>
  );
}

export default EquationInput;