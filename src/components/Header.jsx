import { useEffect, useRef, useState } from "react";
import { HiOutlineMenuAlt4, HiOutlineX } from "react-icons/hi";
import uypLogo from "../assets/uyp-logo.svg";
import { navigation } from "../constants";
import { scrollToSection } from "../utils/scrollToSection";

const Header = () => {
  const [openNavigation, setOpenNavigation] = useState(false);
  const scrollPosition = useRef(0);

  useEffect(() => {
    const closeOnEscape = (event) => {
      if (event.key === "Escape") setOpenNavigation(false);
    };

    window.addEventListener("keydown", closeOnEscape);

    return () => {
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, []);

  useEffect(() => {
    if (!openNavigation) return undefined;

    scrollPosition.current = window.scrollY;
    document.body.style.position = "fixed";
    document.body.style.top = "-" + scrollPosition.current + "px";
    document.body.style.left = "0";
    document.body.style.right = "0";
    document.body.style.width = "100%";

    return () => {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.width = "";
      window.scrollTo(0, scrollPosition.current);
    };
  }, [openNavigation]);

  const handleNavigation = (event, targetId) => {
    setOpenNavigation(false);
    scrollToSection(event, targetId, openNavigation ? 560 : 0);
  };

  const navigationItems = (isMobile = false) => (
    <ul className={isMobile ? "flex flex-col items-center gap-3" : "flex items-center gap-1"}>
      {navigation.map((item, index) => (
        <li
          key={item.id}
          className={!isMobile && item.onlyMobile ? "hidden" : ""}
          style={
            isMobile
              ? {
                  "--menu-open-delay": 90 + index * 65 + "ms",
                  "--menu-close-delay":
                    (navigation.length - 1 - index) * 35 + "ms",
                }
              : undefined
          }
        >
          <a
            href={"#" + item.url}
            onClick={
              isMobile
                ? (event) => handleNavigation(event, item.url)
                : (event) => scrollToSection(event, item.url)
            }
            className={
              isMobile
                ? "block rounded-full px-6 py-3 text-3xl font-bold text-[#fff8ef] transition hover:bg-white/10 hover:text-[#ffd0aa]"
                : "block rounded-full px-5 py-3 text-sm font-semibold text-[#fff8ef] transition hover:bg-white/10 hover:text-[#ffd0aa]"
            }
          >
            {item.title}
          </a>
        </li>
      ))}
    </ul>
  );

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 py-4 md:px-8">
      <div className="relative z-50 mx-auto flex max-w-368 items-center justify-between rounded-full border border-[#fff3e6]/20 bg-[#4b190c]/80 px-5 py-3 shadow-2xl backdrop-blur-xl md:px-7">
        <a
          href="#home"
          onClick={(event) => handleNavigation(event, "home")}
          aria-label="Back to the top"
          className="flex items-center gap-3"
        >
          <img
            src={uypLogo}
            width={120}
            height={48}
            alt="Unlock Your Potential"
            className="h-8 w-auto brightness-0 invert md:h-10"
          />
          <span className="hidden text-[0.65rem] font-bold uppercase tracking-[0.24em] text-[#fff3e6] sm:block">
            Unlock your potential
          </span>
        </a>

        <nav className="hidden lg:block" aria-label="Main navigation">
          {navigationItems()}
        </nav>

        <a
          href="#donate"
          onClick={(event) => scrollToSection(event, "donate")}
          className="hidden rounded-full bg-[#fff3e6] px-6 py-3 text-sm font-bold text-[#5f210f] transition hover:scale-[.97] hover:bg-[#ffd0aa] lg:block"
        >
          Donate
        </a>

        <button
          type="button"
          className="grid h-10 w-10 place-items-center rounded-full border border-[#fff3e6]/30 text-xl text-[#fff8ef] lg:hidden"
          onClick={() => setOpenNavigation((value) => !value)}
          aria-label={openNavigation ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={openNavigation}
          aria-controls="mobile-navigation"
        >
          {openNavigation ? <HiOutlineX /> : <HiOutlineMenuAlt4 />}
        </button>
      </div>

      <nav
        id="mobile-navigation"
        className="mobile-navigation fixed inset-0 z-40 overflow-x-hidden overflow-y-auto bg-[#5f210f] lg:hidden"
        data-open={openNavigation}
        aria-hidden={!openNavigation}
        aria-label="Mobile navigation"
      >
        <div className="mobile-navigation-inner">
          <p className="mobile-menu-kicker eyebrow mb-8">Navigate</p>
          {navigationItems(true)}
          <a
            href="mailto:hello@unlockyourpotential.org.uk"
            className="mobile-menu-contact mt-10 max-w-full break-all text-center text-sm font-bold text-[#ffd0aa] underline decoration-white/30 underline-offset-8"
          >
            hello@unlockyourpotential.org.uk
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
