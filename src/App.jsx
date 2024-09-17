import ButtonGradient from "./assets/svg/ButtonGradient";
import About from "./components/About";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Values from "./components/Values";
import Volunteer from "./components/Volunteer";

import { useEffect, useState } from "react";
import { animateScroll as scroll } from "react-scroll";
import { FaArrowUp } from "react-icons/fa";

const App = () => {
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 500) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 500) {
      setShowScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScrollTop);
    return () => window.removeEventListener("scroll", checkScrollTop);
  }, [showScroll]);

  const scrollToTop = () => {
    scroll.scrollToTop({ duration: 300, smooth: "easeInOutQuad" });
  };
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <About />
        <Values />
        <Volunteer />
        <Footer />
      </div>
      <ButtonGradient />
      {showScroll && (
        <div
          onClick={scrollToTop}
          className="fixed z-5 bottom-12 right-12 md:bottom-8 md:right-8 bg-color-1 hover:bg-color-3 text-n-1 hover:text-color-4 p-4 rounded-full transition-all duration-300 ease-in-out cursor-pointer text-2xl md:text-xl"
        >
          <FaArrowUp />
        </div>
      )}
    </>
  );
};

export default App;
