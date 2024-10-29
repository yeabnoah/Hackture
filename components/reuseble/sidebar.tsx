'use client'

import React from 'react'
import { Home, Users, MessageCircle, Bell, Bookmark, User, Settings, LogOut } from 'lucide-react'
import { cn } from "@/lib/utils"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import Link from 'next/link' // Import Link from next/link
import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'

export default function Component() {
    const [activeItem, setActiveItem] = React.useState('Feed')

    const session = useSession()
    const user = session.status

    if (!user) {
        redirect("/login")
    }

    const navItems = [
        { icon: Home, label: 'Feed', link: "/" },
        { icon: Users, label: 'explore', link: "/profile" },
        { icon: MessageCircle, label: 'Groups', link: "/messages" },
        { icon: Bell, label: 'Projects', link: "/notification" },
        { icon: Bookmark, label: 'Bookmarks', link: "/bookmark" },
    ]

    const profileItems = [
        { icon: User, label: 'Profile' },
        { icon: Settings, label: 'Settings' },
        { icon: LogOut, label: 'Logout' },
    ]

    return (
        <aside className=" hidden md:flex md:flex-col justify-evenly border-none h-[90vh] rounded-2xl fixed top-10 my-auto mx-10  w-80 p-4 bg-cardBg">
            <div className="flex items-center justify-center mb-8 gap-2">
                <h1 className="text-2xl font-medium text-primaryColor my-5">
                    Nerdspace
                </h1>
            </div>

            <nav className="flex-1 justify-center flex flex-col px-5 items-center space-y-2">
                {navItems.map((item) => (
                    <Link href={item.link as string} key={item.label}>
                        <Button
                            className={cn(
                                ` w-44 justify-start shadow-none rounded-xl  font-medium py-6 text-white hover:bg-primaryColor bg-transparent transition-all duration-200 ease-in-out text-base`,
                                activeItem === item.label && "bg-secondary text-secondary-foreground bg-primaryColor text-sm"
                            )}
                            onClick={() => setActiveItem(item.label)}
                        >
                            <item.icon className="h-5 w-5 mr-3" />
                            {item.label}
                        </Button>
                    </Link>
                ))}
            </nav>

            <div className="mt-auto space-y-4">
                <div className="flex items-center p-2 bg-primary/5 rounded-lg">
                    <Avatar className="h-10 w-10 border-2 border-primary">
                        <AvatarImage src="https://i.pravatar.cc/100?img=5" alt="User" />
                        <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div className="ml-3">
                        <p className="text-sm font-medium">{ }</p>
                        <p className="text-xs text-muted-foreground">@janedoe</p>
                    </div>
                </div>

                <div className="space-y-2">
                    {profileItems.map((item) => (
                        <Button
                            key={item.label}
                            variant="ghost"
                            className="w-full justify-start text-sm hover:bg-primaryColor"
                        >
                            <item.icon className="h-4 w-4 mr-2" />
                            {item.label}
                        </Button>
                    ))}
                </div>
            </div>
        </aside>
    )
}
