import { Asterisk } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import 'react-toastify/dist/ReactToastify.css'
import SignUpForm from "./auth/signUpform"
import OauthLogin from "../reuseble/oauth"



export default function SignUpPage() {
  return (
    <>
      <div className="flex flex-col lg:flex-row min-h-screen bg-black transition-colors duration-300">
        <div className="relative md:flex-[0.6] bg-black p-6 sm:p-8 md:p-12 lg:p-16 xl:p-24 h-[30vh] lg:h-auto lg:w-1/2 flex flex-col justify-between overflow-hidden">
          <div className="absolute inset-0 z-0 h-full lg:h-auto m-5">
            <Image
              src="/home.jpg"
              layout="fill"
              objectFit="cover"
              alt="Background"
              className=" rounded-xl"
            />
          </div>
        </div>
        <div className="p-4 pt-0 flex-1 sm:p-6 md:p-8 lg:py-16 xl:py-24 
        h-fit
        flex-grow lg:w-1/2 flex items-center justify-center bg-black transition-colors duration-300 md:h-screen overflow-y-auto">
          <div className="w-full max-w-md space-y-6 sm:space-y-8">
            <div className='mt-5'>
              <h2 className="text-2xl md:text-3xl font-bold mb-1 text-primaryColor">Nerdspace</h2>
              <h3 className="text-lg md:text-xl font-semibold mb-2  text-gray-300">Create Account</h3>
            </div>

            <SignUpForm />
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300 dark:border-gray-600"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2  md:text-base bg-black text-gray-500 dark:text-gray-400">Or continue with</span>
              </div>
            </div>
            <OauthLogin />
            <p className="text-center  text-gray-400 text-xs md:text-sm mt-8">
              Already have an account?{" "}
              <Link href="/login" className=" text-primaryColor  font-medium">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div >
    </>
  )
}