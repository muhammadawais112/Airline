import Image from "next/image";
import worldAir from "@/images/worldAir.png";
import BookingCard from "./BookingCard";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import nextArrow from "@/icons/next-arrow.svg";
import previousArrow from "@/icons/previous-arrow.svg";

import "swiper/css/pagination";
export default function Booking() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  return (
    <div className="bg-[#010223]">
      <div className=" mx-auto max-w-[1200px]">
        <div className="grid grid-cols-1 px-5 py-[50px] md:grid-cols-2 md:gap-[100px]">
          <div>
            <p className="text-[40px] font-extrabold  capitalize leading-[60px] tracking-[0.6px] text-white">
              Book Popular Flight
              <br /> Tickets
            </p>
            <p className="pt-4 text-base	 leading-6 text-[#ffffffa6]">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's
            </p>
            <div className="flex justify-center pt-6 md:justify-start">
              <Image src={worldAir} alt="world air" />
            </div>
          </div>
          <div>
            <Swiper
              modules={[Navigation, Pagination]}
              slidesPerView={"auto"}
              direction="vertical"
              spaceBetween={10}
              navigation={{
                prevEl: prevRef.current,
                nextEl: nextRef.current,
              }}
              pagination={{ clickable: true }}
              className="h-[500px] w-full md:h-[600px] lg:h-[620px]"
              style={
                {
                  "--swiper-pagination-color": "white",
                  "--swiper-pagination-bullet-inactive-color": "white",
                  "--swiper-pagination-bullet-size": "12px",
                } as any
              }>
              <SwiperSlide>
                <BookingCard />
              </SwiperSlide>
              <SwiperSlide>
                <BookingCard />
              </SwiperSlide>
              <SwiperSlide>
                <BookingCard />
              </SwiperSlide>
              <SwiperSlide>
                <BookingCard />
              </SwiperSlide>
              <SwiperSlide>
                <BookingCard />
              </SwiperSlide>
              <SwiperSlide>
                <BookingCard />
              </SwiperSlide>
              <SwiperSlide>
                <BookingCard />
              </SwiperSlide>
            </Swiper>
            <div className="flex justify-center gap-4 md:justify-end">
              <button
                ref={prevRef}
                className="bg-sky shadow-color flex h-[50px]  w-[50px]  items-center justify-center rounded-full">
                <Image src={previousArrow} alt="nextArrow" />
              </button>
              <button
                ref={nextRef}
                className="  bg-sky shadow-color flex h-[50px]  w-[50px]  items-center justify-center rounded-full">
                <Image src={nextArrow} alt="nextArrow" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
