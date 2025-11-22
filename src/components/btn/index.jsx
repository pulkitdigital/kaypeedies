import Link from "next/link";
import React from "react";
function Btn({ btnProps, btnRoute }) {
  return (
    <Link
      href={btnRoute}
      className={` btn ${btnProps.btnBgColor} flex items-center justify-center leading-none text-btn1 font-btn1 px-8 py-4 rounded select-none active:scale-90 transition-transform duration-200 ease-in-out relative overflow-hidden group nunitoSans`}
    >
      <span
        className={` btn-layer ${btnProps.btnShadeColor} w-full h-full absolute -bottom-[100%] transition-all duration-500 ease-in-out rounded group-hover:bottom-0`}
      ></span>
      <span
        className={` z-20 ${btnProps.btnTextColor} ${btnProps.btnTextNewColor} transition-all duration-500 ease-in-out`}
      >
        {btnProps.btnName}
      </span>
    </Link>
  );
}

export default Btn;
