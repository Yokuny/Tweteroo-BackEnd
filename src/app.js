import express from "express";
import dotenv from "dotenv";
import body from "body-parser";
import cors from "cors";

import { dbConnect } from "./database/db.database.js";
import * as routes from "./routes/index.js";

dotenv.config();
const app = express();

app.use(body.urlencoded({ extended: false }));
app.use(body.json());
app.use(cors());

app.use(routes.healthRouter);
app.use(routes.userRouter);
app.use(routes.tweetRouter);

const port = process.env.PORT;
app.listen(port, () => {
  dbConnect().then(() => console.log(`http://localhost:${port}/`));
});