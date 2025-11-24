"use client";

import React from "react";
import { motion } from "framer-motion";
import { HiOutlineMail, HiOutlinePhone } from "react-icons/hi";

const cardsData = [
  {
    title: "Send us an email",
    sub: "info@kaypeedies.com",
    icon: HiOutlineMail,
  },
  {
    title: "Give us a call",
    sub: "120-416 7194",
    icon: HiOutlinePhone,
  },
];

export default function ContactSupportCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
      {cardsData.map((item, i) => {
        const IconComponent = item.icon;
        return (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -10 }}
            className="
              group relative
              bg-whiteDark text-blackDark
              rounded-xl shadow-lg
              px-6 py-5 cursor-pointer
              overflow-hidden
              flex items-center gap-4
            "
          >
            {/* Yellow Hover Overlay */}
            <motion.span
              className="
                absolute inset-0 rounded-xl
                bg-[#E38F00]
                scale-x-0 opacity-0
                origin-center
                transition-all duration-500
                group-hover:scale-x-100
                group-hover:opacity-100
                z-0
              "
            />

            {/* Icon */}
            <span
              className="
                relative z-10
                h-12 w-12 flex items-center justify-center
                rounded-full bg-[#E38F00] text-white
                text-2xl
                group-hover:bg-white
                group-hover:text-[#E38F00]
                transition-all duration-500
              "
            >
              <IconComponent />
            </span>

            {/* Text */}
            <div className="relative z-10 text-left">
              <p className="nunitoSans font-semibold text-base group-hover:text-white transition-all duration-500">
                {item.title}
              </p>
              <p className="nunitoSans text-xs sm:text-sm text-gray-600 group-hover:text-white transition-all duration-500">
                {item.sub}
              </p>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
