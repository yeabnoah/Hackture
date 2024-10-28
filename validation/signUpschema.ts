import z from "zod"

export const signUpSchema = z.object({
    firstName: z.string({ invalid_type_error: "please enter correct type for name" }).min(2, "please enter more than 2 letters"),
    lastName: z.string({ invalid_type_error: "please enter correct type for name" }).min(2, "please enter more than 2 letters"),
    email: z.string({ invalid_type_error: "please enter correct type for name" }).email("please enter correct type of email"),
    password: z.string({ invalid_type_error: "please enter correct type for password" })
        .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, { message: "Password must contain at least 8 characters, including uppercase, lowercase, number, and special character." })
})
