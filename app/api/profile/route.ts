import { auth } from "@/lib/auth";
import { redirect } from 'next/navigation'
import { NextRequest, NextResponse } from "next/server";


export const POST = async (request: NextRequest) => {
    const data = await request.json()

    console.log(data)
    return NextResponse.json(data)
}


export const GET = async (request: NextRequest) => {
    try {
        const session = await auth()

        if (!session?.user?.email) {

        }

        const user = session?.user

        const userData = {
            profileImage: user?.image,
            name: user?.name,
            email: user?.email,
            id: user?.id
        }

        return Response.json({
            data: userData,
            success: true
        })
    } catch (err) {
        return Response.json({
            data: null,
            success: false
        })
    }

}
