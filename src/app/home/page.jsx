import AboutExperience from "@/components/about_experience";
import Counters from "@/components/counters";
import Header from "@/components/header";
import Milestone from "@/components/milestone";
import OurIntroduction from "@/components/our_introduction";
import OurProducts from "@/components/our_products";
import OurServices from "@/components/our_services";
import WhyChooseUs from "@/components/why_choose_us";
import Footer from "@/components/footer";
import React from "react";

function Home() {
  return (
    <>
      <Header />
      <AboutExperience/>
      <OurIntroduction/>
      <OurServices/>
      <WhyChooseUs/>
      <OurProducts/>
      <Counters/>
      <Milestone/>
      <Footer/>
    </>
  );
}

export default Home;
