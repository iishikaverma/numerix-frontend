import { useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import Home from "./pages/Home";
import Methods from "./pages/Methods";
import Bisection from "./pages/Bisection";
import Secant from "./pages/Secant";
import NewtonRaphson from "./pages/NewtonRaphson";
import Lagrange from "./pages/Lagrange";
import DividedDifference from "./pages/DividedDifference";
import NotFound from "./pages/NotFound";
import MathCursor from "./components/effects/MathCursor";
import Footer from "./components/layout/Footer";

// Reset scroll to the top on route change, so navigating to a new page doesn't
// keep the previous page's scroll position. Skipped when the URL has a hash —
// those navigations scroll to a specific section instead (handled in Home).
function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}

function App() {
  return (
    <BrowserRouter>
    <ScrollToTop />
    <MathCursor />
      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/methods" element={<Methods />} />

        <Route
          path="/methods/bisection"
          element={<Bisection />}
        />

        <Route
          path="/methods/secant"
          element={<Secant />}
        />

        <Route
          path="/methods/newton"
          element={<NewtonRaphson />}
        />

        <Route
          path="/methods/lagrange"
          element={<Lagrange />}
        />

        <Route
          path="/methods/divided-difference"
          element={<DividedDifference />}
        />

        <Route path="*" element={<NotFound />} />

      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;