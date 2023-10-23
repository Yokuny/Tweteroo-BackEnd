import * as repository from "../repositories/index.js";
import { pictureValidation } from "../utils/index.js";

export const signup = async ({ username, avatar }) => {
  if (await pictureValidation(avatar)) return "Imagem inválida!";

  const user = repository.getUser(username);
  if (user.length > 0) return "Usuário já existe!";

  return repository.signup(username, avatar);
};
