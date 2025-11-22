import React from "react";

function OurIntroductionCard({ cardData, ind }) {
  const isEven = ind % 2 === 0;

  return (
    <div
      className={`
        our-introduction-card
        relative
        w-full
        flex
        flex-col
        sm:flex-row
        ${isEven ? "sm:flex-row-reverse" : "sm:flex-row"}
        items-center
        justify-start
        gap-4
        sm:gap-6
        bg-whiteDark
        px-4
        py-4
        sm:px-6
        lg:px-8
        rounded-lg
        group
        overflow-hidden
      `}
    >
      {/* Hover background sweep */}
      <span
        className={`
          absolute
          top-0
          bottom-0
          ${isEven ? "right-0" : "left-0"}
          w-0
          rounded-lg
          bg-yellowDark
          group-hover:w-full
          transition-all
          duration-500
          ease-in-out
        `}
      />
      {/* Icon circle */}
      <span
        className="
          z-20
          flex
          items-center
          justify-center
          h-14
          w-14
          sm:h-16
          sm:w-16
          rounded-full
          bg-yellowDark
          group-hover:bg-whiteDark
          transition-all
          duration-500
          ease-in-out
          shrink-0
          text-white
          group-hover:text-yellowDark
        "
      >
        {cardData.cardIcon && (
          <cardData.cardIcon.type
            className="
              w-10 h-10 sm:w-12 sm:h-12
              transition-all duration-500 ease-in-out
            "
          />
        )}
      </span>


      {/* Text block */}
      <div
        className={`
          z-20
          w-full
          flex
          flex-col
          justify-center
          gap-2
          sm:gap-3
          ${isEven ? "sm:items-end text-right" : "items-start text-left"}
        `}
      >
        <h5
          className={`
            nunitoSans
            text-yellowDark
            font-bold
            align-l
            text-sm
            sm:text-base
            lg:text-lg
            leading-snug
            group-hover:text-blackDark
            transition-all
            duration-500
            ease-in-out
          `}
        >
          {cardData.cardName}
        </h5>

        <p
          className="
            nunitoSans
            text-blackDark
            text-xs
            sm:text-sm
            lg:text-base
            leading-relaxed
            text-justify
            group-hover:text-whiteDark
            transition-all
            duration-500
            ease-in-out
          "
        >
          {cardData.cardPara}
        </p>
      </div>
    </div>
  );
}

export default OurIntroductionCard;
