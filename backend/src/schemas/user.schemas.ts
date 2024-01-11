import { z } from "zod";
const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*]).{8,}$/

export const registerSchemas = z.object({
    username: z.string().min(5, "The username must be at least 5 characters long"),
    password: z.string().min(8, "The password must be at least 9 characters long").regex(passwordRegex, 
        "The password must contain at least one uppercase letter, one lowercase letter, one number and one special character.")
}) 