import { socials } from "../constants";
import Section from "./Section";

const Footer = () => {
  return (
    <Section className="!px-0 !py-10" id="footer" crosses>
      <div className="container flex sm:justify-between justify-center items-center gap-10 max-sm:flex-col">
        <p className="text-md text-n-1 lg:block">
          &copy; {new Date().getFullYear()} Unlock Your Potential
        </p>
        <ul className="flex gap-5 flex-wrap">
          {socials.map((item) => (
            <a
              key={item.id}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-10 h-10 bg-n-3 hover:bg-n-6 text-xl hover:text-2xl rounded-full transition-all"
            >
              <item.icon className="text-color-5" />
            </a>
          ))}
        </ul>
      </div>
    </Section>
  );
};

export default Footer;
