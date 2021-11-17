const express = require('express');
const createError = require('http-errors');
const morgan = require('morgan');
require('dotenv').config();
const { TwitterApi } = require('twitter-api-v2')

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));

// const client = new Twitter({
//   consumer_key: process.env.TWITTER_CONSUMER_API_KEY,
//   consumer_secret: process.env.TWITTER_CONSUMER_API_SECRET,
//   access_token_key: process.env.TWITTER_ACCESS_TOKEN,
//   access_token_secret: process.env.TWITTER_ACCESS_SECRET,
// })
const Twitter = require('twitter')
// import TwitterApi from 'twitter-api-v2';
// const {TwitterApi} = require('twitter-api-v2')

const client = new Twitter({
  consumer_key: process.env.TWITTER_CONSUMER_API_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_API_SECRET,
  access_token_key: process.env.TWITTER_ACCESS_TOKEN,
  access_token_secret: process.env.TWITTER_ACCESS_SECRET,
})

// const twitterClient = new TwitterApi('AAAAAAAAAAAAAAAAAAAAAKqGVwEAAAAAyfwBxV1rR0aABCViZpnITVQbFas%3DGO1PKudsla6m2JLCyGWZ2QYtCrHiLC6BfQAfbqDpMIdVrmsWEQ');
// const roClient = twitterClient.readOnly;
// To get trending topics...

// app.get('api/trends', async (req, res, next) => {

// })

// This route gets the WOEID for a particular location (lat/long)
app.get('/near-me', async (req, res, next) => {
  try {
    const { lat, long } = req.query
    const response = await client.get('/trends/closest.json', {
      lat,
      long,
    })
    res.send(response)
  } catch (error) {
    console.log(error.message)
    next(error)
  }
})
const twitterClient = new TwitterApi('AAAAAAAAAAAAAAAAAAAAAKqGVwEAAAAAyfwBxV1rR0aABCViZpnITVQbFas%3DGO1PKudsla6m2JLCyGWZ2QYtCrHiLC6BfQAfbqDpMIdVrmsWEQ');
const roClient = twitterClient.readOnly;

app.get('/', async (req, res, next) => {
  res.send({ message: 'Awesome it works 🐻' });
});

app.use('/api', require('./routes/api.route'));

app.get("/api/getTrends", async (req, res) => {
  try {
    const id = 1
    const trends = await client.get('trends/place.json', {
      id,
    })
    res.send(trends)
  } catch (error) {
    console.log(error.message)
    console.log(error)
  }
});
app.get("/api/getUserId/username=:id", async (req, res) => {
  const UserId = req.params.id;
  const user = await roClient.v2.userByUsername(`${UserId}`, { "user.fields": 'created_at,description,entities,id,location,name,pinned_tweet_id,profile_image_url,protected,public_metrics,url,username,verified,withheld' });
  res.send(user);
});
app.get("/api/getUserTimeline/userId=:id", async (req, res) => {
  const UserId = req.params.id;
  const tweetsOfJack = await roClient.v2.userTimeline(`${UserId}`, { exclude: 'replies' });
  res.send(tweetsOfJack);
});
app.get("/api/getUserMentionTimeline/userId=:id", async (req, res) => {
  const UserId = req.params.id;
  const tweetsOfJack = await roClient.v2.userMentionTimeline(`${UserId}`);
  res.send(tweetsOfJack);
});

app.use((req, res, next) => {
  next(createError.NotFound());
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.send({
    status: err.status || 500,
    message: err.message,
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 @ http://localhost:${PORT}`));
