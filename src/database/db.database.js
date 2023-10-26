import mongoose from "mongoose";

const uri = process.env.MONGODB_URI || "mongodb://localhost:27017/tweteroo";

export const dbConnect = async () => {
  try {
    await mongoose.connect(uri);
  } catch (error) {
    console.error("<> Database error <>", error);
  }
};
