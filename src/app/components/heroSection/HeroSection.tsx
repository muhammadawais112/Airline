import React from 'react'
import map from "@/images/map.svg"
import plane from "@/images/plane.png"
import Image from 'next/image'
import location from "@/icons/location.svg"
import travels from "@/icons/travels.svg"
import checkIn from "@/icons/check-in.svg"


export default function HeroSection() {
    return (
        // {/* TODO: use proper color variables and tailwind classes */}
        <div className='bg-[#010223] h-[810px]  mb-48'>
            <div className='flex justify-center '>
                <div className='relative top-[40px]'>
                    <Image src={map} alt="Map Image" />
                </div>
                <div className='absolute top-[150px]'>
                    <Image src={plane} alt="Map Image" />
                </div>
            </div>
            <div className=' pt-[75px] md:pt-[50px]'>
                <p className='text-[24px] md:text-[48px] text-center text-white font-extrabold'>Travel around the world</p>
                <p className='text-center text-[12px] text-[#ffffffb3]'>One of the advantages of being disorganized is that one is always having surprising discoveries</p>
            </div>
            <div className=' max-w-[1200px] mx-[auto] mt-20'>
                {/* add daisy ui tabs here */}
                <div className=' bg-[white] w-full md:w-[519px] h-[60px] flex rounded-tr-[30px] rounded-tl-[30px]'>
                    <div className='w-[173px] h-[60px]  flex justify-center items-center text-[18px] font-bold leading-[28px] bg-[#313EF7] text-white'>
                        Economy
                    </div>
                    <div className='w-[173px] h-[60px]  flex justify-center items-center text-[18px] font-bold leading-[28px]'>
                        Busniness
                    </div>
                    <div className='w-[173px] h-[60px]  flex justify-center items-center text-[18px] font-bold leading-[28px]'>
                        First
                    </div>
                </div>

                <div>

                </div>
                <div className=' bg-[white] rounded-none md:rounded-tr-[30px] p-[40px] shadow-color '>
                    <div className='grid md:grid-cols-4 grid-cols-1 gap-[50px] '>

                        {/* TODO: use map loop here */}
                        <div className='flex'>
                          <Image src={location} alt='location'/>
                            <div className='pl-[6px]'>
                                <p className='text-[#030522] text-[18px] font-semibold leading-[27px]'>Location</p>
                                {/* fix input border */}
                                <input type="text" placeholder="Where are you going?" className="input p-0 w-full max-w-xs text-[#AEB5BF] text-[16px]" />
                            </div>
                        </div>
                        {/* use map loop here */}
                        <div className='flex'>
                           
                        <Image src={travels} alt='travels'/>

                            <div className='pl-[6px]'>
                                <p className='text-[#030522] text-[18px] font-semibold leading-[27px]'>Travelers</p>
                                <input type="text" placeholder="Add guest" className="input p-0 w-full max-w-xs text-[#AEB5BF] text-[16px]" />
                            </div>
                        </div>
                        <div className='flex'>
                        
                        <Image src={checkIn} alt='checkIn'/>

                            <div className='pl-[6px]'>
                                <p className='text-[#030522] text-[18px] font-semibold leading-[27px]'>Check-in</p>
                                <input type="text" placeholder="Add date" className="input p-0 w-full max-w-xs text-[#AEB5BF] text-[16px]" />
                            </div>
                        </div>
                        <div className='flex'>
                        <Image src={checkIn} alt='checkIn'/>
                            <div className='pl-[6px]'>
                                <p className='text-[#030522] text-[18px] font-semibold leading-[27px]'>Check-out</p>
                                <input type="text" placeholder="Add date" className="input p-0 w-full max-w-xs text-[#AEB5BF] text-[16px]" />
                            </div>
                        </div>

                    </div>
                    <div className='flex justify-center pt-[24px] '>
                        {/* use daisy ui button */}
                        <div className='w-[200px] h-[56px] bg-[#313EF7]  rounded-[56px] text-[16px] flex justify-center items-center font-semibold text-white leading-[28px]'>
                            Book Now
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}
