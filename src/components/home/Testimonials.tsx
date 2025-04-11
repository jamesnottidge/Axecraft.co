
import React from 'react';
import { images } from '../images';

const Testimonials = () => {

  return (
    <div className='flex flex-col gap-6 w-full py-16'>

      <div className="text-center mb-12 flex flex-col items-center">
        <div className='text-[#669B18] bg-[#FAFFF5] font-bold border border-gray-200 px-6 py-2 rounded-lg '>TESTIMONIALS</div>
        <h2 className="text-5xl font-bold text-axecraft-dark mb-2">You're in safe hands</h2>
      </div>
        
      <div className='flex flex-col gap-7'>



<div className='flex justify-center gap-5'>
<div className='flex flex-col border rounded-2xl p-5 w-[25%] gap-5'>
  <div className='flex gap-5 items-center'>
    <img src={images.Avatar1} alt="" />
    <div>
    <p className='flex items-center gap-3 font-semibold'>
      Priya
      <img src={images.VerifiedBadge} alt="" />
    </p>
    <p>@Priyaa</p>
    </div>
  </div>
  <p className='text-gray-700'>
  With <span className='text-blue-500'>@axecraft</span>, I finally have peace of mind managing cross-border finances. Their security and tools give me the confidence to scale without second-guessing every transaction.
  </p>
</div>

<div className='flex flex-col border rounded-2xl p-5 w-[25%] gap-5'>
  <div className='flex gap-5 items-center'>
    <img src={images.Avatar2} alt="" />
    <div>
    <p className='flex items-center gap-3 font-semibold'>
      Chen
      <img src={images.VerifiedBadge} alt="" />
    </p>
    <p>@Chen007</p>
    </div>
  </div>
  <p className='text-gray-700'>
  International transfers used to be a nightmare. <span className='text-blue-500'>@axecraft</span> makes moving money across borders fast, seamless, and built for businesses like mine.          </p>
</div>

<div className='flex flex-col border rounded-2xl p-5 w-[25%] gap-5'>
  <div className='flex gap-5 items-center'>
    <img src={images.Avatar3} alt="" />
    <div>
    <p className='flex items-center gap-3 font-semibold'>
      gregory
      <img src={images.VerifiedBadge} alt="" />
    </p>
    <p>@gregthegreat</p>
    </div>
  </div>
  <p className='text-gray-700'>
  The support at <span className='text-blue-500'>@axecraft</span> feels like having an expert on speed dial. They actually understand the complexities of treasury in frontier markets.  </p>
</div>

</div>

<div className='flex justify-center gap-5'>

<div className='flex flex-col border rounded-2xl p-5 w-[25%] gap-5'>
  <div className='flex gap-5 items-center'>
    <img src={images.Avatar4} alt="" />
    <div>
    <p className='flex items-center gap-3 font-semibold'>
      Mo Salah
      <img src={images.VerifiedBadge} alt="" />
    </p>
    <p>@actualmosalah</p>
    </div>
  </div>
  <p className='text-gray-700'>
  Security matters when you’re handling international liquidity. The <span className='text-blue-500'>@axecraft</span> platform keeps our data safe while giving us real control over our financial flows.  </p>
</div>

<div className='flex flex-col border rounded-2xl p-5 w-[25%] gap-5'>
  <div className='flex gap-5 items-center'>
    <img src={images.Avatar5} alt="" />
    <div>
    <p className='flex items-center gap-3 font-semibold'>
      Cole Palmer
      <img src={images.VerifiedBadge} alt="" />
    </p>
    <p>@Penalmer</p>
    </div>
  </div>
  <p className='text-gray-700'>
  No hidden fees, no fluff—just smart, transparent tools that help us keep more of our money and plan for growth.  </p>
</div>

</div>
      </div>
    </div>
  );
};

export default Testimonials;