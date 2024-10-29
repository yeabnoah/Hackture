'use client'

import * as React from "react"
import { Users, Folder, Plus, ChevronRight, Settings } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuItem,
    SidebarMenuButton,
} from "@/components/ui/sidebar"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

// Sample data for communities and projects
const communities = [
    { name: "React Developers", members: 15234, avatar: "/groups/Ellipse 111-1.png?height=40&width=40" },
    { name: "UI/UX Designers", members: 8721, avatar: "/groups/Ellipse 111-2.png?height=40&width=40" },
    { name: "UI/UX Designers", members: 8721, avatar: "/groups/Ellipse 111-3.png?height=40&width=40" },
    { name: "UI/UX Designers", members: 8721, avatar: "/groups/Ellipse 111-4.png?height=40&width=40" },
    { name: "Data Scientists", members: 12098, avatar: "/groups/Ellipse 111-5.png?height=40&width=40" },
]

const projects = [
    { name: "Portfolio Website", lastUpdated: "2 days ago" },
    { name: "Task Manager App", lastUpdated: "1 week ago" },
    { name: "E-commerce Platform", lastUpdated: "3 weeks ago" },
]

export default function RightSidebar() {
    return (
        <Sidebar className=" border-none flex-col flex gap-2 flex-1 mr-10 h-[90vh] bg-black rounded-xl p-2 my-auto  w-[23vw]" side="right">

            <SidebarContent className=" bg-black border-none flex flex-col justify-between">
                <SidebarGroup className=" bg-cardBg rounded-xl px-5">
                    <SidebarGroupLabel className=" text-sm text-primaryColor">Communities to Join</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {communities.map((community) => (
                                <SidebarMenuItem key={community.name} className=" my-1">
                                    <SidebarMenuButton className="w-full border-white/5 border bg-white/5 py-8 hover:bg-primaryColor rounded-xl">
                                        <Avatar className="h-10 w-10">
                                            <AvatarImage src={community.avatar} alt={community.name} />
                                            <AvatarFallback>{community.name.charAt(0)}</AvatarFallback>
                                        </Avatar>
                                        <div className="flex flex-col items-start">
                                            <span className="text-sm font-medium ">{community.name}</span>
                                            <span className="text-xs text-muted-foreground">{community.members.toLocaleString()} members</span>
                                        </div>
                                        <ChevronRight className="ml-auto h-4 w-4" />
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                            <SidebarMenuItem className=" flex justify-start items-start my-3">
                                <Button variant="ghost" className="justify-start w-fit bg-primaryColor py-5">
                                    <Plus className="mr-2 h-4 w-4" />
                                    Explore More Communities
                                </Button>
                            </SidebarMenuItem>
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
                <SidebarGroup className=" bg-cardBg rounded-xl px-5">
                    <SidebarGroupLabel className=" text-sm text-primaryColor">Personal Projects</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {projects.map((project) => (
                                <SidebarMenuItem key={project.name} className=" my-2">
                                    <SidebarMenuButton className="w-full py-6 bg-primaryColor/50 border-primaryColor border">
                                        <Folder className="h-14 w-14 " fill="rgb(118 67 238)" size={100} />
                                        <div className="flex flex-col items-start">
                                            <span className="text-sm font-medium">{project.name}</span>
                                            <span className="text-xs text-muted-foreground">Last updated: {project.lastUpdated}</span>
                                        </div>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                            <SidebarMenuItem className=" flex justify-start items-start my-3">
                                <Button variant="ghost" className="justify-start w-fit bg-secondary py-5">
                                    <Plus className="mr-2 h-4 w-4" />
                                    Create More Projects
                                </Button>
                            </SidebarMenuItem>
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    )
}