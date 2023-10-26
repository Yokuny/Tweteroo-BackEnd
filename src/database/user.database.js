import mongoose from "mongoose";

export const userSchema = new mongoose.Schema({
  username: String,
  avatar: String,
});

export const User = mongoose.model("User", userSchema);
