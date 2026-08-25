import { HiArrowDown, HiArrowUpRight } from "react-icons/hi2";

const Hero = () => (
  <section
    id="home"
    className="hero-shell relative flex min-h-screen items-center overflow-hidden px-5 pb-16 pt-28 md:px-10"
  >
    <div className="hero-sphere-stage" aria-hidden="true">
      <div className="hero-globe">
        <span className="globe-glow" />
        <span className="globe-latitude globe-latitude-one" />
        <span className="globe-latitude globe-latitude-two" />
        <span className="globe-meridian globe-meridian-one" />
        <span className="globe-meridian globe-meridian-two" />
      </div>
      <div className="globe-orbit globe-orbit-one" />
      <div className="globe-orbit globe-orbit-two" />
      <svg className="globe-copy" viewBox="0 0 600 600">
        <defs>
          <path
            id="globe-copy-path"
            d="M300,300 m-252,0 a252,252 0 1,1 504,0 a252,252 0 1,1 -504,0"
          />
        </defs>
        <text>
          <textPath href="#globe-copy-path" startOffset="0%">
            UNLOCK YOUR POTENTIAL • OPPORTUNITY FOR EVERYONE •
          </textPath>
        </text>
      </svg>
    </div>

    <div className="relative z-10 mx-auto flex w-full max-w-[92rem] flex-col items-center text-center">
      <p className="eyebrow mb-6">Independent charity · United Kingdom</p>
      <h1 className="display-title max-w-5xl text-[clamp(4rem,10vw,9.5rem)] leading-[0.78] text-[#fff8ef]">
        Realise your
        <span className="block italic text-[#ffd0aa]">full potential.</span>
      </h1>
      <p className="mx-auto mt-9 max-w-xl text-base leading-7 text-[#ffe1c8] md:text-lg md:leading-8">
        Skills, confidence and opportunity for people whose potential deserves
        to be seen, supported and celebrated.
      </p>
      <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
        <a href="#volunteer" className="primary-cta">
          Make an impact <HiArrowUpRight />
        </a>
        <a href="#about" className="secondary-cta">
          Discover our mission <HiArrowDown />
        </a>
      </div>
    </div>

    <div className="hero-footnote" aria-hidden="true">
      Scroll to discover
    </div>
  </section>
);

export default Hero;
