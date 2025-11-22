"use client";

import React from "react";
import AboutExperienceCard from "./about_experience_card";
import { FaTools, FaIndustry, FaHandshake } from "react-icons/fa";

function AboutExperienceCards() {
  const cardsData = [
    { cardName: "Precision Carbide Solutions", icon: FaTools },
    { cardName: "Industry-Leading Carbide Expertise", icon: FaIndustry },
    { cardName: "Your Trusted Carbide Partner", icon: FaHandshake },
  ];

  return (
    <div
      className="
        w-full
        grid
        grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-3
        gap-4 sm:gap-6 lg:gap-8
      "
    >
      {cardsData.map((data, ind) => (
        <AboutExperienceCard key={ind} cardData={data} />
      ))}
    </div>
  );
}

export default AboutExperienceCards;
