import Image from "next/image";
import React from "react";

function MilestoneSwiperCard({ data }) {
  return (
    <div
      className="
        milestone-swiper-card
        w-full
        flex
        flex-col
        items-start
        justify-start
        gap-6
        sm:gap-4
        p-4
        bg-yellowDark
        rounded-lg
        lg:min-h-[650px]
      "
    >
      <Image
        width={400}
        height={400}
        src={data.milestoneImage}
        alt={data.milestoneImage}
        priority
        className="
          w-full
          h-48
          sm:h-56
          lg:h-72
          object-cover
          rounded-md
          select-none
        "
      />

      <div
        className="
          w-full
          flex
          flex-col
          items-start
          justify-center
          gap-2
        "
      >
        <h5
          className="
            nunitoSans
            text-blackDark
            font-semibold
            text-base
            sm:text-lg
            lg:text-xl
            leading-snug
          "
        >
          {data.milestoneName}
        </h5>

        <h6
          className="
            saira
            text-blackDark
            font-semibold
            text-sm
            sm:text-base
            lg:text-lg
            leading-snug
          "
        >
          {data.milestoneName2}
        </h6>

        <p
          className="
            nunitoSans
            text-whiteDark
            text-xs
            sm:text-sm
            lg:text-base
            leading-relaxed
            text-justify
          "
        >
          {data.milestonePara}
        </p>
      </div>
    </div>
  );
}

export default MilestoneSwiperCard;
