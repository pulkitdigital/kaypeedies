import React from "react";
import { HiOutlineBadgeCheck, HiOutlineGlobeAlt } from "react-icons/hi"; // icons
import OurIntroductionCard from "./our_introduction_card";
import Btn from "../../btn";

function OurIntroductionCards() {
  const cardsData = [
    {
      cardName: "Experienced Engineers & Quality Materials",
      cardPara:
        "The company emphasizes its long history in the industry and management by qualified engineers.",
      cardIcon: (
        <HiOutlineBadgeCheck className="w-10 h-10 sm:w-12 sm:h-12 text-yellowDark" />
      ),
    },
    {
      cardName: "Customer Satisfaction & Global Reach",
      cardPara:
        "Customers all over India as well as in Nepal, South East Asia, Middle East and African countries.",
      cardIcon: (
        <HiOutlineGlobeAlt className="w-10 h-10 sm:w-12 sm:h-12 text-yellowDark" />
      ),
    },
  ];

  const btnProperties = {
    btnName: "Contact Us",
    btnBgColor: "bg-yellowDark",
    btnShadeColor: "bg-whiteDark",
    btnTextColor: "text-whiteDark",
    btnTextNewColor: "group-hover:text-blackDark",
  };

  return (
    <>
      {/* Responsive cards: 1 col on mobile, 2 on tablet+ */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
        {cardsData.map((data, ind) => (
          <OurIntroductionCard key={ind} ind={ind + 1} cardData={data} />
        ))}
      </div>

      {/* Button centered on all screens */}
      <div className="w-full flex justify-center">
        <Btn btnProps={btnProperties} btnRoute="/" />
      </div>
    </>
  );
}

export default OurIntroductionCards;
