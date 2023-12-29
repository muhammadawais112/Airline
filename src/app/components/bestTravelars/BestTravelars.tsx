import React from 'react'
import BestTravelarsCard from './BestTravelarsCard'
import { CLIENT } from "@/app/constant/CommonData"
export default function BestTravelars() {
    return (
        <>
            <div className='container'>
                <div className='heading-center'>Best travelars of this month</div>
                <div className="pt-[40px] grid  md:grid-cols-2 lg:grid-cols-4  justify-center gap-[24px]">
                    {
                        CLIENT.map((item: any) => {
                            return (
                                <BestTravelarsCard imageUrl={item.imageUrl} profileImage={item.profileImage} name={item.name} work={item.work} />
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}
