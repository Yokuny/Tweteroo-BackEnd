export function validateBody(schema) {
  return validate(schema, "body");
}

export function validateParams(schema) {
  return validate(schema, "params");
}

export function validateQuery(schema) {
  return validate(schema, "query");
}

function validate(schema, type) {
  return (req, res, next) => {
    try {
      schema.parse(req[type]);
      next();
    } catch (error) {
      const errArray = error.errors;
      for (const err of errArray) {
        const { path, received, message, expected } = err;

        const paramMessage = type === "query" ? "Na query" : type === "params" ? "Nos params" : "No body";
        const errMessage = `${paramMessage}: '${path}' recebeu '${received}' com erro:'${message}'.
        ${expected ? ` Esperado: '${expected}'` : ""}`;

        return res.status(400).send({ message: errMessage });
      }
    }
  };
}
