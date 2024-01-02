import React from "react";
import logo from "@/images/logo.svg";
import facebook from "@/icons/facebook.svg";
import instagram from "@/icons/instagram.svg";
import twitter from "@/icons/twitter.svg";
import copy from "@/icons/copy.svg";
import Image from "next/image";
import line from "@/images/line.svg";
export default function LandingFooter() {
  return (
    <section
      className="relative !bg-cover !bg-no-repeat "
      style={{
        background: " url(/images/footer-image.png)",
        backgroundColor: "#010223",
      }}>
      <div className="container !py-0 text-[#E4E2E6]">
        <div className="flex w-full flex-col    ">
          <footer>
            <div className="mx-auto pb-[30px] pt-[100px]  ">
              <div className="grid grid-cols-1  lg:grid-cols-3">
                <div>
                  <div className="flex gap-3">
                    <Image src={logo} alt="logo" />
                    <p className="text-[22px] font-extrabold text-white">FT PLANE</p>
                  </div>

                  <p className="max-w-xs py-6 text-[#A7A7A7]">
                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                    alteration in some form
                  </p>

                  <ul className=" flex gap-6">
                    <li className="flex h-[50px] w-[50px] items-center justify-center rounded-full bg-white">
                      <a
                        href="/"
                        rel="noreferrer"
                        target="_blank"
                        className="text-gray-700 transition hover:opacity-75">
                        <Image src={facebook} alt="facebook" />
                      </a>
                    </li>
                    <li className="flex h-[50px] w-[50px] items-center justify-center rounded-full bg-[white]">
                      <a href="/" rel="noreferrer" target="_blank" className="transition hover:opacity-75">
                        <Image src={instagram} alt="instagram" />
                      </a>
                    </li>
                    <li className="flex h-[50px] w-[50px] items-center justify-center rounded-full bg-[white]">
                      <a href="/" rel="noreferrer" target="_blank" className=" transition hover:opacity-75">
                        <Image src={twitter} alt="twitter" />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className=" mt-[80px]  grid grid-cols-1 gap-16 sm:grid-cols-2 md:flex md:gap-48 lg:col-span-2 lg:mt-0 lg:grid-cols-2 lg:justify-end">
                  <div>
                    <p className="text-2xl	 font-bold capitalize leading-[150%]">Address</p>

                    <ul className="mt-6 space-y-4 text-sm">
                      <li>
                        <a
                          href="#"
                          className="text-base font-normal	 leading-6 text-[#A7A7A7] transition	hover:opacity-75	">
                          {" "}
                          Integrations{" "}
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-base font-normal	 leading-6 text-[#A7A7A7] transition	hover:opacity-75	">
                          {" "}
                          Hello{" "}
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-base font-normal	 leading-6 text-[#A7A7A7] transition	hover:opacity-75	">
                          {" "}
                          Intercom{" "}
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-base font-normal	 leading-6 text-[#A7A7A7] transition	hover:opacity-75	">
                          {" "}
                          Customer{" "}
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-[24px] font-bold capitalize leading-[150%]  ">About</p>

                    <ul className="mt-6 space-y-4 text-sm">
                      <li>
                        <a
                          href="#"
                          className="text-base font-normal	 leading-6 text-[#A7A7A7] transition	hover:opacity-75	">
                          {" "}
                          Our Blog{" "}
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-base font-normal	 leading-6 text-[#A7A7A7] transition	hover:opacity-75	">
                          {" "}
                          Customers{" "}
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-base font-normal	 leading-6 text-[#A7A7A7] transition	hover:opacity-75	">
                          {" "}
                          Our Team{" "}
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-base font-normal	 leading-6 text-[#A7A7A7] transition	hover:opacity-75	">
                          {" "}
                          Careers{" "}
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-base font-normal	 leading-6 text-[#A7A7A7] transition	hover:opacity-75	">
                          {" "}
                          Integrations{" "}
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-[24px] font-bold capitalize leading-[150%]">Support</p>

                    <ul className="mt-6 space-y-4 text-sm">
                      <li>
                        <a
                          href="#"
                          className="text-base font-normal	 leading-6 text-[#A7A7A7] transition	hover:opacity-75	">
                          {" "}
                          Test Zoom{" "}
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-base font-normal	 leading-6 text-[#A7A7A7] transition	hover:opacity-75	">
                          {" "}
                          Account{" "}
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-base font-normal	 leading-6 text-[#A7A7A7] transition	hover:opacity-75	">
                          {" "}
                          Support Center{" "}
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-base font-normal	 leading-6 text-[#A7A7A7] transition	hover:opacity-75	">
                          {" "}
                          Live Training{" "}
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-base font-normal	 leading-6 text-[#A7A7A7] transition	hover:opacity-75	">
                          {" "}
                          Accessibility{" "}
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <Image src={line} alt="line" className="my-10 w-full" />
              <div className="traking-[-0.28px] flex items-center justify-center gap-1 text-[12px] leading-normal text-white md:text-[14px]">
                Copyright
                <Image src={copy} alt="copy " />
                FT PLANE 2022 All right reserved
              </div>
            </div>
          </footer>
        </div>
      </div>
    </section>
  );
}
