import { User } from "../database/index.js";

export const signup = (username, avatar) => User.create({ username, avatar });

export const getUser = (username) => User.findOne({ username });

export const getAllUsers = () => User.find({}, { username: 1, avatar: 1, _id: 0 });
