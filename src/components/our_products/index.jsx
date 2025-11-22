import React from "react";
import MainH3 from "../main_h3";
import Image from "next/image";
import OurProductsCards from "./our_products_cards";

function OurProducts() {
  const mainH3Properties = {
    mainH3Name: "Our Products",
    mainH3TextColor: "text-yellowDark",
    mainH3BgColor: "bg-yellowDark",
  };

  return (
    <main className="our-products-main w-full flex items-center justify-center">
      <section className="our-products-sec relative w-full flex items-center justify-center overflow-hidden">
        {/* Single responsive background image */}
        <Image
          width={1600}
          height={800}
          src="/bgMapShade.png"
          alt="bgMapShade"
          priority
          className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none"
        />

        <div
          className="
            our-products-div
            relative z-20
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
            gap-6
            sm:gap-8
            py-16
            sm:py-20
            lg:py-28
          "
        >
          <MainH3 mainH3Props={mainH3Properties} />

          <h4
            className="
              nunitoSans
              text-center
              text-lg
              sm:text-2xl
              lg:text-3xl
              font-semibold
              leading-tight
              sm:leading-snug
              text-blackDark
              max-w-3xl
            "
          >
            We specialize in designing & recommending the correct die
            specifications for optimum performance.
          </h4>

          {/* cards grid */}
          <OurProductsCards />
        </div>
      </section>
    </main>
  );
}

export default OurProducts;
