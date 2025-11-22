import React from "react";
import { ourServicesData } from "@/app/data/OurServicesData";
import OurServicesCard from "./our_services_card";

function OurServicesCards() {
  return (
    <div
      className="
        w-full
        grid
        grid-cols-1        /* mobile */
        sm:grid-cols-2     /* tablet */
        lg:grid-cols-3     /* desktop */
        gap-6
        mt-4
      "
    >
      {ourServicesData?.map((data, ind) => (
        <OurServicesCard key={ind} cardData={data} ind={ind} />
      ))}
    </div>
  );
}

export default OurServicesCards;
