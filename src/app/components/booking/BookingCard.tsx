import React from 'react'
import Image from 'next/image'
import bookingImage from "@/images/booking-image.svg"
export default function BookingCard() {
    return (
        <div>
         <Image src={bookingImage} alt='bookingImage'/>
        </div>
    )
}
