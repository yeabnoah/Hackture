import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { auth } from '@/lib/auth'
import { redirect } from 'next/navigation'

const DashboardPage = async () => {
    const session = await auth()

    if (!session) {
        redirect("/login")
    }

    return (
        <div className="p-6 max-w-7xl mx-auto bg-black text-white">
            <h1 className="text-3xl font-bold mb-6">{session?.user ? session.user?.name : 'Guest'}</h1>
            <p className="text-lg">{session?.user ? session.user.email : 'No email available'}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
                <Card className="bg-slate-800/15 shadow-sm" style={{ border: '0.5px solid #A7EE43' }}>
                    <CardHeader>
                        <CardTitle className="text-sm font-medium text-[#A7EE43]">Total Revenue</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold text-[#A7EE43]">$45,231.89</div>
                        <p className="text-sm text-[#A7EE43]">+20.1% from last month</p>
                    </CardContent>
                </Card>
                <Card className="bg-slate-800/15 shadow-sm" style={{ border: '0.5px solid #A7EE43' }}>
                    <CardHeader>
                        <CardTitle className="text-sm font-medium text-[#A7EE43]">Subscriptions</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold text-[#A7EE43]">+2350</div>
                        <p className="text-sm text-[#A7EE43]">+180.1% from last month</p>
                    </CardContent>
                </Card>
                <Card className="bg-slate-800/15 shadow-sm" style={{ border: '0.5px solid #A7EE43' }}>
                    <CardHeader>
                        <CardTitle className="text-sm font-medium text-[#A7EE43]">Sales</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold text-[#A7EE43]">+12,234</div>
                        <p className="text-sm text-[#A7EE43]">+19% from last month</p>
                    </CardContent>
                </Card>
                <Card className="bg-slate-800/15 shadow-sm" style={{ border: '0.5px solid #A7EE43' }}>
                    <CardHeader>
                        <CardTitle className="text-sm font-medium text-[#A7EE43]">Active Now</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold text-[#A7EE43]">+573</div>
                        <p className="text-sm text-[#A7EE43]">+201 since last hour</p>
                    </CardContent>
                </Card>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card className="bg-slate-800/15 shadow-sm" style={{ border: '0.5px solid #A7EE43' }}>
                    <CardHeader>
                        <CardTitle className="text-lg font-semibold text-[#A7EE43]">Overview</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="h-64 bg-gray-700 flex items-center justify-center">
                            <p className="text-gray-400">Overview chart placeholder</p>
                        </div>
                    </CardContent>
                </Card>
                <Card className="bg-slate-800/15 shadow-sm" style={{ border: '0.5px solid #A7EE43' }}>
                    <CardHeader>
                        <CardTitle className="text-lg font-semibold text-[#A7EE43]">Recent Sales</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ul className="divide-y divide-gray-600">
                            <li className="py-3 flex justify-between items-center">
                                <span className="text-sm font-medium">Sale 1</span>
                                <span className="text-sm text-[#A7EE43]">$100</span>
                            </li>
                            <li className="py-3 flex justify-between items-center">
                                <span className="text-sm font-medium">Sale 2</span>
                                <span className="text-sm text-[#A7EE43]">$200</span>
                            </li>
                            <li className="py-3 flex justify-between items-center">
                                <span className="text-sm font-medium">Sale 3</span>
                                <span className="text-sm text-[#A7EE43]">$150</span>
                            </li>
                        </ul>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}

export default DashboardPage
