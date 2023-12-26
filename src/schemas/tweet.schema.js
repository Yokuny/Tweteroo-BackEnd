import { z } from "zod";

const lengthErrorMessage = (min, max) => ({
  message: `O nome deve ter entre ${min} e ${max} caracteres`,
});

export const tweetSchema = z.object({
  username: z.string().min(5, lengthErrorMessage(5, 20)).max(20, lengthErrorMessage(5, 20)),
  tweet: z.string().min(6, lengthErrorMessage(6, 140)).max(140, lengthErrorMessage(6, 140)),
});
