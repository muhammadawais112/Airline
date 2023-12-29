import React from 'react'
import feedBackProfile from "@/images/feedBack-profile.png";
import Image from 'next/image';
import feedBackStar from "@/images/feed-back-star.png"
export default function FeedBackCard() {
    return (
        <div className='max-w-[500px] w-full py-[30px] mb-20 px-[21px]  flex-col text-start  rounded-[20px] '>
            <div className='flex'>
                <Image src={feedBackProfile} alt="feedBackProfile" />
                <div className='flex-col  pl-[16px]'>
                    <p className='text-[#011736] text-[20px]  font-semibold '>Jaylon Vaccaro</p>
                    <Image src={feedBackStar} alt='feedBackStar' />
                </div>

            </div>
            <p className='text-[#1B1B1C] text-[18px]  pt-[16px] italic leading-[34px]'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don</p>
        </div>
    )
}
