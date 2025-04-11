import React from 'react';
import { Link } from "react-router-dom";
import { LiaLinkedinIn } from "react-icons/lia";
import { TbBrandFacebookFilled } from "react-icons/tb";
import { PiInstagramLogoBold } from "react-icons/pi";
import { ImYoutube } from "react-icons/im";

const Footer = () => {
  return (
    <footer className="w-full bg-black text-white py-32">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between">
          
          <div className="w-full md:w-1/3 mb-10 md:mb-0">
            <Link to="/" className="text-axecraft-green text-3xl font-bold mb-4 block">Axecraft</Link>
            <p className="text-gray-400 text-sm mb-6 max-w-xs">
              Axecraft connects you with expert services and a trusted network of industry pros—everything you need to grow your startup, all in one place.            </p>
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
                  <li><Link to="/about" className="text-gray-400 hover:text-axecraft-green text-sm transition-colors">About Us</Link></li>
                  <li><Link to="/solutions" className="text-gray-400 hover:text-axecraft-green text-sm transition-colors">Contact us</Link></li>
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
