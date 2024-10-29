"use client"
import { Label } from "@radix-ui/react-label"
import { Input } from "../ui/input"
import { Button } from "../ui/button"
import { ArrowRight, Lock, Mail, Eye, EyeOff } from "lucide-react"
import { useState } from "react"
import { ToastContainer, toast } from 'react-toastify'
import confetti from 'canvas-confetti'
import { signIn } from "next-auth/react"
import { redirect, useRouter } from "next/navigation"


const LoginFormComp = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    const router = useRouter()

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsLoading(true)

        try {
            const result = await signIn("credentials", { email, password, redirect: false })
            // Check if the result is successful
            if (result?.error) {
                toast.error("Login failed. Please try again.")
            } else {
                confetti()
                toast.success("Logged in successfully!")
                router.push("/")
            }
        } catch (error) {
            console.log(error)
            toast.error("An error occurred during login. Please try again.")
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <div>
            <ToastContainer />
            <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
                <div className="space-y-1">
                    <Label htmlFor="email" className=" text-sm md:text-base text-gray-300">Email Address</Label>
                    <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={14} />
                        <Input
                            name="email"
                            id="email"
                            type="email"
                            placeholder="example@gmail.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="pl-10 py-5 bg-black text-primaryColor placeholder:placeholder:text-gray-500 placeholder:opacity-50"
                            required
                        />
                    </div>
                </div>
                <div className="space-y-1">
                    <Label htmlFor="password" className=" text-sm md:text-base text-gray-300">Password</Label>
                    <div className="relative">
                        <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={14} />
                        <Input
                            name='password'
                            id="password"
                            type={showPassword ? "text" : "password"}
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="pl-10 py-5 bg-black text-primaryColor placeholder:placeholder:text-gray-500 placeholder:opacity-50"
                            required
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                        >
                            {showPassword ? <EyeOff size={14} /> : <Eye size={14} />}
                        </button>
                    </div>
                </div>
                <Button
                    type="submit"
                    className="w-full bg-primatext-primaryColor md:text-base bg-primaryColor hover:bg-primaryColor text-black  py-5 rounded-xl transition duration-300 ease-in-out"
                    disabled={isLoading}
                >
                    {isLoading ? 'Logging in...' : 'Login Now'}
                    {isLoading && <ArrowRight className="ml-2" size={14} />}
                </Button>
                {isLoading && <div className="loader">Loading...</div>}
            </form>
        </div>
    )
}

export default LoginFormComp
