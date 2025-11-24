import React from "react";
import MainH3 from "../main_h3";
import Image from "next/image";
import ServicePageCards from "./ServicePageCards";

function OurServicePage() {
  const mainH3Properties = {
    mainH3Name: "Our Services",
    mainH3TextColor: "text-yellowDark",
    mainH3BgColor: "bg-yellowDark",
  };

  return (
    <main className="our-services-main w-full flex items-center justify-center">
      <section className="our-services-sec relative w-full flex items-center justify-center overflow-hidden">
        {/* Background image */}
        <Image
          width={1600}
          height={800}
          src="/bgMapShade.png"
          alt="bgMapShade"
          priority={true}
          className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none"
        />

        <div
          className="
            our-services-div
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
            gap-4
            sm:gap-6
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
              lg:leading-snug
              text-blackDark
              mb-2
              sm:mb-4
            "
          >
            Service We’re Offering to Our Customers
          </h4>
          <p
            className="
              nunitoSans
              text-center
              text-sm
              sm:text-base
              lg:text-lg
              leading-relaxed
              mb-8
              max-w-3xl
              text-blackDark
            "
          >
            Tungsten carbide dies for Wire, Bright Bar, Tube drawing, Extrusion, Heading and other special applications.
          </p>
          <ServicePageCards />
          {/* Cards section – make sure this component uses responsive grid/flex */}
          {/* <OurServicesCards /> */}
        </div>
      </section>
    </main>
  );
}

export default OurServicePage;
