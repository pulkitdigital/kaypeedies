import React from "react";
import MainH3 from "../main_h3";
import AboutExperienceCards from "./about_experience_cards";
import Image from "next/image";

function AboutExperience() {
  const mainH3Properties = {
    mainH3Name: "About Experience",
    mainH3TextColor: "text-yellowDark",
    mainH3BgColor: "bg-yellowDark",
  };

  return (
    <main className="about-experience-main w-full flex justify-center px-4 sm:px-6 lg:px-0">
      <section className="relative about-experience-sec max-w-1600px w-full flex items-center justify-center">
        {/* Background */}
        <Image
          width={1600}
          height={800}
          src="/bgMapShade.png"
          alt="bgMapShade"
          priority
          className="absolute inset-0 h-full w-full object-cover select-none"
        />
        <Image
          width={1600}
          height={800}
          src="/bgMapShade.png"
          alt="bgMapShade"
          priority
          className="absolute inset-0 h-full w-full object-cover select-none opacity-60"
        />

        {/* Content */}
        <div className="relative z-20 about-experience-div w-full flex flex-col items-center justify-center gap-6 sm:gap-8 py-16 sm:py-20 lg:py-28 text-center">
          <MainH3 mainH3Props={mainH3Properties} />

          <h4
            className="
              nunitoSans text-blackDark mb-4
              text-base sm:text-lg md:text-xl lg:text-2xl
              leading-snug sm:leading-snug md:leading-snug
              max-w-3xl
            "
          >
            We have more than 56 years experience in manufacturer of dies and
            special applications.
          </h4>

          {/* Cards wrapper – let it reflow on small screens */}
          <div className="w-[90%]">
            <AboutExperienceCards />
          </div>
        </div>
      </section>
    </main>
  );
}

export default AboutExperience;
