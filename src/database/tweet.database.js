import mongoose from "mongoose";

const tweetSchema = new mongoose.Schema({
  username: String,
  tweet: String,
  createdAt: Date,
});

export const Tweet = mongoose.model("Tweet", tweetSchema);
