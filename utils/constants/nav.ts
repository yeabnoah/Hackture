import { Bell, Bookmark, Home, LogOut, MessageCircle, Settings, User, Users } from "lucide-react"

export const navItems = [
    { icon: Home, label: 'Feed', link: "/" },
    { icon: Users, label: 'explore', link: "/profile" },
    { icon: MessageCircle, label: 'Groups', link: "/messages" },
    { icon: Bell, label: 'Projects', link: "/notification" },
    { icon: Bookmark, label: 'Bookmarks', link: "/bookmark" },
]

export const profileItems = [
    { icon: User, label: 'Profile' },
    { icon: Settings, label: 'Settings' },
    { icon: LogOut, label: 'Logout' },
]