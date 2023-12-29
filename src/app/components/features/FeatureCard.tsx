import React from 'react'
import Image from 'next/image'
import arrow from "@/images/arrow.svg"

interface FeaturesCardProps {
    imageUrl: string,
    name: string,
}

export default function FeatureCard({ imageUrl, name }: FeaturesCardProps) {
    return (
        <div className='max-w-[280px]  w-full  py-[35px] px-[21px] shadow-color rounded-[185px] bg-[white]'>
            <div className=' flex  justify-center '>
                <div className='bg-[#313ef70d] h-[70px] w-[70px] rounded-full flex justify-center items-center'>
                    <Image src={imageUrl} alt='features Images' />
                </div>
            </div>
            <p className='pt-[24px] text-[24px] text-center text-[#030522] font-extrabold	'>{name}</p>
            <p className='text-center text-[16px] pt-[10px] text-[#030522a6] leading-[24px]'>Suspendisse ultrices nibh non cursus sagittis. Morbi dictum consequat ex, quis finibus magna.</p>
            <div className='flex justify-center pt-[32px] '>
                <div className='h-[50px] w-[50px] bg-[#030522] flex justify-center items-center rounded-full '>
                    <Image src={arrow} alt='arrow' />
                </div>
            </div>
        </div>
    )
}
