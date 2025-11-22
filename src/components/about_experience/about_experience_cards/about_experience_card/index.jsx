"use client";

import React from "react";
import { motion } from "framer-motion";

export default function AboutExperienceCard({ cardData }) {
  const { cardName, icon } = cardData;
  const Icon = icon; // use component reference

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={{
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.45, ease: [0.28, 0.11, 0.32, 1] }}
      whileHover={{
        y: -10,
        transition: { duration: 0.45, ease: [0.28, 0.11, 0.32, 1] },
      }}
      className="
        relative overflow-hidden group
        w-full flex items-center gap-4
        px-6 py-4 rounded-md cursor-pointer
        bg-black
      "
    >
      {/* Hover overlay: Yellow card */}
      <div
        className="
          absolute inset-0
          bg-[#E38F00]
          rounded-md
          origin-center scale-x-0 opacity-0
          transition-all duration-[550ms]
          ease-[cubic-bezier(.28,.11,.32,1)]
          group-hover:scale-x-100
          group-hover:opacity-100
          z-0
        "
      />

      {/* Icon Circle */}
      <span
        className=" 
          relative z-10
          h-14 w-14 sm:h-16
          sm:w-16 rounded-full
          flex items-center justify-center
          transition-all duration-[550ms]
          ease-[cubic-bezier(.28,.11,.32,1)]
          
          bg-[#E38F00]          /* normal: yellow */
          text-white            /* normal: white icon */
          group-hover:bg-white  /* hover: white circle */
          group-hover:text-[#E38F00] /* hover: yellow icon */
        "
      >
        {Icon && (
          <Icon
            className="
              w-10 h-10
              sm:w-8 sm:h-8
              transition-all duration-[550ms]
              ease-[cubic-bezier(.28,.11,.32,1)]
            "
          />
        )}
      </span>

      {/* Text */}
      <h5
        className="
          relative z-10
          flex-1 text-white
          text-base sm:text-lg lg:text-xl
          font-semibold leading-snug
          transition-all duration-[550ms]
          ease-[cubic-bezier(.28,.11,.32,1)]
        "
      >
        {cardName}
      </h5>
    </motion.div>
  );
}
