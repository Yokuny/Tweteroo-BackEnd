import express from "express";

import { validateBody } from "../middlewares/index.js";
import { signupSchema } from "../schemas/index.js";
import * as controller from "../controllers/user.controller.js";

export const userRouter = express.Router();

userRouter.post("/signup", validateBody(signupSchema), controller.signup);
