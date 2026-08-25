export const scrollToSection = (event, targetId, delay = 0) => {
  event?.preventDefault();

  const scroll = () => {
    document
      .getElementById(targetId)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  if (delay > 0) {
    window.setTimeout(scroll, delay);
  } else {
    scroll();
  }
};
