// why_choose_us_card/index.jsx
import React from "react";

function WhyChooseUsCard({ cardData, ind }) {
  const isEven = ind % 2 === 0;
  const Icon = cardData.icon;

  return (
    <div
      className={`
        why-choose-us-card
        relative
        w-full
        flex flex-col
        sm:flex-row
        ${isEven ? "sm:flex-row-reverse" : ""}
        items-center
        justify-start
        gap-4 sm:gap-6
        px-4 py-5 sm:px-6
        bg-white
        rounded-lg
        overflow-hidden
        group
        transition-all duration-500
      `}
    >
      {/* background sweep */}
      <span
        className={`
          absolute inset-y-0
          ${isEven ? "right-0" : "left-0"}
          w-0
          bg-yellowDark
          group-hover:w-full
          transition-all duration-500 ease-in-out
          rounded-lg
        `}
      />

      {/* ICON CIRCLE */}
      <span
        className="
          relative z-20
          flex items-center justify-center
          h-12 w-12 sm:h-14 sm:w-14
          rounded-full
          bg-yellowDark
          group-hover:bg-white
          transition-all duration-500 ease-in-out
          shrink-0
        "
      >
        <Icon
          className="
            w-10 h-10
            text-white
            group-hover:text-yellowDark
            transition-all duration-500 ease-in-out
          "
        />
      </span>

      {/* TEXT */}
      <div
        className={`
          relative z-20
          w-full
          flex flex-col gap-2
          ${isEven ? "sm:items-end sm:text-right" : "text-left"}
        `}
      >
        <h5
          className="
            nunitoSans
            font-bold
            text-yellowDark
            text-sm sm:text-base lg:text-lg
            leading-snug
            group-hover:text-blackDark
            transition-all duration-500
          "
        >
          {cardData.cardName}
        </h5>

        <p
          className="
            nunitoSans
            text-blackDark
            text-xs sm:text-sm lg:text-base
            leading-normal
            group-hover:text-white
            transition-all duration-500
          "
        >
          {cardData.cardPara}
        </p>
      </div>
    </div>
  );
}

export default WhyChooseUsCard;
