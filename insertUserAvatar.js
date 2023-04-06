const insertUserAvatar = (obj, avatar) => {
  if (obj.length === 0) return obj;
  return obj.map((item) => ({
    username: item.username,
    avatar: avatar,
    tweet: item.tweet,
  }));
};
export default insertUserAvatar;
