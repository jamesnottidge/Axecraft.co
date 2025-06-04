import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { FaWhatsapp } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow bg-white text-black py-20">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">Contact Us</h1>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Have questions or need assistance? We're here to help. Reach out to us through any of the following channels.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Email Card */}
            <a 
              href="mailto:hello@axecraft.co" 
              className="bg-gray-50 p-8 rounded-lg hover:bg-axecraft-green hover:text-black transition-all duration-300 group shadow-sm"
            >
              <div className="flex items-center gap-4 mb-4">
                <MdEmail className="text-4xl text-axecraft-green group-hover:text-black" />
                <h2 className="text-2xl font-semibold">Email Us</h2>
              </div>
              <p className="text-gray-600 group-hover:text-black">Send us an email anytime. We'll get back to you as soon as possible.</p>
              <p className="mt-4 font-medium">hello@axecraft.co</p>
            </a>

            {/* WhatsApp Card */}
            <a 
              href="https://wa.me/+2347074800687" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-gray-50 p-8 rounded-lg hover:bg-axecraft-green hover:text-black transition-all duration-300 group shadow-sm"
            >
              <div className="flex items-center gap-4 mb-4">
                <FaWhatsapp className="text-4xl text-axecraft-green group-hover:text-black" />
                <h2 className="text-2xl font-semibold">WhatsApp</h2>
              </div>
              <p className="text-gray-600 group-hover:text-black">Chat with us directly on WhatsApp for quick responses.</p>
              <p className="mt-4 font-medium">Click to chat</p>
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;