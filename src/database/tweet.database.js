import mongoose from "mongoose";

const tweetSchema = new mongoose.Schema({
  username: {
    type: String,
    minlength: 5,
    maxlength: 20,
    required: true,
  },
  tweet: {
    type: String,
    minlength: 6,
    maxlength: 255,
    required: true,
  },
  createdAt: {
    type: Date,
    default: () => new Date(),
    immutable: true,
  },
});

export const Tweet = mongoose.model("Tweet", tweetSchema);
