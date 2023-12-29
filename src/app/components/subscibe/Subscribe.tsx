import React from 'react'

export default function Subscribe() {
    return (
        <div className='bg-[#313ef70d]'>
            <div className='container'>
                <div className='heading-center paddingVertical'>Subscribe Newsletter & <br /> get letest news</div>
                <div className='pt-[40px]  justify-center md:flex block '>
                    <form>
                        <div className="relative md:w-[493px] w-full">
                            <input type="search" id="search" className="block  search-shadow  rounded-[150px] md:w-[493px] w-full p-4 ps-[20px] text-[#AEB5BF] text-[16px] md:text-[20px] leading-[24px]   focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 h-[70px] bg-[#FFF]" placeholder="Enter your email address" required />
                            <button type="submit" className="text-white md:absolute rounded-[56px] h-[48px] w-full mt-4 md:w-[132px] text-[16px] end-2.5 bottom-2.5 bg-[#313EF7] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300   text-sm px-4 py-2 font-semibold">Subscribe</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    )
}
