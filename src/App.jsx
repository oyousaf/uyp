import ButtonGradient from "./assets/svg/ButtonGradient";
import About from "./components/About";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Values from "./components/Values";
import Volunteer from "./components/Volunteer";

const App = () => {
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
    </>
  );
};

export default App;
