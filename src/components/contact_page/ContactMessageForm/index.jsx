// components/contact/ContactMessageForm.jsx
"use client";
import React, { useState } from "react";
import Btn from "@/components/btn";

function ContactMessageForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const btnProperties = {
    btnBgColor: "bg-yellowDark",
    btnShadeColor: "bg-blackDark",
    btnTextColor: "text-whiteDark",
    btnTextNewColor: "group-hover:text-whiteDark",
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("https://formspree.io/f/xpwelgpn", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setStatus("SUCCESS");
      setFormData({ name: "", email: "", number: "", message: "" });

      setTimeout(() => {
        window.location.href = "/contact";
      }, 5000);
    } else {
      setStatus("FAILED");
    }
  };

  return (
    <div
      className="
        w-full bg-[#f5f7fb]
        rounded-xl px-5 py-6 sm:px-6 sm:py-7 lg:px-8 lg:py-8
        border border-gray-200
      "
    >
      <h3 className="nunitoSans font-bold text-blackDark text-lg sm:text-xl mb-4">
        Leave a message
      </h3>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-3 py-2.5 border rounded-md"
          required
        />

        <input
          type="email"
          placeholder="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-3 py-2.5 border rounded-md"
          required
        />

        <input
          type="tel"
          placeholder="Number"
          name="number"
          value={formData.number}
          onChange={handleChange}
          className="w-full px-3 py-2.5 border rounded-md"
        />

        <textarea
          rows={4}
          placeholder="Message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="w-full px-3 py-2.5 border rounded-md resize-none"
          required
        />

        <div className="mt-2">
          <button
            type="submit"
            className={`btn ${btnProperties.btnBgColor} flex items-center justify-center leading-none text-btn1 font-btn1 px-4 py-3 rounded relative overflow-hidden group nunitoSans text-white`}
          >
            <span
              className={`btn-layer ${btnProperties.btnShadeColor} w-full h-full absolute -bottom-[100%] transition-all duration-500 rounded group-hover:bottom-0`}
            />
            <span className="z-20 text-white transition-all duration-500">
              Send Message
            </span>
          </button>
        </div>
      </form>

      {status === "SUCCESS" && (
        <p className="text-green-600 text-sm mt-3">
          Message sent
        </p>
      )}
      {status === "FAILED" && (
        <p className="text-red-600 text-sm mt-3">
          Failed to send. Try again.
        </p>
      )}
    </div>
  );
}

export default ContactMessageForm;
