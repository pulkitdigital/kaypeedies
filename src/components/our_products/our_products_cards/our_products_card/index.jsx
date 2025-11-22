import Btn from "@/components/btn";
import Image from "next/image";
import React from "react";
import "./style.css";

function OurProductsCard({ cardData, ind }) {
  const btnProperties = {
    btnName: "Read More",
    btnBgColor: "bg-yellowDark",
    btnShadeColor: "bg-blackDark",
    btnTextColor: "text-whiteDark",
    btnTextNewColor: "group-hover:text-yellowDark",
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
        alt={cardData.productImage}
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

        <Btn btnProps={btnProperties} btnRoute="/" />
      </div>
    </div>
  );
}

export default OurProductsCard;
