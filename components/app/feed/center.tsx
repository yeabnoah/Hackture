"use client"
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { friendAvatars } from '@/utils/constants/feed'
import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar'
import { ScrollArea } from '@radix-ui/react-scroll-area'
import { Heart, MessageCircle, MoveDown, Send } from 'lucide-react'
import React from 'react'
import { FaDownLong, FaUpLong, FaPlus } from "react-icons/fa6";
import { Dialog } from '@headlessui/react'
import { useState } from 'react'

const PostInput = () => {
    return (
        <Card className="bg-cardBg rounded-md mb-5 border-none">
            <CardContent className="px-4 py-3">
                <div className=' h-8 w-8 my-5'>
                    <Avatar className=" ">
                        <AvatarImage src="/default_user.jpg" alt="User" className=' rounded-full' />
                        <AvatarFallback>U</AvatarFallback>
                    </Avatar>
                </div>

                <div className="flex items-center space-x-4">

                    <Input className="flex-1 text-xs line-clamp-6 md:text-base bg-bodyBg border-none text-white rounded-md" placeholder="Share your current and latest hackathon experience..." />
                    <Button size="sm" className="ml-2">Post</Button>
                </div>
            </CardContent>
        </Card>
    )
}

const CustomModal = ({ isOpen, onClose, children }: any) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black">
            <div className="bg-cardBg rounded-md p-6">
                {children}
                <Button onClick={onClose} className="mt-4">Close</Button>
            </div>
        </div>
    );
};

const Center = () => {
    const [isModalOpen, setIsModalOpen] = React.useState(false);

    return (
        <div className="flex-1 space-y-6 h-[calc(100vh-250px)] max-w-4xl w-full mx-auto">

            <ScrollArea className="overflow-y-auto ">
                <div className=' hidden md:block'>
                    <PostInput />
                </div>

                <Card className="bg-cardBg rounded-md my-5 shadow-lg transition-shadow hover:shadow-xl">
                    <CardHeader className="p-4 flex flex-row items-start space-x-4 rounded-lg">
                        <Avatar className="h-8 w-8">
                            <AvatarImage src="/default_user.jpg" alt="George Jose" />
                            <AvatarFallback>GJ</AvatarFallback>
                        </Avatar>
                        <div>
                            <p className="font-bold mr-2 text-sm">George Jose</p>
                        </div>
                    </CardHeader>
                    <CardContent className="px-4">
                        <p className="mb-4 text-xs md:text-base">Lorem ipsum dolor sit amet consectetur. Porttitor.</p>
                        <img src="/hack.png?height=300&width=500" alt="Post image" className="w-full rounded-xl mb-4 shadow-md" />
                    </CardContent>
                    <CardFooter className="p-4 flex justify-between items-center">
                        <div className="flex space-x-4">
                            <Button variant="ghost" size="sm" className="text-gray-400 hover:text-gray-600 transition-colors"><FaUpLong className="h-5 w-5" /> Upvote</Button>
                            <Button variant="ghost" size="sm" className="text-gray-400 hover:text-gray-600 transition-colors"><FaDownLong className="h-5 w-5" /> Downvote</Button>
                        </div>
                    </CardFooter>
                </Card>
            </ScrollArea>
            {/* Button to open modal */}
            <div className="flex justify-center mb-4">
                <Button onClick={() => setIsModalOpen(true)} className="bg-primaryBodyColor text-black rounded-full p-2">
                    <FaPlus className="h-5 w-5" />
                </Button>
            </div>

            {/* Custom Modal */}
            <CustomModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <PostInput />
            </CustomModal>
        </div>
    )
}

export default Center
