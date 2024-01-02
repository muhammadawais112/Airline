import React from "react";
import Image from "next/image";
import { MEMORIES } from "@/app/constant/CommonData";

export default function Memories() {
  return (
    <div className="container mt-10 md:mt-[0px]">
      <div className="section-heading ">Make memories with us</div>
      <div className=" grid  h-[auto] justify-center    gap-[50px] pt-10 md:grid-cols-2 lg:h-[540px] lg:grid-cols-4 ">
        {/* TODO: use map loop here */}
        {MEMORIES.map((item, index) => {
          return (
            <div className="flex odd:flex-shrink-0 even:items-center" key={index}>
              <div className="w-full  max-w-[262.5px]">
                <Image src={item.imageUrl} alt="Memory Image" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
