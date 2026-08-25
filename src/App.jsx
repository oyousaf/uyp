import About from "./components/About";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Values from "./components/Values";
import Volunteer from "./components/Volunteer";
import { Analytics } from "@vercel/analytics/react";

import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const App = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    if (window.location.hash) {
      window.history.replaceState(
        null,
        "",
        window.location.pathname + window.location.search,
      );
    }

    const checkScrollTop = () => {
      setShowScroll(window.pageYOffset > 500);
    };

    checkScrollTop();
    window.addEventListener("scroll", checkScrollTop);
    return () => window.removeEventListener("scroll", checkScrollTop);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <>
      <div className="min-h-screen overflow-hidden">
        <Header />
        <Hero />
        <About />
        <Values />
        <Volunteer />
        <Footer />
      </div>
      <Analytics />
      {showScroll && (
        <button
          type="button"
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="fixed z-50 bottom-6 right-6 grid h-12 w-12 place-items-center rounded-full border border-[#ffd0aa]/50 bg-[#5f210f]/90 text-[#fff8ef] shadow-2xl backdrop-blur transition hover:-translate-y-1 hover:border-[#fff8ef]"
        >
          <FaArrowUp />
        </button>
      )}
    </>
  );
};

export default App;
