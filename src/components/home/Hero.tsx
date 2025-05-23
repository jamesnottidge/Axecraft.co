import { Button } from "@/components/ui/button";
import { images } from "../images";

const Hero = () => {
  return (
    <section id="hero" className="w-full bg-gradient-to-b from-[#F5F9FF] via-[#C2D9FF] to-[#F5F9FF] py-16 md:py-24 relative lg:pb-0 pb-[600px]">
      <img src={images.HeroVector} alt="" className="" />

      <div className="lg:px-36 px-8 flex flex-col md:flex-row items-center justify-between absolute top-[10%] w-full">

        <div className="w-full md:w-1/2 mb-10 md:mb-0" data-aos="fade-up">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-axecraft-dark leading-tight mb-4">
            <span className="font-semibold">Take Control of your</span> <br />
            <span className="block">Payments, FX &</span>
            <span className="block">Treasury</span>
          </h1>
          <p className="text-black text-[20px] mb-8 max-w-lg">
            Move money easily and make payments through our FX network
          </p>

          <a href="https://app.axecraft.co/" className="pointer">
          <Button className="bg-axecraft-green hover:bg-[#a7e844] w-[150px] text-axecraft-dark font-medium px-12 py-8 md:text-[20px] rounded-lg pointer">
            Get Started
          </Button>
          </a>
        </div>

        <div className="w-full md:w-1/2 flex justify-center">
          <div className="w-auto ">
            <div className="relative h-[400px] w-[250px] md:h-[450px] md:w-[300px] lg:h-[600px] lg:w-[450px] rounded-2xl bg-[#FFFFFF] ">
              <img
                src={images.HeroSecImg2}
                alt=""
                className="absolute mb-20 md:mb-0 left-0 bottom-0 translate-x-[-50%] translate-y-[50%] w-20 lg:w-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
