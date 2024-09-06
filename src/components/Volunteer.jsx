import { volunteer } from "../constants";
import Heading from "./Heading";
import Section from "./Section";

const Volunteer = () => {
  return (
    <Section id="volunteer" crosses>
      <div className="container relative z-2 text-center">
        <Heading className="md:max-w-md lg:max-w-2xl" title="Volunteer" />
        <p className="body-1 mx-auto mb-6 mt-10">
          Join us in making a difference. Your contribution can empower
          communities, uplift individuals, and transform futures. Together, we
          can unlock a world of possibilities.
        </p>
        <ul className="max-w-5xl mx-auto mb-10 md:mb-14 space-y-6">
          <li className="p-6 bg-color-4 shadow-md rounded-lg">
            <div className="flex items-start">
              <div className=" text-center">
                <h6 className="body-2 md:text-2xl text-lg font-semibold">
                  Volunteer With Us
                </h6>
                <p className="body-2 md:text-xl mt-3 text-n-1 leading-relaxed">
                  Welcome to the world of volunteering! You are about to embark
                  on a journey that will not only change the lives of those you
                  serve, but also your own. As a volunteer, you have the power
                  to make a difference in your community and beyond. We will
                  support you from introducing you to our organisation's mission
                  to providing you with resources for personal and professional
                  growth, we are committed to supporting you every step of the
                  way. So let's get started on this exciting adventure together!
                </p>
              </div>
            </div>
          </li>
          <li className="p-6 bg-color-4 shadow-md rounded-lg">
            <div className="flex items-start">
              <div className="text-center">
                <h6 className="body-2 md:text-2xl text-lg font-semibold">
                  Benefits of Volunteering
                </h6>
                <p className="body-2 md:text-xl mt-3 text-n-1 leading-relaxed">
                  Volunteering offers numerous benefits, including improved
                  physical and mental health, a sense of purpose, and the
                  opportunity to meet new people and make new friends.
                  Volunteering can also provide relevant work experience, help
                  you develop new skills, and strategically bolster your CV.
                  Additionally, volunteering can reduce stress and increase
                  positive, relaxed feelings by releasing dopamine. Other
                  benefits of volunteering include the opportunity to give back
                  to your community, make a positive impact on the world, and
                  gain a sense of fulfilment and personal satisfaction. Overall,
                  volunteering is a great way to improve your well-being,
                  connect with others, and make a difference in the world.
                  <br />
                  <br /> We will also give you a reference after volunteering
                  with us and having that you volunteered with us at Unlock Your
                  Potential with also give your career and opportunities a huge
                  boost.
                </p>
              </div>
            </div>
          </li>
          <li className="p-6 bg-color-4 shadow-md rounded-lg">
            <div className="flex items-start">
              <div className="text-center">
                <h6 className="body-2 md:text-2xl text-lg font-semibold">
                  Volunteer Opportunities
                </h6>
                <p className="body-2 md:text-xl mt-3 text-n-1">
                  Looking for a way to make a difference in your community? Join
                  our team of volunteers and help us make a positive impact on
                  the world! We are looking for passionate individuals who are
                  committed to making a difference and want to give back to
                  their community. Whether you have a few hours a week or a few
                  hours a month, we have a volunteer opportunity that is perfect
                  for you.
                  <br /> As a volunteer, you will have the opportunity to work
                  with a team of like-minded individuals who share your passion
                  for making a difference. You will gain valuable experience,
                  develop new skills, and make lasting connections with people
                  in your community. Our volunteer opportunities are flexible
                  and can be tailored to fit your schedule and interests, we
                  have a volunteer opportunity that is perfect for you.
                  <br />
                  <br />
                  Some of the available roles we have available include:
                  <br />
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
                    {volunteer.map((item) => (
                      <div
                        key={item.id}
                        className="bg-n-4 shadow-md rounded-lg p-6 transition transform hover:-translate-y-2"
                      >
                        <h3 className="text-xl font-semibold text-n-2 mb-2">
                          {item.title}
                        </h3>
                        <p className="text-n-1 text-base">{item.description}</p>
                      </div>
                    ))}
                  </div>
                  <br />
                  <strong>
                    Can't see a role suitable for you? Don't worry, get in touch
                    I am sure we are able to support you in creating a role.
                  </strong>
                  <br />
                  <br /> Join us today and become a part of something bigger
                  than yourself. Together, we can make a difference and create a
                  better world for all. Contact us now to learn more about our
                  volunteer opportunities and how you can get involved!
                  <br />
                  <br />
                  <a
                    className="md:text-2xl text-xl"
                    href="mailto:hello@unlockyourpotential.org.uk"
                    rel="noopener noreferrer"
                  >
                    hello@unlockyourpotential.org.uk
                  </a>
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </Section>
  );
};

export default Volunteer;
