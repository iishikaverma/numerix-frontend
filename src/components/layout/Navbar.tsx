import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();

  const closeMenu = () => {
    setIsOpen(false);
  };

  const goToHomeSection = (section: string) => {
    closeMenu();
    navigate(`/#${section}`);
  };

  const navLinkClass =
    "text-sm text-slate-300 transition hover:text-cyan-400";

  return (
    <nav className="fixed top-0 z-40 w-full border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">

        {/* Logo */}
        <Link
          to="/"
          onClick={closeMenu}
          className="group flex items-center gap-2"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-cyan-400 font-bold text-slate-950 transition duration-300 group-hover:rotate-6 group-hover:shadow-[0_0_25px_rgba(34,211,238,0.45)]">
            N
          </div>

          <span className="text-xl font-bold tracking-tight text-white">
            Numer<span className="text-cyan-400">ix</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          <Link
            to="/"
            className={navLinkClass}
          >
            Home
          </Link>

          <Link
            to="/methods"
            className={navLinkClass}
          >
            Methods
          </Link>

          <button
            type="button"
            onClick={() => goToHomeSection("how-it-works")}
            className={navLinkClass}
          >
            How It Works
          </button>

          <button
            type="button"
            onClick={() => goToHomeSection("about")}
            className={navLinkClass}
          >
            About
          </button>
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Link
            to="/methods"
            className="rounded-lg bg-cyan-400 px-5 py-2.5 text-sm font-semibold text-slate-950 transition duration-300 hover:-translate-y-0.5 hover:bg-cyan-300 hover:shadow-[0_0_25px_rgba(34,211,238,0.3)]"
          >
            Get Started →
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-lg border border-white/10 p-2 text-slate-300 transition hover:border-cyan-400/40 hover:text-cyan-400 md:hidden"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          {isOpen ? (
            <span className="text-xl">✕</span>
          ) : (
            <span className="text-xl">☰</span>
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="border-t border-white/10 bg-slate-950/95 px-6 py-5 md:hidden">
          <div className="flex flex-col gap-4">

            <Link
              to="/"
              onClick={closeMenu}
              className={navLinkClass}
            >
              Home
            </Link>

            <Link
              to="/methods"
              onClick={closeMenu}
              className={navLinkClass}
            >
              Methods
            </Link>

            <button
              type="button"
              onClick={() => goToHomeSection("how-it-works")}
              className={`${navLinkClass} text-left`}
            >
              How It Works
            </button>

            <button
              type="button"
              onClick={() => goToHomeSection("about")}
              className={`${navLinkClass} text-left`}
            >
              About
            </button>

            <Link
              to="/methods"
              onClick={closeMenu}
              className="mt-2 rounded-lg bg-cyan-400 px-5 py-2.5 text-center text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
            >
              Get Started →
            </Link>

          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;