import type { ReactNode } from "react";

interface SolverLayoutProps {
  methodNumber: string;
  methodName: string;
  description: string;
  accent?: string;
  children: ReactNode;
}

function SolverLayout({
  methodNumber,
  methodName,
  description,
  accent = "text-cyan-400",
  children,
}: SolverLayoutProps) {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="px-4 pb-16 pt-28 sm:px-6 sm:pb-20 sm:pt-32">
        <div className="mx-auto max-w-6xl">

          {/* Header */}
          <div className="max-w-3xl">
            <p
              className={`text-xs font-semibold uppercase tracking-[0.2em] sm:text-sm ${accent}`}
            >
              Method {methodNumber}
            </p>

            <h1 className="mt-3 text-3xl font-bold tracking-tight sm:mt-4 sm:text-5xl">
              {methodName}
            </h1>

            <p className="mt-4 text-base leading-7 text-slate-400 sm:mt-5 sm:text-lg sm:leading-8">
              {description}
            </p>
          </div>

          {/* Solver content */}
          <div className="mt-8 sm:mt-12">
            {children}
          </div>

        </div>
      </section>
    </main>
  );
}

export default SolverLayout;