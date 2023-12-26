import { z } from "zod";

const lengthErrorMessage = (min, max) => ({
  message: `O nome deve ter entre ${min} e ${max} caracteres`,
});

export const signupSchema = z.object({
  username: z.string().min(5, lengthErrorMessage(5, 20)).max(20, lengthErrorMessage(5, 20)),
  avatar: z.string().url(),
});
