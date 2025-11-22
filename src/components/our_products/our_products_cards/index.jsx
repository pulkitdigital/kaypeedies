import React from "react";
import { ourProductsData } from "@/app/data/OurProductsData";
import OurProductsCard from "./our_products_card";

function OurProductsCards() {
  return (
    <div
      className="
        w-full
        grid
        grid-cols-1        /* mobile: 1 per row */
        sm:grid-cols-2     /* tablet: 2 per row */
        lg:grid-cols-3     /* desktop: 3 per row */
        gap-6
        auto-rows-fr       /* (optional) helps equal heights if cards use h-full */
      "
    >
      {ourProductsData?.map((data, ind) => (
        <OurProductsCard key={ind} cardData={data} ind={ind} />
      ))}
    </div>
  );
}

export default OurProductsCards;
