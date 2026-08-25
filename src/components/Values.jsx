import { values } from "../constants";
import { HiArrowUpRight } from "react-icons/hi2";

const Values = () => (
  <section id="values" className="section-shell bg-[#4b190c] text-[#fff8ef]">
    <div className="mx-auto max-w-[92rem]">
      <div className="mb-14 flex flex-col justify-between gap-8 md:flex-row md:items-end">
        <div>
          <p className="eyebrow mb-5">What guides us</p>
          <h2 className="display-title text-[clamp(3.5rem,8vw,8rem)] leading-[.85]">
            Values in <span className="block italic text-[#ffb06f]">action.</span>
          </h2>
        </div>
        <p className="max-w-md text-lg leading-8 text-[#ffd9ba]">The principles behind every programme, partnership and conversation.</p>
      </div>
      <div className="grid border-t border-[#fff3e6]/20 lg:grid-cols-2">
        {values.map(({ id, title, text }, index) => (
          <article key={id} className="group relative min-h-72 overflow-hidden border-b border-[#fff3e6]/20 p-7 transition-colors hover:bg-[#7a2e16] md:p-10 lg:odd:border-r">
            <div className="flex items-start justify-between">
              <span className="font-serif text-2xl italic text-[#ffb06f]">0{index + 1}</span>
              <HiArrowUpRight className="text-2xl text-[#ffd9ba] transition group-hover:rotate-45 group-hover:text-[#fff8ef]" />
            </div>
            <div className="mt-14">
              <h3 className="font-serif text-4xl md:text-5xl">{title}</h3>
              <p className="mt-4 max-w-lg text-base leading-7 text-[#ffd9ba] group-hover:text-[#fff3e6]">{text}.</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Values;
