import { Link } from "react-router-dom";

interface MethodCardProps {
  number: string;
  name: string;
  category: string;
  description: string;
  path: string;
}

function MethodCard({
  number,
  name,
  category,
  description,
  path,
}: MethodCardProps) {
  return (
    <Link
      to={path}
      className="
        group
        relative
        overflow-hidden
        rounded-2xl
        border
        border-white/10
        bg-slate-900/60
        p-6
        transition
        duration-300
        hover:-translate-y-1
        hover:border-cyan-400/30
        hover:bg-slate-900
        hover:shadow-[0_20px_50px_rgba(0,0,0,0.25)]
        sm:p-7
      "
    >
      {/* Glow */}

      <div
        className="
          pointer-events-none
          absolute
          -right-16
          -top-16
          h-32
          w-32
          rounded-full
          bg-cyan-400/5
          blur-3xl
          transition
          duration-500
          group-hover:bg-cyan-400/10
        "
      />

      <div className="relative">

        {/* Top Row */}

        <div className="flex items-start justify-between gap-4">

          <span className="text-sm font-medium tracking-widest text-cyan-400">
            METHOD {number}
          </span>

          <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-slate-500">
            {category}
          </span>

        </div>

        {/* Name */}

        <h2 className="mt-8 text-2xl font-semibold text-white transition group-hover:text-cyan-50">
          {name}
        </h2>

        {/* Description */}

        <p className="mt-3 max-w-xl text-sm leading-6 text-slate-500">
          {description}
        </p>

        {/* Action */}

        <div className="mt-7 flex items-center gap-2 text-sm font-medium text-cyan-400">
          <span>Open Solver</span>

          <span className="transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </div>

      </div>
    </Link>
  );
}

export default MethodCard;