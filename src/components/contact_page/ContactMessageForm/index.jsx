// components/contact/ContactMessageForm.jsx
import React from "react";
import Btn from "@/components/btn";
function ContactMessageForm() {
    const btnProperties = {
    btnBgColor: "bg-yellowDark",
    btnShadeColor: "bg-blackDark",
    btnTextColor: "text-whiteDark",
    btnTextNewColor: "group-hover:text-whiteDark",
  };
  return (
    <div
      className="
        w-full
        bg-[#f5f7fb]
        rounded-xl
        px-5 py-6
        sm:px-6 sm:py-7
        lg:px-8 lg:py-8
        border border-gray-200
      "
    >
      <h3 className="nunitoSans font-bold text-blackDark text-lg sm:text-xl mb-4">
        Leave a message
      </h3>

      <form className="flex flex-col gap-4">
        {/* Name */}
        <input
          type="text"
          placeholder="Name"
          className="
            w-full px-3 py-2.5 rounded-md 
            border border-gray-300 bg-white 
            text-sm outline-none 
            focus:border-yellowDark
          "
        />

        {/* Email */}
        <input
          type="email"
          placeholder="Email"
          className="
            w-full px-3 py-2.5 rounded-md 
            border border-gray-300 bg-white 
            text-sm outline-none 
            focus:border-yellowDark
          "
        />

        {/* Number */}
        <input
          type="tel"
          placeholder="Number"
          className="
            w-full px-3 py-2.5 rounded-md 
            border border-gray-300 bg-white 
            text-sm outline-none 
            focus:border-yellowDark
          "
        />

        {/* Message */}
        <textarea
          rows={4}
          placeholder="Message"
          className="
            w-full px-3 py-2.5 rounded-md 
            border border-gray-300 bg-white 
            text-sm outline-none resize-none 
            focus:border-yellowDark
          "
        />

        {/* Button */}
        <div className="mt-2">
          <button
            type="submit"
            className={`btn ${btnProperties.btnBgColor} flex items-center justify-center leading-none text-btn1 font-btn1 px-4 py-3 rounded select-none active:scale-90 transition-transform duration-200 ease-in-out relative overflow-hidden group nunitoSans text-white`}
            >
            <span
                className={`btn-layer ${btnProperties.btnShadeColor} w-full h-full absolute -bottom-[100%] transition-all duration-500 ease-in-out rounded group-hover:bottom-0`}
            ></span>

            {/* Always visible → White text (Hover also remains white) */}
            <span
                className={`
                z-20
                text-white
                transition-all duration-500 ease-in-out
                `}
            >
                Send Message
            </span>
          </button>

        </div>
      </form>
    </div>
  );
}

export default ContactMessageForm;
