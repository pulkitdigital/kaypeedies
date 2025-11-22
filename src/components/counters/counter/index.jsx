"use client";
import React from "react";
import CountUp from "react-countup";

function Counter() {
  const counterData = [
    { counterVal: 56, counterName: "Glorious Years" },
    { counterVal: 2000, counterName: "Happy Customer" },
    { counterVal: 5000, counterName: "Service Complete" },
    { counterVal: 6900, counterName: "Satisfactions" },
  ];

  return (
    <div
      className="
        w-full
        grid
        grid-cols-2
        sm:grid-cols-4
        gap-8
        text-center
      "
    >
      {counterData.map((data, ind) => (
        <div key={ind} className="flex flex-col items-center justify-center gap-2">
          <CountUp
            start={0}
            end={data.counterVal}
            duration={2}
            suffix="+"
            separator=""
            className="
              text-yellowDark
              saira
              text-2xl
              sm:text-3xl
              lg:text-5xl
              font-bold
              leading-none
            "
          />

          <h5
            className="
              text-whiteDark
              saira
              text-xs
              sm:text-sm
              lg:text-base
              font-medium
              leading-tight
            "
          >
            {data.counterName}
          </h5>
        </div>
      ))}
    </div>
  );
}

export default Counter;
