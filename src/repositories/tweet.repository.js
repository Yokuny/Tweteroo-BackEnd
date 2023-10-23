let tweets = [];

export const postTweet = (username, tweet) => {
  const newTweet = {
    username,
    tweet,
    date: new Date(),
  };

  tweets.push(newTweet);
  return "OK";
};

export const getTweets = () => {
  let tenTweets = [];
  const lastTweet = tweets.length - 1;

  for (let i = 0; i <= lastTweet; i++) {
    if (tenTweets.length < 10) {
      tenTweets.push(tweets[lastTweet - i]);
    }
  }

  return tenTweets;
};
