import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MessageCircle, MoreHorizontal, Search } from "lucide-react"
import { posts } from "@/utils/constants/feed"
import { BiUpvote } from "react-icons/bi";
import { MdRssFeed } from "react-icons/md"
import { TiGroup } from "react-icons/ti"
import { FaUserCircle } from "react-icons/fa"

export default function Component() {


    return (
        // <div className="min-h-screen text-black">


        <div className="max-w-xl mx-auto">
            <div className=" gap-3 flex flex-col">
                {posts.map((post) => (
                    <Card key={post.id} className=" border-none px-3  md:px-5 max-w-2xl py-0">
                        <CardHeader className="flex flex-row items-center gap-2 justify-center px-0">
                            <Avatar>
                                <AvatarImage src="/creat.jpg" alt={post.author} className=" rounded-none" />
                                <AvatarFallback>{post.author.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                            </Avatar>
                            <div className="flex flex-col">
                                <span className="font-semibold text-primaryColor">{post.author}</span>
                                <span className="text-xs text-primaryColor/90">{post.username}</span>
                            </div>
                            <Button variant="ghost" size="icon" className="ml-auto">
                                <MoreHorizontal className="h-4 w-4 text-primaryColor" />
                            </Button>
                        </CardHeader>
                        <CardContent className="p-0 flex md:flex-col justify-between">

                            <img
                                src={post.image}
                                alt="Post image"
                                className=" w-[75vw] aspect-square object-cover rounded-xl"
                            />
                            <div className="flex flex-col md:flex-row md:hidden items-center justify-start gap-5 text-gray-400 mt-2">
                                <div className=" flex flex-col items-center">
                                    <button className="text-white p-2 bg-primaryColor rounded-full">
                                        <BiUpvote className=" h-6 w-6" />
                                    </button>
                                    <h2 className=" text-xs mt-2">{post.likes}</h2>
                                </div>

                                <div className=" flex flex-col items-center">
                                    <button className="text-white p-2 bg-primaryColor rounded-full">
                                        <MessageCircle className=" h-5 w-5" />
                                    </button>
                                    <h2 className=" text-xs mt-2">{post.comments}</h2>
                                </div>
                            </div>
                        </CardContent>
                        <CardFooter className="pt-4 px-1 w-[75vw] md:w-full flex flex-row gap-5">
                            <div className="hidden md:flex-row md:flex items-center justify-start gap-5 text-gray-400 mt-2">
                                <div className=" flex flex-col items-center">
                                    <button className="text-white p-2 bg-primaryColor rounded-full">
                                        <BiUpvote className=" h-5 w-5" />
                                    </button>
                                    <h2 className=" text-xs mt-2">{post.likes}</h2>
                                </div>

                                <div className=" flex flex-col items-center">
                                    <button className="text-white p-2 bg-primaryColor rounded-full">
                                        <MessageCircle className=" h-5 w-5" />
                                    </button>
                                    <h2 className=" text-xs mt-2">{post.comments}</h2>
                                </div>
                            </div>
                            <p className="text-xs text-gray-300 mb-2 text-wrap ">
                                {post.content}
                            </p>

                        </CardFooter>
                    </Card>
                ))}
            </div>


        </div>
        // </div>
    )
}