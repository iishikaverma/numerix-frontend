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
    const params = new URLSearchParams(location.search);
    const section = params.get("scrollTo");

    if (!section) {
      return;
    }

    const scrollToSection = () => {
      const element = document.getElementById(section);

      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    };

    const timer = window.setTimeout(scrollToSection, 100);

    return () => window.clearTimeout(timer);
  }, [location.search]);

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