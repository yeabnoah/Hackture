"use server"
import { signUpSchema } from "@/validation/signUpschema"
import bcrypt from "bcryptjs"

export const signUpAction = async (formData : FormData) =>{
    const firstName = formData.get("first_name") as string
    const lastName = formData.get("last_name") as string
    const email = formData.get("email") as string
    const githubUsername = formData.get("github_username") as string
    const password = formData.get("password") as string

    const value = signUpSchema.safeParse({
		first_name: firstName,
        last_name: lastName,
        email: email,
        github_username: githubUsername,
        password: password,
    })

	
	

    console.log({
        firstName : firstName,
        lastName : lastName,
        email : email,
        githubUsername : githubUsername,
        password : password

    })

	console.log(value.error?.errors.map(err => err.message))
}
