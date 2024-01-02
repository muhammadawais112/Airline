import React from "react";
import Image from "next/image";
import FeatureCard from "./FeatureCard";
import featureFirst from "@/images/feature-first.svg";
import featureSecond from "@/images/feature-second.svg";
import featureThird from "@/images/feature-third.svg";
import Booking from "@/images/Booking.png";
import circle from "@/images/circle.svg";

export default function Features() {
  return (
    <div className="container">
      <div className="heading-center ">Our Features</div>
      <div className=" grid  md:grid-cols-3 lg:grid-cols-4  justify-center gap-6 h-[auto] lg:h-[510px] pt-[40px] ">
        <div className="flex-shrink-0">
          <FeatureCard name="Best Guide" imageUrl={featureFirst} />
        </div>
        <div className="flex items-end">
          <FeatureCard name="More Discount" imageUrl={featureSecond} />
        </div>
        <div className="flex-shrink-0">
          <FeatureCard name="Private" imageUrl={featureThird} />
        </div>
        <div className="flex items-end">
          <FeatureCard name="Online Support" imageUrl={featureThird} />
        </div>
      </div>
      {/* create seperate component of here */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[52px] paddingVertical">
        <div className="flex justify-center">
          <Image src={Booking} alt="Feature Image" />
        </div>
        <div>
            {/* TODO: use proper color variables and tailwind classes */}
          <p className="text-[20px] text-[#313EF7] font-extrabold leading-[24px]">Let’s Fly</p>
          <p className="text-[#030303] text-[32px] leading-[45px] font-semibold pt-[16px]">
            It’s one of the leading online flight booking platforms in the world
          </p>
          {/* add map loop here */}
          <div className="py-[40px]">
            <div className="flex gap-3  items-center">
              <Image src={circle} alt="circle" />
              <p className="text-[#030303] text-[16px] leading-[28px] font-medium">
                Contrary to popular belief, Lorem Ipsum is not simply random text
              </p>
            </div>
            <div className="flex gap-3  items-center pt-[10px]">
              <Image src={circle} alt="circle" />
              <p className="text-[#030303] text-[16px] leading-[26px] font-medium">
                If you are going to use a passage of Lorem Ipsum
              </p>
            </div>
            <div className="flex gap-3  items-center pt-[10px]">
              <Image src={circle} alt="circle" />
              <p className="text-[#030303] text-[16px] leading-[26px] font-medium">
                If you are going to use a passage of Lorem Ipsum
              </p>
            </div>
            <div className="flex gap-3  items-center">
              <Image src={circle} alt="circle" />
              <p className="text-[#030303] text-[16px] leading-[28px] font-medium">
                Contrary to popular belief, Lorem Ipsum is not simply random text
              </p>
            </div>
            {/* TODO ADD BUTTON */}
            <div className="max-w-[200px] text-[16px] leading-[28px] font-semibold btn-shadow text-[#FFF]	 w-full px-[45px] py-[14px] bg-[#313EF7] rounded-[56px] mt-[40px] flex justify-center items-center">
              Book Now
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
