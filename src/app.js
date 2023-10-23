import express from "express";
import body from "body-parser";
import cors from "cors";

import * as routes from "./routes/index.js";

const app = express();
const port = 5002;

app.use(body.urlencoded({ extended: false }));
app.use(body.json());
app.use(cors());

app.use(routes.healthRouter);
app.use(routes.userRouter);
app.use(routes.tweetRouter);

app.listen(port, () => console.log(`http://localhost:${port}/`));