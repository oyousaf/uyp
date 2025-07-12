import { Link } from "react-scroll";
import { socials } from "../constants";
import Section from "./Section";

const Footer = () => {
  return (
    <footer role="contentinfo">
      <Section className="!px-0 !py-10" id="footer" crosses>
        <div className="container flex sm:justify-between justify-center items-center gap-10 max-sm:flex-col">
          {/* Brand Copyright */}
          <p className="text-md text-n-1 text-center sm:text-left">
            <Link
              to="home"
              smooth={true}
              duration={300}
              className="cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-color-4"
              aria-label="Scroll to top"
            >
              &copy; {new Date().getFullYear()} Unlock Your Potential
            </Link>
          </p>

          {/* Social Navigation */}
          <nav aria-label="Social media links">
            <ul className="flex gap-5 flex-wrap">
              {socials.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-10 h-10 bg-n-3 hover:bg-n-8 rounded-full transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-color-4"
                    aria-label={item.title || `Visit ${item.id}`}
                  >
                    <item.icon className="text-color-4 text-xl hover:text-2xl transition-all duration-200" />
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </Section>
    </footer>
  );
};

export default Footer;
