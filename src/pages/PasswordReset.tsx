
import { images } from "../../images";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

const PasswordReset = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className='flex pt-24 justify-center h-svh'>
       <div className='flex flex-col gap-8'>
            <div className='flex items-center gap-2 self-center'>
                <img src={images.AxecraftLogo} className='w-16' alt="" />
                <p className='font-extrabold text-3xl'>Axecraft</p>
            </div>

            <div>
                <p className='text-center font-bold text-3xl mb-2'>Join your team</p>
                <p className='font-bold text-gray-400'>Please complete this form to create your profile and join your team - Terader</p>
            </div>

            <div className='flex flex-col gap-6'>
                <p className='bg-green-50 text-start rounded-md p-5 font-semibold text-gray-600 border border-gray-200'>hillarynicholas13@gmail.com</p>
                <div className="relative">
                    <Input 
                        type={showPassword ? "text" : "password"}
                        className="border border-gray-200 p-8 font-semibold rounded-md pr-10"
                    />
                    <Button
                        variant="ghost"
                        size="icon"
                        type="button"
                        className="absolute right-0 top-1/2 -translate-y-1/2 hover:bg-transparent"
                        onClick={() => setShowPassword(!showPassword)}
                    >
                        {showPassword ? (
                            <EyeOff className="h-4 w-4" />
                        ) : (
                            <Eye className="h-4 w-4" />
                        )}
                    </Button>
                </div>
            </div>

            <Button className='bg-green-500 text-white font-bold rounded-md p-8'>Join</Button>
       </div>
    </div>
  )
}

export default PasswordReset