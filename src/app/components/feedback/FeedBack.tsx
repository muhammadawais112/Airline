import React, { useRef } from "react";
import Image from "next/image";
import feedBackImage from "@/images/feedBackImage.png";
import FeedBackCard from "./FeedBackCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import nextArrow from "@/icons/next-arrow.svg";
import previousArrow from "@/icons/previous-arrow.svg";

export default function FeedBack() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  return (
    <div className="container ">
      <p className="text-center text-[20px] font-semibold leading-[24px] text-[#313EF7]">What’s our customer saying</p>
      <div className="section-heading ">Our Customer Feedback</div>
      <div className="grid grid-cols-1  gap-[21px] pt-[60px]     md:grid-cols-2">
        <div className="w-full xl:w-[700px]">
          <Image src={feedBackImage} alt="FeedBackImage" />
        </div>
        <div className=" shadow-color ml-0 h-[380px] justify-end bg-white md:h-[300px] lg:ml-20">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={30}
            slidesPerView={"auto"}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}>
            <SwiperSlide>
              <FeedBackCard />
            </SwiperSlide>
            <SwiperSlide>
              <FeedBackCard />
            </SwiperSlide>
            <SwiperSlide>
              <FeedBackCard />
            </SwiperSlide>
          </Swiper>
          {/* TODO: use daisy ui button here, also these are not working */}
          <div className="flex  justify-center gap-4">
            <button ref={prevRef} className="bg-sky flex h-[50px] w-[50px]  items-center justify-center rounded-full">
              <Image src={previousArrow} alt="nextArrow" />
            </button>
            <button
              ref={nextRef}
              className="  bg-sky flex h-[50px]  w-[50px]  items-center justify-center rounded-full">
              <Image src={nextArrow} alt="nextArrow" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
