import bcrypt from 'bcryptjs';
import { userInterface } from "@/interface/userInterface"
import connectDB from "@/lib/mongodbConfig"
import User from "@/model/user"


export const GET =async () =>{
    await connectDB()
    const users = await User.find()

    return Response.json(users)
}

export const POST = async (request : Request) =>{
    await connectDB()
    const users = await User.find()
    const {first_name, last_name, email, password, github_username} = await request.json();
    const hashedPassword = await bcrypt.hash(password, 10)
    const foundUser = await User.findOne({email : email}) 

    if (!foundUser){

        const newUser = await User.create({
            first_name,
            last_name,
            email,
            password : hashedPassword,
            github_username
        })

        return Response.json({
            data : newUser,
            success : true
        })
    }else{
        return Response.json({
            success : false,
            message : "User already exists"
        })
    }
}