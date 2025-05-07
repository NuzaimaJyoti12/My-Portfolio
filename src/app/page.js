import Image from "next/image";
import Hero from "../components/Hero";
import Service from "../components/Service";
import Experience from "../components/Experience";
import Resume from "../components/Resume";
import Recentwork from "../components/Recentwork";
import Testimonials from "../components/Testimonials";
import Companies from "../components/Companies";
import Blog from "../components/Blog";
import PricingPack from "../components/Pricingpack";

export default function Home() {
  return (
    <div>
      <Hero/>
      <Service/>
      <Experience/>
      <Resume/>
      <Recentwork/>
      <Testimonials/>
      <Companies/>
      <Blog/>
      <PricingPack/>
    </div>
  );
}
