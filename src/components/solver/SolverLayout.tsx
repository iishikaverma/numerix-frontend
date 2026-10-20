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
      <section className="px-6 pb-20 pt-32">
        <div className="mx-auto max-w-6xl">

          {/* Header */}
          <div className="max-w-3xl">
            <p
              className={`text-sm font-semibold uppercase tracking-[0.2em] ${accent}`}
            >
              Method {methodNumber}
            </p>

            <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              {methodName}
            </h1>

            <p className="mt-5 text-lg leading-8 text-slate-400">
              {description}
            </p>
          </div>

          {/* Solver content */}
          <div className="mt-12">
            {children}
          </div>

        </div>
      </section>
    </main>
  );
}

export default SolverLayout;