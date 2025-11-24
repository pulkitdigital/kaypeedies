"use client";

import Image from "next/image";
import React from "react";

export default function ServicePageCard({ data, ind }) {
  const isEven = ind % 2 === 0;

  return (
    <article
      className="
        relative w-full
        hover:-translate-y-1
        transition-transform duration-300
      "
    >
      {/* main card */}
      <div
        className="
          bg-white
          rounded-2xl
          px-4 py-6
          sm:px-6 sm:py-8
          lg:px-4 lg:py-4

          border border-gray-200       /* OUTLINE added */
          shadow-[0_4px_16px_rgba(0,0,0,0.04)]
          hover:shadow-[0_10px_32px_rgba(0,0,0,0.08)]
          transition-all duration-300 ease-out
        "
      >
        <div
          className={`
            flex flex-col gap-6 items-stretch
            ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"}
          `}
        >
          {/* Image column */}
          <div className="w-full lg:w-1/3">
            <div
              className="
                w-full h-full rounded-xl
                border-2 border-gray-200   /* OUTLINE added */
                bg-white overflow-hidden
                shadow-sm
                transform-gpu 
                transition-all duration-300 ease-out
              "
            >
              <Image
                src={data.serviceImage}
                width={600}
                height={400}
                alt={data.serviceName}
                className="w-full h-full object-cover select-none"
                priority
              />
            </div>
          </div>

          {/* Content column */}
          <div className="w-full lg:w-2/3 flex flex-col justify-start gap-2 lg:px-4 lg:py-4">
            <h2
              className="
                saira
                text-blackDark
                font-semibold
                text-lg sm:text-xl lg:text-2xl
                leading-snug
              "
            >
              {data.serviceName}
            </h2>

            {data.serviceSubHeading && (
              <div className="flex flex-col gap-1">
                <h3
                  className="
                    nunitoSans
                    text-yellowDark
                    font-semibold
                    text-sm sm:text-base
                    leading-snug
                  "
                >
                  {data.serviceSubHeading}
                </h3>
                <span className="w-14 h-[3px] rounded-full bg-yellowDark" />
              </div>
            )}

            <p
              className="
                nunitoSans
                text-grey-700
                text-sm sm:text-base
                leading-relaxed
                whitespace-pre-line
              "
            >
              {data.serviceLongDesc}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}
