const Heading = ({ className = "", title, as: Element = "h2" }) => {
  if (!title) return null;

  return (
    <div
      className={`max-w-4xl mx-auto text-center text-color-4 font-bold ${className}`}
    >
      <Element className="h2">{title}</Element>
    </div>
  );
};

export default Heading;
