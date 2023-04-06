import express from "express";
import body from "body-parser";
import cors from "cors";
const app = express();
app.use(body.urlencoded({ extended: false }));
app.use(body.json());
app.use(cors());

let user = [
  {
    username: "bobesponja",
    avatar:
      "https://cdn.shopify.com/s/files/1/0150/0643/3380/files/Screen_Shot_2019-07-01_at_11.35.42_AM_370x230@2x.png",
  },
];
let tweets = [
  {
    username: "bobesponja",
    tweet: "Eu amo hambúrguer de siri!",
  },
  {
    username: "bobesponja",
    tweet: "patrick star é o melhor amigo que eu poderia ter!",
  },
  {
    username: "bobesponja",
    tweet: "ehhehehehe!",
  },
];

const pictureValidation = async (url) => {
  try {
    const response = await fetch(url);
    const contentType = response.headers.get("content-type");
    if (response.ok && contentType && contentType.startsWith("image/")) {
      return true;
    }
    return false;
  } catch {
    return false;
  }
};
app.post("/sign-up", async (req, res) => {
  const { username, avatar } = req.body;
  if ((await pictureValidation(avatar)) && username.length > 3) {
    user.push({ username, avatar });
    res.send("OK");
  } else {
    res.status(400).send("UNAUTHORIZED");
    console.log("UNAUTHORIZED");
  }
});
app.post("/tweets", (req, res) => {
  const { username, tweet } = req.body;
  if (user.some((user) => user.username === username)) {
    tweets.push({ username, tweet });
    res.send("OK");
  } else {
    res.status(400).send("UNAUTHORIZED");
    console.log("UNAUTHORIZED");
  }
});

app.get("/tweets", (req, res) => {
  if (user.some((user) => user.username === username)) {
    res.status(200).send(tweets);
  } else {
    res.status(400).send("UNAUTHORIZED");
    console.log("UNAUTHORIZED");
  }
});
app.listen(5000, () => {
  console.log("http://localhost:5000/");
});
