import React from "react";
import ServiceHeader from "./ServiceHeader";
import OurServicePage from "@/components/our_service_page";
import Footer from "@/components/footer";
import WhyChooseUs from "@/components/why_choose_us";
function Services() {
  return <>
  <ServiceHeader />
  <OurServicePage/>
  <WhyChooseUs/>
  <Footer/>
</>;
}

export default Services;
