import React from "react";
import Booking from "@/images/Booking.png";
import circle from "@/images/circle.svg";
import Image from "next/image";
import { LETFLY } from "@/app/constant/CommonData";
export default function LetFly() {
  return (
    <div className="padding-vertical grid grid-cols-1 gap-[52px] md:grid-cols-2">
      <div className="flex justify-center">
        <Image src={Booking} alt="Feature Image" />
      </div>
      <div>
        {/* TODO: use proper color variables and tailwind classes */}
        <p className="text-sky text-xl font-extrabold leading-6	">Let’s Fly</p>
        <p className="pt-4 text-[32px] font-semibold leading-[45px] text-[#030303]">
          It’s one of the leading online flight booking platforms in the world
        </p>
        {/* add map loop here */}
        <div className="py-[40px]">
          {LETFLY.map((item, index) => {
            return (
              <div className="flex items-center  gap-3" key={index}>
                <Image src={circle} alt="circle" />
                <p className="text-base	 font-medium leading-7	 text-[#030303]">{item.text}</p>
              </div>
            );
          })}
          {/* TODO ADD BUTTON */}
          <button className="btn-shadow bg-sky hover:text-sky btn mt-[40px] flex  h-[56px]	 w-full max-w-[200px] items-center justify-center rounded-[56px] px-[45px]  py-[14px] text-[16px] font-semibold leading-[28px] text-[#FFF] hover:bg-white">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
}
