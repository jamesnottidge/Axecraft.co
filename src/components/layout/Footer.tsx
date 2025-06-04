import React from 'react';
import { Link } from "react-router-dom";
import { LiaLinkedinIn } from "react-icons/lia";
import { TbBrandFacebookFilled } from "react-icons/tb";
import { PiInstagramLogoBold } from "react-icons/pi";
import { ImYoutube } from "react-icons/im";
import { images } from '../images';

const Footer = () => {
  return (
    <footer id='footer' className="w-full bg-black text-white py-32">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row  gap-36 justify-between">
          
          <div className="w-full flex flex-col gap-3 md:w-2/3 mb-10 md:mb-0">
            <div className='flex items-center gap-2'>
              <img src={images.AxecraftLogoGreen} className='w-10 md:w-20' alt="" />
              <Link to="/" className="text-white text-2xl md:text-3xl lg:text-4xl font-bold block">Axecraft</Link>
            </div>
            <p className='text-[#FFFFFFC7]'>We are Powering the FX behind Africa's Trillion dollar growth</p>
            <p className="text-[#807A7AC7] text-sm mb-6 w-auto leading-7">
            The Transactions offered by this Website can be executed only by fully competent adults. Transactions with financial instruments offered on the Website involve substantial risk and trading may be very risky. If you make Transactions with the financial instruments offered on this Website, you might incur substantial losses or even lose everything in your Account. Before you decide to start Transactions with the financial instruments offered on the Website, you must review the Service Agreement and Risk Disclosure Information.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-axecraft-green transition-colors  border-gray-500 border-2 p-3 rounded-full"> <LiaLinkedinIn size={18} /> </a>
              <a href="#" className="text-white hover:text-axecraft-green transition-colors border-gray-500 border-2 p-3 rounded-full"><TbBrandFacebookFilled size={18} /> </a>
              <a href="#" className="text-white hover:text-axecraft-green transition-colors border-gray-500 border-2 p-3 rounded-full"><PiInstagramLogoBold size={18}  /></a>
              <a href="#" className="text-white hover:text-axecraft-green transition-colors border-gray-500 border-2 p-3 rounded-full"><ImYoutube size={18}  /></a>
            </div>
          </div>

          
          <div className="w-full md:w-1/3">
            <div className="flex flex-col lg:flex-row gap-6 lg:gap-12">
            
              <div className="w-full lg:w-1/2">
                <h3 className="text-white text-sm font-semibold mb-4">Links</h3>
                <ul className="space-y-2">
                  <li><Link to="/" className="text-gray-400 hover:text-axecraft-green text-sm transition-colors">Home</Link></li>
                  <li><Link to="/" className="text-gray-400 hover:text-axecraft-green text-sm transition-colors">About Us</Link></li>
                  <li><Link to="/contact" className="text-gray-400 hover:text-axecraft-green text-sm transition-colors">Contact us</Link></li>
                </ul>
              </div>

              
              <div className="w-full lg:w-1/2">
                <h3 className="text-white text-sm font-semibold mb-4">Useful Links</h3>
                <ul className="space-y-2">
                  <li><Link to="/" className="text-gray-400 hover:text-axecraft-green text-sm transition-colors">What is a Payment API?</Link></li>
                  <li><Link to="/" className="text-gray-400 hover:text-axecraft-green text-sm transition-colors">What is Foreign Exchange?</Link></li>
                  <li><Link to="/" className="text-gray-400 hover:text-axecraft-green text-sm transition-colors">Save More Than You Spend</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
