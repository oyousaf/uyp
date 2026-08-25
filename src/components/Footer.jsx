import { socials } from "../constants";
import uypLogo from "../assets/uyp-logo.svg";
import { scrollToSection } from "../utils/scrollToSection";

const Footer = () => (
  <footer className="border-t border-[#fff3e6]/15 bg-[#4b190c] px-5 py-10 text-[#fff3e6] md:px-10">
    <div className="mx-auto grid max-w-[92rem] gap-10 md:grid-cols-[1fr_auto] md:items-end">
      <div>
        <a
          href="#home"
          onClick={(event) => scrollToSection(event, "home")}
          aria-label="Back to top"
        >
          <img
            src={uypLogo}
            alt="Unlock Your Potential"
            className="h-12 w-auto brightness-0 invert"
          />
        </a>
        <p className="mt-5 max-w-sm text-sm leading-6 text-[#ffd0aa]">
          Helping people realise their full potential, whatever their
          background.
        </p>
      </div>
      <div className="md:text-right">
        <ul className="flex flex-wrap gap-2 md:justify-end">
          {socials.map((item) => (
            <li key={item.id}>
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.title}
                className="grid h-10 w-10 place-items-center rounded-full border border-[#fff3e6]/20 transition hover:border-[#ffb06f] hover:text-[#ffb06f]"
              >
                <item.icon />
              </a>
            </li>
          ))}
        </ul>
        <p className="mt-7 text-xs uppercase tracking-[0.18em] text-[#d99363]">
          © {new Date().getFullYear()} Unlock Your Potential
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
