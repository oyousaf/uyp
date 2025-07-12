import { volunteer } from "../constants";
import Heading from "./Heading";
import Section from "./Section";

const Volunteer = () => {
  return (
    <Section id="volunteer" crosses>
      <div className="container relative text-center">
        <Heading
          className="md:max-w-md lg:max-w-2xl mx-auto"
          title="Volunteer"
          as="h2"
        />

        <p className="body-1 mx-auto mt-10 mb-6 max-w-3xl text-base sm:text-lg">
          Join us in making a difference. Your contribution can empower
          communities, uplift individuals, and transform futures.
        </p>

        <ul className="max-w-5xl mx-auto space-y-8 md:space-y-10">
          {/* Section 1 */}
          <li className="p-4 sm:p-6 bg-color-4 shadow-md rounded-lg text-left">
            <h3 className="text-xl sm:text-2xl font-semibold text-center mb-4">
              Volunteer With Us
            </h3>
            <p className="text-base sm:text-lg md:text-xl text-n-1 leading-relaxed">
              Welcome to the world of volunteering! As a volunteer, you have the
              power to make a real difference. From being introduced to our
              mission, to accessing resources that help you grow — we support
              you every step of the way. Join us on this exciting journey of
              impact and personal growth.
            </p>
          </li>

          {/* Section 2 */}
          <li className="p-4 sm:p-6 bg-color-4 shadow-md rounded-lg text-left">
            <h3 className="text-xl sm:text-2xl font-semibold text-center mb-4">
              Benefits of Volunteering
            </h3>
            <p className="text-base sm:text-lg md:text-xl text-n-1 leading-relaxed">
              Volunteering improves mental well-being, builds purpose, and grows
              your network. You'll develop skills, gain experience, reduce
              stress, and boost your CV — all while making a meaningful
              difference.
              <br />
              <br />
              We also provide formal references for active volunteers. Having
              "volunteered at Unlock Your Potential" can boost your career
              prospects.
            </p>
          </li>

          {/* Section 3 */}
          <li className="p-4 sm:p-6 bg-color-4 shadow-md rounded-lg text-left">
            <h3 className="text-xl sm:text-2xl font-semibold text-center mb-4">
              Volunteer Opportunities
            </h3>
            <p className="text-base sm:text-lg md:text-xl text-n-1 leading-relaxed mb-6">
              Whether you’ve got a few hours a week or just one a month, we have
              roles for you. You'll join passionate people and gain valuable
              experience while helping your community.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {volunteer.map((item) => (
                <div
                  key={item.id}
                  className="bg-n-4 shadow-md rounded-lg p-4 hover:-translate-y-2 transition"
                >
                  <h4 className="text-lg sm:text-xl font-semibold text-n-2 mb-2">
                    {item.title}
                  </h4>
                  <p className="text-base text-n-1">{item.description}</p>
                </div>
              ))}
            </div>

            <p className="font-bold mt-8">
              Don’t see the right role? Let us know — we may be able to create
              one for you.
            </p>

            <p className="mt-4">
              Join us and contribute to a greater cause. Let’s build a better
              world together. Reach out now to discover more:
            </p>

            <a
              className="block mt-4 md:text-2xl text-xl font-semibold text-color-4 underline"
              href="mailto:hello@unlockyourpotential.org.uk"
              rel="noopener noreferrer"
            >
              hello@unlockyourpotential.org.uk
            </a>
          </li>
        </ul>
      </div>
    </Section>
  );
};

export default Volunteer;
