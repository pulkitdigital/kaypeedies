// components/contact/ContactDetails.jsx
import React from "react";
import { HiOutlineMail, HiOutlinePhone, HiOutlineClock } from "react-icons/hi";
import { FaMapMarkerAlt } from "react-icons/fa";

function ContactDetails() {
  return (
    <div className="w-full flex flex-col gap-6">
      {/* Small label */}
      <div className="flex items-center gap-3 justify-start">
            <span className="h-[2px] w-20 bg-[#e48b04] rounded-full" />
            <h3 className="nunitoSans font-semibold text-[#e48b04] text-lg sm:text-xl text-left">
                Get in Touch
            </h3>
        </div>

      {/* Heading */}
      <h2 className="saira text-2xl sm:text-3xl lg:text-4xl font-bold text-blackDark">
        Contact us today
      </h2>

      {/* Intro text */}
      <p className="nunitoSans text-sm sm:text-base text-blackDark/80 leading-relaxed">
        The success of drawing operation is dependent on drawing die geometry.
        At Kay Pee Dies we specialize in designing & recommending the correct
        die specifications for optimum performance. From dies for wire bar,
        tube, or special applications – we ensure proper approach angles, bearing
        lengths, tolerances, and surface finish for efficient drawing.
      </p>

      <div className="border-t border-gray-200 pt-4 mt-2" />

      {/* Company block */}
      <div className="flex flex-col gap-3">
        <h3 className="nunitoSans font-bold text-sm sm:text-base text-blackDark">
          KAY PEE DIES INDIA PVT. LTD
        </h3>

        {/* Address */}
        <div className="flex items-start gap-3 text-sm sm:text-base text-blackDark/80">
          <FaMapMarkerAlt className="mt-1 text-yellowDark" />
          <p className="nunitoSans">
            D-15 & 16, Industrial Area, Meerut Road,<br />
            Ghaziabad – 201003 (U.P.), India
          </p>
        </div>

        {/* Email */}
        <div className="flex items-center gap-3 text-sm sm:text-base text-blackDark/80">
          <HiOutlineMail className="text-yellowDark" />
          <a
            href="mailto:info@kaypeedies.com"
            className="nunitoSans hover:text-yellowDark transition"
          >
            info@kaypeedies.com
          </a>
        </div>

        {/* Phone */}
        <div className="flex items-center gap-3 text-sm sm:text-base text-blackDark/80">
          <HiOutlinePhone className="text-yellowDark" />
          <a
            href="tel:+911204167194"
            className="nunitoSans hover:text-yellowDark transition"
          >
            +91-120-416 7194
          </a>
        </div>

        {/* Time */}
        <div className="flex items-center gap-3 text-sm sm:text-base text-blackDark/80">
          <HiOutlineClock className="text-yellowDark" />
          <p className="nunitoSans">09:00 AM – 22:00 PM</p>
        </div>
      </div>
    </div>
  );
}

export default ContactDetails;
