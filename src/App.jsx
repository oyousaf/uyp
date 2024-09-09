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
  const [hover, setHover] = useState(false);

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
        className="w-10"
          onClick={scrollToTop}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          style={{
            position: "fixed",
            bottom: "50px",
            right: "50px",
            cursor: "pointer",
            background: hover ? "#ED872D" : "#C34A2C",
            transition: "background 0.3s ease",
            color: hover? "#005989" : "#fff",
            borderRadius: "100%",
            padding: "15px",
            zIndex: 1000,
            fontSize: "24px",
            
          }}
        >
          <FaArrowUp />
        </div>
      )}
    </>
  );
  ``;
};

export default App;
