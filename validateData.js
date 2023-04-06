const validateData = (data, fields) => {
  for (const field of fields) {
    if (!data[field] || typeof data[field] !== "string") return false;
  }
  return true;
};
export default validateData;
