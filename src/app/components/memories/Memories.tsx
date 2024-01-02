import React from 'react'
import Image from 'next/image'
import MemoryFirst from "@/images/memory-first.png";
import MemorySecond from "@/images/memory-second.png"
import MemoryThird from "@/images/memory-third.png"
import MemoryFourth from "@/images/memory-fourth.png"

export default function Memories() {
    return (
        <div className='container mt-[40px] md:mt-[0px]'>
            <div className='heading-center '>Make memories with us</div>
            <div className=" grid  md:grid-cols-2 lg:grid-cols-4  justify-center gap-[50px] h-[auto] lg:h-[540px] pt-[40px] ">
                {/* TODO: use map loop here */}
                <div className='max-w-[262.5px]  w-full flex-shrink-0'>
                    <Image src={MemoryFirst} alt='MemoryFirst' />
                </div>
                <div className='max-w-[262.5px]  w-full flex  items-center'>
                    <Image src={MemorySecond} alt='MemoryFirst' />
                </div>
                <div className='max-w-[262.5px]  w-full flex-shrink-0'>
                    <Image src={MemoryThird} alt='MemoryFirst' />
                </div>
                <div className='max-w-[262.5px]  w-full flex  items-center'>
                    <Image src={MemoryFourth} alt='MemoryFirst' />
                </div>
            </div>
        </div>
    )
}
