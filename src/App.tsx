import MathCursor from "./components/effects/MathCursor";
import Navbar from "./components/layout/Navbar";

function App() {
  return (
    <>
      <MathCursor />

      <main
        id="home"
        className="relative min-h-screen overflow-hidden bg-slate-950 text-white"
      >
        <Navbar />

        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[120px]" />

        <section className="relative flex min-h-screen items-center justify-center px-6 pt-20">
          <div className="max-w-3xl text-center">

            <div className="mb-6 inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 text-sm text-cyan-300">
              Interactive • Visual • Step-by-Step
            </div>

            <h1 className="text-6xl font-bold tracking-tight sm:text-8xl">
              Numer
              <span className="text-cyan-400">ix</span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-400 sm:text-xl">
              Numerical methods made visual, interactive,
              and easier to understand.
            </p>

            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <a
                href="#methods"
                className="rounded-xl bg-cyan-400 px-7 py-3 font-semibold text-slate-950 transition duration-300 hover:-translate-y-1 hover:bg-cyan-300 hover:shadow-[0_0_30px_rgba(34,211,238,0.25)]"
              >
                Start Exploring →
              </a>

              <a
                href="#methods"
                className="rounded-xl border border-slate-700 px-7 py-3 font-semibold text-slate-300 transition duration-300 hover:border-slate-500 hover:bg-slate-900"
              >
                Explore Methods
              </a>
            </div>

          </div>
        </section>
      </main>
    </>
  );
}

export default App;