import SectionSvg from "../assets/svg/SectionSvg";

const Section = ({
  className = "",
  id,
  crosses = false,
  crossesOffset = "",
  customPaddings = false,
  children,
}) => {
  const paddingClasses = customPaddings
    ? ""
    : `py-10 lg:py-16 xl:py-20 ${crosses ? "lg:py-32 xl:py-40" : ""}`;

  return (
    <section
      id={id}
      className={`relative ${paddingClasses} ${className}`}
      role="region"
      aria-labelledby={id ? `${id}-heading` : undefined}
    >
      {children}

      {/* Side lines */}
      <div className="hidden md:block absolute top-0 left-5 w-0.25 h-full bg-stroke-1 pointer-events-none lg:left-7.5 xl:left-10" />
      <div className="hidden md:block absolute top-0 right-5 w-0.25 h-full bg-stroke-1 pointer-events-none lg:right-7.5 xl:right-10" />

      {/* Optional crosses */}
      {crosses && (
        <>
          <div
            className={`hidden lg:block absolute top-0 left-7.5 right-7.5 h-0.25 bg-stroke-1 ${crossesOffset} pointer-events-none xl:left-10 xl:right-10`}
          />
          <SectionSvg crossesOffset={crossesOffset} />
        </>
      )}
    </section>
  );
};

export default Section;
