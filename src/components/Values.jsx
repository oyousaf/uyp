import { values } from "../constants";
import Heading from "./Heading";
import Section from "./Section";
import ClipPath from "../assets/svg/ClipPath";

const Values = () => {
  return (
    <Section id="values" crosses>
      <div className="container relative z-2">
        <Heading
          className="md:max-w-md lg:max-w-2xl text-center"
          title="Our Values"
          as="h2"
        />

        <div className="flex flex-wrap justify-center gap-10 mt-10 mb-10">
          {values.map(({ id, title, text, imageUrl, backgroundUrl }) => (
            <article
              key={id}
              className="relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem] w-full rounded-xl overflow-hidden shadow-sm transition-transform hover:scale-[1.015]"
              style={{ backgroundImage: `url(${backgroundUrl})` }}
              aria-labelledby={`value-${id}`}
            >
              <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none text-center">
                <h3
                  id={`value-${id}`}
                  className="h5 text-2xl text-color-4 font-bold mb-5"
                >
                  {title}
                </h3>
                <p className="body-2 text-xl text-n-1 leading-relaxed">
                  {text}
                </p>
              </div>

              {/* Clip path background image */}
              <div
                className="absolute inset-0.5 bg-n-8"
                style={{ clipPath: "url(#values)" }}
                aria-hidden="true"
              >
                {imageUrl && (
                  <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-10">
                    <img
                      src={imageUrl}
                      alt=""
                      width={380}
                      height={362}
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
              </div>

              <ClipPath />
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Values;
