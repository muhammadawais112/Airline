import React from "react";
import FeatureCard from "./FeatureCard";
import featureFirst from "@/images/feature-first.svg";
import featureSecond from "@/images/feature-second.svg";
import featureThird from "@/images/feature-third.svg";
import LetFly from "../letFly/LetFly";
export default function Features() {
  return (
    <div className="container">
      <div className="section-heading ">Our Features</div>
      <div className=" grid  h-[auto] justify-center  gap-6 pt-10 md:grid-cols-3 lg:h-[510px] lg:grid-cols-4 ">
        <div className="flex-shrink-0">
          <FeatureCard name="Best Guide" imageUrl={featureFirst} />
        </div>
        <div className="flex items-end">
          <FeatureCard name="More Discount" imageUrl={featureSecond} />
        </div>
        <div className="flex-shrink-0">
          <FeatureCard name="Private" imageUrl={featureThird} />
        </div>
        <div className="flex items-end">
          <FeatureCard name="Online Support" imageUrl={featureThird} />
        </div>
      </div>
      {/* create seperate component of here */}
      <LetFly />
    </div>
  );
}
