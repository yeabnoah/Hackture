import React from 'react'
import { Button } from '../ui/button'
import { signIn } from '@/lib/auth'
import { FaGithub, FaGoogle } from 'react-icons/fa6'

const OauthLogin = () => {
    return (
        <div className="grid grid-cols-2 gap-2">
            <form
                action={async () => {
                    "use server"
                    await signIn("google")
                }}
            >
                <Button type='submit' variant="outline" className="w-full md:text-base rounded-xl bg-primaryColor border  border-black/15 dark:bg-white/5 text-gray-900 dark:text-primaryColor md:py-6 py-3">
                    <FaGoogle size={16} className="mr-2" />
                    Google
                </Button>
            </form>

            <form
                action={async () => {
                    "use server"
                    await signIn("github")
                }}
            >
                <Button type='submit' variant="secondary" className="w-full rounded-xl md:*:text-base border border-black/15 dark:bg-white/5 text-gray-900 dark:text-primaryColor py-3 md:py-6">
                    <FaGithub size={18} className="mr-2" />
                    GitHub
                </Button>

            </form>
        </div>
    )
}

export default OauthLogin
