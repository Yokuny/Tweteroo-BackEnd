export const insertUserAvatar = (tweets, users) => {
  return tweets.map((tweet) => {
    const user = users.find((user) => user.username === tweet.username);
    return {
      username: tweet.username,
      avatar: user.avatar,
      tweet: tweet.tweet,
    };
  });
};
