interface MethodCardProps {
  number: string;
  title: string;
  description: string;
  formula: string;
  accent: string;
}

function MethodCard({
  number,
  title,
  description,
  formula,
  accent,
}: MethodCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/60 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/30 hover:bg-slate-900">
      
      {/* Glow */}
      <div
        className={`pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full ${accent} opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-30`}
      />

      {/* Number */}
      <div className="mb-6 flex items-center justify-between">
        <span className="text-sm font-medium text-slate-500">
          {number}
        </span>

        <span className="text-xl text-slate-600 transition duration-300 group-hover:text-cyan-400">
          ↗
        </span>
      </div>

      {/* Title */}
      <h3 className="text-xl font-semibold text-white">
        {title}
      </h3>

      {/* Description */}
      <p className="mt-3 min-h-[72px] text-sm leading-6 text-slate-400">
        {description}
      </p>

      {/* Formula */}
      <div className="mt-6 rounded-lg border border-white/5 bg-slate-950/70 px-4 py-3">
        <code className="text-sm text-cyan-300">
          {formula}
        </code>
      </div>

      {/* Bottom line */}
      <div className="mt-6 h-px w-0 bg-cyan-400 transition-all duration-500 group-hover:w-full" />
    </div>
  );
}

export default MethodCard;