import Btn from "@/components/btn";
import Image from "next/image";
import React from "react";
import "./style.css";

function OurProductCardHomePage({ cardData }) {
  const btnProperties = {
    btnName: "Read More",
    btnBgColor: "bg-yellowDark",
    btnShadeColor: "bg-blackDark",
    btnTextColor: "text-whiteDark",
    btnTextNewColor: "group-hover:text-whiteDark",
  };

  return (
    <div
      className="
        our-products-card
        h-full
        flex flex-col
        items-start
        justify-between
        rounded-lg
        px-4 py-4
        gap-4
        border-2 border-yellowDark
        bg-whiteDark
      "
    >
      <Image
        width={400}
        height={400}
        src={cardData.productImage}
        alt={cardData.productName}
        priority
        className="
          w-full
          aspect-[4/3]
          object-cover
          rounded-lg
          select-none
        "
      />

      <div className="flex flex-col gap-3 w-full">
        <h5
          className="
            nunitoSans
            text-blackDark
            font-semibold
            text-base sm:text-lg
            leading-tight
          "
        >
          {cardData.productName}
        </h5>

        {cardData.productShortDesc && (
          <p
            className="
              nunitoSans
              text-gray-700
              text-xs sm:text-sm lg:text-base
              leading-relaxed
              line-clamp-3
            "
          >
            {cardData.productShortDesc}
          </p>
        )}

        <Btn btnProps={btnProperties} btnRoute="/" />
      </div>
    </div>
  );
}

export default OurProductCardHomePage;
