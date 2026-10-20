import MathCursor from "../components/effects/MathCursor";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Hero from "../components/home/Hero";
import MethodPreview from "../components/home/MethodPreview";
import HowItWorks from "../components/home/HowItWorks";

function Home() {
  return (
    <>
      <MathCursor />

      <main className="min-h-screen bg-slate-950 text-white">
        <Navbar />

        <Hero />

        <MethodPreview />

        <HowItWorks />

        <Footer />
      </main>
    </>
  );
}

export default Home;