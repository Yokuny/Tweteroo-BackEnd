import * as service from "../services/index.js";

export const postTweet = async (req, res) => {
  const result = await service.postTweet(req.body);

  if (result === "Usuário não existe!") return res.status(403).send({ message: result });

  return res.status(201).send({ message: result });
};

export const getTweets = async (req, res) => {
  const result = await service.getTweets(req.query.username);

  if (result === "Usuário não existe!") return res.status(400).send({ message: result });

  return res.status(200).send(JSON.stringify(result));
};
