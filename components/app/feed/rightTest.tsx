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
    { name: "React Developers", members: 15234, avatar: "/placeholder.svg?height=40&width=40" },
    { name: "UI/UX Designers", members: 8721, avatar: "/placeholder.svg?height=40&width=40" },
    { name: "Data Scientists", members: 12098, avatar: "/placeholder.svg?height=40&width=40" },
]

const projects = [
    { name: "Portfolio Website", lastUpdated: "2 days ago" },
    { name: "Task Manager App", lastUpdated: "1 week ago" },
    { name: "E-commerce Platform", lastUpdated: "3 weeks ago" },
]

export default function RightSidebar() {
    return (
        <Sidebar className="border-l flex-1 mr-10 h-[90vh] my-auto  w-[20vw]" side="right">
            <SidebarHeader className="border-b px-4 py-2">
                <h2 className="text-lg font-semibold">Discover & Manage</h2>
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>Communities to Join</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {communities.map((community) => (
                                <SidebarMenuItem key={community.name}>
                                    <SidebarMenuButton className="w-full">
                                        <Avatar className="h-10 w-10">
                                            <AvatarImage src={community.avatar} alt={community.name} />
                                            <AvatarFallback>{community.name.charAt(0)}</AvatarFallback>
                                        </Avatar>
                                        <div className="flex flex-col items-start">
                                            <span className="text-sm font-medium">{community.name}</span>
                                            <span className="text-xs text-muted-foreground">{community.members.toLocaleString()} members</span>
                                        </div>
                                        <ChevronRight className="ml-auto h-4 w-4" />
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                            <SidebarMenuItem>
                                <Button variant="ghost" className="w-full justify-start">
                                    <Plus className="mr-2 h-4 w-4" />
                                    Explore More Communities
                                </Button>
                            </SidebarMenuItem>
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
                <SidebarGroup>
                    <SidebarGroupLabel>Personal Projects</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {projects.map((project) => (
                                <SidebarMenuItem key={project.name}>
                                    <SidebarMenuButton className="w-full">
                                        <Folder className="h-4 w-4" />
                                        <div className="flex flex-col items-start">
                                            <span className="text-sm font-medium">{project.name}</span>
                                            <span className="text-xs text-muted-foreground">Last updated: {project.lastUpdated}</span>
                                        </div>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                            <SidebarMenuItem>
                                <Button variant="ghost" className="w-full justify-start">
                                    <Plus className="mr-2 h-4 w-4" />
                                    Create New Project
                                </Button>
                            </SidebarMenuItem>
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter className="border-t p-4">
                <Button variant="outline" className="w-full">
                    <Settings className="mr-2 h-4 w-4" />
                    Manage Settings
                </Button>
            </SidebarFooter>
        </Sidebar>
    )
}