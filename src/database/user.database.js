import mongoose from "mongoose";

export const userSchema = new mongoose.Schema({
  username: {
    type: String,
    minlength: 5,
    maxlength: 20,
    required: true,
    unique: true,
  },
  avatar: {
    type: String,
    default: "https://i.imgur.com/6VBx3io.png",
  },
});

export const User = mongoose.model("User", userSchema);
