const router = require('express').Router()
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

router.get('/trends', async (req, res, next) => {
  try {
    const id = req.query.woeid
    const trends = await client.get('trends/place.json', {
      id,
    })
    // const user = await roClient.v2.userByUsername('sociophin');
    // console.log(user)
    res.send(trends)
  } catch (error) {
    console.log(error.message)
    console.log(error)
    next(error)
  }
})

// This route gets the WOEID for a particular location (lat/long)
router.get('/near-me', async (req, res, next) => {
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

module.exports = router
