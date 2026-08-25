const Section = ({ className = "", id, children }) => (
  <section id={id} className={"section-shell " + className}>{children}</section>
);

export default Section;
