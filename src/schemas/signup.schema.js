import Joi from "joi";

export const signupSchema = Joi.object({
  username: Joi.string().min(5).max(20).required(),
  avatar: Joi.string().uri().required(),
});
