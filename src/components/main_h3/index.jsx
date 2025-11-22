import React from "react";

function MainH3({ mainH3Props }) {
  return (
    <h3
      className={` text-center flex items-center justify-center relative text-btn1 font-p1 leading-none`}
    >
      <span
        className={` absolute left-full h-[2px] w-16 ${mainH3Props.mainH3BgColor}`}
      ></span>
      <span className={` saira ${mainH3Props.mainH3TextColor} px-2`}>
        {mainH3Props.mainH3Name}
      </span>
      <span
        className={` absolute right-full h-[2px] w-16 ${mainH3Props.mainH3BgColor}`}
      ></span>
    </h3>
  );
}

export default MainH3;
