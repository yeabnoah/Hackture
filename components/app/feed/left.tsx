import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { communities, skills } from '@/utils/constants/feed'
import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar'
import React from 'react'
import Image from "next/image"
import { Edit, Search } from 'lucide-react'
import { MdRssFeed } from "react-icons/md";
import { TiGroup } from "react-icons/ti";
import { FaUserCircle } from "react-icons/fa";
import Link from 'next/link'

const Left = () => {
    return (
        <div className=' pl-10 bg-red-500'>
            <Card className=' md:flex md:w-[20vw] md:gap-5 border-none md:p-5 rounded-2xl mb-5'>
                <Button className=' bg-primaryColor md:flex md:gap-2 text-white py-6 text-lg hover:bg-primaryColor/80 rounded-xl hover:transition-transform hover:scale-125 group hover:rotate-6'>
                    <MdRssFeed className='' size={16} />
                    <h2 className=' hidden '>Feed</h2>
                </Button>
                <Button className=' bg-primaryColor md:flex md:gap-2 text-white py-6 text-lg hover:bg-primaryColor/80 rounded-xl hover:transition-transform hover:scale-125 group hover:rotate-6'>
                    <Search className=' h5 w-5' />
                    <h2 className=' hidden '>Search</h2>
                </Button>
                <Button className=' bg-primaryColor md:flex md:gap-2 text-white py-6 text-lg hover:bg-primaryColor/80 rounded-xl hover:transition-transform hover:scale-125 group hover:rotate-6'>
                    <TiGroup className='' size={16} />
                    <h2 className=' hidden '>Groups</h2>
                </Button>
                <Link href='/profile'>
                    <Button className=' bg-primaryColor md:flex md:gap-2 text-white py-6 text-lg hover:bg-primaryColor/80 rounded-xl hover:transition-transform hover:scale-125 group hover:rotate-6'>
                        <FaUserCircle className='' size={16} />
                        <h2 className=' hidden '>Profile</h2>
                    </Button>
                </Link>

            </Card>

            <Card className=' md:block border-none md:w-[20vw]'>
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
            </Card>
        </div >

    )
}

export default Left
