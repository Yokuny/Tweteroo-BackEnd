export const insertUserAvatar = (tweets, users) => {
  const tweetsWithAvatar = [];

  for (const tweet of tweets) {
    for (const user of users) {
      if (tweet.username === user.username) {
        tweetsWithAvatar.push({
          tweet: tweet.tweet,
          username: tweet.username,
          avatar: user.avatar,
        });
        break;
      }
    }
  }

  return tweetsWithAvatar;
};
