"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

function NavbarOptions({ navProps }) {
  const pathname = usePathname();

  const navOpt = [
    { optName: "Home", optPath: "/" },
    { optName: "About", optPath: "/about" },
    { optName: "Services", optPath: "/services" },
    { optName: "Products", optPath: "/products" },
    { optName: "Contact", optPath: "/contact" },
  ];

  const isLightBg = navProps.navBg === "bg-whiteDark";
  const underlineColor = isLightBg ? "bg-neutral-700" : "bg-neutral-200";

  return (
    <div
      className="
        flex flex-col md:flex-row
        items-start md:items-center
        justify-start md:justify-center
        gap-3 md:gap-8
        w-full md:w-auto
        select-none
      "
    >
      {navOpt.map((data, ind) => {
        const isActive = data.optPath === pathname;

        return (
          <Link
            key={ind}
            href={data.optPath}
            className={`
              nunitoSans relative
              w-full md:w-auto
              py-2 md:py-0
              flex items-center
              justify-start md:justify-center
              ${navProps.navOptTextColor}
              text-p1 font-p1 leading-none
              active:scale-90
              transition-transform duration-200 ease-in-out
              group
            `}
          >
            <span className="relative inline-block z-20">
              {data.optName}
              <span
                className={`
                  ${underlineColor}
                  absolute -bottom-[2px] left-0
                  h-[1.5px]
                  transition-all duration-200 ease-in-out
                  ${isActive ? "w-full" : "w-0 group-hover:w-full"}
                `}
              />
            </span>
          </Link>
        );
      })}
    </div>
  );
}

export default NavbarOptions;
