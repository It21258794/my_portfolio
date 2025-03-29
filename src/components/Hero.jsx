// import content
import { useEffect } from "react";
import { content } from "../Content";
import githubLogo from "../assets/images/Hero/github-logo.png";
import linkedinLogo from "../assets/images/Hero/linkedin-logo.png";
import twitterLogo from "../assets/images/Hero/twitter-logo.png";
import mailLogo from "../assets/images/Hero/gmail-logo.png";

const Hero = () => {
  const { hero } = content;

  return (
    <section id="home" className="overflow-hidden">
      <div className="min-h-screen relative flex md:flex-row flex-col-reverse md:items-center justify-center items-center">
        <div
          data-aos="slide-left"
          data-aos-delay="1200"
          className="absolute h-full md:w-4/12 w-8/12 top-0 right-0 bg-primaryLinear bottom-0 -z-10 flex justify-center items-center px-6"
        ></div>

        {/* first col - Right align content */}
        <div className="pb-16 px-6 pt-5 w-full md:w-8/12 flex flex-col justify-start md:mt-20 mt-16 ml-auto" data-aos="fade-down">
          <h1 className="text-4xl md:text-6xl font-bold text-dark_primary whitespace-nowrap">{`${hero.firstName} ${hero.LastName}`}</h1>
          <h2>{hero.title}</h2>
          <br />
          <div className="flex justify-start">
            <button className="btn">{hero.btnText}</button>
            <br />
          </div>

          <div className="flex flex-col gap-10 mt-10 ml-auto">
  {hero.hero_content.map((content, i) => (
    <div
      key={i}
      data-aos="fade-down"
      data-aos-delay={i * 300}
      className={`flex items-center w-80 gap-5
        ${i === 1 && " flex-row-reverse text-right"}`}
    >
      <h3>{content.count}</h3>
      <p>{content.text}</p>
    </div>
  ))}
</div>


          {/* Increased margin-top to add more space between the button and social icons */}
          <div className="mt-16 flex gap-8 text-3xl">
            <a href={hero.github} target="_blank" rel="noopener noreferrer">
              <img src={githubLogo} alt="GitHub" className="w-15 h-10" />
            </a>
            <a href={hero.linkedin} target="_blank" rel="noopener noreferrer">
              <img src={linkedinLogo} alt="LinkedIn" className="w-10 h-10" />
            </a>
            <a href={hero.twitter} target="_blank" rel="noopener noreferrer">
              <img src={twitterLogo} alt="Twitter" className="w-15 h-11" />
            </a>
            <a href={`mailto:${hero.email}`}>
              <img src={mailLogo} alt="Email" className="w-15 h-12" />
            </a>
          </div>
        </div>

        {/* sec col */}
        <div className="md:h-[45rem] h-[30rem] w-auto relative z-0">
          <img
            src={hero.image}
            data-aos="slide-up"
            alt="..."
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
