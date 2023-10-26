import Joi from "joi";

export const tweetSchema = Joi.object({
  username: Joi.string().min(5).max(20).required(),
  tweet: Joi.string().min(6).max(255).required(),
});
