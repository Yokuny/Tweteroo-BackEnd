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
    const { error } = schema.validate(req[type]);

    if (!error) {
      next();
    } else {
      res.status(400).send({ message: error.details[0].message });
    }
  };
}
