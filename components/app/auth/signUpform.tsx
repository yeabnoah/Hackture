"use client"

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import signUpFetch from '@/functions/signup_api'
import { signUpSchema } from '@/validation/signUpschema'
import { useMutation } from '@tanstack/react-query'
import { ArrowRight, Eye, EyeOff, Lock, Mail, User } from 'lucide-react'
import { redirect, useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { FaGithub } from 'react-icons/fa6'
import { toast, ToastContainer } from 'react-toastify'

interface ValidationErrorInterface {
    error: boolean
    message: string
}

const Loader = () => (
    <div className="fixed top-0 left-0 right-0 h-1 bg-[#A7EE43] animate-pulse" />
)

const SignUpForm = () => {
    const [errors, setErrors] = useState<Record<string, ValidationErrorInterface>>({})
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        firstName: '',
        lastName: '',
        githubUsername: ''
    })
    const [showPassword, setShowPassword] = useState(false)
    const [loading, setLoading] = useState(false)

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
        setErrors(prev => ({ ...prev, [name]: { error: false, message: '' } }))
    }


    const router = useRouter()

    const mutation = useMutation({
        mutationFn: signUpFetch,
        onSuccess: () => {
            setLoading(true)
            toast.success('Account created successfully!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            })
        },
        onError: (error) => { // Error handling
            toast.error(`Error: ${error.message}`, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark"
            })
        },
    })


    const handleSignUp = async () => {
        const validation = signUpSchema.safeParse(formData)

        if (!validation.success) {
            const newErrors: Record<string, ValidationErrorInterface> = {}
            validation.error.errors.forEach((err) => {
                newErrors[err.path[0]] = { error: true, message: err.message }
            })
            setErrors(newErrors)
            return
        }

        mutation.mutate(formData)
    }

    useEffect(() => {
        if (loading) {
            const timer = setTimeout(() => {
                router.push('/login')
            }, 2000)
            return () => clearTimeout(timer)
        }
    }, [loading, router])


    return (
        <div>
            <ToastContainer />
            {loading && <Loader />}
            <form className="space-y-3 sm:space-y-4">
                <div className="flex space-x-3">
                    {['firstName', 'lastName'].map((field) => (
                        <div key={field} className="flex-1 space-y-1">
                            <Label htmlFor={field} className="md:text-base text-gray-700 dark:text-gray-300">
                                {field === 'firstName' ? 'First Name' : 'Last Name'}
                            </Label>
                            <div className="relative">
                                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500" size={14} />
                                <Input
                                    id={field}
                                    name={field}
                                    type="text"
                                    placeholder={field === 'firstName' ? 'John' : 'Doe'}
                                    className={`pl-10 py-5 bg-white dark:bg-black text-primaryColor placeholder-gray-300 dark:placeholder-gray-600 ${errors[field]?.error ? 'border-red-500' : ''}`}
                                    value={formData[field as keyof typeof formData]}
                                    onChange={handleInputChange}
                                />
                            </div>
                            {errors[field]?.error && <p className="text-red-500 text-xs">{errors[field]?.message}</p>}
                        </div>
                    ))}
                </div>
                {['githubUsername', 'email', 'password'].map((field) => (
                    <div key={field} className="space-y-1">
                        <Label htmlFor={field} className="md:text-base text-gray-700 dark:text-gray-300">
                            {field.charAt(0).toUpperCase() + field.slice(1).replace(/([A-Z])/g, ' $1').trim()}
                        </Label>
                        <div className="relative">
                            {field === 'email' && <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500" size={14} />}
                            {field === 'password' && <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500" size={14} />}
                            {field === 'githubUsername' && <FaGithub className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500" size={14} />}
                            <Input
                                id={field}
                                name={field}
                                type={field === 'password' ? (showPassword ? 'text' : 'password') : 'text'}
                                placeholder={`Enter your ${field.replace(/([A-Z])/g, ' $1').toLowerCase()}`}
                                className={`pl-10 py-5 bg-white dark:bg-black text-primaryColor placeholder-gray-300 dark:placeholder-gray-600 ${errors[field]?.error ? 'border-red-500' : ''
                                    } focus:outline-none`}
                                value={formData[field as keyof typeof formData]}
                                onChange={handleInputChange}
                            />
                            {field === 'password' && (
                                <div
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-400 dark:text-gray-500"
                                >
                                    {showPassword ? <EyeOff size={14} /> : <Eye size={14} />}
                                </div>
                            )}
                        </div>
                        {errors[field]?.error && <p className="text-red-500 text-xs">{errors[field]?.message}</p>}
                    </div>
                ))}
                <Button onClick={handleSignUp} type='button' className="w-full md:text-base  dark:bg-primaryColor dark:text-black text-black py-5 rounded-xl transition duration-300 ease-in-out my-5">
                    Create Account
                    <ArrowRight className="ml-2" size={14} />
                </Button>
            </form>
        </div>
    )
}

export default SignUpForm
