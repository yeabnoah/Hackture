import { Input } from '@/components/ui/input'
import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar'
import { Home, MessageSquare, Search, Settings, User } from 'lucide-react'
import React from 'react'

const TopBar = () => {
    return (
        <div className=" bg-black flex flex-col md:flex-row justify-between items-center md:mb-6">

            <div className=" bg-black border w-fit flex justify-between px-5 rounded-xl border-primaryBodyColor/50 py-2 bottom-10 mx-auto fixed left-1/2 transform -translate-x-1/2 items-center space-x-6">
                <Home className="h-6 w-6 text-primaryBodyColor" />
                <User className="h-6 w-6" />
                <MessageSquare className="h-6 w-6" />
                <Settings className="h-6 w-6" />
                <Avatar className="h-8 w-8 rounded-full">
                    <AvatarImage src="/default_user.jpg" alt="User" className=' rounded-full' />
                    <AvatarFallback>U</AvatarFallback>
                </Avatar>
            </div>
        </div>
    )
}

export default TopBar
