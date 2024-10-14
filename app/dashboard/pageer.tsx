'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { ThumbsUp, MessageCircle, Share2, Code2, Zap, Trophy, Sun, Moon, Hash, Users, TrendingUp, Search, Bell, Calendar, HelpCircle, Settings, ChevronLeft, ChevronRight } from 'lucide-react'
import { Switch } from "@/components/ui/switch"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"

export default function HackathonFeed() {
    const [darkMode, setDarkMode] = useState(false)
    const [activeTab, setActiveTab] = useState('all')
    const [sidebarCollapsed, setSidebarCollapsed] = useState(false)

    const posts = [
        {
            id: 1,
            author: 'Alice Johnson',
            avatar: '/placeholder-user.jpg',
            content: 'Just deployed my first ML model! 🚀 #AIHackathon',
            image: '/placeholder.svg?height=300&width=400',
            likes: 42,
            comments: 7,
            category: 'AI/ML',
        },
        {
            id: 2,
            author: 'Bob Smith',
            avatar: '/placeholder-user.jpg',
            content: 'VR project demo: virtual workspace for remote hackathons. 3D collaboration with virtual whiteboards!',
            likes: 31,
            comments: 5,
            category: 'VR/AR',
        },
        {
            id: 3,
            author: 'Charlie Brown',
            avatar: '/placeholder-user.jpg',
            content: 'Blockchain voting system for hackathon judging. Transparent and fair. Ideas on improving voter privacy? 💡',
            likes: 18,
            comments: 12,
            category: 'Blockchain',
        },
    ]

    const categories = ['AI/ML', 'Blockchain', 'IoT', 'VR/AR', 'Cybersecurity']

    const upcomingEvents = [
        { name: 'AI Workshop', date: '2024-03-15' },
        { name: 'Blockchain Seminar', date: '2024-03-20' },
        { name: 'VR/AR Showcase', date: '2024-03-25' },
    ]

    return (
        <div className={`flex min-h-screen ${darkMode ? 'bg-black text-white' : 'bg-gray-100 text-gray-900'}`}>
            {/* Left Sidebar */}
            <div className={`${sidebarCollapsed ? 'w-16' : 'w-64'} transition-all duration-300 ease-in-out ${darkMode ? 'bg-gray-900' : 'bg-white'} border-r overflow-hidden`}>
                <div className="p-4 flex items-center justify-between">
                    {!sidebarCollapsed && <h1 className="text-xl font-bold">HackFeed</h1>}
                    <Button variant="ghost" size="icon" onClick={() => setSidebarCollapsed(!sidebarCollapsed)}>
                        {sidebarCollapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
                    </Button>
                </div>
                <ScrollArea className="h-[calc(100vh-5rem)]">
                    <div className="p-4">
                        <Button className="w-full mb-4" variant="outline">
                            <Zap className="mr-2 h-4 w-4" />
                            {sidebarCollapsed ? '' : 'New Hack Post'}
                        </Button>
                        <nav className="space-y-2">
                            <Button variant={activeTab === 'all' ? 'default' : 'ghost'} className="w-full justify-start" onClick={() => setActiveTab('all')}>
                                <Hash className="mr-2 h-4 w-4" />
                                {sidebarCollapsed ? '' : 'All'}
                            </Button>
                            <Button variant={activeTab === 'following' ? 'default' : 'ghost'} className="w-full justify-start" onClick={() => setActiveTab('following')}>
                                <Users className="mr-2 h-4 w-4" />
                                {sidebarCollapsed ? '' : 'Following'}
                            </Button>
                            <Button variant={activeTab === 'trending' ? 'default' : 'ghost'} className="w-full justify-start" onClick={() => setActiveTab('trending')}>
                                <TrendingUp className="mr-2 h-4 w-4" />
                                {sidebarCollapsed ? '' : 'Trending'}
                            </Button>
                        </nav>
                        <Separator className="my-4" />
                        <h2 className="font-semibold mb-2 text-base md:text-lg">{sidebarCollapsed ? '' : 'Categories'}</h2>
                        {categories.map((category, index) => (
                            <Button key={index} variant="ghost" className="w-full justify-start mb-1">
                                <Code2 className="mr-2 h-4 w-4" />
                                {sidebarCollapsed ? '' : category}
                            </Button>
                        ))}
                    </div>
                </ScrollArea>
            </div>

            {/* Main Content */}
            <div className="flex-1 flex flex-col">
                {/* Header */}
                <header className={`flex justify-between items-center p-4 ${darkMode ? 'bg-gray-900' : 'bg-white'} border-b`}>
                    <div className="relative w-64">
                        <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                        <Input placeholder="Search HackFeed" className="pl-8" />
                    </div>
                    <div className="flex items-center space-x-4">
                        <Button variant="ghost" size="icon">
                            <Bell className="h-5 w-5" />
                        </Button>
                        <Button variant="ghost" size="icon">
                            <Calendar className="h-5 w-5" />
                        </Button>
                        <Button variant="ghost" size="icon">
                            <HelpCircle className="h-5 w-5" />
                        </Button>
                        <Button variant="ghost" size="icon">
                            <Settings className="h-5 w-5" />
                        </Button>
                        <Sun className="h-5 w-5" />
                        <Switch checked={darkMode} onCheckedChange={setDarkMode} />
                        <Moon className="h-5 w-5" />
                    </div>
                </header>

                {/* Feed */}
                <ScrollArea className="flex-1">
                    <div className="max-w-auto p-4">
                        {posts.map((post) => (
                            <Card key={post.id} className={`mb-4 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
                                <CardHeader className="flex flex-row items-center space-x-4 p-4">
                                    <Avatar>
                                        <AvatarImage src={post.avatar} alt={post.author} />
                                        <AvatarFallback>{post.author[0]}</AvatarFallback>
                                    </Avatar>
                                    <div className="flex-1">
                                        <p className="font-semibold text-base md:text-lg">{post.author}</p>
                                        <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>2h ago</p>
                                    </div>
                                    <Badge className="text-xs md:text-sm">{post.category}</Badge>
                                </CardHeader>
                                <CardContent className="p-4 pt-0">
                                    <p className="mb-4 text-sm md:text-base leading-6">{post.content}</p>
                                    {post.image && (
                                        <Image src={post.image} alt="Post content" className="rounded-md w-full" width={400} height={300} />
                                    )}
                                </CardContent>
                                <CardFooter className="flex justify-between p-4">
                                    <Button variant="ghost" size="sm">
                                        <ThumbsUp className="mr-2 h-4 w-4" />
                                        {post.likes}
                                    </Button>
                                    <Button variant="ghost" size="sm">
                                        <MessageCircle className="mr-2 h-4 w-4" />
                                        {post.comments}
                                    </Button>
                                    <Button variant="ghost" size="sm">
                                        <Share2 className="mr-2 h-4 w-4" />
                                        Share
                                    </Button>
                                </CardFooter>
                            </Card>
                        ))}
                    </div>
                </ScrollArea>
            </div>

            {/* Right Sidebar */}
            <div className={`w-80 p-4 ${darkMode ? 'bg-gray-900' : 'bg-white'} border-l hidden md:block`}>
                <Tabs defaultValue="leaderboard">
                    <TabsList className="w-full">
                        <TabsTrigger value="leaderboard" className="w-1/2 text-base md:text-lg">Leaderboard</TabsTrigger>
                        <TabsTrigger value="events" className="w-1/2 text-base md:text-lg">Events</TabsTrigger>
                    </TabsList>
                    <TabsContent value="leaderboard">
                        <h2 className="text-xl font-semibold mb-4">Leaderboard</h2>
                        {['Team Quantum', 'Neural Ninjas', 'Block Busters', 'IoT Innovators', 'Cyber Sentinels'].map((team, index) => (
                            <div key={index} className="flex items-center mb-2">
                                <Trophy className={`mr-2 h-5 w-5 ${index === 0 ? 'text-yellow-400' : index === 1 ? 'text-gray-400' : index === 2 ? 'text-orange-400' : ''}`} />
                                <span className="text-base md:text-lg">{team}</span>
                                <span className="ml-auto font-bold text-base md:text-lg">{100 - index * 5} pts</span>
                            </div>
                        ))}
                    </TabsContent>
                    <TabsContent value="events">
                        <h2 className="text-xl font-semibold mb-4">Upcoming Events</h2>
                        {upcomingEvents.map((event, index) => (
                            <div key={index} className="mb-4">
                                <h3 className="font-semibold text-base md:text-lg">{event.name}</h3>
                                <p className={`text-sm md:text-base ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>{event.date}</p>
                            </div>
                        ))}
                    </TabsContent>
                </Tabs>
                <Separator className="my-4" />
                <h2 className="text-xl font-semibold mb-4">Hackathon Progress</h2>
                <div className="space-y-4">
                    <div>
                        <div className="flex justify-between mb-1">
                            <span className="text-base md:text-lg">Overall Progress</span>
                            <span className="text-base md:text-lg">75%</span>
                        </div>
                        <Progress value={75} />
                    </div>
                    <div>
                        <div className="flex justify-between mb-1">
                            <span className="text-base md:text-lg">Team Tasks</span>
                            <span className="text-base md:text-lg">60%</span>
                        </div>
                        <Progress value={60} />
                    </div>
                    <div>
                        <div className="flex justify-between mb-1">
                            <span className="text-base md:text-lg">Personal Tasks</span>
                            <span className="text-base md:text-lg">90%</span>
                        </div>
                        <Progress value={90} />
                    </div>
                </div>
            </div>
        </div>
    )
}
