const query = require('./helpers/queryStrings')
const param = require('./helpers/twitParams')
const s = require('./helpers/search')
const r = require('./helpers/retweet')
const f = require('./helpers/favorite')

// console.log(param)
// console.log(query)

s
  .then(data => {
    console.log(`SEARCH RESULT`, data)
  })
  .catch(err => {
    console.log(err)
  })

r
  .then(data => {
    console.log(`RETWEET RESULT`, data)
  })
  .catch(err => {
    console.log(err)
  })

f
  .then(data => {
    console.log(`FAVORITE RESULT`, data)
  })
  .catch(err => {
    console.log(err)
  })

// newSearch()
// setTimeout(newSearch, 500)
// favoriteTweet()
// setInterval(favoriteTweet, 1000)
// reTweet()
// setInterval(reTweet, 1000)
