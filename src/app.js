import express from "express";
import body from "body-parser";
import cors from "cors";
const app = express();
app.use(body.urlencoded({ extended: false }));
app.use(body.json());
app.use(cors());

import insertUserAvatar from "../insertUserAvatar.js";
import pictureValidation from "../pictureValidation.js";
import validateData from "../validateData.js";

let user = {};
let tweets = [];

app.post("/sign-up", async (req, res) => {
  if (!validateData(req.body, ["username", "avatar"]))
    return res.status(400).send("Todos os campos são obrigatórios!");
  const { username, avatar } = req.body;
  if (await pictureValidation(avatar)) return res.status(400).send("Avatar inválido!");
  user = { username, avatar };
  return res.status(201).send("OK");
});

app.post("/tweets", (req, res) => {
  if (!validateData(req.body, ["username", "tweet"]))
    return res.status(400).send("Todos os campos são obrigatórios!");
  const { username, tweet } = req.body;
  if (user.username !== username) return res.status(401).send("É necessário login!");
  tweets.push({ username, tweet });
  res.status(201).send("OK");
});

app.get("/tweets", (req, res) => {
  let firstTen = [];
  for (let i = 0; i < tweets.length; i++)
    if (firstTen.length < 10) firstTen.push(tweets[tweets.length - i - 1]);
  return res.send(insertUserAvatar(firstTen, user.avatar));
});

app.listen(5000, () => console.log("http://localhost:5000/"));