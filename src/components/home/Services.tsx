
import React from 'react';
import { Building2, CreditCard, Landmark } from "lucide-react";
import { Button } from "@/components/ui/button";
import { images } from '../images';

const Services = () => {
  return (
    <section className="w-full bg-[#FAFFF5] py-16 md:py-24">
      <div className="container px-6">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-[#669B18] mb-2">Our Financial Services</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-md p-8 shadow-sm hover:shadow-md transition-shadow flex flex-col gap-6 items-start">
            <img src={images.Services1} alt="" />
            <h3 className="text-xl font-bold text-axecraft-dark mb-3">Corporate Treasury</h3>
            <p className="text-[#66707F] text-xl mb-6">
              Axecraft simplifies treasury in Africa and frontier markets by managing your cross-border cash flow and liquidity—so you can focus on growth.
            </p>
            <Button variant="link" className="text-[#669B18] text-xl p-0 h-auto font-medium">
              Try it now  →
            </Button>
          </div>
          
          <div className="bg-white rounded-md p-8 shadow-sm hover:shadow-md transition-shadow flex flex-col gap-6 items-start">
            <img src={images.Services2} alt="" />
            <h3 className="text-xl font-bold text-axecraft-dark mb-3">Foreign Exchange</h3>
            <p className="text-[#66707F] text-xl mb-6">
            Axecraft delivers smarter FX for Africa and frontier markets—helping you optimize rates, manage risk, and trade digital currencies in one place.            </p>
            <Button variant="link" className="text-[#669B18] text-xl p-0 h-auto font-medium">
              Try it now →
            </Button>
          </div>
          
          <div className="bg-white rounded-md p-8 shadow-sm hover:shadow-md transition-shadow flex flex-col gap-6 items-start">
            <img src={images.Services3} alt="" />
            <h3 className="text-xl font-bold text-axecraft-dark mb-3">Payments & Settlement</h3>
            <p className="text-[#66707F] text-xl mb-6">
            Axecraft delivers smarter FX for Africa and frontier markets—helping you optimize rates, manage risk, and trade digital currencies in one place.            </p>
            <Button variant="link" className="text-[#669B18] text-xl p-0 h-auto font-medium">
              Try it now →
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
