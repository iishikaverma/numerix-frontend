interface InterpolationResultCardProps {
  value: string;
  label?: string;
}

function InterpolationResultCard({
  value,
  label = "Interpolated Value",
}: InterpolationResultCardProps) {
  return (
    <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-6 sm:p-8">
      <div className="text-sm text-slate-500">
        {label}
      </div>

      <div className="mt-2 text-4xl font-semibold text-cyan-400">
        {value}
      </div>
    </div>
  );
}

export default InterpolationResultCard;