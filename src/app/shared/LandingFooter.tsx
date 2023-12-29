import React from 'react'
import logo from "@/images/logo.svg"
import facebook from "@/icons/facebook.svg"
import instagram from "@/icons/instagram.svg"
import twitter from "@/icons/twitter.svg"
import copy from "@/icons/copy.svg"
import Image from 'next/image'
import line from "@/images/line.svg"
export default function LandingFooter() {
  return (
    <section
      className="relative !bg-cover !bg-no-repeat "
      style={{
        background:
          " url(/images/footer-image.png)", backgroundColor: "#010223"
      }}>
      <div className="container !py-0 text-[#E4E2E6]">
        <div className="flex w-full flex-col    ">
          <footer >
            <div className="mx-auto pt-[100px] pb-[30px]  ">
              <div className="grid grid-cols-1  lg:grid-cols-3">
                <div>
                  <div className="flex gap-3">
                    <Image src={logo} alt='logo' />
                    <p className='text-[22px] font-extrabold text-white'>FT PLANE</p>
                  </div>

                  <p className="max-w-xs text-[#A7A7A7] py-[24px]">
                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form
                  </p>

                  <ul className=" flex gap-6">
                    <li className='h-[50px] w-[50px] bg-[white] justify-center items-center flex rounded-full'>
                      <a
                        href="/"
                        rel="noreferrer"
                        target="_blank"
                        className="text-gray-700 transition hover:opacity-75"
                      >
                        <Image src={facebook} alt='facebook' />
                      </a>
                    </li>
                    <li className='h-[50px] w-[50px] bg-[white] justify-center items-center flex rounded-full'>
                      <a
                        href="/"
                        rel="noreferrer"
                        target="_blank"
                        className="transition hover:opacity-75"
                      >
                        <Image src={instagram} alt='instagram' />

                      </a>
                    </li>
                    <li className='h-[50px] w-[50px] bg-[white] justify-center items-center flex rounded-full'>
                      <a
                        href="/"
                        rel="noreferrer"
                        target="_blank"
                        className=" transition hover:opacity-75"
                      >
                        <Image src={twitter} alt='twitter' />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className=" grid-cols-1  sm:grid-cols-2 lg:col-span-2 lg:grid-cols-2 grid md:flex lg:justify-end md:gap-48 gap-16 mt-[80px] lg:mt-0">
                  <div>
                    <p className="text-[24px] leading-[150%] font-bold capitalize">Address</p>

                    <ul className="mt-6 space-y-4 text-sm">
                      <li>
                        <a href="#" className="text-[#A7A7A7] text-[16px] transition hover:opacity-75 font-normal	laeding-[24px]"> Integrations </a>
                      </li>
                      <li>
                        <a href="#" className="text-[#A7A7A7] text-[16px] transition hover:opacity-75 font-normal	laeding-[24px]"> Hello </a>
                      </li>
                      <li>
                        <a href="#" className="text-[#A7A7A7] text-[16px] transition hover:opacity-75 font-normal	laeding-[24px]"> Intercom </a>
                      </li>
                      <li>
                        <a href="#" className="text-[#A7A7A7] text-[16px] transition hover:opacity-75 font-normal	laeding-[24px]"> Customer </a>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-[24px] leading-[150%] font-bold capitalize  ">About</p>

                    <ul className="mt-6 space-y-4 text-sm">
                      <li>
                        <a href="#" className="text-[#A7A7A7] text-[16px] transition hover:opacity-75 font-normal	laeding-[24px]"> Our Blog </a>
                      </li>
                      <li>
                        <a href="#" className="text-[#A7A7A7] text-[16px] transition hover:opacity-75 font-normal	laeding-[24px]"> Customers </a>
                      </li>
                      <li>
                        <a href="#" className="text-[#A7A7A7] text-[16px] transition hover:opacity-75 font-normal	laeding-[24px]"> Our Team </a>
                      </li>
                      <li>
                        <a href="#" className="text-[#A7A7A7] text-[16px] transition hover:opacity-75 font-normal	laeding-[24px]"> Careers </a>
                      </li>
                      <li>
                        <a href="#" className="text-[#A7A7A7] text-[16px] transition hover:opacity-75 font-normal	laeding-[24px]"> Integrations </a>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-[24px] leading-[150%] font-bold capitalize">Support</p>

                    <ul className="mt-6 space-y-4 text-sm">
                      <li>
                        <a href="#" className="text-[#A7A7A7] text-[16px] transition hover:opacity-75 font-normal	laeding-[24px]"> Test Zoom </a>
                      </li>
                      <li>
                        <a href="#" className="text-[#A7A7A7] text-[16px] transition hover:opacity-75 font-normal	laeding-[24px]"> Account </a>
                      </li>
                      <li>
                        <a href="#" className="text-[#A7A7A7] text-[16px] transition hover:opacity-75 font-normal	laeding-[24px]"> Support Center </a>
                      </li>
                      <li>
                        <a href="#" className="text-[#A7A7A7] text-[16px] transition hover:opacity-75 font-normal	laeding-[24px]"> Live Training </a>
                      </li>
                      <li>
                        <a href="#" className="text-[#A7A7A7] text-[16px] transition hover:opacity-75 font-normal	laeding-[24px]"> Accessibility </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <Image src={line} alt='line' className='w-full my-[40px]' />
              <div className='flex justify-center text-[12px] md:text-[14px] text-white gap-1 items-center traking-[-0.28px] leading-normal'>
                Copyright<Image src={copy} alt='copy ' />FT PLANE 2022 All right reserved
              </div>
            </div>
          </footer>
        </div>
      </div>


    </section>
  )
}
