"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import NavbarOptions from "./navbar_options";

function Navbar() {
  const [navProperties, setNavProperties] = useState({
    navBg: "bg-transparent",
    navLogo: "/logo2.png",
    navOptTextColor: "text-whiteDark",
    navOptBgColor: "bg-whiteDark",
  });

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    function handleNavBgColor() {
      if (window.scrollY > 80) {
        setNavProperties({
          navBg: "bg-whiteDark",
          navLogo: "/logo.png",
          navOptTextColor: "text-blackDark",
          navOptBgColor: "bg-blackDark",
        });
      } else {
        setNavProperties({
          navBg: "bg-transparent",
          navLogo: "/logo2.png",
          navOptTextColor: "text-whiteDark",
          navOptBgColor: "bg-whiteDark",
        });
      }
    }

    handleNavBgColor();
    window.addEventListener("scroll", handleNavBgColor);
    return () => window.removeEventListener("scroll", handleNavBgColor);
  }, []);

  const lineColor =
    navProperties.navBg === "bg-whiteDark" ? "bg-blackDark" : "bg-whiteDark";

  return (
    <nav
      className={`${navProperties.navBg} nav w-full flex flex-col items-center justify-start fixed top-0 left-0 z-40 transition-colors duration-200`}
    >
      {/* TOP BAR */}
      <section className="nav-sec max-w-1600px w-full flex items-center justify-center">
        <div className="nav-div w-88% flex items-center justify-between h-16 sm:h-20 md:h-24 lg:h-28">
          {/* LEFT LOGO */}
          <Link
            href="/"
            className="flex items-center justify-center h-12 sm:h-14 md:h-20 select-none"
          >
            <Image
              width={320}
              height={160}
              src={navProperties.navLogo}
              alt="Kay Pee Dies Logo"
              priority
              className="h-full w-auto"
            />
          </Link>

          {/* DESKTOP NAV OPTIONS */}
          <div className="hidden md:flex flex-1 items-center justify-center">
            <NavbarOptions navProps={navProperties} />
          </div>

          {/* RIGHT LOGO (DESKTOP/TABLET) */}
          <Link
            href="/"
            className="hidden md:flex items-center justify-center h-16 md:h-20 select-none"
          >
            <Image
              width={320}
              height={160}
              src="/56yearsLogo.png"
              alt="56yearsLogo"
              priority
              className="h-full w-auto"
            />
          </Link>

          {/* MOBILE TOGGLE */}
          <button
            type="button"
            className="md:hidden flex flex-col justify-center items-center gap-1 h-10 w-10"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-label="Toggle navigation"
          >
            <span
              className={`w-6 h-0.5 rounded-full ${lineColor} transition-transform duration-200 ${
                isMenuOpen ? "rotate-45 translate-y-1.5" : ""
              }`}
            />
            <span
              className={`w-6 h-0.5 rounded-full ${lineColor} transition-opacity duration-200 ${
                isMenuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`w-6 h-0.5 rounded-full ${lineColor} transition-transform duration-200 ${
                isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
              }`}
            />
          </button>
        </div>
      </section>

      {/* MOBILE DROPDOWN MENU */}
      <div
        className={`md:hidden w-full overflow-hidden transition-all duration-200 ${
          isMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div
          className={`
            w-full max-w-1600px mx-auto py-3 pl-6 rounded-b-lg backdrop-blur-sm
            ${
              navProperties.navBg === "bg-whiteDark"
                ? "bg-white" // after scroll
                : "bg-[#0F141A]/90" // top: dark glass
            }
          `}
        >
          <NavbarOptions navProps={navProperties} />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
