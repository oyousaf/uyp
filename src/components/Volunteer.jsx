import { volunteer } from "../constants";
import { HiArrowUpRight } from "react-icons/hi2";

const Volunteer = () => (
  <section
    id="volunteer"
    className="section-shell overflow-hidden bg-[#c75a2a] text-[#120b08]"
  >
    <div className="mx-auto max-w-368">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.25fr] lg:gap-24">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <p className="eyebrow text-[#120b08]!">Volunteer with us</p>
          <h2 className="display-title mt-6 text-[clamp(3.5rem,7vw,7rem)] leading-[.86]">
            Give time.{" "}
            <span className="block italic text-[#fff1e2]">Gain purpose.</span>
          </h2>
          <p className="mt-8 max-w-xl text-lg leading-8 text-[#120b08]">
            Build skills, grow your network and make a genuine difference. We
            support every volunteer with resources, development and a formal
            reference for active service.
          </p>
          <a
            href="mailto:hello@unlockyourpotential.org.uk"
            className="mt-8 inline-flex items-center gap-3 border-b border-current pb-2 font-bold"
          >
            Start a conversation <HiArrowUpRight />
          </a>
        </div>
        <div className="space-y-3">
          {volunteer.map((item, index) => (
            <article key={item.id} className="role-card group">
              <span className="font-serif text-xl italic text-[#6a210e]">
                0{index + 1}
              </span>
              <div>
                <h3 className="font-serif text-2xl md:text-3xl">
                  {item.title}
                </h3>
                <p className="mt-2 leading-7 text-[#120b08]">
                  {item.description}.
                </p>
              </div>
              <HiArrowUpRight className="text-2xl transition group-hover:rotate-45" />
            </article>
          ))}
        </div>
      </div>
      <div
        id="donate"
        className="mt-24 rounded-[2.5rem] bg-[#5f210f] px-6 py-16 text-center text-[#fff8ef] md:px-12 md:py-24"
      >
        <p className="eyebrow mb-6">Make possibility happen</p>
        <h3 className="display-title mx-auto max-w-5xl text-[clamp(3rem,7vw,7rem)] leading-[.9]">
          Back a future{" "}
          <span className="block italic text-[#ffb06f]">
            full of potential.
          </span>
        </h3>
        <p className="mx-auto mt-7 max-w-xl leading-7 text-[#ffd9ba]">
          Your support helps us create more opportunities, reach more people and
          build fairer pathways into work and education.
        </p>
        <a
          href="mailto:hello@unlockyourpotential.org.uk?subject=I%20would%20like%20to%20donate"
          className="primary-cta mt-9 bg-[#fff3e6]!"
        >
          Talk to us about donating <HiArrowUpRight />
        </a>
      </div>
    </div>
  </section>
);

export default Volunteer;
