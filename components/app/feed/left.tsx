import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { communities, skills } from '@/utils/constants/feed'
import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar'
import React from 'react'

const Left = () => {
    return (
        <div className="hidden md:w-96 md:block space-y-4">
            <Card className="bg-cardBg rounded-md shadow-md">
                <CardContent className="p-6">
                    <div className="relative mb-3">
                        <Avatar className="h-20 w-20">
                            <AvatarImage src="/hack.png" alt="Elviz Dizzouza" className='h-20 w-20 rounded-full border-4 border-bodyBg' />
                            <AvatarFallback>ED</AvatarFallback>
                        </Avatar>
                    </div>
                    <h2 className="text-lg font-semibold mb-1">Elviz Dizzouza</h2>
                    <p className="text-gray-600 mb-2">@elvizoodem</p>
                    <p className="text-gray-700 text-center mb-4">UI/UX Designer | Open to new projects</p>
                    <Button className="w-full">My Profile</Button>
                </CardContent>
            </Card>
            <Card className="bg-cardBg rounded-md">
                <CardHeader>
                    <h3 className="font-bold">Skills</h3>
                </CardHeader>
                <CardContent>
                    <div className="flex flex-wrap gap-2">
                        {skills.map((skill, index) => (
                            <span key={index} className="bg-bodyBg px-3 py-1 rounded-full text-sm">{skill}</span>
                        ))}
                    </div>
                </CardContent>
            </Card>
            <Card className="bg-cardBg rounded-md">
                <CardHeader>
                    <h3 className="font-bold">Communities</h3>
                </CardHeader>
                <CardContent>
                    {communities.map((community, index) => (
                        <div key={index} className="flex items-center mb-4 last:mb-0">
                            <Avatar className="h-10 w-10 mr-3">
                                <AvatarFallback>{community.name[0]}</AvatarFallback>
                            </Avatar>
                            <div>
                                <p className="text-sm">{community.name}</p>
                                <p className="text-xs text-gray-400">{community.members} your friends are in</p>
                            </div>
                        </div>
                    ))}
                </CardContent>
            </Card>
        </div >
    )
}

export default Left
