
import React, { useEffect } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/home/Hero';
import Features from '@/components/home/Features';
import Services from '@/components/home/Services';
import Testimonials from '@/components/home/Testimonials';
import FAQ from '@/components/home/FAQ';
import "aos/dist/aos.css";
import AOS from "aos";
import Certfied from '@/components/home/Certfied';
// import { toast } from '@/components/ui/use-toast';

const Index = () => {
  useEffect(() => {
    AOS.init();
    
    // Delay the toast by 1 second
    // setTimeout(() => {
    //   toast({
    //     // title: "Exchange Rate",
    //     description: "RATE $1 = ₦1,250",
    //     duration: 5000,
    //     className: "bg-axecraft-green text-black rounded-full fixed left-1/2 -translate-x-1/2 top-4 w-fit px-6 py-3 transform -translate-y-full animate-slide-down",
    //   });
    // }, 1000);
  }, []);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Features />
        <Services />
        <Certfied/>
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
