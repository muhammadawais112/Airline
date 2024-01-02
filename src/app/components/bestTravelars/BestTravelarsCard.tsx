import React from "react";
import Image from "next/image";
interface BestTravelsCardProps {
  imageUrl: string;
  profileImage: string;
  name: string;
  work: string;
}
export default function BestTravelarsCard({ imageUrl, profileImage, name, work }: BestTravelsCardProps) {
  return (
    <div className=" shadow-travel h-[420px] w-full  rounded-[213px] bg-white pb-10  shadow md:max-w-[282px]">
      <Image src={imageUrl} alt="Travel Image" />
      <div className=" -mt-5 flex justify-center">
        <Image src={profileImage} alt="profile Image" />
      </div>
      <p className="pt-2 text-center text-2xl font-semibold leading-none text-primary">{name}</p>
      <p className="pt-2 text-center text-base font-medium text-[#AEB5BF]">{work}</p>
    </div>
  );
}
