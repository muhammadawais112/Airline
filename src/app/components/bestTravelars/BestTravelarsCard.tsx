import React from 'react'
import Image from 'next/image'
interface BestTravelsCardProps {
    imageUrl: string,
    profileImage: string,
    name: string,
    work: string
}
export default function BestTravelarsCard({ imageUrl, profileImage, name, work }: BestTravelsCardProps) {
    return (
        <div className=' w-full md:max-w-[282px] h-[420px]  rounded-[213px] bg-[white] shadow  pb-[40px] shadow-travel'>
            <Image src={imageUrl} alt='Travel Image' />
            <div className=' flex justify-center mt-[-20px]'>
                <Image src={profileImage} alt='profile Image' />
            </div>
            <p className='text-center pt-[8px] text-[#011736] text-[24px] font-semibold'>{name}</p>
            <p className='text-center pt-[8px] text-[#AEB5BF] text-[16px] font-medium	'>{work}</p>
        </div>
    )
}
