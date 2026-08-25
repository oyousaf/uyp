import { HiArrowDownRight } from "react-icons/hi2";

const About = () => (
  <section id="about" className="section-shell bg-[#fff4e8] text-[#25140d]">
    <div className="mx-auto max-w-[92rem]">
      <div className="grid gap-10 border-b border-black/15 pb-14 lg:grid-cols-[.7fr_2fr]">
        <div>
          <p className="eyebrow text-[#963b1d]!">Who we are</p>
          <HiArrowDownRight className="mt-8 text-4xl text-[#963b1d]" />
        </div>
        <h2 className="display-title text-[clamp(2.8rem,6vw,6.8rem)] leading-[.95]">
          Talent is everywhere.
          <span className="block italic text-[#a84420]">Opportunity should be too.</span>
        </h2>
      </div>
      <div className="grid gap-12 py-14 lg:grid-cols-2 lg:gap-24">
        <p className="max-w-xl text-xl leading-9 md:text-2xl">
          Unlock Your Potential is a non-profit working to improve social
          mobility by empowering people with the life skills and opportunities
          they need to move forward.
        </p>
        <div className="space-y-6 text-base leading-8 text-black/65 md:text-lg">
          <p>We believe every person deserves a fair chance to succeed, regardless of background. Our programmes create safe, inclusive spaces for collaboration, personal growth and practical learning.</p>
          <p>By listening to our communities and responding imaginatively, we raise aspirations, widen access and help people turn possibility into progress.</p>
        </div>
      </div>
      <div className="grid overflow-hidden rounded-[2rem] bg-[#66240f] text-[#fff8ef] md:grid-cols-3">
        {[
          ["Community-led", "Built around real needs, not assumptions."],
          ["People-first", "Support that meets every person where they are."],
          ["Future-focused", "Skills and confidence that keep creating value."],
        ].map(([title, text]) => (
          <article key={title} className="border-b border-[#fff3e6]/15 p-8 last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0 lg:p-10">
            <h3 className="font-serif text-3xl">{title}</h3>
            <p className="mt-4 leading-7 text-[#ffd9ba]">{text}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default About;
