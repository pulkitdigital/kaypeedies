import React from "react";
import MainH3 from "../main_h3";
import ContactSupportCards from "./ContactSupportCards";
import Image from "next/image";

function ContactSupportHero() {
  const mainH3Properties = {
    mainH3Name: "Connect Us",
    mainH3TextColor: "text-yellowDark",
    mainH3BgColor: "bg-yellowDark",
  };

  return (
    <main className="about-experience-main w-full flex justify-center px-4 sm:px-6 lg:px-0">
      <section className="relative about-experience-sec max-w-1600px w-full flex items-center justify-center">

        {/* Background Image */}
        <Image
          width={1600}
          height={800}
          src="/contactSupport.jpg"
          alt="Support section background"
          priority
          className="absolute inset-0 h-full w-full object-cover select-none"
        />

        {/* 🔥 Dark Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Content */}
        <div className="relative z-20 about-experience-div w-full flex flex-col items-center justify-center gap-6 sm:gap-8 py-16 sm:py-20 lg:py-28 text-center">
          <MainH3 mainH3Props={mainH3Properties} />

          <h4 className="nunitoSans text-white text-base sm:text-lg md:text-xl lg:text-2xl leading-snug max-w-3xl mb-4">
            We have more than 56 years experience in manufacturer of dies and
            special applications.
          </h4>

          <div className="w-[90%]">
            <ContactSupportCards />
          </div>
        </div>
      </section>
    </main>
  );
}

export default ContactSupportHero;
