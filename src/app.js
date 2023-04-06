import express from "express";
import body from "body-parser";
import cors from "cors";
const app = express();
app.use(body.urlencoded({ extended: false }));
app.use(body.json());
app.use(cors());

let user = {};
let tweets = [];

const insertUserAvatar = (obj, avatar) => {
  if (obj.length === 0) return obj;
  return obj.map((item) => ({
    username: item.username,
    avatar: avatar,
    tweet: item.tweet,
  }));
};
const pictureValidation = async (url) => {
  try {
    const response = await fetch(url);
    const contentType = response.headers.get("content-type");
    if (response.ok && contentType && contentType.startsWith("image/")) {
      return false;
    }
    return true;
  } catch {
    return true;
  }
};
const reqValidation = (...data) => {
  data.forEach((info) => {
    if (!info) return true;
    if (info.length < 1) return true;
    if (typeof info !== "string") return true;
  });
  return false;
};

app.post("/sign-up", async (req, res) => {
  const { username, avatar } = req.body;
  if (!username || !avatar || reqValidation(username, avatar) || (await pictureValidation(avatar))) {
    return res.status(400).send("Todos os campos são obrigatórios!");
  } else {
    user = { username, avatar };
    return res.status(201).send("OK");
  }
});
app.post("/tweets", (req, res) => {
  const { username, tweet } = req.body;
  if (!username || !tweet || reqValidation(username, tweet))
    return res.status(400).send("Todos os campos são obrigatórios!");
  if (user.username === username) {
    tweets.push({ username, tweet });
    res.status(201).send("OK");
  } else res.status(401).send("É necessário login!");
});
app.get("/tweets", (req, res) => {
  let firstTen = [];
  for (let i = 0; i < tweets.length; i++) {
    if (firstTen.length <= 10) firstTen.push(tweets[tweets.length - i - 1]);
  }
  return res.send(insertUserAvatar(firstTen, user.avatar));
});

app.listen(5000, () => console.log("http://localhost:5000/"));