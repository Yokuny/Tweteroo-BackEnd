import { Tweet } from "../database/index.js";

export const postTweet = (username, tweet) => Tweet.create({ username, tweet, createdAt: new Date() });

export const getTweets = () => Tweet.find({}, { username: 1, tweet: 1, _id: 0 }).sort({ createdAt: -1 }).limit(15);
