
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { images } from '../images';

const Header = () => {
  return (
    <header className="w-full py-4 px-6 md:px-16 lg:px-36 lg:py-7 bg-axecraft-light flex items-center justify-between">

      <div className="flex items-center gap-3">
        <img src={images.AxecraftLogoBlack} className='w-10 md:w-20' alt="" />
        <Link to="/" className="text-2xl md:text-3xl font-extrabold text-axecraft-dark">Axecraft</Link>
      </div>
      
      <nav className="md:flex items-center space-x-8">

        <a href="https://app.axecraft.co/" className='pointer'>
        <Button className="bg-axecraft-green hover:bg-[#a7e844] text-axecraft-dark font-medium px-6 py-2 rounded-md text-sm ">
          Log In
        </Button>
        </a>
      </nav>
      
     
    </header>
  );
};

export default Header;
