"use client"
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import React, { useState } from 'react'
import Link from 'next/link'
import { Search } from 'lucide-react';
import { MdRssFeed } from 'react-icons/md';
import { TiGroup } from 'react-icons/ti';
import { FaUserCircle } from 'react-icons/fa';

const navItems = [
    { label: 'Feed', icon: MdRssFeed, link: '/' },
    { label: 'Search', icon: Search, link: '/search' },
    { label: 'Groups', icon: TiGroup, link: '/groups' },
    { label: 'Profile', icon: FaUserCircle, link: '/profile' },
];

const Left = () => {
    const [activeLink, setActiveLink] = useState('/');

    return (
        <div className='mx-auto w-full'>
            <Card className='flex w-fit bg-cardBg border-none mx-auto p-5 gap-2 mb-2 rounded-full py-2'>
                {navItems.map((item, index) => (
                    <Link href={item.link} key={index} onClick={() => setActiveLink(item.link)}>
                        <Button className={`group ${activeLink === item.link ? ' bg-primaryColor' : 'bg-secondary'} hover:bg-primaryColor md:flex md:gap-2 text-white py-6 text-lg  ${index % 2 == 0 ? " rounded-l-full rounded-tr-full" : "rounded-r-full rounded-tl-full"}`}>
                            <item.icon className={`${activeLink === item.link ? "text-secondary" : "text-primaryColor"} h-5 w-5 group-hover:text-secondary text-primaryColor`} />
                            <h2 className='hidden'>{item.label}</h2>
                        </Button>
                    </Link>
                ))}
            </Card>

            {/* <Card className=' md:block border-none md:w-[20vw]'>
                <CardHeader className=' flex flex-row gap-5 items-center'>
                    <Avatar>
                        <AvatarImage src="/creat.jpg" height={20} width={20} className=' h-12 w-12 rounded-full'></AvatarImage>
                        <AvatarFallback className=' text-primaryColor border rounded-full p-3 border-primaryColor'>h2</AvatarFallback>
                    </Avatar>
                    <div>
                        <CardTitle className=' text-primaryColor'>Alex Fridman</CardTitle>
                        <CardDescription className=' text-primaryColor'>nerd@something</CardDescription>
                    </div>
                </CardHeader>
                <CardContent>
                    <CardDescription>
                        I'm alex and i like working with computers and get paid.
                    </CardDescription>
                </CardContent>
                <CardFooter className=' '>
                    <Link href='/profile'>
                        <Button className=' bg-primaryColor flex items-center gap-2 hover:bg-primaryColor/80 hover:scale-110'>

                            <Edit size={14} />Edit my

                            profile</Button>
                    </Link>

                </CardFooter>
            </Card> */}
        </div >

    )
}

export default Left
