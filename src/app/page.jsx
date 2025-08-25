"use client"
import Advertisement from "./components/Advertisement";
import Features from "./components/Features";
import FindUs from "./components/FindUs";
import HeroSection from "./components/HeroSection";
import Order from "./components/Order";
import Pricing from "./components/Pricing";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Works from "./components/Works";


  
export default function Home() {
  return (
    <div className="mt-20 dark:text-[#001d3d]">
      <HeroSection />
      <Services />
      <Features />
      <Testimonials />
      <Advertisement />
      <Works />
      <Order />
      <Pricing />
      <FindUs />
    </div>
  )
}
