import React from "react";
import Image from "next/image";
import {
  FaTwitter,
  FaFacebookF,
  FaPinterestP,
  FaInstagram,
  FaMapMarkerAlt,
  FaHeadphonesAlt,
  FaEnvelope,
  FaAngleRight,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full relative overflow-hidden">
      {/* BACKGROUND IMAGE + OPACITY OVERLAY */}
      <div className="absolute inset-0 pointer-events-none select-none">
        <Image
          src="/bgMapShade2.png"
          alt="footer background"
          fill
          priority
          className="object-cover"
          style={{ zIndex: 10 }}
        />
        {/* Overlay is above the image, but below the footer content */}
        <div className="absolute inset-0 bg-blackDark" style={{ zIndex: 1 }} />
        {/* Use bg-black with opacity (bg-black/70) for best compatibility */}
      </div>

      {/* MAIN CONTENT */}
      <div className="relative z-10">
        <div className="w-full flex justify-center py-12 lg:py-20">
          <div className="w-[88%] max-w-[1600px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

            {/* COLUMN - LOGO + SOCIAL */}
            <div className="flex flex-col gap-5">
              <div className="w-40">
                <Image
                  src="/logo2.png"
                  alt="KayPee logo"
                  width={160}
                  height={80}
                  className="object-contain"
                />
              </div>

              {/* <div className="flex items-center gap-4 text-whiteDark text-xl">
                <a href="#"><FaTwitter className="hover:text-yellowDark transition" /></a>
                <a href="#"><FaFacebookF className="hover:text-yellowDark transition" /></a>
                <a href="#"><FaPinterestP className="hover:text-yellowDark transition" /></a>
                <a href="#"><FaInstagram className="hover:text-yellowDark transition" /></a>
              </div> */}
              <div className="flex items-center gap-4 text-xl">
            {[
                FaTwitter,
                FaFacebookF,
                FaPinterestP,
                FaInstagram,
            ].map((Icon, i) => (
                <a
                key={i}
                href="#"
                className="
                    flex items-center justify-center
                    h-10 w-10
                    rounded-full
                    bg-yellowDark
                    text-whiteDark
                    transition-all duration-300
                    hover:bg-whiteDark
                    hover:text-yellowDark
                "
                >
                <Icon />
                </a>
            ))}
            </div>

            </div>

            {/* COLUMN - QUICK LINKS */}
            <div>
              <h3 className="text-yellowDark font-semibold text-lg mb-4">
                Quick Links
              </h3>
              <ul className="flex flex-col gap-3 text-whiteDark text-sm">
                {[
                  {name: "Home", href: "/"},
                  {name: "About Us", href: "/about"},
                  {name: "Services", href: "/services"},
                  {name: "Products", href: "/products"},
                  {name: "Contact Us", href: "/contact"},
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <FaAngleRight className="text-yellowDark text-sm" />
                    <a href={item.href} className="hover:text-yellowDark transition">
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* COLUMN - CONTACT INFO */}
            <div>
              <h3 className="text-yellowDark font-semibold text-lg mb-4">
                Contact Us
              </h3>
              <ul className="flex flex-col gap-4 text-whiteDark text-sm">
                <li className="flex gap-3 items-start">
                  <FaMapMarkerAlt className="text-yellowDark text-lg mt-1" />
                  <p>
                    D-15 & 16, Industrial Area, Meerut Road, Ghaziabad<br />
                    201003 (U.P.) India
                  </p>
                </li>
                <li className="flex gap-3 items-center">
                  <FaHeadphonesAlt className="text-yellowDark text-lg" />
                  <a href="tel:01204167194" className="hover:text-yellowDark transition">
                    0120-416-7194
                  </a>
                </li>
                <li className="flex gap-3 items-center">
                  <FaEnvelope className="text-yellowDark text-lg" />
                  <a href="mailto:info@kaypeedies.com" className="hover:text-yellowDark transition">
                    info@kaypeedies.com
                  </a>
                </li>
              </ul>
            </div>

          </div>
        </div>

        {/* BOTTOM COPYRIGHT BAR */}
        <div className="bg-yellowDark w-full py-3 flex justify-center">
          <p className="text-blackDark font-semibold text-sm">
            Created by{" "}
            <a
              href="https://bebeyond.digital/"
              className="underline hover:text-whiteDark transition"
            >
              BeBeyond
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
