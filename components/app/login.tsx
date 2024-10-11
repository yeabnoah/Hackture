'use client'

import { useTheme } from '@/lib/ThemeContext'
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Asterisk, Mail, Lock, ArrowRight, Sun, Moon, Eye, EyeOff } from "lucide-react"
import Image from "next/image"
import { FcGoogle } from "react-icons/fc"
import { FaGithub } from "react-icons/fa6"
import Link from "next/link"

export default function LoginPage() {
  const { theme, toggleTheme } = useTheme()
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    try {
      console.log(email, password)
      // Implement your login logic here
    } catch (error) {
      console.error('Login failed:', error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="flex flex-col lg:flex-row min-h-screen dark:bg-black transition-colors duration-300">
      <div className="relative bg-black p-6 sm:p-8 md:p-12 lg:p-16 xl:p-24 h-[30vh] lg:h-auto lg:w-1/2 flex flex-col justify-between overflow-hidden">
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
          <div className="space-y-4 sm:space-y-6 md:space-y-8 lg:space-y-10 mt-1/2">
            <Asterisk className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-24 lg:h-24 text-white" />
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight">
              Hello<br className="hidden md:inline" />hackers!
              <span className="inline-block ml-2" aria-hidden="true">👋</span>
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-base text-white/80 w-full md:w-full">
              Meet Hackture, your AI-powered companion for hackathons. From smart project ideas to real-time collaboration and coding assistance, Hackture helps you work faster and smarter. With its powerful features, you'll streamline your process and make your project stand out.
            </p>
          </div>
          <div className="text-white/60 text-xs sm:text-sm mt-4 lg:mt-0">
            © 2024 Hack. All rights reserved.
          </div>
        </div>
      </div>
      <div className="p-4 sm:p-6 md:p-8 lg:p-12 xl:p-16 flex-grow lg:w-1/2 flex items-center justify-center bg-gray-50 dark:bg-black transition-colors duration-300">
        <div className="w-full max-w-md space-y-4 sm:space-y-6">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-1 text-gray-900 dark:text-white">Hackture</h2>
              <h3 className="text-xl sm:text-2xl font-semibold mb-2 text-gray-700 dark:text-gray-300">Welcome Back!</h3>
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
          <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
            <div className="space-y-1">
              <Label htmlFor="email" className="text-sm text-gray-700 dark:text-gray-300">Email Address</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500" size={14} />
                <Input
                  id="email"
                  type="email"
                  placeholder="example@gmail.com"
                  className="pl-10 py-2 bg-white dark:bg-black text-gray-900 dark:text-white placeholder-opacity-50"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="space-y-1">
              <Label htmlFor="password" className="text-sm text-gray-700 dark:text-gray-300">Password</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500" size={14} />
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  className="pl-10 py-2 bg-white dark:bg-black text-gray-900 dark:text-white placeholder-opacity-50"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500"
                >
                  {showPassword ? <EyeOff size={14} /> : <Eye size={14} />}
                </button>
              </div>
            </div>
            <Button
              type="submit"
              className="w-full bg-gray-900 text-sm hover:bg-black dark:bg-white dark:text-black text-white py-2 rounded-xl transition duration-300 ease-in-out"
              disabled={isLoading}
            >
              {isLoading ? 'Logging in...' : (
                <>
                  Login Now
                  <ArrowRight className="ml-2" size={14} />
                </>
              )}
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
          <div className="grid grid-cols-2 gap-2">
            <Button variant="outline" className="w-full py-2 rounded-xl bg-white dark:bg-black text-gray-900 dark:text-white">
              <FcGoogle size={18} className="mr-2" />
              Google
            </Button>
            <Button variant="secondary" className="w-full py-2 rounded-xl bg-gray-200 dark:bg-white/5 text-gray-900 dark:text-white">
              <FaGithub size={18} className="mr-2" />
              GitHub
            </Button>
          </div>
          <p className="text-center text-gray-600 dark:text-gray-400 text-xs sm:text-sm">
            Want to create a new account?{" "}
            <Link href="/" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-medium">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}