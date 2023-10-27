import express from "express";

import { validateBody, validateQuery } from "../middlewares/index.js";
import { tweetSchema, userSchema } from "../schemas/index.js";
import * as controller from "../controllers/tweet.controller.js";

export const tweetRouter = express.Router();

tweetRouter.post("/tweet", validateBody(tweetSchema), controller.postTweet);
tweetRouter.get("/tweets", validateQuery(userSchema), controller.getTweets);