import Heading from "./Heading";
import Section from "./Section";

const About = () => {
  return (
    <Section id="about" crosses>
      <div className="container relative z-2">
        <Heading
          className="md:max-w-md lg:max-w-2xl text-center"
          title="About Us"
        />
        <p className="body-1 max-w-5xl mx-auto mb-6 text-n-1 lg:mb-8 pt-6 lg:text-3xl text-xl text-center">
          Our mission is to improve social mobility by empowering people from
          socio-economically disadvantaged backgrounds with the life skills and
          opportunities they need to reach their full potential. We believe that
          every person deserves a fair chance to succeed, regardless of their
          background, and we are committed to creating a safe and inclusive
          environment that fosters collaboration, continuous improvement, and
          social responsibility. Through our programmes and services, we aim to
          raise aspirations, increase opportunities, and promote social justice,
          striving for excellence and responding imaginatively to meet the
          changing needs of our beneficiaries and communities.
        </p>
      </div>
    </Section>
  );
};

export default About;
