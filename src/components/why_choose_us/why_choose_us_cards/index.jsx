import React from "react";
import {
  HiCheckBadge,
  HiHandThumbUp,
  HiTrophy,
  HiUsers,
} from "react-icons/hi2";
import WhyChooseUsCard from "./why_choose_us_card";
import Btn from "../../btn";

function WhyChooseUsCards() {
  const cardsData = [
    {
      cardName: "Established Industry Leader",
      cardPara:
        "A firm with over four decades of experience and presence in the industry.",
      icon: HiCheckBadge,
    },
    {
      cardName: "Customer-Centric Approach",
      cardPara:
        "Very high track record of retaining customer base due to quality, assured delivery, personalized service at most reasonable and competitive prices.",
      icon: HiHandThumbUp,
    },
    {
      cardName: "Premium Materials & Industry Recognition",
      cardPara:
        "Use only the best raw material (tungsten carbide) available in India. One of the biggest customers of Kennametal Widia in the wire and bar drawing pellet segment.",
      icon: HiTrophy,
    },
    {
      cardName: "Experienced Leadership",
      cardPara:
        "Managed by two qualified engineers with 54 and 12 years of experience. A unique combination of expertise and experience.",
      icon: HiUsers,
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
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8 mb-10">
        {cardsData.map((data, ind) => (
          <WhyChooseUsCard key={ind} ind={ind + 1} cardData={data} />
        ))}
      </div>
      <div className="w-full flex justify-center">
        <Btn btnProps={btnProperties} btnRoute="/" />
      </div>
    </>
  );
}

export default WhyChooseUsCards;
