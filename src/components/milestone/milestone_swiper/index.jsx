import React from "react";
import MilestoneSwiperCards from "../milestone_swiper_cards";

function MilestoneSwiper() {
  return (
    <div className="milestone-swiper w-full flex items-center justify-center">
      <div
        className="
          w-full
          max-w-6xl
          mx-auto
          px-3
          sm:px-4
          lg:px-0
        "
      >
        <MilestoneSwiperCards />
      </div>
    </div>
  );
}

export default MilestoneSwiper;
