import { FaAsterisk } from 'react-icons/fa'
import { images } from '../images'
import { Shield } from 'lucide-react'

const Certfied = () => {
  return (
    <div className='bg-[#FAFFF5] w-full  my-10'>
        <section data-aos="fade-up" className="w-full bg-white rounded-lg py-16 md:py-14">
        <div className="container px-6 mx-auto">
            <div className="text-center mb-3">
            <div className="flex items-center justify-center gap-2 mb-4">
                <Shield className="text-axecraft-green w-8 h-8" />
                <h2 className="md:text-4xl text-3xl lg:text-5xl font-bold text-[#669B18]">Licensed & Certified</h2>
            </div>
            <p className="text-gray-600 max-w-2xl mx-auto">
            Certified & Compliant MSB – Built on Trust, Security, and Financial Integrity
            </p>
            </div>

            <div  className="  p-8 md:p-12 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
            <div className="flex flex-col items-center text-center md:text-left">
                <img src={images.Certficate} className="w-32 md:w-52 mb-4" alt="MSB Certificate" />
                {/* <span className="font-bold text-lg text-axecraft-dark">Money Services Business</span> */}
            </div>
            
            <div className="max-w-2xl text-center md:text-left">
                <h3 className="text-2xl font-bold text-axecraft-dark mb-4">Registered MSB </h3>
                <p className="text-lg text-gray-700">
                We're a licensed Money Services Business (MSB). Registered and compliant — your trust is our priority!
                </p>
                <div className="mt-6 flex items-center justify-center md:justify-start gap-4">
                <div className="flex items-center justify-center gap-2">
                    {/* <div className="w-3 h-3 rounded-full bg-[#B1F648]"></div> */}
                    {/* <p className='text-4xl text-[#B1F648]'>*</p> */}
                    <FaAsterisk fill='#B1F648' />
                    <span className="text-sm text-gray-600">Fully Licensed</span>
                </div>
                <div className="flex items-center gap-2">
                    {/* <div className="w-3 h-3 rounded-full bg-[#B1F648]"></div> */}
                    <FaAsterisk fill='#B1F648' />
                    <span className="text-sm text-gray-600">Compliant Operations</span>
                </div>
                <div className="flex items-center gap-2">
                    {/* <div className="w-3 h-3 rounded-full bg-[#B1F648]"></div> */}
                    <FaAsterisk fill='#B1F648' />
                    <span className="text-sm text-gray-600">Secure Transactions</span>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
    </div>
  )
}

export default Certfied