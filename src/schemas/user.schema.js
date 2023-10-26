import Joi from "joi";

export const userSchema = Joi.object({
  username: Joi.string().min(5).max(20).required(),
});
