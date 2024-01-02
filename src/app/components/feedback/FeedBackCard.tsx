import React from "react";
import feedBackProfile from "@/images/feedBack-profile.png";
import Image from "next/image";
import feedBackStar from "@/images/feed-back-star.png";
export default function FeedBackCard() {
  return (
    <div className="mb-20 w-full max-w-[500px] flex-col rounded-[20px]  px-[21px] py-[30px]  text-start ">
      <div className="flex">
        <Image src={feedBackProfile} alt="feedBackProfile" />
        <div className="flex-col  pl-4">
          <p className="text-[20px] font-semibold  text-primary ">Jaylon Vaccaro</p>
          <Image src={feedBackStar} alt="feedBackStar" />
        </div>
      </div>
      <p className="pt-4 text-lg	 italic leading-[34px] text-[#1B1B1C]">
        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in
        some form, by injected humour, or randomised words which don
      </p>
    </div>
  );
}
