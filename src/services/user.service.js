import * as repository from "../repositories/index.js";
import { pictureValidation } from "../utils/index.js";

export const signup = async ({ username, avatar }) => {
  if (await pictureValidation(avatar)) return "Imagem inválida!";

  const user = await repository.getUser(username);
  if (user) return "Usuário já existe!";

  await repository.signup(username, avatar);
  return "Usuário criado com sucesso!";
};
