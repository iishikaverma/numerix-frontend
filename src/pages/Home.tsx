import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import Navbar from "../components/layout/Navbar";
import Hero from "../components/home/Hero";
import MethodPreview from "../components/home/MethodPreview";
import HowItWorks from "../components/home/HowItWorks";
import About from "../components/home/About";

function Home() {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) {
      return;
    }

    const id = location.hash.slice(1);

    const scrollToSection = () => {
      document.getElementById(id)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    };

    const timer = window.setTimeout(scrollToSection, 100);

    return () => window.clearTimeout(timer);
  }, [location.hash]);

  return (
    <>
      <main className="min-h-screen bg-slate-950 text-white">
        <Navbar />

        <Hero />

        <MethodPreview />

        <HowItWorks />

        <About />
      </main>
    </>
  );
}

export default Home;