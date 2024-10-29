import { useTheme } from '@/lib/ThemeContext'
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Asterisk, Mail, Lock, ArrowRight, Sun, Moon, Eye, EyeOff } from "lucide-react"
import Image from "next/image"
import { FcGoogle } from "react-icons/fc"
import { FaGithub, FaGoogle } from "react-icons/fa6"
import Link from "next/link"
import { ToastContainer, toast, ToastOptions } from 'react-toastify' // Import Toastify with options
import 'react-toastify/dist/ReactToastify.css'
import confetti from 'canvas-confetti'
import { useRouter } from 'next/navigation'
import { auth } from '@/lib/auth'
import LoginFormComp from './loginForm_comp'
import OauthLogin from '../reuseble/oauth'

export default function LoginPage() {

  const toastOptions: ToastOptions = {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'dark',
    style: {
      color: "#A7EE43"
    }
  }


  return (
    <>
      <ToastContainer {...toastOptions} />
      <div className="flex flex-col lg:flex-row min-h-screen dark:bg-black transition-colors duration-300">
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
          <div className="w-full max-w-md space-y-4 sm:space-y-6">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-1 text-primaryColor">Nerdspace</h2>
                <h3 className="text-lg md:text-xl font-semibold mb-2 text-gray-300">Welcome Back !</h3>
              </div>
            </div>
            <LoginFormComp />
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-600"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 md:text-base bg-black text-gray-400">Or continue with</span>
              </div>
            </div>
            <OauthLogin />
            <p className="text-center text-gray-400 text-xs sm:text-sm">
              Want to create a new account?{" "}
              <Link href="/signup" className=" text-primaryColor hover:text-primaryColor">
                Register Now
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
