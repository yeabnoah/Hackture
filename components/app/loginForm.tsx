// import NextAuth, { CredentialsSignin } from "next-auth"
// import bcrypt, { compare } from "bcryptjs"
// import Credentials from "next-auth/providers/credentials"
// import User from "@/model/user"
// import connectDB from "./mongodbConfig"
// import Google from "next-auth/providers/google"

// export const { handlers, signIn, signOut, auth } = NextAuth({
//     providers: [
//         Credentials({
//             credentials: {
//                 email: { label: "email", type: "email" },
//                 password: { label: "password", type: "password" }
//             },
//             authorize: async (credentials) => {

//                 const email = credentials.email as string || undefined
//                 const password = credentials.password as string || undefined


//                 if (!email || !password) {
//                     throw new CredentialsSignin("please provide both email and password")
//                 }

//                 await connectDB()
//                 const user = await User.findOne({ email }).select("+password")

//                 if (!user) {
//                     throw new Error("Invalid email or password")
//                 }

//                 if (!user.password) {
//                     throw new Error("Invalid email or password")
//                 }

//                 const isMatched = await bcrypt.compare(password, user.password)

//                 if (!isMatched) {
//                     throw new Error("Password didnt matched ")
//                 }

//                 const userData = {
//                     id: user._id,
//                     email: user.email,
//                     first_name: user.first_name,
//                     last_name: user.last_name,
//                     github_username: user.github_username
//                 }

//                 return userData

//             }
//         }),
//         Google,
//     ],

//     pages: {
//         signIn: "/login"
//     }
// })
