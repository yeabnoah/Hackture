"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { CalendarDays, MapPin, Link as LinkIcon, MessageCircle, UserPlus, MoreHorizontal } from "lucide-react"
import { BiUpvote } from "react-icons/bi"
import { useQuery } from "@tanstack/react-query"
import fetchProfileData from "@/fetch/profileData_Fetch"

export default function ProfileScreen() {
    const posts = [
        {
            id: 1,
            author: "Jane Doe",
            username: "@janedoe",
            image: "/home.jpg?height=400&width=400",
            likes: 42,
            comments: 7,
            content: "This is a sample post. It could be about anything!"
        },
        {
            id: 2,
            author: "Jane Doe",
            username: "@janedoe",
            image: "/creat.jpg?height=400&width=400",
            likes: 38,
            comments: 5,
            content: "Another interesting post by Jane. What will she share next?"
        },
        {
            id: 3,
            author: "Jane Doe",
            username: "@janedoe",
            image: "/bbb.jpg?height=400&width=400",
            likes: 56,
            comments: 12,
            content: "Jane's thoughts on the latest tech trends. What do you think?"
        }
    ]


    const { data: userData, isLoading } = useQuery({
        queryKey: ["profile"],
        queryFn: fetchProfileData
    })

    return (
        <div className="flex flex-col items-center my-16 flex-1 md:ml-[16vw] mx-auto">
            <div className="max-w-6xl w-full p-4">
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 ">
                    <img
                        src={userData?.profileImage}
                        alt="Profile"
                        className="w-24 h-24 rounded-full border-4 border-background"
                    />

                    <div className="text-center sm:text-left mb-4 sm:mb-0">
                        <h1 className="text-2xl font-bold text-primaryColor">Jane Doe</h1>
                        <p className=" text-primaryColor/70">@janedoe</p>
                    </div>
                </div>

                <div className="flex flex-col flex-wrap justify-center sm:justify-start gap-1  mt-2 text-muted-foreground mb-6">
                    <div className="flex items-center text-sm">
                        <MapPin className="w-4 h-4 mr-1" />
                        San Francisco, CA
                    </div>
                    <div className="flex items-center text-sm">
                        <LinkIcon className="w-4 h-4 mr-1" />
                        <a href="https://janesblog.com" className="hover:underline">janesblog.com</a>
                    </div>
                    <div className="flex items-center text-sm">
                        <CalendarDays className="w-4 h-4 mr-1" />
                        Joined March 2020
                    </div>
                </div>

                <div className="">

                    <div className="flex gap-2">
                        <Button variant="outline" size="sm" className=" hover:text-primaryColor text-primaryColor border-primaryColor hover:bg-transparent">
                            <MessageCircle className="w-4 h-4 mr-2 text-primaryColor" />
                            Message
                        </Button>
                        <Button size="sm" className=" bg-primaryColor hover:bg-primaryColor ">
                            <UserPlus className="w-4 h-4 mr-2" />
                            Follow
                        </Button>
                    </div>
                </div>


                <hr className=" my-5 border-primaryColor " />
                <Tabs defaultValue="posts" className="mb-6 flex flex-col gap-3">
                    <TabsList className="justify-start bg-primaryColor w-fit text-black opacity-60 mb-10 md:mb-0">
                        <TabsTrigger value="posts">Posts</TabsTrigger>
                        <TabsTrigger value="media">Media</TabsTrigger>
                        <TabsTrigger value="likes">Likes</TabsTrigger>
                    </TabsList>
                    <TabsContent value="posts" className=" flex flex-row items-center justify-center md:justify-normal mt-10 md:mt-0">
                        <div className="space-y-1 md:space-y-4 flex flex-row flex-wrap items-center md:gap-5">
                            {posts.map((post) => (
                                <Card key={post.id} className="border-none px-3 md:px-5 max-w-xs md:max-w-xs py-0 mx-auto md:mx-0 bg-cardBg">
                                    <CardHeader className="flex flex-row items-center gap-2 justify-center px-0">
                                        <Avatar>
                                            <AvatarImage src="/creat.jpg" alt={post.author} className="rounded-none" />
                                            <AvatarFallback>{post.author.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                                        </Avatar>
                                        <div className="flex flex-col">
                                            <span className="font-semibold text-primaryColor text-sm md:text-base">{post.author}</span>
                                            <span className="text-primaryColor/90 text-xs md:text-base">{post.username}</span>
                                        </div>
                                        <Button variant="ghost" size="icon" className="ml-auto">
                                            <MoreHorizontal className="h-4 w-4 text-primaryColor" />
                                        </Button>
                                    </CardHeader>
                                    <CardContent className="p-0 flex md:flex-col justify-between gap5">
                                        <img
                                            src={post.image}
                                            alt="Post image"
                                            className="w-[75vw] aspect-square object-cover rounded-xl"
                                        />
                                    </CardContent>
                                    <CardFooter className="pt-4 px-1 w-[75vw] md:w-full flex flex-row gap-5">

                                        <p className="text-xs text-gray-300 mb-2 text-wrap">
                                            {post.content}
                                        </p>
                                    </CardFooter>
                                </Card>
                            ))}
                        </div>
                    </TabsContent>
                    <TabsContent value="media">Media content goes here</TabsContent>
                    <TabsContent value="likes">Liked content goes here</TabsContent>
                </Tabs>
            </div>
        </div>
    )
}