import { useLocation } from "react-router-dom";
import { disablePageScroll, enablePageScroll } from "scroll-lock";

import { uypLogo } from "../assets";
import { navigation, socials } from "../constants";
import Button from "./Button";
import MenuSvg from "../assets/svg/MenuSvg";
import { HamburgerMenu } from "./design/Header";
import { useState } from "react";

import { Link } from "react-scroll";

const Header = () => {
  const pathname = useLocation();

  const [openNavigation, setOpenNavigation] = useState(false);

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };

  const handleClick = () => {
    if (!openNavigation) return;

    enablePageScroll();
    setOpenNavigation(false);
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm ${
        openNavigation ? "bg-n-8" : "bg-n-8/90 backdrop-blur-sm"
      }`}
    >
      <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
        <Link
          className="block lg:w-[12rem] w-[5rem] xl:mr-8 cursor-pointer"
          to="home"
          rel="noopener noreferrer"
        >
          <img src={uypLogo} width={100} height={50} alt="UYP" />
        </Link>

        <nav
          className={`${
            openNavigation ? "flex" : "hidden"
          } fixed z-10 top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent`}
        >
          <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row font-bold">
            {navigation.map((item) => (
              <Link
                key={item.id}
                to={item.url}
                onClick={handleClick}
                className={`block relative cursor-pointer font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-4 ${
                  item.onlyMobile ? "lg:hidden" : ""
                } px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-base lg:font-semibold ${
                  item.url === pathname.hash
                    ? "z-2 lg:text-color-4"
                    : "lg:text-n-1/90"
                } lg:leading-5 lg:hover:text-color-4 xl:px-12`}
                rel="noopener noreferrer"
              >
                {item.title}
              </Link>
            ))}
          </div>

          <HamburgerMenu />
        </nav>
        <div className="hidden lg:flex flex-col items-center">
          <Link to="donate">
            <Button className="mt-4 mb-4 hover:text-color-4">Donate</Button>
          </Link>
          <ul className="flex gap-5 flex-wrap">
            {socials.map((item) => (
              <a
                key={item.id}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-7 h-7 mb-4 bg-n-3 hover:bg-n-8 hover:text-xl rounded-full transition-all"
              >
                <item.icon className="text-color-4" />
              </a>
            ))}
          </ul>
        </div>

        <Button
          className="ml-auto lg:hidden"
          px="px-3"
          onClick={toggleNavigation}
        >
          <MenuSvg openNavigation={openNavigation} />
        </Button>
      </div>
    </div>
  );
};

export default Header;
