import { auth } from "@/lib/auth"
import { getToken } from "next-auth/jwt"
import { NextRequest, NextResponse } from "next/server"
export { auth as authMiddleware } from "@/lib/auth"

export const config = {
    matcher: ["/dashboard", "/", "/profile", "/api/profile"],
}

export async function middleware(req: NextRequest) {
    const token = await auth()

    if (!token) {
        return NextResponse.redirect(new URL("/login", req.url))
    }

    return NextResponse.next()
}
