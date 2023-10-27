import * as repository from "../repositories/index.js";
import { insertUserAvatar } from "../utils/index.js";

export const postTweet = async ({ username, tweet }) => {
  const user = await repository.getUser(username);
  if (!user) return "Usuário não existe!";

  await repository.postTweet(user.username, tweet);

  return "Tweet criado com sucesso!";
};

export const getTweets = async (username) => {
  const user = await repository.getUser(username);
  if (!user) return "Usuário não existe!";

  const tenTweets = await repository.getTweets();
  const users = await repository.getAllUsers();

  return insertUserAvatar(tenTweets, users);
};
