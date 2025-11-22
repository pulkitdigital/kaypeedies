import React from "react";
import MySwiper from "../my_swiper";
import { milestoneData } from "@/app/data/MilestoneData";

function MilestoneSwiperCards() {
  return (
    <div className="w-full flex items-center justify-center min-h-[400px] py-10">
      <div
        className="
          w-full
          max-w-6xl
          mx-auto
          px-3
          sm:px-8
          lg:px-0
          rounded-2xl
          shadow-2xl
          bg-yellowDark/80
        "
      >
        <MySwiper milestoneSwiperData={milestoneData} />
      </div>
    </div>
  );
}

export default MilestoneSwiperCards;
