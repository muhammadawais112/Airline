import React, { useState } from "react";
import map from "@/images/map.svg";
import plane from "@/images/plane.png";
import Image from "next/image";
import { BOOKNOW, TABS } from "@/app/constant/CommonData";
export default function HeroSection() {
  const [selectedTab, setSelectedTab] = useState("Economy");
  const handleTabClick = (tab: string) => {
    setSelectedTab(tab);
  };
  return (
    // {/* TODO: use proper color variables and tailwind classes */}
    <div className="mb-48 h-[810px]  bg-[#010223]">
      <div className="flex justify-center ">
        <div className="relative top-[40px]">
          <Image src={map} alt="Map Image" />
        </div>
        <div className="absolute top-[150px]">
          <Image src={plane} alt="Map Image" />
        </div>
      </div>
      <div className=" pt-[75px] md:pt-[50px]">
        <p className="text-center text-[24px] font-extrabold text-white md:text-[48px]">Travel around the world</p>
        <p className="text-center text-[12px] text-[#ffffffb3]">
          One of the advantages of being disorganized is that one is always having surprising discoveries
        </p>
      </div>
      <div className=" mx-[auto] mt-5 max-w-[1200px]">
        <div>
          <div className="flex h-[60px] w-full cursor-pointer rounded-tl-[30px] rounded-tr-[30px] bg-white md:w-[519px]">
            {TABS.map((item, index) => {
              return (
                <div
                  key={index}
                  className={`flex h-[60px] w-[173px]  items-center justify-center text-lg font-bold leading-7	 text-black first-of-type:rounded-tl-[30px] last-of-type:rounded-tr-[30px] ${
                    selectedTab == item?.text ? "bg-sky text-white  " : ""
                  }`}
                  onClick={() => handleTabClick(item.text)}>
                  {item.text}
                </div>
              );
            })}
          </div>
        </div>
        <div></div>
        <div className=" shadow-color rounded-none bg-white p-10 md:rounded-tr-[30px] ">
          <div className="grid grid-cols-1 gap-[50px] md:grid-cols-4 ">
            {BOOKNOW.map((item, index) => {
              return (
                <div className="flex" key={index}>
                  <Image src={item.imageUrl} alt={item.name} />
                  <div className="pl-1.5">
                    <p className="text-lg font-semibold leading-[27px] text-[#030522]">{item.name}</p>
                    {/* fix input border */}
                    <input
                      type="text"
                      placeholder="Where are you going?"
                      className="input w-full max-w-xs border-none p-0 text-[16px] text-[#AEB5BF] focus:outline-none"
                    />
                  </div>
                </div>
              );
            })}
          </div>
          <div className="flex justify-center pt-6 ">
            {/* use daisy ui button */}
            <button className="bg-sky hover:text-sky btn flex h-[56px] w-[200px]  items-center justify-center rounded-[56px] text-base font-semibold	 leading-[28px] text-white hover:bg-[white]">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
