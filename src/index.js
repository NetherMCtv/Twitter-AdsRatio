const Twit = require('twit');
require('dotenv').config();

var T = new Twit({
  consumer_key: process.env.API_KEY,
  consumer_secret: process.env.API_KEY_SECRET,
  access_token: process.env.ACCESS_TOKEN,
  access_token_secret: process.env.ACCESS_TOKEN_SECRET,
  timeout_ms: 60 * 1000, // optional HTTP request timeout to apply to all requests.
  strictSSL: true, // optional - requires SSL certificates to be valid.
});

T.get('search/tweets', {
  q: 'a',
  count: 1000,
  exclude_replies: true,
  include_rts: false
}, (err, data, res) => {
  if (err) throw err;

  data.statuses.map(tweet => {
    console.log(tweet.source);
    //if (!tweet.source.includes('Twitter for Advertisers')) return;
  });
});