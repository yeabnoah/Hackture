import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
import GitHub from "next-auth/providers/github"
import Credentials from "next-auth/providers/credentials"
import connectDB from "./mongodbConfig"
import User from "@/model/user"
import { compare } from "bcryptjs"

export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [
        Google,
        GitHub,
        Credentials({
            credentials: {
                email: {},
                password: {}
            },

            authorize: async (credentials) => {

                const email = credentials.email as string;
                const password = credentials.password as string

                await connectDB()

                const userExist = await User.findOne({
                    email: email
                })

                if (!userExist) {
                    throw new Error("User not found with this email.")
                }

                if (!userExist.password) {
                    throw new Error("Password not set for this user.")
                }

                const passMatch = await compare(password, userExist.password)

                if (!passMatch) {
                    throw new Error("Invalid password.")
                }

                return userExist
            }
        })
    ],

    callbacks: {
        async signIn({ user, account, profile, email, credentials }) {
            if (account?.provider === "credentials") {
                return true;
            }

            if (account?.provider === "github" || account?.provider === "google") {
                await connectDB()

                const userExists = await User.findOne({
                    email: user.email
                });

                if (userExists) {
                    return true;
                }

                const newUser = await User.create({
                    first_name: user?.name?.split(" ")[0],
                    last_name: user?.name?.split(" ")[1] || "",
                    email: user.email,
                    provider: account.provider,
                    providerId: account.providerAccountId,
                    image: user?.image || "",
                });

                return true;
            }

            return false;
        }
    },

    pages: {
        signIn: "/login"
    }
})
