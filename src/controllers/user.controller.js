import * as service from "../services/index.js";

export const signup = async (req, res) => {
  const result = await service.signup(req.body);

  if (result === "Avatar inválido!") return res.status(400).send(result);
  if (result === "Usuário já existe!") return res.status(409).send(result);

  return res.status(201).send(result);
};
