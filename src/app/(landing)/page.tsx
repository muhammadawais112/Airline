"use client";

import BestTravelars from "../components/bestTravelars/BestTravelars";
import Booking from "../components/booking/Booking";
import Features from "../components/features/Features";
import FeedBack from "../components/feedback/FeedBack";
import HeroSection from "../components/heroSection/HeroSection";
import LetFly from "../components/letFly/LetFly";
import Memories from "../components/memories/Memories";
import Subscribe from "../components/subscibe/Subscribe";

interface HomeProps { }

export default function Home({ }: HomeProps) {
    return (
        <>
            <HeroSection />
            <Features />
            <Booking />
            <BestTravelars />
            <FeedBack />
            <Memories />
            <Subscribe />
        </>
    );
}