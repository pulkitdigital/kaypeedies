// our_product_page/OurProductCard.jsx
"use client";

import Image from "next/image";
import React from "react";

function OurProductCard({ cardData, ind }) {
  const isEven = ind % 2 === 0;

  return (
    <article
      className="
        relative w-full
        hover:-translate-y-1
        transition-transform duration-300
      "
    >
      <div
        className="
          bg-white
          rounded-2xl
          border border-gray-200
          shadow-[0_4px_16px_rgba(0,0,0,0.04)]
          hover:shadow-[0_12px_32px_rgba(0,0,0,0.08)]
          transition-all duration-300 ease-out
          px-4 py-6
          sm:px-6 sm:py-8
          lg:px-4 lg:py-4
        "
      >
        <div
          className={`
            flex flex-col gap-6 items-stretch
            ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"}
          `}
        >
          {/* IMAGE BLOCK */}
          <div className="w-full lg:w-1/3">
            <div
              className="
                w-full aspect-[4/3] rounded-xl
                bg-white overflow-hidden
                border-2 border-gray-200
                shadow-sm 
                transform-gpu 
                transition-all duration-300 ease-out
              "
            >
              <Image
                src={cardData.image}
                width={600}
                height={600}
                alt={cardData.name}
                className="
                  w-full h-full object-cover
                  transition-transform duration-500 ease-out
                "
                priority
              />
            </div>
          </div>

          {/* CONTENT BLOCK */}
          <div className="w-full lg:w-2/3 flex flex-col justify-start gap-3 lg:px-2 lg:py-2">
            <h3
              className="
                saira
                text-blackDark
                font-semibold
                text-lg sm:text-xl lg:text-2xl
                leading-snug
              "
            >
              {cardData.name}
            </h3>

            {cardData.subtitle && (
              <div className="flex flex-col gap-1">
                <h4
                  className="
                    nunitoSans
                    text-yellowDark
                    font-semibold
                    text-sm sm:text-base
                    leading-snug
                  "
                >
                  {cardData.subtitle}
                </h4>
                <span className="w-14 h-[3px] rounded-full bg-yellowDark" />
              </div>
            )}

            <p
              className="
                nunitoSans
                text-blackDark/80
                text-sm sm:text-base
                leading-relaxed
              "
            >
              {cardData.description}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}

export default OurProductCard;
