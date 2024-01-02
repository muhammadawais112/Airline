import React from "react";

export default function Subscribe() {
  return (
    <div className="bg-[#313ef70d]">
      <div className="container">
        <div className="section-heading padding-vertical">
          Subscribe Newsletter & <br /> get letest news
        </div>
        <div className="block  justify-center pt-10 md:flex ">
          <form>
            <div className="relative w-full md:w-[493px]">
              <input
                type="search"
                id="search"
                className="search-shadow  block  h-[70px] w-full rounded-[150px] bg-[#FFF] p-4 ps-[20px] text-[16px] leading-[24px] text-[#AEB5BF]   focus:border-blue-500 focus:ring-blue-500  md:w-[493px] md:text-[20px]"
                placeholder="Enter your email address"
                required
              />
              <button
                type="submit"
                className="bottom-2.5 end-2.5 mt-4 h-[48px] w-full rounded-[56px] bg-[#313EF7] px-4 py-2 text-[16px] text-sm font-semibold text-white hover:bg-blue-800 focus:outline-none   focus:ring-4 focus:ring-blue-300 md:absolute md:w-[132px]">
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
