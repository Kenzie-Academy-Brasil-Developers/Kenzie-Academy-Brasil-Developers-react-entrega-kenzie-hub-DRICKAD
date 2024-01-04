import { z } from "zod";

export const FormRegisterSchema = z
.object({
    name: z.string("campo obrigatório").min(1, "campo obrigatório"),
    email: z.string("campo obrigatório").min(1, "campo obrigatório").email("Forneça um e-mail válido"),

    password: z
        .string("campo obrigatório")
        .min(1, "campo obrigatório")
        .min(8, "É necessário pelo menos oito caracteres.")
        .regex(/(?=.*?[A-Z])/, "É necessário pelo menos uma letra maiúscula")
        .regex(/(?=.*?[a-z])/, "É necessário pelo menos uma letra minúscula")
        .regex(/(?=.*?[0-9])/, "É necessário pelo menos um número."),

    confirmPassword: z.string("campo obrigatório").min(1, "campo obrigatório"),
    bio:z.string("campo obrigatório").min(1, "campo obrigatório"),
    contact:z.string("campo obrigatório").min(1, "campo obrigatório"),
    module: z.string("campo obrigatório").min(1, "campo obrigatório"), 
    
})
.refine(({password, confirmPassword}) => password === confirmPassword, { 
    message: "As senhas não correspondem.",
    path: ["confirmPassword"]
})
