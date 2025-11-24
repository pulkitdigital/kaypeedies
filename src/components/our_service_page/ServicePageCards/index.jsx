"use client";

import React from "react";
import ServicePageCard from "./ServicePageCard";
import { ServicePageData } from "@/app/data/ServicePageData";

export default function ServicePageCards() {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
      {ServicePageData.map((service, index) => (
        <ServicePageCard key={index} data={service} ind={index} />
      ))}
    </section>
  );
}
