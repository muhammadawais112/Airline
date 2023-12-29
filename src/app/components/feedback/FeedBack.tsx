import React, { useRef } from 'react'
import Image from 'next/image'
import feedBackImage from "@/images/feedBackImage.png"
import FeedBackCard from './FeedBackCard'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import nextArrow from "@/icons/next-arrow.svg"
import previousArrow from "@/icons/previous-arrow.svg"


export default function FeedBack() {
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    return (
        <div className='container '>
            <p className='text-[#313EF7] text-center text-[20px] font-semibold leading-[24px]'>What’s our customer saying</p>
            <div className='heading-center '>Our Customer Feedback</div>
            <div className="pt-[60px] grid  grid-cols-1 md:grid-cols-2     gap-[21px]">
                <div className='w-full xl:w-[700px]'>
                    <Image src={feedBackImage} alt='FeedBackImage' />
                </div>
                <div className=' justify-end lg:ml-20 ml-0 shadow-color md:h-[300px] h-[380px] bg-[white]'>
                    <Swiper
                        modules={[Navigation, Pagination]}
                        spaceBetween={30}
                        slidesPerView={"auto"}
                        navigation={{
                            prevEl: prevRef.current,
                            nextEl: nextRef.current,
                        }}

                    >
                        <SwiperSlide >
                            <FeedBackCard />
                        </SwiperSlide>
                        <SwiperSlide >
                            <FeedBackCard />
                        </SwiperSlide>
                        <SwiperSlide >
                            <FeedBackCard />
                        </SwiperSlide>
                    </Swiper>
                    <div className='flex  justify-center gap-4'>
                        <button ref={prevRef} className='h-[50px] w-[50px] bg-[#313EF7]  flex  justify-center items-center rounded-full'><Image src={previousArrow} alt='nextArrow' /></button>
                        <button ref={nextRef} className='  h-[50px] w-[50px] bg-[#313EF7]  flex  justify-center items-center rounded-full'><Image src={nextArrow} alt='nextArrow' /></button>
                    </div>
                </div>


            </div>
        </div>)
}
