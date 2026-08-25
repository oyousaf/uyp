const Heading = ({ className = "", title, as: Element = "h2" }) => {
  if (!title) return null;
  return <Element className={"display-title text-5xl md:text-7xl " + className}>{title}</Element>;
};

export default Heading;
