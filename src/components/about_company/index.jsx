import React from "react";
import Image from "next/image";
import Btn from "../btn";

function AboutCompany() {
  const btnProperties = {
    btnName: "Contact Us",
    btnBgColor: "bg-yellowDark",
    btnShadeColor: "bg-blackDark",
    btnTextColor: "text-whiteDark",
    btnTextNewColor: "group-hover:text-whiteDark",
  };

  return (
    <section className="w-full py-10 lg:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-0 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* LEFT: IMAGE */}
        <div className="w-full relative">
          <div className="relative w-full h-[220px] sm:h-[280px] md:h-[340px] lg:h-[400px] overflow-hidden rounded-xl shadow-lg">
            <Image
              src="/aboutCompany.jpg"
              alt="Engineers working in an industrial plant"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
              priority
            />
          </div>
        </div>

        {/* RIGHT: CONTENT */}
        <div className="w-full flex flex-col">
          {/* Small line + label */}
          {/* <div className="flex items-center justify-center lg:justify-start gap-3 mb-6">
            <span className="h-[2px] w-20 bg-[#e48b04] rounded-full" />
            <h3 className="nunitoSans font-semibold text-[#e48b04] text-lg sm:text-xl ">
              About Company
            </h3>
          </div> */}

        <div className="flex items-center gap-3 mb-6 justify-start">
            <span className="h-[2px] w-20 bg-[#e48b04] rounded-full" />
            <h3 className="nunitoSans font-semibold text-[#e48b04] text-lg sm:text-xl text-left">
                About Company
            </h3>
        </div>

          {/* Paragraph */}
          <p
            className="
              nunitoSans
              text-sm
              sm:text-base
              lg:text-lg
              leading-relaxed
              mb-8
              text-blackDark
              text-center
              lg:text-left
              max-w-3xl
              mx-auto
              lg:mx-0
            "
          >
            The company was started in 1968 as the pioneer manufacturing of wire
            drawing dies in India. In its 56 years journey the company has
            crossed many milestones and today is the leading manufacturer of all
            kinds of Tungsten Carbide Dies. In 2008 it tied up with Pan
            Chemicals SPA, leading manufacturer of wire drawing lubricant and
            was appointed as sole selling agent for Pan Chemicals products in
            SAARC countries.
          </p>

          {/* Button */}
          <div className="w-full flex justify-center lg:justify-start">
            <Btn btnProps={btnProperties} btnRoute="/contact" />
          </div>

          {/* Decorative dots */}
          <div className="mt-8 flex items-center justify-center lg:justify-start gap-3">
            <span className="h-2 w-2 rounded-full bg-yellowDark" />
            <span className="h-4 w-4 rounded-full border border-yellowDark" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutCompany;
