import React from "react";
import "./style.css";
import MainH3 from "../main_h3";
import WhyChooseUsCards from "./why_choose_us_cards";

function WhyChooseUs() {
  const mainH3Properties = {
    mainH3Name: "Why Choose Us",
    mainH3TextColor: "text-yellowDark",
    mainH3BgColor: "bg-yellowDark",
  };

  return (
    <main
      className="
        why-choose-us-main
        relative
        w-full
        flex
        items-center
        justify-center
        bg-center bg-cover bg-no-repeat bg-fixed
      "
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-blackLight2" />

      <section
        className="
          why-choose-us-sec
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
            why-choose-us-div
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
              text-lg
              sm:text-2xl
              lg:text-3xl
              font-semibold
              leading-tight
              sm:leading-snug
              mt-4
              text-whiteDark
            "
          >
            Why Kay Pee Dies Stands Out
          </h4>

          <p
            className="
              nunitoSans
              text-center
              text-sm
              sm:text-base
              lg:text-lg
              leading-relaxed
              text-whiteDark
              max-w-2xl
              mb-6
              sm:mb-8
            "
          >
            Discover the difference experience and quality make.
          </p>

          {/* Cards section – make sure this component uses grid/flex responsively */}
          <WhyChooseUsCards />
        </div>
      </section>
    </main>
  );
}

export default WhyChooseUs;
