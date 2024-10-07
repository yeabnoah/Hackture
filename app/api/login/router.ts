import { NextRequest, NextResponse } from "next/server";

export const GET = async ( res: NextResponse, req : NextRequest)=>{

	return NextResponse.json("hello world")
}