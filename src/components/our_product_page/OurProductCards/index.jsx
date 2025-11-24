// our_product_page/OurProductCards.jsx
"use client";

import React from "react";
import OurProductCard from "./OurProductCard";

function OurProductCards({ sectionTitle, products = [] }) {
  return (
    <section className="w-full py-10 sm:py-14 lg:py-16 flex justify-center">
      <div className="w-[88%] max-w-[1600px] flex flex-col gap-10">
        {/* Section Heading */}
        {sectionTitle && (
          <h2
            className="
              saira
              text-center
              text-2xl sm:text-3xl lg:text-4xl
              font-bold
              text-blackDark
            "
          >
            {sectionTitle}
          </h2>
        )}

        {/* Cards */}
        <div className="flex flex-col gap-10">
          {products.map((item, index) => (
            <OurProductCard key={index} cardData={item} ind={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default OurProductCards;
