import React from "react";
import MainH3 from "../main_h3";
import MilestoneSwiper from "./milestone_swiper";

function Milestone() {
  const mainH3Properties = {
    mainH3Name: "Milestone",
    mainH3TextColor: "text-yellowDark",
    mainH3BgColor: "bg-yellowDark",
  };

  return (
    <main className="milestone-main w-full flex items-center justify-center">
      <section className="milestone-sec w-full flex items-center justify-center">
        <div
          className="
            milestone-div
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
            sm:gap-6
            py-16
            sm:py-20
            lg:py-28
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
              leading-snug
              mt-4
              text-blackDark
            "
          >
            Our Journey
          </h4>

          <p
            className="
              nunitoSans
              text-center
              text-sm
              sm:text-base
              lg:text-lg
              leading-relaxed
              text-blackDark
              max-w-3xl
              mb-4
              sm:mb-8
            "
          >
            To be leader of die industry in India and create a healthy
            constructive and fruitful partnership between die user and
            manufacturer.
          </p>

          {/* Swiper stays as it is, but gets proper horizontal padding from wrapper */}
          <MilestoneSwiper />
        </div>
      </section>
    </main>
  );
}

export default Milestone;
