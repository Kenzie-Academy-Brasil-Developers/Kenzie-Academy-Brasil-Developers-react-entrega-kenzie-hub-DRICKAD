import { z } from "zod";

export const FormLoginSchema = z.object({
    email: z.string().min(1, "digite seu endereço de email").email("Forneça um e-mail válido"),
    password: z.string("Campo obrigatório").min(1, "digite a sua senha")
})