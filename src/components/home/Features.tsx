import React from 'react';
import { ShieldCheck, TrendingUp, Lock, BarChart3 } from "lucide-react";
import { images } from '../images';

const Features = () => {
  return (
    <section className="relative w-full bg-axecraft-dark pb-16 md:pb-24 overflow-hidden flex items-center flex-col gap-20">
      {/* Top angled cutout */}
      <img src={images.Vector1} alt="" className='w-[80%]' />

      {/* Main Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-light text-white mb-2">
            Achieve more with <span className="text-axecraft-green font-bold">Axecraft</span>
          </h2>
        </div>

        <div className="flex flex-col gap-16 w-full ">
          <div className='flex justify-center gap-5'>
            <img src={images.Features1} alt="" className="rounded-md w-[30%] border border-[#1f1f1f]" />
            <img src={images.Features2} alt="" className="rounded-md w-[30%] border border-[#1f1f1f]" />
          </div>
          <div className='flex justify-center gap-5'>
            <img src={images.Features3} alt="" className="rounded-md w-[30%] border border-[#1f1f1f] " />
            <img src={images.Features4} alt="" className="rounded-md w-[30%] border border-[#1f1f1f]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
