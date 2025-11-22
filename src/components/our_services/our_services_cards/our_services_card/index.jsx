import Btn from "@/components/btn";
import Image from "next/image";
import React from "react";
import "./style.css";

function OurServicesCard({ cardData, ind }) {
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
        our-services-card
        w-full
        flex
        flex-col
        items-start
        justify-start
        rounded-lg
        px-4
        py-4
        sm:px-5
        sm:py-5
        gap-4
        border-2
        border-yellowDark
        bg-whiteDark
        shadow-md
      "
    >
      {/* Image wrapper to force same aspect ratio for all images */}
      <div className="w-full overflow-hidden rounded-lg">
        <Image
          width={400}
          height={400}
          src={cardData.serviceImage}
          alt={cardData.serviceName}
          priority={true}
          className="
            w-full
            aspect-[16/9]
            object-cover
            rounded-lg
            select-none
          "
        />
      </div>

      <div className="w-full flex flex-col items-start justify-center gap-3 mt-1">
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
          {cardData.serviceName}
        </h5>

        <Btn btnProps={btnProperties} btnRoute="/" />
      </div>
    </div>
  );
}

export default OurServicesCard;
