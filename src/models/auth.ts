import { z } from "zod";

export const AuthSchema = z.object({
  email: z.string().email("Debe ser un email válido"),
  password: z.string().min(6, "La contraseña debe tener al menos 6 caracteres"),
});

export type AuthInput = z.infer<typeof AuthSchema>;
