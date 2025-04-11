
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="w-full py-4 px-6 md:px-16 lg:px-36 lg:py-7 bg-axecraft-light flex items-center justify-between">
      <div className="flex items-center">
        <Link to="/" className="text-3xl font-extrabold text-axecraft-dark">Axecraft</Link>
      </div>
      
      <nav className="hidden md:flex items-center space-x-8">
        <a href="hero" className="text-sm text-axecraft-dark hover:text-gray-600 transition-colors">Home</a>
        <a href="#footer" className="text-sm text-axecraft-dark hover:text-gray-600 transition-colors">About us</a>
        <a href="#services" className="text-sm text-axecraft-dark hover:text-gray-600 transition-colors">Our Services</a>

        <a href="https://app.axecraft.co/">
        <Button className="bg-axecraft-green hover:bg-[#a7e844] text-axecraft-dark font-medium px-6 py-2 rounded-md text-sm pointer">
          Log In
        </Button>
        </a>
      </nav>
      
     
    </header>
  );
};

export default Header;
