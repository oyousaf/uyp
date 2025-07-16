import { useLocation } from "react-router-dom";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import { useState } from "react";
import { Link } from "react-scroll";

import { uypLogo } from "../assets";
import { navigation, socials } from "../constants";
import Button from "./Button";
import MenuSvg from "../assets/svg/MenuSvg";
import { HamburgerMenu } from "./design/Header";

const Header = () => {
  const pathname = useLocation();
  const [openNavigation, setOpenNavigation] = useState(false);

  const toggleNavigation = () => {
    setOpenNavigation((prev) => {
      if (prev) enablePageScroll();
      else disablePageScroll();
      return !prev;
    });
  };

  const handleNavItemClick = () => {
    if (openNavigation) {
      enablePageScroll();
      setOpenNavigation(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 border-b border-n-6 ${
        openNavigation ? "bg-n-8" : "bg-n-8/90 backdrop-blur-sm"
      }`}
      role="banner"
    >
      <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
        <Link
          to="home"
          aria-label="Scroll to top"
          className="block cursor-pointer lg:w-[12rem] w-[5rem] xl:mr-8"
        >
          <img
            src={uypLogo}
            width={100}
            height={50}
            alt="United Youth Project logo"
            className="h-auto w-full"
          />
        </Link>

        {/* Navigation */}
        <nav
          className={`${
            openNavigation ? "flex" : "hidden"
          } fixed z-10 top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent`}
          aria-label="Main navigation"
          aria-expanded={openNavigation}
          aria-hidden={!openNavigation}
        >
          <ul className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row font-bold">
            {navigation.map((item) => (
              <li key={item.id}>
                <Link
                  to={item.url}
                  onClick={handleNavItemClick}
                  className={`block font-code text-2xl uppercase cursor-pointer text-n-1 transition-colors hover:text-color-4 px-6 py-6 md:py-8 lg:text-base lg:font-semibold lg:leading-5 lg:hover:text-color-4 xl:px-12 ${
                    item.onlyMobile ? "lg:hidden" : ""
                  } ${
                    item.url === pathname.hash
                      ? "lg:text-color-4"
                      : "lg:text-n-1/90"
                  }`}
                  tabIndex={0}
                  role="link"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
          <HamburgerMenu />
        </nav>

        {/* Donate + Socials */}
        <div className="hidden lg:flex flex-col items-center">
          <Link to="donate" tabIndex={0}>
            <Button className="mt-4 mb-4 hover:text-color-4">Donate</Button>
          </Link>
          <ul className="flex gap-5 flex-wrap" aria-label="Social media links">
            {socials.map((item) => (
              <li key={item.id}>
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-7 h-7 mb-4 bg-n-3 hover:bg-n-8 rounded-full transition-all"
                  aria-label={item.title}
                >
                  <item.icon className="text-color-4" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Menu Toggle */}
        <Button
          className="ml-auto lg:hidden"
          px="px-3"
          onClick={toggleNavigation}
          aria-label="Toggle navigation menu"
          aria-expanded={openNavigation}
          aria-controls="navigation"
        >
          <MenuSvg openNavigation={openNavigation} />
        </Button>
      </div>
    </header>
  );
};

export default Header;
