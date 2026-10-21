import { Link } from "react-router-dom";

import Navbar from "../components/layout/Navbar";

function NotFound() {
  return (
    <>
      <Navbar />

      <main className="flex min-h-screen flex-col items-center justify-center bg-slate-950 px-6 text-center text-white">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
          404
        </p>

        <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
          Page not found
        </h1>

        <p className="mt-4 max-w-md text-slate-400">
          The page you're looking for doesn't exist or may have moved.
        </p>

        <Link
          to="/"
          className="mt-8 rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition duration-300 hover:-translate-y-0.5 hover:bg-cyan-300 hover:shadow-[0_0_30px_rgba(34,211,238,0.3)]"
        >
          Back to Home
        </Link>
      </main>
    </>
  );
}

export default NotFound;
