"use client"

import { useTheme } from '@/lib/ThemeContext';
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Asterisk, Mail, Lock, ArrowRight, Sun, Moon, Eye, EyeOff } from "lucide-react"
import Image from "next/image"
import { FcGoogle } from "react-icons/fc"
import { FaGithub } from "react-icons/fa6"
import { loginAction } from "@/actions/login"
import Link from "next/link"
import { signUpAction } from '@/actions/signUp';
import { signUpSchema } from '@/validation/signUpschema';
import axios from "axios"

export default function SignUpPage() {
  const { theme, toggleTheme } = useTheme();
  const [showPassword, setShowPassword] = useState(false);

  const fetchData = async () =>{
    const response = await axios.get("/api/signup")

    console.log(response.data)
  }

  return (
    <div className="flex flex-col lg:flex-row min-h-screen dark:bg-black transition-colors duration-300">
      <div className="relative bg-black p-8 lg:p-16 xl:p-24 h-[30vh] lg:h-auto lg:w-1/2 flex flex-col justify-between overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/hacker.jpeg"
            layout="fill"
            objectFit="cover"
            alt="Background"
            className="opacity-10"
          />
        </div>
        <div className="flex flex-col justify-between h-full relative z-10">
          <div>
            <Asterisk className="w-12 h-12 lg:w-16 lg:h-16 text-white mb-4 lg:mb-8" />
            <h1 className="text-3xl lg:text-5xl xl:text-6xl font-bold text-white mb-2 leading-tight">
              Hello<br className="hidden lg:inline" />hackers!
              <span className="inline-block ml-2" aria-hidden="true">👋</span>
            </h1>
            <p className="text-base lg:text-lg text-white/80 mt-2 w-3/3 lg:mt-4 hidden lg:block">
            Meet Hackture, your AI-powered companion for hackathons. From smart project ideas to real-time collaboration and coding assistance, Hackture helps you work faster and smarter. With its powerful features, you wll streamline your process and make your project stand out.
            </p>
          </div>
          <div className="text-white/60 text-xs lg:text-sm mt-4 lg:mt-0 hidden lg:block">
            © 2024 Hack. All rights reserved.
          </div>
        </div>
      </div>
      <div className="p-4 lg:p-8 xl:p-16 flex-grow lg:w-1/2 flex items-center justify-center bg-gray-50 dark:bg-black transition-colors duration-300 h-screen">
        <div className="w-full max-w-md space-y-4 lg:space-y-6">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-2xl lg:text-3xl font-bold mb-1 lg:mb-2 text-gray-900 dark:text-white">Hackture</h2>
              <h3 className="text-xl lg:text-2xl font-semibold mb-2 lg:mb-4 text-gray-700 dark:text-gray-300">Create Account</h3>
            </div>
            <Button
              variant="outline"
              size="icon"
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            >
              {theme === 'light' ? <Moon className="h-[1.2rem] w-[1.2rem]" /> : <Sun className="h-[1.2rem] w-[1.2rem]" />}
            </Button>
          </div>
      
          <form action={signUpAction} className="space-y-2 lg:space-y-4"> 
            <div className="space-y-2">
              <Label htmlFor="firstName" className="text-gray-700 dark:text-gray-300">First Name</Label>
              <Input
                id="firstName"
                type="text"
                name='first_name'
                placeholder="John"
                className="pl-4 py-4 lg:py-6 bg-white dark:bg-black text-gray-900 dark:text-white"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName" className="text-gray-700 dark:text-gray-300">Last Name</Label>
              <Input
                id="lastName"
                type="text"
                name='last_name'
                placeholder="Doe"
                className="pl-4 py-4 lg:py-6 bg-white dark:bg-black text-gray-900 dark:text-white"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="github" className="text-gray-700 dark:text-gray-300">GitHub Username</Label>
              <Input
                id="github"
                type="text"
                name="github_username"
                placeholder="your-github-username"
                className="pl-4 py-4 lg:py-6 bg-white dark:bg-black text-gray-900 dark:text-white"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-gray-700 dark:text-gray-300">Email Address</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500" size={18} />
                <Input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="hisalim.ux@gmail.com"
                  className="pl-12 py-4 lg:py-6 bg-white dark:bg-black text-gray-900 dark:text-white"
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="password" className="text-gray-700 dark:text-gray-300">Password</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500" size={18} />
                <Input
                  name='password'
                  id="password"
                  type={showPassword ? "text" : "password"} // Toggle input type based on state
                  placeholder="Enter your password"
                  className="pl-12 py-4 lg:py-6 bg-white dark:bg-black text-gray-900 dark:text-white"
                />
                <div
                  onClick={() => setShowPassword(!showPassword)} // Toggle password visibility
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-400 dark:text-gray-500"
                >
                  {showPassword ? <EyeOff size={14} /> : <Eye size={14} />}
                </div>
              </div>
            </div>
            <Button type='submit' className="w-full bg-gray-900 text-sm lg:text-sm  hover:bg-black dark:bg-white dark:text-black text-white py-3 lg:py-6 rounded-xl transition duration-300 ease-in-out lg:mt-3">
              Create Account
              <ArrowRight className="ml-2" size={14} />
            </Button>
          </form>
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300 dark:border-gray-600"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-gray-50 dark:bg-black text-gray-500 dark:text-gray-400">Or continue with</span>
            </div>
          </div>
          <div className="mt-2 lg:mt-4 grid grid-cols-2 gap-2">
            <Button variant="outline" className="w-full py-4 lg:py-6 rounded-xl bg-white dark:bg-black text-gray-900 dark:text-white">
              <FcGoogle size={18} className="mr-2" />
              Google
            </Button>
            <Button variant="secondary" className="w-full py-4 lg:py-6 rounded-xl bg-gray-200 dark:bg-white/5 text-gray-900 dark:text-white">
              <FaGithub size={18} className="mr-2" />
              GitHub
            </Button>
          </div>
          <p className="text-center mt-6 lg:mt-8 text-gray-600 dark:text-gray-400 text-xs lg:text-sm">
           already have an account?{" "}
            <Link href="/login" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-medium">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}