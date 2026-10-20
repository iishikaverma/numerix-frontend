import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";

function Lagrange() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <section className="px-6 pb-20 pt-36">
        <div className="mx-auto max-w-5xl">

          <Link
            to="/methods"
            className="text-sm text-slate-500 hover:text-cyan-400"
          >
            ← Back to Methods
          </Link>

          <p className="mt-8 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-400">
            Method 04
          </p>

          <h1 className="mt-3 text-5xl font-bold">
            Lagrange Interpolation
          </h1>

          <p className="mt-5 text-slate-400">
            Estimate unknown values using an interpolation polynomial
            constructed from known data points.
          </p>

          <div className="mt-12 rounded-2xl border border-white/10 bg-slate-900/60 p-8">
            <p className="text-slate-500">
              Solver interface coming next.
            </p>
          </div>

        </div>
      </section>
    </main>
  );
}

export default Lagrange;