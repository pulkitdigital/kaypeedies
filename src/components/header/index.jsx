import React from "react";
import "./style.css";
import Btn from "../btn";
function Header() {
  const btnProperties = {
    btnName: "Discover More",
    btnBgColor: "bg-yellowDark",
    btnShadeColor: "bg-whiteDark",
    btnTextColor: "text-whiteDark",
    btnTextNewColor: "group-hover:text-blackDark",
  };
  return (
    <header className=" header w-full flex items-center justify-center">
      <section className=" header-sec max-w-1600px w-full flex items-center justify-center z-20">
        <div className=" header-div w-88% flex items-center justify-center h-screen max-h-800px">
          <div className=" w-full flex items-center justify-center flex-col gap-8">
            <h1 className=" saira text-h1 font-h1 leading-none text-whiteDark text-center">
              Welcome to Kay Pee Dies
            </h1>
            <h2 className=" text-center nunitoSans text-h6 font-h2 text-whiteDark leading-none mb-4">
              Carbide Dies & Lubricants: Engineered for Performance, Backed by
              Trust.
            </h2>
            <Btn btnProps={btnProperties} btnRoute={`/about`} />
          </div>
        </div>
      </section>
    </header>
  );
}

export default Header;
