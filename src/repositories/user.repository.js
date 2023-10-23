let users = [];

export const getUser = (username) => {
  return users.filter((user) => user.username === username);
};

export const signup = (username, avatar) => {
  users.push({ username, avatar });
  return "OK";
};

export const getAllUsers = () => {
  return users;
};
