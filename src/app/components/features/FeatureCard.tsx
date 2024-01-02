import React from "react";
import Image from "next/image";
import arrow from "@/images/arrow.svg";

interface FeaturesCardProps {
  imageUrl: string;
  name: string;
}
export default function FeatureCard({ imageUrl, name }: FeaturesCardProps) {
  return (
    <div className="shadow-color  w-full  max-w-[280px] rounded-[185px] bg-[white] px-[21px] py-[35px]">
      <div className=" flex  justify-center ">
        <div className="flex h-[70px] w-[70px] items-center justify-center rounded-full bg-[#313ef70d]">
          <Image src={imageUrl} alt="features Images" />
        </div>
      </div>
      <p className="pt-6 text-center text-[24px] font-extrabold text-black	">{name}</p>
      <p className="pt-[10px] text-center	 text-base leading-6	 text-[#030522a6]">
        Suspendisse ultrices nibh non cursus sagittis. Morbi dictum consequat ex, quis finibus magna.
      </p>
      <div className="flex justify-center pt-8	 ">
        <div className="flex h-[50px] w-[50px] items-center justify-center rounded-full bg-black ">
          <Image src={arrow} alt="arrow" />
        </div>
      </div>
    </div>
  );
}
