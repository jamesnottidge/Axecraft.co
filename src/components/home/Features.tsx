import { images } from '../images';

const Features = () => {
  return (
    <section className="relative w-full bg-[#000000] pb-16 md:pb-24 overflow-hidden flex items-center flex-col gap-20">
      <div className='w-full flex justify-center relative'>
          <img src={images.Vector1} alt="" className='w-[90%] scale-y-[3] md:scale-y-[2] md:w-[80%]' />
          <div className='absolute flex items-center flex-col gap-1 md:gap-2 mt-3'>
            <p className='text-black font-semibold text-xs md:text-lg lg:text-2xl top-[30%]'>Supports 40+ global and regional currencies</p>
            <img src={images.CountryFlags} alt="" className='w-32 md:w-40 lg:w-auto ' />
          </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-white mb-2 mt-16">
            Achieve more with <br className='md:hidden' /> <span className="text-axecraft-green font-bold">Axecraft</span>
          </h2>
        </div>

        <div className="flex flex-col gap-8 md:gap-16 w-full">
          <div className="flex flex-col md:flex-row justify-center gap-5 items-center">
            <img src={images.Features1} alt="" className="rounded-md w-[80%] md:w-[30%]" />
            <img src={images.Features2} alt="" className="rounded-md w-[80%] md:w-[30%]" />
          </div>
          <div className="flex flex-col md:flex-row justify-center gap-5 items-center">
            <img src={images.Features3} alt="" className="rounded-md w-[80%] md:w-[30%]" />
            <img src={images.Features4} alt="" className="rounded-md w-[80%] md:w-[30%]" />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Features;
