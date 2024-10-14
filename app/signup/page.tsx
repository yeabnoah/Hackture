import SignUpPage from '@/components/app/signup'
import { auth } from '@/lib/auth'
import { redirect } from 'next/navigation'
import React from 'react'

const SignUpScreen = async () => {
    const session = await auth()

    if (session) {
        redirect("/")
    }
    return (
        <div>
            <SignUpPage />
        </div>
    )
}

export default SignUpScreen
