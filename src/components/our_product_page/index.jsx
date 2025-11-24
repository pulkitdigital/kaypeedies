// our_product_page/index.jsx
"use client";

import React from "react";
import OurProductCards from "./OurProductCards";
import MainH3 from "../main_h3";
import {
  tungstenDiesProducts,
  lubricantProducts,
  consumableProducts,
} from "@/app/data/productPageData";

function OurProductPage() {
  const mainH3Properties = {
    mainH3Name: "What We Offer",
    mainH3TextColor: "text-yellowDark",
    mainH3BgColor: "bg-yellowDark",
  };

  return (
    <main
      className="
        our-products-div
        relative z-20
        w-full
        px-4
        sm:px-6
        lg:px-8
        flex
        flex-col
        items-center
        justify-center
        sm:py-12
        lg:py-12
      "
    >
      <MainH3 mainH3Props={mainH3Properties} />

      <OurProductCards
        sectionTitle="Tungsten carbide dies"
        products={tungstenDiesProducts}
      />

      <OurProductCards
        sectionTitle="Range of wire drawing lubricants"
        products={lubricantProducts}
      />

      <OurProductCards
        sectionTitle="Consumable Stores / Machinery"
        products={consumableProducts}
      />
    </main>
  );
}

export default OurProductPage;
