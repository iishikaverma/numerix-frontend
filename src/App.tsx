import { BrowserRouter, Routes, Route } from "react-router-dom";

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

function App() {
  return (
    <BrowserRouter>
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