"use client";

import LandingHeader from "../shared/LandingHeader";
import LandingFooter from "../shared/LandingFooter";
import { ReactNode } from "react";

interface LandingLayoutProps {
  children: ReactNode;
}

export default function LandingLayout({ children }: LandingLayoutProps) {
  return (
    <>
      <LandingHeader /> 
      <main>{children}</main>
      <LandingFooter /> 
    </>
  );
}
