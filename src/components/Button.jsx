import ButtonSvg from "../assets/svg/ButtonSvg";

const Button = ({
  className = "",
  href,
  onClick,
  children,
  px = "px-7",
  white = false,
  type = "button",
}) => {
  const baseClasses = `
    relative inline-flex uppercase items-center justify-center h-11
    transition-colors duration-300 ease-in-out
    hover:text-color-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-color-4
    ${px} ${white ? "text-n-8" : "text-n-1"} ${className}
  `.trim();

  const spanClasses = "relative z-10";

  const commonChildren = (
    <>
      <span className={spanClasses}>{children}</span>
      {ButtonSvg(white)}
    </>
  );

  return href ? (
    <a
      href={href}
      className={baseClasses}
      target="_blank"
      rel="noopener noreferrer"
      role="button"
    >
      {commonChildren}
    </a>
  ) : (
    <button
      className={baseClasses}
      onClick={onClick}
      type={type}
      aria-pressed="false"
    >
      {commonChildren}
    </button>
  );
};

export default Button;
