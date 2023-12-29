import Image from 'next/image'
import worldAir from "@/images/worldAir.png"
import BookingCard from './BookingCard'
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import nextArrow from "@/icons/next-arrow.svg"
import previousArrow from "@/icons/previous-arrow.svg"

import 'swiper/css/pagination';
export default function Booking() {
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    return (
        <div className='bg-[#010223]'>
            <div className=' max-w-[1200px] mx-auto'>
                <div className='grid grid-cols-1 md:grid-cols-2 md:gap-[100px] py-[50px] px-5'>
                    <div>
                        <p className='text-[40px] text-white  font-extrabold leading-[60px] tracking-[0.6px] capitalize'>Book Popular Flight<br /> Tickets</p>
                        <p className='pt-[16px] text-[16px] leading-[24px] text-[#ffffffa6]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
                        <div className='flex justify-center md:justify-start pt-[24px]'>
                            <Image src={worldAir} alt='world air' />
                        </div>
                    </div>
                    <div>
                        <Swiper
                            modules={[Navigation, Pagination]}
                            slidesPerView={"auto"}
                            direction='vertical'
                            spaceBetween={10}
                            watchOverflow={true}
                            navigation={{
                                prevEl: prevRef.current,
                                nextEl: nextRef.current,
                            }}
                            pagination={{ clickable: true }}
                            className='lg:h-[620px] md:h-[600px] h-[500px] w-full'
                            style={{
                                "--swiper-pagination-color": "white",
                                "--swiper-pagination-bullet-inactive-color": "white",
                                "--swiper-pagination-bullet-size": "12px",
                            } as any}
                        >
                            <SwiperSlide><BookingCard /></SwiperSlide>
                            <SwiperSlide><BookingCard /></SwiperSlide>
                            <SwiperSlide><BookingCard /></SwiperSlide>
                            <SwiperSlide><BookingCard /></SwiperSlide>
                            <SwiperSlide><BookingCard /></SwiperSlide>
                            <SwiperSlide><BookingCard /></SwiperSlide>
                            <SwiperSlide><BookingCard /></SwiperSlide>
                        </Swiper>

                        <div className='flex md:justify-end justify-center gap-4'>
                            <button ref={nextRef} className='h-[50px] w-[50px] bg-[#313EF7] shadow-color  flex  justify-center items-center rounded-full'><Image src={previousArrow} alt='nextArrow' /></button>
                            <button ref={nextRef} className='  h-[50px] w-[50px] bg-[#313EF7] shadow-color  flex  justify-center items-center rounded-full'><Image src={nextArrow} alt='nextArrow' /></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
