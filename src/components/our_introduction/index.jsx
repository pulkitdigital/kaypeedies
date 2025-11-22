import React from "react";
import MainH3 from "../main_h3";
import OurIntroductionCards from "./our_introduction_cards";
import "./style.css"; // keep only if you're using it for the background image

function OurIntroduction() {
  const mainH3Properties = {
    mainH3Name: "Our Introduction",
    mainH3TextColor: "text-yellowDark",
    mainH3BgColor: "bg-yellowDark",
  };

  return (
    <main
      className="
        our-introduction-main
        relative
        w-full
        flex
        items-center
        justify-center
        bg-center bg-cover bg-no-repeat bg-fixed
      "
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-blackLight2" />

      <section
        className="
          our-introduction-sec
          relative
          w-full
          flex
          items-center
          justify-center
          py-16
          sm:py-20
          lg:py-28
        "
      >
        <div
          className="
            our-introduction-div
            relative
            z-20
            w-full
            max-w-6xl
            mx-auto
            px-4
            sm:px-6
            lg:px-8
            flex
            flex-col
            items-center
            justify-center
            gap-4
          "
        >
          <MainH3 mainH3Props={mainH3Properties} />

          <h4
            className="
              nunitoSans
              text-center
              text-xl
              sm:text-2xl
              lg:text-3xl
              font-semibold
              mt-4
              text-whiteDark
            "
          >
            Draw On Our Experience &amp; Expertise
          </h4>

          <p
            className="
              nunitoSans
              text-center
              text-sm
              sm:text-base
              lg:text-lg
              leading-relaxed
              mb-8
              max-w-3xl
              text-whiteDark
            "
          >
            The company was started in 1968 as the pioneer manufacturing of wire
            drawing dies in India. In its 56 years journey the company has
            crossed many milestones and today is the leading manufacturer of all
            kinds of Tungsten Carbide Dies.
          </p>

          {/* Cards become stacked on mobile, grid on larger screens (inside the component) */}
          <OurIntroductionCards />
        </div>
      </section>
    </main>
  );
}

export default OurIntroduction;
