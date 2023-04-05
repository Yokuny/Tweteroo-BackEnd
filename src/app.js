import express from "express";
import body from "body-parser";
import cors from "cors";
const app = express();
app.use(body.urlencoded({ extended: false }));
app.use(body.json());
app.use(cors());

let users = [];

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

app.post("/sign-up", (req, res, next) => {
  const { username, avatar } = req.body;
  if (pictureValidation(avatar) && username.length < 3) {
    res.status(400).send("UNAUTHORIZED");
    console.log("UNAUTHORIZED");
  } else {
    users.push({ username, avatar });
    res.send("OK");
    next();
  }
  //   app.post("/tweets", (req, res) => {
  //     /*
  //       (pelo body da request), os parâmetros username e tweet:
  //       {
  //           username: "bobesponja",
  //           tweet: "Eu amo hambúrguer de siri!"
  //       }
  //       []Salvar esse tweet num array de tweets do servidor
  //       */
  //     res.send("OK");
  //   });
});
app.get("/tweets", (req, res) => {
  /*[]Retornar os 10 últimos tweets publicados
    [
    	{
    		username: "bobesponja",
    		avatar: "https://link.png",
    		tweet: "Eu amo hambúrguer de siri!"
    	}
    ]
    []  Caso não tenha nenhum tweet cadastrado, retorna um array vazio
*/
});
app.listen(5000, () => {
  console.log("http://localhost:5000/");
});
