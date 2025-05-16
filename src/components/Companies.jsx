import Image from "next/image";
import React from "react";
import Matrixian from "@/app/assets/matrixian.png";
import Google from "@/app/assets/google.png";
import Factual from "@/app/assets/factual.png";
import Airbnb from "@/app/assets/airbnb.png";
import chase from "@/app/assets/chase.png";
import Logitech from "@/app/assets/logitech.png";

const Companies = () => {
  return (
    <section className="pb-[60px] md:pb-[120px]">
      <div className="container">
        <hr className="text-[#0808081A] " />
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 items-center justify-items-center py-6">
          <Image
            src={Matrixian}
            alt="Matrixian"
            className="max-w-[120px] w-full h-auto object-contain"
          />
          <Image
            src={Google}
            alt="Google"
            className="max-w-[120px] w-full h-auto object-contain"
          />
          <Image
            src={Factual}
            alt="Factual"
            className="max-w-[120px] w-full h-auto object-contain"
          />
          <Image
            src={Airbnb}
            alt="Airbnb"
            className="max-w-[120px] w-full h-auto object-contain"
          />
          <Image
            src={chase}
            alt="Chase"
            className="max-w-[120px] w-full h-auto object-contain"
          />
          <Image
            src={Logitech}
            alt="Logitech"
            className="max-w-[120px] w-full h-auto object-contain"
          />
        </div>
        <hr className="text-[#0808081A] " />
      </div>
    </section>
  );
};

export default Companies;
