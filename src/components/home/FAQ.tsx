import React, { useState } from 'react';
import { images } from '../images';

const AccordionItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm mb-4 overflow-hidden">
      <button
        className="w-full text-left px-6 py-4 flex justify-between items-center focus:outline-none hover:bg-gray-50"
        onClick={onClick}
      >
        <span className="text-black text-[20px] font-medium">{question}</span>
        <div className={`h-14 w-14 rounded-full border border-gray-200 bg-[#FAFFF5] flex items-center justify-center transition-transform duration-200 ${isOpen ? 'transform rotate-180' : ''}`}>
          <svg 
            width="15" 
            height="10" 
            viewBox="0 0 10 6" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              d="M1 1L5 5L9 1" 
              stroke="#669B18" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </button>
      
      {isOpen && (
        <div className="px-6 pb-4 text-gray-600 animate-fadeIn">
          {answer}
        </div>
      )}
    </div>
  );
};

const FAQ = () => {
  const faqs = [
    {
      question: "What is Axecraft?",
      answer: "Axecraft is a fintech partner built for ambitious startups and modern businesses. We simplify financial management with smart tools and real industry connections—so you can grow faster, smarter, and with confidence."
    },
    {
      question: "How does Axecraft work?",
      answer: "Our platform connects businesses with global payment networks and FX markets, providing secure, efficient, and cost-effective financial operations through our intuitive dashboard."
    },
    {
      question: "Is Axecraft secure?",
      answer: "Yes, Axecraft employs bank-grade security protocols, including end-to-end encryption, multi-factor authentication, and regular security audits to ensure your financial data is protected."
    },
    {
      question: "Can I connect Axecraft to my banking software?",
      answer: "Absolutely! Axecraft offers seamless integration with major banking software, ERP systems, and accounting platforms through our API and pre-built connectors."
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  
  return (
    <section className="w-full bg-gray-50 ">


      <div className="container mx-auto px-6 w-full py-16 md:py-24">
        <div className="flex flex-col gap-10 md:flex-row items-start">
          <div className="w-full md:w-1/3 mb-8 md:mb-0 flex flex-col items-start gap-5">
            <div className="text-[#669B18] bg-[#FAFFF5] font-bold border border-gray-200 px-6 py-2 rounded-lg">
              GOT QUESTIONS?
            </div>
            <h2 className="text-4xl lg:text-5xl font-semibold mb-4">
              Frequently Asked <br />
              Questions
            </h2>
            <p className="text-gray-600 text-lg lg:text-xl">
              If you have any further questions, please don't hesitate to reach out to our <span className="text-[#669B18]">customer support</span> team for assistance.
            </p>
          </div>
          
          <div className="w-full md:w-2/3 md:pl-12">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                onClick={() => toggleAccordion(index)}
              />
            ))}
          </div>
        </div>
      </div>

      <div className='w-full flex justify-center relative'>
        <img src={images.FooterVector} alt="" />
        <p className='text-white font-semibold text-2xl absolute top-[30%]'>We are Powering the FX behind Africa's Trillion dollar growth</p>
      </div>
    </section>
  );
};

export default FAQ;