"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { Autoplay } from "swiper/modules";
import "./style.css";
import "swiper/css";
import MilestoneSwiperCard from "../milestone_swiper_cards/milestone_swiper_card";

function MySwiper({ swiperStyleData, milestoneSwiperData }) {
  const [swiperInstance, setSwiperInstance] = useState(null);

  return (
    <div
      className="
        my-swiper
        w-full
        px-3 sm:px-4 lg:px-5
        py-5
        flex
        items-center
        justify-center
        gap-3
      "
    >
      {/* LEFT ARROW */}
      <div className="arrow-container flex items-center">
        <span
          className="
            cursor-pointer
            z-10
            text-2xl sm:text-3xl
            text-yellowDark
            bg-white
            rounded-full
            p-1 sm:p-2
            shadow-md
          "
          onClick={() => swiperInstance?.slidePrev()}
        >
          <BsChevronLeft />
        </span>
      </div>

      {/* SWIPER IMAGE CONTAINER */}
      <div className="swiper-image-container w-full ml-4 mr-4">
        <Swiper
          loop={true}
          autoplay={{
            delay: 2500,
            pauseOnMouseEnter: true,
          }}
          modules={[Autoplay]}
          onSwiper={setSwiperInstance}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 12,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 16,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
        >
          {milestoneSwiperData.map((data, ind) => (
            <SwiperSlide
              key={ind}
              onClick={() => swiperInstance?.autoplay?.stop && swiperInstance.autoplay.stop()}
            >
              <MilestoneSwiperCard data={data} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* RIGHT ARROW */}
      <div className="arrow-container flex items-center">
        <span
          className="
            cursor-pointer
            z-10
            text-2xl sm:text-3xl
            text-yellowDark
            bg-white
            rounded-full
            p-1 sm:p-2
            shadow-md
          "
          onClick={() => swiperInstance?.slideNext()}
        >
          <BsChevronRight />
        </span>
      </div>
    </div>
  );
}

export default MySwiper;
