import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { recentActivity } from '@/utils/constants/feed'
import { Avatar, AvatarFallback } from '@radix-ui/react-avatar'
import { ScrollArea } from '@radix-ui/react-scroll-area'
import React from 'react'

const Right = () => {
    return (
        <div className="hidden md:w-80 md:block">
            <Card className="bg-cardBg rounded-md">
                <CardHeader>
                    <h3 className="font-bold text-lg">Recent Activity</h3>
                </CardHeader>
                <CardContent>
                    <ScrollArea className="h-[calc(100vh-250px)]">
                        <div className="space-y-4">
                            {recentActivity.map((activity, index) => (
                                <div key={index} className="flex items-center justify-between">
                                    <div className="flex items-center space-x-3">
                                        <Avatar className="h-10 w-10">
                                            <AvatarFallback>{activity.name[0]}</AvatarFallback>
                                        </Avatar>
                                        <div>
                                            <p className="font-semibold text-sm">{activity.name}</p>
                                            <p className="text-xs text-gray-400">Followed on you . {activity.time}</p>
                                        </div>
                                    </div>
                                    <div className="flex flex-col items-end space-y-1">
                                        <Button variant="ghost" size="sm" className="text-xs h-6 px-2">Remove</Button>
                                        <Button size="sm" className="bg-primaryBodyColor text-black text-xs h-6 px-2 rounded-full">Follow Back</Button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </ScrollArea>
                </CardContent>
            </Card>
        </div>
    )
}

export default Right
