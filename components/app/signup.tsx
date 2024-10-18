import { Asterisk } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import 'react-toastify/dist/ReactToastify.css'
import SignUpForm from "./auth/signUpform"
import OauthLogin from "../reuseble/oauth"



export default function SignUpPage() {
  return (
    <>
      <div className="flex flex-col lg:flex-row min-h-screen dark:bg-black transition-colors duration-300">
        <div className="relative bg-black p-6 sm:p-8 md:p-12 lg:p-16 xl:p-24 h-[30vh] lg:h-auto lg:w-1/2 flex flex-col justify-between overflow-hidden">
          {/* Change the height class for small screens */}
          <div className="absolute inset-0 z-0 h-full lg:h-auto">
            <Image
              src="/hacker.jpeg"
              layout="fill"
              objectFit="cover"
              alt="Background"
              className="opacity-10"
            />
          </div>
          <div className="flex flex-col justify-between h-full relative z-10">
            <div className="space-y-4 sm:space-y-6 md:space-y-8 lg:space-y-10 mt-1/2">
              <Asterisk className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-24 lg:h-24 text-white" />
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#A7EE43] leading-tight">
                Hello<br className="hidden md:inline" />hackers!
                <span className="inline-block ml-2" aria-hidden="true">👋</span>
              </h1>
              <p className="text-sm sm:text-base md:text-lg lg:text-base text-white/80 w-full md:w-full hidden sm:block">
                Meet Hackture, your AI-powered companion for hackathons. From smart project ideas to real-time collaboration and coding assistance, Hackture helps you work faster and smarter. With its powerful features, you'll streamline your process and make your project stand out.
              </p>
            </div>
            <div className="text-white/60 text-xs sm:text-sm mt-4 lg:mt-0">
              © 2024 Hack. All rights reserved.
            </div>
          </div>
        </div>
        <div className="p-4 pt-0 sm:p-6 md:p-8 lg:py-16 xl:py-24 
        h-fit
        flex-grow lg:w-1/2 flex items-center justify-center bg-gray-50 dark:bg-black transition-colors duration-300 md:h-screen overflow-y-auto">
          <div className="w-full max-w-md space-y-6 sm:space-y-8">
            <div className='sm:mt-5'>
              <h2 className="text-2xl sm:text-3xl font-bold mb-1 text-[#A7EE43] dark:text-[#A7EE43]">Hackture</h2>
              <h3 className="text-xl sm:text-2xl font-semibold mb-2 text-gray-700 dark:text-gray-300">Create Account</h3>
            </div>

            <SignUpForm />
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300 dark:border-gray-600"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-gray-50 dark:bg-black text-gray-500 dark:text-gray-400">Or continue with</span>
              </div>
            </div>
            <OauthLogin />
            <p className="text-center text-gray-600 dark:text-gray-400 text-xs sm:text-sm mt-8">
              Already have an account?{" "}
              <Link href="/login" className="text-blue-600 hover:text-blue-800 dark:text-[#A7EE43] dark:hover:text-[#A7EE43] font-medium">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div >
    </>
  )
}