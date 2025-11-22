import React from "react";
import "./style.css";
import Counter from "./counter";

function Counters() {
  return (
    <main
      className="
        counters-main
        relative
        w-full
        flex
        items-center
        justify-center
        bg-center bg-cover bg-no-repeat bg-fixed
      "
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-blackLight2" />

      <section
        className="
          counters-sec
          relative
          w-full
          flex
          items-center
          justify-center
          py-16
          sm:py-20
          lg:py-28
        "
      >
        <div
          className="
            counters-div
            relative
            z-20
            w-full
            max-w-6xl
            mx-auto
            px-4
            sm:px-6
            lg:px-8
            flex
            flex-col
            items-center
            justify-center
          "
        >
          {/* Counter component should handle its own internal responsive layout */}
          <Counter />
        </div>
      </section>
    </main>
  );
}

export default Counters;
