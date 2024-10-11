import NextAuth from "next-auth"
import bcrypt from "bcryptjs"

export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [
        Credentials({
            credentials: {
                email: {},
                password: {}
            }
        }

        authorize : async (credentials) => {
            let user ZZZZZZ

            const user

        }

        )
    ],
})
