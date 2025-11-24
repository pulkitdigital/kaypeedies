// components/contact/ContactSection.jsx
import React from "react";
import ContactMessageForm from "./ContactMessageForm";
import ContactDetails from "./ContactDetails";

function ContactSection() {
  return (
    <section className="w-full flex justify-center px-4 sm:px-6 lg:px-0 py-12 sm:py-16 lg:py-20">
      <div className="w-full max-w-6xl flex flex-col lg:flex-row gap-10 lg:gap-12">
        {/* LEFT: MESSAGE FORM */}
        <div className="w-full lg:w-1/2">
          <ContactMessageForm />
        </div>

        {/* RIGHT: DETAILS */}
        <div className="w-full lg:w-1/2">
          <ContactDetails />
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
