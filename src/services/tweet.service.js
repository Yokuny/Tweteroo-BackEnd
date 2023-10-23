import * as repository from "../repositories/index.js";
import { insertUserAvatar } from "../utils/index.js";

export const postTweet = async ({ username, tweet }) => {
  const user = repository.getUser(username);
  if (user.length === 0) return "Usuário não existe!";

  return repository.postTweet(user[0].username, tweet);
};

export const getTweets = async (username) => {
  const user = repository.getUser(username);

  if (user.length === 0) return "Usuário não existe!";

  const tenTweets = repository.getTweets();
  const users = repository.getAllUsers();

  return insertUserAvatar(tenTweets, users);
};
